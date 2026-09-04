(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["th_bn-th_bn-module"],{

/***/ "MM9e":
/*!************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/th_bn/th_bn.module.ts ***!
  \************************************************************************/
/*! exports provided: ThbnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThbnModule", function() { return ThbnModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _th_bn_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./th_bn.routes */ "eMof");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ThbnModule = /** @class */ (function () {
    function ThbnModule() {
    }
    ThbnModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_th_bn_routes__WEBPACK_IMPORTED_MODULE_4__["TH_BN_ROUTES"]),
            ]
        })
    ], ThbnModule);
    return ThbnModule;
}());



/***/ }),

/***/ "eMof":
/*!************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/th_bn/th_bn.routes.ts ***!
  \************************************************************************/
/*! exports provided: TH_BN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TH_BN_ROUTES", function() { return TH_BN_ROUTES; });
var TH_BN_ROUTES = [
    // Guard for Modules
    { path: 'counsellors-meiktila', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-meiktila-counsellors-meiktila-module */ "counsellors-meiktila-counsellors-meiktila-module").then(__webpack_require__.bind(null, /*! ./counsellors-meiktila/counsellors-meiktila.module */ "rvnH")).then(function (m) { return m.CounsellorsMeiktilaModule; }); } },
    { path: 'counsellors-alamein', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-alamein-counsellors-alamein-module */ "counsellors-alamein-counsellors-alamein-module").then(__webpack_require__.bind(null, /*! ./counsellors-alamein/counsellors-alamein.module */ "hH/9")).then(function (m) { return m.CounsellorsAlameinModule; }); } },
    { path: 'counsellors-dograi', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-dograi-counsellors-dograi-module */ "counsellors-dograi-counsellors-dograi-module").then(__webpack_require__.bind(null, /*! ./counsellors-dograi/counsellors-dograi.module */ "1cBS")).then(function (m) { return m.CounsellorsDograiModule; }); } },
    { path: 'counsellors-chushul', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-chushul-counsellors-chushul-module */ "counsellors-chushul-counsellors-chushul-module").then(__webpack_require__.bind(null, /*! ./counsellors-chushul/counsellors-chushul.module */ "RB0O")).then(function (m) { return m.CounsellorsChushulModule; }); } },
];


/***/ })

}]);