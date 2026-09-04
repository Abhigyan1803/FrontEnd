(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-entitlement-add-entitlement-module"],{

/***/ "BqKR":
/*!************************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/entitlements/add-entitlement/add-entitlement.module.ts ***!
  \************************************************************************************************/
/*! exports provided: AddEntitlementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntitlementModule", function() { return AddEntitlementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_entitlement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-entitlement.component */ "JFoD");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
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
        component: _add_entitlement_component__WEBPACK_IMPORTED_MODULE_4__["AddEntitlementComponent"]
    }
];
var AddEntitlementModule = /** @class */ (function () {
    function AddEntitlementModule() {
    }
    AddEntitlementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_entitlement_component__WEBPACK_IMPORTED_MODULE_4__["AddEntitlementComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ]
        })
    ], AddEntitlementModule);
    return AddEntitlementModule;
}());



/***/ }),

/***/ "ETvB":
/*!*****************************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/entitlements/add-entitlement/add-entitlement.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-set {\n  display: flex;\n  float: left;\n  width: 100%;\n  margin-bottom: 10px;\n  justify-content: space-between;\n}\n\n.example-container {\n  float: left;\n  width: 100%;\n}\n\n.btn-set input {\n  margin-right: 15px;\n}\n\nmat-card {\n  margin-top: 20px;\n}\n\n.mt-20 {\n  float: left;\n  width: 100%;\n}\n\n.mat-card {\n  min-height: 460px;\n}");

/***/ }),

/***/ "JFoD":
/*!***************************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/entitlements/add-entitlement/add-entitlement.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddEntitlementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntitlementComponent", function() { return AddEntitlementComponent; });
/* harmony import */ var _raw_loader_add_entitlement_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-entitlement.component.html */ "fPli");
/* harmony import */ var _add_entitlement_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-entitlement.component.scss */ "ETvB");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/gc/gc.service */ "yuBT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddEntitlementComponent = /** @class */ (function () {
    function AddEntitlementComponent(fb, router, spinner, route, cdref, service, sharedService) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.spinner = spinner;
        this.route = route;
        this.cdref = cdref;
        this.service = service;
        this.sharedService = sharedService;
        this.pTitle = 'Add Entitlement';
        this.addEntitlementForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
        this.entitlements = ['MES', 'Personal Kit Items', 'IT', 'Additional Items'];
        this.isError = false;
        this.titleLength = 0;
        this.addLength = 0;
        this.detailength = 0;
        this.cadetDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        console.log("888888888", this.cadetDetails.name);
        this.route.params.subscribe(function (params) {
            _this.type = params.type;
            // console.log("Recieved Param: ", this.type);
            if (!_this.entitlements.includes(_this.type)) {
                _this.router.navigate(['/gc/content/dashboard']);
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 5);
            }
            _this.addEntitlementForm = _this.fb.group({
                cadetId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                cadetName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            });
        });
        this.userDetails = JSON.parse(localStorage.getItem("loginResponse"));
        console.log(this.userDetails);
    }
    AddEntitlementComponent.prototype.ngOnInit = function () {
        this.f.cadetId.setValue(this.userDetails.object.id);
        this.f.cadetName.setValue(this.cadetDetails.name);
        this.f.type.setValue(this.type);
        console.log("*****", this.addEntitlementForm.value);
        // if(this.router.url.includes('view-greybook')){
        //   this.pTitle = 'View Greybook';
        //   this.id = this.route.snapshot.queryParamMap.get('id');
        // this.service.getGreybookById(this.id).subscribe(
        //   res => {
        //     let values = res.object
        //     // console.log(res);
        //     this.addEntitlementForm.patchValue({
        //       userRank: values.userRank,
        //       name: values.name,
        //       email: values.email,
        //       address: values.address,
        //       countryCode: values.countyCode,
        //       phoneNumber: values.phoneNumber,
        //       department: values.department,
        //       post: values.post,
        //       status: values.status,
        //     })
        //   }
        // )
        // } 
    };
    Object.defineProperty(AddEntitlementComponent.prototype, "f", {
        get: function () {
            return this.addEntitlementForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddEntitlementComponent.prototype.goBack = function () {
        this.router.navigate(["/gc/content/entitlements/" + this.type]);
    };
    AddEntitlementComponent.prototype.onlyNum = function (event) {
        var pattern = /^[0-9]*\.?\d{0,2}$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddEntitlementComponent.prototype.addEntitlement = function () {
        var _this = this;
        this.spinner.show();
        if (this.addEntitlementForm.invalid) {
            this.isError = true;
            this.spinner.hide();
        }
        else {
            this.service.addEntitlement(this.addEntitlementForm.value).subscribe(function (res) {
                console.log(res);
                _this.apiResponse(res);
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar("Error Occured.");
            });
        }
    };
    AddEntitlementComponent.prototype.apiResponse = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.goBack();
            this.sharedService.openSnackbar(res.message);
        }
        else {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
        }
    };
    AddEntitlementComponent.prototype.updateEntitlement = function () {
        // this.spinner.show()
        // if(this.addEntitlementForm.invalid){
        //   this.isError=true;
        //   this.spinner.hide()
        // } else {
        //   this.service.updateGreybook(this.id,this.addEntitlementForm.value).subscribe(
        //     res => {
        //       console.log(res);
        //       if(res.status == 'OK'){
        //         this.spinner.hide();
        //         this.router.navigate(['/main/admin/home/greybook']);
        //         this.service.openSnackbar(res.message);
        //       } else {
        //         this.spinner.hide();
        //         this.service.openSnackbar(res.message);  
        //       }
        //     },
        //     err => {
        //       this.spinner.hide();
        //       this.service.openSnackbar("Error Occured.");  
        //     }
        //   )
        // }
    };
    AddEntitlementComponent.prototype.charCount = function (e, t) {
        if (t == 'title')
            this.titleLength = e.target.value.length;
        if (t == 'address')
            this.addLength = e.target.value.length;
        if (t == 'details')
            this.detailength = e.target.value.length;
    };
    AddEntitlementComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"] },
        { type: app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_7__["GcService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
    ]; };
    AddEntitlementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'ms-add-entitlement',
            template: _raw_loader_add_entitlement_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_entitlement_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"], app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_7__["GcService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], AddEntitlementComponent);
    return AddEntitlementComponent;
}());



/***/ }),

/***/ "fPli":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/entitlements/add-entitlement/add-entitlement.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mt-20\">\r\n\r\n    <mat-card>\r\n        \r\n        <div class=\"mat-new\">\r\n            <h4 class=\"card-heading\">\r\n                <button mat-icon-button (click)=\"goBack()\">\r\n                    <mat-icon>chevron_left</mat-icon>\r\n                </button> Entitlements <span class=\"sub-menu1\"> > {{type}} </span> <span class=\"sub-menu1\"> >\r\n                    {{pTitle}}</span>\r\n            </h4>\r\n        </div>\r\n\r\n        <div class=\"top-br\">\r\n            <form [formGroup]=\"addEntitlementForm\">\r\n    \r\n                <div class=\"row\">\r\n    \r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"title\">Title<span class=\"char-count\" >({{titleLength}}/100)</span><span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"title\"\r\n                            placeholder=\"Title\" (input)=\"charCount($event,'title')\"\r\n                            >\r\n                        <span class=\"validation_msg\"\r\n                            *ngIf=\"f.title.errors && f.title.errors.required && isError\">Please Enter Title</span>\r\n                    </div>\r\n    \r\n                   \r\n    \r\n                </div>\r\n    \r\n         \r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"department\">Address<span class=\"char-count\" >({{addLength}}/500)</span><span class=\"required\">*</span></label>\r\n                        <textarea id=\"address\" type=\"text\" class=\"form-control\" maxlength=\"500\" formControlName=\"address\"\r\n                            placeholder=\"Address\"(input)=\"charCount($event,'address')\"> </textarea>\r\n                        <span class=\"validation_msg\" *ngIf=\"f.address.errors && f.address.errors.required && isError\">Please Enter\r\n                            Address</span>\r\n                    </div>\r\n                </div>\r\n    \r\n                \r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"details\">Details<span class=\"char-count\" >({{detailength}}/500)</span><span class=\"required\">*</span></label>\r\n                        <textarea id=\"details\" type=\"text\" class=\"form-control\" maxlength=\"500\" formControlName=\"details\"\r\n                            placeholder=\"Details\"(input)=\"charCount($event,'details')\"> </textarea>\r\n                        <span class=\"validation_msg\" *ngIf=\"f.details.errors && f.details.errors.required && isError\">\r\n                            Please Enter Details</span>\r\n                    </div>\r\n                </div>\r\n    \r\n    \r\n    \r\n                <!-- <div class=\"row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                        <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\">\r\n                            <option value=\"\" disabled selected hidden>Select</option>\r\n                            <option value=\"1\">Active</option>\r\n                            <option value=\"0\">Inactive</option>\r\n                        </select>\r\n                        <span class=\"validation_msg\" *ngIf=\"f.post.errors && f.post.errors.required && isError\">*Please\r\n                            Select\r\n                            Status</span>\r\n                    </div>\r\n                </div> -->\r\n    \r\n                <button mat-raised-button *ngIf=\"!id\" (click)=\"addEntitlement()\">Add</button>\r\n                <button mat-raised-button *ngIf=\"id\" (click)=\"updateEntitlement()\">Update</button>\r\n    \r\n            </form>\r\n        </div>\r\n    </mat-card>\r\n</div>");

/***/ })

}]);