const fs = require("fs");
const PERM_DIR_PATH = "./uploads";
const POLICY_DIR_PATH = "./policies";

const getFilesFromDir = (path) => {
  return fs.readdirSync(path);
};

const getUniquePolices = () => {
  const fileNames = getFilesFromDir(PERM_DIR_PATH);

  const policies = new Set();

  for (let fileName of fileNames) {
    let fileContent;

    try {
      fileContent = fs.readFileSync(`${PERM_DIR_PATH}/${fileName}`);
    } catch (e) {
      console.error(e);
      continue;
    }

    try {
      fileContent = JSON.parse(fileContent);
    } catch (e) {
      console.error(e);
      continue;
    }

    fileContent
      .map((file) => file.Policy)
      .forEach((policy) => {
        policies.add(policy.trim());
      });
  }

  try {
    fs.writeFileSync(
      `${POLICY_DIR_PATH}/policies.json`,
      JSON.stringify([...policies])
    );
    
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getUniquePolices,
};
