(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BMT-1-Bmt1-module"],{

/***/ "0nFp":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/Bmt1.routing.ts ***!
  \*****************************************************************************************/
/*! exports provided: BMT1_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BMT1_ROUTES", function() { return BMT1_ROUTES; });
var BMT1_ROUTES = [
    // Guard for Modules
    // { path: 'confirmation-mark', loadChildren: () => import('./confirmation-mark/confirmation-mark.module').then(m => m.ConfirmationMarkModule) },
    // { path: 'general-instruction', loadChildren: () => import('./general-instruction/general-instruction.module').then(m => m.GeneralInstructionModule) },
    // { path: 'resp-eval', loadChildren: () => import('./resp-eval/resp-eval.module').then(m => m.RespEvalModule) },
    // { path: 'retest', loadChildren: () => import('./retest/retest.module').then(m => m.RetestModule) },
    { path: ':subType', loadChildren: function () { return Promise.all(/*! import() | exam-schedule-exam-schedule-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("exam-schedule-exam-schedule-module")]).then(__webpack_require__.bind(null, /*! ./exam-schedule/exam-schedule.module */ "Fle/")).then(function (m) { return m.ExamScheduleModule; }); } },
    { path: 'assesment', loadChildren: function () { return __webpack_require__.e(/*! import() | Assessment-bmt1-assessment-module */ "Assessment-bmt1-assessment-module").then(__webpack_require__.bind(null, /*! ./Assessment/bmt1-assessment.module */ "Bdt2")).then(function (m) { return m.BMT1ASSESSMENTModule; }); } },
];


/***/ }),

/***/ "CHT/":
/*!****************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/Bmt1.module.ts ***!
  \****************************************************************************************/
/*! exports provided: BMT1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BMT1Module", function() { return BMT1Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Bmt1_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Bmt1.routing */ "0nFp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BMT1Module = /** @class */ (function () {
    function BMT1Module() {
    }
    BMT1Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_Bmt1_routing__WEBPACK_IMPORTED_MODULE_4__["BMT1_ROUTES"]),
            ]
        })
    ], BMT1Module);
    return BMT1Module;
}());



/***/ })

}]);