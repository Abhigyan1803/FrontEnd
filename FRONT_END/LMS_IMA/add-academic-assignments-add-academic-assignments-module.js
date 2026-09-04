(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-academic-assignments-add-academic-assignments-module"],{

/***/ "Vb9N":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-assignments/add-academic-assignments/add-academic-assignments.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: AddAcademicAssignmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAcademicAssignmentsComponent", function() { return AddAcademicAssignmentsComponent; });
/* harmony import */ var _raw_loader_add_academic_assignments_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-academic-assignments.component.html */ "qtvv");
/* harmony import */ var _add_academic_assignments_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-academic-assignments.component.scss */ "ajrD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/academic-dept/academic-dept.service */ "1ABS");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/auth-service/auth.service */ "V7IE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
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












var AddAcademicAssignmentsComponent = /** @class */ (function () {
    function AddAcademicAssignmentsComponent(adminservice, router, Trgservice, cdref, spinner, route, fb, academicservice, authService, dialog, sharedService) {
        var _this = this;
        this.adminservice = adminservice;
        this.router = router;
        this.Trgservice = Trgservice;
        this.cdref = cdref;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.academicservice = academicservice;
        this.authService = authService;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.addassignmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({});
        this.route.params.subscribe(function (params) {
            _this.term = params.term;
            _this.paper = params.paper;
            _this.assignment = params.assignment;
            console.log(_this.term);
            console.log(_this.paper);
            console.log(_this.assignment);
            if (_this.term == "I Term") {
                _this.termId = 1;
            }
            else if (_this.term == "II Term") {
                _this.termId = 2;
            }
            else if (_this.term == "III Term") {
                _this.termId = 3;
            }
            else if (_this.term == "II Tech") {
                _this.termId = 7;
            }
            if (_this.assignment == "Science and Warfare") {
                _this.assTitle = "Science & Warfare";
            }
            else {
                _this.assTitle = _this.assignment;
            }
            _this.addassignmentForm = _this.fb.group({
                assignment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                assignmentType: [_this.assignment],
                paper: [_this.paper],
                status: ['1'],
                termId: [_this.termId],
                // topic:['']
                file: [],
                lastSubmissionDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            });
        });
    }
    AddAcademicAssignmentsComponent.prototype.ngOnInit = function () {
    };
    // upload1(event: any, index: number): void {
    //   this.spinner.show();
    //   let fileName = event.target.files[0].name;
    //   var file = event.target.files[0];
    //   this.Trgservice.FileAboutUs(file).subscribe(
    //     res => {
    //       console.log(res.object.url);
    //       if (res.status == 'OK') {
    //         this.academicservice.openSnackbar(res.message)
    //         this.addassignmentForm.patchValue({
    //           file: res.object.url,
    //         })
    //         this.spinner.hide();
    //       } else {
    //         this.spinner.hide();
    //         this.academicservice.openSnackbar(res.message)
    //       }
    //     },
    //     err => {
    //       this.spinner.hide();
    //       this.academicservice.openSnackbar('Error Occured.')
    //       console.log(JSON.stringify(err));
    //     }
    //   )
    // }
    //add validation on 200mb file
    AddAcademicAssignmentsComponent.prototype.upload1 = function (event, index) {
        var _this = this;
        var file = event.target.files[0];
        if (file.size > 202428800) {
            this.sharedService.openSnackbar('Document Should Be Maximum 200 MB in Size');
        }
        else {
            // console.log('less file');
            this.spinner.show();
            var fileName = event.target.files[0].name;
            // var file = event.target.files[0];
            this.Trgservice.FileAboutUs(file).subscribe(function (res) {
                console.log(res.object.url);
                if (res.status == 'OK') {
                    _this.academicservice.openSnackbar(res.message);
                    _this.addassignmentForm.patchValue({
                        file: res.object.url,
                    });
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.academicservice.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.academicservice.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
        return;
    };
    AddAcademicAssignmentsComponent.prototype.onChange = function (event) {
        this.authService.resetTime();
        // console.log(event.editor.getData());
        console.log(event.editor);
    };
    Object.defineProperty(AddAcademicAssignmentsComponent.prototype, "f", {
        get: function () {
            return this.addassignmentForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddAcademicAssignmentsComponent.prototype.mouseEvent = function (e, t) {
        // console.log(t)
        this.authService.resetTime();
    };
    AddAcademicAssignmentsComponent.prototype.goBack = function () {
        this.router.navigate(['/main/academic-depart/assignments/' + this.term + '/' + this.paper + '/' + this.assignment]);
    };
    AddAcademicAssignmentsComponent.prototype.addAssignment = function () {
        var _this = this;
        if (this.addassignmentForm.invalid) {
            this.isError = true;
            this.adminservice.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            console.log(this.addassignmentForm.value);
            this.academicservice.addAssignment(this.addassignmentForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    // window.location.reload();
                    _this.router.navigate(['/main/academic-depart/assignments/' + _this.term + '/' + _this.paper + '/' + _this.assignment]);
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
    AddAcademicAssignmentsComponent.ctorParameters = function () { return [
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_10__["TrgBattalionService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_3__["AcademicDeptService"] },
        { type: app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] }
    ]; };
    AddAcademicAssignmentsComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddAcademicAssignmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-academic-assignments',
            template: _raw_loader_add_academic_assignments_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_academic_assignments_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_10__["TrgBattalionService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_3__["AcademicDeptService"], app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"]])
    ], AddAcademicAssignmentsComponent);
    return AddAcademicAssignmentsComponent;
}());



/***/ }),

/***/ "ajrD":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-assignments/add-academic-assignments/add-academic-assignments.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "h/5o":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-assignments/add-academic-assignments/add-academic-assignments.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: AddAcademicAssignmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAcademicAssignmentsModule", function() { return AddAcademicAssignmentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_academic_assignments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-academic-assignments.component */ "Vb9N");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _add_academic_assignments_component__WEBPACK_IMPORTED_MODULE_8__["AddAcademicAssignmentsComponent"]
    }
];
var AddAcademicAssignmentsModule = /** @class */ (function () {
    function AddAcademicAssignmentsModule() {
    }
    AddAcademicAssignmentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_academic_assignments_component__WEBPACK_IMPORTED_MODULE_8__["AddAcademicAssignmentsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]
            ]
        })
    ], AddAcademicAssignmentsModule);
    return AddAcademicAssignmentsModule;
}());



/***/ }),

/***/ "qtvv":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/academic-assignments/add-academic-assignments/add-academic-assignments.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button>\r\n        Academic Department <span class=\"sub-menu1\"> > Assignments <span class=\"sub-menu1\"> > {{term}} > {{paper}} > {{assTitle}}</span></span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addassignmentForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Assignment<span class=\"required\">*</span></label>\r\n                    <input id=\"assignment\" type=\"text\" class=\"form-control\" formControlName=\"assignment\" maxlength=\"100\"\r\n                        placeholder=\"Assignment\">\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.assignment.errors && f.assignment.errors.required && isError\">Please Enter\r\n                        Assignment</span>\r\n                </div>\r\n            </div>\r\n        \r\n            <div class=\"form-group\">\r\n                <label for=\"position\">Question<span class=\"required\">*</span></label>\r\n                <ckeditor formControlName=\"question\" (change)=\"onChange($event)\"\r\n                    (mouseover)=\"mouseEvent($event,'mouseover')\" (mouseout)=\"mouseEvent($event,'mouseout')\"\r\n                    (click)=\"mouseEvent($event,'click')\"></ckeditor>\r\n                <span class=\"validation_msg\" *ngIf=\"f.question.errors && f.question.errors.required && isError\">Please\r\n                    Enter Question</span>\r\n\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n            <div class=\"form-group col\">\r\n                <label class=\"form-label\">File Upload</label>\r\n                  <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"upload1($event, i)\" id=\"image\">\r\n                  <span class=\"note\">Max File Size 200 MB. (Only pdf and doc format.)</span>\r\n                  \r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"lastSubmissionDate\">Last Date Of Submission<span class=\"required\">*</span></label>\r\n                <input id=\"lastSubmissionDate\" type=\"date\" class=\"form-control\" formControlName=\"lastSubmissionDate\"  >\r\n                <span class=\"validation_msg\"\r\n                    *ngIf=\"f.lastSubmissionDate.errors && f.lastSubmissionDate.errors.required && isError\">Please Enter\r\n                  Last Date of Submission</span>\r\n            </div>\r\n            </div>\r\n            <button mat-raised-button (click)=\"addAssignment()\">ADD</button>\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ })

}]);