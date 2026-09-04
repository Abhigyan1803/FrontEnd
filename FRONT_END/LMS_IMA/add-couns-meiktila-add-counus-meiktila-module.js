(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-couns-meiktila-add-counus-meiktila-module"],{

/***/ "74zX":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/counsellors/th_bn/counsellors-meiktila/add-couns-meiktila/add-couns-meiktila.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\">\r\n    <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n    ACADEMIC-DEPART <span class=\"sub-menu1\">> Counsellors > TH BN<span class=\"sub-menu1\"> > {{pageTitle}} Coy</span></span>\r\n  </h4>\r\n</div>\r\n<mat-card>\r\n  <div class=\"top-br\">\r\n    <form [formGroup]=\"addmeiktilaForm\">\r\n\r\n      <div class=\"row\">\r\n\r\n          <div class=\"form-group col-md-6\">\r\n             <label for=\"position\">Rank<span class=\"required\">*</span></label>\r\n             <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"rankName\"\r\n             placeholder=\"Rank\">\r\n              <span class=\"validation_msg\"\r\n                  *ngIf=\"f.rankName.errors && f.rankName.errors.required && isError\">Please Enter Rank</span>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n              <label for=\"position\">Name<span class=\"required\">*</span></label>\r\n              <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n              placeholder=\"Name\">\r\n               <span class=\"validation_msg\"\r\n                   *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter Name</span>\r\n           </div>\r\n           <div class=\"form-group col-md-6\">\r\n              <label for=\"position\">Mobile<span class=\"required\">*</span></label>\r\n              <input id=\"name\" (keypress)=\"keyPress($event)\" class=\"form-control\" maxlength=\"10\" formControlName=\"mobileNumber\"\r\n              placeholder=\"Mobile\">\r\n               <span class=\"validation_msg\"\r\n                   *ngIf=\"f.mobileNumber.errors && f.mobileNumber.errors.required && isError\">Please Enter Mobile</span>\r\n           </div>\r\n\r\n      </div> \r\n\r\n\r\n      <button mat-raised-button *ngIf=\"pageTitle=='Add MEIKTILA'\" (click)=\"addMEIKTILA()\">Add</button>\r\n      <button mat-raised-button *ngIf=\"pageTitle=='View MEIKTILA'\" (click)=\"updateMEIKTILA()\">Update</button>\r\n\r\n    </form>\r\n  </div>\r\n</mat-card>");

/***/ }),

/***/ "PLN0":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/th_bn/counsellors-meiktila/add-couns-meiktila/add-couns-meiktila.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "chwr":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/th_bn/counsellors-meiktila/add-couns-meiktila/add-counus-meiktila.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: AddConusMeiktilaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddConusMeiktilaModule", function() { return AddConusMeiktilaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_couns_meiktila_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-couns-meiktila.component */ "yNH5");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_couns_meiktila_component__WEBPACK_IMPORTED_MODULE_8__["AddCounsMeiktilaComponent"]
    }
];
var AddConusMeiktilaModule = /** @class */ (function () {
    function AddConusMeiktilaModule() {
    }
    AddConusMeiktilaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_couns_meiktila_component__WEBPACK_IMPORTED_MODULE_8__["AddCounsMeiktilaComponent"],
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
    ], AddConusMeiktilaModule);
    return AddConusMeiktilaModule;
}());



/***/ }),

/***/ "yNH5":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/th_bn/counsellors-meiktila/add-couns-meiktila/add-couns-meiktila.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: AddCounsMeiktilaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCounsMeiktilaComponent", function() { return AddCounsMeiktilaComponent; });
/* harmony import */ var _raw_loader_add_couns_meiktila_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-couns-meiktila.component.html */ "74zX");
/* harmony import */ var _add_couns_meiktila_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-couns-meiktila.component.scss */ "PLN0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
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








var AddCounsMeiktilaComponent = /** @class */ (function () {
    function AddCounsMeiktilaComponent(dialog, spinner, route, fb, router, adminservice, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add MEIKTILA";
        this.battalions = [];
        this.descLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addmeiktilaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.isDoc = true;
        this.addmeiktilaForm = this.fb.group({
            id: [''],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mobileNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalionId: ['1'],
            companyId: ['8'],
            status: ['1']
        });
        // this.getBattalion();
    }
    AddCounsMeiktilaComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-meiktila')) {
            this.pageTitle = 'Add MEIKTILA';
        }
        else if (this.router.url.includes('view-meiktila')) {
            this.spinner.show();
            this.pageTitle = 'View MEIKTILA';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adminservice.getCounsellorById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addmeiktilaForm.patchValue({
                        id: res.object.id,
                        name: res.object.name,
                        rankName: res.object.rankName,
                        mobileNumber: res.object.mobileNumber,
                    });
                    // this.descLength =  res.object.description.length;
                    // this.docUrl = res.object.file
                    // this.isDoc = true;
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            });
        }
    };
    Object.defineProperty(AddCounsMeiktilaComponent.prototype, "f", {
        get: function () {
            return this.addmeiktilaForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddCounsMeiktilaComponent.prototype.goBack = function () {
        this.router.navigate(['main/academic-depart/counsellors/thbn/counsellors-meiktila']);
    };
    AddCounsMeiktilaComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddCounsMeiktilaComponent.prototype.addMEIKTILA = function () {
        var _this = this;
        if (this.addmeiktilaForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.adminservice.addCounsellor(this.addmeiktilaForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/academic-depart/counsellors/thbn/counsellors-meiktila']);
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
    AddCounsMeiktilaComponent.prototype.updateMEIKTILA = function () {
        var _this = this;
        if (this.addmeiktilaForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            console.log("form", this.addmeiktilaForm.value);
            this.adminservice.updateCounsellor(this.addmeiktilaForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/academic-depart/counsellors/thbn/counsellors-meiktila']);
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar('Error Occured.');
            });
        }
    };
    AddCounsMeiktilaComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
            if (this.router.url.includes('main/academic-depart'))
                this.router.navigate(['main/academic-depart/counsellors/thbn/counsellors-meiktila']);
            if (this.router.url.includes('main/academic-depart'))
                this.router.navigate(['main/academic-depart/counsellors/thbn/counsellors-meiktila']);
        }
        else {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
        }
    };
    AddCounsMeiktilaComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddCounsMeiktilaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-couns-meiktila',
            template: _raw_loader_add_couns_meiktila_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_couns_meiktila_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddCounsMeiktilaComponent);
    return AddCounsMeiktilaComponent;
}());



/***/ })

}]);