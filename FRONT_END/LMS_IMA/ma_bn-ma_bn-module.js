(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ma_bn-ma_bn-module"],{

/***/ "Kyp3":
/*!************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/ma_bn/ma_bn.routes.ts ***!
  \************************************************************************/
/*! exports provided: MA_BN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MA_BN_ROUTES", function() { return MA_BN_ROUTES; });
var MA_BN_ROUTES = [
    // Guard for Modules
    { path: 'counsellors-zojila', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-zojila-counsellors-zojila-module */ "counsellors-zojila-counsellors-zojila-module").then(__webpack_require__.bind(null, /*! ./counsellors-zojila/counsellors-zojila.module */ "IMfB")).then(function (m) { return m.CounsellorsZojilaModule; }); } },
    { path: 'counsellors-imphal', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-imphal-counsellors-imphal-module */ "counsellors-imphal-counsellors-imphal-module").then(__webpack_require__.bind(null, /*! ./counsellors-imphal/counsellors-imphal.module */ "r5II")).then(function (m) { return m.CounsellorsImphalModule; }); } },
    { path: 'counsellors-jessore', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-jessore-counsellors-jessore-module */ "counsellors-jessore-counsellors-jessore-module").then(__webpack_require__.bind(null, /*! ./counsellors-jessore/counsellors-jessore.module */ "kybB")).then(function (m) { return m.CounsellorsJessoreModule; }); } },
    { path: 'counsellors-sangro', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-sangro-counsellors-sangro-module */ "counsellors-sangro-counsellors-sangro-module").then(__webpack_require__.bind(null, /*! ./counsellors-sangro/counsellors-sangro.module */ "Gg/2")).then(function (m) { return m.CounsellorsSangroModule; }); } },
];


/***/ }),

/***/ "OPhD":
/*!************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/ma_bn/ma_bn.module.ts ***!
  \************************************************************************/
/*! exports provided: MabnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MabnModule", function() { return MabnModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ma_bn_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ma_bn.routes */ "Kyp3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MabnModule = /** @class */ (function () {
    function MabnModule() {
    }
    MabnModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_ma_bn_routes__WEBPACK_IMPORTED_MODULE_4__["MA_BN_ROUTES"]),
            ]
        })
    ], MabnModule);
    return MabnModule;
}());



/***/ })

}]);