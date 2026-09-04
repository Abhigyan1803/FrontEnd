(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-distribution-marks-add-distribution-marks-module"],{

/***/ "9g3M":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/examination/distribution-marks/add-distribution-marks/add-distribution-marks.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button>  \r\n        Examination ><span class=\"sub-menu1\"> Distribution of Marks > {{type}} > Add Distribution of Marks </span>\r\n\r\n        <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addDistributionform\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Name </label>\r\n                    <input type=\"text\" formControlName=\"name\" maxlength=\"100\" placeholder=\" Name\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">Name is\r\n                        required</span>\r\n                </div>\r\n\r\n                <!-- <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Term </label>\r\n                    <select placeholder=\"\" class=\"form-control\" formControlName=\"termId\">\r\n                        <option disabled selected hidden></option>\r\n                        <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.termId.errors && f.termId.errors.required && isError\">Please\r\n                        Enter termId</span>\r\n                </div> -->\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n                    <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                    <mat-icon  class=\"document_icon\" (click)=\"openDoc(url)\"> description</mat-icon>\r\n                    <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n                    <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\">Document is required</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"position\" hidden>Type<span class=\"required\">*</span></label>\r\n                <input id=\"name\" type=\"text\" hidden class=\"form-control\" maxlength=\"100\" formControlName=\"type\"\r\n                    placeholder=\"Name\">\r\n                <!-- <span class=\"validation_msg\"\r\n                     *ngIf=\"f.type.errors && f.type.errors.required && isError\">Please Enter type</span> -->\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\">Status\r\n                        is required</span>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"pull-right\" >\r\n\r\n                <button *ngIf=\"!id\" mat-raised-button (click)=\"submit()\">Add </button>\r\n                <button *ngIf=\"id\" mat-raised-button (click)=\"update()\">Update </button>\r\n    \r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "RVga":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/distribution-marks/add-distribution-marks/add-distribution-marks.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "qhaU":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/distribution-marks/add-distribution-marks/add-distribution-marks.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: AddDistributionMarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDistributionMarksComponent", function() { return AddDistributionMarksComponent; });
/* harmony import */ var _raw_loader_add_distribution_marks_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-distribution-marks.component.html */ "9g3M");
/* harmony import */ var _add_distribution_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-distribution-marks.component.scss */ "RVga");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/academic-dept/academic-dept.service */ "1ABS");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddDistributionMarksComponent = /** @class */ (function () {
    function AddDistributionMarksComponent(dialog, spinner, route, fb, router, adminservice, cdref, adService, sharedService) {
        var _this = this;
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.adService = adService;
        this.sharedService = sharedService;
        this.pageTitle = "Add";
        this.terms = [];
        this.descLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addDistributionform = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.route.params.subscribe(function (params) {
            _this.type = params.type;
            console.log("Recieved Param: ", _this.type);
            var tempTermId;
            if (_this.type == "I Term") {
                tempTermId = 1;
            }
            else if (_this.type == "II Term") {
                tempTermId = 2;
            }
            else if (_this.type == "III Term") {
                tempTermId = 3;
            }
            else if (_this.type == "II Tech") {
                tempTermId = 7;
            }
            else {
                _this.goBack();
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 5);
            }
            _this.addDistributionform = _this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                termId: [tempTermId],
                type: ['Academic Distribution of Marks'],
                url: [_this.url],
                userId: [1],
                doc: []
            });
        });
        // this.getBattalion();
    }
    AddDistributionMarksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTerms();
        if (this.router.url.includes('add-distribution-marks')) {
            this.pageTitle = 'Add';
        }
        else if (this.router.url.includes('view-distribution-marks')) {
            this.spinner.show();
            this.pageTitle = 'View';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adService.getDistributionOfMarksById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addDistributionform.patchValue({
                        name: res.object.name,
                        termId: res.object.termId,
                        status: res.object.status,
                        type: res.object.type,
                    });
                    _this.url = res.object.url;
                    _this.isDoc = true;
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar(res.message);
                }
            });
        }
    };
    Object.defineProperty(AddDistributionMarksComponent.prototype, "f", {
        get: function () {
            return this.addDistributionform.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddDistributionMarksComponent.prototype.goBack = function () {
        this.router.navigate(['main/academic-depart/examination/Distribution-of-Marks/' + this.type]);
    };
    AddDistributionMarksComponent.prototype.submit = function () {
        var _this = this;
        this.addDistributionform.value.url = this.url;
        if (this.addDistributionform.invalid) {
            this.isError = true;
            this.sharedService.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.adService.addDistributionOfMarks(this.addDistributionform.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.sharedService.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/academic-depart/examination/Distribution-of-Marks/' + _this.type]);
                }
                else {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddDistributionMarksComponent.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddDistributionMarksComponent.prototype.openDoc = function (juned) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: juned
            }
        });
    };
    AddDistributionMarksComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        console.log(file, "file juned");
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.sharedService.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addDistributionform.patchValue({
                doc: file
            });
            this.isDoc = true;
            // this.adminservice.addDoc(file).subscribe(
            //   res => {
            //     console.log(res,"url dj");
            //     if (res.status == 'OK') {
            //       this.sharedService.openSnackbar(res.message)
            //     this.url=res.object.url
            //     console.log(this.url,"my url");
            //     } else {
            //       this.spinner.hide();
            //       this.sharedService.openSnackbar(res.message)
            //     }
            //   },
            //   err => {
            //     this.spinner.hide();
            //     this.sharedService.openSnackbar('Error Occured.')
            //     console.log(JSON.stringify(err));
            //   }
            // )
        }
    };
    // termChange(e) {
    //   console.log(e)
    //   if (e = 1) {
    //     this.terms[0]
    //     console.log(this.terms[0])
    //   }
    // }
    AddDistributionMarksComponent.prototype.getTerms = function () {
        var _this = this;
        this.adminservice.getAllTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
    };
    AddDistributionMarksComponent.prototype.update = function () {
        var _this = this;
        this.spinner.show();
        // console.log("Bdo", this.addBdoForm.value);
        this.addDistributionform.value.url = this.url;
        if (this.addDistributionform.valid) {
            this.adService.updateDistributionOfMarks(this.id, this.addDistributionform.value).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddDistributionMarksComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
            this.router.navigate(['main/academic-depart/examination/Distribution-of-Marks/' + this.type]);
        }
        else {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
        }
    };
    AddDistributionMarksComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_9__["AcademicDeptService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] }
    ]; };
    AddDistributionMarksComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddDistributionMarksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-distribution-marks',
            template: _raw_loader_add_distribution_marks_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_distribution_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_9__["AcademicDeptService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], AddDistributionMarksComponent);
    return AddDistributionMarksComponent;
}());



/***/ }),

/***/ "xsr5":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/distribution-marks/add-distribution-marks/add-distribution-marks.module.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AddDistributionMarksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDistributionMarksModule", function() { return AddDistributionMarksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_distribution_marks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-distribution-marks.component */ "qhaU");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_distribution_marks_component__WEBPACK_IMPORTED_MODULE_8__["AddDistributionMarksComponent"]
    }
];
var AddDistributionMarksModule = /** @class */ (function () {
    function AddDistributionMarksModule() {
    }
    AddDistributionMarksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_distribution_marks_component__WEBPACK_IMPORTED_MODULE_8__["AddDistributionMarksComponent"],
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
    ], AddDistributionMarksModule);
    return AddDistributionMarksModule;
}());



/***/ })

}]);