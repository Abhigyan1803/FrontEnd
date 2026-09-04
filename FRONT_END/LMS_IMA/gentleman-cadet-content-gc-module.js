(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gentleman-cadet-content-gc-module"],{

/***/ "3Fh+":
/*!****************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/gc-dialog/gc-dialog.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".end-btns {\n  margin-bottom: 0;\n}\n\n.answer-content {\n  height: 440px;\n}");

/***/ }),

/***/ "DUMk":
/*!******************************************************!*\
  !*** ./src/app/gentleman-cadet/content/gc.module.ts ***!
  \******************************************************/
/*! exports provided: GCModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GCModule", function() { return GCModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gc_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gc.routes */ "nC13");
/* harmony import */ var _ac_subjects_ac_subjects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ac-subjects/ac-subjects.component */ "xTxp");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var _gc_dialog_gc_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gc-dialog/gc-dialog.component */ "PCf+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { InterviewGcComponent } from './interview-gc/interview-gc.component';
// import { InterviewsComponent } from './interviews/interviews.component';
var GCModule = /** @class */ (function () {
    function GCModule() {
    }
    GCModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _ac_subjects_ac_subjects_component__WEBPACK_IMPORTED_MODULE_4__["AcSubjectsComponent"],
                _gc_dialog_gc_dialog_component__WEBPACK_IMPORTED_MODULE_7__["GcDialogComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_gc_routes__WEBPACK_IMPORTED_MODULE_3__["GC_ROUTES"]),
            ]
        })
    ], GCModule);
    return GCModule;
}());



/***/ }),

/***/ "PCf+":
/*!**************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/gc-dialog/gc-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: GcDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcDialogComponent", function() { return GcDialogComponent; });
/* harmony import */ var _raw_loader_gc_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./gc-dialog.component.html */ "xBS0");
/* harmony import */ var _gc_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gc-dialog.component.scss */ "3Fh+");
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




var GcDialogComponent = /** @class */ (function () {
    function GcDialogComponent(data) {
        this.data = data;
    }
    GcDialogComponent.prototype.ngOnInit = function () {
        // console.log(this.data);
    };
    GcDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
    ]; };
    GcDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-gc-dialog',
            template: _raw_loader_gc_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_gc_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [Object])
    ], GcDialogComponent);
    return GcDialogComponent;
}());



/***/ }),

/***/ "kO+w":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/ac-subjects/ac-subjects.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mt-20\">\n    <!-- <div class=\"mat-new\">\n        <h4 class=\"card-heading\">Academic Subjects </h4>\n    </div> -->\n\n    <mat-drawer-container class=\"example-container\" autosize>\n        \n        <mat-drawer #drawer opened class=\"example-sidenav\" mode=\"side\" class=\"sidbar\">\n\n   \n            <mat-nav-list >\n                <mat-list-item *ngFor=\"let item of componentsList;let i=index\"  routerLinkActive=\"active-link\" >\n\n                    <a *ngIf=\"item.type == 'link'\" class=\"gene-relative\" mat-ripple routerLinkActive=\"active-link\"\n                     href=\"javascript:void(0)\" [routerLink]=\"[item.link]\" >\n                           <div class=\"link-name\">\n                            {{item.name}}\n                           </div>\n                    </a>\n                \n                    <mat-divider></mat-divider>\n\n\n                </mat-list-item>\n\n            </mat-nav-list>\n\n\n\n\n        </mat-drawer>\n        <!-- <div class=\"example-sidenav-content\">\n            <button mat-icon-button (click)=\"drawer.toggle()\">\n                <mat-icon *ngIf=\"drawer.opened\">\n                    navigate_before\n                </mat-icon>\n                <mat-icon *ngIf=\"!drawer.opened\">\n                    navigate_next\n                </mat-icon>\n            </button>\n        </div> -->\n        <div class=\"mat-new\">\n            <!-- <div class=\"example-sidenav-content\"> -->\n                \n                <h4 class=\"card-heading\">\n                    <button mat-icon-button (click)=\"drawer.toggle()\">\n                        <mat-icon >\n                            menu\n                        </mat-icon>\n                    </button>\n                    Academic Subjects </h4>\n\n            <!-- </div> -->\n        </div> \n            <div>\n                <router-outlet></router-outlet>\n            </div>\n        \n    </mat-drawer-container>\n\n\n    <!-- <mat-card></mat-card> -->\n</div>");

/***/ }),

/***/ "nC13":
/*!******************************************************!*\
  !*** ./src/app/gentleman-cadet/content/gc.routes.ts ***!
  \******************************************************/
/*! exports provided: GC_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GC_ROUTES", function() { return GC_ROUTES; });
/* harmony import */ var app_pages_ima_blog_ima_blog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/ima-blog/ima-blog.component */ "Wa0O");
/* harmony import */ var app_pages_read_blog_read_blog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/read-blog/read-blog.component */ "7JEc");
/* harmony import */ var _ac_subjects_ac_subjects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ac-subjects/ac-subjects.component */ "xTxp");



var GC_ROUTES = [
    // Guard for Modules
    { path: '', redirectTo: "dashboard", pathMatch: "full" },
    { path: 'dashboard', loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("default~dashboard-dashboard-module~trg-team-dashboard-dashboard-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "vIr0")).then(function (m) { return m.DashboardModule; }); } },
    { path: 'Interviews/:type', loadChildren: function () { return Promise.all(/*! import() | interview-gc-interviewgc-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("interview-gc-interviewgc-module")]).then(__webpack_require__.bind(null, /*! ./interview-gc/interviewgc.module */ "WBNo")).then(function (m) { return m.InterviewGcModule; }); } },
    { path: 'entitlements/:type', loadChildren: function () { return Promise.all(/*! import() | entitlements-entitlements-module */[__webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("entitlements-entitlements-module")]).then(__webpack_require__.bind(null, /*! ./entitlements/entitlements.module */ "TzLj")).then(function (m) { return m.EntitlementsModule; }); } },
    { path: 'club/:type', loadChildren: function () { return Promise.all(/*! import() | club-club-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("club-club-module")]).then(__webpack_require__.bind(null, /*! ./club/club.module */ "oseV")).then(function (m) { return m.ClubModule; }); } },
    { path: 'exam-shedule', loadChildren: function () { return Promise.all(/*! import() | exam-shedule-exam-shedule-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("exam-shedule-exam-shedule-module")]).then(__webpack_require__.bind(null, /*! ./exam-shedule/exam-shedule.module */ "Fuew")).then(function (m) { return m.ExamsheduleModule; }); } },
    { path: 'academic-exam-shedule', loadChildren: function () { return Promise.all(/*! import() | academic-exam-schedule-academic-exam-shedule-module */[__webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("academic-exam-schedule-academic-exam-shedule-module")]).then(__webpack_require__.bind(null, /*! ./academic-exam-schedule/academic-exam-shedule.module */ "hw85")).then(function (m) { return m.AcademicExamsheduleModule; }); } },
    { path: 'ima-blog', component: app_pages_ima_blog_ima_blog_component__WEBPACK_IMPORTED_MODULE_0__["ImaBlogComponent"] },
    { path: 'read-blog', component: app_pages_read_blog_read_blog_component__WEBPACK_IMPORTED_MODULE_1__["ReadBlogComponent"] },
    { path: 'syllabus', loadChildren: function () { return Promise.all(/*! import() | syllabus-syllabus-module */[__webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("default~gso-one-training-gso-one-trg-module~gso-two-assessment-gso-two-assessment-module~gso-two-pgm~befb03dd"), __webpack_require__.e("common"), __webpack_require__.e("syllabus-syllabus-module")]).then(__webpack_require__.bind(null, /*! ./syllabus/syllabus.module */ "ldm4")).then(function (m) { return m.SyllabusModule; }); } },
    { path: 'subjects', loadChildren: function () { return Promise.all(/*! import() | subjects-subjects-module */[__webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("subjects-subjects-module")]).then(__webpack_require__.bind(null, /*! ./subjects/subjects.module */ "pKDv")).then(function (m) { return m.SubjectsModule; }); } },
    {
        path: 'ac-subjects', component: _ac_subjects_ac_subjects_component__WEBPACK_IMPORTED_MODULE_2__["AcSubjectsComponent"],
        children: [
            { path: 'subjects', loadChildren: function () { return Promise.all(/*! import() | ac-subjects-all-subjects-all-subjects-module */[__webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("ac-subjects-all-subjects-all-subjects-module")]).then(__webpack_require__.bind(null, /*! ./ac-subjects/all-subjects/all-subjects.module */ "X5Rx")).then(function (m) { return m.AllSubjectsModule; }); } },
            { path: 'assignments', loadChildren: function () { return Promise.all(/*! import() | ac-subjects-assignments-assignments-module */[__webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("ac-subjects-assignments-assignments-module")]).then(__webpack_require__.bind(null, /*! ./ac-subjects/assignments/assignments.module */ "WfAI")).then(function (m) { return m.AssignmentsModule; }); } },
            { path: 'distribution-of-marks', loadChildren: function () { return Promise.all(/*! import() | ac-subjects-distribution-of-marks-distribution-of-marks-module */[__webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("ac-subjects-distribution-of-marks-distribution-of-marks-module")]).then(__webpack_require__.bind(null, /*! ./ac-subjects/distribution-of-marks/distribution-of-marks.module */ "7RB9")).then(function (m) { return m.DistributionOfMarksModule; }); } },
            { path: 'achievements', loadChildren: function () { return __webpack_require__.e(/*! import() | ac-subjects-achievements-achievements-module */ "ac-subjects-achievements-achievements-module").then(__webpack_require__.bind(null, /*! ./ac-subjects/achievements/achievements.module */ "6hrK")).then(function (m) { return m.AchievementsModule; }); } },
            { path: '', redirectTo: 'subjects', pathMatch: 'full' }
        ]
    },
    // { path: 'academic/:term/:paper',loadChildren: () => import('./academic-subject/academic-subject.module').then(m => m.AcademicSubjectModule) },
    { path: 'academic-syllabus', loadChildren: function () { return Promise.all(/*! import() | academic-syllabus-academic-syllabus-module */[__webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("academic-syllabus-academic-syllabus-module")]).then(__webpack_require__.bind(null, /*! ./academic-syllabus/academic-syllabus.module */ "lYH4")).then(function (m) { return m.AcademicSyllabusModule; }); } },
    { path: 'punishments', loadChildren: function () { return Promise.all(/*! import() | punishments-punishments-module */[__webpack_require__.e("default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"), __webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("punishments-punishments-module")]).then(__webpack_require__.bind(null, /*! ./punishments/punishments.module */ "Vf8v")).then(function (m) { return m.PunishmentsModule; }); } },
    { path: 'adjutant-orders', loadChildren: function () { return Promise.all(/*! import() | adjutant-orders-adjutant-orders-module */[__webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("adjutant-orders-adjutant-orders-module")]).then(__webpack_require__.bind(null, /*! ./adjutant-orders/adjutant-orders.module */ "e1Zo")).then(function (m) { return m.AdjutantOrdersModule; }); } },
];


/***/ }),

/***/ "tBJ1":
/*!********************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/ac-subjects/ac-subjects.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-set {\n  display: flex;\n  float: left;\n  width: 100%;\n  margin-bottom: 10px;\n  justify-content: space-between;\n}\n\n.example-container {\n  float: left;\n  width: 100%;\n}\n\n.btn-set input {\n  margin-right: 15px;\n}\n\n.mt-20 {\n  float: left;\n  width: 100%;\n}\n\n.syllabus-card {\n  background-color: transparent;\n  border: none;\n}\n\n.example-container {\n  height: 500px;\n}\n\n.active-link {\n  background: #505050;\n  color: white;\n}\n\na {\n  outline: none;\n}\n\na:hover {\n  color: #bc9753;\n}\n\nh4.card-heading button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: transparent;\n  margin-right: 5px;\n}\n\n.mat-list-item {\n  padding: 0 0 0 0;\n}\n\n.mat-list-base {\n  padding-top: 0;\n}");

/***/ }),

/***/ "xBS0":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/gc-dialog/gc-dialog.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-4 p-2\">\n\n    <h2 mat-dialog-title>{{data.title}}</h2>\n    <mat-dialog-content class=\"mat-typography\">\n\n        <div class=\"answer-content\" > \n\n            <div class=\"q-a\">\n                <h4> <strong>Question: </strong> </h4>\n                <p [innerHTML]=\"data.assignmentData.question\"></p>\n            </div>\n            <div class=\"q-a\">\n                <h4> <strong>Answer:</strong> </h4>\n                <p [innerHTML]=\"data.assignmentData.answer\"></p>\n            </div>\n    \n        </div>\n\n    </mat-dialog-content>\n\n    <!-- <div class=\"end-btns\"> -->\n        <mat-dialog-actions  class=\"act-btns pull-right\"  >\n            <button mat-button mat-dialog-close>Cancel</button>\n            <button mat-raised-button [mat-dialog-close]=\"true\" cdkFocusInitial>Confirm</button>\n        </mat-dialog-actions>\n    <!-- </div> -->\n\n\n\n</div>");

/***/ }),

/***/ "xTxp":
/*!******************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/ac-subjects/ac-subjects.component.ts ***!
  \******************************************************************************/
/*! exports provided: AcSubjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcSubjectsComponent", function() { return AcSubjectsComponent; });
/* harmony import */ var _raw_loader_ac_subjects_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ac-subjects.component.html */ "kO+w");
/* harmony import */ var _ac_subjects_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ac-subjects.component.scss */ "tBJ1");
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



var AcSubjectsComponent = /** @class */ (function () {
    function AcSubjectsComponent() {
        this.componentsList = [
            {
                name: "Subjects",
                type: "link",
                link: "/gc/content/ac-subjects/subjects",
            },
            {
                name: "Assignments",
                type: 'link',
                link: "/gc/content/ac-subjects/assignments"
            },
            {
                name: "Distribution of Marks",
                type: 'link',
                link: "/gc/content/ac-subjects/distribution-of-marks"
            },
        ];
    }
    AcSubjectsComponent.prototype.ngOnInit = function () {
    };
    AcSubjectsComponent.ctorParameters = function () { return []; };
    AcSubjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-ac-subjects',
            template: _raw_loader_ac_subjects_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ac_subjects_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AcSubjectsComponent);
    return AcSubjectsComponent;
}());



/***/ })

}]);