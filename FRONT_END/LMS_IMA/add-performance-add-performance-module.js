(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-performance-add-performance-module"],{

/***/ "NKdb":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/performance/add-performance/add-performance.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "nyFi":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/performance/add-performance/add-performance.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> <button mat-icon-button (click)=\"goBack()\"> <mat-icon>chevron_left</mat-icon> </button> TRG Battalion <span class=\"sub-menu1\"> > Performance of Highlight </span> <span class=\"sub-menu1\"> > {{pageTitle}}</span> </h4>\r\n  </div>\r\n  \r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addPerformanceForm\">\r\n        <!-- <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"rank\">Rank<span class=\"required\">*</span></label>\r\n            <input type=\"text\" id=\"rank\" class=\"form-control\"  maxlength=\"100\" formControlName=\"rank\" placeholder=\"Rank\">\r\n            <span class=\"val_msg\" *ngIf=\"f.rank.errors && f.rank.errors.required && isError\" >*Please Enter Officer's Rank</span>\r\n\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"name\">Name<span class=\"required\">*</span></label>\r\n            <input type=\"text\" id=\"name\" class=\"form-control\"  maxlength=\"100\" formControlName=\"name\" placeholder=\"Name\">\r\n            <span class=\"val_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >*Please Enter Officer's Name</span>\r\n\r\n          </div>\r\n        </div> -->\r\n\r\n        <div class=\"row\">\r\n\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"battalion\">Battalion<span class=\"required\">*</span></label>\r\n            <select (change)=\"battalionSelected($event.target.value)\" id=\"battalion\" formControlName=\"battalion\" class=\"form-control\" >\r\n              <option value=\"\" selected hidden disabled >Select</option>\r\n              <option *ngFor = \"let b of battalionList\" [value]=\"b.id\" > {{b.shortName}} Bn </option>\r\n            </select>\r\n            <span class=\"val_msg\" *ngIf=\"f.battalion.errors && f.battalion.errors.required && isError\" >*Please Select Battalion</span>\r\n\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"company\">Company<span class=\"required\">*</span></label>\r\n            <select id=\"company\" formControlName=\"company\" class=\"form-control\" >\r\n              <option value=\"\" selected hidden disabled >Select</option>\r\n              <option *ngFor = \"let c of companyList\" [value]=\"c.id\" > {{c.name}} </option>\r\n            </select>\r\n            <span class=\"val_msg\" *ngIf=\"f.company.errors && f.company.errors.required && isError\" >*Please Select Company</span>\r\n\r\n          </div>\r\n\r\n      \r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-12\">\r\n              <label for=\"awards\">Description <span class=\"char-count\" >   ({{descLength}}/1500)  </span> <span class=\"required\">*</span></label>\r\n              <!-- <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\"> -->\r\n              <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\"   maxlength=\"1500\" (input)=\"charCount($event)\"\r\n              formControlName=\"description\"></textarea>\r\n              <span class=\"val_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >*Please Enter history</span>\r\n\r\n             </div>\r\n        </div> \r\n\r\n\r\n      \r\n        <!-- <div class=\"form-group\">\r\n          <label class=\"form-label\">Image</label>\r\n          <input type=\"file\" id=\"image\" accept=\"image/*\" (change)=\"onSelectImage($event)\"> (Optional)\r\n          <span  class=\"size_info\">Max Image Size 5 MB. (Image size must be  65px * 65px)</span>\r\n          <div *ngIf=\"previewImg\" class=\"preview_image\"> <img class=\"img\" [src]=\"previewImg\" alt=\"\"></div> \r\n\r\n        </div> -->\r\n  \r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"status\">Status<span class=\"required\">*</span></label>\r\n              <select id=\"status\" formControlName=\"status\" class=\"form-control\" >\r\n                <option value=\"\" selected hidden disabled >Select</option>\r\n                <option value=\"1\">Active</option>\r\n                <option value=\"0\">Inactive</option>\r\n              </select>\r\n              \r\n            <span class=\"val_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >*Please Select Status</span>\r\n\r\n            </div>\r\n        </div>  \r\n        <button *ngIf=\"pageTitle == 'Add Performance'\" mat-raised-button (click)=\"addPerformance()\">Add Performance of Highlight</button>\r\n        <button *ngIf=\"pageTitle == 'View Performance'\" mat-raised-button (click)=\"updatePerformance()\"  >Update Performance of Highlight</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ }),

/***/ "r+f2":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/performance/add-performance/add-performance.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddPerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPerformanceComponent", function() { return AddPerformanceComponent; });
/* harmony import */ var _raw_loader_add_performance_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-performance.component.html */ "nyFi");
/* harmony import */ var _add_performance_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-performance.component.scss */ "NKdb");
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








var AddPerformanceComponent = /** @class */ (function () {
    function AddPerformanceComponent(router, fb, route, _trgBattalion, service, cdref, spinner) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this._trgBattalion = _trgBattalion;
        this.service = service;
        this.cdref = cdref;
        this.spinner = spinner;
        this.isError = false;
        this.battalionList = [];
        this.companyList = [];
        this.addPerformanceForm = this.fb.group({
            // rank: ['', Validators.required],
            // name: ['', Validators.required],
            battalion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            // image: [],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.service.getBattalionList().subscribe(function (res) {
            // this.spinner.show();
            if (res.status == 'OK') {
                _this.battalionList = res.object;
                _this.cdref.detectChanges();
                // this.spinner.hide()
            }
            else {
                // this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    }
    AddPerformanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-performance')) {
            this.pageTitle = 'Add Performance Highlight';
        }
        else if (this.router.url.includes('view-performance')) {
            this.spinner.show();
            this.pageTitle = 'View Performance Highlight';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getTRGBattalionPerformanceById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    // this.battalionSelected(res.object.battalionType.id)
                    _this.addPerformanceForm.patchValue({
                        rank: res.object.performanceRank,
                        name: res.object.name,
                        battalion: res.object.battalian.id,
                        status: res.object.status
                    });
                    _this.previewImg = res.object.image;
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            });
        }
    };
    AddPerformanceComponent.prototype.goBack = function () {
        this.router.navigate(['/main/admin/trg-battalion/performance']);
    };
    AddPerformanceComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        this.spinner.show();
        this.service.getCompanyList(e).subscribe(function (res) {
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
    AddPerformanceComponent.prototype.onSelectImage = function (e) {
        var _this = this;
        this.addPerformanceForm.patchValue({
            image: e.target.files[0]
        });
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function (event) {
            _this.previewImg = event.target.result;
        };
    };
    Object.defineProperty(AddPerformanceComponent.prototype, "f", {
        get: function () {
            return this.addPerformanceForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddPerformanceComponent.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddPerformanceComponent.prototype.addPerformance = function () {
        var _this = this;
        if (this.addPerformanceForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.service.addPerformance(this.addPerformanceForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/trg-battalion/performance']);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddPerformanceComponent.prototype.updatePerformance = function () {
        var _this = this;
        if (this.addPerformanceForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.service.updateTRGBattalionPerformance(this.id, this.addPerformanceForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/trg-battalion/performance']);
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
    AddPerformanceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
    ]; };
    AddPerformanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-performance',
            template: _raw_loader_add_performance_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_performance_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], AddPerformanceComponent);
    return AddPerformanceComponent;
}());



/***/ }),

/***/ "u0YH":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/performance/add-performance/add-performance.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AddPerformanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPerformanceModule", function() { return AddPerformanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _add_performance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-performance.component */ "r+f2");
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
        component: _add_performance_component__WEBPACK_IMPORTED_MODULE_6__["AddPerformanceComponent"]
    }
];
var AddPerformanceModule = /** @class */ (function () {
    function AddPerformanceModule() {
    }
    AddPerformanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_performance_component__WEBPACK_IMPORTED_MODULE_6__["AddPerformanceComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]
            ]
        })
    ], AddPerformanceModule);
    return AddPerformanceModule;
}());



/***/ })

}]);