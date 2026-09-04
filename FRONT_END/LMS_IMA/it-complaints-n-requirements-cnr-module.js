(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["it-complaints-n-requirements-cnr-module"],{

/***/ "XlcG":
/*!***************************************************************************!*\
  !*** ./src/app/main/gs-branch/it/complaints-n-requirements/cnr.module.ts ***!
  \***************************************************************************/
/*! exports provided: CNRModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CNRModule", function() { return CNRModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _cnr_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cnr.routes */ "cJoL");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CNRModule = /** @class */ (function () {
    function CNRModule() {
    }
    CNRModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_cnr_routes__WEBPACK_IMPORTED_MODULE_4__["CNR_ROUTES"]),
            ]
        })
    ], CNRModule);
    return CNRModule;
}());



/***/ }),

/***/ "cJoL":
/*!***************************************************************************!*\
  !*** ./src/app/main/gs-branch/it/complaints-n-requirements/cnr.routes.ts ***!
  \***************************************************************************/
/*! exports provided: CNR_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CNR_ROUTES", function() { return CNR_ROUTES; });
var CNR_ROUTES = [
    // Guard for Modules
    { path: 'it', loadChildren: function () { return __webpack_require__.e(/*! import() | it-complaints-it-complaints-module */ "it-complaints-it-complaints-module").then(__webpack_require__.bind(null, /*! ./it-complaints/it-complaints.module */ "QcpU")).then(function (m) { return m.ItComplaintsModule; }); } },
    { path: 'communication', loadChildren: function () { return __webpack_require__.e(/*! import() | communication-complaints-communication-complaints-module */ "communication-complaints-communication-complaints-module").then(__webpack_require__.bind(null, /*! ./communication-complaints/communication-complaints.module */ "O6LQ")).then(function (m) { return m.CommunicationComplaintsModule; }); } },
    { path: 'it-gcComplaint', loadChildren: function () { return Promise.all(/*! import() | gc-complaint-gc-complaint-module */[__webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("gc-complaint-gc-complaint-module")]).then(__webpack_require__.bind(null, /*! ./gc-complaint/gc-complaint.module */ "fyGv")).then(function (m) { return m.GcComplaintModule; }); } }
];


/***/ })

}]);