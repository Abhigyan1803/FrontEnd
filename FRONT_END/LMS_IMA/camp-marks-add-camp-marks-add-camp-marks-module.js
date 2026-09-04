(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camp-marks-add-camp-marks-add-camp-marks-module"],{

/***/ "GcS5":
/*!***************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/camp-marks/add-camp-marks/add-camp-marks.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AddCampMarksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCampMarksModule", function() { return AddCampMarksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_camp_marks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-camp-marks.component */ "mJye");
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
        component: _add_camp_marks_component__WEBPACK_IMPORTED_MODULE_8__["AddCampMarksComponent"]
    }
];
var AddCampMarksModule = /** @class */ (function () {
    function AddCampMarksModule() {
    }
    AddCampMarksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_camp_marks_component__WEBPACK_IMPORTED_MODULE_8__["AddCampMarksComponent"],
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
    ], AddCampMarksModule);
    return AddCampMarksModule;
}());



/***/ }),

/***/ "Obiz":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-battalion/camp-marks/add-camp-marks/add-camp-marks.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"mat-new\">\r\n        <h4 class=\"card-heading\" *ngIf=\"mnc=='add'\"> Add Camp Marks <span class=\"sub-menu1\"> </span>\r\n        </h4>\r\n        <h4 class=\"card-heading\" *ngIf=\"mnc=='update'\">Edit Camp Marks <span class=\"sub-menu1\"> </span>\r\n        </h4>\r\n\r\n    </div>\r\n    <mat-card>\r\n        <form [formGroup]=\"cammarkForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">IMA No. </label>\r\n                    <input type=\"text\" formControlName=\"serviceId\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">Rank </label>\r\n                    <input type=\"text\" formControlName=\"cadetRank\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">Name </label>\r\n                    <input type=\"text\" formControlName=\"username\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">Term </label>\r\n                    <input type=\"text\" formControlName=\"termId\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">Batallion </label>\r\n                    <input type=\"text\" formControlName=\"battalian\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">CoY </label>\r\n                    <input type=\"text\" formControlName=\"company\" disabled maxlength=\"100\" class=\"form-control\">\r\n\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">Course </label>\r\n                    <input type=\"text\" formControlName=\"course\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">GC Appt </label>\r\n                    <select placeholder=\"\" class=\"form-control\" formControlName=\"gcAppt\">\r\n                        <option disabled selected hidden></option>\r\n                        <option *ngFor=\"let t of gcappt\" [value]=\"t.id\">{{t.gcApptName}} </option>\r\n                    </select>\r\n                    \r\n                </div>\r\n                <div class=\"form-group col-md-3\" >\r\n                    <label class=\"form-label\">Exercise Type </label>\r\n                    <select placeholder=\"\" class=\"form-control\" (change)=\"changenew($event.target.value)\"\r\n                        formControlName=\"exerciseType\">\r\n                        <option disabled selected hidden></option>\r\n                        <option *ngFor=\"let t of exerciseType\" [value]=\"t.id\">{{t.type}} </option>\r\n                    </select>\r\n                </div>\r\n               \r\n            </div>\r\n            <br>\r\n            <div class=\"row234 new-cls\" *ngIf=\"isShown\"  >\r\n                <div >\r\n                <div class=\"example-container\" *ngIf=\"mnc=='add'\">\r\n                    <div  class=\"example-table-container\" class=\"col-md-12\">\r\n                      \r\n                        <div formArrayName=\"campSubjectResult\"  class=\"tab-newcls\">\r\n                            <table *ngIf=\"isShown\" style=\"margin-left: 0px;\r\n                            width: 100%;\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <td>No.</td>\r\n                                        <td>Subject</td>\r\n                                        <td>Total Marks</td>\r\n                                        <td>Obtained Marks</td>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let mr of getCSubjectRes1.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n                                            <td> {{i+1}} </td>\r\n                                            <td> {{mr.value.subjectName}} </td>\r\n                                            <td> {{mr.value.totalMarks}} </td>\r\n                                            <td>\r\n                                                <input  min=\"0\" oninput=\"this.value = \r\n                                                !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\" formControlName=\"obtainedMarks\"  class=\"form-control\"\r\n                                                    (focus)=\"onFocusEvent($event.target.value)\"\r\n                                                    on-focusout=\"onChange($event.target.value,mr.value.totalMarks,i)\" maxlength=\"2\"\r\n                                                    (keypress)=\"keyPress($event)\">\r\n                                            </td>\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                                <tfoot>\r\n                                    <tr>\r\n                                        <td></td>\r\n                                        <td>Total</td>\r\n                                        <td>{{getTotal()}}</td>\r\n                                        <td>{{totalmarkst}}</td>\r\n                                    </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n    \r\n                <div formArrayName=\"campSubjectResult\" *ngIf=\"mnc=='update'\" class=\"tab-newcls\">\r\n                    <table style=\"margin-left: 0px;\r\n                    width: 100%;\">\r\n                        <thead>\r\n                            <tr>\r\n                                <td>No.</td>\r\n                                <td>Subject</td>\r\n                                <td>Total Marks</td>\r\n                                <td>Obtained Marks</td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let mr of getCSubjectRes.controls;let i=index\">\r\n                                <ng-container [formGroupName]=\"i\">\r\n                                    <td> {{i+1}} </td>\r\n                                    <td> {{mr.value.subjectName}} </td>\r\n                                    <td> {{mr.value.totalmarks}} </td>\r\n                                    <td>\r\n                                        <input  min=\"0\" oninput=\"this.value = \r\n                                        !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\" formControlName=\"obtainedMarks\"  class=\"form-control\"\r\n                                            (focus)=\"onFocusEvent($event.target.value)\"\r\n                                            on-focusout=\"onChange($event.target.value,mr.value.totalmarks,i)\" maxlength=\"2\"\r\n                                            (keypress)=\"keyPress($event)\">\r\n                                    </td>\r\n                                </ng-container>\r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                            <tr>\r\n                                <td></td>\r\n                                <td>Total</td>\r\n                                <td>{{updatetotalmarks}}</td>\r\n                                <td>{{totalmarkst}}</td>\r\n                            </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n\r\n                <div  class=\"form-group col-md-12 remarkdiv\"  >\r\n                    <label class=\"form-label\">Remarks </label>\r\n                    <textarea matInput placeholder=\"\" formControlName=\"remarks\" class=\"form-control remarkheight\"\r\n                        maxlength=\"1500\"></textarea>\r\n                        <div >\r\n                  \r\n                </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"mnc=='update'\" class=\"form-group col-md-2\"\r\n            style=\"float: right;margin: 9px 0;padding: 0;\">\r\n            <button mat-raised-button (click)=\"confirm()\" style=\"float: right;\">CONFIRM</button>\r\n        </div>\r\n        <div *ngIf=\"mnc=='add'\"   class=\"form-group col-md-2 submitbutton\" style=\"float: right;margin: 9px 0;padding: 0;\">\r\n            <button *ngIf=\"isShown\"  mat-raised-button (click)=\"submit()\" style=\"float: right;\">Submit</button>\r\n        </div>\r\n        </form>\r\n\r\n\r\n    </mat-card>\r\n</div>");

/***/ }),

/***/ "mJye":
/*!******************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/camp-marks/add-camp-marks/add-camp-marks.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddCampMarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCampMarksComponent", function() { return AddCampMarksComponent; });
/* harmony import */ var _raw_loader_add_camp_marks_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-camp-marks.component.html */ "Obiz");
/* harmony import */ var _add_camp_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-camp-marks.component.scss */ "twlk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
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












var AddCampMarksComponent = /** @class */ (function () {
    function AddCampMarksComponent(dialog, spinner, route, fb, router, adminservice, sharedservice, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.sharedservice = sharedservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.id = '';
        this.totalss = 0;
        this.cammarkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.pageTitle = "Add Camp Marks";
        this.displayedColumns = ['id', 'subjectName', 'totalMarks', 'MarksObtained'];
        this.terms = [];
        this.exerciseType = [];
        this.gcappt = [];
        this.Campmarks = [];
        this.Campmark1 = [];
        this.mnc = "add";
        this.obtainedmarks = [];
        this.tempArr1 = [];
        this.tempObj1 = [];
        this.isShown = false;
        // Change to data add or edit case//
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
        this.totalmarkst = 0;
        this.totalmarks1 = 0;
        this.SubResultArr = [];
        this.tempArr = [];
        this.cammarkForm = this.fb.group({
            serviceId: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalian: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termSession: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            course: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cadetRank: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,],
            gcAppt: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            exerciseType: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            campSubjectResult: this.fb.array([]),
        });
    }
    Object.defineProperty(AddCampMarksComponent.prototype, "getCSubjectRes", {
        get: function () {
            return this.cammarkForm.get('campSubjectResult');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddCampMarksComponent.prototype, "getCSubjectRes1", {
        get: function () {
            return this.cammarkForm.get('campSubjectResult');
        },
        enumerable: false,
        configurable: true
    });
    AddCampMarksComponent.prototype.genSubRec = function () {
        return this.fb.group({
            id: [''],
            campMarksSubId: [''],
            // obtainedMarks: [{value: '', disabled: true }, Validators.required,],
            obtainedMarks: [''],
            serviceId: [this.cammarkForm.value.serviceId],
            status: ['1'],
            subjectId: [''],
            subjectName: [''],
            termId: [this.cammarkForm.value.termId],
            totalmarks: ['']
        });
    };
    AddCampMarksComponent.prototype.genSubRec1 = function () {
        return this.fb.group({
            //id: [''],
            // obtainedMarks: [{value: '', disabled: true }, Validators.required,],
            obtainedMarks: [''],
            serviceId: [this.serId],
            status: ['1'],
            subjectId: [''],
            subjectName: [''],
            termId: [this.cammarkForm.value.termId],
            totalMarks: ['']
        });
    };
    AddCampMarksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllGcappt();
        this.getExercisetype();
        if (this.router.url.includes('id')) {
            this.id = this.route.snapshot.queryParamMap.get('id');
        }
        if (this.router.url.includes('add-campmark')) {
            this.spinner.show();
            this.pageTitle = 'Add Camp Marks';
            this.adminservice.getCampMarks(this.id).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.serId = res.object.serviceId;
                    _this.spinner.hide();
                    _this.cammarkForm.patchValue({
                        serviceId: res.object.serviceId,
                        battalian: res.object.battalian,
                        company: res.object.company,
                        termSession: res.object.termSession,
                        year: res.object.year,
                        course: res.object.course,
                        cadetRank: res.object.cadetRank,
                        username: res.object.name,
                        termId: res.object.term,
                    });
                }
                else {
                    _this.adminservice.openSnackbar(res.message);
                    _this.spinner.hide();
                }
            });
        }
    };
    AddCampMarksComponent.prototype.getExercisetype = function () {
        var _this = this;
        this.spinner.show();
        this.sharedservice.getAllExerciseType().subscribe(function (res) {
            if (res.status == "OK") {
                _this.spinner.hide();
                _this.exerciseType = res.object;
                _this.cdref.detectChanges();
            }
        });
    };
    AddCampMarksComponent.prototype.getAllGcappt = function () {
        var _this = this;
        this.spinner.show();
        this.sharedservice.getAllGcappt().subscribe(function (res) {
            if (res.status == "OK") {
                _this.spinner.hide();
                _this.gcappt = res.object;
                _this.cdref.detectChanges();
            }
        });
    };
    AddCampMarksComponent.prototype.changenew = function (e) {
        var _this = this;
        var frmArray = this.cammarkForm.get('campSubjectResult');
        frmArray.clear();
        this.serviceId = this.cammarkForm.value.serviceId;
        this.termId = this.cammarkForm.value.termId;
        this.spinner.show();
        this.adminservice.getSubjectMarks_List(this.serviceId, this.termId, e).subscribe(function (res) {
            if (res.message == "update") {
                _this.mnc = "update";
                _this.isShown = !_this.isShown;
                _this.spinner.hide();
                _this.Campmark1 = res.object;
                _this.updatetotalmarks = res.object.totalMarks;
                _this.totalmarkst = res.object.totalObtainedMarks;
                _this.obtainedmarks = res.object.CampSubjectResult;
                _this.campsubjid = res.object.campMarksResultId;
                console.log(_this.campsubjid, "campsubjid");
                var cmrks = res.object.CampSubjectResult;
                var campResult = _this.sortArrayOfObjects(cmrks, "campMarksSubId", "ascending");
                cmrks.forEach(function (e) {
                    e.id = e.campMarksSubId;
                    console.log("eeee===>>", e);
                    _this.getCSubjectRes.push(_this.genSubRec());
                });
                _this.cammarkForm.patchValue({
                    campSubjectResult: campResult
                });
                console.log(_this.obtainedmarks, "obtainedmarks");
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res.object.CampSubjectResult);
                _this.cammarkForm.patchValue({
                    remarks: res.object.remarks,
                    gcAppt: res.object.gcAppt,
                });
                _this.tempArr1 = [];
                _this.cdref.detectChanges();
            }
            else if (res.message == "add") {
                _this.spinner.hide();
                _this.totalmarkst = 0;
                _this.cammarkForm.value.campSubjectResult = [];
                _this.mnc = "add";
                _this.isShown = true;
                _this.Campmarks = res.object;
                var cmrks = res.object;
                var campResult = _this.sortArrayOfObjects(cmrks, "campMarksSubId", "ascending");
                cmrks.forEach(function (e) {
                    e.subjectId = e.id;
                    console.log("eeee===>>", e);
                    _this.getCSubjectRes1.push(_this.genSubRec1());
                });
                _this.cammarkForm.patchValue({
                    campSubjectResult: campResult
                });
                _this.cammarkForm.controls['subject'].setValue('');
                _this.cammarkForm.controls['gcAppt'].setValue('');
                _this.cammarkForm.controls['remarks'].setValue('');
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res.object);
                _this.cdref.detectChanges();
            }
        }, function (err) {
            _this.spinner.hide();
            _this.adminservice.openSnackbar("Some Error Occured.");
        });
    };
    AddCampMarksComponent.prototype.ngAfterViewInit = function () {
    };
    AddCampMarksComponent.prototype.getTotal = function () {
        return this.Campmarks.map(function (t) { return t.totalMarks; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    AddCampMarksComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddCampMarksComponent.prototype.viewCamp = function (element) {
        if (this.router.url.includes('main/trg-battalion'))
            this.router.navigate(['/main/admin/trg-battalion/camp-marks/view-camp-marks'], { queryParams: { id: element.id } });
        if (this.router.url.includes('main/trg-battalion'))
            this.router.navigate(['/main/admin/trg-battalion/camp-marks/view-camp-marks'], { queryParams: { id: element.id } });
    };
    AddCampMarksComponent.prototype.onChange = function (value, totalMarks, index) {
        console.log(value, "value");
        console.log(totalMarks, "totalMarks");
        console.log(index, "index");
        if (value > totalMarks || value == NaN || value == '') {
            this.adminservice.openSnackbar("Obtained Marks is greater then TotalMarks");
            // this.cammarkForm[index]['subject'].setValue('');
            this.getCSubjectRes1.controls[index].get('obtainedMarks').setValue('');
            console.log(value, "index=", +index);
            value = 0;
            // this.totalmarkst = 0
        }
        this.totalmarkst += parseInt(value);
        this.test = value;
    };
    AddCampMarksComponent.prototype.onFocusEvent = function (value1) {
        if (value1 == NaN || value1 == '' || value1 == undefined) {
            value1 = 0;
        }
        this.totalmarkst -= parseInt(value1);
        if (this.totalmarkst == NaN) {
            this.totalmarkst = 0;
        }
        console.log(this.totalmarkst);
    };
    AddCampMarksComponent.prototype.getMarks = function (i, e) {
        if (this.tempArr[i] == undefined || this.tempArr[i] == '') {
            this.tempArr.push(e);
        }
        else {
            this.tempArr[i] = e;
        }
    };
    AddCampMarksComponent.prototype.submit = function () {
        var _this = this;
        {
            var indexT = 0;
            // this.Campmarks.forEach(weapon => {
            //   var test = {
            //     subjectId: weapon.id,
            //     serviceId: this.cammarkForm.value.serviceId,
            //     obtainedMarks: this.tempArr[indexT],
            //     termId: 1,
            //     totalMarks: weapon.totalMarks,
            //     status: 1
            //   }
            //   this.cammarkForm.value.campSubjectResult.push(test);
            //   indexT++;
            // })
            this.totalMarks = Object.assign({}, this.cammarkForm.value, { obtainedMarks: this.totalmarkst, totalMarks: this.getTotal(), status: 1, termId: this.cammarkForm.value.termId });
            // console.log(this.totalMarks, "final")
            var formdata = this.totalMarks;
            delete formdata.battalian;
            delete formdata.cadetRank;
            delete formdata.company;
            delete formdata.course;
            delete formdata.subject;
            delete formdata.termSession;
            delete formdata.subject;
            delete formdata.term;
            delete formdata.username;
            for (var i = 0; i < formdata.campSubjectResult.length; i++) {
                delete formdata.campSubjectResult[i].subjectName;
            }
            console.log(formdata, "finalresult");
            this.cammarkForm.value.campSubjectResult = [];
            this.tempArr = [];
            this.adminservice.addCammarks(formdata).subscribe(function (res) {
                if (res.message == 'OK') {
                    _this.adminservice.openSnackbar("Camp Marks Added Successfully");
                }
                (function (err) {
                    _this.adminservice.openSnackbar("Some Error Occured.");
                });
            });
            if (this.router.url.includes('trg-battalion'))
                if (this.router.url.includes('trg-battalion'))
                    this.router.navigate(['/main/trg-battalion/camp-marks']);
            if (this.router.url.includes('admin'))
                this.router.navigate(['/main/admin/trg-battalion/camp-marks']);
        }
    };
    AddCampMarksComponent.prototype.confirm = function () {
        var _this = this;
        var indexT = 0;
        this.cammarkForm.value == this.totalMarks1;
        this.totalMarks1 = Object.assign({}, this.cammarkForm.value, { obtainedMarks: this.totalmarkst, totalMarks: this.updatetotalmarks, status: 1, termId: this.cammarkForm.value.termId, id: this.campsubjid });
        // this.totalMarks1.exerciseType = 2
        var formdata = this.totalMarks1;
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
        this.cammarkForm.value.campSubjectResult = [];
        // console.log(formdata)
        // console.log(this.cammarkForm.value.exerciseType, 'kkkkk')
        // this.cammarkForm.value.gcAppt = 2
        // this.cammarkForm.controls['gcAppt'].setValue('2');
        this.adminservice.updateCammarks(formdata).subscribe(function (res) {
            if (res.message == 'OK') {
                _this.adminservice.openSnackbar("Camp Marks Updated Successfully");
            }
            else {
                (function (err) {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar("Some Error Occured.");
                });
            }
        });
        if (this.router.url.includes('trg-battalion'))
            if (this.router.url.includes('trg-battalion'))
                this.router.navigate(['/main/trg-battalion/camp-marks']);
        if (this.router.url.includes('admin'))
            this.router.navigate(['/main/admin/trg-battalion/camp-marks']);
    };
    AddCampMarksComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    AddCampMarksComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true },] }]
    };
    AddCampMarksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-camp-marks',
            template: _raw_loader_add_camp_marks_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_camp_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], AddCampMarksComponent);
    return AddCampMarksComponent;
}());



/***/ }),

/***/ "twlk":
/*!********************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/camp-marks/add-camp-marks/add-camp-marks.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row.ima_clas {\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 12px;\n  background: #eee;\n  margin-top: -12px;\n  padding-top: 10px;\n}\n\n.common_cls button {\n  margin: 0px 10px;\n  padding: 0px 12px;\n  width: 100px;\n}\n\n.common_cls {\n  display: flex;\n}\n\n.next-button {\n  float: right;\n}\n\nspan.not_cls {\n  font-size: 12px;\n  color: #333;\n  font-weight: 600;\n}\n\nspan.col-md-12.not_msg {\n  font-weight: 600;\n  color: #afabab !important;\n  margin-bottom: 9px;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n}\n\n.remarkdiv {\n  flex: 9%;\n  margin-top: 15px;\n}\n\n.submitbutton {\n  float: right;\n  margin: 9px;\n  margin-right: 1%;\n}\n\n.tab-newcls table {\n  border: 1px solid #ccc;\n}\n\n.row234.new-cls {\n  border: 1px solid #ccc;\n  padding: 15px 0px;\n  box-shadow: 2px 2px 5px 2px #ccc;\n  background: #fafafa;\n}\n\n.tab-newcls.ng-untouched.ng-pristine.ng-valid.ng-star-inserted {\n  padding: 0 15px;\n}\n\ntable td {\n  padding: 10px 15px !important;\n}");

/***/ })

}]);