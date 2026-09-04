(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gs-branch-gs-branch-module"],{

/***/ "PN9j":
/*!**********************************************************!*\
  !*** ./src/app/main/admin/gs-branch/gs-branch.module.ts ***!
  \**********************************************************/
/*! exports provided: GS_BranchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GS_BranchModule", function() { return GS_BranchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _gs_branch_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gs-branch.route */ "tICY");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GS_BranchModule = /** @class */ (function () {
    function GS_BranchModule() {
    }
    GS_BranchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_gs_branch_route__WEBPACK_IMPORTED_MODULE_4__["GS_BRANCH"]),
            ]
        })
    ], GS_BranchModule);
    return GS_BranchModule;
}());



/***/ }),

/***/ "tICY":
/*!*********************************************************!*\
  !*** ./src/app/main/admin/gs-branch/gs-branch.route.ts ***!
  \*********************************************************/
/*! exports provided: GS_BRANCH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GS_BRANCH", function() { return GS_BRANCH; });
var GS_BRANCH = [
    // Guard for Modules
    { path: 'members', loadChildren: function () { return __webpack_require__.e(/*! import() | members-members-module */ "members-members-module").then(__webpack_require__.bind(null, /*! ./members/members.module */ "UptD")).then(function (m) { return m.MembersModule; }); } },
    { path: 'coord', loadChildren: function () { return __webpack_require__.e(/*! import() | coord-coord-module */ "coord-coord-module").then(__webpack_require__.bind(null, /*! ./coord/coord.module */ "xuwm")).then(function (m) { return m.CoordModule; }); } },
    { path: 'stats', loadChildren: function () { return __webpack_require__.e(/*! import() | stats-stats-module */ "stats-stats-module").then(__webpack_require__.bind(null, /*! ./stats/stats.module */ "KMeL")).then(function (m) { return m.StatsModule; }); } },
    { path: 'security', loadChildren: function () { return __webpack_require__.e(/*! import() | security-security-module */ "security-security-module").then(__webpack_require__.bind(null, /*! ./security/security.module */ "4zPP")).then(function (m) { return m.SecurityModule; }); } },
    { path: 'it', loadChildren: function () { return Promise.all(/*! import() | it-it-module */[__webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("common"), __webpack_require__.e("it-it-module")]).then(__webpack_require__.bind(null, /*! ./it/it.module */ "D6yo")).then(function (m) { return m.ITModule; }); } },
    { path: 'itcommunication', loadChildren: function () { return __webpack_require__.e(/*! import() | it---communication-it---communication-module */ "it---communication-it---communication-module").then(__webpack_require__.bind(null, /*! ./it-&-communication/it-&-communication.module */ "cdrf")).then(function (m) { return m.ITCommunicationModule; }); } },
];


/***/ })

}]);