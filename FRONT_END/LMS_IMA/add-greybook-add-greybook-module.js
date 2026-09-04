(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-greybook-add-greybook-module"],{

/***/ "3M4E":
/*!******************************************************************************!*\
  !*** ./src/app/main/admin/home/greybook/add-greybook/add-greybook.module.ts ***!
  \******************************************************************************/
/*! exports provided: AddGreybookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGreybookModule", function() { return AddGreybookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_greybook_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-greybook.component */ "jA2w");
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
        component: _add_greybook_component__WEBPACK_IMPORTED_MODULE_4__["AddGreybookComponent"]
    },
];
var AddGreybookModule = /** @class */ (function () {
    function AddGreybookModule() {
    }
    AddGreybookModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_greybook_component__WEBPACK_IMPORTED_MODULE_4__["AddGreybookComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddGreybookModule);
    return AddGreybookModule;
}());



/***/ }),

/***/ "Ts4P":
/*!***********************************************************************************!*\
  !*** ./src/app/main/admin/home/greybook/add-greybook/add-greybook.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "XXG8":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/greybook/add-greybook/add-greybook.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> Home <span class=\"sub-menu1\"> > Greybook </span> <span class=\"sub-menu1\"> >\r\n            {{pTitle}}</span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addGreybookForm\">\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"userRank\">Rank<span class=\"required\">*</span></label>\r\n                    <input id=\"userRank\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"userRank\"\r\n                        placeholder=\"Officer's Rank\">\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.userRank.errors && f.userRank.errors.required && isError\">Please Enter Rank</span>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"name\">Name<span class=\"required\">*</span></label>\r\n                    <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n                        placeholder=\"Officer's Name\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter\r\n                        Name</span>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"email\">Email</label>\r\n                    <input id=\"email\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"email\"\r\n                        placeholder=\"For Ex. xyz@abc.com\">\r\n                    <!-- <span class=\"validation_msg\" *ngIf=\"f.email.errors && f.email.errors.required && isError\">Please\r\n                        Enter Email Address</span>\r\n                        <span class=\"validation_msg\" *ngIf=\"officialEmail.errors && officialEmail.errors.pattern\">\r\n                            Official Email not valid.\r\n                        </span>  -->\r\n                    <!-- <span class=\"validation_msg\" *ngIf=\"f.email.errors.email\">Please Enter a Valid Email Address</span> -->\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-2\">\r\n                    <label for=\"countryCode\">Country Code<span class=\"required\">*</span></label>\r\n                    <input id=\"countryCode\" type=\"text\" class=\"form-control\" maxlength=\"3\" formControlName=\"countryCode\"\r\n                        placeholder=\"Numbers Only\" (keypress)=\"onlyNum($event)\">\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.countryCode.errors && f.countryCode.errors.required && isError\">Please Enter Country\r\n                        Code</span>\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label for=\"phoneNumber\">Phone Number<span class=\"required\">*</span></label>\r\n                    <input id=\"phoneNumber\" type=\"text\" class=\"form-control\" maxlength=\"14\" placeholder=\"Numbers Only\"\r\n                        formControlName=\"phoneNumber\" (keypress)=\"onlyNum($event)\">\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.phoneNumber.errors && f.phoneNumber.errors.required && isError\">Please Enter Phone\r\n                        Number</span>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"department\">Department<span class=\"required\">*</span></label>\r\n                    <input id=\"department\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"department\"\r\n                        placeholder=\"Department\">\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.department.errors && f.department.errors.required && isError\">Please Enter\r\n                        Department</span>\r\n                </div>\r\n\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"post\">Appt<span class=\"required\">*</span></label>\r\n                        <input id=\"post\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"post\" placeholder=\"Post\">\r\n                        <span class=\"validation_msg\" *ngIf=\"f.post.errors && f.post.errors.required && isError\">Please Enter\r\n                            Post</span>\r\n                    </div>\r\n\r\n\r\n\r\n            \r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"department\">Address<span class=\"required\">*</span></label>\r\n                    <textarea id=\"address\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"address\"\r\n                        placeholder=\"Address\"> </textarea>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.address.errors && f.address.errors.required && isError\">Please Enter\r\n                        Department</span>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                    <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\">\r\n                        <option value=\"\" disabled selected hidden>Select</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                   \r\n                </div>\r\n            </div>\r\n\r\n            <button mat-raised-button *ngIf=\"!id\" (click)=\"addGreybook()\">Add</button>\r\n            <button mat-raised-button *ngIf=\"id\" (click)=\"updateGreybook()\">Update</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "jA2w":
/*!*********************************************************************************!*\
  !*** ./src/app/main/admin/home/greybook/add-greybook/add-greybook.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddGreybookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGreybookComponent", function() { return AddGreybookComponent; });
/* harmony import */ var _raw_loader_add_greybook_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-greybook.component.html */ "XXG8");
/* harmony import */ var _add_greybook_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-greybook.component.scss */ "Ts4P");
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







var AddGreybookComponent = /** @class */ (function () {
    function AddGreybookComponent(fb, router, spinner, route, cdref, service) {
        // email: ['', [Validators.required,Validators.pattern(this.emailPattern)]],
        this.fb = fb;
        this.router = router;
        this.spinner = spinner;
        this.route = route;
        this.cdref = cdref;
        this.service = service;
        this.pTitle = '';
        this.addGreybookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.isError = false;
        this.addGreybookForm = this.fb.group({
            userRank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [''],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            countryCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            post: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    AddGreybookComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view-greybook')) {
            this.pTitle = 'View Greybook';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getGreybookById(this.id).subscribe(function (res) {
                var values = res.object;
                // console.log(res);
                _this.addGreybookForm.patchValue({
                    userRank: values.userRank,
                    name: values.name,
                    email: values.email,
                    address: values.address,
                    countryCode: values.countyCode,
                    phoneNumber: values.phoneNumber,
                    department: values.department,
                    post: values.post,
                    status: values.status,
                });
            });
        }
        else {
            this.pTitle = 'Add Greybook';
        }
    };
    Object.defineProperty(AddGreybookComponent.prototype, "officialEmail", {
        get: function () {
            return this.addGreybookForm.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddGreybookComponent.prototype, "f", {
        get: function () {
            return this.addGreybookForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddGreybookComponent.prototype.goBack = function () {
        this.router.navigate(['/main/admin/home/greybook']);
    };
    AddGreybookComponent.prototype.onlyNum = function (event) {
        var pattern = /^[0-9]*\.?\d{0,2}$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddGreybookComponent.prototype.addGreybook = function () {
        var _this = this;
        this.spinner.show();
        if (this.addGreybookForm.invalid) {
            this.isError = true;
            this.spinner.hide();
        }
        else {
            this.service.addGreybook(this.addGreybookForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/home/greybook']);
                    _this.service.openSnackbar(res.message);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Error Occured.");
            });
        }
    };
    AddGreybookComponent.prototype.updateGreybook = function () {
        var _this = this;
        this.spinner.show();
        if (this.addGreybookForm.invalid) {
            this.isError = true;
            this.spinner.hide();
        }
        else {
            this.service.updateGreybook(this.id, this.addGreybookForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/home/greybook']);
                    _this.service.openSnackbar(res.message);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Error Occured.");
            });
        }
    };
    AddGreybookComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] }
    ]; };
    AddGreybookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-greybook',
            template: _raw_loader_add_greybook_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_greybook_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]])
    ], AddGreybookComponent);
    return AddGreybookComponent;
}());



/***/ })

}]);