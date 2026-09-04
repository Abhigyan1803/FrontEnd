(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adjutant-gi-adjutant-gi-module"],{

/***/ "iUBg":
/*!************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/adjutant-gi.module.ts ***!
  \************************************************************************/
/*! exports provided: AdjutantGeneralInstructionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjutantGeneralInstructionModule", function() { return AdjutantGeneralInstructionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _adjutant_gi_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adjutant-gi.routing */ "iqih");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AdjutantGeneralInstructionModule = /** @class */ (function () {
    function AdjutantGeneralInstructionModule() {
    }
    AdjutantGeneralInstructionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_adjutant_gi_routing__WEBPACK_IMPORTED_MODULE_4__["ADJUTANT_GENERAL_INSTRUCTION_ROUTES"]),
            ]
        })
    ], AdjutantGeneralInstructionModule);
    return AdjutantGeneralInstructionModule;
}());

// import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatListModule } from '@angular/material/list';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatSelectModule } from '@angular/material/select';
// import { MatSortModule } from '@angular/material/sort';
// import { MatTableModule } from '@angular/material/table';
// import { MatTabsModule } from '@angular/material/tabs';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { RouterModule } from '@angular/router';
// import { ChartsModule } from 'ng2-charts';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { AgmCoreModule } from '@agm/core';
// import { NgxEasypiechartModule } from 'ngx-easypiechart';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { GENERAL_ALL_ROUTES} from './general-Instruction.routing'
// import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { SheduleComponent } from './shedule/shedule.component';
// import { AddScheduleComponent } from './shedule/add-schedule/add-schedule.component';
// import { DrillMarksComponent } from './drill-marks/drill-marks.component';
// import { AddDrillMarksComponent } from './drill-marks/add-drill-marks/add-drill-marks.component';
// // import { AddOrderComponent } from './add-order/add-order.component';
// @NgModule({
// 	declarations: [
//   ],
// 	imports: [
// 		CommonModule,
// 		MatTableModule,
// 		MatSelectModule,
// 		FlexLayoutModule,
// 		// WidgetComponentModule,
// 		NgxEasypiechartModule,
// 		MatPaginatorModule,
// 		MatChipsModule,
//       TranslateModule,
//       PerfectScrollbarModule,
// 		MatIconModule,
// 		MatButtonModule,
// 		MatTabsModule,
// 		MatCardModule,
// 		MatMenuModule,
// 		MatListModule,
// 		MatCheckboxModule,
// 		MatDividerModule,
// 		ChartsModule,
// 		NgxDatatableModule,
// 		MatProgressBarModule,
// 		MatInputModule,
// 		MatFormFieldModule,
// 		FormsModule,
// 		ReactiveFormsModule, 
// 		MatSortModule,
// 		RouterModule.forChild(GENERAL_ALL_ROUTES)
// 		// AgmCoreModule.forRoot({apiKey: 'AIzaSyD4y2luRxfM8Q8yKHSLdOOdNpkiilVhD9k'})
// 	],
// 	schemas: [ NO_ERRORS_SCHEMA]
// })
// export class GeneralALLModule { }


/***/ }),

/***/ "iqih":
/*!*************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/adjutant-gi.routing.ts ***!
  \*************************************************************************/
/*! exports provided: ADJUTANT_GENERAL_INSTRUCTION_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADJUTANT_GENERAL_INSTRUCTION_ROUTES", function() { return ADJUTANT_GENERAL_INSTRUCTION_ROUTES; });
var ADJUTANT_GENERAL_INSTRUCTION_ROUTES = [
    { path: 'pop', loadChildren: function () { return __webpack_require__.e(/*! import() | pop-pop-module */ "pop-pop-module").then(__webpack_require__.bind(null, /*! ./pop/pop.module */ "zUI/")).then(function (m) { return m.PopModule; }); } },
    { path: 'sop', loadChildren: function () { return Promise.all(/*! import() | sop-sop-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("sop-sop-module")]).then(__webpack_require__.bind(null, /*! ./sop/sop.module */ "qnob")).then(function (m) { return m.SopModule; }); } },
    { path: 'reception', loadChildren: function () { return __webpack_require__.e(/*! import() | reception-gc-reception-gc-module */ "reception-gc-reception-gc-module").then(__webpack_require__.bind(null, /*! ./reception-gc/reception-gc.module */ "oDmw")).then(function (m) { return m.ReceptionGcModule; }); } },
    { path: 'drill-competition/schedule', loadChildren: function () { return __webpack_require__.e(/*! import() | shedule-shedule-module */ "shedule-shedule-module").then(__webpack_require__.bind(null, /*! ./shedule/shedule.module */ "RvJr")).then(function (m) { return m.SheduleModule; }); } },
    { path: 'drill-competition/drill-Subject', loadChildren: function () { return __webpack_require__.e(/*! import() | drill-competition-drill-comp-module */ "drill-competition-drill-comp-module").then(__webpack_require__.bind(null, /*! ../drill-competition/drill-comp.module */ "KjJa")).then(function (m) { return m.DrillCompModule; }); } },
    { path: 'drill-competition/drill-marks', loadChildren: function () { return Promise.all(/*! import() | drill-marks-drill-marks-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("common"), __webpack_require__.e("drill-marks-drill-marks-module")]).then(__webpack_require__.bind(null, /*! ./drill-marks/drill-marks.module */ "hh8I")).then(function (m) { return m.DrillMarksModule; }); } },
    { path: 'drill-comp/:term', loadChildren: function () { return __webpack_require__.e(/*! import() | drill-competition-drill-competition-module */ "drill-competition-drill-competition-module").then(__webpack_require__.bind(null, /*! ./drill-competition/drill-competition.module */ "zDbi")).then(function (m) { return m.DrillCompetitionModule; }); } }
];


/***/ })

}]);