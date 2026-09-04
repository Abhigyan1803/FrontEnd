(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-delay-dashboard-delay-dashboard-module"],{

/***/ "6Gqf":
/*!***************************************************************!*\
  !*** ./src/app/main/delay-dashboard/delay-dashboard.route.ts ***!
  \***************************************************************/
/*! exports provided: DELAY_DASHBOARD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELAY_DASHBOARD", function() { return DELAY_DASHBOARD; });
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/not-found.component */ "JDCa");

var DELAY_DASHBOARD = [
    // Guard for Modules
    { path: '', redirectTo: 'training-team/I Term', pathMatch: 'full' },
    { path: 'training-team/:term', loadChildren: function () { return Promise.all(/*! import() | training-team-training-team-module */[__webpack_require__.e("common"), __webpack_require__.e("training-team-training-team-module")]).then(__webpack_require__.bind(null, /*! ./training-team/training-team.module */ "e6D8")).then(function (m) { return m.TrainingTeamModule; }); } },
    { path: 'training-battalion/:term', loadChildren: function () { return Promise.all(/*! import() | training-battalion-training-battalion-module */[__webpack_require__.e("common"), __webpack_require__.e("training-battalion-training-battalion-module")]).then(__webpack_require__.bind(null, /*! ./training-battalion/training-battalion.module */ "mb95")).then(function (m) { return m.TrainingBattalionModule; }); } },
    { path: 'academic-department/:term', loadChildren: function () { return Promise.all(/*! import() | academic-department-academic-department-module */[__webpack_require__.e("common"), __webpack_require__.e("academic-department-academic-department-module")]).then(__webpack_require__.bind(null, /*! ./academic-department/academic-department.module */ "hQnZ")).then(function (m) { return m.AcademicDepartmentModule; }); } },
    { path: 'adjutant-branch/:term', loadChildren: function () { return Promise.all(/*! import() | adjutant-branch-adjutant-branch-module */[__webpack_require__.e("common"), __webpack_require__.e("adjutant-branch-adjutant-branch-module")]).then(__webpack_require__.bind(null, /*! ./adjutant-branch/adjutant-branch.module */ "uT12")).then(function (m) { return m.AdjutantBranchModule; }); } },
    { path: 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"] }
];


/***/ }),

/***/ "Itoh":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/delay-dashboard/not-found/not-found.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <mat-card class=\"m-4 p-2 \">\n        <div class=\"text-center\">\n            <h1>Page Not Found!</h1>\n        </div>\n        <div class=\"text-center\">\n            <h5>The page you request was not found.</h5>\n        </div>\n        <div>\n            <h5>\n                <a href=\"javascript:void(0)\" (click)=\"goBack()\">\n                    Go Back\n                </a>\n            </h5>\n        </div>\n\n    </mat-card>\n</div>");

/***/ }),

/***/ "JDCa":
/*!***********************************************************************!*\
  !*** ./src/app/main/delay-dashboard/not-found/not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./not-found.component.html */ "Itoh");
/* harmony import */ var _not_found_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component.scss */ "fwhF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.prototype.goBack = function () {
        history.go(-2);
    };
    NotFoundComponent.ctorParameters = function () { return []; };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-not-found',
            template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_not_found_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "aDpi":
/*!****************************************************************!*\
  !*** ./src/app/main/delay-dashboard/delay-dashboard.module.ts ***!
  \****************************************************************/
/*! exports provided: DelayDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayDashboardModule", function() { return DelayDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _delay_dashboard_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delay-dashboard.route */ "6Gqf");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "JDCa");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DelayDashboardModule = /** @class */ (function () {
    function DelayDashboardModule() {
    }
    DelayDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_delay_dashboard_route__WEBPACK_IMPORTED_MODULE_3__["DELAY_DASHBOARD"]),
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], DelayDashboardModule);
    return DelayDashboardModule;
}());

/**
 * module id: 1 for trg team
 * module id: 2 for trg battalion
 * module id: 4 for academic department
 * module id: 12 for adjutant branch
 */ 


/***/ }),

/***/ "fwhF":
/*!*************************************************************************!*\
  !*** ./src/app/main/delay-dashboard/not-found/not-found.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);