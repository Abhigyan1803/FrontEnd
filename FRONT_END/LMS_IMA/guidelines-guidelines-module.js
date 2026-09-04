(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guidelines-guidelines-module"],{

/***/ "4eTe":
/*!**********************************************************************!*\
  !*** ./src/app/main/gs-branch/stats/guidelines/guidelines.module.ts ***!
  \**********************************************************************/
/*! exports provided: GuidelinesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidelinesModule", function() { return GuidelinesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _guidelines_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guidelines.routes */ "DUx4");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GuidelinesModule = /** @class */ (function () {
    function GuidelinesModule() {
    }
    GuidelinesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_guidelines_routes__WEBPACK_IMPORTED_MODULE_4__["GUIDELINES_ROUTES"]),
            ]
        })
    ], GuidelinesModule);
    return GuidelinesModule;
}());



/***/ }),

/***/ "DUx4":
/*!**********************************************************************!*\
  !*** ./src/app/main/gs-branch/stats/guidelines/guidelines.routes.ts ***!
  \**********************************************************************/
/*! exports provided: GUIDELINES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUIDELINES_ROUTES", function() { return GUIDELINES_ROUTES; });
var GUIDELINES_ROUTES = [
    // Guard for Modules
    { path: 'administrative-instructions', loadChildren: function () { return __webpack_require__.e(/*! import() | administrative-instructions-administrative-instructions-module */ "administrative-instructions-administrative-instructions-module").then(__webpack_require__.bind(null, /*! ./administrative-instructions/administrative-instructions.module */ "Sm21")).then(function (m) { return m.AdministrativeInstructionsModule; }); } },
    { path: 'fgc-policy', loadChildren: function () { return __webpack_require__.e(/*! import() | fgc-policy-fgc-policy-module */ "fgc-policy-fgc-policy-module").then(__webpack_require__.bind(null, /*! ./fgc-policy/fgc-policy.module */ "PWro")).then(function (m) { return m.FgcPolicyModule; }); } },
    { path: 'pcab-coa', loadChildren: function () { return __webpack_require__.e(/*! import() | pcab-coa-pcab-coa-module */ "pcab-coa-pcab-coa-module").then(__webpack_require__.bind(null, /*! ./pcab-coa/pcab-coa.module */ "XJeM")).then(function (m) { return m.PcabCoaModule; }); } },
    { path: 'standing-trg-directives', loadChildren: function () { return __webpack_require__.e(/*! import() | standing-trg-directives-standing-trg-directives-module */ "standing-trg-directives-standing-trg-directives-module").then(__webpack_require__.bind(null, /*! ./standing-trg-directives/standing-trg-directives.module */ "TTtZ")).then(function (m) { return m.StandingTrgDirectivesModule; }); } },
    { path: 'misc', loadChildren: function () { return __webpack_require__.e(/*! import() | misc-misc-module */ "misc-misc-module").then(__webpack_require__.bind(null, /*! ./misc/misc.module */ "gT3g")).then(function (m) { return m.MiscModule; }); } },
];


/***/ }),

/***/ "Mu88":
/*!****************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/stats/guidelines/guidelines.module.ts ***!
  \****************************************************************************/
/*! exports provided: GuidelinesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidelinesModule", function() { return GuidelinesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _guidelines_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guidelines.routes */ "Z7uz");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GuidelinesModule = /** @class */ (function () {
    function GuidelinesModule() {
    }
    GuidelinesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_guidelines_routes__WEBPACK_IMPORTED_MODULE_4__["GUIDELINES_ROUTES"]),
            ]
        })
    ], GuidelinesModule);
    return GuidelinesModule;
}());



/***/ }),

/***/ "Z7uz":
/*!****************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/stats/guidelines/guidelines.routes.ts ***!
  \****************************************************************************/
/*! exports provided: GUIDELINES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUIDELINES_ROUTES", function() { return GUIDELINES_ROUTES; });
var GUIDELINES_ROUTES = [
    // Guard for Modules
    { path: 'administrative-instructions', loadChildren: function () { return __webpack_require__.e(/*! import() | administrative-instructions-administrative-instructions-module */ "administrative-instructions-administrative-instructions-module").then(__webpack_require__.bind(null, /*! ./administrative-instructions/administrative-instructions.module */ "xomo")).then(function (m) { return m.AdministrativeInstructionsModule; }); } },
    { path: 'fgc-policy', loadChildren: function () { return __webpack_require__.e(/*! import() | fgc-policy-fgc-policy-module */ "fgc-policy-fgc-policy-module").then(__webpack_require__.bind(null, /*! ./fgc-policy/fgc-policy.module */ "NaVO")).then(function (m) { return m.FgcPolicyModule; }); } },
    { path: 'pcab-coa', loadChildren: function () { return __webpack_require__.e(/*! import() | pcab-coa-pcab-coa-module */ "pcab-coa-pcab-coa-module").then(__webpack_require__.bind(null, /*! ./pcab-coa/pcab-coa.module */ "dCSA")).then(function (m) { return m.PcabCoaModule; }); } },
    { path: 'standing-trg-directives', loadChildren: function () { return __webpack_require__.e(/*! import() | standing-trg-directives-standing-trg-directives-module */ "standing-trg-directives-standing-trg-directives-module").then(__webpack_require__.bind(null, /*! ./standing-trg-directives/standing-trg-directives.module */ "/CWs")).then(function (m) { return m.StandingTrgDirectivesModule; }); } },
    { path: 'misc', loadChildren: function () { return __webpack_require__.e(/*! import() | misc-misc-module */ "misc-misc-module").then(__webpack_require__.bind(null, /*! ./misc/misc.module */ "QJkd")).then(function (m) { return m.MiscModule; }); } },
];


/***/ })

}]);