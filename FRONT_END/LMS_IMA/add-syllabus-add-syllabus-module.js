(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-syllabus-add-syllabus-module"],{

/***/ "+8Q7":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/scholarly/add-syllabus/add-syllabus.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "+pVS":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/soldierly/add-syllabus/add-syllabus.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AddSyllabusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSyllabusComponent", function() { return AddSyllabusComponent; });
/* harmony import */ var _raw_loader_add_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-syllabus.component.html */ "nStY");
/* harmony import */ var _add_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-syllabus.component.scss */ "1Lpt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
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











var AddSyllabusComponent = /** @class */ (function () {
    function AddSyllabusComponent(fb, spinner, cdref, dialog, router, route, service, sharedService) {
        var _this = this;
        this.fb = fb;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.service = service;
        this.sharedService = sharedService;
        this.descLength = 0;
        this.isDoc = true;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-IN');
        this.terms = [];
        this.date = new Date();
        this.currentYear = new Date().getFullYear();
        this.route.params.subscribe(function (params) {
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
            _this.addSyllabusForm = _this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                date: [_this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
                ],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                document: [],
                type: ['Soldierly'],
                id: [],
                termId: [_this.termId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        });
    }
    AddSyllabusComponent.prototype.ngOnInit = function () {
        this.getTerms();
        if (this.router.url.includes('view-syllabus')) {
            this.pTitle = 'View Syllabus';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.getSyllabusById();
        }
        else {
            this.pTitle = 'Add Syllabus';
        }
        this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.maxDate = this.datePipe.transform(new Date().setFullYear(this.currentYear + 5), 'yyyy-MM-dd');
    };
    AddSyllabusComponent.prototype.getSyllabusById = function () {
        var _this = this;
        this.service.getSyllabusById(this.id).subscribe(function (res) {
            _this.addSyllabusForm.patchValue({
                date: _this.datePipe.transform(res.object.date, 'yyyy-MM-dd'),
                name: res.object.name,
                description: res.object.description,
                status: res.object.status,
                id: res.object.id,
                termId: res.object.termId,
            });
            _this.docUrl = res.object.doc;
            _this.descLength = res.object.description.length;
        });
    };
    AddSyllabusComponent.prototype.getTerms = function () {
        var _this = this;
        this.service.getAllTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
    };
    AddSyllabusComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.sharedService.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.addSyllabusForm.patchValue({
                document: file
            });
            this.isDoc = true;
        }
    };
    AddSyllabusComponent.prototype.charCount = function (e, t) {
        if (t == 'description')
            this.descLength = e.target.value.length;
    };
    Object.defineProperty(AddSyllabusComponent.prototype, "f", {
        get: function () {
            return this.addSyllabusForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddSyllabusComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: 'Syllabus Soldierly', url: l
            }
        });
    };
    AddSyllabusComponent.prototype.addSyllabus = function () {
        var _this = this;
        if (this.addSyllabusForm.valid) {
            if (this.addSyllabusForm.value.document == null) {
                this.isDoc = false;
            }
            else {
                this.isDoc = true;
                this.spinner.show();
                this.service.addSyllabus(this.addSyllabusForm.value).subscribe(function (res) {
                    _this.apiCall(res);
                }, function (err) {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar('Some Error Occured.');
                });
            }
        }
        else {
            this.isError = true;
            this.sharedService.openSnackbar("Please Fill All Required Fields.");
        }
    };
    AddSyllabusComponent.prototype.updateSyllabus = function () {
        var _this = this;
        if (this.addSyllabusForm.valid) {
            this.spinner.show();
            this.service.updateSyllabus(this.addSyllabusForm.value).subscribe(function (res) {
                _this.apiCall(res);
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar('Some Error Occured.');
            });
        }
        else {
            this.isError = true;
        }
    };
    AddSyllabusComponent.prototype.apiCall = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
            this.cdref.detectChanges();
            this.goBack();
        }
        else {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
        }
    };
    AddSyllabusComponent.prototype.goBack = function () {
        if (this.router.url.includes('/main/trg-team'))
            this.router.navigate(['/main/trg-team/gso-2-pgme/' + this.term + '/syllabus/soldierly']);
        if (this.router.url.includes('/main/admin/trg-team'))
            this.router.navigate(['/main/admin/trg-team/gso-2-pgme/' + this.term + '/syllabus/soldierly']);
    };
    AddSyllabusComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] }
    ]; };
    AddSyllabusComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddSyllabusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ms-add-syllabus',
            template: _raw_loader_add_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], AddSyllabusComponent);
    return AddSyllabusComponent;
}());



/***/ }),

/***/ "/ZV8":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/syllabus/scholarly/add-syllabus/add-syllabus.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"><button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> GSO-2(PGME) <span class=\"sub-menu1\"> > {{term}} > Syllabus > Scholarly > {{pTitle}}</span>\r\n        <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addSyllabusForm\">\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"battalion\">Name<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" formControlName=\"name\" maxlength=\"100\" placeholder=\"Name\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">Name is\r\n                        required</span>\r\n                </div>\r\n\r\n                <!-- <div class=\"form-group col-md-4\">\r\n                    <label for=\"battalion\">Date<span class=\"required\">*</span></label>\r\n                    <input type=\"date\" [min]=\"minDate\" formControlName=\"date\" maxlength=\"100\" placeholder=\"Date\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.date.errors && f.date.errors.required && isError\" >Date is required</span>   \r\n                    <span class=\"validation_msg\" *ngIf=\"f.date.errors && isLessDate && isError\" >Please Select a Valid Date</span>   \r\n                </div> -->\r\n\r\n                <!-- <div class=\"form-group col-md-4\">\r\n                <label class=\"form-label\">Term<span class=\"required\">*</span> </label>\r\n                <select placeholder=\"Select Term\" class=\"form-control\" formControlName=\"termId\">\r\n                    <option disabled selected hidden></option>\r\n                    <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                </select>\r\n                <span class=\"validation_msg\" *ngIf=\"f.termId.errors && f.termId.errors.required && isError\" >Term is required</span>   \r\n            </div> -->\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"battalion\">Description<span class=\"char-count\"> ({{descLength}}/500) </span><span\r\n                            class=\"required\">*</span></label>\r\n                    <textarea class=\"form-control\" (input)=\"charCount($event,'description')\" id=\"message\"\r\n                        formControlName=\"description\" maxlength=\"500\"\r\n                        placeholder=\"Description (Maximum 500 Characters)\"></textarea>\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.description.errors && f.description.errors.required && isError\">Description is\r\n                        required</span>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"battalion\">Document<span class=\"required\">*</span></label>\r\n                <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                <mat-icon class=\"document_icon\" *ngIf=\"docUrl\" (click)=\"openDoc(docUrl)\">description</mat-icon>\r\n                <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n                <span class=\"validation_msg\" *ngIf=\"!isDoc\">Document is required</span>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"battalion\">Status<span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\">Status\r\n                        is required</span>\r\n                </div>\r\n            </div>\r\n\r\n            <button mat-raised-button *ngIf=\"!id\" (click)=\"addSyllabus()\">Add Syllabus</button>\r\n            <button *ngIf=\"id\" mat-raised-button (click)=\"updateSyllabus()\">Update Syllabus</button>\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "0i2O":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/gentlemanly/add-syllabus/add-syllabus.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "1Evs":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/leaderly/add-syllabus/add-syllabus.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddSyllabusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSyllabusModule", function() { return AddSyllabusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _add_syllabus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-syllabus.component */ "jIiD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _add_syllabus_component__WEBPACK_IMPORTED_MODULE_9__["AddSyllabusComponent"]
    },
];
var AddSyllabusModule = /** @class */ (function () {
    function AddSyllabusModule() {
    }
    AddSyllabusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_syllabus_component__WEBPACK_IMPORTED_MODULE_9__["AddSyllabusComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"]
            ]
        })
    ], AddSyllabusModule);
    return AddSyllabusModule;
}());



/***/ }),

/***/ "1Lpt":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/soldierly/add-syllabus/add-syllabus.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "6fxd":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/gentlemanly/add-syllabus/add-syllabus.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddSyllabusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSyllabusModule", function() { return AddSyllabusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _add_syllabus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-syllabus.component */ "jmKK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _add_syllabus_component__WEBPACK_IMPORTED_MODULE_9__["AddSyllabusComponent"]
    },
];
var AddSyllabusModule = /** @class */ (function () {
    function AddSyllabusModule() {
    }
    AddSyllabusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_syllabus_component__WEBPACK_IMPORTED_MODULE_9__["AddSyllabusComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"]
            ]
        })
    ], AddSyllabusModule);
    return AddSyllabusModule;
}());



/***/ }),

/***/ "DU55":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/scholarly/add-syllabus/add-syllabus.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AddSyllabusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSyllabusComponent", function() { return AddSyllabusComponent; });
/* harmony import */ var _raw_loader_add_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-syllabus.component.html */ "/ZV8");
/* harmony import */ var _add_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-syllabus.component.scss */ "+8Q7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
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











var AddSyllabusComponent = /** @class */ (function () {
    function AddSyllabusComponent(fb, spinner, cdref, dialog, router, route, service, sharedService) {
        var _this = this;
        this.fb = fb;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.service = service;
        this.sharedService = sharedService;
        this.descLength = 0;
        this.isDoc = true;
        this.terms = [];
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-IN');
        this.date = new Date();
        this.currentYear = new Date().getFullYear();
        this.route.params.subscribe(function (params) {
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
            _this.addSyllabusForm = _this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                date: [new Date().toISOString().split('T')[0],
                ],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                document: [],
                type: ['Scholarly'],
                id: [],
                termId: [_this.termId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        });
    }
    AddSyllabusComponent.prototype.ngOnInit = function () {
        this.getTerms();
        if (this.router.url.includes('view-syllabus')) {
            this.pTitle = 'View Syllabus';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.getSyllabusById();
        }
        else {
            this.pTitle = 'Add Syllabus';
        }
        this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.maxDate = this.datePipe.transform(new Date().setFullYear(this.currentYear + 5), 'yyyy-MM-dd');
    };
    AddSyllabusComponent.prototype.getTerms = function () {
        var _this = this;
        this.service.getAllTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
    };
    AddSyllabusComponent.prototype.getSyllabusById = function () {
        var _this = this;
        this.service.getSyllabusById(this.id).subscribe(function (res) {
            _this.addSyllabusForm.patchValue({
                date: _this.datePipe.transform(res.object.date, 'yyyy-MM-dd'),
                name: res.object.name,
                description: res.object.description,
                status: res.object.status,
                id: res.object.id,
                termId: res.object.termId,
            });
            _this.docUrl = res.object.doc;
            _this.descLength = res.object.description.length;
        });
    };
    AddSyllabusComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.sharedService.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.addSyllabusForm.patchValue({
                document: file
            });
            this.isDoc = true;
        }
    };
    AddSyllabusComponent.prototype.charCount = function (e, t) {
        if (t == 'description')
            this.descLength = e.target.value.length;
    };
    Object.defineProperty(AddSyllabusComponent.prototype, "f", {
        get: function () {
            return this.addSyllabusForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddSyllabusComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: 'Syllabus Scholarly', url: l
            }
        });
    };
    AddSyllabusComponent.prototype.addSyllabus = function () {
        var _this = this;
        if (this.addSyllabusForm.valid) {
            if (this.addSyllabusForm.value.document == null) {
                this.isDoc = false;
            }
            else {
                this.isDoc = true;
                this.spinner.show();
                this.service.addSyllabus(this.addSyllabusForm.value).subscribe(function (res) {
                    _this.apiCall(res);
                }, function (err) {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar('Some Error Occured.');
                });
            }
        }
        else {
            this.isError = true;
        }
    };
    AddSyllabusComponent.prototype.updateSyllabus = function () {
        var _this = this;
        if (this.addSyllabusForm.valid) {
            this.spinner.show();
            this.service.updateSyllabus(this.addSyllabusForm.value).subscribe(function (res) {
                _this.apiCall(res);
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar('Some Error Occured.');
            });
        }
        else {
            this.isError = true;
        }
    };
    AddSyllabusComponent.prototype.apiCall = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
            this.cdref.detectChanges();
            this.goBack();
        }
        else {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
        }
    };
    AddSyllabusComponent.prototype.goBack = function () {
        if (this.router.url.includes('/main/admin/trg-team/')) {
            this.router.navigate(['/main/admin/trg-team/gso-2-pgme/' + this.term + '/syllabus/scholarly']);
        }
        else {
            this.router.navigate(['/main/trg-team/gso-2-pgme/' + this.term + '/syllabus/scholarly']);
        }
    };
    AddSyllabusComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] }
    ]; };
    AddSyllabusComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddSyllabusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ms-add-syllabus',
            template: _raw_loader_add_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], AddSyllabusComponent);
    return AddSyllabusComponent;
}());



/***/ }),

/***/ "My0a":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/terms/add-syllabus/add-syllabus.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "TNK7":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/scholarly/add-syllabus/add-syllabus.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddSyllabusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSyllabusModule", function() { return AddSyllabusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _add_syllabus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-syllabus.component */ "DU55");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _add_syllabus_component__WEBPACK_IMPORTED_MODULE_9__["AddSyllabusComponent"]
    },
];
var AddSyllabusModule = /** @class */ (function () {
    function AddSyllabusModule() {
    }
    AddSyllabusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_syllabus_component__WEBPACK_IMPORTED_MODULE_9__["AddSyllabusComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"]
            ]
        })
    ], AddSyllabusModule);
    return AddSyllabusModule;
}());



/***/ }),

/***/ "b6x9":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/soldierly/add-syllabus/add-syllabus.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddSyllabusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSyllabusModule", function() { return AddSyllabusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _add_syllabus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-syllabus.component */ "+pVS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _add_syllabus_component__WEBPACK_IMPORTED_MODULE_9__["AddSyllabusComponent"]
    },
];
var AddSyllabusModule = /** @class */ (function () {
    function AddSyllabusModule() {
    }
    AddSyllabusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_syllabus_component__WEBPACK_IMPORTED_MODULE_9__["AddSyllabusComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"]
            ]
        })
    ], AddSyllabusModule);
    return AddSyllabusModule;
}());



/***/ }),

/***/ "chlr":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/syllabus/leaderly/add-syllabus/add-syllabus.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"><button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n         GSO-2(PGME) <span class=\"sub-menu1\"> > {{term}} > Syllabus > Leaderly > {{pTitle}}</span>\r\n        <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addSyllabusForm\" >\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"battalion\">Name<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" formControlName=\"name\" maxlength=\"100\" placeholder=\"Name\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >Name is required</span>   \r\n                </div>\r\n                \r\n                <!-- <div class=\"form-group col-md-4\">\r\n                    <label for=\"battalion\">Date<span class=\"required\">*</span></label>\r\n                    <input type=\"date\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"date\" maxlength=\"100\" placeholder=\"Date\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.date.errors && f.date.errors.required && isError\" >Date is required</span>   \r\n                    <span class=\"validation_msg\" *ngIf=\"f.date.errors && isLessDate && isError\" >Please Select a Valid Date</span>   \r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Term<span class=\"required\">*</span> </label>\r\n                    <select placeholder=\"Select Term\" class=\"form-control\" formControlName=\"termId\">\r\n                        <option disabled selected hidden></option>\r\n                        <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.termId.errors && f.termId.errors.required && isError\" >Term is required</span>   \r\n                </div> -->\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"battalion\">Description<span class=\"char-count\" > ({{descLength}}/500) </span><span class=\"required\">*</span></label>\r\n                    <textarea class=\"form-control\" (input)=\"charCount($event,'description')\" id=\"message\" formControlName=\"description\" maxlength=\"500\" placeholder=\"Description (Maximum 500 Characters)\"></textarea>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >Description is required</span>   \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"battalion\">Document<span class=\"required\">*</span></label>\r\n                <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                <mat-icon class=\"document_icon\" *ngIf=\"docUrl\" (click)=\"openDoc(docUrl)\">description</mat-icon>\r\n                <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n                <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span> \r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"battalion\">Status<span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span>   \r\n                </div>\r\n            </div>\r\n\r\n            <button mat-raised-button *ngIf=\"!id\" (click)=\"addSyllabus()\"  >Add Syllabus</button>\r\n            <button *ngIf=\"id\" mat-raised-button (click)=\"updateSyllabus()\"  >Update Syllabus</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "jIiD":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/leaderly/add-syllabus/add-syllabus.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddSyllabusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSyllabusComponent", function() { return AddSyllabusComponent; });
/* harmony import */ var _raw_loader_add_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-syllabus.component.html */ "chlr");
/* harmony import */ var _add_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-syllabus.component.scss */ "jRrs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
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











var AddSyllabusComponent = /** @class */ (function () {
    function AddSyllabusComponent(fb, spinner, cdref, dialog, router, route, service, sharedService) {
        var _this = this;
        this.fb = fb;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.service = service;
        this.sharedService = sharedService;
        this.descLength = 0;
        this.isDoc = true;
        this.terms = [];
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-IN');
        this.date = new Date();
        this.currentYear = new Date().getFullYear();
        this.route.params.subscribe(function (params) {
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
            _this.addSyllabusForm = _this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                date: [new Date().toISOString().split('T')[0],
                ],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                document: [],
                type: ['Leaderly'],
                id: [],
                termId: [_this.termId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        });
    }
    AddSyllabusComponent.prototype.ngOnInit = function () {
        this.getTerms();
        if (this.router.url.includes('view-syllabus')) {
            this.pTitle = 'View Syllabus';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.getSyllabusById();
        }
        else {
            this.pTitle = 'Add Syllabus';
        }
        this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.maxDate = this.datePipe.transform(new Date().setFullYear(this.currentYear + 5), 'yyyy-MM-dd');
    };
    AddSyllabusComponent.prototype.getTerms = function () {
        var _this = this;
        this.service.getAllTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
    };
    AddSyllabusComponent.prototype.getSyllabusById = function () {
        var _this = this;
        this.service.getSyllabusById(this.id).subscribe(function (res) {
            _this.addSyllabusForm.patchValue({
                date: _this.datePipe.transform(res.object.date, 'yyyy-MM-dd'),
                name: res.object.name,
                description: res.object.description,
                status: res.object.status,
                id: res.object.id,
                termId: res.object.termId,
            });
            _this.docUrl = res.object.doc;
            _this.descLength = res.object.description.length;
        });
    };
    AddSyllabusComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.sharedService.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.addSyllabusForm.patchValue({
                document: file
            });
            this.isDoc = true;
        }
    };
    AddSyllabusComponent.prototype.charCount = function (e, t) {
        if (t == 'description')
            this.descLength = e.target.value.length;
    };
    Object.defineProperty(AddSyllabusComponent.prototype, "f", {
        get: function () {
            return this.addSyllabusForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddSyllabusComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: 'Syllabus Leaderly', url: l
            }
        });
    };
    AddSyllabusComponent.prototype.addSyllabus = function () {
        var _this = this;
        console.log(this.addSyllabusForm.value);
        if (this.addSyllabusForm.valid) {
            if (this.addSyllabusForm.value.document == null) {
                this.isDoc = false;
            }
            else {
                this.isDoc = true;
                this.spinner.show();
                this.service.addSyllabus(this.addSyllabusForm.value).subscribe(function (res) {
                    _this.apiCall(res);
                }, function (err) {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar('Some Error Occured.');
                });
            }
        }
        else {
            this.isError = true;
        }
    };
    AddSyllabusComponent.prototype.updateSyllabus = function () {
        var _this = this;
        if (this.addSyllabusForm.valid) {
            this.spinner.show();
            this.service.updateSyllabus(this.addSyllabusForm.value).subscribe(function (res) {
                _this.apiCall(res);
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar('Some Error Occured.');
            });
        }
        else {
            this.isError = true;
        }
    };
    AddSyllabusComponent.prototype.apiCall = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
            this.cdref.detectChanges();
            this.goBack();
        }
        else {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
        }
    };
    AddSyllabusComponent.prototype.goBack = function () {
        if (this.router.url.includes('/main/admin/trg-team/')) {
            this.router.navigate(['/main/admin/trg-team/gso-2-pgme/' + this.term + '/syllabus/leaderly']);
        }
        else {
            this.router.navigate(['/main/trg-team/gso-2-pgme/' + this.term + '/syllabus/leaderly']);
        }
    };
    AddSyllabusComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] }
    ]; };
    AddSyllabusComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddSyllabusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ms-add-syllabus',
            template: _raw_loader_add_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], AddSyllabusComponent);
    return AddSyllabusComponent;
}());



/***/ }),

/***/ "jRrs":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/leaderly/add-syllabus/add-syllabus.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "jmKK":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/gentlemanly/add-syllabus/add-syllabus.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AddSyllabusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSyllabusComponent", function() { return AddSyllabusComponent; });
/* harmony import */ var _raw_loader_add_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-syllabus.component.html */ "s75w");
/* harmony import */ var _add_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-syllabus.component.scss */ "0i2O");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AddSyllabusComponent = /** @class */ (function () {
    function AddSyllabusComponent(fb, spinner, cdref, dialog, snackbar, router, route, service, sharedService) {
        var _this = this;
        this.fb = fb;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.router = router;
        this.route = route;
        this.service = service;
        this.sharedService = sharedService;
        this.descLength = 0;
        this.isDoc = true;
        this.terms = [];
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-IN');
        this.date = new Date();
        this.currentYear = new Date().getFullYear();
        this.route.params.subscribe(function (params) {
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
            _this.addSyllabusForm = _this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                date: [new Date().toISOString().split('T')[0]
                    // , [Validators.required, this.currentDateValidator.bind(this)]
                ],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                document: [],
                type: ['Gentlemanly'],
                id: [],
                termId: [_this.termId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        });
        this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    }
    AddSyllabusComponent.prototype.ngOnInit = function () {
        this.getTerms();
        if (this.router.url.includes('view-syllabus')) {
            this.pTitle = 'View Syllabus';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.getSyllabusById();
        }
        else {
            this.pTitle = 'Add Syllabus';
        }
        this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.maxDate = this.datePipe.transform(new Date().setFullYear(this.currentYear + 5), 'yyyy-MM-dd');
    };
    AddSyllabusComponent.prototype.getTerms = function () {
        var _this = this;
        this.service.getAllTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
    };
    AddSyllabusComponent.prototype.getSyllabusById = function () {
        var _this = this;
        this.service.getSyllabusById(this.id).subscribe(function (res) {
            _this.addSyllabusForm.patchValue({
                date: _this.datePipe.transform(res.object.date, 'yyyy-MM-dd'),
                name: res.object.name,
                description: res.object.description,
                status: res.object.status,
                id: res.object.id
            });
            _this.docUrl = res.object.doc;
            _this.descLength = res.object.description.length;
        });
    };
    AddSyllabusComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.sharedService.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.addSyllabusForm.patchValue({
                document: file
            });
            this.isDoc = true;
        }
    };
    AddSyllabusComponent.prototype.charCount = function (e, t) {
        if (t == 'description')
            this.descLength = e.target.value.length;
    };
    Object.defineProperty(AddSyllabusComponent.prototype, "f", {
        get: function () {
            return this.addSyllabusForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddSyllabusComponent.prototype.goBack = function () {
        if (this.router.url.includes('/main/admin/trg-team/')) {
            this.router.navigate(['/main/admin/trg-team/gso-2-pgme/' + this.term + '/syllabus/gentlemanly']);
        }
        else {
            this.router.navigate(['/main/trg-team/gso-2-pgme/' + this.term + '/syllabus/gentlemanly']);
        }
    };
    AddSyllabusComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: 'Syllabus Gentlemanly', url: l
            }
        });
    };
    AddSyllabusComponent.prototype.addSyllabus = function () {
        var _this = this;
        if (this.addSyllabusForm.valid) {
            if (this.addSyllabusForm.value.document == null) {
                this.isDoc = false;
            }
            else {
                this.isDoc = true;
                this.spinner.show();
                this.service.addSyllabus(this.addSyllabusForm.value).subscribe(function (res) {
                    _this.apiCall(res);
                }, function (err) {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar('Some Error Occured.');
                });
            }
        }
        else {
            this.isError = true;
        }
    };
    AddSyllabusComponent.prototype.updateSyllabus = function () {
        var _this = this;
        if (this.addSyllabusForm.valid) {
            this.spinner.show();
            this.service.updateSyllabus(this.addSyllabusForm.value).subscribe(function (res) {
                _this.apiCall(res);
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar('Some Error Occured.');
            });
        }
        else {
            this.isError = true;
        }
    };
    AddSyllabusComponent.prototype.apiCall = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
            this.cdref.detectChanges();
            this.goBack();
        }
        else {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
        }
    };
    AddSyllabusComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] }
    ]; };
    AddSyllabusComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddSyllabusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ms-add-syllabus',
            template: _raw_loader_add_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"]])
    ], AddSyllabusComponent);
    return AddSyllabusComponent;
}());



/***/ }),

/***/ "k3kF":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/terms/add-syllabus/add-syllabus.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddSyllabusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSyllabusComponent", function() { return AddSyllabusComponent; });
/* harmony import */ var _raw_loader_add_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-syllabus.component.html */ "qYy6");
/* harmony import */ var _add_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-syllabus.component.scss */ "My0a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AddSyllabusComponent = /** @class */ (function () {
    function AddSyllabusComponent(fb, _trgBattalion, spinner, cdref, dialog, snackbar, router, route, service, localID) {
        var _this = this;
        this.fb = fb;
        this._trgBattalion = _trgBattalion;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.router = router;
        this.route = route;
        this.service = service;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.battalions = [];
        this.terms = [];
        this.weeks = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI'];
        this.isDoc = true;
        this.descriptionLength = 0;
        this.date = new Date();
        this.currentYear = new Date().getFullYear();
        this.addSyllabusForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.currentDateValidator.bind(this)]],
            term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            document: []
        });
        //get terms
        this.service.getAllTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
        this.localID = localID;
    }
    AddSyllabusComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view-syllabus')) {
            this.pTitle = 'View Syllabus';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getTermSyllabusById(this.id).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.addSyllabusForm.patchValue({
                        name: res.object.name,
                        date: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(res.object.date, 'yyyy-MM-dd', _this.localID),
                        term: res.object.term,
                        description: res.object.description,
                        status: res.object.status
                    });
                    _this.descriptionLength = res.object.description.length;
                    _this.docUrl = res.object.doc;
                }
            });
        }
        else {
            this.pTitle = 'Add Syllabus';
        }
        this.minDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.date, 'yyyy-MM-dd', this.localID);
        this.maxDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.date.setFullYear(this.currentYear + 5), 'yyyy-MM-dd', this.localID);
    };
    AddSyllabusComponent.prototype.goBack = function () {
        this.router.navigate(['/main/trg-team/gso-2-pgme/syllabus/terms']);
    };
    //============CHARACTER COUNT==========
    AddSyllabusComponent.prototype.charCount = function (e, t) {
        if (t == 'desc')
            this.descriptionLength = e.target.value.length;
    };
    AddSyllabusComponent.prototype.openDoc = function (doc) {
        var dialogRef = this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], {
            width: '1200px', height: '600px',
            data: {
                type: 'document', url: doc
            }
        });
    };
    AddSyllabusComponent.prototype.onSelectDoc = function (e) {
        this.docUrl = '';
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this._trgBattalion.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.addSyllabusForm.patchValue({
                document: file
            });
            this.isDoc = true;
        }
    };
    Object.defineProperty(AddSyllabusComponent.prototype, "f", {
        get: function () {
            return this.addSyllabusForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddSyllabusComponent.prototype.addSyllabus = function () {
        var _this = this;
        if (this.addSyllabusForm.valid) {
            if (this.addSyllabusForm.value.document == null) {
                this.isDoc = false;
            }
            else {
                this.isDoc = true;
                this.spinner.show();
                this.service.addTermSyllabus(this.addSyllabusForm.value).subscribe(function (res) {
                    // console.log(res);
                    _this.apiRes(res);
                }, function (err) {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar('Some Error Occured.');
                });
            }
        }
        else {
            this.isError = true;
        }
    };
    AddSyllabusComponent.prototype.updateSyllabus = function () {
        var _this = this;
        if (this.addSyllabusForm.valid) {
            this.spinner.show();
            this.service.updateTermSyllabus(this.id, this.addSyllabusForm.value).subscribe(function (res) {
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar('Some Error Occured.');
            });
        }
        else {
            this.isError = true;
        }
    };
    AddSyllabusComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this._trgBattalion.openSnackbar(res.message);
            this.cdref.detectChanges();
            this.router.navigate(['/main/trg-team/gso-2-pgme/syllabus/terms']);
        }
        else {
            this.spinner.hide();
            this._trgBattalion.openSnackbar(res.message);
        }
    };
    AddSyllabusComponent.prototype.currentDateValidator = function (control) {
        var currDt = new Date().setHours(0, 0, 0, 0);
        var maxAcceptDate = new Date().setFullYear(this.currentYear + 5);
        var pDt = Date.parse(control.value.toString());
        if (pDt < currDt || pDt > maxAcceptDate) {
            this.isLessDate = true;
            return { 'invalidDate': true };
        }
        else {
            this.isLessDate = false;
            return null;
        }
    };
    AddSyllabusComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_9__["TrgBattalionService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_10__["TrgTeamService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
    ]; };
    AddSyllabusComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddSyllabusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-syllabus',
            template: _raw_loader_add_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_9__["TrgBattalionService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_10__["TrgTeamService"], String])
    ], AddSyllabusComponent);
    return AddSyllabusComponent;
}());



/***/ }),

/***/ "nStY":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/syllabus/soldierly/add-syllabus/add-syllabus.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"><button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n         GSO-2(PGME) <span class=\"sub-menu1\"> > {{term}} > Syllabus > Soldierly > {{pTitle}}</span>\r\n        <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addSyllabusForm\" >\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"battalion\">Name<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" formControlName=\"name\" maxlength=\"100\" placeholder=\"Name\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >Name is required</span>   \r\n                </div>\r\n                \r\n                <!-- <div class=\"form-group col-md-4\">\r\n                    <label for=\"battalion\">Date<span class=\"required\">*</span></label>\r\n                    <input type=\"date\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"date\" maxlength=\"100\" placeholder=\"Date\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.date.errors && f.date.errors.required && isError\" >Date is required</span>   \r\n                    <span class=\"validation_msg\" *ngIf=\"f.date.errors && isLessDate && isError\" >Please Enter a Valid Date</span>   \r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Term<span class=\"required\">*</span> </label>\r\n                    <select placeholder=\"Select Term\" class=\"form-control\" formControlName=\"termId\">\r\n                        <option disabled selected hidden></option>\r\n                        <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.termId.errors && f.termId.errors.required && isError\" >Term is required</span>   \r\n                </div> -->\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"battalion\">Description<span class=\"char-count\" > ({{descLength}}/500) </span><span class=\"required\">*</span></label>\r\n                    <textarea class=\"form-control\" (input)=\"charCount($event,'description')\" id=\"message\" formControlName=\"description\" maxlength=\"500\" placeholder=\"Description (Maximum 500 Characters)\"></textarea>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >Description is required</span>   \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"battalion\">Document<span class=\"required\">*</span></label>\r\n                <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                <mat-icon class=\"document_icon\" *ngIf=\"docUrl\" (click)=\"openDoc(docUrl)\">description</mat-icon>\r\n                <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n                <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span> \r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"battalion\">Status<span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span>   \r\n                </div>\r\n               \r\n             \r\n            </div>\r\n\r\n            <button mat-raised-button *ngIf=\"!id\" (click)=\"addSyllabus()\"  >Add Syllabus</button>\r\n            <button *ngIf=\"id\" mat-raised-button (click)=\"updateSyllabus()\"  >Update Syllabus</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "qYy6":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/syllabus/terms/add-syllabus/add-syllabus.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button> GSO-2(PGME) <span class=\"sub-menu1\"> > Syllabus > Termwise > {{pTitle}}</span>\r\n        <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addSyllabusForm\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"name\">Syllabus Name<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" name=\"name\" id=\"date\" class=\"form-control\" formControlName=\"name\" placeholder=\"Name\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >Please Enter Name</span> \r\n                </div> \r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"date\">Date<span class=\"required\">*</span></label>\r\n                    <input type=\"date\" name=\"date\" id=\"date\" class=\"form-control\" formControlName=\"date\" [min]=\"minDate\" [max]=\"maxDate\" >\r\n                    <span class=\"validation_msg\" *ngIf=\"f.date.errors && f.date.errors.required && isError\" >Please Select Date</span> \r\n                    <span class=\"validation_msg\" *ngIf=\"f.date.errors && isLessDate && isError\" >Please Enter a Valid Date</span> \r\n                </div> \r\n                \r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"battalion\">Term<span class=\"required\">*</span></label>\r\n                    <select type=\"text\" formControlName=\"term\" class=\"form-control\">\r\n                        <option value=\"\" selected hidden disabled>Select</option>\r\n                        <option *ngFor=\"let t of terms\" [value]=\"t.name\">{{t.name}}</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.term.errors && f.term.errors.required && isError\" >Season Term is required</span> \r\n                </div> \r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"description\">Description <span class=\"char-count\" >({{descriptionLength}}/500)  </span><span class=\"required\">*</span> </label>\r\n                    <textarea name=\"\" id=\"description\"  class=\"form-control\" maxlength=\"500\" formControlName=\"description\" placeholder=\"(Maximum 500 Characters)\"  (input)=\"charCount($event,'desc')\"></textarea>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >Please Enter Description</span> \r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"battalion\">Document<span class=\"required\">*</span></label>\r\n                <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                <a href=\"javascript:void(0)\" *ngIf=\"docUrl\" (click)=\"openDoc(docUrl)\" > <mat-icon class=\"document_icon\">description</mat-icon>  </a>\r\n                <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n                <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"battalion\">Status<span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Select</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span> \r\n                </div>\r\n            </div>\r\n\r\n            <button *ngIf=\"!id\" mat-raised-button (click)=\"addSyllabus()\" >Add Syllabus</button>\r\n            <button *ngIf=\"id\" mat-raised-button (click)=\"updateSyllabus()\"  >Update Syllabus</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>\r\n\r\n");

/***/ }),

/***/ "s75w":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/syllabus/gentlemanly/add-syllabus/add-syllabus.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"><button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n         GSO-2(PGME) <span class=\"sub-menu1\"> > {{term}} > Syllabus > Gentlemanly > {{pTitle}} </span>\r\n        <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addSyllabusForm\" >\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"battalion\">Name<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" formControlName=\"name\" maxlength=\"100\" placeholder=\"Name\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >Name is required</span>   \r\n                </div>\r\n                <!-- <div class=\"form-group col-md-6\">\r\n                    <label for=\"battalion\">Date<span class=\"required\">*</span></label>\r\n                    <input type=\"date\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"date\" maxlength=\"100\" placeholder=\"Date\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.date.errors && f.date.errors.required && isError\" >Date is required</span>   \r\n                    <span class=\"validation_msg\" *ngIf=\"f.date.errors && isLessDate && isError\" >Please Select a Valid Date.</span>   \r\n                </div> -->\r\n                <!-- <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Term<span class=\"required\">*</span> </label>\r\n                    <select placeholder=\"Select Term\" class=\"form-control\" formControlName=\"termId\">\r\n                        <option disabled selected hidden></option>\r\n                        <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.termId.errors && f.termId.errors.required && isError\" >Term is required</span>   \r\n                </div> -->\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"battalion\">Description<span class=\"char-count\" > ({{descLength}}/500) </span><span class=\"required\">*</span></label>\r\n                    <textarea class=\"form-control\" (input)=\"charCount($event,'description')\" id=\"message\" formControlName=\"description\" maxlength=\"500\" placeholder=\"Description (Maximum 500 Characters)\"></textarea>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >Description is required</span>   \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"battalion\">Document<span class=\"required\">*</span></label>\r\n                <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                <mat-icon class=\"document_icon\" *ngIf=\"docUrl\" (click)=\"openDoc(docUrl)\">description</mat-icon>\r\n                <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n                <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span> \r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"battalion\">Status<span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span>   \r\n                </div>\r\n            </div>\r\n\r\n            <button mat-raised-button *ngIf=\"pTitle == 'Add Syllabus'\" (click)=\"addSyllabus()\"  >Add Syllabus</button>\r\n            <button *ngIf=\"pTitle == 'View Syllabus'\" mat-raised-button (click)=\"updateSyllabus()\"  >Update Syllabus</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "u73q":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/terms/add-syllabus/add-syllabus.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: AddSyllabusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSyllabusModule", function() { return AddSyllabusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _add_syllabus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-syllabus.component */ "k3kF");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _add_syllabus_component__WEBPACK_IMPORTED_MODULE_9__["AddSyllabusComponent"]
    },
];
var AddSyllabusModule = /** @class */ (function () {
    function AddSyllabusModule() {
    }
    AddSyllabusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_syllabus_component__WEBPACK_IMPORTED_MODULE_9__["AddSyllabusComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"]
            ]
        })
    ], AddSyllabusModule);
    return AddSyllabusModule;
}());



/***/ })

}]);