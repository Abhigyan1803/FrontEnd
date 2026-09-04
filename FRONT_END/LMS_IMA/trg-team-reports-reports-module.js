(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trg-team-reports-reports-module"],{

/***/ "4o8A":
/*!*********************************************************!*\
  !*** ./src/app/main/trg-team/reports/reports.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.component */ "Ygov");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]
    }
];
var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ }),

/***/ "Pgq1":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/reports/reports.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\n    <h4 class=\"card-heading\">Reports <span class=\"sub-menu1\"> > {{term}} </span>\n    </h4>\n</div>\n\n<mat-card>\n\n    <div class=\"text-center\" *ngIf=\"!report.length && showSpinner\">\n        <div class=\"spinner-border \" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n        </div>\n    </div>\n    \n    <div *ngIf=\"term == 'I Term'\">\n        <table class=\"tg\" *ngIf=\"report.length\" id=\"table_I_Term\">\n            <thead class=\"table-head\">\n                <tr>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">S. No.</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Course</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Country</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">IMA Number</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Name</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Coy</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Bn</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">WT</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">BMT-I</th> \n                    <th class=\"tg-qnnc\" colspan=\"3\">MAP READING</th> \n                    <th class=\"tg-qnnc\" colspan=\"5\">SERVICE SUBJECT BBS & BMT-II</th>\n                    <th class=\"tg-qnnc\" colspan=\"6\">CAMPS/EXS (INCLUDING TAC TRG PRACTICE)</th> \n                    <th class=\"tg-qnnc\" rowspan=\"2\">FINAL SERVICE SUBJECT TOTAL</th>\n                    <th class=\"tg-qnnc\" colspan=\"10\">FAIL IN SERVICE SUBJECT</th> \n                </tr>\n                <tr>\n                    <!-- MAP READING -->\n                    <th>PRACTICAL TEST(MR EX)</th>\n                    <th>WRITTEN TEST</th>\n                    <th>TOTAL</th>\n\n                    <!-- BMT 2 -->\n                    <th>RADIO TELEPHONY</th>\n                    <th>FIELD ENGINEERING</th>\n                    <th>ORG & ADM and I&S</th>\n                    <th>LDRSHIP TRG</th>\n                    <th>TOTAL</th>\n\n                    <!-- CAMPS/EXS -->\n                    <th>EX PARVAT RAKSHA</th>\n                    <th>EX CHINDIT</th>\n                    <th>CAMP AVG</th>\n                    <th>SPEED MARCH</th>\n                    <th>RUNBACK</th>\n                    <th>TOTAL</th>\n\n                    <th>WT</th>\n                    <th>BMT-I</th>\n                    <th>PRACTICAL TEST (MR EX)</th>\n                    <th>WRITTEN TEST</th>\n                    <th>FAIL</th>\n                    <th>SERVICE SUBJECT BMT-II</th>\n                    <th>EX PARVAT RAKSHA</th>\n                    <th>EX CHINDIT</th>\n                    <th>SPEED MARCH</th>\n                    <th>RUNBACK</th>\n                </tr>\n            </thead>\n    \n            <tbody>\n                <tr>\n                    <td colspan=\"7\" >\n                        MAXIMUM MARKS\n                    </td>\n                    <!-- TOTAL MARKS -->\n                    <!-- WT -->\n                    <td>150</td>\n                    <!-- BMT 1 -->\n                    <td>200</td>\n                    <!-- MAP READING -->\n                    <td>25</td>\n                    <td>25</td>\n                    <td>50</td>\n\n                    <!-- BMT 2 MARKS -->\n                    <td>30</td>\n                    <td>20</td>\n                    <td>25</td>\n                    <td>50</td>\n                    <td>125</td>\n\n                    <td>125</td>\n                    <td></td>\n                    <td></td>\n                    <td>15</td>\n                    <td>15</td>\n                    <td></td>\n                    <td>715</td>\n                </tr>\n                <tr *ngFor=\"let cadet of report;let i=index\">\n                    <!-- CADET INFO -->\n                    <td> {{i+1}} </td>\n                    <td> {{cadet.course}} </td>\n                    <td> {{cadet.fgcCountry}} </td>\n                    <td> {{cadet.serviceId}} </td>\n                    <td> {{cadet.name}} </td>\n                    <td> {{cadet.coy}} </td>\n                    <td> {{cadet.bn}} </td>\n                    <!-- MARKS -->\n                    <td> {{cadet.wtObtainedMarks || '0'}} </td>\n                    <td> {{cadet.bmt1ObtainedMarks || '0'}} </td>\n                    <!-- MAP READING MARKS -->\n                    <td> {{cadet.mapReadingPacticalObtainedMarks || '0'}} </td>\n                    <td> {{cadet.mapReadingWrittenObtainedMarks || '0'}} </td>\n                    <td> {{cadet.mapReadingPacticalObtainedMarks + cadet.mapReadingWrittenObtainedMarks}} </td>\n                    \n                    <!-- BMT 2 MARKS -->\n                    <td> {{cadet.radioTelephonyObtainedMarks || '0'}} </td>\n                    <td> {{cadet.fieldEngineeringObtainedMarks || '0'}} </td>\n                    <td> {{cadet.orgAdmAndIsObtainedMarks || '0'}} </td>\n                    <td> {{cadet.ldrshipTrgObtainedMarks || '0'}} </td>\n                    <td> \n                        {{cadet.radioTelephonyObtainedMarks + cadet.fieldEngineeringObtainedMarks + cadet.orgAdmAndIsObtainedMarks + cadet.ldrshipTrgObtainedMarks}}     \n                    </td>\n\n                    <!-- CAMP/EXS MARKS -->\n                    <td> {{cadet.exPervatRakshaObtainedMarks || '0'}} </td>\n                    <td> {{cadet.exChinditObtainedMarks || '0'}} </td>\n                    <td> {{cadet.campAvgObtainedMarks || '0'}} </td>\n                    <td> {{cadet.speedMarchObtainedMarks || '0'}} </td>\n                    <td> {{cadet.runbackObtainedMarks || '0'}} </td>\n                    <td> \n                        {{\n                         cadet.speedMarchObtainedMarks +\n                         cadet.runbackObtainedMarks\n                        }}     \n                    </td>\n                    <td>\n\n                         {{  cadet.wtObtainedMarks + cadet.bmt1ObtainedMarks\n                            + cadet.mapReadingPacticalObtainedMarks +cadet.mapReadingWrittenObtainedMarks \n                            + cadet.mapReadingPacticalObtainedMarks + cadet.mapReadingWrittenObtainedMarks\n                            + cadet.radioTelephonyObtainedMarks + cadet.fieldEngineeringObtainedMarks \n                            + cadet.orgAdmAndIsObtainedMarks + cadet.ldrshipTrgObtainedMarks \n                            + cadet.exPervatRakshaObtainedMarks + cadet.exChinditObtainedMarks\n                            + cadet.campAvgObtainedMarks + cadet.speedMarchObtainedMarks + cadet.runbackObtainedMarks \n                        }} \n                    </td>\n\n                    <!-- IF FAILED -->\n                    <td>{{returnFail(cadet.wtRemarks)}}</td>\n                    <td>{{returnFail(cadet.bmt1Remarks)}}</td>\n                    <td>{{returnFail(cadet.mapReadingPacticalRemarks)}}</td>\n                    <td>{{returnFail(cadet.mapReadingWrittenRemarks)}}</td>\n                    <td>{{returnResult(50,cadet.mapReadingPacticalObtainedMarks + cadet.mapReadingWrittenObtainedMarks)}}</td>\n                    <td>{{returnResult(125,cadet.radioTelephonyObtainedMarks + cadet.fieldEngineeringObtainedMarks + cadet.orgAdmAndIsObtainedMarks + cadet.ldrshipTrgObtainedMarks)}}</td>\n                    <td>{{returnFail(cadet.exPervatRakshaRemarks)}}</td>\n                    <td>{{returnFail(cadet.exChinditRemarks)}}</td>\n                    <td>{{returnFail(cadet.speedMarchRemarks)}}</td>\n                    <td>{{returnFail(cadet.runbackRemarks)}}</td>\n\n                </tr>\n            </tbody>\n        </table>\n\n    </div>\n\n    <div *ngIf=\"term == 'II Tech'\">\n        <table class=\"tg\" *ngIf=\"report.length\" id=\"table_II_Tech\" >\n            <thead class=\"table-head\">\n                <tr>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">S. No.</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Course</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Country</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">IMA Number</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Name</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Coy</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Bn</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">WT</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">BMT-I</th> \n                    <th class=\"tg-qnnc\" colspan=\"3\">MAP READING</th> \n                    <th class=\"tg-qnnc\" colspan=\"5\">SERVICE SUBJECT BBS & BMT-II</th>\n                    <th class=\"tg-qnnc\" colspan=\"6\">CAMPS/EXS (INCLUDING TAC TRG PRACTICE)</th> \n                    <th class=\"tg-qnnc\" rowspan=\"2\">FINAL SERVICE SUBJECT TOTAL</th>\n                    <th class=\"tg-qnnc\" colspan=\"10\">FAIL IN SERVICE SUBJECT</th> \n\n                </tr>\n                <tr>\n                    <!-- MAP READING -->\n                    <th>PRACTICAL TEST(MR EX)</th>\n                    <th>WRITTEN TEST</th>\n                    <th>TOTAL</th>\n\n                    <!-- BMT 2 -->\n                    <th>RADIO TELEPHONY</th>\n                    <th>FIELD ENGINEERING</th>\n                    <th>ORG & ADM and I&S</th>\n                    <th>LDRSHIP TRG</th>\n                    <th>TOTAL</th>\n\n                    <!-- CAMPS/EXS -->\n                    <th>EX PARVAT RAKSHA</th>\n                    <th>EX CHINDIT</th>\n                    <th>CAMP AVG</th>\n                    <th>SPEED MARCH</th>\n                    <th>RUNBACK</th>\n                    <th>TOTAL</th>\n\n                    <th>WT</th>\n                    <th>BMT-I</th>\n                    <th>PRACTICAL TEST (MR EX)</th>\n                    <th>WRITTEN TEST</th>\n                    <th>FAIL</th>\n                    <th>SERVICE SUBJECT BMT-II</th>\n                    <th>EX PARVAT RAKSHA</th>\n                    <th>EX CHINDIT</th>\n                    <th>SPEED MARCH</th>\n                    <th>RUNBACK</th>\n                </tr>\n\n    \n                \n            </thead>\n    \n            <tbody>\n                <tr>\n                    <td colspan=\"7\" >\n                        MAXIMUM MARKS\n                    </td>\n                    <!-- TOTAL MARKS -->\n                    <!-- WT -->\n                    <td>150</td>\n                    <!-- BMT 1 -->\n                    <td>200</td>\n                    <!-- MAP READING -->\n                    <td>25</td>\n                    <td>25</td>\n                    <td>50</td>\n\n                    <!-- BMT 2 MARKS -->\n                    <td>30</td>\n                    <td>20</td>\n                    <td>25</td>\n                    <td>50</td>\n                    <td>125</td>\n\n                    <td>125</td>\n                    <td></td>\n                    <td></td>\n                    <td>15</td>\n                    <td>15</td>\n                    <td></td>\n                    <td>715</td>\n                </tr>\n                <tr *ngFor=\"let cadet of report;let i=index\">\n                    <!-- CADET INFO -->\n                    <td> {{i+1}} </td>\n                    <td> {{cadet.course}} </td>\n                    <td> {{cadet.fgcCountry}} </td>\n                    <td> {{cadet.serviceId}} </td>\n                    <td> {{cadet.name}} </td>\n                    <td> {{cadet.coy}} </td>\n                    <td> {{cadet.bn}} </td>\n                    <!-- MARKS -->\n                    <td> {{cadet.wtObtainedMarks || '0'}} </td>\n                    <td> {{cadet.bmt1ObtainedMarks || '0'}} </td>\n                    <!-- MAP READING MARKS -->\n                    <td> {{cadet.mapReadingPacticalObtainedMarks || '0'}} </td>\n                    <td> {{cadet.mapReadingWrittenObtainedMarks || '0'}} </td>\n                    <td> {{cadet.mapReadingPacticalObtainedMarks + cadet.mapReadingWrittenObtainedMarks}} </td>\n                    \n                    <!-- BMT 2 MARKS -->\n                    <td> {{cadet.radioTelephonyObtainedMarks || '0'}} </td>\n                    <td> {{cadet.fieldEngineeringObtainedMarks || '0'}} </td>\n                    <td> {{cadet.orgAdmAndIsObtainedMarks || '0'}} </td>\n                    <td> {{cadet.ldrshipTrgObtainedMarks || '0'}} </td>\n                    <td> \n                        {{cadet.radioTelephonyObtainedMarks + cadet.fieldEngineeringObtainedMarks + cadet.orgAdmAndIsObtainedMarks + cadet.ldrshipTrgObtainedMarks}}     \n                    </td>\n\n                    <!-- CAMP/EXS MARKS -->\n                    <td> {{cadet.exPervatRakshaObtainedMarks || '0'}} </td>\n                    <td> {{cadet.exChinditObtainedMarks || '0'}} </td>\n                    <td> {{cadet.campAvgObtainedMarks || '0'}} </td>\n                    <td> {{cadet.speedMarchObtainedMarks || '0'}} </td>\n                    <td> {{cadet.runbackObtainedMarks || '0'}} </td>\n                    <td> \n                        {{\n                         cadet.speedMarchObtainedMarks +\n                         cadet.runbackObtainedMarks\n                        }}     \n                    </td>\n                    <td>\n\n                         {{  cadet.wtObtainedMarks + cadet.bmt1ObtainedMarks\n                            + cadet.mapReadingPacticalObtainedMarks +cadet.mapReadingWrittenObtainedMarks \n                            + cadet.mapReadingPacticalObtainedMarks + cadet.mapReadingWrittenObtainedMarks\n                            + cadet.radioTelephonyObtainedMarks + cadet.fieldEngineeringObtainedMarks \n                            + cadet.orgAdmAndIsObtainedMarks + cadet.ldrshipTrgObtainedMarks \n                            + cadet.exPervatRakshaObtainedMarks + cadet.exChinditObtainedMarks\n                            + cadet.campAvgObtainedMarks + cadet.speedMarchObtainedMarks + cadet.runbackObtainedMarks \n                        }} \n                          \n                    </td>\n                    \n                    <!-- IF FAILED -->\n                    <td>{{returnFail(cadet.wtRemarks)}}</td>\n                    <td>{{returnFail(cadet.bmt1Remarks)}}</td>\n                    <td>{{returnFail(cadet.mapReadingPacticalRemarks)}}</td>\n                    <td>{{cadet.mapReadingWrittenRemarks || '-'}}</td>\n                    <td>{{returnResult(50,cadet.mapReadingPacticalObtainedMarks + cadet.mapReadingWrittenObtainedMarks)}}</td>\n                    <td>{{returnResult(125,cadet.radioTelephonyObtainedMarks + cadet.fieldEngineeringObtainedMarks + cadet.orgAdmAndIsObtainedMarks + cadet.ldrshipTrgObtainedMarks)}}</td>\n                    <td>{{returnFail(cadet.exPervatRakshaRemarks)}}</td>\n                    <td>{{returnFail(cadet.exChinditRemarks)}}</td>\n                    <td>{{returnFail(cadet.speedMarchRemarks)}}</td>\n                    <td>{{returnFail(cadet.runbackRemarks)}}</td>\n\n\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <div *ngIf=\"term == 'II Term'\">\n        <table class=\"tg\" *ngIf=\"report.length\" id=\"table_II_Term\">\n            <thead class=\"table-head\">\n                <tr>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">S. No.</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Course</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Country</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">IMA Number</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Name</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Coy</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Bn</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">WT</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">BMT-I</th> \n                    <th class=\"tg-qnnc\" colspan=\"3\">MAP READING</th> \n                    <th class=\"tg-qnnc\" colspan=\"5\">SERVICE SUBJECT BBS & BMT-II</th>\n                    <th class=\"tg-qnnc\" colspan=\"6\">CAMPS/EXS (INCLUDING TAC TRG PRACTICE)</th> \n                    <th class=\"tg-qnnc\" rowspan=\"2\">FINAL SERVICE SUBJECT TOTAL</th>\n                    <th class=\"tg-qnnc\" colspan=\"10\">FAIL IN SERVICE SUBJECT</th> \n                    \n                </tr>\n                <tr>\n                    <!-- MAP READING -->\n                    <th>PRACTICAL TEST(MR EX)</th>\n                    <th>WRITTEN TEST</th>\n                    <th>TOTAL</th>\n\n                    <!-- BMT 2 -->\n                    <th>RADIO TELEPHONY</th>\n                    <th>FIELD ENGINEERING</th>\n                    <th>ORG & ADM and I&S</th>\n                    <th>LDRSHIP TRG</th>\n                    <th>TOTAL</th>\n\n                    <!-- CAMPS/EXS -->\n                    <th>EX PARVAT RAKSHA</th>\n                    <th>EX CHINDIT</th>\n                    <th>CAMP AVG</th>\n                    <th>SPEED MARCH</th>\n                    <th>RUNBACK</th>\n                    <th>TOTAL</th>\n\n                    <th>WT</th>\n                    <th>BMT-I</th>\n                    <th>PRACTICAL TEST (MR EX)</th>\n                    <th>WRITTEN TEST</th>\n                    <th>FAIL</th>\n                    <th>SERVICE SUBJECT BMT-II</th>\n                    <th>EX PARVAT RAKSHA</th>\n                    <th>EX CHINDIT</th>\n                    <th>SPEED MARCH</th>\n                    <th>RUNBACK</th>\n\n\n                </tr>\n            </thead>\n    \n            <tbody>\n                <tr>\n                    <td colspan=\"7\" >\n                        MAXIMUM MARKS\n                    </td>\n                    <!-- TOTAL MARKS -->\n                    <!-- WT -->\n                    <td>150</td>\n                    <!-- BMT 1 -->\n                    <td>200</td>\n                    <!-- MAP READING -->\n                    <td>25</td>\n                    <td>25</td>\n                    <td>50</td>\n\n                    <!-- BMT 2 MARKS -->\n                    <td>30</td>\n                    <td>20</td>\n                    <td>25</td>\n                    <td>50</td>\n                    <td>125</td>\n\n                    <td>125</td>\n                    <td></td>\n                    <td></td>\n                    <td>15</td>\n                    <td>15</td>\n                    <td></td>\n                    <td>715</td>\n                </tr>\n                <tr *ngFor=\"let cadet of report;let i=index\">\n                    <!-- CADET INFO -->\n                    <td> {{i+1}} </td>\n                    <td> {{cadet.course}} </td>\n                    <td> {{cadet.fgcCountry}} </td>\n                    <td> {{cadet.serviceId}} </td>\n                    <td> {{cadet.name}} </td>\n                    <td> {{cadet.coy}} </td>\n                    <td> {{cadet.bn}} </td>\n                    <!-- MARKS -->\n                    <td> {{cadet.wtObtainedMarks || '0'}} </td>\n                    <td> {{cadet.bmt1ObtainedMarks || '0'}} </td>\n                    <!-- MAP READING MARKS -->\n                    <td> {{cadet.mapReadingPacticalObtainedMarks || '0'}} </td>\n                    <td> {{cadet.mapReadingWrittenObtainedMarks || '0'}} </td>\n                    <td> {{cadet.mapReadingPacticalObtainedMarks + cadet.mapReadingWrittenObtainedMarks}} </td>\n                    \n                    <!-- BMT 2 MARKS -->\n                    <td> {{cadet.radioTelephonyObtainedMarks || '0'}} </td>\n                    <td> {{cadet.fieldEngineeringObtainedMarks || '0'}} </td>\n                    <td> {{cadet.orgAdmAndIsObtainedMarks || '0'}} </td>\n                    <td> {{cadet.ldrshipTrgObtainedMarks || '0'}} </td>\n                    <td> \n                        {{cadet.radioTelephonyObtainedMarks + cadet.fieldEngineeringObtainedMarks + cadet.orgAdmAndIsObtainedMarks + cadet.ldrshipTrgObtainedMarks}}     \n                    </td>\n\n                    <!-- CAMP/EXS MARKS -->\n                    <td> {{cadet.exPervatRakshaObtainedMarks || '0'}} </td>\n                    <td> {{cadet.exChinditObtainedMarks || '0'}} </td>\n                    <td> {{cadet.campAvgObtainedMarks || '0'}} </td>\n                    <td> {{cadet.speedMarchObtainedMarks || '0'}} </td>\n                    <td> {{cadet.runbackObtainedMarks || '0'}} </td>\n                    <td> \n                        {{\n                         cadet.speedMarchObtainedMarks +\n                         cadet.runbackObtainedMarks}}     \n                    </td>\n                    <td>\n                         {{  cadet.wtObtainedMarks + cadet.bmt1ObtainedMarks\n                            + cadet.mapReadingPacticalObtainedMarks +cadet.mapReadingWrittenObtainedMarks \n                            + cadet.mapReadingPacticalObtainedMarks + cadet.mapReadingWrittenObtainedMarks\n                            + cadet.radioTelephonyObtainedMarks + cadet.fieldEngineeringObtainedMarks \n                            + cadet.orgAdmAndIsObtainedMarks + cadet.ldrshipTrgObtainedMarks \n                            + cadet.exPervatRakshaObtainedMarks + cadet.exChinditObtainedMarks\n                            + cadet.campAvgObtainedMarks + cadet.speedMarchObtainedMarks + cadet.runbackObtainedMarks \n                        }}\n                    </td>\n                  <!-- IF FAILED -->\n                  <td>{{returnFail(cadet.wtRemarks)}}</td>\n                  <td>{{returnFail(cadet.bmt1Remarks)}}</td>\n                  <td>{{returnFail(cadet.mapReadingPacticalRemarks)}}</td>\n                  <td>{{cadet.mapReadingWrittenRemarks || '-'}}</td>\n                  <td>{{returnResult(50,cadet.mapReadingPacticalObtainedMarks + cadet.mapReadingWrittenObtainedMarks)}}</td>\n                  <td>{{returnResult(125,cadet.radioTelephonyObtainedMarks + cadet.fieldEngineeringObtainedMarks + cadet.orgAdmAndIsObtainedMarks + cadet.ldrshipTrgObtainedMarks)}}</td>\n                  <td>{{returnFail(cadet.exPervatRakshaRemarks)}}</td>\n                  <td>{{returnFail(cadet.exChinditRemarks)}}</td>\n                  <td>{{returnFail(cadet.speedMarchRemarks)}}</td>\n                  <td>{{returnFail(cadet.runbackRemarks)}}</td>\n\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <div *ngIf=\"term == 'III Term'\">\n        \n        <table class=\"tg\" *ngIf=\"report.length\" id=\"table_III_Term\">\n            <thead class=\"table-head\">\n                <tr>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">S. No.</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Course</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Country</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">IMA Number</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Name</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Coy</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Bn</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">WT</th>\n                    <th class=\"tg-qnnc\" rowspan=\"2\">BMT-I</th> \n                    <th class=\"tg-qnnc\" colspan=\"3\">MAP READING</th> \n                    <th class=\"tg-qnnc\" colspan=\"5\">SERVICE SUBJECT BBS & BMT-II</th>\n                    <th class=\"tg-qnnc\" colspan=\"6\">CAMPS/EXS (INCLUDING TAC TRG PRACTICE)</th> \n                    <th class=\"tg-qnnc\" rowspan=\"2\">FINAL SERVICE SUBJECT TOTAL</th>\n                    <th class=\"tg-qnnc\" colspan=\"10\">FAIL IN SERVICE SUBJECT</th> \n\n                </tr>\n                <tr>\n                    <!-- MAP READING -->\n                    <th>PRACTICAL TEST(MR EX)</th>\n                    <th>WRITTEN TEST</th>\n                    <th>TOTAL</th>\n\n                    <!-- BMT 2 -->\n                    <th>FIELD ENGINEERING</th>\n                    <th>ORG & ADM and I&S</th>\n                    <th>FIN & TIME MGT</th>\n                    <th>LDRSHIP TRG</th>\n                    <th>TOTAL</th>\n\n                    <!-- CAMPS/EXS -->\n                    <th>EX PARVAT RAKSHA</th>\n                    <th>EX CHINDIT</th>\n                    <th>CAMP AVG</th>\n                    <th>SPEED MARCH</th>\n                    <th>RUNBACK</th>\n                    <th>TOTAL</th>\n\n                    <th>WT</th>\n                    <th>BMT-I</th>\n                    <th>PRACTICAL TEST (MR EX)</th>\n                    <th>WRITTEN TEST</th>\n                    <th>FAIL</th>\n                    <th>SERVICE SUBJECT BMT-II</th>\n                    <th>EX PARVAT RAKSHA</th>\n                    <th>EX CHINDIT</th>\n                    <th>SPEED MARCH</th>\n                    <th>RUNBACK</th>\n\n                </tr>\n\n    \n                \n            </thead>\n    \n            <tbody>\n                <tr>\n                    <td colspan=\"7\" >\n                        MAXIMUM MARKS\n                    </td>\n                    <!-- TOTAL MARKS -->\n                    <!-- WT -->\n                    <td>150</td>\n                    <!-- BMT 1 -->\n                    <td>200</td>\n                    <!-- MAP READING -->\n                    <td>25</td>\n                    <td>25</td>\n                    <td>50</td>\n\n                    <!-- BMT 2 MARKS -->\n                    <td>25</td>\n                    <td>25</td>\n                    <td>25</td>\n                    <td>50</td>\n                    <td>125</td>\n\n                    <td>125</td>\n                    <td>125</td>\n                    <td>125</td>\n                    <td>15</td>\n                    <td>50</td>\n                    <td>65</td>\n                    <td>715</td>\n                </tr>\n                <tr *ngFor=\"let cadet of report;let i=index\">\n                    <!-- CADET INFO -->\n                    <td> {{i+1}} </td>\n                    <td> {{cadet.course}} </td>\n                    <td> {{cadet.fgcCountry}} </td>\n                    <td> {{cadet.serviceId}} </td>\n                    <td> {{cadet.name}} </td>\n                    <td> {{cadet.coy}} </td>\n                    <td> {{cadet.bn}} </td>\n                    <!-- MARKS -->\n                    <td> {{cadet.wtObtainedMarks || '0'}} </td>\n                    <td> {{cadet.bmt1ObtainedMarks || '0'}} </td>\n                    <!-- MAP READING MARKS -->\n                    <td> {{cadet.mapReadingPacticalObtainedMarks || '0'}} </td>\n                    <td> {{cadet.mapReadingWrittenObtainedMarks || '0'}} </td>\n                    <td> {{cadet.mapReadingPacticalObtainedMarks + cadet.mapReadingWrittenObtainedMarks}} </td>\n                    \n                    <!-- BMT 2 MARKS -->\n                    <td> {{cadet.fieldEngineeringObtainedMarks || '0'}} </td>\n                    <td> {{cadet.orgAdmAndIsObtainedMarks || '0'}} </td>\n                    <td> {{cadet.finTimeMgtObtainedMarks || '0'}} </td>\n\n                    <td> {{cadet.ldrshipTrgObtainedMarks || '0'}} </td>\n                    <td> \n                        {{cadet.finTimeMgtObtainedMarks + cadet.fieldEngineeringObtainedMarks + cadet.orgAdmAndIsObtainedMarks + cadet.ldrshipTrgObtainedMarks}}     \n                    </td>\n\n                    <!-- CAMP/EXS MARKS -->\n                    <td> {{cadet.exPervatRakshaObtainedMarks || '0'}} </td>\n                    <td> {{cadet.exChinditObtainedMarks || '0'}} </td>\n                    <td> {{cadet.campAvgObtainedMarks || '0'}} </td>\n                    <td> {{cadet.speedMarchObtainedMarks || '0'}} </td>\n                    <td> {{cadet.runbackObtainedMarks || '0'}} </td>\n                    <td> \n                        {{\n                         cadet.speedMarchObtainedMarks +\n                         cadet.runbackObtainedMarks}}     \n                    </td>\n                    <td>\n\n                         {{  cadet.wtObtainedMarks + cadet.bmt1ObtainedMarks\n                            + cadet.mapReadingPacticalObtainedMarks +cadet.mapReadingWrittenObtainedMarks \n                            + cadet.mapReadingPacticalObtainedMarks + cadet.mapReadingWrittenObtainedMarks\n                            + cadet.radioTelephonyObtainedMarks + cadet.fieldEngineeringObtainedMarks \n                            + cadet.orgAdmAndIsObtainedMarks + cadet.ldrshipTrgObtainedMarks \n                            + cadet.exPervatRakshaObtainedMarks + cadet.exChinditObtainedMarks\n                            + cadet.campAvgObtainedMarks + cadet.speedMarchObtainedMarks + cadet.runbackObtainedMarks \n                        }} \n                          \n                    </td>\n       <!-- IF FAILED -->\n       <td>{{returnFail(cadet.wtRemarks)}}</td>\n       <td>{{returnFail(cadet.bmt1Remarks)}}</td>\n       <td>{{returnFail(cadet.mapReadingPacticalRemarks)}}</td>\n       <td>{{cadet.mapReadingWrittenRemarks || '-'}}</td>\n       <td>{{returnResult(50,cadet.mapReadingPacticalObtainedMarks + cadet.mapReadingWrittenObtainedMarks)}}</td>\n       <td>{{returnResult(125,cadet.finTimeMgtObtainedMarks + cadet.fieldEngineeringObtainedMarks + cadet.orgAdmAndIsObtainedMarks + cadet.ldrshipTrgObtainedMarks)}}</td>\n       <td>{{returnFail(cadet.exPervatRakshaRemarks)}}</td>\n       <td>{{returnFail(cadet.exChinditRemarks)}}</td>\n       <td>{{returnFail(cadet.speedMarchRemarks)}}</td>\n       <td>{{returnFail(cadet.runbackRemarks)}}</td>\n\n                </tr>\n            </tbody>\n        </table>\n\n    </div>\n   \n    <div class=\"pull-right mt-2 mb-5 \" >\n        <button mat-raised-button *ngIf=\"report.length && !showSpinner\" (click)=\"exportToExcel()\" >\n            DOWNLOAD\n        </button>\n    </div>\n\n\n    <!-- <div class=\"\">\n        <mat-paginator #myPaginator [length]=\"resultsLength\" [pageSizeOptions]=\"[25]\" showFirstLastButtons>\n        </mat-paginator>\n    </div> -->\n\n\n</mat-card>");

/***/ }),

/***/ "Ygov":
/*!************************************************************!*\
  !*** ./src/app/main/trg-team/reports/reports.component.ts ***!
  \************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _raw_loader_reports_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./reports.component.html */ "Pgq1");
/* harmony import */ var _reports_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.component.scss */ "jeZn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "JcrP");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(router, route, service, spinner, cdref, sharedService) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.spinner = spinner;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.terms = ['I Term', 'II Term', 'II Tech', 'III Term'];
        this.report = [];
        this.showSpinner = true;
        this.failArr = ['fail', 'Fail', 'FAIL', 'failed', 'Failed', 'FAILED'];
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent.prototype.getReports = function () {
        var _this = this;
        this.service.getGCReports().subscribe(function (res) {
            console.log(res);
            _this.allReports = res.object;
            if (_this.allReports) {
                _this.showSpinner = false;
                _this.route.params.subscribe(function (params) {
                    _this.term = params.term;
                    _this.cdref.detectChanges();
                    if (!_this.terms.includes(params.term)) {
                        _this.router.navigate(['/main/trg-team/dashboard']);
                    }
                    else {
                        if (_this.term == 'I Term') {
                            _this.report = _this.allReports.term1;
                            _this.cdref.detectChanges();
                        }
                        else if (_this.term == 'II Term') {
                            _this.report = _this.allReports.term2;
                            _this.cdref.detectChanges();
                        }
                        else if (_this.term == 'II Tech') {
                            _this.report = _this.allReports.tech2;
                            _this.cdref.detectChanges();
                        }
                        else if (_this.term == 'III Term') {
                            _this.report = _this.allReports.term3;
                            _this.cdref.detectChanges();
                        }
                    }
                    // console.log(this.report);
                });
            }
            _this.cdref.detectChanges();
        });
    };
    ReportsComponent.prototype.returnResult = function (total, obtained) {
        var result = '-';
        if (obtained) {
            total = parseInt(total);
            obtained = parseInt(obtained);
            var passingMarks = total * 40 / 100;
            if (obtained < passingMarks)
                result = 'FAIL';
            else
                result = '-';
        }
        return result;
    };
    ReportsComponent.prototype.returnFail = function (remark) {
        var res = '-';
        if (this.failArr.includes(remark)) {
            res = 'Fail';
        }
        else {
            res = '-';
        }
        return res;
    };
    ReportsComponent.prototype.ngAfterViewInit = function () {
        this.getReports();
    };
    ReportsComponent.prototype.exportToExcel = function () {
        var tbl;
        if (this.term == 'I Term') {
            tbl = document.getElementById('table_I_Term');
            this.fileName = 'Reports_I_Term.xlsx';
        }
        else if (this.term == 'II Term') {
            tbl = document.getElementById('table_II_Term');
            this.fileName = 'Reports_II_Term.xlsx';
        }
        else if (this.term == 'II Tech') {
            tbl = document.getElementById('table_II_Tech');
            this.fileName = 'Reports_II_Tech.xlsx';
        }
        else if (this.term == 'III Term') {
            tbl = document.getElementById('table_III_Term');
            this.fileName = 'Reports_III_Term.xlsx';
        }
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].table_to_sheet(tbl);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_7__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        xlsx__WEBPACK_IMPORTED_MODULE_7__["writeFile"](wb, this.fileName);
    };
    ReportsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__["TrgTeamService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
    ]; };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-reports',
            template: _raw_loader_reports_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_reports_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__["TrgTeamService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "jeZn":
/*!**************************************************************!*\
  !*** ./src/app/main/trg-team/reports/reports.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 !important;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n  margin-bottom: 10px !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n  overflow-x: scroll;\n  display: block;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle !important;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: normal;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.t-name {\n  width: 200px !important;\n  max-width: 100% !important;\n}\n\ntd {\n  text-align: center;\n}");

/***/ })

}]);