(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mid-term-mid-term-module"],{

/***/ "1V89":
/*!***************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-marks/oq-drill/mid-term/mid-term.module.ts ***!
  \***************************************************************************************/
/*! exports provided: MidModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MidModule", function() { return MidModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _mid_term_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mid-term.component */ "jhhL");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _mid_term_component__WEBPACK_IMPORTED_MODULE_4__["MidTermComponent"]
    },
];
var MidModule = /** @class */ (function () {
    function MidModule() {
    }
    MidModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _mid_term_component__WEBPACK_IMPORTED_MODULE_4__["MidTermComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], MidModule);
    return MidModule;
}());



/***/ }),

/***/ "7umb":
/*!********************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-marks/oq-drill/mid-term/mid-term.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle !important;\n  font-weight: bold !important;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: normal;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.modal-content {\n  max-width: 100% !important;\n}\n\n.open-button {\n  background-color: #555;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 280px;\n}\n\n/* The popup form - hidden by default */\n\n.form-popup {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}\n\n/* Add styles to the form container */\n\n.form-container {\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n}\n\n/* Full-width input fields */\n\n.form-container input[type=text], .form-container input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* When the inputs get focus, do something */\n\n.form-container input[type=text]:focus, .form-container input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for the submit/login button */\n\n.form-container .btn {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom: 10px;\n  opacity: 0.8;\n}\n\n/* Add a red background color to the cancel button */\n\n.form-container .cancel {\n  background-color: red;\n}\n\n/* Add some hover effects to buttons */\n\n.form-container .btn:hover, .open-button:hover {\n  opacity: 1;\n}\n\n.custom-lg {\n  max-width: unset;\n  margin: 0px;\n  border-radius: 1px;\n}\n\n.custom-lg .modal-content {\n  border-radius: 0px;\n}\n\n.oq-matrix-form {\n  overflow-x: scroll;\n}\n\n.modal-dialog-scrollable {\n  max-height: 100%;\n}\n\n.modal-dialog-scrollable .modal-content {\n  max-height: 100%;\n}");

/***/ }),

/***/ "B8gs":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/drill-competition/oq-drill/mid-term/mid-term.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle !important;\n  font-weight: bold !important;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: normal;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.modal-content {\n  max-width: 100% !important;\n}\n\n.open-button {\n  background-color: #555;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 280px;\n}\n\n/* The popup form - hidden by default */\n\n.form-popup {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}\n\n/* Add styles to the form container */\n\n.form-container {\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n}\n\n/* Full-width input fields */\n\n.form-container input[type=text], .form-container input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* When the inputs get focus, do something */\n\n.form-container input[type=text]:focus, .form-container input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for the submit/login button */\n\n.form-container .btn {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom: 10px;\n  opacity: 0.8;\n}\n\n/* Add a red background color to the cancel button */\n\n.form-container .cancel {\n  background-color: red;\n}\n\n/* Add some hover effects to buttons */\n\n.form-container .btn:hover, .open-button:hover {\n  opacity: 1;\n}\n\n.custom-lg {\n  max-width: unset;\n  margin: 0px;\n  border-radius: 1px;\n}\n\n.custom-lg .modal-content {\n  border-radius: 0px;\n}\n\n.oq-matrix-form {\n  overflow-x: scroll;\n}\n\n.modal-dialog-scrollable {\n  max-height: 100%;\n}\n\n.modal-dialog-scrollable .modal-content {\n  max-height: 100%;\n}");

/***/ }),

/***/ "BXCK":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/Assessment/mid-term/mid-term.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: MidTermModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MidTermModule", function() { return MidTermModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _mid_term_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mid-term.component */ "PN/L");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _mid_term_component__WEBPACK_IMPORTED_MODULE_4__["MidTermComponent"]
    },
    {
        path: 'add-mid',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-mid-term-add-mid-term-module */ "add-mid-term-add-mid-term-module").then(__webpack_require__.bind(null, /*! ./add-mid-term/add-mid-term.module */ "uL9A")).then(function (m) { return m.AddMidTermModule; }); }
    },
    {
        path: 'view-mid',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-mid-term-add-mid-term-module */ "add-mid-term-add-mid-term-module").then(__webpack_require__.bind(null, /*! ./add-mid-term/add-mid-term.module */ "uL9A")).then(function (m) { return m.AddMidTermModule; }); }
    }
];
var MidTermModule = /** @class */ (function () {
    function MidTermModule() {
    }
    MidTermModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _mid_term_component__WEBPACK_IMPORTED_MODULE_4__["MidTermComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], MidTermModule);
    return MidTermModule;
}());



/***/ }),

/***/ "LhwE":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/drill-marks/oq-drill/mid-term/mid-term.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"mat-heading\">\r\n        <div id=\"top-bar\" class=\"\">\r\n            <h2>Adjutant-Branch <span class=\"sub-menu1\">\r\n              > {{term}} > OQ Drill > Mid-Term</span></h2>\r\n        </div>\r\n      </div>\r\n        <div class=\"academics\">\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n                <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group col-md-3\">\r\n                      <label for=\"battalion\">Battalion</label>\r\n                      <select id=\"battalion\" name=\"battalion\" (change)=\"battalionSelected($event.target.value)\" class=\"form-control\">\r\n                        <option value=\"0\" selected>Select</option>\r\n                        <option *ngFor=\"let b of battalionList\" [value]=\"b.shortName\"> {{b.shortName}}</option>\r\n                      </select>\r\n                      \r\n                    </div>\r\n                    <div class=\"form-group col-md-3\">\r\n                      <label for=\"company\">Company</label>\r\n                      <select id=\"company\" class=\"form-control\" name=\"company\"  (change)=\"companySelected($event.target.value)\">\r\n                        <option value=\"0\" selected>Select</option>\r\n                        <option *ngFor=\"let c of companyList\" [value]=\"c.name\"> {{c.name}}</option>\r\n                      </select>\r\n                     \r\n                    </div>\r\n        \r\n                    <div class=\"col-md-3\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Search</label>\r\n                        <input placeholder=\"IMA No.\" formcontrolname=\"\" type=\"text\" name=\"serviceid\" [(ngModel)]=\"serviceid\" (keyup)=\"serviceSearch($event.target.value)\"\r\n                          class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                      <label>&nbsp;</label>\r\n                      <button type=\"button\" mat-raised-button (click)=\"edSearch()\">Search</button>\r\n                      <!-- <button mat-raised-button (click)=\"clearSearch()\" >Clear</button> -->\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n                  <form  class=\"oq-matrix-form\">\r\n                    <table class=\"tg\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n                        <th class=\"tg-qnnc\" colspan=\"9\">Oq Drill Mid-Term</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <th class=\"tg-qnnc\">Total Mark <br> (20)</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let leadership of midTermOQCadetList; let leadershipIndex = index\">\r\n                        <td class=\"tg-c3ow\">{{ leadershipIndex + 1}}</td>\r\n                              <td class=\"tg-c3ow\">{{ leadership.serviceId }}</td>\r\n                              <td class=\"tg-0pky\">{{ leadership.course }}</td>\r\n                              <td class=\"tg-c3ow\">{{ leadership.name }}</td>\r\n                              <td class=\"tg-c3ow\">\r\n                                <p  *ngIf=\"leadership.nationality=='India'\">OC</p>\r\n                                <p  *ngIf=\"leadership.nationality !='India'\">FGC</p>\r\n                              </td>\r\n  \r\n                              <td class=\"tg-c3ow\"  >\r\n                                <div class=\"d-flex\">\r\n                                  <ng-container\r\n                                    >\r\n                                    <input type=\"text\" class=\"form-control d-inline\" value=\"{{leadership.oqDrillResult.obtainedMarks}}\"\r\n                                     \r\n                                      min=\"0\" (keypress)=\"keyPress($event)\"\r\n                                      on-focusout=\"onChange($event,$event.target.value, leadershipIndex)\">\r\n                                  </ng-container>\r\n                                </div>\r\n                              </td>\r\n  \r\n                              <!-- <td class=\"tg-0pky\">\r\n                                <div class=\"d-flex\">\r\n                                  <ng-container\r\n                                    >\r\n                                    <input type=\"text\" class=\"form-control d-inline\" value=\"{{leadership.oqDrillResult.remark}}\"\r\n                                    on-focusout=\"onChange1($event.target.value, leadershipIndex)\">\r\n                                  </ng-container>\r\n                                </div>\r\n                              </td> -->\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"mat-cell\" style=\"text-align: center;\" *ngIf=\"! midTermOQCadetList?.length\" colspan=\"14\"><div >No Record Found</div></td>\r\n                     </tr>\r\n                    </tbody>\r\n                </table>\r\n                </form>\r\n                <mat-paginator #myPaginator [length]=\"resultsLength\" [pageIndex]=\"currentPage\" [pageSize]=\"pageSize\"\r\n                      [pageSizeOptions]=\"[50]\" (page)=\"pageChanged($event)\" aria-label=\"Select page\" showFirstLastButtons>\r\n                  </mat-paginator>\r\n                  <div class=\"btn-sec mt-3 text-right mb-3\">\r\n                    <button type=\"button\" disabled mat-raised-button (click)=\"openPopup()\" *ngIf=\"!midTermOQCadetList?.length\">Preview</button>\r\n                    <button type=\"button\" mat-raised-button (click)=\"openPopup()\" *ngIf=\"midTermOQCadetList?.length > 0\">Preview</button>\r\n  \r\n                      <!-- ////dshsj -->\r\n                  </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayStyle}\">\r\n    <div class=\"modal-dialog modal-lg modal-dialog-scrollable custom-lg\" role=\"document\">\r\n      <div class=\"modal-content p-3\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Review</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <table class=\"tg\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n                <th class=\"tg-qnnc\" colspan=\"9\">Oq Drill Mid-Term</th>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"tg-qnnc\">Total Mark <br> (20)</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let leadership of midTermOQCadetList; let leadershipIndex = index\">\r\n                <td class=\"tg-c3ow\">{{ leadershipIndex + 1}}</td>\r\n                      <td class=\"tg-c3ow\">{{ leadership.serviceId }}</td>\r\n                      <td class=\"tg-0pky\">{{ leadership.course }}</td>\r\n                      <td class=\"tg-c3ow\">{{ leadership.name }}</td>\r\n                      <td class=\"tg-c3ow\">\r\n                        <p  *ngIf=\"leadership.nationality=='India'\">OC</p>\r\n                        <p  *ngIf=\"leadership.nationality !='India'\">FGC</p>\r\n                      </td>\r\n  \r\n                      <td class=\"tg-c3ow\"  >\r\n                        <div class=\"d-flex\">\r\n                          <ng-container>\r\n                            <input type=\"text\" disabled class=\"form-control d-inline\" value=\"{{leadership.oqDrillResult.obtainedMarks}}\"\r\n                              min=\"0\" (keypress)=\"keyPress($event)\"\r\n                              on-focusout=\"onChange($event.target.value, leadershipIndex)\">\r\n                          </ng-container>\r\n                        </div>\r\n                      </td>\r\n  \r\n                      <!-- <td class=\"tg-0pky\">\r\n                        <ng-container>\r\n                          <input type=\"text\" disabled class=\"form-control d-inline\" value=\"{{leadership.oqDrillResult.remark}}\"\r\n                            min=\"0\" (keypress)=\"keyPress($event)\"\r\n                            on-focusout=\"onChange($event.target.value, leadershipIndex)\">\r\n                        </ng-container>\r\n                      </td> -->\r\n              </tr>\r\n            \r\n            </tbody>\r\n        </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button mat-raised-button type=\"button\" class=\"btn-dark\" (click)=\"closePopup()\">Back</button>\r\n          <button type=\"button\" mat-raised-button (click)=\"confirm()\">Submit</button>\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "NsLr":
/*!************************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/drill-competition/oq-drill/mid-term/mid-term.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: MidTermComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MidTermComponent", function() { return MidTermComponent; });
/* harmony import */ var _raw_loader_mid_term_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./mid-term.component.html */ "XRW2");
/* harmony import */ var _mid_term_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mid-term.component.scss */ "B8gs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MidTermComponent = /** @class */ (function () {
    function MidTermComponent(dialog, spinner, route, fb, router, adjutantservice, cdref, activeRoute) {
        var _this = this;
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adjutantservice = adjutantservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageSize = 50;
        this.currentPage = 0;
        this.runbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.id = '';
        this.displayStyle = "none";
        this.resultType = 'Runback';
        this.runSubjects = [];
        this.battalionList = [];
        this.companyList = [];
        this.TotalMarks = 20;
        this.obtainedTotalMarks = 0;
        this.battalionName = '0';
        this.status = 1;
        this.route.params.subscribe(function (params) {
            _this.term = params.term;
            if (_this.term == "I Term") {
                _this.termId = 1;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
            }
            else if (_this.term == "II Term") {
                _this.termId = 2;
                _this.battalionId = null;
                _this.companyList = [];
                _this.serviceid = null;
                _this.companyName = null;
            }
            else if (_this.term == "III Term") {
                _this.termId = 3;
                _this.battalionId = null;
                _this.companyList = [];
                _this.serviceid = null;
                _this.companyName = null;
            }
            else if (_this.term == "II Tech") {
                _this.termId = 7;
                _this.battalionId = null;
                _this.companyList = [];
                _this.serviceid = null;
                _this.companyName = null;
            }
            console.log(_this.term, "type route");
            if (_this.companyName == undefined || _this.companyName == null || _this.companyName == '') {
                _this.getRunBackAllCadetlist();
            }
            _this.adjutantservice.getBattalionList().subscribe(function (res) {
                _this.spinner.show();
                if (res.status == 'OK') {
                    _this.battalionList = res.object;
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
            });
        });
        this.runbackForm = this.fb.group({
            serialNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalian: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termSession: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    MidTermComponent.prototype.blockPaste = function (e) {
        e.preventDefault();
    };
    MidTermComponent.prototype.ngOnInit = function () {
    };
    MidTermComponent.prototype.onChangesubmit = function (value) {
        this.value = value;
    };
    MidTermComponent.prototype.pageChanged = function (event) {
        this.pageSize = event.pageSize;
        console.log(this.pageSize, "page size");
        this.currentPage = event.pageIndex;
        console.log(this.currentPage, "currentPage");
        alert('data is lost if you not save');
        this.getRunBackAllCadetlist();
    };
    MidTermComponent.prototype.clearSearch = function () {
        if (this.battalionList.length || this.companyList.length) {
            this.companyList = [];
            this.battalion = '0';
            this.company = '0';
            this.allData();
        }
    };
    MidTermComponent.prototype.allData = function () {
        var _this = this;
        this.adjutantservice.getOQ_DRILL_list(this.termId, this.currentPage, this.pageSize).subscribe(function (res) {
            console.log(res);
            if (res.message == 'Record not found') {
                _this.spinner.hide();
                _this.adjutantservice.openSnackbar(res.message);
            }
            if (res.message == 'OK') {
                _this.midTermOQCadetList = res.object.oqDrillFilterPayload;
                if (res.object.oqDrillFilterPayload.length > 0) {
                    _this.resultsLength = res.object.totalRecords;
                    _this.midTermOQCadetList = res.object.oqDrillFilterPayload;
                }
                else {
                    _this.midTermOQCadetList = [];
                }
                _this.cdref.detectChanges();
            }
            else {
                _this.midTermOQCadetList = [];
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.adjutantservice.openSnackbar("Some Error Occured.");
        });
    };
    MidTermComponent.prototype.getRunBackAllCadetlist = function () {
        var _this = this;
        this.spinner.show();
        if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
            this.adjutantservice.getOQ_All_ListByBCName(this.termId, this.currentPage, this.pageSize, this.battalionName, this.companyName).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this.adjutantservice.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.midTermOQCadetList = res.object.oqDrillFilterPayload;
                    if (res.object.oqDrillFilterPayload.length > 0) {
                        _this.resultsLength = res.object.totalRecords;
                        _this.midTermOQCadetList = res.object.oqDrillFilterPayload;
                    }
                    else {
                        _this.midTermOQCadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.midTermOQCadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.adjutantservice.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.adjutantservice.getOQ_DRILL_list(this.termId, this.currentPage, this.pageSize).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this.adjutantservice.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.midTermOQCadetList = res.object.oqDrillFilterPayload;
                    if (res.object.oqDrillFilterPayload.length > 0) {
                        _this.resultsLength = res.object.totalRecords;
                        _this.midTermOQCadetList = res.object.oqDrillFilterPayload;
                    }
                    else {
                        _this.midTermOQCadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.midTermOQCadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.adjutantservice.openSnackbar("Some Error Occured.");
            });
        }
    };
    MidTermComponent.prototype.onChange = function (e, value, mainIndex) {
        if (value > 20 || value == NaN) {
            this.adjutantservice.openSnackbar("Obtained marks is greater than total marks");
            value = '';
            e.target.value = null;
        }
        this.midTermOQCadetList[mainIndex].oqDrillResult.obtainedMarks = value;
        this.midTermOQCadetList[mainIndex].oqDrillResult.totalMarks = this.TotalMarks;
        console.log('%%%%%%%%%%%%%%%%%%%%%%', this.midTermOQCadetList[mainIndex].oqDrillResult.totalMarks);
        // this.intellectualCadetList
    };
    // onChange1(value, mainIndex,) {
    //   this.midTermOQCadetList[mainIndex].oqDrillResult.remark = value;
    //   console.log('%%%%remark%%%%%%%', this.midTermOQCadetList);
    //   // this.intellectualCadetList
    // }
    MidTermComponent.prototype.confirm = function () {
        var _this = this;
        this.spinner.show();
        var formdata = this.midTermOQCadetList;
        console.log(formdata);
        this.adjutantservice.updateOQDrill(formdata).subscribe(function (res) {
            if (res.message == "Record updated successfully") {
                _this.spinner.hide();
                _this.adjutantservice.openSnackbar("Updated Successfully");
                // window.location.reload();
            }
            else {
                (function (err) {
                    _this.spinner.hide();
                    _this.adjutantservice.openSnackbar("Some Error Occured.");
                });
            }
        });
    };
    MidTermComponent.prototype.openPopup = function () {
        this.displayStyle = "block";
    };
    MidTermComponent.prototype.closePopup = function () {
        this.displayStyle = "none";
    };
    MidTermComponent.prototype.serviceSearch = function (e) {
        this.serviceid = e;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this.getRunBackAllCadetlist();
        }
    };
    MidTermComponent.prototype.edSearch = function (event) {
        var _this = this;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this.adjutantservice.openSnackbar("Search Bar is Empty. Please fill the details");
        }
        else {
            this.adjutantservice.getOQ_DRILL_search(this.termId, this.serviceid, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this.adjutantservice.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.midTermOQCadetList = res.object.oqDrillFilterPayload;
                    _this.cdref.detectChanges();
                }
                else {
                    _this.midTermOQCadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.adjutantservice.openSnackbar("Some Error Occured.");
            });
        }
    };
    MidTermComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        this.battalionName = e;
        this.companyName = null;
        if (this.battalionName == '0') {
            this.battalionId = null;
            this.companyName = null;
        }
        if (this.battalionName == 'CA') {
            this.battalionId = 1;
        }
        else if (this.battalionName == "TH") {
            this.battalionId = 2;
        }
        else if (this.battalionName == "MA") {
            this.battalionId = 3;
        }
        else if (this.battalionName == "BH") {
            this.battalionId = 4;
        }
        this.spinner.show();
        if (this.battalionId != null || this.battalionName != '0') {
            this.adjutantservice.getCompanyList(this.battalionId).subscribe(function (res) {
                _this.spinner.show();
                console.log(res);
                if (res.status == 'OK') {
                    _this.companyList = res.object;
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
            });
        }
        else {
            this.companyList = [];
            this.companyName = null;
        }
        this.companyList = [];
        this.getRunBackAllCadetlist();
    };
    MidTermComponent.prototype.companySelected = function (e) {
        this.companyName = e;
        if (this.companyName == 0) {
            this.getSpecialAllList();
            this.companyName = null;
        }
        else {
            if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
                this.getRunBackAllCadetlist();
            }
        }
        this.getRunBackAllCadetlist();
    };
    MidTermComponent.prototype.getSpecialAllList = function () {
        var _this = this;
        this.adjutantservice.getCamp_All_ListByBCNameComp(this.termId, this.currentPage, this.pageSize, this.battalionName).subscribe(function (res) {
            console.log(res);
            if (res.message == 'OK') {
                _this.resultsLength = res.object.totalRecords;
                _this.midTermOQCadetList = res.object.oqMatrixFilterPayload;
            }
            else {
                _this.midTermOQCadetList = [];
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.adjutantservice.openSnackbar("Some Error Occured.");
        });
    };
    MidTermComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode == 32) {
            event.preventDefault();
        }
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    MidTermComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_7__["AdjutantService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    MidTermComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }],
        blockPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['paste', ['$event'],] }]
    };
    MidTermComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-mid-term',
            template: _raw_loader_mid_term_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_mid_term_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_7__["AdjutantService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], MidTermComponent);
    return MidTermComponent;
}());



/***/ }),

/***/ "PN/L":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/Assessment/mid-term/mid-term.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: MidTermComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MidTermComponent", function() { return MidTermComponent; });
/* harmony import */ var _raw_loader_mid_term_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./mid-term.component.html */ "akSh");
/* harmony import */ var _mid_term_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mid-term.component.scss */ "tQKY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/observable/of */ "G4OQ");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/service/delay-dashboard/delay-dashboard.service */ "GvGC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var MidTermComponent = /** @class */ (function () {
    function MidTermComponent(dialog, spinner, route, fb, router, adminservice, cdref, delayDashboardService, localID, activeRoute, TrgTeamService) {
        var _this = this;
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.delayDashboardService = delayDashboardService;
        this.activeRoute = activeRoute;
        this.TrgTeamService = TrgTeamService;
        this.pageSize = 30;
        this.currentPage = 0;
        this.runbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({});
        this.id = '';
        this.displayStyle = "none";
        this.resultType = 'BMT1';
        this.subjectTYPE = 'Mid-term';
        this.companyList = [];
        this.battalionList = [];
        this.txt_ima = '';
        this.hasAccess = true;
        this.obtainedTotalMarks = 0;
        this.userDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        this.localID = localID;
        this.route.params.subscribe(function (params) {
            _this.type = params.term;
            //  alert(this.type)
            if (_this.type == "I Term") {
                _this.termId = 1;
                _this.battalionId = null;
                _this.companyList = [];
                _this.txt_ima = null;
            }
            else if (_this.type == "II Term") {
                _this.termId = 2;
                _this.battalionId = null;
                _this.companyList = [];
                _this.txt_ima = null;
            }
            else if (_this.type == "II Tech") {
                _this.termId = 7;
                _this.battalionId = null;
                _this.companyList = [];
                _this.txt_ima = null;
            }
            else if (_this.type == "III Term") {
                _this.termId = 3;
                _this.battalionId = null;
                _this.companyList = [];
                _this.txt_ima = null;
            }
            console.log(_this.type, "type route");
            //  this.getbmt1AllCadetlist();
            if (_this.companyName == undefined || _this.companyName == null || _this.companyName == '') {
                _this.getbmt1AllCadetlist();
            }
            _this.adminservice.getBattalionList().subscribe(function (res) {
                _this.spinner.show();
                if (res.status == 'OK') {
                    _this.battalionList = res.object;
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
            });
            // this.getFinalSubmissionDates(this.termId)
        });
        // this.runbackForm = this.fb.group({
        //   serialNo: ['', Validators.required],
        //   battalian: ['', Validators.required],
        //   company: ['', Validators.required],
        //   termSession: ['', Validators.required],
        //   year: ['', Validators.required],
        //   course: ['', Validators.required],
        //   // cadetRank: ['', Validators.required],
        //   username: ['', Validators.required],
        //   term: ['', Validators.required],
        // })
    }
    MidTermComponent.prototype.ngOnInit = function () {
    };
    MidTermComponent.prototype.clearSearch = function (e) {
        var _this = this;
        if (this.battalionId || this.companyName || this.serviceId) {
            this.TrgTeamService.openSnackbar("Data cleared, please wait");
            this.txt_ima = '';
            this.serviceId = '';
            e.preventDefault();
            this.companyList = [];
            this.battalionList = [];
            this.battalionId = '';
            this.companyName = '';
            this.battalionName = '';
            this.getbmt1AllCadetlist();
            this.adminservice.getBattalionList().subscribe(function (res) {
                _this.spinner.show();
                if (res.status == 'OK') {
                    _this.battalionList = res.object;
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
            });
        }
    };
    // clearSearch() {
    //   if (this.battalionList.length || this.companyList.length || this.serviceId) {
    //     this.companyList = [];
    //     this.battalionList = [];
    //     this.battalionId = '';
    //     this.companyName = '';
    //     this.serviceId = '';
    //     this.battalionName = '';
    //     this.getbmt1AllCadetlist();
    //     this.adminservice.getBattalionList().subscribe(
    //       res => {
    //         this.spinner.show();
    //         if (res.status == 'OK') {
    //           this.battalionList = res.object
    //           this.cdref.detectChanges();
    //           this.spinner.hide()
    //         } else {
    //           this.spinner.hide();
    //         }
    //       }, err => {
    //         this.spinner.hide();
    //       }
    //     )
    //   }
    // }
    MidTermComponent.prototype.getFinalSubmissionDates = function (termId) {
        var _this = this;
        this.finalSubmissionDate = '';
        this.delayDashboardService.getStaffList(1, termId).subscribe(function (res) {
            // console.log(res);
            var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(res.object);
            var findOfficer = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["find"])(function (obj) { return obj.loginId === parseInt(_this.userDetails.loginId); }));
            var subscribeOfficerRecord = findOfficer.subscribe(function (val) {
                if (val) {
                    // console.log("USER RESPONSE: ", val);
                    if (val.finalSubmissionDate) {
                        _this.finalSubmissionDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(val.finalSubmissionDate, 'yyyy-MM-dd', _this.localID);
                        var todayDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'yyyy-MM-dd', _this.localID);
                        if (todayDate > _this.finalSubmissionDate) {
                            _this.hasAccess = false;
                        }
                        else {
                            _this.hasAccess = true;
                        }
                        // console.log("Date is setted and Access: ",this.hasAccess);
                    }
                    else {
                        _this.hasAccess = true;
                        // console.log("Date is not set and has Access: ",this.hasAccess);
                    }
                }
            });
        });
    };
    MidTermComponent.prototype.pageChanged = function (event) {
        this.pageSize = event.pageSize;
        console.log(this.pageSize, "page size");
        this.currentPage = event.pageIndex;
        console.log(this.currentPage, "currentPage");
        alert('data is lost if you not save');
        this.getbmt1AllCadetlist();
    };
    MidTermComponent.prototype.keyPress = function (event) {
        var value = event.target.value;
        var pattern = /[0-9\+\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode == 32) {
            event.preventDefault();
        }
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
        if (value > 100 || value == NaN) {
            this.TrgTeamService.openSnackbar("Please Enter Correct Marks, Obtained marks is greater than total marks");
            event.target.value = '';
        }
    };
    MidTermComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        this.battalionName = e;
        if (this.battalionName == '0') {
            this.battalionId = null;
        }
        if (this.battalionName == 'CA') {
            this.battalionId = 1;
        }
        else if (this.battalionName == "TH") {
            this.battalionId = 2;
        }
        else if (this.battalionName == "MA") {
            this.battalionId = 3;
        }
        else if (this.battalionName == "BH") {
            this.battalionId = 4;
        }
        this.spinner.show();
        this.getbmt1AllCadetlist();
        if (this.battalionId != null || this.battalionName != '0') {
            this.adminservice.getCompanyList(this.battalionId).subscribe(function (res) {
                _this.spinner.show();
                console.log(res);
                if (res.status == 'OK') {
                    _this.companyList = res.object;
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
            });
        }
    };
    MidTermComponent.prototype.companySelected = function (e) {
        this.companyName = e;
        if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
            this.getbmt1AllCadetlist();
        }
    };
    MidTermComponent.prototype.onChangesubmit = function (value) {
        this.value = value;
    };
    MidTermComponent.prototype.getbmt1AllCadetlist = function () {
        var _this = this;
        this.spinner.show();
        if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
            this.TrgTeamService.getBmt1MidDetailsByBCName(this.resultType, this.termId, this.currentPage, this.pageSize, this.battalionName, this.companyName).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this.TrgTeamService.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.runBackCadetList = res.object.bmtFilterPayload;
                    if (res.object.bmtFilterPayload.length > 0) {
                        _this.resultsLength = res.object.totalRecords;
                        _this.runBackCadetList = res.object.bmtFilterPayload;
                    }
                    else {
                        _this.runBackCadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.runBackCadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.TrgTeamService.getBmt1MidDetails(this.resultType, this.termId, this.currentPage, this.pageSize).subscribe(function (res) {
                console.log(res);
                _this.resultsLength = res.object.totalRecords;
                if (res.status == 'OK') {
                    _this.runBackCadetList = res.object.bmtFilterPayload;
                    if (res.object.bmtFilterPayload.length > 0) {
                        _this.runBackCadetList = res.object.bmtFilterPayload;
                    }
                    else {
                        _this.runBackCadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.runBackCadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.TrgTeamService.openSnackbar("Some Error Occured.");
            });
        }
    };
    MidTermComponent.prototype.onChange = function (e, value, mainIndex) {
        if (value > 100 || value == NaN) {
            this.adminservice.openSnackbar("Obtained marks is greater than total marks");
            value = '';
            e.target.value = null;
        }
        this.runBackCadetList[mainIndex].gSO2ServiceSubjectBMTResult.obtainedMarks = value;
        if (this.runBackCadetList[mainIndex].gSO2ServiceSubjectBMTResult.obtainedMarks < 40 && this.runBackCadetList[mainIndex].gSO2ServiceSubjectBMTResult.obtainedMarks >= 0) {
            this.runBackCadetList[mainIndex].gSO2ServiceSubjectBMTResult.remarks = "Fail";
            console.log(this.runBackCadetList[mainIndex].gSO2ServiceSubjectBMTResult.remarks, "Fail");
        }
        else {
            this.runBackCadetList[mainIndex].gSO2ServiceSubjectBMTResult.remarks = "Pass";
            console.log(this.runBackCadetList[mainIndex].gSO2ServiceSubjectBMTResult.remarks, "pass");
        }
        // this.intellectualCadetList
    };
    MidTermComponent.prototype.confirm = function () {
        var _this = this;
        this.spinner.show();
        var formdata = this.runBackCadetList;
        console.log(formdata);
        this.TrgTeamService.updateBmt1Details(formdata).subscribe(function (res) {
            if (res.message == "Record updated successfully") {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Updated Successfully");
                window.location.reload();
            }
            else {
                (function (err) {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar("Some Error Occured.");
                });
            }
        });
    };
    MidTermComponent.prototype.openPopup = function () {
        this.displayStyle = "block";
    };
    MidTermComponent.prototype.closePopup = function () {
        this.displayStyle = "none";
    };
    MidTermComponent.prototype.serviceSearch = function () {
        this.serviceId = this.txt_ima;
        if (this.serviceId == null || this.serviceId == undefined || this.serviceId == '') {
            this.getbmt1AllCadetlist();
        }
    };
    MidTermComponent.prototype.edSearch = function (event) {
        var _this = this;
        console.log(this.paginator.pageIndex, "getLeadership_matrix_list paginator");
        console.log(this.paginator.pageSize, "getLeadership_matrix_list paginator1");
        if (this.serviceId == null || this.serviceId == undefined || this.serviceId == '') {
            this.TrgTeamService.openSnackbar("Search Bar is Empty. Please fill the details");
        }
        else {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(/* this.sort.sortChange,  */ this.paginator.page)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
                _this.spinner.show();
                return _this.TrgTeamService.getBmt1search(_this.termId, _this.serviceId, _this.paginator.pageIndex, _this.paginator.pageSize);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
                if (data.message == 'Record not found') {
                    _this.spinner.hide();
                    _this.TrgTeamService.openSnackbar(data.message);
                    // alert(data.message);
                    // this.resultsLength ='';
                    _this.resultsLength = 0;
                    return false;
                }
                //this.resultsLength = data.object;
                _this.resultsLength = data.object.totalRecords;
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
                console.log('Error here');
                _this.spinner.hide();
                return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12__["of"])([]);
                // return null;
            })).subscribe(function (data) {
                if (data.status == 'OK') {
                    _this.runBackCadetList = data.object.bmtFilterPayload;
                    if (data.object.bmtFilterPayload.length > 0) {
                        _this.runBackCadetList = data.object.bmtFilterPayload;
                    }
                    else {
                        _this.runBackCadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.runBackCadetList = [];
                }
                _this.spinner.hide();
                // var scrollElem = document.querySelector('#orders');
                // scrollElem.scrollIntoView();
            });
        }
    };
    MidTermComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_15__["DelayDashboardService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_14__["TrgTeamService"] }
    ]; };
    MidTermComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], { static: true },] }]
    };
    MidTermComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-mid-term',
            template: _raw_loader_mid_term_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_mid_term_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_15__["DelayDashboardService"], String, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_14__["TrgTeamService"]])
    ], MidTermComponent);
    return MidTermComponent;
}());



/***/ }),

/***/ "XRW2":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/adjutant-gi/drill-competition/oq-drill/mid-term/mid-term.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"mat-heading\">\r\n        <div id=\"top-bar\" class=\"\">\r\n            <h2>Adjutant-Branch <span class=\"sub-menu1\">\r\n              > {{term}} > OQ Drill > Mid-Term</span></h2>\r\n        </div>\r\n      </div>\r\n        <div class=\"academics\">\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n                <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group col-md-3\">\r\n                      <label for=\"battalion\">Battalion</label>\r\n                      <select id=\"battalion\" name=\"battalion\" (change)=\"battalionSelected($event.target.value)\" class=\"form-control\">\r\n                        <option value=\"0\" selected>Select</option>\r\n                        <option *ngFor=\"let b of battalionList\" [value]=\"b.shortName\"> {{b.shortName}}</option>\r\n                      </select>\r\n                      \r\n                    </div>\r\n                    <div class=\"form-group col-md-3\">\r\n                      <label for=\"company\">Company</label>\r\n                      <select id=\"company\" class=\"form-control\" name=\"company\"  (change)=\"companySelected($event.target.value)\">\r\n                        <option value=\"0\" selected>Select</option>\r\n                        <option *ngFor=\"let c of companyList\" [value]=\"c.name\"> {{c.name}}</option>\r\n                      </select>\r\n                     \r\n                    </div>\r\n        \r\n                    <div class=\"col-md-3\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Search</label>\r\n                        <input placeholder=\"IMA No.\" formcontrolname=\"\" type=\"text\" name=\"serviceid\" [(ngModel)]=\"serviceid\" (keyup)=\"serviceSearch($event.target.value)\"\r\n                          class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                      <label>&nbsp;</label>\r\n                      <button type=\"button\" mat-raised-button (click)=\"edSearch()\">Search</button>\r\n                      <!-- <button mat-raised-button (click)=\"clearSearch()\" >Clear</button> -->\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n                  <form  class=\"oq-matrix-form\">\r\n                    <table class=\"tg\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n                        <th class=\"tg-qnnc\" colspan=\"9\">Oq Drill Mid-Term</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <th class=\"tg-qnnc\">Total Mark <br> (20)</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let leadership of midTermOQCadetList; let leadershipIndex = index\">\r\n                        <td class=\"tg-c3ow\">{{ leadershipIndex + 1}}</td>\r\n                              <td class=\"tg-c3ow\">{{ leadership.serviceId }}</td>\r\n                              <td class=\"tg-0pky\">{{ leadership.course }}</td>\r\n                              <td class=\"tg-c3ow\">{{ leadership.name }}</td>\r\n                              <td class=\"tg-c3ow\">\r\n                                <p  *ngIf=\"leadership.nationality=='India'\">OC</p>\r\n                                <p  *ngIf=\"leadership.nationality !='India'\">FGC</p>\r\n                              </td>\r\n  \r\n                              <td class=\"tg-c3ow\"  >\r\n                                <div class=\"d-flex\">\r\n                                  <ng-container\r\n                                    >\r\n                                    <input type=\"text\" class=\"form-control d-inline\" value=\"{{leadership.oqDrillResult.obtainedMarks}}\"\r\n                                     \r\n                                      min=\"0\" (keypress)=\"keyPress($event)\"\r\n                                      on-focusout=\"onChange($event,$event.target.value, leadershipIndex)\">\r\n                                  </ng-container>\r\n                                </div>\r\n                              </td>\r\n  \r\n                              <!-- <td class=\"tg-0pky\">\r\n                                <div class=\"d-flex\">\r\n                                  <ng-container\r\n                                    >\r\n                                    <input type=\"text\" class=\"form-control d-inline\" value=\"{{leadership.oqDrillResult.remark}}\"\r\n                                    on-focusout=\"onChange1($event.target.value, leadershipIndex)\">\r\n                                  </ng-container>\r\n                                </div>\r\n                              </td> -->\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"mat-cell\" style=\"text-align: center;\" *ngIf=\"! midTermOQCadetList?.length\" colspan=\"14\"><div >No Record Found</div></td>\r\n                     </tr>\r\n                    </tbody>\r\n                </table>\r\n                </form>\r\n                <mat-paginator #myPaginator [length]=\"resultsLength\" [pageIndex]=\"currentPage\" [pageSize]=\"pageSize\"\r\n                      [pageSizeOptions]=\"[50]\" (page)=\"pageChanged($event)\" aria-label=\"Select page\" showFirstLastButtons>\r\n                  </mat-paginator>\r\n                  <div class=\"btn-sec mt-3 text-right mb-3\">\r\n                    <button type=\"button\" disabled mat-raised-button (click)=\"openPopup()\" *ngIf=\"!midTermOQCadetList?.length\">Preview</button>\r\n                    <button type=\"button\" mat-raised-button (click)=\"openPopup()\" *ngIf=\"midTermOQCadetList?.length > 0\">Preview</button>\r\n  \r\n                      <!-- ////dshsj -->\r\n                  </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayStyle}\">\r\n    <div class=\"modal-dialog modal-lg modal-dialog-scrollable custom-lg\" role=\"document\">\r\n      <div class=\"modal-content p-3\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Review</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <table class=\"tg\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n                <th class=\"tg-qnnc\" colspan=\"9\">Oq Drill Mid-Term</th>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"tg-qnnc\">Total Mark <br> (20)</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let leadership of midTermOQCadetList; let leadershipIndex = index\">\r\n                <td class=\"tg-c3ow\">{{ leadershipIndex + 1}}</td>\r\n                      <td class=\"tg-c3ow\">{{ leadership.serviceId }}</td>\r\n                      <td class=\"tg-0pky\">{{ leadership.course }}</td>\r\n                      <td class=\"tg-c3ow\">{{ leadership.name }}</td>\r\n                      <td class=\"tg-c3ow\">\r\n                        <p  *ngIf=\"leadership.nationality=='India'\">OC</p>\r\n                        <p  *ngIf=\"leadership.nationality !='India'\">FGC</p>\r\n                      </td>\r\n  \r\n                      <td class=\"tg-c3ow\"  >\r\n                        <div class=\"d-flex\">\r\n                          <ng-container>\r\n                            <input type=\"text\" disabled class=\"form-control d-inline\" value=\"{{leadership.oqDrillResult.obtainedMarks}}\"\r\n                              min=\"0\" (keypress)=\"keyPress($event)\"\r\n                              on-focusout=\"onChange($event.target.value, leadershipIndex)\">\r\n                          </ng-container>\r\n                        </div>\r\n                      </td>\r\n  \r\n                      <!-- <td class=\"tg-0pky\">\r\n                        <ng-container>\r\n                          <input type=\"text\" disabled class=\"form-control d-inline\" value=\"{{leadership.oqDrillResult.remark}}\"\r\n                            min=\"0\" (keypress)=\"keyPress($event)\"\r\n                            on-focusout=\"onChange($event.target.value, leadershipIndex)\">\r\n                        </ng-container>\r\n                      </td> -->\r\n              </tr>\r\n            \r\n            </tbody>\r\n        </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button mat-raised-button type=\"button\" class=\"btn-dark\" (click)=\"closePopup()\">Back</button>\r\n          <button type=\"button\" mat-raised-button (click)=\"confirm()\">Submit</button>\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "ZlGw":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/drill-competition/oq-drill/mid-term/mid-term.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: MidModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MidModule", function() { return MidModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _mid_term_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mid-term.component */ "NsLr");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _mid_term_component__WEBPACK_IMPORTED_MODULE_4__["MidTermComponent"]
    },
];
var MidModule = /** @class */ (function () {
    function MidModule() {
    }
    MidModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _mid_term_component__WEBPACK_IMPORTED_MODULE_4__["MidTermComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], MidModule);
    return MidModule;
}());



/***/ }),

/***/ "akSh":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/Assessment/mid-term/mid-term.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"mat-heading\">\r\n        <div id=\"top-bar\" class=\"\">\r\n            <h2>TRG TEAM <span class=\"sub-menu1\">\r\n              > GSO-2 > {{type}} > Service Subjects > BMT1 > Assessment > Mid Term</span>\r\n    <div class=\"pull-right\" *ngIf=\"finalSubmissionDate\"> Last Date for Marks Submission : {{finalSubmissionDate | date:'dd MMM yyyy'}} </div>\r\n            \r\n            </h2>\r\n        </div>\r\n      </div>\r\n        <div class=\"academics\">\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n                <!-- <div class=\"ng-star-inserted\">\r\n                    <div class=\"mat-new mb-4\">\r\n                        <h4 class=\"card-heading\">Service Subjects</h4>\r\n                    </div>\r\n                </div> -->\r\n                <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                    <div class=\"row\"> \r\n                      <div class=\"col-md-3\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"Battalion\">Battalion</label>\r\n                          <select id=\"battalion\" name=\"battalion\" (change)=\"battalionSelected($event.target.value)\"\r\n                          class=\"form-control\">\r\n                          <option value=\"0\" selected>Select</option>\r\n                          <option *ngFor=\"let b of battalionList\" [value]=\"b.shortName\"> {{b.shortName}}</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-3\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"Company\">Company</label>\r\n                          <select class=\"custom-select\" id=\"company\" class=\"form-control\" name=\"company\"  (change)=\"companySelected($event.target.value)\" >\r\n                            <!-- <option selected>Choose...</option> -->\r\n                            <option value=\"0\" selected>Select</option>\r\n                            <option *ngFor=\"let c of companyList\" [value]=\"c.name\"> {{c.name}}</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"rank\">Search</label>\r\n                            <input placeholder=\"Search by IMA No.\" [(ngModel)]=\"txt_ima\" name=\"txt_ima\"\r\n                                (change)=\"serviceSearch()\"\r\n                                class=\"form-control\">\r\n                        </div>\r\n                    </div>\r\n                      <div class=\"col-md-3 \" style=\"margin-top: 29px;\">\r\n                        <button type=\"button\" mat-raised-button (click)=\"edSearch()\">Search</button>\r\n                        <button  mat-raised-button (click)=\"clearSearch($event)\" >Clear</button>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                  <form  class=\"oq-matrix-form\">\r\n                    <table class=\"tg\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">Bn/coy</th>\r\n                        <th class=\"tg-qnnc\">Subject</th>\r\n                        <th class=\"tg-qnnc\" rowspan=\"3\">Remark</th>\r\n\r\n                      </tr>\r\n                      <tr>\r\n                        <th class=\"tg-qnnc\">BMT - I <br> Total Marks <br>(100)</th>                        \r\n                      </tr>\r\n\r\n                      \r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let leadership of runBackCadetList; let leadershipIndex = index\">\r\n                        <td class=\"tg-c3ow\">{{ leadershipIndex + 1}}</td>\r\n                              <td class=\"tg-c3ow\">{{ leadership.serviceId }}</td>\r\n                              <td class=\"tg-0pky\">{{ leadership.course }}</td>\r\n                              <td class=\"tg-c3ow\">{{ leadership.name }}</td>\r\n                              <td class=\"tg-c3ow\">\r\n                                <p  *ngIf=\"leadership.nationality=='India'\">OC</p>\r\n                                <p  *ngIf=\"leadership.nationality !='India'\">FGC</p>\r\n                              </td>\r\n                              <td class=\"tg-c3ow\">{{ leadership.battalian }}/{{ leadership.company }}</td>\r\n                              \r\n                              <td class=\"tg-c3ow\"  >\r\n                                <div class=\"d-flex\">\r\n                                  <ng-container>\r\n                                    <input type=\"text\" class=\"form-control d-inline\" (keyup)=\"keyPress($event)\" value=\"{{leadership.gSO2ServiceSubjectBMTResult.obtainedMarks}}\"\r\n                                    [disabled]=\"!hasAccess\"  min=\"0\" oninput=\"this.value =  !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                      (keyup)=\"onChange($event,$event.target.value, leadershipIndex)\">\r\n                                  </ng-container>\r\n                                </div>\r\n                              </td>\r\n                              <!-- <td class=\"tg-c3ow\">{{remark}}</td> -->\r\n                              <td class=\"tg-c3ow\">\r\n                              <p *ngIf=\"!leadership.gSO2ServiceSubjectBMTResult.obtainedMarks==''\">{{leadership.gSO2ServiceSubjectBMTResult.remarks}}</p>\r\n                              </td>\r\n                              \r\n                            \r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"mat-cell\" style=\"text-align: center;\" *ngIf=\"!runBackCadetList?.length\" colspan=\"14\">\r\n                          <div>No Record Found</div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n                </form>\r\n                <mat-paginator #myPaginator [length]=\"resultsLength\" [pageIndex]=\"currentPage\" [pageSize]=\"pageSize\"\r\n                      [pageSizeOptions]=\"[30]\" (page)=\"pageChanged($event)\" aria-label=\"Select page\" showFirstLastButtons>\r\n                  </mat-paginator>\r\n                  <div class=\"btn-sec mt-3 text-right\">\r\n\r\n                    <button type=\"button\" disabled mat-raised-button (click)=\"openPopup()\" *ngIf=\"!runBackCadetList?.length\">Preview</button>\r\n                    <button type=\"button\" [disabled]=\"!hasAccess\" mat-raised-button (click)=\"openPopup()\" *ngIf=\"this.runBackCadetList?.length > 0\">Preview</button>\r\n                       \r\n                  </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayStyle}\">\r\n    <div class=\"modal-dialog modal-lg modal-dialog-scrollable custom-lg\" role=\"document\">\r\n      <div class=\"modal-content p-3\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Review</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <table class=\"tg\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Bn/coy</th>\r\n                <th class=\"tg-qnnc\">Subject</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Remark</th>\r\n\r\n              </tr>\r\n              <tr>\r\n                <th class=\"tg-qnnc\">BMT - I <br> Total Marks <br>(100)</th>\r\n                <!-- <th class=\"tg-qnnc\">Remarks</th> -->\r\n                \r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let leadership of runBackCadetList; let leadershipIndex = index\">\r\n                <td class=\"tg-c3ow\">{{ leadershipIndex + 1}}</td>\r\n                      <td class=\"tg-c3ow\">{{ leadership.serviceId }}</td>\r\n                      <td class=\"tg-0pky\">{{ leadership.course }}</td>\r\n                      <td class=\"tg-c3ow\">{{ leadership.name }}</td>\r\n                      <td class=\"tg-c3ow\">\r\n                        <p  *ngIf=\"leadership.nationality=='India'\">OC</p>\r\n                        <p  *ngIf=\"leadership.nationality !='India'\">FGC</p>\r\n                      </td>\r\n                      <td class=\"tg-c3ow\">{{ leadership.battalian }}/{{ leadership.company }}</td>\r\n\r\n                      <td class=\"tg-c3ow\"  >\r\n                        <div class=\"d-flex\">\r\n                          <ng-container>  \r\n                            <input type=\"text\" class=\"form-control d-inline\" disabled value=\"{{leadership.gSO2ServiceSubjectBMTResult.obtainedMarks}}\"\r\n                              min=\"0\" oninput=\"this.value =  !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                              on-focusout=\"onChange($event,$event.target.value, leadershipIndex)\">\r\n                          </ng-container>\r\n                        </div>\r\n                      </td>\r\n                      <td class=\"tg-c3ow\">\r\n                        <p *ngIf=\"!leadership.gSO2ServiceSubjectBMTResult.obtainedMarks==''\">{{leadership.gSO2ServiceSubjectBMTResult.remarks}}</p>\r\n                        </td>\r\n                    \r\n              </tr>\r\n            \r\n            </tbody>\r\n        </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button mat-raised-button type=\"button\" class=\"btn-dark\" (click)=\"closePopup()\">Back</button>\r\n          <button type=\"button\" mat-raised-button (click)=\"confirm()\">Submit</button>\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> GSO-2(Assessment) > {{term}} >Service Subject > BMT-1 > Assessment > Mid-Term </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <form [formGroup]=\"drillMarkForm\">\r\n        <div class=\"row ima_clas\">\r\n            <div class=\"form-group col-md-5\">\r\n                <label class=\"form-label\">IMA No. <span class=\"not_cls\">(Please enter IMA number to fetch data)</span>\r\n                </label>\r\n                <div class=\"common_cls\">\r\n                    <input type=\"text\" maxlength=\"100\" (change)=\"onChangesubmit($event.target.value)\" value=\"\" #player\r\n                        class=\"form-control\">\r\n                    <button (click)=\"onSubmit()\" mat-raised-button>Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">Ser.No </label>\r\n                <input type=\"text\" formControlName=\"serialNo\" disabled=\"!player\" maxlength=\"100\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">Batallion </label>\r\n                <input type=\"text\" formControlName=\"battalian\" disabled=\"!player\" maxlength=\"100\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">Name</label>\r\n                <input type=\"text\" formControlName=\"username\" disabled=\"!player\" maxlength=\"100\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">CoY. </label>\r\n                <input type=\"text\" formControlName=\"company\" disabled=\"!player\" maxlength=\"100\" class=\"form-control\">\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">Term Season </label>\r\n                <input type=\"text\" formControlName=\"termSession\" disabled=\"!player\" maxlength=\"100\"\r\n                    class=\"form-control\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">Year </label>\r\n                <input type=\"text\" formControlName=\"year\" disabled=\"!player\" maxlength=\"100\" class=\"form-control\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">Course </label>\r\n                <input type=\"text\" formControlName=\"course\" disabled=\"!player\" maxlength=\"100\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">Term</label>\r\n                <input type=\"text\" formControlName=\"term\" disabled=\"!player\" maxlength=\"100\" class=\"form-control\">\r\n            </div>\r\n\r\n        </div>\r\n      \r\n        <button mat-raised-button (click)=\"next()\" [disabled]=\"drillMarkForm.invalid\" class=\"next-button\">Next</button>\r\n    </form>\r\n</mat-card> -->");

/***/ }),

/***/ "jhhL":
/*!******************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-marks/oq-drill/mid-term/mid-term.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MidTermComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MidTermComponent", function() { return MidTermComponent; });
/* harmony import */ var _raw_loader_mid_term_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./mid-term.component.html */ "LhwE");
/* harmony import */ var _mid_term_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mid-term.component.scss */ "7umb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MidTermComponent = /** @class */ (function () {
    function MidTermComponent(dialog, spinner, route, fb, router, adjutantservice, cdref, activeRoute) {
        var _this = this;
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adjutantservice = adjutantservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageSize = 50;
        this.currentPage = 0;
        this.runbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.id = '';
        this.displayStyle = "none";
        this.resultType = 'Runback';
        this.runSubjects = [];
        this.battalionList = [];
        this.companyList = [];
        this.TotalMarks = 20;
        this.obtainedTotalMarks = 0;
        this.battalionName = '0';
        this.status = 1;
        this.route.params.subscribe(function (params) {
            _this.term = params.term;
            if (_this.term == "I Term") {
                _this.termId = 1;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
            }
            else if (_this.term == "II Term") {
                _this.termId = 2;
                _this.battalionId = null;
                _this.companyList = [];
                _this.serviceid = null;
                _this.companyName = null;
            }
            else if (_this.term == "III Term") {
                _this.termId = 3;
                _this.battalionId = null;
                _this.companyList = [];
                _this.serviceid = null;
                _this.companyName = null;
            }
            else if (_this.term == "II Tech") {
                _this.termId = 7;
                _this.battalionId = null;
                _this.companyList = [];
                _this.serviceid = null;
                _this.companyName = null;
            }
            console.log(_this.term, "type route");
            if (_this.companyName == undefined || _this.companyName == null || _this.companyName == '') {
                _this.getRunBackAllCadetlist();
            }
            _this.adjutantservice.getBattalionList().subscribe(function (res) {
                _this.spinner.show();
                if (res.status == 'OK') {
                    _this.battalionList = res.object;
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
            });
        });
        this.runbackForm = this.fb.group({
            serialNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalian: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termSession: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    MidTermComponent.prototype.blockPaste = function (e) {
        e.preventDefault();
    };
    MidTermComponent.prototype.ngOnInit = function () {
    };
    MidTermComponent.prototype.onChangesubmit = function (value) {
        this.value = value;
    };
    MidTermComponent.prototype.pageChanged = function (event) {
        this.pageSize = event.pageSize;
        console.log(this.pageSize, "page size");
        this.currentPage = event.pageIndex;
        console.log(this.currentPage, "currentPage");
        alert('data is lost if you not save');
        this.getRunBackAllCadetlist();
    };
    MidTermComponent.prototype.clearSearch = function () {
        if (this.battalionList.length || this.companyList.length) {
            this.companyList = [];
            this.battalion = '0';
            this.company = '0';
            this.allData();
        }
    };
    MidTermComponent.prototype.allData = function () {
        var _this = this;
        this.adjutantservice.getOQ_DRILL_list(this.termId, this.currentPage, this.pageSize).subscribe(function (res) {
            console.log(res);
            if (res.message == 'Record not found') {
                _this.spinner.hide();
                _this.adjutantservice.openSnackbar(res.message);
            }
            if (res.message == 'OK') {
                _this.midTermOQCadetList = res.object.oqDrillFilterPayload;
                if (res.object.oqDrillFilterPayload.length > 0) {
                    _this.resultsLength = res.object.totalRecords;
                    _this.midTermOQCadetList = res.object.oqDrillFilterPayload;
                }
                else {
                    _this.midTermOQCadetList = [];
                }
                _this.cdref.detectChanges();
            }
            else {
                _this.midTermOQCadetList = [];
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.adjutantservice.openSnackbar("Some Error Occured.");
        });
    };
    MidTermComponent.prototype.getRunBackAllCadetlist = function () {
        var _this = this;
        this.spinner.show();
        if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
            this.adjutantservice.getOQ_All_ListByBCName(this.termId, this.currentPage, this.pageSize, this.battalionName, this.companyName).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this.adjutantservice.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.midTermOQCadetList = res.object.oqDrillFilterPayload;
                    if (res.object.oqDrillFilterPayload.length > 0) {
                        _this.resultsLength = res.object.totalRecords;
                        _this.midTermOQCadetList = res.object.oqDrillFilterPayload;
                    }
                    else {
                        _this.midTermOQCadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.midTermOQCadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.adjutantservice.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.adjutantservice.getOQ_DRILL_list(this.termId, this.currentPage, this.pageSize).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this.adjutantservice.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.midTermOQCadetList = res.object.oqDrillFilterPayload;
                    if (res.object.oqDrillFilterPayload.length > 0) {
                        _this.resultsLength = res.object.totalRecords;
                        _this.midTermOQCadetList = res.object.oqDrillFilterPayload;
                    }
                    else {
                        _this.midTermOQCadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.midTermOQCadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.adjutantservice.openSnackbar("Some Error Occured.");
            });
        }
    };
    MidTermComponent.prototype.onChange = function (e, value, mainIndex) {
        if (value > 20 || value == NaN) {
            this.adjutantservice.openSnackbar("Obtained marks is greater than total marks");
            value = '';
            e.target.value = null;
        }
        this.midTermOQCadetList[mainIndex].oqDrillResult.obtainedMarks = value;
        this.midTermOQCadetList[mainIndex].oqDrillResult.totalMarks = this.TotalMarks;
        console.log('%%%%%%%%%%%%%%%%%%%%%%', this.midTermOQCadetList[mainIndex].oqDrillResult.totalMarks);
        // this.intellectualCadetList
    };
    // onChange1(value, mainIndex,) {
    //   this.midTermOQCadetList[mainIndex].oqDrillResult.remark = value;
    //   console.log('%%%%remark%%%%%%%', this.midTermOQCadetList);
    //   // this.intellectualCadetList
    // }
    MidTermComponent.prototype.confirm = function () {
        var _this = this;
        this.spinner.show();
        var formdata = this.midTermOQCadetList;
        console.log(formdata);
        this.adjutantservice.updateOQDrill(formdata).subscribe(function (res) {
            if (res.message == "Record updated successfully") {
                _this.spinner.hide();
                _this.adjutantservice.openSnackbar("Updated Successfully");
                // window.location.reload();
            }
            else {
                (function (err) {
                    _this.spinner.hide();
                    _this.adjutantservice.openSnackbar("Some Error Occured.");
                });
            }
        });
    };
    MidTermComponent.prototype.openPopup = function () {
        this.displayStyle = "block";
    };
    MidTermComponent.prototype.closePopup = function () {
        this.displayStyle = "none";
    };
    MidTermComponent.prototype.serviceSearch = function (e) {
        this.serviceid = e;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this.getRunBackAllCadetlist();
        }
    };
    MidTermComponent.prototype.edSearch = function (event) {
        var _this = this;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this.adjutantservice.openSnackbar("Search Bar is Empty. Please fill the details");
        }
        else {
            this.adjutantservice.getOQ_DRILL_search(this.termId, this.serviceid, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this.adjutantservice.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.midTermOQCadetList = res.object.oqDrillFilterPayload;
                    _this.cdref.detectChanges();
                }
                else {
                    _this.midTermOQCadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.adjutantservice.openSnackbar("Some Error Occured.");
            });
        }
    };
    MidTermComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        this.battalionName = e;
        this.companyName = null;
        if (this.battalionName == '0') {
            this.battalionId = null;
            this.companyName = null;
        }
        if (this.battalionName == 'CA') {
            this.battalionId = 1;
        }
        else if (this.battalionName == "TH") {
            this.battalionId = 2;
        }
        else if (this.battalionName == "MA") {
            this.battalionId = 3;
        }
        else if (this.battalionName == "BH") {
            this.battalionId = 4;
        }
        this.spinner.show();
        if (this.battalionId != null || this.battalionName != '0') {
            this.adjutantservice.getCompanyList(this.battalionId).subscribe(function (res) {
                _this.spinner.show();
                console.log(res);
                if (res.status == 'OK') {
                    _this.companyList = res.object;
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
            });
        }
        else {
            this.companyList = [];
            this.companyName = null;
        }
        this.companyList = [];
        this.getRunBackAllCadetlist();
    };
    MidTermComponent.prototype.companySelected = function (e) {
        this.companyName = e;
        if (this.companyName == 0) {
            this.getSpecialAllList();
            this.companyName = null;
        }
        else {
            if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
                this.getRunBackAllCadetlist();
            }
        }
        this.getRunBackAllCadetlist();
    };
    MidTermComponent.prototype.getSpecialAllList = function () {
        var _this = this;
        this.adjutantservice.getCamp_All_ListByBCNameComp(this.termId, this.currentPage, this.pageSize, this.battalionName).subscribe(function (res) {
            console.log(res);
            if (res.message == 'OK') {
                _this.resultsLength = res.object.totalRecords;
                _this.midTermOQCadetList = res.object.oqMatrixFilterPayload;
            }
            else {
                _this.midTermOQCadetList = [];
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.adjutantservice.openSnackbar("Some Error Occured.");
        });
    };
    MidTermComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode == 32) {
            event.preventDefault();
        }
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    MidTermComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_7__["AdjutantService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    MidTermComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }],
        blockPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['paste', ['$event'],] }]
    };
    MidTermComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-mid-term',
            template: _raw_loader_mid_term_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_mid_term_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_7__["AdjutantService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], MidTermComponent);
    return MidTermComponent;
}());



/***/ }),

/***/ "tQKY":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/Assessment/mid-term/mid-term.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle !important;\n  font-weight: bold !important;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: normal;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.modal-content {\n  max-width: 100% !important;\n}\n\n.open-button {\n  background-color: #555;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 280px;\n}\n\n/* The popup form - hidden by default */\n\n.form-popup {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}\n\n/* Add styles to the form container */\n\n.form-container {\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n}\n\n/* Full-width input fields */\n\n.form-container input[type=text], .form-container input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* When the inputs get focus, do something */\n\n.form-container input[type=text]:focus, .form-container input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for the submit/login button */\n\n.form-container .btn {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom: 10px;\n  opacity: 0.8;\n}\n\n/* Add a red background color to the cancel button */\n\n.form-container .cancel {\n  background-color: red;\n}\n\n/* Add some hover effects to buttons */\n\n.form-container .btn:hover, .open-button:hover {\n  opacity: 1;\n}\n\n.custom-lg {\n  max-width: unset;\n  margin: 0px;\n  border-radius: 1px;\n}\n\n.custom-lg .modal-content {\n  border-radius: 0px;\n}\n\n.oq-matrix-form {\n  overflow-x: scroll;\n}\n\n.modal-dialog-scrollable {\n  max-height: 100%;\n}\n\n.modal-dialog-scrollable .modal-content {\n  max-height: 100%;\n}");

/***/ })

}]);