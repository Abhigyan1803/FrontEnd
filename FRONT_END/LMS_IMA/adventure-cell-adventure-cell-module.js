(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adventure-cell-adventure-cell-module"],{

/***/ "KPLM":
/*!************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/adventure-cell.routing.ts ***!
  \************************************************************************/
/*! exports provided: AdventureCellRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureCellRoutes", function() { return AdventureCellRoutes; });
var AdventureCellRoutes = [
    { path: 'general-instruction', loadChildren: function () { return Promise.all(/*! import() | general-instructions-general-instructions-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("general-instructions-general-instructions-module")]).then(__webpack_require__.bind(null, /*! ./general-instructions/general-instructions.module */ "H2Aw")).then(function (m) { return m.GeneralInstructionsModule; }); } },
    { path: 'letters', loadChildren: function () { return Promise.all(/*! import() | letters-letters-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("letters-letters-module")]).then(__webpack_require__.bind(null, /*! ./letters/letters.module */ "A8P+")).then(function (m) { return m.LettersModule; }); } },
    { path: 'sops', loadChildren: function () { return Promise.all(/*! import() | sops-sops-sops-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("sops-sops-sops-module")]).then(__webpack_require__.bind(null, /*! ./sops/sops/sops.module */ "RuX6")).then(function (m) { return m.SopsModule; }); } },
    { path: 'add/sops', loadChildren: function () { return Promise.all(/*! import() | sops-add-sops-add-sops-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("sops-add-sops-add-sops-module")]).then(__webpack_require__.bind(null, /*! ./sops/add-sops/add-sops.module */ "pTHH")).then(function (m) { return m.AddSopsModule; }); } },
    { path: 'view/sops/:id', loadChildren: function () { return Promise.all(/*! import() | sops-add-sops-add-sops-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("sops-add-sops-add-sops-module")]).then(__webpack_require__.bind(null, /*! ./sops/add-sops/add-sops.module */ "pTHH")).then(function (m) { return m.AddSopsModule; }); } },
    { path: 'transport', loadChildren: function () { return Promise.all(/*! import() | transport-transport-transport-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("transport-transport-transport-module")]).then(__webpack_require__.bind(null, /*! ./transport/transport/transport.module */ "sl7o")).then(function (m) { return m.TransportModule; }); } },
    { path: 'add/transport', loadChildren: function () { return Promise.all(/*! import() | transport-add-transport-add-transport-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("transport-add-transport-add-transport-module")]).then(__webpack_require__.bind(null, /*! ./transport/add-transport/add-transport.module */ "7zTO")).then(function (m) { return m.AddTransportModule; }); } },
    { path: 'view/transport/:id', loadChildren: function () { return Promise.all(/*! import() | transport-add-transport-add-transport-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("transport-add-transport-add-transport-module")]).then(__webpack_require__.bind(null, /*! ./transport/add-transport/add-transport.module */ "7zTO")).then(function (m) { return m.AddTransportModule; }); } },
    { path: 'nominal', loadChildren: function () { return Promise.all(/*! import() | nominal-nominal-nominal-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("nominal-nominal-nominal-module")]).then(__webpack_require__.bind(null, /*! ./nominal/nominal/nominal.module */ "l99e")).then(function (m) { return m.NominalModule; }); } },
    { path: 'add/nominal', loadChildren: function () { return Promise.all(/*! import() | nominal-add-nominal-add-nominal-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("nominal-add-nominal-add-nominal-module")]).then(__webpack_require__.bind(null, /*! ./nominal/add-nominal/add-nominal.module */ "4gPQ")).then(function (m) { return m.AddNominalModule; }); } },
    { path: 'view/nominal/:id', loadChildren: function () { return Promise.all(/*! import() | nominal-add-nominal-add-nominal-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("nominal-add-nominal-add-nominal-module")]).then(__webpack_require__.bind(null, /*! ./nominal/add-nominal/add-nominal.module */ "4gPQ")).then(function (m) { return m.AddNominalModule; }); } },
    { path: 'chart', loadChildren: function () { return Promise.all(/*! import() | chart-chart-chart-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("chart-chart-chart-module")]).then(__webpack_require__.bind(null, /*! ./chart/chart/chart.module */ "HEgu")).then(function (m) { return m.ChartModule; }); } },
    { path: 'add/chart', loadChildren: function () { return Promise.all(/*! import() | chart-add-chart-add-chart-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("chart-add-chart-add-chart-module")]).then(__webpack_require__.bind(null, /*! ./chart/add-chart/add-chart.module */ "9350")).then(function (m) { return m.AddChartModule; }); } },
    { path: 'view/chart/:id', loadChildren: function () { return Promise.all(/*! import() | chart-add-chart-add-chart-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("chart-add-chart-add-chart-module")]).then(__webpack_require__.bind(null, /*! ./chart/add-chart/add-chart.module */ "9350")).then(function (m) { return m.AddChartModule; }); } },
    { path: 'report', loadChildren: function () { return Promise.all(/*! import() | report-report-report-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("report-report-report-module")]).then(__webpack_require__.bind(null, /*! ./report/report/report.module */ "jSld")).then(function (m) { return m.ReportModule; }); } },
    { path: 'add/report', loadChildren: function () { return Promise.all(/*! import() | report-add-report-add-report-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("report-add-report-add-report-module")]).then(__webpack_require__.bind(null, /*! ./report/add-report/add-report.module */ "/pJX")).then(function (m) { return m.AddReportModule; }); } },
    { path: 'view/report/:id', loadChildren: function () { return Promise.all(/*! import() | report-add-report-add-report-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("report-add-report-add-report-module")]).then(__webpack_require__.bind(null, /*! ./report/add-report/add-report.module */ "/pJX")).then(function (m) { return m.AddReportModule; }); } },
    { path: 'clubs', loadChildren: function () { return __webpack_require__.e(/*! import() | academic-depart-clubs-clubs-module */ "clubs-clubs-module").then(__webpack_require__.bind(null, /*! ../../academic-depart/clubs/clubs.module */ "SQLR")).then(function (m) { return m.ClubsModule; }); } },
];


/***/ }),

/***/ "rv8t":
/*!***********************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/adventure-cell.module.ts ***!
  \***********************************************************************/
/*! exports provided: AdventureCellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdventureCellModule", function() { return AdventureCellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adventure_cell_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adventure-cell.routing */ "KPLM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdventureCellModule = /** @class */ (function () {
    function AdventureCellModule() {
    }
    AdventureCellModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_adventure_cell_routing__WEBPACK_IMPORTED_MODULE_6__["AdventureCellRoutes"])
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], AdventureCellModule);
    return AdventureCellModule;
}());



/***/ })

}]);