(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["instructions-interviews-instructions-interviews-module"],{

/***/ "HSkj":
/*!********************************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/interviews/instructions-interviews/instructions-interviews.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: InstructionsInterviewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsInterviewsModule", function() { return InstructionsInterviewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _instructions_interviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./instructions-interviews.component */ "y2lD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _instructions_interviews_component__WEBPACK_IMPORTED_MODULE_8__["InstructionsInterviewsComponent"]
    },
];
var InstructionsInterviewsModule = /** @class */ (function () {
    function InstructionsInterviewsModule() {
    }
    InstructionsInterviewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _instructions_interviews_component__WEBPACK_IMPORTED_MODULE_8__["InstructionsInterviewsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
            ]
        })
    ], InstructionsInterviewsModule);
    return InstructionsInterviewsModule;
}());



/***/ }),

/***/ "MVkO":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/interviews/instructions-interviews/instructions-interviews.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 0 !important;\n  clear: both;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.backbtn button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}");

/***/ }),

/***/ "TLzW":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/interviews/instructions-interviews/instructions-interviews.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n\r\n    <div class=\"container-fluid\">\r\n      <!-- <div id=\"top-bar\" class=\"row\">\r\n        <h2>E-Dossier - INSTRUCTIONS FOR INTERVIEWS AND COUNSELLING</h2>\r\n      </div> -->\r\n      <div class=\"warning-instruction\">\r\n          <div class=\"mat-heading\">\r\n            <div id=\"top-bar\" class=\"\">\r\n              <h2 class=\"backbtn\"><button mat-icon-button (click)=\"goBack()\">\r\n                <mat-icon>chevron_left</mat-icon>\r\n              </button>E-Dossier <span class=\"sub-menu1\">\r\n                > Interviews > INSTRUCTIONS FOR INTERVIEWS AND COUNSELLING</span></h2>\r\n          </div>\r\n          </div>\r\n        <div class=\"mat-card mat-focus-indicator\">\r\n          <div class=\"ng-star-inserted\">\r\n            \r\n          </div>\r\n          <div class=\"interview-counselling-description\">\r\n            <ol>\r\n              <li class=\"mb-2\">Instructions for initial interview are as given below :-\r\n                <ol class=\"mt-2 laparent\" type=\"a\">\r\n                  <li class=\"pr-2\">\r\n                      Interview to be recorded in ink in the Offr’s own hand.\r\n                  </li>\r\n                  <li class=\"pr-2\">\r\n                    Pl Cdr’s initial interview to be conducted within 24hrs of arr of the OC.\r\n                  </li>\r\n                  <li class=\"pr-2\">Pts to be conveyed by Pl Cdr -\r\n                    <ol class=\"mt-2 laparent\" type=\"i\">\r\n                      <li class=\"mb-2 pr-2\">Welcome.</li>\r\n                      <li class=\"mb-2 pr-2\">Brief on gen conduct of trginclspl emphasis.</li>\r\n                      <li class=\"mb-2 pr-2\">Expectations of the environment.</li>\r\n                      <li class=\"mb-2 pr-2\">Adm Brief.</li>\r\n                      <li class=\"mb-2 pr-2\">Ascertain if the OC has any problem.</li>\r\n                    </ol>\r\n                  </li>\r\n                  <li class=\"pr-2\">Instrs for Coy Cdr for initial interview -\r\n                    <ol class=\"mt-2 laparent\" type=\"i\">\r\n                      <li class=\"mb-2 pr-2\">Interview to be recorded in ink in the Offr’s own hand.</li>\r\n                      <li class=\"mb-2 pr-2\">Coy Cdr’s initial interview to be conducted within 48hrs of arr of the OC.</li>\r\n                      <li class=\"mb-2 pr-2\">Initial interview by Coy Cdr will reaffirm all the obsn of Pl Cdr.</li>\r\n                      <li class=\"mb-2 pr-2\">Check whether the OC has settled down or not.</li>\r\n                      <li class=\"mb-2 pr-2\">Advise him on conduct of trg.</li>\r\n                    </ol>\r\n                  </li>\r\n                </ol>\r\n              </li>\r\n              <li class=\"mb-2 pr-2\"><span class=\"mr-3\"><b>Mid Term Interview.</b></span>Pl Cdr to interview the OC after Mid Term Break and brief him about his performance in various fields and endorse the same. Coy Cdr to guide the OC and enquire about any adm problem being faced. Cases requiring spl attention to be brought to Bn Cdr’s notice.</li>\r\n              <li class=\"mb-2 pr-2\"><span class=\"mr-3\"><b>Beginning of Term Interview.</b></span>Interview to be recorded in ink in the Offr’s own hand. Previous term’s performance to be highlighted and aspects requiring improvement to be brought out.</li>\r\n              <li class=\"mb-2 pr-2\"><span class=\"mr-3\"><b>Special Interview.</b></span>By Coy Cdr/ Bn Cdr for OC who wishes to resign and also for those who merit attention due to various reasons.</li>\r\n              <li class=\"mb-2 pr-2\"><span class=\"mr-3\"><b>Obsn Sheet.</b></span>Any significant obsn which is brought to the notice of the Pl/Coy Cdr to be endorsed in this space. Good obsns should be endorsed in blue ink while adverse obsns to be endorsed in red ink.Actions taken by the Pl/Coy Cdr to be mentioned in the Remarks coln.</li>\r\n              <li class=\"mb-2 pr-2\"><span class=\"mr-3\"><b>Counselling.</b></span>A OC will be counselled by Pl Cdr/ Coy Cdr/ BnCdr on poor performance in various fields and for not adhering to laid down norms.</li>\r\n            </ol>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>  \r\n  </div>\r\n");

/***/ }),

/***/ "y2lD":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/interviews/instructions-interviews/instructions-interviews.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: InstructionsInterviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsInterviewsComponent", function() { return InstructionsInterviewsComponent; });
/* harmony import */ var _raw_loader_instructions_interviews_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./instructions-interviews.component.html */ "TLzW");
/* harmony import */ var _instructions_interviews_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions-interviews.component.scss */ "MVkO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InstructionsInterviewsComponent = /** @class */ (function () {
    function InstructionsInterviewsComponent() {
    }
    InstructionsInterviewsComponent.prototype.ngOnInit = function () {
    };
    InstructionsInterviewsComponent.prototype.goBack = function () {
        window.history.back();
    };
    InstructionsInterviewsComponent.ctorParameters = function () { return []; };
    InstructionsInterviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-instructions-interviews',
            template: _raw_loader_instructions_interviews_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_instructions_interviews_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], InstructionsInterviewsComponent);
    return InstructionsInterviewsComponent;
}());



/***/ })

}]);