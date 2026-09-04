(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trg-battalion-management-trg-battalion-module"],{

/***/ "Rgrc":
/*!*****************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/trg-battalion.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TrgBattalionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrgBattalionModule", function() { return TrgBattalionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _trg_battalion_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trg-battalion.routes */ "lQ96");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TrgBattalionModule = /** @class */ (function () {
    function TrgBattalionModule() {
    }
    TrgBattalionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_trg_battalion_routes__WEBPACK_IMPORTED_MODULE_4__["TRG_BATTALION_ROUTES"]),
            ]
        })
    ], TrgBattalionModule);
    return TrgBattalionModule;
}());



/***/ }),

/***/ "lQ96":
/*!*****************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/trg-battalion.routes.ts ***!
  \*****************************************************************************/
/*! exports provided: TRG_BATTALION_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRG_BATTALION_ROUTES", function() { return TRG_BATTALION_ROUTES; });
// import { ActivityComponent } from './activity/activity.component';
// import { AcademyComponent } from './academy/academy.component';
// import { EventsComponent } from './events/events.component';
// import { MessagesComponent } from './messages/messages.component';
// import { ProgramsComponent } from './programs/programs.component';
var TRG_BATTALION_ROUTES = [
    // Guard for Modules
    { path: 'members', loadChildren: function () { return __webpack_require__.e(/*! import() | members-members-module */ "members-members-module").then(__webpack_require__.bind(null, /*! ./members/members.module */ "lcPn")).then(function (m) { return m.MembersModule; }); } },
    { path: 'gc-database', loadChildren: function () { return __webpack_require__.e(/*! import() | gc-database-gc-database-module */ "gc-database-gc-database-module").then(__webpack_require__.bind(null, /*! ./gc-database/gc-database.module */ "zAo3")).then(function (m) { return m.GCDatabaseModule; }); } },
    { path: 'history', loadChildren: function () { return __webpack_require__.e(/*! import() | history-history-module */ "history-history-module").then(__webpack_require__.bind(null, /*! ./history/history.module */ "iqlg")).then(function (m) { return m.HistoryModule; }); } },
    { path: 'gallantry', loadChildren: function () { return __webpack_require__.e(/*! import() | gallantry-gallantry-module */ "gallantry-gallantry-module").then(__webpack_require__.bind(null, /*! ./gallantry/gallantry.module */ "2dHw")).then(function (m) { return m.GallantryModule; }); } },
    { path: 'performance', loadChildren: function () { return __webpack_require__.e(/*! import() | performance-performance-module */ "performance-performance-module").then(__webpack_require__.bind(null, /*! ./performance/performance.module */ "zI1m")).then(function (m) { return m.PerformanceModule; }); } },
    { path: 'bdo', loadChildren: function () { return __webpack_require__.e(/*! import() | trg-battalion-bdo-bdo-bdo-module */ "bdo-bdo-bdo-module").then(__webpack_require__.bind(null, /*! ../../trg-battalion/bdo/bdo/bdo.module */ "ksLU")).then(function (m) { return m.BdoModule; }); } },
    { path: 'bro', loadChildren: function () { return __webpack_require__.e(/*! import() | trg-battalion-bro-bro-bro-module */ "bro-bro-bro-module").then(__webpack_require__.bind(null, /*! ../../trg-battalion/bro/bro/bro.module */ "8xz2")).then(function (m) { return m.BroModule; }); } },
    { path: 'assignment-of-duties', loadChildren: function () { return __webpack_require__.e(/*! import() | trg-battalion-assignment-of-duties-assignment-of-duties-assignment-of-duties-module */ "assignment-of-duties-assignment-of-duties-assignment-of-duties-module").then(__webpack_require__.bind(null, /*! ../../trg-battalion/assignment-of-duties/assignment-of-duties/assignment-of-duties.module */ "hNQX")).then(function (m) { return m.AssignmentOfDutiesModule; }); } },
    { path: 'gc-activities', loadChildren: function () { return __webpack_require__.e(/*! import() | gc-activities-gc-activites-module */ "gc-activities-gc-activites-module").then(__webpack_require__.bind(null, /*! ./gc-activities/gc-activites.module */ "8bqN")).then(function (m) { return m.GcActivitiesModule; }); } },
    { path: 'location-state', loadChildren: function () { return __webpack_require__.e(/*! import() | trg-battalion-location-state-location-state-module */ "default~location-state-location-state-module~trg-battalion-location-state-location-state-module").then(__webpack_require__.bind(null, /*! ../../trg-battalion/location-state/location-state.module */ "h6xE")).then(function (m) { return m.LocationStateModule; }); } },
    { path: 'parade-state', loadChildren: function () { return __webpack_require__.e(/*! import() | trg-battalion-parade-state-parade-state-module */ "parade-state-parade-state-module").then(__webpack_require__.bind(null, /*! ../../trg-battalion/parade-state/parade-state.module */ "SPhh")).then(function (m) { return m.ParadeStateModule; }); } },
    { path: 'oq-subject', loadChildren: function () { return __webpack_require__.e(/*! import() | oq-marks-oq-marks-module */ "oq-marks-oq-marks-module").then(__webpack_require__.bind(null, /*! ./oq-marks/oq-marks.module */ "YHFG")).then(function (m) { return m.OQMarksModule; }); } },
    { path: 'exercise-type', loadChildren: function () { return __webpack_require__.e(/*! import() | camp-exercise-type-camp-exercise-type-module */ "camp-exercise-type-camp-exercise-type-module").then(__webpack_require__.bind(null, /*! ./camp-exercise-type/camp-exercise-type.module */ "CE3v")).then(function (m) { return m.CampExerciseTypeModule; }); } },
    { path: 'camp-subject', loadChildren: function () { return __webpack_require__.e(/*! import() | camp-subject-camp-subject-module */ "camp-subject-camp-subject-module").then(__webpack_require__.bind(null, /*! ./camp-subject/camp-subject.module */ "8UzB")).then(function (m) { return m.CampSubjectModule; }); } },
];


/***/ })

}]);