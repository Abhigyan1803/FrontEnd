(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ppt-ppt-module"],{

/***/ "9/as":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/pt/ppt/ppt.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">PT <span class=\"sub-menu1\"> > {{term}} > PPT </span> \r\n    <div class=\"pull-right\" *ngIf=\"finalSubmissionDate\"> Last Date for Marks Submission : {{finalSubmissionDate | date:'dd MMM yyyy'}} </div>\r\n    </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n    <!-- <form class=\"ng-untouched ng-pristine ng-invalid\"> -->\r\n        <div class=\"row\">\r\n\r\n            <div class=\"form-group col-md-4\">\r\n                <label for=\"battalion\">Battalion</label>\r\n                <select id=\"battalion\" (change)=\"battalionSelected($event.target.value)\" class=\"form-control\"\r\n                  [(ngModel)]=\"battalionId\"  >\r\n                    <option value=\"\" selected hidden disabled>Select</option>\r\n                    <option *ngFor=\"let b of battalionList\" [value]=\"b.id\"> {{b.shortName}} Bn</option>\r\n                </select>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4\">\r\n                <label for=\"company\">Company</label>\r\n                <select id=\"company\" class=\"form-control\" (change)=\"companySelected($event.target.value)\"\r\n                [(ngModel)]=\"companyId\" >\r\n                    <option value=\"\" selected hidden disabled>Select</option>\r\n                    <option *ngFor=\"let c of companyList\" [value]=\"c.id\"> {{c?.name || ''}}</option>\r\n                </select>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"rank\">Search</label>\r\n                    <input placeholder=\"IMA Number/Service Id\" formcontrolname=\"\" type=\"text\" [(ngModel)]=\"serviceId\"\r\n                        class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"rank\">Attempt Type</label>\r\n                    <select id=\"company\" class=\"form-control\">\r\n                        <option *ngFor=\"let att of attemtTypes\" [value]=\"at\"> {{att}}</option>\r\n                    </select>\r\n                </div>\r\n            </div> -->\r\n\r\n\r\n\r\n        </div>\r\n       \r\n         <div style=\"float: right;\">\r\n            <button  mat-raised-button (click)=\"search()\" >Submit</button>\r\n            <button  mat-raised-button (click)=\"clearSearch()\" >Clear</button>\r\n        </div>\r\n    <!-- </form> -->\r\n\r\n</mat-card>\r\n<mat-card class=\"ppt-table\" #tableCard >\r\n\r\n\r\n    <mat-card-content>\r\n\r\n        <div class=\"text-center\" *ngIf=\"!cadetList.length && showSpinner\">\r\n            <div class=\"spinner-border \" role=\"status\"    >\r\n                <span class=\"sr-only\">Loading...</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"text-center\" *ngIf=\"!cadetList.length && !showSpinner\" >\r\n            <h5> {{statusMsg}}</h5> \r\n        </div>\r\n      \r\n    \r\n        <table class=\"tg\" *ngIf=\"cadetList.length\" >\r\n            <thead class=\"table-head\" id=\"table-header\">\r\n                <tr>\r\n                    <th class=\"tg-qnnc\" rowspan=\"2\">S. No.</th>\r\n                    <th class=\"tg-qnnc\" rowspan=\"2\">IMA No.</th>\r\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Rank</th>\r\n                    <th class=\"tg-qnnc t-name\" rowspan=\"2\">Name</th>\r\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Course</th>\r\n    \r\n    \r\n                    <th class=\"tg-qnnc\" colspan=\"3\">2.4KM (MM-{{_2400m_mm}}) </th>\r\n                    <th class=\"tg-qnnc\" colspan=\"3\">C/UP (MM-{{cup_mm}})</th>\r\n                    <th class=\"tg-qnnc\" colspan=\"3\">TOE TOUCH (MM-{{toeTouch_mm}})</th>\r\n                    <th class=\"tg-qnnc\" colspan=\"3\">5/MTR (MM-{{_5mtr_mm}})</th>\r\n                    <th class=\"tg-qnnc\" colspan=\"3\">100 MTR (MM-{{_100mtr_mm}})</th>\r\n                    <th class=\"tg-qnnc\" colspan=\"3\">SIT/UP (MM-{{sitUp_mm}})</th>\r\n                    <th *ngIf=\"termId==3\" class=\"tg-qnnc\" colspan=\"3\"> 2<sup>nd</sup> CL Rope (4 Mtr Climb) (MM-{{_4mtrClimg_mm}})</th>\r\n    \r\n                    <th class=\"tg-qnnc\" rowspan=\"2\">Total (MM-{{totalMM}})</th>\r\n    \r\n                </tr>\r\n    \r\n                <tr>\r\n                    <th>Attempt Type</th>\r\n                    <th>Obtained Marks</th>\r\n                    <th>Grade</th>\r\n    \r\n                    <th>Attempt Type</th>\r\n                    <th>Obtained Marks</th>\r\n                    <th>Grade</th>\r\n    \r\n                    <th>Attempt Type</th>\r\n                    <th>Obtained Marks</th>\r\n                    <th>Grade</th>\r\n    \r\n                    <th>Attempt Type</th>\r\n                    <th>Obtained Marks</th>\r\n                    <th>Grade</th>\r\n    \r\n                    <th>Attempt Type</th>\r\n                    <th>Obtained Marks</th>\r\n                    <th>Grade</th>\r\n    \r\n                    <th>Attempt Type</th>\r\n                    <th>Obtained Marks</th>\r\n                    <th>Grade</th>\r\n    \r\n                    <th *ngIf=\"termId==3\">Attempt Type</th>\r\n                    <th *ngIf=\"termId==3\">Obtained Marks</th>\r\n                    <th *ngIf=\"termId==3\">Grade</th>\r\n    \r\n                </tr>\r\n    \r\n            </thead>\r\n    \r\n            <tbody *ngIf=\"cadetList.length\">\r\n                <tr *ngFor=\"let cadet of cadetList;let i=index\">\r\n                    <td> {{i+1}} </td>\r\n                    <td> {{cadet.serviceId}} </td>\r\n                    <td>\r\n                        <span *ngIf=\"cadet.nationality == 'India'\">GC</span>\r\n                        <span *ngIf=\"cadet.nationality != 'India'\">FGC</span>\r\n                    </td >\r\n                    <td class=\"t-name\"> {{cadet.name}} </td>\r\n                    <td> {{cadet.course}} </td>\r\n    \r\n                    <ng-container *ngFor=\"let sub of cadet.edossierPtResult.edossierPtSubjectResult;let j=index\">\r\n                        <td>\r\n                            <span *ngIf=\"!hasAccess\" > {{sub.lastAttemptType}} </span>\r\n                            <select *ngIf=\"hasAccess\" id=\"company\" class=\"form-control\" [(ngModel)]=\"sub.lastAttemptType\">\r\n                                <option value=\"\" selected hidden disabled>--</option>\r\n                                <!-- <option *ngFor=\"let att of attemtTypes\" [value]=\"att\"> {{att}}</option> -->\r\n                                <option value=\"M1\">M1</option>\r\n                                <!-- <option [disabled]=\"!sub.m1ObtainedMarks\" value=\"M2\">M2</option>\r\n                                <option [disabled]=\"!sub.m2ObtainedMarks\" value=\"C1\">C1</option>\r\n                                <option [disabled]=\"!sub.c1ObtainedMarks\" value=\"C2\">C2</option> -->\r\n                                <option  value=\"M2\">M2</option>\r\n                                <option  value=\"C1\">C1</option>\r\n                                <option  value=\"C2\">C2</option>\r\n                            </select>\r\n                        </td>\r\n                        <td>\r\n                            <span *ngIf=\"sub.lastAttemptType == 'M1' && !hasAccess \" > {{sub.m1ObtainedMarks}} </span>\r\n                            <span *ngIf=\"sub.lastAttemptType == 'M2' && !hasAccess \" > {{sub.m2ObtainedMarks}} </span>\r\n                            <span *ngIf=\"sub.lastAttemptType == 'C1' && !hasAccess \" > {{sub.c1ObtainedMarks}} </span>\r\n                            <span *ngIf=\"sub.lastAttemptType == 'C2' && !hasAccess \" > {{sub.c2ObtainedMarks}} </span>\r\n\r\n                            <input *ngIf=\"sub.lastAttemptType == 'M1' && hasAccess \" (keypress)=\"onlyNum($event)\"\r\n                                (focusout)=\"patchNumbers($event,sub,i,j,'M1')\" maxlength=\"2\" name=\"\" id=\"\"\r\n                                class=\"form-control\" [(ngModel)]=\"sub.m1ObtainedMarks\">\r\n                            <input *ngIf=\"sub.lastAttemptType == 'M2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                                (focusout)=\"patchNumbers($event,sub,i,j,'M2')\" maxlength=\"2\" name=\"\" id=\"\"\r\n                                class=\"form-control\" [(ngModel)]=\"sub.m2ObtainedMarks\">\r\n                            <input *ngIf=\"sub.lastAttemptType == 'C1' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                                (focusout)=\"patchNumbers($event,sub,i,j,'C1')\" maxlength=\"2\" name=\"\" id=\"\"\r\n                                class=\"form-control\" [(ngModel)]=\"sub.c1ObtainedMarks\">\r\n                            <input *ngIf=\"sub.lastAttemptType == 'C2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                                (focusout)=\"patchNumbers($event,sub,i,j,'C2')\" maxlength=\"2\" name=\"\" id=\"\"\r\n                                class=\"form-control\" [(ngModel)]=\"sub.c2ObtainedMarks\">\r\n                        </td>\r\n                        <td>\r\n                            <span *ngIf=\"sub.resultGrade\">\r\n                                {{sub.resultGrade}}\r\n                            </span>\r\n                        </td>\r\n    \r\n                    </ng-container>\r\n    \r\n                    <td>\r\n                        <span *ngIf=\"cadet.edossierPtResult.ptTotalMarks\">\r\n                            {{cadet.edossierPtResult.ptTotalMarks}}\r\n                        </span>\r\n                    </td>\r\n    \r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </mat-card-content>\r\n    <!-- <div class=\"\">\r\n        <mat-paginator #myPaginator [length]=\"resultsLength\" [pageSizeOptions]=\"[25]\" showFirstLastButtons>\r\n        </mat-paginator>\r\n    </div> -->\r\n\r\n    <div class=\"mb-4 pull-right\" *ngIf=\"hasAccess\" >\r\n        <button mat-raised-button (click)=\"submitResult()\" [disabled]=\"!cadetList.length\" >\r\n            Submit\r\n        </button>\r\n    </div>\r\n    \r\n</mat-card>\r\n<!-- \r\n<div class=\"mb-5 submit-btn\" style=\"float: right;\" >\r\n    <button mat-raised-button (click)=\"submitResult()\" [disabled]=\"!cadetList.length\" >\r\n        Submit\r\n    </button>\r\n</div> -->\r\n\r\n\r\n");

/***/ }),

/***/ "H5UD":
/*!*******************************************************!*\
  !*** ./src/app/main/trg-team/pt/ppt/ppt.component.ts ***!
  \*******************************************************/
/*! exports provided: PptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PptComponent", function() { return PptComponent; });
/* harmony import */ var _raw_loader_ppt_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ppt.component.html */ "9/as");
/* harmony import */ var _ppt_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ppt.component.scss */ "lya2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/delay-dashboard/delay-dashboard.service */ "GvGC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PptComponent = /** @class */ (function () {
    function PptComponent(fb, router, route, service, spinner, cdref, adminService, sharedService, delayDashboardService, localID) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.service = service;
        this.spinner = spinner;
        this.cdref = cdref;
        this.adminService = adminService;
        this.sharedService = sharedService;
        this.delayDashboardService = delayDashboardService;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({});
        this.pptForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({});
        this.attemtTypes = ['M1', 'M2', 'C1', 'C2'];
        this.subject = 'PPT';
        this.battalionList = [];
        this.companyList = [];
        this.battalionId = '';
        this.companyId = '';
        this.cadetList = [];
        this._2400m_mm = 20;
        this.cup_mm = 20;
        this.toeTouch_mm = 20;
        this._5mtr_mm = 15;
        this._100mtr_mm = 10;
        this.sitUp_mm = 15;
        this._4mtrClimg_mm = 10; // for term 3
        this.totalMM = this._2400m_mm + this.cup_mm + this.toeTouch_mm + this._5mtr_mm + this._100mtr_mm + this.sitUp_mm;
        this.hasAccess = true;
        this.userDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        this.route.params.subscribe(function (res) {
            _this.companyList = [];
            _this.battalion = '';
            _this.company = '';
            _this.serviceId = '';
            _this.battalionId = '';
            _this.companyId = '';
            _this.term = res.term;
            if (_this.term == 'I Term') {
                _this.termId = 1;
                _this.setAllMaxMarks();
                _this.setTotalMarks();
            }
            else if (_this.term == 'II Term') {
                _this.termId = 2;
                _this.setAllMaxMarks();
                _this.setTotalMarks();
            }
            else if (_this.term == 'III Term') {
                _this.termId = 3;
                _this.setAllMaxMarks();
                _this.setTotalMarks();
            }
            else if (_this.term == 'II Tech') {
                _this.termId = 7;
                _this.setAllMaxMarks();
                _this.setTotalMarks();
            }
            // this.pptForm = this.fb.group({
            //   cadetRecords: this.fb.array([]),
            // })
            // this.ngAfterViewInit();
            _this.companyList = [];
            _this.battalion = '';
            _this.company = '';
            _this.serviceId = '';
            _this.battalionId = '';
            _this.companyId = '';
            _this.getCadetsList();
            _this.getFinalSubmissionDates(_this.termId);
        });
        this.localID = localID;
    }
    PptComponent.prototype.ngOnInit = function () {
        this.getBattalionList();
    };
    PptComponent.prototype.ngAfterViewInit = function () {
        // this.getCadetsList(s)
    };
    PptComponent.prototype.setAllMaxMarks = function () {
        if (this.termId == 3) {
            this._2400m_mm = 12;
            this.cup_mm = 12;
            this.toeTouch_mm = 12;
            this._5mtr_mm = 11;
            this._100mtr_mm = 9;
            this.sitUp_mm = 9;
            this._4mtrClimg_mm = 10;
        }
        else {
            this._2400m_mm = 20;
            this.cup_mm = 20;
            this.toeTouch_mm = 20;
            this._5mtr_mm = 15;
            this._100mtr_mm = 10;
            this.sitUp_mm = 15;
        }
    };
    PptComponent.prototype.setTotalMarks = function () {
        if (this.termId != 3) {
            this.totalMM = this._2400m_mm + this.cup_mm + this.toeTouch_mm + this._5mtr_mm + this._100mtr_mm + this.sitUp_mm;
        }
        else if (this.termId == 3) {
            this.totalMM = this._2400m_mm + this.cup_mm + this.toeTouch_mm + this._5mtr_mm + this._100mtr_mm + this.sitUp_mm + this._4mtrClimg_mm;
        }
    };
    Object.defineProperty(PptComponent.prototype, "getAllCadetRecords", {
        get: function () {
            return this.pptForm.get('cadetRecords');
        },
        enumerable: false,
        configurable: true
    });
    PptComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        this.companyList = [];
        this.company = '';
        this.battalionList.find(function (el) {
            if (el.id == e) {
                _this.battalion = el.shortName;
            }
        });
        // this.battalion = battalion.shortName;
        // console.log(this.battalion);
        this.spinner.show();
        this.adminService.getCompanyList(e).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.companyList = res.object;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.sharedService.openSnackbar(res.message);
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    PptComponent.prototype.companySelected = function (e) {
        var _this = this;
        this.companyList.find(function (el) {
            if (el.id == e) {
                _this.company = el.name;
                // return;
            }
        });
        console.log(this.company);
    };
    PptComponent.prototype.search = function () {
        if (this.battalion || this.company || this.serviceId) {
            this.getCadetsList();
        }
        else {
            this.sharedService.openAlertSnackbarWithSeconds("No Search Filters are Added.", 7);
        }
    };
    PptComponent.prototype.clearSearch = function () {
        if (this.battalion || this.company || this.serviceId) {
            this.companyList = [];
            this.company = '';
            this.battalion = '';
            this.serviceId = '';
            this.battalionId = '';
            this.companyId = '';
            this.getCadetsList();
        }
    };
    PptComponent.prototype.getACadetRecord = function () {
        return this.fb.group({
            id: [''],
            serviceId: [''],
            name: [''],
            battalian: [''],
            company: [''],
            rank: [''],
            termId: [''],
            termName: [''],
            course: [''],
            courseSerNo: [''],
            nationality: [''],
            edossierPtResult: this.fb.group({
                clearedIn: [''],
                edossierPtSubjectResult: this.fb.array([]),
                id: [''],
                obtainedMarks: [''],
                remarks: [''],
                serviceId: [''],
                status: [''],
                subjectType: [''],
                termId: [''],
                totalMarks: [''],
            }),
        });
    };
    PptComponent.prototype.addCadetRecord = function () {
        this.getAllCadetRecords.push(this.getACadetRecord());
    };
    PptComponent.prototype.getASubject = function () {
        return this.fb.group({
            attemtType: [''],
            c1ObtainedMarks: [''],
            c2ObtainedMarks: [''],
            clearedIn: [''],
            id: [''],
            m1ObtainedMarks: [''],
            m2ObtainedMarks: [''],
            resultGrade: [''],
            resultSubGrade: [''],
            serviceId: [''],
            status: [''],
            subjectCategory: [''],
            subjectId: [''],
            subjectName: [''],
            subjectType: [''],
            termId: [''],
            totalMarks: [''],
        });
    };
    PptComponent.prototype.getAllSubjects = function (index) {
        return this.getAllCadetRecords.at(index).get('edossierPtResult').get('edossierPtSubjectResult');
    };
    PptComponent.prototype.addSubject = function (i) {
        this.getAllSubjects(i).push(this.getASubject());
    };
    PptComponent.prototype.getBattalionList = function () {
        var _this = this;
        this.sharedService.getBattalionList().subscribe(function (res) {
            _this.spinner.show();
            if (res.status == 'OK') {
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
    PptComponent.prototype.getCadetsList = function () {
        var _this = this;
        this.showSpinner = true;
        this.statusMsg = '';
        this.cadetList = [];
        this.spinner.show();
        this.service.getCadetsListForPTMarks(this.termId, this.subject, this.battalion, this.company, this.serviceId).subscribe(function (res) {
            console.log(res);
            // let i = 0; //was using this for formarray
            if (res.status == "OK") {
                if (res.object) {
                    res.object.edossierPtResultFilterPayload.forEach(function (el) {
                        // this.addCadetRecord(); //was using this for formarray
                        var _2400m = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                            if (sub.subjectName.trim().replace(" ", "") === "2.4KM") {
                                Object.assign(sub, _this.getSubjectRecord(sub, _this._2400m_mm));
                                delete sub.createdAt;
                                delete sub.updatedAt;
                                return sub;
                            }
                        });
                        var cup = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                            if (sub.subjectName === "C/UP") {
                                Object.assign(sub, _this.getSubjectRecord(sub, _this.cup_mm));
                                delete sub.createdAt;
                                delete sub.updatedAt;
                                return sub;
                            }
                        });
                        var toeTouch = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                            if (sub.subjectName === "TOE TOUCH") {
                                Object.assign(sub, _this.getSubjectRecord(sub, _this.toeTouch_mm));
                                delete sub.createdAt;
                                delete sub.updatedAt;
                                return sub;
                            }
                        });
                        var _5mtr = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                            if (sub.subjectName === "5/MTR") {
                                Object.assign(sub, _this.getSubjectRecord(sub, _this._5mtr_mm));
                                delete sub.createdAt;
                                delete sub.updatedAt;
                                return sub;
                            }
                        });
                        var _100mtr = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                            if (sub.subjectName === "100 MTR") {
                                Object.assign(sub, _this.getSubjectRecord(sub, _this._100mtr_mm));
                                delete sub.createdAt;
                                delete sub.updatedAt;
                                return sub;
                            }
                        });
                        var sitUp = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                            if (sub.subjectName === "SIT/UP") {
                                Object.assign(sub, _this.getSubjectRecord(sub, _this.sitUp_mm));
                                delete sub.createdAt;
                                delete sub.updatedAt;
                                return sub;
                            }
                        });
                        var _4mtrClimg = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                            if (sub.subjectName === "2nd CL Rope (4 Mtr Climb)") {
                                Object.assign(sub, _this.getSubjectRecord(sub, _this._4mtrClimg_mm));
                                delete sub.createdAt;
                                delete sub.updatedAt;
                                return sub;
                            }
                        });
                        var subjArr = [_2400m, cup, toeTouch, _5mtr, _100mtr, sitUp];
                        if (_this.termId == 3) {
                            subjArr.push(_4mtrClimg);
                        }
                        var ptTotal = 0;
                        subjArr.forEach(function (el) {
                            // console.log(el);
                            var currentMarks = 0;
                            if (el.lastAttemptType == 'M1') {
                                if (el.m1ObtainedMarks)
                                    currentMarks = parseInt(el.m1ObtainedMarks);
                                else
                                    currentMarks = 0;
                            }
                            else if (el.lastAttemptType == 'M2') {
                                if (el.m2ObtainedMarks)
                                    currentMarks = parseInt(el.m2ObtainedMarks);
                                else
                                    currentMarks = 0;
                            }
                            else if (el.lastAttemptType == 'C1') {
                                if (el.c1ObtainedMarks)
                                    currentMarks = parseInt(el.c1ObtainedMarks);
                                else
                                    currentMarks = 0;
                            }
                            else if (el.lastAttemptType == 'C2') {
                                if (el.c2ObtainedMarks)
                                    currentMarks = parseInt(el.c2ObtainedMarks);
                                else
                                    currentMarks = 0;
                            }
                            else {
                                currentMarks = 0;
                            }
                            ptTotal = ptTotal + currentMarks;
                        });
                        // subjArr.forEach(
                        //   el => {
                        //     this.addSubject(i)
                        //   }
                        // )   //was using this for formarray
                        var cadetRecord = {
                            id: el.id,
                            serviceId: el.serviceId,
                            name: el.name,
                            battalian: el.battalian,
                            company: el.company,
                            rank: el.rank,
                            termId: el.termId,
                            termName: el.termName,
                            course: el.course,
                            courseSerNo: el.courseSerNo,
                            nationality: el.nationality,
                            edossierPtResult: {
                                clearedIn: el.edossierPtResult.clearedIn,
                                edossierPtSubjectResult: subjArr,
                                id: el.edossierPtResult.id,
                                obtainedMarks: ptTotal,
                                remarks: el.edossierPtResult.remarks,
                                serviceId: el.edossierPtResult.serviceId,
                                status: el.edossierPtResult.status,
                                subjectType: 'PPT',
                                termId: _this.termId,
                                totalMarks: _this.totalMM,
                                //
                                ptTotalMarks: ptTotal
                            }
                        };
                        _this.cadetList.push(cadetRecord);
                        // i++; //was using this for formarray
                    });
                    _this.spinner.hide();
                    _this.showSpinner = false;
                }
                else {
                    _this.spinner.hide();
                    _this.showSpinner = false;
                    _this.statusMsg = res.message;
                    _this.sharedService.openSnackbar(res.message);
                }
            }
            // this.pptForm.patchValue({
            //   cadetRecords: this.cadetList
            // })     //was using this for formarray
            // console.log('Cadets list: ',this.cadetList);
        }, function (error) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar('Error Occured.');
        });
        console.log(this.cadetList);
    };
    PptComponent.prototype.getFinalSubmissionDates = function (termId) {
        var _this = this;
        this.delayDashboardService.getStaffList(1, termId).subscribe(function (res) {
            console.log(res);
            var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(res.object);
            var findOfficer = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["find"])(function (obj) { return obj.loginId === parseInt(_this.userDetails.loginId); }));
            var subscribeOfficerRecord = findOfficer.subscribe(function (val) {
                if (val) {
                    console.log("USER RESPONSE: ", val);
                    if (val.finalSubmissionDate) {
                        _this.finalSubmissionDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(val.finalSubmissionDate, 'yyyy-MM-dd', _this.localID);
                        var todayDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'yyyy-MM-dd', _this.localID);
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
    PptComponent.prototype.getSubjectRecord = function (sub, maxMarks) {
        var subject = {
            c1ObtainedMarks: sub.c1ObtainedMarks,
            c2ObtainedMarks: sub.c2ObtainedMarks,
            clearedIn: sub.clearedIn,
            id: sub.id,
            lastAttemptType: sub.lastAttemptType,
            m1ObtainedMarks: sub.m1ObtainedMarks,
            m2ObtainedMarks: sub.m2ObtainedMarks,
            maxMarks: maxMarks,
            resultGrade: sub.resultGrade,
            resultSubGrade: sub.resultSubGrade,
            serviceId: sub.serviceId,
            status: sub.status,
            subjectCategory: sub.subjectCategory,
            subjectId: sub.subjectId,
            subjectName: sub.subjectName,
            subjectType: 'PPT',
            termId: sub.termId,
            totalMarks: maxMarks,
        };
        return subject;
    };
    PptComponent.prototype.onlyNum = function (event) {
        var pattern = /^[0-9]*$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    PptComponent.prototype.patchNumbers = function (event, obj, i, j, type) {
        var value = event.target.value;
        if (value > obj.maxMarks || value < 0) {
            this.sharedService.openErrorSnackbarWithSeconds("Please Enter Correct Marks. Neither Marks Should be Greater than Subject's Maximum Marks Nor Negative(-).", 10);
            event.target.value = '';
            obj.resultGrade = '';
            if (type == 'M1') {
                obj.m1ObtainedMarks = '';
            }
            else if (type == 'M2') {
                obj.m2ObtainedMarks = '';
            }
            else if (type == 'C1') {
                obj.c1ObtainedMarks = '';
            }
            else if (type == 'C2') {
                obj.c2ObtainedMarks = '';
            }
            event.preventDefault();
            return false;
        }
        else {
            if (value) {
                if (this.termId != 3) {
                    if (obj.subjectName == '2.4KM' || obj.subjectName == 'C/UP' || obj.subjectName == 'TOE TOUCH') {
                        if (value >= 9) {
                            if (value == 20) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 19) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value >= 17 && value <= 18) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value < 17 && value >= 15) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value < 15 && value >= 12) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value < 12 && value >= 9) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Fail/NA';
                        }
                    }
                    else if (obj.subjectName == '5/MTR' || obj.subjectName == 'SIT/UP') {
                        if (value >= 6) {
                            if (value == 15) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 14) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value == 13) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value == 12) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value < 12 && value >= 9) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value < 9 && value >= 6) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Fail/NA';
                        }
                    }
                    else if (obj.subjectName == '100 MTR') {
                        if (value >= 5) {
                            if (value == 10) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 9) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value == 8) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value == 7) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value == 6) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value == 5) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Fail/NA';
                        }
                    }
                }
                else if (this.termId == 3) {
                    if (obj.subjectName == '2.4KM' || obj.subjectName == 'C/UP' || obj.subjectName == 'TOE TOUCH') {
                        if (value >= 4) {
                            if (value == 12) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 11) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value == 10) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value < 10 && value >= 8) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value < 8 && value >= 6) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value < 6 && value >= 4) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Fail/NA';
                        }
                    }
                    else if (obj.subjectName == '5/MTR') {
                        if (value >= 4) {
                            if (value == 11) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 10) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value == 9) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value == 8) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value < 8 && value >= 6) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value < 6 && value >= 4) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Fail/NA';
                        }
                    }
                    if (obj.subjectName == 'SIT/UP' || obj.subjectName == '100 MTR') {
                        if (value >= 4) {
                            if (value == 9) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 8) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value == 7) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value == 6) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value == 5) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value == 4) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Fail/NA';
                        }
                    }
                    if (obj.subjectName == '2nd CL Rope (4 Mtr Climb)') {
                        if (value == 10) {
                            obj.resultGrade = 'Pass';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Fail/NA';
                        }
                    }
                }
                this.calculateMarks(i);
            }
            else {
                this.cadetList[i].edossierPtResult.edossierPtSubjectResult[j].resultGrade = '';
                this.calculateMarks(i);
            }
        }
    };
    PptComponent.prototype.calculateMarks = function (i) {
        var ptTotal = 0;
        this.cadetList[i].edossierPtResult.edossierPtSubjectResult.forEach(function (el) {
            var currentMarks = 0;
            if (el.lastAttemptType == 'M1') {
                if (el.m1ObtainedMarks)
                    currentMarks = parseInt(el.m1ObtainedMarks);
                else
                    currentMarks = 0;
            }
            else if (el.lastAttemptType == 'M2') {
                if (el.m2ObtainedMarks)
                    currentMarks = parseInt(el.m2ObtainedMarks);
                else
                    currentMarks = 0;
            }
            else if (el.lastAttemptType == 'C1') {
                if (el.c1ObtainedMarks)
                    currentMarks = parseInt(el.c1ObtainedMarks);
                else
                    currentMarks = 0;
            }
            else if (el.lastAttemptType == 'C2') {
                if (el.c2ObtainedMarks)
                    currentMarks = parseInt(el.c2ObtainedMarks);
                else
                    currentMarks = 0;
            }
            else {
                currentMarks = 0;
            }
            ptTotal = ptTotal + currentMarks;
        });
        // return ptTotal;
        this.cadetList[i].edossierPtResult.ptTotalMarks = ptTotal;
        this.cadetList[i].edossierPtResult.obtainedMarks = ptTotal;
    };
    PptComponent.prototype.submitResult = function () {
        var _this = this;
        console.log(this.cadetList);
        this.spinner.show();
        this.service.savePTResults(this.cadetList).subscribe(function (res) {
            if (res.status == "OK") {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
            }
            // console.log(res);
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar("Some Error Occured!");
        });
    };
    PptComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_10__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
        { type: app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_12__["DelayDashboardService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
    ]; };
    PptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-ppt',
            template: _raw_loader_ppt_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ppt_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_10__["AdminService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_12__["DelayDashboardService"], String])
    ], PptComponent);
    return PptComponent;
}());



/***/ }),

/***/ "I2Qv":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/General-Instruction/curricular-activities/ppt/ppt.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> PPT </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addDay()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"createdAt\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n             <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                </ng-container>\r\n              \r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \r\n                        <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\" >\r\n                            <mat-icon>description</mat-icon>\r\n                        </a>    \r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeGCStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewGC(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n  \r\n</mat-card>\r\n");

/***/ }),

/***/ "i2sT":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/General-Instruction/curricular-activities/ppt/ppt.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PptComponent", function() { return PptComponent; });
/* harmony import */ var _raw_loader_ppt_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ppt.component.html */ "I2Qv");
/* harmony import */ var _ppt_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ppt.component.scss */ "vY7P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PptComponent = /** @class */ (function () {
    function PptComponent(router, adminservice, spinner, cdref, dialog, sharedService) {
        this.router = router;
        this.adminservice = adminservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.displayedColumns = ['number', 'name', 'createdAt', 'document', 'status', 'action'];
        this.PCHT = [];
    }
    PptComponent.prototype.ngOnInit = function () {
    };
    PptComponent.prototype.ngAfterViewInit = function () {
        this.getAchievements('GENERAL', 'CURRICULAR', 'PPT');
    };
    PptComponent.prototype.getAchievements = function (GENERAL, CURRICULAR, PPT) {
        var _this = this;
        this.spinner.show();
        this.adminservice.getSOPs(GENERAL, CURRICULAR, PPT, 2).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.PCHT = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
                console.log(res, "=================");
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.adminservice.openSnackbar("Some Error Occured.");
        });
    };
    PptComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.PCHT.slice();
        if (!sort.active || sort.direction === '') {
            this.PCHT = datalist;
            return;
        }
        this.PCHT = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'description': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.PCHT);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    PptComponent.prototype.addDay = function () {
        this.router.navigate(['main/academic-depart/general/curricular/ppt/add-ppt']);
    };
    PptComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    PptComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    PptComponent.prototype.viewGC = function (element) {
        this.router.navigate(['main/academic-depart/general/curricular/ppt/view-ppt'], { queryParams: { id: element.id } });
    };
    PptComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "View Document", url: e.document
            }
        });
    };
    PptComponent.prototype.changeGCStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.adminservice.updateClubsStatus(d.id, 1).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    // this.ngAfterViewInit();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this.adminservice.updateClubsStatus(d.id, 0).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    // this.ngAfterViewInit();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    PptComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
    ]; };
    PptComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }]
    };
    PptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-ppt',
            template: _raw_loader_ppt_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ppt_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], PptComponent);
    return PptComponent;
}());



/***/ }),

/***/ "kquw":
/*!****************************************************!*\
  !*** ./src/app/main/trg-team/pt/ppt/ppt.module.ts ***!
  \****************************************************/
/*! exports provided: PptModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PptModule", function() { return PptModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ppt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ppt.component */ "H5UD");
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
        component: _ppt_component__WEBPACK_IMPORTED_MODULE_4__["PptComponent"]
    }
];
var PptModule = /** @class */ (function () {
    function PptModule() {
    }
    PptModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _ppt_component__WEBPACK_IMPORTED_MODULE_4__["PptComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], PptModule);
    return PptModule;
}());



/***/ }),

/***/ "lya2":
/*!*********************************************************!*\
  !*** ./src/app/main/trg-team/pt/ppt/ppt.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 !important;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n  margin-bottom: 10px !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n  overflow-x: scroll;\n  display: block;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle !important;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: normal;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.t-name {\n  width: 200px !important;\n  max-width: 100% !important;\n}");

/***/ }),

/***/ "q8O+":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/General-Instruction/curricular-activities/ppt/ppt.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: PptModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PptModule", function() { return PptModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ppt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ppt.component */ "i2sT");
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
        component: _ppt_component__WEBPACK_IMPORTED_MODULE_4__["PptComponent"]
    },
    {
        path: 'add-ppt',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-ppt-add-ppt-module */ "add-ppt-add-ppt-module").then(__webpack_require__.bind(null, /*! ./add-ppt/add-ppt.module */ "Vrc/")).then(function (m) { return m.AddPPTModule; }); }
    },
    {
        path: 'view-ppt',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-ppt-add-ppt-module */ "add-ppt-add-ppt-module").then(__webpack_require__.bind(null, /*! ./add-ppt/add-ppt.module */ "Vrc/")).then(function (m) { return m.AddPPTModule; }); }
    }
];
var PptModule = /** @class */ (function () {
    function PptModule() {
    }
    PptModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _ppt_component__WEBPACK_IMPORTED_MODULE_4__["PptComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], PptModule);
    return PptModule;
}());



/***/ }),

/***/ "vY7P":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/General-Instruction/curricular-activities/ppt/ppt.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);