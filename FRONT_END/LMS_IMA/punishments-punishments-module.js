(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["punishments-punishments-module"],{

/***/ "1iNJ":
/*!*****************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/punishments/punishments.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "MCcB":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/punishments/punishments.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"maincontent\">\n    <div class=\"container-fluid mt-20\">\n  \n      <div class=\"mat-new\">\n        <h4 class=\"card-heading\"> Punishments </h4>\n      </div>\n  \n      \n      <div >\n          \n\n        <mat-card>\n            <div *ngIf=\"!punishmentsList.length\" class=\"text-center\" >\n                <h4>No Punishments Awarded.</h4>\n            </div>\n\n            <table *ngIf=\"punishmentsList.length\" class=\"table\" >\n                <thead>\n                    <tr>\n                        <th>Sr. No.</th>\n                        <th>Date</th>\n                        <th>Offence</th>\n                        <th>Total Punishments</th>\n                        <th>Punishment Awarded</th>\n                        <th>Awarded By</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let p of punishmentsList; let i=index\" >\n                        <td> {{i+1}} </td>\n                        <td> {{p.date | date:'dd MMM yyyy'}} </td>\n                        <td> {{p.offence}} </td>\n                        <td> {{p.points}} </td>\n                        <td> {{p.punshmentAwarded}} </td>\n                        <td> {{p.awardedBy}} </td>\n                    </tr>\n                </tbody>\n                <tfoot>\n                    <tr>\n                        <td colspan=\"3\" class=\"text-right\"> <h4>Total</h4> </td>\n                        <td>  <h4>{{totalPoints}}</h4> </td>\n                    </tr>\n                </tfoot>\n            </table>\n\n\n\n\n\n        </mat-card>\n\n\n  \n      </div>\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n      <!-- <mat-paginator #syllabusPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator> -->\n  \n  \n  </div>\n  \n  </div>\n    ");

/***/ }),

/***/ "R3IT":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/punishments/edit-punishment/edit-punishment.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-content {\n  display: block;\n  margin: 0;\n  padding: 0 24px;\n  max-height: 65vh;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.mat-dialog-title {\n  margin: 20px 0 0 23px;\n  display: block;\n}\n\n.mat-dialog-actions {\n  margin-right: 20px;\n  margin-top: 50px;\n}");

/***/ }),

/***/ "Vf8v":
/*!***************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/punishments/punishments.module.ts ***!
  \***************************************************************************/
/*! exports provided: PunishmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PunishmentsModule", function() { return PunishmentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _punishments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./punishments.component */ "avYF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _punishments_component__WEBPACK_IMPORTED_MODULE_2__["PunishmentsComponent"]
    },
];
var PunishmentsModule = /** @class */ (function () {
    function PunishmentsModule() {
    }
    PunishmentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _punishments_component__WEBPACK_IMPORTED_MODULE_2__["PunishmentsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ]
        })
    ], PunishmentsModule);
    return PunishmentsModule;
}());



/***/ }),

/***/ "XNaa":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/punishments/edit-punishment/edit-punishment.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EditPunishmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPunishmentComponent", function() { return EditPunishmentComponent; });
/* harmony import */ var _raw_loader_edit_punishment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./edit-punishment.component.html */ "dxgY");
/* harmony import */ var _edit_punishment_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-punishment.component.scss */ "R3IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditPunishmentComponent = /** @class */ (function () {
    function EditPunishmentComponent(fb, data, adjutantService, sharedService, dialogRef) {
        this.fb = fb;
        this.data = data;
        this.adjutantService = adjutantService;
        this.sharedService = sharedService;
        this.dialogRef = dialogRef;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-IN');
        this.isError = false;
        this.editPunishmentForm = this.fb.group({
            id: [''],
            awardedBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            offence: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            points: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            punshmentAwarded: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            serviceId: [''],
            status: ['1'],
            termId: [''],
        });
    }
    EditPunishmentComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        var formValues = this.data.form;
        this.editPunishmentForm.patchValue({
            id: formValues.id,
            awardedBy: formValues.awardedBy,
            date: this.datePipe.transform(formValues.date, 'yyyy-MM-dd'),
            offence: formValues.offence,
            points: formValues.points,
            punshmentAwarded: formValues.punshmentAwarded,
            serviceId: formValues.serviceId,
            status: 1,
            termId: formValues.termId,
        });
    };
    Object.defineProperty(EditPunishmentComponent.prototype, "f", {
        get: function () {
            return this.editPunishmentForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    EditPunishmentComponent.prototype.updatePunishment = function () {
        var _this = this;
        if (this.editPunishmentForm.valid) {
            this.isError = false;
            // this.spinner.show();
            this.adjutantService.editGC_Punishment(this.editPunishmentForm.value).subscribe(function (res) {
                if (res.status == "OK") {
                    // this.spinner.hide();
                    // this.sharedService.openSnackbar('Punishment Updated Successfully.')
                    _this.editPunishmentForm.reset();
                    _this.dialogRef.close({ dialogResult: res });
                }
                else {
                    _this.sharedService.openErrorSnackbarWithSeconds('Error', 3);
                }
            });
        }
        else {
            this.isError = true;
        }
    };
    EditPunishmentComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_6__["AdjutantService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
    ]; };
    EditPunishmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-edit-punishment',
            template: _raw_loader_edit_punishment_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_edit_punishment_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], Object, app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_6__["AdjutantService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], EditPunishmentComponent);
    return EditPunishmentComponent;
}());



/***/ }),

/***/ "avYF":
/*!******************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/punishments/punishments.component.ts ***!
  \******************************************************************************/
/*! exports provided: PunishmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PunishmentsComponent", function() { return PunishmentsComponent; });
/* harmony import */ var _raw_loader_punishments_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./punishments.component.html */ "MCcB");
/* harmony import */ var _punishments_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./punishments.component.scss */ "wngX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/gc/gc.service */ "yuBT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PunishmentsComponent = /** @class */ (function () {
    function PunishmentsComponent(route, router, gcService, spinner, sharedService, cdref) {
        this.route = route;
        this.router = router;
        this.gcService = gcService;
        this.spinner = spinner;
        this.sharedService = sharedService;
        this.cdref = cdref;
        this.punishmentsList = [];
        this.totalPoints = 0;
        this.cadetDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
    }
    PunishmentsComponent.prototype.ngOnInit = function () {
        this.getTotalPoints();
    };
    PunishmentsComponent.prototype.ngAfterViewInit = function () {
        this.getPunishments();
    };
    PunishmentsComponent.prototype.getPunishments = function () {
        var _this = this;
        this.gcService.getPunishments(this.cadetDetails.serviceId).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.punishmentsList = res.object;
                _this.getTotalPoints();
                _this.cdref.detectChanges();
            }
        });
    };
    PunishmentsComponent.prototype.getTotalPoints = function () {
        var _this = this;
        this.punishmentsList.forEach(function (el) {
            _this.totalPoints = _this.totalPoints + el.points;
        });
    };
    PunishmentsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_4__["GcService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    PunishmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-punishments',
            template: _raw_loader_punishments_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_punishments_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_4__["GcService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], PunishmentsComponent);
    return PunishmentsComponent;
}());



/***/ }),

/***/ "dxgY":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/punishments/edit-punishment/edit-punishment.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\n    <div  class=\"mat-dialog-title text-center\" >\n        <h1 >{{data.title}}</h1>\n    </div>\n    <form [formGroup]=\"editPunishmentForm\" (ngSubmit)=\"updatePunishment()\">\n\n        <div mat-dialog-content>\n\n            <div class=\"top-br mb-2\">\n\n                <div class=\"row\">\n\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"position\">Offence<span class=\"required\">*</span></label>\n                        <input id=\"\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"offence\"\n                            placeholder=\"Offence\">\n                        <span class=\"validation_msg\"\n                            *ngIf=\"f.offence.errors && f.offence.errors.required && isError\">Please\n                            Enter Offence</span>\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"position\">Date<span class=\"required\">*</span></label>\n                        <input id=\"date\" type=\"date\" class=\"form-control\" formControlName=\"date\">\n                        <span class=\"validation_msg\" *ngIf=\"f.date.errors && f.date.errors.required && isError\">Please\n                            Select Date</span>\n                    </div>\n\n                </div>\n\n                <div class=\"row\">\n\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"position\">Punishment Awarded<span class=\"required\">*</span></label>\n                        <input id=\"\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"punshmentAwarded\"\n                            placeholder=\"Punishment Awarded\">\n                        <span class=\"validation_msg\"\n                            *ngIf=\"f.punshmentAwarded.errors && f.punshmentAwarded.errors.required && isError\">Please\n                            Enter Punishment Awarded</span>\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"position\">Total Punishments<span class=\"required\">*</span></label>\n                        <input id=\"points\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"points\"\n                            placeholder=\"Points\">\n                        <span class=\"validation_msg\"\n                            *ngIf=\"f.points.errors && f.points.errors.required && isError\">Please\n                            Enter Total Punishments</span>\n                    </div>\n\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"position\">Awarded By<span class=\"required\">*</span></label>\n                        <input id=\"awardedBy\" type=\"text\" class=\"form-control\" formControlName=\"awardedBy\"\n                            placeholder=\"Officer's Name\">\n                        <span class=\"validation_msg\"\n                            *ngIf=\"f.awardedBy.errors && f.awardedBy.errors.required && isError\">Please Enter\n                            Name</span>\n                    </div>\n\n                </div>\n\n\n                <!-- <div class=\"row\">\n                <div class=\"form-group col-md-6\">       \n                <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\n                  <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\" >\n                    <option value=\"\" disabled selected hidden >Select</option>\n                    <option value=\"1\">Active</option>\n                    <option value=\"0\">Inactive</option>\n                  </select>\n                  <span  class=\"validation_msg\"  *ngIf=\"f.status.touched && f.status.invalid\" >*Please Select Status</span>\n                </div>\n              </div> -->\n\n              \n\n            </div>\n\n        </div>\n        <div mat-dialog-actions align=\"end\">\n            <div class=\"pull-right\">\n                <button mat-raised-button >Submit</button>\n                <button mat-button mat-dialog-close >Close</button>\n            </div>\n        </div>\n\n    </form>\n\n</div>");

/***/ }),

/***/ "fROU":
/*!***************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/punishments/punishments.component.ts ***!
  \***************************************************************************/
/*! exports provided: PunishmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PunishmentsComponent", function() { return PunishmentsComponent; });
/* harmony import */ var _raw_loader_punishments_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./punishments.component.html */ "hfsa");
/* harmony import */ var _punishments_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./punishments.component.scss */ "1iNJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/observable/of */ "G4OQ");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var PunishmentsComponent = /** @class */ (function () {
    function PunishmentsComponent(EDossierService, router, route, spinner, cdref, adjutantService, adminService, sharedService, dialog) {
        this.EDossierService = EDossierService;
        this.router = router;
        this.route = route;
        this.spinner = spinner;
        this.cdref = cdref;
        this.adjutantService = adjutantService;
        this.adminService = adminService;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.term = '';
        this.termId = '';
        this.terms = [];
        this.battalionList = [];
        this.companyList = [];
        this.battalionId = '';
        this.companyId = '';
        this.cadetList = [];
        this.displayedColumns = ['sNo', 'serviceId', 'rank', 'name', 'term', 'course', 'battalion', 'pointers', 'edit'];
    }
    PunishmentsComponent.prototype.ngOnInit = function () {
        this.getTerms();
        this.getBattalionList();
    };
    PunishmentsComponent.prototype.ngAfterViewInit = function () {
        this.getCadetsList();
    };
    PunishmentsComponent.prototype.getTerms = function () {
        var _this = this;
        this.adminService.getTerms().subscribe(function (res) {
            console.log("TERM: ", res);
            if (res.status == "1") {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
    };
    PunishmentsComponent.prototype.getBattalionList = function () {
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
    // deletePunishment(datasend: any) {
    //   const dialogRef = this.dialog.open(GcDeleteComponent, {
    //     data: {
    //       message: 'Are you sure want to delete?',
    //       buttonText: {
    //         ok: 'Save',
    //         cancel: 'No'
    //       }
    //     }
    //   });
    //   dialogRef.afterClosed().subscribe((confirmed: boolean) => {
    //     if (confirmed) {
    //       console.log("delete", datasend);
    //       let data1 = {
    //         id: datasend.id,
    //         status: 2
    //       }
    //       console.log(data1)
    //       this.adjutantService.editGC_Punishment(data1).subscribe(
    //         res => {
    //           if (res.status == 'OK') {
    //             this.sharedService.openSnackbar(res.message)
    //             this.cdref.detectChanges();
    //             this.ngAfterViewInit();
    //           }
    //         },
    //         err => {
    //           this.sharedService.openSnackbar('Error Occured.')
    //         }
    //       )
    //       this.spinner.hide();
    //     }
    //   })
    // }
    PunishmentsComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        this.companyList = [];
        this.company = '';
        this.companyId = '';
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
    PunishmentsComponent.prototype.companySelected = function (e) {
        var _this = this;
        this.companyList.find(function (el) {
            if (el.id == e) {
                _this.company = el.name;
                // return;
            }
        });
        console.log(this.company);
    };
    PunishmentsComponent.prototype.search = function () {
        if (this.serviceId) {
            this.getGCByImaNumber(this.serviceId);
        }
        else if (this.battalion || this.company || this.termId) {
            this.paginator.pageIndex = 0;
            this.paginator.pageSize = 10;
            this.getCadetsList();
        }
        else {
            this.sharedService.openAlertSnackbarWithSeconds("No Search Filters are Added.", 7);
        }
    };
    PunishmentsComponent.prototype.clearSearch = function () {
        if (this.battalion || this.company || this.serviceId || this.termId) {
            this.companyList = [];
            this.company = '';
            this.battalion = '';
            this.serviceId = '';
            this.battalionId = '';
            this.companyId = '';
            this.termId = '';
            this.getCadetsList();
        }
    };
    PunishmentsComponent.prototype.getCadetsList = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(/* this.sort.sortChange,  */ this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () {
            _this.spinner.show();
            return _this.adjutantService.getGC_PunishmentList(_this.paginator.pageIndex, _this.paginator.pageSize, _this.termId, _this.battalion, _this.company, _this.serviceId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (data) {
            _this.resultsLength = data.object.totalRecords;
            console.log("DATA: ", data);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(function () {
            console.log('===========Error here============');
            _this.spinner.hide();
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_10__["of"])([]);
            // return null;
        })).subscribe(function (data) {
            // console.log("DATA RECIEVED: ", data)
            if (data.status == 'OK') {
                _this.resultsLength = data.object.totalRecords;
                _this.cadetList = data.object.cadetFilterPayload;
                if (data.object.cadetFilterPayload.length > 0) {
                    _this.cadetList = data.object.cadetFilterPayload;
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
            // var scrollElem = document.querySelector('#orders');
            // scrollElem.scrollIntoView();
        });
    };
    PunishmentsComponent.prototype.getGCByImaNumber = function (serviceId) {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(/* this.sort.sortChange,  */ this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () {
            _this.spinner.show();
            return _this.adjutantService.getCadetByIMA_No(serviceId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (data) {
            _this.resultsLength = data.object.totalRecords;
            // console.log("DATA: ",data);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(function () {
            console.log('===========Error here============');
            _this.spinner.hide();
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_10__["of"])([]);
            // return null;
        })).subscribe(function (data) {
            // console.log("DATA RECIEVED: ", data)
            if (data.status == 'OK') {
                _this.resultsLength = data.object.totalRecords;
                _this.cadetList = data.object.cadetFilterPayload;
                if (data.object.cadetFilterPayload.length > 0) {
                    _this.cadetList = data.object.cadetFilterPayload;
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
            // var scrollElem = document.querySelector('#orders');
            // scrollElem.scrollIntoView();
        });
    };
    PunishmentsComponent.prototype.getRank = function (n) {
        var rank;
        if (n == "India") {
            rank = "GC";
        }
        else {
            rank = "FGC";
        }
        return rank;
    };
    PunishmentsComponent.prototype.viewPunishments = function (element) {
        this.EDossierService.setCadetObj(element);
        this.router.navigate(['/main/adjutant-branch/punishments/view-gc-punishments']);
    };
    PunishmentsComponent.ctorParameters = function () { return [
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_5__["EDossierService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_12__["AdjutantService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] }
    ]; };
    PunishmentsComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], { static: true },] }]
    };
    PunishmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-punishments',
            template: _raw_loader_punishments_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_punishments_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_5__["EDossierService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_12__["AdjutantService"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]])
    ], PunishmentsComponent);
    return PunishmentsComponent;
}());



/***/ }),

/***/ "hfsa":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/punishments/punishments.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\n    <h4 class=\"card-heading\"> Adjutant Branch <span class=\"sub-menu1\"> > GC Punishments </span> </h4>\n\n</div>\n\n\n<mat-card>\n\n\n    <div class=\"mb-2\" >\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-md-4\">\n                <label for=\"term\">Term</label>\n                <select id=\"term\" class=\"form-control\" [(ngModel)]=\"termId\">\n                    <option value=\"\" selected hidden disabled>Select</option>\n                    <option *ngFor=\"let t of terms\" [value]=\"t.id\"> {{t.name}}</option>\n                </select>\n            </div>\n            <div class=\"form-group col-md-4\">\n                <label for=\"battalion\">Battalion</label>\n                <select id=\"battalion\" (change)=\"battalionSelected($event.target.value)\" class=\"form-control\"\n                    [(ngModel)]=\"battalionId\">\n                    <option value=\"\" selected hidden disabled>Select</option>\n                    <option *ngFor=\"let b of battalionList\" [value]=\"b.id\"> {{b.shortName}} Bn</option>\n                </select>\n    \n            </div>\n    \n            <div class=\"form-group col-md-4\">\n                <label for=\"company\">Company</label>\n                <select id=\"company\" class=\"form-control\" (change)=\"companySelected($event.target.value)\"\n                    [(ngModel)]=\"companyId\">\n                    <option value=\"\" selected hidden disabled>Select</option>\n                    <option *ngFor=\"let c of companyList\" [value]=\"c.id\"> {{c?.name || ''}}</option>\n                </select>\n    \n            </div>\n    \n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"rank\">Search</label>\n                    <input placeholder=\"IMA Number/Service Id\" formcontrolname=\"\" type=\"text\" [(ngModel)]=\"serviceId\"\n                        class=\"form-control ng-untouched ng-pristine ng-invalid\">\n                </div>\n            </div>\n    \n    \n    \n    \n        </div>\n        <div class=\"text-right\">\n            <button mat-raised-button (click)=\"search()\">Submit</button>\n            <button mat-raised-button (click)=\"clearSearch()\">Clear</button>\n        </div>\n    \n\n    </div>\n    \n    <div class=\"example-container border \">\n        <div class=\"example-table-container\">\n            <table mat-table [dataSource]=\"cadetList\">\n\n                <ng-container matColumnDef=\"sNo\">\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"rank\">\n                    <th mat-header-cell *matHeaderCellDef> Rank </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{getRank(element.nationality)}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef> Name </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                </ng-container>\n            \n                <ng-container matColumnDef=\"serviceId\">\n                    <th mat-header-cell *matHeaderCellDef> IMA Number </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.serviceId}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"battalion\">\n                    <th mat-header-cell *matHeaderCellDef> Bn/Coy </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.battalian}}/{{element.company}}</td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"course\">\n                    <th mat-header-cell *matHeaderCellDef> Course No. </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.course}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"term\">\n                    <th mat-header-cell *matHeaderCellDef> Term </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.termName}}</td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"pointers\">\n                    <th mat-header-cell *matHeaderCellDef> Total Punishments </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.points || '0'}}</td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"edit\">\n                    <th mat-header-cell *matHeaderCellDef> View </th>\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \n                        <a href=\"javascript:void(0)\" (click)=\"viewPunishments(element)\" >\n                            <mat-icon>visibility</mat-icon>\n                        </a> </td>\n                </ng-container>\n\n                <!-- <ng-container matColumnDef=\"delete\">\n                    <th mat-header-cell *matHeaderCellDef> Delete </th>\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \n                        <a href=\"javascript:void(0)\" (click)=\"deletePunishment(element)\" >\n                            <mat-icon>delete</mat-icon>\n                        </a> </td>\n                </ng-container> -->\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                <tr class=\"mat-row\" *matNoDataRow>\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\n                </tr>\n            </table>\n        </div>\n\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" [length]=\"resultsLength\" showFirstLastButtons></mat-paginator>\n    </div>\n\n\n\n</mat-card>");

/***/ }),

/***/ "ljZ5":
/*!************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/punishments/punishments.module.ts ***!
  \************************************************************************/
/*! exports provided: PunishmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PunishmentsModule", function() { return PunishmentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _punishments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./punishments.component */ "fROU");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _edit_punishment_edit_punishment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-punishment/edit-punishment.component */ "XNaa");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _punishments_component__WEBPACK_IMPORTED_MODULE_2__["PunishmentsComponent"],
    },
    { path: 'view-gc-punishments', loadChildren: function () { return __webpack_require__.e(/*! import() | view-gc-punishments-view-gc-punishments-module */ "view-gc-punishments-view-gc-punishments-module").then(__webpack_require__.bind(null, /*! ./view-gc-punishments/view-gc-punishments.module */ "py1J")).then(function (m) { return m.ViewGcPunishmentsModule; }); } },
];
var PunishmentsModule = /** @class */ (function () {
    function PunishmentsModule() {
    }
    PunishmentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _punishments_component__WEBPACK_IMPORTED_MODULE_2__["PunishmentsComponent"],
                _edit_punishment_edit_punishment_component__WEBPACK_IMPORTED_MODULE_6__["EditPunishmentComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                app_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            entryComponents: [
                _edit_punishment_edit_punishment_component__WEBPACK_IMPORTED_MODULE_6__["EditPunishmentComponent"]
            ]
        })
    ], PunishmentsModule);
    return PunishmentsModule;
}());



/***/ }),

/***/ "wngX":
/*!********************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/punishments/punishments.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".maincontent {\n  min-height: 45vw;\n}\n\n.mat-new {\n  clear: both;\n  padding: 10px 0;\n  display: block;\n}\n\n.mat-new h4 {\n  margin-bottom: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card {\n  margin: 1rem 0;\n}\n\n.example-container {\n  min-height: auto;\n}");

/***/ })

}]);