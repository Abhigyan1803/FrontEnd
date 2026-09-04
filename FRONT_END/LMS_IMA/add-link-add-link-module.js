(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-link-add-link-module"],{

/***/ "0nKV":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/central-library-management/add-link/add-link.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mat-new\">\r\n      \r\n        \r\n        <h4 class=\"card-heading\"> \r\n            <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button> Home <span class=\"sub-menu1\">> Central Library > {{pTitle}}</span> </h4>\r\n  </div>\r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addLinkForm\">     \r\n       \r\n        <div class=\"row\">     \r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"title\">Tab Name<span class=\"required\">*</span></label>\r\n            <select type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Tab Name\" required formControlName=\"name\">\r\n              <option value=\"\" selected hidden disabled>Select</option>\r\n              <option *ngFor=\"let name of tabNames\" [value]=\"name\">{{name}} </option>\r\n            </select>\r\n            <span  class=\"validation_msg\"  *ngIf=\"f.name.errors && f.name.errors.required && isError\" >Please Select Name</span>\r\n          </div>   \r\n               \r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"title\">Link<span class=\"required\">*</span></label>\r\n            <input type=\"text\" id=\"title\" class=\"form-control\"  maxlength=\"250\"\r\n             placeholder=\"http or https\" required formControlName=\"url\">\r\n            <span  class=\"validation_msg\"  *ngIf=\"f.url.errors && f.url.errors.required && isError\" >Please Enter URL</span>\r\n            <span  class=\"validation_msg\"  *ngIf=\"isWrongUrl\" >Please Enter correct URL</span>\r\n\r\n          </div>   \r\n        </div>\r\n         <div class=\"row\" > \r\n          <div class=\"form-group col-md-6\">       \r\n            <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n              <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\" >\r\n                <option value=\"\" disabled selected hidden >Select</option>\r\n                <option value=\"1\">Active</option>\r\n                <option value=\"0\">Inactive</option>\r\n              </select>\r\n              <span  class=\"validation_msg\"  *ngIf=\"f.status.touched && f.status.invalid\" >*Please Select Status</span>\r\n            </div>     \r\n        </div>\r\n        \r\n        \r\n        <button mat-raised-button *ngIf=\"!id\" (click)=\"addCentralLIbraryLink()\" >Add URL</button>\r\n        <button mat-raised-button *ngIf=\"id\" (click)=\"updateCentralLibraryLink()\" >Update URL</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ }),

/***/ "drhJ":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/admin/home/central-library-management/add-link/add-link.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "mBF7":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/admin/home/central-library-management/add-link/add-link.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLinkComponent", function() { return AddLinkComponent; });
/* harmony import */ var _raw_loader_add_link_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-link.component.html */ "0nKV");
/* harmony import */ var _add_link_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-link.component.scss */ "drhJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
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







var AddLinkComponent = /** @class */ (function () {
    function AddLinkComponent(fb, router, spinner, route, cdref, service) {
        this.fb = fb;
        this.router = router;
        this.spinner = spinner;
        this.route = route;
        this.cdref = cdref;
        this.service = service;
        this.pTitle = "Add Link";
        this.isError = false;
        this.isWrongUrl = false;
        this.tabNames = ['Library Management System', 'Archive Management System'];
        this.addLinkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.addLinkForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    AddLinkComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view-link')) {
            this.pTitle = 'View Link';
            this.id = this.route.snapshot.queryParamMap.get('id');
            console.log(this.id);
            this.service.getCentralLIbraryById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addLinkForm.patchValue({
                        name: res.object.tabName,
                        url: res.object.linkUrl,
                        status: res.object.status
                    });
                }
            });
        }
    };
    Object.defineProperty(AddLinkComponent.prototype, "f", {
        get: function () {
            return this.addLinkForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddLinkComponent.prototype.addCentralLIbraryLink = function () {
        var _this = this;
        if (this.addLinkForm.invalid) {
            this.isError = true;
        }
        else if (!this.f.url.value.startsWith('http') || !this.f.url.value.startsWith('https')) {
            this.isWrongUrl = true;
        }
        else {
            this.isWrongUrl = false;
            this.spinner.show();
            this.service.addCentralLIbraryLink(this.addLinkForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.router.navigate(['/main/admin/home/central-library-management']);
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
    AddLinkComponent.prototype.updateCentralLibraryLink = function () {
        var _this = this;
        if (this.addLinkForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.service.updateCentralLibraryLink(this.id, this.addLinkForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.router.navigate(['/main/admin/home/central-library-management']);
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
    AddLinkComponent.prototype.goBack = function () {
        this.router.navigate(['/main/admin/home/central-library-management']);
    };
    AddLinkComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] }
    ]; };
    AddLinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-link',
            template: _raw_loader_add_link_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_link_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]])
    ], AddLinkComponent);
    return AddLinkComponent;
}());



/***/ }),

/***/ "pDem":
/*!****************************************************************************************!*\
  !*** ./src/app/main/admin/home/central-library-management/add-link/add-link.module.ts ***!
  \****************************************************************************************/
/*! exports provided: AddLinkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLinkModule", function() { return AddLinkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-link.component */ "mBF7");
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
        component: _add_link_component__WEBPACK_IMPORTED_MODULE_4__["AddLinkComponent"]
    },
];
var AddLinkModule = /** @class */ (function () {
    function AddLinkModule() {
    }
    AddLinkModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_link_component__WEBPACK_IMPORTED_MODULE_4__["AddLinkComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddLinkModule);
    return AddLinkModule;
}());



/***/ })

}]);