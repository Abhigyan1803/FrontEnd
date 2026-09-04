(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-control-access-control-module"],{

/***/ "L74O":
/*!***************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/access-control/access-control.routes.ts ***!
  \***************************************************************************************/
/*! exports provided: ACCESS_CONTROL_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_CONTROL_ROUTES", function() { return ACCESS_CONTROL_ROUTES; });
var ACCESS_CONTROL_ROUTES = [
    // Guard for Modules
    { path: 'biometric-rfid', loadChildren: function () { return __webpack_require__.e(/*! import() | biometric-rfid-card-biometric-rfid-card-module */ "biometric-rfid-card-biometric-rfid-card-module").then(__webpack_require__.bind(null, /*! ./biometric-rfid-card/biometric-rfid-card.module */ "NCkF")).then(function (m) { return m.BiometricRfidCardModule; }); } },
    { path: 'vehicle-sticker', loadChildren: function () { return __webpack_require__.e(/*! import() | vehicle-stickers-acs-vehicle-stickers-module */ "vehicle-stickers-acs-vehicle-stickers-module").then(__webpack_require__.bind(null, /*! ./vehicle-stickers-acs/vehicle-stickers.module */ "OFr9")).then(function (m) { return m.VehicleStickersAcsModule; }); } },
    { path: 'entry-passes/combat', loadChildren: function () { return __webpack_require__.e(/*! import() | entry-passes-combat-combat-module */ "entry-passes-combat-combat-module").then(__webpack_require__.bind(null, /*! ./entry-passes/combat/combat.module */ "B5Jm")).then(function (m) { return m.CombatModule; }); } },
    { path: 'entry-passes/civ', loadChildren: function () { return __webpack_require__.e(/*! import() | entry-passes-civ-staff-civ-staff-module */ "entry-passes-civ-staff-civ-staff-module").then(__webpack_require__.bind(null, /*! ./entry-passes/civ-staff/civ-staff.module */ "gouo")).then(function (m) { return m.CivStaffModule; }); } },
    { path: 'entry-passes/casual', loadChildren: function () { return __webpack_require__.e(/*! import() | entry-passes-casual-staff-casual-staff-module */ "entry-passes-casual-staff-casual-staff-module").then(__webpack_require__.bind(null, /*! ./entry-passes/casual-staff/casual-staff.module */ "4WyK")).then(function (m) { return m.CasualStaffModule; }); } },
];


/***/ }),

/***/ "OC6p":
/*!***************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/access-control/access-control.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AccessControlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlModule", function() { return AccessControlModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _access_control_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./access-control.routes */ "L74O");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AccessControlModule = /** @class */ (function () {
    function AccessControlModule() {
    }
    AccessControlModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_access_control_routes__WEBPACK_IMPORTED_MODULE_4__["ACCESS_CONTROL_ROUTES"]),
            ]
        })
    ], AccessControlModule);
    return AccessControlModule;
}());



/***/ }),

/***/ "VqR1":
/*!*********************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/access-control/access-control.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AccessControlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessControlModule", function() { return AccessControlModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _access_control_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./access-control.routes */ "zZRb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AccessControlModule = /** @class */ (function () {
    function AccessControlModule() {
    }
    AccessControlModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_access_control_routes__WEBPACK_IMPORTED_MODULE_4__["ACCESS_CONTROL_ROUTES"]),
            ]
        })
    ], AccessControlModule);
    return AccessControlModule;
}());



/***/ }),

/***/ "zZRb":
/*!*********************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/access-control/access-control.routes.ts ***!
  \*********************************************************************************/
/*! exports provided: ACCESS_CONTROL_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_CONTROL_ROUTES", function() { return ACCESS_CONTROL_ROUTES; });
var ACCESS_CONTROL_ROUTES = [
    // Guard for Modules
    { path: 'biometric-rfid', loadChildren: function () { return __webpack_require__.e(/*! import() | biometric-rfid-card-biometric-rfid-card-module */ "biometric-rfid-card-biometric-rfid-card-module").then(__webpack_require__.bind(null, /*! ./biometric-rfid-card/biometric-rfid-card.module */ "89DD")).then(function (m) { return m.BiometricRfidCardModule; }); } },
    { path: 'vehicle-sticker', loadChildren: function () { return __webpack_require__.e(/*! import() | vehicle-stickers-acs-vehicle-stickers-module */ "vehicle-stickers-acs-vehicle-stickers-module").then(__webpack_require__.bind(null, /*! ./vehicle-stickers-acs/vehicle-stickers.module */ "MH3F")).then(function (m) { return m.VehicleStickersAcsModule; }); } },
    { path: 'entry-passes/combat', loadChildren: function () { return __webpack_require__.e(/*! import() | entry-passes-combat-combat-module */ "entry-passes-combat-combat-module").then(__webpack_require__.bind(null, /*! ./entry-passes/combat/combat.module */ "nIP1")).then(function (m) { return m.CombatModule; }); } },
    { path: 'entry-passes/civ', loadChildren: function () { return __webpack_require__.e(/*! import() | entry-passes-civ-staff-civ-staff-module */ "entry-passes-civ-staff-civ-staff-module").then(__webpack_require__.bind(null, /*! ./entry-passes/civ-staff/civ-staff.module */ "A6Ra")).then(function (m) { return m.CivStaffModule; }); } },
    { path: 'entry-passes/casual', loadChildren: function () { return __webpack_require__.e(/*! import() | entry-passes-casual-staff-casual-staff-module */ "entry-passes-casual-staff-casual-staff-module").then(__webpack_require__.bind(null, /*! ./entry-passes/casual-staff/casual-staff.module */ "a4OS")).then(function (m) { return m.CasualStaffModule; }); } },
];


/***/ })

}]);