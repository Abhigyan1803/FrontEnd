(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-trg-team-trg-team-module"],{

/***/ "LO4K":
/*!***************************************************!*\
  !*** ./src/app/main/trg-team/trg-team.routing.ts ***!
  \***************************************************/
/*! exports provided: TrgRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrgRoutes", function() { return TrgRoutes; });
var TrgRoutes = [
    { path: '', loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("default~dashboard-dashboard-module~trg-team-dashboard-dashboard-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "X9vZ")).then(function (m) { return m.DashBoardModule; }); } },
    { path: 'dashboard', loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("default~dashboard-dashboard-module~trg-team-dashboard-dashboard-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "X9vZ")).then(function (m) { return m.DashBoardModule; }); } },
    { path: 'gso-1-training', loadChildren: function () { return Promise.all(/*! import() | gso-one-training-gso-one-trg-module */[__webpack_require__.e("default~gso-one-training-gso-one-trg-module~gso-two-assessment-gso-two-assessment-module~gso-two-pgm~befb03dd"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./gso-one-training/gso-one-trg.module */ "WcIg")).then(function (m) { return m.GSOOneModule; }); } },
    { path: 'gso-2-training', loadChildren: function () { return __webpack_require__.e(/*! import() | gso-two-training-gso-two-training-module */ "gso-two-training-gso-two-training-module").then(__webpack_require__.bind(null, /*! ./gso-two-training/gso-two-training.module */ "Xzds")).then(function (m) { return m.GsoTwoTrainingModule; }); } },
    { path: 'adventure-cell', loadChildren: function () { return __webpack_require__.e(/*! import() | adventure-cell-adventure-cell-module */ "adventure-cell-adventure-cell-module").then(__webpack_require__.bind(null, /*! ./adventure-cell/adventure-cell.module */ "rv8t")).then(function (m) { return m.AdventureCellModule; }); } },
    { path: 'pt/:term', loadChildren: function () { return __webpack_require__.e(/*! import() | pt-pt-module */ "pt-pt-module").then(__webpack_require__.bind(null, /*! ./pt/pt.module */ "aDN3")).then(function (m) { return m.PtModule; }); } },
    { path: 'eqtn', loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("default~dashboard-dashboard-module~trg-team-dashboard-dashboard-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "X9vZ")).then(function (m) { return m.DashBoardModule; }); } },
    { path: 'gso-2-pgme', loadChildren: function () { return Promise.all(/*! import() | gso-two-pgme-gso2pgme-module */[__webpack_require__.e("default~gso-one-training-gso-one-trg-module~gso-two-assessment-gso-two-assessment-module~gso-two-pgm~befb03dd"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./gso-two-pgme/gso2pgme.module */ "AYqk")).then(function (m) { return m.GSOTwoPGMEModule; }); } },
    { path: 'gso-2-assessment/:term', loadChildren: function () { return Promise.all(/*! import() | gso-two-assessment-gso-two-assessment-module */[__webpack_require__.e("default~gso-one-training-gso-one-trg-module~gso-two-assessment-gso-two-assessment-module~gso-two-pgm~befb03dd"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./gso-two-assessment/gso-two-assessment.module */ "52rl")).then(function (m) { return m.GSOTwoAssessmentModule; }); } },
    { path: 'complaint', loadChildren: function () { return __webpack_require__.e(/*! import() | complaint-requirement-complaint-requirement-module */ "complaint-requirement-complaint-requirement-module").then(__webpack_require__.bind(null, /*! ./complaint-requirement/complaint-requirement.module */ "HER6")).then(function (m) { return m.ComplaintRequirementModule; }); } },
    { path: 'add-exam-param', loadChildren: function () { return Promise.all(/*! import() | add-exam-param-add-exam-param-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("add-exam-param-add-exam-param-module")]).then(__webpack_require__.bind(null, /*! ./add-exam-param/add-exam-param.module */ "JI10")).then(function (m) { return m.AddExamParamModule; }); } },
    { path: 'runback/:type', loadChildren: function () { return Promise.all(/*! import() | runback-runback-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("runback-runback-module")]).then(__webpack_require__.bind(null, /*! ./runback/runback.module */ "a1sb")).then(function (m) { return m.RunbackModule; }); } },
    { path: 'route-march/:type', loadChildren: function () { return Promise.all(/*! import() | route-march-route-march-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("route-march-route-march-module")]).then(__webpack_require__.bind(null, /*! ./route-march/route-march.module */ "9Ynq")).then(function (m) { return m.RouteMarchModule; }); } },
    { path: 'mr-prac/:type', loadChildren: function () { return Promise.all(/*! import() | mr-prac-mr-prac-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("mr-prac-mr-prac-module")]).then(__webpack_require__.bind(null, /*! ./mr-prac/mr-prac.module */ "vAcn")).then(function (m) { return m.MrpracModule; }); } },
    { path: 'i-card', loadChildren: function () { return __webpack_require__.e(/*! import() | i-card-i-card-module */ "i-card-i-card-module").then(__webpack_require__.bind(null, /*! ./i-card/i-card.module */ "Upsg")).then(function (m) { return m.IcardModule; }); } },
    { path: 'eqtnnew/:term', loadChildren: function () { return Promise.all(/*! import() | eqtn-eqtn-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("eqtn-eqtn-module")]).then(__webpack_require__.bind(null, /*! ./eqtn/eqtn.module */ "zDeY")).then(function (m) { return m.EqtnModule; }); } },
    { path: 'oqeqtnnew/:term/:type', loadChildren: function () { return Promise.all(/*! import() | oqeqtn-oqeqtn-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("oqeqtn-oqeqtn-module")]).then(__webpack_require__.bind(null, /*! ./oqeqtn/oqeqtn.module */ "kcls")).then(function (m) { return m.OqeqtnModule; }); } },
    { path: 'sports/:term/:type', loadChildren: function () { return Promise.all(/*! import() | academic-depart-sports-sports-module */[__webpack_require__.e("common"), __webpack_require__.e("academic-depart-sports-sports-module")]).then(__webpack_require__.bind(null, /*! ../academic-depart/sports/sports.module */ "Sp85")).then(function (m) { return m.SportsModule; }); } },
    { path: 'weapon', loadChildren: function () { return __webpack_require__.e(/*! import() | weapons-training-weapon-training-module */ "weapons-training-weapon-training-module").then(__webpack_require__.bind(null, /*! ./weapons-training/weapon-training.module */ "IcJw")).then(function (m) { return m.WtModule; }); } },
    { path: 'ima-blog', loadChildren: function () { return __webpack_require__.e(/*! import() | admin-home-ima-blogs-ima-blogs-module */ "ima-blogs-ima-blogs-module").then(__webpack_require__.bind(null, /*! ../admin/home/ima-blogs/ima-blogs.module */ "1ZzC")).then(function (m) { return m.IMABlogsModule; }); } },
    { path: 'reports/:term', loadChildren: function () { return Promise.all(/*! import() | trg-team-reports-reports-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("default~admin-home-special-occasions-special-occasions-module~trg-team-reports-reports-module"), __webpack_require__.e("trg-team-reports-reports-module")]).then(__webpack_require__.bind(null, /*! ../trg-team/reports/reports.module */ "4o8A")).then(function (m) { return m.ReportsModule; }); } },
    { path: 'home', loadChildren: function () { return __webpack_require__.e(/*! import() | admin-home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../admin/home/home.module */ "UpzC")).then(function (m) { return m.HomeModule; }); } },
    //.. { path: Routings.weaponTrainingPath, loadChildren: () => import('./weapons-training/weapons-training/weapons-training.module').then(m => m.WeaponsTrainingModule) },  
    //.. { path: Routings.trainingResultPath, loadChildren: () => import('./weapons-training/result/result.module').then(m => m.ResultModule) },  
    //.. { path: Routings.finalResultPath, loadChildren: () => import('./weapons-training/final-result/final-result.module').then(m => m.FinalResultModule) },  
    // { path:Routings.weaponsListPath, loadChildren: () => import('app/main/trg-team/weapons/weapons.module').then(m => m.WeaponsModule)  },
    // { path:Routings.addWeaponsPath, loadChildren: () => import('app/main/trg-team/weapons/add-weapons/add-weapons.module').then(m => m.AddWeaponsModule)  },
    // { path:Routings.editWeaponsPath, loadChildren: () => import('app/main/trg-team/weapons/add-weapons/add-weapons.module').then(m => m.AddWeaponsModule)  },  
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];


/***/ }),

/***/ "jGXO":
/*!**************************************************!*\
  !*** ./src/app/main/trg-team/trg-team.module.ts ***!
  \**************************************************/
/*! exports provided: TrgTeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrgTeamModule", function() { return TrgTeamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var ngx_easypiechart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-easypiechart */ "d71t");
/* harmony import */ var _trg_team_routing__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./trg-team.routing */ "LO4K");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var TrgTeamModule = /** @class */ (function () {
    function TrgTeamModule() {
    }
    TrgTeamModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"],
                ngx_easypiechart__WEBPACK_IMPORTED_MODULE_20__["NgxEasypiechartModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forChild(_trg_team_routing__WEBPACK_IMPORTED_MODULE_21__["TrgRoutes"]),
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], TrgTeamModule);
    return TrgTeamModule;
}());



/***/ })

}]);