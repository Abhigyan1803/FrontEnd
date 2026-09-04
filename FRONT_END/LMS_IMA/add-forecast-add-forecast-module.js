(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-forecast-add-forecast-module"],{

/***/ "HM1W":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/trg-calendar/forecast-of-trg-events/add-forecast/add-forecast.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "ZXir":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/trg-calendar/forecast-of-trg-events/add-forecast/add-forecast.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: AddForecastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddForecastComponent", function() { return AddForecastComponent; });
/* harmony import */ var _raw_loader_add_forecast_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-forecast.component.html */ "odes");
/* harmony import */ var _add_forecast_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-forecast.component.scss */ "HM1W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AddForecastComponent = /** @class */ (function () {
    function AddForecastComponent(fb, service, snackbar, dialog, adminservice, spinner, router, route, cdref, localID) {
        var _this = this;
        this.fb = fb;
        this.service = service;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.adminservice = adminservice;
        this.spinner = spinner;
        this.router = router;
        this.route = route;
        this.cdref = cdref;
        this.seasonTerms = [];
        this.weeks = [];
        this.descriptionLength = 0;
        this.currentYear = new Date().getFullYear();
        this.isError = false;
        this.isLessDate = false;
        this.date = new Date();
        this.isDoc = true;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.addForecastForm = this.fb.group({
            sessionTerm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            year: [this.currentYear, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.currentYear), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(this.currentYear + 5)]],
            week: [''],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.currentDateValidator.bind(this)]],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mapImage: [],
            isGcLec: [''],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        //get season terms
        this.service.getAllSeasonTerm().subscribe(function (res) {
            if (res.status == '1') {
                _this.seasonTerms = res.List;
                _this.cdref.detectChanges();
            }
        });
        //get weeks
        this.service.getAllWeeks().subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.weeks = res.object;
                _this.cdref.detectChanges();
            }
        });
        this.localID = localID;
        this.minDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.date, 'yyyy-MM-dd', this.localID);
        this.maxDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.date.setFullYear(this.currentYear + 5), 'yyyy-MM-dd', this.localID);
    }
    AddForecastComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view-forecast')) {
            this.spinner.show();
            this.pageTitle = 'View Forecast';
            this.id = this.route.snapshot.queryParamMap.get('id');
            console.log(this.id);
            this.service.getForecastById(this.id).subscribe(function (res) {
                _this.spinner.hide();
                if (res.status == "OK") {
                    _this.addForecastForm.patchValue({
                        sessionTerm: res.object.sessionTerm,
                        year: res.object.year,
                        week: res.object.week,
                        date: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(res.object.date, 'yyyy-MM-dd', _this.localID),
                        description: res.object.description,
                        status: res.object.status,
                        isGcLec: res.object.isGcLec
                    });
                    _this.docUrl = res.object.file;
                    _this.isDoc = true;
                    _this.spinner.hide();
                    if (res.object.description) {
                        _this.descriptionLength = res.object.description.length;
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.spinner.hide();
                    _this.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.pageTitle = 'Add Forecast';
        }
    };
    AddForecastComponent.prototype.goBack = function () {
        this.router.navigate(['/main/trg-team/gso-2-pgme/trg-calendar/forecast']);
    };
    Object.defineProperty(AddForecastComponent.prototype, "f", {
        get: function () {
            return this.addForecastForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddForecastComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1250px', height: '650px',
            data: {
                type: 'document', title: "Forecast Document", url: this.docUrl
            }
        });
    };
    AddForecastComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        console.log(file);
        if (file.size > 104857600) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.adminservice.openSnackbar('Document Should Be Maximum 100 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addForecastForm.patchValue({
                mapImage: file
            });
            console.log(this.addForecastForm.value.mapImage);
            this.isDoc = true;
        }
    };
    //============CHARACTER COUNT==========
    AddForecastComponent.prototype.charCount = function (e, t) {
        if (t == 'desc')
            this.descriptionLength = e.target.value.length;
    };
    AddForecastComponent.prototype.addForecast = function () {
        var _this = this;
        if (this.addForecastForm.valid) {
            this.spinner.show();
            this.service.
                addForecast(this.addForecastForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.openSnackbar(res.message);
                    _this.router.navigate(['/main/trg-team/gso-2-pgme/trg-calendar/forecast']);
                }
                else {
                    _this.spinner.hide();
                    _this.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.openSnackbar('Error Occured.');
            });
        }
        else {
            this.isError = true;
            this.openSnackbar("Please Fill All Required Fields.");
        }
    };
    AddForecastComponent.prototype.updateForecast = function () {
        var _this = this;
        if (this.addForecastForm.valid) {
            this.spinner.show();
            this.service.updateForecast(this.id, this.addForecastForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.openSnackbar(res.message);
                    _this.router.navigate(['/main/trg-team/gso-2-pgme/trg-calendar/forecast']);
                }
                else {
                    _this.spinner.hide();
                    _this.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.openSnackbar('Error Occured.');
            });
        }
        else {
            this.isError = true;
            this.openSnackbar("Please Fill All Required Fields.");
        }
    };
    AddForecastComponent.prototype.openSnackbar = function (msg) {
        this.snackbar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    AddForecastComponent.prototype.currentDateValidator = function (control) {
        var currDt = new Date().setHours(0, 0, 0, 0);
        var maxAcceptDate = new Date().setFullYear(this.currentYear + 5);
        var pDt = Date.parse(control.value.toString());
        if (pDt < currDt || pDt > maxAcceptDate) {
            this.isLessDate = true;
            return { 'invalidDate': true };
        }
        else {
            this.isLessDate = false;
            return null;
        }
    };
    AddForecastComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_11__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
    ]; };
    AddForecastComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddForecastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-forecast',
            template: _raw_loader_add_forecast_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_forecast_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_11__["AdminService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], String])
    ], AddForecastComponent);
    return AddForecastComponent;
}());



/***/ }),

/***/ "odes":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/trg-calendar/forecast-of-trg-events/add-forecast/add-forecast.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"><button mat-icon-button (click)=\"goBack()\"><mat-icon>chevron_left</mat-icon> </button> GSO-2(PGME)<span class=\"sub-menu1\"> > TRG Calendar > Forecast of TRG Events </span> <span\r\n            class=\"sub-menu1\"> > {{pageTitle}} </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addForecastForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"battalion\">Date<span class=\"required\">*</span></label>\r\n                    <input type=\"date\" class=\"form-control\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"date\" >\r\n                    <span class=\"validation_msg\" *ngIf=\"f.date.errors && f.date.errors.required && isError\" >Please Select Date</span>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.date.errors && isLessDate && isError\" >Please Select Valid Date</span>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"battalion\">Week</label>\r\n                    <select type=\"week\" class=\"form-control\" formControlName=\"week\">\r\n                        <option value=\"\" selected hidden disabled>Select</option>\r\n                        <option *ngFor=\"let w of weeks\" [value]=\"w.name\" >{{w.name}} </option>\r\n                    </select>\r\n\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"battalion\">Season Term<span class=\"required\">*</span></label>\r\n                    <select type=\"text\" class=\"form-control\" formControlName=\"sessionTerm\">\r\n                        <option value=\"\" selected hidden disabled>Select</option>\r\n                        <option *ngFor=\"let s of seasonTerms\" [value]=\"s.name\">{{s.name}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.sessionTerm.errors && f.sessionTerm.errors.required && isError\" >Please Select Season Term</span>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"battalion\">Year<span class=\"required\">*</span></label>\r\n                    <input id=\"number\" type=\"number\" [min]=\"currentYear\" class=\"form-control\" formControlName=\"year\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.year.errors && isError\" >Please Enter a Valid Year</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"battalion\">Description <span class=\"char-count\" >({{descriptionLength}}/500) </span><span class=\"required\">*</span></label>\r\n                    <textarea class=\"form-control\" maxlength=\"500\" id=\"message\" formControlName=\"description\"  (input)=\"charCount($event,'desc')\"\r\n                        placeholder=\"(Maximum 500 Characters)\"></textarea>\r\n                        <span class=\"validation_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >Please Enter Description</span>  \r\n                </div>\r\n            </div>\r\n   \r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n                  <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx,,.xls,.xlsx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                  \r\n                  <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc()\" >description</mat-icon>\r\n                  \r\n                  <span class=\"note\">Max File Size 100 MB. (Only pdf,doc and excel format.)</span>\r\n                  <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span>\r\n              </div>\r\n\r\n              <!-- <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                 <label for=\"isGcLec\">  <input type=\"checkbox\" formControlName=\"isGcLec\" name=\"\" id=\"isGcLec\"> Is for C Lec </label> \r\n                 </div>\r\n              </div> -->\r\n\r\n            <!-- <div class=\"form-group\">      \r\n          <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx,.jpg\" (change)=\"onSelectDoc($event)\" id=\"image\"> \r\n          <mat-icon *ngIf=\"docUrl\" (click)=\"openDoc()\" >description</mat-icon>\r\n          <span>Max File Size 5 MB. (Only pdf and doc format.)</span>\r\n        </div> -->\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"battalion\">Status<span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Please Select Status</span>\r\n                      \r\n                </div>\r\n\r\n            </div>\r\n\r\n            <button *ngIf=\"!id\" mat-raised-button  (click)=\"addForecast()\">Add Forecast</button>\r\n            <button *ngIf=\"id\" mat-raised-button (click)=\"updateForecast()\">Update Forecast</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "ybyZ":
/*!********************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/trg-calendar/forecast-of-trg-events/add-forecast/add-forecast.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: AddForecastModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddForecastModule", function() { return AddForecastModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_forecast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-forecast.component */ "ZXir");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _add_forecast_component__WEBPACK_IMPORTED_MODULE_4__["AddForecastComponent"]
    },
];
var AddForecastModule = /** @class */ (function () {
    function AddForecastModule() {
    }
    AddForecastModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_forecast_component__WEBPACK_IMPORTED_MODULE_4__["AddForecastComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"]
            ]
        })
    ], AddForecastModule);
    return AddForecastModule;
}());



/***/ })

}]);