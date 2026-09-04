(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-parade-add-parade-module"],{

/***/ "Ow86":
/*!**************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/parade-state/add-parade/add-parade.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "S98c":
/*!************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/parade-state/add-parade/add-parade.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddParadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddParadeComponent", function() { return AddParadeComponent; });
/* harmony import */ var _raw_loader_add_parade_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-parade.component.html */ "tC7M");
/* harmony import */ var _add_parade_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-parade.component.scss */ "Ow86");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddParadeComponent = /** @class */ (function () {
    function AddParadeComponent(fb, router, route, cdref, spinner, service, dialog, _trgBattalion) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.cdref = cdref;
        this.spinner = spinner;
        this.service = service;
        this.dialog = dialog;
        this._trgBattalion = _trgBattalion;
        this.pTitle = "Add Pared State of OCs";
        this.addParadeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.addParadeForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            document: [''],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    AddParadeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view-paradestate')) {
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.pTitle = "View Pared State of OCs";
            this._trgBattalion.getParadeStateById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.addParadeForm.patchValue({
                        name: res.List.name,
                        status: res.List.status
                    });
                    _this.docUrl = res.List.document;
                    _this.isDoc = true;
                }
            });
        }
    };
    Object.defineProperty(AddParadeComponent.prototype, "f", {
        get: function () {
            return this.addParadeForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddParadeComponent.prototype.addParadeState = function () {
        var _this = this;
        if (this.addParadeForm.invalid || !this.isDoc) {
            this.isError = true;
            this._trgBattalion.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this._trgBattalion.addParadeState(this.addParadeForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                    if (_this.router.url.includes('main/trg-battalion'))
                        _this.router.navigate(['/main/trg-battalion/parade-state']);
                    if (_this.router.url.includes('main/admin'))
                        _this.router.navigate(['/main/admin/trg-battalion/parade-state']);
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
    AddParadeComponent.prototype.updateParadeState = function () {
        var _this = this;
        if (this.addParadeForm.invalid || !this.isDoc) {
            this.isError = true;
            this._trgBattalion.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this._trgBattalion.updateParadeState(this.addParadeForm.value, this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                    if (_this.router.url.includes('main/trg-battalion'))
                        _this.router.navigate(['/main/trg-battalion/parade-state']);
                    if (_this.router.url.includes('main/admin'))
                        _this.router.navigate(['/main/admin/trg-battalion/parade-state']);
                }
                else {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Some Error Occured.");
            }, function () {
                _this._trgBattalion.openSnackbar("Have a Good Day.");
            });
        }
    };
    AddParadeComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 5242880) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this._trgBattalion.openSnackbar('Document Should Be Maximum 5 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addParadeForm.patchValue({
                document: file
            });
            this.isDoc = true;
        }
        console.log("selected Doc", this.addParadeForm.value);
    };
    AddParadeComponent.prototype.openDoc = function () {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Pared State of OCs", url: this.docUrl
            }
        });
    };
    AddParadeComponent.prototype.goBack = function () {
        if (this.router.url.includes('main/trg-battalion'))
            this.router.navigate(['/main/trg-battalion/parade-state']);
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['/main/admin/trg-battalion/parade-state']);
    };
    AddParadeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_5__["AdjutantService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"] }
    ]; };
    AddParadeComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddParadeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-parade',
            template: _raw_loader_add_parade_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_parade_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_5__["AdjutantService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"]])
    ], AddParadeComponent);
    return AddParadeComponent;
}());



/***/ }),

/***/ "dXeJ":
/*!*********************************************************************************!*\
  !*** ./src/app/main/trg-battalion/parade-state/add-parade/add-parade.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AddParadeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddParadeModule", function() { return AddParadeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_parade_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-parade.component */ "S98c");
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
        component: _add_parade_component__WEBPACK_IMPORTED_MODULE_4__["AddParadeComponent"]
    },
];
var AddParadeModule = /** @class */ (function () {
    function AddParadeModule() {
    }
    AddParadeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_parade_component__WEBPACK_IMPORTED_MODULE_4__["AddParadeComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddParadeModule);
    return AddParadeModule;
}());



/***/ }),

/***/ "tC7M":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-battalion/parade-state/add-parade/add-parade.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> TRG Battalion <span class=\"sub-menu1\"> > Parade State of OCs</span> <span class=\"sub-menu1\"> >\r\n            {{pTitle}}</span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addParadeForm\">\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                   <label for=\"position\">Name<span class=\"required\">*</span></label>\r\n                   <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n                   placeholder=\"Name\">\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter Name</span>\r\n                </div>\r\n\r\n\r\n            </div>\r\n          \r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\">Document</label>\r\n                \r\n                <input type=\"file\" accept=\".doc,.docx,.pdf\" #inputFile id=\"image\" (change)=\"onSelectDoc($event)\">\r\n                <mat-icon class=\"document_icon\" *ngIf=\"docUrl\" (click)=\"openDoc()\">description</mat-icon>            \r\n                <span class=\"note\">Max File Size 5 MB. (Only pdf and doc format)</span>\r\n                <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\" >Document is required</span>  \r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">       \r\n                <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                  <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\" >\r\n                    <option value=\"\" disabled selected hidden >Select</option>\r\n                    <option value=\"1\">Active</option>\r\n                    <option value=\"0\">Inactive</option>\r\n                  </select>\r\n                  <span  class=\"validation_msg\"  *ngIf=\"f.status.touched && f.status.invalid\" >*Please Select Status</span>\r\n                </div>\r\n              </div>\r\n            <button mat-raised-button *ngIf=\"!id\" (click)=\"addParadeState()\">Add Parade State</button>\r\n            <button mat-raised-button *ngIf=\"id\" (click)=\"updateParadeState()\">Update Parade State</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ })

}]);