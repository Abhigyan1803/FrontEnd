(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-final-term-add-final-term-module"],{

/***/ "/DGN":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/Assessment/final-term/add-final-term/add-final-term.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row.ima_clas {\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 12px;\n  background: #eee;\n  margin-top: -12px;\n  padding-top: 10px;\n}\n\n.common_cls button {\n  margin: 0px 10px;\n  padding: 0px 12px;\n  width: 100px;\n}\n\n.common_cls {\n  display: flex;\n}\n\n.next-button {\n  float: right;\n}\n\nspan.not_cls {\n  font-size: 12px;\n  color: #333;\n  font-weight: 600;\n}\n\nspan.col-md-12.not_msg {\n  font-weight: 600;\n  color: #afabab !important;\n  margin-bottom: 9px;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n}\n\n.remarkdiv {\n  flex: 9%;\n  margin-top: 15px;\n}\n\n.submitbutton {\n  margin: 9px;\n  margin-left: -1%;\n}\n\n.tab-newcls table {\n  border: 1px solid #ccc;\n}\n\n.row234.new-cls {\n  border: 1px solid #ccc;\n  padding: 15px 0px;\n  box-shadow: 2px 2px 5px 2px #ccc;\n  background: #fafafa;\n}\n\n.tab-newcls.ng-untouched.ng-pristine.ng-valid.ng-star-inserted {\n  padding: 0 15px;\n}\n\ntable td {\n  padding: 10px 15px !important;\n}");

/***/ }),

/***/ "5Lql":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/Assessment/final-term/add-final-term/add-final-term.module.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: AddFinalTermModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFinalTermModule", function() { return AddFinalTermModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_final_term_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-final-term.component */ "B2mC");
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
        component: _add_final_term_component__WEBPACK_IMPORTED_MODULE_8__["AddFinalTermComponent"]
    }
];
var AddFinalTermModule = /** @class */ (function () {
    function AddFinalTermModule() {
    }
    AddFinalTermModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_final_term_component__WEBPACK_IMPORTED_MODULE_8__["AddFinalTermComponent"],
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
    ], AddFinalTermModule);
    return AddFinalTermModule;
}());



/***/ }),

/***/ "B2mC":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/Assessment/final-term/add-final-term/add-final-term.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: AddFinalTermComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFinalTermComponent", function() { return AddFinalTermComponent; });
/* harmony import */ var _raw_loader_add_final_term_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-final-term.component.html */ "H8Mg");
/* harmony import */ var _add_final_term_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-final-term.component.scss */ "/DGN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
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









var AddFinalTermComponent = /** @class */ (function () {
    function AddFinalTermComponent(dialog, spinner, route, fb, router, adminservice, sharedservice, cdref, activeRoute) {
        var _this = this;
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
        this.resultType = '';
        this.runbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.Runbackupdate = [];
        this.Runbackadd = [];
        this.mnc = "add";
        this.route.params.subscribe(function (params) {
            _this.term = params.term;
            // this.assesmentTermType = params.assesmentTermType;
            // this.subjectType  = params.subjectType;
            console.log(_this.term, "term");
            // console.log(this.assesmentTermType,"termtype")
            // console.log(this.subjectType,"subtype" )
            _this.router.url;
            console.log(_this.router.url, "url");
            _this.assesmentTermType = _this.router.url.split('/')[6];
            _this.subjectType = _this.router.url.split('/')[8];
            console.log(_this.assesmentTermType, "url");
            console.log(_this.subjectType, "url");
        });
        var totalMarks;
        if (this.term == "I-Term") {
            totalMarks = 100;
        }
        else if (this.term == "II-Term") {
            totalMarks = 100;
        }
        else if (this.term == "III-Term") {
            totalMarks = 200;
        }
        else if (this.term == "II-Tech") {
            totalMarks = 100;
        }
        this.totlmark = totalMarks;
        console.log(totalMarks, "total");
        console.log(this.totlmark, "total");
        this.runbackForm = this.fb.group({
            serviceId: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalian: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termSession: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            course: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cadetRank: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1',],
            termId: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            assesmentTermType: ['FINAL-TERM', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            subjectType: ['BMT-1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,],
            totalMarks: [totalMarks, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,],
            obtainedMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,],
        });
    }
    AddFinalTermComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        if (this.router.url.includes('id'), ('resultType')) {
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.resultType = this.route.snapshot.queryParamMap.get('resultType');
            console.log(this.resultType, "resulttype");
        }
        if (this.router.url.includes('add-final')) {
            this.spinner.show();
            this.adminservice.getDrillMarks(this.id).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.runbackForm.patchValue({
                        serviceId: res.object.serviceId,
                        battalian: res.object.battalian,
                        company: res.object.company,
                        course: res.object.course,
                        username: res.object.name,
                        term: res.object.term,
                    });
                }
                else {
                    _this.adminservice.openSnackbar(res.message);
                    _this.spinner.hide();
                }
            });
            var getForm = {
                id: this.id,
                runbackid: this.resultType
            };
            var terms;
            if (this.term == "I-Term") {
                terms = 1;
            }
            else if (this.term == "II-Term") {
                terms = 2;
            }
            else if (this.term == "III-Term") {
                terms = 3;
            }
            else if (this.term == "II-Tech") {
                terms = 7;
            }
            this.termss = terms;
            console.log(this.termss, "termss");
            var serviceId = getForm.id;
            var subjectType = this.assesmentTermType;
            var termId = this.termss;
            var assesmentTermType = "FINAL-TERM";
            var status = 1;
            console.log(serviceId);
            this.adminservice.getBMT1Finalterm(serviceId, subjectType, termId, assesmentTermType, status).subscribe(function (res) {
                if (res.message == "Record found successfully") {
                    _this.mnc = "update";
                    _this.spinner.hide();
                    _this.Runbackupdate = res.object;
                    _this.id = res.object.id;
                    _this.runbackForm.patchValue({
                        // totalMarks: res.object.totalMarks,
                        obtainedMarks: res.object.obtainedMarks,
                        remark: res.object.remark,
                    });
                    _this.cdref.detectChanges();
                }
                else if (res.message == "Record not found") {
                    _this.spinner.hide();
                    _this.mnc = "add";
                    _this.Runbackadd = res.object;
                }
            });
        }
    };
    AddFinalTermComponent.prototype.ngAfterViewInit = function () {
    };
    AddFinalTermComponent.prototype.change = function (e) {
        if (e > this.totlmark) {
            this.adminservice.openSnackbar("Obtained Marks is greater then Total Marks");
            this.runbackForm.controls.obtainedMarks.setValue('');
        }
    };
    AddFinalTermComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddFinalTermComponent.prototype.submit = function () {
        var _this = this;
        // if (this.runbackForm.invalid ||this.runbackForm.controls.obtainedMarks.value > 100) {
        //   this.isError = true;
        //   this.adminservice.openSnackbar("Please Fill All Required Fields")
        // }
        {
            var formdata = this.runbackForm.value;
            delete formdata.battalian;
            delete formdata.cadetRank;
            delete formdata.company;
            delete formdata.course;
            delete formdata.subject;
            delete formdata.termSession;
            delete formdata.subject;
            delete formdata.term;
            delete formdata.username;
            this.adminservice.addBMT1Finalterm(formdata).subscribe(function (res) {
                if (res.message == "Record added succesfully") {
                    _this.adminservice.openSnackbar("Record Added Successfully");
                    // this.spinner.hide()
                }
                (function (err) {
                    // this.spinner.hide()
                    _this.adminservice.openSnackbar("Some Error Occured.");
                });
            });
            if (this.router.url.includes('trg-team'))
                this.router.navigate(['/main/trg-team/gso-2-assessment/' + this.term + '/service-subjects/BMT-1/assesment/final-term']);
        }
    };
    AddFinalTermComponent.prototype.confirm = function () {
        var _this = this;
        // if (this.runbackForm.invalid ||this.runbackForm.controls.obtainedMarks.value > 55) {
        //   this.isError = true;
        //   this.adminservice.openSnackbar("Please Fill All Required Fields")
        // }
        // else
        {
            this.runbackForm.value == this.runbackResult;
            this.runbackResult = Object.assign({}, this.runbackForm.value, { id: this.id });
            var formdata = this.runbackResult;
            delete formdata.battalian;
            delete formdata.cadetRank;
            delete formdata.company;
            delete formdata.course;
            delete formdata.subject;
            delete formdata.termSession;
            delete formdata.subject;
            delete formdata.term;
            delete formdata.username;
            console.log(formdata);
            this.adminservice.updateBMT1Finalterm(formdata).subscribe(function (res) {
                if (res.message == "record updated") {
                    _this.adminservice.openSnackbar("Record Updated Successfully");
                }
                else {
                    (function (err) {
                        _this.spinner.hide();
                        _this.adminservice.openSnackbar("Some Error Occured.");
                    });
                }
            });
            if (this.router.url.includes('trg-team'))
                this.router.navigate(['/main/trg-team/gso-2-assessment/' + this.term + '/service-subjects/BMT-1/assesment/final-term']);
        }
    };
    AddFinalTermComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddFinalTermComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-final-term',
            template: _raw_loader_add_final_term_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_final_term_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddFinalTermComponent);
    return AddFinalTermComponent;
}());



/***/ }),

/***/ "H8Mg":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/Assessment/final-term/add-final-term/add-final-term.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"mat-new\">\r\n\r\n        <h4 class=\"card-heading\" *ngIf=\"mnc=='add'\"> GSO-2(Assessment) > {{term}}>Service Subject>{{assesmentTermType}}\r\n            >Add {{subjectType}} <span class=\"sub-menu1\"> </span>\r\n        </h4>\r\n        <h4 class=\"card-heading\" *ngIf=\"mnc=='update'\">GSO-2(Assessment) > {{term}}>Service Subject>{{assesmentTermType}}\r\n            >Edit {{subjectType}} <span class=\"sub-menu1\"> </span>\r\n        </h4>\r\n\r\n    </div>\r\n    <mat-card>\r\n        <form [formGroup]=\"runbackForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">IMA No. </label>\r\n                    <input type=\"text\" formControlName=\"serviceId\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Name </label>\r\n                    <input type=\"text\" formControlName=\"username\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Term </label>\r\n                    <input type=\"text\" formControlName=\"term\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Batallion </label>\r\n                    <input type=\"text\" formControlName=\"battalian\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">CoY </label>\r\n                    <input type=\"text\" formControlName=\"company\" disabled maxlength=\"100\" class=\"form-control\">\r\n\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Course </label>\r\n                    <input type=\"text\" formControlName=\"course\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"mnc=='add'\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Subject </label>\r\n                    <input type=\"text\" formControlName=\"subjectType\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Total Mark </label>\r\n                    <input disabled min=\"0\" oninput=\"this.value = \r\n                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                        formControlName=\"totalMarks\" maxlength=\"2\" class=\"form-control\">\r\n\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Obtained Marks </label>\r\n                    <input (change)=\"change($event.target.value)\" min=\"0\" oninput=\"this.value = \r\n                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                        formControlName=\"obtainedMarks\" maxlength=\"3\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"mnc=='update'\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Subject </label>\r\n                    <input type=\"text\" formControlName=\"subjectType\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Total Mark </label>\r\n                    <input disabled min=\"0\" oninput=\"this.value = \r\n                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                        formControlName=\"totalMarks\" maxlength=\"2\" class=\"form-control\">\r\n\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Obtained Marks </label>\r\n                    <input (change)=\"change($event.target.value)\" min=\"0\" oninput=\"this.value = \r\n                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                        formControlName=\"obtainedMarks\" maxlength=\"3\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12 remarkdiv\">\r\n                    <!-- <label class=\"form-label\">Remarks </label>\r\n                    <textarea matInput placeholder=\"\" formControlName=\"remark\" class=\"form-control textarea-33\"\r\n                        maxlength=\"1500\"></textarea> -->\r\n                    <div *ngIf=\"mnc=='add'\" class=\"form-group col-md-2 submitbutton\">\r\n                        <button mat-raised-button (click)=\"submit()\">Submit</button>\r\n                    </div>\r\n                    <div *ngIf=\"mnc=='update'\" class=\"form-group col-md-2 submitbutton\">\r\n                        <button mat-raised-button (click)=\"confirm()\">Update</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n\r\n    </mat-card>\r\n</div>");

/***/ })

}]);