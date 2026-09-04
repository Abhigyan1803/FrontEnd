(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-bro-add-bro-module"],{

/***/ "AeBX":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-battalion/bro/add-bro/add-bro.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\"> \r\n    <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n    TRG Battalion <span class=\"sub-menu1\"> > BRO </span> <span class=\"sub-menu1\">> {{title}}  </span>\r\n  </h4>\r\n</div>\r\n<mat-card>\r\n  <div class=\"top-br\">\r\n    <form [formGroup]=\"addBroForm\">\r\n\r\n      <div class=\"row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label class=\"form-label\"> BRO Number <span class=\"required\">*</span></label>\r\n        <div class=\"input-group input-group-sm\">\r\n           <div class=\"input-group-append\" #ref *ngIf=\"!id\" >\r\n            <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"number\"\r\n              placeholder=\"BRO Number\">\r\n            <span class=\"input-group-text\">\r\n              <!-- <span class=\"help\"> -->\r\n               \r\n      {{year}}\r\n              <!-- </span> -->\r\n            </span>\r\n            <span class=\"validation_msg\" *ngIf=\"f.number.errors && f.number.errors.required && isError\" >Number is required</span>\r\n          </div>\r\n          <div class=\"input-group-append\" #ref *ngIf=\"id\" >\r\n            <input readonly id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"number\"\r\n              placeholder=\"ARO Number\">\r\n            \r\n          </div>\r\n\r\n          <div class=\"input-group-append\" #ref>\r\n            <ng-content></ng-content>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label class=\"form-label\"> Date <span class=\"required\">*</span></label>\r\n        <input type=\"date\"  [min]=\"minDate\"  class=\"form-control\" formControlName=\"date\">\r\n        <span class=\"validation_msg\" *ngIf=\"f.date.errors && f.date.errors.required && isError\" >Date is required</span> \r\n      </div>\r\n      <div *ngIf=\"isAdmin\" class=\"form-group col-md-6\">\r\n        <label class=\"form-label\"> Battalion <span class=\"required\">*</span></label>\r\n        <select type=\"date\"   class=\"form-control\" formControlName=\"battalion\">\r\n          <option value=\"\" selected hidden disabled>Select</option>\r\n          <option *ngFor=\"let b of battalionsList\"  [value]=\"b.id\" > {{b.shortName}} Bn </option>\r\n        </select>\r\n        <span class=\"validation_msg\" *ngIf=\"f.date.errors && f.date.errors.required && isError\" >Date is required</span> \r\n      </div>\r\n    </div>\r\n\r\n      <!-- <div class=\"form-group\">\r\n        <label class=\"form-label\"> Document <span class=\"required\">*</span></label>\r\n        <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n        <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\" >description</mat-icon>\r\n        <span class=\"note\">Max File Size 5 MB. (Only pdf and doc format.)</span>\r\n        <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span>\r\n        \r\n      </div> -->\r\n\r\n      \r\n \r\n    <div class=\"form-group\">\r\n        <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n        <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n        <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\">description</mat-icon>\r\n        <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n        <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\">Document is required</span>\r\n    </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label class=\"form-label\"> Status <span class=\"required\">*</span></label>\r\n          <select class=\"form-control\" formControlName=\"status\">\r\n            <option value=\"\" selected hidden disabled>Select</option>\r\n            <option value=\"1\">Active</option>\r\n            <option value=\"0\">Inactive</option>\r\n          </select>\r\n          <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span> \r\n        </div>\r\n      </div>\r\n\r\n      <button *ngIf=\"!id\" mat-raised-button (click)=\"submit()\">Add BRO</button>\r\n      <button *ngIf=\"id\" mat-raised-button (click)=\"updateBro()\">Update BRO</button>\r\n\r\n    </form>\r\n  </div>\r\n</mat-card>");

/***/ }),

/***/ "GCyt":
/*!***********************************************************************!*\
  !*** ./src/app/main/trg-battalion/bro/add-bro/add-bro.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "gCnm":
/*!*********************************************************************!*\
  !*** ./src/app/main/trg-battalion/bro/add-bro/add-bro.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddBroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBroComponent", function() { return AddBroComponent; });
/* harmony import */ var _raw_loader_add_bro_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-bro.component.html */ "AeBX");
/* harmony import */ var _add_bro_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-bro.component.scss */ "GCyt");
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










var AddBroComponent = /** @class */ (function () {
    function AddBroComponent(localID, cdref, dialog, spinner, fb, router, _trgBattalion, activeRoute) {
        this.cdref = cdref;
        this.dialog = dialog;
        this.spinner = spinner;
        this.fb = fb;
        this.router = router;
        this._trgBattalion = _trgBattalion;
        this.activeRoute = activeRoute;
        this.battalionsList = [];
        this.title = "Add BRO";
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-IN');
        this.id = "";
        this.isDoc = false;
        this.isAdmin = false;
        this.currentTime = new Date();
        this.year = this.currentTime.getFullYear();
        this.addBroForm = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            year: [this.year, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            battalion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            broDoc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.minDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(Date.now(), 'yyyy-MM-dd', localID);
        this.localID = localID;
    }
    AddBroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.broDoc = '';
        this.userDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        if (this.router.url.includes('main/trg-battalion')) {
            this.isAdmin = false;
            var battalion = this.userDetails.battalion;
            this.addBroForm.patchValue({
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
        if (this.router.url.includes('view-bro')) {
            this.id = this.activeRoute.snapshot.queryParamMap.get('id');
            this.title = "View BRO";
            this.getBro();
        }
    };
    Object.defineProperty(AddBroComponent.prototype, "f", {
        get: function () {
            return this.addBroForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddBroComponent.prototype.getBro = function () {
        var _this = this;
        this.spinner.show();
        this._trgBattalion.getBroById(this.id).subscribe(function (res) {
            console.log("by id", res);
            _this.spinner.hide();
            if (res.status == 'OK') {
                _this.addBroForm.patchValue({
                    number: res.object.broNumber,
                    date: Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(res.object.date, 'yyyy-MM-dd', _this.localID),
                    battalion: res.object.battalian.id,
                    status: res.object.status
                });
                _this.docUrl = res.object.broDocuments[0].broDocument;
            }
            else {
                _this._trgBattalion.openSnackbar(res.msg);
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    AddBroComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        // alert(file);
        console.log(file, '==================================');
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
        this.addBroForm.patchValue({
            broDoc: file
        });
        console.log("selected Doc", this.addBroForm.value);
    };
    AddBroComponent.prototype.openDoc = function (l) {
        var dialogRef = this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: 'BRO Document', url: l
            }
        });
    };
    AddBroComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.addBroForm.value, '=============++++++++=');
        if (this.addBroForm.valid) {
            this.spinner.show();
            if (this.addBroForm.value.broDoc == null) {
                this.isDoc = false;
            }
            else {
                this.isDoc = true;
                this.spinner.show();
                this._trgBattalion.addBro(this.addBroForm.value).subscribe(function (res) {
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
    AddBroComponent.prototype.updateBro = function () {
        var _this = this;
        if (this.addBroForm.valid) {
            this.spinner.show();
            this._trgBattalion.updateBro(this.id, this.addBroForm.value).subscribe(function (res) {
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
    AddBroComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this._trgBattalion.openSnackbar(res.message);
            if (this.router.url.includes('main/trg-battalion'))
                this.router.navigate(['/main/trg-battalion/bro']);
            if (this.router.url.includes('main/admin'))
                this.router.navigate(['/main/admin/trg-battalion/bro']);
        }
        else {
            this.spinner.hide();
            this._trgBattalion.openSnackbar(res.message);
        }
    };
    AddBroComponent.prototype.goBack = function () {
        if (this.router.url.includes('main/trg-battalion'))
            this.router.navigate(['/main/trg-battalion/bro']);
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['/main/admin/trg-battalion/bro']);
    };
    AddBroComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_9__["TrgBattalionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    AddBroComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddBroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ms-add-bro',
            template: _raw_loader_add_bro_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_bro_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [String, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_9__["TrgBattalionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], AddBroComponent);
    return AddBroComponent;
}());



/***/ }),

/***/ "qS+P":
/*!******************************************************************!*\
  !*** ./src/app/main/trg-battalion/bro/add-bro/add-bro.module.ts ***!
  \******************************************************************/
/*! exports provided: AddBroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBroModule", function() { return AddBroModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_bro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-bro.component */ "gCnm");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_bro_component__WEBPACK_IMPORTED_MODULE_8__["AddBroComponent"]
    }
];
var AddBroModule = /** @class */ (function () {
    function AddBroModule() {
    }
    AddBroModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_bro_component__WEBPACK_IMPORTED_MODULE_8__["AddBroComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
            ]
        })
    ], AddBroModule);
    return AddBroModule;
}());



/***/ })

}]);