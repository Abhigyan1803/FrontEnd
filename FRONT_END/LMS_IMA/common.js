(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0ZSK":
/*!*******************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/gso-two-assessment.routes.ts ***!
  \*******************************************************************************/
/*! exports provided: GSOTwoAssessmentRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSOTwoAssessmentRoutes", function() { return GSOTwoAssessmentRoutes; });
var GSOTwoAssessmentRoutes = [
    { path: 'service-subjects', loadChildren: function () { return __webpack_require__.e(/*! import() | service-subjects-service-subjects-module */ "service-subjects-service-subjects-module").then(__webpack_require__.bind(null, /*! ./service-subjects/service-subjects.module */ "wVgR")).then(function (m) { return m.ServiceSubjectModule; }); } },
];


/***/ }),

/***/ "52rl":
/*!*******************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/gso-two-assessment.module.ts ***!
  \*******************************************************************************/
/*! exports provided: GSOTwoAssessmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSOTwoAssessmentModule", function() { return GSOTwoAssessmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var ngx_easypiechart__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-easypiechart */ "d71t");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _gso_two_assessment_routes__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./gso-two-assessment.routes */ "0ZSK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var GSOTwoAssessmentModule = /** @class */ (function () {
    function GSOTwoAssessmentModule() {
    }
    GSOTwoAssessmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"],
                // WidgetComponentModule,
                ngx_easypiechart__WEBPACK_IMPORTED_MODULE_23__["NgxEasypiechartModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_21__["ChartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__["NgxDatatableModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forChild(_gso_two_assessment_routes__WEBPACK_IMPORTED_MODULE_25__["GSOTwoAssessmentRoutes"]),
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], GSOTwoAssessmentModule);
    return GSOTwoAssessmentModule;
}());



/***/ }),

/***/ "6vdk":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/admin-dialog/admin-dialog.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <h1 mat-dialog-title>{{data.message}}</h1> -->\r\n\r\n<div class=\"realte\">\r\n  <button class=\"event_close\" mat-dialog-close>\r\n    <mat-icon>close</mat-icon>\r\n  </button>\r\n</div>\r\n<div class=\"waiting\">\r\n  <p>Please wait....</p>\r\n</div>\r\n\r\n\r\n<div mat-dialog-content class=\"mat-typography mat_custom\">\r\n  <div *ngIf=\"data.type == 'document'\">\r\n    <ngx-doc-viewer [url]=\"data.url\" viewer=\"google\" googleCheckContentLoaded=true googleCheckInterval=3000\r\n      style=\"width:100%;height:120vh !important;\"></ngx-doc-viewer>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "AYqk":
/*!***************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/gso2pgme.module.ts ***!
  \***************************************************************/
/*! exports provided: GSOTwoPGMEModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSOTwoPGMEModule", function() { return GSOTwoPGMEModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var ngx_easypiechart__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-easypiechart */ "d71t");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _gso2pgme_routing__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./gso2pgme.routing */ "WgpH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var GSOTwoPGMEModule = /** @class */ (function () {
    function GSOTwoPGMEModule() {
    }
    GSOTwoPGMEModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"],
                // WidgetComponentModule,
                ngx_easypiechart__WEBPACK_IMPORTED_MODULE_23__["NgxEasypiechartModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_21__["ChartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__["NgxDatatableModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forChild(_gso2pgme_routing__WEBPACK_IMPORTED_MODULE_25__["GSO2Routes"])
                // AgmCoreModule.forRoot({apiKey: 'AIzaSyD4y2luRxfM8Q8yKHSLdOOdNpkiilVhD9k'})
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], GSOTwoPGMEModule);
    return GSOTwoPGMEModule;
}());



/***/ }),

/***/ "D6yo":
/*!******************************************************!*\
  !*** ./src/app/main/admin/gs-branch/it/it.module.ts ***!
  \******************************************************/
/*! exports provided: ITModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITModule", function() { return ITModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _IT_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IT.routes */ "N73b");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ITModule = /** @class */ (function () {
    function ITModule() {
    }
    ITModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_IT_routes__WEBPACK_IMPORTED_MODULE_4__["IT_ROUTES"]),
            ]
        })
    ], ITModule);
    return ITModule;
}());



/***/ }),

/***/ "GL30":
/*!**********************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/gso-one-trg.routes.ts ***!
  \**********************************************************************/
/*! exports provided: GSOOneTrgRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSOOneTrgRoutes", function() { return GSOOneTrgRoutes; });
var GSOOneTrgRoutes = [
    { path: 'sop', loadChildren: function () { return Promise.all(/*! import() | sop-sop-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("sop-sop-module")]).then(__webpack_require__.bind(null, /*! ./sop/sop.module */ "Ovcs")).then(function (m) { return m.SOPModule; }); } },
    { path: 'schedule-of-exercises', loadChildren: function () { return Promise.all(/*! import() | schedule-of-exercises-schedule-of-exercises-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("schedule-of-exercises-schedule-of-exercises-module")]).then(__webpack_require__.bind(null, /*! ./schedule-of-exercises/schedule-of-exercises.module */ "jGfY")).then(function (m) { return m.ScheduleOfExercisesModule; }); } },
    { path: 'schedule-of-central-lec', loadChildren: function () { return Promise.all(/*! import() | schedule-of-central-lec-schedule-of-central-lec-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("schedule-of-central-lec-schedule-of-central-lec-module")]).then(__webpack_require__.bind(null, /*! ./schedule-of-central-lec/schedule-of-central-lec.module */ "Rh/b")).then(function (m) { return m.ScheduleOfCentralLecModule; }); } },
];


/***/ }),

/***/ "GvGC":
/*!********************************************************************!*\
  !*** ./src/app/service/delay-dashboard/delay-dashboard.service.ts ***!
  \********************************************************************/
/*! exports provided: DelayDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayDashboardService", function() { return DelayDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _links_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../links.module */ "Uhg6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth-service/auth.service */ "V7IE");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DelayDashboardService = /** @class */ (function () {
    function DelayDashboardService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.jwtToken = "";
    }
    DelayDashboardService.prototype.getStaffList = function (moduleId, termId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_LIST_OF_STAFF + ("?moduleId=" + moduleId + "&termId=" + termId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    DelayDashboardService.prototype.setFinalSubmitDate = function (obj) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].SET_FINAL_SUBMIT_DATE, obj, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    DelayDashboardService.prototype.updateFinalSubmitDate = function (obj) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_FINAL_SUBMIT_DATE, obj, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    DelayDashboardService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    DelayDashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], DelayDashboardService);
    return DelayDashboardService;
}());



/***/ }),

/***/ "KBrC":
/*!*******************************************************************!*\
  !*** ./src/app/main/admin/admin-dialog/admin-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdminDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDialogComponent", function() { return AdminDialogComponent; });
/* harmony import */ var _raw_loader_admin_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-dialog.component.html */ "6vdk");
/* harmony import */ var _admin_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-dialog.component.scss */ "wclw");
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




var AdminDialogComponent = /** @class */ (function () {
    function AdminDialogComponent(data) {
        this.data = data;
    }
    AdminDialogComponent.prototype.ngOnInit = function () {
    };
    AdminDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
    ]; };
    AdminDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-admin-dialog',
            template: _raw_loader_admin_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_admin_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [Object])
    ], AdminDialogComponent);
    return AdminDialogComponent;
}());



/***/ }),

/***/ "L2i+":
/*!*********************************************************************!*\
  !*** ./src/app/main/delay-dashboard/common-style/common-style.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 !important;\n}\n\n.mat-card {\n  margin: 10px 0;\n  border-radius: 8px;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n  margin-bottom: 10px !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle !important;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: normal;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.marks-field {\n  text-align: center;\n}\n\n.table-card {\n  margin-top: 10px;\n}");

/***/ }),

/***/ "N73b":
/*!******************************************************!*\
  !*** ./src/app/main/admin/gs-branch/it/IT.routes.ts ***!
  \******************************************************/
/*! exports provided: IT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IT_ROUTES", function() { return IT_ROUTES; });
var IT_ROUTES = [
    // Guard for Modules
    { path: 'complaints', loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-complaints-module */ "complaints-complaints-module").then(__webpack_require__.bind(null, /*! ./complaints/complaints.module */ "US9N")).then(function (m) { return m.ComplaintsModule; }); } },
];


/***/ }),

/***/ "WcIg":
/*!**********************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/gso-one-trg.module.ts ***!
  \**********************************************************************/
/*! exports provided: GSOOneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSOOneModule", function() { return GSOOneModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var ngx_easypiechart__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-easypiechart */ "d71t");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _gso_one_trg_routes__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./gso-one-trg.routes */ "GL30");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var GSOOneModule = /** @class */ (function () {
    function GSOOneModule() {
    }
    GSOOneModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"],
                // WidgetComponentModule,
                ngx_easypiechart__WEBPACK_IMPORTED_MODULE_23__["NgxEasypiechartModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_21__["ChartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__["NgxDatatableModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forChild(_gso_one_trg_routes__WEBPACK_IMPORTED_MODULE_25__["GSOOneTrgRoutes"]),
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], GSOOneModule);
    return GSOOneModule;
}());



/***/ }),

/***/ "WgpH":
/*!****************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/gso2pgme.routing.ts ***!
  \****************************************************************/
/*! exports provided: GSO2Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSO2Routes", function() { return GSO2Routes; });
var GSO2Routes = [
    { path: ':term/syllabus', loadChildren: function () { return Promise.all(/*! import() | syllabus-syllabus-module */[__webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("default~gso-one-training-gso-one-trg-module~gso-two-assessment-gso-two-assessment-module~gso-two-pgm~befb03dd"), __webpack_require__.e("common"), __webpack_require__.e("syllabus-syllabus-module")]).then(__webpack_require__.bind(null, /*! ./syllabus/syllabus.module */ "BcdT")).then(function (m) { return m.SyllabusModule; }); } },
    { path: 'trg-calendar', loadChildren: function () { return __webpack_require__.e(/*! import() | trg-calendar-trg-calendar-module */ "trg-calendar-trg-calendar-module").then(__webpack_require__.bind(null, /*! ./trg-calendar/trg-calendar.module */ "53WX")).then(function (m) { return m.TRGCalendarModule; }); } },
    { path: 'season-terms', loadChildren: function () { return Promise.all(/*! import() | season-terms-season-terms-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("season-terms-season-terms-module")]).then(__webpack_require__.bind(null, /*! ./season-terms/season-terms.module */ "XaUm")).then(function (m) { return m.SeasonTermsModule; }); } },
    { path: ':term/study-material', loadChildren: function () { return __webpack_require__.e(/*! import() | study-material-study-material-module */ "study-material-study-material-module").then(__webpack_require__.bind(null, /*! ./study-material/study-material.module */ "Yd25")).then(function (m) { return m.StudyModule; }); } },
];


/***/ }),

/***/ "d71t":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-easypiechart/__ivy_ngcc__/fesm2015/ngx-easypiechart.js ***!
  \*********************************************************************************/
/*! exports provided: NgxEasypiechartService, NgxEasypiechartComponent, NgxEasypiechartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxEasypiechartService", function() { return NgxEasypiechartService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxEasypiechartComponent", function() { return NgxEasypiechartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxEasypiechartModule", function() { return NgxEasypiechartModule; });
/* harmony import */ var E_advantal_projects_lms_copy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var E_advantal_projects_lms_copy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



var NgxEasypiechartService = function NgxEasypiechartService() {
  Object(E_advantal_projects_lms_copy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgxEasypiechartService);
};

NgxEasypiechartService.ɵfac = function NgxEasypiechartService_Factory(t) {
  return new (t || NgxEasypiechartService)();
};

NgxEasypiechartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: NgxEasypiechartService,
  factory: NgxEasypiechartService.ɵfac,
  providedIn: 'root'
});
/** @nocollapse */

NgxEasypiechartService.ctorParameters = function () {
  return [];
};
/** @nocollapse */


NgxEasypiechartService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({
  factory: function NgxEasypiechartService_Factory() {
    return new NgxEasypiechartService();
  },
  token: NgxEasypiechartService,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxEasypiechartService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */


var NgxEasypiechartComponent = /*#__PURE__*/function () {
  /**
   * @param {?} element
   */
  function NgxEasypiechartComponent(element) {
    Object(E_advantal_projects_lms_copy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgxEasypiechartComponent);

    this.element = element;
  }
  /**
   * @return {?}
   */


  Object(E_advantal_projects_lms_copy_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(NgxEasypiechartComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      /** @type {?} */
      var optionsChanged = false;

      if (changes.percent) {
        this.percent = changes.percent.currentValue;
      }

      if (changes.options) {
        this.options = changes.options.currentValue;
        optionsChanged = true;
      }

      this.loadChart(optionsChanged);
    }
    /**
     * @param {?} optionsChanged
     * @return {?}
     */

  }, {
    key: "loadChart",
    value: function loadChart(optionsChanged) {
      if (this.options && this.percent) {
        if (optionsChanged) {
          /** @type {?} */
          var node = this.element.nativeElement; // TODO: For some reason , 'EasyPieChart' constructor creates a new chart / canvas everytime it is instantiated.
          // wish there were a method to update options from an existing 'EasyPieChart' instance / object.
          // Until then - we remove all existing children under the given div of the component and then recreate altogether if there are new options

          while (node.hasChildNodes()) {
            node.removeChild(node.lastChild);
          }

          this.pieChart = new EasyPieChart(node, this.options);
        }

        if (this.pieChart) {
          this.pieChart.update(this.percent);
        }
      }
    }
  }]);

  return NgxEasypiechartComponent;
}();

NgxEasypiechartComponent.ɵfac = function NgxEasypiechartComponent_Factory(t) {
  return new (t || NgxEasypiechartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
};

NgxEasypiechartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NgxEasypiechartComponent,
  selectors: [["ngx-easypiechart"]],
  inputs: {
    percent: "percent",
    options: "options"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 0,
  template: function NgxEasypiechartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading ngx-easypiechart...");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});
/** @nocollapse */

NgxEasypiechartComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }];
};

NgxEasypiechartComponent.propDecorators = {
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  percent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxEasypiechartComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'ngx-easypiechart',
      template: "<div>Loading ngx-easypiechart...</div>"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }];
  }, {
    percent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */


var NgxEasypiechartModule = function NgxEasypiechartModule() {
  Object(E_advantal_projects_lms_copy_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgxEasypiechartModule);
};

NgxEasypiechartModule.ɵfac = function NgxEasypiechartModule_Factory(t) {
  return new (t || NgxEasypiechartModule)();
};

NgxEasypiechartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NgxEasypiechartModule
});
NgxEasypiechartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NgxEasypiechartModule, {
    declarations: [NgxEasypiechartComponent],
    exports: [NgxEasypiechartComponent]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxEasypiechartModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [],
      declarations: [NgxEasypiechartComponent],
      exports: [NgxEasypiechartComponent]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */




/***/ }),

/***/ "wclw":
/*!*********************************************************************!*\
  !*** ./src/app/main/admin/admin-dialog/admin-dialog.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat_custom {\n  margin: 0 !important;\n  padding: 20px 20px !important;\n  max-height: 89vh !important;\n}\n\nbutton.event_close i {\n  margin: 0px;\n}\n\nbutton.event_close:focus {\n  outline: none !important;\n}\n\n.waiting {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: absolute;\n  left: 45%;\n}\n\n.waiting p {\n  font-size: 18px;\n  font-weight: bold;\n  color: #721a0c;\n}\n\nbutton.event_close {\n  padding: 0px;\n  width: 40px;\n  height: 40px;\n  color: #ccc;\n  position: absolute;\n  border: 0;\n  z-index: 9999;\n  right: 0;\n  background: transparent;\n}\n\nbutton.event_close:hover {\n  color: #721a0c;\n}\n\n.realte {\n  position: relative;\n  z-index: 9;\n  padding-top: 20px;\n  padding-left: 20px;\n}");

/***/ }),

/***/ "zzRl":
/*!****************************************!*\
  !*** ./src/app/Constants/Constants.ts ***!
  \****************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.DEPARTMENTS = ['TRG Team', 'TRG Battalion', 'Academic Department', 'GS Branch', 'Adjutant Branch'];
    Constants._5MB_IN_BYTES = 5242880;
    Constants._50MB_IN_BYTES = 52428800;
    Constants._150MB_IN_BYTES = 157286400;
    Constants._500MB_IN_BYTES = 524288000;
    Constants._1GB_IN_BYTES = 1073741824;
    Constants._1n5GB_IN_BYTES = 1610612736;
    Constants.DOC_EXTS = ['doc', 'docx', 'pdf', 'ppt', 'pptx'];
    Constants.IMG_EXTS = ['apng', 'png', 'gif', 'jpg', 'jpeg', 'jfif', 'pjpg', 'pjpeg', 'svg', 'tiff', 'tif'];
    Constants.VID_EXTS = ['mp3', 'mp4', 'mov', 'wmv', 'avi', 'flv', 'mkv', 'webm'];
    return Constants;
}());



/***/ })

}]);