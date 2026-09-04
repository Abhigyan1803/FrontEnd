(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leadership-development-matrix-add-leadership-development-matrix-add-leadership-development-matrix-module"],{

/***/ "0OPP":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/assessment/leadership-development-matrix/add-leadership-development-matrix/add-leadership-development-matrix.component.ts ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: AddLDMatrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLDMatrixComponent", function() { return AddLDMatrixComponent; });
/* harmony import */ var _raw_loader_add_leadership_development_matrix_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-leadership-development-matrix.component.html */ "cuk1");
/* harmony import */ var _add_leadership_development_matrix_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-leadership-development-matrix.component.scss */ "tsgq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/academic-dept/academic-dept.service */ "1ABS");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
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











var AddLDMatrixComponent = /** @class */ (function () {
    function AddLDMatrixComponent(spinner, route, fb, router, adminservice, academicservice, cdref) {
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.academicservice = academicservice;
        this.cdref = cdref;
        this.id = '';
        this.LDMatrixForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.pageTitle = "Add Leadership Development Matrix";
        this.actionType = 'add';
        this.LDMatrixMarks = [];
        this.obtainedmarks = [];
        this.isShown = false;
        this.sortArrayOfObjects = function (data, keyToSort, direction) {
            if (direction === 'none') {
                return data;
            }
            var compare = function (objectA, objectB) {
                var valueA = objectA[keyToSort];
                var valueB = objectB[keyToSort];
                if (valueA === valueB) {
                    return 0;
                }
                if (valueA > valueB) {
                    return direction === 'ascending' ? 1 : -1;
                }
                else {
                    return direction === 'ascending' ? -1 : 1;
                }
            };
            return data.slice().sort(compare);
        };
        this.mnc = "add";
        this.obtainedTotalMarks = 0;
        this.totalmarks1 = 0;
        this.LDMatrixForm = this.fb.group({
            serviceId: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalian: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termSession: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            course: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cadetRank: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            term: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            leadershipSubjectResult: this.fb.array([]),
        });
    }
    Object.defineProperty(AddLDMatrixComponent.prototype, "fetchLDMatrixSubjectsResult", {
        get: function () {
            return this.LDMatrixForm.get('leadershipSubjectResult');
        },
        enumerable: false,
        configurable: true
    });
    AddLDMatrixComponent.prototype.generateSubjects = function () {
        return this.fb.group({
            subjectId: [''],
            subjectName: [''],
            status: [''],
            totalMarks: [''],
            obtainedMarks: [''],
            serviceId: [this.LDMatrixForm.value.serviceId],
            termId: [this.LDMatrixForm.value.term],
        });
    };
    AddLDMatrixComponent.prototype.generateUpdatedSubjects = function () {
        return this.fb.group({
            id: [''],
            subjectId: [''],
            subjectName: [''],
            status: [''],
            totalMarks: [''],
            obtainedMarks: [''],
            serviceId: [this.LDMatrixForm.value.serviceId],
            termId: [this.LDMatrixForm.value.term],
        });
    };
    AddLDMatrixComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('id')) {
            this.id = this.route.snapshot.queryParamMap.get('id');
        }
        if (this.router.url.includes('add-leadership-development-matrix')) {
            this.spinner.show();
            this.pageTitle = 'Add Leadership Development Matrix';
            this.adminservice.getCampMarks(this.id).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.LDMatrixForm.patchValue({
                        serviceId: res.object.serviceId,
                        battalian: res.object.battalian,
                        company: res.object.company,
                        termSession: res.object.termSession,
                        year: res.object.year,
                        course: res.object.course,
                        cadetRank: res.object.cadetRank,
                        username: res.object.name,
                        term: 3,
                    });
                    _this.getLDMatrixSubjects();
                }
                else {
                    _this.adminservice.openSnackbar(res.message);
                    _this.spinner.hide();
                }
            });
        }
    };
    AddLDMatrixComponent.prototype.getLDMatrixSubjects = function () {
        var _this = this;
        var frmArray = this.LDMatrixForm.get('leadershipSubjectResult');
        frmArray.clear();
        this.serviceId = this.LDMatrixForm.value.serviceId;
        this.termId = this.LDMatrixForm.value.term;
        this.spinner.show();
        this.academicservice.getSubjectLDMatrix_List(this.serviceId, this.termId).subscribe(function (res) {
            if (res.message == "update") {
                _this.isShown = !_this.isShown;
                _this.spinner.hide();
                _this.mnc = "update";
                _this.actionType = res.message;
                _this.LDMatrixMarks = res.object.leadershipSubjectResult;
                _this.obtainedTotalMarks = res.object.obtainedMarks;
                _this.updateTotalMarks = res.object.totalMarks;
                _this.rowID = res.object.id;
                var ldm_mrks = res.object.leadershipSubjectResult;
                var ldm_Result = _this.sortArrayOfObjects(ldm_mrks, "subjectId", "ascending");
                ldm_mrks.forEach(function (e) {
                    e.subjectId = e.id;
                    _this.fetchLDMatrixSubjectsResult.push(_this.generateUpdatedSubjects());
                });
                _this.LDMatrixForm.patchValue({
                    leadershipSubjectResult: ldm_Result,
                    remarks: res.object.remarks
                });
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.object.CampSubjectResult);
                _this.cdref.detectChanges();
            }
            else if (res.message == "add") {
                _this.spinner.hide();
                _this.actionType = res.message;
                _this.mnc = "add";
                _this.obtainedTotalMarks = 0;
                _this.LDMatrixForm.value.leadershipSubjectResult = [];
                _this.isShown = true;
                _this.LDMatrixMarks = res.object;
                var ldm_mrks = res.object;
                var ldmResult = _this.sortArrayOfObjects(ldm_mrks, "id", "ascending");
                ldm_mrks.forEach(function (e) {
                    e.subjectId = e.id;
                    _this.fetchLDMatrixSubjectsResult.push(_this.generateSubjects());
                });
                _this.LDMatrixForm.patchValue({
                    leadershipSubjectResult: ldmResult
                });
                _this.LDMatrixForm.controls['subject'].setValue('');
                _this.LDMatrixForm.controls['remarks'].setValue('');
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.object);
                _this.cdref.detectChanges();
            }
        }, function (err) {
            _this.spinner.hide();
            _this.adminservice.openSnackbar("Some Error Occured.");
        });
    };
    AddLDMatrixComponent.prototype.ngAfterViewInit = function () {
    };
    AddLDMatrixComponent.prototype.getTotal = function () {
        return this.LDMatrixMarks.map(function (t) { return t.totalMarks; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    AddLDMatrixComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddLDMatrixComponent.prototype.viewLDMatrix = function (element) {
        if (this.router.url.includes('main/academic-depart/examination/assessment'))
            this.router.navigate(['/main/admin/academic-depart/examination/assessment/leadership-development-matrix/view-leadership-development-matrix'], { queryParams: { id: element.id } });
    };
    AddLDMatrixComponent.prototype.onChange = function (value, totalMarks, index) {
        if (value > totalMarks || value == NaN || value == '') {
            this.adminservice.openSnackbar("Obtained Marks is greater then TotalMarks");
            this.fetchLDMatrixSubjectsResult.controls[index].get('obtainedMarks').setValue('');
            value = 0;
        }
        this.obtainedTotalMarks += parseInt(value);
    };
    AddLDMatrixComponent.prototype.onFocusEvent = function (val) {
        if (val == NaN || val == '' || val == undefined) {
            val = 0;
        }
        this.obtainedTotalMarks -= parseInt(val);
        if (this.obtainedTotalMarks == NaN) {
            this.obtainedTotalMarks = 0;
        }
    };
    AddLDMatrixComponent.prototype.submit = function () {
        var _this = this;
        this.totalMarks = Object.assign({}, this.LDMatrixForm.value, { obtainedMarks: this.obtainedTotalMarks, totalMarks: this.getTotal(), status: 1, termId: 3 });
        var formdata = this.totalMarks;
        this.academicservice.addLDMatrix(formdata).subscribe(function (res) {
            if (res.message == 'OK') {
                _this.adminservice.openSnackbar("Leadership Development Matrix added successfully");
                delete formdata.battalian;
                delete formdata.cadetRank;
                delete formdata.company;
                delete formdata.course;
                delete formdata.subject;
                delete formdata.termSession;
                delete formdata.subject;
                delete formdata.term;
                delete formdata.username;
                for (var i = 0; i < formdata.leadershipSubjectResult.length; i++) {
                    delete formdata.leadershipSubjectResult[i].subjectName;
                }
                _this.LDMatrixForm.value.leadershipSubjectResult = [];
            }
            (function (err) {
                _this.adminservice.openSnackbar("Some Error Occured.");
            });
        });
        if (this.router.url.includes('academic-depart'))
            this.router.navigate(['/main/academic-depart/examination/Assessment/leadership-development-matrix']);
        if (this.router.url.includes('admin'))
            this.router.navigate(['/main/admin/academic-depart/examination/Assessment/leadership-development-matrix']);
    };
    AddLDMatrixComponent.prototype.confirm = function () {
        var _this = this;
        this.LDMatrixForm.value == this.totalMarks1;
        this.totalMarks1 = Object.assign({}, this.LDMatrixForm.value, { obtainedMarks: this.obtainedTotalMarks, totalMarks: this.updateTotalMarks, status: 1, termId: 3, id: this.rowID });
        var formdata = this.totalMarks1;
        this.academicservice.updateLDMatrix(formdata).subscribe(function (res) {
            if (res.message == 'OK') {
                _this.adminservice.openSnackbar("Leadership Development Matrix Updated Successfully");
                delete formdata.battalian;
                delete formdata.cadetRank;
                delete formdata.company;
                delete formdata.course;
                delete formdata.subject;
                delete formdata.termSession;
                delete formdata.subject;
                delete formdata.term;
                delete formdata.username;
                delete formdata.subject1;
                _this.LDMatrixForm.value.leadershipSubjectResult = [];
            }
            else {
                (function (err) {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar("Some Error Occured.");
                });
            }
        });
        if (this.router.url.includes('academic-depart'))
            this.router.navigate(['/main/academic-depart/examination/Assessment/leadership-development-matrix']);
        // if (this.router.url.includes('admin'))
        //   this.router.navigate(['/main/admin/academic-depart/examination/Assessment/leadership-development-matrix']);
    };
    AddLDMatrixComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_8__["AcademicDeptService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    AddLDMatrixComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
    };
    AddLDMatrixComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-leadership-development-matrix',
            template: _raw_loader_add_leadership_development_matrix_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_leadership_development_matrix_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_8__["AcademicDeptService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], AddLDMatrixComponent);
    return AddLDMatrixComponent;
}());



/***/ }),

/***/ "6mJo":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/assessment/leadership-development-matrix/add-leadership-development-matrix/add-leadership-development-matrix.module.ts ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: AddLDMatrixModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLDMatrixModule", function() { return AddLDMatrixModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_leadership_development_matrix_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-leadership-development-matrix.component */ "0OPP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _add_leadership_development_matrix_component__WEBPACK_IMPORTED_MODULE_8__["AddLDMatrixComponent"]
    }
];
var AddLDMatrixModule = /** @class */ (function () {
    function AddLDMatrixModule() {
    }
    AddLDMatrixModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_leadership_development_matrix_component__WEBPACK_IMPORTED_MODULE_8__["AddLDMatrixComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"]
            ]
        })
    ], AddLDMatrixModule);
    return AddLDMatrixModule;
}());



/***/ }),

/***/ "cuk1":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/examination/assessment/leadership-development-matrix/add-leadership-development-matrix/add-leadership-development-matrix.component.html ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"mat-new\">\r\n        <h4 class=\"card-heading\" *ngIf=\"mnc=='add'\"> Add Leadership Development Matrix <span class=\"sub-menu1\"> </span>\r\n        </h4>\r\n        <h4 class=\"card-heading\" *ngIf=\"mnc=='update'\">Edit Leadership Development Matrix <span class=\"sub-menu1\">\r\n            </span>\r\n        </h4>\r\n\r\n    </div>\r\n    <mat-card>\r\n        <form [formGroup]=\"LDMatrixForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">IMA No. </label>\r\n                    <input type=\"text\" formControlName=\"serviceId\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">Rank </label>\r\n                    <input type=\"text\" formControlName=\"cadetRank\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">Name </label>\r\n                    <input type=\"text\" formControlName=\"username\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">Term </label>\r\n                    <input type=\"text\" formControlName=\"term\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">Batallion </label>\r\n                    <input type=\"text\" formControlName=\"battalian\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">CoY </label>\r\n                    <input type=\"text\" formControlName=\"company\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">Course </label>\r\n                    <input type=\"text\" formControlName=\"course\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row234 new-cls\" *ngIf=\"isShown\">\r\n                <div>\r\n                    <div class=\"example-container\">\r\n                        <div class=\"example-table-container\" class=\"col-md-12\">\r\n                            <div formArrayName=\"leadershipSubjectResult\" class=\"tab-newcls\">\r\n                                <table *ngIf=\"isShown\" style=\"margin-left: 0px;\r\n                            width: 100%;\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <td>S.no</td>\r\n                                            <td>Subject</td>\r\n                                            <td>Total Marks</td>\r\n                                            <td>Obtained Marks</td>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let mr of fetchLDMatrixSubjectsResult.controls; let i=index\">\r\n                                            <ng-container [formGroupName]=\"i\">\r\n                                                <td> {{i+1}}. </td>\r\n                                                <td> {{mr.value.subjectName}} </td>\r\n                                                <td> {{mr.value.totalMarks}} </td>\r\n                                                <td>\r\n                                                    <input min=\"0\"\r\n                                                        oninput=\"this.value = \r\n                                                !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                                        formControlName=\"obtainedMarks\" class=\"form-control\"\r\n                                                        (focus)=\"onFocusEvent($event.target.value)\"\r\n                                                        on-focusout=\"onChange($event.target.value, mr.value.totalMarks, i)\"\r\n                                                        maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                                </td>\r\n                                            </ng-container>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                    <tfoot>\r\n                                        <tr>\r\n                                            <td></td>\r\n                                            <td>Total</td>\r\n                                            <td>{{getTotal()}}</td>\r\n                                            <td>{{obtainedTotalMarks}}</td>\r\n                                        </tr>\r\n                                    </tfoot>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-12 remarkdiv\">\r\n                    <label class=\"form-label\">Remarks </label>\r\n                    <textarea matInput placeholder=\"\" formControlName=\"remarks\" class=\"form-control remarkheight\"\r\n                        maxlength=\"1500\"></textarea>\r\n                    <div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"actionType == 'update'\" class=\"form-group col-md-2\"\r\n                style=\"float: right; margin: 9px 0; padding: 0;\">\r\n                <button mat-raised-button (click)=\"confirm()\" style=\"float: right;\">Confirm</button>\r\n            </div>\r\n            <div *ngIf=\"actionType == 'add'\" class=\"form-group col-md-2 submitbutton\"\r\n                style=\"float: right; margin: 9px 0; padding: 0;\">\r\n                <button *ngIf=\"isShown\" mat-raised-button (click)=\"submit()\" style=\"float: right;\">Submit</button>\r\n            </div>\r\n        </form>\r\n\r\n\r\n    </mat-card>\r\n</div>");

/***/ }),

/***/ "tsgq":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/assessment/leadership-development-matrix/add-leadership-development-matrix/add-leadership-development-matrix.component.scss ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row.ima_clas {\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 12px;\n  background: #eee;\n  margin-top: -12px;\n  padding-top: 10px;\n}\n\n.common_cls button {\n  margin: 0px 10px;\n  padding: 0px 12px;\n  width: 100px;\n}\n\n.common_cls {\n  display: flex;\n}\n\n.next-button {\n  float: right;\n}\n\nspan.not_cls {\n  font-size: 12px;\n  color: #333;\n  font-weight: 600;\n}\n\nspan.col-md-12.not_msg {\n  font-weight: 600;\n  color: #afabab !important;\n  margin-bottom: 9px;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n}\n\n.remarkdiv {\n  flex: 9%;\n  margin-top: 15px;\n}\n\n.submitbutton {\n  float: right;\n  margin: 9px;\n  margin-right: 1%;\n}\n\n.tab-newcls table {\n  border: 1px solid #ccc;\n}\n\n.row234.new-cls {\n  border: 1px solid #ccc;\n  padding: 15px 0px;\n  box-shadow: 2px 2px 5px 2px #ccc;\n  background: #fafafa;\n}\n\n.tab-newcls.ng-untouched.ng-pristine.ng-valid.ng-star-inserted {\n  padding: 0 15px;\n}\n\ntable td {\n  padding: 10px 15px !important;\n  vertical-align: middle !important;\n}");

/***/ })

}]);