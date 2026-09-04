(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["document-checkboard-document-checkboard-module"],{

/***/ "LD9b":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/stats/document-checkboard/document-checkboard.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: DocumentCheckboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentCheckboardModule", function() { return DocumentCheckboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _document_checkboard_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./document-checkboard.routes */ "Ut4M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DocumentCheckboardModule = /** @class */ (function () {
    function DocumentCheckboardModule() {
    }
    DocumentCheckboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_document_checkboard_routes__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT_CHECKBOARD_ROUTES"]),
            ]
        })
    ], DocumentCheckboardModule);
    return DocumentCheckboardModule;
}());



/***/ }),

/***/ "Ut4M":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/stats/document-checkboard/document-checkboard.routes.ts ***!
  \**********************************************************************************************/
/*! exports provided: DOCUMENT_CHECKBOARD_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT_CHECKBOARD_ROUTES", function() { return DOCUMENT_CHECKBOARD_ROUTES; });
var DOCUMENT_CHECKBOARD_ROUTES = [
    // Guard for Modules
    { path: 'aviation-list', loadChildren: function () { return __webpack_require__.e(/*! import() | aviation-list-aviation-list-module */ "aviation-list-aviation-list-module").then(__webpack_require__.bind(null, /*! ./aviation-list/aviation-list.module */ "YXM7")).then(function (m) { return m.AviationListModule; }); } },
    { path: '61-cav-list', loadChildren: function () { return __webpack_require__.e(/*! import() | cav-list-cav-list-module */ "cav-list-cav-list-module").then(__webpack_require__.bind(null, /*! ./cav-list/cav-list.module */ "amsO")).then(function (m) { return m.CavListModule; }); } },
    { path: 'para-list', loadChildren: function () { return __webpack_require__.e(/*! import() | para-list-para-list-module */ "para-list-para-list-module").then(__webpack_require__.bind(null, /*! ./para-list/para-list.module */ "A2mu")).then(function (m) { return m.ParaListModule; }); } },
    { path: 'pc-list', loadChildren: function () { return __webpack_require__.e(/*! import() | pc-list-pc-list-module */ "pc-list-pc-list-module").then(__webpack_require__.bind(null, /*! ./pc-list/pc-list.module */ "9bsR")).then(function (m) { return m.PcListModule; }); } },
    { path: 'pending-confirmation', loadChildren: function () { return __webpack_require__.e(/*! import() | pending-confirmation-pending-confirmation-module */ "pending-confirmation-pending-confirmation-module").then(__webpack_require__.bind(null, /*! ./pending-confirmation/pending-confirmation.module */ "OEag")).then(function (m) { return m.PendingConfirmationModule; }); } },
    { path: 'pending-cvr-cases', loadChildren: function () { return __webpack_require__.e(/*! import() | pending-cvr-cases-pending-cvr-cases-module */ "pending-cvr-cases-pending-cvr-cases-module").then(__webpack_require__.bind(null, /*! ./pending-cvr-cases/pending-cvr-cases.module */ "S3d+")).then(function (m) { return m.PendingCvrCasesModule; }); } },
    { path: 'pending-education-docs', loadChildren: function () { return __webpack_require__.e(/*! import() | pending-education-docs-pending-education-docs-module */ "pending-education-docs-pending-education-docs-module").then(__webpack_require__.bind(null, /*! ./pending-education-docs/pending-education-docs.module */ "Dcgl")).then(function (m) { return m.PendingEducationDocsModule; }); } },
];


/***/ }),

/***/ "kM1m":
/*!****************************************************************************************!*\
  !*** ./src/app/main/gs-branch/stats/document-checkboard/document-checkboard.module.ts ***!
  \****************************************************************************************/
/*! exports provided: DocumentCheckboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentCheckboardModule", function() { return DocumentCheckboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _document_checkboard_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./document-checkboard.routes */ "lIxB");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DocumentCheckboardModule = /** @class */ (function () {
    function DocumentCheckboardModule() {
    }
    DocumentCheckboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_document_checkboard_routes__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT_CHECKBOARD_ROUTES"]),
            ]
        })
    ], DocumentCheckboardModule);
    return DocumentCheckboardModule;
}());



/***/ }),

/***/ "lIxB":
/*!****************************************************************************************!*\
  !*** ./src/app/main/gs-branch/stats/document-checkboard/document-checkboard.routes.ts ***!
  \****************************************************************************************/
/*! exports provided: DOCUMENT_CHECKBOARD_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT_CHECKBOARD_ROUTES", function() { return DOCUMENT_CHECKBOARD_ROUTES; });
var DOCUMENT_CHECKBOARD_ROUTES = [
    // Guard for Modules
    { path: 'aviation-list', loadChildren: function () { return __webpack_require__.e(/*! import() | aviation-list-aviation-list-module */ "aviation-list-aviation-list-module").then(__webpack_require__.bind(null, /*! ./aviation-list/aviation-list.module */ "aMyz")).then(function (m) { return m.AviationListModule; }); } },
    { path: '61-cav-list', loadChildren: function () { return __webpack_require__.e(/*! import() | cav-list-cav-list-module */ "cav-list-cav-list-module").then(__webpack_require__.bind(null, /*! ./cav-list/cav-list.module */ "firv")).then(function (m) { return m.CavListModule; }); } },
    { path: 'para-list', loadChildren: function () { return __webpack_require__.e(/*! import() | para-list-para-list-module */ "para-list-para-list-module").then(__webpack_require__.bind(null, /*! ./para-list/para-list.module */ "weJU")).then(function (m) { return m.ParaListModule; }); } },
    { path: 'pc-list', loadChildren: function () { return __webpack_require__.e(/*! import() | pc-list-pc-list-module */ "pc-list-pc-list-module").then(__webpack_require__.bind(null, /*! ./pc-list/pc-list.module */ "AlGY")).then(function (m) { return m.PcListModule; }); } },
    { path: 'pending-confirmation', loadChildren: function () { return __webpack_require__.e(/*! import() | pending-confirmation-pending-confirmation-module */ "pending-confirmation-pending-confirmation-module").then(__webpack_require__.bind(null, /*! ./pending-confirmation/pending-confirmation.module */ "eczr")).then(function (m) { return m.PendingConfirmationModule; }); } },
    { path: 'pending-cvr-cases', loadChildren: function () { return __webpack_require__.e(/*! import() | pending-cvr-cases-pending-cvr-cases-module */ "pending-cvr-cases-pending-cvr-cases-module").then(__webpack_require__.bind(null, /*! ./pending-cvr-cases/pending-cvr-cases.module */ "ar0D")).then(function (m) { return m.PendingCvrCasesModule; }); } },
    { path: 'pending-education-docs', loadChildren: function () { return __webpack_require__.e(/*! import() | pending-education-docs-pending-education-docs-module */ "pending-education-docs-pending-education-docs-module").then(__webpack_require__.bind(null, /*! ./pending-education-docs/pending-education-docs.module */ "igHM")).then(function (m) { return m.PendingEducationDocsModule; }); } },
];


/***/ })

}]);