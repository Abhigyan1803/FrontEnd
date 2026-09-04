(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-add-report-add-report-module"],{

/***/ "/pJX":
/*!*************************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/report/add-report/add-report.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AddReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReportModule", function() { return AddReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-report.component */ "z+VK");
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
        component: _add_report_component__WEBPACK_IMPORTED_MODULE_8__["AddReportComponent"]
    }
];
var AddReportModule = /** @class */ (function () {
    function AddReportModule() {
    }
    AddReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_report_component__WEBPACK_IMPORTED_MODULE_8__["AddReportComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
            ]
        })
    ], AddReportModule);
    return AddReportModule;
}());



/***/ }),

/***/ "9l16":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/adventure-cell/report/add-report/add-report.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"><button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button> Adventure Cell <span class=\"sub-menu1\"> > Report > {{title}} </span>\r\n        <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addReportForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Report Name <span class=\"char-count\"> ({{nameLength}}/100) </span> <span\r\n                            class=\"required\">*</span></label>\r\n                    <input (input)=\"charCount($event,'name')\" type=\"text\" formControlName=\"name\" maxlength=\"100\"\r\n                        placeholder=\"Report Name (Maximum 100 Characters)\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">Report Name\r\n                        is required</span>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Season Term<span class=\"required\">*</span></label>\r\n                    <select name=\"\" id=\"\" formControlName=\"seasonTerm\" class=\"form-control\">\r\n                        <option value=\"\" selected disabled hidden>Season Term</option>\r\n                        <option *ngFor=\"let term of seasonTerms\" [value]=\"term.id\">{{term.name}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.seasonTerm.errors && f.seasonTerm.errors.required && isError\">Season Term is\r\n                        required</span>\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Year<span class=\"required\">*</span></label>\r\n                    <input id=\"year\" type=\"number\" [min]=\"currentYear\" maxlength=\"4\" class=\"form-control\"\r\n                        formControlName=\"year\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.year.errors && f.year.errors.required && isError\">Year is\r\n                        required</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label class=\"form-label\">Description <span class=\"char-count\"> ({{descLength}}/500) </span><span\r\n                            class=\"required\">*</span></label>\r\n                    <textarea (input)=\"charCount($event,'description')\" class=\"form-control\" id=\"message\"\r\n                        formControlName=\"description\" maxlength=\"500\"\r\n                        placeholder=\"Description (Maximum 500 Characters)\"></textarea>\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.description.errors && f.description.errors.required && isError\">Description is\r\n                        required</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label class=\"form-label\">Document <span class=\"required\">*</span></label>\r\n                    <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                    <mat-icon class=\"document_icon\" *ngIf=\"docUrl\" (click)=\"openDoc(docUrl)\">description</mat-icon>\r\n                    <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n                    <span class=\"validation_msg\" *ngIf=\"!isDoc\">Document is required</span>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\">Status\r\n                        is required</span>\r\n                </div>\r\n            </div>\r\n\r\n            <button *ngIf=\"title == 'Add Report'\" mat-raised-button (click)=\"submit()\">Add Report</button>\r\n            <button *ngIf=\"title == 'View Report'\" mat-raised-button (click)=\"updateReport()\">Update Report</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "ZMhU":
/*!******************************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/report/add-report/add-report.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "z+VK":
/*!****************************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/report/add-report/add-report.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReportComponent", function() { return AddReportComponent; });
/* harmony import */ var _raw_loader_add_report_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-report.component.html */ "9l16");
/* harmony import */ var _add_report_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-report.component.scss */ "ZMhU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddReportComponent = /** @class */ (function () {
    function AddReportComponent(dialog, _trgTeam, spinner, fb, router, _trgBattalion, activeRoute) {
        this.dialog = dialog;
        this._trgTeam = _trgTeam;
        this.spinner = spinner;
        this.fb = fb;
        this.router = router;
        this._trgBattalion = _trgBattalion;
        this.activeRoute = activeRoute;
        this.currentYear = new Date().getFullYear();
        this.isDoc = true;
        this.nameLength = 0;
        this.descLength = 0;
        this.addReportForm = this.fb.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            seasonTerm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            doc: [],
            year: [this.currentYear, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(this.currentYear)]],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [],
        });
    }
    AddReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
        });
        console.log("id", this.id);
        if (this.id > 0) {
            this.title = "View Report";
            this.getReport();
        }
        else {
            this.title = "Add Report";
        }
        this.getAdventureCell();
        this.getSeasonTerm();
    };
    AddReportComponent.prototype.getAdventureCell = function () {
        var _this = this;
        this._trgTeam.getAllAdventureCellType().subscribe(function (res) {
            // console.log(res); 
            if (res.status = '1') {
                _this.adventureCellTypes = res.List;
            }
        });
    };
    AddReportComponent.prototype.getSeasonTerm = function () {
        var _this = this;
        this._trgTeam.getAllSeasonTerm().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.seasonTerms = res.List;
            }
        });
    };
    AddReportComponent.prototype.getReport = function () {
        var _this = this;
        this.spinner.show();
        this._trgTeam.getByIdReport(this.id).subscribe(function (res) {
            console.log("by id", res);
            _this.spinner.hide();
            if (res.status == '1') {
                _this.addReportForm.patchValue({
                    name: res.List.name,
                    seasonTerm: res.List.seasonTerm.id,
                    year: res.List.year,
                    description: res.List.description,
                    status: res.List.status,
                    id: _this.id
                });
                _this.nameLength = res.List.name.length;
                _this.descLength = res.List.description.length;
                _this.docUrl = res.List.document;
            }
            else {
                _this._trgBattalion.openSnackbar(res.msg);
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    /** ========= CHARACTERS COUNT ========= */
    AddReportComponent.prototype.charCount = function (e, t) {
        if (t == 'name')
            this.nameLength = e.target.value.length;
        if (t == 'description')
            this.descLength = e.target.value.length;
    };
    Object.defineProperty(AddReportComponent.prototype, "f", {
        get: function () {
            return this.addReportForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddReportComponent.prototype.openDoc = function (l) {
        var dialogRef = this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], {
            width: '1200px', height: '600px',
            data: {
                type: 'document', url: l
            }
        });
    };
    AddReportComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this._trgBattalion.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addReportForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
        console.log("selected Doc", this.addReportForm.value);
    };
    AddReportComponent.prototype.submit = function () {
        var _this = this;
        if (this.addReportForm.valid) {
            console.log("Doc", this.isDoc);
            if (this.addReportForm.value.doc == null) {
                this.isDoc = false;
                console.log("Doc", this.isDoc);
            }
            else {
                this.isDoc = true;
                this.spinner.show();
                this._trgTeam.addReport(this.addReportForm.value).subscribe(function (res) {
                    _this.apiRes(res);
                }, function (err) {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar("Some Error Occured.");
                });
            }
        }
        else {
            this.isError = true;
        }
    };
    AddReportComponent.prototype.updateReport = function () {
        var _this = this;
        if (this.addReportForm.valid) {
            this.spinner.show();
            this._trgTeam.updateReport(this.addReportForm.value).subscribe(function (res) {
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddReportComponent.prototype.apiRes = function (res) {
        if (res.status == '1') {
            this.spinner.hide();
            this._trgBattalion.openSnackbar(res.msg);
            this.goBack();
        }
        else {
            this.spinner.hide();
            this._trgBattalion.openSnackbar(res.msg);
        }
    };
    AddReportComponent.prototype.goBack = function () {
        if (this.router.url.includes('/main/admin/trg-team/')) {
            this.router.navigate(['main/admin/trg-team/adventure-cell/report']);
        }
        else {
            this.router.navigate(['main/trg-team/adventure-cell/report']);
        }
    };
    AddReportComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_5__["TrgBattalionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    AddReportComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-report',
            template: _raw_loader_add_report_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_report_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_5__["TrgBattalionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AddReportComponent);
    return AddReportComponent;
}());



/***/ })

}]);