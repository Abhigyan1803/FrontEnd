(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Obsn-sheet-Obsn-sheet-module"],{

/***/ "Qha9":
/*!*******************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Obsn-sheet/Obsn-sheet.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ObsnsheetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObsnsheetModule", function() { return ObsnsheetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _Obsn_sheet_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Obsn-sheet.routes */ "VZs6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ObsnsheetModule = /** @class */ (function () {
    function ObsnsheetModule() {
    }
    ObsnsheetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_Obsn_sheet_routes__WEBPACK_IMPORTED_MODULE_4__["OBSN_SHEET_ROUTES"]),
            ]
        })
    ], ObsnsheetModule);
    return ObsnsheetModule;
}());



/***/ }),

/***/ "VZs6":
/*!*******************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Obsn-sheet/Obsn-sheet.routes.ts ***!
  \*******************************************************************************/
/*! exports provided: OBSN_SHEET_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBSN_SHEET_ROUTES", function() { return OBSN_SHEET_ROUTES; });
var OBSN_SHEET_ROUTES = [
    // Guard for Modules
    // { path: '', loadChildren: () => import('./admin-dashboard/adminDash.module').then(m => m.adminDashBoardModule) },
    // { path: '',redirectTo:"Ed-dashboard",pathMatch:"full" },
    // { path: 'Ed-dashboard', loadChildren: () => import('./ed-dashboard/ed-dashboard.module').then(m => m.EdDashboardModule) },
    { path: 'obsn', loadChildren: function () { return Promise.all(/*! import() | obsn-obsn-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("obsn-obsn-module")]).then(__webpack_require__.bind(null, /*! ./obsn/obsn.module */ "UOHh")).then(function (m) { return m.ObsnModule; }); } },
];


/***/ })

}]);