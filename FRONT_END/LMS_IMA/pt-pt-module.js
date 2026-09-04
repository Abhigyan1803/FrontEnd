(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pt-pt-module"],{

/***/ "aDN3":
/*!***********************************************!*\
  !*** ./src/app/main/trg-team/pt/pt.module.ts ***!
  \***********************************************/
/*! exports provided: PtModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PtModule", function() { return PtModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _pt_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pt.routes */ "bc8+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { PtComponent } from './pt.component';





var PtModule = /** @class */ (function () {
    function PtModule() {
    }
    PtModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pt_routes__WEBPACK_IMPORTED_MODULE_8__["PT_Routes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
            ]
        })
    ], PtModule);
    return PtModule;
}());



/***/ }),

/***/ "bc8+":
/*!***********************************************!*\
  !*** ./src/app/main/trg-team/pt/pt.routes.ts ***!
  \***********************************************/
/*! exports provided: PT_Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PT_Routes", function() { return PT_Routes; });
var PT_Routes = [
    { path: 'IPET', loadChildren: function () { return Promise.all(/*! import() | ipet-ipet-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("ipet-ipet-module")]).then(__webpack_require__.bind(null, /*! ./ipet/ipet.module */ "vgXX")).then(function (m) { return m.IpetModule; }); } },
    { path: 'PPT', loadChildren: function () { return Promise.all(/*! import() | ppt-ppt-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("ppt-ppt-module")]).then(__webpack_require__.bind(null, /*! ./ppt/ppt.module */ "kquw")).then(function (m) { return m.PptModule; }); } },
    { path: 'SWM', loadChildren: function () { return Promise.all(/*! import() | swm-swm-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("swm-swm-module")]).then(__webpack_require__.bind(null, /*! ./swm/swm.module */ "zjeY")).then(function (m) { return m.SwmModule; }); } },
    { path: 'BPET', loadChildren: function () { return Promise.all(/*! import() | bpet-bpet-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("bpet-bpet-module")]).then(__webpack_require__.bind(null, /*! ./bpet/bpet.module */ "/i0S")).then(function (m) { return m.BpetModule; }); } },
    { path: 'CTOT', loadChildren: function () { return Promise.all(/*! import() | ctot-ctot-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("ctot-ctot-module")]).then(__webpack_require__.bind(null, /*! ./ctot/ctot.module */ "EDui")).then(function (m) { return m.CtotModule; }); } },
    { path: 'SOT', loadChildren: function () { return Promise.all(/*! import() | sot-sot-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("sot-sot-module")]).then(__webpack_require__.bind(null, /*! ./sot/sot.module */ "UiDx")).then(function (m) { return m.SotModule; }); } },
    { path: 'ROT', loadChildren: function () { return Promise.all(/*! import() | rot-rot-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("rot-rot-module")]).then(__webpack_require__.bind(null, /*! ./rot/rot.module */ "Qcwy")).then(function (m) { return m.RotModule; }); } },
];


/***/ })

}]);