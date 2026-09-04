(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-bdo-add-bdo-module"],{

/***/ "JHqL":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-battalion/bdo/add-bdo/add-bdo.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\">\r\n    <button mat-icon-button (click)=\"goBack()\">\r\n      <mat-icon>chevron_left</mat-icon>\r\n    </button>\r\n    TRG Battalion <span class=\"sub-menu1\">> BDO > {{title}} </span> <span class=\"sub-menu1\"> </span>\r\n  </h4>\r\n</div>\r\n<mat-card>\r\n  <div class=\"top-br\">\r\n    <form [formGroup]=\"addBdoForm\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label class=\"form-label\"> Date <span class=\"required\">*</span></label>\r\n          <input type=\"date\" [min]=\"minDate\" class=\"form-control\" formControlName=\"date\">\r\n          <span class=\"validation_msg\" *ngIf=\"f.date.errors && f.date.errors.required && isError\">Date is\r\n            Required</span>\r\n        </div>\r\n        <div *ngIf=\"isAdmin\" class=\"form-group col-md-6\">\r\n          <label class=\"form-label\"> Battalion <span class=\"required\">*</span></label>\r\n          <select type=\"date\" class=\"form-control\" formControlName=\"battalion\">\r\n            <option value=\"\" selected hidden disabled>Select</option>\r\n            <option *ngFor=\"let b of battalionsList\" [value]=\"b.id\"> {{b.shortName}} Bn </option>\r\n          </select>\r\n          <span class=\"validation_msg\" *ngIf=\"f.battalion.errors && f.battalion.errors.required && isError\">Please\r\n            Select Battalion</span>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"form-group\">\r\n        <label class=\"form-label\"> Document <span class=\"required\">*</span></label>\r\n        <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n        <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\">description</mat-icon>\r\n        <span class=\"note\">Max File Size 5 MB. (Only pdf and doc format.)</span>\r\n        <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\">Document is required</span>\r\n      </div> -->\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n        <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n        <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\">description</mat-icon>\r\n        <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n        <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\">Document is required</span>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label class=\"form-label\"> Status <span class=\"required\">*</span></label>\r\n          <select class=\"form-control\" formControlName=\"status\">\r\n            <option value=\"\" selected hidden disabled>Select</option>\r\n            <option value=\"1\">Active</option>\r\n            <option value=\"0\">Inactive</option>\r\n          </select>\r\n          <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\">Status is required</span>\r\n        </div>\r\n      </div>\r\n\r\n      <button *ngIf=\"!id\" mat-raised-button (click)=\"submit()\">Add Bdo</button>\r\n      <button *ngIf=\"id\" mat-raised-button (click)=\"updateBdo()\">Update Bdo</button>\r\n\r\n    </form>\r\n  </div>\r\n</mat-card>");

/***/ }),

/***/ "UlCM":
/*!******************************************************************!*\
  !*** ./src/app/main/trg-battalion/bdo/add-bdo/add-bdo.module.ts ***!
  \******************************************************************/
/*! exports provided: AddBdoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBdoModule", function() { return AddBdoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_bdo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-bdo.component */ "bZM8");
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
        component: _add_bdo_component__WEBPACK_IMPORTED_MODULE_4__["AddBdoComponent"]
    }
];
var AddBdoModule = /** @class */ (function () {
    function AddBdoModule() {
    }
    AddBdoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_bdo_component__WEBPACK_IMPORTED_MODULE_4__["AddBdoComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddBdoModule);
    return AddBdoModule;
}());



/***/ }),

/***/ "bZM8":
/*!*********************************************************************!*\
  !*** ./src/app/main/trg-battalion/bdo/add-bdo/add-bdo.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddBdoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBdoComponent", function() { return AddBdoComponent; });
/* harmony import */ var _raw_loader_add_bdo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-bdo.component.html */ "JHqL");
/* harmony import */ var _add_bdo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-bdo.component.scss */ "hEBb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/trg-battalion/trg-battalion.service */ "I3U/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddBdoComponent = /** @class */ (function () {
    function AddBdoComponent(dialog, spinner, cdref, fb, router, _trgBattalion, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.cdref = cdref;
        this.fb = fb;
        this.router = router;
        this._trgBattalion = _trgBattalion;
        this.activeRoute = activeRoute;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-IN');
        this.id = '';
        this.isDoc = false;
        this.isAdmin = false;
        this.battalionsList = [];
        this.addBdoForm = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            battalion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            bdoDoc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    }
    AddBdoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bdoDoc = '';
        this.userDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        if (this.router.url.includes('main/trg-battalion')) {
            this.isAdmin = false;
            var battalion = this.userDetails.battalion;
            this.addBdoForm.patchValue({
                battalion: battalion.id
            });
        }
        else if (this.router.url.includes('main/admin')) {
            this.isAdmin = true;
            this._trgBattalion.getBattalionList().subscribe(function (res) {
                if (res.status == "OK") {
                    _this.battalionsList = res.object;
                    _this.cdref.detectChanges();
                }
            });
        }
        this.unSelectedFile = this.docFile.nativeElement.files;
        if (this.router.url.includes('view-bdo')) {
            this.id = this.activeRoute.snapshot.queryParamMap.get('id');
            this.title = "View BDO";
            this.getBdo();
        }
        else if (this.router.url.includes('add-bdo')) {
            this.title = 'Add BDO';
        }
    };
    Object.defineProperty(AddBdoComponent.prototype, "f", {
        get: function () {
            return this.addBdoForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddBdoComponent.prototype.getBdo = function () {
        var _this = this;
        // this.spinner.show();
        this._trgBattalion.getBdoById(this.id).subscribe(function (res) {
            console.log("by id", res);
            if (res.status == 'OK') {
                _this.addBdoForm.patchValue({
                    date: _this.datePipe.transform(res.object.date, 'yyyy-MM-dd'),
                    battalion: res.object.battalian.id,
                    status: res.object.status
                });
                _this.docUrl = res.object.bdoDocuments[0].bdoDocument;
                _this.spinner.hide();
            }
            else {
                _this._trgBattalion.openSnackbar(res.msg);
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    AddBdoComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "BDO Document", url: l
            }
        });
    };
    AddBdoComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file) {
            if (file.size > 52428800) {
                this.docUrl = null;
                this.isDoc = false;
                this.docFile.nativeElement.files = this.unSelectedFile;
                this._trgBattalion.openSnackbar('Document Should Be Maximum 50 MB in Size');
            }
            else {
                this.docUrl = '';
                this.docUrl = null;
                this.isDoc = true;
            }
        }
        else {
            this.docUrl = null;
            this.isDoc = false;
        }
        this.addBdoForm.patchValue({
            bdoDoc: file
        });
        // console.log("selected Doc", this.addBdoForm.value);
    };
    AddBdoComponent.prototype.submit = function () {
        var _this = this;
        if (this.addBdoForm.valid) {
            if (this.addBdoForm.value.bdoDoc == null) {
                this.isDoc = false;
            }
            else {
                this.isDoc = true;
                this.spinner.show();
                this._trgBattalion.addBdo(this.addBdoForm.value).subscribe(function (res) {
                    // console.log("result", res);
                    _this.apiRes(res);
                }, function (err) {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar("Some Error Occured.");
                });
            }
        }
        else {
            this.isError = true;
        }
    };
    AddBdoComponent.prototype.updateBdo = function () {
        var _this = this;
        this.spinner.show();
        // console.log("Bdo", this.addBdoForm.value);
        if (this.addBdoForm.valid) {
            this._trgBattalion.updateBdo(this.id, this.addBdoForm.value).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddBdoComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this._trgBattalion.openSnackbar(res.message);
            if (this.router.url.includes('main/trg-battalion'))
                this.router.navigate(['/main/trg-battalion/bdo']);
            if (this.router.url.includes('main/admin'))
                this.router.navigate(['/main/admin/trg-battalion/bdo']);
        }
        else {
            this.spinner.hide();
            this._trgBattalion.openSnackbar(res.message);
        }
    };
    AddBdoComponent.prototype.goBack = function () {
        if (this.router.url.includes('main/trg-battalion'))
            this.router.navigate(['/main/trg-battalion/bdo']);
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['/main/admin/trg-battalion/bdo']);
    };
    AddBdoComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_9__["TrgBattalionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    AddBdoComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddBdoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ms-add-bdo',
            template: _raw_loader_add_bdo_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_bdo_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_9__["TrgBattalionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], AddBdoComponent);
    return AddBdoComponent;
}());



/***/ }),

/***/ "hEBb":
/*!***********************************************************************!*\
  !*** ./src/app/main/trg-battalion/bdo/add-bdo/add-bdo.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);