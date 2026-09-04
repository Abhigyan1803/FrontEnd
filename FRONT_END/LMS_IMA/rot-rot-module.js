(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rot-rot-module"],{

/***/ "BUAE":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/pt/rot/rot.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\n    <h4 class=\"card-heading\">PT <span class=\"sub-menu1\"> > {{term}} > {{subject}} </span> \n        <div class=\"pull-right\" *ngIf=\"finalSubmissionDate\"> Last Date for Marks Submission : {{finalSubmissionDate | date:'dd MMM yyyy'}} </div>\n    \n    </h4>\n</div>\n\n<mat-card>\n    \n        <div class=\"row\">\n\n            \n            <div class=\"form-group col-md-4\">\n                <label for=\"battalion\">Battalion</label>\n                <select id=\"battalion\" (change)=\"battalionSelected($event.target.value)\" class=\"form-control\"\n                  [(ngModel)]=\"battalionId\"  >\n                    <option value=\"\" selected hidden disabled>Select</option>\n                    <option *ngFor=\"let b of battalionList\" [value]=\"b.id\"> {{b.shortName}} Bn</option>\n                </select>\n\n            </div>\n\n            <div class=\"form-group col-md-4\">\n                <label for=\"company\">Company</label>\n                <select id=\"company\" class=\"form-control\" (change)=\"companySelected($event.target.value)\"\n                [(ngModel)]=\"companyId\" >\n                    <option value=\"\" selected hidden disabled>Select</option>\n                    <option *ngFor=\"let c of companyList\" [value]=\"c.id\"> {{c?.name || ''}}</option>\n                </select>\n\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"rank\">Search</label>\n                    <input placeholder=\"IMA Number/Service Id\"  type=\"text\" [(ngModel)]=\"serviceId\"\n                        class=\"form-control ng-untouched ng-pristine ng-invalid\">\n                </div>\n            </div>\n\n            <!-- <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                    <label for=\"rank\">Attempt Type</label>\n                    <select id=\"company\" class=\"form-control\">\n                        <option *ngFor=\"let att of attemtTypes\" [value]=\"at\"> {{att}}</option>\n                    </select>\n                </div>\n            </div> -->\n\n\n\n        </div>\n       \n         <div style=\"float: right;\" >\n            <button mat-raised-button (click)=\"search()\" >Submit</button>\n            <button mat-raised-button (click)=\"clearSearch()\" >Clear</button>\n        </div>\n\n</mat-card>\n<mat-card class=\"ppt-table\">\n    \n    <div class=\"text-center\" *ngIf=\"!cadetList.length && showSpinner\" >\n        <div class=\"spinner-border \" role=\"status\"    >\n            <span class=\"sr-only\">Loading...</span>\n        </div>\n    </div>\n    <div class=\"text-center\" *ngIf=\"!cadetList.length && !showSpinner\" >\n      <h5> {{statusMsg}}</h5> \n    </div>\n\n    <table class=\"tg\" *ngIf=\"cadetList.length\" >\n        <thead class=\"table-head\">\n            <tr>\n                <th class=\"tg-qnnc\" rowspan=\"2\">S. No.</th>\n                <th class=\"tg-qnnc\" rowspan=\"2\">IMA No.</th>\n                <th class=\"tg-qnnc\" rowspan=\"2\">Rank</th>\n                <th class=\"tg-qnnc\" rowspan=\"2\">Name</th>\n                <th class=\"tg-qnnc\" rowspan=\"2\">Course</th>\n\n                <th class=\"tg-qnnc\" colspan=\"3\">ROT (MM-{{maxMarks}}) </th>\n                \n                <th class=\"tg-qnnc\" rowspan=\"2\">Total (MM-{{maxMarks}})</th>\n\n            </tr>\n\n            <tr>\n                <th>Attempt Type</th>\n                <th>Obtained Marks</th>\n                <th>Grade</th>\n            </tr>\n\n        </thead>\n\n        <tbody *ngIf=\"cadetList.length\">\n            <tr *ngFor=\"let cadet of cadetList;let i=index\">\n                <td> {{i+1}} </td>\n                <td> {{cadet.serviceId}} </td>\n                <td>\n                    <span *ngIf=\"cadet.nationality == 'India'\">GC</span>\n                    <span *ngIf=\"cadet.nationality != 'India'\">FGC</span>\n                </td>\n                <td class=\"name-coloumn\"> {{cadet.name}} </td>\n                <td> {{cadet.course}} </td>\n\n                <ng-container *ngFor=\"let sub of cadet.edossierPtResult.edossierPtSubjectResult;let j=index\">\n                    <td>\n                        <span *ngIf=\"!hasAccess\"> {{sub.lastAttemptType}} </span>\n                        <select *ngIf=\"hasAccess\" id=\"company\" class=\"form-control\" [(ngModel)]=\"sub.lastAttemptType\">\n                            <option value=\"\" selected hidden disabled>--</option>\n                            <!-- <option *ngFor=\"let att of attemtTypes\" [value]=\"att\"> {{att}}</option> -->\n                            <option value=\"M1\">M1</option>\n                            <option [disabled]=\"!sub.m1ObtainedMarks\" value=\"M2\">M2</option>\n                            <option [disabled]=\"!sub.m2ObtainedMarks\" value=\"C1\">C1</option>\n                            <option [disabled]=\"!sub.c1ObtainedMarks\" value=\"C2\">C2</option>\n                        </select>\n                    </td>\n                    <td style=\"max-width: 122px;\">\n                        <span *ngIf=\"sub.lastAttemptType == 'M1' && !hasAccess \"> {{sub.m1ObtainedMarks}} </span>\n                        <span *ngIf=\"sub.lastAttemptType == 'M2' && !hasAccess \"> {{sub.m2ObtainedMarks}} </span>\n                        <span *ngIf=\"sub.lastAttemptType == 'C1' && !hasAccess \"> {{sub.c1ObtainedMarks}} </span>\n                        <span *ngIf=\"sub.lastAttemptType == 'C2' && !hasAccess \"> {{sub.c2ObtainedMarks}} </span>\n\n                        <input *ngIf=\"sub.lastAttemptType == 'M1' && hasAccess \" (keypress)=\"onlyNum($event)\"\n                            (focusout)=\"patchNumbers($event,sub,i,j,'M1')\" maxlength=\"2\" name=\"\" id=\"\"\n                            class=\"form-control\" [(ngModel)]=\"sub.m1ObtainedMarks\">\n                        <input *ngIf=\"sub.lastAttemptType == 'M2' && hasAccess\" (keypress)=\"onlyNum($event)\"\n                            (focusout)=\"patchNumbers($event,sub,i,j,'M2')\" maxlength=\"2\" name=\"\" id=\"\"\n                            class=\"form-control\" [(ngModel)]=\"sub.m2ObtainedMarks\">\n                        <input *ngIf=\"sub.lastAttemptType == 'C1' && hasAccess\" (keypress)=\"onlyNum($event)\"\n                            (focusout)=\"patchNumbers($event,sub,i,j,'C1')\" maxlength=\"2\" name=\"\" id=\"\"\n                            class=\"form-control\" [(ngModel)]=\"sub.c1ObtainedMarks\">\n                        <input *ngIf=\"sub.lastAttemptType == 'C2' && hasAccess\" (keypress)=\"onlyNum($event)\"\n                            (focusout)=\"patchNumbers($event,sub,i,j,'C2')\" maxlength=\"2\" name=\"\" id=\"\"\n                            class=\"form-control\" [(ngModel)]=\"sub.c2ObtainedMarks\">\n                    </td>\n                    <td>\n                        <span *ngIf=\"sub.resultGrade\">\n                            {{sub.resultGrade}}\n                        </span>\n                    </td>\n\n                </ng-container>\n\n                <td>\n                    <span *ngIf=\"cadet.edossierPtResult.rotTotal\">\n                        {{cadet.edossierPtResult.rotTotal}}\n                    </span>\n                </td>\n\n            </tr>\n        </tbody>\n    </table>\n\n\n    <!-- <div class=\"\">\n        <mat-paginator #myPaginator [length]=\"resultsLength\" [pageSizeOptions]=\"[25]\" showFirstLastButtons>\n        </mat-paginator>\n    </div> -->\n\n   \n    <br>\n\n<div *ngIf=\"hasAccess\" class=\"mb-4 pull-right\">\n        <button mat-raised-button (click)=\"submitResult()\" [disabled]=\"!cadetList.length\" >\n            Submit\n        </button>\n    </div>\n</mat-card>\n");

/***/ }),

/***/ "Qcwy":
/*!****************************************************!*\
  !*** ./src/app/main/trg-team/pt/rot/rot.module.ts ***!
  \****************************************************/
/*! exports provided: RotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotModule", function() { return RotModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _rot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rot.component */ "wZBc");
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
        component: _rot_component__WEBPACK_IMPORTED_MODULE_4__["RotComponent"]
    }
];
var RotModule = /** @class */ (function () {
    function RotModule() {
    }
    RotModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _rot_component__WEBPACK_IMPORTED_MODULE_4__["RotComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], RotModule);
    return RotModule;
}());



/***/ }),

/***/ "sLrO":
/*!*********************************************************!*\
  !*** ./src/app/main/trg-team/pt/rot/rot.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 !important;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n  margin-bottom: 10px !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle !important;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: normal;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.marks-field {\n  text-align: center;\n}");

/***/ }),

/***/ "wZBc":
/*!*******************************************************!*\
  !*** ./src/app/main/trg-team/pt/rot/rot.component.ts ***!
  \*******************************************************/
/*! exports provided: RotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotComponent", function() { return RotComponent; });
/* harmony import */ var _raw_loader_rot_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./rot.component.html */ "BUAE");
/* harmony import */ var _rot_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rot.component.scss */ "sLrO");
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













var RotComponent = /** @class */ (function () {
    function RotComponent(fb, router, route, service, spinner, cdref, adminService, sharedService, delayDashboardService, localID) {
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
        this.showSpinner = true;
        this.statusMsg = '';
        this.attemtTypes = ['M1', 'M2', 'C1', 'C2'];
        this.subject = 'ROT';
        this.battalionList = [];
        this.companyList = [];
        this.battalionId = '';
        this.companyId = '';
        this.cadetList = [];
        this.maxMarks = 30;
        this.minMarks = 12;
        this.hasAccess = true;
        this.route.params.subscribe(function (res) {
            _this.companyList = [];
            _this.battalion = '';
            _this.company = '';
            _this.serviceId = '';
            _this.battalionId = '';
            _this.companyId = '';
            _this.term = res.term;
            if (_this.term == 'III Term') {
                _this.termId = 3;
                _this.getCadetsList();
                _this.getFinalSubmissionDates(_this.termId);
            }
            else {
                _this.router.navigate(['/main/trg-team/dashboard']);
            }
        });
        this.userDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        this.localID = localID;
    }
    RotComponent.prototype.ngOnInit = function () {
        this.getBattalionList();
    };
    RotComponent.prototype.getBattalionList = function () {
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
    RotComponent.prototype.battalionSelected = function (e) {
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
    RotComponent.prototype.companySelected = function (e) {
        var _this = this;
        this.companyList.find(function (el) {
            if (el.id == e) {
                _this.company = el.name;
                // return;
            }
        });
        console.log(this.company);
    };
    RotComponent.prototype.search = function () {
        if (this.battalion || this.company || this.serviceId) {
            this.getCadetsList();
        }
        else {
            this.sharedService.openAlertSnackbarWithSeconds("No Search Filters are Added.", 7);
        }
    };
    RotComponent.prototype.clearSearch = function () {
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
    RotComponent.prototype.getSubjectRecord = function (sub, maxMarks) {
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
            subjectType: 'ROT',
            termId: sub.termId,
            totalMarks: maxMarks
        };
        return subject;
    };
    RotComponent.prototype.onlyNum = function (event) {
        var pattern = /^[0-9]*$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    RotComponent.prototype.getCadetsList = function () {
        var _this = this;
        this.showSpinner = true;
        this.statusMsg = '';
        this.cadetList = [];
        this.spinner.show();
        this.service.getCadetsListForPTMarks(this.termId, this.subject, this.battalion, this.company, this.serviceId).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                if (res.object) {
                    // let i = 0; //was using this for formarray
                    res.object.edossierPtResultFilterPayload.forEach(function (el) {
                        // this.addCadetRecord(); //was using this for formarray
                        var rot = el.edossierPtResult.edossierPtSubjectResult.find(function (sub) {
                            if (sub.subjectName === "ROT") {
                                Object.assign(sub, _this.getSubjectRecord(sub, _this.maxMarks));
                                delete sub.createdAt;
                                delete sub.updatedAt;
                                return sub;
                            }
                        });
                        var subjArr = [rot];
                        var rotTotal = 0;
                        subjArr.forEach(function (el) {
                            var currentMarks;
                            if (el.lastAttemptType == 'M1') {
                                currentMarks = el.m1ObtainedMarks;
                            }
                            else if (el.lastAttemptType == 'M2') {
                                currentMarks = el.m2ObtainedMarks;
                            }
                            else if (el.lastAttemptType == 'C1') {
                                currentMarks = el.c1ObtainedMarks;
                            }
                            else if (el.lastAttemptType == 'C2') {
                                currentMarks = el.c2ObtainedMarks;
                            }
                            rotTotal = currentMarks;
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
                                obtainedMarks: 0,
                                remarks: el.edossierPtResult.remarks,
                                serviceId: el.edossierPtResult.serviceId,
                                status: el.edossierPtResult.status,
                                subjectType: 'ROT',
                                termId: el.edossierPtResult.termId,
                                totalMarks: _this.maxMarks,
                                //
                                rotTotal: rotTotal
                            }
                        };
                        _this.cadetList.push(cadetRecord);
                        // i++; //was using this for formarray
                    });
                    // this.pptForm.patchValue({
                    //   cadetRecords: this.cadetList
                    // })     //was using this for formarray
                    _this.spinner.hide();
                    _this.showSpinner = false;
                    // console.log('Cadets list: ',this.cadetList);
                }
                else {
                    _this.spinner.hide();
                    _this.showSpinner = false;
                    _this.statusMsg = res.message;
                    _this.sharedService.openSnackbar(res.message);
                }
            }
        }, function (error) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar('Error Occured.');
        });
    };
    RotComponent.prototype.getFinalSubmissionDates = function (termId) {
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
    RotComponent.prototype.patchNumbers = function (event, obj, i, j, type) {
        var value = event.target.value;
        if (value > obj.totalMarks || value < 0) {
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
                if (value >= 12) {
                    if (value == 30) {
                        obj.resultGrade = 'S/EX-1';
                    }
                    else if (value < 30 && value >= 28) {
                        obj.resultGrade = 'S/EX-2';
                    }
                    else if (value == 27) {
                        obj.resultGrade = 'S/EX-3';
                    }
                    else if (value == 26) {
                        obj.resultGrade = 'EX-1';
                    }
                    else if (value == 25) {
                        obj.resultGrade = 'EX-2';
                    }
                    else if (value == 24) {
                        obj.resultGrade = 'EX-3';
                    }
                    else if (value < 24 && value >= 22) {
                        obj.resultGrade = 'GD-1';
                    }
                    else if (value < 22 && value >= 20) {
                        obj.resultGrade = 'GD-2';
                    }
                    else if (value < 20 && value >= 18) {
                        obj.resultGrade = 'GD-3';
                    }
                    else if (value < 18 && value >= 16) {
                        obj.resultGrade = 'SAT-1';
                    }
                    else if (value < 16 && value >= 14) {
                        obj.resultGrade = 'SAT-2';
                    }
                    else if (value < 14 && value >= 12) {
                        obj.resultGrade = 'SAT-3';
                    }
                    obj.clearedIn = type;
                }
                else {
                    obj.resultGrade = 'Failed';
                }
                this.cadetList[i].edossierPtResult.rotTotal = value;
                this.cadetList[i].edossierPtResult.obtainedMarks = value;
            }
            else {
                this.cadetList[i].edossierPtResult.edossierPtSubjectResult[j].resultGrade = '';
                this.cadetList[i].edossierPtResult.rotTotal = value;
                this.cadetList[i].edossierPtResult.obtainedMarks = value;
            }
        }
    };
    RotComponent.prototype.submitResult = function () {
        var _this = this;
        console.log(this.cadetList);
        this.spinner.show();
        this.service.savePTResults(this.cadetList).subscribe(function (res) {
            if (res.status == "OK") {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
            }
            console.log(res);
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar("Some Error Occured!");
        });
    };
    RotComponent.ctorParameters = function () { return [
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
    RotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-rot',
            template: _raw_loader_rot_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_rot_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_10__["AdminService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_12__["DelayDashboardService"], String])
    ], RotComponent);
    return RotComponent;
}());



/***/ })

}]);