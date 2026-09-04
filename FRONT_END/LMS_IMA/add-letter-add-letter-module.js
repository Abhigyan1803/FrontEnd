(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-letter-add-letter-module"],{

/***/ "PoH6":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/adventure-cell/letters/add-letter/add-letter.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"><button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button> Adventure Cell <span class=\"sub-menu1\"> > Letters > {{pTitle}} </span>\r\n        <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addLetterForm\" >\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Name<span class=\"char-count\" > ({{nameLength}}/100) </span> <span class=\"required\">*</span></label>\r\n                    <input type=\"text\" (input)=\"charCount($event,'name')\" formControlName=\"name\" maxlength=\"100\" placeholder=\"Name (Maximum 100 Characters)\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >Name is required</span>   \r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Adventure Cell Type <span class=\"required\">*</span></label>\r\n                    <select type=\"text\" formControlName=\"acType\" class=\"form-control\">\r\n                        <option value=\"\" selected hidden disabled>Adventure Cell Type</option>\r\n                        <option *ngFor=\"let a of adventureCellTypes\" [value]=\"a.id\">{{a.type}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.acType.errors && f.acType.errors.required && isError\" >Adventure Cell Type is required</span>   \r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label class=\"form-label\">Description <span class=\"char-count\" > ({{descLength}}/500) </span><span class=\"required\">*</span></label>\r\n                    <textarea class=\"form-control\"  (input)=\"charCount($event,'description')\" id=\"message\" formControlName=\"description\" maxlength=\"500\" placeholder=\"Description (Maximum 500 Characters)\"></textarea>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >Description is required</span>   \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n                <input type=\"file\" #inputFile   (input)=\"charCount($event,'description')\" accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                <a href=\"javascript:void(0)\" *ngIf=\"docUrl\" (click)=\"openDoc(docUrl)\" ><mat-icon  class=\"document_icon\">description</mat-icon></a> \r\n                <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n                <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span>\r\n            </div>\r\n\r\n \r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Status<span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span>   \r\n                </div>\r\n            </div>\r\n\r\n            <button *ngIf=\"pTitle == 'Add Letter'\" mat-raised-button (click)=\"addLetter()\"  >Add Letter</button>\r\n            <button *ngIf=\"pTitle == 'View Letter'\" mat-raised-button (click)=\"updateLetter()\"  >Update Letter</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "YINi":
/*!**************************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/letters/add-letter/add-letter.module.ts ***!
  \**************************************************************************************/
/*! exports provided: AddLetterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLetterModule", function() { return AddLetterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _add_letter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-letter.component */ "zcRS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _add_letter_component__WEBPACK_IMPORTED_MODULE_9__["AddLetterComponent"]
    }
];
var AddLetterModule = /** @class */ (function () {
    function AddLetterModule() {
    }
    AddLetterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_letter_component__WEBPACK_IMPORTED_MODULE_9__["AddLetterComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"]
            ]
        })
    ], AddLetterModule);
    return AddLetterModule;
}());



/***/ }),

/***/ "ya50":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/letters/add-letter/add-letter.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "zcRS":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/letters/add-letter/add-letter.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddLetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLetterComponent", function() { return AddLetterComponent; });
/* harmony import */ var _raw_loader_add_letter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-letter.component.html */ "PoH6");
/* harmony import */ var _add_letter_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-letter.component.scss */ "ya50");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
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










var AddLetterComponent = /** @class */ (function () {
    function AddLetterComponent(fb, spinner, cdref, dialog, snackbar, router, route, service) {
        this.fb = fb;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.router = router;
        this.route = route;
        this.service = service;
        this.adventureCellTypes = [];
        this.pTitle = '';
        this.docUrl = '';
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.isDoc = true;
        this.nameLength = 0;
        this.descLength = 0;
        this.addLetterForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            acType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            doc: []
        });
    }
    AddLetterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unSelectedFile = this.docFile.nativeElement.files;
        this.service.getAllAdventureCellType().subscribe(function (res) {
            // console.log(res); 
            if (res.status = '1') {
                _this.adventureCellTypes = res.List;
            }
        });
        if (this.router.url.includes('view-letter')) {
            this.pTitle = "View Letter";
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getLetterById(this.id).subscribe(function (res) {
                console.log("Letter", res.status);
                if (res.status == '1') {
                    _this.addLetterForm.patchValue({
                        name: res.List.name,
                        description: res.List.description,
                        acType: res.List.acType.id,
                        status: res.List.status,
                    });
                    _this.docUrl = res.List.document;
                    _this.nameLength = res.List.name.length;
                    _this.descLength = res.List.description.length;
                }
            });
        }
        else {
            this.pTitle = "Add Letter";
        }
    };
    Object.defineProperty(AddLetterComponent.prototype, "f", {
        get: function () {
            return this.addLetterForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddLetterComponent.prototype.charCount = function (e, t) {
        if (t == 'name')
            this.nameLength = e.target.value.length;
        if (t == 'description')
            this.descLength = e.target.value.length;
    };
    AddLetterComponent.prototype.onSelectDoc = function (e) {
        this.docUrl = '';
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.addLetterForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddLetterComponent.prototype.openDoc = function (doc) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], {
            width: '1200px', height: '600px',
            data: {
                type: 'document', url: doc
            }
        });
    };
    AddLetterComponent.prototype.addLetter = function () {
        var _this = this;
        if (this.addLetterForm.valid) {
            if (this.addLetterForm.value.doc == null) {
                this.isDoc = false;
            }
            else {
                this.isDoc = true;
                this.spinner.show();
                this.service.addLetter(this.addLetterForm.value).subscribe(function (res) {
                    _this.apiRes(res);
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
    AddLetterComponent.prototype.updateLetter = function () {
        var _this = this;
        console.log(this.addLetterForm.value);
        this.spinner.show();
        this.service.updateLetter(this.id, this.addLetterForm.value).subscribe(function (res) {
            _this.apiRes(res);
        }, function (err) {
            _this.spinner.hide();
            _this.openSnackbar('Some Error Occured.');
        });
    };
    AddLetterComponent.prototype.apiRes = function (res) {
        console.log(res);
        if (res.status == '1') {
            this.spinner.hide();
            this.openSnackbar(res.msg);
            this.cdref.detectChanges();
            this.goBack();
        }
        else {
            this.spinner.hide();
            this.openSnackbar(res.msg);
        }
    };
    AddLetterComponent.prototype.openSnackbar = function (msg) {
        this.snackbar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    AddLetterComponent.prototype.goBack = function () {
        if (this.router.url.includes('/main/admin/trg-team/')) {
            this.router.navigate(['/main/admin/trg-team/adventure-cell/letters']);
        }
        else {
            this.router.navigate(['/main/trg-team/adventure-cell/letters']);
        }
    };
    AddLetterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"] }
    ]; };
    AddLetterComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddLetterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-letter',
            template: _raw_loader_add_letter_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_letter_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"]])
    ], AddLetterComponent);
    return AddLetterComponent;
}());



/***/ })

}]);