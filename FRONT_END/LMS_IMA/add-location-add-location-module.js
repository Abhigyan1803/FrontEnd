(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-location-add-location-module"],{

/***/ "/c8V":
/*!***************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/location-state/add-location/add-location.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AddLocationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationModule", function() { return AddLocationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_location_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-location.component */ "GQ1c");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_location_component__WEBPACK_IMPORTED_MODULE_4__["AddLocationComponent"]
    },
];
var AddLocationModule = /** @class */ (function () {
    function AddLocationModule() {
    }
    AddLocationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_location_component__WEBPACK_IMPORTED_MODULE_4__["AddLocationComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddLocationModule);
    return AddLocationModule;
}());



/***/ }),

/***/ "5zCW":
/*!********************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/location-state/add-location/add-location.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationComponent", function() { return AddLocationComponent; });
/* harmony import */ var _raw_loader_add_location_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-location.component.html */ "FZPS");
/* harmony import */ var _add_location_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-location.component.scss */ "W5/0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var _service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/trg-battalion/trg-battalion.service */ "I3U/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddLocationComponent = /** @class */ (function () {
    function AddLocationComponent(fb, router, route, cdref, spinner, dialog, _trgBattalion) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.cdref = cdref;
        this.spinner = spinner;
        this.dialog = dialog;
        this._trgBattalion = _trgBattalion;
        this.addLocationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.pTitle = "Add Location State of Officers";
        this.addLocationForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            document: [''],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    AddLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unSelectedFile = this.docFile.nativeElement.files;
        if (this.router.url.includes('view-locationstate')) {
            this.spinner.show();
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.pTitle = "View Location State of Officers";
            this._trgBattalion.getLocationStateById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.addLocationForm.patchValue({
                        name: res.List.name,
                        status: res.List.status
                    });
                    _this.docUrl = res.List.document;
                    _this.isDoc = true;
                    _this.spinner.hide();
                    _this.cdref.detectChanges();
                }
                else {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Some Error Occured.");
            });
        }
    };
    Object.defineProperty(AddLocationComponent.prototype, "f", {
        get: function () {
            return this.addLocationForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddLocationComponent.prototype.addLocation = function () {
        var _this = this;
        if (this.addLocationForm.invalid || !this.isDoc) {
            this.isError = true;
            this._trgBattalion.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this._trgBattalion.addLocationState(this.addLocationForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                    window.history.back();
                    // if (this.router.url.includes('main/adjutant-branch'))
                    // this.router.navigate(['/main/trg-battalion/location-state/']);
                    // if (this.router.url.includes('main/admin'))
                    // this.router.navigate(['/main/admin/trg-battalion/location-state']);
                }
                else {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Some Error Occured.");
            });
        }
    };
    AddLocationComponent.prototype.updateAro = function () {
        var _this = this;
        if (this.addLocationForm.invalid || !this.isDoc) {
            this.isError = true;
            this._trgBattalion.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this._trgBattalion.updateLocationState(this.addLocationForm.value, this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                    window.history.back();
                    // if (this.router.url.includes('main/adjutant-branch'))
                    // this.router.navigate(['/main/trg-battalion/location-state/']);
                    // if (this.router.url.includes('main/admin'))
                    // this.router.navigate(['/main/admin/trg-battalion/location-state']);
                }
                else {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Some Error Occured.");
            });
        }
    };
    AddLocationComponent.prototype.openDoc = function () {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Location State of Officers", url: this.docUrl
            }
        });
    };
    AddLocationComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this._trgBattalion.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addLocationForm.patchValue({
                document: file
            });
            this.isDoc = true;
        }
        // console.log("selected Doc", this.addLocationForm.value);
    };
    AddLocationComponent.prototype.goBack = function () {
        if (this.router.url.includes('main/adjutant-branch'))
            this.router.navigate(['/main/trg-battalion/location-state/']);
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['/main/admin/trg-battalion/location-state']);
    };
    AddLocationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"] }
    ]; };
    AddLocationComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddLocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-location',
            template: _raw_loader_add_location_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_location_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"]])
    ], AddLocationComponent);
    return AddLocationComponent;
}());



/***/ }),

/***/ "FZPS":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/location-state/add-location/add-location.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> Home <span class=\"sub-menu1\"> > Location State of Officers</span> <span class=\"sub-menu1\"> >\r\n            {{pTitle}}</span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addLocationForm\">\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                   <label for=\"position\">Name<span class=\"required\">*</span></label>\r\n                   <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n                   placeholder=\"Name\">\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter Name</span>\r\n                </div>\r\n\r\n\r\n            </div>\r\n          \r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\">Document<span class=\"required\">*</span>\r\n                </label>\r\n                \r\n                <input type=\"file\" accept=\".doc,.docx,.pdf\" #inputFile id=\"image\" (change)=\"onSelectDoc($event)\">\r\n              \r\n                <mat-icon class=\"document_icon\" *ngIf=\"docUrl\" (click)=\"openDoc()\">description</mat-icon>            \r\n                <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format)</span>\r\n                <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\" >Document is required</span>  \r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">       \r\n                <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                  <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\" >\r\n                    <option value=\"\" disabled selected hidden >Select</option>\r\n                    <option value=\"1\">Active</option>\r\n                    <option value=\"0\">Inactive</option>\r\n                  </select>\r\n                  <span  class=\"validation_msg\"  *ngIf=\"f.status.touched && f.status.invalid\" >*Please Select Status</span>\r\n                </div>\r\n              </div>\r\n            <button mat-raised-button *ngIf=\"!id\" (click)=\"addLocation()\">Add Location</button>\r\n            <button mat-raised-button *ngIf=\"id\" (click)=\"updateAro()\">Update Location</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "GQ1c":
/*!******************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/location-state/add-location/add-location.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationComponent", function() { return AddLocationComponent; });
/* harmony import */ var _raw_loader_add_location_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-location.component.html */ "Rao7");
/* harmony import */ var _add_location_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-location.component.scss */ "ogsC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var _service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/trg-battalion/trg-battalion.service */ "I3U/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddLocationComponent = /** @class */ (function () {
    function AddLocationComponent(fb, router, route, cdref, spinner, dialog, _trgBattalion) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.cdref = cdref;
        this.spinner = spinner;
        this.dialog = dialog;
        this._trgBattalion = _trgBattalion;
        this.addLocationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.pTitle = "Add Location State of Officers";
        this.addLocationForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            document: [''],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    AddLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unSelectedFile = this.docFile.nativeElement.files;
        if (this.router.url.includes('view-locationstate')) {
            this.spinner.show();
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.pTitle = "View Location State of Officers";
            this._trgBattalion.getLocationStateById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.addLocationForm.patchValue({
                        name: res.List.name,
                        status: res.List.status
                    });
                    _this.docUrl = res.List.document;
                    _this.isDoc = true;
                    _this.spinner.hide();
                    _this.cdref.detectChanges();
                }
                else {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Some Error Occured.");
            });
        }
    };
    Object.defineProperty(AddLocationComponent.prototype, "f", {
        get: function () {
            return this.addLocationForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddLocationComponent.prototype.addLocation = function () {
        var _this = this;
        if (this.addLocationForm.invalid || !this.isDoc) {
            this.isError = true;
            this._trgBattalion.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this._trgBattalion.addLocationState(this.addLocationForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                    if (_this.router.url.includes('main/trg-battalion'))
                        _this.router.navigate(['/main/trg-battalion/location-state']);
                    if (_this.router.url.includes('main/admin'))
                        _this.router.navigate(['/main/admin/trg-battalion/location-state']);
                }
                else {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Some Error Occured.");
            });
        }
    };
    AddLocationComponent.prototype.updateAro = function () {
        var _this = this;
        if (this.addLocationForm.invalid || !this.isDoc) {
            this.isError = true;
            this._trgBattalion.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this._trgBattalion.updateLocationState(this.addLocationForm.value, this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                    if (_this.router.url.includes('main/trg-battalion'))
                        _this.router.navigate(['/main/trg-battalion/location-state']);
                    if (_this.router.url.includes('main/admin'))
                        _this.router.navigate(['/main/admin/trg-battalion/location-state']);
                }
                else {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Some Error Occured.");
            });
        }
    };
    AddLocationComponent.prototype.openDoc = function () {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Location State of Officers", url: this.docUrl
            }
        });
    };
    AddLocationComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this._trgBattalion.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addLocationForm.patchValue({
                document: file
            });
            this.isDoc = true;
        }
        // console.log("selected Doc", this.addLocationForm.value);
    };
    AddLocationComponent.prototype.goBack = function () {
        if (this.router.url.includes('main/trg-battalion'))
            this.router.navigate(['/main/trg-battalion/location-state']);
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['/main/admin/trg-battalion/location-state']);
    };
    AddLocationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"] }
    ]; };
    AddLocationComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddLocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-location',
            template: _raw_loader_add_location_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_location_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"]])
    ], AddLocationComponent);
    return AddLocationComponent;
}());



/***/ }),

/***/ "Rao7":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-battalion/location-state/add-location/add-location.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> Home <span class=\"sub-menu1\"> > Location State of Officers</span> <span class=\"sub-menu1\"> >\r\n            {{pTitle}}</span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addLocationForm\">\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                   <label for=\"position\">Name<span class=\"required\">*</span></label>\r\n                   <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n                   placeholder=\"Name\">\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter Name</span>\r\n                </div>\r\n\r\n\r\n            </div>\r\n          \r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\">Document</label>\r\n                \r\n                <input type=\"file\" accept=\".doc,.docx,.pdf\" #inputFile id=\"image\" (change)=\"onSelectDoc($event)\">\r\n              \r\n                <mat-icon class=\"document_icon\" *ngIf=\"docUrl\" (click)=\"openDoc()\">description</mat-icon>            \r\n                <span class=\"note\">Max File Size 5 MB. (Only pdf and doc format)</span>\r\n                <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\" >Document is required</span>  \r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">       \r\n                <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                  <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\" >\r\n                    <option value=\"\" disabled selected hidden >Select</option>\r\n                    <option value=\"1\">Active</option>\r\n                    <option value=\"0\">Inactive</option>\r\n                  </select>\r\n                  <span  class=\"validation_msg\"  *ngIf=\"f.status.touched && f.status.invalid\" >*Please Select Status</span>\r\n                </div>\r\n              </div>\r\n            <button mat-raised-button *ngIf=\"!id\" (click)=\"addLocation()\">Add Location</button>\r\n            <button mat-raised-button *ngIf=\"id\" (click)=\"updateAro()\">Update Location</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "RfvS":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/location-state/add-location/add-location.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddLocationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationModule", function() { return AddLocationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_location_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-location.component */ "5zCW");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_location_component__WEBPACK_IMPORTED_MODULE_4__["AddLocationComponent"]
    },
];
var AddLocationModule = /** @class */ (function () {
    function AddLocationModule() {
    }
    AddLocationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_location_component__WEBPACK_IMPORTED_MODULE_4__["AddLocationComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddLocationModule);
    return AddLocationModule;
}());



/***/ }),

/***/ "W5/0":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/location-state/add-location/add-location.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "ogsC":
/*!********************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/location-state/add-location/add-location.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);