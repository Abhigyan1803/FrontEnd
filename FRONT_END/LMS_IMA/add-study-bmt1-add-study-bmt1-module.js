(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-study-bmt1-add-study-bmt1-module"],{

/***/ "/Deu":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/syllabus-bmt1/add-study-bmt1/add-study-bmt1.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddStudyBmt1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudyBmt1Component", function() { return AddStudyBmt1Component; });
/* harmony import */ var _raw_loader_add_study_bmt1_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-study-bmt1.component.html */ "gsG5");
/* harmony import */ var _add_study_bmt1_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-study-bmt1.component.scss */ "hCKg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
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













var AddStudyBmt1Component = /** @class */ (function () {
    function AddStudyBmt1Component(dialog, _trgTeam, spinner, fb, router, sharedService, adminservice, service, cdref, route) {
        var _this = this;
        this.dialog = dialog;
        this._trgTeam = _trgTeam;
        this.spinner = spinner;
        this.fb = fb;
        this.router = router;
        this.sharedService = sharedService;
        this.adminservice = adminservice;
        this.service = service;
        this.cdref = cdref;
        this.route = route;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]('en-IN');
        this.title = "Add Syllabus";
        this.id = '';
        this.nameLength = 0;
        this.descLength = 0;
        this.terms = [];
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
                id: [''],
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                date: [_this.datePipe.transform(new Date(), 'yyyy-MM-dd')],
                status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                type: ['BMT-1'],
                document: [],
                termId: [_this.termId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
        });
    }
    AddStudyBmt1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.getTerms();
        if (this.router.url.includes('add-mark')) {
        }
        else if (this.router.url.includes('view-mark')) {
            this.spinner.show();
            this.title = 'View Syllabus';
            this.id = this.route.snapshot.queryParamMap.get('id');
            // this.id = this.activeRoute.snapshot.queryParamMap.get('id');
            console.log(this.id, "id id id");
            this._trgTeam.getSyllabusById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addSyllabusForm.patchValue({
                        id: res.object.id,
                        name: res.object.name,
                        description: res.object.description,
                        status: res.object.status,
                        type: ['BMT-1'],
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
    AddStudyBmt1Component.prototype.openDoc = function (l) {
        console.log("++++++++", l);
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    AddStudyBmt1Component.prototype.getTerms = function () {
        var _this = this;
        this.service.getAllTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
    };
    AddStudyBmt1Component.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.sharedService.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addSyllabusForm.patchValue({
                document: file
            });
            this.isDoc = true;
        }
    };
    AddStudyBmt1Component.prototype.charCount = function (e) {
        // if (t == 'name')
        //   this.nameLength = e.target.value.length
        // if (t == 'description')
        this.descLength = e.target.value.length;
    };
    Object.defineProperty(AddStudyBmt1Component.prototype, "f", {
        get: function () {
            return this.addSyllabusForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddStudyBmt1Component.prototype.submit = function () {
        var _this = this;
        if (this.addSyllabusForm.invalid || !this.isDoc) {
            this.isError = true;
            this.sharedService.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this._trgTeam.addSyllabus(this.addSyllabusForm.value).subscribe(function (res) {
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddStudyBmt1Component.prototype.update = function () {
        var _this = this;
        if (this.addSyllabusForm.valid) {
            this.spinner.show();
            this._trgTeam.updateSyllabus(this.addSyllabusForm.value).subscribe(function (res) {
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar("Some Error Occured.");
            });
        }
    };
    AddStudyBmt1Component.prototype.apiRes = function (res) {
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
    AddStudyBmt1Component.prototype.goBack = function () {
        this.router.navigate(['/main/trg-team/gso-2-pgme/' + this.term + '/syllabus/BMT-1']);
    };
    AddStudyBmt1Component.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_7__["TrgTeamService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_10__["AdjutantService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddStudyBmt1Component.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddStudyBmt1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-study-bmt1',
            template: _raw_loader_add_study_bmt1_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_study_bmt1_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_7__["TrgTeamService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_10__["AdjutantService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddStudyBmt1Component);
    return AddStudyBmt1Component;
}());



/***/ }),

/***/ "E0ex":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/study-material/study-bmt1/add-study-bmt1/add-study-bmt1.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"><button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> GSO 2 (PGME) <span class=\"sub-menu1\"> > {{term}} > Study Material > {{type}} > {{title}} </span>\r\n        <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addStudyMaterialForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label class=\"form-label\">Name <span class=\"required\">*</span></label>\r\n                    <input type=\"text\" formControlName=\"name\"  maxlength=\"100\"\r\n                        placeholder=\" Name\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">Name is\r\n                        required</span>\r\n                </div>\r\n                <!-- <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Term<span class=\"required\">*</span> </label>\r\n                    <select placeholder=\"\" class=\"form-control\" formControlName=\"termId\">\r\n                        <option disabled selected hidden></option>\r\n                        <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.termId.errors && f.termId.errors.required && isError\">Term is\r\n                        required</span>\r\n                </div> -->\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"awards\">Description <span class=\"char-count\"> ({{descLength}}/1500) </span> <span\r\n                            class=\"required\">*</span></label>\r\n                    <!-- <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\"> -->\r\n                    <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\" (input)=\"charCount($event)\" maxlength=\"1500\" formControlName=\"description\"></textarea>\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.description.errors && f.description.errors.required && isError\">*Please Enter\r\n                        description</span>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n                    <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                    <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\">description</mat-icon>\r\n                    <span class=\"note\">Max File Size 200 MB. (Only pdf and doc format.)</span>\r\n                    <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\">Document is required</span>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\">Status\r\n                        is required</span>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n            <button *ngIf=\"!id\" mat-raised-button (click)=\"submit()\">Add </button>\r\n            <button *ngIf=\"id\" mat-raised-button (click)=\"update()\">Update </button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "J7eC":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/study-material/study-bmt1/add-study-bmt1/add-study-bmt1.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "PhTb":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/study-material/study-bmt1/add-study-bmt1/add-study-bmt1.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AddStudyBmt1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudyBmt1Component", function() { return AddStudyBmt1Component; });
/* harmony import */ var _raw_loader_add_study_bmt1_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-study-bmt1.component.html */ "E0ex");
/* harmony import */ var _add_study_bmt1_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-study-bmt1.component.scss */ "J7eC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddStudyBmt1Component = /** @class */ (function () {
    function AddStudyBmt1Component(dialog, _trgTeam, spinner, fb, router, cdref, sharedService, route) {
        var _this = this;
        this.dialog = dialog;
        this._trgTeam = _trgTeam;
        this.spinner = spinner;
        this.fb = fb;
        this.router = router;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.route = route;
        this.title = "Add Study Material";
        this.id = '';
        this.nameLength = 0;
        this.descLength = 0;
        this.terms = [];
        this.route.params.subscribe(function (params) {
            _this.type = params.type;
            _this.term = params.term;
            console.log(params);
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
            _this.addStudyMaterialForm = _this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                studyMaterialType: [_this.type],
                doc: [],
                termId: [_this.termId],
            });
        });
    }
    AddStudyBmt1Component.prototype.ngOnInit = function () {
        var _this = this;
        // this.getTerms()
        if (this.router.url.includes('view-study-material')) {
            this.spinner.show();
            this.title = 'View Study Material';
            this.id = this.route.snapshot.queryParamMap.get('id');
            // this.id = this.activeRoute.snapshot.queryParamMap.get('id');
            // console.log(this.id, "id id id");
            this._trgTeam.getStudyMaterialById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addStudyMaterialForm.patchValue({
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
    AddStudyBmt1Component.prototype.openDoc = function (l) {
        console.log("++++++++", l);
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    AddStudyBmt1Component.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        //50 mb doc change from 50 to 200 
        // if (file.size > 52428800) {
        if (file.size > 202428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.sharedService.openSnackbar('Document Should Be Maximum 200 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addStudyMaterialForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddStudyBmt1Component.prototype.charCount = function (e) {
        // if (t == 'name')
        //   this.nameLength = e.target.value.length
        // if (t == 'description')
        this.descLength = e.target.value.length;
    };
    Object.defineProperty(AddStudyBmt1Component.prototype, "f", {
        get: function () {
            return this.addStudyMaterialForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddStudyBmt1Component.prototype.submit = function () {
        var _this = this;
        if (this.addStudyMaterialForm.invalid || !this.isDoc) {
            this.isError = true;
            this.sharedService.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this._trgTeam.addStudyMaterial(this.addStudyMaterialForm.value).subscribe(function (res) {
                console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddStudyBmt1Component.prototype.update = function () {
        var _this = this;
        if (this.addStudyMaterialForm.valid) {
            this.spinner.show();
            this._trgTeam.updateStudyMaterial(this.id, this.addStudyMaterialForm.value).subscribe(function (res) {
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar("Some Error Occured.");
            });
        }
    };
    AddStudyBmt1Component.prototype.apiRes = function (res) {
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
    AddStudyBmt1Component.prototype.goBack = function () {
        this.router.navigate(['/main/trg-team/gso-2-pgme/' + this.term + '/study-material/material/' + this.type]);
    };
    AddStudyBmt1Component.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_7__["TrgTeamService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddStudyBmt1Component.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddStudyBmt1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-study-bmt1',
            template: _raw_loader_add_study_bmt1_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_study_bmt1_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_7__["TrgTeamService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddStudyBmt1Component);
    return AddStudyBmt1Component;
}());



/***/ }),

/***/ "QTof":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/study-material/study-bmt1/add-study-bmt1/add-study-bmt1.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddStudyBmt1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudyBmt1Module", function() { return AddStudyBmt1Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_study_bmt1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-study-bmt1.component */ "PhTb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_study_bmt1_component__WEBPACK_IMPORTED_MODULE_8__["AddStudyBmt1Component"]
    }
];
var AddStudyBmt1Module = /** @class */ (function () {
    function AddStudyBmt1Module() {
    }
    AddStudyBmt1Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_study_bmt1_component__WEBPACK_IMPORTED_MODULE_8__["AddStudyBmt1Component"],
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
    ], AddStudyBmt1Module);
    return AddStudyBmt1Module;
}());



/***/ }),

/***/ "WCtw":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/syllabus-bmt1/add-study-bmt1/add-study-bmt1.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AddStudyBmt1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudyBmt1Module", function() { return AddStudyBmt1Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_study_bmt1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-study-bmt1.component */ "/Deu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_study_bmt1_component__WEBPACK_IMPORTED_MODULE_8__["AddStudyBmt1Component"]
    }
];
var AddStudyBmt1Module = /** @class */ (function () {
    function AddStudyBmt1Module() {
    }
    AddStudyBmt1Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_study_bmt1_component__WEBPACK_IMPORTED_MODULE_8__["AddStudyBmt1Component"],
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
    ], AddStudyBmt1Module);
    return AddStudyBmt1Module;
}());



/***/ }),

/***/ "gsG5":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/syllabus/syllabus-bmt1/add-study-bmt1/add-study-bmt1.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"><button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n         GSO 2 PGME <span class=\"sub-menu1\"> > {{term}} > Syllabus > BMT-1 > {{title}} </span>\r\n        <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addSyllabusForm\" >\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"position\" >Name<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" formControlName=\"name\"  maxlength=\"100\" placeholder=\" Name\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >Name is required</span>   \r\n                </div>\r\n                <!-- <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Term </label>\r\n                    <select placeholder=\"Select Term\" class=\"form-control\" formControlName=\"termId\">\r\n                        <option disabled selected hidden></option>\r\n                        <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.termId.errors && f.termId.errors.required && isError\" >Term is required</span>   \r\n                </div> -->\r\n             \r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n           <label for=\"awards\">Description <span class=\"char-count\" >   ({{descLength}}/1500)  </span> <span class=\"required\">*</span></label>\r\n           <!-- <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\"> -->\r\n           <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\"  (input)=\"charCount($event)\" maxlength=\"1500\" formControlName=\"description\"></textarea>\r\n           <span class=\"validation_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >*Please Enter description</span>\r\n\r\n            </div>\r\n       </div> \r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n                    <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                    <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\">description</mat-icon>\r\n                    <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n                    <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\">Document is required</span>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"form-group col-md-6\">\r\n                <label for=\"position\" hidden>Type<span class=\"required\">*</span></label>\r\n                <input id=\"name\" type=\"text\" hidden class=\"form-control\" maxlength=\"100\" formControlName=\"syllabusType\"\r\n                placeholder=\"Name\">\r\n             </div> -->\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span>   \r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div style=\"float: right;\" >\r\n\r\n                <button *ngIf=\"!id\" mat-raised-button (click)=\"submit()\"  >Add </button>\r\n                <button *ngIf=\"id\" mat-raised-button (click)=\"update()\"  >Update </button>\r\n    \r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "hCKg":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/syllabus-bmt1/add-study-bmt1/add-study-bmt1.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);