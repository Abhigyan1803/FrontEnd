(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Overall-Assessment-overall-module"],{

/***/ "DaTJ":
/*!*************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/overall.routing.ts ***!
  \*************************************************************************************/
/*! exports provided: ED_OVERALL_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ED_OVERALL_ROUTES", function() { return ED_OVERALL_ROUTES; });
var ED_OVERALL_ROUTES = [
    // Guard for Modules
    // { path: '', loadChildren: () => import('./admin-dashboard/adminDash.module').then(m => m.adminDashBoardModule) },
    // { path: '',redirectTo:"Ed-dashboard",pathMatch:"full" },
    // { path: 'Ed-dashboard', loadChildren: () => import('./ed-dashboard/ed-dashboard.module').then(m => m.EdDashboardModule) },
    { path: 'LeadershipMatrix', loadChildren: function () { return Promise.all(/*! import() | ed-leadership-ed-leadership-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("ed-leadership-ed-leadership-module")]).then(__webpack_require__.bind(null, /*! ./ed-leadership/ed-leadership.module */ "Vq/m")).then(function (m) { return m.EdLeadershipModule; }); } },
    { path: 'PT', loadChildren: function () { return Promise.all(/*! import() | pt-ed-pt-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("pt-ed-pt-module")]).then(__webpack_require__.bind(null, /*! ./pt/ed-pt.module */ "6z9s")).then(function (m) { return m.EdPtModule; }); } },
    { path: 'drill', loadChildren: function () { return Promise.all(/*! import() | drill-drill-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("drill-drill-module")]).then(__webpack_require__.bind(null, /*! ./drill/drill.module */ "j9xO")).then(function (m) { return m.DrillModule; }); } },
    { path: 'WT', loadChildren: function () { return Promise.all(/*! import() | wt-wt-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("wt-wt-module")]).then(__webpack_require__.bind(null, /*! ./wt/wt.module */ "MgVY")).then(function (m) { return m.WtModule; }); } },
    { path: 'eqtn', loadChildren: function () { return Promise.all(/*! import() | eqnt-eqnt-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("eqnt-eqnt-module")]).then(__webpack_require__.bind(null, /*! ./eqnt/eqnt.module */ "B9n3")).then(function (m) { return m.EqntModule; }); } },
    { path: 'service-subjects', loadChildren: function () { return Promise.all(/*! import() | service-subject-service-subject-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("service-subject-service-subject-module")]).then(__webpack_require__.bind(null, /*! ./service-subject/service-subject.module */ "r3as")).then(function (m) { return m.ServiceSubjectModule; }); } },
    { path: 'intellectual', loadChildren: function () { return Promise.all(/*! import() | Interactual-Interactual-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("Interactual-Interactual-module")]).then(__webpack_require__.bind(null, /*! ./Interactual/Interactual.module */ "fSd1")).then(function (m) { return m.InteractualModule; }); } },
    { path: 'sports', loadChildren: function () { return Promise.all(/*! import() | Sportgame-Sportgame-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("Sportgame-Sportgame-module")]).then(__webpack_require__.bind(null, /*! ./Sportgame/Sportgame.module */ "jIur")).then(function (m) { return m.SportgameModule; }); } },
    { path: 'assessment-oq', loadChildren: function () { return Promise.all(/*! import() | assessment-oq-assessment-oq-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("assessment-oq-assessment-oq-module")]).then(__webpack_require__.bind(null, /*! ./assessment-oq/assessment-oq.module */ "iVPd")).then(function (m) { return m.AssessmentOQModule; }); } },
    { path: 'assessment-gc', loadChildren: function () { return Promise.all(/*! import() | gc-assessment-gc-assessment-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("gc-assessment-gc-assessment-module")]).then(__webpack_require__.bind(null, /*! ./gc-assessment/gc-assessment.module */ "WM2Z")).then(function (m) { return m.GcAssessmentModule; }); } },
];


/***/ }),

/***/ "vWyp":
/*!************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/overall.module.ts ***!
  \************************************************************************************/
/*! exports provided: OVERALLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERALLModule", function() { return OVERALLModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _overall_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overall.routing */ "DaTJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OVERALLModule = /** @class */ (function () {
    function OVERALLModule() {
    }
    OVERALLModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
            // InteractualComponent, DrillComponent
            //AssessmentOqComponent
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_overall_routing__WEBPACK_IMPORTED_MODULE_4__["ED_OVERALL_ROUTES"]),
            ]
        })
    ], OVERALLModule);
    return OVERALLModule;
}());



/***/ })

}]);