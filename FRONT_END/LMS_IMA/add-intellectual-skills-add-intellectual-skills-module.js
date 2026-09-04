(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-intellectual-skills-add-intellectual-skills-module"],{

/***/ "45dA":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/examination/assessment/intellectual/intellectual-skills/add-intellectual-skills/add-intellectual-skills.component.html ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div>\r\n    <div class=\"mat-new\">\r\n        <h4 class=\"card-heading\" *ngIf=\"mnc=='add'\"> Add Drill Marks <span class=\"sub-menu1\"> </span>\r\n        </h4>\r\n        <h4 class=\"card-heading\" *ngIf=\"mnc=='update'\">Edit Drill Marks <span class=\"sub-menu1\"> </span>\r\n        </h4>\r\n\r\n    </div>\r\n    <mat-card>\r\n        <form [formGroup]=\"intellectualFinalMarkForm\">\r\n            <div class=\"row1 row234\">\r\n                <div class=\"example-container\" *ngIf=\"mnc=='add'\">\r\n                    <div class=\"example-table-container\" class=\"col-md-12\">\r\n                        <div formArrayName=\"intellectualSkillsSubResult\"  class=\"tab-newcls\">\r\n                            <table  style=\"margin-left: 0px;\r\n                            width: 100%;\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <td>No.</td>\r\n                                        <td>Subject</td>\r\n                                        <td>Total Marks</td>\r\n                                        <td>Obtained Marks</td>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let mr of getCSubjectRes1.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n                                            <td> {{i+1}} </td>\r\n                                            <td> {{mr.value.subjectName}} </td>\r\n                                            <td> {{mr.value.totalMarks}} </td>\r\n                                            <td>\r\n                                                <input  min=\"0\" oninput=\"this.value = \r\n                                                !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\" formControlName=\"obtainedMarks\"  class=\"form-control\"\r\n                                                    (focus)=\"onFocusEvent($event.target.value)\"\r\n                                                    on-focusout=\"onChange($event.target.value,mr.value.totalMarks,i)\" maxlength=\"2\"\r\n                                                    (keypress)=\"keyPress($event)\">\r\n                                            </td>\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                                <tfoot>\r\n                                    <tr>\r\n                                        <td></td>\r\n                                        <td>Total</td>\r\n                                        <td>{{getTotal()}}</td>\r\n                                        <td>{{totalmarkst}}</td>\r\n                                    </tr>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div formArrayName=\"intellectualSkillsSubResult\" *ngIf=\"mnc=='update'\" class=\"col-md-12\">\r\n                    <table style=\"margin-left: 0px;\r\n                    width: 100%;width: 100%;border: 1px solid #ccc;box-shadow: 3px 3px 3px #ccc;\">\r\n                        <thead>\r\n                            <tr>\r\n                                <td>No.</td>\r\n                                <td>Subject</td>\r\n                                <td>Total Marks</td>\r\n                                <td>Obtained Marks</td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let mr of getCSubjectRes.controls;let i=index\">\r\n                                <ng-container [formGroupName]=\"i\">\r\n                                    <td> {{i+1}} </td>\r\n                                    <td> {{mr.value.subjectName}} </td>\r\n                                    <td> {{mr.value.totalMarks}} </td>\r\n\r\n                                    <td>\r\n                                        <input  min=\"0\" oninput=\"this.value = \r\n                                        !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\" formControlName=\"obtainedMarks\"  class=\"form-control\"\r\n                                            (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                            on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\" maxlength=\"2\"\r\n                                            (keypress)=\"keyPress($event)\">\r\n                                    </td>\r\n                                </ng-container>\r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                            <tr>\r\n                                <td></td>\r\n                                <td>Total</td>\r\n                                <td>{{updatetotalmarks}}</td>\r\n                                <td>{{totalmarkst}}</td>\r\n                            </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n                <div class=\"form-group col-md-12 remarkdiv\">\r\n                    <div *ngIf=\"mnc=='add'\" class=\"form-group col-md-2 submitbutton\">\r\n                        <button mat-raised-button (click)=\"submit()\">Submit</button>\r\n                    </div>\r\n                    <div *ngIf=\"mnc=='update'\" class=\"form-group col-md-2 submitbutton\"\r\n                        >\r\n                        <button mat-raised-button (click)=\"confirm()\">CONFIRM</button>\r\n                    </div>\r\n                </div>\r\n            \r\n\r\n        </form>\r\n\r\n\r\n    </mat-card>\r\n</div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <!-- <div id=\"top-bar\" class=\"row\">\r\n            <h2>INTELLECTUAL SKILLS > {{term}} > </h2>\r\n        </div> -->\r\n        <div class=\"eqtn mb-5\">\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n                <div class=\"ng-star-inserted\">\r\n                    <div class=\"mat-new mb-4\">\r\n                        <h4 class=\"card-heading\">INTELLECTUAL SKILLS > {{term}} > Final-Term</h4>\r\n                    </div>\r\n                </div>\r\n                <form [formGroup]=\"intellectualFinalMarkForm\">\r\n                    <div formArrayName=\"intellectualSkillsSubResult\" *ngIf=\"mnc=='add'\">\r\n                        <table class=\"tg\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"tg-1pqm\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">S\r\n                                            No </span></th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Subject</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Marks</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\" colspan=\"3\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">MARKS\r\n                                            OBTAINED</span></th>\r\n                                </tr>\r\n                             \r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let mr of getCSubjectRes1.controls;let i=index\">\r\n                                    <ng-container [formGroupName]=\"i\">\r\n                                        <td> {{i+1}} </td>\r\n                                        <td> {{mr.value.subjectName}} </td>\r\n                                        <td> {{mr.value.finalTotalMarks}} </td>\r\n                                        <td colspan=\"4\">\r\n                                            <input min=\"0\" oninput=\"this.value = \r\n                                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                                formControlName=\"finalObtainedMarks\" class=\"form-control\"\r\n                                                (focus)=\"onFocusEvent($event.target.value,mr.controls.finalTotalMarks.value)\"\r\n                                                on-focusout=\"onChange($event.target.value,mr.controls.finalTotalMarks.value,i)\"\r\n                                                maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                        </td>\r\n                                        \r\n                                    </ng-container>\r\n                                </tr>\r\n                                \r\n                                <tr>\r\n                                    <td class=\"tg-amwm\" colspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total</span>\r\n                                    </td>\r\n                                    <td class=\"tg-amwm\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">{{getTotal()}}</span>\r\n                                    </td>\r\n                                    <td class=\"tg-0lax\">{{totalmarkst}}</td>\r\n                                </tr>\r\n                               \r\n                               \r\n                               \r\n                            </tbody>\r\n                        </table>\r\n                        <br>\r\n\r\n                    </div>\r\n                    <br>\r\n                    <br>\r\n                    <div formArrayName=\"intellectualSkillsSubResult\" *ngIf=\"mnc=='update'\">\r\n                        <table class=\"tg\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"tg-1pqm\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">S\r\n                                            No </span></th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Events</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Marks</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\" colspan=\"3\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">MARKS\r\n                                            OBTAINED</span></th>\r\n                                </tr>\r\n                              \r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let mr of getCSubjectRes.controls;let i=index\">\r\n                                    <ng-container [formGroupName]=\"i\">\r\n                                        <td> {{i+1}} </td>\r\n                                        <td> {{mr.value.subjectName}} </td>\r\n                                        <td> {{mr.value.finalTotalMarks}} </td>\r\n                                        \r\n                                        <td colspan=\"4\">\r\n                                            <input min=\"0\" oninput=\"this.value = \r\n                                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                                formControlName=\"finalObtainedMarks\" class=\"form-control\"\r\n                                                (focus)=\"onFocusEvent($event.target.value,mr.controls.finalTotalMarks.value)\"\r\n                                                on-focusout=\"onChange($event.target.value,mr.controls.finalTotalMarks.value,i)\"\r\n                                                maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                        </td>\r\n                                    </ng-container>\r\n                                </tr>\r\n                                \r\n                                <tr>\r\n                                    <td class=\"tg-amwm\" colspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total</span>\r\n                                    </td>\r\n                                    <td class=\"tg-amwm\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">{{updatetotalmarks}}</span>\r\n                                    </td>\r\n                                    <td class=\"tg-0lax\">{{totalmarkst}}</td>\r\n                                </tr>\r\n                               \r\n                               \r\n                               \r\n                            </tbody>\r\n                        </table>\r\n                        <br>\r\n\r\n                    </div>\r\n                    \r\n                        <div *ngIf=\"mnc=='add'\" class=\"form-group col-md-2\">\r\n                            <button mat-raised-button (click)=\"submit()\">Submit</button>\r\n                        </div>\r\n                        <div *ngIf=\"mnc=='update'\" class=\"form-group col-md-2 submitbutton\"\r\n                            >\r\n                            <button mat-raised-button (click)=\"confirm()\">CONFIRM</button>\r\n                        </div>\r\n                \r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "Dbx/":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/assessment/intellectual/intellectual-skills/add-intellectual-skills/add-intellectual-skills.module.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: AddIntellectualSkillsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIntellectualSkillsModule", function() { return AddIntellectualSkillsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_intellectual_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-intellectual-skills.component */ "XnKB");
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
        component: _add_intellectual_skills_component__WEBPACK_IMPORTED_MODULE_8__["AddIntellectualSkillsComponent"]
    }
];
var AddIntellectualSkillsModule = /** @class */ (function () {
    function AddIntellectualSkillsModule() {
    }
    AddIntellectualSkillsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_intellectual_skills_component__WEBPACK_IMPORTED_MODULE_8__["AddIntellectualSkillsComponent"],
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
    ], AddIntellectualSkillsModule);
    return AddIntellectualSkillsModule;
}());



/***/ }),

/***/ "XnKB":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/assessment/intellectual/intellectual-skills/add-intellectual-skills/add-intellectual-skills.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: AddIntellectualSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIntellectualSkillsComponent", function() { return AddIntellectualSkillsComponent; });
/* harmony import */ var _raw_loader_add_intellectual_skills_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-intellectual-skills.component.html */ "45dA");
/* harmony import */ var _add_intellectual_skills_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-intellectual-skills.component.scss */ "kxHs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/academic-dept/academic-dept.service */ "1ABS");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AddIntellectualSkillsComponent = /** @class */ (function () {
    function AddIntellectualSkillsComponent(dialog, spinner, route, fb, router, adminservice, sharedservice, academicservice, cdref, edossierservice, activeRoute) {
        var _this = this;
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.sharedservice = sharedservice;
        this.academicservice = academicservice;
        this.cdref = cdref;
        this.edossierservice = edossierservice;
        this.activeRoute = activeRoute;
        this.serviceid = '';
        this.termid = '';
        this.totalss = 0;
        this.intellectualFinalMarkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({});
        this.displayedColumns = ['id', 'subjectName', 'totalMarks', 'MarksObtained'];
        this.Campmarks = [];
        this.Campmark1 = [];
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
        this.finalObtainedMarks = [];
        this.tempArr1 = [];
        this.tempObj1 = [];
        this.totalmarkst = 0;
        this.totalmarks1 = 0;
        this.SubResultArr = [];
        this.tempArr = [];
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.term = params.term;
            _this.type = params.type;
            console.log(_this.type, "juend");
        });
        this.intellectualFinalMarkForm = this.fb.group({
            serviceId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            battalian: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            company: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            termSession: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            course: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            cadetRank: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            username: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            intellectualSkillsSubResult: this.fb.array([]),
        });
    }
    Object.defineProperty(AddIntellectualSkillsComponent.prototype, "getCSubjectRes", {
        get: function () {
            return this.intellectualFinalMarkForm.get('intellectualSkillsSubResult');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddIntellectualSkillsComponent.prototype, "getCSubjectRes1", {
        get: function () {
            return this.intellectualFinalMarkForm.get('intellectualSkillsSubResult');
        },
        enumerable: false,
        configurable: true
    });
    AddIntellectualSkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        if (this.router.url.includes('id'), ('termid')) {
            this.serviceid = this.route.snapshot.queryParamMap.get('id');
            this.termid = this.route.snapshot.queryParamMap.get('termid');
            console.log(this.serviceid, "iddddd");
        }
        if (this.router.url.includes('Final-Term/add-intellectual')) {
            this.spinner.show();
            var getForm = {
                id: this.serviceid,
                termid: this.termid
            };
            var serviceId = this.serviceid;
            var termId = this.termid;
            this.academicservice.getIntellectualskills(serviceId, termId).subscribe(function (res) {
                if (res.message == "update") {
                    _this.mnc = "update";
                    _this.spinner.hide();
                    _this.Campmark1 = res.object;
                    _this.updatetotalmarks = res.object.finalTotalMarks;
                    _this.totalmarkst = res.object.finalObtainedMarks;
                    _this.drilleditid = res.object.id;
                    console.log(_this.Campmark1, "<<<<<");
                    var cmrks = res.object.intellectualSkillsSubResult;
                    console.log(cmrks, "cmrks");
                    cmrks.forEach(function (e) {
                        e.id = e.id;
                        console.log("eeee===>>", e);
                        _this.getCSubjectRes.push(_this.genSubRec());
                    });
                    _this.intellectualFinalMarkForm.patchValue({
                        intellectualSkillsSubResult: cmrks,
                    });
                    _this.intellectualFinalMarkForm.patchValue({
                        remarks: res.object.remarks,
                    });
                    _this.tempArr1 = [];
                    _this.cdref.detectChanges();
                }
                else if (res.message == "add") {
                    _this.spinner.hide();
                    _this.totalmarkst = 0;
                    _this.mnc = "add";
                    _this.Campmarks = res.object;
                    _this.intellectualFinalMarkForm.value.intellectualSkillsSubResult = [];
                    _this.mnc = "add";
                    _this.Campmarks = res.object;
                    var cmrks = res.object;
                    console.log("drill===>>", cmrks);
                    var drillResult = _this.sortArrayOfObjects(cmrks, "id", "ascending");
                    cmrks.forEach(function (e) {
                        e.subjectId = e.id;
                        console.log("eeee===>>", e);
                        _this.getCSubjectRes1.push(_this.genSubRec1());
                    });
                    _this.intellectualFinalMarkForm.patchValue({
                        intellectualSkillsSubResult: drillResult
                    });
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.object);
                    _this.cdref.detectChanges();
                }
                else {
                    _this.adminservice.openSnackbar(res.message);
                    _this.spinner.hide();
                }
            });
        }
    };
    AddIntellectualSkillsComponent.prototype.genSubRec = function () {
        return this.fb.group({
            id: [''],
            finalObtainedMarks: [''],
            serviceId: [''],
            status: ['1'],
            subjectId: [''],
            subjectName: [this.serviceid],
            termId: [this.termid],
            finalTotalMarks: [''],
        });
    };
    AddIntellectualSkillsComponent.prototype.genSubRec1 = function () {
        return this.fb.group({
            finalObtainedMarks: [''],
            serviceId: [this.serviceid],
            status: ['1'],
            subjectId: [''],
            subjectName: [''],
            termId: [this.termid],
            finalTotalMarks: [''],
        });
    };
    AddIntellectualSkillsComponent.prototype.ngAfterViewInit = function () {
    };
    AddIntellectualSkillsComponent.prototype.getTotal = function () {
        return this.Campmarks.map(function (t) { return t.finalTotalMarks; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    AddIntellectualSkillsComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddIntellectualSkillsComponent.prototype.viewCamp = function (element) {
        if (this.router.url.includes('main/trg-battalion'))
            this.router.navigate(['/main/admin/trg-battalion/camp-marks/view-camp-marks'], { queryParams: { id: element.id } });
        if (this.router.url.includes('main/trg-battalion'))
            this.router.navigate(['/main/admin/trg-battalion/camp-marks/view-camp-marks'], { queryParams: { id: element.id } });
    };
    AddIntellectualSkillsComponent.prototype.onChange = function (value, finalTotalMarks, index) {
        console.log(value, "value");
        console.log(finalTotalMarks, "totalMarks");
        console.log(index, "index");
        if (value > finalTotalMarks || value == NaN || value == '') {
            this.adminservice.openSnackbar("Obtained marks is greater then Total marks");
            this.getCSubjectRes1.controls[index].get('finalObtainedMarks').setValue('');
            value = 0;
        }
        this.totalmarkst += parseInt(value);
        this.test = value;
    };
    AddIntellectualSkillsComponent.prototype.onFocusEvent = function (value1) {
        if (value1 == NaN || value1 == '' || value1 == undefined) {
            value1 = 0;
        }
        this.totalmarkst -= parseInt(value1);
        if (this.totalmarkst == NaN) {
            this.totalmarkst = 0;
        }
        console.log(this.totalmarkst);
    };
    AddIntellectualSkillsComponent.prototype.getMarks = function (i, e) {
        if (this.tempArr[i] == undefined || this.tempArr[i] == '') {
            this.tempArr.push(e);
        }
        else {
            this.tempArr[i] = e;
        }
    };
    AddIntellectualSkillsComponent.prototype.attemptChange = function (e) {
        this.attemptvalue = e;
    };
    AddIntellectualSkillsComponent.prototype.submit = function () {
        var _this = this;
        this.intellectualFinalMarkForm.value.serviceId = this.serviceid;
        var indexT = 0;
        this.totalMarks = Object.assign({}, this.intellectualFinalMarkForm.value, { finalObtainedMarks: this.totalmarkst, finalTotalMarks: this.getTotal(), status: 1, termId: this.termid });
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
        delete formdata.subject1;
        delete formdata.grading;
        delete formdata.attempt;
        this.intellectualFinalMarkForm.value.intellectualSkillsSubResult = [];
        this.tempArr = [];
        for (var i = 0; i < formdata.intellectualSkillsSubResult.length; i++) {
            delete formdata.intellectualSkillsSubResult[i].subjectName;
        }
        console.log(formdata, "finalresult");
        this.academicservice.addIntellectualSkills(formdata).subscribe(function (res) {
            if (res.message == 'OK') {
                _this.adminservice.openSnackbar("Intellectual Marks Added Successfully");
                // this.spinner.hide()
            }
            (function (err) {
                // this.spinner.hide()
                _this.adminservice.openSnackbar("Some Error Occured.");
            });
        });
        if (this.router.url.includes('academic-depart'))
            // this.router.navigate(['/main/academic-depart/examination/Assessment/' + this.term + '/intellectual/Final-Term/add-intellectual']);
            this.router.navigate(['/main/academic-depart/examination/Assessment/II-Term/intellectual/Final-Term']);
    };
    AddIntellectualSkillsComponent.prototype.confirm = function () {
        var _this = this;
        var indexT = 0;
        this.intellectualFinalMarkForm.value.serviceId = this.serviceid;
        this.intellectualFinalMarkForm.value == this.totalMarks1;
        this.totalMarks1 = Object.assign({}, this.intellectualFinalMarkForm.value, { finalObtainedMarks: this.totalmarkst, finalTotalMarks: this.updatetotalmarks, status: 1, termId: this.termid, id: this.drilleditid });
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
        delete formdata.grading;
        delete formdata.attempt;
        this.intellectualFinalMarkForm.value.intellectualSkillsSubResult = [];
        console.log(formdata);
        this.academicservice.updateIntellectual(formdata).subscribe(function (res) {
            if (res.message == 'OK') {
                _this.adminservice.openSnackbar("Intellectual Marks Updated Successfully");
            }
            else {
                (function (err) {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar("Some Error Occured.");
                });
            }
        });
        if (this.router.url.includes('academic-depart'))
            // this.router.navigate(['/main/academic-depart/examination/Assessment/' + this.term + '/intellectual/Final-Term/add-intellectual']);
            this.router.navigate(['/main/academic-depart/examination/Assessment/II-Term/intellectual/Final-Term']);
    };
    AddIntellectualSkillsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_13__["SharedService"] },
        { type: app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_6__["AcademicDeptService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_12__["EDossierService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
    ]; };
    AddIntellectualSkillsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true },] }]
    };
    AddIntellectualSkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-intellectual-skills',
            template: _raw_loader_add_intellectual_skills_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_intellectual_skills_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_13__["SharedService"], app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_6__["AcademicDeptService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_12__["EDossierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], AddIntellectualSkillsComponent);
    return AddIntellectualSkillsComponent;
}());



/***/ }),

/***/ "kxHs":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/assessment/intellectual/intellectual-skills/add-intellectual-skills/add-intellectual-skills.component.scss ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div#top-bar {\n  background: #4c5041;\n  padding: 5px 15px;\n  color: #fff;\n}\n\ndiv#top-bar h2 {\n  font-size: 19px;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n}\n\n.tg .tg-xakg {\n  background-color: #c6c4c4;\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-1pqm {\n  background-color: #c6c4c4;\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-amwm {\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n}");

/***/ })

}]);