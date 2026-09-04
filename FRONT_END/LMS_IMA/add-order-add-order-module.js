(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-order-add-order-module"],{

/***/ "/ucw":
/*!********************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/officers-MS/add-order/add-order.module.ts ***!
  \********************************************************************************/
/*! exports provided: AddOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrderModule", function() { return AddOrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-order.component */ "X8KK");
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
        component: _add_order_component__WEBPACK_IMPORTED_MODULE_4__["AddOrderComponent"]
    },
];
var AddOrderModule = /** @class */ (function () {
    function AddOrderModule() {
    }
    AddOrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_order_component__WEBPACK_IMPORTED_MODULE_4__["AddOrderComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddOrderModule);
    return AddOrderModule;
}());



/***/ }),

/***/ "HpRh":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/officers-MS/add-order/add-order.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\">\r\n    <button mat-icon-button (click)=\"goBack()\">\r\n      <mat-icon>chevron_left</mat-icon>\r\n    </button> Adjutant Branch<span class=\"sub-menu1\"> > Adjutant Order > {{pTitle}} </span> <span class=\"sub-menu1\">\r\n    </span>\r\n  </h4>\r\n</div>\r\n<mat-card>\r\n  <div class=\"top-br\">\r\n    <form [formGroup]=\"addOrderForm\">\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"position\">Name<span class=\"required\">*</span></label>\r\n          <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\" placeholder=\"Name\">\r\n          <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter\r\n            Name</span>\r\n        </div>\r\n        <div class=\"col-md-2 form-group \">\r\n          <label for=\"forGc\">\r\n            <input type=\"checkbox\" formControlName=\"forGCFlag\" id=\"forGc\"> For OC\r\n          </label>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">Document</label>\r\n\r\n        <input type=\"file\" accept=\".doc,.docx,.pdf\" #inputFile id=\"image\" (change)=\"onSelectDoc($event)\">\r\n        <!-- <span  class=\"size_info\">Max Image Size 5 MB. (Image size must be  65px * 65px)</span> -->\r\n        <mat-icon class=\"document_icon\" *ngIf=\"docUrl\" (click)=\"openDoc()\">description</mat-icon>\r\n        <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format)</span>\r\n        <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\">Document is required</span>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <label for=\"description\">Description<span class=\"char-count\"> ({{descLength}}/1500) </span> <span\r\n              class=\"required\">*</span></label>\r\n          <!-- <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\"> -->\r\n          <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\"\r\n            (input)=\"charCount($event,'desc')\" maxlength=\"1500\" formControlName=\"description\"></textarea>\r\n          <span class=\"validation_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\">Please Enter\r\n            Description</span>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n          <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\">\r\n            <option value=\"\" disabled selected hidden>Select</option>\r\n            <option value=\"1\">Active</option>\r\n            <option value=\"0\">Inactive</option>\r\n          </select>\r\n          <span class=\"validation_msg\" *ngIf=\"f.status.touched && f.status.invalid\">*Please Select Status</span>\r\n        </div>\r\n      </div>\r\n      <button mat-raised-button *ngIf=\"!id\" (click)=\"addAdjutantOrder()\">Add Adjutant Order</button>\r\n      <button mat-raised-button *ngIf=\"id\" (click)=\"updateOrder()\">Update Adjutant Order</button>\r\n\r\n    </form>\r\n  </div>\r\n</mat-card>");

/***/ }),

/***/ "X8KK":
/*!***********************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/officers-MS/add-order/add-order.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrderComponent", function() { return AddOrderComponent; });
/* harmony import */ var _raw_loader_add_order_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-order.component.html */ "HpRh");
/* harmony import */ var _add_order_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-order.component.scss */ "v2Sc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddOrderComponent = /** @class */ (function () {
    function AddOrderComponent(fb, router, route, cdref, spinner, service, dialog) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.cdref = cdref;
        this.spinner = spinner;
        this.service = service;
        this.dialog = dialog;
        this.pTitle = "Add Adjutant Order";
        this.descLength = 0;
        this.RemarksLength = 0;
        this.addOrderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.addOrderForm = this.fb.group({
            type: ['1'],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            document: [''],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            forGCFlag: [false]
        });
    }
    AddOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view-order')) {
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.pTitle = "View Adjutant Order";
            this.service.getOrderId(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.addOrderForm.patchValue({
                        type: res.List.adjutantBranch.id,
                        name: res.List.name,
                        status: res.List.status,
                        description: res.List.description
                    });
                    _this.docUrl = res.List.document;
                    _this.descLength = res.object.description.length;
                    _this.isDoc = true;
                }
            });
        }
    };
    Object.defineProperty(AddOrderComponent.prototype, "f", {
        get: function () {
            return this.addOrderForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddOrderComponent.prototype.charCount = function (e, t) {
        if (t == 'desc')
            this.descLength = e.target.value.length;
        if (t == 'remarks')
            this.RemarksLength = e.target.value.length;
    };
    AddOrderComponent.prototype.addAdjutantOrder = function () {
        var _this = this;
        if (this.addOrderForm.invalid || !this.isDoc) {
            this.isError = true;
            this.service.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.service.addAdjutantOrder(this.addOrderForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.msg);
                    _this.goBack();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Some Error Occured.");
            });
        }
    };
    AddOrderComponent.prototype.updateOrder = function () {
        var _this = this;
        if (this.addOrderForm.invalid || !this.isDoc) {
            this.isError = true;
            this.service.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.service.updateOrder(this.addOrderForm.value, this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.msg);
                    _this.goBack();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Some Error Occured.");
            });
        }
    };
    AddOrderComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addOrderForm.patchValue({
                document: file
            });
            this.isDoc = true;
        }
        console.log("selected Doc", this.addOrderForm.value);
    };
    AddOrderComponent.prototype.goBack = function () {
        if (this.router.url.includes('main/adjutant-branch'))
            this.router.navigate(['/main/adjutant-branch/adjutant-orders']);
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['/main/admin/Adjutant-Branch-Management/adjutant-order']);
    };
    AddOrderComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], {
            width: '1250px', height: '650px',
            data: {
                type: 'document', title: "Adjutant Order Document", url: this.docUrl
            }
        });
    };
    AddOrderComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_5__["AdjutantService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
    ]; };
    AddOrderComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-order',
            template: _raw_loader_add_order_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_order_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_5__["AdjutantService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], AddOrderComponent);
    return AddOrderComponent;
}());



/***/ }),

/***/ "v2Sc":
/*!*************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/officers-MS/add-order/add-order.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);