(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adjutant-branch-management-adjutant-module"],{

/***/ "+9KW":
/*!**************************************************************************!*\
  !*** ./src/app/main/admin/adjutant-branch-management/adjutant.routes.ts ***!
  \**************************************************************************/
/*! exports provided: ADJUTANT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADJUTANT_ROUTES", function() { return ADJUTANT_ROUTES; });
var ADJUTANT_ROUTES = [
    // Guard for Modules
    { path: 'aro', loadChildren: function () { return __webpack_require__.e(/*! import() | adjutant-branch-ARO-aro-module */ "ARO-aro-module").then(__webpack_require__.bind(null, /*! ../../adjutant-branch/ARO/aro.module */ "Az1k")).then(function (m) { return m.AroModule; }); } },
    { path: 'adjutant-order', loadChildren: function () { return __webpack_require__.e(/*! import() | adjutant-branch-officers-MS-adjutant-orders-adjutant-order-module */ "officers-MS-adjutant-orders-adjutant-order-module").then(__webpack_require__.bind(null, /*! ../../adjutant-branch/officers-MS/adjutant orders/adjutant-order.module */ "+kd4")).then(function (m) { return m.AdjutantOrderModule; }); } },
    { path: 'drill-competition', loadChildren: function () { return __webpack_require__.e(/*! import() | adjutant-branch-drill-competition-drill-comp-module */ "drill-competition-drill-comp-module").then(__webpack_require__.bind(null, /*! ../../adjutant-branch/drill-competition/drill-comp.module */ "KjJa")).then(function (m) { return m.DrillCompModule; }); } },
];


/***/ }),

/***/ "r9Jt":
/*!**************************************************************************!*\
  !*** ./src/app/main/admin/adjutant-branch-management/adjutant.module.ts ***!
  \**************************************************************************/
/*! exports provided: AdjutantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjutantModule", function() { return AdjutantModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _adjutant_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adjutant.routes */ "+9KW");
/* harmony import */ var _admin_dialog_admin_dialog_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-dialog/admin-dialog.module */ "fMwf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdjutantModule = /** @class */ (function () {
    function AdjutantModule() {
    }
    AdjutantModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_adjutant_routes__WEBPACK_IMPORTED_MODULE_4__["ADJUTANT_ROUTES"]),
                _admin_dialog_admin_dialog_module__WEBPACK_IMPORTED_MODULE_5__["AdminDialogModule"]
            ]
        })
    ], AdjutantModule);
    return AdjutantModule;
}());



/***/ })

}]);