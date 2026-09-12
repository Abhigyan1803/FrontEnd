(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-cyber-policy-add-cyber-policy-module"],{

/***/ "GvYF":
/*!******************************************************************************************!*\
  !*** ./src/app/main/admin/home/cyber-policy/add-cyber-policy/add-cyber-policy.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AddCyberPolicyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCyberPolicyModule", function() { return AddCyberPolicyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_cyber_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-cyber-policy.component */ "TAXa");
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
        component: _add_cyber_policy_component__WEBPACK_IMPORTED_MODULE_4__["AddCyberPolicyComponent"]
    },
];
var AddCyberPolicyModule = /** @class */ (function () {
    function AddCyberPolicyModule() {
    }
    AddCyberPolicyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_cyber_policy_component__WEBPACK_IMPORTED_MODULE_4__["AddCyberPolicyComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddCyberPolicyModule);
    return AddCyberPolicyModule;
}());



/***/ }),

/***/ "TAXa":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/admin/home/cyber-policy/add-cyber-policy/add-cyber-policy.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddCyberPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCyberPolicyComponent", function() { return AddCyberPolicyComponent; });
/* harmony import */ var _raw_loader_add_cyber_policy_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-cyber-policy.component.html */ "p924");
/* harmony import */ var _add_cyber_policy_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-cyber-policy.component.scss */ "sgXE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_main_admin_admin_dialog_admin_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/admin/admin-dialog/admin-dialog.component */ "KBrC");
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









var AddCyberPolicyComponent = /** @class */ (function () {
    function AddCyberPolicyComponent(fb, router, spinner, route, cdref, service, dialog) {
        this.fb = fb;
        this.router = router;
        this.spinner = spinner;
        this.route = route;
        this.cdref = cdref;
        this.service = service;
        this.dialog = dialog;
        this.pTitle = "Add E-Books";
        this.isError = false;
        this.isFile = false;
        this.addCyberPolicyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.addCyberPolicyForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            file: [''],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    AddCyberPolicyComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view-cyber-policy')) {
            this.pTitle = 'View E-Books';
            this.id = this.route.snapshot.queryParamMap.get('id');
            // console.log(this.id);
            this.service.getCyberPolicyById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addCyberPolicyForm.patchValue({
                        name: res.object.tabName,
                        status: res.object.status
                    });
                    _this.docUrl = res.object.link;
                    _this.isFile = true;
                }
            });
        }
    };
    AddCyberPolicyComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        // if (file.size > 52428800) {
        if (file.size > 314572800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 300 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addCyberPolicyForm.patchValue({
                file: file
            });
            this.isFile = true;
        }
    };
    Object.defineProperty(AddCyberPolicyComponent.prototype, "f", {
        get: function () {
            return this.addCyberPolicyForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddCyberPolicyComponent.prototype.addCyberPolicy = function () {
        var _this = this;
        if (this.addCyberPolicyForm.invalid || !this.isFile) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.service.addCyberPolicy(this.addCyberPolicyForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.router.navigate(['/main/admin/home/cyber-policy']);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
            });
        }
    };
    AddCyberPolicyComponent.prototype.openDoc = function () {
        this.dialog.open(app_main_admin_admin_dialog_admin_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AdminDialogComponent"], {
            width: '1200px', height: '600px',
            data: {
                type: 'document', url: this.docUrl
            }
        });
    };
    AddCyberPolicyComponent.prototype.updateCyberPolicy = function () {
        var _this = this;
        if (this.addCyberPolicyForm.invalid || !this.isFile) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.service.updateCyberPolicy(this.id, this.addCyberPolicyForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.router.navigate(['/main/admin/home/cyber-policy']);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
            });
        }
    };
    AddCyberPolicyComponent.prototype.goBack = function () {
        this.router.navigate(['/main/admin/home/cyber-policy']);
    };
    AddCyberPolicyComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    AddCyberPolicyComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['file', { static: true },] }]
    };
    AddCyberPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-cyber-policy',
            template: _raw_loader_add_cyber_policy_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_cyber_policy_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], AddCyberPolicyComponent);
    return AddCyberPolicyComponent;
}());



/***/ }),

/***/ "p924":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/cyber-policy/add-cyber-policy/add-cyber-policy.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> Home <span class=\"sub-menu1\">> E-Books > {{pTitle}}</span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addCyberPolicyForm\">\r\n\r\n            <div class=\"row\">\r\n                \r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"title\">Name<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" id=\"title\" class=\"form-control\" maxlength=\"250\" placeholder=\"Tab Name\" required\r\n                        formControlName=\"name\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter\r\n                        Name</span>\r\n                </div>\r\n\r\n            </div>\r\n  \r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\"> Document <span class=\"required\">*</span></label>\r\n                <input type=\"file\"  #file accept=\".pdf\" (change)=\"onSelectDoc($event)\" id=\"image\"> \r\n                <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc()\" >description</mat-icon>\r\n                <span class=\"note\">Max File Size 300 MB. (Only pdf and doc format.)</span>\r\n                <span class=\"validation_msg\" *ngIf=\"!isFile && isError\" >Document is required</span>\r\n            </div>\r\n      \r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                    <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\">\r\n                        <option value=\"\" disabled selected hidden>Select</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.touched && f.status.invalid\">*Please Select\r\n                        Status</span>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <button mat-raised-button *ngIf=\"!id\" (click)=\"addCyberPolicy()\">Add E-Books</button>\r\n            <button mat-raised-button *ngIf=\"id\" (click)=\"updateCyberPolicy()\">Update E-Books</button>\r\n\r\n        </form>\r\n\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "sgXE":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/admin/home/cyber-policy/add-cyber-policy/add-cyber-policy.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);