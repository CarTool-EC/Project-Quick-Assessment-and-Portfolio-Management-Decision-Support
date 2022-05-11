import "regenerator-runtime/runtime";

let csvResults;
let demo = true;
google.charts.load("current", {
  packages: ["corechart", "controls"],
});
let chartBubble;
let data;
let dashboard;
let selectedValue;
let network = null;
let DPSnetwork = null;
let DPSNetNodes;
let network2 = null;
let network2Nodes;
let toogleInfra = true;
let busOrientation = 1;
let bcList = {};
let customBBs = [];
let DPSs = {};
let viewsInfra = [];
let viewBCmc = [];
let selectedView = [];
const idBCdom = 1;
const idBCinf = 2;
const idLdom = 3;
const idOdom = 4;
const idSdom = 5;
const idTAdom = 6;
const idTIdom = 7;
const idLinf = 8;
const idOinf = 9;
const idSinf = 10;
const idTAinf = 11;
const idTIinf = 12;
let selectedBC;
let clickedBC;
let clickedDPSs = [];
let maxBudget = 0;
let currentBBTableBody;

let fileContent = {};
let inputBCJSON;
let inputBBJSON;
let inputDPSJSON;
const hAxisLabes = {
  1: "Strategy Fit",
  5: "Expected Public Value",
};

const policyColors = {
  health: "#e74a3b",
  tax: "#4e73df",
  "business agnostic": "#1cc88a",
  infrastructure: "#1cc88a",
};
const policyColorsWithOpacity = {
  health: "#e74a3b80",
  tax: "#4e73df80",
  "business agnostic": "#1cc88a80",
  infrastructure: "#1cc88a80",
};

const policyImages = {
  health: "../img/health.png",
  tax: "../img/tax.png",
  "business agnostic": "../img/tech.png",
};

const natDigStrategicFitTooltip = `Score assigned to the project`;

const expPubValueTooltip = `Score assigned to the To-Be benefits, costs discounted, provided by the Target Efficacy`;

const abToSuppDbusCapTooltip = `Score assigned to the As-Is efficacy of the concerned capability`;

const budgetTooltip = `Estimated capital successfully implementing the gap Status-quo vs. Target Efficacies`;

const optimalAvgTooltip = `Score assigned to the To-Be target prospective efficacy of the concerned capability`
/**
 *
 * Create an object from the array of DPS and group them by id
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
 * Create an object from the array of ABBs and group them by id
 */
let groupABBByID = (array) => {
  return array.reduce((obj, item) => {
    let id = item.ID.toString();
    let policy = item.Policy.trim().toLowerCase();
    let policyToCompare = policy.split(" ").filter(Boolean).join("-");

    let view = item.View.split(" ")
      .filter((v) => v.toLowerCase() !== "view")
      .filter(Boolean)
      .join("")
      .toLowerCase();
    let area = item.Area.trim()
      .split("-")
      .filter(Boolean)
      .map((str) => str.trim())
      .map((str) => str.toLowerCase())
      .join("-");
    let abb = item["Architecture_Building_Block"].trim();
    let description = (item.Description || "").trim();
    let ability = null;
    let successors = [];
    let digPubServ = [];

    if (item.successors !== undefined && item.successors !== null) {
      let tempSuccessors = item.successors.toString();
      successors = tempSuccessors.split(";").filter(Boolean);
    }

    if (
      item["Digital_Public_Service"] !== undefined &&
      item["Digital_Public_Service"] !== null
    ) {
      let tempDPS = item["Digital_Public_Service"].toString();
      digPubServ = tempDPS.split(";").filter(Boolean);
    }

    let abbObject = {
      id,
      policy,
      view,
      area,
      abb,
      description,
      ability,
      successors,
      digPubServ,
    };

    let tempObj = {
      [id]: abbObject,
    };

    if (policyToCompare === "business-agnostic") {
      for (let x in viewsInfra) {
        if (viewsInfra[x].name == view) {
          viewsInfra[x].bbs.push(abbObject);
          break;
        }
      }
    }

    return { ...obj, ...tempObj };
  }, {});
};

/**
 *
 * Create an object from the array of dBusCaps and group them by id
 */
let groupBCByID = (array) => {
  return array.reduce((obj, item) => {
    let id = item.ID.toString().trim();
    let policy = item.Policy.trim();
    let name = item.Name.trim();
    let description = item.Description.toString().trim();
    let bbs = [];
    let dps = [];
    let views = [];
    let view0 = createView("legal", idLdom, policy);
    let view1 = createView("organisational", idOdom, policy);
    let view2 = createView("semantic", idSdom, policy);
    let view3 = createView("technical-application", idTAdom, policy);
    let view4 = createView("technical-infrastructure", idTIdom, policy);
    let priority = null;
    let avgAbility = null;
    let prospectiveAbility = null;

    views.push(view0);
    views.push(view1);
    views.push(view2);
    views.push(view3);
    views.push(view4);

    obj[id] = {
      id,
      policy,
      name,
      description,
      views,
      priority,
      avgAbility,
      bbs,
      dps,
      prospectiveAbility,
    };

    return obj;
  }, {});
};

// *********************************************************
// PDF Creation Functionality (with jspdf & jspdf.autotalbe)
// *********************************************************

/**
 * Adds the explanatory texts in the PDF
 * 
 * @param {Object} pdf PDF Object
 * @param {Number} startX x coordinate  
 * @param {Number} startY y coordinate
 * @param {Number} sentenceNum key for the addExplanatoryText
 */
function addExplanatoryText(pdf, startX, startY, sentenceNum) {
  const explanatorySentences = {
    1: ["The quadrant represents the", 
        "scores assigned to the evaluated digital",
        "business capability/ies, according to the",
        "following parameters:",
        "   • National Strategy Fit",
        "   • Ability to support the dBusCap",
        "   • Target Perspective Ability to Support",
        "     dBusCap",
        "   • Expected Public Value and the",
        "   • Estimated budget (in millions EUR)",],
    2: ["In addition to the information visible from the quadrant, in the following table you can find a summary of the Capability ",
        "Assessment Results. In particular, the below table shows the current MS's ability to support the evaluated digital ",
        "business capability/ies and the target ability to support the evaluated digital business capabilities. As a result, the ",
        "estimated budget aims to fulfil the GAP between the 'AS IS ability' and the target prospective ability. Moreover, the ",
        "scores are reported per area/view (legal, organisation, semantic, technical-application and technical infrastructure).",
        "Finally, you find a summary of the assigned parameters (National Digital fit, Expected Public Value and Estimated ",
        "Budget) to evaluated digital business capability/ies."],
    3: ["The following table sumarises the selected digital business capabilities"],
    4: ["Below, you have a summary table and a graphical representation of all the Digital Public Services in",
        "scope, meaning the ones supporting the selected digital business capability"],
    5: ["The following graph represents the MS's Digital Transformation Roadmap, by which the user can",
        "select the different orientation for the implementation of the selected digital bysiness capability"],
    6: ["The following table summarises the selected digital business capabilities"],
    7: ["Below you can see the graphical representation of the functionalities (i.e. Skills, expertise, experience",
        "etc.) supporting the selected digital business capability, based on the MS's orientation (legal,",
        "organizational, semantic and technical) priority chosen. The content of the nodes (expressed by the",
        "blue color) is variable because it reflects the relation between the ABBs and the ability to support",
        "the selected Digital Business Capability"],
    8: ["The following is a table containing the list of the functionalities (i.e. Skills, expertise, experience, etc.)",
        "needed to implement the selected Digital Business Capability"],
  };

  // Gap between lines
  let lineGap;
  // set font parameters
  if(sentenceNum === 2){
    pdf.setFontSize(10);
    lineGap = 5;
  } else {
    pdf.setFontSize(12);
    lineGap = 7;
  }
  pdf.setFontType('italic');
  pdf.setTextColor(0, 0, 0); // black

  // Add the sentences into the PDF
  let text = explanatorySentences[sentenceNum];
  let y = startY;
  for( let i = 0; i < text.length; i++) {
    pdf.text(text[i], startX, y);
    y = y + lineGap;
  }
}

/**
 * Creates the header and footer for the PDF
 * 
 * @param {*} pdf PDF Object
 * @param {*} title PDF's title
 */
function addPageTemplate(pdf, titleNum) {
  // Title's object
  const titleInfo ={
    1: {title: "Introduction", coordinates: [88, 20]},
    2: {title: "Portfolio Management Decision Support", coordinates: [45, 20]},
    3: {title: "Digital Transformation Roadmap Decision Support", coordinates: [30, 20]},
    4: {title: "eGovERA© Building Blocks", coordinates: [65,20]},
  };
  
  // Add top right icon
  const rightIcon = new Image();
  rightIcon.src = "../img/ec2.png";
  const rightIconCoords = [180, 1, 25, 18]; // x, y, width, height
  pdf.addImage(rightIcon,'png', ...rightIconCoords);

  // Add top left icon and sentence
  const leftIcon = new Image();
  leftIcon.src = "../img/egovera-icon2.png";
  const leftIconCoords = [4, 2, 12, 11];
  pdf.addImage(leftIcon, 'png', ...leftIconCoords);
  const topSentCoords = [15, 10]; // x, y
  const topSentence = "eGovERA ©";
  pdf.setTextColor(0, 0, 0); // black
  pdf.setFontType('normal');
  pdf.setFontSize(15);
  pdf.text(topSentence, ...topSentCoords);

  // Add bottom left sentence
  const leftSentCoords = [10, 292]; // x, y
  const leftSentence = "Copyright © European Commission 2022";
  pdf.setFontSize(10);
  pdf.setTextColor(192, 192, 192);
  pdf.setFontType('italic');
  pdf.text(leftSentence, ...leftSentCoords);

  // Add bottom right sentence and underline
  const rightSentCoords = [160, 292]; // x, y
  const rightSentence = "ISA product license v1.4";
  pdf.setFontSize(10);
  pdf.setTextColor(102, 178, 255); // light blue
  pdf.text(rightSentence, ...rightSentCoords);
  pdf.setLineWidth(0.1);
  pdf.setDrawColor(102, 178, 255); // light blue
  pdf.line(160, 293, 198, 293) // startX, startY, endX, endY

  // Add title
  const titleCoords = titleInfo[titleNum].coordinates;
  const titleSentence = titleInfo[titleNum].title;
  pdf.setFontSize(17);
  pdf.setTextColor(0, 153, 0); // green
  pdf.setFontType('bold');
  pdf.text(titleSentence, ...titleCoords);
}

/**
 * Creates the Introductory Page for the PDF
 * 
 * @param {Object} pdf PDF Object
 */
function addIntroductoryPage(pdf) {
  //pdf.addPage();
  addPageTemplate(pdf, 1);

  // Add sentence1
  const sentence1 = "DG DIGIT";
  const sentence1Coords = [90, 60];
  pdf.setFontSize(20);
  pdf.setTextColor(0, 0, 0); // black
  pdf.setFontType('bold');
  pdf.text(sentence1, ...sentence1Coords);

  // Add sentence2
  const sentence2 = "Unit.D2";
  const sentence2Coords = [93, 70];
  pdf.text(sentence2, ...sentence2Coords);

  // Add sentence3
  const sentence3 = "eGovERA © portal";
  const sentence3Coords = [52, 100];
  pdf.setFontSize(35);
  pdf.setTextColor(51, 153, 255); // blue
  pdf.text(sentence3, ...sentence3Coords);

  // Add sentence4
  const sentence4 = "Decision support section";
  const sentence4Coords = [49, 130];
  pdf.setTextColor(0, 153, 0); // light green
  pdf.setFontSize(27);
  pdf.text(sentence4, ...sentence4Coords);

  // Add sentence5
  const sentence5 = "PDF export results";
  const sentence5Coords = [65, 145];
  pdf.text(sentence5, ...sentence5Coords);

  // Add user's information 
  pdf.setTextColor(0 ,0, 0); // black
  pdf.setFontSize(12);
  pdf.setFontType('bold');
  pdf.text("User name and surname:", 10, 250);
  pdf.text("Organisation:", 10, 258);
  pdf.text("Country:", 10, 266);
  pdf.text("Contact E-mail:", 10, 274);
  pdf.setFontType('normal');
  pdf.text(fileContent.fullName, 62, 250);
  pdf.text(fileContent.organisation, 39, 258);
  pdf.text(fileContent.country, 29, 266);
  pdf.text(fileContent.email, 43, 274);
}

// Start the loading functionality for the PDF Download button
function startLoader(textId, buttonId) {
  document.querySelector(`#${textId}`).classList.add('download-btn-text-hidden');
  document.querySelector(`#${buttonId}`).classList.add('button-loader');
}

// Stop the loading functionality for the PDF Download button
function stopLoader(textId, buttonId) {
  document.querySelector(`#${textId}`).classList.remove('download-btn-text-hidden');
  document.querySelector(`#${buttonId}`).classList.remove('button-loader');
}

// When the pdf download button is clicked
document.getElementById('pdfButton').addEventListener('click', createPDF);

/**
 * Structure the PDF
 */
function createPDF() {
  // Create the PDF Object
  var pdf = new jsPDF();
  var pdfName = 'decision-support.pdf';

  startLoader("pdfButtonTxt", "pdfButton");

  // Add to the PDF Object the Portfolio Management Table and Graph
  html2canvas(document.querySelector('[aria-label="A chart."]')).then(canvas => {
    if(!(canvas.height === 0) && !(canvas.width === 0)) {

      addIntroductoryPage(pdf);

      // Add the Graph of the Portofolio Management Section
      pdf.addPage();
      addPageTemplate(pdf, 2);
      addExplanatoryText(pdf, 15, 55, 1);
      addExplanatoryText(pdf, 15, 160, 2);
      let img = canvas.toDataURL('image/url');
      pdf.addImage(img, 'png', 95, 30, 105, 120);

      // Add the Table of the Portofolio Management Section
      var titles = [
        ["ID"], 
        ["Policy Domain"], 
        ["Digital Business Capability"], 
        ["National Digital Strategy Fit"], 
        ["Target Prospective Ability to support the dBusCap"],
        ["Estimated budget (in millions EUR)"], 
        ["Expected Public Value"], 
        ["Overall ability to support the dBusCap"],
        ["View Name"],
        ["Ability to support the dBusCap per view"]
      ];

      // If dBusCap selected
      let currentBcList;
      if (selectedValue) {
        currentBcList = {[selectedValue]: bcList[selectedValue]};
      } else {
        currentBcList = bcList;
      }

      let data = [];
      let count = 0;
      // Populate the rows of the table
      for(let key in currentBcList) {
        for(let viewKey in currentBcList[key]['views']){
          let row = [
            currentBcList[key]['views'][viewKey]['name'],
            currentBcList[key]['views'][viewKey]['avgAbility'],
          ];
          if(count % 5 === 0) {
            row.unshift({
              rowSpan: 5,
              content: currentBcList[key]['id'],
              styles: {valign: 'middle', halign: 'center'},
            }, {
              rowSpan: 5,
              content: currentBcList[key]['policy'],
              styles: {valign: 'middle', halign: 'center'},
            }, {
              rowSpan: 5,
              content: currentBcList[key]['name'],
              styles: {valign: 'middle', halign: 'center'},
            }, {
              rowSpan: 5,
              content: currentBcList[key]['prospectiveAbility'],
              styles: {valign: 'middle', halign: 'center'},
            }, {
              rowSpan: 5,
              content: currentBcList[key]['priority'],
              styles: {valign: 'middle', halign: 'center'},
            }, {
              rowSpan: 5,
              content: currentBcList[key]['budget'],
              styles: {valign: 'middle', halign: 'center'},
            }, {
              rowSpan: 5,
              content: currentBcList[key]['expRandom'],
              styles: {valign: 'middle', halign: 'center'},
            }, {
              rowSpan: 5,
              content: currentBcList[key]['avgAbility'],
              styles: {valign: 'middle', halign: 'center'},
            }
          );
          }
          data.push(row);
          count++;
        }
      }
      pdf.autoTable(
        titles,
        data,
        {
          columnStyles: {
            0: {cellWidth: 17},
            1: {cellWidth: 16},
            2: {cellWidth: 16},
            3: {cellWidth: 16},
            4: {cellWidth: 18},
            5: {cellWidth: 18},
            6: {cellWidth: 19},
            7: {cellWidth: 20},
            8: {cellWidth: 25},
            9: {columnWidth: 14},
          },
          theme: 'grid',
          headStyles: {fillColor: [8, 161, 88], fontSize: 7, halign: 'center', valign: 'middle',},
          margin: {right: 20},
          startY: 200,
          margin: {top: 30},
          didDrawPage: function() { addPageTemplate(pdf, 2) },
        }
      );

      // Add the Information for the first section of the Digital Transformation Roadmap
      html2canvas(document.querySelector('#dps-network-info')).then(canvas => {
        if(!(canvas.height === 0) && !(canvas.width === 0)) {
          pdf.addPage();
          addPageTemplate(pdf, 3);
          addExplanatoryText(pdf, 15, 35, 3);
          addExplanatoryText(pdf, 15, 93, 4);

          var titles1 = [
            ["Selected Digital Business Capability"]
          ];
          var titles2 = [
            ["Table of Digital Public Services in scope"]
          ];
          var data1 = [
            [   
              document.getElementById("dps-network-bc-info").getElementsByTagName('p')[0].textContent.split(":")[0],
              document.getElementById("dps-network-bc-info").getElementsByTagName('p')[0].textContent.split(":")[1],
            ],
            [
              document.getElementById("dps-network-bc-info").getElementsByTagName('p')[1].textContent.split(":")[0],
              document.getElementById("dps-network-bc-info").getElementsByTagName('p')[1].textContent.split(":")[1],
            ],
            [
              document.getElementById("dps-network-bc-info").getElementsByTagName('p')[2].textContent.split(":")[0],
              document.getElementById("dps-network-bc-info").getElementsByTagName('p')[2].textContent.split(":")[1],
            ],
            [
              document.getElementById("dps-network-bc-info").getElementsByTagName('p')[3].textContent.split(":")[0],
              document.getElementById("dps-network-bc-info").getElementsByTagName('p')[3].textContent.split(":")[1],
            ],
          ];
          var data2 = [];
          let liItemsArr = [];
          var liItems = document.getElementById("dps-select-info").getElementsByTagName('li');
          for (let i = 0; i < liItems.length; i++) {
            if (clickedDPSs.length !== 0) {
              let id = liItems[i].textContent.split("-")[0].trim()
              for (let j = 0; j < clickedDPSs.length; j++){
                if (id === clickedDPSs[j]){
                  liItemsArr.push(liItems[i].textContent);
                }
              }
            } else {
              liItemsArr.push(liItems[i].textContent);
            }
          }

          // Create rows of three liItems
          let num = 0;
          for (let i = 0; i < Math.floor(liItemsArr.length / 3) + 1; i++){
            let currRow = [];
            for (let j = 0; j < 3; j++){
              if (num < liItemsArr.length){
                currRow.push(liItemsArr[num]);
              }
              num += 1;
            }
            if(currRow.length > 0){
              data2.push(currRow);
            }
          }

          pdf.autoTable({
            startY: 42,
            head: [[{content: titles1, colSpan: 2, styles: {halign: 'center', fillColor: [8, 161, 88],},},],],
            body: data1,
            theme: "grid",
            talbeWidth: 900,
          });

          pdf.autoTable({
            startY: 105,
            head: [[{content: titles2, colSpan: 3, styles: {halign: 'center', fillColor: [8, 161, 88],},},],],
            body: data2,
            theme: "grid",
          });

          // Add the Graph for the first section of the Digital Transformation Roadmap
          html2canvas(document.querySelector('#dps-network-div')).then(canvas => {
            if(!(canvas.height === 0) && !(canvas.width === 0)) {
              // set the space between the table and the graph
              let decreasedSpace = 0;
              switch (data2.length){
                case 1:
                    decreasedSpace = 45;
                    break;
                case 2:
                  decreasedSpace = 35;
                  break;
                case 3:
                  decreasedSpace = 24;
                  break;
                case 4:
                  decreasedSpace = 11;
                  break;
                case 5:
                  decreasedSpace = 0;
                  break;
              }
              let img = canvas.toDataURL('image/url');
              let imgProps= pdf.getImageProperties(img);
              let pdfWidth = pdf.internal.pageSize.getWidth();
              let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
              pdf.addImage(img, 'png', 14, 180 - decreasedSpace, pdfWidth - 24, pdfHeight);

              const graphTitle1 = "Graphical representation of the Digital Public services in scope";
              pdf.autoTable({
                startY: 174 - decreasedSpace,
                head: [[{content: graphTitle1, styles: {halign: 'center', fillColor: [8, 161, 88],},},],],
                margin: {right: 10},
              });

              // Add the Information for the second section of the Digital Transformation Roadmap
              html2canvas(document.querySelector('#network_control')).then(canvas => {
                if(!(canvas.height === 0) && !(canvas.width === 0)) {
                  pdf.addPage();
                  addPageTemplate(pdf, 3);
                  addExplanatoryText(pdf, 15, 35, 5);

                  let title = [["Implementation orientation for the digital transformation"]];
                  let data = [
                    ["Legal Orientation: a member state has a legal orientation when its first priority, in the digital public service design, is to address and implement legal requirements"],
                    ["Organizational/Governance Orientation: a member state has a governance orientation when its first priority, in the digital public service design, is to address the possible channels for the public service delivery, and the definition of Governance model"],
                    ["Semantic/Intergration Orientation: a member state has a semantic/intergration orientation when its first priority, in the digital public service design, is to address the possible source of data (e.g. base registry), how data will be exchanged and to define guidelines and agreements for the sharing data"],
                    ["Technical Orientation: a member state has a legal orientation when its first priority, in the digital public service design, is to reuse/share software components (e.g. registry services), to address exchanging capabilities of data (e.g. interfaces) and to define technical interoperability agreements"],
                  ];

                  pdf.autoTable({
                    startY: 160,
                    head: [[{content: title, styles: {halign: 'center', fillColor: [8, 161, 88],}, fontStyle: 'bold',},],],
                    body: data,
                    theme: "grid",
                  });
                  
                  // Add the Graph for the second section of the Digital Transformation Roadmap
                  html2canvas(document.querySelector('#network_div')).then(canvas => {
                    if(!(canvas.height === 0) && !(canvas.width === 0)) {
                      let img = canvas.toDataURL('image/url');
                      let imgProps= pdf.getImageProperties(img);
                      let pdfWidth = pdf.internal.pageSize.getWidth();
                      let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                      pdf.addImage(img, 'png', 14, 51, pdfWidth - 24, pdfHeight);

                      // Add the title
                      let graphTitle2 = "Steps of the Digital Transformation Roadmap";
                      pdf.autoTable({
                        startY: 48,
                        head: [[{content: graphTitle2, styles: {halign: 'center', fillColor: [8, 161, 88],},},],],
                        margin: {right: 10},
                      });

                      // Add the Information for the third section of the Digital Transformation Roadmap
                      html2canvas(document.querySelector('#graph3_info')).then(canvas => {
                        if(!(canvas.height === 0) && !(canvas.width === 0)) {
                          pdf.addPage();
                          addPageTemplate(pdf, 3);
                          addExplanatoryText(pdf, 15, 35, 6);
                          addExplanatoryText(pdf, 15, 90, 7);
                          var titles1 = [
                            ["Digital Business Capability"],
                          ];
                          var data1 = [
                            [
                              document.getElementById("dps-network-bc-info").getElementsByTagName('p')[0].textContent.split(":")[0],
                              document.getElementById("dps-network-bc-info").getElementsByTagName('p')[0].textContent.split(":")[1]
                            ],
                            [
                              document.getElementById("dps-network-bc-info").getElementsByTagName('p')[1].textContent.split(":")[0] + " domain",
                              document.getElementById("dps-network-bc-info").getElementsByTagName('p')[1].textContent.split(":")[1],
                            ],
                            [
                              document.getElementById("dps-network-bc-info").getElementsByTagName('p')[2].textContent.split(":")[0],
                              document.getElementById("dps-network-bc-info").getElementsByTagName('p')[2].textContent.split(":")[1],
                            ],
                            [
                              "Estimated Budget (in millions EUR)",
                              `${maxBudget}`
                            ],
                          ];

                          pdf.autoTable({
                            startY: 40,
                            head: [[{content: titles1, colSpan: 2, styles: {halign: 'center', fillColor: [8, 161, 88],},},],],
                            body: data1,
                            theme: "grid",
                            talbeWidth: 900,
                          });
                        }
                        // Add the Graph for the third section of the Digital Transformation Roadmap
                        html2canvas(document.querySelector('#network_div2')).then(canvas => {
                          if(!(canvas.height === 0) && !(canvas.width === 0)) {
                            let img = canvas.toDataURL('image/url');
                            let imgProps= pdf.getImageProperties(img);
                            let pdfWidth = pdf.internal.pageSize.getWidth();
                            let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                            pdf.addImage(img, 'png', 14, 132, pdfWidth - 24, pdfHeight);

                            let graphTitle3 = "Functionalities supporting the Digital Business Capability";
                            pdf.autoTable({
                              startY: 125,
                              head: [[{content: graphTitle3, styles: {halign: 'center', fillColor: [8, 161, 88],},},],],
                              margin: {right: 10},
                            });
                          }

                          // Add the Building Blocks Table
                          html2canvas(document.querySelector('#bb-div')).then(canvas => {
                            if(!(canvas.height === 0) && !(canvas.width === 0)) {
                              pdf.addPage();
                              addPageTemplate(pdf, 4);
                              addExplanatoryText(pdf, 15, 35, 8);
                              var titles = [
                                ["ID"], 
                                ["View"], 
                                ["Area"], 
                                ["Name"], 
                                ["Description"], 
                                ["Ability to support the dBusCap"], 
                                ["ID's succesors"], 
                              ];
                              
                              var data = [];
                              for(let key in currentBBTableBody) {
                                var row = [
                                  currentBBTableBody[key]['id'],
                                  currentBBTableBody[key]['view'],
                                  currentBBTableBody[key]['area'],
                                  currentBBTableBody[key]['abb'],
                                  currentBBTableBody[key]['description'],
                                  currentBBTableBody[key]['ability'],
                                  currentBBTableBody[key]['successors'],
                                ];
                                data.push(row);
                              }
                        
                              pdf.autoTable(
                                titles,
                                data,
                                {
                                  startY: 50, 
                                  headStyles: {fillColor: [8, 161, 88],},
                                  rowPageBreak: 'auto',
                                  bodyStyles: { valign: 'top' },
                                  columnStyles: {
                                    0: {cellWidth: 15},
                                    1: {cellWidth: 12},
                                    2: {cellWidth: 20},
                                    3: {cellWidth: 25},
                                    4: {cellWidth: 60},
                                    5: {cellWidth: 10},
                                    6: {cellWidth: 20},
                                    text: {cellWidth: 'auto'},
                                  },
                                  theme: 'grid',
                                  margin: {top: 30},
                                  didDrawPage: function() { addPageTemplate(pdf, 4) },
                                }
                              );
                              stopLoader("pdfButtonTxt", "pdfButton");
                              pdf.save(pdfName);
                            } else {
                              stopLoader("pdfButtonTxt", "pdfButton");
                              pdf.save(pdfName);
                            }
                          });
                        });
                      }); 
                    } else {
                      stopLoader("pdfButtonTxt", "pdfButton");
                      pdf.save(pdfName);
                    }
                  });
                } else {
                  stopLoader("pdfButtonTxt", "pdfButton");
                  pdf.save(pdfName);
                }
              });
            } else {
              stopLoader("pdfButtonTxt", "pdfButton");
              pdf.save(pdfName);
            }
          });
        } else {
          stopLoader("pdfButtonTxt", "pdfButton");
          pdf.save(pdfName);
        }
      });
    } else {
      stopLoader("pdfButtonTxt", "pdfButton");
      window.alert("Select a JSON file");
    }  
  }); 
} 

// ******************************
// PDF Creation Functionality END
// ******************************

function groupBy(obj, key, keyToKeep) {
  if (keyToKeep) {
    return obj.reduce(function (prevObj, current) {
      const tempKey = current[key];
      (prevObj[tempKey] = prevObj[tempKey] || []).push(current[keyToKeep]);
      return prevObj;
    }, {});
  }
  return obj.reduce(function (prevObj, current) {
    const tempKey = current[key];
    (prevObj[tempKey] = prevObj[tempKey] || []).push(current);
    return prevObj;
  }, {});
}

function sumOfArray(arr) {
  return arr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);
}

function maxOfArray(arr) {
  return arr.reduce(function (previousValue, currentValue) {
    if (previousValue < currentValue) return currentValue;
    return previousValue;
  }, 0);
}

/**
 * create th with text inside
 * @param {String} valueOnTextNode
 * @returns {DOMElement}
 */
function thWithTextNode(valueOnTextNode) {
  let th = document.createElement("th");
  let text = document.createTextNode(valueOnTextNode);
  th.appendChild(text);
  return th;
}

/**
 * Create span with question icon and the title attribute is the tooltip
 */
const createTooltipSpan = (tooltip) => {
  let tooltipSpan = document.createElement("span");
  tooltipSpan.className = "ml-1";

  tooltipSpan.setAttribute("title", tooltip);

  const icon = document.createElement("i");
  icon.className = "fa fa-question-circle text-primary";
  tooltipSpan.appendChild(icon);
  return tooltipSpan;
};

/**
 * create th with span inside
 */
function thWithSpanNode(valueOnTextNode, tooltip = "") {
  let th = document.createElement("th");
  let span = document.createElement("span");
  span.innerText = valueOnTextNode;

  if (tooltip) {
    span.appendChild(createTooltipSpan(tooltip));
  }

  th.appendChild(span);
  return th;
}

/**
 * Capitalize a string
 */
function CA(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function init(JSONObj) {
  $("#networkBBs").collapse("hide");
  $("#listBBs").collapse("hide");
  document.getElementById("egovera-portofolio").classList.remove("d-none");
  await draw(JSONObj);
}

async function csvToArray(str, delimiter =',') {
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  const arr = headers.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });
}

const fileSelector = document.getElementById("file-selector");



fileSelector.addEventListener("change", function (event) {
  // const file = event.target.files[0];
  // if (file == null) {
  //   return;
  // }
  // var reader = new FileReader();
  // reader.onload = async function (event) {
  //   var testo = event.target.result;
  //   var json = JSON.parse(testo);
  //   fileContent = json;
  //   await init(json);
  // };
  // reader.readAsText(file);
  // this.parentElement.className = "";
  // this.parentElement.classList.add("d-none");
  const file = event.target.files[0];
  Papa.parse(file, {
    download: true,
    header: false,
    skipEmptyLines: true,
    complete: function(results){
      csvResults = csvResultsToObj(results)
    }
  })
  startCreationOfCharts();
});


/**
 * Transform the array into an object
 * @param {Array} result 
 * @returns 
 */
function csvResultsToObj(result) {
  const keys = [
    "ID",
    "Domain",
    "Name",
    "Strategy Fit",
    "Status Quo Efficacy",
    "Target Efficacy",
    "Expected Public Value",
    "Estimated Budget",
  ];
  console.log("results", result)
  const data = result.data;
  console.log("data", data)
  const csvArray = [];
  for(let i = 0; i < data.length; i++){
    // csvObj[`${data[i]}`] = data[i + 1]
    const obj = {};
    for(let j=0; j < data[i].length; j++){
      obj[`${keys[j]}`] = data[i][j];
    }
    csvArray.push(obj);
  }
  console.log("arrray", csvArray)
  return csvArray;
}

async function startCreationOfCharts(){
  await init(csvResults);
}

/**
 *
 */
function callBackForRequest(response, json) {
  inputBCJSON = response.dBusCaps;
  inputBBJSON = response.abb;
  inputDPSJSON = response.dPubSer;
  initInputfromJSON();
  // readSurveyResult(json);
  createBusinessCapabilityTable();
  drawBusinessCapabilityChart();
  resizeQuandrant();
}

async function draw(json) {
  document.getElementById("reset-work").classList.remove("d-none");
  bcList = {};
  viewsInfra = [];
  $("#listBCs").collapse("show");
  $("#matrixBCs").collapse("show");

  let response = await fetch("/api/backoffice/get-files-old");
  response = await response.json();
  callBackForRequest(response, json);
}

/**
 *
 * @param {String} name
 * @param {Number} id
 * @param {String} policy
 * @param {Number} avgAbility
 * @param {Array} bbs
 * @returns {Array}
 */
function createView(name, id, policy, avgAbility, bbs) {
  avgAbility = avgAbility || null;
  bbs = bbs || [];
  var view = {};
  view.name = name;
  view.id = id;
  view.policy = policy;
  view.avgAbility = avgAbility;
  view.bbs = bbs;
  return view;
}

function initInputfromJSON() {
  viewBCmc.name = "Buisness Capabilities (mission critial)";
  viewBCmc.id = 0;
  viewBCmc.policy = "business agnostic";
  viewBCmc.avgAbility = null;
  viewBCmc.bbs = [];

  let view0 = createView("legal", idLinf, "business agnostic");

  let view1 = createView("organisational", idOinf, "business agnostic");

  let view2 = createView("semantic", idSinf, "business agnostic");

  let view3 = createView("technical-application", idTAinf, "business agnostic");

  let view4 = createView(
    "technical-infrastructure",
    idTIinf,
    "business agnostic"
  );

  viewsInfra.push(view0);
  viewsInfra.push(view1);
  viewsInfra.push(view2);
  viewsInfra.push(view3);
  viewsInfra.push(view4);

  bcList = createBcListObject();
}
const avgDpsAbility = (abbs) => {
  const sum = abbs.reduce((total, value) => (total += value.ability), 0);
  let avg = Number((sum / abbs.length).toFixed(2));
  return avg;
};

/**
 * Create the bcList object with the relations of the abbs, dps and bc
 */
const createBcListObject = () => {
  let ABBs = groupABBByID(inputBBJSON);
  DPSs = groupDPSsByID(inputDPSJSON);
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
    tempDBCs[id].bbs = abbs;

    abbs.forEach((abb) => {
      tempDBCs[id].views.forEach((view) => {
        if (abb.view === view.name) view.bbs.push(abb);
      });
    });
  });
  return tempDBCs;
};

document.getElementById("reset-work").addEventListener("click", function () {
  document.getElementById("bb-div").classList.add("d-none");
  selectedBC = null;
  clickedDPSs = [];
  $("#networkBBs").collapse("hide");
  document.querySelector("#bbTable").innerHTML = "";
  init(fileContent);
});

function quadrantWidth() {
  const quadrant = document.querySelector("#quadrant_div");
  const test = quadrant.getBoundingClientRect();
  const width = test.width;
  quadrant.style.height = width + "px";
  return width;
}

function resizeQuandrant() {
  let width = quadrantWidth();
  drawBusinessCapabilityChart(width);
}

const mapFilterResultstoBcList = (json) => {
  const dictionary = {
    id: "id",
    "National Digital Strategy Fit": "priority",
    "Expected Public Value": "expRandom",
    "Ability to support the dBusCap": "abbRandom",
    "Ability to deliver": "ability",
    "Target Prospective Average Ability": "prospectiveAbility",
    budget: "budget",
  };

  const { fullName, organisation, email, country, ...surveyResults } = json;

  let tempBcList = { ...bcList };

  for (let policy in surveyResults) {
    const { BC: busCaps, BB: buildingBlocks } = surveyResults[policy];

    for (let bcIdx = 0; bcIdx < busCaps.length; bcIdx++) {
      const { id, ...answers } = busCaps[bcIdx];
      if (tempBcList[id]) {
        for (let answer in answers) {
          if (!answers.selectedBC) break;
          tempBcList[id][dictionary[answer]] = answers[answer];
        }
      }
    }

    for (let bbIdx = 0; bbIdx < buildingBlocks.length; bbIdx++) {
      const {
        id,
        "Ability to support the dBusCap": bbAbility,
      } = buildingBlocks[bbIdx];

      for (let bc in bcList) {
        const { bbs } = bcList[bc];
        const bb = bbs.filter((bb) => bb.id === id);
        if (bb.length !== 1) continue;
        bb[0].ability = bbAbility;
      }
    }
  }

  Object.values(tempBcList).forEach((bc) => {
    bc.dps.forEach((dps) => {
      dps.dpsAbility = avgDpsAbility(dps.abbs);
    });
  });

  const finalBCList = {};
  for (let policy in surveyResults) {
    const { BC, BB } = surveyResults[policy];
    for (let bc of BC) {
      const { id } = bc;
      finalBCList[id] = tempBcList[id];
    }
  }

  bcList = finalBCList;
};

const randomizeQuandrantValues = () => {
  const bcValues = Object.values(bcList);

  for (let idx = 0; idx < bcValues.length; idx++) {
    bcValues[idx].avgAbility = +(Math.random() * 9 + 1).toFixed(2);
    bcValues[idx].priority = +(Math.random() * 4 + 1).toFixed(0);
  }
};

function readSurveyResult(json) {
  // mapFilterResultstoBcList(json);

  // Go through the survey json file to get the items with the new id
  // New id: id_abb - id_dBusCap
  //const { fullName, organisation, email, country, ...surveyResults } = json;
  var buildingBlocks = [];
  for (let policy in surveyResults) {
    // For every policy keep the abbs objects
    for (let i = 0; i < surveyResults[policy].BB.length; i++) {
      buildingBlocks.push(surveyResults[policy].BB[i]);
    }
  }

  // Initialize customBBs
  customBBs = buildingBlocks;

  // Initialize the bbs.ability for every dBusCap
  for (let index = 0; index < buildingBlocks.length; index++) {
    let abbId = buildingBlocks[index]['id'].split("-")[0].replace(" ", "");
    let dBusCapId = buildingBlocks[index]['id'].split("-")[1].replace(" ", "");
    let a = buildingBlocks[index]['Ability to support the dBusCap'];
    try {
      bcList[dBusCapId]['bbs'].find(function(el) {
        return el.id === abbId;
      })['ability'] =  a;
    }
    catch {
      console.log("No match found!")
    }
  }

  for (var z in bcList) {
    // filter the abbs to keep only the ones with the current dBusCap id 
    var filteredBuildingBlocksByAbbId = buildingBlocks.filter(ob => {
      return z === ob.id.split("-")[1].replace(" ","");
    });

    // Calculate current dBusCap ability to support.
    var count = 0;
    var average = 0;
    for (let i = 0; i < filteredBuildingBlocksByAbbId.length; i++) {
      let ability = filteredBuildingBlocksByAbbId[i]['Ability to support the dBusCap'];
      count += 1;
      average += ability;
    }

    average /= count;
    bcList[z].avgAbility = Math.round((average || 0) * 10) / 10;

    let views = bcList[z].views;
    for (var j in views) {
      var count_view = 0;
      var average_view = 0;
      let bbs_view = views[j].bbs;

      for (var k in bbs_view) {
        count_view += 1;
        average_view += bbs_view[k].ability;
      }
      average_view /= count_view;

      views[j].avgAbility = Math.round((average_view || 0) * 10) / 10;
    }
  }

  // if (demo) randomizeQuandrantValues();
}

function controlWrapper(controlType, containerId, options) {
  return new google.visualization.ControlWrapper({
    controlType: controlType,
    containerId: containerId,
    options: options,
  });
}

var view;

let strategicSlider;
let expPubValSlider;
let abiToSupdBusCapSlider;
let budgetSlider;
let policyDomainFilter;

let order = [0, 1, 2, 3, 4, 5];

/**
 * Calculate the max of all the budgets
 */
function firstInitMaxBudget() {
  let bcObject = groupBy(Object.values(bcList), "policy");
  let max = 0;

  // for (let policy in bcObject) {
  //   let temp = groupBy(bcObject[policy], "policy", "budget");
  //   let currentMax = maxOfArray(temp[policy]);
  //   max = currentMax > max ? currentMax : max;
  // }
  maxBudget = calculateMaxBudget(); //max;
}

function calculateMaxBudget(){
  let max = 0;
  for(let i=0; i < csvResults.length; i++){
    const budget = csvResults[i]["Estimated Budget"];
    if(budget > max){
      max = budget;
    }
  }
  return max;
}

/**
 * Make all the words in the string policy lowercase
 */
const normalizePolicy = (policy) => {
  return policy
    .split(" ")
    .map((x) => x.toLowerCase())
    .join(" ");
};

const getColorPerPolicy = (policy, opacity = false) => {
  // const normalizedPolicy = normalizePolicy(policy);
  // const temp = opacity ? policyColorsWithOpacity : policyColors;
  console.log("policy", policy)
  console.log("aaaaa")
  let value = Math.floor(Math.random() * 9);
  return `#85879${value}`//"#858796"; //temp[normalizedPolicy] || "#858796";
};

const getImagePerPolicy = (policy) => {
  const normalizedPolicy = normalizePolicy(policy);

  return policyImages[normalizedPolicy] || "../img/dps.png";
};

/**
 * Create the bubble chart
 */
 function drawBusinessCapabilityChart(height) {
  height = height || 1;
  data = new google.visualization.DataTable();
  data.addColumn("string", "ID");
  data.addColumn("number", "Strategy Fit");
  data.addColumn("number", "Status Quo Efficacy");
  data.addColumn("string", "Domain");
  data.addColumn("number", "Estimated budget");
  data.addColumn("number", "Expected Public Value");

  // view = new google.visualization.DataView(data);

  firstInitMaxBudget();

  const colors = [];
  let c = ["#036980", "#528360", "#366442"];
  console.log("csvResults", csvResults)
  for(let i=0; i< csvResults.length; i++){
    data.addRow([
      csvResults[i].ID,
      Number(csvResults[i]["Strategy Fit"]),
      Number(csvResults[i]["Status Quo Efficacy"]),
      csvResults[0].Domain,
      Number(csvResults[i]["Estimated Budget"]),
      Number(csvResults[i]["Expected Public Value"])
    ]);

    colors.push(c[i]);
  }
  console.log("clolr", colors)
  // data.addRow([
  //   csvResults[0].ID,
  //   Number(5),
  //   Number(3),
  //   csvResults[0].Domain,
  //   Number(1),
  //   Number(2)
  // ]);
  // colors.push("#013179");

  view = new google.visualization.DataView(data);

  // for (var x in bcList) {
  //   var bc = bcList[x];
  //   if (bc.priority == null) continue;
  //   data.addRow([
  //     bc.id,
  //     bc.priority,
  //     bc.avgAbility,
  //     bc.policy,
  //     bc.budget,
  //     bc.expRandom,
  //   ]);

  //   const color = getColorPerPolicy(bc.policy);
  //   if (colors.indexOf(color) === -1) colors.push(color);
  // }

  view.setColumns(order);

  dashboard = new google.visualization.Dashboard(
    document.getElementById("dashboard_div")
  );

  strategicSlider = controlWrapper(
    "NumberRangeFilter",
    "dashboard_strategicSlider_div",
    {
      filterColumnLabel: "Strategy Fit",
      ui: {
        labelStacking: "horizontal",
      },
      minValue: 1,
      maxValue: 5,
    }
  );
  expPubValSlider = controlWrapper(
    "NumberRangeFilter",
    "dashboard_expPubValSlider_div",
    {
      filterColumnLabel: "Expected Public Value",
      ui: {
        labelStacking: "horizontal",
      },
      minValue: 1,
      maxValue: 5,
    }
  );
  abiToSupdBusCapSlider = controlWrapper(
    "NumberRangeFilter",
    "dashboard_abiToSupdBusCapSlider_div",
    {
      filterColumnLabel: "Status Quo Efficacy",
      ui: {
        labelStacking: "horizontal",
      },
      minValue: 1,
      maxValue: 5,
    }
  );
  budgetSlider = controlWrapper("NumberRangeFilter", "budget_filtering_div", {
    filterColumnLabel: "Estimated budget",
    ui: {
      labelStacking: "horizontal",
      label: "Estimated budget (in millions EUR)",
    },
    minValue: 0,
    maxValue: maxBudget,
  });

  policyDomainFilter = controlWrapper(
    "CategoryFilter",
    "visibility_control_div",
    {
      filterColumnLabel: "ID",
      ui: {
        label: "",
        selectedValuesLayout: "aside",
        caption: "Projects analysed",
        cssClass: "filters-div-google",
      },
    }
  );

  var options1 = {
    height: height,
    title: { position: "none" },
    hAxis: {
      title: hAxisLabes[order[1]], //"Strategy Fit",//hAxisLabes[order[1]],
      minValue: 0,
      maxValue: 5,
      ticks: [
        { v: 0, f: "low" },
        { v: 2.5, f: "medium" },
        { v: 5, f: "high" },
      ],
      gridlines: { color: "#747675" },
      baselineColor: "#747675",
    },
    vAxis: {
      title: "Status Quo Efficacy",
      minValue: 0,
      maxValue: 5,
      ticks: [
        { v: 0, f: "low" },
        { v: 5, f: "med" },
        { v: 10, f: "high" },
      ],
    },
    bubble: {
      textStyle: {
        fontSize: 10,
      },
      opacity: 0.5,
    },
    sizeAxis: {
      minSize: 20,
    },
    colors,
    chartArea: { width: "82%", height: "82%" },
    legend: { position: "top", alignement: "center" },
  };

  chartBubble = new google.visualization.ChartWrapper({
    chartType: "BubbleChart",
    containerId: "quadrant_div",
    options: options1,
  });

  dashboard.bind(
    [
      strategicSlider,
      policyDomainFilter,
      expPubValSlider,
      abiToSupdBusCapSlider,
      budgetSlider,
    ],
    chartBubble
  );

  dashboard.draw(view.toDataTable());

  google.visualization.events.addListener(chartBubble, "ready", function () {
    google.visualization.events.addListener(
      chartBubble,
      "select",
      selectHandler
    );
    google.visualization.events.addListener(
      policyDomainFilter,
      "statechange",
      function (event) {
        const state = policyDomainFilter.getState();
        filteringBcTable(state.selectedValues, false);
      }
    );
    google.visualization.events.addListener(
      chartBubble,
      "statechange",
      function () {
        alert(chartBubble.getDataTable().getNumberOfRows());
      }
    );
  });
}

const scrollToElement = (selector) => {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(selector).offset().top - 40,
    },
    500
  );
};

const bcInfoNodes = (id, policy, name, budget, spanID) => {
  const pID = document.createElement("p");
  const pPolicy = document.createElement("p");
  const pName = document.createElement("p");
  const pBudget = document.createElement("p");

  pID.innerText = "ID: " + id;
  pPolicy.innerText = "Policy: " + policy;
  pName.innerText = "Name: " + name;
  pBudget.innerHTML =
    "Estimated budget (in millions EUR): " +
    `<span id="${spanID}">${budget} </span `;

  const parent = document.createElement("div");

  parent.appendChild(pID);
  parent.appendChild(pPolicy);
  parent.appendChild(pName);
  parent.appendChild(pBudget);

  return parent;
};

function selectHandler(e) {
  var selection = chartBubble.getChart().getSelection();
  var item = selection[0];
  if (item == null) return;
  document.getElementById("bb-div").classList.remove("d-none");
  selectedValue = chartBubble.getDataTable().getValue(item.row, 0);

  clickedDPSs = [];

  $("#networkBBs2").fadeOut();
  $("#network_div").fadeOut(function () {
    if ($("#infratoogle").prop("checked") == false) {
      $("#infratoogle").prop("checked", true);
      toogleInfra = true;
    }

    busOrientation = 1;
    $("#radio1").prop("checked", true);
    $("#networkBBs").collapse("show");
    $("#listBBs").collapse("show");
    $("#network_div").fadeIn();

    drawViewsPredecessorsChart(bcList[selectedValue]);

    dpsNetworkAndCheckbox(bcList[selectedValue].dps, bcList[selectedValue].bbs);

    scrollToElement("#networkBBs");

    selectedBC = selectedValue;
    clickedBC = bcList[selectedValue];

    bbsFillInfo(bcList[selectedBC]);

    document.getElementById("bcDetail").innerHTML = bcInfoNodes(
      bcList[selectedValue].id,
      CA(bcList[selectedValue].policy),
      bcList[selectedValue].name,
      bcList[selectedValue].budget,
      "bcDetails-budget"
    ).innerHTML;
    document.getElementById("dps-network-bc-info").innerHTML = bcInfoNodes(
      bcList[selectedValue].id,
      CA(bcList[selectedValue].policy),
      bcList[selectedValue].name,
      bcList[selectedValue].budget,
      "bcDetails-budget-copy"
    ).innerHTML;
    document.getElementById("bbDetail").innerHTML =
      "<i>please select a builidng block</i>";

    createBuildingBlocksTable(bcList[selectedValue]);
  });
}

$("#orientation").on("change", function () {
  if (document.getElementById("radio1").checked) {
    busOrientation = 1;
  } else if (document.getElementById("radio2").checked) {
    busOrientation = 2;
  } else if (document.getElementById("radio3").checked) {
    busOrientation = 3;
  } else {
    busOrientation = 4;
  }
  drawViewsPredecessorsChart(bcList[selectedValue]);
});

$("#infratoogle").on("change", function () {
  if (toogleInfra) {
    toogleInfra = false;
  } else {
    toogleInfra = true;
  }
  drawViewsPredecessorsChart(bcList[selectedValue]);
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

window.addEventListener("resize", () => {
  resizeQuandrant();
});

/**
 *
 * @param {Array} options The options that the select box should have
 * @param {Array} attribuesList This is an array of objects for the attribues of select box
 * @param {Boolean} firstChildUnvisible If is true , the select box will have place holder the first item of array
 * @returns Select html element
 */

/**
 * Create option html element with attributes
 */
function selectHTMLWithOptions(options, attribuesList) {
  attribuesList = attribuesList || [];
  let select = document.createElement("select");
  for (let attr in attribuesList) {
    select.setAttribute(attr, attribuesList[attr]);
  }

  for (let i = 0; i < options.length; i++) {
    let policy = options[i];
    let option = document.createElement("option");
    option.setAttribute("value", policy );
    option.text = policy;
    select.appendChild(option);
  }
  return select;
}

/**
 * Create number input html element with attributes
 */
function htmlInputNumb(attribuesList) {
  let input = document.createElement("input");
  input.setAttribute("type", "number");
  for (let attr in attribuesList) {
    input.setAttribute(attr, attribuesList[attr]);
  }
  return input;
}

/**
 * Create paragraph html element with attributes
 */
function htmlParagNumb(attribuesList) {
  let input = document.createElement("p");
  for (let attr in attribuesList) {
    input.setAttribute(attr, attribuesList[attr]);
  }
  return input;
}

/**
 * Create dropdow element
 */
function dropDownCheckBox(options, header) {
  let dropdown = document.createElement("div");
  dropdown.classList.add(["dropdown", "show"]);

  dropdown.setAttribute("id", "dropdown_div");

  let headerEl = document.createElement("div");
  headerEl.classList.add("dropdown-toggle");
  headerEl.setAttribute("id", "dropdownMenuLink");
  headerEl.setAttribute("data-toggle", "dropdown");
  headerEl.setAttribute("aria-haspopup", "true");
  headerEl.setAttribute("aria-expanded", "false");
  let headerText = document.createTextNode(header);
  headerEl.appendChild(headerText);

  let dropdownMenu = document.createElement("div");
  dropdownMenu.classList.add("dropdown-menu");

  dropdown.appendChild(headerEl);
  dropdown.appendChild(dropdownMenu);

  for (let i = 0; i < options.length; i++) {
    let id = options[i];
    const label = createLabelWithInputChild(id);
    dropdownMenu.appendChild(label);
  }

  dropdown.addEventListener("change", filteringHandler);

  return dropdown;
}
/**
 * Filter bc table and quandrant
 */
function filteringBcTable(values, quadrant_filtering) {
  const table = document.getElementById("bcTable");
  let tr = table.getElementsByTagName("tr");
  console.log("tr Elements", tr)
  for (let i = 0; i < tr.length; i++) {
    let tds = tr[i].getElementsByTagName("td");
    if (tds.length < 1) continue;
    console.log("tds", tds)
    let policyColumn = tds[1]
      .querySelector("[policyValue]")
      .getAttribute("policyValue");
    //let policyColumn = tds[1].innerText;
    console.log("policycolmn", policyColumn)
    console.log("values", values)
    const tempCond = values.map(function (value) {
      return "'" + policyColumn + "' === '" + value + "'";
    });

    console.log("tempCond", tempCond)

    let condition = tempCond.join(" || ");
    let valid = condition ? eval(condition) : true;
    if (valid) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
  if (quadrant_filtering) {
    policyDomainFilter.setState({ selectedValues: values });
    policyDomainFilter.draw();
  } else {
    const dropdown = document.getElementById("dropdown_div");
    let inputs = dropdown.querySelectorAll("input[type=checkbox]");
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      input.checked = false;
    }

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      for (let i = 0; i < values.length; i++) {
        let value = values[i];
        const id = input.getAttribute("id").split("-")[0];
        if (id.includes(value)) input.checked = true;
      }
    }
  }
}

function createLabelWithInputChild(id) {
  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", id + "-dropdown");
  input.setAttribute("value", id);
  let label = document.createElement("label");
  label.setAttribute("for", id + "-dropdown");
  label.appendChild(input);
  let textContent = document.createTextNode(" " + id);
  label.appendChild(textContent);
  label.classList.add("dropdown-item");

  return label;
}

function range(start, end) {
  let ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
}

function changeSumPerPolicy(inputField) {
  let bcObject = groupBy(Object.values(bcList), "policy");

  let policy = inputField.getAttribute("policy");
  let id = "#" + policy + "-sum";
  policy = policy.split("-").join(" ");
  document.querySelector(id).innerHTML = sumOfArray(
    groupBy(bcObject[policy], "policy", "budget")[policy]
  );
}

function filteringHandler() {
  let dropdown = document.querySelector("#dropdown_div > div.dropdown-menu");
  let inputs = dropdown.querySelectorAll("input[type=checkbox]");
  const values = [];
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    if (input.checked) {
      const value = input.getAttribute("id").split("-")[0];
      values.push(value);
    }
  }

  filteringBcTable(values, true);
}

const updateBcDetailsBudget = (budget, currentBc) => {
  if (currentBc != selectedBC) return;
  $("#bcDetails-budget").text(budget);
  $("#bcDetails-budget-copy").text(budget);
};

function containerWithSelectAndSpan(selectBox, outOf) {
  const customDiv = document.createElement("div");

  let span = document.createElement('span');
  span.innerText = ` out of ${outOf}`;

  customDiv.appendChild(selectBox)
  customDiv.appendChild(span)

  return customDiv;

}

function createBusinessCapabilityTable() {
  let table = document.getElementById("bcTable");
  table.innerHTML = "";
  let thead = table.createTHead();
  let row = thead.insertRow();

  let id = thWithTextNode("ID");

  let domain = thWithTextNode("Domain");

  //var th2 = document.createElement("th");

  let name = thWithTextNode("Name");

  // Headers with pop up messages
  let dStrategicFit = thWithSpanNode(
    "Strategy Fit",
    natDigStrategicFitTooltip
  );

  
  let publicValue = thWithSpanNode("Expected Public Value", expPubValueTooltip);

  let abilityToSupport = thWithSpanNode(
    "Status Quo Efficacy",
    abToSuppDbusCapTooltip
  );

  let budgetAlloc = thWithSpanNode(
    "Estimated budget (in millions EUR)",
    budgetTooltip
  );

  const optimalAvg = thWithSpanNode(
    "Target Efficacy",
    optimalAvgTooltip
  );

  row.appendChild(id);
  row.appendChild(domain);
  row.appendChild(name);
  row.appendChild(dStrategicFit);
  row.appendChild(abilityToSupport);
  row.appendChild(optimalAvg);
  row.appendChild(publicValue);
  row.appendChild(budgetAlloc);

  // add the data
  console.log("asdfadsfasfd", csvResults)

  for(let i=0; i < csvResults.length; i++){
    let dataRow = table.insertRow();
    dataRow.insertCell().appendChild(document.createTextNode(csvResults[i].ID));
    dataRow.insertCell().appendChild(document.createTextNode(csvResults[i].Domain));
    dataRow.insertCell().appendChild(document.createTextNode(csvResults[i].Name));
    

    let strategyFit = selectHTMLWithOptions(range(1, 5), {
      priority: "mySelect",
      bc: csvResults[i].ID,
    });
    strategyFit.value = csvResults[i]['Strategy Fit'];
    strategyFit.addEventListener("change", function () {
      // for (let y in bcList) {
      for(let i=0; i<csvResults.length; i++){
        //if (bcList[y].id == this.getAttribute("bc")) {
        if(csvResults[i].ID == this.getAttribute("bc")){
          //bcList[y].expRandom = Number(this.value);
          csvResults[i]['Strategy Fit'] = Number(this.value);
          let height = quadrantWidth();
          drawBusinessCapabilityChart(height);
          //filteringHandler();
          return;
        }
      }
    });
    const strategyFitContainer = containerWithSelectAndSpan(strategyFit, 5);
    dataRow.insertCell().appendChild(strategyFitContainer);
    //dataRow.insertCell().appendChild(document.createTextNode(csvResults[i]['Strategy Fit']));

    let statusQuoEfficacy = selectHTMLWithOptions(range(0, 5), {
      priority: "mySelect",
      bc: csvResults[i].ID,
    });
    statusQuoEfficacy.value = csvResults[i]['Status Quo Efficacy'];
    statusQuoEfficacy.addEventListener("change", function () {
      // for (let y in bcList) {
      for(let i=0; i<csvResults.length; i++){
        //if (bcList[y].id == this.getAttribute("bc")) {
        if(csvResults[i].ID == this.getAttribute("bc")){
          //bcList[y].expRandom = Number(this.value);
          csvResults[i]['Status Quo Efficacy'] = Number(this.value);
          let height = quadrantWidth();
          drawBusinessCapabilityChart(height);
          //filteringHandler();
          console.log("status quo csvresults", csvResults)
          return;
        }
      }
    });
    const statusQuoEfficacyContainer = containerWithSelectAndSpan(statusQuoEfficacy, 5);
    dataRow.insertCell().appendChild(statusQuoEfficacyContainer);
    //dataRow.insertCell().appendChild(document.createTextNode(csvResults[i]['Status Quo Efficacy']));

    let targetEfficacy = selectHTMLWithOptions(range(1, 5), {
      priority: "mySelect",
      bc: csvResults[i].ID,
    });
    targetEfficacy.value = csvResults[i]['Target Efficacy'];
    targetEfficacy.addEventListener("change", function () {
      // for (let y in bcList) {
      for(let i=0; i<csvResults.length; i++){
        //if (bcList[y].id == this.getAttribute("bc")) {
        if(csvResults[i].ID == this.getAttribute("bc")){
          //bcList[y].expRandom = Number(this.value);
          csvResults[i]['Target Efficacy'] = Number(this.value);
          let height = quadrantWidth();
          drawBusinessCapabilityChart(height);
          //filteringHandler();
          console.log("target efficary csvresults", csvResults)
          return;
        }
      }
    });
    const targetEfficacyContainer = containerWithSelectAndSpan(targetEfficacy, 5);
    dataRow.insertCell().appendChild(targetEfficacyContainer);
    //dataRow.insertCell().appendChild(document.createTextNode(csvResults[i]['Target Efficacy']));

    let expPubVal = selectHTMLWithOptions(range(1, 5), {
      priority: "mySelect",
      bc: csvResults[i].ID,
    });
    expPubVal.value = csvResults[i]['Expected Public Value'];
    expPubVal.addEventListener("change", function () {
      // for (let y in bcList) {
      for(let i=0; i<csvResults.length; i++){
        //if (bcList[y].id == this.getAttribute("bc")) {
        if(csvResults[i].ID == this.getAttribute("bc")){
          //bcList[y].expRandom = Number(this.value);
          csvResults[i]['Expected Public Value'] = Number(this.value);
          let height = quadrantWidth();
          drawBusinessCapabilityChart(height);
          //filteringHandler();
          return;
        }
      }
    });
    const expPubValContainer = containerWithSelectAndSpan(expPubVal, 5);
    dataRow.insertCell().appendChild(expPubValContainer);
    //dataRow.insertCell().appendChild(document.createTextNode(csvResults[i]['Expected Public Value']));


    let estimatedBudget = htmlInputNumb({
      priority: "mySelect",
      //policy: policy.split(" ").join("-"),
      bc: csvResults[i].ID,
      min: 0,
      id: "total-" + csvResults[i].ID,
    });
    estimatedBudget.value = csvResults[i]["Estimated Budget"];
    estimatedBudget.addEventListener("change", function () {
      //for (let y in bcList) {
      for(let i=0; i<csvResults.length; i++){
        //if (bcList[y].id == this.getAttribute("bc")) {
        if(csvResults[i].ID == this.getAttribute("bc")){

          let newBudget = Number(Number(this.value).toFixed(2));
          if (newBudget < 0) newBudget = 0;
          csvResults[i]['Estimated Budget'] = newBudget;
          this.value = newBudget;
          let height = quadrantWidth();
          drawBusinessCapabilityChart(height);
          //changeSumPerPolicy(this);
          //filteringHandler();
          //updateBcDetailsBudget(newBudget, y);
          console.log("new budget csvResults", csvResults)
          return;
        }
      }
    });
    dataRow.insertCell().appendChild(estimatedBudget);
    //dataRow.insertCell().appendChild(document.createTextNode(csvResults[i]['Estimated Budget']));
  }


  let bcObject = groupBy(Object.values(bcList), "policy");
  let policies = Object.keys(bcObject);

  // for (let policy in bcObject) {
  //   let policyArray = bcObject[policy];

  //   for (let i = 0; i < policyArray.length; i++) {
  //     let bc = policyArray[i];
  //     let row = table.insertRow();
  //     row.insertCell().appendChild(document.createTextNode(bc.id));
  //     let policySpan = document.createElement("span");
  //     policySpan.setAttribute("policyValue", bc.policy);
  //     let policyTextNode = document.createTextNode(bc.policy);
  //     policySpan.appendChild(policyTextNode);
  //     row.insertCell().appendChild(policySpan);
  //     row.insertCell().appendChild(document.createTextNode(bc.name));

  //     let natDigStrFit = selectHTMLWithOptions(range(1, 5), {
  //       priority: "mySelect",
  //       bc: bc.id,
  //     });

  //     natDigStrFit.value = bc.priority;
  //     natDigStrFit.addEventListener("change", function () {
  //       for (let y in bcList) {
  //         if (bcList[y].id == this.getAttribute("bc")) {
  //           bcList[y].priority = Number(this.value);
  //           let height = quadrantWidth();
  //           drawBusinessCapabilityChart(height);

  //           filteringHandler();
  //           return;
  //         }
  //       }
  //     });
  //     const natDigStrFitContainer = containerWithSelectAndSpan(natDigStrFit, 5);
  //     row.insertCell().appendChild(natDigStrFitContainer);

  //     let abiToSupdBusCap = selectHTMLWithOptions(range(1, 5), {
  //       priority: "mySelect",
  //       bc: bc.id,
  //     });
  //     abiToSupdBusCap.value = Math.round(bc.avgAbility);
  //     abiToSupdBusCap.addEventListener("change", function () {
  //       for (let y in bcList) {
  //         if (bcList[y].id == this.getAttribute("bc")) {
  //           bcList[y].avgAbility = Number(this.value);
  //           let height = quadrantWidth();
  //           drawBusinessCapabilityChart(height);
  //           filteringHandler();
  //           return;
  //         }
  //       }
  //     });


  //     const abiToSupdBusCapContainer = containerWithSelectAndSpan(abiToSupdBusCap, 5);
  //     row.insertCell().appendChild(abiToSupdBusCapContainer);

  //     // Insert prospective Average value
  //     let prospAbility = selectHTMLWithOptions(range(1, 5), {
  //       priority: "mySelect",
  //       bc: bc.id,
  //     });
  //     prospAbility.value = Number(bc.prospectiveAbility).toFixed(0);

  //     // functionality when the user selects another value from the dropdown list
  //     prospAbility.addEventListener("change", function () {
  //       for (let y in bcList) {
  //         if (bcList[y].id == this.getAttribute("bc")) {
  //           bcList[y].prospectiveAbility = Number(this.value);
  //           filteringHandler();
  //           return;
  //         }
  //       }
  //     });

  //     const prospectiveAbilityContainer = containerWithSelectAndSpan(prospAbility, 5);
  //     row.insertCell().appendChild(prospectiveAbilityContainer);

  //     let expPubVal = selectHTMLWithOptions(range(1, 5), {
  //       priority: "mySelect",
  //       bc: bc.id,
  //     });
  //     expPubVal.value = bc.expRandom;
  //     expPubVal.addEventListener("change", function () {
  //       for (let y in bcList) {
  //         if (bcList[y].id == this.getAttribute("bc")) {
  //           bcList[y].expRandom = Number(this.value);
  //           let height = quadrantWidth();
  //           drawBusinessCapabilityChart(height);
  //           filteringHandler();
  //           return;
  //         }
  //       }
  //     });

  //     const expPubValContainer = containerWithSelectAndSpan(expPubVal, 5);
  //     row.insertCell().appendChild(expPubValContainer);

  //     let budgetFiled = htmlInputNumb({
  //       priority: "mySelect",
  //       policy: policy.split(" ").join("-"),
  //       bc: bc.id,
  //       min: 0,
  //       id: "total-" + bc.id,
  //     });
  //     budgetFiled.value = bc.budget;

  //     budgetFiled.addEventListener("change", function () {
  //       for (let y in bcList) {
  //         if (bcList[y].id == this.getAttribute("bc")) {
  //           let newBudget = Number(Number(this.value).toFixed(2));
  //           if (newBudget < 0) newBudget = 0;
  //           bcList[y].budget = newBudget;
  //           this.value = newBudget;
  //           let height = quadrantWidth();
  //           drawBusinessCapabilityChart(height);
  //           changeSumPerPolicy(this);
  //           filteringHandler();
  //           updateBcDetailsBudget(newBudget, y);
  //           return;
  //         }
  //       }
  //     });
  //     row.insertCell().appendChild(budgetFiled);
  //   }
  //   let row = table.insertRow();

  //   row.insertCell().appendChild(document.createTextNode(""));

  //   let policySumParag = htmlParagNumb({
  //     id: policy + "-policyField",
  //     policyValue: policy,
  //   });
  //   policySumParag.innerHTML = policy;
  //   row.insertCell().appendChild(policySumParag);

  //   row.insertCell().appendChild(document.createTextNode(""));

  //   row.insertCell().appendChild(document.createTextNode(""));

  //   row.insertCell().appendChild(document.createTextNode(""));

  //   row.insertCell().appendChild(document.createTextNode(""));

  //   let totalParagraph = htmlParagNumb({ id: policy + "-totalInAbbfiled" });
  //   totalParagraph.innerHTML = "Total budget";
  //   row.insertCell().appendChild(totalParagraph);

  //   let budgets = groupBy(bcObject[policy], "policy", "budget");
  //   let sumOfBudgets = htmlParagNumb({
  //     id: policy.split(" ").join("-") + "-sum",
  //     priority: "mySelect",
  //   });
  //   sumOfBudgets.innerHTML = sumOfArray(budgets[policy]);

  //   row.insertCell().appendChild(sumOfBudgets);
  // }
  
  // EDW

  //let selectEl = dropDownCheckBox(policies, "Policy Domain");
  //th2.appendChild(selectEl);

  var els = document.getElementById("bcTable").getElementsByTagName("th");

  for (var i = 0; i < els.length; i++) {
    els[i].style.paddingTop = "4px";
    els[i].style.paddingBottom = "4px";
  }

  var els = document.getElementById("bcTable").getElementsByTagName("td");

  for (var i = 0; i < els.length; i++) {
    els[i].style.paddingTop = "2px";
    els[i].style.paddingBottom = "2px";
  }
}

/**
 *
 * @param {Number} id
 * @param {String} shape
 * @param {String} image
 * @param {String} label
 * @param {String} title
 * @param {Array} color
 * @param {Number} x
 * @param {Number} y
 * @param {String} font
 * @param {String} DIR
 */

function createDigitalTransformNode(
  id,
  shape,
  image,
  label,
  title,
  color,
  x,
  y,
  hidden,
  font,
  DIR
) {
  if (!x && x !== 0) {
    x = null;
  }
  if (!y && y !== 0) {
    y = null;
  }
  (font = font || "14px arial"), (DIR = DIR || "../img/");
  hidden = hidden || false;
  var node = [];
  node.id = id;
  node.shape = shape;
  node.image = DIR + image;
  node.font = font;
  node.label = label;
  node.title = title;
  node.color = color;
  node.hidden = hidden;
  node.x = x;
  node.y = y;
  return node;
}

const syncCheckboxAfterNodesClicked = (dps) => {
  const inputs = dpsSelectDivList.querySelectorAll("input");

  for (let idx = 0; idx < inputs.length; idx++) {
    inputs[idx].checked = false;
    if (inputs[idx].getAttribute("data-dig-pub-service") === dps)
      inputs[idx].checked = true;
  }
};

const dpsNetworkAndCheckbox = (dpss, bbs) => {
  drawDPSNetwork(dpss, bbs);
  createFilterDPSCheckbox(dpss);
};

/**
 * Create and draw dps network chart
 */
const drawDPSNetwork = (dpss, bbs) => {
  if (DPSnetwork !== null) {
    DPSnetwork.destroy();
    DPSnetwork = null;
  }

  DPSNetNodes = new vis.DataSet();

  let length = dpss.length;

  for (let idx = 0; idx < length; idx++) {
    let dps = dpss[idx];
    let { policy, id: dpsID, name: label, dpsAbility } = dps;

    let title = `<div>
    ${dpsDetailChild("ID: ", dpsID).outerHTML}
    ${dpsDetailChild("Name: ", label).outerHTML}
    ${dpsDetailChild("Policy: ", policy).outerHTML}
    ${dpsDetailChild("Average Ability to support: ", dpsAbility).outerHTML}
    </div>`;
    let node = {
      id: idx,
      image: getImagePerPolicy(policy),
      dpsID,
      label: `${dpsID} - ${label}`,
      title,
      hidden: false,
      color: {
        background: getColorPerPolicy(policy, true),
      },
    };
    DPSNetNodes.add(node);
  }

  let options = {
    interaction: { hover: true },
    height: "100%",
    width: "100%",
    nodes: {
      imagePadding: 11,
      borderWidth: 1,
      size: 30,
      shape: "circularImage",
      shadow: true,
      font: { color: "#000", size: 17 },
    },
    interaction: {
      navigationButtons: true,
      keyboard: true,
    },
    physics: {
      forceAtlas2Based: {
        springLength: -10,
      },
      minVelocity: 0.75,
      solver: "forceAtlas2Based",
      timestep: 0.53,
    },
  };
  let data = {
    nodes: DPSNetNodes,
  };

  let container = document.querySelector("#dps-network-div");
  DPSnetwork = new vis.Network(container, data, options);

  if (DPSnetwork !== null) {
    DPSnetwork.on("click", (properties) => {
      if (properties.nodes.length === 0) return;

      let id = properties.nodes[0];

      let nodes = DPSNetNodes.get();

      let node = nodes.find((node) => node.id === id);
      let dps = dpss.filter((dp) => dp.id === node.dpsID)[0];
      clickedDPSs = [dps.id];
      syncCheckboxAfterNodesClicked(node.dpsID);
      const newBBs = bbs.filter((bb) => bb.digPubServ.includes(node.dpsID));
      createBuildingBlocksTable({ bbs: newBBs });
      filternetwork2([node.dpsID]);
      bbsMultipleDPSInfo([dps.name]);
      drawViewsPredecessorsChart(bcList[selectedBC], clickedDPSs);
    });
  }
};

/**
 * Helper function
 */
const dpsDetailChild = (key, value) => {
  const div = document.createElement("div");
  const spanLeft = document.createElement("span");
  const spanRight = document.createElement("span");
  div.appendChild(spanLeft);
  div.appendChild(spanRight);

  spanLeft.innerText = key;
  spanRight.innerText = value;

  return div;
};

const filternetwork2 = (dpsIDS) => {
  if (!network2Nodes) return;
  let condition = "";
  let dpsLength = dpsIDS.length;

  if (dpsLength === 0) {
    network2Nodes.forEach((node) => {
      let hidden = false;
      network2Nodes.update({ id: node.id, hidden: hidden });
    });
    return;
  }

  for (let idx = 0; idx < dpsLength; idx++) {
    let id = dpsIDS[idx];
    condition += `node.dps.indexOf("${id}") > -1`;
    if (idx < dpsLength - 1) condition += " || ";
  }

  const temp = new vis.DataSet();

  network2Nodes.forEach((node) => {
    let hidden;
    if (eval(condition)) {
      hidden = false;
    } else {
      hidden = true;
    }

    temp.add({ ...node, hidden });
  });

  network2Nodes.clear();
  temp.forEach((node) => network2Nodes.add(node));
};

const createFilterDPSCheckbox = (dpss) => {
  if (dpss.length === 0) {
    return;
  }
  dpsSelectDivList.innerHTML = "";

  for (let idx = 0; idx < dpss.length; idx++) {
    let dps = dpss[idx];

    const li = document.createElement("li");
    const div = document.createElement("div");
    const dpsName = dps.name;
    const textNode = document.createElement("span");
    textNode.textContent = `${dps.id} - ${dpsName}`;
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("data-dig-pub-service", dps.id);

    li.appendChild(div);
    div.appendChild(input);
    div.appendChild(textNode);
    dpsSelectDivList.appendChild(li);
  }
};

const calculateAvgAbilityPerViewAndDpss = (view, dpss = []) => {
  if (dpss.length === 0) {
    return view.avgAbility;
  }

  const abbsToCalculate = view.bbs.filter((bb) => {
    for (let idx = 0; idx < dpss.length; idx++) {
      if (bb.digPubServ.indexOf(dpss[idx]) > -1) return true;
    }
    return false;
  });

  const total = abbsToCalculate.reduce((sum, abb) => (sum += abb.ability), 0);
  if (abbsToCalculate.length === 0) return 0;
  const average = total / abbsToCalculate.length;

  return average;
};

/**
 * Create and draw the dBusCaps chart
 */
function drawViewsPredecessorsChart(bc, dpss = []) {
  if (network !== null) {
    network.destroy();
    network = null;
  }

  if (bc.policy == "Business Agnostic") {
    toogleInfra = false;
  }

  let showNonInfra = true;

  if (
    clickedDPSs.length > 0 &&
    clickedDPSs.every((id) => id.startsWith("BA"))
  ) {
    showNonInfra = false;
    toogleInfra = true;
  }

  var bbs = bc.bbs;
  var nodes = [];
  var edges = [];

  var color = [];
  color.background = "#fff";
  var bcNode = createDigitalTransformNode(
    idBCdom,
    "circularImage",
    "bc.png",
    "ID:" +
      bc.id +
      ", " +
      bc.name +
      ", \nNational Digital Strategy Fit: " +
      bc.priority +
      " out of 5, \nAbility to support the dBusCap: " +
      bc.avgAbility +
      " out of 5",
    "ID:" +
      bc.id +
      ", " +
      bc.name +
      ", \nNational Digital Strategy Fit: " +
      bc.priority +
      " out of 5, \nAbility to support the dBusCap: " +
      bc.avgAbility +
      " out of 5",
    color,
    100,
    10
  );
  nodes.push(bcNode);

  var color = [];
  color.background = "#fff";
  var start = createDigitalTransformNode(
    100,
    "circularImage",
    "start.png",
    "Start",
    "Start",
    color,
    -10,
    0
  );

  nodes.push(start);
  let views = bc.views;
  var count = 0;
  if (showNonInfra) {
    for (let i in views) {
      count += 1;
      let id = null;
      var color = [];
      var image = null;
      var labelInit = null;
      switch (String(views[i].name)) {
        case "legal":
          image = "legal.png";
          labelInit = "L";
          id = idLdom;
          break;
        case "organisational":
          image = "org.png";
          id = idOdom;
          labelInit = "O";
          break;
        case "semantic":
          image = "data.png";
          id = idSdom;
          labelInit = "S";
          break;
        case "technical-application":
          image = "TA.png";
          id = idTAdom;
          labelInit = "TA";
          break;
        case "technical-infrastructure":
          image = "tech.png";
          id = idTIdom;
          labelInit = "TI";
          break;
        default:
          image = "tech.png";
          break;
      }
      const currentAvgAbility = calculateAvgAbilityPerViewAndDpss(
        views[i],
        clickedDPSs
      );
      color.background = getColorPerPolicy(views[i].policy, true);

      if (views[i].bbs.length == 0) {
        if (labelInit === null) continue;
        var label = labelInit + " - " + CA(bc.policy);
      } else {
        var label =
          labelInit +
          " - " +
          CA(bc.policy) +
          ",\n" +
          currentAvgAbility.toFixed(1) +
          " out of 5";
      }
      let node = createDigitalTransformNode(
        id,
        "circularImage",
        image,
        label,
        label,
        color,
        10 * i,
        0
      );
      nodes.push(node);
    }
  }
  var bcInfraNode = [];
  bcInfraNode.id = idBCinf;

  if (toogleInfra) {
    var color = [];
    color.background = "#fff";
    bcInfraNode = createDigitalTransformNode(
      idBCinf,
      "circularImage",
      "bc.png",
      "Digital business capability Infrastructure," + "\nMission Critical",
      "Digital business capability Infrastructure," + "\nMission Critical",
      color,
      100,
      50,
      true
    );
    nodes.push(bcInfraNode);

    for (let i in viewsInfra) {
      let id = null;
      var color = [];
      var image = null;
      var labelInit = null;
      switch (String(viewsInfra[i].name)) {
        case "legal":
          image = "legal.png";
          id = idLinf;
          labelInit = "L";
          break;
        case "organisational":
          image = "org.png";
          id = idOinf;
          labelInit = "O";
          break;
        case "semantic":
          image = "data.png";
          id = idSinf;
          labelInit = "S";
          break;
        case "technical-application":
          image = "TA.png";
          id = idTAinf;
          labelInit = "TA";
          break;
        case "technical-infrastructure":
          image = "tech.png";
          id = idTIinf;
          labelInit = "TI";
          break;
        default:
          image = "tech.png";
          break;
      }

      color.background = getColorPerPolicy(viewsInfra[i].policy, true);

      var label = labelInit + " - Business agnostic";

      let node = createDigitalTransformNode(
        id,
        "circularImage",
        image,
        label,
        label,
        color,
        10 * i,
        -10
      );

      nodes.push(node);
    }
  }

  if (busOrientation == 1) {
    const startToPoint = showNonInfra ? idLdom : idLinf;
    var edges = new vis.DataSet([
      { from: start.id, to: startToPoint, dashes: true },
      { from: idLdom, to: idOdom, dashes: false },
      { from: idOdom, to: idSdom, dashes: false },
      { from: idOdom, to: idTIdom, dashes: false },
      { from: idTIdom, to: idTAdom, dashes: false },
      { from: idSdom, to: idTAdom, dashes: false },
      // { from: idTAdom, to: bcNode.id, dashes: true },

      { from: idLinf, to: idLdom, dashes: true },
      { from: idLinf, to: idOinf, dashes: false },
      { from: idLinf, to: idSinf, dashes: false },
      { from: idOinf, to: idOdom, dashes: true },
      { from: idOinf, to: idSinf, dashes: false },
      { from: idOinf, to: idTIinf, dashes: false },
      { from: idSinf, to: idSdom, dashes: true },
      { from: idSinf, to: idTAinf, dashes: false },
      { from: idTIinf, to: idTIdom, dashes: true },
      { from: idTIinf, to: idTAinf, dashes: false },
      { from: idTAinf, to: idTAdom, dashes: true },
      { from: idTAinf, to: bcInfraNode.id, dashes: true },
      { from: bcInfraNode.id, to: bcNode.id, dashes: true },
    ]);
    if (showNonInfra) {
      edges.add({ from: idTAdom, to: bcNode.id, dashes: true });
    } else {
      edges.add({ from: idTAinf, to: bcNode.id, dashes: true });
    }
  } else if (busOrientation == 2) {
    const startToPoint = showNonInfra ? idOdom : idOinf;

    var edges = new vis.DataSet([
      { from: start.id, to: startToPoint, dashes: true },
      { from: idOdom, to: idTIdom, dashes: false },
      { from: idOdom, to: idSdom, dashes: false },
      { from: idTIdom, to: idTAdom, dashes: false },
      { from: idSdom, to: idTAdom, dashes: false },
      { from: idTAdom, to: idLdom, dashes: false },
      // { from: idLdom, to: bcNode.id, dashes: true },

      { from: idOinf, to: idOdom, dashes: true },
      { from: idOinf, to: idTIinf, dashes: false },
      { from: idOinf, to: idSinf, dashes: false },
      { from: idTIinf, to: idTIdom, dashes: true },
      { from: idTIinf, to: idTAinf, dashes: false },
      { from: idSinf, to: idTAinf, dashes: false },
      { from: idSinf, to: idSdom, dashes: true },
      { from: idTAinf, to: idLinf, dashes: false },
      { from: idTAinf, to: idTAdom, dashes: true },
      { from: idLinf, to: idLdom, dashes: true },
      { from: idLinf, to: bcInfraNode.id, dashes: true },
      { from: bcInfraNode.id, to: bcNode.id, dashes: true },
    ]);
    if (showNonInfra) {
      edges.add({ from: idLdom, to: bcNode.id, dashes: true });
    } else {
      edges.add({ from: idLinf, to: bcNode.id, dashes: true });
    }
  } else if (busOrientation == 3) {
    const startToPoint = showNonInfra ? idSdom : idSinf;
    var edges = new vis.DataSet([
      { from: start.id, to: startToPoint, dashes: true },
      { from: idSdom, to: idOdom, dashes: false },
      { from: idOdom, to: idTAdom, dashes: false },
      { from: idOdom, to: idTIdom, dashes: false },
      { from: idTIdom, to: idTAdom, dashes: false },
      { from: idTAdom, to: idLdom, dashes: false },
      // { from: idLdom, to: bcNode.id, dashes: true },

      { from: idSinf, to: idSdom, dashes: true },
      { from: idSinf, to: idOinf, dashes: false },
      { from: idOinf, to: idTAinf, dashes: false },
      { from: idOinf, to: idOdom, dashes: true },
      { from: idOinf, to: idTIinf, dashes: false },
      { from: idTIinf, to: idTAinf, dashes: false },
      { from: idTIinf, to: idTIdom, dashes: true },
      { from: idTAinf, to: idLinf, dashes: false },
      { from: idTAinf, to: idTAdom, dashes: true },
      { from: idLinf, to: idLdom, dashes: true },
      { from: idLinf, to: bcInfraNode.id, dashes: true },
      { from: bcInfraNode.id, to: bcNode.id, dashes: true },
    ]);
    if (showNonInfra) {
      edges.add({ from: idLdom, to: bcNode.id, dashes: true });
    } else {
      edges.add({ from: idLinf, to: bcNode.id, dashes: true });
    }
  } else {
    const startToPoint = showNonInfra ? idTIdom : idTIinf;
    var edges = new vis.DataSet([
      { from: start.id, to: startToPoint, dashes: true },
      { from: idTIdom, to: idOdom, dashes: false },
      { from: idOdom, to: idTAdom, dashes: false },
      { from: idOdom, to: idSdom, dashes: false },
      { from: idSdom, to: idTAdom, dashes: false },
      { from: idTAdom, to: idLdom, dashes: false },
      // { from: idLdom, to: bcNode.id, dashes: true },

      { from: idTIinf, to: idTIdom, dashes: true },
      { from: idTIinf, to: idOinf, dashes: false },
      { from: idOinf, to: idTAinf, dashes: false },
      { from: idOinf, to: idOdom, dashes: true },
      { from: idOinf, to: idSinf, dashes: false },
      { from: idSinf, to: idTAinf, dashes: false },
      { from: idSinf, to: idSdom, dashes: true },
      { from: idTAinf, to: idLinf, dashes: false },
      { from: idTAinf, to: idTAdom, dashes: true },
      { from: idLinf, to: idLdom, dashes: true },
      { from: idLinf, to: bcInfraNode.id, dashes: true },
      { from: bcInfraNode.id, to: bcNode.id, dashes: true },
    ]);
    if (showNonInfra) {
      edges.add({ from: idLdom, to: bcNode.id, dashes: true });
    } else {
      edges.add({ from: idLinf, to: bcNode.id, dashes: true });
    }
  }

  var container = document.getElementById("network_div");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {
    physics: true,
    interaction: { hover: true },
    autoResize: true,

    height: "100%",
    width: "100%",
    nodes: {
      imagePadding: 11,
      borderWidth: 1,
      size: 30,
      color: {
        border: "#222222",
        background: "#BBE1FA",
      },
      font: { color: "#000", size: 10 },
      shadow: true,
    },
    edges: {
      smooth: { type: "dynamic", forceDirection: "horizontal", roundness: 0.4 },
      color: "gray",
      arrows: { to: { enabled: true } },
      shadow: true,
    },
    interaction: {
      navigationButtons: true,
      keyboard: true,
    },
    physics: {
      forceAtlas2Based: {
        springLength: -10,
      },
      minVelocity: 0.75,
      solver: "forceAtlas2Based",
      timestep: 0.53,
    },
  };
  network = new vis.Network(container, data, options);

  network.on("click", function (params) {
    params.event = "[original event]";
    var selectedNodeID = this.getNodeAt(params.pointer.DOM);
    if (selectedNodeID <= idBCdom) {
    } else if (selectedNodeID == idBCinf) {
      selectedView = viewBCmc;

      createBuildingBlocksTable(selectedView);
      drawIntraViewsPredecessorsChart(selectedView);

      document.getElementById("viewDetail").innerHTML =
        "<i>Policy: </i>" +
        CA(selectedView.policy) +
        "<br><i>Buisness capabilities (mission critial)</i>";
      document.getElementById("bbDetail").innerHTML =
        "<i>please select a builidng block</i>";
      $("#networkBBs2").fadeIn();
      $("#network_div2").fadeIn();
    } else if (selectedNodeID <= idTIdom) {
      for (let x in views) {
        if (views[x].id == selectedNodeID) {
          selectedView = views[x];

          if (clickedDPSs.length === 0) return;

          const abbs = filterABBSBaseDPS(selectedView.bbs);
          const newView = { ...selectedView };
          newView.bbs = abbs;

          document.getElementById("viewDetail").innerHTML =
            `<i>Policy:  ${CA(selectedView.policy)}</i>` +
            `<br><i>Name: ${CA(selectedView.name)}</i>`;

          const tableBBs = abbs.filter((abb) => !abb.hidden);
          createBuildingBlocksTable({ bbs: tableBBs });
          drawIntraViewsPredecessorsChart(newView);

          document.getElementById("bbDetail").innerHTML =
            "<i>please select a builidng block</i>";
          $("#networkBBs2").fadeIn();
          $("#network_div2").fadeIn();
          return;
        }
      }
    } else if (selectedNodeID <= idTIinf) {
      for (let x in viewsInfra) {
        if (viewsInfra[x].id == selectedNodeID) {
          selectedView = viewsInfra[x];

          if (clickedDPSs.length === 0) return;
          const abbs = filterABBSBaseDPS(selectedView.bbs);
          const newView = { ...selectedView };
          newView.bbs = abbs;
          const tableBBs = abbs.filter((abb) => !abb.hidden);
          createBuildingBlocksTable({ bbs: tableBBs });
          drawIntraViewsPredecessorsChart(newView);

          document.getElementById("viewDetail").innerHTML =
          `<i>Policy:  ${CA(selectedView.policy)}</i>` +
          `<br><i>Name: ${CA(selectedView.name)}</i>`;
          document.getElementById("bbDetail").innerHTML =
            "<i>please select a builidng block</i>";
          $("#networkBBs2").fadeIn();
          $("#network_div2").fadeIn();
          return;
        }
      }
    } else {
      console.log("start button or undefined");
    }
  });
}

const filterABBSBaseDPS = (abbs) => {
  return abbs.map((abb) => {
    for (let idx = 0; idx < clickedDPSs.length; idx++) {
      let dps = clickedDPSs[idx];
      if (abb.digPubServ.indexOf(dps) > -1) {
        abb.hidden = false;
        return abb;
      }
    }
    abb.hidden = true;
    return abb;
  });
};

/**
 * Create elements for info at bbs chart
 */
const bbsFillInfo = (details) => {
  $("#networkBBs2-dbc-info > .info").html(`
      <div>
        <span>ID: </span>
        <span>${details.id}</span>
      </div>
      <div>
        <span>Policy: </span>
        <span>${details.policy}</span>
      </div>
      <div>
        <span>Name: </span>
        <span>${details.name}</span>
      </div>
  `);
};

const filterBBTableWithMultipleDPS = (bbs) => {
  let bbsIDs = bbs.map((bb) => bb.id);

  const tableBodyRows = document.querySelectorAll("#bbTable > tbody > tr");

  for (let rowIdx = 0; rowIdx < tableBodyRows.length; rowIdx++) {
    let tr = tableBodyRows[rowIdx];
    tr.setAttribute("style", "");
    const td = tr.querySelector("td:first-child");
    const tdValue = td.textContent;
    if (bbsIDs.indexOf(tdValue) === -1) tr.style.display = "none";
  }
};
/**
 * 
 Create and draw bb chart
 */
function drawIntraViewsPredecessorsChart(view) {
  if (network2 !== null) {
    network2.destroy();
    network2 = null;
  }

  var bbs = view.bbs;

  if (bbs.length == 0 || bbs.every((bb) => bb.hidden === true)) {
    alert(
      "There are no building blocks available for the filter combination selected"
    );
    $(".networkBBs2-no-results").removeClass("d-none");
    return;
  }

  $(".networkBBs2-no-results").addClass("d-none");

  var nodes = [];
  var edges = [];

  for (let i in bbs) {
    let bb = bbs[i];

    let image;
    if (view.name == "Buisness Capabilities (mission critial)") {
      image = "bc.png";
    } else {
      image = "rank/old-" + Math.round(bb.ability) + ".png";
    }

    var label = ` ${CA(bb.abb || "")
      .replace(/.{20}\S*\s+/g, "$&@")
      .split(/\s+@/)
      .join("\n")}`;

    const title = `<div class="network2-tooltips">
    <div>ID: ${bb.id} </div>
    <div>Name: ${bb.abb} </div>
    <div>Policy Domain: ${bb.policy} </div>
    <div>DPS: ${bb.digPubServ.join(", ")} </div>
    <div>Ability to support: ${bb.ability} </div>
  </div>`;

    var color = [];
    color.background = "#fff";

    let node = createDigitalTransformNode(
      bb.id,
      "circularImage",
      image,
      label,
      title,
      color
    );

    node.dps = bb.digPubServ;
    node.hidden = bb.hidden;

    nodes.push(node);

    var childs = bb.successors;
    for (let y in childs) {
      var childID = childs[y];
      var edge = [];
      edge.from = bb.id;
      edge.to = childID;
      edges.push(edge);
    }
  }

  network2Nodes = new vis.DataSet(nodes);

  var container = document.getElementById("network_div2");
  var data = {
    nodes: network2Nodes,
    edges: edges,
  };
  var options = {
    physics: true,
    interaction: { hover: true },
    height: "100%",
    width: "100%",
    nodes: {
      imagePadding: 11,
      borderWidth: 1,
      size: 30,
      color: {
        border: "#222222",
        background: "#BBE1FA",
      },
      font: {
        color: "#000",
        size: 10,
      },

      shadow: true,
    },
    edges: {
      smooth: { type: "dynamic", forceDirection: "horizontal", roundness: 0.4 },
      color: "gray",
      arrows: { to: { enabled: true } },
    },
    interaction: {
      navigationButtons: true,
      keyboard: true,
    },
    physics: {
      forceAtlas2Based: {
        springLength: -5,
      },
      minVelocity: 0.75,
      solver: "forceAtlas2Based",
      timestep: 0.53,
    },
  };

  network2 = new vis.Network(container, data, options);
  network2.on("click", function (params) {
    params.event = "[original event]";
    var selectedNodeID = this.getNodeAt(params.pointer.DOM);
    var bbs = selectedView.bbs;
    for (let x in bbs) {
      if (bbs[x].id == selectedNodeID) {
        if (bbs[x].area == null) {
          document.getElementById("bbDetail").innerHTML =
            `<i>ID: ${bbs[x].id}</i>` +
            `<br><i>name: ${bbs[x].abb}</i>` +
            "</i>";
          "<br><i>Ability to support the dBusCap: " + bbs[x].ability + "</i>";
        } else {
          document.getElementById("bbDetail").innerHTML =
            `<i>ID: ${bbs[x].id}</i>` +
            `<br><i>Area: ${bbs[x].area}</i>` +
            "<br><i>Ability to support the dBusCap: " +
            bbs[x].ability +
            "</i>";
        }

        return;
      }
    }
  });

  network2.once("beforeDrawing", function () {
    network2.focus(1, {
      scale: 10,
    });
  });
  network2.once("afterDrawing", function () {
    network2.fit({
      animation: {
        duration: 1300,
        easingFunction: "easeInQuad",
      },
    });
  });
}

function filterBBTableByID() {}

/**
 * 
 Create bb table
 */
function createBuildingBlocksTable(bc) {
  let table = document.getElementById("bbTable");
  table.innerHTML = "";
  let thead = table.createTHead();
  let row = thead.insertRow();

  let th1 = thWithTextNode("ID");
  let th2 = thWithTextNode("View");
  let th3 = thWithTextNode("Area");
  let th4 = thWithTextNode("Name");
  let th5 = thWithTextNode("Description");
  let th6 = thWithTextNode("Ability to support the dBusCap");
  let th7 = thWithTextNode("IDs' successors");
  let th8 = thWithTextNode("Digital Public service");

  row.appendChild(th1);
  row.appendChild(th2);
  row.appendChild(th3);
  row.appendChild(th4);
  row.appendChild(th5);
  row.appendChild(th6);
  row.appendChild(th7);
  row.appendChild(th8);

  let body = document.createElement("tbody");
  table.appendChild(body);

  var bbs = Array.from(new Set(bc.bbs));
  currentBBTableBody = bbs;

  var dBusCapId = bc['id'];

  if( dBusCapId === undefined) {
    dBusCapId = document.getElementById("dps-network-bc-info").getElementsByTagName('p')[0].textContent.split(' ')[1];
  }
  
  for (var k in bbs) {

    // search for the ability based on both the abb and dBusCap ids
    let abbId = bbs[k]['id'];
    let currentAbility = 0;
    try {
      currentAbility = customBBs.find( function(el) {
        return el.id === `${abbId} - ${dBusCapId}`;
      })['Ability to support the dBusCap'];
      currentBBTableBody[k]['ability'] = currentAbility;
    } 
    // if no abb exists, search in the bcList
    catch(err) {
      currentAbility = bcList[dBusCapId]['bbs'].find(function(el) {
        return el.id === abbId;
      })['ability'];
      currentBBTableBody[k]['ability'] = currentAbility;
    }    

    let row = body.insertRow();
    
    row.insertCell().appendChild(document.createTextNode(bbs[k].id));

    row.insertCell().appendChild(document.createTextNode(bbs[k].view));

    row.insertCell().appendChild(document.createTextNode(bbs[k].area));

    row.insertCell().appendChild(document.createTextNode(bbs[k].abb));

    row.insertCell().appendChild(document.createTextNode(bbs[k].description));
    
    row.insertCell().appendChild(document.createTextNode(currentAbility)); //bbs[k].ability));

    let succs = bbs[k].successors.join(", ");

    let digPubServs = bbs[k].digPubServ.join(", ");

    row.insertCell().appendChild(document.createTextNode(succs));

    row.insertCell().appendChild(document.createTextNode(digPubServs));
  }
}

document
  .querySelector("#policy-filter-span")
  .addEventListener("click", function () {
    this.classList.toggle("goog-combobox-active");
    let div = this.querySelector("#policy-filter-span > div");
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });

let xAxisValues = document.querySelectorAll("#policy-filter-span > div > div");

for (let i = 0; i < xAxisValues.length; i++) {
  xAxisValues[i].addEventListener("click", function () {
    let text = xAxisValues[i].textContent;
    filterXAxis(xAxisValues[i].getAttribute("value"), text.trim());
  });
}
/**
 * Change the bubble chart's x axis
 */
const filterXAxis = function (value, valueToShow) {
  if (value === "Strategy Fit") {
    order = [0, 1, 2, 3, 4, 5];
  } else if (value === "Expected public value") {
    order = [0, 5, 2, 3, 4, 1];
  }

  document
    .querySelector("#policy-filter-span > input ")
    .setAttribute("placeholder", valueToShow);

  view.setColumns(order);

  drawBusinessCapabilityChart(quadrantWidth());
};

/**
 * Html selects for dps network
 */
const dpsSelectDivList = document.querySelector(".dps-select-div ul");
dpsSelectDivList.addEventListener("click", (e) => {
  const element = e.target;
  let input;
  let checked;
  if (element.tagName !== "INPUT") {
    input = element.parentElement.querySelector("input");
    checked = !input.checked;
  } else {
    input = element;
    checked = input.checked;
  }

  input.checked = checked;
  if (element.tagName !== "INPUT") {
    let event = new Event("change", { bubbles: true });
    element.dispatchEvent(event);
  }
});

const filteringDpsNetwork = (dpss) => {
  let temp = new vis.DataSet();

  DPSNetNodes.forEach((node) => {
    DPSNetNodes.update({ id: node.id, hidden: false });
    temp.add({ ...node, hidden: false });
  });

  if (dpss.length === 0) {
    DPSNetNodes.clear();
    temp.forEach((node) => DPSNetNodes.add(node));
    return;
  }
  temp = new vis.DataSet();
  DPSNetNodes.forEach((node) => {
    let hidden;
    if (dpss.indexOf(node.dpsID) > -1) {
      hidden = false;
    } else {
      hidden = true;
    }
    node.hidden = hidden;
    temp.add({ ...node, hidden });
    DPSNetNodes.update({ id: node.id, hidden: hidden });
  });

  DPSNetNodes.clear();
  temp.forEach((node) => DPSNetNodes.add(node));
};

dpsSelectDivList.addEventListener("change", (e) => {
  const dpsElements = dpsSelectDivList.querySelectorAll("input:checked");
  const dps = [];
  for (let idx = 0; idx < dpsElements.length; idx++) {
    dps.push(dpsElements[idx].getAttribute("data-dig-pub-service"));
  }

  const { dps: allBcDps } = clickedBC;
  const dpsNames = [];
  clickedDPSs = dps;

  dps.forEach((dp) => {
    dpsNames.push(allBcDps.filter((ps) => ps.id === dp)[0].name);
  });

  bbsMultipleDPSInfo(dpsNames);

  let filteredBBSs;

  if (dps.length > 0) {
    filteredBBSs = clickedBC.bbs.filter((bb) => {
      for (let idx = 0; idx < bb.digPubServ.length; idx++) {
        if (dps.indexOf(bb.digPubServ[idx]) > -1) return true;
      }
      return false;
    });
  } else {
    filteredBBSs = clickedBC.bbs;
  }
  createBuildingBlocksTable({ bbs: filteredBBSs });
  filternetwork2(dps);
  filteringDpsNetwork(dps);
  drawViewsPredecessorsChart(clickedBC, dps);
});

/**
 * 
 Write dps info next to bb chart
 */
const bbsMultipleDPSInfo = (names) => {
  names = names.map((name) => `<li>${name}</li>`).join("\n");
  $("#networkBBs2-dps-info > .info").html(
    `<ul class="networkBBs2-dps-info-list" >
      ${names}
    </ul>`
  );
};

$(document).on("scroll", function () {
  let scrollDistance = $(this).scrollTop();
  let bbStart = $("#bb-div").offset().top;
  let windowHeight = $(window).height();

  if (bbStart === 0) return;

  if (scrollDistance >= bbStart - windowHeight) {
    $(".scroll-to-dps").fadeIn().css({ display: "flex" });
  } else {
    $(".scroll-to-dps").fadeOut();
  }
});

$(".scroll-to-dps").on("click", function () {
  scrollToElement("#networkBBs");
});
