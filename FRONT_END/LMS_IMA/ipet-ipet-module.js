(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ipet-ipet-module"],{

/***/ "EZWW":
/*!***********************************************************!*\
  !*** ./src/app/main/trg-team/pt/ipet/ipet.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 !important;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n  margin-bottom: 10px !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n  overflow-x: scroll;\n  display: block;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle !important;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: normal;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}");

/***/ }),

/***/ "Wpj1":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/pt/ipet/ipet.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">PT <span class=\"sub-menu1\"> > {{term}} > {{subject}} </span>\r\n    <div class=\"pull-right\" *ngIf=\"finalSubmissionDate\"> Last Date for Marks Submission : {{finalSubmissionDate | date:'dd MMM yyyy'}} </div>\r\n    \r\n    </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <!-- <form class=\"ng-untouched ng-pristine ng-invalid\"> -->\r\n        <div class=\"row\">\r\n\r\n            <div class=\"form-group col-md-4\">\r\n                <label for=\"battalion\">Battalion</label>\r\n                <select id=\"battalion\" (change)=\"battalionSelected($event.target.value)\" class=\"form-control\"\r\n                  [(ngModel)]=\"battalionId\"  >\r\n                    <option value=\"\" selected hidden disabled>Select</option>\r\n                    <option *ngFor=\"let b of battalionList\" [value]=\"b.id\"> {{b.shortName}} Bn</option>\r\n                </select>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4\">\r\n                <label for=\"company\">Company</label>\r\n                <select id=\"company\" class=\"form-control\" (change)=\"companySelected($event.target.value)\"\r\n                [(ngModel)]=\"companyId\" >\r\n                    <option value=\"\" selected hidden disabled>Select</option>\r\n                    <option *ngFor=\"let c of companyList\" [value]=\"c.id\"> {{c?.name || ''}}</option>\r\n                </select>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"rank\">Search</label>\r\n                    <input placeholder=\"IMA Number/Service Id\" formcontrolname=\"\" type=\"text\" [(ngModel)]=\"serviceId\"\r\n                        class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"rank\">Attempt Type</label>\r\n                    <select id=\"company\" class=\"form-control\">\r\n                        <option *ngFor=\"let att of attemtTypes\" [value]=\"at\"> {{att}}</option>\r\n                    </select>\r\n                </div>\r\n            </div> -->\r\n\r\n\r\n\r\n        </div>\r\n       \r\n         <div style=\"float: right;\" >\r\n            <button mat-raised-button (click)=\"search()\" >Submit</button>\r\n            <button mat-raised-button (click)=\"clearSearch()\" >Clear</button>\r\n        </div>\r\n    <!-- </form> -->\r\n\r\n</mat-card>\r\n<mat-card class=\"ppt-table\">\r\n\r\n\r\n    <div class=\"list-spinner text-center\" *ngIf=\"!cadetList.length && showSpinner\">\r\n        <div class=\"spinner-border \" role=\"status\"    >\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div>\r\n    <div  *ngIf=\"!cadetList.length && !showSpinner\" class=\"text-center\" >\r\n        <h5> {{statusMsg}}</h5> \r\n    </div>\r\n  \r\n\r\n\r\n    <table class=\"tg\" *ngIf=\"cadetList.length\" >\r\n        <thead class=\"table-head\">\r\n            <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Rank</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Course</th>\r\n\r\n                <th class=\"tg-qnnc\" colspan=\"3\">3<sup>rd</sup> CL ROPE(3 MTR CLIMB) (MM-{{_3rdClRope_mm}}) </th>\r\n                <th class=\"tg-qnnc\" colspan=\"3\" *ngIf=\"termId != 2\" >BACK ROLL (MM-{{backRoll_mm}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"3\" *ngIf=\"termId == 2\" >BEAM (4 REP) (MM-{{beam4Rep_mm}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"3\" *ngIf=\"termId != 2\">DIVE ROLL (MM-{{diveRoll_mm}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"3\" *ngIf=\"termId != 2\">BEAM (2 REP) (MM-{{beam2Rep_mm}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"3\">A/VAULT (III CL) (MM-{{aVaultIIIcl_mm}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"3\" *ngIf=\"termId != 2\">CW/F/ROLL (MM-{{cwfRoll_mm}})</th>\r\n\r\n                <th class=\"tg-qnnc\" colspan=\"3\" *ngIf=\"termId == 2\" >II CL ROPE (MM-{{IIndClRope_mm}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"3\" *ngIf=\"termId == 2\" >T/VAULT (III CL) (MM-{{tVaultIIIcl_mm}})</th>\r\n\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Total (MM-{{totalMM}})</th>\r\n\r\n            </tr>\r\n\r\n            <tr>\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <th>Grade</th>\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <th>Grade</th>\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <th>Grade</th>\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <th>Grade</th>\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <th>Grade</th>\r\n\r\n                <ng-container *ngIf=\"termId != 2\" >\r\n                    <th>Attempt Type</th>\r\n                    <th>Obtained Marks</th>\r\n                    <th>Grade</th>\r\n                </ng-container>\r\n                \r\n            </tr>\r\n\r\n        </thead>\r\n\r\n        <tbody *ngIf=\"cadetList.length\">\r\n            <tr *ngFor=\"let cadet of cadetList;let i=index\">\r\n                <td> {{i+1}} </td>\r\n                <td> {{cadet.serviceId}} </td>\r\n                <td>\r\n                    <span *ngIf=\"cadet.nationality == 'India'\">GC</span>\r\n                    <span *ngIf=\"cadet.nationality != 'India'\">FGC</span>\r\n                </td>\r\n                <td class=\"name-coloumn\"> {{cadet.name}} </td>\r\n                <td> {{cadet.course}} </td>\r\n\r\n                <ng-container *ngFor=\"let sub of cadet.edossierPtResult.edossierPtSubjectResult;let j=index\">\r\n                    <td>\r\n                        <span *ngIf=\"!hasAccess\"> {{sub.lastAttemptType}} </span>\r\n                        <select *ngIf=\"hasAccess\" id=\"company\" class=\"form-control\" [(ngModel)]=\"sub.lastAttemptType\">\r\n                            <option value=\"\" selected hidden disabled>--</option>\r\n                            <!-- <option *ngFor=\"let att of attemtTypes\" [value]=\"att\"> {{att}}</option> -->\r\n                            <option value=\"M1\">M1</option>\r\n                            <!-- <option [disabled]=\"!sub.m1ObtainedMarks\" value=\"M2\">M2</option>\r\n                            <option [disabled]=\"!sub.m2ObtainedMarks\" value=\"C1\">C1</option>\r\n                            <option [disabled]=\"!sub.c1ObtainedMarks\" value=\"C2\">C2</option> -->\r\n                            <option value=\"M2\">M2</option>\r\n                            <option value=\"C1\">C1</option>\r\n                            <option value=\"C2\">C2</option>\r\n                        </select>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"sub.lastAttemptType == 'M1' && !hasAccess \"> {{sub.m1ObtainedMarks}} </span>\r\n                        <span *ngIf=\"sub.lastAttemptType == 'M2' && !hasAccess \"> {{sub.m2ObtainedMarks}} </span>\r\n                        <span *ngIf=\"sub.lastAttemptType == 'C1' && !hasAccess \"> {{sub.c1ObtainedMarks}} </span>\r\n                        <span *ngIf=\"sub.lastAttemptType == 'C2' && !hasAccess \"> {{sub.c2ObtainedMarks}} </span>\r\n\r\n                        <input *ngIf=\"sub.lastAttemptType == 'M1' && hasAccess \" (keypress)=\"onlyNum($event)\"\r\n                            (focusout)=\"patchNumbers($event,sub,i,j,'M1')\" maxlength=\"2\" name=\"\" id=\"\"\r\n                            class=\"form-control\" [(ngModel)]=\"sub.m1ObtainedMarks\">\r\n                        <input *ngIf=\"sub.lastAttemptType == 'M2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                            (focusout)=\"patchNumbers($event,sub,i,j,'M2')\" maxlength=\"2\" name=\"\" id=\"\"\r\n                            class=\"form-control\" [(ngModel)]=\"sub.m2ObtainedMarks\">\r\n                        <input *ngIf=\"sub.lastAttemptType == 'C1' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                            (focusout)=\"patchNumbers($event,sub,i,j,'C1')\" maxlength=\"2\" name=\"\" id=\"\"\r\n                            class=\"form-control\" [(ngModel)]=\"sub.c1ObtainedMarks\">\r\n                        <input *ngIf=\"sub.lastAttemptType == 'C2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                            (focusout)=\"patchNumbers($event,sub,i,j,'C2')\" maxlength=\"2\" name=\"\" id=\"\"\r\n                            class=\"form-control\" [(ngModel)]=\"sub.c2ObtainedMarks\">\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"sub.resultGrade\">\r\n                            {{sub.resultGrade}}\r\n                        </span>\r\n                    </td>\r\n\r\n                </ng-container>\r\n\r\n                <td>\r\n                    <span *ngIf=\"cadet.edossierPtResult.ptTotalMarks\">\r\n                        {{cadet.edossierPtResult.ptTotalMarks}}\r\n                    </span>\r\n                </td>\r\n\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n\r\n    <!-- <div class=\"\">\r\n        <mat-paginator #myPaginator [length]=\"resultsLength\" [pageSizeOptions]=\"[25]\" showFirstLastButtons>\r\n        </mat-paginator>\r\n    </div> -->\r\n     \r\n    <br>\r\n    <div *ngIf=\"hasAccess\" class=\"mb-4 pull-right\">\r\n        <button mat-raised-button (click)=\"submitResult()\" [disabled]=\"!cadetList.length\" >\r\n            Submit\r\n        </button>\r\n    </div>\r\n\r\n    \r\n</mat-card>");

/***/ }),

/***/ "lHVs":
/*!*********************************************************!*\
  !*** ./src/app/main/trg-team/pt/ipet/ipet.component.ts ***!
  \*********************************************************/
/*! exports provided: IpetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpetComponent", function() { return IpetComponent; });
/* harmony import */ var _raw_loader_ipet_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ipet.component.html */ "Wpj1");
/* harmony import */ var _ipet_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ipet.component.scss */ "EZWW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/delay-dashboard/delay-dashboard.service */ "GvGC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var IpetComponent = /** @class */ (function () {
    function IpetComponent(router, route, service, spinner, cdref, adminService, sharedService, delayDashboardService, localID) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.service = service;
        this.spinner = spinner;
        this.cdref = cdref;
        this.adminService = adminService;
        this.sharedService = sharedService;
        this.delayDashboardService = delayDashboardService;
        this.attemtTypes = ['M1', 'M2', 'C1', 'C2'];
        this.subject = 'IPET';
        this.cadetList = [];
        this.battalionList = [];
        this.companyList = [];
        this.battalionId = '';
        this.companyId = '';
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
            else if (_this.term == 'II Tech') {
                _this.termId = 7;
                _this.setAllMaxMarks();
                _this.setTotalMarks();
            }
            else {
                _this.sharedService.openSnackbar('Error');
                _this.router.navigate(['/main/trg-team/dashboard']);
            }
            _this.getCadetsList();
            _this.getFinalSubmissionDates(_this.termId);
        });
        this.localID = localID;
    }
    IpetComponent.prototype.ngOnInit = function () {
        this.getBattalionList();
    };
    IpetComponent.prototype.setAllMaxMarks = function () {
        if (this.termId == 1 || this.termId == 7) {
            this._3rdClRope_mm = 10;
            this.backRoll_mm = 5;
            this.diveRoll_mm = 5;
            this.beam2Rep_mm = 10;
            this.aVaultIIIcl_mm = 10;
            this.cwfRoll_mm = 10;
        }
        else if (this.termId == 2) {
            this._3rdClRope_mm = 10;
            this.beam4Rep_mm = 10;
            this.IIndClRope_mm = 10;
            this.tVaultIIIcl_mm = 10;
            this.aVaultIIIcl_mm = 10;
        }
    };
    IpetComponent.prototype.setTotalMarks = function () {
        if (this.termId == 1 || this.termId == 7) {
            this.totalMM = this._3rdClRope_mm + this.backRoll_mm + this.diveRoll_mm + this.beam2Rep_mm + this.aVaultIIIcl_mm + this.cwfRoll_mm;
        }
        else if (this.termId == 2) {
            this.totalMM = this._3rdClRope_mm + this.beam4Rep_mm + this.IIndClRope_mm + this.tVaultIIIcl_mm + this.aVaultIIIcl_mm;
        }
    };
    IpetComponent.prototype.getBattalionList = function () {
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
    IpetComponent.prototype.battalionSelected = function (e) {
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
    IpetComponent.prototype.companySelected = function (e) {
        var _this = this;
        this.companyList.find(function (el) {
            if (el.id == e) {
                _this.company = el.name;
                // return;
            }
        });
        console.log(this.company);
    };
    IpetComponent.prototype.search = function () {
        if (this.battalion || this.company || this.serviceId) {
            this.getCadetsList();
        }
        else {
            this.sharedService.openAlertSnackbarWithSeconds("No Search Filters are Added.", 7);
        }
    };
    IpetComponent.prototype.clearSearch = function () {
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
    IpetComponent.prototype.getCadetsList = function () {
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
                        var subjArr = [];
                        if (_this.termId != 2) {
                            var _3rdClRope = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                                if (sub.subjectName === "3rd CL ROPE(3 MTR CLIMB)") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this._3rdClRope_mm, 4));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var backRoll = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                                if (sub.subjectName === "BACK ROLL") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.backRoll_mm, 2));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var diveRoll = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                                if (sub.subjectName === "DIVE ROLL") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.diveRoll_mm, 4));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var beam2Repr = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                                if (sub.subjectName === "BEAM (2 REP)") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.beam2Rep_mm, 4));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var aVault = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                                if (sub.subjectName === "A/VAULT (III CL)") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.aVaultIIIcl_mm, 4));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var cwfRoll = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                                if (sub.subjectName === "CW/F/ROLL") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.cwfRoll_mm, 4));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            subjArr = [_3rdClRope, backRoll, diveRoll, beam2Repr, aVault, cwfRoll];
                        }
                        else if (_this.termId == 2) {
                            var _3rdClRope = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                                if (sub.subjectName === "III CL ROPE") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this._3rdClRope_mm, 4));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var beam4Rep = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                                if (sub.subjectName === "BEAM(4 REP)") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.beam4Rep_mm, 4));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var aVault = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                                if (sub.subjectName === "A/VAULT (III CL)") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.aVaultIIIcl_mm, 4));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var IIndClRope = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                                if (sub.subjectName === "II CL ROPE") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.IIndClRope_mm, 4));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var tVaultIIIcl = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                                if (sub.subjectName === "T/VAULT (III CL)") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.tVaultIIIcl_mm, 4));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            subjArr = [_3rdClRope, beam4Rep, aVault, IIndClRope, tVaultIIIcl];
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
                                subjectType: 'IPET',
                                termId: el.edossierPtResult.termId,
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
                    _this.sharedService.openSnackbar(res.message);
                    _this.statusMsg = res.message;
                }
            }
        }, function (error) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar('No Records Available.');
        });
    };
    IpetComponent.prototype.getFinalSubmissionDates = function (termId) {
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
    IpetComponent.prototype.getSubjectRecord = function (sub, maxMarks, passingMarks) {
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
            subjectType: 'IPET',
            termId: sub.termId,
            totalMarks: maxMarks,
            passingMarks: passingMarks
        };
        return subject;
    };
    IpetComponent.prototype.onlyNum = function (event) {
        var pattern = /^[0-9]*$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    IpetComponent.prototype.patchNumbers = function (event, obj, i, j, type) {
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
                // if(type == 'M1'){
                //   obj.m1ObtainedMarks = value;
                // } else if(type == 'M2'){
                //    obj.m2ObtainedMarks = value;
                // } else if(type == 'C1'){
                //   obj.c1ObtainedMarks = value;
                // } else if(type == 'C2'){
                //   obj.c2ObtainedMarks = value;
                // }
                if (value >= obj.passingMarks) {
                    obj.resultGrade = 'Pass';
                    obj.clearedIn = type;
                }
                else {
                    obj.resultGrade = 'Fail';
                }
                this.calculateMarks(i);
            }
            else {
                this.cadetList[i].edossierPtResult.edossierPtSubjectResult[j].resultGrade = '';
                this.calculateMarks(i);
            }
        }
    };
    IpetComponent.prototype.calculateMarks = function (i) {
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
        this.cadetList[i].edossierPtResult.ptTotalMarks = ptTotal;
        this.cadetList[i].edossierPtResult.obtainedMarks = ptTotal;
    };
    IpetComponent.prototype.submitResult = function () {
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
    IpetComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
        { type: app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_11__["DelayDashboardService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
    ]; };
    IpetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-ipet',
            template: _raw_loader_ipet_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ipet_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_11__["DelayDashboardService"], String])
    ], IpetComponent);
    return IpetComponent;
}());



/***/ }),

/***/ "vgXX":
/*!******************************************************!*\
  !*** ./src/app/main/trg-team/pt/ipet/ipet.module.ts ***!
  \******************************************************/
/*! exports provided: IpetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpetModule", function() { return IpetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ipet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ipet.component */ "lHVs");
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
        component: _ipet_component__WEBPACK_IMPORTED_MODULE_4__["IpetComponent"]
    }
];
var IpetModule = /** @class */ (function () {
    function IpetModule() {
    }
    IpetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _ipet_component__WEBPACK_IMPORTED_MODULE_4__["IpetComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
                // MatCardModule, MatProgressBarModule, MatMenuModule, ChartsModule,/* NgxChartsModule */
                // MatIconModule, MatRadioModule, /* NgxChartsModule, */
                // MatButtonModule, MatDividerModule, MatChipsModule, MatListModule, 
                // SharedPipesModule,
                // MatFormFieldModule, FlexLayoutModule,
                // MatInputModule, MatTabsModule,
                // MatRippleModule, MatSelectModule, MatTableModule, MatTooltipModule, MatPaginatorModule, MatDatepickerModule
            ]
        })
    ], IpetModule);
    return IpetModule;
}());



/***/ })

}]);