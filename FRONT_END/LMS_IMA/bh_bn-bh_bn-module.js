(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bh_bn-bh_bn-module"],{

/***/ "03AR":
/*!************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/bh_bn/bh_bn.module.ts ***!
  \************************************************************************/
/*! exports provided: BhbnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BhbnModule", function() { return BhbnModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _bh_bn_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bh_bn.routes */ "2NEc");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BhbnModule = /** @class */ (function () {
    function BhbnModule() {
    }
    BhbnModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_bh_bn_routes__WEBPACK_IMPORTED_MODULE_4__["BH_BN_ROUTES"]),
            ]
        })
    ], BhbnModule);
    return BhbnModule;
}());



/***/ }),

/***/ "2NEc":
/*!************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/bh_bn/bh_bn.routes.ts ***!
  \************************************************************************/
/*! exports provided: BH_BN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BH_BN_ROUTES", function() { return BH_BN_ROUTES; });
var BH_BN_ROUTES = [
    // Guard for Modules
    { path: 'counsellors-cassino', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-cassino-counsellors-cassino-module */ "counsellors-cassino-counsellors-cassino-module").then(__webpack_require__.bind(null, /*! ./counsellors-cassino/counsellors-cassino.module */ "S45G")).then(function (m) { return m.CounsellorsCasinoModule; }); } },
    { path: 'counsellors-keren', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-keren-counsellors-keren-module */ "counsellors-keren-counsellors-keren-module").then(__webpack_require__.bind(null, /*! ./counsellors-keren/counsellors-keren.module */ "A8ia")).then(function (m) { return m.CounsellorsKerenModule; }); } },
    { path: 'counsellors-singarh', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-singarh-counsellors-singarh-module */ "counsellors-singarh-counsellors-singarh-module").then(__webpack_require__.bind(null, /*! ./counsellors-singarh/counsellors-singarh.module */ "vJr8")).then(function (m) { return m.CounsellorsSingarhModule; }); } },
    { path: 'counsellors-basantar', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-basantar-counsellors-basantar-module */ "counsellors-basantar-counsellors-basantar-module").then(__webpack_require__.bind(null, /*! ./counsellors-basantar/counsellors-basantar.module */ "JKlJ")).then(function (m) { return m.CounsellorsBasantarModule; }); } },
];


/***/ })

}]);