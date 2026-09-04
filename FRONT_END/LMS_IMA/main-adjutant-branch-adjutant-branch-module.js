(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-adjutant-branch-adjutant-branch-module"],{

/***/ "+Acn":
/*!*****************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-branch.routing.ts ***!
  \*****************************************************************/
/*! exports provided: ADJUTANT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADJUTANT_ROUTES", function() { return ADJUTANT_ROUTES; });
var ADJUTANT_ROUTES = [
    // {  path: '', loadChildren: () => import('./ARO/aro.module').then(m => m.AroModule) },
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("default~dashboard-dashboard-module~trg-team-dashboard-dashboard-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "eqhG")).then(function (m) { return m.DashBoardModule; }); } },
    { path: 'aro', loadChildren: function () { return __webpack_require__.e(/*! import() | ARO-aro-module */ "ARO-aro-module").then(__webpack_require__.bind(null, /*! ./ARO/aro.module */ "Az1k")).then(function (m) { return m.AroModule; }); } },
    { path: 'bro', loadChildren: function () { return __webpack_require__.e(/*! import() | bro-bro-module */ "bro-bro-module").then(__webpack_require__.bind(null, /*! ./bro/bro.module */ "vvR6")).then(function (m) { return m.BroModule; }); } },
    { path: 'adjutant-orders', loadChildren: function () { return __webpack_require__.e(/*! import() | officers-MS-adjutant-orders-adjutant-order-module */ "officers-MS-adjutant-orders-adjutant-order-module").then(__webpack_require__.bind(null, /*! ./officers-MS/adjutant orders/adjutant-order.module */ "+kd4")).then(function (m) { return m.AdjutantOrderModule; }); } },
    { path: 'general-instruction', loadChildren: function () { return __webpack_require__.e(/*! import() | adjutant-gi-adjutant-gi-module */ "adjutant-gi-adjutant-gi-module").then(__webpack_require__.bind(null, /*! ./adjutant-gi/adjutant-gi.module */ "iUBg")).then(function (m) { return m.AdjutantGeneralInstructionModule; }); } },
    { path: 'drill/:term', loadChildren: function () { return Promise.all(/*! import() | drill-marks-drill-marks-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("drill-marks-drill-marks-module")]).then(__webpack_require__.bind(null, /*! ./drill-marks/drill-marks.module */ "ZS29")).then(function (m) { return m.DrillModule; }); } },
    { path: 'drill-comp', loadChildren: function () { return __webpack_require__.e(/*! import() | drill-comp-drill-comp-module */ "drill-comp-drill-comp-module").then(__webpack_require__.bind(null, /*! ./drill-comp/drill-comp.module */ "nX2Q")).then(function (m) { return m.DrillCompModule; }); } },
    { path: 'drill-marks', loadChildren: function () { return __webpack_require__.e(/*! import() | drill-competition-drill-comp-module */ "drill-competition-drill-comp-module").then(__webpack_require__.bind(null, /*! ./drill-competition/drill-comp.module */ "KjJa")).then(function (m) { return m.DrillCompModule; }); } },
    { path: 'drill-precis', loadChildren: function () { return __webpack_require__.e(/*! import() | drill-precis-drill-precis-module */ "drill-precis-drill-precis-module").then(__webpack_require__.bind(null, /*! ./drill-precis/drill-precis.module */ "jB9e")).then(function (m) { return m.DrillPrecisModule; }); } },
    // { path: 'officers-ms', loadChildren: () => import('./officers-MS/officers-ms.module').then(m => m.OfficersMSModule) },
    { path: 'it', loadChildren: function () { return __webpack_require__.e(/*! import() | complaint-requirement-complaint-requirement-module */ "complaint-requirement-complaint-requirement-module").then(__webpack_require__.bind(null, /*! ./complaint-requirement/complaint-requirement.module */ "IlmS")).then(function (m) { return m.ComplaintRequirementModule; }); } },
    { path: 'academy-parade', loadChildren: function () { return __webpack_require__.e(/*! import() | academy-parade-state-academy-parade-state-module */ "academy-parade-state-academy-parade-state-module").then(__webpack_require__.bind(null, /*! ./academy-parade-state/academy-parade-state.module */ "2Uov")).then(function (m) { return m.AcademyParadeStateModule; }); } },
    { path: 'officer-parade', loadChildren: function () { return Promise.all(/*! import() | location-state-location-state-module */[__webpack_require__.e("default~location-state-location-state-module~trg-battalion-location-state-location-state-module"), __webpack_require__.e("location-state-location-state-module")]).then(__webpack_require__.bind(null, /*! ./location-state/location-state.module */ "2qbC")).then(function (m) { return m.LocationStateModule; }); } },
    { path: 'i-card', loadChildren: function () { return __webpack_require__.e(/*! import() | i-card-i-card-module */ "i-card-i-card-module").then(__webpack_require__.bind(null, /*! ./i-card/i-card.module */ "PqZV")).then(function (m) { return m.IcardModule; }); } },
    { path: 'punishments', loadChildren: function () { return Promise.all(/*! import() | punishments-punishments-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("punishments-punishments-module")]).then(__webpack_require__.bind(null, /*! ./punishments/punishments.module */ "ljZ5")).then(function (m) { return m.PunishmentsModule; }); } },
    { path: 'social-list', loadChildren: function () { return Promise.all(/*! import() | admin-home-special-occasions-special-occasions-module */[__webpack_require__.e("default~admin-home-special-occasions-special-occasions-module~trg-team-reports-reports-module"), __webpack_require__.e("admin-home-special-occasions-special-occasions-module")]).then(__webpack_require__.bind(null, /*! ../admin/home/special-occasions/special-occasions.module */ "PvO2")).then(function (m) { return m.SpecialOccasionsModule; }); } },
    { path: 'record', loadChildren: function () { return __webpack_require__.e(/*! import() | admin-service-record-service-record-module */ "service-record-service-record-module").then(__webpack_require__.bind(null, /*! ../admin/service-record/service-record.module */ "Vn44")).then(function (m) { return m.ServiceRecordModule; }); } },
    { path: 'ima-blog', loadChildren: function () { return __webpack_require__.e(/*! import() | admin-home-ima-blogs-ima-blogs-module */ "ima-blogs-ima-blogs-module").then(__webpack_require__.bind(null, /*! ../admin/home/ima-blogs/ima-blogs.module */ "1ZzC")).then(function (m) { return m.IMABlogsModule; }); } },
    { path: 'home', loadChildren: function () { return __webpack_require__.e(/*! import() | admin-home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../admin/home/home.module */ "UpzC")).then(function (m) { return m.HomeModule; }); } },
];


/***/ }),

/***/ "7iMc":
/*!****************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-branch.module.ts ***!
  \****************************************************************/
/*! exports provided: AdjutantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjutantModule", function() { return AdjutantModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _adjutant_branch_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adjutant-branch.routing */ "+Acn");
/* harmony import */ var _adjutant_dialog_adjutant_dialog_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adjutant-dialog/adjutant-dialog.module */ "UVEo");
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
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_adjutant_branch_routing__WEBPACK_IMPORTED_MODULE_4__["ADJUTANT_ROUTES"]),
                _adjutant_dialog_adjutant_dialog_module__WEBPACK_IMPORTED_MODULE_5__["AdjutantDialogModule"],
            ]
        })
    ], AdjutantModule);
    return AdjutantModule;
}());



/***/ }),

/***/ "A52v":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/adjutant-dialog/adjutant-dialog.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"data.type == 'document'\">\r\n  <div  class=\"d-flex justify-content-between\">\r\n    \r\n      <h3>{{ data.title }}</h3>\r\n    \r\n      <button mat-icon-button (click)=\"onNoClick()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n  \r\n  </div>\r\n\r\n  <div>\r\n    \r\n    <ngx-doc-viewer\r\n      [url]=\"data.url\"\r\n      viewer=\"google\"\r\n      googleCheckContentLoaded=\"true\"\r\n      googleCheckInterval=\"3000\"\r\n      style=\"width: 100%; height: 120vh !important\"></ngx-doc-viewer>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "RVzU":
/*!***********************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-dialog/adjutant-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdjutantDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjutantDialogComponent", function() { return AdjutantDialogComponent; });
/* harmony import */ var _raw_loader_adjutant_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./adjutant-dialog.component.html */ "A52v");
/* harmony import */ var _adjutant_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adjutant-dialog.component.scss */ "sNrf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdjutantDialogComponent = /** @class */ (function () {
    function AdjutantDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    AdjutantDialogComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    AdjutantDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AdjutantDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
    ]; };
    AdjutantDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-adjutant-dialog',
            template: _raw_loader_adjutant_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_adjutant_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], AdjutantDialogComponent);
    return AdjutantDialogComponent;
}());



/***/ }),

/***/ "UVEo":
/*!********************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-dialog/adjutant-dialog.module.ts ***!
  \********************************************************************************/
/*! exports provided: AdjutantDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjutantDialogModule", function() { return AdjutantDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _adjutant_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adjutant-dialog.component */ "RVzU");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../material/material.module */ "hctd");
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-doc-viewer */ "w4ga");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _adjutant_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AdjutantDialogComponent"]
    }
];
var AdjutantDialogModule = /** @class */ (function () {
    function AdjutantDialogModule() {
    }
    AdjutantDialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _adjutant_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AdjutantDialogComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_6__["NgxDocViewerModule"]
            ],
            entryComponents: [_adjutant_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AdjutantDialogComponent"]],
            exports: [_adjutant_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AdjutantDialogComponent"]]
        })
    ], AdjutantDialogModule);
    return AdjutantDialogModule;
}());



/***/ }),

/***/ "sNrf":
/*!*************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-dialog/adjutant-dialog.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);