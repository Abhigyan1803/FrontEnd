(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["interviews-interviews-module"],{

/***/ "XsSK":
/*!*******************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/interviews/interviews.routes.ts ***!
  \*******************************************************************************/
/*! exports provided: INTERVIEWS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERVIEWS_ROUTES", function() { return INTERVIEWS_ROUTES; });
var INTERVIEWS_ROUTES = [
    // Guard for Modules
    // { path: '', loadChildren: () => import('./admin-dashboard/adminDash.module').then(m => m.adminDashBoardModule) },
    // { path: '',redirectTo:"Ed-dashboard",pathMatch:"full" },
    // { path: 'Ed-dashboard', loadChildren: () => import('./ed-dashboard/ed-dashboard.module').then(m => m.EdDashboardModule) },
    { path: 'interview-sheet', loadChildren: function () { return Promise.all(/*! import() | interview-sheet-interview-sheet-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("interview-sheet-interview-sheet-module")]).then(__webpack_require__.bind(null, /*! ./interview-sheet/interview-sheet.module */ "0LrW")).then(function (m) { return m.InterviewSheetModule; }); } },
    { path: 'initial-interview', loadChildren: function () { return Promise.all(/*! import() | initial-interview-initial-interview-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("initial-interview-initial-interview-module")]).then(__webpack_require__.bind(null, /*! ./initial-interview/initial-interview.module */ "1oI/")).then(function (m) { return m.InitialInterviewModule; }); } },
    { path: 'begining-interview', loadChildren: function () { return Promise.all(/*! import() | begining-interview-begining-interview-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("begining-interview-begining-interview-module")]).then(__webpack_require__.bind(null, /*! ./begining-interview/begining-interview.module */ "jd6S")).then(function (m) { return m.BeginingInterviewModule; }); } },
    { path: 'mid-interview', loadChildren: function () { return Promise.all(/*! import() | mid-interview-mid-interview-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("mid-interview-mid-interview-module")]).then(__webpack_require__.bind(null, /*! ./mid-interview/mid-interview.module */ "OeMN")).then(function (m) { return m.MidInterviewModule; }); } },
    { path: 'special-interview', loadChildren: function () { return Promise.all(/*! import() | special-interview-special-interview-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("special-interview-special-interview-module")]).then(__webpack_require__.bind(null, /*! ./special-interview/special-interview.module */ "hYLq")).then(function (m) { return m.SpecialInterviewModule; }); } },
    { path: 'instructions-interviews', loadChildren: function () { return __webpack_require__.e(/*! import() | instructions-interviews-instructions-interviews-module */ "instructions-interviews-instructions-interviews-module").then(__webpack_require__.bind(null, /*! ./instructions-interviews/instructions-interviews.module */ "HSkj")).then(function (m) { return m.InstructionsInterviewsModule; }); } },
];


/***/ }),

/***/ "YgYd":
/*!*******************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/interviews/interviews.module.ts ***!
  \*******************************************************************************/
/*! exports provided: InterviewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewsModule", function() { return InterviewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _interviews_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interviews.routes */ "XsSK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var InterviewsModule = /** @class */ (function () {
    function InterviewsModule() {
    }
    InterviewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_interviews_routes__WEBPACK_IMPORTED_MODULE_4__["INTERVIEWS_ROUTES"]),
            ]
        })
    ], InterviewsModule);
    return InterviewsModule;
}());



/***/ })

}]);