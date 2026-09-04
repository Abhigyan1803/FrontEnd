(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-gallantry-add-gallantry-module"],{

/***/ "2Mnp":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gallantry/add-gallantry/add-gallantry.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AddGallantryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGallantryComponent", function() { return AddGallantryComponent; });
/* harmony import */ var _raw_loader_add_gallantry_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-gallantry.component.html */ "vjEb");
/* harmony import */ var _add_gallantry_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-gallantry.component.scss */ "KcHD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
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








var AddGallantryComponent = /** @class */ (function () {
    function AddGallantryComponent(router, fb, route, _trgBattalion, service, cdref, spinner) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this._trgBattalion = _trgBattalion;
        this.service = service;
        this.cdref = cdref;
        this.spinner = spinner;
        this.pageTitle = "Add Gallantry Awardees";
        this.isError = false;
        this.battalionList = [];
        this.companyList = [];
        this.addGallantryForm = this.fb.group({
            rank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            awards: [''],
            battalion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            image: [],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.service.getBattalionList().subscribe(function (res) {
            _this.spinner.show();
            if (res.status == 'OK') {
                _this.battalionList = res.object;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    }
    AddGallantryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-gallantry')) {
            this.pageTitle = 'Add Gallantry Awardees';
        }
        else if (this.router.url.includes('view-gallantry')) {
            this.spinner.show();
            this.pageTitle = 'View Gallantry Awardees';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getTRGBattalionGallantryById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.addGallantryForm.patchValue({
                        rank: res.Object.rank,
                        name: res.Object.name,
                        awards: res.Object.award,
                        battalion: res.Object.battalionId,
                        status: res.Object.status,
                    });
                    _this.previewImg = res.Object.image;
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            });
        }
    };
    AddGallantryComponent.prototype.goBack = function () {
        this.router.navigate(['/main/admin/trg-battalion/gallantry']);
    };
    AddGallantryComponent.prototype.onSelectImage = function (e) {
        var _this = this;
        this.addGallantryForm.patchValue({
            image: e.target.files[0]
        });
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function (event) {
            _this.previewImg = event.target.result;
        };
    };
    Object.defineProperty(AddGallantryComponent.prototype, "f", {
        get: function () {
            return this.addGallantryForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddGallantryComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        this.spinner.show();
        this.service.getCompanyList(e).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.companyList = res.object;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    AddGallantryComponent.prototype.addGallantryaward = function () {
        var _this = this;
        if (this.addGallantryForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.service.addGallantryaward(this.addGallantryForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.service.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/trg-battalion/gallantry']);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddGallantryComponent.prototype.updateGallantry = function () {
        var _this = this;
        if (this.addGallantryForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.service.updateTRGBattalionGallantry(this.id, this.addGallantryForm.value).subscribe(function (res) {
                if (res.status == '1') {
                    _this.service.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/trg-battalion/gallantry']);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
            });
        }
    };
    AddGallantryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
    ]; };
    AddGallantryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-gallantry',
            template: _raw_loader_add_gallantry_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_gallantry_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], AddGallantryComponent);
    return AddGallantryComponent;
}());



/***/ }),

/***/ "KcHD":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gallantry/add-gallantry/add-gallantry.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "NJdy":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gallantry/add-gallantry/add-gallantry.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddGallantryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGallantryModule", function() { return AddGallantryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _add_gallantry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-gallantry.component */ "2Mnp");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _add_gallantry_component__WEBPACK_IMPORTED_MODULE_6__["AddGallantryComponent"]
    }
];
var AddGallantryModule = /** @class */ (function () {
    function AddGallantryModule() {
    }
    AddGallantryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_gallantry_component__WEBPACK_IMPORTED_MODULE_6__["AddGallantryComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]
            ]
        })
    ], AddGallantryModule);
    return AddGallantryModule;
}());



/***/ }),

/***/ "vjEb":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/gallantry/add-gallantry/add-gallantry.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> <button mat-icon-button (click)=\"goBack()\"> <mat-icon>chevron_left</mat-icon> </button>\r\n       TRG Battalion <span class=\"sub-menu1\"> > Gallantry Awardees</span> <span class=\"sub-menu1\"> > {{pageTitle}}</span> </h4>\r\n  </div>\r\n  \r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addGallantryForm\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"rank\">Rank<span class=\"required\">*</span></label>\r\n            <input type=\"text\" id=\"rank\" class=\"form-control\"  maxlength=\"100\" formControlName=\"rank\" placeholder=\"Rank\">\r\n            <span class=\"val_msg\" *ngIf=\"f.rank.errors && f.rank.errors.required && isError\" >*Please Enter Officer's Rank</span>\r\n\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"name\">Name<span class=\"required\">*</span></label>\r\n            <input type=\"text\" id=\"name\" class=\"form-control\"  maxlength=\"100\" formControlName=\"name\" placeholder=\"Name\">\r\n            <span class=\"val_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >*Please Enter Officer's Name</span>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n        \r\n          <div class=\"form-group col-md-6\" >\r\n            <label for=\"battalion\">Battalion<span class=\"required\">*</span></label>\r\n            <select (change)=\"battalionSelected($event.target.value)\" id=\"battalion\" formControlName=\"battalion\" class=\"form-control\" >\r\n              <option value=\"\" selected hidden disabled >Select</option>\r\n              <option *ngFor = \"let b of battalionList\" [value]=\"b.id\" > {{b.shortName}} Bn </option>\r\n            </select>\r\n            <span class=\"val_msg\" *ngIf=\"f.battalion.errors && f.battalion.errors.required && isError\" >*Please Select Battalion</span>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-6\" >\r\n            <label for=\"company\">Company<span class=\"required\">*</span></label>\r\n            <select id=\"company\" formControlName=\"company\" class=\"form-control\">\r\n              <option value=\"\" selected hidden disabled>Select</option>\r\n              <option *ngFor=\"let c of companyList\" [value]=\"c.id\"> {{c.name}} </option>\r\n            </select>\r\n            <span class=\"val_msg\" *ngIf=\"f.company.errors && f.company.errors.required && isError\">*Please Select\r\n              Company</span>\r\n          </div>\r\n\r\n          <!-- <div class=\"form-group col-md-6\">\r\n            <label for=\"company\">Company<span class=\"required\">*</span></label>\r\n            <select id=\"company\" formControlName=\"company\" class=\"form-control\" >\r\n              <option value=\"\" selected hidden disabled >Select</option>\r\n              <option *ngFor = \"let c of companyList\" [value]=\"c.id\" > {{c.name}} </option>\r\n            </select>\r\n            <span class=\"val_msg\" *ngIf=\"f.company.errors && f.company.errors.required && isError\" >*Please Select Company</span>\r\n\r\n          </div> -->\r\n          \r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"awards\">Awards/Medals<span class=\"required\">*</span></label>\r\n            <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\">\r\n            <!-- <span class=\"val_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >*Please Enter Officer's Name</span> -->\r\n\r\n          </div>\r\n\r\n         \r\n        </div>\r\n      \r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">Image</label>\r\n          <!-- <img *ngIf=\"previewImg\" [src]=\"previewImg\" width=\"100\" height=\"100\" alt=\"\"> -->\r\n          <input type=\"file\" id=\"image\" accept=\"image/*\" (change)=\"onSelectImage($event)\"> (Optional)\r\n          <span  class=\"size_info\">Max Image Size 5 MB. (Image size must be  65px * 65px)</span>\r\n          <div *ngIf=\"previewImg\" class=\"preview_image\"> <img class=\"img\" [src]=\"previewImg\" alt=\"\"></div> \r\n\r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"status\">Status<span class=\"required\">*</span></label>\r\n              <select id=\"status\" formControlName=\"status\" class=\"form-control\" >\r\n                <option value=\"\" selected hidden disabled >Select</option>\r\n                <option value=\"1\">Active</option>\r\n                <option value=\"0\">Inactive</option>\r\n              </select>\r\n              \r\n            <span class=\"val_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >*Please Select Status</span>\r\n\r\n            </div>\r\n        </div>  \r\n        <button *ngIf=\"!id\" mat-raised-button (click)=\"addGallantryaward()\"  >Add Gallantry Awardee</button>\r\n        <button *ngIf=\"id\" mat-raised-button (click)=\"updateGallantry()\"  >Update Gallantry Awardee</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ })

}]);