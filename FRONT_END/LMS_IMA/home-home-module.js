(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "LfaQ":
/*!************************************************!*\
  !*** ./src/app/main/admin/home/home.routes.ts ***!
  \************************************************/
/*! exports provided: HOME_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_ROUTES", function() { return HOME_ROUTES; });
var HOME_ROUTES = [
    // Guard for Modules
    // { path: '', loadChildren: () => import('./admin-dashboard/adminDash.module').then(m => m.adminDashBoardModule) },
    { path: 'activity', loadChildren: function () { return __webpack_require__.e(/*! import() | activity-activity-module */ "activity-activity-module").then(__webpack_require__.bind(null, /*! ./activity/activity.module */ "Ds5x")).then(function (m) { return m.ActivityModule; }); } },
    { path: 'events', loadChildren: function () { return __webpack_require__.e(/*! import() | events-events-module */ "events-events-module").then(__webpack_require__.bind(null, /*! ./events/events.module */ "l8rv")).then(function (m) { return m.EventsModule; }); } },
    // { path: 'special-occasions', loadChildren: () => import('./special-occasions/special-occasions.module').then(m => m.SpecialOccasionsModule) },
    { path: 'announcement', loadChildren: function () { return __webpack_require__.e(/*! import() | announcement-announcement-module */ "announcement-announcement-module").then(__webpack_require__.bind(null, /*! ./announcement/announcement.module */ "SD6Y")).then(function (m) { return m.AnnouncementModule; }); } },
    { path: 'messages', loadChildren: function () { return __webpack_require__.e(/*! import() | messages-messages-module */ "messages-messages-module").then(__webpack_require__.bind(null, /*! ./messages/messages.module */ "QeqK")).then(function (m) { return m.MessagesModule; }); } },
    { path: 'programes', loadChildren: function () { return __webpack_require__.e(/*! import() | programs-programs-module */ "programs-programs-module").then(__webpack_require__.bind(null, /*! ./programs/programs.module */ "MS/a")).then(function (m) { return m.ProgramsModule; }); } },
    { path: 'central-library-management', loadChildren: function () { return __webpack_require__.e(/*! import() | central-library-management-central-library-management-module */ "central-library-management-central-library-management-module").then(__webpack_require__.bind(null, /*! ./central-library-management/central-library-management.module */ "BP10")).then(function (m) { return m.CentralLibraryManagementModule; }); } },
    { path: 'greybook', loadChildren: function () { return __webpack_require__.e(/*! import() | greybook-greybook-module */ "greybook-greybook-module").then(__webpack_require__.bind(null, /*! ./greybook/greybook.module */ "c1ax")).then(function (m) { return m.GreybookModule; }); } },
    { path: 'cyber-policy', loadChildren: function () { return __webpack_require__.e(/*! import() | cyber-policy-cyber-policy-module */ "cyber-policy-cyber-policy-module").then(__webpack_require__.bind(null, /*! ./cyber-policy/cyber-policy.module */ "FpLa")).then(function (m) { return m.CentralLibraryModule; }); } },
    { path: 'book-list', loadChildren: function () { return __webpack_require__.e(/*! import() | recommened-book-recommened-book-module */ "recommened-book-recommened-book-module").then(__webpack_require__.bind(null, /*! ./recommened-book/recommened-book.module */ "mjPz")).then(function (m) { return m.RecommenedBookModule; }); } },
    { path: 'hall-of-fame', loadChildren: function () { return __webpack_require__.e(/*! import() | hall-of-fame-hall-of-fame-module */ "hall-of-fame-hall-of-fame-module").then(__webpack_require__.bind(null, /*! ./hall-of-fame/hall-of-fame.module */ "NBFO")).then(function (m) { return m.HallOfFameModule; }); } },
    { path: 'ima-blog', loadChildren: function () { return __webpack_require__.e(/*! import() | ima-blogs-ima-blogs-module */ "ima-blogs-ima-blogs-module").then(__webpack_require__.bind(null, /*! ./ima-blogs/ima-blogs.module */ "1ZzC")).then(function (m) { return m.IMABlogsModule; }); } },
    { path: 'gc-msg', loadChildren: function () { return __webpack_require__.e(/*! import() | gc-msg-board-gc-msg-board-module */ "gc-msg-board-gc-msg-board-module").then(__webpack_require__.bind(null, /*! ./gc-msg-board/gc-msg-board.module */ "swex")).then(function (m) { return m.GcMsgBoardModule; }); } },
    { path: 'section-hospital', loadChildren: function () { return __webpack_require__.e(/*! import() | section-hospital-section-hospital-module */ "section-hospital-section-hospital-module").then(__webpack_require__.bind(null, /*! ./section-hospital/section-hospital.module */ "EhOZ")).then(function (m) { return m.SectionHospitalModule; }); } },
];


/***/ }),

/***/ "UpzC":
/*!************************************************!*\
  !*** ./src/app/main/admin/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.routes */ "LfaQ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_home_routes__WEBPACK_IMPORTED_MODULE_4__["HOME_ROUTES"]),
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);