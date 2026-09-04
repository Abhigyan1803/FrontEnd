(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["academic-depart-sports-sports-module"],{

/***/ "R7Cx":
/*!*******************************************************************!*\
  !*** ./src/app/main/academic-depart/sports/sports.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: normal;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.sports_popup {\n  max-width: 100%;\n}\n\n.modal-dialog-scrollable {\n  max-height: 100%;\n}\n\n.modal-dialog-scrollable .modal-content {\n  max-height: 100%;\n}\n\nform.eqtn-table {\n  overflow-x: scroll;\n  width: 100%;\n}");

/***/ }),

/***/ "Sp85":
/*!**************************************************************!*\
  !*** ./src/app/main/academic-depart/sports/sports.module.ts ***!
  \**************************************************************/
/*! exports provided: SportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsModule", function() { return SportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _sports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sports.component */ "uczU");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _sports_component__WEBPACK_IMPORTED_MODULE_4__["SportsComponent"]
    },
    {
        path: 'add-sports',
        loadChildren: function () { return __webpack_require__.e(/*! import() | sports-add-sports-add-sports-module */ "sports-add-sports-add-sports-module").then(__webpack_require__.bind(null, /*! ../sports/add-sports/add-sports.module */ "XKKg")).then(function (m) { return m.AddSportsModule; }); }
    },
    {
        path: 'view-drill-marks',
        loadChildren: function () { return __webpack_require__.e(/*! import() | sports-add-sports-add-sports-module */ "sports-add-sports-add-sports-module").then(__webpack_require__.bind(null, /*! ../sports/add-sports/add-sports.module */ "XKKg")).then(function (m) { return m.AddSportsModule; }); }
    }
];
var SportsModule = /** @class */ (function () {
    function SportsModule() {
    }
    SportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sports_component__WEBPACK_IMPORTED_MODULE_4__["SportsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], SportsModule);
    return SportsModule;
}());



/***/ }),

/***/ "ZjJR":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/sports/sports.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"mat-heading\">\r\n      <div id=\"top-bar\" class=\"\">\r\n        <h2>TRG TEAM <span class=\"sub-menu1\">\r\n          > SPORTS > {{term}}  > {{type}}</span></h2>\r\n    </div>\r\n    </div>\r\n    <div class=\"academics\">\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n        <!-- <div class=\"ng-star-inserted\">\r\n          <div class=\"mat-new mb-4\">\r\n            <h4 class=\"card-heading\">Sports -{{term}} ></h4>\r\n          </div>\r\n        </div> -->\r\n        <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n       \r\n          <div class=\"row\">\r\n\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"battalion\">Battalion</label>\r\n              <select id=\"battalion\" name=\"battalion\" (change)=\"battalionSelected($event.target.value)\" class=\"form-control\">\r\n                <option value=\"0\" selected>Select</option>\r\n                <option *ngFor=\"let b of battalionList\" [value]=\"b.shortName\"> {{b.shortName}}</option>\r\n              </select>\r\n             \r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"company\">Company</label>\r\n              <select id=\"company\" class=\"form-control\" name=\"company\"  (change)=\"companySelected($event.target.value)\">\r\n                <option value=\"0\" selected>Select</option>\r\n                <option *ngFor=\"let c of companyList\" [value]=\"c.name\"> {{c?.name || ''}}</option>\r\n              </select>\r\n              <!-- <span class=\"val_msg\" *ngIf=\"f.company.errors && f.company.errors.required && isError\">*Please Select\r\n                    Company</span> -->\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Search</label>\r\n                <input placeholder=\"IMA NO.\" [(ngModel)]=\"serviceid\" name=\"serviceid\"  type=\"text\" (keyup)=\"serviceSearch($event)\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 \" style=\"margin-top: 29px;\">\r\n              <button type=\"button\" mat-raised-button (click)=\"edSearch()\">Search</button>\r\n            </div>\r\n          </div>\r\n     \r\n     \r\n        </form>\r\n        <form [formGroup]=\"LDMatrixForm\"  class=\"eqtn-table\">\r\n          <table class=\"tg\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Bn/Coy</th>\r\n                <th class=\"tg-qnnc\" colspan=\"10\">Subjects</th>\r\n              </tr>\r\n              <tr>\r\n                <th colspan=\"1\" style=\"width: 11%;\" *ngFor=\"let subject of sportsSubject\" class=\"tg-qnnc\">\r\n                  {{subject.subjectName}}<br>Marks\r\n                  ({{subject.totalMarks}})</th>\r\n\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Total (100)</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Remark</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let sports of sportsList; let sportsIndex = index\">\r\n                <td class=\"tg-c3ow\">{{ sportsIndex + 1}}</td>\r\n                <td class=\"tg-c3ow\">{{ sports.serviceId }}</td>\r\n                <td class=\"tg-0pky\">{{ sports.course }}</td>\r\n                <td class=\"tg-c3ow\">{{ sports.name }}</td>\r\n                <!-- <td class=\"tg-0pky\">{{ leadership.nationality }}</td> -->\r\n                <td class=\"tg-c3ow\">\r\n                  <p  *ngIf=\"sports.nationality=='India'\">GC</p>\r\n                  <p  *ngIf=\"sports.nationality !='India'\">FGC</p>\r\n                </td>\r\n                <td class=\"tg-c3ow\">{{ sports.battalian }}/{{ sports.company }}</td>\r\n                <td class=\"tg-c3ow\" *ngFor=\"let sportsSubject of sports.sportsResult.sportsSubResult; let sportsSubjectIndex = index\">\r\n                  <div class=\"d-flex\">\r\n                    <ng-container\r\n                      >\r\n                      <!-- <input type=\"text\" class=\"form-control d-inline\" value=\"{{sportsSubject.obtainedMarks}}\"\r\n                        (focus)=\"onFocusEvent($event.target.value,sportsIndex)\"\r\n                        min=\"0\" oninput=\"this.value =  !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                        on-focusout=\"onChange($event.target.value, sportsSubject.totalMarks, sportsSubject.subjectId, sportsIndex, eqtnSubjectIndex)\">\r\n                  -->\r\n                        <input type=\"text\" *ngIf=\"hasAccess\" maxlength=\"2\" class=\"form-control d-inline\"\r\n                        value=\"{{sportsSubject.obtainedMarks}}\"\r\n                        min=\"0\" (keypress)=\"keyPress($event)\" oninput=\"this.value =!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                        (focus)=\"onFocusEvent($event.target.value,sportsIndex)\"\r\n                        on-focusout=\"onChange($event,$event.target.value, sportsSubject.totalMarks, sportsSubject.subjectId, sportsIndex, sportsSubjectIndex)\">\r\n                        \r\n                 \r\n                      </ng-container>\r\n                  </div>\r\n                </td>\r\n\r\n                <td class=\"tg-0pky\">\r\n                  <input type=\"text\" *ngIf=\"hasAccess\" class=\"form-control\" disabled id=\"{{sportsIndex}}\"\r\n                    value=\"{{ sports.sportsResult.obtainedMarks }}\">\r\n                </td>\r\n                <td class=\"tg-0pky\">\r\n                  <input type=\"text\" *ngIf=\"hasAccess\" class=\"form-control\"  id=\"{{sportsIndex}}\"\r\n                    value=\"{{ sports.sportsResult.remarks }}\"  on-focusout=\"onChange1($event,$event.target.value, sportsIndex)\">\r\n                </td>\r\n\r\n\r\n                <div *ngIf=\"!sports.sportsResult\">\r\n                  <div *ngFor=\"let size of sportsSubject;let ser=index;\">\r\n                    <td class=\"tg-c3ow\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"obtainedMarks\">\r\n                    </td>\r\n                    <td *ngIf=\"ser+1 == sportsSubject.length\" class=\"tg-c3ow\">{{obtainedTotalMarks}}</td>\r\n                  </div>\r\n                </div>\r\n              </tr>\r\n\r\n              <tr  *ngIf=\"! sportsList?.length\">\r\n                <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"14\"><div>No Record Found</div></td>\r\n             </tr>\r\n\r\n            </tbody>\r\n          </table>\r\n\r\n          <br>\r\n         <div class=\"\">\r\n            <mat-paginator #myPaginator [length]=\"resultsLength\" [pageIndex]=\"currentPage\" [pageSize]=\"pageSize\"\r\n              [pageSizeOptions]=\"[30]\" (page)=\"pageChanged($event)\" aria-label=\"Select page\" showFirstLastButtons>\r\n            </mat-paginator>\r\n\r\n          </div>\r\n          <div class=\"btn-sec mt-3 text-right\">\r\n            <button type=\"button\" mat-raised-button (click)=\"openPopup()\" [disabled]=\"!sportsList?.length\">Preview</button>\r\n\r\n            <!-- ////dshsj -->\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayStyle}\">\r\n  <div class=\"modal-dialog modal-lg modal-dialog-scrollable custom-lg sports_popup\" role=\"document\">\r\n    <div class=\"modal-content sports_popup\">\r\n      <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Review</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <table class=\"tg\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Bn/Coy</th>\r\n              <th class=\"tg-qnnc\" colspan=\"15\">Subjects</th>\r\n\r\n            </tr>\r\n\r\n            <tr>\r\n              <th colspan=\"1\" style=\"width: 11%;\" *ngFor=\"let subject of sportsSubject\" class=\"tg-qnnc\">\r\n                {{subject.subjectName}}<br>Marks\r\n                ({{subject.totalMarks}})</th>\r\n\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Total (100)</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Remarks</th>\r\n\r\n            </tr>\r\n\r\n\r\n          </thead>\r\n          <tbody>\r\n\r\n            <tr *ngFor=\"let sports of sportsList; let sportsIndex = index\">\r\n              <td class=\"tg-c3ow\">{{ sportsIndex + 1}}</td>\r\n              <td class=\"tg-c3ow\">{{ sports.serviceId }}</td>\r\n              <td class=\"tg-0pky\">{{ sports.course }}</td>\r\n              <td class=\"tg-c3ow\">{{ sports.name }}</td>\r\n              <!-- <td class=\"tg-0pky\">{{ leadership.nationality }}</td> -->\r\n              <td class=\"tg-c3ow\">\r\n                <p *ngIf=\"sports.nationality=='India'\">GC</p>\r\n                <p *ngIf=\"sports.nationality !='India'\">FGC</p>\r\n              </td>\r\n              <td class=\"tg-c3ow\">{{ sports.battalian }}/{{ sports.company }}</td>\r\n              <td class=\"tg-c3ow\" colspan=\"1\"\r\n                *ngFor=\"let sportsSubject of sports.sportsResult.sportsSubResult; let sportsSubjectIndex = index\">\r\n                <div class=\"d-flex\">\r\n                  <ng-container>\r\n                    <input type=\"text\"  *ngIf=\"hasAccess\" class=\"form-control d-inline\" value=\"{{sportsSubject.obtainedMarks}}\"\r\n                      (focus)=\"onFocusEvent($event.target.value,sportsIndex)\" min=\"0\" disabled\r\n                      oninput=\"this.value =  !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                      on-focusout=\"onChange($event.target.value, sportsSubject.totalMarks, sportsSubject.subjectId, sportsIndex, sportsSubjectIndex)\">\r\n                  </ng-container>\r\n                </div>\r\n              </td>\r\n\r\n              <td class=\"tg-0pky\">\r\n                <input type=\"text\" *ngIf=\"hasAccess\" class=\"form-control\" disabled id=\"{{sportsIndex}}\"\r\n                  value=\"{{ sports.sportsResult.obtainedMarks }}\" >\r\n              </td>\r\n              <td class=\"tg-0pky\">\r\n                <input type=\"text\" *ngIf=\"hasAccess\" class=\"form-control\"  \r\n                  value=\"{{ sports.sportsResult.remarks }}\"  on-focusout=\"onChange1($event,$event.target.value, sportsIndex)\">\r\n              </td>\r\n\r\n\r\n              <div *ngIf=\"!sports.sportsResult\">\r\n                <div *ngFor=\"let size of sportsSubject;let ser=index;\">\r\n                  <td class=\"tg-c3ow\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"obtainedMarks\">\r\n                  </td>\r\n                  <td *ngIf=\"ser+1 == sportsSubject.length\" class=\"tg-c3ow\">{{obtainedTotalMarks}}</td>\r\n                </div>\r\n              </div>\r\n            </tr>\r\n            <tr  *ngIf=\"! sportsList?.length\">\r\n              <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"14\"><div>No Record Found</div></td>\r\n           </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button mat-raised-button type=\"button\" class=\"btn-dark\" (click)=\"closePopup()\">Back</button>\r\n        <button type=\"button\" mat-raised-button (click)=\"confirm()\">Submit</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "uczU":
/*!*****************************************************************!*\
  !*** ./src/app/main/academic-depart/sports/sports.component.ts ***!
  \*****************************************************************/
/*! exports provided: SportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsComponent", function() { return SportsComponent; });
/* harmony import */ var _raw_loader_sports_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sports.component.html */ "ZjJR");
/* harmony import */ var _sports_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sports.component.scss */ "R7Cx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/academic-dept/academic-dept.service */ "1ABS");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/observable/of */ "G4OQ");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/service/delay-dashboard/delay-dashboard.service */ "GvGC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var SportsComponent = /** @class */ (function () {
    function SportsComponent(dialog, spinner, route, fb, delayDashboardService, router, academicservice, adminservice, cdref, activeRoute) {
        var _this = this;
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.delayDashboardService = delayDashboardService;
        this.router = router;
        this.academicservice = academicservice;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.LDMatrixForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.pageTitle = "Add SPORTS & GAMES";
        this.id = '';
        this.battalionList = [];
        this.companyList = [];
        this.sportsSubject = [];
        this.attrInput = [];
        this.isError = false;
        this.totalmarks = 0;
        this.displayStyle = "none";
        this.pageSize = 30;
        this.currentPage = 0;
        this.hasAccess = true;
        this.status = 1;
        this.userDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        document.addEventListener("keydown", function (event) {
            if (event.ctrlKey) {
                event.preventDefault();
            }
        });
        this.route.params.subscribe(function (params) {
            _this.term = params.term;
            _this.type = params.type;
            console.log(_this.battalionList);
            if (_this.term == "I Term" && _this.type == "SPRING TERM") {
                _this.termId = 1;
                _this.termSession = "Spring";
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
                _this.getsportsSubjectMatrix();
                _this.getSportsAlllist();
                _this.getBattalionList();
            }
            else if (_this.term == "II Term" && _this.type == "SPRING TERM") {
                _this.termId = 2;
                _this.termSession = "Spring";
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
                _this.getsportsSubjectMatrix();
                _this.getSportsAlllist();
                _this.getBattalionList();
            }
            else if (_this.term == "III Term" && _this.type == "SPRING TERM") {
                _this.termId = 3;
                _this.termSession = "Spring";
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
                _this.getsportsSubjectMatrix();
                _this.getSportsAlllist();
                _this.getBattalionList();
            }
            else if (_this.term == "II Tech" && _this.type == "SPRING TERM") {
                _this.termId = 7;
                _this.termSession = "Spring";
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
                _this.getsportsSubjectMatrix();
                _this.getSportsAlllist();
                _this.getBattalionList();
            }
            else if (_this.term == "I Term" && _this.type != "SPRING TERM") {
                _this.termId = 1;
                _this.termSession = "Autumn";
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
                _this.getsportsSubjectMatrix();
                _this.getSportsAlllist();
                _this.getBattalionList();
            }
            else if (_this.term == "II Term" && _this.type != "SPRING TERM") {
                _this.termId = 2;
                _this.termSession = "Autumn";
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
                _this.getsportsSubjectMatrix();
                _this.getSportsAlllist();
                _this.getBattalionList();
            }
            else if (_this.term == "III Term" && _this.type != "SPRING TERM") {
                _this.termId = 3;
                _this.termSession = "Autumn";
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
                _this.getsportsSubjectMatrix();
                _this.getSportsAlllist();
                _this.getBattalionList();
            }
            else if (_this.term == "II Tech" && _this.type != "SPRING TERM") {
                _this.termId = 7;
                ;
                _this.termSession = "Autumn";
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
                _this.getsportsSubjectMatrix();
                _this.getSportsAlllist();
                _this.getBattalionList();
            }
        });
        this.LDMatrixForm = this.fb.group({
            serviceId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [this.termId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            obtainedMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            sportsSubjectResult: this.fb.array([]),
        });
        this.getFinalSubmissionDates(this.termId);
    }
    SportsComponent.prototype.ngOnInit = function () {
    };
    SportsComponent.prototype.getBattalionList = function () {
        var _this = this;
        // this.battalionList = null;
        console.log(this.battalionList + "[==============================]");
        this.adminservice.getBattalionList().subscribe(function (res) {
            _this.spinner.show();
            if (res.message == 'OK') {
                _this.battalionList = res.object;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    SportsComponent.prototype.serviceSearch = function (e) {
        this.x = e.target.value;
        this.serviceid = this.x;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this.getSportsAlllist();
        }
    };
    SportsComponent.prototype.edSearch = function (event) {
        console.log(this.paginator.pageIndex, "getSports_matrix_list paginator");
        console.log(this.paginator.pageSize, "getSports_matrix_list paginator1");
        this.searchEqtnData();
    };
    SportsComponent.prototype.searchEqtnData = function () {
        var _this = this;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this.academicservice.openSnackbar("Search Bar is Empty. Please fill the details");
        }
        else {
            this.battalionId = null;
            this.companyList = [];
            this.battalionList = [];
            this.companyName = null;
            this.getBattalionList();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(/* this.sort.sortChange,  */ this.paginator.page)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])(function () {
                _this.spinner.show();
                return _this.academicservice.getGames_Sports_search(_this.termId, _this.termSession, _this.serviceid, _this.paginator.pageIndex, _this.paginator.pageSize);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (data) {
                // this.getTotalRecords();
                _this.resultsLength = data.object.totalRecords;
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(function () {
                console.log('Error here');
                _this.spinner.hide();
                return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_13__["of"])([]);
                // return null;
            })).subscribe(function (data) {
                if (data.message == 'OK') {
                    _this.sportsList = data.object.sportsFilterPayload;
                    if (data.object.sportsFilterPayload.length > 0) {
                        _this.sportsList = data.object.sportsFilterPayload;
                    }
                    else {
                        _this.sportsList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.sportsList = [];
                }
                _this.spinner.hide();
                // var scrollElem = document.querySelector('#orders');
                // scrollElem.scrollIntoView();
            });
        }
    };
    SportsComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        this.battalionName = e;
        this.companyName = null;
        this.serviceid = null;
        if (this.battalionName == '0') {
            this.battalionId = null;
            this.companyName = null;
        }
        if (this.battalionName == 'CA') {
            this.battalionId = 1;
        }
        else if (this.battalionName == "TH") {
            this.battalionId = 2;
        }
        else if (this.battalionName == "MA") {
            this.battalionId = 3;
        }
        else if (this.battalionName == "BH") {
            this.battalionId = 4;
        }
        this.getSportsAlllist();
        this.spinner.show();
        if (this.battalionId != null || this.battalionName != '0') {
            this.adminservice.getCompanyList(this.battalionId).subscribe(function (res) {
                _this.spinner.show();
                console.log(res);
                if (res.status == 'OK') {
                    _this.companyList = res.object;
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
            });
        }
        else {
            this.companyList = [];
            this.companyName = null;
        }
        // this.adminservice.getCompanyList(this.battalionId).subscribe(
        //   res => {
        //     this.spinner.show();
        //     console.log(res)
        //     if (res.status == "OK") {
        //       this.companyList = res.object;
        //       this.cdref.detectChanges();
        //       this.spinner.hide();
        //     } else {
        //       this.spinner.hide()
        //     }
        //   },
        //   err => {
        //     this.spinner.hide();
        //   }
        // );
    };
    SportsComponent.prototype.companySelected = function (e) {
        this.companyName = e;
        this.serviceid = null;
        if (this.companyName == 0) {
            this.companyName = null;
            this.getSportsAlllist();
        }
        else {
            if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
                this.getSportsAlllist();
            }
        }
    };
    SportsComponent.prototype.getsportsSubjectMatrix = function () {
        var _this = this;
        this.spinner.show();
        this.academicservice.getGames_Sports(this.termId, this.status, this.termSession).subscribe(function (res) {
            console.log(res, "========Games_Sports=========");
            if (res.message == "Record found successfully") {
                _this.sportsSubject = res.object;
                _this.subjectSize = res.object.length;
                console.log(_this.subjectSize, "this.subjectSizethis.subjectSize");
                _this.spinner.hide();
                _this.cdref.detectChanges();
                console.log(res, "========Games_Sports=========");
            }
            else {
                _this.spinner.hide();
                _this.academicservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.academicservice.openSnackbar("Some Error Occured.");
        });
    };
    SportsComponent.prototype.onChangesubmit = function (value) {
        this.value = value;
    };
    SportsComponent.prototype.confirm = function () {
        var _this = this;
        this.spinner.show();
        this.LDMatrixForm.value == this.totalMarks1;
        this.totalMarks1 = Object.assign({}, this.LDMatrixForm.value, { obtainedMarks: this.obtainedTotalMarks });
        var formdata = this.sportsList;
        console.log(formdata);
        this.academicservice.updateGames_Sports(formdata).subscribe(function (res) {
            if (res.message == "Record updated successfully") {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Updated Successfully");
                window.location.reload();
            }
            else {
                (function (err) {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar("Some Error Occured.");
                });
            }
        });
    };
    SportsComponent.prototype.pageChanged = function (event) {
        this.pageSize = event.pageSize;
        console.log(this.pageSize, "page size");
        this.currentPage = event.pageIndex;
        console.log(this.currentPage, "currentPage");
        this.getSportsAlllist();
    };
    SportsComponent.prototype.getTotal = function (marks) {
        return marks.reduce(function (acc, _a) {
            var obtainedMarks = _a.obtainedMarks;
            return acc += +(obtainedMarks || 0);
        }, 0);
    };
    SportsComponent.prototype.onChange = function (e, value, totalMarks, sub_id, mainIndex, subIndex) {
        if (value > totalMarks || value == NaN) {
            this.adminservice.openSnackbar("Obtained marks is greater than total marks");
            e.target.value = null;
            value = '';
        }
        else if (value == "") {
            this.sportsList[mainIndex].sportsResult.sportsSubResult[subIndex].obtainedMarks = value;
            return false;
        }
        else {
            var total = document.getElementById(mainIndex).value;
            if (total) {
                document.getElementById(mainIndex).value = parseInt(total) + (value == '' ? 0 : parseInt(value)) + "";
                this.sportsList[mainIndex].sportsResult.obtainedMarks = parseInt(total) + (value == '' ? 0 : parseInt(value));
            }
            else {
                document.getElementById(mainIndex).value = value;
                this.sportsList[mainIndex].sportsResult.obtainedMarks = (value == '' ? 0 : parseInt(value));
            }
            this.sportsList[mainIndex].sportsResult.sportsSubResult[subIndex].obtainedMarks = value;
        }
        console.log('%%%%%%%%%%%%%%%%%%%%%%', this.sportsList);
        // this.sportsList
    };
    SportsComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode == 32) {
            event.preventDefault();
        }
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    SportsComponent.prototype.onFocusEvent = function (value, mainIndex) {
        if (value == NaN || value == '' || value == undefined) {
            return false;
            value = 0;
        }
        var total = document.getElementById(mainIndex).value;
        if (total) {
            var temp = parseInt(total) - parseInt(value);
            document.getElementById(mainIndex).value = parseInt(total) + parseInt(value) + "";
            this.sportsList[mainIndex].sportsResult.obtainedMarks = temp == 0 ? null : temp;
        }
        else {
            document.getElementById(mainIndex).value = value;
            this.sportsList[mainIndex].sportsResult.obtainedMarks = value;
        }
        // this.obtainedTotalMarks -= parseInt(val);
        if (this.obtainedTotalMarks == NaN) {
            this.obtainedTotalMarks = 0;
        }
    };
    SportsComponent.prototype.getSportsAlllist = function () {
        var _this = this;
        this.sportsList = null;
        if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
            this.academicservice.getGames_Sports_listByBCName(this.termId, this.termSession, this.currentPage, this.pageSize, this.battalionName, this.companyName).subscribe(function (res) {
                console.log(res);
                _this.resultsLength = res.object.totalRecords;
                if (res.message == "Record not found") {
                    // alert("hi")
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.sportsList = res.object.sportsFilterPayload;
                    if (res.object.sportsFilterPayload.length > 0) {
                        _this.sportsList = res.object.sportsFilterPayload;
                    }
                    else {
                        _this.sportsList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.sportsList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.spinner.show();
            this.academicservice.getGames_Sports_list(this.termId, this.termSession, this.currentPage, this.pageSize).subscribe(function (res) {
                console.log(res);
                _this.resultsLength = res.object.totalRecords;
                if (res.message == "Record not found") {
                    _this.spinner.hide();
                    _this.sportsList = [];
                    _this.adminservice.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.sportsList = res.object.sportsFilterPayload;
                    if (res.object.sportsFilterPayload.length > 0) {
                        _this.sportsList = res.object.sportsFilterPayload;
                    }
                    else {
                        _this.sportsList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.sportsList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Some Error Occured.");
            });
        }
    };
    SportsComponent.prototype.onChange1 = function (e, value, mainIndex) {
        this.sportsList[mainIndex].sportsResult.remarks = value;
        console.log('%%%%remark%%%%%%%', this.sportsList);
        // this.intellectualCadetList
    };
    SportsComponent.prototype.termSessionSelected = function (e) {
    };
    SportsComponent.prototype.openPopup = function () {
        this.displayStyle = "block";
    };
    SportsComponent.prototype.closePopup = function () {
        this.displayStyle = "none";
    };
    SportsComponent.prototype.next = function () {
        if (this.router.url.includes('main/academic-depart'))
            this.router.navigate(['/main/academic-depart/sports/I-Term/games/add-sports'], { queryParams: { id: this.value, termid: this.termid } });
        if (this.router.url.includes('main/admin/academic-depart'))
            this.router.navigate(['/main/admin/academic-depart/sports/I-Term/games/add-sports'], { queryParams: { id: this.value, termid: this.termid } });
    };
    SportsComponent.prototype.getFinalSubmissionDates = function (termId) {
        var _this = this;
        this.delayDashboardService.getStaffList(1, termId).subscribe(function (res) {
            console.log(res);
            var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(res.object);
            var findOfficer = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["find"])(function (obj) { return obj.loginId === parseInt(_this.userDetails.loginId); }));
            var subscribeOfficerRecord = findOfficer.subscribe(function (val) {
                if (val) {
                    console.log("USER RESPONSE: ", val);
                    if (val.finalSubmissionDate) {
                        _this.finalSubmissionDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_15__["formatDate"])(val.finalSubmissionDate, 'yyyy-MM-dd', _this.localID);
                        var todayDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_15__["formatDate"])(new Date(), 'yyyy-MM-dd', _this.localID);
                        if (todayDate > _this.finalSubmissionDate) {
                            _this.hasAccess = false;
                        }
                        else {
                            _this.hasAccess = true;
                        }
                        // console.log("Date is setted and Access: ",this.hasAccess);
                    }
                    else {
                        _this.hasAccess = true;
                        // console.log("Date is not set and has Access: ",this.hasAccess);
                    }
                }
            });
        });
    };
    SportsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_14__["DelayDashboardService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_10__["AcademicDeptService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    SportsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true },] }]
    };
    SportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "ms-sports",
            template: _raw_loader_sports_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sports_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_14__["DelayDashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_10__["AcademicDeptService"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], SportsComponent);
    return SportsComponent;
}());



/***/ })

}]);