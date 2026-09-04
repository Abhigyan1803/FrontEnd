(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drill-comp-drill-comp-module"],{

/***/ "nX2Q":
/*!**********************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-comp/drill-comp.module.ts ***!
  \**********************************************************************/
/*! exports provided: DrillCompModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrillCompModule", function() { return DrillCompModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _drill_comp_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drill-comp.routes */ "ogjK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DrillCompModule = /** @class */ (function () {
    function DrillCompModule() {
    }
    DrillCompModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_drill_comp_routes__WEBPACK_IMPORTED_MODULE_3__["DRILL_COMP_ROUTES"]),
            ]
        })
    ], DrillCompModule);
    return DrillCompModule;
}());



/***/ }),

/***/ "ogjK":
/*!**********************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-comp/drill-comp.routes.ts ***!
  \**********************************************************************/
/*! exports provided: DRILL_COMP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRILL_COMP_ROUTES", function() { return DRILL_COMP_ROUTES; });
var DRILL_COMP_ROUTES = [
    { path: ':type', loadChildren: function () { return __webpack_require__.e(/*! import() | shedule-shedule-module */ "shedule-shedule-module").then(__webpack_require__.bind(null, /*! ./shedule/shedule.module */ "dTP8")).then(function (m) { return m.SheduleModule; }); } },
];


/***/ })

}]);