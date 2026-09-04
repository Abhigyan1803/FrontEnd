(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ed-campmark-ed-campmark-module"],{

/***/ "G/ES":
/*!*********************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-campmark/ed-campmark.routes.ts ***!
  \*********************************************************************************/
/*! exports provided: EDCAMPMARKS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDCAMPMARKS_ROUTES", function() { return EDCAMPMARKS_ROUTES; });
var EDCAMPMARKS_ROUTES = [
    // Guard for Modules
    // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'campmarks', loadChildren: function () { return __webpack_require__.e(/*! import() | campmarks-campmarks-module */ "campmarks-campmarks-module").then(__webpack_require__.bind(null, /*! ./campmarks/campmarks.module */ "LHqW")).then(function (m) { return m.CampmarksModule; }); } },
    { path: 'assessment-matrix', loadChildren: function () { return Promise.all(/*! import() | assessment-matrix-assessment-matrix-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("assessment-matrix-assessment-matrix-module")]).then(__webpack_require__.bind(null, /*! ./assessment-matrix/assessment-matrix.module */ "xENg")).then(function (m) { return m.AssessmentMatrixModule; }); } },
];


/***/ }),

/***/ "fKe1":
/*!*********************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-campmark/ed-campmark.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EDCampMarksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDCampMarksModule", function() { return EDCampMarksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ed_campmark_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ed-campmark.routes */ "G/ES");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EDCampMarksModule = /** @class */ (function () {
    function EDCampMarksModule() {
    }
    EDCampMarksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_ed_campmark_routes__WEBPACK_IMPORTED_MODULE_4__["EDCAMPMARKS_ROUTES"]),
            ]
        })
    ], EDCampMarksModule);
    return EDCampMarksModule;
}());



/***/ })

}]);