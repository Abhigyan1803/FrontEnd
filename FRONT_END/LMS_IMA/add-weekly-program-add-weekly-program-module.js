(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-weekly-program-add-weekly-program-module"],{

/***/ "5os4":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/trg-calendar/weekly-programs/add-weekly-program/add-weekly-program.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\"> <button mat-icon-button (click)=\"goBack()\">\r\n      <mat-icon>chevron_left</mat-icon>\r\n    </button>\r\n    GSO-2(PGME)<span class=\"sub-menu1\"> > TRG Calendar > Weekly PGME </span> <span class=\"sub-menu1\"> > {{pageTitle}}\r\n    </span>\r\n  </h4>\r\n</div>\r\n\r\n<mat-card>\r\n\r\n  <div class=\"top-br\">\r\n    <form [formGroup]=\"addProgramForm\">\r\n\r\n      <div class=\"row\" style=\"display: flex;\">\r\n\r\n        <div class=\"form-group col-md-3\">\r\n\r\n          <label for=\"seasonTerm\">Season Term<span class=\"required\">*</span></label>\r\n          <select id=\"seasonTerm\" class=\"form-control\" formControlName=\"seasonTerm\" (change)=\"getAllDatesOfWeek()\"\r\n          [attr.disabled]=\"!addPgme ? 'disabled' : null\"\r\n          >\r\n            <option value=\"\" selected hidden disabled>Select</option>\r\n            <option *ngFor=\"let t of seasonTerms\" [value]=\"t.id\">{{t.name}} </option>\r\n          </select>\r\n\r\n          <span class=\"validation_msg\" *ngIf=\"f.seasonTerm.errors && f.seasonTerm.errors.required && isError\">Please\r\n            Select Season Term</span>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"year\">Year<span class=\"required\">*</span></label>\r\n          <input id=\"year\" type=\"number\" [min]=\"currentYear\" class=\"form-control\" formControlName=\"year\"\r\n            (change)=\"getAllDatesOfWeek()\" [attr.disabled]=\"!addPgme ? 'disabled' : null\" >\r\n          <span class=\"validation_msg\" *ngIf=\"f.year.errors  && isError\">Please Enter a Valid Year</span>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"week\">Week<span class=\"required\">*</span></label>\r\n          <select id=\"week\" type=\"week\" class=\"form-control\" formControlName=\"week\" (change)=\"getAllDatesOfWeek()\"\r\n            [attr.disabled]=\"!addPgme ? 'disabled' : null\">\r\n            <option value=\"\" selected hidden disabled>Select</option>\r\n            <option *ngFor=\"let w of weeks\" [value]=\"w.id\">{{w.name}} </option>\r\n          </select>\r\n          <span class=\"validation_msg\" *ngIf=\"f.week.errors && f.week.errors.required && isError\">Please Select\r\n            Week</span>\r\n        </div>\r\n        <!-- <div class=\" col-md-2\">\r\n          <button mat-raised-button (click)=\"getAllDatesOfWeek()\" style=\"margin-top: 30px;width: 100%;\">Submit</button>\r\n        </div> -->\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <ng-container *ngIf=\"show\">\r\n\r\n\r\n        <div class=\"bod-ts\">\r\n          <div class=\"inner-pts\">\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"start\">Week Start Date</label>\r\n              <input type=\"text\" id=\"start\" readonly class=\"form-control\" formControlName=\"weekStartDate\">\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"end\">Week Ending Date</label>\r\n              <input type=\"text\" id=\"end\" readonly class=\"form-control\" formControlName=\"weekEndDate\">\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"battalion\">Battalion<span class=\"required\">*</span></label>\r\n              <select id=\"battalion\" class=\"form-control\" formControlName=\"battalion\">\r\n                <option value=\"\" selected hidden disabled>Select</option>\r\n                <option *ngFor=\"let b of battalions\" [value]=\"b.id\">{{b.shortName}} Bn</option>\r\n              </select>\r\n              <span class=\"validation_msg\" *ngIf=\"f.battalion.errors && f.battalion.errors.required && isError\">Please\r\n                Select Battalion</span>\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"term\">Term<span class=\"required\">*</span></label>\r\n              <select id=\"term\" type=\"text\" class=\"form-control\" formControlName=\"term\">\r\n                <option value=\"\" selected hidden disabled>Select</option>\r\n                <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n              </select>\r\n              <span class=\"validation_msg\" *ngIf=\"f.term.errors && f.term.errors.required && isError\">Please Enter a\r\n                Valid\r\n                Year</span>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <ng-container formArrayName=\"weeklyScheduleDate\">\r\n\r\n\r\n\r\n\r\n          <mat-tab-group>\r\n            <mat-tab *ngFor=\"let sch of weeklyScheduleDates.controls;let dateIndex=index\">\r\n\r\n              <div class=\"\" [formGroupName]=\"dateIndex\">\r\n\r\n                <ng-template mat-tab-label>\r\n                  <span>\r\n                    {{sch.value.displayDate}}\r\n                  </span>\r\n                </ng-template>\r\n\r\n                <div formArrayName=\"dailySchedule\">\r\n                  <ng-container *ngFor=\"let pgme of getPGMEs(dateIndex).controls;let pgmeIndex = index\">\r\n                    <div [formGroupName]=\"pgmeIndex\">\r\n                      <div class=\"inner-nfs form-group\">\r\n\r\n                        <div class=\"col-md-3 mt-2\">\r\n                          <label for=\"\">Period</label>\r\n                          <input type=\"text\" class=\"form-control\" maxlength=\"150\" formControlName=\"period\"\r\n                            placeholder=\"Period\">\r\n                        </div>\r\n                        <div class=\"col-md-3 mt-2\">\r\n                          <label for=\"\">Start Time</label>\r\n                          <input type=\"text\" class=\"form-control\" maxlength=\"4\" (keypress)=\"onlyNum($event)\"\r\n                          (keyup)=\"validateTime($event)\"\r\n                            formControlName=\"startTime\" placeholder=\"Start Time\">\r\n                        </div>\r\n                        <div class=\"col-md-3 mt-2\">\r\n                          <label for=\"\">End Time</label>\r\n                          <input type=\"text\" class=\"form-control\" maxlength=\"4\" (keypress)=\"onlyNum($event)\"\r\n                          (keyup)=\"validateTime($event)\"\r\n                            formControlName=\"endTime\" placeholder=\"End Time\">\r\n                        </div>\r\n                        <div class=\"col-md-3 mt-2 \">\r\n                          <label for=\"\">Subject</label>\r\n                          <input type=\"text\" class=\"form-control\" maxlength=\"150\" formControlName=\"subject\"\r\n                            placeholder=\"Subject\">\r\n                        </div>\r\n                        <div class=\"col-md-3 mt-2 \">\r\n                          <label for=\"\">Type</label>\r\n                          <input type=\"text\" class=\"form-control\" maxlength=\"150\" formControlName=\"type\"\r\n                            placeholder=\"Type\">\r\n                        </div>\r\n                        <div class=\"col-md-3 mt-2 \">\r\n                          <label for=\"\">Lesson</label>\r\n                          <input type=\"text\" class=\"form-control\" maxlength=\"150\" formControlName=\"lession\"\r\n                            placeholder=\"Lesson\">\r\n                        </div>\r\n                        <div class=\"col-md-3 mt-2 \">\r\n                          <label for=\"\">Instructor</label>\r\n                          <input type=\"text\" class=\"form-control\" maxlength=\"150\" formControlName=\"instructor\"\r\n                            placeholder=\"Instructor Name\">\r\n                        </div>\r\n                        <div class=\"col-md-3 mt-2 \">\r\n                          <label for=\"\">Place</label>\r\n                          <input type=\"text\" class=\"form-control\" maxlength=\"150\" formControlName=\"place\"\r\n                            placeholder=\"Place\">\r\n                        </div>\r\n                        <div class=\"btn-fhj\">\r\n                          <button mat-icon-button class=\"remove-btn\" (click)=\"removePGME(dateIndex,pgmeIndex)\">\r\n                            <mat-icon>remove</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </ng-container>\r\n                  <div class=\"add-new-btn\">\r\n                    <button mat-icon-button class=\"add-btn cus-btn\" (click)=\"addPGME(dateIndex)\">\r\n                      <mat-icon>add</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </mat-tab>\r\n\r\n          </mat-tab-group>\r\n\r\n\r\n\r\n          <!-- <ng-container class=\"border\" *ngFor=\"let sch of weeklyScheduleDates.controls;let dateIndex=index\">\r\n\r\n            <div class=\"border col-md-12\" [formGroupName]=\"dateIndex\">\r\n\r\n              <div class=\"form-group row col-md-12 mt-3\">\r\n                <div class=\"inf-f\">\r\n                  <input type=\"text\" formControlName=\"displayDate\" class=\"form-control\" readonly style=\"width: auto;\">\r\n                </div>\r\n              </div>\r\n\r\n              <div formArrayName=\"dailySchedule\">\r\n                <ng-container *ngFor=\"let pgme of getPGMEs(dateIndex).controls;let pgmeIndex = index\">\r\n                  <div [formGroupName]=\"pgmeIndex\">\r\n                    <div class=\"inner-nfs form-group\">\r\n\r\n                      <div class=\"col-md-3 mt-2\">\r\n                        <label for=\"\">Period</label>\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"150\" formControlName=\"period\"\r\n                          placeholder=\"Period\">\r\n                      </div>\r\n                      <div class=\"col-md-3 mt-2\">\r\n                        <label for=\"\">Start Time</label>\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"4\" (keydown)=\"onlyNum($event)\"\r\n                          formControlName=\"startTime\" placeholder=\"Start Time\">\r\n                      </div>\r\n                      <div class=\"col-md-3 mt-2\">\r\n                        <label for=\"\">End Time</label>\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"4\" (keydown)=\"onlyNum($event)\"\r\n                          formControlName=\"endTime\" placeholder=\"End Time\">\r\n                      </div>\r\n                      <div class=\"col-md-3 mt-2 \">\r\n                        <label for=\"\">Subject</label>\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"150\" formControlName=\"subject\"\r\n                          placeholder=\"Subject\">\r\n                      </div>\r\n                      <div class=\"col-md-3 mt-2 \">\r\n                        <label for=\"\">Type</label>\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"150\" formControlName=\"type\"\r\n                          placeholder=\"Type\">\r\n                      </div>\r\n                      <div class=\"col-md-3 mt-2 \">\r\n                        <label for=\"\">Lesson</label>\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"150\" formControlName=\"lession\"\r\n                          placeholder=\"Lesson\">\r\n                      </div>\r\n                      <div class=\"col-md-3 mt-2 \">\r\n                        <label for=\"\">Instructor</label>\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"150\" formControlName=\"instructor\"\r\n                          placeholder=\"Instructor Name\">\r\n                      </div>\r\n                      <div class=\"col-md-3 mt-2 \">\r\n                        <label for=\"\">Place</label>\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"150\" formControlName=\"place\"\r\n                          placeholder=\"Place\">\r\n                      </div>\r\n                      <div class=\"btn-fhj\">\r\n                        <button mat-icon-button class=\"remove-btn\" (click)=\"removePGME(dateIndex,pgmeIndex)\">\r\n                          <mat-icon>remove</mat-icon>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </ng-container>\r\n\r\n              </div>\r\n              <div class=\"add-new-btn\">\r\n                <button mat-icon-button class=\"add-btn cus-btn\" (click)=\"addPGME(dateIndex)\">\r\n                  <mat-icon>add</mat-icon>\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n          </ng-container> -->\r\n\r\n\r\n        </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"status\">Status<span class=\"required\">*</span></label>\r\n            <select id=\"status\" class=\"form-control\" formControlName=\"status\">\r\n              <option value=\"\" selected hidden disabled>Select</option>\r\n              <option value=\"1\">Active</option>\r\n              <option value=\"0\">Inactive</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n      </ng-container>\r\n\r\n\r\n      <div *ngIf=\"show\" style=\"float: right;\">\r\n\r\n        <button *ngIf=\"!id\" mat-raised-button (click)=\"addProgram()\">Add PGME</button>\r\n        <button *ngIf=\"id\" mat-raised-button (click)=\"updateProgram()\">Update PGME</button>\r\n\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </div>\r\n</mat-card>");

/***/ }),

/***/ "c1ge":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/trg-calendar/weekly-programs/add-weekly-program/add-weekly-program.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".remove-btn {\n  color: #ffff;\n  background-color: #d63d3d;\n}\n\n.add-btn {\n  color: #ffff;\n  background-color: #399739;\n}\n\n.btn-fhj {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  width: 100%;\n  margin-right: 15px;\n  margin-top: 15px;\n}\n\n.inner-nfs.form-group {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.add-new-btn {\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 15px;\n}\n\n.inner-pts {\n  width: 100%;\n  display: flex;\n  padding-top: 10px;\n  background: #eee;\n  border-radius: 2px;\n  margin-bottom: 15px;\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.bod-ts.ng-star-inserted {\n  border-top: 1px solid #ccc;\n  padding-top: 16px;\n}\n\n.inf-f {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 15px;\n}\n\n.add-btn.cus-btn {\n  width: 40px;\n  height: 40px;\n  background: #4c5041;\n}\n\n.cus-btn mat-icon {\n  line-height: 29px !important;\n  font-size: 20px;\n}\n\n.remove-btn {\n  width: 40px;\n  height: 40px;\n  background: #721a0c;\n  margin-bottom: 15px;\n}\n\n.remove-btn mat-icon {\n  line-height: 29px !important;\n  font-size: 20px;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n  margin-bottom: 15px;\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.inner-nfs {\n  width: 100%;\n  padding-top: 10px;\n  background: #eee;\n  border-radius: 2px;\n  margin-bottom: 15px;\n  box-shadow: 1px 1px 4px #ccc;\n}");

/***/ }),

/***/ "eV0J":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/trg-calendar/weekly-programs/add-weekly-program/add-weekly-program.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: AddWeeklyProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWeeklyProgramComponent", function() { return AddWeeklyProgramComponent; });
/* harmony import */ var _raw_loader_add_weekly_program_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-weekly-program.component.html */ "5os4");
/* harmony import */ var _add_weekly_program_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-weekly-program.component.scss */ "c1ge");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_service_home_home_page_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/home/home-page.service */ "LZSk");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AddWeeklyProgramComponent = /** @class */ (function () {
    function AddWeeklyProgramComponent(fb, service, snackbar, dialog, spinner, router, route, cdref, localID, sharedService, homepageService) {
        var _this = this;
        this.fb = fb;
        this.service = service;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.spinner = spinner;
        this.router = router;
        this.route = route;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.homepageService = homepageService;
        this.pageTitle = "Add Weekly PGME";
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.show = false;
        this.addProgramForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.weeks = [ /*'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI'*/];
        this.terms = [ /*'I', 'II', 'III'*/];
        this.seasonTerms = [];
        this.battalions = [];
        this.date = new Date();
        this.currentYear = this.date.getFullYear();
        this.isError = false;
        this.isLessDate = false;
        this.isInvalidProgramDate = false;
        this.addPgme = true;
        this.addProgramForm = this.fb.group({
            seasonTerm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            year: [this.currentYear, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.currentYear)],
            week: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            weekStartDate: [''],
            weekEndDate: [''],
            battalion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            weeklyScheduleDate: this.fb.array([]),
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        //get season terms
        this.service.getAllSeasonTerm().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.seasonTerms = res.List;
                _this.cdref.detectChanges();
            }
        });
        //get battalions
        this.service.getBattalions().subscribe(function (res) {
            if (res.status == 'OK') {
                _this.battalions = res.object;
                _this.cdref.detectChanges();
            }
        });
        //get weeks
        this.service.getAllWeeks().subscribe(function (res) {
            // console.log(res);
            if (res.status == 'OK') {
                _this.weeks = res.object;
                _this.cdref.detectChanges();
            }
        });
        //get terms
        this.service.getAllTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
        this.localID = localID;
    }
    AddWeeklyProgramComponent.prototype.ngOnInit = function () {
        this.formValueChanges();
        if (this.router.url.includes('view-program')) {
            this.getPgmeById();
        }
    };
    //find value changes
    AddWeeklyProgramComponent.prototype.formValueChanges = function () {
        var _this = this;
        var seasonTerm;
        var year = this.f.year.value;
        var week;
        var battalion;
        var term;
        this.addProgramForm.get('seasonTerm').valueChanges.subscribe(function (res) {
            // console.log(res);
            seasonTerm = res;
            _this.checkIfProgramAlreadyAdded(seasonTerm, year, week, battalion, term);
        });
        this.addProgramForm.get('year').valueChanges.subscribe(function (res) {
            // console.log(res);
            year = res;
            _this.checkIfProgramAlreadyAdded(seasonTerm, year, week, battalion, term);
        });
        this.addProgramForm.get('week').valueChanges.subscribe(function (res) {
            // console.log(res);
            week = res;
            _this.checkIfProgramAlreadyAdded(seasonTerm, year, week, battalion, term);
        });
        this.addProgramForm.get('battalion').valueChanges.subscribe(function (res) {
            // console.log(res);
            battalion = res;
            _this.checkIfProgramAlreadyAdded(seasonTerm, year, week, battalion, term);
        });
        this.addProgramForm.get('term').valueChanges.subscribe(function (res) {
            // console.log(res);
            term = res;
            _this.checkIfProgramAlreadyAdded(seasonTerm, year, week, battalion, term);
        });
    };
    //check either program is already added.
    AddWeeklyProgramComponent.prototype.checkIfProgramAlreadyAdded = function (seasonTerm, year, week, battalion, term) {
        var _this = this;
        if (seasonTerm && year && week && battalion && term) {
            var data = {
                termSeasonId: seasonTerm,
                year: year,
                weekId: week,
                battalianId: battalion,
                termId: term
            };
            this.homepageService.getWeeklyPrograms(data).subscribe(function (res) {
                // console.log(res);
                if (res.status == "OK") {
                    if (res.object.length) {
                        if (_this.addPgme) {
                            alert('Programs Already Added. Redirecting to Program Details.');
                        }
                        var id = res.object['0'].id;
                        _this.router.navigate(['main/trg-team/gso-2-pgme/trg-calendar/weekly-programs/view-program'], { queryParams: { id: id } });
                    }
                }
            });
        }
    };
    AddWeeklyProgramComponent.prototype.getPgmeById = function () {
        var _this = this;
        this.addPgme = false;
        this.spinner.show();
        this.pageTitle = 'View Weekly PGME Details';
        this.id = this.route.snapshot.queryParamMap.get('id');
        // console.log(this.id);
        this.service.getWeeklyProgramById(this.id).subscribe(function (res) {
            console.log('View Programs: ', res);
            if (res.status == 'OK') {
                var values = res.object;
                _this.show = true;
                _this.addProgramForm.patchValue({
                    seasonTerm: values.sessionTerm.id,
                    year: values.year,
                    week: values.week.id,
                    weekStartDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(values.weekStartDate, "dd MM yyyy, EEEE", _this.localID),
                    weekEndDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(values.weekEndDate, "dd MM yyyy, EEEE", _this.localID),
                    battalion: values.battalian.id,
                    term: values.term.id,
                    status: values.status
                });
                _this.patchValues(values.weeklyScheduleDate);
                // console.log(this.addProgramForm.value);
                // console.log(values.weeklyScheduleDate);
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar('Some Error Occured.');
        });
    };
    AddWeeklyProgramComponent.prototype.onlyNum = function (event) {
        var pattern = /^[0-9]*$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddWeeklyProgramComponent.prototype.validateTime = function (event) {
        // console.log(event.target.value);
        if (event.target.value > 2359) {
            event.target.value = '';
            event.preventDefault();
            this.sharedService.openAlertSnackbarWithSeconds('Please Enter Correct Time.', 3);
            return false;
        }
    };
    AddWeeklyProgramComponent.prototype.getAllDatesOfWeek = function () {
        var _this = this;
        if (this.addPgme) {
            this.show = false;
            this.weeklyScheduleDates.clear();
            if (this.f.seasonTerm.value && this.f.week.value) {
                this.spinner.show();
                this.service.getAllDatesOfWeek(this.f.seasonTerm.value, this.f.year.value, 'Week ' + this.f.week.value)
                    .subscribe(function (res) {
                    // console.log(res);
                    if (res.status == 'OK') {
                        var ob = res.object;
                        if (ob) {
                            var today = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(Date.now(), 'yyyy-MM-dd', _this.localID);
                            var wEnd = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(ob.weekEndDate, 'yyyy-MM-dd', _this.localID);
                            // console.log(today);
                            // console.log(wEnd);
                            if (today > wEnd) {
                                _this.sharedService.openAlertSnackbarWithSeconds('Week has been Passed!', 5);
                            }
                            else {
                                console.log(ob.weekStartDate);
                                var startDate = Date.parse(ob.weekStartDate);
                                var endDate = Date.parse(ob.weekEndDate);
                                console.log(startDate);
                                _this.addProgramForm.patchValue({
                                    weekStartDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(ob.weekStartDate, 'dd MMM yyyy, EEEE', _this.localID),
                                    weekEndDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(ob.weekEndDate, 'dd MMM yyyy, EEEE', _this.localID),
                                });
                                for (var i = startDate; i <= endDate; i = i + 86400000) {
                                    _this.generateDates(i);
                                }
                                _this.show = true;
                                console.log(_this.addProgramForm.value);
                            }
                        }
                        else {
                            _this.sharedService.openSnackbar("No Records Found");
                        }
                        _this.spinner.hide();
                    }
                    else {
                        _this.spinner.hide();
                        _this.sharedService.openSnackbar(res.message);
                    }
                }, function (err) {
                    _this.spinner.show();
                    _this.sharedService.openSnackbar('Some Error Occured');
                });
            }
        }
    };
    Object.defineProperty(AddWeeklyProgramComponent.prototype, "weeklyScheduleDates", {
        get: function () {
            return this.addProgramForm.get('weeklyScheduleDate');
        },
        enumerable: false,
        configurable: true
    });
    AddWeeklyProgramComponent.prototype.getPGMEs = function (index) {
        return this.weeklyScheduleDates.at(index).get('dailySchedule');
    };
    AddWeeklyProgramComponent.prototype.getASchedule = function () {
        return {
            id: [''],
            period: [''],
            startTime: [''],
            endTime: [''],
            subject: [''],
            type: [''],
            lession: [''],
            instructor: [''],
            place: ['']
        };
    };
    AddWeeklyProgramComponent.prototype.addPGME = function (index) {
        this.getPGMEs(index).push(this.fb.group(this.getASchedule()));
    };
    AddWeeklyProgramComponent.prototype.removePGME = function (i1, i2) {
        this.getPGMEs(i1).removeAt(i2);
    };
    AddWeeklyProgramComponent.prototype.generateDates = function (date) {
        this.weeklyScheduleDates.push(this.fb.group({
            id: [''],
            // displayDate: formatDate(date, 'dd MMM yyyy, EEEE', this.localID),
            date: new Date(date),
            dailySchedule: this.fb.array([
                this.fb.group(this.getASchedule())
            ])
        }));
    };
    Object.defineProperty(AddWeeklyProgramComponent.prototype, "f", {
        get: function () {
            return this.addProgramForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddWeeklyProgramComponent.prototype.goBack = function () {
        if (this.router.url.includes('main/trg-team'))
            this.router.navigate(['/main/trg-team/gso-2-pgme/trg-calendar/weekly-programs']);
        if (this.router.url.includes('main/admin/trg-team'))
            this.router.navigate(['/main/admin/trg-team/gso-2-pgme/trg-calendar/weekly-programs']);
    };
    AddWeeklyProgramComponent.prototype.patchValues = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            this.generateDates(arr[i].date);
            // console.log(arr[i]);
            if (arr[i].dailySchedule.length) {
                // console.log(arr[i].dailySchedule);
                for (var j = 0; j < arr[i].dailySchedule.length - 1; j++) {
                    this.addPGME(i);
                }
            }
        }
        this.addProgramForm.patchValue({
            weeklyScheduleDate: arr
        });
    };
    AddWeeklyProgramComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
            this.goBack();
        }
        else {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
        }
    };
    AddWeeklyProgramComponent.prototype.addProgram = function () {
        // console.log(this.addProgramForm.value);
        var _this = this;
        if (this.addProgramForm.valid) {
            this.spinner.show();
            this.service.addWeeklyProgram(this.addProgramForm.value).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                console.log(JSON.stringify(err));
                _this.spinner.hide();
                _this.sharedService.openSnackbar('Error Occured.');
            });
        }
        else {
            this.sharedService.openSnackbar('Please Fill All Required Fields.');
            this.isError = true;
        }
    };
    AddWeeklyProgramComponent.prototype.updateProgram = function () {
        console.log(this.addProgramForm.value);
        // if (this.addProgramForm.valid) {
        //   this.spinner.show()
        //   this.service.updateWeeklyProgram(this.id, this.addProgramForm.value).subscribe(
        //     res => {
        //       // console.log(res);
        //       this.apiRes(res)
        //     },
        //     err => {
        //       console.log(JSON.stringify(err));
        //       this.spinner.hide();
        //       this.sharedService.openSnackbar('Error Occured.')
        //     }
        //   )
        // } else {
        //   this.sharedService.openSnackbar('Please Fill All Required Fields.')
        //   this.isError = true;
        // }
    };
    AddWeeklyProgramComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] },
        { type: app_service_home_home_page_service__WEBPACK_IMPORTED_MODULE_11__["HomePageService"] }
    ]; };
    AddWeeklyProgramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-weekly-program',
            template: _raw_loader_add_weekly_program_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_weekly_program_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], String, app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], app_service_home_home_page_service__WEBPACK_IMPORTED_MODULE_11__["HomePageService"]])
    ], AddWeeklyProgramComponent);
    return AddWeeklyProgramComponent;
}());



/***/ }),

/***/ "sXj1":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/trg-calendar/weekly-programs/add-weekly-program/add-weekly-program.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AddWeeklyProgramModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWeeklyProgramModule", function() { return AddWeeklyProgramModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_weekly_program_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-weekly-program.component */ "eV0J");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _add_weekly_program_component__WEBPACK_IMPORTED_MODULE_4__["AddWeeklyProgramComponent"]
    }
];
var AddWeeklyProgramModule = /** @class */ (function () {
    function AddWeeklyProgramModule() {
    }
    AddWeeklyProgramModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_weekly_program_component__WEBPACK_IMPORTED_MODULE_4__["AddWeeklyProgramComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ]
        })
    ], AddWeeklyProgramModule);
    return AddWeeklyProgramModule;
}());



/***/ })

}]);