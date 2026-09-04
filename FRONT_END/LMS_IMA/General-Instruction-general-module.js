(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["General-Instruction-general-module"],{

/***/ "2qAk":
/*!****************************************************************************!*\
  !*** ./src/app/main/academic-depart/General-Instruction/general.module.ts ***!
  \****************************************************************************/
/*! exports provided: GeneralModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralModule", function() { return GeneralModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _general_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general.routes */ "xuWr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GeneralModule = /** @class */ (function () {
    function GeneralModule() {
    }
    GeneralModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_general_routes__WEBPACK_IMPORTED_MODULE_4__["GENERAL_ROUTES"]),
            ]
        })
    ], GeneralModule);
    return GeneralModule;
}());



/***/ }),

/***/ "xuWr":
/*!****************************************************************************!*\
  !*** ./src/app/main/academic-depart/General-Instruction/general.routes.ts ***!
  \****************************************************************************/
/*! exports provided: GENERAL_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERAL_ROUTES", function() { return GENERAL_ROUTES; });
var GENERAL_ROUTES = [
    // Guard for Modules
    { path: 'exam', loadChildren: function () { return __webpack_require__.e(/*! import() | exam-cell-exam-cell-module */ "exam-cell-exam-cell-module").then(__webpack_require__.bind(null, /*! ./exam-cell/exam-cell.module */ "V3in")).then(function (m) { return m.ExamModule; }); } },
    { path: 'hindi', loadChildren: function () { return __webpack_require__.e(/*! import() | hindi-cell-hindi-module */ "hindi-cell-hindi-module").then(__webpack_require__.bind(null, /*! ./hindi-cell/hindi.module */ "ypLc")).then(function (m) { return m.HindiModule; }); } },
    { path: 'curricular', loadChildren: function () { return __webpack_require__.e(/*! import() | curricular-activities-curricular-module */ "curricular-activities-curricular-module").then(__webpack_require__.bind(null, /*! ./curricular-activities/curricular.module */ "yNbf")).then(function (m) { return m.CurricularModule; }); } },
];


/***/ })

}]);