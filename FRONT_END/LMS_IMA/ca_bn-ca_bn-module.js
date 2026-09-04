(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ca_bn-ca_bn-module"],{

/***/ "2/0j":
/*!************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/ca_bn/ca_bn.module.ts ***!
  \************************************************************************/
/*! exports provided: CabnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabnModule", function() { return CabnModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ca_bn_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ca_bn.routes */ "yu7Z");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CabnModule = /** @class */ (function () {
    function CabnModule() {
    }
    CabnModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_ca_bn_routes__WEBPACK_IMPORTED_MODULE_4__["CA_BN_ROUTES"]),
            ]
        })
    ], CabnModule);
    return CabnModule;
}());



/***/ }),

/***/ "yu7Z":
/*!************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/ca_bn/ca_bn.routes.ts ***!
  \************************************************************************/
/*! exports provided: CA_BN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CA_BN_ROUTES", function() { return CA_BN_ROUTES; });
var CA_BN_ROUTES = [
    // Guard for Modules
    { path: 'counsellors-kohima', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-kohima-counsellors-kohima-module */ "counsellors-kohima-counsellors-kohima-module").then(__webpack_require__.bind(null, /*! ./counsellors-kohima/counsellors-kohima.module */ "AKLL")).then(function (m) { return m.CounsellorsKohimaModule; }); } },
    { path: 'counsellors-naushera', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-naushera-counsellors-naushera-module */ "counsellors-naushera-counsellors-naushera-module").then(__webpack_require__.bind(null, /*! ./counsellors-naushera/counsellors-naushera.module */ "XaHs")).then(function (m) { return m.CounsellorsNausheraModule; }); } },
    { path: 'counsellors-poonach', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-poonach-counsellors-poonach-module */ "counsellors-poonach-counsellors-poonach-module").then(__webpack_require__.bind(null, /*! ./counsellors-poonach/counsellors-poonach.module */ "N3xF")).then(function (m) { return m.CounsellorsPoonachModule; }); } },
    { path: 'counsellors-hajipir', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-hajipir-counsellors-hajipir-module */ "counsellors-hajipir-counsellors-hajipir-module").then(__webpack_require__.bind(null, /*! ./counsellors-hajipir/counsellors-hajipir.module */ "lwd8")).then(function (m) { return m.CounsellorsHajipirModule; }); } },
];


/***/ })

}]);