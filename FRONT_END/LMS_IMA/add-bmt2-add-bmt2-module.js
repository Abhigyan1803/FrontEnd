(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-bmt2-add-bmt2-module"],{

/***/ "Cle6":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/study-material/bmt2/add-bmt2/add-bmt2.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> \r\n        GSO 2 (PGME) <span class=\"sub-menu1\"> > {{term}} > Study Material > BMT-2 > {{type}} > {{pageTitle}} </span> \r\n    </h4>\r\n    \r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addBMT2form\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label class=\"form-label\">Name </label>\r\n                    <input type=\"text\" formControlName=\"name\" maxlength=\"100\" placeholder=\" Name\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">Name is\r\n                        required</span>\r\n                </div>\r\n                <!-- <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Term<span class=\"required\">*</span> </label>\r\n                    <select placeholder=\"\" class=\"form-control\" formControlName=\"termId\">\r\n                        <option disabled selected hidden></option>\r\n                        <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.termId.errors && f.termId.errors.required && isError\">Term is\r\n                        required</span>\r\n                </div> -->\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"awards\">Description <span class=\"char-count\"> ({{descLength}}/1500) </span> <span\r\n                            class=\"required\">*</span></label>\r\n                    <!-- <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\"> -->\r\n                    <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\"\r\n                        (input)=\"charCount($event)\" maxlength=\"1500\" formControlName=\"description\"></textarea>\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.description.errors && f.description.errors.required && isError\">*Please enter\r\n                        description</span>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n                    <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                    <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\">description</mat-icon>\r\n                    <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n                    <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\">Document is required</span>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"form-group col-md-6\">\r\n                <label for=\"position\" hidden>Type<span class=\"required\">*</span></label>\r\n                <input id=\"name\" type=\"text\" hidden class=\"form-control\" maxlength=\"100\"\r\n                    formControlName=\"studyMaterialType\" placeholder=\"Name\">\r\n               </div> -->\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\">Status\r\n                        is required</span>\r\n                </div>\r\n            </div>\r\n\r\n            <button *ngIf=\"!id\" mat-raised-button (click)=\"submit()\">Add </button>\r\n            <button *ngIf=\"id\" mat-raised-button (click)=\"update()\">Update </button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "DLEl":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/bmt2/add-bmt2/add-bmt2.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddBmt2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBmt2Component", function() { return AddBmt2Component; });
/* harmony import */ var _raw_loader_add_bmt2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-bmt2.component.html */ "Z7Us");
/* harmony import */ var _add_bmt2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-bmt2.component.scss */ "bAx7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AddBmt2Component = /** @class */ (function () {
    function AddBmt2Component(dialog, spinner, route, fb, router, service, trgTeamService, adminservice, cdref, sharedService) {
        var _this = this;
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.trgTeamService = trgTeamService;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.pageTitle = "Add";
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]('en-IN');
        this.descLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addBMT2form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.terms = [];
        this.route.params.subscribe(function (params) {
            _this.type = params.type;
            if (_this.type == "OnA and InS") {
                _this.sName = "O&A and I&S";
            }
            else {
                _this.sName = _this.type;
            }
            _this.term = params.term;
            if (params.term == "I Term") {
                _this.termId = 1;
                console.log(_this.term);
            }
            else if (params.term == "II Term") {
                _this.termId = 2;
                console.log(_this.term);
            }
            else if (params.term == "II Tech") {
                _this.termId = 7;
                console.log(_this.term);
            }
            else if (params.term == "III Term") {
                _this.termId = 3;
                console.log(_this.term);
            }
            console.log("Recieved Param: ", _this.type);
            _this.addBMT2form = _this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                date: [_this.datePipe.transform(new Date(), 'yyyy-MM-dd')],
                status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                type: [_this.type],
                document: [],
                termId: [_this.termId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
        });
        // this.getBattalion();
    }
    AddBmt2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.getTerms();
        if (this.router.url.includes('add-bmt2')) {
            this.pageTitle = 'Add';
        }
        else if (this.router.url.includes('view-bmt2')) {
            this.spinner.show();
            this.pageTitle = 'View';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adminservice.getSyllabusById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addBMT2form.patchValue({
                        name: res.object.name,
                        description: res.object.description,
                        status: res.object.status,
                        type: res.object.syllabusType,
                        termId: res.object.termId,
                    });
                    _this.docUrl = res.object.doc;
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
    AddBmt2Component.prototype.getTerms = function () {
        var _this = this;
        this.service.getAllTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
    };
    Object.defineProperty(AddBmt2Component.prototype, "f", {
        get: function () {
            return this.addBMT2form.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddBmt2Component.prototype.goBack = function () {
        this.router.navigate(['main/trg-team/gso-2-pgme/' + this.term + '/syllabus/BMT-2/' + this.type]);
    };
    AddBmt2Component.prototype.submit = function () {
        var _this = this;
        if (this.addBMT2form.invalid) {
            this.isError = true;
            this.sharedService.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.trgTeamService.addSyllabus(this.addBMT2form.value).subscribe(function (res) {
                console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddBmt2Component.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddBmt2Component.prototype.openDoc = function (l) {
        console.log("++++++++", l);
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    AddBmt2Component.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.sharedService.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addBMT2form.patchValue({
                document: file
            });
            this.isDoc = true;
        }
    };
    AddBmt2Component.prototype.update = function () {
        var _this = this;
        this.spinner.show();
        // console.log("Bdo", this.addBdoForm.value);
        if (this.addBMT2form.valid) {
            this.adminservice.updateSyllabus(this.id, this.addBMT2form.value).subscribe(function (res) {
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
    AddBmt2Component.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
            this.goBack();
        }
        else {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
        }
    };
    AddBmt2Component.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_9__["AdjutantService"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_11__["TrgTeamService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] }
    ]; };
    AddBmt2Component.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddBmt2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-bmt2',
            template: _raw_loader_add_bmt2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_bmt2_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_9__["AdjutantService"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_11__["TrgTeamService"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], AddBmt2Component);
    return AddBmt2Component;
}());



/***/ }),

/***/ "HQ+W":
/*!**************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/bmt2/add-bmt2/add-bmt2.module.ts ***!
  \**************************************************************************************/
/*! exports provided: AddBmt2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBmt2Module", function() { return AddBmt2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_bmt2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-bmt2.component */ "DLEl");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_bmt2_component__WEBPACK_IMPORTED_MODULE_8__["AddBmt2Component"]
    }
];
var AddBmt2Module = /** @class */ (function () {
    function AddBmt2Module() {
    }
    AddBmt2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_bmt2_component__WEBPACK_IMPORTED_MODULE_8__["AddBmt2Component"],
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
    ], AddBmt2Module);
    return AddBmt2Module;
}());



/***/ }),

/***/ "Z7Us":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/syllabus/bmt2/add-bmt2/add-bmt2.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"><button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> \r\n        GSO 2 (PGME) > <span class=\"sub-menu1\"> > {{term}} > Syllabus > BMT-2 > {{sName}} > {{pageTitle}} Syllabus </span> \r\n    \r\n        <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addBMT2form\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"position\" >Name<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" formControlName=\"name\"  maxlength=\"100\"\r\n                        placeholder=\" Name\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">Name is\r\n                        required</span>\r\n                </div>\r\n                <!-- <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Term<span class=\"required\">*</span> </label>\r\n                    <select placeholder=\"\" class=\"form-control\" formControlName=\"termId\">\r\n                        <option disabled selected hidden></option>\r\n                        <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.termId.errors && f.termId.errors.required && isError\">Term is\r\n                        required</span>\r\n                </div> -->\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"awards\">Description <span class=\"char-count\"> ({{descLength}}/1500) </span> <span\r\n                            class=\"required\">*</span></label>\r\n                    <!-- <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\"> -->\r\n                    <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\"\r\n                        (input)=\"charCount($event)\" maxlength=\"1500\" formControlName=\"description\"></textarea>\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.description.errors && f.description.errors.required && isError\">*Please Enter\r\n                        description</span>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n                    <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                    <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\">description</mat-icon>\r\n                    <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n                    <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\">Document is required</span>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"form-group col-md-6\">\r\n                <label for=\"position\" hidden>Type<span class=\"required\">*</span></label>\r\n                <input id=\"name\" type=\"text\" hidden class=\"form-control\" maxlength=\"100\"\r\n                    formControlName=\"syllabusType\" placeholder=\"Name\">\r\n            </div> -->\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\">Status\r\n                        is required</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div style=\"float: right;\" >\r\n                <button *ngIf=\"!id\" mat-raised-button (click)=\"submit()\">Add </button>\r\n                <button *ngIf=\"id\" mat-raised-button (click)=\"update()\">Update </button>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "bAx7":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/bmt2/add-bmt2/add-bmt2.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "iug2":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/study-material/bmt2/add-bmt2/add-bmt2.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AddBmt2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBmt2Component", function() { return AddBmt2Component; });
/* harmony import */ var _raw_loader_add_bmt2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-bmt2.component.html */ "Cle6");
/* harmony import */ var _add_bmt2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-bmt2.component.scss */ "vQvN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
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











var AddBmt2Component = /** @class */ (function () {
    function AddBmt2Component(dialog, spinner, route, fb, sharedService, router, trgTeamService, adminservice, cdref) {
        var _this = this;
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.sharedService = sharedService;
        this.router = router;
        this.trgTeamService = trgTeamService;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.pageTitle = "Add Study Material";
        this.descLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addBMT2form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.terms = [];
        this.route.params.subscribe(function (params) {
            _this.type = params.type;
            _this.term = params.term;
            if (params.term == "I Term") {
                _this.termId = 1;
                console.log(_this.term);
            }
            else if (params.term == "II Term") {
                _this.termId = 2;
                console.log(_this.term);
            }
            else if (params.term == "II Tech") {
                _this.termId = 7;
                console.log(_this.term);
            }
            else if (params.term == "III Term") {
                _this.termId = 3;
                console.log(_this.term);
            }
            console.log("Recieved Param:=", _this.type);
            _this.addBMT2form = _this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                studyMaterialType: [_this.type],
                doc: [],
                termId: [_this.termId],
            });
        });
        // this.getBattalion();
    }
    AddBmt2Component.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view-bmt2')) {
            this.spinner.show();
            this.pageTitle = 'View Study Material';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.trgTeamService.getStudyMaterialById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addBMT2form.patchValue({
                        name: res.object.name,
                        description: res.object.description,
                        status: res.object.status,
                        studyMaterialType: res.object.studyMaterialType,
                        termId: res.object.termId,
                    });
                    _this.docUrl = res.object.doc;
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
    Object.defineProperty(AddBmt2Component.prototype, "f", {
        // getTerms() {
        //   this.service.getAllTerms().subscribe(
        //     res => {
        //       // console.log(res);
        //       if (res.status == '1') {
        //         this.terms = res.List;
        //         this.cdref.detectChanges();
        //       }
        //     }
        //   )
        // }
        get: function () {
            return this.addBMT2form.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddBmt2Component.prototype.goBack = function () {
        this.router.navigate(['main/trg-team/gso-2-pgme/' + this.term + '/study-material/BMT-2/' + this.type]);
    };
    AddBmt2Component.prototype.submit = function () {
        var _this = this;
        if (this.addBMT2form.invalid) {
            this.isError = true;
            this.sharedService.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.trgTeamService.addStudyMaterial(this.addBMT2form.value).subscribe(function (res) {
                console.log(res);
                _this.apiRes(res);
                // if (res.status == 'OK') {
                //   this.sharedService.openSnackbar(res.message)
                //   this.cdref.detectChanges();
                //   this.spinner.hide();
                //   this.router.navigate(['main/trg-team/gso-2-pgme/study-material/Bmt2/'+this.type]);
                // } else {
                //   this.spinner.hide();
                //   this.sharedService.openSnackbar(res.message)
                // }
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddBmt2Component.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddBmt2Component.prototype.openDoc = function (l) {
        console.log("++++++++", l);
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    AddBmt2Component.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.sharedService.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addBMT2form.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddBmt2Component.prototype.update = function () {
        var _this = this;
        this.spinner.show();
        // console.log("Bdo", this.addBdoForm.value);
        if (this.addBMT2form.valid) {
            this.trgTeamService.updateStudyMaterial(this.id, this.addBMT2form.value).subscribe(function (res) {
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
    AddBmt2Component.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
            this.goBack();
        }
        else {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
        }
    };
    AddBmt2Component.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    AddBmt2Component.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddBmt2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-bmt2',
            template: _raw_loader_add_bmt2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_bmt2_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], AddBmt2Component);
    return AddBmt2Component;
}());



/***/ }),

/***/ "mHij":
/*!********************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/study-material/bmt2/add-bmt2/add-bmt2.module.ts ***!
  \********************************************************************************************/
/*! exports provided: AddBmt2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBmt2Module", function() { return AddBmt2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_bmt2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-bmt2.component */ "iug2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_bmt2_component__WEBPACK_IMPORTED_MODULE_8__["AddBmt2Component"]
    }
];
var AddBmt2Module = /** @class */ (function () {
    function AddBmt2Module() {
    }
    AddBmt2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_bmt2_component__WEBPACK_IMPORTED_MODULE_8__["AddBmt2Component"],
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
    ], AddBmt2Module);
    return AddBmt2Module;
}());



/***/ }),

/***/ "vQvN":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/study-material/bmt2/add-bmt2/add-bmt2.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);