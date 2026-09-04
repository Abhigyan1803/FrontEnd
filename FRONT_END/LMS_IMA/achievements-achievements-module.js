(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["achievements-achievements-module"],{

/***/ "S3Zc":
/*!**************************************************************************!*\
  !*** ./src/app/main/academic-depart/achievements/achievements.module.ts ***!
  \**************************************************************************/
/*! exports provided: AchievementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementsModule", function() { return AchievementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _achievements_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./achievements.routes */ "aXTF");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AchievementsModule = /** @class */ (function () {
    function AchievementsModule() {
    }
    AchievementsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_achievements_routes__WEBPACK_IMPORTED_MODULE_4__["ACHIEVEMENTS_ROUTES"]),
            ]
        })
    ], AchievementsModule);
    return AchievementsModule;
}());



/***/ }),

/***/ "aXTF":
/*!**************************************************************************!*\
  !*** ./src/app/main/academic-depart/achievements/achievements.routes.ts ***!
  \**************************************************************************/
/*! exports provided: ACHIEVEMENTS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACHIEVEMENTS_ROUTES", function() { return ACHIEVEMENTS_ROUTES; });
var ACHIEVEMENTS_ROUTES = [
    // Guard for Modules
    { path: 'awards', loadChildren: function () { return __webpack_require__.e(/*! import() | achievement-award-achievement-award-module */ "achievement-award-achievement-award-module").then(__webpack_require__.bind(null, /*! ./achievement-award/achievement-award.module */ "yU9c")).then(function (m) { return m.AchievementAwardModule; }); } },
    { path: 'book', loadChildren: function () { return __webpack_require__.e(/*! import() | book-prize-book-prize-module */ "book-prize-book-prize-module").then(__webpack_require__.bind(null, /*! ./book-prize/book-prize.module */ "MVlo")).then(function (m) { return m.BookModule; }); } },
];


/***/ })

}]);