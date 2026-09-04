(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-academic-depart-academic-depart-module"],{

/***/ "5ZCD":
/*!****************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-depart.routes.ts ***!
  \****************************************************************/
/*! exports provided: ACADEMIC_DEPARTMENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACADEMIC_DEPARTMENT_ROUTES", function() { return ACADEMIC_DEPARTMENT_ROUTES; });
var ACADEMIC_DEPARTMENT_ROUTES = [
    // Guard for Modules
    { path: 'dashboard', loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("default~dashboard-dashboard-module~trg-team-dashboard-dashboard-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "6psE")).then(function (m) { return m.DashboardModule; }); } },
    // { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
    // { path: 'subjects', loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule) },
    { path: 'subjects/:term/:paper/:subject', loadChildren: function () { return __webpack_require__.e(/*! import() | academic-subjects-academic-subjects-module */ "academic-subjects-academic-subjects-module").then(__webpack_require__.bind(null, /*! ./academic-subjects/academic-subjects.module */ "pm8Q")).then(function (m) { return m.AcademicSubjectsModule; }); } },
    { path: 'assignments/:term/:paper/:assignment', loadChildren: function () { return __webpack_require__.e(/*! import() | academic-assignments-academic-assignments-module */ "academic-assignments-academic-assignments-module").then(__webpack_require__.bind(null, /*! ./academic-assignments/academic-assignments.module */ "ukB5")).then(function (m) { return m.AcademicAssignmentsModule; }); } },
    // { path: 'intellectual/:term/final-term', loadChildren: () => import('./intellectual-skills/intellectual-skills.module').then(m => m.IntellectualSkillsModule) },
    // { path: 'intellectual/:term/mid-term', loadChildren: () => import('./mid-intellectual/mid-intellectual.module').then(m => m.MidIntellectualModule) },
    // { path: 'intellectual', loadChildren: () => import('./intellectual/intellectual.module').then(m => m.INTELLECModule) },
    // { path: 'assignments', loadChildren: () => import('./assignment/assignments.module').then(m => m.AssignmentsModule) },
    { path: 'it', loadChildren: function () { return __webpack_require__.e(/*! import() | complaint-requirement-complaint-requirement-module */ "complaint-requirement-complaint-requirement-module").then(__webpack_require__.bind(null, /*! ./complaint-requirement/complaint-requirement.module */ "JijO")).then(function (m) { return m.ComplaintRequirementModule; }); } },
    { path: 'i-card', loadChildren: function () { return __webpack_require__.e(/*! import() | i-card-i-card-module */ "i-card-i-card-module").then(__webpack_require__.bind(null, /*! ./i-card/i-card.module */ "IWFY")).then(function (m) { return m.IcardModule; }); } },
    { path: 'counsellors', loadChildren: function () { return __webpack_require__.e(/*! import() | counsellors-counsellors-module */ "counsellors-counsellors-module").then(__webpack_require__.bind(null, /*! ./counsellors/counsellors.module */ "/TAc")).then(function (m) { return m.CounsellorsModule; }); } },
    // { path: 'sports/:term/:type', loadChildren: () => import('./sports/sports.module').then(m => m.SportsModule) },
    { path: 'examination', loadChildren: function () { return __webpack_require__.e(/*! import() | examination-examination-module */ "examination-examination-module").then(__webpack_require__.bind(null, /*! ./examination/examination.module */ "MAtE")).then(function (m) { return m.ExamniationModule; }); } },
    { path: 'achievements', loadChildren: function () { return __webpack_require__.e(/*! import() | achievements-achievements-module */ "achievements-achievements-module").then(__webpack_require__.bind(null, /*! ./achievements/achievements.module */ "S3Zc")).then(function (m) { return m.AchievementsModule; }); } },
    { path: 'clubs', loadChildren: function () { return __webpack_require__.e(/*! import() | clubs-clubs-module */ "clubs-clubs-module").then(__webpack_require__.bind(null, /*! ./clubs/clubs.module */ "SQLR")).then(function (m) { return m.ClubsModule; }); } },
    { path: 'general', loadChildren: function () { return __webpack_require__.e(/*! import() | General-Instruction-general-module */ "General-Instruction-general-module").then(__webpack_require__.bind(null, /*! ./General-Instruction/general.module */ "2qAk")).then(function (m) { return m.GeneralModule; }); } },
    { path: 'syllabus/:term/:paper/:subject', loadChildren: function () { return Promise.all(/*! import() | academic-syllabus-academic-syllabus-module */[__webpack_require__.e("default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"), __webpack_require__.e("academic-syllabus-academic-syllabus-module")]).then(__webpack_require__.bind(null, /*! ./academic-syllabus/academic-syllabus.module */ "UQnf")).then(function (m) { return m.AcademicSyllabusModule; }); } },
    { path: 'ima-blog', loadChildren: function () { return __webpack_require__.e(/*! import() | admin-home-ima-blogs-ima-blogs-module */ "ima-blogs-ima-blogs-module").then(__webpack_require__.bind(null, /*! ../admin/home/ima-blogs/ima-blogs.module */ "1ZzC")).then(function (m) { return m.IMABlogsModule; }); } },
    // { path: 'security', loadChildren: () => import('./gso2security/gso2security.module').then(m => m.Gso2SecurityModule) },
    // { path: 'IT', loadChildren: () => import('./it/it.module').then(m => m.ITModule) },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard' },
];


/***/ }),

/***/ "Y3Jv":
/*!****************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-depart.module.ts ***!
  \****************************************************************/
/*! exports provided: AcademicDepartmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicDepartmentModule", function() { return AcademicDepartmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _academic_depart_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./academic-depart.routes */ "5ZCD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AcademicDepartmentModule = /** @class */ (function () {
    function AcademicDepartmentModule() {
    }
    AcademicDepartmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_academic_depart_routes__WEBPACK_IMPORTED_MODULE_4__["ACADEMIC_DEPARTMENT_ROUTES"]),
            ]
        })
    ], AcademicDepartmentModule);
    return AcademicDepartmentModule;
}());



/***/ })

}]);