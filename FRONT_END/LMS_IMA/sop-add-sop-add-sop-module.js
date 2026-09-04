(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sop-add-sop-add-sop-module"],{

/***/ "XvC6":
/*!********************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/sop/add-sop/add-sop.module.ts ***!
  \********************************************************************************/
/*! exports provided: AddSopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSopModule", function() { return AddSopModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_sop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-sop.component */ "pKY9");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_sop_component__WEBPACK_IMPORTED_MODULE_8__["AddSopComponent"]
    }
];
var AddSopModule = /** @class */ (function () {
    function AddSopModule() {
    }
    AddSopModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_sop_component__WEBPACK_IMPORTED_MODULE_8__["AddSopComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
            ]
        })
    ], AddSopModule);
    return AddSopModule;
}());



/***/ }),

/***/ "oLNv":
/*!*************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/sop/add-sop/add-sop.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "oz0F":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/adjutant-gi/sop/add-sop/add-sop.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n      <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n      GS Branch <span class=\"sub-menu1\"> > SOP <span class=\"sub-menu1\"> > {{pageTitle}}</span></span>\r\n    </h4>\r\n  </div>\r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addAcademyParadeStateForm\">\r\n  \r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Letter no.<span class=\"required\">*</span></label>\r\n               <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"letterNo\"\r\n               placeholder=\"Letter no.\">\r\n                <span class=\"validation_msg\"\r\n                    *ngIf=\"f.letterNo.errors && f.letterNo.errors.required && isError\">Please Enter letterNo</span>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"scheduleDate\">scheduleDate<span class=\"required\">*</span></label>\r\n                <input id=\"scheduleDate\" type=\"date\" class=\"form-control\" formControlName=\"scheduleDate\" (change)=\"sopDAte($event)\">\r\n                <span class=\"validation_msg\"\r\n                *ngIf=\"f.scheduleDate.errors && f.scheduleDate.errors.required && isError\">Please Enter scheduleDate</span>\r\n  \r\n            </div>\r\n\r\n        </div> \r\n\r\n      \r\n        \r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">subject<span class=\"required\">*</span></label>\r\n               <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"subject\"\r\n               placeholder=\"subject\">\r\n                <span class=\"validation_msg\"\r\n                    *ngIf=\"f.subject.errors && f.subject.errors.required && isError\">Please Enter subject</span>\r\n            </div>\r\n        </div> \r\n\r\n     \r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n            <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n            <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\" >description</mat-icon>\r\n            <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n            <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\" >Document is required</span>  \r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"status\">Status<span class=\"required\" >*</span></label>\r\n            <select name=\"\" id=\"\" class=\"form-control \" formControlName=\"status\">\r\n              <option value=\"\" disabled selected hidden>Status</option>\r\n              <option value=\"1\">Active</option>\r\n              <option value=\"0\">Inactive</option>\r\n            </select>\r\n            <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span> \r\n          </div>\r\n        </div>\r\n  \r\n        <button mat-raised-button *ngIf=\"pageTitle=='Add Sop'\" (click)=\"addDemoCoy()\">Add Sop</button>\r\n        <button mat-raised-button *ngIf=\"pageTitle=='View Sop'\" (click)=\"updateDemoCoy()\">Update Sop</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ }),

/***/ "pKY9":
/*!***********************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/sop/add-sop/add-sop.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddSopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSopComponent", function() { return AddSopComponent; });
/* harmony import */ var _raw_loader_add_sop_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-sop.component.html */ "oz0F");
/* harmony import */ var _add_sop_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-sop.component.scss */ "oLNv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddSopComponent = /** @class */ (function () {
    function AddSopComponent(dialog, spinner, route, fb, router, adminservice, cdref, service, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.service = service;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add Sop";
        this.battalions = [];
        this.descLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addAcademyParadeStateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.addAcademyParadeStateForm = this.fb.group({
            letterNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            scheduleDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            file: []
        });
        // this.getBattalion();
    }
    AddSopComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-sop')) {
            this.pageTitle = 'Add Sop';
        }
        else if (this.router.url.includes('view-sop')) {
            this.spinner.show();
            this.pageTitle = 'View Sop';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getSOPId(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addAcademyParadeStateForm.patchValue({
                        letterNo: res.object.letterNo,
                        subject: res.object.subject,
                        scheduleDate: new Date(res.scheduleDate),
                        status: res.object.status,
                    });
                    _this.docUrl = res.object.document;
                    _this.isDoc = true;
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            });
        }
    };
    Object.defineProperty(AddSopComponent.prototype, "f", {
        get: function () {
            return this.addAcademyParadeStateForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddSopComponent.prototype.goBack = function () {
        this.router.navigate(['main/adjutant-branch/general-instruction/sop']);
    };
    AddSopComponent.prototype.sopDAte = function (e) {
        this.addAcademyParadeStateForm.patchValue({
            scheduleDate: new Date(e.target.value)
        });
        console.log(this.sopDAte);
    };
    AddSopComponent.prototype.addDemoCoy = function () {
        var _this = this;
        if (this.addAcademyParadeStateForm.invalid || !this.isDoc) {
            this.isError = true;
            this.service.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.service.addSOP(this.addAcademyParadeStateForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/adjutant-branch/general-instruction/sop']);
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
    AddSopComponent.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddSopComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    AddSopComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addAcademyParadeStateForm.patchValue({
                file: file
            });
            this.isDoc = true;
        }
        // console.log("selected Doc", this.addBdoForm.value);
    };
    AddSopComponent.prototype.updateDemoCoy = function () {
        var _this = this;
        this.spinner.show();
        // console.log("Bdo", this.addBdoForm.value);
        if (this.addAcademyParadeStateForm.valid) {
            this.service.updateSOP(this.addAcademyParadeStateForm.value, this.id).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddSopComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.service.openSnackbar(res.message);
            if (this.router.url.includes('main/GS-Branch'))
                this.router.navigate(['main/adjutant-branch/general-instruction/sop']);
            if (this.router.url.includes('main/adjutant-branch'))
                this.router.navigate(['main/adjutant-branch/general-instruction/sop']);
        }
        else {
            this.spinner.hide();
            this.service.openSnackbar(res.message);
        }
    };
    AddSopComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_9__["AdjutantService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddSopComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddSopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-sop',
            template: _raw_loader_add_sop_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_sop_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_9__["AdjutantService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddSopComponent);
    return AddSopComponent;
}());



/***/ })

}]);