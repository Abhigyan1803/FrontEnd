(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charter-charter-module"],{

/***/ "+sdf":
/*!***********************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/it-&-communication/charter/charter.routes.ts ***!
  \***********************************************************************************/
/*! exports provided: CHARTER_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARTER_ROUTES", function() { return CHARTER_ROUTES; });
var CHARTER_ROUTES = [
    // Guard for Modules
    { path: 'communication-sec', loadChildren: function () { return __webpack_require__.e(/*! import() | communication-sec-communication-sec-module */ "communication-sec-communication-sec-module").then(__webpack_require__.bind(null, /*! ./communication-sec/communication-sec.module */ "09Lb")).then(function (m) { return m.CommunicationSecModule; }); } },
    { path: 'it-sec', loadChildren: function () { return __webpack_require__.e(/*! import() | it-sec-it-sec-module */ "it-sec-it-sec-module").then(__webpack_require__.bind(null, /*! ./it-sec/it-sec.module */ "dtOd")).then(function (m) { return m.ItSecModule; }); } },
];


/***/ }),

/***/ "P87z":
/*!***********************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/it-&-communication/charter/charter.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CharterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharterModule", function() { return CharterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _charter_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charter.routes */ "+sdf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CharterModule = /** @class */ (function () {
    function CharterModule() {
    }
    CharterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_charter_routes__WEBPACK_IMPORTED_MODULE_4__["CHARTER_ROUTES"]),
            ]
        })
    ], CharterModule);
    return CharterModule;
}());



/***/ }),

/***/ "k5S8":
/*!*****************************************************************************!*\
  !*** ./src/app/main/gs-branch/it-&-communication/charter/charter.routes.ts ***!
  \*****************************************************************************/
/*! exports provided: CHARTER_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARTER_ROUTES", function() { return CHARTER_ROUTES; });
var CHARTER_ROUTES = [
    // Guard for Modules
    { path: 'communication-sec', loadChildren: function () { return __webpack_require__.e(/*! import() | communication-sec-communication-sec-module */ "communication-sec-communication-sec-module").then(__webpack_require__.bind(null, /*! ./communication-sec/communication-sec.module */ "UGqc")).then(function (m) { return m.CommunicationSecModule; }); } },
    { path: 'it-sec', loadChildren: function () { return __webpack_require__.e(/*! import() | it-sec-it-sec-module */ "it-sec-it-sec-module").then(__webpack_require__.bind(null, /*! ./it-sec/it-sec.module */ "Pf9D")).then(function (m) { return m.ItSecModule; }); } },
];


/***/ }),

/***/ "wd8i":
/*!*****************************************************************************!*\
  !*** ./src/app/main/gs-branch/it-&-communication/charter/charter.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CharterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharterModule", function() { return CharterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _charter_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charter.routes */ "k5S8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CharterModule = /** @class */ (function () {
    function CharterModule() {
    }
    CharterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_charter_routes__WEBPACK_IMPORTED_MODULE_4__["CHARTER_ROUTES"]),
            ]
        })
    ], CharterModule);
    return CharterModule;
}());



/***/ })

}]);