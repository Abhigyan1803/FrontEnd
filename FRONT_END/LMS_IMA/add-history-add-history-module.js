(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-history-add-history-module"],{

/***/ "R9CQ":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/history/add-history/add-history.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "YbH/":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/history/add-history/add-history.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHistoryComponent", function() { return AddHistoryComponent; });
/* harmony import */ var _raw_loader_add_history_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-history.component.html */ "ox3U");
/* harmony import */ var _add_history_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-history.component.scss */ "R9CQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_links_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/links.module */ "Uhg6");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
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









var AddHistoryComponent = /** @class */ (function () {
    function AddHistoryComponent(router, fb, route, _trgBattalion, service, cdref, spinner) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this._trgBattalion = _trgBattalion;
        this.service = service;
        this.cdref = cdref;
        this.spinner = spinner;
        this.IP = app_links_module__WEBPACK_IMPORTED_MODULE_5__["Links"].IP;
        this.addHistoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.isError = false;
        this.battalionList = [];
        this.companyList = [];
        this.descLength = 0;
        this.addHistoryForm = this.fb.group({
            history: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
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
    AddHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-history')) {
            this.pageTitle = 'Add History';
        }
        else if (this.router.url.includes('view-history')) {
            this.spinner.show();
            this.pageTitle = 'View History';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getTRGBattalionHistoryById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    // this.battalionSelected(res.object.battalionType.id)
                    _this.addHistoryForm.patchValue({
                        name: res.object.name,
                        battalion: res.object.battalionType.id,
                        history: res.object.description,
                        status: res.object.status
                    });
                    _this.descLength = res.object.description.length;
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
    AddHistoryComponent.prototype.goBack = function () {
        this.router.navigate(['/main/admin/trg-battalion/history']);
    };
    AddHistoryComponent.prototype.onSelectImage = function (e) {
        var _this = this;
        this.addHistoryForm.patchValue({
            image: e.target.files[0]
        });
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function (event) {
            _this.previewImg = event.target.result;
        };
    };
    Object.defineProperty(AddHistoryComponent.prototype, "f", {
        get: function () {
            return this.addHistoryForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddHistoryComponent.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddHistoryComponent.prototype.addHistory = function () {
        var _this = this;
        if (this.addHistoryForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.service.addHistory(this.addHistoryForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/trg-battalion/history']);
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
    AddHistoryComponent.prototype.updateHistory = function () {
        var _this = this;
        if (this.addHistoryForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.service.updateTRGBattalionHistory(this.id, this.addHistoryForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/trg-battalion/history']);
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
    AddHistoryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__["TrgBattalionService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] }
    ]; };
    AddHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-history',
            template: _raw_loader_add_history_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_history_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__["TrgBattalionService"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], AddHistoryComponent);
    return AddHistoryComponent;
}());



/***/ }),

/***/ "e3oe":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/history/add-history/add-history.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: AddHistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHistoryModule", function() { return AddHistoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _add_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-history.component */ "YbH/");
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
        component: _add_history_component__WEBPACK_IMPORTED_MODULE_6__["AddHistoryComponent"]
    }
];
var AddHistoryModule = /** @class */ (function () {
    function AddHistoryModule() {
    }
    AddHistoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_history_component__WEBPACK_IMPORTED_MODULE_6__["AddHistoryComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]
            ]
        })
    ], AddHistoryModule);
    return AddHistoryModule;
}());



/***/ }),

/***/ "ox3U":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/history/add-history/add-history.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> <button mat-icon-button (click)=\"goBack()\"> <mat-icon>chevron_left</mat-icon> </button> \r\n      TRG Battalion <span class=\"sub-menu1\"> > Histories </span> <span class=\"sub-menu1\"> > {{pageTitle}}</span> </h4>\r\n  </div>\r\n  \r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addHistoryForm\">\r\n        \r\n        <div class=\"row\">\r\n\r\n\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"battalion\">Battalion<span class=\"required\">*</span></label>\r\n                <select id=\"battalion\" formControlName=\"battalion\" class=\"form-control\" >\r\n                  <option value=\"\" selected hidden disabled >Select</option>\r\n                  <option *ngFor = \"let b of battalionList\" [value]=\"b.id\" > {{b.shortName}} Bn </option>\r\n                </select>\r\n                <span class=\"val_msg\" *ngIf=\"f.battalion.errors && f.battalion.errors.required && isError\" >*Please Select Battalion</span>\r\n    \r\n              </div>\r\n             \r\n          <div class=\"form-group col-md-12\">\r\n            <label for=\"awards\">History <span class=\"char-count\" >   ({{descLength}}/1500)  </span> <span class=\"required\">*</span></label>\r\n            <!-- <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\"> -->\r\n            <textarea  placeholder=\"Maximum 1500 Characters\" class=\"form-control\"  (input)=\"charCount($event)\" maxlength=\"1500\" formControlName=\"history\"></textarea>\r\n            <span class=\"val_msg\" *ngIf=\"f.history.errors && f.history.errors.required && isError\" >*Please Enter history</span>\r\n\r\n          </div>\r\n\r\n         \r\n        </div>\r\n      \r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">Image</label>\r\n          <!-- <img *ngIf=\"previewImg\" [src]=\"previewImg\" width=\"100\" height=\"100\" alt=\"\"> -->\r\n          <input type=\"file\" id=\"image\" accept=\"image/*\" (change)=\"onSelectImage($event)\"> (Optional)\r\n          <span  class=\"size_info\">Max Image Size 5 MB. (Image size must be  65px * 65px)</span>\r\n          <div *ngIf=\"previewImg\" class=\"preview_image\"> <img class=\"img\" [src]=\"IP+previewImg\" alt=\"\"></div> \r\n\r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"status\">Status<span class=\"required\">*</span></label>\r\n              <select id=\"status\" formControlName=\"status\" class=\"form-control\" >\r\n                <option value=\"\" selected hidden disabled >Select</option>\r\n                <option value=\"1\">Active</option>\r\n                <option value=\"0\">Inactive</option>\r\n              </select>\r\n              \r\n            <span class=\"val_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >*Please Select Status</span>\r\n\r\n            </div>\r\n        </div>  \r\n        <button *ngIf=\"pageTitle == 'Add History'\" mat-raised-button (click)=\"addHistory()\"  >Add History</button>\r\n        <button *ngIf=\"pageTitle == 'View History'\" mat-raised-button (click)=\"updateHistory()\"  >Update History</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ })

}]);