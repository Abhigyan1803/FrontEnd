(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Assessment-bmt1-assessment-module"],{

/***/ "Bdt2":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/Assessment/bmt1-assessment.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: BMT1ASSESSMENTModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BMT1ASSESSMENTModule", function() { return BMT1ASSESSMENTModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _bmt1_assessment_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bmt1-assessment.routes */ "Sx4Y");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BMT1ASSESSMENTModule = /** @class */ (function () {
    function BMT1ASSESSMENTModule() {
    }
    BMT1ASSESSMENTModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_bmt1_assessment_routes__WEBPACK_IMPORTED_MODULE_4__["BMT1_ASSESSMENT_ROUTES"]),
            ]
        })
    ], BMT1ASSESSMENTModule);
    return BMT1ASSESSMENTModule;
}());



/***/ }),

/***/ "Sx4Y":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/Assessment/bmt1-assessment.routes.ts ***!
  \**************************************************************************************************************/
/*! exports provided: BMT1_ASSESSMENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BMT1_ASSESSMENT_ROUTES", function() { return BMT1_ASSESSMENT_ROUTES; });
var BMT1_ASSESSMENT_ROUTES = [
    // Guard for Modules
    { path: 'final-term', loadChildren: function () { return Promise.all(/*! import() | final-term-final-term-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("final-term-final-term-module")]).then(__webpack_require__.bind(null, /*! ./final-term/final-term.module */ "go5Z")).then(function (m) { return m.FinalTermModule; }); } },
    { path: 'mid-term', loadChildren: function () { return Promise.all(/*! import() | mid-term-mid-term-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("mid-term-mid-term-module")]).then(__webpack_require__.bind(null, /*! ./mid-term/mid-term.module */ "BXCK")).then(function (m) { return m.MidTermModule; }); } },
];


/***/ })

}]);