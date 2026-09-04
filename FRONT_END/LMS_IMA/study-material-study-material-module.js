(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["study-material-study-material-module"],{

/***/ "Yd25":
/*!************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/study-material/study-material.module.ts ***!
  \************************************************************************************/
/*! exports provided: StudyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyModule", function() { return StudyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _study_material_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./study-material.routing */ "hzRu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StudyModule = /** @class */ (function () {
    function StudyModule() {
    }
    StudyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_study_material_routing__WEBPACK_IMPORTED_MODULE_4__["STUDY_ROUTES"]),
            ]
        })
    ], StudyModule);
    return StudyModule;
}());



/***/ }),

/***/ "hzRu":
/*!*************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/study-material/study-material.routing.ts ***!
  \*************************************************************************************/
/*! exports provided: STUDY_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDY_ROUTES", function() { return STUDY_ROUTES; });
var STUDY_ROUTES = [
    // Guard for Modules
    { path: 'BMT-1', loadChildren: function () { return Promise.all(/*! import() | study-bmt1-study-bmt1-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("study-bmt1-study-bmt1-module")]).then(__webpack_require__.bind(null, /*! ./study-bmt1/study-bmt1.module */ "Ny6X")).then(function (m) { return m.StudyBMT1Module; }); } },
    { path: 'BMT-2/:type', loadChildren: function () { return Promise.all(/*! import() | bmt2-Bmt2-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("bmt2-Bmt2-module")]).then(__webpack_require__.bind(null, /*! ./bmt2/Bmt2.module */ "jRKd")).then(function (m) { return m.BMT2Module; }); } },
    { path: 'material/:type', loadChildren: function () { return Promise.all(/*! import() | study-bmt1-study-bmt1-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("study-bmt1-study-bmt1-module")]).then(__webpack_require__.bind(null, /*! ./study-bmt1/study-bmt1.module */ "Ny6X")).then(function (m) { return m.StudyBMT1Module; }); } }
];


/***/ })

}]);