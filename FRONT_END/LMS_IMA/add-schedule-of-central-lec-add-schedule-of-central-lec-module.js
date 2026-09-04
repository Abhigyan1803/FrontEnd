(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-schedule-of-central-lec-add-schedule-of-central-lec-module"],{

/***/ "0VH5":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/schedule-of-central-lec/add-schedule-of-central-lec/add-schedule-of-central-lec.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: AddScheduleOfCentralLecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddScheduleOfCentralLecComponent", function() { return AddScheduleOfCentralLecComponent; });
/* harmony import */ var _raw_loader_add_schedule_of_central_lec_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-schedule-of-central-lec.component.html */ "S8+y");
/* harmony import */ var _add_schedule_of_central_lec_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-schedule-of-central-lec.component.scss */ "GI9O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddScheduleOfCentralLecComponent = /** @class */ (function () {
    function AddScheduleOfCentralLecComponent(fb, service, snackbar, dialog, spinner, router, route, cdref) {
        var _this = this;
        this.fb = fb;
        this.service = service;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.spinner = spinner;
        this.router = router;
        this.route = route;
        this.cdref = cdref;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.isDoc = true;
        this.titleLength = 0;
        this.descLength = 0;
        this.addSopForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            doc: []
        });
        if (this.router.url.includes('view-schedule')) {
            this.spinner.show();
            this.pTitle = "View Schedule";
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getlCentralLectureDetails(this.id).subscribe(function (res) {
                if (res.status == '1') {
                    console.log(res);
                    _this.addSopForm.patchValue({
                        title: res.List.title,
                        description: res.List.description,
                        status: res.List.status
                    });
                    _this.docUrl = res.List.document;
                    _this.titleLength = res.List.title.length;
                    _this.descLength = res.List.description.length;
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
            });
        }
        else {
            this.pTitle = "Add Schedule";
        }
    }
    AddScheduleOfCentralLecComponent.prototype.ngOnInit = function () {
        this.unSelectedFile = this.docFile.nativeElement.files;
    };
    AddScheduleOfCentralLecComponent.prototype.goBack = function () {
        this.router.navigate(['/main/trg-team/gso-1-training/schedule-of-central-lec']);
    };
    Object.defineProperty(AddScheduleOfCentralLecComponent.prototype, "f", {
        get: function () {
            return this.addSopForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    /** ========= CHARACTERS COUNT ========= */
    AddScheduleOfCentralLecComponent.prototype.charCount = function (e, t) {
        if (t == 'title')
            this.titleLength = e.target.value.length;
        if (t == 'description')
            this.descLength = e.target.value.length;
    };
    AddScheduleOfCentralLecComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addSopForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddScheduleOfCentralLecComponent.prototype.addDocument = function () {
        var _this = this;
        console.log("Document", this.addSopForm.value.doc);
        if (this.addSopForm.valid) {
            if (this.addSopForm.value.doc == null) {
                this.isDoc = false;
            }
            else {
                this.isDoc = true;
                this.spinner.show();
                this.service.addSCentralLecture(this.addSopForm.value).subscribe(function (res) {
                    if (res.status == '1') {
                        _this.spinner.hide();
                        _this.cdref.detectChanges();
                        _this.openSnackbar(res.msg);
                        _this.router.navigate(['/main/trg-team/gso-1-training/schedule-of-central-lec']);
                    }
                    else {
                        _this.spinner.hide();
                        _this.openSnackbar(res.msg);
                    }
                }, function (err) {
                    _this.spinner.hide();
                    console.log(JSON.stringify(err));
                    _this.openSnackbar("Some Error Occured.");
                });
            }
        }
        else {
            this.isError = true;
        }
    };
    AddScheduleOfCentralLecComponent.prototype.updateDocument = function () {
        var _this = this;
        if (this.addSopForm.valid) {
            this.spinner.show();
            this.service.updatelCentralLectureDoc(this.id, this.addSopForm.value).subscribe(function (res) {
                if (res.status == '1') {
                    _this.spinner.hide();
                    _this.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.router.navigate(['/main/trg-team/gso-1-training/schedule-of-central-lec']);
                }
                else {
                    _this.spinner.hide();
                    _this.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddScheduleOfCentralLecComponent.prototype.openDoc = function () {
        // console.log(doc);  
        var dialogRef = this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], {
            width: '1200px', height: '600px',
            data: {
                type: 'document', url: this.docUrl
            }
        });
    };
    AddScheduleOfCentralLecComponent.prototype.openSnackbar = function (msg) {
        this.snackbar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    AddScheduleOfCentralLecComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_7__["TrgTeamService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    AddScheduleOfCentralLecComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddScheduleOfCentralLecComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-schedule-of-central-lec',
            template: _raw_loader_add_schedule_of_central_lec_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_schedule_of_central_lec_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_7__["TrgTeamService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], AddScheduleOfCentralLecComponent);
    return AddScheduleOfCentralLecComponent;
}());



/***/ }),

/***/ "42DG":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/schedule-of-central-lec/add-schedule-of-central-lec/add-schedule-of-central-lec.module.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: AddScheduleOfCentralLecModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddScheduleOfCentralLecModule", function() { return AddScheduleOfCentralLecModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _add_schedule_of_central_lec_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-schedule-of-central-lec.component */ "0VH5");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _add_schedule_of_central_lec_component__WEBPACK_IMPORTED_MODULE_9__["AddScheduleOfCentralLecComponent"]
    },
];
var AddScheduleOfCentralLecModule = /** @class */ (function () {
    function AddScheduleOfCentralLecModule() {
    }
    AddScheduleOfCentralLecModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_schedule_of_central_lec_component__WEBPACK_IMPORTED_MODULE_9__["AddScheduleOfCentralLecComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
            ]
        })
    ], AddScheduleOfCentralLecModule);
    return AddScheduleOfCentralLecModule;
}());



/***/ }),

/***/ "GI9O":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/schedule-of-central-lec/add-schedule-of-central-lec/add-schedule-of-central-lec.component.scss ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "S8+y":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-one-training/schedule-of-central-lec/add-schedule-of-central-lec/add-schedule-of-central-lec.component.html ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\n    <h4 class=\"card-heading\"> <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button> GSO-1 TRG <span class=\"sub-menu1\"> > Schedule of Central-lec ></span> <span class=\"sub-menu1\"> {{pTitle}}\n        </span>\n    </h4>\n</div>\n<mat-card>\n    <div class=\"top-br\">\n      <form [formGroup]=\"addSopForm\" >\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <label class=\"form-label\">Title <span class=\"char-count\" > ({{titleLength}}/100) </span><span class=\"required\">*</span></label>\n            <input type=\"text\" class=\"form-control\" maxlength=\"100\"  formControlName=\"title\" id=\"designation\" (input)=\"charCount($event,'title')\" placeholder=\"Title (Maximum 100 Characters)\">\n            <span class=\"validation_msg\" *ngIf=\"f.title.errors && f.title.errors.required && isError\" >Title is required</span>        \n          </div>\n        </div>\n  \n        <div class=\"row\">\n          <div class=\"form-group col-md-12\">\n            <label class=\"form-label\"> Description <span class=\"char-count\" > ({{descLength}}/500) </span> <span class=\"required\">*</span></label>\n            <textarea class=\"form-control\" maxlength=\"500\" id=\"message\" formControlName=\"description\" (input)=\"charCount($event,'description')\" placeholder=\"Description (Maximum 500 Characters)\"></textarea>\n            <span class=\"validation_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >Description is required</span>\n          </div>\n        </div>\n        \n        <div class=\"form-group\">\n          <label class=\"form-label\"> Document <span class=\"required\">*</span></label>\n          <input type=\"file\"  #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\"> \n          <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc()\" >description</mat-icon>\n          <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\n          <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <label class=\"form-label\"> Status <span class=\"required\">*</span></label>\n            <select class=\"form-control\" formControlName=\"status\" >\n              <option value=\"\" selected hidden disabled>Status</option>\n              <option value=\"1\">Active</option>\n              <option value=\"0\">Inactive</option>\n            </select>\n            <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span>\n          </div>\n        </div>\n     \n    \n        <button *ngIf=\"pTitle == 'Add Schedule'\" mat-raised-button  (click)=\"addDocument()\">Add</button>\n        <button *ngIf=\"pTitle == 'View Schedule'\" mat-raised-button  (click)=\"updateDocument()\">Update</button>\n\n      </form>\n    </div>\n  </mat-card>");

/***/ })

}]);