(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clubs-clubs-module"],{

/***/ "SQLR":
/*!************************************************************!*\
  !*** ./src/app/main/academic-depart/clubs/clubs.module.ts ***!
  \************************************************************/
/*! exports provided: ClubsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubsModule", function() { return ClubsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _clubs_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clubs.routes */ "iqh7");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ClubsModule = /** @class */ (function () {
    function ClubsModule() {
    }
    ClubsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_clubs_routes__WEBPACK_IMPORTED_MODULE_4__["CLUBS_ROUTES"]),
            ]
        })
    ], ClubsModule);
    return ClubsModule;
}());



/***/ }),

/***/ "iqh7":
/*!************************************************************!*\
  !*** ./src/app/main/academic-depart/clubs/clubs.routes.ts ***!
  \************************************************************/
/*! exports provided: CLUBS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLUBS_ROUTES", function() { return CLUBS_ROUTES; });
var CLUBS_ROUTES = [
    // Guard for Modules
    { path: 'day-wise', loadChildren: function () { return __webpack_require__.e(/*! import() | day-wise-day-wise-module */ "day-wise-day-wise-module").then(__webpack_require__.bind(null, /*! ./day-wise/day-wise.module */ "+Uu/")).then(function (m) { return m.DayModule; }); } },
    { path: 'sops', loadChildren: function () { return __webpack_require__.e(/*! import() | sops-sops-module */ "sops-sops-module").then(__webpack_require__.bind(null, /*! ./sops/sops.module */ "TtB7")).then(function (m) { return m.SopsModule; }); } },
    { path: 'nominal', loadChildren: function () { return __webpack_require__.e(/*! import() | nominal-nominal-module */ "nominal-nominal-module").then(__webpack_require__.bind(null, /*! ./nominal/nominal.module */ "BPBt")).then(function (m) { return m.NominalModule; }); } },
];


/***/ })

}]);