(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drill-marks-drill-marks-module"],{

/***/ "3fJi":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/drill-marks/drill-marks.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row.ima_clas {\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 12px;\n  background: #eee;\n  margin-top: -12px;\n  padding-top: 10px;\n}\n\n.common_cls button {\n  margin: 0px 10px;\n  padding: 0px 12px;\n  width: 100px;\n}\n\n.common_cls {\n  display: flex;\n}\n\n.next-button {\n  float: right;\n}\n\nspan.not_cls {\n  font-size: 12px;\n  color: #333;\n  font-weight: 600;\n}\n\nspan.col-md-12.not_msg {\n  font-weight: 600;\n  color: #afabab !important;\n  margin-bottom: 9px;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n}\n\ntable {\n  width: 48%;\n}\n\n.tdline {\n  padding: 0;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n\n.mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}");

/***/ }),

/***/ "3gfW":
/*!************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-marks/drill-marks.routes.ts ***!
  \************************************************************************/
/*! exports provided: DRILL_MARKS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRILL_MARKS_ROUTES", function() { return DRILL_MARKS_ROUTES; });
var DRILL_MARKS_ROUTES = [
    { path: 'drill-marks', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./drill-marks/drill-marks.module */ "KP26")).then(function (m) { return m.DrillMarksModule; }); } },
    { path: 'drill-oq', loadChildren: function () { return __webpack_require__.e(/*! import() | oq-drill-oq-drill-module */ "oq-drill-oq-drill-module").then(__webpack_require__.bind(null, /*! ./oq-drill/oq-drill.module */ "Hgw0")).then(function (m) { return m.OqdrillModule; }); } },
];


/***/ }),

/***/ "5jm/":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/adjutant-gi/drill-marks/drill-marks.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <div class=\"mat-heading\">\r\n        <div id=\"top-bar\" class=\"\">\r\n          <h2>ADJUTANT BRANCH <span class=\"sub-menu1\">\r\n            > General Instruction > Drill Competition > Drill Marks</span></h2>\r\n      </div>\r\n    </div>\r\n    \r\n</div>\r\n\r\n<mat-card>\r\n    <form [formGroup]=\"drillMarkForm\">\r\n        <div class=\"row ima_clas\">\r\n            <div class=\"form-group col-md-5\">\r\n                <label class=\"form-label\">IMA No. <span class=\"not_cls\">(Please enter IMA number to fetch data)</span>\r\n                </label>\r\n                <div class=\"common_cls\">\r\n                    <input type=\"text\" maxlength=\"100\" (change)=\"onChangesubmit($event.target.value)\" value=\"\" #player\r\n                        class=\"form-control\">\r\n                    <button (click)=\"onSubmit()\" mat-raised-button>Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">Ser.No </label>\r\n                <input type=\"text\" formControlName=\"serialNo\" disabled=\"!player\" maxlength=\"100\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">Batallion </label>\r\n                <input type=\"text\" formControlName=\"battalian\" disabled=\"!player\" maxlength=\"100\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">Name</label>\r\n                <input type=\"text\" formControlName=\"username\" disabled=\"!player\" maxlength=\"100\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">CoY. </label>\r\n                <input type=\"text\" formControlName=\"company\" disabled=\"!player\" maxlength=\"100\" class=\"form-control\">\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">Term Season </label>\r\n                <input type=\"text\" formControlName=\"termSession\" disabled=\"!player\" maxlength=\"100\"\r\n                    class=\"form-control\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">Year </label>\r\n                <input type=\"text\" formControlName=\"year\" disabled=\"!player\" maxlength=\"100\" class=\"form-control\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">Course </label>\r\n                <input type=\"text\" formControlName=\"course\" disabled=\"!player\" maxlength=\"100\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"form-label\">Term</label>\r\n                <input type=\"text\" formControlName=\"term\" disabled=\"!player\" maxlength=\"100\" class=\"form-control\">\r\n            </div>\r\n\r\n        </div>\r\n      \r\n        <button mat-raised-button (click)=\"next()\" [disabled]=\"drillMarkForm.invalid\" class=\"next-button\">Next</button>\r\n    </form>");

/***/ }),

/***/ "6WZC":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/drill-competition/drill-marks/drill-marks.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DrillMarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrillMarksComponent", function() { return DrillMarksComponent; });
/* harmony import */ var _raw_loader_drill_marks_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./drill-marks.component.html */ "XdfC");
/* harmony import */ var _drill_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drill-marks.component.scss */ "LFpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/delay-dashboard/delay-dashboard.service */ "GvGC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DrillMarksComponent = /** @class */ (function () {
    function DrillMarksComponent(fb, router, route, service, Adjservice, spinner, cdref, adminService, sharedService, delayDashboardService, localID) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.service = service;
        this.Adjservice = Adjservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.adminService = adminService;
        this.sharedService = sharedService;
        this.delayDashboardService = delayDashboardService;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.pptForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.attemtTypes = ['M1', 'M2', 'C1', 'C2'];
        this.subject = 'PPT';
        this.battalionList = [];
        this.companyList = [];
        this.battalionId = '';
        this.companyId = '';
        this.cadetList = [];
        this._static_mov = 20;
        this._quick_march = 40;
        this._reporting = 15;
        this.turn_out = 10;
        this.bearing = 15;
        this.mks_for_exellence = 10;
        this._4mtrClimg_mm = 10; // for term 3
        this.Wpn_Drill = 20;
        this.Reporting_with_Rifle = 10;
        this.Slow_March = 25;
        this.WOC = 15;
        this.Cane_Drill = 15;
        this.Sword_Drill = 15;
        this.turn_Out = 25;
        this.totalMM = this._static_mov + this._quick_march + this._reporting + this.turn_out + this.bearing + this.mks_for_exellence;
        this.hasAccess = true;
        this.battalionName = '0';
        this.pageSize = 50;
        this.currentPage = 0;
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
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
                _this.setAllMaxMarks();
                _this.setTotalMarks();
            }
            else if (_this.term == 'II Term') {
                _this.termId = 2;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
                _this.setAllMaxMarks();
                _this.setTotalMarks();
            }
            else if (_this.term == 'III Term') {
                _this.termId = 3;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
                _this.setAllMaxMarks();
                _this.setTotalMarks();
            }
            else if (_this.term == 'II Tech') {
                _this.termId = 7;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
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
            // this.getCadetsList()
            if (_this.companyName == undefined || _this.companyName == null || _this.companyName == '') {
                _this.getCadetsList();
            }
            _this.Adjservice.getBattalionList().subscribe(function (res) {
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
        });
        this.localID = localID;
    }
    DrillMarksComponent.prototype.blockPaste = function (e) {
        e.preventDefault();
    };
    DrillMarksComponent.prototype.ngOnInit = function () {
        this.getBattalionList();
    };
    DrillMarksComponent.prototype.ngAfterViewInit = function () {
        // this.getCadetsList(s)
    };
    DrillMarksComponent.prototype.setAllMaxMarks = function () {
        if (this.termId == 3) {
            this.WOC = 15;
            this.Wpn_Drill = 10;
            this.Cane_Drill = 15;
            this.Sword_Drill = 15;
            this.Slow_March = 20;
            this.turn_out = 15;
            this.bearing = 10;
        }
        if (this.termId == 2) {
            this.Wpn_Drill = 20;
            this.Reporting_with_Rifle = 10;
            this._quick_march = 20;
            this.Slow_March = 15;
            this.turn_Out = 15;
            this.bearing = 10;
        }
        if (this.termId == 7) {
            this._static_mov = 20;
            this._quick_march = 40;
            this._reporting = 10;
            this.turn_out = 15;
            this.bearing = 10;
            this.mks_for_exellence = 5;
        }
        else {
            this._static_mov = 20;
            this._quick_march = 40;
            this._reporting = 10;
            this.turn_out = 15;
            this.bearing = 5;
            this.mks_for_exellence = 10;
        }
    };
    DrillMarksComponent.prototype.setTotalMarks = function () {
        if (this.termId != 3) {
            this.totalMM = this._static_mov + this._quick_march + this._reporting + this.turn_out + this.bearing + this.mks_for_exellence;
        }
        else if (this.termId == 3) {
            this.totalMM = this.WOC + this.Wpn_Drill + this.Cane_Drill + this.Sword_Drill + this.Slow_March + this.turn_out + this.bearing;
        }
        else if (this.termId == 2) {
            this.totalMM = this.Wpn_Drill + this.Reporting_with_Rifle + this._quick_march + this.turn_Out + this.Slow_March + this.bearing;
        }
        else if (this.termId == 7) {
            this.totalMM = this._static_mov + this._quick_march + this._reporting + this.turn_out + this.bearing + this.mks_for_exellence;
        }
    };
    Object.defineProperty(DrillMarksComponent.prototype, "getAllCadetRecords", {
        get: function () {
            return this.pptForm.get('cadetRecords');
        },
        enumerable: false,
        configurable: true
    });
    DrillMarksComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        this.battalionName = e;
        this.companyName = null;
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
        this.spinner.show();
        if (this.battalionId != null || this.battalionName != '0') {
            this.Adjservice.getCompanyList(this.battalionId).subscribe(function (res) {
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
        this.companyList = [];
        this.getCadetsList();
    };
    DrillMarksComponent.prototype.companySelected = function (e) {
        this.companyName = e;
        if (this.companyName == 0) {
            console.log(this.companyName, 'e');
            this.getSpecialAllList();
            this.companyName = null;
            this.getCadetsList();
        }
        else {
            if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
                this.getCadetsList();
            }
        }
        this.getCadetsList();
    };
    DrillMarksComponent.prototype.getSpecialAllList = function () {
        var _this = this;
        this.Adjservice.getRun_All_ListByBCNameComp(this.termId, this.currentPage, this.pageSize, this.battalionName).subscribe(function (res) {
            console.log(res);
            if (res.message == 'OK') {
                _this.resultsLength = res.object.totalRecords;
                _this.cadetList = res.object.drillFilterPayload;
            }
            else {
                _this.cadetList = [];
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            // this.Adjservice.openSnackbar("Some Error Occured.");
        });
    };
    DrillMarksComponent.prototype.search = function () {
        if (this.battalion || this.company || this.serviceId) {
            this.getCadetsList();
        }
        else {
            this.sharedService.openAlertSnackbarWithSeconds("No Search Filters are Added.", 7);
        }
    };
    DrillMarksComponent.prototype.clearSearch = function () {
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
    DrillMarksComponent.prototype.getACadetRecord = function () {
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
            dRILLResult: this.fb.group({
                clearedIn: [''],
                dRILLSubjectResult: this.fb.array([]),
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
    DrillMarksComponent.prototype.addCadetRecord = function () {
        this.getAllCadetRecords.push(this.getACadetRecord());
    };
    DrillMarksComponent.prototype.getASubject = function () {
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
    DrillMarksComponent.prototype.getAllSubjects = function (index) {
        return this.getAllCadetRecords.at(index).get('dRILLResult').get('dRILLSubjectResult');
    };
    DrillMarksComponent.prototype.addSubject = function (i) {
        this.getAllSubjects(i).push(this.getASubject());
    };
    DrillMarksComponent.prototype.getBattalionList = function () {
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
    DrillMarksComponent.prototype.getCadetsList = function () {
        var _this = this;
        this.showSpinner = true;
        this.statusMsg = '';
        this.cadetList = [];
        this.spinner.show();
        if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
            this.Adjservice.getDrill_All_ListByBCName(this.termId, this.currentPage, this.pageSize, this.battalionName, this.companyName).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this.Adjservice.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.cadetList = res.object.drillFilterPayload;
                    if (res.object.drillFilterPayload.length > 0) {
                        _this.resultsLength = res.object.totalRecords;
                        _this.cadetList = res.object.drillFilterPayload;
                    }
                    else {
                        _this.cadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.cadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.Adjservice.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.Adjservice.getDrillAllCadetlist(this.termId, this.currentPage, this.pageSize).subscribe(function (res) {
                console.log(res);
                // let i = 0; //was using this for formarray
                if (res.status == "OK") {
                    if (res.object) {
                        res.object.drillFilterPayload.forEach(function (el) {
                            // this.addCadetRecord(); //was using this for formarray
                            var static_mov = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName == "Static Mov") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this._static_mov));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var quick_march = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Quick March") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this._quick_march));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var rerporting = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Reporting") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this._reporting));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var turn_out = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Turn Out") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.turn_out));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var bearing = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Bearing") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.bearing));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var mks_for_excellence = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Mks for Excellence") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.mks_for_exellence));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var Wpn_Drill = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Wpn Drill") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.Wpn_Drill));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var Reporting_with_Rifle = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Reporting with Rifle") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.Reporting_with_Rifle));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var _quick_march = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Quick March") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this._quick_march));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var Slow_March = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Slow March") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.Slow_March));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            // let subjArr = [static_mov, quick_march, rerporting, turn_out, bearing, mks_for_excellence, ];
                            if (_this.termId == 1) {
                                _this.subjArr = [static_mov, quick_march, rerporting, turn_out, bearing, mks_for_excellence,];
                            }
                            if (_this.termId == 7) {
                                _this.subjArr = [static_mov, quick_march, rerporting, turn_out, bearing, mks_for_excellence,];
                            }
                            if (_this.termId == 2) {
                                _this.subjArr = [Wpn_Drill, Reporting_with_Rifle, quick_march, Slow_March, turn_out, bearing,];
                            }
                            // if (this.termId == 3) {
                            //   subjArr.push(_4mtrClimg)
                            // }
                            var ptTotal = 0;
                            _this.subjArr.forEach(function (el) {
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
                                dRILLResult: {
                                    clearedIn: el.dRILLResult.clearedIn,
                                    dRILLSubjectResult: _this.subjArr,
                                    id: el.dRILLResult.id,
                                    obtainedMarks: ptTotal,
                                    remarks: el.dRILLResult.remarks,
                                    serviceId: el.dRILLResult.serviceId,
                                    status: el.dRILLResult.status,
                                    subjectType: 'DRILL MARKS',
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
        }
        console.log(this.cadetList);
    };
    DrillMarksComponent.prototype.getSubjectRecord = function (sub, maxMarks) {
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
            subjectType: 'DRILL MARKS',
            termId: sub.termId,
            totalMarks: maxMarks,
        };
        return subject;
    };
    DrillMarksComponent.prototype.onlyNum = function (event) {
        var pattern = /^[0-9]*$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    DrillMarksComponent.prototype.serviceSearch = function (e) {
        this.serviceid = e;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this.getCadetsList();
        }
    };
    DrillMarksComponent.prototype.edSearch = function (event) {
        var _this = this;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this.Adjservice.openSnackbar("Search Bar is Empty. Please fill the details");
        }
        else {
            this.Adjservice.searchDRILL(this.termId, this.serviceid, this.currentPage, this.pageSize).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this.Adjservice.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.cadetList = res.object.drillFilterPayload;
                    if (res.object.drillFilterPayload.length > 0) {
                        _this.resultsLength = res.object.totalRecords;
                        _this.cadetList = res.object.drillFilterPayload;
                    }
                    else {
                        _this.cadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.cadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.Adjservice.openSnackbar("Some Error Occured.");
            });
        }
    };
    DrillMarksComponent.prototype.patchNumbers = function (event, obj, i, j, type) {
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
                            obj.resultGrade = 'Failed';
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
                            obj.resultGrade = 'Failed';
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
                            obj.resultGrade = 'Failed';
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
                            obj.resultGrade = 'Failed';
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
                            obj.resultGrade = 'Failed';
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
                            obj.resultGrade = 'Failed';
                        }
                    }
                    if (obj.subjectName == '2nd CL Rope (4 Mtr Climb)') {
                        if (value == 10) {
                            obj.resultGrade = 'Pass';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                }
                this.calculateMarks(i);
            }
            else {
                this.cadetList[i].dRILLResult.dRILLSubjectResult[j].resultGrade = '';
                this.calculateMarks(i);
            }
        }
    };
    DrillMarksComponent.prototype.calculateMarks = function (i) {
        var ptTotal = 0;
        this.cadetList[i].dRILLResult.dRILLSubjectResult.forEach(function (el) {
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
        this.cadetList[i].dRILLResult.ptTotalMarks = ptTotal;
        this.cadetList[i].dRILLResult.obtainedMarks = ptTotal;
    };
    DrillMarksComponent.prototype.submitResult = function () {
        var _this = this;
        console.log(this.cadetList);
        this.spinner.show();
        this.Adjservice.updateDrillCadet(this.cadetList).subscribe(function (res) {
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
    DrillMarksComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_6__["AdjutantService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
        { type: app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DelayDashboardService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
    ]; };
    DrillMarksComponent.propDecorators = {
        blockPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['paste', ['$event'],] }]
    };
    DrillMarksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-drill-marks',
            template: _raw_loader_drill_marks_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_drill_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"], app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_6__["AdjutantService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
            app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DelayDashboardService"], String])
    ], DrillMarksComponent);
    return DrillMarksComponent;
}());



/***/ }),

/***/ "6cD/":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/drill-marks/drill-marks/drill-marks.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"mat-heading\">\r\n      <div id=\"top-bar\" class=\"\">\r\n        <h2>ADJUTANT BRANCH <span class=\"sub-menu1\">\r\n            > General Instruction > Drill Competition > {{term}} > Drill Marks</span></h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"academics\">\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n        <!-- <div class=\"ng-star-inserted\">\r\n          <div class=\"mat-new mb-4\">\r\n            <h4 class=\"card-heading\">Drill Marks > {{term}} > {{type}}</h4>\r\n          </div>\r\n        </div>-->\r\n        <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"battalion\">Battalion</label>\r\n              <select id=\"battalion\" name=\"battalion\" (change)=\"battalionSelected($event.target.value)\"\r\n                class=\"form-control\">\r\n                <option value=\"0\" selected>Select</option>\r\n                <option *ngFor=\"let b of battalionList\" [value]=\"b.shortName\"> {{b.shortName}}</option>\r\n              </select>\r\n\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"company\">Company</label>\r\n              <select id=\"company\" class=\"form-control\" name=\"company\" (change)=\"companySelected($event.target.value)\">\r\n                <option value=\"0\" selected>Select</option>\r\n                <option *ngFor=\"let c of companyList\" [value]=\"c.name\"> {{c.name}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Search</label>\r\n                <input placeholder=\"IMA No.\" formcontrolname=\"\" type=\"text\" name=\"serviceid\" [(ngModel)]=\"serviceid\"\r\n                  (keyup)=\"serviceSearch($event.target.value)\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <label>&nbsp;</label>\r\n              <button type=\"button\" mat-raised-button (click)=\"edSearch()\">Search</button>\r\n              <!-- <button mat-raised-button (click)=\"clearSearch()\" >Clear</button> -->\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <!-- <form class=\"oq-matrix-form\"> -->\r\n        <div *ngIf=\"termId==1\">\r\n          <table class=\"tg\" *ngIf=\"cadetList.length\">\r\n            <thead class=\"table-head\" id=\"table-header\">\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Rank</th>\r\n                <th class=\"tg-qnnc t-name\" rowspan=\"2\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Course</th>\r\n\r\n\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Static Mov (MM-{{_static_mov}}) </th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Quick March (MM-{{_quick_march}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Reporting (MM-{{_reporting}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Turn Out (MM-{{turn_out}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Bearing (MM-{{bearing}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Mks For Exellence (MM-{{mks_for_exellence}})</th>\r\n                <!-- <th *ngIf=\"termId==3\" class=\"tg-qnnc\" colspan=\"3\"> Mks for Excellence<sup>nd</sup> CL Rope (4 Mtr Climb) (MM-{{_4mtrClimg_mm}})</th> -->\r\n\r\n                <th class=\"tg-qnnc\">Total (MM-{{totalMM}})</th>\r\n\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <th></th>\r\n                <!-- <th>KHALI HATH</th> -->\r\n\r\n                <!-- <th *ngIf=\"termId==3\">Attempt Type</th>\r\n                      <th *ngIf=\"termId==3\">Obtained Marks</th>\r\n                      <th *ngIf=\"termId==3\">Grade</th> -->\r\n\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            <tbody *ngIf=\"cadetList.length\">\r\n              <tr *ngFor=\"let cadet of cadetList;let i=index\">\r\n                <td> {{i+1}} </td>\r\n                <td> {{cadet.serviceId}} </td>\r\n                <td>\r\n                  <span *ngIf=\"cadet.nationality == 'India'\">GC</span>\r\n                  <span *ngIf=\"cadet.nationality != 'India'\">FGC</span>\r\n                </td>\r\n                <td class=\"t-name\"> {{cadet.name}} </td>\r\n                <td> {{cadet.course}} </td>\r\n\r\n                <ng-container *ngFor=\"let sub of cadet.dRILLResult.dRILLSubjectResult;let j=index\">\r\n                  <td>\r\n                    <span *ngIf=\"!hasAccess\"> {{sub.lastAttemptType}} </span>\r\n                    <select *ngIf=\"hasAccess\" id=\"company\" class=\"form-control\" [(ngModel)]=\"sub.lastAttemptType\">\r\n                      <option value=\"\" selected hidden disabled>--</option>\r\n                      <!-- <option *ngFor=\"let att of attemtTypes\" [value]=\"att\"> {{att}}</option> -->\r\n                      <option value=\"M1\">M1</option>\r\n                      <option [disabled]=\"!sub.m1ObtainedMarks\" value=\"M2\">M2</option>\r\n                      <option [disabled]=\"!sub.m2ObtainedMarks\" value=\"C1\">C1</option>\r\n                      <option [disabled]=\"!sub.c1ObtainedMarks\" value=\"C2\">C2</option>\r\n                    </select>\r\n                  </td>\r\n                  <td>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M1' && !hasAccess \"> {{sub.m1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M2' && !hasAccess \"> {{sub.m2ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C1' && !hasAccess \"> {{sub.c1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C2' && !hasAccess \"> {{sub.c2ObtainedMarks}} </span>\r\n\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M1' && hasAccess \" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m2ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C1' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c2ObtainedMarks\">\r\n                  </td>\r\n                  <!-- <td>\r\n                              <span *ngIf=\"sub.resultGrade\">\r\n                                  {{sub.resultGrade}}\r\n                              </span>\r\n                          </td> -->\r\n\r\n                </ng-container>\r\n\r\n                <td>\r\n                  <span *ngIf=\"cadet.dRILLResult.ptTotalMarks\">\r\n                    {{cadet.dRILLResult.ptTotalMarks}}\r\n                  </span>\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <br>\r\n        <div *ngIf=\"termId==7\">\r\n          <table class=\"tg\" *ngIf=\"cadetList.length\">\r\n            <thead class=\"table-head\" id=\"table-header\">\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Rank</th>\r\n                <th class=\"tg-qnnc t-name\" rowspan=\"2\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Course</th>\r\n\r\n\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Static Mov (MM-{{_static_mov}}) </th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Quick March (MM-{{_quick_march}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Reporting (MM-{{_reporting}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Turn Out (MM-{{turn_out}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Bearing (MM-{{bearing}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Mks For Exellence (MM-{{mks_for_exellence}})</th>\r\n                <!-- <th *ngIf=\"termId==3\" class=\"tg-qnnc\" colspan=\"3\"> Mks for Excellence<sup>nd</sup> CL Rope (4 Mtr Climb) (MM-{{_4mtrClimg_mm}})</th> -->\r\n\r\n                <th class=\"tg-qnnc\">Total (MM-{{totalMM}})</th>\r\n\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <th></th>\r\n\r\n                <!-- <th *ngIf=\"termId==3\">Attempt Type</th>\r\n                      <th *ngIf=\"termId==3\">Obtained Marks</th>\r\n                      <th *ngIf=\"termId==3\">Grade</th> -->\r\n\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            <tbody *ngIf=\"cadetList.length\">\r\n              <tr *ngFor=\"let cadet of cadetList;let i=index\">\r\n                <td> {{i+1}} </td>\r\n                <td> {{cadet.serviceId}} </td>\r\n                <td>\r\n                  <span *ngIf=\"cadet.nationality == 'India'\">GC</span>\r\n                  <span *ngIf=\"cadet.nationality != 'India'\">FGC</span>\r\n                </td>\r\n                <td class=\"t-name\"> {{cadet.name}} </td>\r\n                <td> {{cadet.course}} </td>\r\n\r\n                <ng-container *ngFor=\"let sub of cadet.dRILLResult.dRILLSubjectResult;let j=index\">\r\n                  <td>\r\n                    <span *ngIf=\"!hasAccess\"> {{sub.lastAttemptType}} </span>\r\n                    <select *ngIf=\"hasAccess\" id=\"company\" class=\"form-control\" [(ngModel)]=\"sub.lastAttemptType\">\r\n                      <option value=\"\" selected hidden disabled>--</option>\r\n                      <!-- <option *ngFor=\"let att of attemtTypes\" [value]=\"att\"> {{att}}</option> -->\r\n                      <option value=\"M1\">M1</option>\r\n                      <option [disabled]=\"!sub.m1ObtainedMarks\" value=\"M2\">M2</option>\r\n                      <option [disabled]=\"!sub.m2ObtainedMarks\" value=\"C1\">C1</option>\r\n                      <option [disabled]=\"!sub.c1ObtainedMarks\" value=\"C2\">C2</option>\r\n                    </select>\r\n                  </td>\r\n                  <td>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M1' && !hasAccess \"> {{sub.m1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M2' && !hasAccess \"> {{sub.m2ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C1' && !hasAccess \"> {{sub.c1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C2' && !hasAccess \"> {{sub.c2ObtainedMarks}} </span>\r\n\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M1' && hasAccess \" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m2ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C1' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c2ObtainedMarks\">\r\n                  </td>\r\n                  <!-- <td>\r\n                              <span *ngIf=\"sub.resultGrade\">\r\n                                  {{sub.resultGrade}}\r\n                              </span>\r\n                          </td> -->\r\n\r\n                </ng-container>\r\n\r\n                <td>\r\n                  <span *ngIf=\"cadet.dRILLResult.ptTotalMarks\">\r\n                    {{cadet.dRILLResult.ptTotalMarks}}\r\n                  </span>\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <div *ngIf=\"termId==2\">\r\n          <table class=\"tg\" *ngIf=\"cadetList.length\">\r\n            <thead class=\"table-head\" id=\"table-header\">\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Rank</th>\r\n                <th class=\"tg-qnnc t-name\" rowspan=\"2\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Course</th>\r\n\r\n\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Wpn Drill (MM-{{Wpn_Drill}}) </th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Reporting with Rifle (MM-{{Reporting_with_Rifle}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Quick March (MM-{{_quick_march}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Slow March (MM-{{Slow_March}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Turn Out (MM-{{turn_Out}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Bearing (MM-{{bearing}})</th>\r\n                <!-- <th *ngIf=\"termId==3\" class=\"tg-qnnc\" colspan=\"3\"> Mks for Excellence<sup>nd</sup> CL Rope (4 Mtr Climb) (MM-{{_4mtrClimg_mm}})</th> -->\r\n\r\n                <th class=\"tg-qnnc\">Total (MM-{{totalMM}})</th>\r\n\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <th>RIFLE DRILL</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <!-- <th *ngIf=\"termId==3\">Attempt Type</th>\r\n                      <th *ngIf=\"termId==3\">Obtained Marks</th>\r\n                      <th *ngIf=\"termId==3\">Grade</th> -->\r\n\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            <tbody *ngIf=\"cadetList.length\">\r\n              <tr *ngFor=\"let cadet of cadetList;let i=index\">\r\n                <td> {{i+1}} </td>\r\n                <td> {{cadet.serviceId}} </td>\r\n                <td>\r\n                  <span *ngIf=\"cadet.nationality == 'India'\">GC</span>\r\n                  <span *ngIf=\"cadet.nationality != 'India'\">FGC</span>\r\n                </td>\r\n                <td class=\"t-name\"> {{cadet.name}} </td>\r\n                <td> {{cadet.course}} </td>\r\n\r\n                <ng-container *ngFor=\"let sub of cadet.dRILLResult.dRILLSubjectResult;let j=index\">\r\n                  <td>\r\n                    <span *ngIf=\"!hasAccess\"> {{sub.lastAttemptType}} </span>\r\n                    <select *ngIf=\"hasAccess\" id=\"company\" class=\"form-control\" [(ngModel)]=\"sub.lastAttemptType\">\r\n                      <option value=\"\" selected hidden disabled>--</option>\r\n                      <!-- <option *ngFor=\"let att of attemtTypes\" [value]=\"att\"> {{att}}</option> -->\r\n                      <option value=\"M1\">M1</option>\r\n                      <option [disabled]=\"!sub.m1ObtainedMarks\" value=\"M2\">M2</option>\r\n                      <option [disabled]=\"!sub.m2ObtainedMarks\" value=\"C1\">C1</option>\r\n                      <option [disabled]=\"!sub.c1ObtainedMarks\" value=\"C2\">C2</option>\r\n                    </select>\r\n                  </td>\r\n                  <td>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M1' && !hasAccess \"> {{sub.m1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M2' && !hasAccess \"> {{sub.m2ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C1' && !hasAccess \"> {{sub.c1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C2' && !hasAccess \"> {{sub.c2ObtainedMarks}} </span>\r\n\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M1' && hasAccess \" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m2ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C1' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c2ObtainedMarks\">\r\n                  </td>\r\n                  <!-- <td>\r\n                              <span *ngIf=\"sub.resultGrade\">\r\n                                  {{sub.resultGrade}}\r\n                              </span>\r\n                          </td> -->\r\n\r\n                </ng-container>\r\n\r\n                <td>\r\n                  <span *ngIf=\"cadet.dRILLResult.ptTotalMarks\">\r\n                    {{cadet.dRILLResult.ptTotalMarks}}\r\n                  </span>\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <br>\r\n        <div *ngIf=\"termId==8\">\r\n          <table class=\"tg\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Attempt Type</th>\r\n                <th class=\"tg-qnnc\" colspan=\"8\">Rifle drill</th>\r\n              </tr>\r\n              <tr>\r\n                <th colspan=\"1\" style=\"width: 11%;\" *ngFor=\"let subject of drillSubjectList\" class=\"tg-qnnc\">\r\n                  {{subject.subjectName}}<br>Marks\r\n                  ({{subject.totalMarks}})</th>\r\n\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Total </th>\r\n                <th class=\"tg-qnnc\">GRADING</th>\r\n\r\n              </tr>\r\n\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let leadership of drillCadetList; let leadershipIndex = index\">\r\n                <td class=\"tg-c3ow\">{{ leadershipIndex + 1}}</td>\r\n                <td class=\"tg-c3ow\">{{ leadership.serviceId }}</td>\r\n                <td class=\"tg-0pky\">{{ leadership.course }}</td>\r\n                <td class=\"tg-c3ow\">{{ leadership.name }}</td>\r\n                <!-- <td class=\"tg-0pky\">{{ leadership.nationality }}</td> -->\r\n                <td class=\"tg-c3ow\">\r\n                  <p *ngIf=\"leadership.nationality=='India'\">GC</p>\r\n                  <p *ngIf=\"leadership.nationality !='India'\">FGC</p>\r\n                </td>\r\n                <ng-container\r\n                  *ngFor=\"let leadershipSubject of leadership.dRILLResult.dRILLSubjectResult; let leadershipSubjectIndex = index\">\r\n                  <td *ngIf=\"leadershipSubjectIndex==0\">\r\n                    <select id=\"company\" class=\"form-control\"\r\n                      (change)=\"attemptClear($event.target.value, leadershipIndex, leadershipSubjectIndex)\">\r\n                      <option value=\"\">Select</option>\r\n                      <option *ngFor=\"let att of attemtTypes\" [selected]=\"leadership.dRILLResult.clearedIn == att\"\r\n                        [value]=\"att\"> {{att}}</option>\r\n                    </select>\r\n                  </td>\r\n                  <td class=\"tg-c3ow\">\r\n                    <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M1'\" type=\"text\" class=\"form-control d-inline\"\r\n                      value=\"{{leadershipSubject.m1ObtainedMarks}}\"\r\n                      (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" min=\"0\" (keypress)=\"keyPress($event)\"\r\n                      on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                    <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M2'\" type=\"text\" class=\"form-control d-inline\"\r\n                      value=\"{{leadershipSubject.m2ObtainedMarks}}\"\r\n                      (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" min=\"0\" (keypress)=\"keyPress($event)\"\r\n                      on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                    <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C1'\" type=\"text\" class=\"form-control d-inline\"\r\n                      value=\"{{leadershipSubject.c1ObtainedMarks}}\"\r\n                      (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" min=\"0\" (keypress)=\"keyPress($event)\"\r\n                      on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                    <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C2'\" type=\"text\" class=\"form-control d-inline\"\r\n                      value=\"{{leadershipSubject.c2ObtainedMarks}}\"\r\n                      (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" min=\"0\" (keypress)=\"keyPress($event)\"\r\n                      on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                  </td>\r\n                </ng-container>\r\n\r\n                <td class=\"tg-0pky\">\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M1'\" type=\"text\" class=\"form-control\" disabled\r\n                    id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.m1ObtainedMarks }}\">\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M2'\" type=\"text\" class=\"form-control\" disabled\r\n                    id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.m2ObtainedMarks }}\">\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C1'\" type=\"text\" class=\"form-control\" disabled\r\n                    id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.c1ObtainedMarks }}\">\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C2'\" type=\"text\" class=\"form-control\" disabled\r\n                    id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.c2ObtainedMarks }}\">\r\n                </td>\r\n\r\n                <td class=\"tg-0pky\">\r\n                  <input type=\"text\" class=\"form-control\" id=\"{{leadershipIndex}}\"\r\n                    value=\"{{ leadership.dRILLResult.remarks }}\">\r\n                </td>\r\n\r\n\r\n              </tr>\r\n              <tr>\r\n                <td class=\"mat-cell\" style=\"text-align: center;\" *ngIf=\"! drillCadetList?.length\" colspan=\"14\">\r\n                  <div>No Record Found</div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <br>\r\n\r\n        <div *ngIf=\"termId==3\">\r\n          <table class=\"tg\" *ngIf=\"cadetList.length\">\r\n            <thead class=\"table-head\" id=\"table-header\">\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Rank</th>\r\n                <th class=\"tg-qnnc t-name\" rowspan=\"2\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Course</th>\r\n\r\n\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Wpn Drill (MM-{{Wpn_Drill}}) </th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Reporting with Rifle (MM-{{Reporting_with_Rifle}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Quick March (MM-{{_quick_march}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Slow March (MM-{{turn_out}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Turn Out (MM-{{Slow_March}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Bearing (MM-{{bearing}})</th>\r\n                <!-- <th *ngIf=\"termId==3\" class=\"tg-qnnc\" colspan=\"3\"> Mks for Excellence<sup>nd</sup> CL Rope (4 Mtr Climb) (MM-{{_4mtrClimg_mm}})</th> -->\r\n\r\n                <th class=\"tg-qnnc\">Total (MM-{{totalMM}})</th>\r\n\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <th>DAT</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <!-- <th *ngIf=\"termId==3\">Attempt Type</th>\r\n                      <th *ngIf=\"termId==3\">Obtained Marks</th>\r\n                      <th *ngIf=\"termId==3\">Grade</th> -->\r\n\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            <tbody *ngIf=\"cadetList.length\">\r\n              <tr *ngFor=\"let cadet of cadetList;let i=index\">\r\n                <td> {{i+1}} </td>\r\n                <td> {{cadet.serviceId}} </td>\r\n                <td>\r\n                  <span *ngIf=\"cadet.nationality == 'India'\">GC</span>\r\n                  <span *ngIf=\"cadet.nationality != 'India'\">FGC</span>\r\n                </td>\r\n                <td class=\"t-name\"> {{cadet.name}} </td>\r\n                <td> {{cadet.course}} </td>\r\n\r\n                <ng-container *ngFor=\"let sub of cadet.dRILLResult.dRILLSubjectResult;let j=index\">\r\n                  <td>\r\n                    <span *ngIf=\"!hasAccess\"> {{sub.lastAttemptType}} </span>\r\n                    <select *ngIf=\"hasAccess\" id=\"company\" class=\"form-control\" [(ngModel)]=\"sub.lastAttemptType\">\r\n                      <option value=\"\" selected hidden disabled>--</option>\r\n                      <!-- <option *ngFor=\"let att of attemtTypes\" [value]=\"att\"> {{att}}</option> -->\r\n                      <option value=\"M1\">M1</option>\r\n                      <option [disabled]=\"!sub.m1ObtainedMarks\" value=\"M2\">M2</option>\r\n                      <option [disabled]=\"!sub.m2ObtainedMarks\" value=\"C1\">C1</option>\r\n                      <option [disabled]=\"!sub.c1ObtainedMarks\" value=\"C2\">C2</option>\r\n                    </select>\r\n                  </td>\r\n                  <td>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M1' && !hasAccess \"> {{sub.m1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M2' && !hasAccess \"> {{sub.m2ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C1' && !hasAccess \"> {{sub.c1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C2' && !hasAccess \"> {{sub.c2ObtainedMarks}} </span>\r\n\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M1' && hasAccess \" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m2ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C1' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c2ObtainedMarks\">\r\n                  </td>\r\n                  <!-- <td>\r\n                              <span *ngIf=\"sub.resultGrade\">\r\n                                  {{sub.resultGrade}}\r\n                              </span>\r\n                          </td> -->\r\n\r\n                </ng-container>\r\n\r\n                <td>\r\n                  <span *ngIf=\"cadet.dRILLResult.ptTotalMarks\">\r\n                    {{cadet.dRILLResult.ptTotalMarks}}\r\n                  </span>\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <!-- </form> -->\r\n\r\n        <div class=\"\">\r\n          <!-- <mat-paginator #myPaginator [length]=\"resultsLength\" [pageSizeOptions]=\"[30]\"  showFirstLastButtons>\r\n                    </mat-paginator> -->\r\n        \r\n          <div class=\"text-center\" *ngIf=\"!cadetList.length \" >\r\n            <h5> No Record Found</h5> \r\n        </div>\r\n        \r\n          <div class=\"btn-sec mt-3 text-right\">\r\n            <div class=\"mb-4 pull-right\" *ngIf=\"hasAccess\">\r\n              <button mat-raised-button (click)=\"submitResult()\" [disabled]=\"!cadetList.length\">\r\n                Submit\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <mat-paginator #myPaginator [length]=\"resultsLength\" [pageIndex]=\"currentPage\" [pageSize]=\"pageSize\"\r\n            aria-label=\"Select page\" showFirstLastButtons>\r\n          </mat-paginator>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayStyle}\">\r\n  <div class=\"modal-dialog modal-lg modal-dialog-scrollable custom-lg\" role=\"document\">\r\n    <div class=\"modal-content p-3\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Review</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <table class=\"tg\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Attempt Type</th>\r\n              <th class=\"tg-qnnc\" colspan=\"8\"></th>\r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"1\" style=\"width: 11%;\" *ngFor=\"let subject of drillSubjectList\" class=\"tg-qnnc\">\r\n                {{subject.subjectName}}<br>Marks\r\n                ({{subject.totalMarks}})</th>\r\n\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Total </th>\r\n              <th class=\"tg-qnnc\">GRADING</th>\r\n\r\n            </tr>\r\n\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let leadership of drillCadetList; let leadershipIndex = index\">\r\n              <td class=\"tg-c3ow\">{{ leadershipIndex + 1}}</td>\r\n              <td class=\"tg-c3ow\">{{ leadership.serviceId }}</td>\r\n              <td class=\"tg-0pky\">{{ leadership.course }}</td>\r\n              <td class=\"tg-c3ow\">{{ leadership.name }}</td>\r\n              <td class=\"tg-c3ow\">\r\n                <p *ngIf=\"leadership.nationality=='India'\">GC</p>\r\n                <p *ngIf=\"leadership.nationality !='India'\">FGC</p>\r\n              </td>\r\n\r\n              <ng-container\r\n                *ngFor=\"let leadershipSubject of leadership.dRILLResult.dRILLSubjectResult; let leadershipSubjectIndex = index\">\r\n                <td *ngIf=\"leadershipSubjectIndex==0\">\r\n                  <select id=\"company\" class=\"form-control\" disabled\r\n                    (change)=\"attemptClear($event.target.value, leadershipIndex, leadershipSubjectIndex)\">\r\n                    <option value=\"\">Select</option>\r\n                    <option *ngFor=\"let att of attemtTypes\" [selected]=\"leadership.dRILLResult.clearedIn == att\"\r\n                      [value]=\"att\"> {{att}}</option>\r\n                  </select>\r\n                </td>\r\n                <td class=\"tg-c3ow\">\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M1'\" disabled type=\"text\"\r\n                    class=\"form-control d-inline\" value=\"{{leadershipSubject.m1ObtainedMarks}}\"\r\n                    (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" (keypress)=\"keyPress($event)\"\r\n                    [max]=\"leadershipSubject.totalMarks\"\r\n                    on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M2'\" disabled type=\"text\"\r\n                    class=\"form-control d-inline\" value=\"{{leadershipSubject.m2ObtainedMarks}}\"\r\n                    (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" min=\"0\" (keypress)=\"keyPress($event)\"\r\n                    on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C1'\" disabled type=\"text\"\r\n                    class=\"form-control d-inline\" value=\"{{leadershipSubject.c1ObtainedMarks}}\"\r\n                    (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" min=\"0\" (keypress)=\"keyPress($event)\"\r\n                    on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C2'\" disabled type=\"text\"\r\n                    class=\"form-control d-inline\" value=\"{{leadershipSubject.c2ObtainedMarks}}\"\r\n                    (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" min=\"0\" (keypress)=\"keyPress($event)\"\r\n                    on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                </td>\r\n              </ng-container>\r\n\r\n\r\n              <td class=\"tg-0pky\">\r\n                <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M1'\" type=\"text\" class=\"form-control\" disabled\r\n                  id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.m1ObtainedMarks }}\">\r\n                <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M2'\" type=\"text\" class=\"form-control\" disabled\r\n                  id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.m2ObtainedMarks }}\">\r\n                <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C1'\" type=\"text\" class=\"form-control\" disabled\r\n                  id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.c1ObtainedMarks }}\">\r\n                <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C2'\" type=\"text\" class=\"form-control\" disabled\r\n                  id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.c2ObtainedMarks }}\">\r\n              </td>\r\n\r\n              <td class=\"tg-0pky\">\r\n                <input type=\"text\" class=\"form-control\" id=\"{{leadershipIndex}}\" disabled\r\n                  on-focusout=\"onChange1($event.target.value, leadershipIndex)\"\r\n                  value=\"{{ leadership.dRILLResult.remarks }}\">\r\n              </td>\r\n\r\n\r\n\r\n\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button mat-raised-button type=\"button\" class=\"btn-dark\" >Back</button>\r\n        <button type=\"button\" mat-raised-button >Submit</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->");

/***/ }),

/***/ "742I":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-marks/drill-marks/drill-marks.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 !important;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n  margin-bottom: 10px !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n  overflow-x: scroll;\n  display: block;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle !important;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: normal;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.t-name {\n  width: 200px !important;\n  max-width: 100% !important;\n}");

/***/ }),

/***/ "AKkw":
/*!***************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-marks/drill-marks/drill-marks.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DrillMarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrillMarksComponent", function() { return DrillMarksComponent; });
/* harmony import */ var _raw_loader_drill_marks_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./drill-marks.component.html */ "6cD/");
/* harmony import */ var _drill_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drill-marks.component.scss */ "742I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/delay-dashboard/delay-dashboard.service */ "GvGC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DrillMarksComponent = /** @class */ (function () {
    function DrillMarksComponent(fb, router, route, service, Adjservice, spinner, cdref, adminService, sharedService, delayDashboardService, localID) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.service = service;
        this.Adjservice = Adjservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.adminService = adminService;
        this.sharedService = sharedService;
        this.delayDashboardService = delayDashboardService;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.pptForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.attemtTypes = ['M1', 'M2', 'C1', 'C2'];
        this.subject = 'PPT';
        this.battalionList = [];
        this.companyList = [];
        this.battalionId = '';
        this.companyId = '';
        this.cadetList = [];
        this._static_mov = 20;
        this._quick_march = 40;
        this._reporting = 15;
        this.turn_out = 10;
        this.bearing = 15;
        this.mks_for_exellence = 10;
        this._4mtrClimg_mm = 10; // for term 3
        this.Wpn_Drill = 20;
        this.Reporting_with_Rifle = 10;
        this.Slow_March = 25;
        this.WOC = 15;
        this.Cane_Drill = 15;
        this.Sword_Drill = 15;
        this.turn_Out = 25;
        this.totalMM = this._static_mov + this._quick_march + this._reporting + this.turn_out + this.bearing + this.mks_for_exellence;
        this.hasAccess = true;
        this.battalionName = '0';
        this.pageSize = 50;
        this.currentPage = 0;
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
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
                _this.setAllMaxMarks();
                _this.setTotalMarks();
            }
            else if (_this.term == 'II Term') {
                _this.termId = 2;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
                _this.setAllMaxMarks();
                _this.setTotalMarks();
            }
            else if (_this.term == 'III Term') {
                _this.termId = 3;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
                _this.setAllMaxMarks();
                _this.setTotalMarks();
            }
            else if (_this.term == 'II Tech') {
                _this.termId = 7;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
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
            // this.getCadetsList()
            if (_this.companyName == undefined || _this.companyName == null || _this.companyName == '') {
                _this.getCadetsList();
            }
            _this.Adjservice.getBattalionList().subscribe(function (res) {
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
        });
        this.localID = localID;
    }
    DrillMarksComponent.prototype.blockPaste = function (e) {
        e.preventDefault();
    };
    DrillMarksComponent.prototype.ngOnInit = function () {
        this.getBattalionList();
    };
    DrillMarksComponent.prototype.ngAfterViewInit = function () {
        // this.getCadetsList(s)
    };
    DrillMarksComponent.prototype.setAllMaxMarks = function () {
        if (this.termId == 3) {
            this.WOC = 15;
            this.Wpn_Drill = 10;
            this.Cane_Drill = 15;
            this.Sword_Drill = 15;
            this.Slow_March = 20;
            this.turn_out = 15;
            this.bearing = 10;
        }
        if (this.termId == 2) {
            this.Wpn_Drill = 20;
            this.Reporting_with_Rifle = 10;
            this._quick_march = 20;
            this.Slow_March = 15;
            this.turn_Out = 15;
            this.bearing = 10;
        }
        if (this.termId == 7) {
            this._static_mov = 20;
            this._quick_march = 40;
            this._reporting = 10;
            this.turn_out = 15;
            this.bearing = 10;
            this.mks_for_exellence = 5;
        }
        else {
            this._static_mov = 20;
            this._quick_march = 40;
            this._reporting = 10;
            this.turn_out = 15;
            this.bearing = 5;
            this.mks_for_exellence = 10;
        }
    };
    DrillMarksComponent.prototype.setTotalMarks = function () {
        if (this.termId != 3) {
            this.totalMM = this._static_mov + this._quick_march + this._reporting + this.turn_out + this.bearing + this.mks_for_exellence;
        }
        else if (this.termId == 3) {
            this.totalMM = this.WOC + this.Wpn_Drill + this.Cane_Drill + this.Sword_Drill + this.Slow_March + this.turn_out + this.bearing;
        }
        else if (this.termId == 2) {
            this.totalMM = this.Wpn_Drill + this.Reporting_with_Rifle + this._quick_march + this.turn_Out + this.Slow_March + this.bearing;
        }
        else if (this.termId == 7) {
            this.totalMM = this._static_mov + this._quick_march + this._reporting + this.turn_out + this.bearing + this.mks_for_exellence;
        }
    };
    Object.defineProperty(DrillMarksComponent.prototype, "getAllCadetRecords", {
        get: function () {
            return this.pptForm.get('cadetRecords');
        },
        enumerable: false,
        configurable: true
    });
    DrillMarksComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        this.battalionName = e;
        this.companyName = null;
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
        this.spinner.show();
        if (this.battalionId != null || this.battalionName != '0') {
            this.Adjservice.getCompanyList(this.battalionId).subscribe(function (res) {
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
        this.companyList = [];
        this.getCadetsList();
    };
    DrillMarksComponent.prototype.companySelected = function (e) {
        this.companyName = e;
        if (this.companyName == 0) {
            console.log(this.companyName, 'e');
            this.getSpecialAllList();
            this.companyName = null;
            this.getCadetsList();
        }
        else {
            if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
                this.getCadetsList();
            }
        }
        this.getCadetsList();
    };
    DrillMarksComponent.prototype.getSpecialAllList = function () {
        var _this = this;
        this.Adjservice.getRun_All_ListByBCNameComp(this.termId, this.currentPage, this.pageSize, this.battalionName).subscribe(function (res) {
            console.log(res);
            if (res.message == 'OK') {
                _this.resultsLength = res.object.totalRecords;
                _this.cadetList = res.object.drillFilterPayload;
            }
            else {
                _this.cadetList = [];
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            // this.Adjservice.openSnackbar("Some Error Occured.");
        });
    };
    DrillMarksComponent.prototype.search = function () {
        if (this.battalion || this.company || this.serviceId) {
            this.getCadetsList();
        }
        else {
            this.sharedService.openAlertSnackbarWithSeconds("No Search Filters are Added.", 7);
        }
    };
    DrillMarksComponent.prototype.clearSearch = function () {
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
    DrillMarksComponent.prototype.getACadetRecord = function () {
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
            dRILLResult: this.fb.group({
                clearedIn: [''],
                dRILLSubjectResult: this.fb.array([]),
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
    DrillMarksComponent.prototype.addCadetRecord = function () {
        this.getAllCadetRecords.push(this.getACadetRecord());
    };
    DrillMarksComponent.prototype.getASubject = function () {
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
    DrillMarksComponent.prototype.getAllSubjects = function (index) {
        return this.getAllCadetRecords.at(index).get('dRILLResult').get('dRILLSubjectResult');
    };
    DrillMarksComponent.prototype.addSubject = function (i) {
        this.getAllSubjects(i).push(this.getASubject());
    };
    DrillMarksComponent.prototype.getBattalionList = function () {
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
    DrillMarksComponent.prototype.getCadetsList = function () {
        var _this = this;
        this.showSpinner = true;
        this.statusMsg = '';
        this.cadetList = [];
        this.spinner.show();
        if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
            this.Adjservice.getDrill_All_ListByBCName(this.termId, this.currentPage, this.pageSize, this.battalionName, this.companyName).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this.Adjservice.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.cadetList = res.object.drillFilterPayload;
                    if (res.object.drillFilterPayload.length > 0) {
                        _this.resultsLength = res.object.totalRecords;
                        _this.cadetList = res.object.drillFilterPayload;
                    }
                    else {
                        _this.cadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.cadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.Adjservice.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.Adjservice.getDrillAllCadetlist(this.termId, this.currentPage, this.pageSize).subscribe(function (res) {
                console.log(res);
                // let i = 0; //was using this for formarray
                if (res.status == "OK") {
                    if (res.object) {
                        res.object.drillFilterPayload.forEach(function (el) {
                            // this.addCadetRecord(); //was using this for formarray
                            var static_mov = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName == "Static Mov") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this._static_mov));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var quick_march = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Quick March") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this._quick_march));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var rerporting = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Reporting") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this._reporting));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var turn_out = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Turn Out") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.turn_out));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var bearing = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Bearing") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.bearing));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var mks_for_excellence = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Mks for Excellence") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.mks_for_exellence));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var Wpn_Drill = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Wpn Drill") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.Wpn_Drill));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var Reporting_with_Rifle = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Reporting with Rifle") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.Reporting_with_Rifle));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var _quick_march = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Quick March") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this._quick_march));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            var Slow_March = el.dRILLResult.dRILLSubjectResult.find(function (sub) {
                                if (sub.subjectName === "Slow March") {
                                    Object.assign(sub, _this.getSubjectRecord(sub, _this.Slow_March));
                                    delete sub.createdAt;
                                    delete sub.updatedAt;
                                    return sub;
                                }
                            });
                            // let subjArr = [static_mov, quick_march, rerporting, turn_out, bearing, mks_for_excellence, ];
                            if (_this.termId == 1) {
                                _this.subjArr = [static_mov, quick_march, rerporting, turn_out, bearing, mks_for_excellence,];
                            }
                            if (_this.termId == 7) {
                                _this.subjArr = [static_mov, quick_march, rerporting, turn_out, bearing, mks_for_excellence,];
                            }
                            if (_this.termId == 2) {
                                _this.subjArr = [Wpn_Drill, Reporting_with_Rifle, quick_march, Slow_March, turn_out, bearing,];
                            }
                            // if (this.termId == 3) {
                            //   subjArr.push(_4mtrClimg)
                            // }
                            var ptTotal = 0;
                            _this.subjArr.forEach(function (el) {
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
                                dRILLResult: {
                                    clearedIn: el.dRILLResult.clearedIn,
                                    dRILLSubjectResult: _this.subjArr,
                                    id: el.dRILLResult.id,
                                    obtainedMarks: ptTotal,
                                    remarks: el.dRILLResult.remarks,
                                    serviceId: el.dRILLResult.serviceId,
                                    status: el.dRILLResult.status,
                                    subjectType: 'DRILL MARKS',
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
        }
        console.log(this.cadetList);
    };
    DrillMarksComponent.prototype.getSubjectRecord = function (sub, maxMarks) {
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
            subjectType: 'DRILL MARKS',
            termId: sub.termId,
            totalMarks: maxMarks,
        };
        return subject;
    };
    DrillMarksComponent.prototype.onlyNum = function (event) {
        var pattern = /^[0-9]*$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    DrillMarksComponent.prototype.serviceSearch = function (e) {
        this.serviceid = e;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this.getCadetsList();
        }
    };
    DrillMarksComponent.prototype.edSearch = function (event) {
        var _this = this;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this.Adjservice.openSnackbar("Search Bar is Empty. Please fill the details");
        }
        else {
            this.Adjservice.searchDRILL(this.termId, this.serviceid, this.currentPage, this.pageSize).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this.Adjservice.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.cadetList = res.object.drillFilterPayload;
                    if (res.object.drillFilterPayload.length > 0) {
                        _this.resultsLength = res.object.totalRecords;
                        _this.cadetList = res.object.drillFilterPayload;
                    }
                    else {
                        _this.cadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.cadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.Adjservice.openSnackbar("Some Error Occured.");
            });
        }
    };
    DrillMarksComponent.prototype.patchNumbers = function (event, obj, i, j, type) {
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
                            obj.resultGrade = 'Failed';
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
                            obj.resultGrade = 'Failed';
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
                            obj.resultGrade = 'Failed';
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
                            obj.resultGrade = 'Failed';
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
                            obj.resultGrade = 'Failed';
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
                            obj.resultGrade = 'Failed';
                        }
                    }
                    if (obj.subjectName == '2nd CL Rope (4 Mtr Climb)') {
                        if (value == 10) {
                            obj.resultGrade = 'Pass';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                }
                this.calculateMarks(i);
            }
            else {
                this.cadetList[i].dRILLResult.dRILLSubjectResult[j].resultGrade = '';
                this.calculateMarks(i);
            }
        }
    };
    DrillMarksComponent.prototype.calculateMarks = function (i) {
        var ptTotal = 0;
        this.cadetList[i].dRILLResult.dRILLSubjectResult.forEach(function (el) {
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
        this.cadetList[i].dRILLResult.ptTotalMarks = ptTotal;
        this.cadetList[i].dRILLResult.obtainedMarks = ptTotal;
    };
    DrillMarksComponent.prototype.submitResult = function () {
        var _this = this;
        console.log(this.cadetList);
        this.spinner.show();
        this.Adjservice.updateDrillCadet(this.cadetList).subscribe(function (res) {
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
    DrillMarksComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_6__["AdjutantService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
        { type: app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DelayDashboardService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
    ]; };
    DrillMarksComponent.propDecorators = {
        blockPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['paste', ['$event'],] }]
    };
    DrillMarksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-drill-marks',
            template: _raw_loader_drill_marks_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_drill_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"], app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_6__["AdjutantService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
            app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DelayDashboardService"], String])
    ], DrillMarksComponent);
    return DrillMarksComponent;
}());



/***/ }),

/***/ "KP26":
/*!************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-marks/drill-marks/drill-marks.module.ts ***!
  \************************************************************************************/
/*! exports provided: DrillMarksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrillMarksModule", function() { return DrillMarksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _drill_marks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drill-marks.component */ "AKkw");
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
        component: _drill_marks_component__WEBPACK_IMPORTED_MODULE_4__["DrillMarksComponent"]
    },
    {
        path: 'add-drill-marks',
        loadChildren: function () { return __webpack_require__.e(/*! import() | drill-marks-add-drill-marks-add-drill-marks-module */ "drill-marks-add-drill-marks-add-drill-marks-module").then(__webpack_require__.bind(null, /*! ../drill-marks/add-drill-marks/add-drill-marks.module */ "nZKx")).then(function (m) { return m.AddDrillMarksModule; }); }
    },
    {
        path: 'view-drill-marks',
        loadChildren: function () { return __webpack_require__.e(/*! import() | drill-marks-add-drill-marks-add-drill-marks-module */ "drill-marks-add-drill-marks-add-drill-marks-module").then(__webpack_require__.bind(null, /*! ../drill-marks/add-drill-marks/add-drill-marks.module */ "nZKx")).then(function (m) { return m.AddDrillMarksModule; }); }
    }
];
var DrillMarksModule = /** @class */ (function () {
    function DrillMarksModule() {
    }
    DrillMarksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _drill_marks_component__WEBPACK_IMPORTED_MODULE_4__["DrillMarksComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], DrillMarksModule);
    return DrillMarksModule;
}());



/***/ }),

/***/ "LFpR":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/drill-competition/drill-marks/drill-marks.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 !important;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n  margin-bottom: 10px !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n  overflow-x: scroll;\n  display: block;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle !important;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: normal;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.t-name {\n  width: 200px !important;\n  max-width: 100% !important;\n}");

/***/ }),

/***/ "OehN":
/*!***************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/drill-marks/drill-marks.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DrillMarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrillMarksComponent", function() { return DrillMarksComponent; });
/* harmony import */ var _raw_loader_drill_marks_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./drill-marks.component.html */ "5jm/");
/* harmony import */ var _drill_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drill-marks.component.scss */ "3fJi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DrillMarksComponent = /** @class */ (function () {
    function DrillMarksComponent(dialog, spinner, route, fb, router, adminservice, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.drillMarkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.pageTitle = "Add Campmark";
        this.id = '';
        this.drillMarkForm = this.fb.group({
            serialNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalian: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termSession: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            // cadetRank: ['', Validators.required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    DrillMarksComponent.prototype.ngOnInit = function () {
    };
    DrillMarksComponent.prototype.onChangesubmit = function (value) {
        this.value = value;
    };
    DrillMarksComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.value);
        this.servceId = this.value;
        console.log(this.servceId);
        if (this.servceId == undefined) {
            this.adminservice.openSnackbar("Please Enter IMA.No");
        }
        else {
            this.adminservice.getCampMarks(this.servceId).subscribe(function (res) {
                console.log(res);
                if (res.message == 'OK') {
                    _this.spinner.hide();
                    _this.drillMarkForm.patchValue({
                        serialNo: res.object.serialNo,
                        battalian: res.object.battalian,
                        company: res.object.company,
                        termSession: res.object.termSession,
                        year: res.object.year,
                        course: res.object.course,
                        cadetRank: res.object.cadetRank,
                        username: res.object.name,
                        term: res.object.term,
                    });
                    _this.termid = res.object.term;
                    _this.spinner.hide();
                }
                else if (res.message == 'Record not found') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.drillMarkForm.reset();
                    _this.spinner.hide();
                }
                (function (err) {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar("Some Error Occured.");
                });
            });
        }
    };
    DrillMarksComponent.prototype.next = function () {
        if (this.router.url.includes('adjutant-branch'))
            this.router.navigate(['/main/adjutant-branch/general-instruction/drill-competition/drill-marks/add-drill-marks'], { queryParams: { id: this.value, termid: this.termid } });
        if (this.router.url.includes('admin'))
            this.router.navigate(['/main/adjutant-branch/general-instruction/drill-competition/drill-marks/add-drill-marks'], { queryParams: { id: this.value, termid: this.termid } });
    };
    DrillMarksComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    DrillMarksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-drill-marks',
            template: _raw_loader_drill_marks_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_drill_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], DrillMarksComponent);
    return DrillMarksComponent;
}());



/***/ }),

/***/ "XdfC":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/adjutant-gi/drill-competition/drill-marks/drill-marks.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"mat-heading\">\r\n      <div id=\"top-bar\" class=\"\">\r\n        <h2>ADJUTANT BRANCH <span class=\"sub-menu1\">\r\n            > General Instruction > Drill Competition > {{term}} > Drill Marks</span></h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"academics\">\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n        <!-- <div class=\"ng-star-inserted\">\r\n          <div class=\"mat-new mb-4\">\r\n            <h4 class=\"card-heading\">Drill Marks > {{term}} > {{type}}</h4>\r\n          </div>\r\n        </div>-->\r\n        <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"battalion\">Battalion</label>\r\n              <select id=\"battalion\" name=\"battalion\" (change)=\"battalionSelected($event.target.value)\"\r\n                class=\"form-control\">\r\n                <option value=\"0\" selected>Select</option>\r\n                <option *ngFor=\"let b of battalionList\" [value]=\"b.shortName\"> {{b.shortName}}</option>\r\n              </select>\r\n\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"company\">Company</label>\r\n              <select id=\"company\" class=\"form-control\" name=\"company\" (change)=\"companySelected($event.target.value)\">\r\n                <option value=\"0\" selected>Select</option>\r\n                <option *ngFor=\"let c of companyList\" [value]=\"c.name\"> {{c.name}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Search</label>\r\n                <input placeholder=\"IMA No.\" formcontrolname=\"\" type=\"text\" name=\"serviceid\" [(ngModel)]=\"serviceid\"\r\n                  (keyup)=\"serviceSearch($event.target.value)\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <label>&nbsp;</label>\r\n              <button type=\"button\" mat-raised-button (click)=\"edSearch()\">Search</button>\r\n              <!-- <button mat-raised-button (click)=\"clearSearch()\" >Clear</button> -->\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <!-- <form class=\"oq-matrix-form\"> -->\r\n        <div *ngIf=\"termId==1\">\r\n          <table class=\"tg\" *ngIf=\"cadetList.length\">\r\n            <thead class=\"table-head\" id=\"table-header\">\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Rank</th>\r\n                <th class=\"tg-qnnc t-name\" rowspan=\"2\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Course</th>\r\n\r\n\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Static Mov (MM-{{_static_mov}}) </th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Quick March (MM-{{_quick_march}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Reporting (MM-{{_reporting}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Turn Out (MM-{{turn_out}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Bearing (MM-{{bearing}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Mks For Exellence (MM-{{mks_for_exellence}})</th>\r\n                <!-- <th *ngIf=\"termId==3\" class=\"tg-qnnc\" colspan=\"3\"> Mks for Excellence<sup>nd</sup> CL Rope (4 Mtr Climb) (MM-{{_4mtrClimg_mm}})</th> -->\r\n\r\n                <th class=\"tg-qnnc\">Total (MM-{{totalMM}})</th>\r\n\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <th>KHALI HATH</th>\r\n\r\n                <!-- <th *ngIf=\"termId==3\">Attempt Type</th>\r\n                      <th *ngIf=\"termId==3\">Obtained Marks</th>\r\n                      <th *ngIf=\"termId==3\">Grade</th> -->\r\n\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            <tbody *ngIf=\"cadetList.length\">\r\n              <tr *ngFor=\"let cadet of cadetList;let i=index\">\r\n                <td> {{i+1}} </td>\r\n                <td> {{cadet.serviceId}} </td>\r\n                <td>\r\n                  <span *ngIf=\"cadet.nationality == 'India'\">GC</span>\r\n                  <span *ngIf=\"cadet.nationality != 'India'\">FGC</span>\r\n                </td>\r\n                <td class=\"t-name\"> {{cadet.name}} </td>\r\n                <td> {{cadet.course}} </td>\r\n\r\n                <ng-container *ngFor=\"let sub of cadet.dRILLResult.dRILLSubjectResult;let j=index\">\r\n                  <td>\r\n                    <span *ngIf=\"!hasAccess\"> {{sub.lastAttemptType}} </span>\r\n                    <select *ngIf=\"hasAccess\" id=\"company\" class=\"form-control\" [(ngModel)]=\"sub.lastAttemptType\">\r\n                      <option value=\"\" selected hidden disabled>--</option>\r\n                      <!-- <option *ngFor=\"let att of attemtTypes\" [value]=\"att\"> {{att}}</option> -->\r\n                      <option value=\"M1\">M1</option>\r\n                      <option [disabled]=\"!sub.m1ObtainedMarks\" value=\"M2\">M2</option>\r\n                      <option [disabled]=\"!sub.m2ObtainedMarks\" value=\"C1\">C1</option>\r\n                      <option [disabled]=\"!sub.c1ObtainedMarks\" value=\"C2\">C2</option>\r\n                    </select>\r\n                  </td>\r\n                  <td>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M1' && !hasAccess \"> {{sub.m1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M2' && !hasAccess \"> {{sub.m2ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C1' && !hasAccess \"> {{sub.c1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C2' && !hasAccess \"> {{sub.c2ObtainedMarks}} </span>\r\n\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M1' && hasAccess \" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m2ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C1' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c2ObtainedMarks\">\r\n                  </td>\r\n                  <!-- <td>\r\n                              <span *ngIf=\"sub.resultGrade\">\r\n                                  {{sub.resultGrade}}\r\n                              </span>\r\n                          </td> -->\r\n\r\n                </ng-container>\r\n\r\n                <td>\r\n                  <span *ngIf=\"cadet.dRILLResult.ptTotalMarks\">\r\n                    {{cadet.dRILLResult.ptTotalMarks}}\r\n                  </span>\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <br>\r\n        <div *ngIf=\"termId==7\">\r\n          <table class=\"tg\" *ngIf=\"cadetList.length\">\r\n            <thead class=\"table-head\" id=\"table-header\">\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Rank</th>\r\n                <th class=\"tg-qnnc t-name\" rowspan=\"2\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Course</th>\r\n\r\n\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Static Mov (MM-{{_static_mov}}) </th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Quick March (MM-{{_quick_march}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Reporting (MM-{{_reporting}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Turn Out (MM-{{turn_out}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Bearing (MM-{{bearing}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Mks For Exellence (MM-{{mks_for_exellence}})</th>\r\n                <!-- <th *ngIf=\"termId==3\" class=\"tg-qnnc\" colspan=\"3\"> Mks for Excellence<sup>nd</sup> CL Rope (4 Mtr Climb) (MM-{{_4mtrClimg_mm}})</th> -->\r\n\r\n                <th class=\"tg-qnnc\">Total (MM-{{totalMM}})</th>\r\n\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <th>KHALI HATH</th>\r\n\r\n                <!-- <th *ngIf=\"termId==3\">Attempt Type</th>\r\n                      <th *ngIf=\"termId==3\">Obtained Marks</th>\r\n                      <th *ngIf=\"termId==3\">Grade</th> -->\r\n\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            <tbody *ngIf=\"cadetList.length\">\r\n              <tr *ngFor=\"let cadet of cadetList;let i=index\">\r\n                <td> {{i+1}} </td>\r\n                <td> {{cadet.serviceId}} </td>\r\n                <td>\r\n                  <span *ngIf=\"cadet.nationality == 'India'\">GC</span>\r\n                  <span *ngIf=\"cadet.nationality != 'India'\">FGC</span>\r\n                </td>\r\n                <td class=\"t-name\"> {{cadet.name}} </td>\r\n                <td> {{cadet.course}} </td>\r\n\r\n                <ng-container *ngFor=\"let sub of cadet.dRILLResult.dRILLSubjectResult;let j=index\">\r\n                  <td>\r\n                    <span *ngIf=\"!hasAccess\"> {{sub.lastAttemptType}} </span>\r\n                    <select *ngIf=\"hasAccess\" id=\"company\" class=\"form-control\" [(ngModel)]=\"sub.lastAttemptType\">\r\n                      <option value=\"\" selected hidden disabled>--</option>\r\n                      <!-- <option *ngFor=\"let att of attemtTypes\" [value]=\"att\"> {{att}}</option> -->\r\n                      <option value=\"M1\">M1</option>\r\n                      <option [disabled]=\"!sub.m1ObtainedMarks\" value=\"M2\">M2</option>\r\n                      <option [disabled]=\"!sub.m2ObtainedMarks\" value=\"C1\">C1</option>\r\n                      <option [disabled]=\"!sub.c1ObtainedMarks\" value=\"C2\">C2</option>\r\n                    </select>\r\n                  </td>\r\n                  <td>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M1' && !hasAccess \"> {{sub.m1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M2' && !hasAccess \"> {{sub.m2ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C1' && !hasAccess \"> {{sub.c1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C2' && !hasAccess \"> {{sub.c2ObtainedMarks}} </span>\r\n\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M1' && hasAccess \" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m2ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C1' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c2ObtainedMarks\">\r\n                  </td>\r\n                  <!-- <td>\r\n                              <span *ngIf=\"sub.resultGrade\">\r\n                                  {{sub.resultGrade}}\r\n                              </span>\r\n                          </td> -->\r\n\r\n                </ng-container>\r\n\r\n                <td>\r\n                  <span *ngIf=\"cadet.dRILLResult.ptTotalMarks\">\r\n                    {{cadet.dRILLResult.ptTotalMarks}}\r\n                  </span>\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <div *ngIf=\"termId==2\">\r\n          <table class=\"tg\" *ngIf=\"cadetList.length\">\r\n            <thead class=\"table-head\" id=\"table-header\">\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Rank</th>\r\n                <th class=\"tg-qnnc t-name\" rowspan=\"2\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Course</th>\r\n\r\n\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Wpn Drill (MM-{{Wpn_Drill}}) </th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Reporting with Rifle (MM-{{Reporting_with_Rifle}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Quick March (MM-{{_quick_march}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Slow March (MM-{{Slow_March}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Turn Out (MM-{{turn_Out}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Bearing (MM-{{bearing}})</th>\r\n                <!-- <th *ngIf=\"termId==3\" class=\"tg-qnnc\" colspan=\"3\"> Mks for Excellence<sup>nd</sup> CL Rope (4 Mtr Climb) (MM-{{_4mtrClimg_mm}})</th> -->\r\n\r\n                <th class=\"tg-qnnc\">Total (MM-{{totalMM}})</th>\r\n\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <th>RIFLE DRILL</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <!-- <th *ngIf=\"termId==3\">Attempt Type</th>\r\n                      <th *ngIf=\"termId==3\">Obtained Marks</th>\r\n                      <th *ngIf=\"termId==3\">Grade</th> -->\r\n\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            <tbody *ngIf=\"cadetList.length\">\r\n              <tr *ngFor=\"let cadet of cadetList;let i=index\">\r\n                <td> {{i+1}} </td>\r\n                <td> {{cadet.serviceId}} </td>\r\n                <td>\r\n                  <span *ngIf=\"cadet.nationality == 'India'\">GC</span>\r\n                  <span *ngIf=\"cadet.nationality != 'India'\">FGC</span>\r\n                </td>\r\n                <td class=\"t-name\"> {{cadet.name}} </td>\r\n                <td> {{cadet.course}} </td>\r\n\r\n                <ng-container *ngFor=\"let sub of cadet.dRILLResult.dRILLSubjectResult;let j=index\">\r\n                  <td>\r\n                    <span *ngIf=\"!hasAccess\"> {{sub.lastAttemptType}} </span>\r\n                    <select *ngIf=\"hasAccess\" id=\"company\" class=\"form-control\" [(ngModel)]=\"sub.lastAttemptType\">\r\n                      <option value=\"\" selected hidden disabled>--</option>\r\n                      <!-- <option *ngFor=\"let att of attemtTypes\" [value]=\"att\"> {{att}}</option> -->\r\n                      <option value=\"M1\">M1</option>\r\n                      <option [disabled]=\"!sub.m1ObtainedMarks\" value=\"M2\">M2</option>\r\n                      <option [disabled]=\"!sub.m2ObtainedMarks\" value=\"C1\">C1</option>\r\n                      <option [disabled]=\"!sub.c1ObtainedMarks\" value=\"C2\">C2</option>\r\n                    </select>\r\n                  </td>\r\n                  <td>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M1' && !hasAccess \"> {{sub.m1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M2' && !hasAccess \"> {{sub.m2ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C1' && !hasAccess \"> {{sub.c1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C2' && !hasAccess \"> {{sub.c2ObtainedMarks}} </span>\r\n\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M1' && hasAccess \" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m2ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C1' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c2ObtainedMarks\">\r\n                  </td>\r\n                  <!-- <td>\r\n                              <span *ngIf=\"sub.resultGrade\">\r\n                                  {{sub.resultGrade}}\r\n                              </span>\r\n                          </td> -->\r\n\r\n                </ng-container>\r\n\r\n                <td>\r\n                  <span *ngIf=\"cadet.dRILLResult.ptTotalMarks\">\r\n                    {{cadet.dRILLResult.ptTotalMarks}}\r\n                  </span>\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <br>\r\n        <div *ngIf=\"termId==8\">\r\n          <table class=\"tg\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Attempt Type</th>\r\n                <th class=\"tg-qnnc\" colspan=\"8\">Rifle drill</th>\r\n              </tr>\r\n              <tr>\r\n                <th colspan=\"1\" style=\"width: 11%;\" *ngFor=\"let subject of drillSubjectList\" class=\"tg-qnnc\">\r\n                  {{subject.subjectName}}<br>Marks\r\n                  ({{subject.totalMarks}})</th>\r\n\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Total </th>\r\n                <th class=\"tg-qnnc\">GRADING</th>\r\n\r\n              </tr>\r\n\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let leadership of drillCadetList; let leadershipIndex = index\">\r\n                <td class=\"tg-c3ow\">{{ leadershipIndex + 1}}</td>\r\n                <td class=\"tg-c3ow\">{{ leadership.serviceId }}</td>\r\n                <td class=\"tg-0pky\">{{ leadership.course }}</td>\r\n                <td class=\"tg-c3ow\">{{ leadership.name }}</td>\r\n                <!-- <td class=\"tg-0pky\">{{ leadership.nationality }}</td> -->\r\n                <td class=\"tg-c3ow\">\r\n                  <p *ngIf=\"leadership.nationality=='India'\">GC</p>\r\n                  <p *ngIf=\"leadership.nationality !='India'\">FGC</p>\r\n                </td>\r\n                <ng-container\r\n                  *ngFor=\"let leadershipSubject of leadership.dRILLResult.dRILLSubjectResult; let leadershipSubjectIndex = index\">\r\n                  <td *ngIf=\"leadershipSubjectIndex==0\">\r\n                    <select id=\"company\" class=\"form-control\"\r\n                      (change)=\"attemptClear($event.target.value, leadershipIndex, leadershipSubjectIndex)\">\r\n                      <option value=\"\">Select</option>\r\n                      <option *ngFor=\"let att of attemtTypes\" [selected]=\"leadership.dRILLResult.clearedIn == att\"\r\n                        [value]=\"att\"> {{att}}</option>\r\n                    </select>\r\n                  </td>\r\n                  <td class=\"tg-c3ow\">\r\n                    <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M1'\" type=\"text\" class=\"form-control d-inline\"\r\n                      value=\"{{leadershipSubject.m1ObtainedMarks}}\"\r\n                      (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" min=\"0\" (keypress)=\"keyPress($event)\"\r\n                      on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                    <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M2'\" type=\"text\" class=\"form-control d-inline\"\r\n                      value=\"{{leadershipSubject.m2ObtainedMarks}}\"\r\n                      (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" min=\"0\" (keypress)=\"keyPress($event)\"\r\n                      on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                    <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C1'\" type=\"text\" class=\"form-control d-inline\"\r\n                      value=\"{{leadershipSubject.c1ObtainedMarks}}\"\r\n                      (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" min=\"0\" (keypress)=\"keyPress($event)\"\r\n                      on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                    <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C2'\" type=\"text\" class=\"form-control d-inline\"\r\n                      value=\"{{leadershipSubject.c2ObtainedMarks}}\"\r\n                      (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" min=\"0\" (keypress)=\"keyPress($event)\"\r\n                      on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                  </td>\r\n                </ng-container>\r\n\r\n                <td class=\"tg-0pky\">\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M1'\" type=\"text\" class=\"form-control\" disabled\r\n                    id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.m1ObtainedMarks }}\">\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M2'\" type=\"text\" class=\"form-control\" disabled\r\n                    id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.m2ObtainedMarks }}\">\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C1'\" type=\"text\" class=\"form-control\" disabled\r\n                    id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.c1ObtainedMarks }}\">\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C2'\" type=\"text\" class=\"form-control\" disabled\r\n                    id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.c2ObtainedMarks }}\">\r\n                </td>\r\n\r\n                <td class=\"tg-0pky\">\r\n                  <input type=\"text\" class=\"form-control\" id=\"{{leadershipIndex}}\"\r\n                    value=\"{{ leadership.dRILLResult.remarks }}\">\r\n                </td>\r\n\r\n\r\n              </tr>\r\n              <tr>\r\n                <td class=\"mat-cell\" style=\"text-align: center;\" *ngIf=\"! drillCadetList?.length\" colspan=\"14\">\r\n                  <div>No Record Found</div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <br>\r\n\r\n        <div *ngIf=\"termId==3\">\r\n          <table class=\"tg\" *ngIf=\"cadetList.length\">\r\n            <thead class=\"table-head\" id=\"table-header\">\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Rank</th>\r\n                <th class=\"tg-qnnc t-name\" rowspan=\"2\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"2\">Course</th>\r\n\r\n\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Wpn Drill (MM-{{Wpn_Drill}}) </th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Reporting with Rifle (MM-{{Reporting_with_Rifle}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Quick March (MM-{{_quick_march}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Slow March (MM-{{turn_out}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Turn Out (MM-{{Slow_March}})</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Bearing (MM-{{bearing}})</th>\r\n                <!-- <th *ngIf=\"termId==3\" class=\"tg-qnnc\" colspan=\"3\"> Mks for Excellence<sup>nd</sup> CL Rope (4 Mtr Climb) (MM-{{_4mtrClimg_mm}})</th> -->\r\n\r\n                <th class=\"tg-qnnc\">Total (MM-{{totalMM}})</th>\r\n\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <th>Attempt Type</th>\r\n                <th>Obtained Marks</th>\r\n                <th>DAT</th>\r\n                <!-- <th>Grade</th> -->\r\n\r\n                <!-- <th *ngIf=\"termId==3\">Attempt Type</th>\r\n                      <th *ngIf=\"termId==3\">Obtained Marks</th>\r\n                      <th *ngIf=\"termId==3\">Grade</th> -->\r\n\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            <tbody *ngIf=\"cadetList.length\">\r\n              <tr *ngFor=\"let cadet of cadetList;let i=index\">\r\n                <td> {{i+1}} </td>\r\n                <td> {{cadet.serviceId}} </td>\r\n                <td>\r\n                  <span *ngIf=\"cadet.nationality == 'India'\">GC</span>\r\n                  <span *ngIf=\"cadet.nationality != 'India'\">FGC</span>\r\n                </td>\r\n                <td class=\"t-name\"> {{cadet.name}} </td>\r\n                <td> {{cadet.course}} </td>\r\n\r\n                <ng-container *ngFor=\"let sub of cadet.dRILLResult.dRILLSubjectResult;let j=index\">\r\n                  <td>\r\n                    <span *ngIf=\"!hasAccess\"> {{sub.lastAttemptType}} </span>\r\n                    <select *ngIf=\"hasAccess\" id=\"company\" class=\"form-control\" [(ngModel)]=\"sub.lastAttemptType\">\r\n                      <option value=\"\" selected hidden disabled>--</option>\r\n                      <!-- <option *ngFor=\"let att of attemtTypes\" [value]=\"att\"> {{att}}</option> -->\r\n                      <option value=\"M1\">M1</option>\r\n                      <option [disabled]=\"!sub.m1ObtainedMarks\" value=\"M2\">M2</option>\r\n                      <option [disabled]=\"!sub.m2ObtainedMarks\" value=\"C1\">C1</option>\r\n                      <option [disabled]=\"!sub.c1ObtainedMarks\" value=\"C2\">C2</option>\r\n                    </select>\r\n                  </td>\r\n                  <td>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M1' && !hasAccess \"> {{sub.m1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'M2' && !hasAccess \"> {{sub.m2ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C1' && !hasAccess \"> {{sub.c1ObtainedMarks}} </span>\r\n                    <span *ngIf=\"sub.lastAttemptType == 'C2' && !hasAccess \"> {{sub.c2ObtainedMarks}} </span>\r\n\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M1' && hasAccess \" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'M2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'M2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.m2ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C1' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C1')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c1ObtainedMarks\">\r\n                    <input *ngIf=\"sub.lastAttemptType == 'C2' && hasAccess\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchNumbers($event,sub,i,j,'C2')\" maxlength=\"2\" name=\"\" id=\"\" class=\"form-control\"\r\n                      [(ngModel)]=\"sub.c2ObtainedMarks\">\r\n                  </td>\r\n                  <!-- <td>\r\n                              <span *ngIf=\"sub.resultGrade\">\r\n                                  {{sub.resultGrade}}\r\n                              </span>\r\n                          </td> -->\r\n\r\n                </ng-container>\r\n\r\n                <td>\r\n                  <span *ngIf=\"cadet.dRILLResult.ptTotalMarks\">\r\n                    {{cadet.dRILLResult.ptTotalMarks}}\r\n                  </span>\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <!-- </form> -->\r\n\r\n        <div class=\"\">\r\n          <!-- <mat-paginator #myPaginator [length]=\"resultsLength\" [pageSizeOptions]=\"[30]\"  showFirstLastButtons>\r\n                    </mat-paginator> -->\r\n        \r\n          <div class=\"text-center\" *ngIf=\"!cadetList.length \" >\r\n            <h5> No Record Found</h5> \r\n        </div>\r\n        \r\n          <div class=\"btn-sec mt-3 text-right\">\r\n            <div class=\"mb-4 pull-right\" *ngIf=\"hasAccess\">\r\n              <button mat-raised-button (click)=\"submitResult()\" [disabled]=\"!cadetList.length\">\r\n                Submit\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <mat-paginator #myPaginator [length]=\"resultsLength\" [pageIndex]=\"currentPage\" [pageSize]=\"pageSize\"\r\n            aria-label=\"Select page\" showFirstLastButtons>\r\n          </mat-paginator>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayStyle}\">\r\n  <div class=\"modal-dialog modal-lg modal-dialog-scrollable custom-lg\" role=\"document\">\r\n    <div class=\"modal-content p-3\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Review</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <table class=\"tg\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Attempt Type</th>\r\n              <th class=\"tg-qnnc\" colspan=\"8\"></th>\r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"1\" style=\"width: 11%;\" *ngFor=\"let subject of drillSubjectList\" class=\"tg-qnnc\">\r\n                {{subject.subjectName}}<br>Marks\r\n                ({{subject.totalMarks}})</th>\r\n\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Total </th>\r\n              <th class=\"tg-qnnc\">GRADING</th>\r\n\r\n            </tr>\r\n\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let leadership of drillCadetList; let leadershipIndex = index\">\r\n              <td class=\"tg-c3ow\">{{ leadershipIndex + 1}}</td>\r\n              <td class=\"tg-c3ow\">{{ leadership.serviceId }}</td>\r\n              <td class=\"tg-0pky\">{{ leadership.course }}</td>\r\n              <td class=\"tg-c3ow\">{{ leadership.name }}</td>\r\n              <td class=\"tg-c3ow\">\r\n                <p *ngIf=\"leadership.nationality=='India'\">GC</p>\r\n                <p *ngIf=\"leadership.nationality !='India'\">FGC</p>\r\n              </td>\r\n\r\n              <ng-container\r\n                *ngFor=\"let leadershipSubject of leadership.dRILLResult.dRILLSubjectResult; let leadershipSubjectIndex = index\">\r\n                <td *ngIf=\"leadershipSubjectIndex==0\">\r\n                  <select id=\"company\" class=\"form-control\" disabled\r\n                    (change)=\"attemptClear($event.target.value, leadershipIndex, leadershipSubjectIndex)\">\r\n                    <option value=\"\">Select</option>\r\n                    <option *ngFor=\"let att of attemtTypes\" [selected]=\"leadership.dRILLResult.clearedIn == att\"\r\n                      [value]=\"att\"> {{att}}</option>\r\n                  </select>\r\n                </td>\r\n                <td class=\"tg-c3ow\">\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M1'\" disabled type=\"text\"\r\n                    class=\"form-control d-inline\" value=\"{{leadershipSubject.m1ObtainedMarks}}\"\r\n                    (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" (keypress)=\"keyPress($event)\"\r\n                    [max]=\"leadershipSubject.totalMarks\"\r\n                    on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M2'\" disabled type=\"text\"\r\n                    class=\"form-control d-inline\" value=\"{{leadershipSubject.m2ObtainedMarks}}\"\r\n                    (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" min=\"0\" (keypress)=\"keyPress($event)\"\r\n                    on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C1'\" disabled type=\"text\"\r\n                    class=\"form-control d-inline\" value=\"{{leadershipSubject.c1ObtainedMarks}}\"\r\n                    (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" min=\"0\" (keypress)=\"keyPress($event)\"\r\n                    on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                  <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C2'\" disabled type=\"text\"\r\n                    class=\"form-control d-inline\" value=\"{{leadershipSubject.c2ObtainedMarks}}\"\r\n                    (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" min=\"0\" (keypress)=\"keyPress($event)\"\r\n                    on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                </td>\r\n              </ng-container>\r\n\r\n\r\n              <td class=\"tg-0pky\">\r\n                <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M1'\" type=\"text\" class=\"form-control\" disabled\r\n                  id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.m1ObtainedMarks }}\">\r\n                <input *ngIf=\"leadership.dRILLResult.clearedIn == 'M2'\" type=\"text\" class=\"form-control\" disabled\r\n                  id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.m2ObtainedMarks }}\">\r\n                <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C1'\" type=\"text\" class=\"form-control\" disabled\r\n                  id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.c1ObtainedMarks }}\">\r\n                <input *ngIf=\"leadership.dRILLResult.clearedIn == 'C2'\" type=\"text\" class=\"form-control\" disabled\r\n                  id=\"{{leadershipIndex}}\" value=\"{{ leadership.dRILLResult.c2ObtainedMarks }}\">\r\n              </td>\r\n\r\n              <td class=\"tg-0pky\">\r\n                <input type=\"text\" class=\"form-control\" id=\"{{leadershipIndex}}\" disabled\r\n                  on-focusout=\"onChange1($event.target.value, leadershipIndex)\"\r\n                  value=\"{{ leadership.dRILLResult.remarks }}\">\r\n              </td>\r\n\r\n\r\n\r\n\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button mat-raised-button type=\"button\" class=\"btn-dark\" >Back</button>\r\n        <button type=\"button\" mat-raised-button >Submit</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->");

/***/ }),

/***/ "ZS29":
/*!************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-marks/drill-marks.module.ts ***!
  \************************************************************************/
/*! exports provided: DrillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrillModule", function() { return DrillModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _drill_marks_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drill-marks.routes */ "3gfW");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DrillModule = /** @class */ (function () {
    function DrillModule() {
    }
    DrillModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_drill_marks_routes__WEBPACK_IMPORTED_MODULE_3__["DRILL_MARKS_ROUTES"]),
            ]
        })
    ], DrillModule);
    return DrillModule;
}());



/***/ }),

/***/ "hh8I":
/*!************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/drill-marks/drill-marks.module.ts ***!
  \************************************************************************************/
/*! exports provided: DrillMarksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrillMarksModule", function() { return DrillMarksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _drill_marks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drill-marks.component */ "OehN");
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
        component: _drill_marks_component__WEBPACK_IMPORTED_MODULE_4__["DrillMarksComponent"]
    },
    {
        path: 'add-drill-marks',
        loadChildren: function () { return __webpack_require__.e(/*! import() | drill-marks-add-drill-marks-add-drill-marks-module */ "drill-marks-add-drill-marks-add-drill-marks-module").then(__webpack_require__.bind(null, /*! ../drill-marks/add-drill-marks/add-drill-marks.module */ "bTxH")).then(function (m) { return m.AddDrillMarksModule; }); }
    },
    {
        path: 'view-drill-marks',
        loadChildren: function () { return __webpack_require__.e(/*! import() | drill-marks-add-drill-marks-add-drill-marks-module */ "drill-marks-add-drill-marks-add-drill-marks-module").then(__webpack_require__.bind(null, /*! ../drill-marks/add-drill-marks/add-drill-marks.module */ "bTxH")).then(function (m) { return m.AddDrillMarksModule; }); }
    }
];
var DrillMarksModule = /** @class */ (function () {
    function DrillMarksModule() {
    }
    DrillMarksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _drill_marks_component__WEBPACK_IMPORTED_MODULE_4__["DrillMarksComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], DrillMarksModule);
    return DrillMarksModule;
}());



/***/ }),

/***/ "syq3":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/drill-competition/drill-marks/drill-marks.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: DrillMarksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrillMarksModule", function() { return DrillMarksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _drill_marks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drill-marks.component */ "6WZC");
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
        component: _drill_marks_component__WEBPACK_IMPORTED_MODULE_4__["DrillMarksComponent"]
    },
    {
        path: 'add-drill-marks',
        loadChildren: function () { return __webpack_require__.e(/*! import() | drill-marks-add-drill-marks-add-drill-marks-module */ "drill-marks-add-drill-marks-add-drill-marks-module").then(__webpack_require__.bind(null, /*! ../drill-marks/add-drill-marks/add-drill-marks.module */ "zuiV")).then(function (m) { return m.AddDrillMarksModule; }); }
    },
    {
        path: 'view-drill-marks',
        loadChildren: function () { return __webpack_require__.e(/*! import() | drill-marks-add-drill-marks-add-drill-marks-module */ "drill-marks-add-drill-marks-add-drill-marks-module").then(__webpack_require__.bind(null, /*! ../drill-marks/add-drill-marks/add-drill-marks.module */ "zuiV")).then(function (m) { return m.AddDrillMarksModule; }); }
    }
];
var DrillMarksModule = /** @class */ (function () {
    function DrillMarksModule() {
    }
    DrillMarksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _drill_marks_component__WEBPACK_IMPORTED_MODULE_4__["DrillMarksComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], DrillMarksModule);
    return DrillMarksModule;
}());



/***/ })

}]);