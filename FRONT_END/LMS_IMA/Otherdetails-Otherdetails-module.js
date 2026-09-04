(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Otherdetails-Otherdetails-module"],{

/***/ "iaN+":
/*!***********************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Otherdetails/Otherdetails.module.ts ***!
  \***********************************************************************************/
/*! exports provided: OtherdetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherdetailsModule", function() { return OtherdetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _otherdetails_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./otherdetails.routes */ "oDLy");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OtherdetailsModule = /** @class */ (function () {
    function OtherdetailsModule() {
    }
    OtherdetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_otherdetails_routes__WEBPACK_IMPORTED_MODULE_4__["OTHERDETAILS_ROUTES"]),
            ]
        })
    ], OtherdetailsModule);
    return OtherdetailsModule;
}());



/***/ }),

/***/ "oDLy":
/*!***********************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Otherdetails/otherdetails.routes.ts ***!
  \***********************************************************************************/
/*! exports provided: OTHERDETAILS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTHERDETAILS_ROUTES", function() { return OTHERDETAILS_ROUTES; });
var OTHERDETAILS_ROUTES = [
    // Guard for Modules
    // { path: '', loadChildren: () => import('./admin-dashboard/adminDash.module').then(m => m.adminDashBoardModule) },
    // { path: '',redirectTo:"Ed-dashboard",pathMatch:"full" },
    // { path: 'Ed-dashboard', loadChildren: () => import('./ed-dashboard/ed-dashboard.module').then(m => m.EdDashboardModule) },
    { path: 'club', loadChildren: function () { return Promise.all(/*! import() | club-club-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("club-club-module")]).then(__webpack_require__.bind(null, /*! ./club/club.module */ "rEil")).then(function (m) { return m.ClubModule; }); } },
    { path: 'hike', loadChildren: function () { return Promise.all(/*! import() | hike-hike-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("hike-hike-module")]).then(__webpack_require__.bind(null, /*! ./hike/hike.module */ "9E9g")).then(function (m) { return m.HikeModule; }); } },
    { path: 'lve', loadChildren: function () { return Promise.all(/*! import() | lve-lve-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("lve-lve-module")]).then(__webpack_require__.bind(null, /*! ./lve/lve.module */ "V5cC")).then(function (m) { return m.LveModule; }); } },
];


/***/ })

}]);