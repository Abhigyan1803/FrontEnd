(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["curricular-activities-curricular-module"],{

/***/ "yNbf":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/General-Instruction/curricular-activities/curricular.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CurricularModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurricularModule", function() { return CurricularModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _curricular_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./curricular.routes */ "zhd7");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CurricularModule = /** @class */ (function () {
    function CurricularModule() {
    }
    CurricularModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_curricular_routes__WEBPACK_IMPORTED_MODULE_4__["CURRICULAR_ROUTES"]),
            ]
        })
    ], CurricularModule);
    return CurricularModule;
}());



/***/ }),

/***/ "zhd7":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/General-Instruction/curricular-activities/curricular.routes.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CURRICULAR_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRICULAR_ROUTES", function() { return CURRICULAR_ROUTES; });
var CURRICULAR_ROUTES = [
    // Guard for Modules
    { path: 'cyber', loadChildren: function () { return __webpack_require__.e(/*! import() | cyber-cyber-module */ "cyber-cyber-module").then(__webpack_require__.bind(null, /*! ./cyber/cyber.module */ "io19")).then(function (m) { return m.CyberModule; }); } },
    { path: 'english', loadChildren: function () { return __webpack_require__.e(/*! import() | english-deb-english-deb-module */ "english-deb-english-deb-module").then(__webpack_require__.bind(null, /*! ./english-deb/english-deb.module */ "Dv5+")).then(function (m) { return m.EnglishDebModule; }); } },
    { path: 'hindi', loadChildren: function () { return __webpack_require__.e(/*! import() | hindi-deb-hindi-deb-module */ "hindi-deb-hindi-deb-module").then(__webpack_require__.bind(null, /*! ./hindi-deb/hindi-deb.module */ "MdJk")).then(function (m) { return m.HindiDebModule; }); } },
    { path: 'ppt', loadChildren: function () { return Promise.all(/*! import() | ppt-ppt-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("ppt-ppt-module")]).then(__webpack_require__.bind(null, /*! ./ppt/ppt.module */ "q8O+")).then(function (m) { return m.PptModule; }); } },
    { path: 'quiz', loadChildren: function () { return __webpack_require__.e(/*! import() | quiz-quiz-module */ "quiz-quiz-module").then(__webpack_require__.bind(null, /*! ./quiz/quiz.module */ "1HyL")).then(function (m) { return m.QuizModule; }); } },
];


/***/ })

}]);