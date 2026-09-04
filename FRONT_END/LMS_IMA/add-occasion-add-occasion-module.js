(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-occasion-add-occasion-module"],{

/***/ "R46c":
/*!***************************************************************************************!*\
  !*** ./src/app/main/admin/home/special-occasions/add-occasion/add-occasion.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AddOccasionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOccasionModule", function() { return AddOccasionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_occasion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-occasion.component */ "ZgCW");
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
        component: _add_occasion_component__WEBPACK_IMPORTED_MODULE_4__["AddOccasionComponent"]
    }
];
var AddOccasionModule = /** @class */ (function () {
    function AddOccasionModule() {
    }
    AddOccasionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_occasion_component__WEBPACK_IMPORTED_MODULE_4__["AddOccasionComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddOccasionModule);
    return AddOccasionModule;
}());



/***/ }),

/***/ "Xuyq":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/special-occasions/add-occasion/add-occasion.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> Home <span class=\"sub-menu1\"> > Special Occasions </span> <span class=\"sub-menu1\"> >\r\n            {{pTitle}}</span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addOccasionForm\">\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"officerRank\">Rank<span class=\"required\">*</span></label>\r\n                    <input id=\"officerRank\" type=\"text\" class=\"form-control\" maxlength=\"100\"\r\n                        formControlName=\"officerRank\" placeholder=\"Officer's Rank\">\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.officerRank.errors && f.officerRank.errors.required && isError\">Please Enter\r\n                        Rank</span>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"officerName\">Name<span class=\"required\">*</span></label>\r\n                    <input id=\"officerName\" type=\"text\" class=\"form-control\" maxlength=\"100\"\r\n                        formControlName=\"officerName\" placeholder=\"Officer's Name\">\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.officerName.errors && f.officerName.errors.required && isError\">Please Enter\r\n                        Name</span>\r\n                </div>\r\n                </div>\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"department\">Department<span class=\"required\">*</span></label>\r\n                    <input id=\"department\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"department\"\r\n                        placeholder=\"Officer's Department Name\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.department.errors && f.department.errors.required && isError\">Please Enter\r\n                       Department Name</span>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"officerDOB\">DOB of Officer<span class=\"required\">*</span></label>\r\n                    <input id=\"officerDOB\" type=\"date\" class=\"form-control\" formControlName=\"officerDOB\"  (change)=\"officerDOBSelected($event)\" max=\"{{Date}}\">\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.officerDOB.errors && f.officerDOB.errors.required && isError\">Please Enter\r\n                        Date of Birth of Officer</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"spouseName\">Spouse Name</label>\r\n                    <input id=\"spouseName\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"spouseName\"\r\n                        placeholder=\"Please Add Mr. or Mrs. before Name\">\r\n                    <!-- <span class=\"validation_msg\" *ngIf=\"f.spouseName.errors && f.spouseName.errors.required && isError\">Please\r\n                        Enter Email Address</span> -->\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"relation\">Relation</label>\r\n                    <select id=\"relation\" type=\"text\" class=\"form-control\" formControlName=\"relation\">\r\n                        <option value=\"\" selected hidden disabled>Select</option>\r\n                        <option *ngFor=\"let r of relations\" [value]=\"r\">{{r}} </option>\r\n                    </select>\r\n                    <!-- <span class=\"validation_msg\"\r\n                        *ngIf=\"f.relation.errors && f.relation.errors.required && isError\">Please Enter Country\r\n                        Code</span> -->\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n                <!-- \r\n\r\n      marriageAnniversary: [''],\r\n\r\n      spouseDOB: [''],\r\n      \r\n      status: ['', Validators.required]\r\n\r\n -->\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"spouseDOB\">DOB of Spouse</label>\r\n                    <input id=\"spouseDOB\" type=\"date\" class=\"form-control\" formControlName=\"spouseDOB\" (change)=\"spouseDOBSelected($event)\" max=\"{{Date}}\">\r\n                    <!-- <span class=\"validation_msg\"\r\n                        *ngIf=\"f.spouseDOB.errors && f.spouseDOB.errors.required && isError\">Please Enter\r\n                        Date of Birth of Officer</span> -->\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"mariageDate\">Marriage Date</label>\r\n                    <input id=\"mariageDate\" type=\"date\" class=\"form-control\" formControlName=\"marriageAnniversary\" (change)=\"mariageDateSelected($event)\">\r\n                    <!-- <span class=\"validation_msg\"\r\n                                        *ngIf=\"f.spouseDOB.errors && f.spouseDOB.errors.required && isError\">Please Enter\r\n                                        Date of Birth of Officer</span> -->\r\n                </div>\r\n                \r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n            <div class=\"row\">\r\n             \r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                    <select name=\"\" id=\"status\" class=\"form-control\"  formControlName=\"status\">\r\n                        <option value=\"\" disabled selected hidden>Select</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\">*Please Select Status</span>\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"icNumber\">IC Number<span class=\"required\">*</span></label>\r\n                    <input id=\"icNumber\" type=\"text\" class=\"form-control\" maxlength=\"100\"\r\n                        formControlName=\"icNumber\" placeholder=\"IC Number\">\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.icNumber.errors && f.icNumber.errors.required && isError\">Please Enter\r\n                        IC Number</span>\r\n                </div>\r\n            </div>\r\n\r\n            <button mat-raised-button *ngIf=\"!id\" (click)=\"addSpecialOccasion()\">Add</button>\r\n            <button mat-raised-button *ngIf=\"id\" (click)=\"updateSpecialOccasion()\">Update</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "ZgCW":
/*!******************************************************************************************!*\
  !*** ./src/app/main/admin/home/special-occasions/add-occasion/add-occasion.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddOccasionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOccasionComponent", function() { return AddOccasionComponent; });
/* harmony import */ var _raw_loader_add_occasion_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-occasion.component.html */ "Xuyq");
/* harmony import */ var _add_occasion_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-occasion.component.scss */ "nzYz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddOccasionComponent = /** @class */ (function () {
    function AddOccasionComponent(fb, router, spinner, route, cdref, service, lID) {
        this.fb = fb;
        this.router = router;
        this.spinner = spinner;
        this.route = route;
        this.cdref = cdref;
        this.service = service;
        this.pTitle = 'Add Special Occasion';
        this.addOccasionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.relations = ['H/O', 'W/O'];
        this.isError = false;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-IN');
        this.Date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.addOccasionForm = this.fb.group({
            marriageAnniversary: [''],
            officerDOB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            officerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            officerRank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            relation: [''],
            spouseDOB: [''],
            spouseName: [''],
            icNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.localID = lID;
    }
    AddOccasionComponent.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    AddOccasionComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('/adjutant-branch/social-list/view?id')) {
            this.pTitle = 'View Special Occasion';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getSpecialOccasionById(this.id).subscribe(function (res) {
                var values = res.object;
                console.log(res);
                _this.addOccasionForm.patchValue({
                    officerDOB: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(values.officerDOB, 'yyyy-MM-dd', _this.localID),
                    officerName: values.officerName,
                    officerRank: values.officerRank,
                    department: values.postedBranch,
                    relation: values.relation,
                    spouseName: values.spouseName,
                    status: values.status,
                    icNumber: values.icNumber
                });
                if (values.spouseDOB) {
                    _this.addOccasionForm.patchValue({
                        spouseDOB: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(values.spouseDOB, 'yyyy-MM-dd', _this.localID),
                    });
                }
                if (values.marriageAnniversary) {
                    _this.addOccasionForm.patchValue({
                        marriageAnniversary: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(values.marriageAnniversary, 'yyyy-MM-dd', _this.localID),
                    });
                }
            });
        }
        else {
        }
    };
    Object.defineProperty(AddOccasionComponent.prototype, "f", {
        get: function () {
            return this.addOccasionForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddOccasionComponent.prototype.officerDOBSelected = function (e) {
        this.addOccasionForm.patchValue({
            officerDOB: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(e.target.value, 'yyyy-MM-dd', this.localID)
        });
    };
    AddOccasionComponent.prototype.spouseDOBSelected = function (e) {
        this.addOccasionForm.patchValue({
            spouseDOB: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(e.target.value, 'yyyy-MM-dd', this.localID)
        });
    };
    AddOccasionComponent.prototype.mariageDateSelected = function (e) {
        this.addOccasionForm.patchValue({
            marriageAnniversary: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(e.target.value, 'yyyy-MM-dd', this.localID)
        });
    };
    AddOccasionComponent.prototype.goBack = function () {
        // this.router.navigate(['/main/admin/home/special-occasions']);
        this.router.navigate(['/main/adjutant-branch/social-list']);
    };
    AddOccasionComponent.prototype.addSpecialOccasion = function () {
        var _this = this;
        console.log(this.addOccasionForm.value);
        this.spinner.show();
        if (this.addOccasionForm.invalid) {
            this.isError = true;
            this.spinner.hide();
        }
        else {
            this.service.addSpecialOccasion(this.addOccasionForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.goBack();
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
    AddOccasionComponent.prototype.updateSpecialOccasion = function () {
        var _this = this;
        this.spinner.show();
        if (this.addOccasionForm.invalid) {
            this.isError = true;
            this.spinner.hide();
        }
        else {
            this.service.updateSpecialOccasion(this.id, this.addOccasionForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.goBack();
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
    AddOccasionComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
    ]; };
    AddOccasionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-occasion',
            template: _raw_loader_add_occasion_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_occasion_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], String])
    ], AddOccasionComponent);
    return AddOccasionComponent;
}());



/***/ }),

/***/ "nzYz":
/*!********************************************************************************************!*\
  !*** ./src/app/main/admin/home/special-occasions/add-occasion/add-occasion.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);