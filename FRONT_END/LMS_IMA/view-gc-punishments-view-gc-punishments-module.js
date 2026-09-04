(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-gc-punishments-view-gc-punishments-module"],{

/***/ "PD7J":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/punishments/view-gc-punishments/view-gc-punishments.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\n    <h4 class=\"card-heading\">\n        <button mat-icon-button (click)=\"goBack()\">\n            <mat-icon>chevron_left</mat-icon>\n        </button> Adjutant Branch <span class=\"sub-menu1\"> > OC's Punishments</span> <span class=\"sub-menu1\"> > View\n            Punishments\n        </span>\n    </h4>\n</div>\n<mat-card>\n\n    <div class=\"m-2\">\n\n        <div class=\"row\">\n            <div class=\"ml-2 col-md-2 detail-head \">\n                <span> <b>Rank </b> </span>\n            </div>\n            <div class=\"ml-2 col-md-2 detail-head\">\n                <span> <b>Name </b> </span>\n            </div>\n            <div class=\"ml-2 col-md-2 detail-head\">\n                <span> <b>IMA Number </b> </span>\n            </div>\n            <div class=\"ml-2 col-md-2 detail-head\">\n                <span> <b>Battalion </b> </span>\n            </div>\n            <div class=\"ml-2 col-md-2 detail-head\">\n                <span> <b>Company </b> </span>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"ml-2 col-md-2 border cadet-detail \">\n                <span>{{cadetDetails.rank}} </span>\n            </div>\n            <div class=\"ml-2 col-md-2 border cadet-detail\">\n                <span>{{cadetDetails.name}}</span>\n            </div>\n            <div class=\"ml-2 col-md-2 border cadet-detail\">\n                <span>{{cadetDetails.serviceId}}</span>\n            </div>\n            <div class=\"ml-2 col-md-2 border cadet-detail\">\n                <span>{{cadetDetails.battalian}} Bn</span>\n            </div>\n\n            <div class=\"ml-2 col-md-2 border cadet-detail\">\n                <span>{{cadetDetails.company}}</span>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"top-br mb-2\">\n        <form [formGroup]=\"addPunishmentForm\" (ngSubmit)=\"addPunishment()\">\n\n            <div class=\"row\">\n\n                <div class=\"form-group col-md-6\">\n                    <label for=\"position\">Offence<span class=\"required\">*</span></label>\n                    <input id=\"\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"offence\"\n                        placeholder=\"Offence\">\n                    <span class=\"validation_msg\" *ngIf=\"f.offence.errors && f.offence.errors.required && isError\">Please\n                        Enter Offence</span>\n                </div>\n\n                <div class=\"form-group col-md-6\">\n                    <label for=\"position\">Date<span class=\"required\">*</span></label>\n                    <input id=\"date\" type=\"date\" class=\"form-control\" formControlName=\"date\">\n                    <span class=\"validation_msg\" *ngIf=\"f.date.errors && f.date.errors.required && isError\">Please\n                        Select Date</span>\n                </div>\n\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"form-group col-md-6\">\n                    <label for=\"position\">Punishment Awarded<span class=\"required\">*</span></label>\n                    <input id=\"\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"punshmentAwarded\"\n                        placeholder=\"Punishment Awarded\">\n                    <span class=\"validation_msg\"\n                        *ngIf=\"f.punshmentAwarded.errors && f.punshmentAwarded.errors.required && isError\">Please\n                        Enter Punishment Awarded</span>\n                </div>\n\n                <div class=\"form-group col-md-6\">\n                    <label for=\"position\">Total Punishments<span class=\"required\">*</span></label>\n                    <input id=\"points\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"points\"\n                        placeholder=\"Points\">\n                    <span class=\"validation_msg\" *ngIf=\"f.points.errors && f.points.errors.required && isError\">Please\n                        Enter Total Punishments</span>\n                </div>\n\n                <div class=\"form-group col-md-6\">\n                    <label for=\"position\">Awarded By<span class=\"required\">*</span></label>\n                    <input id=\"awardedBy\" type=\"text\" class=\"form-control\" formControlName=\"awardedBy\"\n                        placeholder=\"Officer's Name\">\n                    <span class=\"validation_msg\"\n                        *ngIf=\"f.awardedBy.errors && f.awardedBy.errors.required && isError\">Please Enter Name</span>\n                </div>\n\n            </div>\n\n\n            <!-- <div class=\"row\">\n                <div class=\"form-group col-md-6\">       \n                <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\n                  <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\" >\n                    <option value=\"\" disabled selected hidden >Select</option>\n                    <option value=\"1\">Active</option>\n                    <option value=\"0\">Inactive</option>\n                  </select>\n                  <span  class=\"validation_msg\"  *ngIf=\"f.status.touched && f.status.invalid\" >*Please Select Status</span>\n                </div>\n              </div> -->\n            <div class=\"text-right\">\n                <button mat-raised-button (click)=\"goBack()\">Back</button>\n                <button mat-raised-button>Submit</button>\n            </div>\n        </form>\n    </div>\n    <div>\n        <div class=\"mat-new mat-new-internal\">\n            <h4 class=\"card-heading card-heading-internal\">\n\n                <span class=\"sub-menu1\"> Punishments Awarded</span>\n            </h4>\n        </div>\n\n        <div *ngIf=\"!punishmentsList.length\" class=\"text-center\">\n            <h5>\n                No Punishments Awarded.\n            </h5>\n        </div>\n\n        <table class=\"table\" *ngIf=\"punishmentsList.length\">\n            <thead>\n                <tr>\n                    <th>Sr. No.</th>\n                    <th>Date</th>\n                    <th>Offence</th>\n                    <th>Total Punishments</th>\n                    <th>Punishment Awarded</th>\n                    <th>Awarded By</th>\n                    <th>Edit</th>\n                    <th>Delete</th>\n\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let p of punishmentsList; let i=index\">\n                    <td> {{i+1}} </td>\n                    <td> {{p.date | date:'dd MMM yyyy'}} </td>\n                    <td> {{p.offence}} </td>\n                    <td> {{p.points}} </td>\n                    <td> {{p.punshmentAwarded}} </td>\n                    <td> {{p.awardedBy}} </td>\n                    <td>\n                        <button mat-icon-button (click)=\"openDialog(p)\">\n                            <mat-icon>\n                                edit\n                            </mat-icon>\n                        </button>\n                    </td>\n                    <td>\n                        <button mat-icon-button (click)=\"delete(p)\">\n                            <mat-icon>\n                                delete\n                            </mat-icon>\n                        </button>\n                    </td>\n\n                </tr>\n            </tbody>\n            <tfoot>\n                <tr>\n                    <td colspan=\"3\" class=\"text-right\">Total</td>\n                    <td>\n                        <h4>{{totalPoints}}</h4>\n                    </td>\n                </tr>\n            </tfoot>\n        </table>\n    </div>");

/***/ }),

/***/ "R3dd":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/punishments/view-gc-punishments/view-gc-punishments.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body .mat-icon-button, body .mat-mini-fab {\n  height: 1.125rem !important;\n  width: 1.125rem !important;\n}\n\n.detail-head {\n  padding-left: 0px;\n}\n\n.cadet-detail {\n  min-height: 35px;\n  padding-top: 5px;\n}\n\n.mat-new-internal {\n  padding: 0 0 0 0 !important;\n}");

/***/ }),

/***/ "py1J":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/punishments/view-gc-punishments/view-gc-punishments.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ViewGcPunishmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewGcPunishmentsModule", function() { return ViewGcPunishmentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _view_gc_punishments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-gc-punishments.component */ "vwlY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
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
        component: _view_gc_punishments_component__WEBPACK_IMPORTED_MODULE_2__["ViewGcPunishmentsComponent"],
    },
];
var ViewGcPunishmentsModule = /** @class */ (function () {
    function ViewGcPunishmentsModule() {
    }
    ViewGcPunishmentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _view_gc_punishments_component__WEBPACK_IMPORTED_MODULE_2__["ViewGcPunishmentsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], ViewGcPunishmentsModule);
    return ViewGcPunishmentsModule;
}());



/***/ }),

/***/ "vwlY":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/punishments/view-gc-punishments/view-gc-punishments.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ViewGcPunishmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewGcPunishmentsComponent", function() { return ViewGcPunishmentsComponent; });
/* harmony import */ var _raw_loader_view_gc_punishments_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./view-gc-punishments.component.html */ "PD7J");
/* harmony import */ var _view_gc_punishments_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-gc-punishments.component.scss */ "R3dd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _edit_punishment_edit_punishment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../edit-punishment/edit-punishment.component */ "XNaa");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ViewGcPunishmentsComponent = /** @class */ (function () {
    function ViewGcPunishmentsComponent(router, fb, EDossierService, adjutantService, sharedService, spinner, dialog, cdref) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.EDossierService = EDossierService;
        this.adjutantService = adjutantService;
        this.sharedService = sharedService;
        this.spinner = spinner;
        this.dialog = dialog;
        this.cdref = cdref;
        this.punishmentsList = [];
        this.totalPoints = 0;
        this.EDossierService.objOfCadet.subscribe(function (res) {
            // console.log(res);
            if (!res) {
                _this.goBack();
            }
            else {
                _this.cadetDetails = res;
                _this.cadetDetails.rank = (_this.cadetDetails.nationality == 'India') ? 'GC' : 'FGC';
            }
        });
        this.addPunishmentForm = this.fb.group({
            awardedBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            offence: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            points: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            punshmentAwarded: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            serviceId: [this.cadetDetails.serviceId],
            status: ['1'],
            termId: [this.cadetDetails.termId],
        });
    }
    ViewGcPunishmentsComponent.prototype.ngOnInit = function () {
    };
    ViewGcPunishmentsComponent.prototype.ngAfterViewInit = function () {
        this.getTotalPunishments();
    };
    ViewGcPunishmentsComponent.prototype.getTotalPunishments = function () {
        var _this = this;
        this.adjutantService.getGCAllPunishments(this.cadetDetails.serviceId).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.punishmentsList = res.object;
                _this.getTotalPoints();
                _this.cdref.detectChanges();
            }
        });
    };
    ViewGcPunishmentsComponent.prototype.getTotalPoints = function () {
        var _this = this;
        this.totalPoints = 0;
        this.punishmentsList.forEach(function (el) {
            _this.totalPoints = _this.totalPoints + el.points;
        });
    };
    Object.defineProperty(ViewGcPunishmentsComponent.prototype, "f", {
        get: function () {
            return this.addPunishmentForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ViewGcPunishmentsComponent.prototype.addPunishment = function () {
        var _this = this;
        if (this.addPunishmentForm.valid) {
            this.isError = false;
            this.spinner.show();
            this.adjutantService.addGC_Punishment(this.addPunishmentForm.value).subscribe(function (res) {
                if (res.status == "OK") {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar('Punishment Added Successfully.');
                    _this.addPunishmentForm.patchValue({
                        awardedBy: '',
                        date: '',
                        offence: '',
                        points: '',
                        punshmentAwarded: '',
                    });
                    _this.getTotalPunishments();
                }
            });
        }
        else {
            this.isError = true;
            this.adjutantService.openSnackbar('Please Fill All Required Fields.');
        }
    };
    ViewGcPunishmentsComponent.prototype.delete = function (data) {
        var _this = this;
        var alldata = {
            id: data.id,
            status: 2,
        };
        this.spinner.show();
        console.log(alldata);
        this.adjutantService.editGC_Punishment(alldata).subscribe(function (res) {
            _this.adjutantService.openSnackbar("Record Successfully deleted");
            _this.getTotalPunishments();
            _this.spinner.hide();
            _this.cdref.detectChanges();
        });
    };
    ViewGcPunishmentsComponent.prototype.openDialog = function (p) {
        var _this = this;
        var dialogRef = this.dialog.open(_edit_punishment_edit_punishment_component__WEBPACK_IMPORTED_MODULE_10__["EditPunishmentComponent"], {
            width: "800px",
            height: "450px",
            data: {
                type: 'edit-punishment',
                title: 'Edit Punishment',
                message: '',
                form: p
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            console.log(res);
            if (res.dialogResult.status == "OK") {
                _this.getTotalPunishments();
            }
        });
    };
    ViewGcPunishmentsComponent.prototype.goBack = function () {
        this.router.navigate(['/main/adjutant-branch/punishments']);
    };
    ViewGcPunishmentsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_5__["EDossierService"] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_6__["AdjutantService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    ViewGcPunishmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-view-gc-punishments',
            template: _raw_loader_view_gc_punishments_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_view_gc_punishments_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_5__["EDossierService"], app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_6__["AdjutantService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], ViewGcPunishmentsComponent);
    return ViewGcPunishmentsComponent;
}());



/***/ })

}]);