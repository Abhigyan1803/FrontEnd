(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intellectual-intellectual-module"],{

/***/ "tAfo":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/assessment/intellectual/intellectual.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: INTELLECModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTELLECModule", function() { return INTELLECModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _intellectual_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intellectual.routes */ "xP+M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var INTELLECModule = /** @class */ (function () {
    function INTELLECModule() {
    }
    INTELLECModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_intellectual_routes__WEBPACK_IMPORTED_MODULE_4__["INTELLEC_ROUTES"]),
            ]
        })
    ], INTELLECModule);
    return INTELLECModule;
}());



/***/ }),

/***/ "xP+M":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/assessment/intellectual/intellectual.routes.ts ***!
  \*************************************************************************************************/
/*! exports provided: INTELLEC_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTELLEC_ROUTES", function() { return INTELLEC_ROUTES; });
var INTELLEC_ROUTES = [
    // Guard for Modules
    { path: 'Final-Term', loadChildren: function () { return __webpack_require__.e(/*! import() | intellectual-skills-intellectual-skills-module */ "intellectual-skills-intellectual-skills-module").then(__webpack_require__.bind(null, /*! ./intellectual-skills/intellectual-skills.module */ "jOcs")).then(function (m) { return m.IntellectualSkillsModule; }); } },
    { path: 'Mid-Term', loadChildren: function () { return __webpack_require__.e(/*! import() | mid-intellectual-mid-intellectual-module */ "mid-intellectual-mid-intellectual-module").then(__webpack_require__.bind(null, /*! ./mid-intellectual/mid-intellectual.module */ "6a9H")).then(function (m) { return m.MidIntellectualModule; }); } },
];


/***/ })

}]);