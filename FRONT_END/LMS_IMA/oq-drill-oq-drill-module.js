(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oq-drill-oq-drill-module"],{

/***/ "10uH":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/drill-competition/oq-drill/oq-drill.routing.ts ***!
  \*************************************************************************************************/
/*! exports provided: OQ_DRILL_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OQ_DRILL_ROUTES", function() { return OQ_DRILL_ROUTES; });
var OQ_DRILL_ROUTES = [
    { path: 'Mid-Term', loadChildren: function () { return Promise.all(/*! import() | mid-term-mid-term-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("mid-term-mid-term-module")]).then(__webpack_require__.bind(null, /*! ./mid-term/mid-term.module */ "ZlGw")).then(function (m) { return m.MidModule; }); } },
    { path: 'Final-Term', loadChildren: function () { return Promise.all(/*! import() | final-term-final-term-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("final-term-final-term-module")]).then(__webpack_require__.bind(null, /*! ./final-term/final-term.module */ "WiWe")).then(function (m) { return m.FinalModule; }); } },
];


/***/ }),

/***/ "Hgw0":
/*!******************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-marks/oq-drill/oq-drill.module.ts ***!
  \******************************************************************************/
/*! exports provided: OqdrillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OqdrillModule", function() { return OqdrillModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _oq_drill_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oq-drill.routing */ "LnaI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { KhalihathComponent } from './khalihath/khalihath.component';
var OqdrillModule = /** @class */ (function () {
    function OqdrillModule() {
    }
    OqdrillModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_oq_drill_routing__WEBPACK_IMPORTED_MODULE_4__["OQ_DRILL_ROUTES"]),
            ]
        })
    ], OqdrillModule);
    return OqdrillModule;
}());



/***/ }),

/***/ "LjTy":
/*!************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/drill-competition/oq-drill/oq-drill.module.ts ***!
  \************************************************************************************************/
/*! exports provided: OqdrillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OqdrillModule", function() { return OqdrillModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _oq_drill_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oq-drill.routing */ "10uH");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { KhalihathComponent } from './khalihath/khalihath.component';
var OqdrillModule = /** @class */ (function () {
    function OqdrillModule() {
    }
    OqdrillModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_oq_drill_routing__WEBPACK_IMPORTED_MODULE_4__["OQ_DRILL_ROUTES"]),
            ]
        })
    ], OqdrillModule);
    return OqdrillModule;
}());



/***/ }),

/***/ "LnaI":
/*!*******************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-marks/oq-drill/oq-drill.routing.ts ***!
  \*******************************************************************************/
/*! exports provided: OQ_DRILL_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OQ_DRILL_ROUTES", function() { return OQ_DRILL_ROUTES; });
var OQ_DRILL_ROUTES = [
    { path: 'Mid-Term', loadChildren: function () { return Promise.all(/*! import() | mid-term-mid-term-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("mid-term-mid-term-module")]).then(__webpack_require__.bind(null, /*! ./mid-term/mid-term.module */ "1V89")).then(function (m) { return m.MidModule; }); } },
    { path: 'Final-Term', loadChildren: function () { return Promise.all(/*! import() | final-term-final-term-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("final-term-final-term-module")]).then(__webpack_require__.bind(null, /*! ./final-term/final-term.module */ "xWE9")).then(function (m) { return m.FinalModule; }); } },
];


/***/ })

}]);