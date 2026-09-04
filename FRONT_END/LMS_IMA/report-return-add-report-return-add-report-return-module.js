(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-return-add-report-return-add-report-return-module"],{

/***/ "JbSi":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/info-security/report-return/add-report-return/add-report-return.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "WuIV":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/gs-branch/security/info-security/report-return/add-report-return/add-report-return.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n      <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n      GS Branch <span class=\"sub-menu1\"> > Report / Return <span class=\"sub-menu1\"> > {{pageTitle}}</span></span>\r\n    </h4>\r\n  </div>\r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addPoliciesForm\">\r\n  \r\n        <div class=\"row\">\r\n\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Name<span class=\"required\">*</span></label>\r\n               <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n               placeholder=\"Name\">\r\n                <span class=\"validation_msg\"\r\n                    *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter Name</span>\r\n            </div>\r\n\r\n\r\n        </div> \r\n\r\n        <div class=\"row\">\r\n                 <div class=\"form-group col-md-12\">\r\n            <label for=\"awards\">Description <span class=\"char-count\" >   ({{descLength}}/1500)  </span> <span class=\"required\">*</span></label>\r\n            <!-- <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\"> -->\r\n            <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\"  (input)=\"charCount($event)\" maxlength=\"1500\" formControlName=\"description\"></textarea>\r\n            <span class=\"val_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >*Please Enter history</span>\r\n\r\n             </div>\r\n        </div> \r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n            <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n            <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\" >description</mat-icon>\r\n            <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n            <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span>\r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"status\">Status<span class=\"required\" >*</span></label>\r\n            <select name=\"\" id=\"\" class=\"form-control \" formControlName=\"status\">\r\n              <option value=\"\" disabled selected hidden>Status</option>\r\n              <option value=\"1\">Active</option>\r\n              <option value=\"0\">Inactive</option>\r\n            </select>\r\n            <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span> \r\n          </div>\r\n        </div>\r\n  \r\n        <button mat-raised-button *ngIf=\"pageTitle=='Add Return'\" (click)=\"addReturn()\">Add Return</button>\r\n        <button mat-raised-button *ngIf=\"pageTitle=='View Return'\" (click)=\"updateReturn()\">Update Return</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ }),

/***/ "X/Cg":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/gs-branch/security/info-security/report-return/add-report-return/add-report-return.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n      <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n      GS Branch <span class=\"sub-menu1\"> > Security > Info Security > Reports/Returns <span class=\"sub-menu1\"> > {{pageTitle}}</span></span>\r\n    </h4>\r\n  </div>\r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addPoliciesForm\">\r\n  \r\n        <div class=\"row\">\r\n\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Name<span class=\"required\">*</span></label>\r\n               <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n               placeholder=\"Name\">\r\n                <span class=\"validation_msg\"\r\n                    *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter Name</span>\r\n            </div>\r\n\r\n\r\n        </div> \r\n\r\n        <div class=\"row\">\r\n                 <div class=\"form-group col-md-12\">\r\n            <label for=\"awards\">Description <span class=\"char-count\" >   ({{descLength}}/1500)  </span> <span class=\"required\">*</span></label>\r\n            <!-- <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\"> -->\r\n            <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\"  (input)=\"charCount($event)\" maxlength=\"1500\" formControlName=\"description\"></textarea>\r\n            <span class=\"val_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >*Please Enter history</span>\r\n\r\n             </div>\r\n        </div> \r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n            <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n            <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\" >description</mat-icon>\r\n            <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n            <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\" >Document is required</span>  \r\n          \r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"status\">Status<span class=\"required\" >*</span></label>\r\n            <select name=\"\" id=\"\" class=\"form-control \" formControlName=\"status\">\r\n              <option value=\"\" disabled selected hidden>Status</option>\r\n              <option value=\"1\">Active</option>\r\n              <option value=\"0\">Inactive</option>\r\n            </select>\r\n            <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span> \r\n          </div>\r\n        </div>\r\n  \r\n        <button mat-raised-button *ngIf=\"pageTitle=='Add Reports/Returns'\" (click)=\"addReturn()\">Add Return</button>\r\n        <button mat-raised-button *ngIf=\"pageTitle=='View Reports/Returns'\" (click)=\"updateReturn()\">Update Return</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ }),

/***/ "Z8oc":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/info-security/report-return/add-report-return/add-report-return.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AddReportReturnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReportReturnModule", function() { return AddReportReturnModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_report_return_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-report-return.component */ "sDQc");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_report_return_component__WEBPACK_IMPORTED_MODULE_8__["AddReportReturnComponent"]
    }
];
var AddReportReturnModule = /** @class */ (function () {
    function AddReportReturnModule() {
    }
    AddReportReturnModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_report_return_component__WEBPACK_IMPORTED_MODULE_8__["AddReportReturnComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
            ]
        })
    ], AddReportReturnModule);
    return AddReportReturnModule;
}());



/***/ }),

/***/ "rfcD":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/info-security/report-return/add-report-return/add-report-return.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AddReportReturnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReportReturnModule", function() { return AddReportReturnModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_report_return_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-report-return.component */ "u6PF");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_report_return_component__WEBPACK_IMPORTED_MODULE_8__["AddReportReturnComponent"]
    }
];
var AddReportReturnModule = /** @class */ (function () {
    function AddReportReturnModule() {
    }
    AddReportReturnModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_report_return_component__WEBPACK_IMPORTED_MODULE_8__["AddReportReturnComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
            ]
        })
    ], AddReportReturnModule);
    return AddReportReturnModule;
}());



/***/ }),

/***/ "sDQc":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/info-security/report-return/add-report-return/add-report-return.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: AddReportReturnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReportReturnComponent", function() { return AddReportReturnComponent; });
/* harmony import */ var _raw_loader_add_report_return_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-report-return.component.html */ "WuIV");
/* harmony import */ var _add_report_return_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-report-return.component.scss */ "utdC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddReportReturnComponent = /** @class */ (function () {
    function AddReportReturnComponent(dialog, spinner, route, fb, router, adminservice, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add Return";
        this.battalions = [];
        this.descLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addPoliciesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.isDoc = true;
        this.addPoliciesForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            doc: []
        });
        // this.getBattalion();
    }
    AddReportReturnComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-return')) {
            this.pageTitle = 'Add Return';
        }
        else if (this.router.url.includes('view-return')) {
            this.spinner.show();
            this.pageTitle = 'View Return';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adminservice.getRETURNByID(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addPoliciesForm.patchValue({
                        name: res.object.name,
                        description: res.object.description,
                        status: res.object.status,
                    });
                    _this.descLength = res.object.description.length;
                    _this.docUrl = res.object.file;
                    _this.isDoc = true;
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            });
        }
    };
    Object.defineProperty(AddReportReturnComponent.prototype, "f", {
        get: function () {
            return this.addPoliciesForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddReportReturnComponent.prototype.goBack = function () {
        this.router.navigate(['main/admin/GS-Branch/security/info-security/return']);
    };
    AddReportReturnComponent.prototype.addReturn = function () {
        var _this = this;
        if (this.addPoliciesForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.adminservice.addRETURN(this.addPoliciesForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/admin/GS-Branch/security/info-security/return']);
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddReportReturnComponent.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddReportReturnComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    AddReportReturnComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.adminservice.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addPoliciesForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddReportReturnComponent.prototype.updateReturn = function () {
        var _this = this;
        this.spinner.show();
        // console.log("Bdo", this.addBdoForm.value);
        if (this.addPoliciesForm.valid) {
            this.adminservice.updateRETURN(this.addPoliciesForm.value, this.id).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddReportReturnComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
            if (this.router.url.includes('main/GS-Branch'))
                this.router.navigate(['main/admin/GS-Branch/security/info-security/return']);
            if (this.router.url.includes('main/admin'))
                this.router.navigate(['main/admin/GS-Branch/security/info-security/return']);
        }
        else {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
        }
    };
    AddReportReturnComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddReportReturnComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddReportReturnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-report-return',
            template: _raw_loader_add_report_return_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_report_return_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddReportReturnComponent);
    return AddReportReturnComponent;
}());



/***/ }),

/***/ "u6PF":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/info-security/report-return/add-report-return/add-report-return.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: AddReportReturnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReportReturnComponent", function() { return AddReportReturnComponent; });
/* harmony import */ var _raw_loader_add_report_return_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-report-return.component.html */ "X/Cg");
/* harmony import */ var _add_report_return_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-report-return.component.scss */ "JbSi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddReportReturnComponent = /** @class */ (function () {
    function AddReportReturnComponent(dialog, spinner, route, fb, router, adminservice, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add Return";
        this.battalions = [];
        this.descLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addPoliciesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.addPoliciesForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            doc: []
        });
        // this.getBattalion();
    }
    AddReportReturnComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-return')) {
            this.pageTitle = 'Add Reports/Returns';
        }
        else if (this.router.url.includes('view-return')) {
            this.spinner.show();
            this.pageTitle = 'View Reports/Returns';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adminservice.getRETURNByID(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addPoliciesForm.patchValue({
                        name: res.object.name,
                        description: res.object.description,
                        status: res.object.status,
                    });
                    _this.descLength = res.object.description.length;
                    _this.docUrl = res.object.file;
                    _this.isDoc = true;
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            });
        }
    };
    Object.defineProperty(AddReportReturnComponent.prototype, "f", {
        get: function () {
            return this.addPoliciesForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddReportReturnComponent.prototype.goBack = function () {
        this.router.navigate(['main/admin/GS-Branch/security/info-security/return']);
    };
    AddReportReturnComponent.prototype.addReturn = function () {
        var _this = this;
        if (this.addPoliciesForm.invalid || !this.isDoc) {
            this.isError = true;
            this.adminservice.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.adminservice.addRETURN(this.addPoliciesForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/admin/GS-Branch/security/info-security/return']);
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddReportReturnComponent.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddReportReturnComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    AddReportReturnComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.adminservice.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addPoliciesForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddReportReturnComponent.prototype.updateReturn = function () {
        var _this = this;
        this.spinner.show();
        // console.log("Bdo", this.addBdoForm.value);
        if (this.addPoliciesForm.valid) {
            this.adminservice.updateRETURN(this.addPoliciesForm.value, this.id).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddReportReturnComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
            if (this.router.url.includes('main/GS-Branch'))
                this.router.navigate(['main/admin/GS-Branch/security/info-security/return']);
            if (this.router.url.includes('main/admin'))
                this.router.navigate(['main/admin/GS-Branch/security/info-security/return']);
        }
        else {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
        }
    };
    AddReportReturnComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddReportReturnComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddReportReturnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-report-return',
            template: _raw_loader_add_report_return_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_report_return_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddReportReturnComponent);
    return AddReportReturnComponent;
}());



/***/ }),

/***/ "utdC":
/*!************************************************************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/info-security/report-return/add-report-return/add-report-return.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);