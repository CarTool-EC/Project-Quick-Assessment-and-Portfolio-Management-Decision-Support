/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jsFE/requestSurvey.js":
/*!*******************************!*
  !*** ./jsFE/requestSurvey.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var FILES = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var test;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("/api/backoffice/get-files");

        case 2:
          test = _context.sent;
          _context.next = 5;
          return test.json();

        case 5:
          test = _context.sent;
          return _context.abrupt("return", test);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();

/* harmony default export */ __webpack_exports__["default"] = (FILES);

/***/ }),

/***/ "./jsFE/survey.js":
/*!************************!*
  !*** ./jsFE/survey.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _requestSurvey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestSurvey */ "./jsFE/requestSurvey.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var converter = new showdown.Converter();
var resultsToSave = {};
var currentState = {};
var doLoadState = false;
var prospectiveAvgElements = []; // let createAvgElementIdx = null;

var selectedNonApplicableReqIDs = [];
var nonApplicableReqs = [];
var checkboxes = {};
var overallAvgOptimal = 0;
var fullName;
var organisation;
var email;
var country;
var projectID;
var projectDomain;
var projectName;
var projectStrategyFit;
var projectStatusQuoEfficacy;
var projectTargetEfficacy;
var projectExpectedPublicValue;
var projectEstimatedBudget;
var selectedBC = {};
var buttonTitles = [];
var pubValueTooltip = "It refers to the expected beneficial impact (cost discounted) provided by the target prospective ability (*) to support the digital business capability. (*) default is the highest possible prospective ability";
var budgetTooltip = "It refers to the estimated amount (in millions of EUR) required to reach the target prospective ability of the Architectural Building Block to support the digital business capability (to fulfill the GAP)";
var perspectiveTool = "It measures the perspective ability to support a Digital Business Capability";
var supportTooltip = "It measures the current ability to support the digital business capability";
var abbTooltips = {
  Legal: "This view includes the ABBs related to the different legal acts, policies and strategies influencing or governing the digital public services",
  Organisational: "This view includes the ABBs related to the Public Administration organisation, responsibilities and agreements to achieve mutually beneficial goals",
  Semantic: "This view includes the ABBs related to format and meaning of exchanged data and information",
  Technical: "This view covers the ABBs related to the applications and infrastructures systems and services",
  "Technical-infrastructure": "This view includes all the ABB related to the infrastructures systems and services",
  "Technical-application": "This view includes all the ABB related to the applications systems and services"
};
var $surveyLoadingModal = $("#survey-loading-modal");
/**
 * This function takes an array of objects and groups each object
 * For ex [{id:1, item: 2}, {id:1, item2: 3}] and key = 'id' ==> {1: {id:1, item: 2}, {id:1, item2: 3}}
 * @param {Array} obj
 * @param {String} key
 * @param {Boolean} containSpaces
 * @returns {Object}
 */

function groupBy(obj, key, containSpaces) {
  var spaces = containSpaces || true;

  if (spaces) {
    return obj.reduce(function (prevObj, current) {
      (prevObj[current[key]] = prevObj[current[key]] || []).push(current);
      return prevObj;
    }, {});
  }

  return obj.reduce(function (prevObj, current) {
    var tempKey = current[key].split(" ")[0];
    (prevObj[tempKey] = prevObj[tempKey] || []).push(current);
    return prevObj;
  }, {});
}

var changeActiveStateAtButtonsTitles = function changeActiveStateAtButtonsTitles(id, isActive) {
  for (var index = 0; index < buttonTitles.length; index++) {
    var buttonsTitles = buttonTitles[index];
    var test = buttonsTitles.filter(function (obj) {
      return obj.id === id;
    });

    if (test.length > 0) {
      test[0].active = isActive;
      break;
    }
  }
};
/**
 * This function takes a 3 numbers and generates an array with numbers in this range
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */


function range(start, end, step) {
  var s = start || 0;
  var stp = step || 1;
  var arr = [];

  for (var i = s; i <= end; i += stp) {
    arr.push(i);
  }

  return arr;
}
/**
 * This function takes a string and make the first letter UpperCase.
 * @param {String} s
 */


function capitalize(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function animate(animitionType, duration) {
  if (!duration) duration = 1000;
  var surveyContainer = document.getElementById("surveyContainer");
  $(surveyContainer).velocity(animitionType, {
    duration: duration
  });
}

animate("slideDown", 1000);
var doAnimantion = true;

var createChecbox = function createChecbox(policy) {
  var div = document.createElement("div");
  var input = document.createElement("input");
  var label = document.createElement("label");
  div.appendChild(input);
  div.appendChild(label);
  var labelText = capitalize(policy.toLowerCase());
  div.className = "form-check form-check-inline";
  input.className = "form-check-input";
  label.className = "form-check-label";
  input.setAttribute("type", "checkbox");
  input.setAttribute("checked", "checked");
  input.id = "".concat(policy.toLowerCase().split(" ").join("-"), "-checkbox");
  labelText === "Business agnostic" && input.setAttribute("disabled", "true");
  label.innerText = labelText === "Business agnostic" ? "".concat(labelText, " (required)") : labelText;
  return div;
};

var createPolicyCheckboxes = function createPolicyCheckboxes(policies) {
  var parent = document.querySelector(".form-check-group");
  policies.forEach(function (policy) {
    var div = createChecbox(policy);
    parent.appendChild(div);
  });
};

var fetchPolicies = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var resp;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("/api/backoffice/get-policies");

          case 3:
            resp = _context.sent;
            _context.next = 6;
            return resp.json();

          case 6:
            resp = _context.sent;
            createPolicyCheckboxes(resp);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function fetchPolicies() {
    return _ref.apply(this, arguments);
  };
}();

fetchPolicies();

function updateButtonsClickAbility(currentActiveIdx) {
  var buttons = document.querySelectorAll("#pageSelector button");

  for (var i = 0; i < buttons.length; i++) {
    if (i < currentActiveIdx) {
      buttons[i].disabled = false;
    } else {
      buttons[i].disabled = true;
    }
  }
}

function addButtonsInNavigation() {
  var footerContent = document.querySelector(".panel-footer");
  var newButtons = document.getElementById("buttons-in-top");
  if (footerContent === null) return;
  var elements = footerContent.childNodes;
  newButtons.innerHTML = "";

  var _loop = function _loop(i) {
    var element = elements[i].cloneNode(true);
    element.addEventListener("click", function () {
      var elementType = elements[i].nodeName;

      if (elementType === "FONT") {
        elements[i].querySelector("input,button").click();
        return;
      }

      elements[i].click();
    });
    newButtons.appendChild(element);
  };

  for (var i = 0; i < elements.length; i++) {
    _loop(i);
  }

  var buttonsObserver = new MutationObserver(function (mutations) {
    addButtonsInNavigation();
  });
  var observerConfiguration = {
    attributes: true,
    childList: true,
    characterData: true
  };
  buttonsObserver.observe(footerContent, observerConfiguration);
}
/**
 * Create Checkboxe for skip functionality
 */


var checkBoxForBCv2 = function checkBoxForBCv2() {
  var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var checkbox = document.createElement("input");
  checkbox.className = "skip-checkbox";
  checkbox.checked = checked;
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("custom-checked", checked);
  return checkbox;
};
/**
 * Helper for addCheckBoxInBCQuestion
 */


var getGeneratedVisibleRow = function getGeneratedVisibleRow(page, idx) {
  return page.elements[0].generatedVisibleRows[idx];
};
/**
 * Helper for addCheckBoxInBCQuestion
 */


var changeRequiredStateAtCells = function changeRequiredStateAtCells(visibleRow, reqState) {
  var cells = visibleRow.cells;

  for (var idx = 0; idx < cells.length; idx++) {
    cells[idx].question.isRequired = reqState;
  }
};
/**
 * Helper for addCheckBoxInBCQuestion
 */


var removeRequiredFromBBS = function removeRequiredFromBBS(page, state) {
  var elements = page.elements;

  for (var idx = 0; idx < elements.length; idx++) {
    var columns = elements[idx].columns;

    for (var cIdx = 0; cIdx < columns.length; cIdx++) {
      columns[cIdx].isRequired = state;
    }
  }
};
/**
 * Helper for addCheckBoxInBCQuestion
 */


var toggleAllElementsState = function toggleAllElementsState(page, state) {
  removeRequiredFromBBS(page, state);
  var elements = page.elements;

  for (var i = 0; i < elements.length; i++) {
    elements[i].isRequired = state;
  }
};
/**
 * Helper for addCheckBoxInBCQuestion
 */


var isAllBcSelected = function isAllBcSelected(body) {
  var testA = body.querySelectorAll(".skip-checkbox");
  var testB = body.querySelectorAll(".skip-checkbox[custom-checked=true]");
  return testA.length === testB.length;
};
/**
 * Helper for addCheckBoxInBCQuestion
 */


var removeContent = function removeContent(row) {
  var cells = row.cells;

  for (var idx = 0; idx < cells.length; idx++) {
    cells[idx].value = "";
  }
};
/**
 * Helper for addCheckBoxInBCQuestion
 */


var toggleVisibility = function toggleVisibility(page, state) {
  var elements = page.elements;

  for (var idx = 0; idx < elements.length - 1; idx++) {
    elements[idx].visible = state;
  }
};
/**
 * Helper for addCheckBoxInBCQuestion
 */


var determineParentClass = function determineParentClass(parentElement, checked) {
  if (checked) {
    parentElement.classList.remove("table-parent-event");
  } else {
    parentElement.classList.add("table-parent-event");
  }
};

var cleanGeneratedQuestionFromSpanTag = function cleanGeneratedQuestionFromSpanTag(question) {
  return question.replace('<span style="display:none">', "").replace("</span>", "");
};

var getIDFromGeneratedQuestion = function getIDFromGeneratedQuestion(question) {
  question = cleanGeneratedQuestionFromSpanTag(question);
  return question.split(")")[0];
};

var findGeneratedVisibleRowIndex = function findGeneratedVisibleRowIndex(elements, id) {
  var generatedVisibleRows = elements.generatedVisibleRows;
  var index = -1;
  generatedVisibleRows.forEach(function (row, idx) {
    var name = row.name;
    var rowId = getIDFromGeneratedQuestion(name);

    if (rowId === id) {
      index = idx;
      return;
    }
  });
  return index;
};

function isValidBudget(value) {
  var re = /^(\d{0,}\.\d{0,2}|\d{0,}|\.\d{0,2})$/;
  if (!value) return;
  var test = re.test(value);
  if (!test) return "Please provide the budget in the right form (e.x. 10.50)";
}
/**
 * Create Checkboxes for all the dBusCaps with all functionality
 */


var addCheckBoxInBCQuestion = function addCheckBoxInBCQuestion(survey, _ref2, isFirstPage) {
  var parent = _ref2.htmlElement,
      page = _ref2.page;
  var bcTableyTag = parent.querySelectorAll(".sv_row table");
  var rowIndexV1 = bcTableyTag.length === 1 ? 1 : bcTableyTag.length;
  bcTableyTag = bcTableyTag[rowIndexV1 - 1];
  var bcBodyTag = bcTableyTag.querySelector("tbody");
  var bcHeadTag = bcTableyTag.querySelector("thead tr");
  var th = document.createElement("th");
  th.className = isFirstPage ? "" : "d-none";
  var span = document.createElement("span");
  span.innerHTML = "Selected \n  <a\n  target=\"_blank\"\n  href=\"https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDigitalBusinessCapability \"\n  title=\"Digital Capabilities are the key skills and capabilities a company or a Government requires to transform itself into a sustainable and successful business by considering digital technology as the enabling component\">digital\n  business capabilities</a>";
  var tooltipSpan = document.createElement("span");
  tooltipSpan.setAttribute("data-toggle", "tooltip");
  tooltipSpan.setAttribute("data-html", "true");
  tooltipSpan.setAttribute("title", "Unchecking this button, the related digital business capability will not be assessed ");
  tooltipSpan.className = "pl-1";
  var icon = document.createElement("i");
  icon.className = "fa fa-question-circle text-primary";
  tooltipSpan.appendChild(icon);
  span.appendChild(tooltipSpan);
  th.appendChild(span);
  bcHeadTag.insertBefore(th, bcHeadTag.firstElementChild);
  var trs = bcBodyTag.querySelectorAll("tr");
  var len = trs.length;

  for (var idx = 0; idx < len; idx++) {
    var tr = trs[idx];
    var td = document.createElement("td");
    td.className = isFirstPage ? "" : "d-none";
    tr.insertBefore(td, tr.firstElementChild);
    var $tr = $(tr);
    var id = getIDFromGeneratedQuestion($tr.children().eq(1).find("span").text());

    if (!selectedBC[id]) {
      $tr.addClass("table-parent-event");
      var a = findGeneratedVisibleRowIndex(page.elements[0]);

      if (a !== -1) {
        removeContent(page.elements[0].generatedVisibleRows[a]);
      }
    } else {
      $tr.removeClass("table-parent-event");
    }

    var checkbox = checkBoxForBCv2(selectedBC[id]);
    td.appendChild(checkbox);
    changeRequiredStateAtCells(getGeneratedVisibleRow(page, idx), checkbox.checked);
  }

  if (!isFirstPage) {
    if (isAllBcSelected(bcBodyTag)) {
      toggleAllElementsState(page, true);
      toggleVisibility(page, true);
    } else {
      toggleAllElementsState(page, false);
      toggleVisibility(page, false);
    }
  }

  bcBodyTag.addEventListener("click", function () {
    var element = event.target;
    if (!(element.nodeName === "INPUT" && element.type === "checkbox")) return;
    var currentRowElement = element.parentElement.parentElement;
    var rowIndex = currentRowElement.rowIndex;
    var $tr = $(currentRowElement);
    var id = getIDFromGeneratedQuestion($tr.children().eq(1).find("span").text());
    removeContent(getGeneratedVisibleRow(page, rowIndex - 1));
    changeRequiredStateAtCells(getGeneratedVisibleRow(page, rowIndex - 1), element.checked);

    if (element.checked) {
      $("[dbuscap-id=".concat(id, "]")).removeClass("d-none");
    } else {
      $("[dbuscap-id=".concat(id, "]")).addClass("d-none");
    }

    page.rows[rowIndexV1 - 1].elements[0].isRequired = element.checked;
    selectedBC = _objectSpread(_objectSpread({}, selectedBC), {}, _defineProperty({}, id, element.checked));
    changeActiveStateAtButtonsTitles(id, element.checked);
    element.setAttribute("custom-checked", element.checked);
    setVisibilitySurveyPageBasedDBCID(survey, id, element.checked);
    determineParentClass(currentRowElement, element.checked);
    updateProgressBar();
    addButtonsInNavigation();
  });
};

var setVisibilitySurveyPageBasedDBCID = function setVisibilitySurveyPageBasedDBCID(survey, id, state) {
  var pages = survey.pages;

  for (var idx = 1; idx < pages.length; idx++) {
    var questions = pages[idx].questions;
    var dBusCapQuestion = questions[questions.length - 1];
    var elementRow = dBusCapQuestion.rows[0];

    if (elementRow.text.startsWith("".concat(id, ")"))) {
      pages[idx].visible = state;
      return;
    }
  }
};
/**
 * Calculate the average ability for the abbs are selected
 */


var totalCalcAbbAvg = function totalCalcAbbAvg() {
  var array = $(".sv_row:not(:last-child) .btn.btn-default.btn-secondary.active:not(.hide)").map(function (index, element) {
    return +$(this).find("input").val();
  }).get();
  var sum = array.reduce(function (sum, num) {
    return sum += num;
  }, 0);
  var avg = array.length > 0 ? sum / array.length : 0;
  return avg;
};
/**
 * Create the element in the survey that will display the average of the abbs that user selected
 */


var totalAvgAbbElement = function totalAvgAbbElement(bcName) {
  var lastRow = $(".sv_row:last-child");
  var avg = totalCalcAbbAvg();
  var newElement = $("\n  <div class=\"custom-row pt-2 pb-4 px-3\">\n    <p class=\"custom-avg-p\">\n    The overall assessed ability to support the digital business capability \"".concat(bcName.title, "\" is:\n      <input class=\"custom-avg-input\" id=\"total-avg-input\" type=\"text\" value=\"").concat(avg.toFixed(2), "\" disabled />\n    out of 5\n    </p>\n  </div>\n  <div class=\"custom-row pt-2 pb-4 px-3\">\n    <p class=\"custom-avg-p\">\n      Therefore the gap between the Target Prospective Average Ability and the Overall Assessed Ability to support the digital business capability is:\n      <input id=\"overall-diff-target-ability\" class=\"custom-avg-input\" id=\"total-avg-input\" type=\"text\" value=\"").concat(avg.toFixed(2), "\" disabled /> out of 5\n    </p>\n  </div>\n  "));
  lastRow.before(newElement);
  $(".sv_row:not(:last-child) .btn.btn-default.btn-secondary").on("click", "input", function () {
    $(this).parent().addClass("active");
    $(this).parent().prevAll().removeClass("active");
    $(this).parent().nextAll().removeClass("active");
    var avg = totalCalcAbbAvg();
    $("#total-avg-input").val(avg.toFixed(2));
    updateTargetOverallAccessDiff();
  });
};

var calcAvgForView = function calcAvgForView(idx) {
  var $activeLabels = $(".sv_row:nth-of-type(".concat(idx + 1, ") .btn.btn-default.btn-secondary.active:not(.hide)"));
  var values = $activeLabels.map(function () {
    return +$(this).find("input").val();
  }).get();
  var avg = values.reduce(function (sum, currVal) {
    return sum += currVal;
  }, 0);
  var length = values.length;
  if (!length) return 0;
  return avg / length;
};

var createAvgElement = function createAvgElement(bcName, view, idx) {
  var avg = calcAvgForView(idx);
  var newElement = $("\n  <div class=\"custom-row pt-2 pb-4 px-3\">\n    <p class=\"custom-avg-p\">\n    The overall assessed ability to support the digital business capability \"".concat(bcName, "\" ").concat(view, " requirements is:\n      <input class=\"custom-avg-input view-avg\" id=\"custom-avg-input-").concat(idx, "\" type=\"text\" value=\"").concat(avg.toFixed(2), "\" disabled />\n    out of 5\n    </p>\n  </div>\n  "));
  var newElement2 = $("\n    <div>\n      <div>\n        <label><b>Please, indicate the target prospective ability to support the digital business capability - ".concat(view, " requirements (1-5):</b></label>\n          <input type=\"range\" name=\"prospective-avg-input\" id=\"prospective-avg-input-").concat(idx, "\" min=\"1\" max=\"5\" value=\"0\" required>\n      </div>\n      <div id=\"ability-difference-").concat(idx, "\">\n        <p><b>Therefore the gap between the Target Prospective Average Ability and the Overall Assessed Ability to support the digital business capability is: </b>\n            <input class=\"custom-avg-input diff-class\" id=\"ability-difference-value-").concat(idx, "\" type=\"text\" value=\"1\" disabled />\n        </p>\n      </div>\n    </div>\n  "));
  var latestActualAvg = 0;
  var latestOptimalAvg = 0;
  prospectiveAvgElements = document.getElementsByName("prospective-avg-input"); // Updates the value that shows the difference between the Target Prospectice (Optimal)
  // and the OvelAll assessed (Actual) Avg Ability

  function updateDiff() {
    document.getElementById("ability-difference-value-".concat(idx)).value = (latestActualAvg - latestOptimalAvg).toFixed(2);
  } // Calculate the Overall Average


  function updateOverallAvgOptimal() {
    var sum = 0;
    var len = prospectiveAvgElements.length;

    for (var i = 0; i < len; i++) {
      sum += Number(prospectiveAvgElements[i].value);
    }

    overallAvgOptimal = (sum / len).toFixed(0);
    return overallAvgOptimal;
  }

  $(".sv_row").eq(idx).append(newElement);
  $(".sv_row").eq(idx).append(newElement2);
  $(".sv_row").eq(idx).on("click", "*", function (event) {
    var $labels = $(event.target).parents(".btn.btn-default.btn-secondary");
    if (!$labels.length) return;
    $labels.addClass("active");
    $labels.prevAll().removeClass("active");
    $labels.nextAll().removeClass("active");
    var avg = calcAvgForView(idx);
    $("#custom-avg-input-".concat(idx)).val(avg.toFixed(2)); // Get the actual avg from the values of the requirements

    latestActualAvg = $("#custom-avg-input-".concat(idx))[0].value;
    updateDiff();
  }); // Get the optimal avg that the user provides

  document.getElementById("prospective-avg-input-".concat(idx)).addEventListener("click", function () {
    latestOptimalAvg = document.getElementById("prospective-avg-input-".concat(idx)).value; // Update the difference value between the user's optimal average and the actual average

    updateDiff(); // Update the Target Prospective Average Ability rating value

    var lastTable = Array.from(document.querySelectorAll('table')).slice(-1)[0];
    var tbodyElement = lastTable.querySelector('tbody');
    var trElement = tbodyElement.querySelector('tr');
    var lastTdElement = Array.from(trElement.querySelectorAll('td')).slice(-1)[0];
    var divElement = lastTdElement.querySelector('div'); // Make the Target Prospective Average Ability rating non clickable for the user

    divElement.className = ' disable-div'; // Automatically click the Average value for Target Prospective

    divElement.getElementsByClassName('btn-group')[0].querySelectorAll('label')[updateOverallAvgOptimal() - 1].click();
    updateTargetOverallAccessDiff();
  });
};
/***
 * Updates the value of the difference between Target Prospective Average Ability 
 * and Overall Access Ability to Support the DBC
 */


function updateTargetOverallAccessDiff() {
  // Get overall access ability value
  var overallAccessAblity = $("#total-avg-input").val(); // Get the target prospective value

  var targetProspectiveValue = overallAvgOptimal; // Update the difference value

  var newValue = overallAccessAblity - targetProspectiveValue;
  $("#overall-diff-target-ability").val(newValue.toFixed(2));
}

var createAvgElements = function createAvgElements(bcName, views) {
  views.forEach(function (view, idx) {
    createAvgElement(bcName.title, view, idx);
  });
};
/**
 * @param {Array} surveys
 * @param {Number} index
 */


function surveyRelated(surveys, index, go2Top) {
  var idx = index || 0;
  var animateToTop = go2Top || false;

  if (animateToTop) {
    var interval = setInterval(function () {
      var button = document.querySelector(".scroll-to-top");

      if (button) {
        button.click();
        clearInterval(interval);
      }
    }, 1);
  }

  var title = surveys[idx].title;
  var pages = surveys[idx].pages;
  var surveyJSON = {
    title: title,
    pages: pages,
    showTitle: false
  };
  var isLast = idx === surveys.length - 1;
  var onCompleteFunc = isLast ? completeLastSurvey : completeNonLastSurvey;
  Survey.JsonObject.metaData.addProperty("questionbase", "tooltip");
  Survey.StylesManager.applyTheme("bootstrap");
  var survey = new Survey.Model(surveyJSON);
  survey.completeText = isLast ? "Complete" : "Next Survey";
  survey.onCompleting.add(onCompleteFunc);
  survey.showQuestionNumbers = "off";
  survey.onAfterRenderSurvey.add(function (sender) {
    var interval = setInterval(function () {
      var isLoading = survey.isLoading;
      if (isLoading) return;
      clearInterval(interval);
      setTimeout(function () {
        $surveyLoadingModal.modal("hide");
      }, 500);
    }, 10);
  });
  var optionsAfterRenderPage = "";
  survey.onAfterRenderPage.add(function (sender, options) {
    optionsAfterRenderPage = options;
    updateNavigation(options.page.visibleIndex);
    updateButtonsClickAbility(options.page.visibleIndex); // Implement the pre populate functionality 

    var valueBtns = document.getElementsByClassName("btn btn-default btn-secondary");
    var requirements = document.getElementsByClassName("req");
    var questionsObj = {};
    var surveyDataObj = {}; // populate the questionObj
    // {requirement ID: [valueBtn1,....], .....}

    var pos = 0;

    for (var i = 0; i < requirements.length; i++) {
      var plainID = requirements[i].innerText.split("*")[0];
      questionsObj[plainID] = [];

      for (var j = 0; j < 5; j++) {
        questionsObj[plainID].push(valueBtns[pos]);
        pos += 1;
      }
    }

    for (var _i = 0, _Object$entries = Object.entries(survey.data); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          view = _Object$entries$_i[0],
          valuesObj = _Object$entries$_i[1];

      for (var _i2 = 0, _Object$entries2 = Object.entries(valuesObj); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            id = _Object$entries2$_i[0],
            ability = _Object$entries2$_i[1];

        id = getIDFromGeneratedQuestion(id).split(">")[2];
        ability = Object.values(ability)[0];

        if (id !== undefined) {
          surveyDataObj[id.split("-")[0].replace(" ", "")] = ability;
        }
      }
    } // Uncomment to autopopulate requirements
    // for (let i = 0; i < valueBtns.length;) {
    //   // populate random value
    //   // let rand = Math.floor(Math.random() * 5) + 1;
    //   // for(let j = 1; j <= 5; j++) {
    //   //   if((j + 1) % rand === 0) {
    //   //     valueBtns[i].click();
    //   //   }
    //   //   i += 1;
    //   // }
    //   // populate value 5
    //   if((i + 1) % 5 === 0) {
    //     valueBtns[i].click();
    //   }
    //   i += 1;
    // }
    // Populate requirement's value based on a previous value 


    for (var _i3 = 0, _Object$entries3 = Object.entries(questionsObj); _i3 < _Object$entries3.length; _i3++) {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
          _id = _Object$entries3$_i[0],
          labelArray = _Object$entries3$_i[1];

      _id = _id.split("-")[0].replace(" ", "");

      if (_id in surveyDataObj) {
        labelArray[surveyDataObj[_id] - 1].click();
      }
    }

    var interval = setInterval(function () {
      var questions = $(".sv_row");

      if (!questions) {
        return;
      }

      clearInterval(interval);
      addButtonsInNavigation();
      $("#access-controls .spinner-border").addClass("d-none");

      if (questions.length > 1) {
        var views = options.page.elements.map(function (element) {
          return element.fullTitle;
        }).map(function (html) {
          return html.match(/<b>([a-zA-Z ]+)<\/b>/);
        }).filter(Boolean).map(function (groups) {
          return groups[1];
        });
        var activeButtonTitles = buttonTitles[idx].filter(function (obj) {
          return obj.active;
        });
        createAvgElements(activeButtonTitles[options.page.visibleIndex - 1], views);
        totalAvgAbbElement(activeButtonTitles[options.page.visibleIndex - 1]);
      }

      addCheckBoxInBCQuestion(survey, options, survey.currentPageNo === 0);
      updateProgressBar();
      $surveyLoadingModal.modal("hide");

      if (survey.currentPageNo !== 0) {
        if ($("#expand-error").length === 0) {
          var $message = createMessageForExpand();
          $("#surveyContainer form").prepend($message);
        }
      } else {
        if ($("#expand-error").length !== 0) {
          $("#expand-error").remove();
        }

        $("#dbcInstructions").modal("show");
      }
    }, 100);
  });
  survey.onMatrixCellValidate.add(function (sender, options) {
    if (options.columnName != "budget") return;
    var error = isValidBudget(options.value);
    options.error = error;
  });
  survey.onSettingQuestionErrors.add(function (sender, options) {
    if (options.errors.length === 0) return;

    try {
      var name = options.errors[0].errorOwner.textProcessor.name;
      if (!name) return;
      var questionID = getIDFromGeneratedQuestionForBB(name) + ")";
      var $questionSpan = $("span:contains(\"".concat(questionID, "\")"));
      var $parent = $questionSpan.parents(".sv_row");
      var $collapseButton = $parent.find("h5 button");
      if (!$collapseButton.hasClass("collapsed")) return;
      $collapseButton.click();
    } catch (e) {
      return;
    }
  });
  survey.onValidatedErrorsOnCurrentPage.add(function (survey, options) {
    var pageHasErros = options.errors.length !== 0;
    var windowHeight = $(window).height();
    if (!pageHasErros) return;
    var questions = options.questions;
    var allQuestions = survey.currentPage.questions;
    allQuestions.forEach(function (question) {
      var id = question.id;
      $("#".concat(id, "-custom-alert")).remove();
    });
    questions.forEach(function (option) {
      var $error = $("<div></div>").addClass("alert alert-danger").attr("id", "".concat(option.id, "-custom-alert")).text("Please answer the question");
      $("#".concat(option.id)).before($error);
    });
    $("#access-controls .spinner-border").addClass("d-none");
    $("html, body").animate({
      scrollTop: $(".sv_qstn .has-error").first().offset().top - windowHeight / 2
    }, 800);
  });
  survey.onTextMarkdown.add(function (survey, options) {
    var str = converter.makeHtml(options.text);
    str = str.replace(/<p[^>]*>|<\/p>/g, "");
    options.html = str;
  });
  var myCss = {
    navigationButton: "btn btn-primary"
  };
  $("#surveyContainer").Survey({
    model: survey,
    onComplete: saveResultToFile,
    css: myCss
  });
  survey.onCurrentPageChanging.add(function (sender, options) {
    if (!doAnimantion) return;
    options.allowChanging = false;
    document.getElementById("pageSelector").classList.add("d-none");
    $("#access-controls .spinner-border ").removeClass("d-none");
    $surveyLoadingModal.modal({
      backdrop: "static",
      keyboard: false
    });
    setTimeout(function () {
      doAnimantion = false;
      sender.currentPage = options.newCurrentPage;
      doAnimantion = true;
      document.getElementById("pageSelector").classList.remove("d-none");
    }, 500);
    animate("slideUp", 400);
  });
  survey.onCurrentPageChanged.add(function (sender) {
    animate("slideDown", 400);
    setTimeout(function () {
      updateProgressBar();
      $surveyLoadingModal.modal("hide");
    }, 400);
  });
  survey.onAfterRenderQuestion.add(function (sender, options) {
    if (sender.currentPageNo === 0) return;
    var $parent = $(options.htmlElement);
    var parentID = $parent.attr("id");
    var $titleDiv = $parent.find(">div:first-child h5");
    var $questionsDiv = $parent.find(">div:last-child");
    $questionsDiv.attr("id", parentID + "-question");
    $questionsDiv.addClass("collapse");
    var $button = $("<button></button>").attr("data-toggle", "collapse").attr("data-target", "#".concat(parentID, "-question")).attr("aria-expanded", "false").addClass("collapse-button collapsed");

    try {
      var label = $titleDiv.attr("aria-label");
      var category = label.split("<b>")[1].split("</b>")[0]; //$(`#${parentID} table`).before(illustrativeExample(category));
    } catch (e) {}

    $titleDiv.prepend($button);
  });
  survey.onAfterRenderQuestionInput.add(function (sender, options) {
    var _document$getElementB;

    if (sender.currentPageNo === 0) return;
    if (options.question.fullTitle !== '<span style="display: none;">Ability to support the dBusCap </span>') return;
    var $text = $("<div><b>Extent to which the requirement is met by the As-Is Digital Business Capability</b></div>");
    var reqId = getIDFromGeneratedQuestionForBB(options.question.data.name).split(">")[2]; // the - creates bug when used in id of html element button

    var abbId = reqId.split("-")[0].replace(" ", "");
    reqId = reqId.replace(" - ", "");
    var $applicable = $("<span title=\"By selecting this requirement as 'not applicable' one, it will not be considered in the overall assessed ability to support the digital business capability\">" + "<button class=\"non-applicable-button\" id=".concat(reqId, ">Not Applicable Requirement</button></span>"));
    $(options.htmlElement).prepend($text);

    if (nonApplicableReqs.includes(abbId)) {
      $(options.htmlElement).append($applicable);
      ;
    } // The functionality regarding the non applicable button


    (_document$getElementB = document.getElementById("".concat(reqId))) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.addEventListener('click', function () {
      // add or delete the reqId from the array
      if (selectedNonApplicableReqIDs.includes(reqId)) {
        // the user has unselected the non applicable button
        selectedNonApplicableReqIDs.splice(selectedNonApplicableReqIDs.indexOf(reqId), 1);
      } else {
        // the user has selected the non applicable button
        selectedNonApplicableReqIDs.push(reqId);
      }

      document.getElementById("".concat(reqId)).classList.toggle("non-applicable-activated"); // Hide the selected requirement's value box

      options.htmlElement.getElementsByTagName("div")[1].classList.toggle("hide");
      var labels = options.htmlElement.getElementsByTagName("div")[3].getElementsByTagName('label');

      for (var i = 0; i < labels.length; i++) {
        labels[i].classList.toggle('hide'); // In case the requirment has no selected value
        // assigned the value one in order to pass the error test

        if (i === 0) {
          labels[0].click();
        }
      } // Calculate the avg without the selected non applicable requirement


      var allViewsAvgInputs = document.getElementsByClassName('view-avg');

      for (var _i4 = 0; _i4 < allViewsAvgInputs.length; _i4++) {
        var _avg = calcAvgForView(0);

        $("#custom-avg-input-".concat(_i4)).val(_avg.toFixed(2));
        document.getElementById("custom-avg-input-".concat(_i4)).value = _avg.toFixed(2); // Update the difference gap

        var latestOptimalAvg = document.getElementById("prospective-avg-input-".concat(_i4)).value;
        var latestActualAvg = $("#custom-avg-input-".concat(_i4))[0].value;
        document.getElementById("ability-difference-value-".concat(_i4)).value = (latestActualAvg - latestOptimalAvg).toFixed(2);
      } // Update the final average


      var avg = totalCalcAbbAvg();
      $("#total-avg-input").val(avg.toFixed(2));
      updateTargetOverallAccessDiff();
    });
  });
  createSaveWorkButton(survey);
  createPreviousSurvey(surveys, survey, idx);
  /**
   * Funtiality that will execute if this survey is the last of all surveys ( which is based on policies)
   */

  function completeLastSurvey(sender, options) {
    if (!doAnimantion) return;
    convertResults(survey);
    options.allowComplete = false;
    setTimeout(function () {
      doAnimantion = false;
      sender.doComplete();
      doAnimantion = true;
    }, 50);
    animate("slideUp", 400);
    animate("slideDown", 200);
  }
  /**
   * Funtiality that will execute if this survey is not the last of all surveys ( which is based on policies)
   */


  function completeNonLastSurvey(sender, options) {
    $surveyLoadingModal.modal({
      backdrop: "static",
      keyboard: false
    });
    options.allowComplete = false;
    saveStateMiddleware(sender, true);
    convertResults(sender);
    surveyRelated(surveys, idx + 1, true);
  }

  var surveyTitles = surveys.map(function (surveyObj) {
    return surveyObj.title;
  });
  setupNavigator(survey, surveyTitles, idx);

  if (currentState[title]) {
    var loadedData = currentState[title].data;

    for (var domain in loadedData) {
      if (domain.indexOf("BC") === -1) continue;
      var dBusCaps = loadedData[domain];

      for (var dBusCap in dBusCaps) {
        var dBusCapID = getIDFromGeneratedQuestion(dBusCap);
        var _selectedBC = dBusCaps[dBusCap].selectedBC;

        if (!_selectedBC) {
          $("[dbuscap-id=".concat(dBusCapID)).addClass("d-none");
        }

        setVisibilitySurveyPageBasedDBCID(survey, dBusCapID, _selectedBC);
      }
    }

    survey.currentPageNo = currentState[title].currentPageNo;
    survey.data = currentState[title].data;
  }

  if (doLoadState) {
    loadState(survey);
  }
}

function createMessageForExpand() {
  var html = "Please click on the arrow <span class=\"down-arrow\"></span> to show/ hide the questions in each section";
  var $div = $("<div style=\"margin-bottom: 0 !important\"></div>").addClass("mt-3 alert alert-success").attr("id", "expand-error").html(html);
  return $div;
}
/**
 * Create the the navigation for dBusCaps with the ability to click
 */


function setupNavigationBar(survey, idx) {
  var options = _toConsumableArray(buttonTitles[idx]);

  var selector = document.getElementById("pageSelector");
  selector.innerHTML = "";
  options.unshift({
    id: 0,
    title: "Digital Business Capabilities Overview"
  });
  var length = options.length;

  var _loop2 = function _loop2(i) {
    var option = document.createElement("button");
    option.addEventListener("click", function () {
      survey.currentPageNo = i;
      $("#access-controls .spinner-border").removeClass("d-none");
    });
    option.setAttribute("dBusCap-id", options[i].id);
    option.innerHTML = options[i].title;
    option.classList.add("progress-bar-buttons"); // Highlight the first progress bar button

    if (i === 0) option.classList.add("progress-bar-buttons-current-active");
    selector.appendChild(option);
  };

  for (var i = 0; i < length; i++) {
    _loop2(i);
  }

  updateButtonsClickAbility(0);
}
/**
 * Create the first navigation that will display all the policies
 */


function createSurveyTitles(surveyTitles, idx) {
  var selector = document.getElementById("survey-titles");
  selector.innerHTML = "";
  var length = surveyTitles.length;
  surveyTitles.forEach(function (surveyTitle, index) {
    var option = document.createElement("div");
    var optionText = document.createElement("p");
    optionText.innerText = surveyTitle;
    var imageClass = surveyTitle.toLowerCase();
    imageClass = imageClass.split(" ").join("-");
    var image = document.createElement("div");
    image.className = "policy-images ".concat(imageClass, "-policy-images");
    option.appendChild(image);
    option.appendChild(optionText);
    selector.appendChild(option);
    option.className = "progress-bar-divs "; // The previous completed primary progress bar buttons have no red borders

    if (index < idx) option.classList.add("progress-bar-divs-active"); // The currently active primary progress bar button has red borders

    if (index === idx) option.classList.add("progress-bar-divs-current-active");
    option.style.width = 98 / length + "%";
    if (length === 1) option.style.width = "100%";
  });
}
/**
 * Create the navigation above the survey with section about the polies and also dBusCaps
 * @param {Object} survey
 */


function setupNavigator(survey, surveyTitles, idx) {
  setupNavigationBar(survey, idx);
  createSurveyTitles(surveyTitles, idx);
}

document.querySelector("#checkinForm").addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});
/**
 * Validate the information of the form and takes dynamicall the checkboxed that are selected
 */

function validateForm() {
  return _validateForm.apply(this, arguments);
}

function _validateForm() {
  _validateForm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var form, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            document.querySelector(".spinner-border").classList.remove("d-none");
            form = document.getElementById("checkinForm");

            if (!(form.checkValidity() === false)) {
              _context3.next = 9;
              break;
            }

            event.preventDefault();
            event.stopPropagation();
            form.classList.add("was-validated");
            document.querySelector(".spinner-border").classList.add("d-none");
            _context3.next = 32;
            break;

          case 9:
            $("#checkboxes input").each(function () {
              var checked = $(this).is(":checked");
              var policy = $(this).attr("id").split("-").slice(0, -1).map(function (temp) {
                return capitalize(temp);
              }).join(" ");
              checkboxes = _objectSpread(_objectSpread({}, checkboxes), {}, _defineProperty({}, policy, checked));
            });
            fullName = document.getElementById("validationCustom01").value;
            organisation = document.getElementById("validationCustom03").value;
            email = document.getElementById("validationCustom04").value;
            country = document.getElementById("validationCustom02").value;
            projectID = document.getElementById("validationCustom01").value;
            projectDomain = document.getElementById("validationCustom02").value;
            projectName = document.getElementById("validationCustom03").value;
            projectStrategyFit = document.getElementById("validationCustom04").value;
            projectStatusQuoEfficacy = document.getElementById("validationCustom05").value;
            projectTargetEfficacy = document.getElementById("validationCustom06").value;
            projectExpectedPublicValue = document.getElementById("validationCustom07").value;
            projectEstimatedBudget = document.getElementById("validationCustom08").value;

            if (!Object.values(checkboxes).every(function (v) {
              return v === false;
            })) {
              _context3.next = 28;
              break;
            }

            event.preventDefault();
            event.stopPropagation();
            form.classList.add("was-validated");
            _context3.next = 32;
            break;

          case 28:
            _context3.next = 30;
            return _requestSurvey__WEBPACK_IMPORTED_MODULE_1__.default;

          case 30:
            response = _context3.sent;
            callBackForRequest(response);

          case 32:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _validateForm.apply(this, arguments);
}

function callBackForRequest(response) {
  createSurvey(response);
  $("#initForm").collapse("hide");
  $("#surveyCard").collapse("show");
}
/**
 * Helper Function
 */


function bcFormaterFunc(dbusOfPolicy) {
  return dbusOfPolicy.id + ") <b>" + dbusOfPolicy.name + "</b><br><p style='font-size:13px'><i>" + dbusOfPolicy.description + "</i></p>";
}

var bbLinks = function bbLinks(area) {
  var links = {
    "European Legal Act": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fLegalAct",
    "National Legal Act": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fLegalAct",
    "Legal Agreement": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fLegalInteroperabilityAgreement",
    Provider: "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fPublicServiceProvider",
    Consumer: "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fPublicServiceConsumer",
    "Business Information": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fBusinessInformation",
    "Digital Service Delivery Model": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fServiceDeliveryModel",
    "Organisational Agreement": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fOrganisationalAgreement",
    Representation: "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fRepresentation",
    Ontology: "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fOntology",
    "Data Policy": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDataPolicy",
    "Semantic Agreement": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fSemanticAgreement",
    "Shared Knowledge Base": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fSharedKnowledgeBase",
    Interfaces: "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fMachineToMachineInterface",
    "Technical Agreement": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fTechnicalAgreement",
    "Interoperable European Solution": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fInteroperableEuropeanSolutionService",
    "Digital Service Infrastructure": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDigitalServiceInfrastructure",
    "Hosting and Networking Infrastructure": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDigitalServiceInfrastructure",
    "Shared Platform": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fSharedPlatform",
    "Service Delivery Model": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fServiceDeliveryModel",
    "Data Mapping": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDataMapping",
    "Legal Agreements / International Treaties": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fLegalInteroperabilityAgreement"
  };

  if (area in links) {
    return "<a target=\"_blank\" href=\"".concat(links[area], "\">").concat(area, "</a>");
  }

  return area;
};
/**
 * Helper Function
 */


var bbFormaterFunc = function bbFormaterFunc(bb, dBusCapID) {
  var baSentence;
  var explanatorySentence = "";

  if (dBusCapID === "BABC5") {
    explanatorySentence = bb.artificialIntelligence;
  } else if (dBusCapID === "BABC6") {
    explanatorySentence = bb.digitalCommunication;
  } else if (dBusCapID === "BABC9") {
    explanatorySentence = bb.dataManagement;
  } else if (dBusCapID === "BABC12") {
    explanatorySentence = bb.caseWorkflowManagement;
  } else if (dBusCapID === "BABC1") {
    explanatorySentence = bb.electronicIdentification;
  }

  if (bb.policy === "business agnostic" && explanatorySentence !== "") {
    baSentence = "\n      <br>\n      ".concat(explanatorySentence, "\n      </br>\n    "); // `
    // <br>
    // <u> 
    // <a href="https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDigitalBusinessCapability" target="_blank">
    // digital business capability</a> 
    // because</u> ${explanatorySentence}
    // <br>`;
  } else {
    baSentence = "";
  } // bold the word should or might


  if (baSentence !== "") {
    var baSentenceArr = baSentence.split(' ');
    var baSentenceArr2 = baSentenceArr.map(function (element) {
      if (element === 'might') {
        return "<b>might</b>";
      } else if (element === 'should') {
        return '<b>should</b>';
      }

      return element;
    });
    baSentence = baSentenceArr2.join(' ');
  }

  return "<div id=\"".concat(bb.id, " - ").concat(dBusCapID, "\"><b class=\"req\">").concat(bb.id, "<span style=\"display:none\"> - ").concat(dBusCapID, "</span>)\"*\" requirement <u>&lt&lteira: ").concat(bb.area, "&gt&gt</u></b>\n          ").concat(bb.abb, " <b>").concat(bb.specificQuestion, "</b>\n          <br>\n          ").concat(baSentence, "\n          <br>\n          <p><u><i>To what extent this requirement is met by As-ls digital business capability?</i></u>\n          <br>\n          <u><i>Please, consider 1 as the lowest score and 5 the maximum score.</i></u></p>\n          <br>\n          <br>\n          <p>(*)").concat(bb.description, "</p></div>");
};
/**
 * Preparing the question for the survey
 */


function createSurvey(response) {
  var test = response;
  selectedBC = Object.keys(test).reduce(function (prev, curr) {
    return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, curr, true));
  }, {});
  var dBusCaps = groupBy(Object.values(test), "policy");
  var pagePreperation = {};

  var _loop3 = function _loop3(policy) {
    pagePreperation[policy] = pagePreperation[policy] || {};
    dBusCaps[policy].forEach(function (question) {
      var abbs = groupBy(question.abbs, "view");
      var formattedQuestion = bcFormaterFunc(question);
      pagePreperation[policy][formattedQuestion] = {};

      var _loop4 = function _loop4(view) {
        var abb = abbs[view];
        pagePreperation[policy][formattedQuestion][view] = pagePreperation[policy][formattedQuestion][view] || [];
        abb.forEach(function (abbQuestion) {
          if (abbQuestion.nonApplicable) {
            nonApplicableReqs.push(abbQuestion.id);
          }

          var formattedAbbQuestion = bbFormaterFunc(abbQuestion, question.id);
          pagePreperation[policy][formattedQuestion][view].push(formattedAbbQuestion);
        });
      };

      for (var view in abbs) {
        _loop4(view);
      }
    });
  };

  for (var policy in dBusCaps) {
    _loop3(policy);
  } // Keep unique values


  nonApplicableReqs = _toConsumableArray(new Set(nonApplicableReqs));
  var surveys = [];
  var surveyTitles = [];

  for (var _policy in pagePreperation) {
    if (!checkboxes[_policy]) continue;
    var pages = [];
    surveyTitles.push(capitalize(_policy));
    var firstPage = [];
    var bcTitles = [];

    for (var question in pagePreperation[_policy]) {
      firstPage.push(question);
      var startBTag = question.indexOf("<b>");
      var endBTag = question.indexOf("</b>");
      var q = question.slice(startBTag + 3, endBTag);
      var id = getIDFromGeneratedQuestion(question);
      bcTitles.push({
        id: id,
        title: q,
        active: true
      });
      pages.push(surveyPages("testing page", [question], _objectSpread({
        question: q
      }, pagePreperation[_policy][question])));
    }

    buttonTitles.push(bcTitles);
    pages.unshift(surveyFirstPage("Business Capabilites", firstPage, _policy));
    surveys.push(pages);
  }

  var finalSurveysV2 = [];
  surveyTitles.forEach(function (surveyTitle, idx) {
    var pages = surveys[idx];
    var obj = {
      title: surveyTitle,
      pages: pages
    };
    finalSurveysV2.push(obj);
  });
  surveyRelated(finalSurveysV2);
}

function updateProgressBar() {
  var progressWidthCurrActive = $(".progress-bar-buttons-current-active").map(function (idx, elem) {
    if (idx === 0) return $(elem).outerWidth();
    return $(elem).outerWidth() + 10;
  }).get().reduce(function (width, newWidth) {
    return width += newWidth;
  }, 0);
  var progressWidthActive = $(".progress-bar-buttons-active").map(function (idx, elem) {
    if (idx === 0) return $(elem).outerWidth();
    return $(elem).outerWidth() + 10;
  }).get().reduce(function (width, newWidth) {
    return width += newWidth;
  }, 0);
  var progressWidth = progressWidthActive + progressWidthCurrActive;
  $(".progress-bar").css({
    width: "".concat(progressWidth, "px")
  });
}

function updateNavigation(idx) {
  var options = document.querySelectorAll(".progress-bar-buttons:not(.d-none)");

  for (var i = 0; i < options.length; i++) {
    if (i < idx) {
      options[i].classList.remove("progress-bar-buttons-current-active");
      options[i].classList.add("progress-bar-buttons-active");
      continue;
    } else if (i === idx) {
      // Highlight only the current progress bar button
      options[i].classList.remove("progress-bar-buttons-active");
      options[i].classList.add("progress-bar-buttons-current-active");
      continue;
    } else if (i > idx) {
      options[i].classList.remove("progress-bar-buttons-current-active");
      options[i].classList.add("progress-bar-buttons-active");
    }

    options[i].classList.remove("progress-bar-buttons-active");
  }
}

function loadState(survey) {
  var title = survey.title;

  if (currentState[title]) {
    var data = currentState[title].data || {};
    survey.data = data;
    survey.currentPageNo = currentState[title].currentPageNo;

    for (var bc in data) {
      if (bc.indexOf("BC") === -1) continue;
      var questions = data[bc];

      for (var question in questions) {
        var id = getIDFromGeneratedQuestion(question);
        selectedBC[id] = questions[question].selectedBC;
        changeActiveStateAtButtonsTitles(id, selectedBC[id]);
      }
    }
  }
}
/**
 * Helper function for saveStateMiddleware function
 */


var saveSelectedQuestions = function saveSelectedQuestions(firstPageBCes, surveyTitle) {
  var _objectSpread5;

  var tempV1 = {};
  firstPageBCes.data.forEach(function (bc) {
    var name = bc.name;
    var id = getIDFromGeneratedQuestion(name);
    tempV1 = _objectSpread(_objectSpread({}, tempV1), {}, _defineProperty({}, name, {
      selectedBC: selectedBC[id] || false
    }));
  });

  var temp = _objectSpread({}, currentState[surveyTitle]);

  delete temp.checkboxes; // delete temp.country;
  // delete temp.email;
  // delete temp.fullName;
  // delete temp.organisation;

  delete temp.projectID;
  delete temp.projectDomain;
  delete temp.projectName;
  delete temp.projectStrategyFit;
  delete temp.projectStatusQuoEfficacy;
  delete temp.projectTargetEfficacy;
  delete temp.projectExpectedPublicValue;
  delete temp.projectEstimatedBudget; //const { checkboxes, country, email, fullName, organisation } = currentState;

  var _currentState = currentState,
      checkboxes = _currentState.checkboxes,
      projectID = _currentState.projectID,
      projectDomain = _currentState.projectDomain,
      projectName = _currentState.projectName,
      projectStrategyFit = _currentState.projectStrategyFit,
      projectStatusQuoEfficacy = _currentState.projectStatusQuoEfficacy,
      projectTargetEfficacy = _currentState.projectTargetEfficacy,
      projectExpectedPublicValue = _currentState.projectExpectedPublicValue,
      projectEstimatedBudget = _currentState.projectEstimatedBudget;
  var data = temp.data;

  for (var key in data) {
    if (key.indexOf("BC") === -1) continue;

    for (var question in tempV1) {
      data[key][question] = _objectSpread(_objectSpread({}, data[key][question]), tempV1[question]);
    }
  }

  currentState = _objectSpread(_objectSpread({}, currentState), {}, (_objectSpread5 = {}, _defineProperty(_objectSpread5, surveyTitle, _objectSpread({}, temp)), _defineProperty(_objectSpread5, "checkboxes", checkboxes), _defineProperty(_objectSpread5, "projectID", projectID), _defineProperty(_objectSpread5, "projectDomain", projectDomain), _defineProperty(_objectSpread5, "projectName", projectName), _defineProperty(_objectSpread5, "projectStrategyFit", projectStrategyFit), _defineProperty(_objectSpread5, "projectStatusQuoEfficacy", projectStatusQuoEfficacy), _defineProperty(_objectSpread5, "projectTargetEfficacy", projectTargetEfficacy), _defineProperty(_objectSpread5, "projectExpectedPublicValue", projectExpectedPublicValue), _defineProperty(_objectSpread5, "projectEstimatedBudget", projectEstimatedBudget), _objectSpread5));
};
/**
 * Helper function for saveState function
 */


function saveStateMiddleware(survey, completed) {
  var _res;

  var completedSurvey = completed || false;
  var title = survey.title;
  var data = survey.data; // Remove the non applicable requirements

  for (var i = 0; i < selectedNonApplicableReqIDs.length; i++) {
    for (var _i5 = 0, _Object$entries4 = Object.entries(data); _i5 < _Object$entries4.length; _i5++) {
      var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i5], 2),
          key = _Object$entries4$_i[0],
          value = _Object$entries4$_i[1];

      for (var _i6 = 0, _Object$entries5 = Object.entries(value); _i6 < _Object$entries5.length; _i6++) {
        var _getIDFromGeneratedQu;

        var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i6], 2),
            key2 = _Object$entries5$_i[0],
            value2 = _Object$entries5$_i[1];

        var keyId = (_getIDFromGeneratedQu = getIDFromGeneratedQuestion(key2).split('>')[2]) === null || _getIDFromGeneratedQu === void 0 ? void 0 : _getIDFromGeneratedQu.replace(" - ", "");

        if (keyId === selectedNonApplicableReqIDs[i]) {
          delete data[key][key2];
        }
      }
    }
  }

  var res = (_res = {}, _defineProperty(_res, title, {
    currentPageNo: survey.currentPageNo,
    data: data,
    completed: completedSurvey
  }), _defineProperty(_res, "projectID", projectID), _defineProperty(_res, "projectDomain", projectDomain), _defineProperty(_res, "projectName", projectName), _defineProperty(_res, "projectStrategyFit", projectStrategyFit), _defineProperty(_res, "projectStatusQuoEfficacy", projectStatusQuoEfficacy), _defineProperty(_res, "projectTargetEfficacy", projectTargetEfficacy), _defineProperty(_res, "projectExpectedPublicValue", projectEstimatedBudget), _defineProperty(_res, "projectEstimatedBudget", projectEstimatedBudget), _defineProperty(_res, "checkboxes", checkboxes), _res);
  Object.assign(currentState, res);
  saveSelectedQuestions(survey.getPlainData()[0], title);
}
/**
 * Functionality to create the file and prompts to the user for saving the save_work file
 * @param {Object} survey
 */


function saveState(survey) {
  saveStateMiddleware(survey);
  var a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(currentState, null, 2)], {
    type: "application/json"
  }));
  a.setAttribute("download", "eGovERA_save_work.json");
  a.click();
}
/**
 *
 * @param {Array} surveys
 * @param {Number} currentSurveyIndex
 */


function createPreviousSurvey(surveys, survey, currentSurveyIndex) {
  if (!currentSurveyIndex) return;
  var $footer = $(".panel-footer");
  var $button = $("<button></button>").attr("id", "previous-survey-button").attr("type", "button").addClass("btn btn-primary").text("Previous Survey");
  $footer.prepend($button);
  $button.on("click", function () {
    saveStateMiddleware(survey);
    surveyRelated(surveys, currentSurveyIndex - 1);
  });
}
/**
 * Create save work button at the footer of the survey
 * @param {Object} survey
 */


function createSaveWorkButton(survey) {
  var footer = document.querySelector(".panel-footer");
  var saveWorkBtn = document.createElement("button");
  var saveLabel = document.createTextNode("Save work");
  saveWorkBtn.appendChild(saveLabel);
  saveWorkBtn.className = "btn btn-primary";
  saveWorkBtn.setAttribute("id", "save-work-btn");
  saveWorkBtn.addEventListener("click", function () {
    saveState(survey);
  });
  var nextBtn = document.querySelector(".panel-footer .sv_next_btn");
  footer.insertBefore(saveWorkBtn, nextBtn);
}
/**
 * Create current working path Label at the top of the survey
 */


function createLabel() {}
/**
 * Add skip value in the save_work file
 */


var saveSelectedBCs = function saveSelectedBCs() {
  for (var policy in resultsToSave) {
    for (var temp in resultsToSave[policy]) {
      if (temp !== "BC") continue;
      var digBusCaps = resultsToSave[policy]["BC"];

      for (var idx = 0; idx < digBusCaps.length; idx++) {
        var a = digBusCaps[idx];
        a.selectedBC = selectedBC[a.id] || false;
      }
    }
  }
};
/**
 * Convert survey results in another format for more loose coopling
 * @param {Object} survey
 */


function convertResults(survey) {
  var results;
  var returnData = {};
  returnData[survey.title] = returnData[survey.title] || {};
  var data = survey.data; // Remove the non applicable requirements

  for (var i = 0; i < selectedNonApplicableReqIDs.length; i++) {
    for (var _i7 = 0, _Object$entries6 = Object.entries(data); _i7 < _Object$entries6.length; _i7++) {
      var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i7], 2),
          key = _Object$entries6$_i[0],
          value = _Object$entries6$_i[1];

      for (var _i8 = 0, _Object$entries7 = Object.entries(value); _i8 < _Object$entries7.length; _i8++) {
        var _getIDFromGeneratedQu2;

        var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i8], 2),
            key2 = _Object$entries7$_i[0],
            value2 = _Object$entries7$_i[1];

        var keyId = (_getIDFromGeneratedQu2 = getIDFromGeneratedQuestion(key2).split('>')[2]) === null || _getIDFromGeneratedQu2 === void 0 ? void 0 : _getIDFromGeneratedQu2.replace(" - ", "");

        if (keyId === selectedNonApplicableReqIDs[i]) {
          delete data[key][key2];
        }
      }
    }
  }

  results = data;
  var BCS = {};
  var BBS = {};

  for (var _key in results) {
    if (_key.includes("BC")) {
      Object.assign(BCS, results[_key]);
    } else if (_key.includes("BB")) {
      Object.assign(BBS, results[_key]);
    }
  }

  var returnBC = [];

  for (var bc in BCS) {
    var id = getIDFromGeneratedQuestion(bc).trim();
    var objToStore = Object.assign({}, BCS[bc]);
    objToStore.budget = Number(objToStore.budget);
    objToStore.id = id;
    returnBC.push(objToStore);
  }

  var returnBB = [];

  for (var bb in BBS) {
    var _id2 = getIDFromGeneratedQuestionForBB(bb).trim().split(">")[2];

    var _objToStore = Object.assign({}, BBS[bb]);

    _objToStore.id = _id2;
    returnBB.push(_objToStore);
  }

  returnData[survey.title].BC = returnBC;
  returnData[survey.title].BB = returnBB; // returnData.fullName = fullName;
  // returnData.organisation = organisation;
  // returnData.email = email;
  // returnData.country = country;

  returnData.projectID = projectID;
  returnData.projectDomain = projectDomain;
  returnData.projectName = projectName;
  returnData.projectStrategyFit = projectStrategyFit;
  returnData.projectStatusQuoEfficacy = projectStatusQuoEfficacy;
  returnData.projectTargetEfficacy = projectTargetEfficacy;
  returnData.projectExpectedPublicValue = projectEstimatedBudget;
  returnData.projectEstimatedBudget = projectEstimatedBudget;
  Object.assign(resultsToSave, returnData);
  saveSelectedBCs();
}

var getIDFromGeneratedQuestionForBB = function getIDFromGeneratedQuestionForBB(bb) {
  //const newBB = bb.replace("<div><b>Requirement</b></div><p>", "");
  return getIDFromGeneratedQuestion(bb);
};

var removeUnSelectedBCes = function removeUnSelectedBCes() {
  var resultsToSaveCopy = _objectSpread({}, resultsToSave); // const country = resultsToSaveCopy.country;
  // const email = resultsToSaveCopy.email;
  // const fullName = resultsToSaveCopy.fullName;
  // const organisation = resultsToSaveCopy.organisation;
  // delete resultsToSaveCopy.country;
  // delete resultsToSaveCopy.email;
  // delete resultsToSaveCopy.fullName;
  // delete resultsToSaveCopy.organisation;


  var projectID = resultsToSaveCopy.projectID;
  var projectDomain = resultsToSaveCopy.projectDomain;
  var projectName = resultsToSaveCopy.projectName;
  var projectStrategyFit = resultsToSaveCopy.projectStrategyFit;
  var projectStatusQuoEfficacy = resultsToSaveCopy.projectStatusQuoEfficacy;
  var projectTargetEfficacy = resultsToSaveCopy.projectTargetEfficacy;
  var projectExpectedPublicValue = resultsToSaveCopy.projectExpectedPublicValue;
  var projectEstimatedBudget = resultsToSaveCopy.projectEstimatedBudget;
  delete resultsToSaveCopy.projectID;
  delete resultsToSaveCopy.projectDomain;
  delete resultsToSaveCopy.projectName;
  delete resultsToSaveCopy.projectStrategyFit;
  delete resultsToSaveCopy.projectStatusQuoEfficacy;
  delete resultsToSaveCopy.projectTargetEfficacy;
  delete resultsToSaveCopy.projectExpectedPublicValue;
  delete resultsToSaveCopy.projectEstimatedBudget;
  var newResults = {};

  for (var policy in resultsToSaveCopy) {
    var categories = resultsToSaveCopy[policy];
    newResults[policy] = newResults[policy] || {};

    for (var category in categories) {
      var array = [];
      if (category !== "BC") array = categories[category];else {
        array = categories[category].filter(function (item) {
          return item.selectedBC;
        });
      }
      newResults[policy][category] = array;
    }
  } // resultsToSave = { ...newResults, country, email, fullName, organisation };


  resultsToSave = _objectSpread(_objectSpread({}, newResults), {}, {
    projectID: projectID,
    projectDomain: projectDomain,
    projectName: projectName,
    projectStrategyFit: projectStrategyFit,
    projectStatusQuoEfficacy: projectStatusQuoEfficacy,
    projectTargetEfficacy: projectTargetEfficacy,
    projectExpectedPublicValue: projectExpectedPublicValue,
    projectEstimatedBudget: projectEstimatedBudget
  });
};
/**
 *
 * Functionality to create the file and prompts to the user for saving the result file
 */


function saveResultToFile(survey) {
  var a = document.createElement("a");
  saveSelectedBCs();
  removeUnSelectedBCes();
  a.href = URL.createObjectURL(new Blob([JSON.stringify(resultsToSave, null, 2)], {
    type: "application/json"
  }));
  a.setAttribute("download", "survey_result.json");
  a.click();
  $("#surveySuccess").modal("show");
}
/**
 * Helper function for surveyPages function
 * @param {String} name
 * @param {Array} bbList
 * @param {String} question
 * @param {String} orientation
 * @returns {Object}
 */


function subSectionOfPage(name, bbList, question, orientation) {
  return {
    type: "matrixdropdown",
    name: orientation + " BB",
    title: "<span>\n    Please, indicate to what extent each of the following <b>".concat(orientation.split("-").join(" "), "</b>  requirements is met by this digital business capability? (1 not at all, 5 full fulfilment)\n      </span>"),
    isRequired: true,
    columnMinWidth: "390px",
    columns: [{
      name: "Ability to support the dBusCap",
      title: "<span style=\"display: none;\">Ability to support the dBusCap </span>",
      cellType: "rating",
      isRequired: true,
      rateValues: range(1, 5)
    }],
    choices: range(1, 5),
    cellType: "rating",
    rows: bbList
  };
}
/**
 * Create all survey pages except the first one with abbs on the top and the last section is the current bc
 */


function surveyPages(name, bcList, bbs) {
  var quetionVar = bbs.question;
  delete bbs.question;
  var template = {
    name: "Business Capabilities BC",
    elements: [],
    title: quetionVar,
    showTitle: false,
    description: ""
  };

  for (var policy in bbs) {
    var temp = subSectionOfPage(name, bbs[policy], quetionVar, capitalize(policy));
    bbs[policy].length > 0 && template.elements.push(temp);
  }

  var bc = {
    type: "matrixdropdown",
    name: "Business Capabilities BC",
    title: "Please, indicate the Expected Public Value and Estimated budget to this digital business capability",
    tooltip: "legend: 1-2. no priority (neither in the future); 3-5. Low priority (long-term); 6-8. Medium priority (mid-term); 9-10. Very high priority (short-term)",
    isRequired: true,
    columnMinWidth: "260px",
    columns: [{
      name: "Expected Public Value",
      title: "<span>Expected Public Value </span><span data-toggle=\"tooltip\" data-html=\"true\" title=\"".concat(pubValueTooltip, "\">  <i class=\"fa fa-question-circle text-primary\"></i></span>"),
      cellType: "rating",
      isRequired: true,
      rateValues: range(1, 5)
    }, {
      name: "budget",
      title: "<span>Estimated budget (in millions EUR)</span><span data-toggle=\"tooltip\" data-html=\"true\" title=\"".concat(budgetTooltip, "\">  <i class=\"fa fa-question-circle text-primary\"></i></span>"),
      cellType: "number",
      isRequired: true
    }, {
      name: "Target Prospective Average Ability",
      title: "<span>Target Prospective Average Ability</span><span data-toggle=\"tooltip\" data-html=\"true\" title=\"".concat(perspectiveTool, "\"> <i class=\"fa fa-question-circle text-primary\"></i></span>"),
      cellType: "rating",
      isRequired: true,
      rateValues: range(1, 5)
    }],
    choices: range(1, 5),
    cellType: "rating",
    rows: bcList
  };
  template.elements.push(bc);
  return template;
}

function getStrategicFitTooltip(policy) {
  if (policy === "business-agnostic") return "It reports the strategic priority assigned to the digital business capability by the national digital agenda of the country.";
  return "It reports the strategic priority assigned to the digital business capability by the ".concat(policy, " national digital agenda of the country.");
}
/**
 * Creates the first's page for the survey that will contains all business capablities
 * Name not use because it is hard coded in the object in order to keep the values for the same question
 */


function surveyFirstPage(name, bcList, policy) {
  var title;
  var formattedPolicy = policy.toLowerCase().split(" ").join("-");

  if (formattedPolicy === "business-agnostic") {
    title = "<span>National Digital Strategy Fit</span><span data-toggle=\"tooltip\" data-html=\"true\" title=\"".concat(getStrategicFitTooltip(formattedPolicy), "\">  <i class=\"fa fa-question-circle text-primary\"></i></span>");
  } else {
    title = "<span>".concat(policy, " National Digital Strategy Fit</span><span data-toggle=\"tooltip\" data-html=\"true\" title=\"").concat(getStrategicFitTooltip(formattedPolicy), "\">  <i class=\"fa fa-question-circle text-primary\"></i></span>");
  }

  return {
    name: "Business Capabilities BC",
    elements: [{
      type: "matrixdropdown",
      name: "Business Capabilities BC",
      title: "Please indicate the value for each selected National Digital Strategic Fit for each digital business capability (1 lower,  5 highest)",
      tooltip: "legend: 1-2. no priority (neither in the future); 3-5. Low priority (long-term); 6-8. Medium priority (mid-term); 9-10. Very high priority (short-term)",
      isRequired: true,
      columnMinWidth: "260px",
      columns: [{
        name: "National Digital Strategy Fit",
        title: title,
        cellType: "rating",
        isRequired: true,
        rateValues: range(1, 5)
      }],
      choices: range(1, 5),
      cellType: "rating",
      rows: bcList
    }]
  };
}

document.getElementById("previous-work").addEventListener("change", function () {
  var file = event.target.files[0];

  if (file.type !== "application/json") {
    document.querySelector("#previous-work-error").classList.remove("d-none");
    return;
  }

  var reader = new FileReader();
  reader.addEventListener("load", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(evt) {
      var content, response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              document.querySelector(".spinner-border").classList.remove("d-none");
              content = JSON.parse(evt.target.result);

              if (!( // !content.fullName ||
              // !content.organisation ||
              // !content.email ||
              // !content.country ||
              !content.projectID || !content.projectDomain || !content.projectName || !content.projectStrategyFit || !content.projectStatusQuoEfficacy || !content.projectTargetEfficacy || !content.projectExpectedPublicValue || !content.projectEstimatedBudget || !content.checkboxes)) {
                _context2.next = 6;
                break;
              }

              document.querySelector(".spinner-border").classList.add("d-none");
              document.querySelector("#previous-work-error").classList.remove("d-none");
              return _context2.abrupt("return");

            case 6:
              // fullName = content.fullName;
              // organisation = content.organisation;
              // email = content.email;
              // country = content.country;
              projectID = content.projectID;
              projectDomain = content.projectDomain;
              projectName = content.projectName;
              projectStrategyFit = content.projectStrategyFit;
              projectStatusQuoEfficacy = content.projectStatusQuoEfficacy;
              projectTargetEfficacy = content.projectTargetEfficacy;
              projectExpectedPublicValue = content.projectEstimatedBudget;
              projectEstimatedBudget = content.projectEstimatedBudget;
              checkboxes = content.checkboxes; // delete content.fullName;
              // delete content.organisation;
              // delete content.email;
              // delete content.country;

              delete content.projectID;
              delete content.projectDomain;
              delete content.projectName;
              delete content.projectStrategyFit;
              delete content.projectStatusQuoEfficacy;
              delete content.projectTargetEfficacy;
              delete content.projectEstimatedBudget;
              delete content.projectEstimatedBudget;
              delete content.checkboxes;
              doLoadState = true;
              Object.assign(currentState, content);
              _context2.next = 28;
              return _requestSurvey__WEBPACK_IMPORTED_MODULE_1__.default;

            case 28:
              response = _context2.sent;
              callBackForRequest(response);

            case 30:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }());
  reader.readAsText(file);
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var accessControls = $("#access-controls");
  var offset = Math.max(129, scroll);
  accessControls.offset({
    left: 150,
    top: offset
  });

  if (scroll > 100) {
    if (!accessControls.hasClass("access-controls")) {
      accessControls.addClass("access-controls");
    }
  } else {
    accessControls.removeClass("access-controls");
  }
});
$(window).on("resize", updateProgressBar);

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
/******/ 	__webpack_require__("./jsFE/survey.js");
/******/ })()
;
//# sourceMappingURL=survey.js.map