(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-admin-admin-module"],{

/***/ "fMwf":
/*!****************************************************************!*\
  !*** ./src/app/main/admin/admin-dialog/admin-dialog.module.ts ***!
  \****************************************************************/
/*! exports provided: AdminDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDialogModule", function() { return AdminDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-dialog.component */ "KBrC");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-doc-viewer */ "w4ga");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _admin_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AdminDialogComponent"],
    }
];
var AdminDialogModule = /** @class */ (function () {
    function AdminDialogModule() {
    }
    AdminDialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_5__["NgxDocViewerModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            providers: [],
            declarations: [_admin_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AdminDialogComponent"]],
            entryComponents: [_admin_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AdminDialogComponent"]],
            exports: [_admin_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AdminDialogComponent"]]
        })
    ], AdminDialogModule);
    return AdminDialogModule;
}());



/***/ }),

/***/ "rDtv":
/*!********************************************!*\
  !*** ./src/app/main/admin/admin.routes.ts ***!
  \********************************************/
/*! exports provided: ADMIN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_ROUTES", function() { return ADMIN_ROUTES; });
var ADMIN_ROUTES = [
    // Guard for Modules
    // { path: '', loadChildren: () => import('./admin-dashboard/adminDash.module').then(m => m.adminDashBoardModule) },
    { path: '', loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("default~dashboard-dashboard-module~trg-team-dashboard-dashboard-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "RWr+")).then(function (m) { return m.DashboardModule; }); } },
    { path: 'dashboard', loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("default~dashboard-dashboard-module~trg-team-dashboard-dashboard-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "RWr+")).then(function (m) { return m.DashboardModule; }); } },
    { path: 'home', loadChildren: function () { return __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "UpzC")).then(function (m) { return m.HomeModule; }); } },
    { path: 'trg-team', loadChildren: function () { return __webpack_require__.e(/*! import() | trg-team-management-trg-team-module */ "trg-team-management-trg-team-module").then(__webpack_require__.bind(null, /*! ./trg-team-management/trg-team.module */ "7D9q")).then(function (m) { return m.TrgTeamModule; }); } },
    { path: 'trg-battalion', loadChildren: function () { return __webpack_require__.e(/*! import() | trg-battalion-management-trg-battalion-module */ "trg-battalion-management-trg-battalion-module").then(__webpack_require__.bind(null, /*! ./trg-battalion-management/trg-battalion.module */ "Rgrc")).then(function (m) { return m.TrgBattalionModule; }); } },
    { path: 'change-password', loadChildren: function () { return __webpack_require__.e(/*! import() | change-password-change-password-module */ "change-password-change-password-module").then(__webpack_require__.bind(null, /*! ./change-password/change-password.module */ "h4OV")).then(function (m) { return m.ChangePasswordModule; }); } },
    { path: 'Adjutant-Branch-Management', loadChildren: function () { return __webpack_require__.e(/*! import() | adjutant-branch-management-adjutant-module */ "adjutant-branch-management-adjutant-module").then(__webpack_require__.bind(null, /*! ./adjutant-branch-management/adjutant.module */ "r9Jt")).then(function (m) { return m.AdjutantModule; }); } },
    { path: 'it', loadChildren: function () { return __webpack_require__.e(/*! import() | complaint-requirement-complaint-requirement-module */ "complaint-requirement-complaint-requirement-module").then(__webpack_require__.bind(null, /*! ./complaint-requirement/complaint-requirement.module */ "/tc9")).then(function (m) { return m.ComplaintRequirementModule; }); } },
    { path: 'record', loadChildren: function () { return __webpack_require__.e(/*! import() | service-record-service-record-module */ "service-record-service-record-module").then(__webpack_require__.bind(null, /*! ./service-record/service-record.module */ "Vn44")).then(function (m) { return m.ServiceRecordModule; }); } },
    { path: 'GS-Branch', loadChildren: function () { return __webpack_require__.e(/*! import() | gs-branch-gs-branch-module */ "gs-branch-gs-branch-module").then(__webpack_require__.bind(null, /*! ./gs-branch/gs-branch.module */ "PN9j")).then(function (m) { return m.GS_BranchModule; }); } },
    { path: 'user-access', loadChildren: function () { return __webpack_require__.e(/*! import() | user-access-user-access-module */ "user-access-user-access-module").then(__webpack_require__.bind(null, /*! ./user-access/user-access.module */ "k6Sl")).then(function (m) { return m.UserAccessModule; }); } },
    { path: 'gc-term', loadChildren: function () { return Promise.all(/*! import() | gc-term-update-gc-term-update-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("gc-term-update-gc-term-update-module")]).then(__webpack_require__.bind(null, /*! ./gc-term-update/gc-term-update.module */ "blp1")).then(function (m) { return m.GcTermUpdateModule; }); } },
];


/***/ }),

/***/ "sJ2M":
/*!********************************************!*\
  !*** ./src/app/main/admin/admin.module.ts ***!
  \********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _admin_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.routes */ "rDtv");
/* harmony import */ var _admin_dialog_admin_dialog_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-dialog/admin-dialog.module */ "fMwf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_admin_routes__WEBPACK_IMPORTED_MODULE_4__["ADMIN_ROUTES"]),
                _admin_dialog_admin_dialog_module__WEBPACK_IMPORTED_MODULE_5__["AdminDialogModule"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ })

}]);