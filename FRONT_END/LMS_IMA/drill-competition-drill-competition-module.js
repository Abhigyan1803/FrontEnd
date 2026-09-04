(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drill-competition-drill-competition-module"],{

/***/ "wAfq":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/drill-competition/drill-competition.routing.ts ***!
  \*************************************************************************************************/
/*! exports provided: DRILL_COMPETITION_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRILL_COMPETITION_ROUTES", function() { return DRILL_COMPETITION_ROUTES; });
var DRILL_COMPETITION_ROUTES = [
    { path: 'drill-marks', loadChildren: function () { return Promise.all(/*! import() | drill-marks-drill-marks-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("drill-marks-drill-marks-module")]).then(__webpack_require__.bind(null, /*! ./drill-marks/drill-marks.module */ "syq3")).then(function (m) { return m.DrillMarksModule; }); } },
    { path: 'drill-oq', loadChildren: function () { return __webpack_require__.e(/*! import() | oq-drill-oq-drill-module */ "oq-drill-oq-drill-module").then(__webpack_require__.bind(null, /*! ./oq-drill/oq-drill.module */ "LjTy")).then(function (m) { return m.OqdrillModule; }); } },
];


/***/ }),

/***/ "zDbi":
/*!************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/drill-competition/drill-competition.module.ts ***!
  \************************************************************************************************/
/*! exports provided: DrillCompetitionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrillCompetitionModule", function() { return DrillCompetitionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _drill_competition_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drill-competition.routing */ "wAfq");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { KhalihathComponent } from './khalihath/khalihath.component';
var DrillCompetitionModule = /** @class */ (function () {
    function DrillCompetitionModule() {
    }
    DrillCompetitionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_drill_competition_routing__WEBPACK_IMPORTED_MODULE_4__["DRILL_COMPETITION_ROUTES"]),
            ]
        })
    ], DrillCompetitionModule);
    return DrillCompetitionModule;
}());



/***/ })

}]);