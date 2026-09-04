(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-exam-schedule-add-exam-schedule-module"],{

/***/ "2JTW":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/exam-schedule/add-exam-schedule/add-exam-schedule.component.scss ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "HdDF":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/exam-schedule/add-exam-schedule/add-exam-schedule.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: AddExamScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExamScheduleComponent", function() { return AddExamScheduleComponent; });
/* harmony import */ var _raw_loader_add_exam_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-exam-schedule.component.html */ "V2dQ");
/* harmony import */ var _add_exam_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-exam-schedule.component.scss */ "2JTW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
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










var AddExamScheduleComponent = /** @class */ (function () {
    function AddExamScheduleComponent(dialog, service, sharedService, spinner, fb, router, activeRoute) {
        var _this = this;
        this.dialog = dialog;
        this.service = service;
        this.sharedService = sharedService;
        this.spinner = spinner;
        this.fb = fb;
        this.router = router;
        this.activeRoute = activeRoute;
        this.title = 'Add Exam Schedule';
        this.id = '';
        this.nameLength = 0;
        this.descLength = 0;
        this.type = "BMT-1";
        this.subTypes = ['General Instruction', 'Resp of Eval', 'Resp of Invigilation', 'Confirmation of Marks', 'Retest'];
        this.activeRoute.params.subscribe(function (params) {
            _this.term = params.term;
            _this.subType = params.subType;
            if (_this.term == 'I Term') {
                _this.termId = 1;
            }
            else if (_this.term == 'II Term') {
                _this.termId = 2;
            }
            else if (_this.term == 'III Term') {
                _this.termId = 3;
            }
            else if (_this.term == 'II Tech') {
                _this.termId = 7;
            }
            else {
                _this.router.navigate(['/main/trg-team/dashboard']);
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 3);
            }
            if (!_this.subTypes.includes(_this.subType)) {
                _this.router.navigate(['/main/trg-team/dashboard']);
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 3);
            }
            _this.addExamScheduleForm = _this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                type: [_this.type],
                subType: [_this.subType],
                termId: [_this.termId],
                doc: []
            });
        });
    }
    AddExamScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view-exam-schedule')) {
            this.spinner.show();
            this.title = 'View Exam Schedule';
            this.id = this.activeRoute.snapshot.queryParamMap.get('id');
            this.service.viewExamScheduleById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    if (res.List) {
                        _this.addExamScheduleForm.patchValue({
                            name: res.List.name,
                            description: res.List.description,
                            status: res.List.status,
                            type: res.List.type,
                            subType: res.List.subType,
                            termId: res.List.termId
                        });
                        _this.descLength = res.List.description.length;
                        _this.nameLength = res.List.name.length;
                        _this.docUrl = res.List.document;
                        _this.isDoc = true;
                        _this.spinner.hide();
                    }
                }
                else {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar(res.message);
                }
            });
        }
    };
    AddExamScheduleComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    AddExamScheduleComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.sharedService.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addExamScheduleForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddExamScheduleComponent.prototype.charCount = function (e, t) {
        if (t == 'name')
            this.nameLength = e.target.value.length;
        if (t == 'description')
            this.descLength = e.target.value.length;
    };
    Object.defineProperty(AddExamScheduleComponent.prototype, "f", {
        get: function () {
            return this.addExamScheduleForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddExamScheduleComponent.prototype.submit = function () {
        var _this = this;
        if (this.addExamScheduleForm.invalid || !this.isDoc) {
            this.isError = true;
            this.sharedService.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.service.addExamSchedue(this.addExamScheduleForm.value).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddExamScheduleComponent.prototype.update = function () {
        var _this = this;
        if (this.addExamScheduleForm.valid) {
            this.spinner.show();
            this.service.updateExamSchedule(this.id, this.addExamScheduleForm.value).subscribe(function (res) {
                // console.log(res);
                if (res.status == '1') {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar(res.message);
                    _this.goBack();
                }
                else {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar("Some Error Occured.");
            });
        }
    };
    AddExamScheduleComponent.prototype.apiRes = function (res) {
        if (res.status == 'Success Messgae') {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.msg);
            this.goBack();
        }
        else {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.msg);
        }
    };
    AddExamScheduleComponent.prototype.goBack = function () {
        this.router.navigate(["/main/trg-team/gso-2-assessment/" + this.term + "/service-subjects/" + this.type + "/" + this.subType]);
    };
    AddExamScheduleComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddExamScheduleComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddExamScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-exam-schedule',
            template: _raw_loader_add_exam_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_exam_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddExamScheduleComponent);
    return AddExamScheduleComponent;
}());



/***/ }),

/***/ "JMk/":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-2/exam-schedule/add-exam-schedule/add-exam-schedule.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: AddExamScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExamScheduleComponent", function() { return AddExamScheduleComponent; });
/* harmony import */ var _raw_loader_add_exam_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-exam-schedule.component.html */ "KulQ");
/* harmony import */ var _add_exam_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-exam-schedule.component.scss */ "UkrU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
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










var AddExamScheduleComponent = /** @class */ (function () {
    function AddExamScheduleComponent(dialog, service, sharedService, spinner, fb, router, activeRoute) {
        var _this = this;
        this.dialog = dialog;
        this.service = service;
        this.sharedService = sharedService;
        this.spinner = spinner;
        this.fb = fb;
        this.router = router;
        this.activeRoute = activeRoute;
        this.title = 'Add Exam Schedule';
        this.id = '';
        this.nameLength = 0;
        this.descLength = 0;
        this.type = "BMT-2";
        this.subTypes = ['General Instruction', 'Resp of Eval', 'Resp of Invigilation', 'Confirmation of Marks', 'Retest'];
        this.activeRoute.params.subscribe(function (params) {
            _this.term = params.term;
            _this.subType = params.subType;
            if (_this.term == 'I Term') {
                _this.termId = 1;
            }
            else if (_this.term == 'II Term') {
                _this.termId = 2;
            }
            else if (_this.term == 'III Term') {
                _this.termId = 3;
            }
            else if (_this.term == 'II Tech') {
                _this.termId = 7;
            }
            else {
                _this.router.navigate(['/main/trg-team/dashboard']);
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 3);
            }
            if (!_this.subTypes.includes(_this.subType)) {
                _this.router.navigate(['/main/trg-team/dashboard']);
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 3);
            }
            _this.addExamScheduleForm = _this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                type: [_this.type],
                subType: [_this.subType],
                termId: [_this.termId],
                doc: []
            });
        });
    }
    AddExamScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view-exam-schedule')) {
            this.spinner.show();
            this.title = 'View Exam Schedule';
            this.id = this.activeRoute.snapshot.queryParamMap.get('id');
            this.service.viewExamScheduleById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    if (res.List) {
                        _this.addExamScheduleForm.patchValue({
                            name: res.List.name,
                            description: res.List.description,
                            status: res.List.status,
                            type: res.List.type,
                            subType: res.List.subType,
                            termId: res.List.termId
                        });
                        _this.descLength = res.List.description.length;
                        _this.nameLength = res.List.name.length;
                        _this.docUrl = res.List.document;
                        _this.isDoc = true;
                        _this.spinner.hide();
                    }
                }
                else {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar(res.message);
                }
            });
        }
    };
    AddExamScheduleComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    AddExamScheduleComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.sharedService.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addExamScheduleForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddExamScheduleComponent.prototype.charCount = function (e, t) {
        if (t == 'name')
            this.nameLength = e.target.value.length;
        if (t == 'description')
            this.descLength = e.target.value.length;
    };
    Object.defineProperty(AddExamScheduleComponent.prototype, "f", {
        get: function () {
            return this.addExamScheduleForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddExamScheduleComponent.prototype.submit = function () {
        var _this = this;
        if (this.addExamScheduleForm.invalid || !this.isDoc) {
            this.isError = true;
            this.sharedService.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.service.addExamSchedue(this.addExamScheduleForm.value).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddExamScheduleComponent.prototype.update = function () {
        var _this = this;
        if (this.addExamScheduleForm.valid) {
            this.spinner.show();
            this.service.updateExamSchedule(this.id, this.addExamScheduleForm.value).subscribe(function (res) {
                // console.log(res);
                if (res.status == '1') {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar(res.message);
                    _this.goBack();
                }
                else {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar("Some Error Occured.");
            });
        }
    };
    AddExamScheduleComponent.prototype.apiRes = function (res) {
        if (res.status == 'Success Messgae') {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.msg);
            this.goBack();
        }
        else {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.msg);
        }
    };
    AddExamScheduleComponent.prototype.goBack = function () {
        this.router.navigate(["/main/trg-team/gso-2-assessment/" + this.term + "/service-subjects/" + this.type + "/" + this.subType]);
    };
    AddExamScheduleComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddExamScheduleComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddExamScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-exam-schedule',
            template: _raw_loader_add_exam_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_exam_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddExamScheduleComponent);
    return AddExamScheduleComponent;
}());



/***/ }),

/***/ "KulQ":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-2/exam-schedule/add-exam-schedule/add-exam-schedule.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\n    <h4 class=\"card-heading\"><button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon>\n     </button>\n     GSO-2(Assement) <span class=\"sub-menu1\"> > {{term}} > Service Subject > {{type}} > {{subType}} > {{title}} </span>\n    </h4>\n</div>\n<mat-card>\n    <div class=\"top-br\">\n        <form [formGroup]=\"addExamScheduleForm\" >\n            <div class=\"row\">\n                <div class=\"form-group col-md-12\">\n                    <label class=\"form-label\">Name <span class=\"char-count\" > ({{nameLength}}/100) </span> <span class=\"required\">*</span></label>\n                    <input type=\"text\" formControlName=\"name\" (input)=\"charCount($event,'name')\" maxlength=\"100\" placeholder=\" Name\" class=\"form-control\">\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >Name is required</span>   \n                </div>\n             \n            </div>\n\n            \n            <div class=\"row\">\n                <div class=\"form-group col-md-12\">\n                    <label class=\"form-label\"> Description <span class=\"char-count\" > ({{descLength}}/500) </span> <span class=\"required\">*</span></label>\n                    <textarea class=\"form-control\" maxlength=\"500\" id=\"message\" formControlName=\"description\" (input)=\"charCount($event,'description')\" placeholder=\"Description (Maximum 500 Characters)\"></textarea>\n                    <span class=\"validation_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >Description is required</span>\n                </div>\n            </div>\n           \n\n            <div class=\"row\">\n                <div class=\"form-group col-md-12\">\n                    <label class=\"form-label\">Document<span class=\"required\">*</span></label>\n                    <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\n                    <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\">description</mat-icon>\n                    <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\n                    <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\">Document is required</span>\n                </div>\n            </div>\n\n         \n            \n            <div class=\"row\">\n                <div class=\"form-group col-md-6\">\n                    <label class=\"form-label\">Status <span class=\"required\">*</span></label>\n                    <select class=\"form-control\" formControlName=\"status\">\n                        <option value=\"\" selected hidden disabled>Status</option>\n                        <option value=\"1\">Active</option>\n                        <option value=\"0\">Inactive</option>\n                    </select>\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span>   \n                </div>\n            </div>\n\n\n            <div class=\"pull-right\" >\n\n                <button *ngIf=\"!id\" mat-raised-button (click)=\"submit()\"  >Add </button>\n                <button *ngIf=\"id\" mat-raised-button (click)=\"update()\"  >Update </button>\n    \n            </div>\n\n        </form>\n    </div>\n</mat-card>");

/***/ }),

/***/ "N/KI":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/exam-schedule/add-exam-schedule/add-exam-schedule.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AddExamScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExamScheduleComponent", function() { return AddExamScheduleComponent; });
/* harmony import */ var _raw_loader_add_exam_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-exam-schedule.component.html */ "X/Gd");
/* harmony import */ var _add_exam_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-exam-schedule.component.scss */ "XpP6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddExamScheduleComponent = /** @class */ (function () {
    function AddExamScheduleComponent(dialog, spinner, route, fb, router, adminservice, cdref) {
        var _this = this;
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.pageTitle = "Add";
        this.terms = [];
        this.descLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addExamScheduleform = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.route.params.subscribe(function (params) {
            _this.type = params.type;
            console.log("Recieved Param: ", _this.type);
        });
        // this.getBattalion();
        var tempTermId;
        if (this.type == "Exam-I-Term") {
            tempTermId = 1;
        }
        else if (this.type == "Exam-II-Term") {
            tempTermId = 2;
        }
        else if (this.type == "Exam-III-Term") {
            tempTermId = 3;
        }
        else if (this.type == "Exam-II-Tech") {
            tempTermId = 7;
        }
        this.addExamScheduleform = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [tempTermId],
            type: ['Academic Exam Schedule'],
            doc: [],
            userId: [1],
        });
    }
    AddExamScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTerms();
        if (this.router.url.includes('add-exam-marks')) {
            this.pageTitle = 'Add';
        }
        else if (this.router.url.includes('view-exam-marks')) {
            this.spinner.show();
            this.pageTitle = 'View';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adminservice.getdistributionById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addExamScheduleform.patchValue({
                        name: res.object.name,
                        termId: res.object.termId,
                        status: res.object.status,
                        type: res.object.type,
                    });
                    _this.docUrl = res.object.url;
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
    Object.defineProperty(AddExamScheduleComponent.prototype, "f", {
        get: function () {
            return this.addExamScheduleform.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddExamScheduleComponent.prototype.goBack = function () {
        this.router.navigate(['main/academic-depart/examination/Exam-schedule/' + this.type]);
    };
    AddExamScheduleComponent.prototype.submit = function () {
        var _this = this;
        if (this.addExamScheduleform.invalid || !this.isDoc) {
            this.isError = true;
            this.adminservice.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            console.log(this.addExamScheduleform.value, "this.addExamScheduleform.value");
            this.adminservice.addExamSchedule(this.addExamScheduleform.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/academic-depart/examination/Exam-schedule/' + _this.type]);
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
    AddExamScheduleComponent.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddExamScheduleComponent.prototype.openDoc = function (l) {
        console.log("++++++++", l);
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    // onSelectDoc(e) {
    //   var file = e.target.files[0];
    //   console.log(file,"file juned");
    //   if (file.size > 5242880) {
    //     this.docFile.nativeElement.files = this.unSelectedFile;
    //     this.adminservice.openSnackbar('Document Should Be Maximum 5 MB in Size')
    //   } else {
    //     this.docUrl = ''
    //     this.addExamScheduleform.patchValue({
    //       doc: file
    //     });
    //     this.isDoc=true;
    //     this.adminservice.addDoc(file).subscribe(
    //       res => {
    //         console.log(res,"url dj");
    //         if (res.status == 'OK') {
    //           this.adminservice.openSnackbar(res.message)
    //         this.url=res.object.url
    //         console.log(this.url,"my url");
    //         } else {
    //           this.spinner.hide();
    //           this.adminservice.openSnackbar(res.message)
    //         }
    //       },
    //       err => {
    //         this.spinner.hide();
    //         this.adminservice.openSnackbar('Error Occured.')
    //         console.log(JSON.stringify(err));
    //       }
    //     )
    //   }
    // }
    AddExamScheduleComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.value = '';
            this.adminservice.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else if (file.size == 0) {
            this.docFile.nativeElement.value = '';
            this.adminservice.openSnackbar('Document Should Be greater than 0 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addExamScheduleform.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddExamScheduleComponent.prototype.termChange = function (e) {
        console.log(e);
        if (e = 1) {
            this.terms[0];
            console.log(this.terms[0]);
        }
    };
    AddExamScheduleComponent.prototype.getTerms = function () {
        var _this = this;
        this.adminservice.getAllTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
    };
    AddExamScheduleComponent.prototype.update = function () {
        var _this = this;
        this.spinner.show();
        // console.log("Bdo", this.addBdoForm.value);
        this.addExamScheduleform.value.url = this.url;
        if (this.addExamScheduleform.valid) {
            this.adminservice.updateDistribution(this.id, this.addExamScheduleform.value).subscribe(function (res) {
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
    AddExamScheduleComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
            this.router.navigate(['main/academic-depart/examination/Exam-schedule/' + this.type]);
        }
        else {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
        }
    };
    AddExamScheduleComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    AddExamScheduleComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddExamScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-exam-schedule',
            template: _raw_loader_add_exam_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_exam_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], AddExamScheduleComponent);
    return AddExamScheduleComponent;
}());



/***/ }),

/***/ "UkrU":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-2/exam-schedule/add-exam-schedule/add-exam-schedule.component.scss ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "V2dQ":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/exam-schedule/add-exam-schedule/add-exam-schedule.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\n    <h4 class=\"card-heading\"><button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon>\n     </button>\n     GSO-2(Assement) <span class=\"sub-menu1\"> > {{term}} > Service Subject > {{type}} > {{subType}} > {{title}} </span>\n    </h4>\n</div>\n<mat-card>\n    <div class=\"top-br\">\n        <form [formGroup]=\"addExamScheduleForm\" >\n            <div class=\"row\">\n                <div class=\"form-group col-md-12\">\n                    <label class=\"form-label\">Name <span class=\"char-count\" > ({{nameLength}}/100) </span> <span class=\"required\">*</span></label>\n                    <input type=\"text\" formControlName=\"name\" (input)=\"charCount($event,'name')\" maxlength=\"100\" placeholder=\" Name\" class=\"form-control\">\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >Name is required</span>   \n                </div>\n             \n            </div>\n\n            \n            <div class=\"row\">\n                <div class=\"form-group col-md-12\">\n                    <label class=\"form-label\"> Description <span class=\"char-count\" > ({{descLength}}/500) </span> <span class=\"required\">*</span></label>\n                    <textarea class=\"form-control\" maxlength=\"500\" id=\"message\" formControlName=\"description\" (input)=\"charCount($event,'description')\" placeholder=\"Description (Maximum 500 Characters)\"></textarea>\n                    <span class=\"validation_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >Description is required</span>\n                </div>\n            </div>\n           \n\n            <div class=\"row\">\n                <div class=\"form-group col-md-12\">\n                    <label class=\"form-label\">Document<span class=\"required\">*</span></label>\n                    <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\n                    <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\">description</mat-icon>\n                    <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\n                    <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\">Document is required</span>\n                </div>\n            </div>\n\n         \n            \n            <div class=\"row\">\n                <div class=\"form-group col-md-6\">\n                    <label class=\"form-label\">Status <span class=\"required\">*</span></label>\n                    <select class=\"form-control\" formControlName=\"status\">\n                        <option value=\"\" selected hidden disabled>Status</option>\n                        <option value=\"1\">Active</option>\n                        <option value=\"0\">Inactive</option>\n                    </select>\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span>   \n                </div>\n            </div>\n\n\n            <div class=\"pull-right\" >\n\n                <button *ngIf=\"!id\" mat-raised-button (click)=\"submit()\"  >Add </button>\n                <button *ngIf=\"id\" mat-raised-button (click)=\"update()\"  >Update </button>\n    \n            </div>\n\n        </form>\n    </div>\n</mat-card>");

/***/ }),

/***/ "X/Gd":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/examination/exam-schedule/add-exam-schedule/add-exam-schedule.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"><button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> Examination <span class=\"sub-menu1\"> > Exam Schedule > {{type}} </span>\r\n        <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addExamScheduleform\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Name <span class=\"required\">*</span></label>\r\n                    <input type=\"text\" formControlName=\"name\" maxlength=\"100\" placeholder=\" Name\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">Name is\r\n                        required</span>\r\n                </div>\r\n\r\n                <!-- <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Term </label>\r\n                    <select placeholder=\"\" class=\"form-control\" formControlName=\"termId\">\r\n                        <option disabled selected hidden></option>\r\n                        <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.termId.errors && f.termId.errors.required && isError\">Please\r\n                        Enter termId</span>\r\n                </div> -->\r\n\r\n            </div>\r\n\r\n            \r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n                  <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                  <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\" >description</mat-icon>\r\n                  <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n                  <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\" >Document is required</span>  \r\n              </div>\r\n\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"position\" hidden>Type<span class=\"required\">*</span></label>\r\n                <input id=\"name\" type=\"text\" hidden class=\"form-control\" maxlength=\"100\" formControlName=\"type\"\r\n                    placeholder=\"Name\">\r\n                <!-- <span class=\"validation_msg\"\r\n                     *ngIf=\"f.type.errors && f.type.errors.required && isError\">Please Enter type</span> -->\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\">Status\r\n                        is required</span>\r\n                </div>\r\n            </div>\r\n\r\n\r\n<div class=\"pull-right\">\r\n    <button *ngIf=\"!id\" mat-raised-button (click)=\"submit()\">Add </button>\r\n    <button *ngIf=\"id\" mat-raised-button (click)=\"update()\">Update </button>\r\n\r\n</div>\r\n    \r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "XKw6":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/exam-schedule/add-exam-schedule/add-exam-schedule.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddExamScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExamScheduleModule", function() { return AddExamScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_exam_schedule_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-exam-schedule.component */ "N/KI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_exam_schedule_component__WEBPACK_IMPORTED_MODULE_8__["AddExamScheduleComponent"]
    }
];
var AddExamScheduleModule = /** @class */ (function () {
    function AddExamScheduleModule() {
    }
    AddExamScheduleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_exam_schedule_component__WEBPACK_IMPORTED_MODULE_8__["AddExamScheduleComponent"],
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
    ], AddExamScheduleModule);
    return AddExamScheduleModule;
}());



/***/ }),

/***/ "XpP6":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/exam-schedule/add-exam-schedule/add-exam-schedule.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "bXeZ":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/exam-schedule/add-exam-schedule/add-exam-schedule.module.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: AddExamScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExamScheduleModule", function() { return AddExamScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_exam_schedule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-exam-schedule.component */ "HdDF");
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
        component: _add_exam_schedule_component__WEBPACK_IMPORTED_MODULE_4__["AddExamScheduleComponent"]
    }
];
var AddExamScheduleModule = /** @class */ (function () {
    function AddExamScheduleModule() {
    }
    AddExamScheduleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_exam_schedule_component__WEBPACK_IMPORTED_MODULE_4__["AddExamScheduleComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddExamScheduleModule);
    return AddExamScheduleModule;
}());



/***/ }),

/***/ "oR0r":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-2/exam-schedule/add-exam-schedule/add-exam-schedule.module.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: AddExamScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExamScheduleModule", function() { return AddExamScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_exam_schedule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-exam-schedule.component */ "JMk/");
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
        component: _add_exam_schedule_component__WEBPACK_IMPORTED_MODULE_4__["AddExamScheduleComponent"]
    }
];
var AddExamScheduleModule = /** @class */ (function () {
    function AddExamScheduleModule() {
    }
    AddExamScheduleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_exam_schedule_component__WEBPACK_IMPORTED_MODULE_4__["AddExamScheduleComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddExamScheduleModule);
    return AddExamScheduleModule;
}());



/***/ })

}]);