/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jsFE/roadmap.js":
/*!*************************!*
  !*** ./jsFE/roadmap.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var demo = true;
google.charts.load("current", {
  packages: ["corechart", "controls"]
});
var chartBubble;
var data;
var dashboard;
var selectedValue;
var network = null;
var DPSnetwork = null;
var DPSNetNodes;
var network2 = null;
var network2Nodes;
var toogleInfra = true;
var busOrientation = 1;
var bcList = {};
var customBBs = [];
var DPSs = {};
var viewsInfra = [];
var viewBCmc = [];
var selectedView = [];
var idBCdom = 1;
var idBCinf = 2;
var idLdom = 3;
var idOdom = 4;
var idSdom = 5;
var idTAdom = 6;
var idTIdom = 7;
var idLinf = 8;
var idOinf = 9;
var idSinf = 10;
var idTAinf = 11;
var idTIinf = 12;
var selectedBC;
var clickedBC;
var clickedDPSs = [];
var maxBudget = 0;
var currentBBTableBody;
var fileContent = {};
var inputBCJSON;
var inputBBJSON;
var inputDPSJSON;
var hAxisLabes = {
  1: "National Digital Strategy Fit",
  5: "Expected Public Value"
};
var policyColors = {
  health: "#e74a3b",
  tax: "#4e73df",
  "business agnostic": "#1cc88a",
  infrastructure: "#1cc88a"
};
var policyColorsWithOpacity = {
  health: "#e74a3b80",
  tax: "#4e73df80",
  "business agnostic": "#1cc88a80",
  infrastructure: "#1cc88a80"
};
var policyImages = {
  health: "../img/health.png",
  tax: "../img/tax.png",
  "business agnostic": "../img/tech.png"
};
var natDigStrategicFitTooltip = "It reports the strategic priority assigned to the digital business capability by the national digital agenda of the country.";
var expPubValueTooltip = "It refers to the expected beneficial impact (cost discounted) provided by the target prospective ability (*) to support the digital business capability. (*) default is the highest possible prospective ability";
var abToSuppDbusCapTooltip = "It measures the current ability to support the digital business capability";
var budgetTooltip = "It refers to the estimated amount (in millions of EUR) required to reach the target prospective ability of the Architectural Building Block to support the digital business capability (to fulfill the GAP)";
var optimalAvgTooltip = "It measures the perspective ability to support a Digital Business Capability";
/**
 *
 * Create an object from the array of DPS and group them by id
 */

var groupDPSsByID = function groupDPSsByID(array) {
  return array.reduce(function (obj, item) {
    var id = item.ID.toString();
    var policy = item.Policy.trim().toLowerCase().replace(/ /g, " ");
    var name = item.Name.toString();
    var description = (item.Description || "").trim();
    var abbs = [];
    var dBCs = [];

    if (item["Digital_Business_Capability"] && item["Digital_Business_Capability"] !== null) {
      var tempDBCS = item["Digital_Business_Capability"].toString().trim();
      dBCs = tempDBCS.split(";").filter(Boolean);
    }

    var tempObj = _defineProperty({}, id, {
      id: id,
      policy: policy,
      name: name,
      description: description,
      dBCs: dBCs,
      abbs: abbs
    });

    return _objectSpread(_objectSpread({}, obj), tempObj);
  }, {});
};
/**
 *
 * Create an object from the array of ABBs and group them by id
 */


var groupABBByID = function groupABBByID(array) {
  return array.reduce(function (obj, item) {
    var id = item.ID.toString();
    var policy = item.Policy.trim().toLowerCase();
    var policyToCompare = policy.split(" ").filter(Boolean).join("-");
    var view = item.View.split(" ").filter(function (v) {
      return v.toLowerCase() !== "view";
    }).filter(Boolean).join("").toLowerCase();
    var area = item.Area.trim().split("-").filter(Boolean).map(function (str) {
      return str.trim();
    }).map(function (str) {
      return str.toLowerCase();
    }).join("-");
    var abb = item["Architecture_Building_Block"].trim();
    var description = (item.Description || "").trim();
    var ability = null;
    var successors = [];
    var digPubServ = [];

    if (item.successors !== undefined && item.successors !== null) {
      var tempSuccessors = item.successors.toString();
      successors = tempSuccessors.split(";").filter(Boolean);
    }

    if (item["Digital_Public_Service"] !== undefined && item["Digital_Public_Service"] !== null) {
      var tempDPS = item["Digital_Public_Service"].toString();
      digPubServ = tempDPS.split(";").filter(Boolean);
    }

    var abbObject = {
      id: id,
      policy: policy,
      view: view,
      area: area,
      abb: abb,
      description: description,
      ability: ability,
      successors: successors,
      digPubServ: digPubServ
    };

    var tempObj = _defineProperty({}, id, abbObject);

    if (policyToCompare === "business-agnostic") {
      for (var x in viewsInfra) {
        if (viewsInfra[x].name == view) {
          viewsInfra[x].bbs.push(abbObject);
          break;
        }
      }
    }

    return _objectSpread(_objectSpread({}, obj), tempObj);
  }, {});
};
/**
 *
 * Create an object from the array of dBusCaps and group them by id
 */


var groupBCByID = function groupBCByID(array) {
  return array.reduce(function (obj, item) {
    var id = item.ID.toString().trim();
    var policy = item.Policy.trim();
    var name = item.Name.trim();
    var description = item.Description.toString().trim();
    var bbs = [];
    var dps = [];
    var views = [];
    var view0 = createView("legal", idLdom, policy);
    var view1 = createView("organisational", idOdom, policy);
    var view2 = createView("semantic", idSdom, policy);
    var view3 = createView("technical-application", idTAdom, policy);
    var view4 = createView("technical-infrastructure", idTIdom, policy);
    var priority = null;
    var avgAbility = null;
    var prospectiveAbility = null;
    views.push(view0);
    views.push(view1);
    views.push(view2);
    views.push(view3);
    views.push(view4);
    obj[id] = {
      id: id,
      policy: policy,
      name: name,
      description: description,
      views: views,
      priority: priority,
      avgAbility: avgAbility,
      bbs: bbs,
      dps: dps,
      prospectiveAbility: prospectiveAbility
    };
    return obj;
  }, {});
}; // *********************************************************
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
  var explanatorySentences = {
    1: ["The quadrant represents the", "scores assigned to the evaluated digital", "business capability/ies, according to the", "following parameters:", "   • National Strategy Fit", "   • Ability to support the dBusCap", "   • Target Perspective Ability to Support", "     dBusCap", "   • Expected Public Value and the", "   • Estimated budget (in millions EUR)"],
    2: ["In addition to the information visible from the quadrant, in the following table you can find a summary of the Capability ", "Assessment Results. In particular, the below table shows the current MS's ability to support the evaluated digital ", "business capability/ies and the target ability to support the evaluated digital business capabilities. As a result, the ", "estimated budget aims to fulfil the GAP between the 'AS IS ability' and the target prospective ability. Moreover, the ", "scores are reported per area/view (legal, organisation, semantic, technical-application and technical infrastructure).", "Finally, you find a summary of the assigned parameters (National Digital fit, Expected Public Value and Estimated ", "Budget) to evaluated digital business capability/ies."],
    3: ["The following table sumarises the selected digital business capabilities"],
    4: ["Below, you have a summary table and a graphical representation of all the Digital Public Services in", "scope, meaning the ones supporting the selected digital business capability"],
    5: ["The following graph represents the MS's Digital Transformation Roadmap, by which the user can", "select the different orientation for the implementation of the selected digital bysiness capability"],
    6: ["The following table summarises the selected digital business capabilities"],
    7: ["Below you can see the graphical representation of the functionalities (i.e. Skills, expertise, experience", "etc.) supporting the selected digital business capability, based on the MS's orientation (legal,", "organizational, semantic and technical) priority chosen. The content of the nodes (expressed by the", "blue color) is variable because it reflects the relation between the ABBs and the ability to support", "the selected Digital Business Capability"],
    8: ["The following is a table containing the list of the functionalities (i.e. Skills, expertise, experience, etc.)", "needed to implement the selected Digital Business Capability"]
  }; // Gap between lines

  var lineGap; // set font parameters

  if (sentenceNum === 2) {
    pdf.setFontSize(10);
    lineGap = 5;
  } else {
    pdf.setFontSize(12);
    lineGap = 7;
  }

  pdf.setFontType('italic');
  pdf.setTextColor(0, 0, 0); // black
  // Add the sentences into the PDF

  var text = explanatorySentences[sentenceNum];
  var y = startY;

  for (var i = 0; i < text.length; i++) {
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
  var titleInfo = {
    1: {
      title: "Introduction",
      coordinates: [88, 20]
    },
    2: {
      title: "Portfolio Management Decision Support",
      coordinates: [45, 20]
    },
    3: {
      title: "Digital Transformation Roadmap Decision Support",
      coordinates: [30, 20]
    },
    4: {
      title: "eGovERA© Building Blocks",
      coordinates: [65, 20]
    }
  }; // Add top right icon

  var rightIcon = new Image();
  rightIcon.src = "../img/ec2.png";
  var rightIconCoords = [180, 1, 25, 18]; // x, y, width, height

  pdf.addImage.apply(pdf, [rightIcon, 'png'].concat(rightIconCoords)); // Add top left icon and sentence

  var leftIcon = new Image();
  leftIcon.src = "../img/egovera-icon2.png";
  var leftIconCoords = [4, 2, 12, 11];
  pdf.addImage.apply(pdf, [leftIcon, 'png'].concat(leftIconCoords));
  var topSentCoords = [15, 10]; // x, y

  var topSentence = "eGovERA ©";
  pdf.setTextColor(0, 0, 0); // black

  pdf.setFontType('normal');
  pdf.setFontSize(15);
  pdf.text.apply(pdf, [topSentence].concat(topSentCoords)); // Add bottom left sentence

  var leftSentCoords = [10, 292]; // x, y

  var leftSentence = "Copyright © European Commission 2022";
  pdf.setFontSize(10);
  pdf.setTextColor(192, 192, 192);
  pdf.setFontType('italic');
  pdf.text.apply(pdf, [leftSentence].concat(leftSentCoords)); // Add bottom right sentence and underline

  var rightSentCoords = [160, 292]; // x, y

  var rightSentence = "ISA product license v1.4";
  pdf.setFontSize(10);
  pdf.setTextColor(102, 178, 255); // light blue

  pdf.text.apply(pdf, [rightSentence].concat(rightSentCoords));
  pdf.setLineWidth(0.1);
  pdf.setDrawColor(102, 178, 255); // light blue

  pdf.line(160, 293, 198, 293); // startX, startY, endX, endY
  // Add title

  var titleCoords = titleInfo[titleNum].coordinates;
  var titleSentence = titleInfo[titleNum].title;
  pdf.setFontSize(17);
  pdf.setTextColor(0, 153, 0); // green

  pdf.setFontType('bold');
  pdf.text.apply(pdf, [titleSentence].concat(_toConsumableArray(titleCoords)));
}
/**
 * Creates the Introductory Page for the PDF
 * 
 * @param {Object} pdf PDF Object
 */


function addIntroductoryPage(pdf) {
  //pdf.addPage();
  addPageTemplate(pdf, 1); // Add sentence1

  var sentence1 = "DG DIGIT";
  var sentence1Coords = [90, 60];
  pdf.setFontSize(20);
  pdf.setTextColor(0, 0, 0); // black

  pdf.setFontType('bold');
  pdf.text.apply(pdf, [sentence1].concat(sentence1Coords)); // Add sentence2

  var sentence2 = "Unit.D2";
  var sentence2Coords = [93, 70];
  pdf.text.apply(pdf, [sentence2].concat(sentence2Coords)); // Add sentence3

  var sentence3 = "eGovERA © portal";
  var sentence3Coords = [52, 100];
  pdf.setFontSize(35);
  pdf.setTextColor(51, 153, 255); // blue

  pdf.text.apply(pdf, [sentence3].concat(sentence3Coords)); // Add sentence4

  var sentence4 = "Decision support section";
  var sentence4Coords = [49, 130];
  pdf.setTextColor(0, 153, 0); // light green

  pdf.setFontSize(27);
  pdf.text.apply(pdf, [sentence4].concat(sentence4Coords)); // Add sentence5

  var sentence5 = "PDF export results";
  var sentence5Coords = [65, 145];
  pdf.text.apply(pdf, [sentence5].concat(sentence5Coords)); // Add user's information 

  pdf.setTextColor(0, 0, 0); // black

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
} // Start the loading functionality for the PDF Download button


function startLoader(textId, buttonId) {
  document.querySelector("#".concat(textId)).classList.add('download-btn-text-hidden');
  document.querySelector("#".concat(buttonId)).classList.add('button-loader');
} // Stop the loading functionality for the PDF Download button


function stopLoader(textId, buttonId) {
  document.querySelector("#".concat(textId)).classList.remove('download-btn-text-hidden');
  document.querySelector("#".concat(buttonId)).classList.remove('button-loader');
} // When the pdf download button is clicked


document.getElementById('pdfButton').addEventListener('click', createPDF);
/**
 * Structure the PDF
 */

function createPDF() {
  // Create the PDF Object
  var pdf = new jsPDF();
  var pdfName = 'decision-support.pdf';
  startLoader("pdfButtonTxt", "pdfButton"); // Add to the PDF Object the Portfolio Management Table and Graph

  html2canvas(document.querySelector('[aria-label="A chart."]')).then(function (canvas) {
    if (!(canvas.height === 0) && !(canvas.width === 0)) {
      var _pdf$autoTable;

      addIntroductoryPage(pdf); // Add the Graph of the Portofolio Management Section

      pdf.addPage();
      addPageTemplate(pdf, 2);
      addExplanatoryText(pdf, 15, 55, 1);
      addExplanatoryText(pdf, 15, 160, 2);
      var img = canvas.toDataURL('image/url');
      pdf.addImage(img, 'png', 95, 30, 105, 120); // Add the Table of the Portofolio Management Section

      var titles = [["ID"], ["Policy Domain"], ["Digital Business Capability"], ["National Digital Strategy Fit"], ["Target Prospective Ability to support the dBusCap"], ["Estimated budget (in millions EUR)"], ["Expected Public Value"], ["Overall ability to support the dBusCap"], ["View Name"], ["Ability to support the dBusCap per view"]]; // If dBusCap selected

      var currentBcList;

      if (selectedValue) {
        currentBcList = _defineProperty({}, selectedValue, bcList[selectedValue]);
      } else {
        currentBcList = bcList;
      }

      var _data = [];
      var count = 0; // Populate the rows of the table

      for (var key in currentBcList) {
        for (var viewKey in currentBcList[key]['views']) {
          var row = [currentBcList[key]['views'][viewKey]['name'], currentBcList[key]['views'][viewKey]['avgAbility']];

          if (count % 5 === 0) {
            row.unshift({
              rowSpan: 5,
              content: currentBcList[key]['id'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            }, {
              rowSpan: 5,
              content: currentBcList[key]['policy'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            }, {
              rowSpan: 5,
              content: currentBcList[key]['name'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            }, {
              rowSpan: 5,
              content: currentBcList[key]['prospectiveAbility'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            }, {
              rowSpan: 5,
              content: currentBcList[key]['priority'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            }, {
              rowSpan: 5,
              content: currentBcList[key]['budget'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            }, {
              rowSpan: 5,
              content: currentBcList[key]['expRandom'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            }, {
              rowSpan: 5,
              content: currentBcList[key]['avgAbility'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            });
          }

          _data.push(row);

          count++;
        }
      }

      pdf.autoTable(titles, _data, (_pdf$autoTable = {
        columnStyles: {
          0: {
            cellWidth: 17
          },
          1: {
            cellWidth: 16
          },
          2: {
            cellWidth: 16
          },
          3: {
            cellWidth: 16
          },
          4: {
            cellWidth: 18
          },
          5: {
            cellWidth: 18
          },
          6: {
            cellWidth: 19
          },
          7: {
            cellWidth: 20
          },
          8: {
            cellWidth: 25
          },
          9: {
            columnWidth: 14
          }
        },
        theme: 'grid',
        headStyles: {
          fillColor: [8, 161, 88],
          fontSize: 7,
          halign: 'center',
          valign: 'middle'
        },
        margin: {
          right: 20
        },
        startY: 200
      }, _defineProperty(_pdf$autoTable, "margin", {
        top: 30
      }), _defineProperty(_pdf$autoTable, "didDrawPage", function didDrawPage() {
        addPageTemplate(pdf, 2);
      }), _pdf$autoTable)); // Add the Information for the first section of the Digital Transformation Roadmap

      html2canvas(document.querySelector('#dps-network-info')).then(function (canvas) {
        if (!(canvas.height === 0) && !(canvas.width === 0)) {
          pdf.addPage();
          addPageTemplate(pdf, 3);
          addExplanatoryText(pdf, 15, 35, 3);
          addExplanatoryText(pdf, 15, 93, 4);
          var titles1 = [["Selected Digital Business Capability"]];
          var titles2 = [["Table of Digital Public Services in scope"]];
          var data1 = [[document.getElementById("dps-network-bc-info").getElementsByTagName('p')[0].textContent.split(":")[0], document.getElementById("dps-network-bc-info").getElementsByTagName('p')[0].textContent.split(":")[1]], [document.getElementById("dps-network-bc-info").getElementsByTagName('p')[1].textContent.split(":")[0], document.getElementById("dps-network-bc-info").getElementsByTagName('p')[1].textContent.split(":")[1]], [document.getElementById("dps-network-bc-info").getElementsByTagName('p')[2].textContent.split(":")[0], document.getElementById("dps-network-bc-info").getElementsByTagName('p')[2].textContent.split(":")[1]], [document.getElementById("dps-network-bc-info").getElementsByTagName('p')[3].textContent.split(":")[0], document.getElementById("dps-network-bc-info").getElementsByTagName('p')[3].textContent.split(":")[1]]];
          var data2 = [];
          var liItemsArr = [];
          var liItems = document.getElementById("dps-select-info").getElementsByTagName('li');

          for (var i = 0; i < liItems.length; i++) {
            if (clickedDPSs.length !== 0) {
              var id = liItems[i].textContent.split("-")[0].trim();

              for (var j = 0; j < clickedDPSs.length; j++) {
                if (id === clickedDPSs[j]) {
                  liItemsArr.push(liItems[i].textContent);
                }
              }
            } else {
              liItemsArr.push(liItems[i].textContent);
            }
          } // Create rows of three liItems


          var num = 0;

          for (var _i = 0; _i < Math.floor(liItemsArr.length / 3) + 1; _i++) {
            var currRow = [];

            for (var _j = 0; _j < 3; _j++) {
              if (num < liItemsArr.length) {
                currRow.push(liItemsArr[num]);
              }

              num += 1;
            }

            if (currRow.length > 0) {
              data2.push(currRow);
            }
          }

          pdf.autoTable({
            startY: 42,
            head: [[{
              content: titles1,
              colSpan: 2,
              styles: {
                halign: 'center',
                fillColor: [8, 161, 88]
              }
            }]],
            body: data1,
            theme: "grid",
            talbeWidth: 900
          });
          pdf.autoTable({
            startY: 105,
            head: [[{
              content: titles2,
              colSpan: 3,
              styles: {
                halign: 'center',
                fillColor: [8, 161, 88]
              }
            }]],
            body: data2,
            theme: "grid"
          }); // Add the Graph for the first section of the Digital Transformation Roadmap

          html2canvas(document.querySelector('#dps-network-div')).then(function (canvas) {
            if (!(canvas.height === 0) && !(canvas.width === 0)) {
              // set the space between the table and the graph
              var decreasedSpace = 0;

              switch (data2.length) {
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

              var _img = canvas.toDataURL('image/url');

              var imgProps = pdf.getImageProperties(_img);
              var pdfWidth = pdf.internal.pageSize.getWidth();
              var pdfHeight = imgProps.height * pdfWidth / imgProps.width;
              pdf.addImage(_img, 'png', 14, 180 - decreasedSpace, pdfWidth - 24, pdfHeight);
              var graphTitle1 = "Graphical representation of the Digital Public services in scope";
              pdf.autoTable({
                startY: 174 - decreasedSpace,
                head: [[{
                  content: graphTitle1,
                  styles: {
                    halign: 'center',
                    fillColor: [8, 161, 88]
                  }
                }]],
                margin: {
                  right: 10
                }
              }); // Add the Information for the second section of the Digital Transformation Roadmap

              html2canvas(document.querySelector('#network_control')).then(function (canvas) {
                if (!(canvas.height === 0) && !(canvas.width === 0)) {
                  pdf.addPage();
                  addPageTemplate(pdf, 3);
                  addExplanatoryText(pdf, 15, 35, 5);
                  var title = [["Implementation orientation for the digital transformation"]];
                  var _data2 = [["Legal Orientation: a member state has a legal orientation when its first priority, in the digital public service design, is to address and implement legal requirements"], ["Organizational/Governance Orientation: a member state has a governance orientation when its first priority, in the digital public service design, is to address the possible channels for the public service delivery, and the definition of Governance model"], ["Semantic/Intergration Orientation: a member state has a semantic/intergration orientation when its first priority, in the digital public service design, is to address the possible source of data (e.g. base registry), how data will be exchanged and to define guidelines and agreements for the sharing data"], ["Technical Orientation: a member state has a legal orientation when its first priority, in the digital public service design, is to reuse/share software components (e.g. registry services), to address exchanging capabilities of data (e.g. interfaces) and to define technical interoperability agreements"]];
                  pdf.autoTable({
                    startY: 160,
                    head: [[{
                      content: title,
                      styles: {
                        halign: 'center',
                        fillColor: [8, 161, 88]
                      },
                      fontStyle: 'bold'
                    }]],
                    body: _data2,
                    theme: "grid"
                  }); // Add the Graph for the second section of the Digital Transformation Roadmap

                  html2canvas(document.querySelector('#network_div')).then(function (canvas) {
                    if (!(canvas.height === 0) && !(canvas.width === 0)) {
                      var _img2 = canvas.toDataURL('image/url');

                      var _imgProps = pdf.getImageProperties(_img2);

                      var _pdfWidth = pdf.internal.pageSize.getWidth();

                      var _pdfHeight = _imgProps.height * _pdfWidth / _imgProps.width;

                      pdf.addImage(_img2, 'png', 14, 51, _pdfWidth - 24, _pdfHeight); // Add the title

                      var graphTitle2 = "Steps of the Digital Transformation Roadmap";
                      pdf.autoTable({
                        startY: 48,
                        head: [[{
                          content: graphTitle2,
                          styles: {
                            halign: 'center',
                            fillColor: [8, 161, 88]
                          }
                        }]],
                        margin: {
                          right: 10
                        }
                      }); // Add the Information for the third section of the Digital Transformation Roadmap

                      html2canvas(document.querySelector('#graph3_info')).then(function (canvas) {
                        if (!(canvas.height === 0) && !(canvas.width === 0)) {
                          pdf.addPage();
                          addPageTemplate(pdf, 3);
                          addExplanatoryText(pdf, 15, 35, 6);
                          addExplanatoryText(pdf, 15, 90, 7);
                          var titles1 = [["Digital Business Capability"]];
                          var data1 = [[document.getElementById("dps-network-bc-info").getElementsByTagName('p')[0].textContent.split(":")[0], document.getElementById("dps-network-bc-info").getElementsByTagName('p')[0].textContent.split(":")[1]], [document.getElementById("dps-network-bc-info").getElementsByTagName('p')[1].textContent.split(":")[0] + " domain", document.getElementById("dps-network-bc-info").getElementsByTagName('p')[1].textContent.split(":")[1]], [document.getElementById("dps-network-bc-info").getElementsByTagName('p')[2].textContent.split(":")[0], document.getElementById("dps-network-bc-info").getElementsByTagName('p')[2].textContent.split(":")[1]], ["Estimated Budget (in millions EUR)", "".concat(maxBudget)]];
                          pdf.autoTable({
                            startY: 40,
                            head: [[{
                              content: titles1,
                              colSpan: 2,
                              styles: {
                                halign: 'center',
                                fillColor: [8, 161, 88]
                              }
                            }]],
                            body: data1,
                            theme: "grid",
                            talbeWidth: 900
                          });
                        } // Add the Graph for the third section of the Digital Transformation Roadmap


                        html2canvas(document.querySelector('#network_div2')).then(function (canvas) {
                          if (!(canvas.height === 0) && !(canvas.width === 0)) {
                            var _img3 = canvas.toDataURL('image/url');

                            var _imgProps2 = pdf.getImageProperties(_img3);

                            var _pdfWidth2 = pdf.internal.pageSize.getWidth();

                            var _pdfHeight2 = _imgProps2.height * _pdfWidth2 / _imgProps2.width;

                            pdf.addImage(_img3, 'png', 14, 132, _pdfWidth2 - 24, _pdfHeight2);
                            var graphTitle3 = "Functionalities supporting the Digital Business Capability";
                            pdf.autoTable({
                              startY: 125,
                              head: [[{
                                content: graphTitle3,
                                styles: {
                                  halign: 'center',
                                  fillColor: [8, 161, 88]
                                }
                              }]],
                              margin: {
                                right: 10
                              }
                            });
                          } // Add the Building Blocks Table


                          html2canvas(document.querySelector('#bb-div')).then(function (canvas) {
                            if (!(canvas.height === 0) && !(canvas.width === 0)) {
                              pdf.addPage();
                              addPageTemplate(pdf, 4);
                              addExplanatoryText(pdf, 15, 35, 8);
                              var titles = [["ID"], ["View"], ["Area"], ["Name"], ["Description"], ["Ability to support the dBusCap"], ["ID's succesors"]];
                              var data = [];

                              for (var _key in currentBBTableBody) {
                                var row = [currentBBTableBody[_key]['id'], currentBBTableBody[_key]['view'], currentBBTableBody[_key]['area'], currentBBTableBody[_key]['abb'], currentBBTableBody[_key]['description'], currentBBTableBody[_key]['ability'], currentBBTableBody[_key]['successors']];
                                data.push(row);
                              }

                              pdf.autoTable(titles, data, {
                                startY: 50,
                                headStyles: {
                                  fillColor: [8, 161, 88]
                                },
                                rowPageBreak: 'auto',
                                bodyStyles: {
                                  valign: 'top'
                                },
                                columnStyles: {
                                  0: {
                                    cellWidth: 15
                                  },
                                  1: {
                                    cellWidth: 12
                                  },
                                  2: {
                                    cellWidth: 20
                                  },
                                  3: {
                                    cellWidth: 25
                                  },
                                  4: {
                                    cellWidth: 60
                                  },
                                  5: {
                                    cellWidth: 10
                                  },
                                  6: {
                                    cellWidth: 20
                                  },
                                  text: {
                                    cellWidth: 'auto'
                                  }
                                },
                                theme: 'grid',
                                margin: {
                                  top: 30
                                },
                                didDrawPage: function didDrawPage() {
                                  addPageTemplate(pdf, 4);
                                }
                              });
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
} // ******************************
// PDF Creation Functionality END
// ******************************


function groupBy(obj, key, keyToKeep) {
  if (keyToKeep) {
    return obj.reduce(function (prevObj, current) {
      var tempKey = current[key];
      (prevObj[tempKey] = prevObj[tempKey] || []).push(current[keyToKeep]);
      return prevObj;
    }, {});
  }

  return obj.reduce(function (prevObj, current) {
    var tempKey = current[key];
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
  var th = document.createElement("th");
  var text = document.createTextNode(valueOnTextNode);
  th.appendChild(text);
  return th;
}
/**
 * Create span with question icon and the title attribute is the tooltip
 */


var createTooltipSpan = function createTooltipSpan(tooltip) {
  var tooltipSpan = document.createElement("span");
  tooltipSpan.className = "ml-1";
  tooltipSpan.setAttribute("title", tooltip);
  var icon = document.createElement("i");
  icon.className = "fa fa-question-circle text-primary";
  tooltipSpan.appendChild(icon);
  return tooltipSpan;
};
/**
 * create th with span inside
 */


function thWithSpanNode(valueOnTextNode) {
  var tooltip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var th = document.createElement("th");
  var span = document.createElement("span");
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

function init(_x) {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(JSONObj) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            $("#networkBBs").collapse("hide");
            $("#listBBs").collapse("hide");
            document.getElementById("egovera-portofolio").classList.remove("d-none");
            _context2.next = 5;
            return draw(JSONObj);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _init.apply(this, arguments);
}

var fileSelector = document.getElementById("file-selector");
fileSelector.addEventListener("change", function (event) {
  var file = event.target.files[0];

  if (file == null) {
    return;
  }

  var reader = new FileReader();

  reader.onload = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
      var testo, json;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              testo = event.target.result;
              json = JSON.parse(testo);
              fileContent = json;
              _context.next = 5;
              return init(json);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }();

  reader.readAsText(file);
  this.parentElement.className = "";
  this.parentElement.classList.add("d-none");
});
/**
 *
 */

function callBackForRequest(response, json) {
  inputBCJSON = response.dBusCaps;
  inputBBJSON = response.abb;
  inputDPSJSON = response.dPubSer;
  initInputfromJSON();
  readSurveyResult(json);
  createBusinessCapabilityTable();
  drawBusinessCapabilityChart();
  resizeQuandrant();
}

function draw(_x3) {
  return _draw.apply(this, arguments);
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


function _draw() {
  _draw = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(json) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            document.getElementById("reset-work").classList.remove("d-none");
            bcList = {};
            viewsInfra = [];
            $("#listBCs").collapse("show");
            $("#matrixBCs").collapse("show");
            _context3.next = 7;
            return fetch("/api/backoffice/get-files-old");

          case 7:
            response = _context3.sent;
            _context3.next = 10;
            return response.json();

          case 10:
            response = _context3.sent;
            callBackForRequest(response, json);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _draw.apply(this, arguments);
}

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
  var view0 = createView("legal", idLinf, "business agnostic");
  var view1 = createView("organisational", idOinf, "business agnostic");
  var view2 = createView("semantic", idSinf, "business agnostic");
  var view3 = createView("technical-application", idTAinf, "business agnostic");
  var view4 = createView("technical-infrastructure", idTIinf, "business agnostic");
  viewsInfra.push(view0);
  viewsInfra.push(view1);
  viewsInfra.push(view2);
  viewsInfra.push(view3);
  viewsInfra.push(view4);
  bcList = createBcListObject();
}

var avgDpsAbility = function avgDpsAbility(abbs) {
  var sum = abbs.reduce(function (total, value) {
    return total += value.ability;
  }, 0);
  var avg = Number((sum / abbs.length).toFixed(2));
  return avg;
};
/**
 * Create the bcList object with the relations of the abbs, dps and bc
 */


var createBcListObject = function createBcListObject() {
  var ABBs = groupABBByID(inputBBJSON);
  DPSs = groupDPSsByID(inputDPSJSON);
  var DBCs = groupBCByID(inputBCJSON);

  var tempDPSs = _objectSpread({}, DPSs);

  var tempDBCs = _objectSpread({}, DBCs);

  var ABBArray = Object.values(ABBs);
  var DPSArray = Object.values(DPSs);
  var DBCArray = Object.values(DBCs);
  DPSArray.forEach(function (dps) {
    var id = dps.id;
    ABBArray.forEach(function (abb) {
      if (abb.digPubServ.indexOf(id) > -1) tempDPSs[id].abbs.push(abb);
    });
  });
  DBCArray.forEach(function (dbc) {
    var id = dbc.id;
    DPSArray.forEach(function (dps) {
      if (dps.dBCs.indexOf(id) > -1) tempDBCs[id].dps.push(dps);
    });
  });
  Object.values(tempDBCs).forEach(function (bc) {
    var abbs = [];
    var dps = bc.dps,
        id = bc.id;
    dps.forEach(function (dp) {
      var bbs = dp.abbs;
      abbs = [].concat(_toConsumableArray(abbs), _toConsumableArray(bbs));
    });
    abbs = _toConsumableArray(new Set(abbs));
    tempDBCs[id].bbs = abbs;
    abbs.forEach(function (abb) {
      tempDBCs[id].views.forEach(function (view) {
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
  var quadrant = document.querySelector("#quadrant_div");
  var test = quadrant.getBoundingClientRect();
  var width = test.width;
  quadrant.style.height = width + "px";
  return width;
}

function resizeQuandrant() {
  var width = quadrantWidth();
  drawBusinessCapabilityChart(width);
}

var mapFilterResultstoBcList = function mapFilterResultstoBcList(json) {
  var dictionary = {
    id: "id",
    "National Digital Strategy Fit": "priority",
    "Expected Public Value": "expRandom",
    "Ability to support the dBusCap": "abbRandom",
    "Ability to deliver": "ability",
    "Target Prospective Average Ability": "prospectiveAbility",
    budget: "budget"
  };

  var fullName = json.fullName,
      organisation = json.organisation,
      email = json.email,
      country = json.country,
      surveyResults = _objectWithoutProperties(json, ["fullName", "organisation", "email", "country"]);

  var tempBcList = _objectSpread({}, bcList);

  for (var policy in surveyResults) {
    var _surveyResults$policy = surveyResults[policy],
        busCaps = _surveyResults$policy.BC,
        buildingBlocks = _surveyResults$policy.BB;

    for (var bcIdx = 0; bcIdx < busCaps.length; bcIdx++) {
      var _busCaps$bcIdx = busCaps[bcIdx],
          id = _busCaps$bcIdx.id,
          answers = _objectWithoutProperties(_busCaps$bcIdx, ["id"]);

      if (tempBcList[id]) {
        for (var answer in answers) {
          if (!answers.selectedBC) break;
          tempBcList[id][dictionary[answer]] = answers[answer];
        }
      }
    }

    var _loop = function _loop(bbIdx) {
      var _buildingBlocks$bbIdx = buildingBlocks[bbIdx],
          id = _buildingBlocks$bbIdx.id,
          bbAbility = _buildingBlocks$bbIdx["Ability to support the dBusCap"];

      for (var bc in bcList) {
        var bbs = bcList[bc].bbs;
        var bb = bbs.filter(function (bb) {
          return bb.id === id;
        });
        if (bb.length !== 1) continue;
        bb[0].ability = bbAbility;
      }
    };

    for (var bbIdx = 0; bbIdx < buildingBlocks.length; bbIdx++) {
      _loop(bbIdx);
    }
  }

  Object.values(tempBcList).forEach(function (bc) {
    bc.dps.forEach(function (dps) {
      dps.dpsAbility = avgDpsAbility(dps.abbs);
    });
  });
  var finalBCList = {};

  for (var _policy in surveyResults) {
    var _surveyResults$_polic = surveyResults[_policy],
        BC = _surveyResults$_polic.BC,
        BB = _surveyResults$_polic.BB;

    var _iterator = _createForOfIteratorHelper(BC),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var bc = _step.value;
        var _id = bc.id;
        finalBCList[_id] = tempBcList[_id];
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  bcList = finalBCList;
};

var randomizeQuandrantValues = function randomizeQuandrantValues() {
  var bcValues = Object.values(bcList);

  for (var idx = 0; idx < bcValues.length; idx++) {
    bcValues[idx].avgAbility = +(Math.random() * 9 + 1).toFixed(2);
    bcValues[idx].priority = +(Math.random() * 4 + 1).toFixed(0);
  }
};

function readSurveyResult(json) {
  mapFilterResultstoBcList(json); // Go through the survey json file to get the items with the new id
  // New id: id_abb - id_dBusCap

  var fullName = json.fullName,
      organisation = json.organisation,
      email = json.email,
      country = json.country,
      surveyResults = _objectWithoutProperties(json, ["fullName", "organisation", "email", "country"]);

  var buildingBlocks = [];

  for (var policy in surveyResults) {
    // For every policy keep the abbs objects
    for (var i = 0; i < surveyResults[policy].BB.length; i++) {
      buildingBlocks.push(surveyResults[policy].BB[i]);
    }
  } // Initialize customBBs


  customBBs = buildingBlocks; // Initialize the bbs.ability for every dBusCap

  var _loop2 = function _loop2(index) {
    var abbId = buildingBlocks[index]['id'].split("-")[0].replace(" ", "");
    var dBusCapId = buildingBlocks[index]['id'].split("-")[1].replace(" ", "");
    var a = buildingBlocks[index]['Ability to support the dBusCap'];

    try {
      bcList[dBusCapId]['bbs'].find(function (el) {
        return el.id === abbId;
      })['ability'] = a;
    } catch (_unused) {
      console.log("No match found!");
    }
  };

  for (var index = 0; index < buildingBlocks.length; index++) {
    _loop2(index);
  }

  for (var z in bcList) {
    // filter the abbs to keep only the ones with the current dBusCap id 
    var filteredBuildingBlocksByAbbId = buildingBlocks.filter(function (ob) {
      return z === ob.id.split("-")[1].replace(" ", "");
    }); // Calculate current dBusCap ability to support.

    var count = 0;
    var average = 0;

    for (var _i2 = 0; _i2 < filteredBuildingBlocksByAbbId.length; _i2++) {
      var ability = filteredBuildingBlocksByAbbId[_i2]['Ability to support the dBusCap'];
      count += 1;
      average += ability;
    }

    average /= count;
    bcList[z].avgAbility = Math.round((average || 0) * 10) / 10;
    var views = bcList[z].views;

    for (var j in views) {
      var count_view = 0;
      var average_view = 0;
      var bbs_view = views[j].bbs;

      for (var k in bbs_view) {
        count_view += 1;
        average_view += bbs_view[k].ability;
      }

      average_view /= count_view;
      views[j].avgAbility = Math.round((average_view || 0) * 10) / 10;
    }
  } // if (demo) randomizeQuandrantValues();

}

function controlWrapper(controlType, containerId, options) {
  return new google.visualization.ControlWrapper({
    controlType: controlType,
    containerId: containerId,
    options: options
  });
}

var view;
var strategicSlider;
var expPubValSlider;
var abiToSupdBusCapSlider;
var budgetSlider;
var policyDomainFilter;
var order = [0, 1, 2, 3, 4, 5];
/**
 * Calculate the max of all the budgets
 */

function firstInitMaxBudget() {
  var bcObject = groupBy(Object.values(bcList), "policy");
  var max = 0;

  for (var policy in bcObject) {
    var temp = groupBy(bcObject[policy], "policy", "budget");
    var currentMax = maxOfArray(temp[policy]);
    max = currentMax > max ? currentMax : max;
  }

  maxBudget = max;
}
/**
 * Make all the words in the string policy lowercase
 */


var normalizePolicy = function normalizePolicy(policy) {
  return policy.split(" ").map(function (x) {
    return x.toLowerCase();
  }).join(" ");
};

var getColorPerPolicy = function getColorPerPolicy(policy) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var normalizedPolicy = normalizePolicy(policy);
  var temp = opacity ? policyColorsWithOpacity : policyColors;
  return temp[normalizedPolicy] || "#858796";
};

var getImagePerPolicy = function getImagePerPolicy(policy) {
  var normalizedPolicy = normalizePolicy(policy);
  return policyImages[normalizedPolicy] || "../img/dps.png";
};
/**
 * Create the bubble chart
 */


function drawBusinessCapabilityChart(height) {
  height = height || 1;
  data = new google.visualization.DataTable();
  data.addColumn("string", "ID");
  data.addColumn("number", "National Digital Strategy Fit");
  data.addColumn("number", "Ability to support the dBusCap");
  data.addColumn("string", "Policy domain");
  data.addColumn("number", "Estimated budget");
  data.addColumn("number", "Expected Public Value");
  view = new google.visualization.DataView(data);
  firstInitMaxBudget();
  var colors = [];

  for (var x in bcList) {
    var bc = bcList[x];
    if (bc.priority == null) continue;
    data.addRow([bc.id, bc.priority, bc.avgAbility, bc.policy, bc.budget, bc.expRandom]);
    var color = getColorPerPolicy(bc.policy);
    if (colors.indexOf(color) === -1) colors.push(color);
  }

  view.setColumns(order);
  dashboard = new google.visualization.Dashboard(document.getElementById("dashboard_div"));
  strategicSlider = controlWrapper("NumberRangeFilter", "dashboard_strategicSlider_div", {
    filterColumnLabel: "National Digital Strategy Fit",
    ui: {
      labelStacking: "horizontal"
    },
    minValue: 1,
    maxValue: 5
  });
  expPubValSlider = controlWrapper("NumberRangeFilter", "dashboard_expPubValSlider_div", {
    filterColumnLabel: "Expected Public Value",
    ui: {
      labelStacking: "horizontal"
    },
    minValue: 1,
    maxValue: 5
  });
  abiToSupdBusCapSlider = controlWrapper("NumberRangeFilter", "dashboard_abiToSupdBusCapSlider_div", {
    filterColumnLabel: "Ability to support the dBusCap",
    ui: {
      labelStacking: "horizontal"
    },
    minValue: 1,
    maxValue: 5
  });
  budgetSlider = controlWrapper("NumberRangeFilter", "budget_filtering_div", {
    filterColumnLabel: "Estimated budget",
    ui: {
      labelStacking: "horizontal",
      label: "Estimated budget (in millions EUR)"
    },
    minValue: 0,
    maxValue: maxBudget
  });
  policyDomainFilter = controlWrapper("CategoryFilter", "visibility_control_div", {
    filterColumnLabel: "Policy domain",
    ui: {
      label: "",
      selectedValuesLayout: "aside",
      caption: "Policy domain",
      cssClass: "filters-div-google"
    }
  });
  var options1 = {
    height: height,
    title: {
      position: "none"
    },
    hAxis: {
      title: hAxisLabes[order[1]],
      minValue: 0,
      maxValue: 5,
      ticks: [{
        v: 0,
        f: "low"
      }, {
        v: 2.5,
        f: "medium"
      }, {
        v: 5,
        f: "high"
      }],
      gridlines: {
        color: "#747675"
      },
      baselineColor: "#747675"
    },
    vAxis: {
      title: "Ability to support the dBusCap",
      minValue: 0,
      maxValue: 5,
      ticks: [{
        v: 0,
        f: "low"
      }, {
        v: 2.5,
        f: "med"
      }, {
        v: 5,
        f: "high"
      }]
    },
    bubble: {
      textStyle: {
        fontSize: 10
      },
      opacity: 0.5
    },
    sizeAxis: {
      minSize: 20
    },
    colors: colors,
    chartArea: {
      width: "82%",
      height: "82%"
    },
    legend: {
      position: "top",
      alignement: "center"
    }
  };
  chartBubble = new google.visualization.ChartWrapper({
    chartType: "BubbleChart",
    containerId: "quadrant_div",
    options: options1
  });
  dashboard.bind([strategicSlider, policyDomainFilter, expPubValSlider, abiToSupdBusCapSlider, budgetSlider], chartBubble);
  dashboard.draw(view.toDataTable());
  google.visualization.events.addListener(chartBubble, "ready", function () {
    google.visualization.events.addListener(chartBubble, "select", selectHandler);
    google.visualization.events.addListener(policyDomainFilter, "statechange", function (event) {
      var state = policyDomainFilter.getState();
      filteringBcTable(state.selectedValues, false);
    });
    google.visualization.events.addListener(chartBubble, "statechange", function () {
      alert(chartBubble.getDataTable().getNumberOfRows());
    });
  });
}

var scrollToElement = function scrollToElement(selector) {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(selector).offset().top - 40
  }, 500);
};

var bcInfoNodes = function bcInfoNodes(id, policy, name, budget, spanID) {
  var pID = document.createElement("p");
  var pPolicy = document.createElement("p");
  var pName = document.createElement("p");
  var pBudget = document.createElement("p");
  pID.innerText = "ID: " + id;
  pPolicy.innerText = "Policy: " + policy;
  pName.innerText = "Name: " + name;
  pBudget.innerHTML = "Estimated budget (in millions EUR): " + "<span id=\"".concat(spanID, "\">").concat(budget, " </span ");
  var parent = document.createElement("div");
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
    document.getElementById("bcDetail").innerHTML = bcInfoNodes(bcList[selectedValue].id, CA(bcList[selectedValue].policy), bcList[selectedValue].name, bcList[selectedValue].budget, "bcDetails-budget").innerHTML;
    document.getElementById("dps-network-bc-info").innerHTML = bcInfoNodes(bcList[selectedValue].id, CA(bcList[selectedValue].policy), bcList[selectedValue].name, bcList[selectedValue].budget, "bcDetails-budget-copy").innerHTML;
    document.getElementById("bbDetail").innerHTML = "<i>please select a builidng block</i>";
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
window.addEventListener("resize", function () {
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
  var select = document.createElement("select");

  for (var attr in attribuesList) {
    select.setAttribute(attr, attribuesList[attr]);
  }

  for (var i = 0; i < options.length; i++) {
    var policy = options[i];
    var option = document.createElement("option");
    option.setAttribute("value", policy);
    option.text = policy;
    select.appendChild(option);
  }

  return select;
}
/**
 * Create number input html element with attributes
 */


function htmlInputNumb(attribuesList) {
  var input = document.createElement("input");
  input.setAttribute("type", "number");

  for (var attr in attribuesList) {
    input.setAttribute(attr, attribuesList[attr]);
  }

  return input;
}
/**
 * Create paragraph html element with attributes
 */


function htmlParagNumb(attribuesList) {
  var input = document.createElement("p");

  for (var attr in attribuesList) {
    input.setAttribute(attr, attribuesList[attr]);
  }

  return input;
}
/**
 * Create dropdow element
 */


function dropDownCheckBox(options, header) {
  var dropdown = document.createElement("div");
  dropdown.classList.add(["dropdown", "show"]);
  dropdown.setAttribute("id", "dropdown_div");
  var headerEl = document.createElement("div");
  headerEl.classList.add("dropdown-toggle");
  headerEl.setAttribute("id", "dropdownMenuLink");
  headerEl.setAttribute("data-toggle", "dropdown");
  headerEl.setAttribute("aria-haspopup", "true");
  headerEl.setAttribute("aria-expanded", "false");
  var headerText = document.createTextNode(header);
  headerEl.appendChild(headerText);
  var dropdownMenu = document.createElement("div");
  dropdownMenu.classList.add("dropdown-menu");
  dropdown.appendChild(headerEl);
  dropdown.appendChild(dropdownMenu);

  for (var i = 0; i < options.length; i++) {
    var id = options[i];
    var label = createLabelWithInputChild(id);
    dropdownMenu.appendChild(label);
  }

  dropdown.addEventListener("change", filteringHandler);
  return dropdown;
}
/**
 * Filter bc table and quandrant
 */


function filteringBcTable(values, quadrant_filtering) {
  var table = document.getElementById("bcTable");
  var tr = table.getElementsByTagName("tr");

  var _loop3 = function _loop3(i) {
    var tds = tr[i].getElementsByTagName("td");
    if (tds.length < 1) return "continue";
    var policyColumn = tds[1].querySelector("[policyValue]").getAttribute("policyValue");
    var tempCond = values.map(function (value) {
      return "'" + policyColumn + "' === '" + value + "'";
    });
    var condition = tempCond.join(" || ");
    var valid = condition ? eval(condition) : true;

    if (valid) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  };

  for (var i = 0; i < tr.length; i++) {
    var _ret = _loop3(i);

    if (_ret === "continue") continue;
  }

  if (quadrant_filtering) {
    policyDomainFilter.setState({
      selectedValues: values
    });
    policyDomainFilter.draw();
  } else {
    var dropdown = document.getElementById("dropdown_div");
    var inputs = dropdown.querySelectorAll("input[type=checkbox]");

    for (var _i3 = 0; _i3 < inputs.length; _i3++) {
      var input = inputs[_i3];
      input.checked = false;
    }

    for (var _i4 = 0; _i4 < inputs.length; _i4++) {
      var _input = inputs[_i4];

      for (var _i5 = 0; _i5 < values.length; _i5++) {
        var value = values[_i5];

        var id = _input.getAttribute("id").split("-")[0];

        if (id.includes(value)) _input.checked = true;
      }
    }
  }
}

function createLabelWithInputChild(id) {
  var input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", id + "-dropdown");
  input.setAttribute("value", id);
  var label = document.createElement("label");
  label.setAttribute("for", id + "-dropdown");
  label.appendChild(input);
  var textContent = document.createTextNode(" " + id);
  label.appendChild(textContent);
  label.classList.add("dropdown-item");
  return label;
}

function range(start, end) {
  var ans = [];

  for (var i = start; i <= end; i++) {
    ans.push(i);
  }

  return ans;
}

function changeSumPerPolicy(inputField) {
  var bcObject = groupBy(Object.values(bcList), "policy");
  var policy = inputField.getAttribute("policy");
  var id = "#" + policy + "-sum";
  policy = policy.split("-").join(" ");
  document.querySelector(id).innerHTML = sumOfArray(groupBy(bcObject[policy], "policy", "budget")[policy]);
}

function filteringHandler() {
  var dropdown = document.querySelector("#dropdown_div > div.dropdown-menu");
  var inputs = dropdown.querySelectorAll("input[type=checkbox]");
  var values = [];

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];

    if (input.checked) {
      var value = input.getAttribute("id").split("-")[0];
      values.push(value);
    }
  }

  filteringBcTable(values, true);
}

var updateBcDetailsBudget = function updateBcDetailsBudget(budget, currentBc) {
  if (currentBc != selectedBC) return;
  $("#bcDetails-budget").text(budget);
  $("#bcDetails-budget-copy").text(budget);
};

function containerWithSelectAndSpan(selectBox, outOf) {
  var customDiv = document.createElement("div");
  var span = document.createElement('span');
  span.innerText = " out of ".concat(outOf);
  customDiv.appendChild(selectBox);
  customDiv.appendChild(span);
  return customDiv;
}

function createBusinessCapabilityTable() {
  var table = document.getElementById("bcTable");
  table.innerHTML = "";
  var thead = table.createTHead();
  var row = thead.insertRow();
  var id = thWithTextNode("ID");
  var th2 = document.createElement("th");
  var name = thWithTextNode("Digital Business Capability");
  var dStrategicFit = thWithSpanNode("National Digital Strategy Fit", natDigStrategicFitTooltip);
  var publicValue = thWithSpanNode("Expected Public Value", expPubValueTooltip);
  var abilityToSupport = thWithSpanNode("Ability to support the dBusCap", abToSuppDbusCapTooltip);
  var budgetAlloc = thWithSpanNode("Estimated budget (in millions EUR)", budgetTooltip);
  var optimalAvg = thWithSpanNode("Target Prospective Ability to support the dBusCap", optimalAvgTooltip);
  row.appendChild(id);
  row.appendChild(th2);
  row.appendChild(name);
  row.appendChild(dStrategicFit);
  row.appendChild(abilityToSupport);
  row.appendChild(optimalAvg);
  row.appendChild(publicValue);
  row.appendChild(budgetAlloc);
  var bcObject = groupBy(Object.values(bcList), "policy");
  var policies = Object.keys(bcObject);

  for (var policy in bcObject) {
    var policyArray = bcObject[policy];

    for (var _i6 = 0; _i6 < policyArray.length; _i6++) {
      var bc = policyArray[_i6];

      var _row2 = table.insertRow();

      _row2.insertCell().appendChild(document.createTextNode(bc.id));

      var policySpan = document.createElement("span");
      policySpan.setAttribute("policyValue", bc.policy);
      var policyTextNode = document.createTextNode(bc.policy);
      policySpan.appendChild(policyTextNode);

      _row2.insertCell().appendChild(policySpan);

      _row2.insertCell().appendChild(document.createTextNode(bc.name));

      var natDigStrFit = selectHTMLWithOptions(range(1, 5), {
        priority: "mySelect",
        bc: bc.id
      });
      natDigStrFit.value = bc.priority;
      natDigStrFit.addEventListener("change", function () {
        for (var y in bcList) {
          if (bcList[y].id == this.getAttribute("bc")) {
            bcList[y].priority = Number(this.value);
            var height = quadrantWidth();
            drawBusinessCapabilityChart(height);
            filteringHandler();
            return;
          }
        }
      });
      var natDigStrFitContainer = containerWithSelectAndSpan(natDigStrFit, 5);

      _row2.insertCell().appendChild(natDigStrFitContainer);

      var abiToSupdBusCap = selectHTMLWithOptions(range(1, 5), {
        priority: "mySelect",
        bc: bc.id
      });
      abiToSupdBusCap.value = Math.round(bc.avgAbility);
      abiToSupdBusCap.addEventListener("change", function () {
        for (var y in bcList) {
          if (bcList[y].id == this.getAttribute("bc")) {
            bcList[y].avgAbility = Number(this.value);
            var height = quadrantWidth();
            drawBusinessCapabilityChart(height);
            filteringHandler();
            return;
          }
        }
      });
      var abiToSupdBusCapContainer = containerWithSelectAndSpan(abiToSupdBusCap, 5);

      _row2.insertCell().appendChild(abiToSupdBusCapContainer); // Insert prospective Average value


      var prospAbility = selectHTMLWithOptions(range(1, 5), {
        priority: "mySelect",
        bc: bc.id
      });
      prospAbility.value = Number(bc.prospectiveAbility).toFixed(0); // functionality when the user selects another value from the dropdown list

      prospAbility.addEventListener("change", function () {
        for (var y in bcList) {
          if (bcList[y].id == this.getAttribute("bc")) {
            bcList[y].prospectiveAbility = Number(this.value);
            filteringHandler();
            return;
          }
        }
      });
      var prospectiveAbilityContainer = containerWithSelectAndSpan(prospAbility, 5);

      _row2.insertCell().appendChild(prospectiveAbilityContainer);

      var expPubVal = selectHTMLWithOptions(range(1, 5), {
        priority: "mySelect",
        bc: bc.id
      });
      expPubVal.value = bc.expRandom;
      expPubVal.addEventListener("change", function () {
        for (var y in bcList) {
          if (bcList[y].id == this.getAttribute("bc")) {
            bcList[y].expRandom = Number(this.value);
            var height = quadrantWidth();
            drawBusinessCapabilityChart(height);
            filteringHandler();
            return;
          }
        }
      });
      var expPubValContainer = containerWithSelectAndSpan(expPubVal, 5);

      _row2.insertCell().appendChild(expPubValContainer);

      var budgetFiled = htmlInputNumb({
        priority: "mySelect",
        policy: policy.split(" ").join("-"),
        bc: bc.id,
        min: 0,
        id: "total-" + bc.id
      });
      budgetFiled.value = bc.budget;
      budgetFiled.addEventListener("change", function () {
        for (var y in bcList) {
          if (bcList[y].id == this.getAttribute("bc")) {
            var newBudget = Number(Number(this.value).toFixed(2));
            if (newBudget < 0) newBudget = 0;
            bcList[y].budget = newBudget;
            this.value = newBudget;
            var height = quadrantWidth();
            drawBusinessCapabilityChart(height);
            changeSumPerPolicy(this);
            filteringHandler();
            updateBcDetailsBudget(newBudget, y);
            return;
          }
        }
      });

      _row2.insertCell().appendChild(budgetFiled);
    }

    var _row = table.insertRow();

    _row.insertCell().appendChild(document.createTextNode(""));

    var policySumParag = htmlParagNumb({
      id: policy + "-policyField",
      policyValue: policy
    });
    policySumParag.innerHTML = policy;

    _row.insertCell().appendChild(policySumParag);

    _row.insertCell().appendChild(document.createTextNode(""));

    _row.insertCell().appendChild(document.createTextNode(""));

    _row.insertCell().appendChild(document.createTextNode(""));

    _row.insertCell().appendChild(document.createTextNode(""));

    var totalParagraph = htmlParagNumb({
      id: policy + "-totalInAbbfiled"
    });
    totalParagraph.innerHTML = "Total budget";

    _row.insertCell().appendChild(totalParagraph);

    var budgets = groupBy(bcObject[policy], "policy", "budget");
    var sumOfBudgets = htmlParagNumb({
      id: policy.split(" ").join("-") + "-sum",
      priority: "mySelect"
    });
    sumOfBudgets.innerHTML = sumOfArray(budgets[policy]);

    _row.insertCell().appendChild(sumOfBudgets);
  }

  var selectEl = dropDownCheckBox(policies, "Policy Domain");
  th2.appendChild(selectEl);
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


function createDigitalTransformNode(id, shape, image, label, title, color, x, y, hidden, font, DIR) {
  if (!x && x !== 0) {
    x = null;
  }

  if (!y && y !== 0) {
    y = null;
  }

  font = font || "14px arial", DIR = DIR || "../img/";
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

var syncCheckboxAfterNodesClicked = function syncCheckboxAfterNodesClicked(dps) {
  var inputs = dpsSelectDivList.querySelectorAll("input");

  for (var idx = 0; idx < inputs.length; idx++) {
    inputs[idx].checked = false;
    if (inputs[idx].getAttribute("data-dig-pub-service") === dps) inputs[idx].checked = true;
  }
};

var dpsNetworkAndCheckbox = function dpsNetworkAndCheckbox(dpss, bbs) {
  drawDPSNetwork(dpss, bbs);
  createFilterDPSCheckbox(dpss);
};
/**
 * Create and draw dps network chart
 */


var drawDPSNetwork = function drawDPSNetwork(dpss, bbs) {
  var _options;

  if (DPSnetwork !== null) {
    DPSnetwork.destroy();
    DPSnetwork = null;
  }

  DPSNetNodes = new vis.DataSet();
  var length = dpss.length;

  for (var idx = 0; idx < length; idx++) {
    var dps = dpss[idx];
    var policy = dps.policy,
        dpsID = dps.id,
        label = dps.name,
        dpsAbility = dps.dpsAbility;
    var title = "<div>\n    ".concat(dpsDetailChild("ID: ", dpsID).outerHTML, "\n    ").concat(dpsDetailChild("Name: ", label).outerHTML, "\n    ").concat(dpsDetailChild("Policy: ", policy).outerHTML, "\n    ").concat(dpsDetailChild("Average Ability to support: ", dpsAbility).outerHTML, "\n    </div>");
    var node = {
      id: idx,
      image: getImagePerPolicy(policy),
      dpsID: dpsID,
      label: "".concat(dpsID, " - ").concat(label),
      title: title,
      hidden: false,
      color: {
        background: getColorPerPolicy(policy, true)
      }
    };
    DPSNetNodes.add(node);
  }

  var options = (_options = {
    interaction: {
      hover: true
    },
    height: "100%",
    width: "100%",
    nodes: {
      imagePadding: 11,
      borderWidth: 1,
      size: 30,
      shape: "circularImage",
      shadow: true,
      font: {
        color: "#000",
        size: 17
      }
    }
  }, _defineProperty(_options, "interaction", {
    navigationButtons: true,
    keyboard: true
  }), _defineProperty(_options, "physics", {
    forceAtlas2Based: {
      springLength: -10
    },
    minVelocity: 0.75,
    solver: "forceAtlas2Based",
    timestep: 0.53
  }), _options);
  var data = {
    nodes: DPSNetNodes
  };
  var container = document.querySelector("#dps-network-div");
  DPSnetwork = new vis.Network(container, data, options);

  if (DPSnetwork !== null) {
    DPSnetwork.on("click", function (properties) {
      if (properties.nodes.length === 0) return;
      var id = properties.nodes[0];
      var nodes = DPSNetNodes.get();
      var node = nodes.find(function (node) {
        return node.id === id;
      });
      var dps = dpss.filter(function (dp) {
        return dp.id === node.dpsID;
      })[0];
      clickedDPSs = [dps.id];
      syncCheckboxAfterNodesClicked(node.dpsID);
      var newBBs = bbs.filter(function (bb) {
        return bb.digPubServ.includes(node.dpsID);
      });
      createBuildingBlocksTable({
        bbs: newBBs
      });
      filternetwork2([node.dpsID]);
      bbsMultipleDPSInfo([dps.name]);
      drawViewsPredecessorsChart(bcList[selectedBC], clickedDPSs);
    });
  }
};
/**
 * Helper function
 */


var dpsDetailChild = function dpsDetailChild(key, value) {
  var div = document.createElement("div");
  var spanLeft = document.createElement("span");
  var spanRight = document.createElement("span");
  div.appendChild(spanLeft);
  div.appendChild(spanRight);
  spanLeft.innerText = key;
  spanRight.innerText = value;
  return div;
};

var filternetwork2 = function filternetwork2(dpsIDS) {
  if (!network2Nodes) return;
  var condition = "";
  var dpsLength = dpsIDS.length;

  if (dpsLength === 0) {
    network2Nodes.forEach(function (node) {
      var hidden = false;
      network2Nodes.update({
        id: node.id,
        hidden: hidden
      });
    });
    return;
  }

  for (var idx = 0; idx < dpsLength; idx++) {
    var id = dpsIDS[idx];
    condition += "node.dps.indexOf(\"".concat(id, "\") > -1");
    if (idx < dpsLength - 1) condition += " || ";
  }

  var temp = new vis.DataSet();
  network2Nodes.forEach(function (node) {
    var hidden;

    if (eval(condition)) {
      hidden = false;
    } else {
      hidden = true;
    }

    temp.add(_objectSpread(_objectSpread({}, node), {}, {
      hidden: hidden
    }));
  });
  network2Nodes.clear();
  temp.forEach(function (node) {
    return network2Nodes.add(node);
  });
};

var createFilterDPSCheckbox = function createFilterDPSCheckbox(dpss) {
  if (dpss.length === 0) {
    return;
  }

  dpsSelectDivList.innerHTML = "";

  for (var idx = 0; idx < dpss.length; idx++) {
    var dps = dpss[idx];
    var li = document.createElement("li");
    var div = document.createElement("div");
    var dpsName = dps.name;
    var textNode = document.createElement("span");
    textNode.textContent = "".concat(dps.id, " - ").concat(dpsName);
    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("data-dig-pub-service", dps.id);
    li.appendChild(div);
    div.appendChild(input);
    div.appendChild(textNode);
    dpsSelectDivList.appendChild(li);
  }
};

var calculateAvgAbilityPerViewAndDpss = function calculateAvgAbilityPerViewAndDpss(view) {
  var dpss = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (dpss.length === 0) {
    return view.avgAbility;
  }

  var abbsToCalculate = view.bbs.filter(function (bb) {
    for (var idx = 0; idx < dpss.length; idx++) {
      if (bb.digPubServ.indexOf(dpss[idx]) > -1) return true;
    }

    return false;
  });
  var total = abbsToCalculate.reduce(function (sum, abb) {
    return sum += abb.ability;
  }, 0);
  if (abbsToCalculate.length === 0) return 0;
  var average = total / abbsToCalculate.length;
  return average;
};
/**
 * Create and draw the dBusCaps chart
 */


function drawViewsPredecessorsChart(bc) {
  var _options2;

  var dpss = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (network !== null) {
    network.destroy();
    network = null;
  }

  if (bc.policy == "Business Agnostic") {
    toogleInfra = false;
  }

  var showNonInfra = true;

  if (clickedDPSs.length > 0 && clickedDPSs.every(function (id) {
    return id.startsWith("BA");
  })) {
    showNonInfra = false;
    toogleInfra = true;
  }

  var bbs = bc.bbs;
  var nodes = [];
  var edges = [];
  var color = [];
  color.background = "#fff";
  var bcNode = createDigitalTransformNode(idBCdom, "circularImage", "bc.png", "ID:" + bc.id + ", " + bc.name + ", \nNational Digital Strategy Fit: " + bc.priority + " out of 5, \nAbility to support the dBusCap: " + bc.avgAbility + " out of 5", "ID:" + bc.id + ", " + bc.name + ", \nNational Digital Strategy Fit: " + bc.priority + " out of 5, \nAbility to support the dBusCap: " + bc.avgAbility + " out of 5", color, 100, 10);
  nodes.push(bcNode);
  var color = [];
  color.background = "#fff";
  var start = createDigitalTransformNode(100, "circularImage", "start.png", "Start", "Start", color, -10, 0);
  nodes.push(start);
  var views = bc.views;
  var count = 0;

  if (showNonInfra) {
    for (var i in views) {
      count += 1;
      var id = null;
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

      var currentAvgAbility = calculateAvgAbilityPerViewAndDpss(views[i], clickedDPSs);
      color.background = getColorPerPolicy(views[i].policy, true);

      if (views[i].bbs.length == 0) {
        if (labelInit === null) continue;
        var label = labelInit + " - " + CA(bc.policy);
      } else {
        var label = labelInit + " - " + CA(bc.policy) + ",\n" + currentAvgAbility.toFixed(1) + " out of 5";
      }

      var node = createDigitalTransformNode(id, "circularImage", image, label, label, color, 10 * i, 0);
      nodes.push(node);
    }
  }

  var bcInfraNode = [];
  bcInfraNode.id = idBCinf;

  if (toogleInfra) {
    var color = [];
    color.background = "#fff";
    bcInfraNode = createDigitalTransformNode(idBCinf, "circularImage", "bc.png", "Digital business capability Infrastructure," + "\nMission Critical", "Digital business capability Infrastructure," + "\nMission Critical", color, 100, 50, true);
    nodes.push(bcInfraNode);

    for (var _i7 in viewsInfra) {
      var _id2 = null;
      var color = [];
      var image = null;
      var labelInit = null;

      switch (String(viewsInfra[_i7].name)) {
        case "legal":
          image = "legal.png";
          _id2 = idLinf;
          labelInit = "L";
          break;

        case "organisational":
          image = "org.png";
          _id2 = idOinf;
          labelInit = "O";
          break;

        case "semantic":
          image = "data.png";
          _id2 = idSinf;
          labelInit = "S";
          break;

        case "technical-application":
          image = "TA.png";
          _id2 = idTAinf;
          labelInit = "TA";
          break;

        case "technical-infrastructure":
          image = "tech.png";
          _id2 = idTIinf;
          labelInit = "TI";
          break;

        default:
          image = "tech.png";
          break;
      }

      color.background = getColorPerPolicy(viewsInfra[_i7].policy, true);
      var label = labelInit + " - Business agnostic";

      var _node = createDigitalTransformNode(_id2, "circularImage", image, label, label, color, 10 * _i7, -10);

      nodes.push(_node);
    }
  }

  if (busOrientation == 1) {
    var startToPoint = showNonInfra ? idLdom : idLinf;
    var edges = new vis.DataSet([{
      from: start.id,
      to: startToPoint,
      dashes: true
    }, {
      from: idLdom,
      to: idOdom,
      dashes: false
    }, {
      from: idOdom,
      to: idSdom,
      dashes: false
    }, {
      from: idOdom,
      to: idTIdom,
      dashes: false
    }, {
      from: idTIdom,
      to: idTAdom,
      dashes: false
    }, {
      from: idSdom,
      to: idTAdom,
      dashes: false
    }, // { from: idTAdom, to: bcNode.id, dashes: true },
    {
      from: idLinf,
      to: idLdom,
      dashes: true
    }, {
      from: idLinf,
      to: idOinf,
      dashes: false
    }, {
      from: idLinf,
      to: idSinf,
      dashes: false
    }, {
      from: idOinf,
      to: idOdom,
      dashes: true
    }, {
      from: idOinf,
      to: idSinf,
      dashes: false
    }, {
      from: idOinf,
      to: idTIinf,
      dashes: false
    }, {
      from: idSinf,
      to: idSdom,
      dashes: true
    }, {
      from: idSinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idTIinf,
      to: idTIdom,
      dashes: true
    }, {
      from: idTIinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idTAinf,
      to: idTAdom,
      dashes: true
    }, {
      from: idTAinf,
      to: bcInfraNode.id,
      dashes: true
    }, {
      from: bcInfraNode.id,
      to: bcNode.id,
      dashes: true
    }]);

    if (showNonInfra) {
      edges.add({
        from: idTAdom,
        to: bcNode.id,
        dashes: true
      });
    } else {
      edges.add({
        from: idTAinf,
        to: bcNode.id,
        dashes: true
      });
    }
  } else if (busOrientation == 2) {
    var _startToPoint = showNonInfra ? idOdom : idOinf;

    var edges = new vis.DataSet([{
      from: start.id,
      to: _startToPoint,
      dashes: true
    }, {
      from: idOdom,
      to: idTIdom,
      dashes: false
    }, {
      from: idOdom,
      to: idSdom,
      dashes: false
    }, {
      from: idTIdom,
      to: idTAdom,
      dashes: false
    }, {
      from: idSdom,
      to: idTAdom,
      dashes: false
    }, {
      from: idTAdom,
      to: idLdom,
      dashes: false
    }, // { from: idLdom, to: bcNode.id, dashes: true },
    {
      from: idOinf,
      to: idOdom,
      dashes: true
    }, {
      from: idOinf,
      to: idTIinf,
      dashes: false
    }, {
      from: idOinf,
      to: idSinf,
      dashes: false
    }, {
      from: idTIinf,
      to: idTIdom,
      dashes: true
    }, {
      from: idTIinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idSinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idSinf,
      to: idSdom,
      dashes: true
    }, {
      from: idTAinf,
      to: idLinf,
      dashes: false
    }, {
      from: idTAinf,
      to: idTAdom,
      dashes: true
    }, {
      from: idLinf,
      to: idLdom,
      dashes: true
    }, {
      from: idLinf,
      to: bcInfraNode.id,
      dashes: true
    }, {
      from: bcInfraNode.id,
      to: bcNode.id,
      dashes: true
    }]);

    if (showNonInfra) {
      edges.add({
        from: idLdom,
        to: bcNode.id,
        dashes: true
      });
    } else {
      edges.add({
        from: idLinf,
        to: bcNode.id,
        dashes: true
      });
    }
  } else if (busOrientation == 3) {
    var _startToPoint2 = showNonInfra ? idSdom : idSinf;

    var edges = new vis.DataSet([{
      from: start.id,
      to: _startToPoint2,
      dashes: true
    }, {
      from: idSdom,
      to: idOdom,
      dashes: false
    }, {
      from: idOdom,
      to: idTAdom,
      dashes: false
    }, {
      from: idOdom,
      to: idTIdom,
      dashes: false
    }, {
      from: idTIdom,
      to: idTAdom,
      dashes: false
    }, {
      from: idTAdom,
      to: idLdom,
      dashes: false
    }, // { from: idLdom, to: bcNode.id, dashes: true },
    {
      from: idSinf,
      to: idSdom,
      dashes: true
    }, {
      from: idSinf,
      to: idOinf,
      dashes: false
    }, {
      from: idOinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idOinf,
      to: idOdom,
      dashes: true
    }, {
      from: idOinf,
      to: idTIinf,
      dashes: false
    }, {
      from: idTIinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idTIinf,
      to: idTIdom,
      dashes: true
    }, {
      from: idTAinf,
      to: idLinf,
      dashes: false
    }, {
      from: idTAinf,
      to: idTAdom,
      dashes: true
    }, {
      from: idLinf,
      to: idLdom,
      dashes: true
    }, {
      from: idLinf,
      to: bcInfraNode.id,
      dashes: true
    }, {
      from: bcInfraNode.id,
      to: bcNode.id,
      dashes: true
    }]);

    if (showNonInfra) {
      edges.add({
        from: idLdom,
        to: bcNode.id,
        dashes: true
      });
    } else {
      edges.add({
        from: idLinf,
        to: bcNode.id,
        dashes: true
      });
    }
  } else {
    var _startToPoint3 = showNonInfra ? idTIdom : idTIinf;

    var edges = new vis.DataSet([{
      from: start.id,
      to: _startToPoint3,
      dashes: true
    }, {
      from: idTIdom,
      to: idOdom,
      dashes: false
    }, {
      from: idOdom,
      to: idTAdom,
      dashes: false
    }, {
      from: idOdom,
      to: idSdom,
      dashes: false
    }, {
      from: idSdom,
      to: idTAdom,
      dashes: false
    }, {
      from: idTAdom,
      to: idLdom,
      dashes: false
    }, // { from: idLdom, to: bcNode.id, dashes: true },
    {
      from: idTIinf,
      to: idTIdom,
      dashes: true
    }, {
      from: idTIinf,
      to: idOinf,
      dashes: false
    }, {
      from: idOinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idOinf,
      to: idOdom,
      dashes: true
    }, {
      from: idOinf,
      to: idSinf,
      dashes: false
    }, {
      from: idSinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idSinf,
      to: idSdom,
      dashes: true
    }, {
      from: idTAinf,
      to: idLinf,
      dashes: false
    }, {
      from: idTAinf,
      to: idTAdom,
      dashes: true
    }, {
      from: idLinf,
      to: idLdom,
      dashes: true
    }, {
      from: idLinf,
      to: bcInfraNode.id,
      dashes: true
    }, {
      from: bcInfraNode.id,
      to: bcNode.id,
      dashes: true
    }]);

    if (showNonInfra) {
      edges.add({
        from: idLdom,
        to: bcNode.id,
        dashes: true
      });
    } else {
      edges.add({
        from: idLinf,
        to: bcNode.id,
        dashes: true
      });
    }
  }

  var container = document.getElementById("network_div");
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = (_options2 = {
    physics: true,
    interaction: {
      hover: true
    },
    autoResize: true,
    height: "100%",
    width: "100%",
    nodes: {
      imagePadding: 11,
      borderWidth: 1,
      size: 30,
      color: {
        border: "#222222",
        background: "#BBE1FA"
      },
      font: {
        color: "#000",
        size: 10
      },
      shadow: true
    },
    edges: {
      smooth: {
        type: "dynamic",
        forceDirection: "horizontal",
        roundness: 0.4
      },
      color: "gray",
      arrows: {
        to: {
          enabled: true
        }
      },
      shadow: true
    }
  }, _defineProperty(_options2, "interaction", {
    navigationButtons: true,
    keyboard: true
  }), _defineProperty(_options2, "physics", {
    forceAtlas2Based: {
      springLength: -10
    },
    minVelocity: 0.75,
    solver: "forceAtlas2Based",
    timestep: 0.53
  }), _options2);
  network = new vis.Network(container, data, options);
  network.on("click", function (params) {
    params.event = "[original event]";
    var selectedNodeID = this.getNodeAt(params.pointer.DOM);

    if (selectedNodeID <= idBCdom) {} else if (selectedNodeID == idBCinf) {
      selectedView = viewBCmc;
      createBuildingBlocksTable(selectedView);
      drawIntraViewsPredecessorsChart(selectedView);
      document.getElementById("viewDetail").innerHTML = "<i>Policy: </i>" + CA(selectedView.policy) + "<br><i>Buisness capabilities (mission critial)</i>";
      document.getElementById("bbDetail").innerHTML = "<i>please select a builidng block</i>";
      $("#networkBBs2").fadeIn();
      $("#network_div2").fadeIn();
    } else if (selectedNodeID <= idTIdom) {
      for (var x in views) {
        if (views[x].id == selectedNodeID) {
          selectedView = views[x];
          if (clickedDPSs.length === 0) return;
          var abbs = filterABBSBaseDPS(selectedView.bbs);

          var newView = _objectSpread({}, selectedView);

          newView.bbs = abbs;
          document.getElementById("viewDetail").innerHTML = "<i>Policy:  ".concat(CA(selectedView.policy), "</i>") + "<br><i>Name: ".concat(CA(selectedView.name), "</i>");
          var tableBBs = abbs.filter(function (abb) {
            return !abb.hidden;
          });
          createBuildingBlocksTable({
            bbs: tableBBs
          });
          drawIntraViewsPredecessorsChart(newView);
          document.getElementById("bbDetail").innerHTML = "<i>please select a builidng block</i>";
          $("#networkBBs2").fadeIn();
          $("#network_div2").fadeIn();
          return;
        }
      }
    } else if (selectedNodeID <= idTIinf) {
      for (var _x4 in viewsInfra) {
        if (viewsInfra[_x4].id == selectedNodeID) {
          selectedView = viewsInfra[_x4];
          if (clickedDPSs.length === 0) return;

          var _abbs = filterABBSBaseDPS(selectedView.bbs);

          var _newView = _objectSpread({}, selectedView);

          _newView.bbs = _abbs;

          var _tableBBs = _abbs.filter(function (abb) {
            return !abb.hidden;
          });

          createBuildingBlocksTable({
            bbs: _tableBBs
          });
          drawIntraViewsPredecessorsChart(_newView);
          document.getElementById("viewDetail").innerHTML = "<i>Policy:  ".concat(CA(selectedView.policy), "</i>") + "<br><i>Name: ".concat(CA(selectedView.name), "</i>");
          document.getElementById("bbDetail").innerHTML = "<i>please select a builidng block</i>";
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

var filterABBSBaseDPS = function filterABBSBaseDPS(abbs) {
  return abbs.map(function (abb) {
    for (var idx = 0; idx < clickedDPSs.length; idx++) {
      var dps = clickedDPSs[idx];

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


var bbsFillInfo = function bbsFillInfo(details) {
  $("#networkBBs2-dbc-info > .info").html("\n      <div>\n        <span>ID: </span>\n        <span>".concat(details.id, "</span>\n      </div>\n      <div>\n        <span>Policy: </span>\n        <span>").concat(details.policy, "</span>\n      </div>\n      <div>\n        <span>Name: </span>\n        <span>").concat(details.name, "</span>\n      </div>\n  "));
};

var filterBBTableWithMultipleDPS = function filterBBTableWithMultipleDPS(bbs) {
  var bbsIDs = bbs.map(function (bb) {
    return bb.id;
  });
  var tableBodyRows = document.querySelectorAll("#bbTable > tbody > tr");

  for (var rowIdx = 0; rowIdx < tableBodyRows.length; rowIdx++) {
    var tr = tableBodyRows[rowIdx];
    tr.setAttribute("style", "");
    var td = tr.querySelector("td:first-child");
    var tdValue = td.textContent;
    if (bbsIDs.indexOf(tdValue) === -1) tr.style.display = "none";
  }
};
/**
 * 
 Create and draw bb chart
 */


function drawIntraViewsPredecessorsChart(view) {
  var _options3;

  if (network2 !== null) {
    network2.destroy();
    network2 = null;
  }

  var bbs = view.bbs;

  if (bbs.length == 0 || bbs.every(function (bb) {
    return bb.hidden === true;
  })) {
    alert("There are no building blocks available for the filter combination selected");
    $(".networkBBs2-no-results").removeClass("d-none");
    return;
  }

  $(".networkBBs2-no-results").addClass("d-none");
  var nodes = [];
  var edges = [];

  for (var i in bbs) {
    var bb = bbs[i];
    var image = void 0;

    if (view.name == "Buisness Capabilities (mission critial)") {
      image = "bc.png";
    } else {
      image = "rank/old-" + Math.round(bb.ability) + ".png";
    }

    var label = " ".concat(CA(bb.abb || "").replace(/.{20}\S*\s+/g, "$&@").split(/\s+@/).join("\n"));
    var title = "<div class=\"network2-tooltips\">\n    <div>ID: ".concat(bb.id, " </div>\n    <div>Name: ").concat(bb.abb, " </div>\n    <div>Policy Domain: ").concat(bb.policy, " </div>\n    <div>DPS: ").concat(bb.digPubServ.join(", "), " </div>\n    <div>Ability to support: ").concat(bb.ability, " </div>\n  </div>");
    var color = [];
    color.background = "#fff";
    var node = createDigitalTransformNode(bb.id, "circularImage", image, label, title, color);
    node.dps = bb.digPubServ;
    node.hidden = bb.hidden;
    nodes.push(node);
    var childs = bb.successors;

    for (var y in childs) {
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
    edges: edges
  };
  var options = (_options3 = {
    physics: true,
    interaction: {
      hover: true
    },
    height: "100%",
    width: "100%",
    nodes: {
      imagePadding: 11,
      borderWidth: 1,
      size: 30,
      color: {
        border: "#222222",
        background: "#BBE1FA"
      },
      font: {
        color: "#000",
        size: 10
      },
      shadow: true
    },
    edges: {
      smooth: {
        type: "dynamic",
        forceDirection: "horizontal",
        roundness: 0.4
      },
      color: "gray",
      arrows: {
        to: {
          enabled: true
        }
      }
    }
  }, _defineProperty(_options3, "interaction", {
    navigationButtons: true,
    keyboard: true
  }), _defineProperty(_options3, "physics", {
    forceAtlas2Based: {
      springLength: -5
    },
    minVelocity: 0.75,
    solver: "forceAtlas2Based",
    timestep: 0.53
  }), _options3);
  network2 = new vis.Network(container, data, options);
  network2.on("click", function (params) {
    params.event = "[original event]";
    var selectedNodeID = this.getNodeAt(params.pointer.DOM);
    var bbs = selectedView.bbs;

    for (var x in bbs) {
      if (bbs[x].id == selectedNodeID) {
        if (bbs[x].area == null) {
          document.getElementById("bbDetail").innerHTML = "<i>ID: ".concat(bbs[x].id, "</i>") + "<br><i>name: ".concat(bbs[x].abb, "</i>") + "</i>";
          "<br><i>Ability to support the dBusCap: " + bbs[x].ability + "</i>";
        } else {
          document.getElementById("bbDetail").innerHTML = "<i>ID: ".concat(bbs[x].id, "</i>") + "<br><i>Area: ".concat(bbs[x].area, "</i>") + "<br><i>Ability to support the dBusCap: " + bbs[x].ability + "</i>";
        }

        return;
      }
    }
  });
  network2.once("beforeDrawing", function () {
    network2.focus(1, {
      scale: 10
    });
  });
  network2.once("afterDrawing", function () {
    network2.fit({
      animation: {
        duration: 1300,
        easingFunction: "easeInQuad"
      }
    });
  });
}

function filterBBTableByID() {}
/**
 * 
 Create bb table
 */


function createBuildingBlocksTable(bc) {
  var table = document.getElementById("bbTable");
  table.innerHTML = "";
  var thead = table.createTHead();
  var row = thead.insertRow();
  var th1 = thWithTextNode("ID");
  var th2 = thWithTextNode("View");
  var th3 = thWithTextNode("Area");
  var th4 = thWithTextNode("Name");
  var th5 = thWithTextNode("Description");
  var th6 = thWithTextNode("Ability to support the dBusCap");
  var th7 = thWithTextNode("IDs' successors");
  var th8 = thWithTextNode("Digital Public service");
  row.appendChild(th1);
  row.appendChild(th2);
  row.appendChild(th3);
  row.appendChild(th4);
  row.appendChild(th5);
  row.appendChild(th6);
  row.appendChild(th7);
  row.appendChild(th8);
  var body = document.createElement("tbody");
  table.appendChild(body);
  var bbs = Array.from(new Set(bc.bbs));
  currentBBTableBody = bbs;
  var dBusCapId = bc['id'];

  if (dBusCapId === undefined) {
    dBusCapId = document.getElementById("dps-network-bc-info").getElementsByTagName('p')[0].textContent.split(' ')[1];
  }

  var _loop4 = function _loop4() {
    // search for the ability based on both the abb and dBusCap ids
    var abbId = bbs[k]['id'];
    var currentAbility = 0;

    try {
      currentAbility = customBBs.find(function (el) {
        return el.id === "".concat(abbId, " - ").concat(dBusCapId);
      })['Ability to support the dBusCap'];
      currentBBTableBody[k]['ability'] = currentAbility;
    } // if no abb exists, search in the bcList
    catch (err) {
      currentAbility = bcList[dBusCapId]['bbs'].find(function (el) {
        return el.id === abbId;
      })['ability'];
      currentBBTableBody[k]['ability'] = currentAbility;
    }

    var row = body.insertRow();
    row.insertCell().appendChild(document.createTextNode(bbs[k].id));
    row.insertCell().appendChild(document.createTextNode(bbs[k].view));
    row.insertCell().appendChild(document.createTextNode(bbs[k].area));
    row.insertCell().appendChild(document.createTextNode(bbs[k].abb));
    row.insertCell().appendChild(document.createTextNode(bbs[k].description));
    row.insertCell().appendChild(document.createTextNode(currentAbility)); //bbs[k].ability));

    var succs = bbs[k].successors.join(", ");
    var digPubServs = bbs[k].digPubServ.join(", ");
    row.insertCell().appendChild(document.createTextNode(succs));
    row.insertCell().appendChild(document.createTextNode(digPubServs));
  };

  for (var k in bbs) {
    _loop4();
  }
}

document.querySelector("#policy-filter-span").addEventListener("click", function () {
  this.classList.toggle("goog-combobox-active");
  var div = this.querySelector("#policy-filter-span > div");

  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
});
var xAxisValues = document.querySelectorAll("#policy-filter-span > div > div");

var _loop5 = function _loop5(i) {
  xAxisValues[i].addEventListener("click", function () {
    var text = xAxisValues[i].textContent;
    filterXAxis(xAxisValues[i].getAttribute("value"), text.trim());
  });
};

for (var i = 0; i < xAxisValues.length; i++) {
  _loop5(i);
}
/**
 * Change the bubble chart's x axis
 */


var filterXAxis = function filterXAxis(value, valueToShow) {
  if (value === "National digital strategy Fit") {
    order = [0, 1, 2, 3, 4, 5];
  } else if (value === "Expected public value") {
    order = [0, 5, 2, 3, 4, 1];
  }

  document.querySelector("#policy-filter-span > input ").setAttribute("placeholder", valueToShow);
  view.setColumns(order);
  drawBusinessCapabilityChart(quadrantWidth());
};
/**
 * Html selects for dps network
 */


var dpsSelectDivList = document.querySelector(".dps-select-div ul");
dpsSelectDivList.addEventListener("click", function (e) {
  var element = e.target;
  var input;
  var checked;

  if (element.tagName !== "INPUT") {
    input = element.parentElement.querySelector("input");
    checked = !input.checked;
  } else {
    input = element;
    checked = input.checked;
  }

  input.checked = checked;

  if (element.tagName !== "INPUT") {
    var event = new Event("change", {
      bubbles: true
    });
    element.dispatchEvent(event);
  }
});

var filteringDpsNetwork = function filteringDpsNetwork(dpss) {
  var temp = new vis.DataSet();
  DPSNetNodes.forEach(function (node) {
    DPSNetNodes.update({
      id: node.id,
      hidden: false
    });
    temp.add(_objectSpread(_objectSpread({}, node), {}, {
      hidden: false
    }));
  });

  if (dpss.length === 0) {
    DPSNetNodes.clear();
    temp.forEach(function (node) {
      return DPSNetNodes.add(node);
    });
    return;
  }

  temp = new vis.DataSet();
  DPSNetNodes.forEach(function (node) {
    var hidden;

    if (dpss.indexOf(node.dpsID) > -1) {
      hidden = false;
    } else {
      hidden = true;
    }

    node.hidden = hidden;
    temp.add(_objectSpread(_objectSpread({}, node), {}, {
      hidden: hidden
    }));
    DPSNetNodes.update({
      id: node.id,
      hidden: hidden
    });
  });
  DPSNetNodes.clear();
  temp.forEach(function (node) {
    return DPSNetNodes.add(node);
  });
};

dpsSelectDivList.addEventListener("change", function (e) {
  var dpsElements = dpsSelectDivList.querySelectorAll("input:checked");
  var dps = [];

  for (var idx = 0; idx < dpsElements.length; idx++) {
    dps.push(dpsElements[idx].getAttribute("data-dig-pub-service"));
  }

  var _clickedBC = clickedBC,
      allBcDps = _clickedBC.dps;
  var dpsNames = [];
  clickedDPSs = dps;
  dps.forEach(function (dp) {
    dpsNames.push(allBcDps.filter(function (ps) {
      return ps.id === dp;
    })[0].name);
  });
  bbsMultipleDPSInfo(dpsNames);
  var filteredBBSs;

  if (dps.length > 0) {
    filteredBBSs = clickedBC.bbs.filter(function (bb) {
      for (var _idx = 0; _idx < bb.digPubServ.length; _idx++) {
        if (dps.indexOf(bb.digPubServ[_idx]) > -1) return true;
      }

      return false;
    });
  } else {
    filteredBBSs = clickedBC.bbs;
  }

  createBuildingBlocksTable({
    bbs: filteredBBSs
  });
  filternetwork2(dps);
  filteringDpsNetwork(dps);
  drawViewsPredecessorsChart(clickedBC, dps);
});
/**
 * 
 Write dps info next to bb chart
 */

var bbsMultipleDPSInfo = function bbsMultipleDPSInfo(names) {
  names = names.map(function (name) {
    return "<li>".concat(name, "</li>");
  }).join("\n");
  $("#networkBBs2-dps-info > .info").html("<ul class=\"networkBBs2-dps-info-list\" >\n      ".concat(names, "\n    </ul>"));
};

$(document).on("scroll", function () {
  var scrollDistance = $(this).scrollTop();
  var bbStart = $("#bb-div").offset().top;
  var windowHeight = $(window).height();
  if (bbStart === 0) return;

  if (scrollDistance >= bbStart - windowHeight) {
    $(".scroll-to-dps").fadeIn().css({
      display: "flex"
    });
  } else {
    $(".scroll-to-dps").fadeOut();
  }
});
$(".scroll-to-dps").on("click", function () {
  scrollToElement("#networkBBs");
});

/***/ }),

/***/ "./node_modules/core-js/fn/promise.js":
/*!********************************************!*
  !*** ./node_modules/core-js/fn/promise.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/***/ (function(module) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ (function(module) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ (function(module) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ (function(module) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ (function(module) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ (function(module) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ (function(module) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ (function(module) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ (function(module) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/***/ (function(module) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ (function(module) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ (function(module) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.try.js":
/*!*********************************************************!*
  !*** ./node_modules/core-js/modules/es7.promise.try.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./node_modules/core-js/fn/promise.js");
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	__webpack_require__("./jsFE/roadmap.js");
/******/ })()
;
//# sourceMappingURL=roadmap.js.map