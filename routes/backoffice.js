/**
 * Imports
 */
const express = require("express");
const xlsx = require("xlsx");
const fs = require("fs");
const multer = require("multer");
const { getUniquePolices } = require("../getUniquePolices");
/**
 * Constants
 */
const router = express.Router();
const TEMP_DIR_PATH = "./tmp";
const PERM_DIR_PATH = "./uploads";
const POLICY_DIR_PATH = "./policies";

/**
 * Functions
 */

const createDIR = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
};

createDIR(TEMP_DIR_PATH);
createDIR(PERM_DIR_PATH);
createDIR(POLICY_DIR_PATH);

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, TEMP_DIR_PATH);
  },
  filename: function (req, file, cb) {
    const { fieldname } = file;
    cb(null, FILE_FORMAT(fieldname, file));
  },
});

let upload = multer({ storage: storage });
const FILE_FORMAT = (fieldname, file) => `${fieldname}-${file.originalname}`;

const deleteAllContentFromDir = (path) => {
  let files;
  try {
    files = fs.readdirSync(path);
  } catch (e) {
    console.error(e.message);
    return;
  }
  for (const file of files) {
    try {
      fs.unlinkSync(`${path}/${file}`);
    } catch (e) {
      console.error(e.message);
    }
  }
};

const deleteFile = (path) => {
  fs.unlinkSync(path);
};

const deleteAllFiles = (path, files) => {
  files.forEach((file) => {
    deleteFile(`${path}/${file}`);
  });
};

const saveSheetToJson = (worksheet, path, filename, timeStamp) => {
  let json = xlsx.utils.sheet_to_json(worksheet);

  fs.writeFileSync(
    `${path}/${timeStamp}-${filename}.json`,
    JSON.stringify(json)
  );
};

const proccessFile = (file, originalName) => {
  const workbook = xlsx.readFile(file);
  const workbookSheets = workbook.SheetNames;
  const timeStamp = Date.now();
  let name = originalName.split(".").slice(0, -1).join(".");

  workbookSheets.forEach((workbookSheet) => {
    const worksheet = workbook.Sheets[workbookSheet];

    saveSheetToJson(
      worksheet,
      PERM_DIR_PATH,
      workbookSheet,
      `${timeStamp}-${name}`
    );
  });
};

const getFilesFromDir = (path) => {
  return fs.readdirSync(path);
};

router.post("/upload_files", upload.fields([{ name: "file" }]), (req, res) => {
  const file = req.files.file[0];

  try {
    const currentFiles = getFilesFromDir(PERM_DIR_PATH);
    proccessFile(
      `${TEMP_DIR_PATH}/${file.fieldname}-${file.originalname}`,
      file.originalname
    );
    // proccessFile(path, file.originalname);
    deleteAllContentFromDir(TEMP_DIR_PATH);
    deleteAllFiles(PERM_DIR_PATH, currentFiles);
    res.status(200).send({ message: "Files has been uploaded" });
  } catch (e) {
    res.status(500).send({
      message: "The was an error during the upload. Please try again later.",
    });
    return;
  }

  getUniquePolices();
});

router.get("/metadata", (req, res) => {
  const files = fs.readdirSync(PERM_DIR_PATH);
  if (files.length === 0) {
    res.status(404).json({});
    return;
  }
  const file = files[0];
  const stats = fs.statSync(`${PERM_DIR_PATH}/${file}`);
  let fileName = file.split("-").slice(1, -1).join("-");

  let day = stats.birthtime.getDate();
  let month = stats.birthtime.getMonth() + 1;
  let year = stats.birthtime.getFullYear();

  const date = `${day}/${month}/${year}`;

  const obj = {
    fileName,
    birthtime: date,
  };

  res.status(200).json(obj);
});

const determineFile = (content) => {
  switch (Object.keys(content).length) {
    case 4:
      return "dBusCaps";
    case 5:
      return "dPubSer";
    default:
      return "abb";
  }
};

const readPerFile = (file) => {
  let fileContent = fs.readFileSync(file);
  fileContent = JSON.parse(fileContent);

  return fileContent;
};

router.get("/get-files", (req, res) => {
  const files = fs.readdirSync(PERM_DIR_PATH);
  const filesContent = {};

  try {
    files.forEach((file) => {
      const content = readPerFile(`${PERM_DIR_PATH}/${file}`);
      const type = determineFile(content[0]);
      filesContent[type] = content;
    });
    res
      .status(200)
      .send(
        createBcListObject(
          filesContent.abb,
          filesContent.dPubSer,
          filesContent.dBusCaps
        )
      );
    // res.status(200).send(filesContent);
  } catch (e) {
    res.status(500).send({ message: "Failed" });
  }
});

router.get("/get-files-old", (req, res) => {
  const files = fs.readdirSync(PERM_DIR_PATH);
  const filesContent = {};

  try {
    files.forEach((file) => {
      const content = readPerFile(`${PERM_DIR_PATH}/${file}`);
      const type = determineFile(content[0]);
      filesContent[type] = content;
    });
    res.status(200).send(filesContent);
  } catch (e) {
    res.status(500).send({ message: "Failed" });
  }
});

router.get("/get-policies", (req, res) => {
  let file;
  try {
    file = fs.readFileSync(`${POLICY_DIR_PATH}/policies.json`);
  } catch (e) {
    console.error(e);
    return res.status(500).send("Unable to get polices");
  }

  try {
    file = JSON.parse(file);
  } catch (e) {
    console.error(e);
    return res.status(500).send("Unable to get polices");
  }

  return res.status(200).json(file);
});

module.exports = router;

// ========================================================================================
/**
 *
 * Create an object from the array of DPS
 */
let groupDPSsByID = (array) => {
  return array.reduce((obj, item) => {
    let id = item.ID.toString();
    let policy = item.Policy.trim().toLowerCase().replace(/ /g, " ");
    let name = item.Name.toString();
    let description = (item.Description || "").trim();
    let abbs = [];
    let dBCs = [];

    if (
      item["Digital_Business_Capability"] &&
      item["Digital_Business_Capability"] !== null
    ) {
      let tempDBCS = item["Digital_Business_Capability"].toString().trim();
      dBCs = tempDBCS.split(";").filter(Boolean);

      dBCs = dBCs.filter((bc) => {
        if (!bc.startsWith("BA") && policy.toLowerCase() === "business agnostic")
          return false;
        return true;
      });
    }

    let tempObj = {
      [id]: {
        id,
        policy,
        name,
        description,
        dBCs,
        abbs,
      },
    };

    return { ...obj, ...tempObj };
  }, {});
};
/**
 *
 * Create an object from the array of ABBS
 */
let groupABBByID = (array) => {
  return array.reduce((obj, item) => {
    let id = item.ID.toString();
    let policy = item.Policy.trim().toLowerCase().replace(/ /g, " ");
    let view = item.View.trim()
      .split("-")
      .map((str) => str.toLowerCase())
      .map((str) => str.trim())
      .join("-");
    let area = item.Area.trim();

    let abb = item["Architecture_Building_Block"].trim();
    let description = (item.Description || "").trim();
    let ability = null;
    let successors = [];
    let digPubServ = [];
    let specificQuestion = item.Specific_question_per_EIRAABB || "";
    let artificialIntelligence = item.BABC5_Artificial_Intelligence || "";
    let digitalCommunication = item.BABC6_Digital_Communication || "";
    let dataManagement = item.BABC9_Data_Management || "";
    let caseWorkflowManagement = item.BABC12_Case_and_Workflow_management || "";
    let electronicIdentification = item.BABC1_Electronic_identification || "";
    let nonApplicable = item.Falset_Applicable;
    

    if (item.successors !== undefined && item.successors !== null) {
      let tempSuccessors = item.successors.toString();
      successors = tempSuccessors.split(";");
    }

    if (
      item["Digital_Public_Service"] !== undefined &&
      item["Digital_Public_Service"] !== null
    ) {
      let tempDPS = item["Digital_Public_Service"].toString();
      digPubServ = tempDPS.split(";");
      digPubServ = digPubServ.filter((dps) => {
        if (!dps.startsWith("BA") && policy.toLowerCase() === "business agnostic")
          return false;
        return true;
      });
    }

    let tempObj = {
      [id]: {
        id,
        policy,
        view,
        area,
        abb,
        description,
        ability,
        successors,
        digPubServ,
        specificQuestion,
        artificialIntelligence,
        digitalCommunication,
        dataManagement,
        caseWorkflowManagement,
        electronicIdentification,
        nonApplicable,
      },
    };

    if (policy === "business agnostic") {
      for (let x in viewsInfra) {
        if (viewsInfra[x].name == view) {
          viewsInfra[x].bbs.push(tempObj);
          break;
        }
      }
    }

    return { ...obj, ...tempObj };
  }, {});
};
/**
 *
 * Create an object from the array of dBusCaps
 */
let groupBCByID = (array) => {
  return array.reduce((obj, item) => {
    let id = item.ID.toString().trim();
    let policy = item.Policy.trim();
    let name = item.Name.trim();
    let description = item.Description.toString().trim();
    let abbs = [];
    let dps = [];
    let views = [];
    let priority = null;
    let avgAbility = null;

    obj[id] = {
      id,
      policy,
      name,
      description,
      views,
      priority,
      avgAbility,
      abbs,
      dps,
    };

    return obj;
  }, {});
};

/**
 * Create the bcList object and also the relations
 */
const createBcListObject = (inputBBJSON, inputDPSJSON, inputBCJSON) => {
  let ABBs = groupABBByID(inputBBJSON);
  let DPSs = groupDPSsByID(inputDPSJSON);
  let DBCs = groupBCByID(inputBCJSON);

  let tempDPSs = { ...DPSs };
  let tempDBCs = { ...DBCs };
  const ABBArray = Object.values(ABBs);
  const DPSArray = Object.values(DPSs);
  const DBCArray = Object.values(DBCs);

  DPSArray.forEach((dps) => {
    const { id } = dps;

    ABBArray.forEach((abb) => {
      if (abb.digPubServ.indexOf(id) > -1) tempDPSs[id].abbs.push(abb);
    });
  });

  DBCArray.forEach((dbc) => {
    const { id } = dbc;

    DPSArray.forEach((dps) => {
      if (dps.dBCs.indexOf(id) > -1) tempDBCs[id].dps.push(dps);
    });
  });

  Object.values(tempDBCs).forEach((bc) => {
    let abbs = [];
    const { dps, id } = bc;
    dps.forEach((dp) => {
      const { abbs: bbs } = dp;
      abbs = [...abbs, ...bbs];
    });
    abbs = [...new Set(abbs)];
    tempDBCs[id].abbs = abbs;
  });
  
  return tempDBCs;
};
