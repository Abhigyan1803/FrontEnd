(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-trg-battalion-trg-battalion-module"],{

/***/ "90oL":
/*!*************************************************************!*\
  !*** ./src/app/main/trg-battalion/trg-battalion.routing.ts ***!
  \*************************************************************/
/*! exports provided: TrgBattalionRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrgBattalionRoutes", function() { return TrgBattalionRoutes; });
var TrgBattalionRoutes = [
    { path: '', loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("default~dashboard-dashboard-module~trg-team-dashboard-dashboard-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "OG5R")).then(function (m) { return m.DashboardModule; }); } },
    { path: 'dashboard', loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("default~dashboard-dashboard-module~trg-team-dashboard-dashboard-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "OG5R")).then(function (m) { return m.DashboardModule; }); } },
    { path: 'bro', loadChildren: function () { return __webpack_require__.e(/*! import() | bro-bro-bro-module */ "bro-bro-bro-module").then(__webpack_require__.bind(null, /*! ./bro/bro/bro.module */ "8xz2")).then(function (m) { return m.BroModule; }); } },
    { path: 'bdo', loadChildren: function () { return __webpack_require__.e(/*! import() | bdo-bdo-bdo-module */ "bdo-bdo-bdo-module").then(__webpack_require__.bind(null, /*! ./bdo/bdo/bdo.module */ "ksLU")).then(function (m) { return m.BdoModule; }); } },
    { path: 'assignment-of-duties', loadChildren: function () { return __webpack_require__.e(/*! import() | assignment-of-duties-assignment-of-duties-assignment-of-duties-module */ "assignment-of-duties-assignment-of-duties-assignment-of-duties-module").then(__webpack_require__.bind(null, /*! ./assignment-of-duties/assignment-of-duties/assignment-of-duties.module */ "hNQX")).then(function (m) { return m.AssignmentOfDutiesModule; }); } },
    { path: 'gc-database', loadChildren: function () { return __webpack_require__.e(/*! import() | admin-trg-battalion-management-gc-database-gc-database-module */ "gc-database-gc-database-module").then(__webpack_require__.bind(null, /*! ../admin/trg-battalion-management/gc-database/gc-database.module */ "zAo3")).then(function (m) { return m.GCDatabaseModule; }); } },
    { path: 'location-state', loadChildren: function () { return Promise.all(/*! import() | location-state-location-state-module */[__webpack_require__.e("default~location-state-location-state-module~trg-battalion-location-state-location-state-module"), __webpack_require__.e("location-state-location-state-module")]).then(__webpack_require__.bind(null, /*! ./location-state/location-state.module */ "h6xE")).then(function (m) { return m.LocationStateModule; }); } },
    { path: 'parade-state', loadChildren: function () { return __webpack_require__.e(/*! import() | parade-state-parade-state-module */ "parade-state-parade-state-module").then(__webpack_require__.bind(null, /*! ./parade-state/parade-state.module */ "SPhh")).then(function (m) { return m.ParadeStateModule; }); } },
    { path: 'complaint', loadChildren: function () { return __webpack_require__.e(/*! import() | complaint-requirement-complaint-requirement-module */ "complaint-requirement-complaint-requirement-module").then(__webpack_require__.bind(null, /*! ./complaint-requirement/complaint-requirement.module */ "kKVX")).then(function (m) { return m.ComplaintRequirementModule; }); } },
    { path: 'camp-marks/:term', loadChildren: function () { return __webpack_require__.e(/*! import() | camp-marks-camp-marks-module */ "camp-marks-camp-marks-module").then(__webpack_require__.bind(null, /*! ./camp-marks/camp-marks.module */ "UwbW")).then(function (m) { return m.CampMarksModule; }); } },
    { path: 'oq-marks/:term', loadChildren: function () { return __webpack_require__.e(/*! import() | oq-marks-oq-marks-module */ "oq-marks-oq-marks-module").then(__webpack_require__.bind(null, /*! ./oq-marks/oq-marks.module */ "boX8")).then(function (m) { return m.OQModule; }); } },
    // {  path: 'runback', loadChildren: () => import('./runback/runback.module').then(m => m.RunbackModule) },  
    // {  path: 'route-march', loadChildren: () => import('./route-march/route-march.module').then(m => m.RouteMarchModule) },  
    { path: 'mr-prac/:type', loadChildren: function () { return Promise.all(/*! import() | mr-prac-mr-prac-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("mr-prac-mr-prac-module")]).then(__webpack_require__.bind(null, /*! ./mr-prac/mr-prac.module */ "sSvq")).then(function (m) { return m.MrPrachModule; }); } },
    { path: 'i-card', loadChildren: function () { return __webpack_require__.e(/*! import() | i-card-i-card-module */ "i-card-i-card-module").then(__webpack_require__.bind(null, /*! ./i-card/i-card.module */ "Wwp7")).then(function (m) { return m.IcardModule; }); } },
    { path: 'route-march/:type', loadChildren: function () { return Promise.all(/*! import() | route-march-route-march-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("route-march-route-march-module")]).then(__webpack_require__.bind(null, /*! ./route-march/route-march.module */ "rOtk")).then(function (m) { return m.RouteMarchModule; }); } },
    { path: 'ima-blog', loadChildren: function () { return __webpack_require__.e(/*! import() | admin-home-ima-blogs-ima-blogs-module */ "ima-blogs-ima-blogs-module").then(__webpack_require__.bind(null, /*! ../admin/home/ima-blogs/ima-blogs.module */ "1ZzC")).then(function (m) { return m.IMABlogsModule; }); } },
    { path: 'runback/:type', loadChildren: function () { return Promise.all(/*! import() | runback-runback-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("runback-runback-module")]).then(__webpack_require__.bind(null, /*! ./runback/runback.module */ "eLA0")).then(function (m) { return m.RunbackModule; }); } },
];


/***/ }),

/***/ "Mf90":
/*!************************************************************!*\
  !*** ./src/app/main/trg-battalion/trg-battalion.module.ts ***!
  \************************************************************/
/*! exports provided: TrgBattalionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrgBattalionModule", function() { return TrgBattalionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _trg_battalion_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trg-battalion.routing */ "90oL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TrgBattalionModule = /** @class */ (function () {
    function TrgBattalionModule(_trgBattalion) {
        this._trgBattalion = _trgBattalion;
    }
    TrgBattalionModule.ctorParameters = function () { return [
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"] }
    ]; };
    TrgBattalionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                // MatTableModule,
                // MatSelectModule,
                // FlexLayoutModule,
                // NgxEasypiechartModule,
                // MatPaginatorModule,
                // MatChipsModule,
                // TranslateModule,
                // PerfectScrollbarModule,
                // MatIconModule,
                // MatButtonModule,
                // MatTabsModule,
                // MatCardModule,
                // MatMenuModule,
                // MatListModule,
                // MatCheckboxModule,
                // MatDividerModule,
                // ChartsModule,
                // NgxDatatableModule,
                // MatProgressBarModule,
                // MatInputModule,
                // MatFormFieldModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                // MatSortModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_trg_battalion_routing__WEBPACK_IMPORTED_MODULE_3__["TrgBattalionRoutes"]),
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
                // AgmCoreModule.forRoot({apiKey: 'AIzaSyD4y2luRxfM8Q8yKHSLdOOdNpkiilVhD9k'}),
            ],
        }),
        __metadata("design:paramtypes", [app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"]])
    ], TrgBattalionModule);
    return TrgBattalionModule;
}());



/***/ })

}]);