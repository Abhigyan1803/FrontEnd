(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ed-index-ed-index-module"],{

/***/ "mu+L":
/*!*******************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-index.routing.ts ***!
  \*******************************************************************/
/*! exports provided: ED_INDEX_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ED_INDEX_ROUTES", function() { return ED_INDEX_ROUTES; });
var ED_INDEX_ROUTES = [
    // Guard for Modules
    // { path: '', loadChildren: () => import('./admin-dashboard/adminDash.module').then(m => m.adminDashBoardModule) },
    // { path: '',redirectTo:"Ed-dashboard",pathMatch:"full" },
    // { path: 'Ed-dashboard', loadChildren: () => import('./ed-dashboard/ed-dashboard.module').then(m => m.EdDashboardModule) },
    { path: 'ED-Campmarks', loadChildren: function () { return __webpack_require__.e(/*! import() | ed-campmark-ed-campmark-module */ "ed-campmark-ed-campmark-module").then(__webpack_require__.bind(null, /*! ./ed-campmark/ed-campmark.module */ "fKe1")).then(function (m) { return m.EDCampMarksModule; }); } },
    { path: 'OverallAssessment', loadChildren: function () { return __webpack_require__.e(/*! import() | Overall-Assessment-overall-module */ "Overall-Assessment-overall-module").then(__webpack_require__.bind(null, /*! ./Overall-Assessment/overall.module */ "vWyp")).then(function (m) { return m.OVERALLModule; }); } },
    { path: 'ED-Cadetdetails', loadChildren: function () { return __webpack_require__.e(/*! import() | ed-cadetdetails-ed-cadetdetails-module */ "ed-cadetdetails-ed-cadetdetails-module").then(__webpack_require__.bind(null, /*! ./ed-cadetdetails/ed-cadetdetails.module */ "AjgR")).then(function (m) { return m.EDCadetdetailsModule; }); } },
    { path: 'Otherdetails', loadChildren: function () { return __webpack_require__.e(/*! import() | Otherdetails-Otherdetails-module */ "Otherdetails-Otherdetails-module").then(__webpack_require__.bind(null, /*! ./Otherdetails/Otherdetails.module */ "iaN+")).then(function (m) { return m.OtherdetailsModule; }); } },
    { path: 'Obsnsheet', loadChildren: function () { return __webpack_require__.e(/*! import() | Obsn-sheet-Obsn-sheet-module */ "Obsn-sheet-Obsn-sheet-module").then(__webpack_require__.bind(null, /*! ./Obsn-sheet/Obsn-sheet.module */ "Qha9")).then(function (m) { return m.ObsnsheetModule; }); } },
    //  { path: 'Counselling', loadChildren: () => import('./Counselling/Counselling.module').then(m => m.CounsellingModule) },
    { path: 'Interviews', loadChildren: function () { return __webpack_require__.e(/*! import() | interviews-interviews-module */ "interviews-interviews-module").then(__webpack_require__.bind(null, /*! ./interviews/interviews.module */ "YgYd")).then(function (m) { return m.InterviewsModule; }); } },
    { path: 'ed-Counselling', loadChildren: function () { return Promise.all(/*! import() | ed-counselling-ed-counselling-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("ed-counselling-ed-counselling-module")]).then(__webpack_require__.bind(null, /*! ./ed-counselling/ed-counselling.module */ "kxmE")).then(function (m) { return m.EdCounsellingModule; }); } },
];


/***/ }),

/***/ "nUU7":
/*!******************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-index.module.ts ***!
  \******************************************************************/
/*! exports provided: EDINDEXModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDINDEXModule", function() { return EDINDEXModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ed_index_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ed-index.routing */ "mu+L");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { InterviewSheetComponent } from './interviews/interview-sheet/interview-sheet.component';
var EDINDEXModule = /** @class */ (function () {
    function EDINDEXModule() {
    }
    EDINDEXModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
            // ClubComponent,
            //       HikeComponent,
            //       LveComponent,
            //       CounsellingComponent,
            // InterviewSheetComponent
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_ed_index_routing__WEBPACK_IMPORTED_MODULE_4__["ED_INDEX_ROUTES"]),
            ]
        })
    ], EDINDEXModule);
    return EDINDEXModule;
}());



/***/ })

}]);