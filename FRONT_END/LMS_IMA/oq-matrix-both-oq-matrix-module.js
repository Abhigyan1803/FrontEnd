(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oq-matrix-both-oq-matrix-module"],{

/***/ "5vSE":
/*!************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/assessment/oq-matrix-both/oq-matrix.module.ts ***!
  \************************************************************************************************/
/*! exports provided: OQModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OQModule", function() { return OQModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _oq_matrix_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oq-matrix.routes */ "bdDR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OQModule = /** @class */ (function () {
    function OQModule() {
    }
    OQModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_oq_matrix_routes__WEBPACK_IMPORTED_MODULE_4__["OQ_ROUTES"]),
            ]
        })
    ], OQModule);
    return OQModule;
}());



/***/ }),

/***/ "bdDR":
/*!************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/assessment/oq-matrix-both/oq-matrix.routes.ts ***!
  \************************************************************************************************/
/*! exports provided: OQ_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OQ_ROUTES", function() { return OQ_ROUTES; });
var OQ_ROUTES = [
    // Guard for Modules
    { path: 'Final-Term', loadChildren: function () { return __webpack_require__.e(/*! import() | oq-final-oq-final-module */ "oq-final-oq-final-module").then(__webpack_require__.bind(null, /*! ./oq-final/oq-final.module */ "fPsh")).then(function (m) { return m.OQFinalModule; }); } },
    { path: 'Mid-Term', loadChildren: function () { return __webpack_require__.e(/*! import() | oq-matrix-oq-matrix-module */ "oq-matrix-oq-matrix-module").then(__webpack_require__.bind(null, /*! ./oq-matrix/oq-matrix.module */ "M9WF")).then(function (m) { return m.OQMatrixModule; }); } },
];


/***/ })

}]);