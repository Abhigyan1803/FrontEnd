(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-acad-syllabus-add-acad-syllabus-module"],{

/***/ "2CdF":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-syllabus/add-acad-syllabus/add-acad-syllabus.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: AddAcadSyllabusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAcadSyllabusModule", function() { return AddAcadSyllabusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_acad_syllabus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-acad-syllabus.component */ "qC8y");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_acad_syllabus_component__WEBPACK_IMPORTED_MODULE_8__["AddAcadSyllabusComponent"]
    }
];
var AddAcadSyllabusModule = /** @class */ (function () {
    function AddAcadSyllabusModule() {
    }
    AddAcadSyllabusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_acad_syllabus_component__WEBPACK_IMPORTED_MODULE_8__["AddAcadSyllabusComponent"],
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
    ], AddAcadSyllabusModule);
    return AddAcadSyllabusModule;
}());



/***/ }),

/***/ "YLIP":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-syllabus/add-acad-syllabus/add-acad-syllabus.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "qC8y":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-syllabus/add-acad-syllabus/add-acad-syllabus.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AddAcadSyllabusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAcadSyllabusComponent", function() { return AddAcadSyllabusComponent; });
/* harmony import */ var _raw_loader_add_acad_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-acad-syllabus.component.html */ "yxHG");
/* harmony import */ var _add_acad_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-acad-syllabus.component.scss */ "YLIP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/academic-dept/academic-dept.service */ "1ABS");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/auth-service/auth.service */ "V7IE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddAcadSyllabusComponent = /** @class */ (function () {
    function AddAcadSyllabusComponent(adminservice, router, cdref, spinner, route, fb, academicservice, authService, dialog) {
        var _this = this;
        this.adminservice = adminservice;
        this.router = router;
        this.cdref = cdref;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.academicservice = academicservice;
        this.authService = authService;
        this.dialog = dialog;
        this.addAcadSyllabus = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({});
        this.pageTitle = "Add";
        this.id = '';
        // assignment: string;
        this.isError = false;
        this.isDoc = false;
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.term = params.term;
            _this.paper = params.paper;
            _this.subject = params.subject;
            if (_this.subject == "Science and Warfare") {
                _this.sTitle = "Science & Warfare";
            }
            else {
                _this.sTitle = params.subject;
            }
        });
        if (this.term == "I Term") {
            this.termId = 1;
        }
        else if (this.term == "II Term") {
            this.termId = 2;
        }
        else if (this.term == "III Term") {
            this.termId = 3;
        }
        else if (this.term == "II Tech") {
            this.termId = 7;
        }
        this.addAcadSyllabus = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            url: [this.url],
            paper: [this.paper],
            status: ['1'],
            termId: [this.termId],
            subject: [this.subject],
            doc: ['']
            /**
             
             */
        });
    }
    AddAcadSyllabusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unSelectedFile = this.docFile.nativeElement.files;
        if (this.router.url.includes('add-syllabus')) {
            this.pageTitle = 'Add Syllabus';
        }
        else if (this.router.url.includes('view-syllabus')) {
            this.spinner.show();
            this.pageTitle = 'View Syllabus';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.academicservice.getAcademicSyllabusById(this.id).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.addAcadSyllabus.patchValue({
                        name: res.object.name,
                        termId: res.object.termId,
                        status: res.object.status,
                        paper: res.object.paper,
                    });
                    _this.url = res.object.doc;
                    _this.isDoc = true;
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            });
        }
    };
    Object.defineProperty(AddAcadSyllabusComponent.prototype, "f", {
        get: function () {
            return this.addAcadSyllabus.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddAcadSyllabusComponent.prototype.goBack = function () {
        this.router.navigate(["/main/academic-depart/syllabus/" + this.term + "/" + this.paper + "/" + this.subject]);
    };
    AddAcadSyllabusComponent.prototype.openDoc = function (fileUrl) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: fileUrl
            }
        });
    };
    AddAcadSyllabusComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        // console.log(file, "file juned");
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.adminservice.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addAcadSyllabus.patchValue({
                doc: file
            });
            this.isDoc = true;
            // this.adminservice.addDoc(file).subscribe(
            //   res => {
            //     console.log(res, "url dj");
            //     if (res.status == 'OK') {
            //       this.adminservice.openSnackbar(res.message)
            //       this.url = res.object.url
            //       console.log(this.url, "my url");
            //     } else {
            //       this.spinner.hide();
            //       this.adminservice.openSnackbar(res.message)
            //     }
            //   },
            //   err => {
            //     this.spinner.hide();
            //     this.adminservice.openSnackbar('Error Occured.')
            //     console.log(JSON.stringify(err));
            //   }
            // )
        }
    };
    AddAcadSyllabusComponent.prototype.addSyllabus = function () {
        var _this = this;
        this.addAcadSyllabus.value.url = this.url;
        // console.log(this.addAcadSyllabus.value.termId," url ka console");
        if (this.addAcadSyllabus.invalid) {
            this.isError = true;
            this.adminservice.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            console.log(this.addAcadSyllabus.value);
            this.academicservice.addSyllabus(this.addAcadSyllabus.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.goBack();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddAcadSyllabusComponent.prototype.update = function () {
        var _this = this;
        this.spinner.show();
        // console.log("Bdo", this.addBdoForm.value);
        this.addAcadSyllabus.value.url = this.url;
        if (this.addAcadSyllabus.valid) {
            this.academicservice.updateSyllabus(this.id, this.addAcadSyllabus.value).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddAcadSyllabusComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
            this.goBack();
        }
        else {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
        }
    };
    AddAcadSyllabusComponent.ctorParameters = function () { return [
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_3__["AcademicDeptService"] },
        { type: app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    AddAcadSyllabusComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddAcadSyllabusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-acad-syllabus',
            template: _raw_loader_add_acad_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_acad_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_3__["AcademicDeptService"], app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], AddAcadSyllabusComponent);
    return AddAcadSyllabusComponent;
}());



/***/ }),

/***/ "yxHG":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/academic-syllabus/add-acad-syllabus/add-acad-syllabus.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n      <button mat-icon-button (click)=\"goBack()\">\r\n        <mat-icon>chevron_left</mat-icon>\r\n      </button>\r\n      Syllabus <span class=\"sub-menu1\">  <span class=\"sub-menu1\"> > {{term}} > {{paper}} > {{sTitle}} > {{pageTitle}}</span></span>\r\n    </h4>\r\n  </div>\r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addAcadSyllabus\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Name<span class=\"required\">*</span></label>\r\n               <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n               placeholder=\"Name\">\r\n                <span class=\"validation_msg\"\r\n                    *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter Name</span>\r\n            </div>\r\n        </div> \r\n\r\n\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-12\">\r\n                <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n                <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx, .ppt, .pptx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                <mat-icon  class=\"document_icon\" *ngIf=\"url\" (click)=\"openDoc(url)\"> description</mat-icon>\r\n                <span class=\"note\">Max File Size 50 MB. (Only PDF/DOC/DOCX/PPT/PPTX format.)\r\n                  <!-- {{url}} -->\r\n                </span>\r\n                <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\">Document is required</span>\r\n            </div>\r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label class=\"form-label\"> Status <span class=\"required\">*</span></label>\r\n            <select class=\"form-control\" formControlName=\"status\">\r\n              <option value=\"\" selected hidden disabled>Select</option>\r\n              <option value=\"1\">Active</option>\r\n              <option value=\"0\">Inactive</option>\r\n            </select>\r\n            <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\">Status is required</span>\r\n          </div>\r\n        </div>\r\n  \r\n        <button *ngIf=\"!id\" mat-raised-button (click)=\"addSyllabus()\">Add Syllabus</button>\r\n        <button *ngIf=\"id\" mat-raised-button (click)=\"update()\">Update Syllabus</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ })

}]);