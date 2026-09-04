(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-aro-add-aro-module"],{

/***/ "8TbS":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/ARO/add-aro/add-aro.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> Adjutant Branch <span class=\"sub-menu1\"> > ARO > {{pTitle}} </span> <span class=\"sub-menu1\"> \r\n            </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addAroForm\">\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                   <label for=\"position\">ARO Number<span class=\"required\">*</span></label>\r\n                   <div class=\"input-group input-group-sm\">\r\n                    <div class=\"input-group-append\" #ref *ngIf=\"!id\">\r\n                     <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n                       placeholder=\"Name\">\r\n                     <span class=\"input-group-text\">\r\n                       <!-- <span class=\"help\"> -->\r\n                        \r\n               /{{year}}\r\n                       <!-- </span> -->\r\n                     </span>\r\n                   </div>\r\n                   <div class=\"input-group-append\" #ref *ngIf=\"id\">\r\n                    <input readonly id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n                      placeholder=\"Name\">\r\n                  </div>\r\n                  \r\n                   <div class=\"input-group-append\" #ref>\r\n                     <ng-content></ng-content>\r\n                   </div>\r\n                 </div>\r\n                 <span class=\"validation_msg\"\r\n                 *ngIf=\"f.name.errors && f.name.errors.required && isError\">Aro number is required</span>\r\n\r\n                </div>\r\n             \r\n            </div>\r\n          \r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n                \r\n                <input type=\"file\" accept=\".doc,.docx,.pdf\" #inputFile id=\"image\" (change)=\"onSelectDoc($event)\"> \r\n              \r\n                <mat-icon class=\"document_icon\" *ngIf=\"docUrl\" (click)=\"openDoc()\">description</mat-icon>            \r\n                <span class=\"note\">Max File Size 5 MB. (Only pdf and doc format)</span>\r\n                <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\" >Document is required</span>  \r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">       \r\n                <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                  <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\" >\r\n                    <option value=\"\" disabled selected hidden >Select</option>\r\n                    <option value=\"1\">Active</option>\r\n                    <option value=\"0\">Inactive</option>\r\n                  </select>\r\n                  <span  class=\"validation_msg\"  *ngIf=\"f.status.touched && f.status.invalid\" >*Please Select Status</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"pull-right\" >\r\n\r\n                <button mat-raised-button *ngIf=\"!id\" (click)=\"addARO()\">Add ARO</button>\r\n                <button mat-raised-button *ngIf=\"id\" (click)=\"updateAro()\">Update ARO</button>\r\n    \r\n              </div>\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "Hz3t":
/*!*************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/ARO/add-aro/add-aro.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "MbFk":
/*!***********************************************************************!*\
  !*** ./src/app/main/adjutant-branch/ARO/add-aro/add-aro.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddAroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAroComponent", function() { return AddAroComponent; });
/* harmony import */ var _raw_loader_add_aro_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-aro.component.html */ "8TbS");
/* harmony import */ var _add_aro_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-aro.component.scss */ "Hz3t");
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









var AddAroComponent = /** @class */ (function () {
    function AddAroComponent(fb, router, route, cdref, spinner, service, dialog) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.cdref = cdref;
        this.spinner = spinner;
        this.service = service;
        this.dialog = dialog;
        this.pTitle = "Add ARO";
        this.currentTime = new Date();
        this.year = this.currentTime.getFullYear();
        this.addAroForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.addAroForm = this.fb.group({
            type: ['2'],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            document: [''],
            // number:['', Validators.required],
            year: [this.year, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    AddAroComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view-aro')) {
            this.pTitle = "View ARO";
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getAROById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.addAroForm.patchValue({
                        type: res.List.adjutantBranch.id,
                        name: res.List.name,
                        // forGCFlag:res.List.flag,
                        status: res.List.status,
                    });
                    _this.docUrl = res.List.document;
                    _this.isDoc = true;
                }
            });
        }
    };
    Object.defineProperty(AddAroComponent.prototype, "f", {
        get: function () {
            return this.addAroForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddAroComponent.prototype.getPreviousRouote = function () {
        var routeArr = this.router.url.split('/');
        var navRoute = '';
        for (var i = 0; i < routeArr.length - 1; i++) {
            if (routeArr[i]) {
                navRoute = navRoute + '/' + routeArr[i];
            }
        }
        return navRoute;
    };
    AddAroComponent.prototype.addARO = function () {
        var _this = this;
        console.log(this.addAroForm.value);
        if (this.addAroForm.invalid || !this.isDoc) {
            this.isError = true;
            this.service.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.service.addARO(this.addAroForm.value).subscribe(function (res) {
                // console.log(res);
                if (res.status == '1') {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.msg);
                    _this.router.navigate([_this.getPreviousRouote()]);
                    // if(this.router.url.includes('main/adjutant-branch'))
                    // this.router.navigate(['/main/adjutant-branch/ARO']);
                    // if(this.router.url.includes('main/admin'))
                    // this.router.navigate(['/main/admin/Adjutant-Branch-Management/aro']);
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
    AddAroComponent.prototype.updateAro = function () {
        var _this = this;
        if (this.addAroForm.invalid || !this.isDoc) {
            this.isError = true;
            this.service.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.service.updateARO(this.addAroForm.value, this.id).subscribe(function (res) {
                // console.log(res);
                if (res.status == '1') {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.msg);
                    _this.router.navigate([_this.getPreviousRouote()]);
                    // if (this.router.url.includes('main/adjutant-branch'))
                    //   this.router.navigate(['/main/adjutant-branch/ARO']);
                    // if (this.router.url.includes('main/admin'))
                    //   this.router.navigate(['/main/admin/Adjutant-Branch-Management/aro']);
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
    AddAroComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 5242880) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 5 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addAroForm.patchValue({
                document: file
            });
            this.isDoc = true;
        }
        console.log("selected Doc", this.addAroForm.value);
    };
    AddAroComponent.prototype.goBack = function () {
        this.router.navigate([this.getPreviousRouote()]);
        //   if (this.router.url.includes('main/adjutant-branch'))
        //   this.router.navigate(['/main/adjutant-branch/aro']);
        // if (this.router.url.includes('main/admin'))
        //   this.router.navigate(['/main/admin/Adjutant-Branch-Management/aro']);
    };
    AddAroComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], {
            width: '1250px', height: '650px',
            data: {
                type: 'document', title: "ARO Document", url: this.docUrl
            }
        });
    };
    AddAroComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_5__["AdjutantService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
    ]; };
    AddAroComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddAroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-aro',
            template: _raw_loader_add_aro_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_aro_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_5__["AdjutantService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], AddAroComponent);
    return AddAroComponent;
}());



/***/ }),

/***/ "oGtu":
/*!********************************************************************!*\
  !*** ./src/app/main/adjutant-branch/ARO/add-aro/add-aro.module.ts ***!
  \********************************************************************/
/*! exports provided: AddAroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAroModule", function() { return AddAroModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_aro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-aro.component */ "MbFk");
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
        component: _add_aro_component__WEBPACK_IMPORTED_MODULE_4__["AddAroComponent"]
    },
];
var AddAroModule = /** @class */ (function () {
    function AddAroModule() {
    }
    AddAroModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_aro_component__WEBPACK_IMPORTED_MODULE_4__["AddAroComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddAroModule);
    return AddAroModule;
}());



/***/ })

}]);