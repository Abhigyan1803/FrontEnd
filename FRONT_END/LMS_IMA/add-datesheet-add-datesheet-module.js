(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-datesheet-add-datesheet-module"],{

/***/ "9HBG":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/datesheet/add-datesheet/add-datesheet.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: AddDatesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDatesheetComponent", function() { return AddDatesheetComponent; });
/* harmony import */ var _raw_loader_add_datesheet_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-datesheet.component.html */ "kaoD");
/* harmony import */ var _add_datesheet_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-datesheet.component.scss */ "ZKXG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
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










var AddDatesheetComponent = /** @class */ (function () {
    function AddDatesheetComponent(fb, spinner, cdref, dialog, snackbar, router, route, service) {
        var _this = this;
        this.fb = fb;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.router = router;
        this.route = route;
        this.service = service;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.isDoc = true;
        this.descLength = 0;
        this.nameLength = 0;
        this.route.params.subscribe(function (params) {
            console.log("ROUTE PARAMETERS", params);
            _this.term = params.term;
            if (params.term == "I Term") {
                _this.termId = 1;
                console.log(_this.term);
            }
            else if (params.term == "II Term") {
                _this.termId = 2;
                console.log(_this.term);
            }
            else if (params.term == "II Tech") {
                _this.termId = 7;
                console.log(_this.term);
            }
            else if (params.term == "III Term") {
                _this.termId = 3;
                console.log(_this.term);
            }
            _this.addDatesheetForm = _this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                termId: [_this.termId],
                doc: []
            });
        });
    }
    AddDatesheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unSelectedFile = this.docFile.nativeElement.files;
        if (this.router.url.includes('view-datesheet')) {
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.pTitle = "View Datesheet";
            this.service.viewDatesheetById(this.id).subscribe(function (res) {
                // console.log(res);
                if (res.status == '1') {
                    _this.addDatesheetForm.patchValue({
                        name: res.List.name,
                        description: res.List.description,
                        status: res.List.status,
                    });
                    _this.docUrl = res.List.document;
                    _this.descLength = res.List.description.length;
                }
            });
        }
        else {
            this.pTitle = "Add Datesheet";
        }
    };
    Object.defineProperty(AddDatesheetComponent.prototype, "f", {
        get: function () {
            return this.addDatesheetForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    /** ========= CHARACTERS COUNT ========= */
    AddDatesheetComponent.prototype.goBack = function () {
        this.router.navigate(['/main/trg-team/gso-2-assessment/' + this.term + '/service-subjects/datesheet']);
    };
    AddDatesheetComponent.prototype.charCount = function (e, t) {
        if (t == 'name')
            this.nameLength = e.target.value.length;
        if (t == 'description')
            this.descLength = e.target.value.length;
    };
    AddDatesheetComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.addDatesheetForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddDatesheetComponent.prototype.openDoc = function (d) {
        console.log("Abc", d);
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', url: d
            }
        });
    };
    AddDatesheetComponent.prototype.addDatesheet = function () {
        var _this = this;
        if (this.addDatesheetForm.valid) {
            console.log("odc", this.addDatesheetForm.value.doc);
            if (this.addDatesheetForm.value.doc == null) {
                this.isDoc = false;
            }
            else {
                this.isDoc = true;
                this.spinner.show();
                this.service.addDatesheet(this.addDatesheetForm.value).subscribe(function (res) {
                    if (res.status == 'Success Messgae') {
                        _this.spinner.hide();
                        _this.openSnackbar(res.msg);
                        _this.cdref.detectChanges();
                        _this.goBack();
                    }
                    else {
                        _this.spinner.hide();
                        _this.openSnackbar(res.msg);
                    }
                }, function (err) {
                    _this.spinner.hide();
                    _this.openSnackbar('Some Error Occured.');
                });
            }
        }
        else {
            this.isError = true;
        }
    };
    AddDatesheetComponent.prototype.updateDatesheet = function () {
        var _this = this;
        if (this.addDatesheetForm.valid) {
            this.spinner.show();
            this.service.updateDatesheet(this.id, this.addDatesheetForm.value).subscribe(function (res) {
                // console.log(res);
                if (res.status == '1') {
                    _this.spinner.hide();
                    _this.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.goBack();
                }
                else {
                    _this.spinner.hide();
                    _this.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.openSnackbar('Some Error Occured.');
            });
        }
        else {
            this.isError = true;
        }
    };
    AddDatesheetComponent.prototype.openSnackbar = function (msg) {
        this.snackbar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    AddDatesheetComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"] }
    ]; };
    AddDatesheetComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddDatesheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-datesheet',
            template: _raw_loader_add_datesheet_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_datesheet_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"]])
    ], AddDatesheetComponent);
    return AddDatesheetComponent;
}());



/***/ }),

/***/ "LiWP":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/datesheet/add-datesheet/add-datesheet.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AddDatesheetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDatesheetModule", function() { return AddDatesheetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _add_datesheet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-datesheet.component */ "9HBG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _add_datesheet_component__WEBPACK_IMPORTED_MODULE_9__["AddDatesheetComponent"]
    }
];
var AddDatesheetModule = /** @class */ (function () {
    function AddDatesheetModule() {
    }
    AddDatesheetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_datesheet_component__WEBPACK_IMPORTED_MODULE_9__["AddDatesheetComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"]
            ]
        })
    ], AddDatesheetModule);
    return AddDatesheetModule;
}());



/***/ }),

/***/ "ZKXG":
/*!************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/datesheet/add-datesheet/add-datesheet.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "kaoD":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-assessment/service-subjects/datesheet/add-datesheet/add-datesheet.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n          GSO-2 (Assesment) <span class=\"sub-menu1\"> > {{term}} > Service Subject > Datesheet > {{pTitle}} </span>\r\n        <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addDatesheetForm\" >\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-12\">\r\n                    <label class=\"form-label\">Name  <span class=\"char-count\" > ({{nameLength}}/100) </span> <span class=\"required\">*</span></label>\r\n                    <input type=\"text\" formControlName=\"name\" maxlength=\"100\" placeholder=\"Name\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >Date Sheet Name is required</span> \r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label class=\"form-label\"> Description <span class=\"char-count\" > ({{descLength}}/500) </span> <span class=\"required\">*</span></label>\r\n                    <textarea class=\"form-control\" maxlength=\"500\" id=\"message\" formControlName=\"description\" (input)=\"charCount($event,'description')\" placeholder=\"Description (Maximum 500 Characters)\"></textarea>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >Description is required</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\"> Document <span class=\"required\">*</span></label>\r\n                <input type=\"file\"  #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\"> \r\n                <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\" >description</mat-icon>\r\n                <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n                <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\"> Status <span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\" >\r\n                      <option value=\"\" selected hidden disabled>Status</option>\r\n                      <option value=\"1\">Active</option>\r\n                      <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span>\r\n                  </div>\r\n            </div>\r\n\r\n            <button *ngIf=\"pTitle == 'Add Datesheet'\"   mat-raised-button (click)=\"addDatesheet()\"  >Add Datesheet</button>\r\n            <button *ngIf=\"pTitle == 'View Datesheet'\" mat-raised-button (click)=\"updateDatesheet()\"  >Update Datesheet</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ })

}]);