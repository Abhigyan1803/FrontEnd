(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ed-cadetdetails-ed-cadetdetails-module"],{

/***/ "AjgR":
/*!*****************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-cadetdetails/ed-cadetdetails.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: EDCadetdetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDCadetdetailsModule", function() { return EDCadetdetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ed_cadetdetails_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ed-cadetdetails.routes */ "QZd8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EDCadetdetailsModule = /** @class */ (function () {
    function EDCadetdetailsModule() {
    }
    EDCadetdetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_ed_cadetdetails_routes__WEBPACK_IMPORTED_MODULE_4__["EDCADETDETAILS_ROUTES"]),
            ]
        })
    ], EDCadetdetailsModule);
    return EDCadetdetailsModule;
}());



/***/ }),

/***/ "QZd8":
/*!*****************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-cadetdetails/ed-cadetdetails.routes.ts ***!
  \*****************************************************************************************/
/*! exports provided: EDCADETDETAILS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDCADETDETAILS_ROUTES", function() { return EDCADETDETAILS_ROUTES; });
var EDCADETDETAILS_ROUTES = [
    // Guard for Modules
    // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    //  { path: 'campmarks', loadChildren: () => import('./campmarks/campmarks.module').then(m => m.CampmarksModule) },
    //  { path: 'assessment-matrix', loadChildren: () => import('./assessment-matrix/assessment-matrix.module').then(m => m.AssessmentMatrixModule) },
    // // { path: 'counsellors', loadChildren: () => import('./counsellors/counsellors.module').then(m => m.CounsellorsModule) },
    { path: 'autobiography', loadChildren: function () { return Promise.all(/*! import() | autobio-autobio-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("autobio-autobio-module")]).then(__webpack_require__.bind(null, /*! ./autobio/autobio.module */ "WbBb")).then(function (m) { return m.AutobioModule; }); } },
    { path: 'ssbreport', loadChildren: function () { return Promise.all(/*! import() | ssbreport-ssbreport-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("ssbreport-ssbreport-module")]).then(__webpack_require__.bind(null, /*! ./ssbreport/ssbreport.module */ "urxk")).then(function (m) { return m.SsbReportModule; }); } },
    { path: 'persnol', loadChildren: function () { return Promise.all(/*! import() | persnol-persnol-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("persnol-persnol-module")]).then(__webpack_require__.bind(null, /*! ./persnol/persnol.module */ "WfRt")).then(function (m) { return m.PersnolModule; }); } },
];


/***/ })

}]);