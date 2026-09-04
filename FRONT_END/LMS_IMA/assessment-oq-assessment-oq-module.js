(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assessment-oq-assessment-oq-module"],{

/***/ "8cdW":
/*!*************************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/assessment-oq/assessment-oq.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 0 !important;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 0px;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-kln5 {\n  background-color: #c6c4c4;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0lax {\n  text-align: left;\n  vertical-align: top;\n}");

/***/ }),

/***/ "Y3Ni":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/assessment-oq/assessment-oq.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div id=\"top-bar\" class=\"row\">\r\n      <h2>E-Dossier- ASSESSMENT: OQ MATRIX</h2>\r\n    </div>\r\n  \r\n    <div class=\"main-row row\">\r\n      <div class=\"container-fluid\">\r\n      <div class=\"mat-card\">\r\n  \r\n    <div class=\"box-shadow\">\r\n      <h4 class=\"card-heading\">  <span class=\"sub-menu1\">I TERM (DE) : OQ MARKS</span></h4>\r\n    </div>\r\n    <form [formGroup]=\"AssessmentForm\">\r\n        <div class=\"mb-5\" *ngIf=\"termid==1 || termid==2 || termid==3\">  \r\n        <div formArrayName=\"trgEQTNSubResult\" >\r\n        <div class=\"box-shadow\">\r\n          <h4 class=\"card-heading\">  <span class=\"sub-menu1\">MID TERM</span></h4>\r\n        </div>\r\n    \r\n          <table class=\"tg\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-0lax\">Trg Activity</th>\r\n                <th class=\"tg-0lax\" colspan=\"2\">Pl Cdr</th>\r\n                <th class=\"tg-0lax\" colspan=\"2\">Coy Cdr</th>\r\n                <th class=\"tg-0lax\" colspan=\"2\">Bn Cdr</th>\r\n                <th class=\"tg-0lax\">Total Marks</th>\r\n                <th class=\"tg-0lax\">Marks Given</th>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"tg-0lax\"></th>\r\n                <th class=\"tg-0lax\">Max Marks</th>\r\n                <th class=\"tg-0lax\">Marks given </th>\r\n                <th class=\"tg-0lax\">Max Marks</th>\r\n                <th class=\"tg-0lax\">Marks given </th>\r\n                <th class=\"tg-0lax\">Max Marks</th>\r\n                <th class=\"tg-0lax\">Marks given </th>\r\n                <th class=\"tg-0lax\"></th>\r\n                <th class=\"tg-0lax\"></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let mr of getCSubjectRes.controls;let i=index\">\r\n                <ng-container [formGroupName]=\"i\">\r\n                <td class=\"tg-0lax\">{{mr.value.subjectName}}</td>\r\n               \r\n                 <td class=\"tg-0lax\">{{mr.value.totalMarksPlCdr}}</td>\r\n                <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"obtainedMarksPlCdr\" class=\"form-control\" readonly></td>\r\n                <td class=\"tg-0lax\">{{mr.value.totalMarksCoyCdr}}</td>\r\n                <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"obtainedMarksCoyCdr\" class=\"form-control\" readonly></td>\r\n               \r\n                <td class=\"tg-0lax\">{{mr.value.totalMarksBnCdr}}</td>\r\n                <td class=\"tg-0lax\">\r\n                  <input type=\"text\" formControlName=\"obtainedMarksBnCdr\" class=\"form-control\" readonly>\r\n                </td>\r\n                <!-- <td class=\"tg-0lax\">{{this.totalBNPLCOYMarks}}</td> -->\r\n                <td class=\"tg-0lax\">{{mr.value.totalBNPLCOYMarks}}</td>\r\n                <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"totalPLBNCOYObtainedMarks\" class=\"form-control\" readonly></td>\r\n              </ng-container>  </tr>\r\n             <tr>\r\n                <td class=\"tg-0lax\"><b>Total (Bn level)</b></td>\r\n                <td class=\"tg-0lax\"><b>{{this.totalPlMarks_I_MID_TERM}}</b></td>\r\n                <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedPlMarks_I_MID_TERM\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n                <td class=\"tg-0lax\"><b>{{this.totalCoyMarks_I_MID_TERM}}</b></td>\r\n                <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedCoyMarks_I_MID_TERM\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n                <td class=\"tg-0lax\"><b>{{this.totalBnMarks_I_MID_TERM}}</b></td>\r\n                <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedBnMarks_I_MID_TERM\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n                <td class=\"tg-0lax\"><b>{{this.total_I_MID_TERM}}</b></td>\r\n                <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtained_I_MID_TERM\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n              </tr>\r\n              \r\n              <tr>\r\n                <td class=\"tg-0lax\">Acad</td>\r\n                <td class=\"tg-0lax\">-</td>\r\n                <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n                <td class=\"tg-0lax\">-</td>\r\n                <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n                <td class=\"tg-0lax\">-</td>\r\n                <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n                <td class=\"tg-0lax\">20</td>\r\n                <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"acd_I_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-0lax\">Drill</td>\r\n                <td class=\"tg-0lax\">-</td>\r\n                <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n                <td class=\"tg-0lax\">-</td>\r\n                <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n                <td class=\"tg-0lax\">-</td>\r\n                <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n                <td class=\"tg-0lax\">20</td>\r\n                <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"drill_I_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-0lax\">Eqtn</td>\r\n                <td class=\"tg-0lax\">-</td>\r\n                <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n                <td class=\"tg-0lax\">-</td>\r\n                <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n                <td class=\"tg-0lax\">-</td>\r\n                <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n                <td class=\"tg-0lax\">10</td>\r\n                <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"oqEqtn_I_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-0lax\" colspan=\"7\"><b>Grand Total</b></td>\r\n                <td class=\"tg-0lax\"><b>{{this._G_T_I_MID_TERM}}</b></td>\r\n                <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"finaltotal_I_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n      \r\n        <div class=\"text-right\">\r\n        <button class=\"btn btn-color mt-2\">Submit</button>\r\n        </div>\r\n        </div>\r\n        <div formArrayName=\"trgEQTNSubResult_I_FINAL_TERM\">\r\n          <div class=\"box-shadow\">\r\n            <h4 class=\"card-heading\">  <span class=\"sub-menu1\">FINAL TERM</span></h4>\r\n        </div>\r\n        <table class=\"tg\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"tg-0lax\">Trg Activity</th>\r\n            <th class=\"tg-0lax\" colspan=\"2\">Pl Cdr</th>\r\n            <th class=\"tg-0lax\" colspan=\"2\">Coy Cdr</th>\r\n            <th class=\"tg-0lax\" colspan=\"2\">Bn Cdr</th>\r\n            <th class=\"tg-0lax\">Total Marks</th>\r\n            <th class=\"tg-0lax\">Marks Given</th>\r\n          </tr>\r\n          <tr>\r\n            <th class=\"tg-0lax\"></th>\r\n            <th class=\"tg-0lax\">Max Marks</th>\r\n            <th class=\"tg-0lax\">Marks given </th>\r\n            <th class=\"tg-0lax\">Max Marks</th>\r\n            <th class=\"tg-0lax\">Marks given </th>\r\n            <th class=\"tg-0lax\">Max Marks</th>\r\n            <th class=\"tg-0lax\">Marks given </th>\r\n            <th class=\"tg-0lax\"></th>\r\n            <th class=\"tg-0lax\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let mr of getCSubjectRes4.controls;let i=index\">\r\n            <ng-container [formGroupName]=\"i\">\r\n            <td class=\"tg-0lax\">{{mr.value.subjectName}}</td>\r\n           \r\n             <td class=\"tg-0lax\">{{mr.value.totalMarksPlCdr}}</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"obtainedMarksPlCdr\" class=\"form-control\" readonly></td>\r\n            <td class=\"tg-0lax\">{{mr.value.totalMarksCoyCdr}}</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"obtainedMarksCoyCdr\" class=\"form-control\" readonly></td>\r\n           \r\n            <td class=\"tg-0lax\">{{mr.value.totalMarksBnCdr}}</td>\r\n            <td class=\"tg-0lax\">\r\n              <input type=\"text\" formControlName=\"obtainedMarksBnCdr\" class=\"form-control\" readonly>\r\n            </td>\r\n            <!-- <td class=\"tg-0lax\">{{this.totalBNPLCOYMarks}}</td> -->\r\n            <td class=\"tg-0lax\">{{mr.value.totalBNPLCOYMarks}}</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"totalPLBNCOYObtainedMarks\"  class=\"form-control\" readonly></td>\r\n          </ng-container> \r\n         </tr>\r\n         <tr>\r\n          <td class=\"tg-0lax\"><b>Total (Bn level)</b></td>\r\n          <td class=\"tg-0lax\"><b>{{this.totalPlMarks_I_FINAL_TERM}}</b></td>\r\n          <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedPlMarks_I_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n          <td class=\"tg-0lax\"><b>{{this.totalCoyMarks_I_FINAL_TERM}}</b></td>\r\n          <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedCoyMarks_I_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n          <td class=\"tg-0lax\"><b>{{this.totalBnMarks_I_FINAL_TERM}}</b></td>\r\n          <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedBnMarks_I_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n          <td class=\"tg-0lax\"><b>{{this.total_I_FINAL_TERM}}</b></td>\r\n          <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtained_I_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"tg-0lax\">Acad</td>\r\n          <td class=\"tg-0lax\">-</td>\r\n          <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          <td class=\"tg-0lax\">-</td>\r\n          <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          <td class=\"tg-0lax\">-</td>\r\n          <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          <td class=\"tg-0lax\">20</td>\r\n          <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"acd_I_FINAL_TERM\" [ngModelOptions]=\"{standalone: true}\"  class=\"form-control\" readonly></td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"tg-0lax\">Drill</td>\r\n          <td class=\"tg-0lax\">-</td>\r\n          <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          <td class=\"tg-0lax\">-</td>\r\n          <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          <td class=\"tg-0lax\">-</td>\r\n          <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          <td class=\"tg-0lax\">20</td>\r\n          <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"drill_I_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"tg-0lax\">Eqtn</td>\r\n          <td class=\"tg-0lax\">-</td>\r\n          <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          <td class=\"tg-0lax\">-</td>\r\n          <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          <td class=\"tg-0lax\">-</td>\r\n          <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          <td class=\"tg-0lax\">10</td>\r\n          <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"oqEqtn_I_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n        </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\"><b>Grand Total</b></td>\r\n            <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\" [(ngModel)]=\"finaltotal_I_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n            <td class=\"tg-0pky\"><b>{{this._G_T_I_FINAL_TERM}}</b></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\" [(ngModel)]=\"finaltotal_I_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n          </tr>\r\n         \r\n          <tr>\r\n            <td class=\"tg-0pky\">Pre Mid Term (Mid Term OQ)</td>\r\n           <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\">{{this._G_T_I_MID_TERM}}</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"  [(ngModel)]=\"finaltotal_I_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">Pre Final Exam (Final OQ)</td>\r\n           <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\">{{this._G_T_I_FINAL_TERM}}</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"  [(ngModel)]=\"finaltotal_I_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">Avg (Pre + Post)/2</td>\r\n            <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\">{{this._G_T_I_FINAL_TERM}}</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"  [(ngModel)]=\"avg_I_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n          </tr>\r\n            <tr>\r\n            <td class=\"tg-0pky\">DC &amp; CI</td>\r\n            <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\">20</td>\r\n            <td class=\"tg-0pky\"><input type=\"number\"  [(ngModel)]=\"marks_DC_CI_I_Term\" [ngModelOptions]=\"{standalone: true}\" (change)=\"change($event)\"></td>\r\n          </tr>\r\n           <tr>\r\n            <td class=\"tg-0pky\">Comdt</td>\r\n           <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\">30</td>\r\n            <td class=\"tg-0pky\"><input type=\"number\"  [(ngModel)]=\"marks_comdt_I_Term\" [ngModelOptions]=\"{standalone: true}\" (change)=\"changec($event)\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\" colspan=\"7\"><b>Grand Total</b></td>\r\n            <td class=\"tg-0pky\"><b>{{this._G_T_I_MID_TERM+50}}</b></td>\r\n            <td class=\"tg-0pky\"><input type=\"number\"  [(ngModel)]=\"GRAND_TOTAL_I_TERM\" [ngModelOptions]=\"{standalone: true}\"  class=\"form-control\" readonly></td>\r\n          </tr>\r\n        </tbody>\r\n        </table>\r\n        <div class=\"text-right\">\r\n        <button class=\"btn btn-color mt-2\" type=\"submit\" (click)=\"onSubmit1()\">Submit</button>\r\n        </div>\r\n        </div>\r\n        </div>\r\n\r\n\r\n   <div class=\"mb-5\" *ngIf=\"termid==2 || termid==3\">\r\n     <div formArrayName=\"trgEQTNSubResult2\" >\r\n    \r\n    <div class=\"box-shadow\">\r\n      <h4 class=\"card-heading\">  <span class=\"sub-menu1\">II TERM (DE/EX-NDA/EX-ACC/II TECH : OQ MARKS</span></h4>\r\n    </div>\r\n  \r\n  <div class=\"box-shadow\">\r\n    <h4 class=\"card-heading\">  <span class=\"sub-menu1\">MID TERM</span></h4>\r\n  </div>\r\n  <table class=\"tg\">\r\n  <thead>\r\n    <tr>\r\n      <th class=\"tg-0lax\">Trg Activity</th>\r\n      <th class=\"tg-0lax\" colspan=\"2\">Pl Cdr</th>\r\n      <th class=\"tg-0lax\" colspan=\"2\">Coy Cdr</th>\r\n      <th class=\"tg-0lax\" colspan=\"2\">Bn Cdr</th>\r\n      <th class=\"tg-0lax\">Total Marks</th>\r\n      <th class=\"tg-0lax\">Marks Given</th>\r\n    </tr>\r\n    <tr>\r\n      <th class=\"tg-0lax\"></th>\r\n      <th class=\"tg-0lax\">Max Marks</th>\r\n      <th class=\"tg-0lax\">Marks given </th>\r\n      <th class=\"tg-0lax\">Max Marks</th>\r\n      <th class=\"tg-0lax\">Marks given </th>\r\n      <th class=\"tg-0lax\">Max Marks</th>\r\n      <th class=\"tg-0lax\">Marks given </th>\r\n      <th class=\"tg-0lax\"></th>\r\n      <th class=\"tg-0lax\"></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let mr of getCSubjectRes2.controls;let i=index\">\r\n      <ng-container [formGroupName]=\"i\">\r\n        <td class=\"tg-0lax\">{{mr.value.subjectName}}</td>\r\n               \r\n        <td class=\"tg-0lax\">{{mr.value.totalMarksPlCdr}}</td>\r\n       <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"obtainedMarksPlCdr\" class=\"form-control\" readonly></td>\r\n       <td class=\"tg-0lax\">{{mr.value.totalMarksCoyCdr}}</td>\r\n       <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"obtainedMarksCoyCdr\" class=\"form-control\" readonly></td>\r\n      \r\n       <td class=\"tg-0lax\">{{mr.value.totalMarksBnCdr}}</td>\r\n       <td class=\"tg-0lax\">\r\n         <input type=\"text\" formControlName=\"obtainedMarksBnCdr\" class=\"form-control\" readonly>\r\n       </td>\r\n       <!-- <td class=\"tg-0lax\">{{this.totalBNPLCOYMarks}}</td> -->\r\n       <td class=\"tg-0lax\">{{mr.value.totalBNPLCOYMarks}}</td>\r\n       <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"totalPLBNCOYObtainedMarks\"   class=\"form-control\" readonly></td>\r\n      </ng-container>\r\n    </tr>\r\n  \r\n    <tr>\r\n      <td class=\"tg-0lax\"><b>Total (Bn level)</b></td>\r\n      <td class=\"tg-0lax\"><b>{{this.totalPlMarks_II_MID_TERM}}</b></td>\r\n      <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedPlMarks_II_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      <td class=\"tg-0lax\"><b>{{this.totalCoyMarks_II_MID_TERM}}</b></td>\r\n      <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedCoyMarks_II_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      <td class=\"tg-0lax\"><b>{{this.totalBnMarks_II_MID_TERM}}</b></td>\r\n      <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedBnMarks_II_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      <td class=\"tg-0lax\"><b>{{this.total_II_MID_TERM}}</b></td>\r\n      <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtained_II_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"tg-0lax\">Acad</td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">20</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"acd_II_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"tg-0lax\">Drill</td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">20</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"drill_II_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"tg-0lax\">Eqtn</td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">10</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"oqEqtn_II_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"tg-0lax\" colspan=\"7\"><b>Grand Total</b></td>\r\n      <td class=\"tg-0lax\"><b>{{this._G_T_II_MID_TERM}}</b></td>\r\n      <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"finaltotal_II_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr> \r\n\r\n  </tbody>\r\n  </table>\r\n  <div class=\"text-right\">\r\n  <button class=\"btn btn-color mt-2\" >Submit</button>\r\n </div>\r\n     </div>\r\n\r\n\r\n  <div formArrayName=\"trgEQTNSubResult_II_FINAL_TERM\">\r\n  <div class=\"box-shadow\">\r\n      <h4 class=\"card-heading\">  <span class=\"sub-menu1\">FINAL TERM</span></h4>\r\n  </div>\r\n  <table class=\"tg\">\r\n  <thead>\r\n    <tr>\r\n      <th class=\"tg-0lax\">Trg Activity</th>\r\n      <th class=\"tg-0lax\" colspan=\"2\">Pl Cdr</th>\r\n      <th class=\"tg-0lax\" colspan=\"2\">Coy Cdr</th>\r\n      <th class=\"tg-0lax\" colspan=\"2\">Bn Cdr</th>\r\n      <th class=\"tg-0lax\">Total Marks</th>\r\n      <th class=\"tg-0lax\">Marks Given</th>\r\n    </tr>\r\n    <tr>\r\n      <th class=\"tg-0lax\"></th>\r\n      <th class=\"tg-0lax\">Max Marks</th>\r\n      <th class=\"tg-0lax\">Marks given </th>\r\n      <th class=\"tg-0lax\">Max Marks</th>\r\n      <th class=\"tg-0lax\">Marks given </th>\r\n      <th class=\"tg-0lax\">Max Marks</th>\r\n      <th class=\"tg-0lax\">Marks given </th>\r\n      <th class=\"tg-0lax\"></th>\r\n      <th class=\"tg-0lax\"></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let mr of getCSubjectRes2.controls;let i=index\">\r\n      <ng-container [formGroupName]=\"i\">\r\n        <td class=\"tg-0lax\">{{mr.value.subjectName}}</td>\r\n               \r\n        <td class=\"tg-0lax\">{{mr.value.totalMarksPlCdr}}</td>\r\n       <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"obtainedMarksPlCdr\" class=\"form-control\" readonly></td>\r\n       <td class=\"tg-0lax\">{{mr.value.totalMarksCoyCdr}}</td>\r\n       <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"obtainedMarksCoyCdr\" class=\"form-control\" readonly></td>\r\n      \r\n       <td class=\"tg-0lax\">{{mr.value.totalMarksBnCdr}}</td>\r\n       <td class=\"tg-0lax\">\r\n         <input type=\"text\" formControlName=\"obtainedMarksBnCdr\" class=\"form-control\" readonly>\r\n       </td>\r\n       <!-- <td class=\"tg-0lax\">{{this.totalBNPLCOYMarks}}</td> -->\r\n       <td class=\"tg-0lax\">{{mr.value.totalBNPLCOYMarks}}</td>\r\n       <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"totalPLBNCOYObtainedMarks\"   class=\"form-control\"></td>\r\n      </ng-container>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"tg-0lax\"><b>Total (Bn level)</b></td>\r\n      <td class=\"tg-0lax\"><b>{{this.totalPlMarks_I_FINAL_TERM}}</b></td>\r\n      <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedPlMarks_I_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      <td class=\"tg-0lax\"><b>{{this.totalCoyMarks_I_FINAL_TERM}}</b></td>\r\n      <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedCoyMarks_I_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      <td class=\"tg-0lax\"><b>{{this.totalBnMarks_I_FINAL_TERM}}</b></td>\r\n      <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedBnMarks_I_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      <td class=\"tg-0lax\"><b>{{this.total_I_FINAL_TERM}}</b></td>\r\n      <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtained_I_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"tg-0lax\">Acad</td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">20</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"acd_II_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"tg-0lax\">Drill</td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">20</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"drill_II_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"tg-0lax\">Eqtn</td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">10</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"oqEqtn_II_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr>\r\n      <tr>\r\n        <td class=\"tg-0pky\"><b>Grand Total</b></td>\r\n        <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\" [(ngModel)]=\"finaltotal_II_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n        <td class=\"tg-0pky\"><b>{{this._G_T_II_FINAL_TERM}}</b></td>\r\n        <td class=\"tg-0pky\"><input type=\"text\" [(ngModel)]=\"finaltotal_II_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      </tr>\r\n    <tr>\r\n      <td class=\"tg-0pky\">Pre Mid Term (Mid Term OQ)</td>\r\n     <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n      <td class=\"tg-0pky\">{{this._G_T_II_MID_TERM}}</td>\r\n      <td class=\"tg-0pky\"><input type=\"text\"  [(ngModel)]=\"finaltotal_II_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"tg-0pky\">Pre Final Exam (Final OQ)</td>\r\n     <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n      <td class=\"tg-0pky\">{{this._G_T_II_FINAL_TERM}}</td>\r\n      <td class=\"tg-0pky\"><input type=\"text\"  [(ngModel)]=\"finaltotal_II_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"tg-0pky\">Avg (Pre + Post)/2</td>\r\n      <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n      <td class=\"tg-0pky\">{{this._G_T_I_MID_TERM}}</td>\r\n      <td class=\"tg-0pky\"><input type=\"text\"  [(ngModel)]=\"avg_II_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr>\r\n      <tr>\r\n      <td class=\"tg-0pky\">DC &amp; CI</td>\r\n      <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n      <td class=\"tg-0pky\">20</td>\r\n      <td class=\"tg-0pky\"><input type=\"text\"  [(ngModel)]=\"marks_DC_CI_II_Term\" [ngModelOptions]=\"{standalone: true}\" (change)=\"change($event)\"></td>\r\n    </tr>\r\n     <tr>\r\n      <td class=\"tg-0pky\">Comdt</td>\r\n     <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n      <td class=\"tg-0pky\">30</td>\r\n      <td class=\"tg-0pky\"><input type=\"text\"  [(ngModel)]=\"marks_comdt_II_Term\" [ngModelOptions]=\"{standalone: true}\" (change)=\"changec($event)\"></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"tg-0pky\"><b>Grand Total</b></td>\r\n     <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n      <td class=\"tg-0pky\"><b>{{this._G_T_I_MID_TERM+50}}</b></td>\r\n      <td class=\"tg-0pky\"><input type=\"text\"  [(ngModel)]=\"GRAND_TOTAL_II_TERM\" [ngModelOptions]=\"{standalone: true}\"  class=\"form-control\" readonly></td>\r\n    </tr>\r\n  </tbody>\r\n  </table>\r\n  <div class=\"text-right\">\r\n  <button class=\"btn btn-color mt-2\"  type=\"submit\" (click)=\"onSubmit2()\">Submit</button>\r\n  </div>\r\n     </div>\r\n    </div>\r\n\r\n  \r\n   \r\n\r\n  <div class=\"mb-5\" *ngIf=\"termid==3\">\r\n    <div formArrayName=\"trgEQTNSubResult3\">\r\n    <div class=\"box-shadow\">\r\n        <h4 class=\"card-heading\">  <span class=\"sub-menu1\">III TERM ((DE/ Ex-NDA/Ex-ACC)/ III Tech) : OQ MARKS</span></h4>\r\n      </div>\r\n   \r\n    <div class=\"box-shadow\">\r\n      <h4 class=\"card-heading\">  <span class=\"sub-menu1\">MID TERM</span></h4>\r\n    </div>\r\n    <table class=\"tg\">\r\n    <thead>\r\n      <tr>\r\n        <th class=\"tg-0lax\">Trg Activity</th>\r\n        <th class=\"tg-0lax\" colspan=\"2\">Pl Cdr</th>\r\n        <th class=\"tg-0lax\" colspan=\"2\">Coy Cdr</th>\r\n        <th class=\"tg-0lax\" colspan=\"2\">Bn Cdr</th>\r\n        <th class=\"tg-0lax\">Total Marks</th>\r\n        <th class=\"tg-0lax\">Marks Given</th>\r\n      </tr>\r\n      <tr>\r\n        <th class=\"tg-0lax\"></th>\r\n        <th class=\"tg-0lax\">Max Marks</th>\r\n        <th class=\"tg-0lax\">Marks given </th>\r\n        <th class=\"tg-0lax\">Max Marks</th>\r\n        <th class=\"tg-0lax\">Marks given </th>\r\n        <th class=\"tg-0lax\">Max Marks</th>\r\n        <th class=\"tg-0lax\">Marks given </th>\r\n        <th class=\"tg-0lax\"></th>\r\n        <th class=\"tg-0lax\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let mr of getCSubjectRes3.controls;let i=index\">\r\n        <ng-container [formGroupName]=\"i\">\r\n          <td class=\"tg-0lax\">{{mr.value.subjectName}}</td>\r\n               \r\n          <td class=\"tg-0lax\">{{mr.value.totalMarksPlCdr}}</td>\r\n         <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"obtainedMarksPlCdr\" class=\"form-control\" readonly></td>\r\n         <td class=\"tg-0lax\">{{mr.value.totalMarksCoyCdr}}</td>\r\n         <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"obtainedMarksCoyCdr\" class=\"form-control\" readonly></td>\r\n        \r\n         <td class=\"tg-0lax\">{{mr.value.totalMarksBnCdr}}</td>\r\n         <td class=\"tg-0lax\">\r\n           <input type=\"text\" formControlName=\"obtainedMarksBnCdr\" class=\"form-control\" readonly>\r\n         </td>\r\n         <!-- <td class=\"tg-0lax\">{{this.totalBNPLCOYMarks}}</td> -->\r\n         <td class=\"tg-0lax\">{{mr.value.totalBNPLCOYMarks}}</td>\r\n         <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"totalPLBNCOYObtainedMarks\"   class=\"form-control\" readonly></td>\r\n        </ng-container>  \r\n      </tr>\r\n      <tr>\r\n        <td class=\"tg-0lax\"><b>Total (Bn level)</b></td>\r\n        <td class=\"tg-0lax\"><b>{{this.totalPlMarks_III_MID_TERM}}</b></td>\r\n        <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedPlMarks_III_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n        <td class=\"tg-0lax\"><b>{{this.totalCoyMarks_III_MID_TERM}}</b></td>\r\n        <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedCoyMarks_III_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n        <td class=\"tg-0lax\"><b>{{this.totalBnMarks_III_MID_TERM}}</b></td>\r\n        <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedBnMarks_III_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n        <td class=\"tg-0lax\"><b>{{this.total_III_MID_TERM}}</b></td>\r\n        <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtained_III_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"tg-0lax\">Acad</td>\r\n        <td class=\"tg-0lax\">-</td>\r\n        <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n        <td class=\"tg-0lax\">-</td>\r\n        <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n        <td class=\"tg-0lax\">-</td>\r\n        <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n        <td class=\"tg-0lax\">20</td>\r\n        <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"acd_III_MID_TERM\" [ngModelOptions]=\"{standalone: true}\"  class=\"form-control\"  readonly></td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"tg-0lax\">Drill</td>\r\n        <td class=\"tg-0lax\">-</td>\r\n        <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n        <td class=\"tg-0lax\">-</td>\r\n        <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n        <td class=\"tg-0lax\">-</td>\r\n        <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n        <td class=\"tg-0lax\">20</td>\r\n        <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"drill_III_MID_TERM\" [ngModelOptions]=\"{standalone: true}\"  readonly></td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"tg-0lax\">Eqtn</td>\r\n        <td class=\"tg-0lax\">-</td>\r\n        <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n        <td class=\"tg-0lax\">-</td>\r\n        <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n        <td class=\"tg-0lax\">-</td>\r\n        <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n        <td class=\"tg-0lax\">10</td>\r\n        <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"oqEqtn_III_MID_TERM\" [ngModelOptions]=\"{standalone: true}\"  readonly></td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"tg-0lax\" colspan=\"7\"><b>Grand Total</b></td>\r\n        <td class=\"tg-0lax\"><b>{{this._G_T_III_MID_TERM}}</b></td>\r\n        <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"finaltotal_III_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      </tr>\r\n    </tbody>\r\n    </table>\r\n    <div class=\"text-right\">\r\n    <button class=\"btn btn-color mt-2\">Submit</button>\r\n    </div>\r\n  </div>\r\n  <div formArrayName=\"trgEQTNSubResult_III_FINAL_TERM\">\r\n    <div class=\"box-shadow\">\r\n        <h4 class=\"card-heading\">  <span class=\"sub-menu1\">FINAL TERM</span></h4>\r\n      </div>\r\n    <table class=\"tg\">\r\n    <thead>\r\n      <tr>\r\n        <th class=\"tg-0lax\">Trg Activity</th>\r\n        <th class=\"tg-0lax\" colspan=\"2\">Pl Cdr</th>\r\n        <th class=\"tg-0lax\" colspan=\"2\">Coy Cdr</th>\r\n        <th class=\"tg-0lax\" colspan=\"2\">Bn Cdr</th>\r\n        <th class=\"tg-0lax\">Total Marks</th>\r\n        <th class=\"tg-0lax\">Marks Given</th>\r\n      </tr>\r\n      <tr>\r\n        <th class=\"tg-0lax\"></th>\r\n        <th class=\"tg-0lax\">Max Marks</th>\r\n        <th class=\"tg-0lax\">Marks given </th>\r\n        <th class=\"tg-0lax\">Max Marks</th>\r\n        <th class=\"tg-0lax\">Marks given </th>\r\n        <th class=\"tg-0lax\">Max Marks</th>\r\n        <th class=\"tg-0lax\">Marks given </th>\r\n        <th class=\"tg-0lax\"></th>\r\n        <th class=\"tg-0lax\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let mr of getCSubjectRes6.controls;let i=index\">\r\n      <ng-container [formGroupName]=\"i\">\r\n        <td class=\"tg-0lax\">{{mr.value.subjectName}}</td>\r\n               \r\n        <td class=\"tg-0lax\">{{mr.value.totalMarksPlCdr}}</td>\r\n       <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"obtainedMarksPlCdr\" class=\"form-control\" readonly></td>\r\n       <td class=\"tg-0lax\">{{mr.value.totalMarksCoyCdr}}</td>\r\n       <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"obtainedMarksCoyCdr\" class=\"form-control\" readonly></td>\r\n      \r\n       <td class=\"tg-0lax\">{{mr.value.totalMarksBnCdr}}</td>\r\n       <td class=\"tg-0lax\">\r\n         <input type=\"text\" formControlName=\"obtainedMarksBnCdr\" class=\"form-control\" readonly>\r\n       </td>\r\n       <!-- <td class=\"tg-0lax\">{{this.totalBNPLCOYMarks}}</td> -->\r\n       <td class=\"tg-0lax\">{{mr.value.totalBNPLCOYMarks}}</td>\r\n       <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"totalPLBNCOYObtainedMarks\"   class=\"form-control\" readonly></td>\r\n      </ng-container>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"tg-0lax\"><b>Total (Bn level)</b></td>\r\n      <td class=\"tg-0lax\"><b>{{this.totalPlMarks_III_FINAL_TERM}}</b></td>\r\n      <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedPlMarks_III_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      <td class=\"tg-0lax\"><b>{{this.totalCoyMarks_III_FINAL_TERM}}</b></td>\r\n      <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedCoyMarks_III_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      <td class=\"tg-0lax\"><b>{{this.totalBnMarks_III_FINAL_TERM}}</b></td>\r\n      <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtainedBnMarks_III_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      <td class=\"tg-0lax\"><b>{{this.total_III_FINAL_TERM}}</b></td>\r\n      <td class=\"tg-0lax\"><input type=\"text\" [(ngModel)]=\"totalObtained_III_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"tg-0lax\">Acad</td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">20</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"acd_III_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"tg-0lax\">Drill</td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">20</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"drill_III_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"tg-0lax\">Eqtn</td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">-</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n      <td class=\"tg-0lax\">10</td>\r\n      <td class=\"tg-0lax\"><input type=\"text\"  [(ngModel)]=\"oqEqtn_III_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n    </tr>\r\n      <tr>\r\n        <td class=\"tg-0pky\"><b>Grand Total</b></td>\r\n        <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\" [(ngModel)]=\"finaltotal_III_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n        <td class=\"tg-0pky\"><b>{{this._G_T_III_MID_TERM}}</b></td>\r\n        <td class=\"tg-0pky\"><input type=\"text\" [(ngModel)]=\"finaltotal_III_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"tg-0pky\">Pre Mid Term (Mid Term OQ)</td>\r\n       <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n        <td class=\"tg-0pky\">{{this._G_T_III_MID_TERM}}</td>\r\n        <td class=\"tg-0pky\"><input type=\"text\" [(ngModel)]=\"finaltotal_III_MID_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"tg-0pky\">Pre Final Exam (Final OQ)</td>\r\n       <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n        <td class=\"tg-0pky\">{{this._G_T_III_FINAL_TERM}}</td>\r\n        <td class=\"tg-0pky\"><input type=\"text\"  [(ngModel)]=\"finaltotal_III_FINAL_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"tg-0pky\">Avg (Pre + Post)/2</td>\r\n        <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n        <td class=\"tg-0pky\">{{this._G_T_III_MID_TERM}}</td>\r\n        <td class=\"tg-0pky\"><input type=\"text\"  [(ngModel)]=\"avg_III_TERM\"  [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" readonly></td>\r\n      </tr>\r\n        <tr>\r\n        <td class=\"tg-0pky\">DC &amp; CI</td>\r\n        <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n        <td class=\"tg-0pky\">20</td>\r\n        <td class=\"tg-0pky\"><input type=\"text\"  [(ngModel)]=\"marks_DC_CI_III_Term\" [ngModelOptions]=\"{standalone: true}\" (change)=\"change($event)\"></td>\r\n      </tr>\r\n       <tr>\r\n        <td class=\"tg-0pky\">Comdt</td>\r\n        <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n        <td class=\"tg-0pky\">30</td>\r\n        <td class=\"tg-0pky\"><input type=\"text\"  [(ngModel)]=\"marks_comdt_III_Term\" [ngModelOptions]=\"{standalone: true}\" (change)=\"changec($event)\"></td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"tg-0pky\"><b>Grand Total</b></td>\r\n       <td class=\"tg-0pky\" colspan=\"6\"><input type=\"text\"></td>\r\n        <td class=\"tg-0pky\"><b>{{this._G_T_III_MID_TERM+50}}</b></td>\r\n        <td class=\"tg-0pky\"><input type=\"text\"  [(ngModel)]=\"GRAND_TOTAL_III_TERM\" [ngModelOptions]=\"{standalone: true}\"  class=\"form-control\" readonly></td>\r\n      </tr>\r\n    </tbody>\r\n    </table>\r\n    <div class=\"text-right\">\r\n    <button class=\"btn btn-color mt-2\"  type=\"submit\" (click)=\"onSubmit3()\" >Submit</button>\r\n  </div>\r\n  </div>\r\n  </div>\r\n</form>\r\n     \r\n  \r\n  \r\n</div>\r\n</div>\r\n    </div>\r\n    <!-- </form> -->\r\n    </div>");

/***/ }),

/***/ "iVPd":
/*!********************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/assessment-oq/assessment-oq.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: AssessmentOQModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentOQModule", function() { return AssessmentOQModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _assessment_oq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assessment-oq.component */ "rZxE");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { MatCardModule, MatIconModule, MatMenuModule, MatTabsModule, MatProgressBarModule,
//      MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatTableModule,
//       MatTooltipModule, MatPaginatorModule, MatDatepickerModule, MatDividerModule, MatChipsModule, MatListModule } from '@angular/material';





var routes = [
    {
        path: '',
        component: _assessment_oq_component__WEBPACK_IMPORTED_MODULE_8__["AssessmentOqComponent"]
    },
];
var AssessmentOQModule = /** @class */ (function () {
    function AssessmentOQModule() {
    }
    AssessmentOQModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _assessment_oq_component__WEBPACK_IMPORTED_MODULE_8__["AssessmentOqComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]
            ]
        })
    ], AssessmentOQModule);
    return AssessmentOQModule;
}());



/***/ }),

/***/ "rZxE":
/*!***********************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/assessment-oq/assessment-oq.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AssessmentOqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentOqComponent", function() { return AssessmentOqComponent; });
/* harmony import */ var _raw_loader_assessment_oq_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./assessment-oq.component.html */ "Y3Ni");
/* harmony import */ var _assessment_oq_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assessment-oq.component.scss */ "8cdW");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AssessmentOqComponent = /** @class */ (function () {
    function AssessmentOqComponent(fb, EDossierService, spinner, dialog, route, router, adminservice, sharedservice, cdref, edossierservice, activeRoute) {
        this.fb = fb;
        this.EDossierService = EDossierService;
        this.spinner = spinner;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        this.adminservice = adminservice;
        this.sharedservice = sharedservice;
        this.cdref = cdref;
        this.edossierservice = edossierservice;
        this.activeRoute = activeRoute;
        this.termid = '';
        this.obj = [];
        this.AssessmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.oqSubjectResult = [];
        this.oqSubjectResult1 = [];
        this.oqSubjectResult2 = [];
        this.oqSubjectResult7 = [];
        this._II_techData = {};
        this._II_termData = {};
        this._III_termData = {};
        this.totalPlMarks_I_MID_TERM = 0;
        this.totalObtainedPlMarks_I_MID_TERM = 0;
        this.totalCoyMarks_I_MID_TERM = 0;
        this.totalObtainedCoyMarks_I_MID_TERM = 0;
        this.totalBnMarks_I_MID_TERM = 0;
        this.totalObtainedBnMarks_I_MID_TERM = 0;
        // totalBNPLCOYMarks:number=0;
        // totalPLBNCOYMarks: number = 0;
        this.total_I_MID_TERM = 0;
        this.totalObtained_I_MID_TERM = 0;
        this.oqEqtn_I_MID_TERM = 0;
        this.acd_I_MID_TERM = 0;
        this.drill_I_MID_TERM = 0;
        this.totalacdoqeqtndrill_I_MID_TERM = 0;
        this.grandTotalMidFirstTerm_I_MID_TERM = 0;
        this.finaltotal_I_MID_TERM = 0;
        this.avg_I_TERM = 0;
        this.marks_DC_CI_I_Term = 0;
        this.marks_comdt_I_Term = 0;
        this.GRAND_TOTAL_I_TERM = 0;
        this.X = 0;
        this.Y = 0;
        //I FINAL TERM
        this.totalPlMarks_I_FINAL_TERM = 0;
        this.totalObtainedPlMarks_I_FINAL_TERM = 0;
        this.totalCoyMarks_I_FINAL_TERM = 0;
        this.totalObtainedCoyMarks_I_FINAL_TERM = 0;
        this.totalBnMarks_I_FINAL_TERM = 0;
        this.totalObtainedBnMarks_I_FINAL_TERM = 0;
        // totalBNPLCOYMarks:number=0;
        // totalPLBNCOYMarks: number = 0;
        this.total_I_FINAL_TERM = 0;
        this.totalObtained_I_FINAL_TERM = 0;
        this.oqEqtn_I_FINAL_TERM = 0;
        this.acd_I_FINAL_TERM = 0;
        this.drill_I_FINAL_TERM = 0;
        this.totalacdoqeqtndrill_I_FINAL_TERM = 0;
        this.grandTotalFINALFirstTerm_I_FINAL_TERM = 0;
        this.finaltotal_I_FINAL_TERM = 0;
        // II MID TERM
        this.totalPlMarks_II_MID_TERM = 0;
        this.totalObtainedPlMarks_II_MID_TERM = 0;
        this.totalCoyMarks_II_MID_TERM = 0;
        this.totalObtainedCoyMarks_II_MID_TERM = 0;
        this.totalBnMarks_II_MID_TERM = 0;
        this.totalObtainedBnMarks_II_MID_TERM = 0;
        this.totalBNPLCOYMarks_II_MID_TERM = 0;
        this.totalPLBNCOYMarks_II_MID_TERM = 0;
        this.total_II_MID_TERM = 0;
        this.totalObtained_II_MID_TERM = 0;
        this.oqEqtn_II_MID_TERM = 0;
        this.acd_II_MID_TERM = 0;
        this.drill_II_MID_TERM = 0;
        this.totalacdoqeqtndrill_II_MID_TERM = 0;
        this.grandTotalMidFirstTerm_II_MID_TERM = 0;
        this.finaltotal_II_MID_TERM = 0;
        this.GRAND_TOTAL_II_TERM = 0;
        //II FINAL TERM
        this.totalPlMarks_II_FINAL_TERM = 0;
        this.totalObtainedPlMarks_II_FINAL_TERM = 0;
        this.totalCoyMarks_II_FINAL_TERM = 0;
        this.totalObtainedCoyMarks_II_FINAL_TERM = 0;
        this.totalBnMarks_II_FINAL_TERM = 0;
        this.totalObtainedBnMarks_II_FINAL_TERM = 0;
        // totalBNPLCOYMarks:number=0;
        // totalPLBNCOYMarks: number = 0;
        this.total_II_FINAL_TERM = 0;
        this.totalObtained_II_FINAL_TERM = 0;
        this.oqEqtn_II_FINAL_TERM = 0;
        this.acd_II_FINAL_TERM = 0;
        this.drill_II_FINAL_TERM = 0;
        this.totalacdoqeqtndrill_II_FINAL_TERM = 0;
        this.grandTotalFINALFirstTerm_II_FINAL_TERM = 0;
        this.finaltotal_II_FINAL_TERM = 0;
        this.avg_II_TERM = 0;
        this.marks_DC_CI_II_Term = 0;
        this.marks_comdt_II_Term = 0;
        // III MID TERM
        this.totalPlMarks_III_MID_TERM = 0;
        this.totalObtainedPlMarks_III_MID_TERM = 0;
        this.totalCoyMarks_III_MID_TERM = 0;
        this.totalObtainedCoyMarks_III_MID_TERM = 0;
        this.totalBnMarks_III_MID_TERM = 0;
        this.totalObtainedBnMarks_III_MID_TERM = 0;
        this.totalBNPLCOYMarks_III_MID_TERM = 0;
        this.totalPLBNCOYMarks_III_MID_TERM = 0;
        this.total_III_MID_TERM = 0;
        this.totalObtained_III_MID_TERM = 0;
        this.oqEqtn_III_MID_TERM = 0;
        this.acd_III_MID_TERM = 0;
        this.drill_III_MID_TERM = 0;
        this.totalacdoqeqtndrill_III_MID_TERM = 0;
        this.grandTotalMidFirstTerm_III_MID_TERM = 0;
        this.finaltotal_III_MID_TERM = 0;
        //III FINAL TERM
        this.totalPlMarks_III_FINAL_TERM = 0;
        this.totalObtainedPlMarks_III_FINAL_TERM = 0;
        this.totalCoyMarks_III_FINAL_TERM = 0;
        this.totalObtainedCoyMarks_III_FINAL_TERM = 0;
        this.totalBnMarks_III_FINAL_TERM = 0;
        this.totalObtainedBnMarks_III_FINAL_TERM = 0;
        // totalBNPLCOYMarks:number=0;
        // totalPLBNCOYMarks: number = 0;
        this.total_III_FINAL_TERM = 0;
        this.totalObtained_III_FINAL_TERM = 0;
        this.oqEqtn_III_FINAL_TERM = 0;
        this.acd_III_FINAL_TERM = 0;
        this.drill_III_FINAL_TERM = 0;
        this.totalacdoqeqtndrill_III_FINAL_TERM = 0;
        this.grandTotalFINALFirstTerm_III_FINAL_TERM = 0;
        this.finaltotal_III_FINAL_TERM = 0;
        this.avg_III_TERM = 0;
        this.marks_DC_CI_III_Term = 0;
        this.marks_comdt_III_Term = 0;
        this.GRAND_TOTAL_III_TERM = 0;
        this.cmrks = [];
        this._G_T_I_MID_TERM = 0;
        this._G_T_II_MID_TERM = 0;
        this._G_T_III_MID_TERM = 0;
        this._G_T_I_FINAL_TERM = 0;
        this._G_T_II_FINAL_TERM = 0;
        this._G_T_III_FINAL_TERM = 0;
        this._ED_ASSESSMENT_MARKS_DETAILS = [];
        // getAssessmentAllMARKS() {
        // }
        this.SENDDATA = {};
        //alert(this.route.snapshot.queryParamMap.get('serviceId'))
        this.marks_DC_CI_I_Term = 0;
        this.marks_comdt_I_Term = 0;
        this.serviceID = this.route.snapshot.queryParamMap.get('Id');
        this.termid = this.route.snapshot.queryParamMap.get('termId');
        // alert(this.serviceID);
        this._G_T_I_MID_TERM = 0;
        this._G_T_II_MID_TERM = 0;
        this._G_T_III_MID_TERM = 0;
        this._G_T_I_FINAL_TERM = 0;
        this._G_T_II_FINAL_TERM = 0;
        this._G_T_III_FINAL_TERM = 0;
        this.AssessmentForm = this.fb.group({
            obtainedMarksBnCdr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            obtainedMarksCoyCdr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            obtainedMarksPlCdr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            totalMarksBnCdr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            totalMarksCoyCdr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            totalMarksPlCdr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            serviceId: ['',],
            // subjectId: [''],
            status: [''],
            termId: [''],
            trgEQTNSubResult: this.fb.array([]),
            trgEQTNSubResult_I_FINAL_TERM: this.fb.array([]),
            trgEQTNSubResult2: this.fb.array([]),
            trgEQTNSubResult_II_FINAL_TERM: this.fb.array([]),
            trgEQTNSubResult3: this.fb.array([]),
            trgEQTNSubResult_III_FINAL_TERM: this.fb.array([]),
            marks_DC_CI_I_Term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            marks_comdt_I_Term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            GRAND_TOTAL_I_TERM: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            marks_DC_CI_II_Term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            marks_comdt_II_Term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            GRAND_TOTAL_II_TERM: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            acd_I_MID_TERM: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        console.log(this.X, this.Y, '==============');
        console.log(this.Y, '$$$$$$$$$$$$$$$$$$$');
        this.getOQMatrixDataByServiceId();
        this.getEDAssessmentByServiceId();
    }
    AssessmentOqComponent.prototype.change = function (e) {
        if (this.termid == 1) {
            this.marks_DC_CI_I_Term = parseInt(e.target.value);
            this.marks_DC_CI_I_Term = this.marks_DC_CI_I_Term <= 20 ? this.marks_DC_CI_I_Term : null;
            if (this.marks_comdt_I_Term) {
                this.GRAND_TOTAL_I_TERM = this.marks_comdt_I_Term + this.marks_DC_CI_I_Term + this.avg_I_TERM;
            }
        }
        else if (this.termid == 2) {
            this.marks_DC_CI_II_Term = parseInt(e.target.value);
            this.marks_DC_CI_II_Term = this.marks_DC_CI_II_Term <= 20 ? this.marks_DC_CI_II_Term : null;
            if (this.marks_comdt_II_Term) {
                this.GRAND_TOTAL_II_TERM = this.marks_comdt_II_Term + this.marks_DC_CI_II_Term + this.avg_II_TERM;
            }
        }
        else if (this.termid == 3) {
            this.marks_DC_CI_III_Term = parseInt(e.target.value);
            this.marks_DC_CI_III_Term = this.marks_DC_CI_III_Term <= 20 ? this.marks_DC_CI_III_Term : null;
            if (this.marks_comdt_III_Term) {
                this.GRAND_TOTAL_III_TERM = this.marks_comdt_III_Term + this.marks_DC_CI_III_Term + this.avg_III_TERM;
            }
        }
    };
    AssessmentOqComponent.prototype.changec = function (e) {
        if (this.termid == 1) {
            this.marks_comdt_I_Term = parseInt(e.target.value);
            this.marks_comdt_I_Term = this.marks_comdt_I_Term <= 30 ? this.marks_comdt_I_Term : null;
            if (this.marks_DC_CI_I_Term) {
                this.GRAND_TOTAL_I_TERM = this.marks_comdt_I_Term + this.marks_DC_CI_I_Term + this.avg_I_TERM;
            }
        }
        else if (this.termid == 2) {
            this.marks_comdt_II_Term = parseInt(e.target.value);
            this.marks_comdt_II_Term = this.marks_comdt_II_Term <= 30 ? this.marks_comdt_II_Term : null;
            if (this.marks_DC_CI_II_Term) {
                this.GRAND_TOTAL_II_TERM = this.marks_comdt_II_Term + this.marks_DC_CI_II_Term + this.avg_II_TERM;
            }
        }
        else if (this.termid == 3) {
            this.marks_comdt_III_Term = parseInt(e.target.value);
            this.marks_comdt_III_Term = this.marks_comdt_III_Term <= 30 ? this.marks_comdt_III_Term : null;
            if (this.marks_DC_CI_III_Term) {
                this.GRAND_TOTAL_III_TERM = this.marks_comdt_III_Term + this.marks_DC_CI_III_Term + this.avg_III_TERM;
            }
        }
    };
    AssessmentOqComponent.prototype.ngOnInit = function () {
        // alert(this.serviceID);
    };
    AssessmentOqComponent.prototype.getEDAssessmentByServiceId = function () {
        var _this = this;
        this.EDossierService.get_ed_final_marks(this.serviceID).subscribe(function (res) {
            if (res.status == "OK") {
                // this.mnc = "update"
                _this._ED_ASSESSMENT_MARKS_DETAILS = res.object;
                console.log(_this._ED_ASSESSMENT_MARKS_DETAILS[0], 'oppppppppppppppppppppp');
                // this.GreenZoneForm.patchValue({
                //   title:this.greenZoneDetails[0].title,    
                //   color : this.greenZoneDetails[0].color,
                //   message : this.greenZoneDetails[0].message,
                //   });
                if (_this._ED_ASSESSMENT_MARKS_DETAILS != null || _this._ED_ASSESSMENT_MARKS_DETAILS[0] != null) {
                    _this.ASSESSMENT_MARKS_ID1 = _this._ED_ASSESSMENT_MARKS_DETAILS[0]['id'];
                    _this.marks_comdt_I_Term = _this._ED_ASSESSMENT_MARKS_DETAILS[0]['comdtObtainedMarks'];
                    _this.marks_DC_CI_I_Term = _this._ED_ASSESSMENT_MARKS_DETAILS[0]['dcCiObtainedMarks'];
                    _this.GRAND_TOTAL_I_TERM = _this._ED_ASSESSMENT_MARKS_DETAILS[0]['grandObtaionedMarks'];
                    _this.termId = _this._ED_ASSESSMENT_MARKS_DETAILS[0]['termId'];
                    _this.serviceId = _this._ED_ASSESSMENT_MARKS_DETAILS[0]['serviceId'];
                    _this.spinner.hide();
                }
                else if (_this._ED_ASSESSMENT_MARKS_DETAILS[1]) {
                    _this.ASSESSMENT_MARKS_ID2 = _this._ED_ASSESSMENT_MARKS_DETAILS[1]['id'];
                    _this.marks_comdt_I_Term = _this._ED_ASSESSMENT_MARKS_DETAILS[1]['comdtObtainedMarks'];
                    _this.marks_DC_CI_I_Term = _this._ED_ASSESSMENT_MARKS_DETAILS[1]['dcCiObtainedMarks'];
                    _this.GRAND_TOTAL_I_TERM = _this._ED_ASSESSMENT_MARKS_DETAILS[1]['grandObtaionedMarks'];
                    _this.termId = _this._ED_ASSESSMENT_MARKS_DETAILS[1]['termId'];
                    _this.serviceId = _this._ED_ASSESSMENT_MARKS_DETAILS[1]['serviceId'];
                    _this.spinner.hide();
                }
                else if (_this._ED_ASSESSMENT_MARKS_DETAILS[2]) {
                    _this.ASSESSMENT_MARKS_ID3 = _this._ED_ASSESSMENT_MARKS_DETAILS[2]['id'];
                    _this.marks_comdt_I_Term = _this._ED_ASSESSMENT_MARKS_DETAILS[2]['comdtObtainedMarks'];
                    _this.marks_DC_CI_I_Term = _this._ED_ASSESSMENT_MARKS_DETAILS[2]['dcCiObtainedMarks'];
                    _this.GRAND_TOTAL_I_TERM = _this._ED_ASSESSMENT_MARKS_DETAILS[2]['grandObtaionedMarks'];
                    _this.termId = _this._ED_ASSESSMENT_MARKS_DETAILS[2]['termId'];
                    _this.serviceId = _this._ED_ASSESSMENT_MARKS_DETAILS[2]['serviceId'];
                    _this.spinner.hide();
                }
                // else if(this._ED_ASSESSMENT_MARKS_DETAILS[3] != null){
                //   this.ASSESSMENT_MARKS_ID = this._ED_ASSESSMENT_MARKS_DETAILS[0]['id'];
                //   this.marks_comdt_I_Term = this._ED_ASSESSMENT_MARKS_DETAILS[0]['comdtObtainedMarks'];
                //   this.marks_DC_CI_I_Term=  this._ED_ASSESSMENT_MARKS_DETAILS[0]['dcCiObtainedMarks'];
                //   this.GRAND_TOTAL_I_TERM=  this._ED_ASSESSMENT_MARKS_DETAILS[0]['grandObtaionedMarks'];
                //   this.termId=  this._ED_ASSESSMENT_MARKS_DETAILS[0]['termId'];
                //   this.serviceId=  this._ED_ASSESSMENT_MARKS_DETAILS[0]['serviceId'];
                //   this.spinner.hide();         
                // }    
            }
        });
    };
    AssessmentOqComponent.prototype.onSubmit1 = function () {
        var _this = this;
        // alert('hi')
        this.marks_DC_CI_I_Term;
        this.marks_comdt_I_Term;
        console.log(this.AssessmentForm.value.trgEQTNSubResult[0], '1233333333333333333333333333333333');
        // this.SENDDATA['id'] = this.ID_I_TERM;
        this.SENDDATA['serviceId'] = this.SERVICEID_I_TERM;
        this.SENDDATA['termId'] = this.TEMID_I_TERM;
        this.SENDDATA['avgPrePostObtainedMarks'] = this.avg_I_TERM;
        this.SENDDATA['preFinalTermObtainedMarks'] = this.finaltotal_I_FINAL_TERM;
        this.SENDDATA['preMidTermObtainedMarks'] = this.finaltotal_I_MID_TERM;
        this.SENDDATA['preFinalTermTotalMarks'] = this._G_T_I_FINAL_TERM;
        this.SENDDATA['preMidTermTotalMarks'] = this._G_T_I_MID_TERM;
        this.SENDDATA['grandObtaionedMarks'] = this.GRAND_TOTAL_I_TERM;
        this.SENDDATA['dcCiObtainedMarks'] = this.marks_DC_CI_I_Term;
        this.SENDDATA['comdtObtainedMarks'] = this.marks_comdt_I_Term;
        console.log(this.SENDDATA, '============+++++++++++++==========');
        if (this.ASSESSMENT_MARKS_ID1 == undefined || this.ASSESSMENT_MARKS_ID1 == null) {
            this.EDossierService.add_ed_final_marks(this.SENDDATA).subscribe(function (res) {
                if (res.message == "OK") {
                    // this.mnc = "update"
                    _this.spinner.hide();
                }
            });
        }
        else {
            // alert(this.ASSESSMENT_MARKS_ID)
            this.SENDDATA = Object.assign(this.SENDDATA, { id: this.ASSESSMENT_MARKS_ID1 });
            this.EDossierService.update_ed_final_marks(this.SENDDATA).subscribe(function (res) {
                if (res.message == "OK") {
                    // this.mnc = "update"
                    _this.spinner.hide();
                }
            });
        }
    };
    AssessmentOqComponent.prototype.onSubmit2 = function () {
        var _this = this;
        // alert('hi')
        this.marks_DC_CI_II_Term;
        this.marks_comdt_II_Term;
        console.log(this.AssessmentForm.value.trgEQTNSubResult[2], '1233333333333333333333333333333333');
        // this.SENDDATA['id'] = this.ID_I_TERM;
        // this.SENDDATA['serviceId'] = this.SERVICEID_I_TERM;
        // this.SENDDATA['termId'] = this.TEMID_I_TERM;
        // this.SENDDATA['dcCiObtainedMarks'] =  this.marks_DC_CI_II_Term;;
        // this.SENDDATA['comdtObtainedMarks'] =  this.marks_comdt_II_Term;
        this.SENDDATA['serviceId'] = this.SERVICEID_II_TERM;
        this.SENDDATA['termId'] = this.TEMID_II_TERM;
        this.SENDDATA['avgPrePostObtainedMarks'] = this.avg_II_TERM;
        this.SENDDATA['preFinalTermObtainedMarks'] = this.finaltotal_II_FINAL_TERM;
        this.SENDDATA['preMidTermObtainedMarks'] = this.finaltotal_II_MID_TERM;
        this.SENDDATA['preFinalTermTotalMarks'] = this._G_T_II_FINAL_TERM;
        this.SENDDATA['preMidTermTotalMarks'] = this._G_T_II_MID_TERM;
        this.SENDDATA['grandObtaionedMarks'] = this.GRAND_TOTAL_II_TERM;
        this.SENDDATA['dcCiObtainedMarks'] = this.marks_DC_CI_II_Term;
        this.SENDDATA['comdtObtainedMarks'] = this.marks_comdt_II_Term;
        console.log(this.SENDDATA, '============+++++++++++++==========');
        // if(this.)
        if (this.ASSESSMENT_MARKS_ID2 == undefined || this.ASSESSMENT_MARKS_ID2 == null) {
            this.EDossierService.add_ed_final_marks(this.SENDDATA).subscribe(function (res) {
                if (res.message == "OK") {
                    // this.mnc = "update"
                    _this.spinner.hide();
                }
            });
        }
        else {
            // alert(this.ASSESSMENT_MARKS_ID)
            this.SENDDATA = Object.assign(this.SENDDATA, { id: this.ASSESSMENT_MARKS_ID2 });
            this.EDossierService.update_ed_final_marks(this.SENDDATA).subscribe(function (res) {
                if (res.message == "OK") {
                    // this.mnc = "update"
                    _this.spinner.hide();
                }
            });
        }
    };
    AssessmentOqComponent.prototype.onSubmit3 = function () {
        var _this = this;
        // alert('hi')
        this.marks_DC_CI_III_Term;
        this.marks_comdt_III_Term;
        console.log(this.AssessmentForm.value.trgEQTNSubResult[4], '1233333333333333333333333333333333');
        this.SENDDATA['serviceId'] = this.SERVICEID_III_TERM;
        this.SENDDATA['termId'] = this.TEMID_III_TERM;
        this.SENDDATA['avgPrePostObtainedMarks'] = this.avg_III_TERM;
        this.SENDDATA['preFinalTermObtainedMarks'] = this.finaltotal_III_FINAL_TERM;
        this.SENDDATA['preMidTermObtainedMarks'] = this.finaltotal_III_MID_TERM;
        this.SENDDATA['preFinalTermTotalMarks'] = this._G_T_III_FINAL_TERM;
        this.SENDDATA['preMidTermTotalMarks'] = this._G_T_III_MID_TERM;
        this.SENDDATA['grandObtaionedMarks'] = this.GRAND_TOTAL_III_TERM;
        this.SENDDATA['dcCiObtainedMarks'] = this.marks_DC_CI_III_Term;
        this.SENDDATA['comdtObtainedMarks'] = this.marks_comdt_III_Term;
        console.log(this.SENDDATA, '============+++++++++++++==========');
        if (this.ASSESSMENT_MARKS_ID3 == undefined || this.ASSESSMENT_MARKS_ID3 == null) {
            this.EDossierService.add_ed_final_marks(this.SENDDATA).subscribe(function (res) {
                if (res.message == "OK") {
                    // this.mnc = "update"
                    _this.spinner.hide();
                }
            });
        }
        else {
            // alert(this.ASSESSMENT_MARKS_ID3)
            this.SENDDATA = Object.assign(this.SENDDATA, { id: this.ASSESSMENT_MARKS_ID3 });
            this.EDossierService.update_ed_final_marks(this.SENDDATA).subscribe(function (res) {
                if (res.message == "OK") {
                    // this.mnc = "update"
                    _this.spinner.hide();
                }
            });
        }
    };
    AssessmentOqComponent.prototype.updateAssessmentAllMARKS = function () {
        this.SENDDATA['serviceId'] = this.SERVICEID_II_TERM;
        this.SENDDATA['termId'] = this.TEMID_II_TERM;
        this.SENDDATA['avgPrePostObtainedMarks'] = this.avg_II_TERM;
        this.SENDDATA['preFinalTermObtainedMarks'] = this.finaltotal_II_FINAL_TERM;
        this.SENDDATA['preMidTermObtainedMarks'] = this.finaltotal_II_MID_TERM;
        this.SENDDATA['preFinalTermTotalMarks'] = this._G_T_II_FINAL_TERM;
        this.SENDDATA['preMidTermTotalMarks'] = this._G_T_II_MID_TERM;
        this.SENDDATA['grandObtaionedMarks'] = this.GRAND_TOTAL_II_TERM;
        this.SENDDATA['dcCiObtainedMarks'] = this.marks_DC_CI_II_Term;
        this.SENDDATA['comdtObtainedMarks'] = this.marks_comdt_II_Term;
        // this.EDossierService.update_ed_final_marks(this.SENDDATA).subscribe(
        //   res => {
        //     if (res.message == "OK") {
        //       // this.mnc = "update"
        //       this.spinner.hide();
        //     }
        //   })
    };
    AssessmentOqComponent.prototype.getOQMatrixDataByServiceId = function () {
        var _this = this;
        this.EDossierService.getAssessmentOQEdossiermarksByServiceId(this.serviceID).subscribe(function (res) {
            if (res.message == "Record found successfully") {
                // this.mnc = "update"
                _this.spinner.hide();
                _this.obj = res.object;
                _this.TERM_S_Id = _this.termid;
                if (_this.TERM_S_Id == 1 || _this.TERM_S_Id == 2 || _this.TERM_S_Id == 3) {
                    if (res.object[0]) {
                        _this.cmrks = res.object[0].oqSubjectResult;
                        _this.obtainedMarksBnCdr = res.object[0].obtainedMarksBnCdr;
                        _this.obtainedMarksCoyCdr = res.object[0].obtainedMarksCoyCdr;
                        _this.obtainedMarksPlCdr = res.object[0].obtainedMarksPlCdr;
                        _this.totalMarksBnCdr = res.object[0].totalMarksBnCdr;
                        _this.totalMarksCoyCdr = res.object[0].totalMarksCoyCdr;
                        _this.totalMarksPlCdr = res.object[0].totalMarksPlCdr;
                        _this.ID_I_TERM = res.object[0].id;
                        _this.SERVICEID_I_TERM = res.object[0].serviceId;
                        _this.TEMID_I_TERM = res.object[0].termId;
                        _this.cmrks.forEach(function (e) {
                            e.totalPLBNCOYObtainedMarks = e.obtainedMarksPlCdr + e.obtainedMarksCoyCdr + e.obtainedMarksBnCdr;
                            e.totalBNPLCOYMarks = e.totalMarksPlCdr + e.totalMarksCoyCdr + e.totalMarksBnCdr;
                            e.id = e.id;
                            _this.totalPlMarks_I_MID_TERM = _this.totalPlMarks_I_MID_TERM + e.totalMarksPlCdr;
                            _this.totalObtainedPlMarks_I_MID_TERM = _this.totalObtainedPlMarks_I_MID_TERM + e.obtainedMarksPlCdr;
                            _this.totalCoyMarks_I_MID_TERM = _this.totalCoyMarks_I_MID_TERM + e.totalMarksCoyCdr;
                            _this.totalObtainedCoyMarks_I_MID_TERM = _this.totalObtainedCoyMarks_I_MID_TERM + e.obtainedMarksCoyCdr;
                            _this.totalBnMarks_I_MID_TERM = _this.totalPlMarks_I_MID_TERM + e.totalMarksBnCdr;
                            _this.totalObtainedBnMarks_I_MID_TERM = _this.totalObtainedBnMarks_I_MID_TERM + e.obtainedMarksBnCdr;
                            _this.total_I_MID_TERM = _this.totalPlMarks_I_MID_TERM + _this.totalCoyMarks_I_MID_TERM + _this.totalBnMarks_I_MID_TERM;
                            console.log(_this.total_I_MID_TERM, '******');
                            _this.totalObtained_I_MID_TERM = _this.totalObtainedPlMarks_I_MID_TERM + _this.totalObtainedCoyMarks_I_MID_TERM + _this.totalObtainedBnMarks_I_MID_TERM;
                            // console.log(this.total,'==============');
                            _this.Y = _this.totalObtained_I_MID_TERM;
                            _this.getCSubjectRes.push(_this.genSubRec());
                        });
                        // this.getFinalTotal();
                        _this.AssessmentForm.patchValue({
                            trgEQTNSubResult: _this.cmrks,
                        });
                    }
                    if (res.object[1]) {
                        //FOR 1FINAL TERM
                        _this.cmrks_I_FINAL_TERM = res.object[1].oqSubjectResult;
                        _this.obtainedMarksBnCdr = res.object[1].obtainedMarksBnCdr;
                        _this.obtainedMarksCoyCdr = res.object[1].obtainedMarksCoyCdr;
                        _this.obtainedMarksPlCdr = res.object[1].obtainedMarksPlCdr;
                        _this.totalMarksBnCdr = res.object[1].totalMarksBnCdr;
                        _this.totalMarksCoyCdr = res.object[1].totalMarksCoyCdr;
                        _this.totalMarksPlCdr = res.object[1].totalMarksPlCdr;
                        _this.cmrks_I_FINAL_TERM.forEach(function (e) {
                            e.marks_comdt = 0;
                            e.marks_DC_CI = 0;
                            e.totalPLBNCOYObtainedMarks = e.obtainedMarksPlCdr + e.obtainedMarksCoyCdr + e.obtainedMarksBnCdr;
                            e.totalBNPLCOYMarks = e.totalMarksPlCdr + e.totalMarksCoyCdr + e.totalMarksBnCdr;
                            e.id = e.id;
                            _this.totalPlMarks_I_FINAL_TERM = _this.totalPlMarks_I_FINAL_TERM + e.totalMarksPlCdr;
                            _this.totalObtainedPlMarks_I_FINAL_TERM = _this.totalObtainedPlMarks_I_FINAL_TERM + e.obtainedMarksPlCdr;
                            _this.totalCoyMarks_I_FINAL_TERM = _this.totalCoyMarks_I_FINAL_TERM + e.totalMarksCoyCdr;
                            _this.totalObtainedCoyMarks_I_FINAL_TERM = _this.totalObtainedCoyMarks_I_FINAL_TERM + e.obtainedMarksCoyCdr;
                            _this.totalBnMarks_I_FINAL_TERM = _this.totalPlMarks_I_FINAL_TERM + e.totalMarksBnCdr;
                            _this.totalObtainedBnMarks_I_FINAL_TERM = _this.totalObtainedBnMarks_I_FINAL_TERM + e.obtainedMarksBnCdr;
                            _this.total_I_FINAL_TERM = _this.totalPlMarks_I_FINAL_TERM + _this.totalCoyMarks_I_FINAL_TERM + _this.totalBnMarks_I_FINAL_TERM;
                            _this.totalObtained_I_FINAL_TERM = _this.totalObtainedPlMarks_I_FINAL_TERM + _this.totalObtainedCoyMarks_I_FINAL_TERM + _this.totalObtainedBnMarks_I_FINAL_TERM;
                            //  this.Y = this.totalObtained_I_FINAL_TERM;
                            _this.getCSubjectRes4.push(_this.genSubRec());
                        });
                        // this.getFinalTotal();
                        _this.AssessmentForm.patchValue({
                            trgEQTNSubResult_I_FINAL_TERM: _this.cmrks_I_FINAL_TERM,
                        });
                    }
                }
                // FOR 2ND TERM
                if (_this.TERM_S_Id == 2 || _this.TERM_S_Id == 3) {
                    if (res.object[2]) {
                        _this.cmrks_II_MID_TERM = res.object[2].oqSubjectResult;
                        _this.obtainedMarksBnCdr = res.object[2].obtainedMarksBnCdr;
                        _this.obtainedMarksCoyCdr = res.object[2].obtainedMarksCoyCdr;
                        _this.obtainedMarksPlCdr = res.object[2].obtainedMarksPlCdr;
                        _this.totalMarksBnCdr = res.object[2].totalMarksBnCdr;
                        _this.totalMarksCoyCdr = res.object[2].totalMarksCoyCdr;
                        _this.totalMarksPlCdr = res.object[2].totalMarksPlCdr;
                        _this.ID_II_TERM = res.object[2].id;
                        _this.SERVICEID_II_TERM = res.object[2].serviceId;
                        _this.TEMID_II_TERM = res.object[2].termId;
                        // alert('hi')
                        _this.cmrks_II_MID_TERM.forEach(function (e) {
                            e.totalPLBNCOYObtainedMarks = e.obtainedMarksPlCdr + e.obtainedMarksCoyCdr + e.obtainedMarksBnCdr;
                            e.totalBNPLCOYMarks = e.totalMarksPlCdr + e.totalMarksCoyCdr + e.totalMarksBnCdr;
                            e.id = e.id;
                            _this.totalPlMarks_II_MID_TERM = _this.totalPlMarks_II_MID_TERM + e.totalMarksPlCdr;
                            _this.totalObtainedPlMarks_II_MID_TERM = _this.totalObtainedPlMarks_II_MID_TERM + e.obtainedMarksPlCdr;
                            _this.totalCoyMarks_II_MID_TERM = _this.totalCoyMarks_II_MID_TERM + e.totalMarksCoyCdr;
                            _this.totalObtainedCoyMarks_II_MID_TERM = _this.totalObtainedCoyMarks_II_MID_TERM + e.obtainedMarksCoyCdr;
                            _this.totalBnMarks_II_MID_TERM = _this.totalPlMarks_II_MID_TERM + e.totalMarksBnCdr;
                            _this.totalObtainedBnMarks_II_MID_TERM = _this.totalObtainedPlMarks_II_MID_TERM + e.obtainedMarksBnCdr;
                            _this.total_II_MID_TERM = _this.totalPlMarks_II_MID_TERM + _this.totalCoyMarks_II_MID_TERM + _this.totalBnMarks_II_MID_TERM;
                            _this.totalObtained_II_MID_TERM = _this.totalObtainedPlMarks_II_MID_TERM + _this.totalObtainedCoyMarks_II_MID_TERM + _this.totalObtainedBnMarks_II_MID_TERM;
                            // console.log(this.total,'==============');
                            _this.Y = _this.totalObtained_II_MID_TERM;
                            _this.getCSubjectRes2.push(_this.genSubRec());
                        });
                        //   this.getFinalTotal();
                        // console.log( this.obj ,'111111111');
                        // console.log(this.cmrks_II_MID_TERM,'******');
                        _this.AssessmentForm.patchValue({
                            trgEQTNSubResult2: _this.cmrks_II_MID_TERM,
                        });
                    }
                    if (res.object[3]) {
                        //FOR 2 FINAL TERM
                        _this.cmrks_II_FINAL_TERM = res.object[3].oqSubjectResult;
                        _this.obtainedMarksBnCdr = res.object[3].obtainedMarksBnCdr;
                        _this.obtainedMarksCoyCdr = res.object[3].obtainedMarksCoyCdr;
                        _this.obtainedMarksPlCdr = res.object[3].obtainedMarksPlCdr;
                        _this.totalMarksBnCdr = res.object[3].totalMarksBnCdr;
                        _this.totalMarksCoyCdr = res.object[3].totalMarksCoyCdr;
                        _this.totalMarksPlCdr = res.object[3].totalMarksPlCdr;
                        console.log(_this.cmrks_II_FINAL_TERM, '0000000000000000000000000000000000000');
                        _this.cmrks_II_FINAL_TERM.forEach(function (e) {
                            e.totalPLBNCOYObtainedMarks = e.obtainedMarksPlCdr + e.obtainedMarksCoyCdr + e.obtainedMarksBnCdr;
                            e.totalBNPLCOYMarks = e.totalMarksPlCdr + e.totalMarksCoyCdr + e.totalMarksBnCdr;
                            e.id = e.id;
                            _this.totalPlMarks_II_FINAL_TERM = _this.totalPlMarks_II_FINAL_TERM + e.totalMarksPlCdr;
                            _this.totalObtainedPlMarks_II_FINAL_TERM = _this.totalObtainedPlMarks_II_FINAL_TERM + e.obtainedMarksPlCdr;
                            _this.totalCoyMarks_II_FINAL_TERM = _this.totalCoyMarks_II_FINAL_TERM + e.totalMarksCoyCdr;
                            _this.totalObtainedCoyMarks_II_FINAL_TERM = _this.totalObtainedCoyMarks_II_FINAL_TERM + e.obtainedMarksCoyCdr;
                            _this.totalBnMarks_II_FINAL_TERM = _this.totalPlMarks_II_FINAL_TERM + e.totalMarksBnCdr;
                            _this.totalObtainedBnMarks_II_FINAL_TERM = _this.totalObtainedBnMarks_II_FINAL_TERM + e.obtainedMarksBnCdr;
                            _this.total_II_FINAL_TERM = _this.totalPlMarks_II_FINAL_TERM + _this.totalCoyMarks_II_FINAL_TERM + _this.totalBnMarks_II_FINAL_TERM;
                            console.log(_this.total_II_FINAL_TERM, '******');
                            _this.totalObtained_II_FINAL_TERM = _this.totalObtainedPlMarks_II_FINAL_TERM + _this.totalObtainedCoyMarks_II_FINAL_TERM + _this.totalObtainedBnMarks_II_FINAL_TERM;
                            //  this.Y = this.totalObtained_I_FINAL_TERM;
                            _this.getCSubjectRes5.push(_this.genSubRec());
                        });
                        //  this.getFinalTotal();
                        _this.AssessmentForm.patchValue({
                            trgEQTNSubResult_II_FINAL_TERM: _this.cmrks_II_FINAL_TERM,
                        });
                    }
                }
                // FOR TERM 3
                if (_this.TERM_S_Id == 3 || _this.TERM_S_Id == 7) {
                    if (res.object[4]) {
                        _this.cmrks_III_MID_TERM = res.object[4].oqSubjectResult;
                        _this.obtainedMarksBnCdr = res.object[4].obtainedMarksBnCdr;
                        _this.obtainedMarksCoyCdr = res.object[4].obtainedMarksCoyCdr;
                        _this.obtainedMarksPlCdr = res.object[4].obtainedMarksPlCdr;
                        _this.totalMarksBnCdr = res.object[4].totalMarksBnCdr;
                        _this.totalMarksCoyCdr = res.object[4].totalMarksCoyCdr;
                        _this.totalMarksPlCdr = res.object[4].totalMarksPlCdr;
                        _this.ID_III_TERM = res.object[4].id;
                        _this.SERVICEID_III_TERM = res.object[4].serviceId;
                        _this.TEMID_III_TERM = res.object[4].termId;
                        _this.cmrks_III_MID_TERM.forEach(function (e) {
                            e.totalPLBNCOYObtainedMarks = e.obtainedMarksPlCdr + e.obtainedMarksCoyCdr + e.obtainedMarksBnCdr;
                            e.totalBNPLCOYMarks = e.totalMarksPlCdr + e.totalMarksCoyCdr + e.totalMarksBnCdr;
                            e.id = e.id;
                            _this.totalPlMarks_III_MID_TERM = _this.totalPlMarks_III_MID_TERM + e.totalMarksPlCdr;
                            _this.totalObtainedPlMarks_III_MID_TERM = _this.totalObtainedPlMarks_III_MID_TERM + e.obtainedMarksPlCdr;
                            _this.totalCoyMarks_III_MID_TERM = _this.totalCoyMarks_III_MID_TERM + e.totalMarksCoyCdr;
                            _this.totalObtainedCoyMarks_III_MID_TERM = _this.totalObtainedCoyMarks_III_MID_TERM + e.obtainedMarksCoyCdr;
                            _this.totalBnMarks_III_MID_TERM = _this.totalPlMarks_III_MID_TERM + e.totalMarksBnCdr;
                            _this.totalObtainedBnMarks_III_MID_TERM = _this.totalObtainedPlMarks_III_MID_TERM + e.obtainedMarksBnCdr;
                            _this.total_III_MID_TERM = _this.totalPlMarks_III_MID_TERM + _this.totalCoyMarks_III_MID_TERM + _this.totalBnMarks_III_MID_TERM;
                            _this.totalObtained_III_MID_TERM = _this.totalObtainedPlMarks_III_MID_TERM + _this.totalObtainedCoyMarks_III_MID_TERM + _this.totalObtainedBnMarks_III_MID_TERM;
                            // console.log(this.total,'==============');
                            _this.Y = _this.totalObtained_III_MID_TERM;
                            _this.getCSubjectRes3.push(_this.genSubRec());
                        });
                        // this.getFinalTotal();
                        console.log(_this.obj, '111111111');
                        console.log(_this.cmrks_III_MID_TERM, '******');
                        _this.AssessmentForm.patchValue({
                            trgEQTNSubResult3: _this.cmrks_III_MID_TERM,
                        });
                    }
                    if (res.object[5]) {
                        //FOR 3 FINAL TERM
                        _this.cmrks_III_FINAL_TERM = res.object[5].oqSubjectResult;
                        _this.obtainedMarksBnCdr = res.object[5].obtainedMarksBnCdr;
                        _this.obtainedMarksCoyCdr = res.object[5].obtainedMarksCoyCdr;
                        _this.obtainedMarksPlCdr = res.object[5].obtainedMarksPlCdr;
                        _this.totalMarksBnCdr = res.object[5].totalMarksBnCdr;
                        _this.totalMarksCoyCdr = res.object[5].totalMarksCoyCdr;
                        _this.totalMarksPlCdr = res.object[5].totalMarksPlCdr;
                        console.log(_this.cmrks_III_FINAL_TERM, '0000000000000000000000000000000000000');
                        _this.cmrks_III_FINAL_TERM.forEach(function (e) {
                            e.totalPLBNCOYObtainedMarks = e.obtainedMarksPlCdr + e.obtainedMarksCoyCdr + e.obtainedMarksBnCdr;
                            e.totalBNPLCOYMarks = e.totalMarksPlCdr + e.totalMarksCoyCdr + e.totalMarksBnCdr;
                            e.id = e.id;
                            _this.totalPlMarks_III_FINAL_TERM = _this.totalPlMarks_III_FINAL_TERM + e.totalMarksPlCdr;
                            _this.totalObtainedPlMarks_III_FINAL_TERM = _this.totalObtainedPlMarks_III_FINAL_TERM + e.obtainedMarksPlCdr;
                            _this.totalCoyMarks_III_FINAL_TERM = _this.totalCoyMarks_III_FINAL_TERM + e.totalMarksCoyCdr;
                            _this.totalObtainedCoyMarks_III_FINAL_TERM = _this.totalObtainedCoyMarks_III_FINAL_TERM + e.obtainedMarksCoyCdr;
                            _this.totalBnMarks_III_FINAL_TERM = _this.totalPlMarks_III_FINAL_TERM + e.totalMarksBnCdr;
                            _this.totalObtainedBnMarks_III_FINAL_TERM = _this.totalObtainedBnMarks_III_FINAL_TERM + e.obtainedMarksBnCdr;
                            _this.total_III_FINAL_TERM = _this.totalPlMarks_III_FINAL_TERM + _this.totalCoyMarks_III_FINAL_TERM + _this.totalBnMarks_III_FINAL_TERM;
                            console.log(_this.total_III_FINAL_TERM, '******');
                            _this.totalObtained_III_FINAL_TERM = _this.totalObtainedPlMarks_III_FINAL_TERM + _this.totalObtainedCoyMarks_III_FINAL_TERM + _this.totalObtainedBnMarks_III_FINAL_TERM;
                            //  this.Y = this.totalObtained_I_FINAL_TERM;
                            _this.getCSubjectRes6.push(_this.genSubRec());
                        });
                        // this.getFinalTotal();
                        _this.AssessmentForm.patchValue({
                            trgEQTNSubResult_III_FINAL_TERM: _this.cmrks_III_FINAL_TERM,
                        });
                    }
                }
            }
            console.log(_this.cmrks, '################3');
            _this._G_T_I_MID_TERM = _this.total_I_MID_TERM + 50;
            ;
            _this._G_T_II_MID_TERM = _this.total_II_MID_TERM + 50;
            _this._G_T_III_MID_TERM = _this.total_III_MID_TERM + 50;
            _this._G_T_I_FINAL_TERM = _this.total_I_FINAL_TERM + 50;
            _this._G_T_II_FINAL_TERM = _this.total_II_FINAL_TERM + 50;
            _this._G_T_III_FINAL_TERM = _this.total_III_FINAL_TERM + 50;
            console.log(_this._G_T_I_MID_TERM, '[]][][][][][]');
            console.log(_this._G_T_II_MID_TERM, '[]][][][][][]');
            ;
            console.log(_this._G_T_III_MID_TERM, '[]][][][][][]');
            console.log(_this._G_T_I_FINAL_TERM, '[]][][][][][]');
            console.log(_this._G_T_II_FINAL_TERM, '[]][][][][][]');
            console.log(_this._G_T_III_FINAL_TERM, '[]][][][][][]');
            _this.getAssessmentOQEdossierMarksOQMatrixDrillEqtn();
            // this.getFinalTotal();
        });
    };
    Object.defineProperty(AssessmentOqComponent.prototype, "getCSubjectRes", {
        get: function () {
            return this.AssessmentForm.get('trgEQTNSubResult');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssessmentOqComponent.prototype, "getCSubjectRes2", {
        get: function () {
            return this.AssessmentForm.get('trgEQTNSubResult2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssessmentOqComponent.prototype, "getCSubjectRes3", {
        get: function () {
            return this.AssessmentForm.get('trgEQTNSubResult3');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssessmentOqComponent.prototype, "getCSubjectRes4", {
        get: function () {
            return this.AssessmentForm.get('trgEQTNSubResult_I_FINAL_TERM');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssessmentOqComponent.prototype, "getCSubjectRes5", {
        get: function () {
            return this.AssessmentForm.get('trgEQTNSubResult_II_FINAL_TERM');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssessmentOqComponent.prototype, "getCSubjectRes6", {
        get: function () {
            return this.AssessmentForm.get('trgEQTNSubResult_III_FINAL_TERM');
        },
        enumerable: false,
        configurable: true
    });
    AssessmentOqComponent.prototype.genSubRec = function () {
        return this.fb.group({
            id: [''],
            obtainedMarksBnCdr: [''],
            obtainedMarksCoyCdr: [''],
            obtainedMarksPlCdr: [''],
            totalMarksBnCdr: [''],
            totalMarksCoyCdr: [''],
            totalMarksPlCdr: [''],
            totalPLBNCOYObtainedMarks: [''],
            totalBNPLCOYMarks: [''],
            serviceId: [''],
            status: ['1'],
            subjectId: [''],
            subjectName: [''],
            termId: [''],
            totalMarks: [''],
            remarks: [''],
            marks_DC_CI: [''],
            marks_comdt: [''],
        });
    };
    AssessmentOqComponent.prototype.getFinalTotal = function () {
        console.log(this.totalObtained_I_MID_TERM, this.totalacdoqeqtndrill_I_MID_TERM);
        this.finaltotal_I_MID_TERM = this.totalObtained_I_MID_TERM + this.totalacdoqeqtndrill_I_MID_TERM;
        this.finaltotal_II_MID_TERM = this.totalObtained_II_MID_TERM + this.totalacdoqeqtndrill_II_MID_TERM;
        this.finaltotal_III_MID_TERM = this.totalObtained_III_MID_TERM + this.totalacdoqeqtndrill_III_MID_TERM;
        this.finaltotal_I_FINAL_TERM = this.totalObtained_I_FINAL_TERM + this.totalacdoqeqtndrill_I_FINAL_TERM;
        this.finaltotal_II_FINAL_TERM = this.totalObtained_II_FINAL_TERM + this.totalacdoqeqtndrill_II_FINAL_TERM;
        this.finaltotal_III_FINAL_TERM = this.totalObtained_III_FINAL_TERM + this.totalacdoqeqtndrill_III_FINAL_TERM;
        this.calculateGRANDTOTAL();
        //  alert(this.finaltotal_I_MID_TERM);
    };
    AssessmentOqComponent.prototype.calculateGRANDTOTAL = function () {
        // alert(this.finaltotal_II_MID_TERM);
        // alert(this.finaltotal_II_FINAL_TERM)
        this.avg_I_TERM = (this.finaltotal_I_MID_TERM + this.finaltotal_I_FINAL_TERM) / 2;
        // alert(this.avg_I_TERM)
        this.avg_II_TERM = (this.finaltotal_II_MID_TERM + this.finaltotal_II_FINAL_TERM) / 2;
        // alert(this.avg_II_TERM)
        this.avg_III_TERM = (this.finaltotal_III_MID_TERM + this.finaltotal_III_FINAL_TERM) / 2;
        // alert(this.avg_III_TERM)
        this.GRAND_TOTAL_I_TERM = this.avg_I_TERM + this.marks_DC_CI_I_Term + this.marks_comdt_I_Term;
        this.GRAND_TOTAL_II_TERM = this.avg_I_TERM + this.marks_DC_CI_I_Term + this.marks_comdt_I_Term;
        this.GRAND_TOTAL_III_TERM = this.avg_I_TERM + this.marks_DC_CI_I_Term + this.marks_comdt_I_Term;
        console.log(this.GRAND_TOTAL_I_TERM, this.GRAND_TOTAL_II_TERM, this.GRAND_TOTAL_III_TERM, 'mmmmmmmmmmmmmmmmmmmmmmmm');
    };
    AssessmentOqComponent.prototype.getAssessmentOQEdossierMarksOQMatrixDrillEqtn = function () {
        var _this = this;
        console.log(this.cmrks, '_______________________-------____________---');
        this.EDossierService.getAssessmentOQEdossierMarksOQMatrixDrillEqtn(this.serviceID).subscribe(function (res) {
            if (res.message == "OK") {
                // this.mnc = "update"
                _this.spinner.hide();
                var obj = res.object;
                console.log(obj, 'iiiiiiiiiiiiiiiiii');
                if (obj.term1 != null || obj.term1 != undefined) {
                    _this.oqEqtn_I_MID_TERM = res.object.term1.oqEqtn ? res.object.term1.oqEqtn[0].obtainedMarks : 0;
                    _this.acd_I_MID_TERM = res.object.term1.oqMatrix ? res.object.term1.oqMatrix[0].obtainedMarks : 0;
                    _this.drill_I_MID_TERM = res.object.term1.oqDrill ? res.object.term1.oqDrill[0].obtainedMarks : 0;
                    // console.log( this.drill_I_MID_TERM, this.oqEqtn_I_MID_TERM, this.acd_I_MID_TERM, '=====================');
                    _this.totalacdoqeqtndrill_I_MID_TERM = _this.acd_I_MID_TERM + _this.oqEqtn_I_MID_TERM + _this.drill_I_MID_TERM;
                    // console.log( this.totalacdoqeqtndrill_I_MID_TERM,'=====================');
                    _this.oqEqtn_I_FINAL_TERM = res.object.term1.oqEqtn ? res.object.term1.oqEqtn[1].obtainedMarks : 0;
                    _this.acd_I_FINAL_TERM = res.object.term1.oqMatrix ? res.object.term1.oqMatrix[1].obtainedMarks : 0;
                    _this.drill_I_FINAL_TERM = res.object.term1.oqDrill ? res.object.term1.oqDrill[1].obtainedMarks : 0;
                    _this.totalacdoqeqtndrill_I_FINAL_TERM = _this.acd_I_FINAL_TERM + _this.oqEqtn_I_FINAL_TERM + _this.drill_I_FINAL_TERM;
                    _this.getFinalTotal();
                }
                if (obj.term2 != null || obj.term2 != undefined) {
                    _this.oqEqtn_II_MID_TERM = res.object.term2.oqEqtn ? res.object.term2.oqEqtn[2].obtainedMarks : 0;
                    console.log(res.object.term2.oqEqtn[2].obtainedMarks, '---------------@@@@@@@@@@@@@@@@@@@@@');
                    _this.acd_II_MID_TERM = res.object.term2.oqMatrix ? res.object.term2.oqMatrix[2].obtainedMarks : 0;
                    _this.drill_II_MID_TERM = res.object.term2.oqDrill ? res.object.term2.oqDrill[2].obtainedMarks : 0;
                    console.log(_this.acd_II_MID_TERM, _this.oqEqtn_II_MID_TERM, _this.drill_II_MID_TERM, '=====================');
                    _this.totalacdoqeqtndrill_II_MID_TERM = _this.acd_II_MID_TERM + _this.oqEqtn_II_MID_TERM + _this.drill_II_MID_TERM;
                    _this.oqEqtn_II_FINAL_TERM = res.object.term2.oqEqtn ? res.object.term2.oqEqtn[3].obtainedMarks : 0;
                    console.log(res.object.term2.oqEqtn[3].obtainedMarks, '---------------@@@@@@@@@@@@@@@@@@@@@');
                    _this.acd_II_FINAL_TERM = res.object.term2.oqMatrix ? res.object.term2.oqMatrix[3].obtainedMarks : 0;
                    _this.drill_II_FINAL_TERM = res.object.term2.oqDrill.length > 3 ? res.object.term2.oqDrill[3].obtainedMarks : 0;
                    console.log(_this.acd_II_FINAL_TERM, _this.oqEqtn_II_FINAL_TERM, _this.drill_II_FINAL_TERM, '=====================');
                    _this.totalacdoqeqtndrill_II_FINAL_TERM = _this.acd_II_FINAL_TERM + _this.oqEqtn_II_FINAL_TERM + _this.drill_II_FINAL_TERM;
                    _this.getFinalTotal();
                }
                if (obj.term3 != null || obj.term3 != undefined) {
                    _this.oqEqtn_III_MID_TERM = res.object.term3.oqEqtn.length > 4 ? res.object.term3.oqEqtn[4].obtainedMarks : 0;
                    console.log(res.object.term3.oqEqtn[4], '@@@@@@@@@@@@@@@@@@@@@');
                    _this.acd_III_MID_TERM = res.object.term3.oqMatrix.length > 4 ? res.object.term3.oqMatrix[4].obtainedMarks : 0;
                    _this.drill_III_MID_TERM = res.object.term3.oqDrill.length > 4 ? res.object.term3.oqDrill[4].obtainedMarks : 0;
                    _this.totalacdoqeqtndrill_III_MID_TERM = _this.acd_III_MID_TERM + _this.oqEqtn_III_MID_TERM + _this.drill_III_MID_TERM;
                    console.log(_this.totalacdoqeqtndrill_III_FINAL_TERM, '=====================');
                    _this.oqEqtn_III_FINAL_TERM = res.object.term3.oqEqtn.length > 5 ? res.object.term3.oqEqtn[5].obtainedMarks : 0;
                    console.log(res.object.term3.oqEqtn[5], '@@@@@@@@@@@@@@@@@@@@@');
                    _this.acd_III_FINAL_TERM = res.object.term3.oqMatrix.length > 5 ? res.object.term3.oqMatrix[5].obtainedMarks : 0;
                    _this.drill_III_FINAL_TERM = res.object.term3.oqDrill.length > 5 ? res.object.term3.oqDrill[5].obtainedMarks : 0;
                    _this.totalacdoqeqtndrill_III_FINAL_TERM = _this.acd_III_FINAL_TERM + _this.oqEqtn_III_FINAL_TERM + _this.drill_III_FINAL_TERM;
                    console.log(_this.totalacdoqeqtndrill_III_FINAL_TERM, '=====================');
                    _this.getFinalTotal();
                }
            }
        });
    };
    AssessmentOqComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_2__["EDossierService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] },
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_2__["EDossierService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    AssessmentOqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'ms-assessment-oq',
            template: _raw_loader_assessment_oq_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_assessment_oq_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_2__["EDossierService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_2__["EDossierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], AssessmentOqComponent);
    return AssessmentOqComponent;
}());



/***/ })

}]);