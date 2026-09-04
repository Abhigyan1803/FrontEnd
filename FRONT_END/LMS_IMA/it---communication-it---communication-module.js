(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it---communication-it---communication-module"],{

/***/ "9pmR":
/*!********************************************************************************!*\
  !*** ./src/app/main/gs-branch/it-&-communication/it-&-communication.module.ts ***!
  \********************************************************************************/
/*! exports provided: ITCommunicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITCommunicationModule", function() { return ITCommunicationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _it_communication_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./it-&-communication.routes */ "kjyS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ITCommunicationModule = /** @class */ (function () {
    function ITCommunicationModule() {
    }
    ITCommunicationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_it_communication_routes__WEBPACK_IMPORTED_MODULE_4__["ITCOMM_ROUTES"]),
            ]
        })
    ], ITCommunicationModule);
    return ITCommunicationModule;
}());



/***/ }),

/***/ "Yy7H":
/*!**************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/it-&-communication/it-&-communication.routes.ts ***!
  \**************************************************************************************/
/*! exports provided: ITCOMM_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITCOMM_ROUTES", function() { return ITCOMM_ROUTES; });
var ITCOMM_ROUTES = [
    // Guard for Modules
    { path: 'charter', loadChildren: function () { return __webpack_require__.e(/*! import() | charter-charter-module */ "charter-charter-module").then(__webpack_require__.bind(null, /*! ./charter/charter.module */ "P87z")).then(function (m) { return m.CharterModule; }); } },
    { path: 'itppp', loadChildren: function () { return __webpack_require__.e(/*! import() | itppp-itppp-module */ "itppp-itppp-module").then(__webpack_require__.bind(null, /*! ./itppp/itppp.module */ "K5lr")).then(function (m) { return m.ItpppModule; }); } },
    { path: 'complaints-requirements', loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-n-requirements-cnr-module */ "complaints-n-requirements-cnr-module").then(__webpack_require__.bind(null, /*! ./complaints-n-requirements/cnr.module */ "tLZr")).then(function (m) { return m.CNRModule; }); } },
];


/***/ }),

/***/ "cdrf":
/*!**************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/it-&-communication/it-&-communication.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ITCommunicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITCommunicationModule", function() { return ITCommunicationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _it_communication_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./it-&-communication.routes */ "Yy7H");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ITCommunicationModule = /** @class */ (function () {
    function ITCommunicationModule() {
    }
    ITCommunicationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_it_communication_routes__WEBPACK_IMPORTED_MODULE_4__["ITCOMM_ROUTES"]),
            ]
        })
    ], ITCommunicationModule);
    return ITCommunicationModule;
}());



/***/ }),

/***/ "kjyS":
/*!********************************************************************************!*\
  !*** ./src/app/main/gs-branch/it-&-communication/it-&-communication.routes.ts ***!
  \********************************************************************************/
/*! exports provided: ITCOMM_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITCOMM_ROUTES", function() { return ITCOMM_ROUTES; });
var ITCOMM_ROUTES = [
    // Guard for Modules
    { path: 'charter', loadChildren: function () { return __webpack_require__.e(/*! import() | charter-charter-module */ "charter-charter-module").then(__webpack_require__.bind(null, /*! ./charter/charter.module */ "wd8i")).then(function (m) { return m.CharterModule; }); } },
    { path: 'itppp', loadChildren: function () { return __webpack_require__.e(/*! import() | itppp-itppp-module */ "itppp-itppp-module").then(__webpack_require__.bind(null, /*! ./itppp/itppp.module */ "tYHR")).then(function (m) { return m.ItpppModule; }); } },
    // { path: 'complaints-requirements', loadChildren: () => import('../it/it.module').then(m => m.ITModule) },
    { path: 'complaints-requirements', loadChildren: function () { return __webpack_require__.e(/*! import() | it-complaints-n-requirements-cnr-module */ "it-complaints-n-requirements-cnr-module").then(__webpack_require__.bind(null, /*! ../it/complaints-n-requirements/cnr.module */ "XlcG")).then(function (m) { return m.CNRModule; }); } },
];


/***/ })

}]);