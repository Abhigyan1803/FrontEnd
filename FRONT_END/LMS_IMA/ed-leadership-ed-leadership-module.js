(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ed-leadership-ed-leadership-module"],{

/***/ "I7Yf":
/*!***********************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/ed-leadership/ed-leadership.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: EdLeadershipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdLeadershipComponent", function() { return EdLeadershipComponent; });
/* harmony import */ var _raw_loader_ed_leadership_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ed-leadership.component.html */ "Jhm4");
/* harmony import */ var _ed_leadership_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ed-leadership.component.scss */ "jbxW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
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












var EdLeadershipComponent = /** @class */ (function () {
    function EdLeadershipComponent(dialog, spinner, route, fb, router, adminservice, sharedservice, cdref, edossierservice, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.sharedservice = sharedservice;
        this.cdref = cdref;
        this.edossierservice = edossierservice;
        this.activeRoute = activeRoute;
        this.id = '';
        this.termid = '';
        this.totalss = 0;
        this.drillForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.terid = '';
        this.displayedColumns = ['id', 'subjectName', 'totalMarks', 'MarksObtained'];
        this.Campmarks = [];
        this.Campmark1 = [];
        this.resultType = "Route March";
        this.resultType1 = "Runback";
        this.mnc = "add";
        this.obtainedmarks = [];
        this.tempArr1 = [];
        this.tempObj1 = [];
        this.totalmarkst = 0;
        this.totalmarkst1 = 0;
        this.totalmarkst2 = 0;
        this.totalmarks1 = 0;
        this.SubResultArr = [];
        this.tempArr = [];
        this.tempCampArr = [];
        this.serid = document.getElementById("result").value = localStorage.getItem("e");
        this.terid = document.getElementById("result").value = localStorage.getItem("j");
        console.log(this.terid, "juned id");
        this.intTermId = parseInt(this.terid);
        this.drillForm = this.fb.group({
            serviceId: [this.serid, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalian: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termSession: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            course: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cadetRank: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            leadershipSubjectResult: this.fb.array([]),
            leadershipSubjectResult2: this.fb.array([]),
            leadershipSubjectResult3: this.fb.array([]),
        });
    }
    Object.defineProperty(EdLeadershipComponent.prototype, "getCSubjectRes", {
        get: function () {
            return this.drillForm.get('leadershipSubjectResult');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EdLeadershipComponent.prototype, "getCSubjectRes1", {
        get: function () {
            return this.drillForm.get('leadershipSubjectResult');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EdLeadershipComponent.prototype, "getCSubjectRes2", {
        get: function () {
            return this.drillForm.get('leadershipSubjectResult2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EdLeadershipComponent.prototype, "getCSubjectRes3", {
        get: function () {
            return this.drillForm.get('leadershipSubjectResult3');
        },
        enumerable: false,
        configurable: true
    });
    EdLeadershipComponent.prototype.genSubRec = function () {
        return this.fb.group({
            id: [''],
            obtainedMarks: [''],
            serviceId: [''],
            status: ['1'],
            subjectId: [''],
            subjectName: [''],
            termId: [''],
            totalMarks: [''],
        });
    };
    EdLeadershipComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.getElementById("LcompanyName").value = localStorage.getItem("companyName");
        document.getElementById("LbattalionName").value = localStorage.getItem("battalionName");
        document.getElementById("LcadetServiceId").value = localStorage.getItem("e");
        document.getElementById("LcadetName").value = localStorage.getItem("i");
        document.getElementById("LcadetRank").value = localStorage.getItem("rank");
        document.getElementById("Lcadettermname").value = localStorage.getItem("termName");
        this.spinner.show();
        if (this.router.url.includes('id'), ('termid')) {
            this.id = this.route.snapshot.queryParamMap.get('id');
            console.log(this.id, "termid dj");
            this.termid = this.route.snapshot.queryParamMap.get('termid');
            console.log(this.termid, "termid termid");
        }
        if (this.router.url.includes('LeadershipMatrix')) {
            this.spinner.show();
            serviceId = "D/50158";
            var temId = 1;
            // this.adminservice.getRunback(serviceId, this.resultType, temId).subscribe(
            //   res => {
            //     if (res.message == "OK") {
            //       this.spinner.hide();
            //       this.routeTotal = res.object.totalMarks
            //       console.log(this.routeTotal, "routeTotal")
            //     } else {
            //       // this.adminservice.openSnackbar(res.message)
            //       this.spinner.hide();
            //     }
            //   }
            // )
            // this.adminservice.getRunback(serviceId, this.resultType1, temId).subscribe(
            //   res => {
            //     if (res.message == "OK") {
            //       this.spinner.hide();
            //       this.runbackTotal = res.object.totalMarks
            //       this.sum = this.routeTotal + this.runbackTotal
            //       console.log(this.sum, "runbackTotal")
            //     } else {
            //       // this.adminservice.openSnackbar(res.message)
            //       this.spinner.hide();
            //     }
            //   }
            // )
            var getForm = {
                id: this.id,
                termid: this.termid
            };
            var serviceId = this.serid;
            var termId = getForm.termid;
            this.edossierservice.getEDossierLeadershipMatrix(serviceId).subscribe(function (res) {
                if (res.message == "Record found successfully") {
                    _this.mnc = "update";
                    _this.spinner.hide();
                    _this.Campmark1 = res.object;
                    _this.updatetotalmarks = res.object[0].totalMarks;
                    if (res.object[0]) {
                        _this.totalmarkst = res.object[0].obtainedMarks;
                    }
                    if (res.object[1]) {
                        //this.updatetotalmarks1 = res.object[1].totalMarks;
                        _this.totalmarkst1 = res.object[1].obtainedMarks;
                    }
                    // this.updatetotalmarks2 = res.object[2].totalMarks;
                    if (res.object[2]) {
                        _this.totalmarkst2 = res.object[2].obtainedMarks;
                    }
                    // console.log(this.updatetotalmarks, "updatetotalmarks")
                    // console.log(this.totalmarkst, "totalmarkst")
                    // this.obtainedmarks = res.object.leadershipSubjectResult;
                    _this.drilleditid1 = res.object[0].id;
                    //this.drilleditid2 = res.object[1].id;
                    console.log(_this.Campmark1, "<<<<<");
                    if (res.object[0]) {
                        _this.TermFetch = res.object[0].termId;
                        _this.cmrks = res.object[0].leadershipSubjectResult;
                        _this.cmrks.forEach(function (e) {
                            e.id = e.id;
                            console.log("eeee===>>", e);
                            _this.getCSubjectRes.push(_this.genSubRec());
                        });
                    }
                    if (res.object[1]) {
                        _this.cmrks1 = res.object[1].leadershipSubjectResult;
                        _this.TermFetch1 = res.object[1].termId;
                        _this.cmrks1.forEach(function (e) {
                            e.id = e.id;
                            console.log("eeee===>>", e);
                            _this.getCSubjectRes2.push(_this.genSubRec());
                        });
                    }
                    if (res.object[2]) {
                        _this.cmrks2 = res.object[2].leadershipSubjectResult;
                        _this.TermFetch2 = res.object[2].termId;
                        _this.cmrks2.forEach(function (e) {
                            e.id = e.id;
                            console.log("eeee===>>", e);
                            _this.getCSubjectRes3.push(_this.genSubRec());
                        });
                    }
                    // const drillResult = this.sortArrayOfObjects(cmrks, "id", "ascending")
                    // console.log(cmrks, "<<<<<")
                    console.log(_this.cmrks, "<<<<<");
                    _this.drillForm.patchValue({
                        leadershipSubjectResult: _this.cmrks,
                    });
                    _this.drillForm.patchValue({
                        leadershipSubjectResult2: _this.cmrks1,
                    });
                    _this.drillForm.patchValue({
                        leadershipSubjectResult3: _this.cmrks2,
                    });
                    // console.log(this.obtainedmarks, "obtainedmarks")
                    // this.dataSource = new MatTableDataSource(res.object.leadershipSubjectResult);
                    _this.drillForm.patchValue({
                        remarks: res.object.remarks,
                    });
                    _this.tempArr1 = [];
                    _this.cdref.detectChanges();
                }
                else {
                    _this.adminservice.openSnackbar(res.message);
                    _this.spinner.hide();
                }
            });
        }
    };
    // Change to data add or edit case//
    EdLeadershipComponent.prototype.ngAfterViewInit = function () {
    };
    EdLeadershipComponent.prototype.getTotal = function () {
        return this.Campmarks.map(function (t) { return t.totalMarks; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    EdLeadershipComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    EdLeadershipComponent.prototype.viewCamp = function (element) {
        if (this.router.url.includes('main/trg-battalion'))
            this.router.navigate(['/main/admin/trg-battalion/camp-marks/view-camp-marks'], { queryParams: { id: element.id } });
        if (this.router.url.includes('main/trg-battalion'))
            this.router.navigate(['/main/admin/trg-battalion/camp-marks/view-camp-marks'], { queryParams: { id: element.id } });
    };
    EdLeadershipComponent.prototype.onChange = function (value, totalMarks, index) {
        console.log(value, "value");
        console.log(totalMarks, "totalMarks");
        console.log(index, "index");
        if (value > totalMarks || value == NaN || value == '') {
            this.adminservice.openSnackbar("Obtained marks is greater then Total marks");
            this.getCSubjectRes1.controls[index].get('obtainedMarks').setValue('');
            // console.log(value, "index=", +index);
            value = 0;
            // this.totalmarkst = 0
        }
        this.totalmarkst += parseInt(value);
        this.test = value;
    };
    EdLeadershipComponent.prototype.onFocusEvent = function (value1) {
        if (value1 == NaN || value1 == '' || value1 == undefined) {
            value1 = 0;
        }
        this.totalmarkst -= parseInt(value1);
        if (this.totalmarkst == NaN) {
            this.totalmarkst = 0;
        }
        console.log(this.totalmarkst);
    };
    EdLeadershipComponent.prototype.onChange1 = function (value, totalMarks1, index) {
        console.log(value, "value");
        console.log(totalMarks1, "totalMarks1");
        console.log(index, "index");
        if (value > totalMarks1 || value == NaN || value == '') {
            this.adminservice.openSnackbar("Obtained marks is greater then Total marks");
            this.getCSubjectRes2.controls[index].get('obtainedMarks').setValue('');
            value = 0;
        }
        this.totalmarkst1 += parseInt(value);
        this.test = value;
    };
    EdLeadershipComponent.prototype.onFocusEvent1 = function (value1) {
        if (value1 == NaN || value1 == '' || value1 == undefined) {
            value1 = 0;
        }
        this.totalmarkst1 -= parseInt(value1);
        if (this.totalmarkst1 == NaN) {
            this.totalmarkst1 = 0;
        }
        console.log(this.totalmarkst1);
    };
    EdLeadershipComponent.prototype.getMarks = function (i, e) {
        if (this.tempArr[i] == undefined || this.tempArr[i] == '') {
            this.tempArr.push(e);
        }
        else {
            this.tempArr[i] = e;
        }
    };
    EdLeadershipComponent.prototype.attemptChange = function (e) {
        this.attemptvalue = e;
    };
    EdLeadershipComponent.prototype.confirm = function (termid) {
        var _this = this;
        this.spinner.show();
        console.log(this.drilleditid1, "drilleditid");
        var indexT = 0;
        this.drillForm.value == this.totalMarks1;
        var drilleditid;
        if (termid == 1) {
            drilleditid = this.drilleditid1;
        }
        if (termid == 2) {
            drilleditid = this.drilleditid2;
        }
        this.totalMarks1 = Object.assign({}, this.drillForm.value, { obtainedMarks: this.totalmarkst, totalMarks: this.updatetotalmarks, status: 1, termId: this.intTermId, id: drilleditid });
        var formdata = this.totalMarks1;
        if (termid == 1) {
            delete formdata.leadershipSubjectResult2;
            delete formdata.leadershipSubjectResult3;
            formdata.leadershipSubjectResult = formdata.leadershipSubjectResult;
        }
        if (termid == 2) {
            delete formdata.leadershipSubjectResult;
            //delete formdata.leadershipSubjectResult2
            delete formdata.leadershipSubjectResult3;
            formdata.leadershipSubjectResult = formdata.leadershipSubjectResult2;
            delete formdata.leadershipSubjectResult2;
        }
        if (termid == 3) {
            delete formdata.leadershipSubjectResult;
            delete formdata.leadershipSubjectResult2;
            formdata.leadershipSubjectResult = formdata.leadershipSubjectResult3;
            delete formdata.leadershipSubjectResult3;
        }
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
        this.drillForm.value.leadershipSubjectResult = [];
        console.log(formdata, "all");
        this.edossierservice.updateLDMatrix(formdata).subscribe(function (res) {
            if (res.message == 'Record updated successfully') {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Leadership Development Matrix Updated Successfully");
            }
            else {
                (function (err) {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar("Some Error Occured.");
                });
            }
        });
        //   if (this.router.url.includes('adjutant-branch'))
        //       this.router.navigate(['/main/adjutant-branch/general-instruction/drill-competition/drill-marks']);
    };
    EdLeadershipComponent.prototype.goBack = function () {
        window.history.back();
    };
    EdLeadershipComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_9__["EDossierService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    EdLeadershipComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true },] }]
    };
    EdLeadershipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-ed-leadership',
            template: _raw_loader_ed_leadership_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ed_leadership_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_9__["EDossierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], EdLeadershipComponent);
    return EdLeadershipComponent;
}());



/***/ }),

/***/ "Jhm4":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/ed-leadership/ed-leadership.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n       \r\n        <div class=\"mat-heading\">\r\n            <div class=\"box-shadow\">\r\n                <h4 class=\"card-heading\">\r\n                  <button mat-icon-button (click)=\"goBack()\">\r\n                    <mat-icon>chevron_left</mat-icon>\r\n                  </button>\r\n                  <span class=\"sub-menu1\"> E-Dossier > LEADERSHIP MATRIX </span>\r\n                </h4>\r\n              </div>\r\n          </div>\r\n        <div class=\"eqtn mb-5\">\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n                <!-- <div class=\"ng-star-inserted\">\r\n                    <div class=\"mat-new mb-4\">\r\n                        <h4 class=\"card-heading\">LEADERSHIP MATRIX</h4>\r\n                    </div>\r\n                </div> -->\r\n                <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Ima No.</label>\r\n                                <input placeholder=\"No\" formcontrolname=\"\" disabled id=\"LcadetServiceId\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\t\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"rank\">Term</label>\r\n                              <input placeholder=\"Term\"  type=\"text\" disabled id=\"Lcadettermname\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                          </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Rank</label>\r\n                                <input placeholder=\"Rank\" formcontrolname=\"\" disabled id=\"LcadetRank\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Name</label>\r\n                                <input placeholder=\"Name\" formcontrolname=\"\" disabled id=\"LcadetName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Bn</label>\r\n                                <input placeholder=\"Bn\" formcontrolname=\"\" disabled id=\"LbattalionName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Coy</label>\r\n                                <input placeholder=\"Coy\" formcontrolname=\"\" disabled id=\"LcompanyName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                </form>\r\n                <mat-card *ngIf=\"!Campmark1.length\" style=\" margin: auto; width: 100%;text-align: center;padding-top: 80px;\">\r\n                    <img src=\"assets/img/empty-no-data.png\" >\r\n                </mat-card>\r\n                <form [formGroup]=\"drillForm\">\r\n                    <div formArrayName=\"leadershipSubjectResult\" *ngIf=\"mnc=='update'\">\r\n                        <table *ngIf=\"TermFetch == 1\" class=\"tg\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"tg-1pqm\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">S\r\n                                            No </span></th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Subject</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Marks</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\" colspan=\"3\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">MARKS\r\n                                            OBTAINED</span></th>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th class=\"tg-xakg\" colspan=\"4\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">I\r\n                                            TERM</span></th>\r\n                                    \r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let mr of getCSubjectRes.controls;let i=index\">\r\n                                    <ng-container [formGroupName]=\"i\">\r\n                                        <td> {{i+1}} </td>\r\n                                        <td> {{mr.value.subjectName}} </td>\r\n                                        <td> {{mr.value.totalMarks}} </td>\r\n                                        <td colspan=\"4\">\r\n                                            <input min=\"0\" disabled oninput=\"this.value = \r\n                                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                                formControlName=\"obtainedMarks\" class=\"form-control\"\r\n                                                (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                                on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                                maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                        </td>\r\n                                        \r\n                                    </ng-container>\r\n                                </tr>\r\n                                \r\n                                <tr>\r\n                                    <td class=\"tg-amwm\" colspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total</span>\r\n                                    </td>\r\n                                    <td class=\"tg-amwm\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">{{updatetotalmarks}}</span>\r\n                                    </td>\r\n                                    <td class=\"tg-0lax\">{{totalmarkst}}</td>\r\n                                </tr>\r\n                               \r\n                               \r\n                               \r\n                            </tbody>\r\n                        </table>\r\n                        <!-- <br> -->\r\n                    <!-- <button *ngIf=\"terid=='1'\" mat-raised-button (click)=\"confirm(1)\">CONFIRM</button> -->\r\n\r\n                    </div>\r\n                    <!-- <br>\r\n                    <br> -->\r\n                    <div formArrayName=\"leadershipSubjectResult2\" *ngIf=\"mnc=='update'\">\r\n                        <table *ngIf=\"TermFetch == 1 && TermFetch1 == 2 \"  class=\"tg\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"tg-1pqm\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">S\r\n                                            No </span></th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Events</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Marks</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\" colspan=\"3\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">MARKS\r\n                                            OBTAINED</span></th>\r\n                                </tr>\r\n                                <tr>\r\n                                    <!-- <th class=\"tg-xakg\" colspan=\"4\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">I\r\n                                            TERM/</span><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">II\r\n                                            TECH</span></th> -->\r\n                                    <th class=\"tg-xakg\"  colspan=\"4\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">II\r\n                                            TERM</span></th>\r\n                                    <!-- <th class=\"tg-xakg\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">III\r\n                                            TERM</span></th> -->\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let mr of getCSubjectRes2.controls;let i=index\">\r\n                                    <ng-container [formGroupName]=\"i\">\r\n                                        <td> {{i+1}} </td>\r\n                                        <td> {{mr.value.subjectName}} </td>\r\n                                        <td> {{mr.value.totalMarks}} </td>\r\n                                        <td colspan=\"4\">\r\n                                            <input min=\"0\" disabled oninput=\"this.value = \r\n                                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                                formControlName=\"obtainedMarks\" class=\"form-control\"\r\n                                                (focus)=\"onFocusEvent1($event.target.value,mr.controls.totalMarks.value)\"\r\n                                                on-focusout=\"onChange1($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                                maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                        </td>\r\n                                        \r\n                                    </ng-container>\r\n                                </tr>\r\n                                \r\n                                <tr>\r\n                                    <td class=\"tg-amwm\" colspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total</span>\r\n                                    </td>\r\n                                    <td class=\"tg-amwm\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">{{updatetotalmarks}}</span>\r\n                                    </td>\r\n                                    <td class=\"tg-0lax\">{{totalmarkst1}}</td>\r\n                                </tr>\r\n                               \r\n                               \r\n                               \r\n                            </tbody>\r\n                        </table>\r\n                        <!-- <br> -->\r\n                    <!-- <button *ngIf=\"terid=='2'\" mat-raised-button (click)=\"confirm(2)\">CONFIRM</button> -->\r\n\r\n                    </div>\r\n                    <!-- <br>\r\n                    <br> -->\r\n                    <div formArrayName=\"leadershipSubjectResult3\" *ngIf=\"mnc=='update'\">\r\n                        <table *ngIf=\"TermFetch == 1 && TermFetch1 == 2 && TermFetch2 == 3\" class=\"tg\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"tg-1pqm\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">S\r\n                                            No </span></th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Events</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Marks</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\" colspan=\"3\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">MARKS\r\n                                            OBTAINED</span></th>\r\n                                </tr>\r\n                                <tr>\r\n                                    \r\n                                    <th class=\"tg-xakg\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">III\r\n                                            TERM</span></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let mr of getCSubjectRes3.controls;let i=index\">\r\n                                    <ng-container [formGroupName]=\"i\">\r\n                                        <td> {{i+1}} </td>\r\n                                        <td> {{mr.value.subjectName}} </td>\r\n                                        <td> {{mr.value.totalMarks}} </td>\r\n                                        <td colspan=\"4\">\r\n                                            <input min=\"0\" disabled oninput=\"this.value = \r\n                                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                                formControlName=\"obtainedMarks\" class=\"form-control\"\r\n                                                (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                                on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                                maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                        </td>\r\n                                        \r\n                                    </ng-container>\r\n                                </tr>\r\n                                \r\n                                <tr>\r\n                                    <td class=\"tg-amwm\" colspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total</span>\r\n                                    </td>\r\n                                    <td class=\"tg-amwm\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">{{updatetotalmarks1}}</span>\r\n                                    </td>\r\n                                    <td class=\"tg-0lax\">{{totalmarkst2}}</td>\r\n                                </tr>\r\n                              \r\n                                \r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                   \r\n                    <div *ngIf=\"mnc=='update'\" class=\"form-group col-md-2 submitbutton\"\r\n                    >\r\n                    <!-- <br> -->\r\n                    <!-- <button *ngIf=\"terid=='3'\" mat-raised-button  (click)=\"confirm(3)\">CONFIRM</button> -->\r\n                </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "Vq/m":
/*!********************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/ed-leadership/ed-leadership.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: EdLeadershipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdLeadershipModule", function() { return EdLeadershipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ed_leadership_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ed-leadership.component */ "I7Yf");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { MatCardModule, MatIconModule, MatMenuModule, MatTabsModule, MatProgressBarModule,
//      MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatTableModule,
//       MatTooltipModule, MatPaginatorModule, MatDatepickerModule, MatDividerModule, MatChipsModule, MatListModule } from '@angular/material';




var routes = [
    {
        path: '',
        component: _ed_leadership_component__WEBPACK_IMPORTED_MODULE_4__["EdLeadershipComponent"]
    },
];
var EdLeadershipModule = /** @class */ (function () {
    function EdLeadershipModule() {
    }
    EdLeadershipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _ed_leadership_component__WEBPACK_IMPORTED_MODULE_4__["EdLeadershipComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]
            ]
        })
    ], EdLeadershipModule);
    return EdLeadershipModule;
}());



/***/ }),

/***/ "jbxW":
/*!*************************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/ed-leadership/ed-leadership.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.main-content {\n  min-height: 45vw !important;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n}\n\n.tg .tg-xakg {\n  background-color: #c6c4c4;\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-1pqm {\n  background-color: #c6c4c4;\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-amwm {\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n}");

/***/ })

}]);