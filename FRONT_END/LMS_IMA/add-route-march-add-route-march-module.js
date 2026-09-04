(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-route-march-add-route-march-module"],{

/***/ "/Nxy":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-battalion/route-march/add-route-march/add-route-march.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"mat-new\">\r\n        <h4 class=\"card-heading\" *ngIf=\"mnc=='add'\"> Add Route March <span class=\"sub-menu1\"> </span>\r\n        </h4>\r\n        <h4 class=\"card-heading\" *ngIf=\"mnc=='update'\">Edit Route March <span class=\"sub-menu1\"> </span>\r\n        </h4>\r\n\r\n    </div>\r\n    <mat-card>\r\n        <form [formGroup]=\"routemarchForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">IMA No. </label>\r\n                    <input type=\"text\" formControlName=\"serviceId\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Name </label>\r\n                    <input type=\"text\" formControlName=\"username\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Term </label>\r\n                    <input type=\"text\" formControlName=\"termId\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Batallion </label>\r\n                    <input type=\"text\" formControlName=\"battalian\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">CoY </label>\r\n                    <input type=\"text\" formControlName=\"company\" disabled maxlength=\"100\" class=\"form-control\">\r\n\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Course </label>\r\n                    <input type=\"text\" formControlName=\"course\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"mnc=='add'\">\r\n                <div class=\"form-group col-md-2\">\r\n                    <label class=\"form-label\">Type </label>\r\n                    <input type=\"text\" formControlName=\"resultType\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                    <label class=\"form-label\">Total Mark </label>\r\n                    <input disabled min=\"0\" oninput=\"this.value = \r\n                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                        formControlName=\"totalMarks\" maxlength=\"2\" class=\"form-control\">\r\n\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                    <label class=\"form-label\">Obtained Marks </label>\r\n                    <input (change)=\"change($event.target.value)\" min=\"0\" oninput=\"this.value = \r\n                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                        formControlName=\"obtainedMarks\" maxlength=\"2\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-2\" >\r\n                    <label for=\"hours\" value=\"km\">KM</label>\r\n                    \r\n                 {{kms}}\r\n                  </div>\r\n          \r\n                  <div class=\"form-group col-md-2\" >\r\n                    <label for=\"hours\">Hours</label>\r\n                    <select type=\"date\" id=\"hours\"  formControlName=\"hours\" class=\"form-control\" (change)=\"hoursChanged($event)\"  >\r\n                      <option value=\"\"  >--</option>\r\n                      <option *ngFor=\"let h of hours\" [value]=\"h\"  >{{h}}</option>\r\n                    </select>\r\n                  </div>\r\n          \r\n                  <div class=\"form-group col-md-2\" >\r\n                    <label for=\"minutes\">Minutes</label>\r\n                    <select id=\"minutes\"  class=\"form-control\" formControlName=\"minutes\" (change)=\"minChanged($event)\" >\r\n                      <option value=\"\"  >--</option>\r\n                      <option *ngFor=\"let m of minutes\" [value]=\"m\" >{{m}} </option>\r\n                    </select>\r\n                  </div>\r\n                <!-- <div class=\"form-group col-md-2\">\r\n                    <label class=\"form-label\">Time </label>\r\n                    <input atp-time-picker value=\"\"  class=\"form-control\"  formControlName=\"time\"/>\r\n                </div> -->\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"mnc=='update'\">\r\n                <div class=\"form-group col-md-2\">\r\n                    <label class=\"form-label\">Type </label>\r\n                    <input type=\"text\" formControlName=\"resultType\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                    <label class=\"form-label\">Total Mark </label>\r\n                    <input disabled min=\"0\" oninput=\"this.value = \r\n                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                        formControlName=\"totalMarks\" maxlength=\"2\" class=\"form-control\">\r\n\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                    <label class=\"form-label\">Obtained Marks </label>\r\n                    <input (change)=\"change($event.target.value)\" min=\"0\" oninput=\"this.value = \r\n                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                        formControlName=\"obtainedMarks\" maxlength=\"2\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-2\" >\r\n                    <label for=\"hours\" value=\"km\">KM</label>\r\n                    <!-- <input \r\n                  \r\n                        formControlName=\"distance\" maxlength=\"2\" class=\"form-control\"> -->\r\n                 {{kms}}\r\n                  </div>\r\n          \r\n                  <div class=\"form-group col-md-2\" >\r\n                    <label for=\"hours\">Hours</label>\r\n                    <select type=\"date\" id=\"hours\"  formControlName=\"hours\" class=\"form-control\" (change)=\"hoursChanged($event)\"  >\r\n                      <option value=\"\"  >--</option>\r\n                      <option *ngFor=\"let h of hours\" [value]=\"h\"  >{{h}}</option>\r\n                    </select>\r\n                  </div>\r\n          \r\n                  <div class=\"form-group col-md-2\" >\r\n                    <label for=\"minutes\">Minutes</label>\r\n                    <select id=\"minutes\"  class=\"form-control\" formControlName=\"minutes\" (change)=\"minChanged($event)\" >\r\n                      <option value=\"\"  >--</option>\r\n                      <option *ngFor=\"let m of minutes\" [value]=\"m\" >{{m}} </option>\r\n                    </select>\r\n                  </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12 remarkdiv\">\r\n                    <label class=\"form-label\">Remarks </label>\r\n                    <textarea matInput placeholder=\"\" formControlName=\"remark\" class=\"form-control textarea-33\"\r\n                        maxlength=\"1500\"></textarea>\r\n                    <div *ngIf=\"mnc=='add'\" class=\"form-group col-md-2 submitbutton\">\r\n                        <button mat-raised-button (click)=\"submit()\">Submit</button>\r\n                    </div>\r\n                    <div *ngIf=\"mnc=='update'\" class=\"form-group col-md-2 submitbutton\">\r\n                        <button mat-raised-button (click)=\"confirm()\">Update</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n\r\n    </mat-card>\r\n</div>");

/***/ }),

/***/ "AkoB":
/*!*************************************************************************************!*\
  !*** ./src/app/main/trg-team/route-march/add-route-march/add-route-march.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AddRouteMarchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRouteMarchModule", function() { return AddRouteMarchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_route_march_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-route-march.component */ "MCXA");
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
        component: _add_route_march_component__WEBPACK_IMPORTED_MODULE_8__["AddRouteMarchComponent"]
    }
];
var AddRouteMarchModule = /** @class */ (function () {
    function AddRouteMarchModule() {
    }
    AddRouteMarchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_route_march_component__WEBPACK_IMPORTED_MODULE_8__["AddRouteMarchComponent"],
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
    ], AddRouteMarchModule);
    return AddRouteMarchModule;
}());



/***/ }),

/***/ "MCXA":
/*!****************************************************************************************!*\
  !*** ./src/app/main/trg-team/route-march/add-route-march/add-route-march.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddRouteMarchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRouteMarchComponent", function() { return AddRouteMarchComponent; });
/* harmony import */ var _raw_loader_add_route_march_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-route-march.component.html */ "gJ60");
/* harmony import */ var _add_route_march_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-route-march.component.scss */ "SjdX");
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









var AddRouteMarchComponent = /** @class */ (function () {
    function AddRouteMarchComponent(dialog, spinner, route, fb, router, adminservice, sharedservice, cdref, activeRoute) {
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
        this.termid = '';
        this.runbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.Routemarchupdate = [];
        this.hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
        this.minutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];
        this.runbackForm = this.fb.group({
            serviceId: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalian: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termSession: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            course: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cadetRank: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remark: ['',],
            termId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            resultType: ['Route March', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,],
            totalMarks: ['15', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,],
            obtainedMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,],
            hours: ['',],
            minutes: ['',],
            date: [''],
            distance: ['']
        });
    }
    AddRouteMarchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        if (this.router.url.includes('id'), ('resultType'), ('termId')) {
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.resultType = this.route.snapshot.queryParamMap.get('resultType');
            this.termId = this.route.snapshot.queryParamMap.get('termId');
        }
        if (this.router.url.includes('add-route-march')) {
            this.spinner.show();
            this.adminservice.getDrillMarks(this.id).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.term = res.object.term;
                    console.log(_this.term, "res.object.termId");
                    var km;
                    if (_this.term == "1") {
                        km = 10;
                    }
                    else if (_this.term == "2") {
                        km = 20;
                    }
                    else if (_this.term == "term-III") {
                        km = 30;
                    }
                    else if (_this.term == "term-IV") {
                        km = 40;
                    }
                    else if (_this.term == "term-V") {
                        km = 50;
                    }
                    else if (_this.term == "term-VI") {
                        km = 60;
                    }
                    else if (_this.term == "term-II-tech") {
                        km = 70;
                    }
                    console.log(_this.term, "term");
                    console.log(km, "km");
                    _this.kms = km;
                    _this.runbackForm.patchValue({
                        serviceId: res.object.serviceId,
                        battalian: res.object.battalian,
                        company: res.object.company,
                        course: res.object.course,
                        username: res.object.name,
                        termId: res.object.term,
                    });
                }
                else {
                    _this.adminservice.openSnackbar(res.message);
                    _this.spinner.hide();
                }
            });
            var getForm = {
                id: this.id,
                resulttyId: this.resultType
            };
            var serviceId = getForm.id;
            var resulttypeId = getForm.resulttyId;
            var temId = this.runbackForm.value.termId;
            console.log(serviceId);
            console.log(resulttypeId);
            this.termId;
            console.log(this.termId);
            var temId = this.termId;
            this.adminservice.getRunback(serviceId, resulttypeId, temId).subscribe(function (res) {
                if (res.message == "OK") {
                    _this.mnc = "update";
                    _this.spinner.hide();
                    _this.Routemarchupdate = res.object;
                    console.log(_this.Routemarchupdate, "this.Routemarchupdate");
                    _this.id = res.object.id;
                    _this.nn = res.object.date;
                    var hhh = _this.nn;
                    var match = hhh.split(':');
                    var hh = match[0];
                    var mm = match[1];
                    _this.kk = hh;
                    _this.kk1 = mm;
                    _this.runbackForm.patchValue({
                        totalMarks: res.object.totalMarks,
                        obtainedMarks: res.object.obtainedMarks,
                        remark: res.object.remark,
                        hours: _this.kk,
                        minutes: _this.kk1,
                    });
                    _this.cdref.detectChanges();
                }
                // else if (res.message == "Record not found") {
                //   this.spinner.hide()
                //   this.adminservice.openSnackbar(res.message)
                //   this.mnc = "update";
                // }
                else {
                    _this.adminservice.openSnackbar(res.message);
                    _this.mnc = "add";
                    _this.spinner.hide();
                }
            });
        }
    };
    AddRouteMarchComponent.prototype.ngAfterViewInit = function () {
    };
    AddRouteMarchComponent.prototype.change = function (e) {
        if (e > 15) {
            this.adminservice.openSnackbar("Obtained Marks is greater then Total Marks");
            this.runbackForm.controls.obtainedMarks.setValue('');
        }
    };
    AddRouteMarchComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddRouteMarchComponent.prototype.hoursChanged = function (e) {
        console.log(e.target.value, "hours");
        this.hour = e.target.value;
    };
    AddRouteMarchComponent.prototype.minChanged = function (e) {
        console.log(e.target.value, "min");
        this.min = e.target.value;
        this.totaltime = this.hour + ':' + this.min;
        console.log(this.totaltime, "totaltime");
    };
    AddRouteMarchComponent.prototype.confirm = function () {
        var _this = this;
        if (this.runbackForm.invalid || this.runbackForm.controls.obtainedMarks.value > 15) {
            this.isError = true;
            this.adminservice.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.runbackForm.value.date = this.totaltime;
            this.runbackForm.value.distance = this.kms;
            this.runbackForm.value == this.runbackResult;
            this.runbackResult = Object.assign({}, this.runbackForm.value, { id: this.id });
            var formdata = this.runbackResult;
            var formdata;
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
            delete formdata.hours;
            delete formdata.minutes;
            console.log(formdata);
            this.adminservice.updateRunback(formdata).subscribe(function (res) {
                if (res.message == "Record updated successfully") {
                    _this.adminservice.openSnackbar("Route March Updated Successfully");
                }
                else {
                    (function (err) {
                        _this.spinner.hide();
                        _this.adminservice.openSnackbar("Some Error Occured.");
                    });
                }
            });
        }
        if (this.router.url.includes('trg-team'))
            this.router.navigate(['/main/trg-team/route-march']);
    };
    AddRouteMarchComponent.ctorParameters = function () { return [
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
    AddRouteMarchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-route-march',
            template: _raw_loader_add_route_march_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_route_march_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddRouteMarchComponent);
    return AddRouteMarchComponent;
}());



/***/ }),

/***/ "SjdX":
/*!******************************************************************************************!*\
  !*** ./src/app/main/trg-team/route-march/add-route-march/add-route-march.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row.ima_clas {\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 12px;\n  background: #eee;\n  margin-top: -12px;\n  padding-top: 10px;\n}\n\n.common_cls button {\n  margin: 0px 10px;\n  padding: 0px 12px;\n  width: 100px;\n}\n\n.common_cls {\n  display: flex;\n}\n\n.next-button {\n  float: right;\n}\n\nspan.not_cls {\n  font-size: 12px;\n  color: #333;\n  font-weight: 600;\n}\n\nspan.col-md-12.not_msg {\n  font-weight: 600;\n  color: #afabab !important;\n  margin-bottom: 9px;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n}\n\n.remarkdiv {\n  flex: 9%;\n  margin-top: 15px;\n}\n\n.submitbutton {\n  margin: 9px;\n  margin-left: -1%;\n}\n\n.tab-newcls table {\n  border: 1px solid #ccc;\n}\n\n.row234.new-cls {\n  border: 1px solid #ccc;\n  padding: 15px 0px;\n  box-shadow: 2px 2px 5px 2px #ccc;\n  background: #fafafa;\n}\n\n.tab-newcls.ng-untouched.ng-pristine.ng-valid.ng-star-inserted {\n  padding: 0 15px;\n}\n\ntable td {\n  padding: 10px 15px !important;\n}");

/***/ }),

/***/ "gJ60":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/route-march/add-route-march/add-route-march.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"mnc=='update'\">\r\n    <div class=\"mat-new\">\r\n        <h4  class=\"card-heading\">Edit Route March <span class=\"sub-menu1\"> </span>\r\n        </h4>\r\n\r\n    </div>\r\n    <mat-card  >\r\n        <form [formGroup]=\"runbackForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">IMA No. </label>\r\n                    <input type=\"text\" formControlName=\"serviceId\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Name </label>\r\n                    <input type=\"text\" formControlName=\"username\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Term </label>\r\n                    <input type=\"text\" formControlName=\"termId\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Batallion </label>\r\n                    <input type=\"text\" formControlName=\"battalian\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">CoY </label>\r\n                    <input type=\"text\" formControlName=\"company\" disabled maxlength=\"100\" class=\"form-control\">\r\n\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label class=\"form-label\">Course </label>\r\n                    <input type=\"text\" formControlName=\"course\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-2\">\r\n                    <label class=\"form-label\">Type </label>\r\n                    <input type=\"text\" formControlName=\"resultType\" disabled maxlength=\"100\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                    <label class=\"form-label\">Total Mark </label>\r\n                    <input disabled min=\"0\" oninput=\"this.value = \r\n                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                        formControlName=\"totalMarks\" maxlength=\"2\" class=\"form-control\">\r\n\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                    <label class=\"form-label\">Obtained Marks </label>\r\n                    <input (change)=\"change($event.target.value)\" min=\"0\" oninput=\"this.value = \r\n                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                        formControlName=\"obtainedMarks\" maxlength=\"2\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group col-md-2\" >\r\n                    <label for=\"hours\" value=\"km\">KM</label>\r\n                    \r\n                 {{kms}}\r\n                  </div>\r\n          \r\n                  <div class=\"form-group col-md-2\" >\r\n                    <label for=\"hours\">Hours</label>\r\n                    <select type=\"date\" id=\"hours\"  formControlName=\"hours\" class=\"form-control\" (change)=\"hoursChanged($event)\"  >\r\n                      <option value=\"\"  >--</option>\r\n                      <option *ngFor=\"let h of hours\" [value]=\"h\"  >{{h}}</option>\r\n                    </select>\r\n                  </div>\r\n          \r\n                  <div class=\"form-group col-md-2\" >\r\n                    <label for=\"minutes\">Minutes</label>\r\n                    <select id=\"minutes\"  class=\"form-control\" formControlName=\"minutes\" (change)=\"minChanged($event)\" >\r\n                      <option value=\"\"  >--</option>\r\n                      <option *ngFor=\"let m of minutes\" [value]=\"m\" >{{m}} </option>\r\n                    </select>\r\n                  </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12 \">\r\n                    <label class=\"form-label\">Remarks </label>\r\n                    <textarea matInput placeholder=\"\" formControlName=\"remark\" class=\"form-control textarea-33\"\r\n                        maxlength=\"1500\"></textarea>\r\n\r\n                    <div class=\"form-group col-md-2 submitbutton\">\r\n                        <button mat-raised-button (click)=\"confirm()\">Update</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n\r\n\r\n    </mat-card>\r\n</div>");

/***/ }),

/***/ "ir5a":
/*!******************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/route-march/add-route-march/add-route-march.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AddRouteMarchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRouteMarchModule", function() { return AddRouteMarchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_route_march_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-route-march.component */ "uPSN");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { AmazingTimePickerModule } from 'amazing-time-picker';
var routes = [
    {
        path: '',
        component: _add_route_march_component__WEBPACK_IMPORTED_MODULE_8__["AddRouteMarchComponent"]
    }
];
var AddRouteMarchModule = /** @class */ (function () {
    function AddRouteMarchModule() {
    }
    AddRouteMarchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_route_march_component__WEBPACK_IMPORTED_MODULE_8__["AddRouteMarchComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            ]
        })
    ], AddRouteMarchModule);
    return AddRouteMarchModule;
}());



/***/ }),

/***/ "m90w":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/route-march/add-route-march/add-route-march.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row.ima_clas {\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 12px;\n  background: #eee;\n  margin-top: -12px;\n  padding-top: 10px;\n}\n\n.common_cls button {\n  margin: 0px 10px;\n  padding: 0px 12px;\n  width: 100px;\n}\n\n.common_cls {\n  display: flex;\n}\n\n.next-button {\n  float: right;\n}\n\nspan.not_cls {\n  font-size: 12px;\n  color: #333;\n  font-weight: 600;\n}\n\nspan.col-md-12.not_msg {\n  font-weight: 600;\n  color: #afabab !important;\n  margin-bottom: 9px;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n}\n\n.remarkdiv {\n  flex: 9%;\n  margin-top: 15px;\n}\n\n.submitbutton {\n  margin: 9px;\n  margin-left: -1%;\n}\n\n.tab-newcls table {\n  border: 1px solid #ccc;\n}\n\n.row234.new-cls {\n  border: 1px solid #ccc;\n  padding: 15px 0px;\n  box-shadow: 2px 2px 5px 2px #ccc;\n  background: #fafafa;\n}\n\n.tab-newcls.ng-untouched.ng-pristine.ng-valid.ng-star-inserted {\n  padding: 0 15px;\n}\n\ntable td {\n  padding: 10px 15px !important;\n}");

/***/ }),

/***/ "uPSN":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/route-march/add-route-march/add-route-march.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddRouteMarchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRouteMarchComponent", function() { return AddRouteMarchComponent; });
/* harmony import */ var _raw_loader_add_route_march_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-route-march.component.html */ "/Nxy");
/* harmony import */ var _add_route_march_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-route-march.component.scss */ "m90w");
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






// import { AmazingTimePickerService } from 'amazing-time-picker';



var AddRouteMarchComponent = /** @class */ (function () {
    function AddRouteMarchComponent(dialog, spinner, route, fb, router, adminservice, sharedservice, cdref, activeRoute) {
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
        this.temId = '';
        this.routemarchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
        this.minutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];
        this.Runbackupdate = [];
        this.Runbackadd = [];
        this.mnc = "add";
        this.routemarchForm = this.fb.group({
            serviceId: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalian: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termSession: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            course: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cadetRank: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remark: ['',],
            termId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            resultType: ['Route March', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,],
            totalMarks: ['15', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,],
            obtainedMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,],
            hours: ['',],
            minutes: ['',],
            date: [''],
            distance: ['']
        });
    }
    AddRouteMarchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        if (this.router.url.includes('id'), ('resultType'), ('termId')) {
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.resultType = this.route.snapshot.queryParamMap.get('resultType');
            this.resultType = this.route.snapshot.queryParamMap.get('resultType');
            this.termId = this.route.snapshot.queryParamMap.get('termId');
            console.log(this.resultType, "resulttype");
        }
        if (this.router.url.includes('add-route-march')) {
            this.spinner.show();
            this.adminservice.getDrillMarks(this.id).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.term = res.object.term;
                    console.log(_this.term, "res.object.termId");
                    var km;
                    if (_this.term == "1") {
                        km = 10;
                    }
                    else if (_this.term == "2") {
                        km = 20;
                    }
                    else if (_this.term == "term-III") {
                        km = 30;
                    }
                    else if (_this.term == "term-IV") {
                        km = 40;
                    }
                    else if (_this.term == "term-V") {
                        km = 50;
                    }
                    else if (_this.term == "term-VI") {
                        km = 60;
                    }
                    else if (_this.term == "term-II-tech") {
                        km = 70;
                    }
                    console.log(_this.term, "term");
                    console.log(km, "km");
                    _this.kms = km;
                    _this.routemarchForm.patchValue({
                        serviceId: res.object.serviceId,
                        battalian: res.object.battalian,
                        company: res.object.company,
                        course: res.object.course,
                        username: res.object.name,
                        termId: res.object.term,
                    });
                }
                else {
                    _this.adminservice.openSnackbar(res.message);
                    _this.spinner.hide();
                }
            });
            var getForm = {
                id: this.id,
                runbackid: this.resultType,
            };
            var serviceId = getForm.id;
            var resulttypeId = getForm.runbackid;
            this.termId;
            console.log(this.termId);
            var temId = this.termId;
            this.adminservice.getRunback(serviceId, resulttypeId, temId).subscribe(function (res) {
                if (res.message == "OK") {
                    _this.mnc = "update";
                    _this.spinner.hide();
                    _this.Runbackupdate = res.object;
                    _this.id = res.object.id;
                    _this.nn = res.object.date;
                    var hhh = _this.nn;
                    var match = hhh.split(':');
                    var hh = match[0];
                    var mm = match[1];
                    _this.kk = hh;
                    _this.kk1 = mm;
                    _this.routemarchForm.patchValue({
                        totalMarks: res.object.totalMarks,
                        obtainedMarks: res.object.obtainedMarks,
                        remark: res.object.remark,
                        hours: _this.kk,
                        minutes: _this.kk1,
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
    AddRouteMarchComponent.prototype.ngAfterViewInit = function () {
    };
    AddRouteMarchComponent.prototype.hoursChanged = function (e) {
        console.log(e.target.value, "hours");
        this.hour = e.target.value;
    };
    AddRouteMarchComponent.prototype.minChanged = function (e) {
        console.log(e.target.value, "min");
        this.min = e.target.value;
        this.totaltime = this.hour + ':' + this.min;
        console.log(this.totaltime, "totaltime");
    };
    // open() {
    //   const amazingTimePicker = this.atp.open();
    //   amazingTimePicker.afterClose().subscribe(time => {
    //     console.log(time,"hhhh");
    //   });
    // }
    AddRouteMarchComponent.prototype.change = function (e) {
        if (e > 15) {
            this.adminservice.openSnackbar("Obtained Marks is greater then Total Marks");
            this.routemarchForm.controls.obtainedMarks.setValue('');
        }
    };
    AddRouteMarchComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddRouteMarchComponent.prototype.confirm = function () {
        var _this = this;
        if (this.routemarchForm.invalid || this.routemarchForm.controls.obtainedMarks.value > 15) {
            this.isError = true;
            this.adminservice.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.routemarchForm.value.date = this.totaltime;
            this.routemarchForm.value.distance = this.kms;
            this.routemarchForm.value == this.runbackResult;
            this.runbackResult = Object.assign({}, this.routemarchForm.value, { id: this.id });
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
            delete formdata.hours;
            delete formdata.minutes;
            console.log(formdata);
            this.adminservice.updateRunback(formdata).subscribe(function (res) {
                if (res.message == "Record updated successfully") {
                    _this.adminservice.openSnackbar("RouteMarch Updated Successfully");
                }
                else {
                    (function (err) {
                        _this.spinner.hide();
                        _this.adminservice.openSnackbar("Some Error Occured.");
                    });
                }
            });
            if (this.router.url.includes('trg-battalion'))
                this.router.navigate(['/main/trg-battalion/route-march']);
        }
    };
    AddRouteMarchComponent.ctorParameters = function () { return [
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
    AddRouteMarchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-route-march',
            template: _raw_loader_add_route_march_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_route_march_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddRouteMarchComponent);
    return AddRouteMarchComponent;
}());



/***/ })

}]);