(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counsellors-counsellors-module"],{

/***/ "/TAc":
/*!************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/counsellors.module.ts ***!
  \************************************************************************/
/*! exports provided: CounsellorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounsellorsModule", function() { return CounsellorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _counsellors_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counsellors.routes */ "gGja");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CounsellorsModule = /** @class */ (function () {
    function CounsellorsModule() {
    }
    CounsellorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_counsellors_routes__WEBPACK_IMPORTED_MODULE_4__["COUNSELLORS_ROUTES"]),
            ]
        })
    ], CounsellorsModule);
    return CounsellorsModule;
}());



/***/ }),

/***/ "gGja":
/*!************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/counsellors.routes.ts ***!
  \************************************************************************/
/*! exports provided: COUNSELLORS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNSELLORS_ROUTES", function() { return COUNSELLORS_ROUTES; });
var COUNSELLORS_ROUTES = [
    // Guard for Modules
    { path: 'cabn', loadChildren: function () { return __webpack_require__.e(/*! import() | ca_bn-ca_bn-module */ "ca_bn-ca_bn-module").then(__webpack_require__.bind(null, /*! ./ca_bn/ca_bn.module */ "2/0j")).then(function (m) { return m.CabnModule; }); } },
    { path: 'thbn', loadChildren: function () { return __webpack_require__.e(/*! import() | th_bn-th_bn-module */ "th_bn-th_bn-module").then(__webpack_require__.bind(null, /*! ./th_bn/th_bn.module */ "MM9e")).then(function (m) { return m.ThbnModule; }); } },
    { path: 'mabn', loadChildren: function () { return __webpack_require__.e(/*! import() | ma_bn-ma_bn-module */ "ma_bn-ma_bn-module").then(__webpack_require__.bind(null, /*! ./ma_bn/ma_bn.module */ "OPhD")).then(function (m) { return m.MabnModule; }); } },
    { path: 'bhbn', loadChildren: function () { return __webpack_require__.e(/*! import() | bh_bn-bh_bn-module */ "bh_bn-bh_bn-module").then(__webpack_require__.bind(null, /*! ./bh_bn/bh_bn.module */ "03AR")).then(function (m) { return m.BhbnModule; }); } },
];


/***/ })

}]);