(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["weapons-training-weapon-training-module"],{

/***/ "IcJw":
/*!**************************************************************************!*\
  !*** ./src/app/main/trg-team/weapons-training/weapon-training.module.ts ***!
  \**************************************************************************/
/*! exports provided: WtModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WtModule", function() { return WtModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _weapon_training_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./weapon-training.routes */ "aZ7T");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { PtComponent } from './pt.component';





var WtModule = /** @class */ (function () {
    function WtModule() {
    }
    WtModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_weapon_training_routes__WEBPACK_IMPORTED_MODULE_8__["WT_Routes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
            ]
        })
    ], WtModule);
    return WtModule;
}());



/***/ }),

/***/ "aZ7T":
/*!**************************************************************************!*\
  !*** ./src/app/main/trg-team/weapons-training/weapon-training.routes.ts ***!
  \**************************************************************************/
/*! exports provided: WT_Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WT_Routes", function() { return WT_Routes; });
/* harmony import */ var app_Shared_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/Shared/constant */ "rheE");

var WT_Routes = [
    { path: 'add-exam-param', loadChildren: function () { return Promise.all(/*! import() | trg-team-add-exam-param-add-exam-param-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("add-exam-param-add-exam-param-module")]).then(__webpack_require__.bind(null, /*! ../../trg-team/add-exam-param/add-exam-param.module */ "JI10")).then(function (m) { return m.AddExamParamModule; }); } },
    { path: 'training/:type', loadChildren: function () { return Promise.all(/*! import() | weapons-training-weapons-training-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("weapons-training-weapons-training-module")]).then(__webpack_require__.bind(null, /*! ./weapons-training/weapons-training.module */ "wPnd")).then(function (m) { return m.WeaponsTrainingModule; }); } },
    //.. { path: Routings.trainingResultPath, loadChildren: () => import('./weapons-training/result/result.module').then(m => m.ResultModule) },  
    //.. { path: Routings.finalResultPath, loadChildren: () => import('./weapons-training/final-result/final-result.module').then(m => m.FinalResultModule) },  
    { path: app_Shared_constant__WEBPACK_IMPORTED_MODULE_0__["Routings"].weaponsListPath, loadChildren: function () { return Promise.all(/*! import() | app-main-trg-team-weapons-weapons-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("app-main-trg-team-weapons-weapons-module")]).then(__webpack_require__.bind(null, /*! app/main/trg-team/weapons/weapons.module */ "Xt+l")).then(function (m) { return m.WeaponsModule; }); } },
    { path: app_Shared_constant__WEBPACK_IMPORTED_MODULE_0__["Routings"].addWeaponsPath, loadChildren: function () { return Promise.all(/*! import() | app-main-trg-team-weapons-add-weapons-add-weapons-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("app-main-trg-team-weapons-add-weapons-add-weapons-module")]).then(__webpack_require__.bind(null, /*! app/main/trg-team/weapons/add-weapons/add-weapons.module */ "it4D")).then(function (m) { return m.AddWeaponsModule; }); } },
    { path: app_Shared_constant__WEBPACK_IMPORTED_MODULE_0__["Routings"].editWeaponsPath, loadChildren: function () { return Promise.all(/*! import() | app-main-trg-team-weapons-add-weapons-add-weapons-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("app-main-trg-team-weapons-add-weapons-add-weapons-module")]).then(__webpack_require__.bind(null, /*! app/main/trg-team/weapons/add-weapons/add-weapons.module */ "it4D")).then(function (m) { return m.AddWeaponsModule; }); } },
];


/***/ })

}]);