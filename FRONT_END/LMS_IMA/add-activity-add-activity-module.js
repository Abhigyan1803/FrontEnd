(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-activity-add-activity-module"],{

/***/ "+Z1i":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/activity/add-activity/add-activity.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"mat-new\">\r\n<h4 class=\"card-heading\"> Home <span class=\"sub-menu1\"> > IMA Activities </span> <span class=\"sub-menu1\"> > Add Activity</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n  <div class=\"top-br\">\r\n    <form  [formGroup]=\"addActivityForm\" (ngSubmit)=\"addActivity()\" >\r\n      \r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">Image <span class=\"required\">*</span></label>\r\n       \r\n         <input class=\"choose_file\" #file type=\"file\" id=\"image\" accept=\"image/*\" (change)=\"onSelectImage($event)\" > \r\n         <span  class=\"size_info\">Max Image Size 5 MB. (Image size must be  186px * 225px)</span>\r\n         <div *ngIf=\"imgUrl\" class=\"preview_image\"> <img class=\"img\" [src]=\"imgUrl\" alt=\"\"></div> \r\n         !-- <span class=\"validation_msg\" *ngIf=\"f.username.errors && f.username.errors.required && isError\" >Login Id is required</span> -\r\n      </div>\r\n\r\n      !-- <img *ngIf=\"imgUrl\" [src]=\"imgUrl\" alt=\"\" width=\"100px\" height=\"100px\"> --\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n          <select name=\"\" id=\"\" formControlName=\"status\" class=\"form-control \">\r\n            <option value=\"\" selected hidden disabled >Status</option>\r\n            <option value=\"1\">Active</option>\r\n            <option value=\"0\">Inactive</option>\r\n          </select>\r\n        !-- <span class=\"validation_msg\" *ngIf=\"f.username.errors && f.username.errors.required && isError\" >Login Id is required</span> --\r\n        </div>\r\n         \r\n      </div>\r\n \r\n      <button mat-raised-button [disabled]=\"addActivityForm.invalid\" >Add Activity</button>\r\n\r\n    </form>\r\n  </div>\r\n</mat-card> -->\r\n\r\n\r\n\r\n<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\">\r\n      <button mat-icon-button (click)=\"goBack()\">\r\n          <mat-icon>chevron_left</mat-icon>\r\n      </button> Home <span class=\"sub-menu1\">> IMA Activities </span>\r\n  </h4>\r\n</div>\r\n  \r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form  [formGroup]=\"addActivityForm\" (ngSubmit)=\"addActivity()\" >\r\n        \r\n  \r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">Image <span class=\"required\">*</span></label>\r\n          <span  class=\"size_info\">Max Image Size 50 MB. (Image size must be  297px * 225px)</span>\r\n          <input type=\"file\" #file accept=\"image/*\" id=\"image\" (change)=\"onSelectImage($event)\" > \r\n          <span *ngIf=\"f.image.invalid && f.image.touched\" class=\"required\" >*Please Select Image</span>\r\n           <div *ngIf=\"imgUrl\"  class=\"preview_image\" style=\"width:200px; height:200px\"> <img [src]=\"imgUrl\" alt=\"\"></div> \r\n        </div>\r\n  \r\n        <!-- <img *ngIf=\"imgUrl\" [src]=\"imgUrl\" alt=\"\" width=\"100px\" height=\"100px\"> -->\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"status\">Status <span class=\"required\" >*</span> </label>\r\n            <select name=\"\" id=\"\" formControlName=\"status\" class=\"form-control \">\r\n              <option value=\"\" selected hidden disabled >Select</option>\r\n              <option value=\"1\">Active</option>\r\n              <option value=\"0\">Inactive</option>\r\n            </select>\r\n            <span *ngIf=\"f.status.invalid && f.status.touched\" class=\"required\" >*Please Select Status</span>\r\n          </div>\r\n        </div>\r\n   \r\n        <button mat-raised-button [disabled]=\"addActivityForm.invalid\" >Add Activity</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ }),

/***/ "GFjT":
/*!***********************************************************************************!*\
  !*** ./src/app/main/admin/home/activity/add-activity/add-activity.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "RWPi":
/*!******************************************************************************!*\
  !*** ./src/app/main/admin/home/activity/add-activity/add-activity.module.ts ***!
  \******************************************************************************/
/*! exports provided: AddActivityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddActivityModule", function() { return AddActivityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _add_activity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-activity.component */ "Wjk1");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { MatCardModule, MatIconModule, MatMenuModule, MatTabsModule, MatProgressBarModule,
//      MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatTableModule,
//       MatTooltipModule, MatPaginatorModule, MatDatepickerModule, MatDividerModule, MatChipsModule, MatListModule } from '@angular/material';





var routes = [
    {
        path: '',
        component: _add_activity_component__WEBPACK_IMPORTED_MODULE_6__["AddActivityComponent"]
    }
];
var AddActivityModule = /** @class */ (function () {
    function AddActivityModule() {
    }
    AddActivityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_activity_component__WEBPACK_IMPORTED_MODULE_6__["AddActivityComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]
                // MatProgressBarModule, MatMenuModule, ChartsModule,/* NgxChartsModule */
                // MatIconModule, MatRadioModule, /* NgxChartsModule, */
                // MatButtonModule, MatDividerModule, MatChipsModule, MatListModule, 
                // SharedPipesModule,
                // MatFormFieldModule, FlexLayoutModule,
                // MatInputModule, MatTabsModule,
                // MatRippleModule, MatSelectModule, MatTableModule, MatTooltipModule, MatPaginatorModule, MatDatepickerModule
            ]
        })
    ], AddActivityModule);
    return AddActivityModule;
}());



/***/ }),

/***/ "Wjk1":
/*!*********************************************************************************!*\
  !*** ./src/app/main/admin/home/activity/add-activity/add-activity.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddActivityComponent", function() { return AddActivityComponent; });
/* harmony import */ var _raw_loader_add_activity_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-activity.component.html */ "+Z1i");
/* harmony import */ var _add_activity_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-activity.component.scss */ "GFjT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
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








var AddActivityComponent = /** @class */ (function () {
    function AddActivityComponent(service, fb, router, snackbar, cdref, spinner) {
        this.service = service;
        this.fb = fb;
        this.router = router;
        this.snackbar = snackbar;
        this.cdref = cdref;
        this.spinner = spinner;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.imgUrl = '';
        this.date = new Date();
        this.addActivityForm = this.fb.group({
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    AddActivityComponent.prototype.ngOnInit = function () {
        this.unSelectedFile = this.imgFile.nativeElement.files;
    };
    AddActivityComponent.prototype.onSelectImage = function (e) {
        var _this = this;
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.imgFile.nativeElement.files = this.unSelectedFile;
            this.openSnackbar('Image Should Be Maximum 50 MB in Size');
        }
        else {
            this.addActivityForm.patchValue({
                image: file
            });
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function (event) {
                _this.imgUrl = event.target.result;
            };
        }
    };
    AddActivityComponent.prototype.addActivity = function () {
        var _this = this;
        this.spinner.show();
        console.log(this.addActivityForm.value);
        this.service.addActivity(this.addActivityForm.value, this.date.getTime()).subscribe(function (res) {
            console.log(res);
            if (res.status == "1") {
                _this.openSnackbar(res.msg);
                _this.router.navigate(['/main/admin/home/activity']);
                _this.cdref.detectChanges();
            }
            else {
                _this.openSnackbar(res.msg);
            }
            _this.spinner.hide();
        }, function (err) {
            console.log(JSON.stringify(err));
            _this.openSnackbar('Some error occured.');
            _this.spinner.hide();
        });
    };
    Object.defineProperty(AddActivityComponent.prototype, "f", {
        get: function () {
            return this.addActivityForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddActivityComponent.prototype.goBack = function () {
        this.router.navigate(['main/admin/home/activity']);
    };
    AddActivityComponent.prototype.openSnackbar = function (msg) {
        this.snackbar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    AddActivityComponent.ctorParameters = function () { return [
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
    ]; };
    AddActivityComponent.propDecorators = {
        imgFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['file', { static: true },] }]
    };
    AddActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-activity',
            template: _raw_loader_add_activity_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_activity_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], AddActivityComponent);
    return AddActivityComponent;
}());



/***/ })

}]);