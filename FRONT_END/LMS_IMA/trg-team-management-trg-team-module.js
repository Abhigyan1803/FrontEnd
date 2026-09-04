(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trg-team-management-trg-team-module"],{

/***/ "+QMw":
/*!*******************************************************************!*\
  !*** ./src/app/main/admin/trg-team-management/trg-team.routes.ts ***!
  \*******************************************************************/
/*! exports provided: TRG_TEAM_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRG_TEAM_ROUTES", function() { return TRG_TEAM_ROUTES; });
/* harmony import */ var app_Shared_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/Shared/constant */ "rheE");

// import { ActivityComponent } from './activity/activity.component';
// import { AcademyComponent } from './academy/academy.component';
// import { EventsComponent } from './events/events.component';
// import { MessagesComponent } from './messages/messages.component';
// import { ProgramsComponent } from './programs/programs.component';
var TRG_TEAM_ROUTES = [
    // Guard for Modules
    { path: 'members', loadChildren: function () { return __webpack_require__.e(/*! import() | members-members-module */ "members-members-module").then(__webpack_require__.bind(null, /*! ./members/members.module */ "yYdm")).then(function (m) { return m.MembersModule; }); } },
    { path: app_Shared_constant__WEBPACK_IMPORTED_MODULE_0__["Routings"].weaponsListPath, loadChildren: function () { return Promise.all(/*! import() | app-main-trg-team-weapons-weapons-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("app-main-trg-team-weapons-weapons-module")]).then(__webpack_require__.bind(null, /*! app/main/trg-team/weapons/weapons.module */ "Xt+l")).then(function (m) { return m.WeaponsModule; }); } },
    { path: app_Shared_constant__WEBPACK_IMPORTED_MODULE_0__["Routings"].addWeaponsPath, loadChildren: function () { return Promise.all(/*! import() | app-main-trg-team-weapons-add-weapons-add-weapons-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("app-main-trg-team-weapons-add-weapons-add-weapons-module")]).then(__webpack_require__.bind(null, /*! app/main/trg-team/weapons/add-weapons/add-weapons.module */ "it4D")).then(function (m) { return m.AddWeaponsModule; }); } },
    { path: app_Shared_constant__WEBPACK_IMPORTED_MODULE_0__["Routings"].editWeaponsPath, loadChildren: function () { return Promise.all(/*! import() | app-main-trg-team-weapons-add-weapons-add-weapons-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("app-main-trg-team-weapons-add-weapons-add-weapons-module")]).then(__webpack_require__.bind(null, /*! app/main/trg-team/weapons/add-weapons/add-weapons.module */ "it4D")).then(function (m) { return m.AddWeaponsModule; }); } },
    // {  path: 'sop', loadChildren: () => import('../../trg-team/gso-one-training/sop/sop.module').then(m => m.SOPModule) },
    // {  path: 'schedule-of-exercises', loadChildren: () => import('../../trg-team/gso-one-training/schedule-of-exercises/schedule-of-exercises.module').then(m => m.ScheduleOfExercisesModule) },
    { path: 'gso-1-training', loadChildren: function () { return Promise.all(/*! import() | trg-team-gso-one-training-gso-one-trg-module */[__webpack_require__.e("default~gso-one-training-gso-one-trg-module~gso-two-assessment-gso-two-assessment-module~gso-two-pgm~befb03dd"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ../../trg-team/gso-one-training/gso-one-trg.module */ "WcIg")).then(function (m) { return m.GSOOneModule; }); } },
    { path: 'gso-2-training', loadChildren: function () { return __webpack_require__.e(/*! import() | trg-team-gso-two-training-gso-two-training-module */ "gso-two-training-gso-two-training-module").then(__webpack_require__.bind(null, /*! ../../trg-team/gso-two-training/gso-two-training.module */ "Xzds")).then(function (m) { return m.GsoTwoTrainingModule; }); } },
    { path: 'adventure-cell', loadChildren: function () { return __webpack_require__.e(/*! import() | trg-team-adventure-cell-adventure-cell-module */ "adventure-cell-adventure-cell-module").then(__webpack_require__.bind(null, /*! ../../trg-team/adventure-cell/adventure-cell.module */ "rv8t")).then(function (m) { return m.AdventureCellModule; }); } },
    { path: 'pt', loadChildren: function () { return __webpack_require__.e(/*! import() | trg-team-pt-pt-module */ "pt-pt-module").then(__webpack_require__.bind(null, /*! ../../trg-team/pt/pt.module */ "aDN3")).then(function (m) { return m.PtModule; }); } },
    { path: 'eqtn', loadChildren: function () { return Promise.all(/*! import() | trg-team-dashboard-dashboard-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("default~dashboard-dashboard-module~trg-team-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ../../trg-team/dashboard/dashboard.module */ "X9vZ")).then(function (m) { return m.DashBoardModule; }); } },
    { path: 'gso-2-pgme', loadChildren: function () { return Promise.all(/*! import() | trg-team-gso-two-pgme-gso2pgme-module */[__webpack_require__.e("default~gso-one-training-gso-one-trg-module~gso-two-assessment-gso-two-assessment-module~gso-two-pgm~befb03dd"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ../../trg-team/gso-two-pgme/gso2pgme.module */ "AYqk")).then(function (m) { return m.GSOTwoPGMEModule; }); } },
    { path: 'gso-2-assessment', loadChildren: function () { return Promise.all(/*! import() | trg-team-gso-two-assessment-gso-two-assessment-module */[__webpack_require__.e("default~gso-one-training-gso-one-trg-module~gso-two-assessment-gso-two-assessment-module~gso-two-pgm~befb03dd"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ../../trg-team/gso-two-assessment/gso-two-assessment.module */ "52rl")).then(function (m) { return m.GSOTwoAssessmentModule; }); } },
    { path: 'add-exam-param', loadChildren: function () { return Promise.all(/*! import() | trg-team-add-exam-param-add-exam-param-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("add-exam-param-add-exam-param-module")]).then(__webpack_require__.bind(null, /*! ../../trg-team/add-exam-param/add-exam-param.module */ "JI10")).then(function (m) { return m.AddExamParamModule; }); } },
];


/***/ }),

/***/ "7D9q":
/*!*******************************************************************!*\
  !*** ./src/app/main/admin/trg-team-management/trg-team.module.ts ***!
  \*******************************************************************/
/*! exports provided: TrgTeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrgTeamModule", function() { return TrgTeamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _trg_team_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trg-team.routes */ "+QMw");
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
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_trg_team_routes__WEBPACK_IMPORTED_MODULE_4__["TRG_TEAM_ROUTES"]),
            ]
        })
    ], TrgTeamModule);
    return TrgTeamModule;
}());



/***/ })

}]);