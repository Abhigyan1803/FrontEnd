(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["e-dossier-ed-content-dossier-module"],{

/***/ "5pat":
/*!********************************************************!*\
  !*** ./src/app/e-dossier/ed-content/dossier.module.ts ***!
  \********************************************************/
/*! exports provided: DossierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DossierModule", function() { return DossierModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _dossier_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dossier.routes */ "hgw/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DossierModule = /** @class */ (function () {
    function DossierModule() {
    }
    DossierModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dossier_routes__WEBPACK_IMPORTED_MODULE_4__["Dossier_ROUTES"]),
            ]
        })
    ], DossierModule);
    return DossierModule;
}());



/***/ }),

/***/ "hgw/":
/*!********************************************************!*\
  !*** ./src/app/e-dossier/ed-content/dossier.routes.ts ***!
  \********************************************************/
/*! exports provided: Dossier_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dossier_ROUTES", function() { return Dossier_ROUTES; });
var Dossier_ROUTES = [
    // Guard for Modules
    // { path: '', loadChildren: () => import('./admin-dashboard/adminDash.module').then(m => m.adminDashBoardModule) },
    { path: '', redirectTo: "Ed-dashboard", pathMatch: "full" },
    { path: 'Ed-dashboard', loadChildren: function () { return Promise.all(/*! import() | ed-dashboard-ed-dashboard-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("ed-dashboard-ed-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./ed-dashboard/ed-dashboard.module */ "j0k1")).then(function (m) { return m.EdDashboardModule; }); } },
    { path: 'Ed-menu', loadChildren: function () { return Promise.all(/*! import() | ed-menu-ed-menu-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("ed-menu-ed-menu-module")]).then(__webpack_require__.bind(null, /*! ./ed-menu/ed-menu.module */ "aPSD")).then(function (m) { return m.EdMenuModule; }); } },
    { path: 'Ed-index', loadChildren: function () { return __webpack_require__.e(/*! import() | ed-index-ed-index-module */ "ed-index-ed-index-module").then(__webpack_require__.bind(null, /*! ./ed-index/ed-index.module */ "nUU7")).then(function (m) { return m.EDINDEXModule; }); } },
];


/***/ })

}]);