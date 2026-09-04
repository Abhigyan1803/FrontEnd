(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hall-of-fame-hall-of-fame-module"],{

/***/ "EREU":
/*!*********************************************************************!*\
  !*** ./src/app/main/admin/home/hall-of-fame/hall-of-fame.routes.ts ***!
  \*********************************************************************/
/*! exports provided: HALL_OF_FAME_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HALL_OF_FAME_ROUTES", function() { return HALL_OF_FAME_ROUTES; });
var HALL_OF_FAME_ROUTES = [
    // Guard for Modules
    // { path: '', loadChildren: () => import('./admin-dashboard/adminDash.module').then(m => m.adminDashBoardModule) },
    { path: 'gallantry-awardees', loadChildren: function () { return __webpack_require__.e(/*! import() | gallantry-awards-gallantry-awards-module */ "gallantry-awards-gallantry-awards-module").then(__webpack_require__.bind(null, /*! ./gallantry-awards/gallantry-awards.module */ "Rxzo")).then(function (m) { return m.GallantryAwardsModule; }); } },
];


/***/ }),

/***/ "NBFO":
/*!*********************************************************************!*\
  !*** ./src/app/main/admin/home/hall-of-fame/hall-of-fame.module.ts ***!
  \*********************************************************************/
/*! exports provided: HallOfFameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallOfFameModule", function() { return HallOfFameModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _hall_of_fame_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hall-of-fame.routes */ "EREU");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HallOfFameModule = /** @class */ (function () {
    function HallOfFameModule() {
    }
    HallOfFameModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_hall_of_fame_routes__WEBPACK_IMPORTED_MODULE_4__["HALL_OF_FAME_ROUTES"]),
            ]
        })
    ], HallOfFameModule);
    return HallOfFameModule;
}());



/***/ })

}]);