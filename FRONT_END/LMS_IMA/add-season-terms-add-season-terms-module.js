(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-season-terms-add-season-terms-module"],{

/***/ "3gxA":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/season-terms/add-season-terms/add-season-terms.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> GSO-2 PGME <span class=\"sub-menu1\"> > Season Terms</span> <span class=\"sub-menu1\"> > {{pageTitle}} </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addSeasonTermForm\">\r\n\r\n            <div class=\"row\">\r\n            \r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"seasonTerm\">Season Term<span class=\"required\">*</span></label>\r\n                    <select id=\"seasonTerm\" class=\"form-control\" formControlName=\"seasonTerm\">\r\n                        <option value=\"\" selected hidden disabled>Select</option>\r\n                        <option *ngFor=\"let t of seasonTerms\" [value]=\"t.id\">{{t.name}}</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.seasonTerm.errors && f.seasonTerm.errors.required && isError\">Please\r\n                        Select Season Term</span>\r\n                </div>\r\n            \r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"year\">Year<span class=\"required\">*</span></label>\r\n                    <input id=\"year\" type=\"number\" [min]=\"currentYear\" class=\"form-control\" formControlName=\"year\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.year.errors  && isError\">Please Enter a Valid Year</span>\r\n                </div>\r\n            \r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"start\">Start Date of Season Term</label>\r\n                    <input type=\"date\" id=\"start\" [min]=\"minStartDate\"  class=\"form-control\" formControlName=\"startDate\" (keydown)=\"noType()\" (change)=\"onSelectStartDate($event)\" >\r\n                    <span class=\"validation_msg\" *ngIf=\"f.startDate.errors && f.startDate.errors.required && isError\">Please\r\n                        Select Season Term Starting Date</span>\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"end\">Ending Date of Season Term</label>\r\n                    <input type=\"date\" id=\"end\"  [min]=\"minEndDte\" class=\"form-control\" formControlName=\"endDate\" (keydown)=\"noType()\" >\r\n                    <span class=\"validation_msg\" *ngIf=\"f.startDate.errors && f.startDate.errors.required && isError\">Please\r\n                        Select Season Term Ending Date</span>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\"> Status <span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\">Status\r\n                        is required</span>\r\n                </div>\r\n            </div>\r\n\r\n            <button *ngIf=\"!id\" mat-raised-button (click)=\"confirmAddSeasonTerm()\">Add Season Term</button>\r\n            <button *ngIf=\"id\" mat-raised-button (click)=\"updateDocument()\">Update Season Term</button>\r\n\r\n        </form>  \r\n\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "AnpW":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/season-terms/add-season-terms/add-season-terms.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AddSeasonTermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSeasonTermsComponent", function() { return AddSeasonTermsComponent; });
/* harmony import */ var _raw_loader_add_season_terms_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-season-terms.component.html */ "3gxA");
/* harmony import */ var _add_season_terms_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-season-terms.component.scss */ "B1q2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddSeasonTermsComponent = /** @class */ (function () {
    function AddSeasonTermsComponent(fb, service, dialog, spinner, router, route, cdref, localID, sharedService) {
        var _this = this;
        this.fb = fb;
        this.service = service;
        this.dialog = dialog;
        this.spinner = spinner;
        this.router = router;
        this.route = route;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.pageTitle = "Add Season Term";
        this.show = false;
        this.addSeasonTermForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.seasonTerms = [];
        this.date = new Date();
        this.currentYear = this.date.getFullYear();
        this.isError = false;
        this.addSeasonTermForm = this.fb.group({
            seasonTerm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            year: [this.currentYear, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(this.currentYear), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(this.currentYear + 5)]],
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        //get season terms
        this.service.getAllSeasonTerm().subscribe(function (res) {
            console.log(res);
            if (res.status == '1') {
                _this.seasonTerms = res.List;
                _this.cdref.detectChanges();
            }
        });
        this.localID = localID;
        this.minStartDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'yyy-MM-dd', this.localID);
        this.minEndDte = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'yyy-MM-dd', this.localID);
    }
    AddSeasonTermsComponent.prototype.ngOnInit = function () {
        // if (this.router.url.includes('view-program')) {
        //   this.spinner.show();
        //   this.pageTitle = 'View Weekly PGME'
        //   this.id = this.route.snapshot.queryParamMap.get('id')
        //   // console.log(this.id);
        //   this.service.getWeeklyProgramById(this.id).subscribe(
        //     res => {
        //       // console.log(res);
        //       if (res.status == 'OK') {
        //         this.addSeasonTermForm.patchValue({
        //         })
        //         this.cdref.detectChanges();
        //         this.spinner.hide();
        //       } else {
        //         this.spinner.hide()
        //         this.sharedService.openSnackbar(res.message);
        //       }
        //     },
        //     err => {
        //       this.spinner.hide();
        //       this.sharedService.openSnackbar('Some Error Occured.')
        //     })
        // } else {
        //   this.pageTitle = 'Add Weekly PGME'
        // }
    };
    AddSeasonTermsComponent.prototype.onSelectStartDate = function (e) {
        console.log(e.target.value);
        var dt = new Date(e.target.value);
        if (dt.getDay() != 1) {
            this.sharedService.openSnackbar("Please Select First Day of Week");
            this.f.startDate.setValue('');
        }
        else {
            this.minEndDte = e.target.value;
        }
    };
    AddSeasonTermsComponent.prototype.noType = function () {
        return false;
    };
    Object.defineProperty(AddSeasonTermsComponent.prototype, "f", {
        get: function () {
            return this.addSeasonTermForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddSeasonTermsComponent.prototype.goBack = function () {
        if (this.router.url.includes('main/trg-team'))
            this.router.navigate(['/main/trg-team/gso-2-pgme/season-terms']);
        if (this.router.url.includes('main/admin/trg-team'))
            this.router.navigate(['/main/admin/trg-team/gso-2-pgme/season-terms']);
    };
    AddSeasonTermsComponent.prototype.confirmAddSeasonTerm = function () {
        var _this = this;
        var tempST;
        if (this.f.seasonTerm.value == 1) {
            tempST = 'Spring';
        }
        else {
            tempST = 'Autumn';
        }
        if (this.addSeasonTermForm.valid) {
            var dialogRef = this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
                width: '500px',
                // height: '600px',
                data: {
                    type: 'confirmation',
                    title: 'Confirm! Add This Season Term',
                    object: { startDate: this.f.startDate.value, endDate: this.f.endDate.value, year: this.f.year.value, seasonTerm: tempST }
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed');
                if (result == true) {
                    console.log(result);
                    _this.addSeasonTerm();
                }
            });
        }
        else {
            this.sharedService.openSnackbar('Please Fill All Required Fields.');
            this.isError = true;
        }
    };
    AddSeasonTermsComponent.prototype.addSeasonTerm = function () {
        var _this = this;
        console.log(this.addSeasonTermForm.value);
        if (this.addSeasonTermForm.valid) {
            this.spinner.show();
            this.service.addFullSeasonTerm(this.addSeasonTermForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar(res.message);
                    _this.goBack();
                }
                else {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar('Error Occured.');
            });
        }
        else {
            this.sharedService.openSnackbar('Please Fill All Required Fields.');
            this.isError = true;
        }
    };
    AddSeasonTermsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_7__["TrgTeamService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
    ]; };
    AddSeasonTermsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-season-terms',
            template: _raw_loader_add_season_terms_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_season_terms_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_7__["TrgTeamService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], String, app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], AddSeasonTermsComponent);
    return AddSeasonTermsComponent;
}());



/***/ }),

/***/ "B1q2":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/season-terms/add-season-terms/add-season-terms.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "Bcyt":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/season-terms/add-season-terms/add-season-terms.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddSeasonTermsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSeasonTermsModule", function() { return AddSeasonTermsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_season_terms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-season-terms.component */ "AnpW");
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
        component: _add_season_terms_component__WEBPACK_IMPORTED_MODULE_4__["AddSeasonTermsComponent"]
    },
];
var AddSeasonTermsModule = /** @class */ (function () {
    function AddSeasonTermsModule() {
    }
    AddSeasonTermsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_season_terms_component__WEBPACK_IMPORTED_MODULE_4__["AddSeasonTermsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddSeasonTermsModule);
    return AddSeasonTermsModule;
}());



/***/ })

}]);