(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drill-drill-module"],{

/***/ "P6AB":
/*!*******************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/drill/drill.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DrillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrillComponent", function() { return DrillComponent; });
/* harmony import */ var _raw_loader_drill_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./drill.component.html */ "gvSq");
/* harmony import */ var _drill_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drill.component.scss */ "xvUI");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
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












var DrillComponent = /** @class */ (function () {
    function DrillComponent(fb, EDossierService, spinner, dialog, route, router, adminservice, sharedservice, cdref, edossierservice, activeRoute) {
        // this.serviceId = localStorage.getItem('e');
        // alert(this.serviceId);
        this.fb = fb;
        this.EDossierService = EDossierService;
        this.spinner = spinner;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        this.adminservice = adminservice;
        this.sharedservice = sharedservice;
        this.cdref = cdref;
        this.edossierservice = edossierservice;
        this.activeRoute = activeRoute;
        this.drillForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        // serviceId;
        this.totalss = 0;
        this.mnc = "add  ";
        this.obtainedmarks = [];
        this.tempArr1 = [];
        this.tempObj1 = [];
        this.totalmarkst = 0;
        this.totalmarks1 = 0;
        this.totalmarkst1 = 0;
        this.totalmarkst2 = 0;
        this.DRILLDATFORM = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.displayedColumns = ['id', 'termSession', 'subjectName', 'totalMarks', 'MarksObtained', 'Remarks'];
        this.Campmarks = [];
        this.Campmark1 = [];
        this.resultType = "Route March";
        this.resultType1 = "Runback";
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
        this.SubResultArr = [];
        this.tempArr = [];
        this.tempCampArr = [];
        this.drillForm = this.fb.group({
            general: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            specialAchivement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            strength: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            weakness: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            id: ['',],
            isDeclared: [false],
            status: [1],
            // termId:[1],
            serviceId: ['D/5016'],
            dRILLSubjectResult: this.fb.array([]),
            dRILLSubjectResult2: this.fb.array([]),
            dRILLSubjectResult3: this.fb.array([]),
        });
        this.DRILLDATFORM = this.fb.group({
            id: [''],
            a: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            b: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            c: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            d: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            e: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: [1],
        });
        this.serviceID = this.route.snapshot.queryParamMap.get('serviceId');
        this.termid = this.route.snapshot.queryParamMap.get('termId');
        // alert(this.serviceID);
        // this.serid = this.id;
        var x = this.id;
        console.log("service ID IN EQTN ", this.serviceID);
        console.log("TERM ID IN EQTN", this.termid);
        this.getDrillMarksByServiceId();
        this.getDrillDatByServiceIdAndStatus();
    }
    Object.defineProperty(DrillComponent.prototype, "getCSubjectRes", {
        get: function () {
            return this.drillForm.get('dRILLSubjectResult');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrillComponent.prototype, "getCSubjectRes1", {
        get: function () {
            return this.drillForm.get('dRILLSubjectResult');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrillComponent.prototype, "getCSubjectRes2", {
        get: function () {
            return this.drillForm.get('dRILLSubjectResult2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrillComponent.prototype, "getCSubjectRes3", {
        get: function () {
            return this.drillForm.get('dRILLSubjectResult3');
        },
        enumerable: false,
        configurable: true
    });
    //GENERIC METHOD
    DrillComponent.prototype.genSubRec = function () {
        return this.fb.group({
            id: [''],
            obtainedMarks: [''],
            c1ObtainedMarks: [''],
            c2ObtainedMarks: [''],
            m1ObtainedMarks: [''],
            m2ObtainedMarks: [''],
            // c1ObtainedMarks:[''],
            serviceId: [''],
            status: ['1'],
            subjectId: [''],
            subjectName: [''],
            termId: [''],
            termSession: [''],
            totalMarks: [''],
            remarks: ['']
        });
    };
    DrillComponent.prototype.ngOnInit = function () {
        document.getElementById("drillcompanyName").value = localStorage.getItem("companyName");
        document.getElementById("drillbattalionName").value = localStorage.getItem("battalionName");
        document.getElementById("drillcadetServiceId").value = localStorage.getItem("e");
        document.getElementById("drillcadetName").value = localStorage.getItem("i");
        document.getElementById("drillcadetRank").value = localStorage.getItem("rank");
        document.getElementById("drillcadettermname").value = localStorage.getItem("termName");
    };
    DrillComponent.prototype.getDrillMarksByServiceId = function () {
        var _this = this;
        this.EDossierService.getDrillEdossiermarksByServiceId(this.serviceID).subscribe(function (res) {
            if (res.message == "Record found successfully") {
                _this.mnc = "update";
                _this.spinner.hide();
                _this.Campmark1 = res.object;
                // this.TERMID = res.object[0].termId;
                // alert(this.TERMID)
                // this.TERMID1 = res.object[1].termId;
                // this.TERMID2 = res.object[2].termId;
                if (_this.termid == 1 || _this.termid == 2 || _this.termid == 3) {
                    _this.TermFetch = res.object[0].termId;
                    _this.updatetotalmarks = res.object[0].totalMarks;
                    _this.totalObtainedm1marks = res.object[0].m1ObtainedMarks;
                    _this.totalObtainedm2marks = res.object[0].m2ObtainedMarks;
                    _this.totalObtainedc1marks = res.object[0].c1ObtainedMarks;
                    _this.totalObtainedc2marks = res.object[0].c2ObtainedMarks;
                    _this.totalmarkst = res.object[0].obtainedMarks;
                    console.log(_this.updatetotalmarks, "updatetotalmarks");
                    console.log(_this.totalmarkst, "totalmarkst");
                    _this.drilleditid = res.object[0].id;
                    var cmrks = res.object[0].dRILLSubjectResult;
                    console.log("view for cmrks", cmrks);
                    cmrks.forEach(function (e) {
                        e.id = e.id;
                        console.log("eeee===>>", e);
                        _this.getCSubjectRes.push(_this.genSubRec());
                    });
                    _this.drillForm.patchValue({
                        dRILLSubjectResult: cmrks,
                    });
                }
                if (_this.termid == 2 || _this.termid == 3) {
                    _this.TermFetch1 = res.object[1].termId;
                    _this.updatetotalmarks1 = res.object[1].totalMarks;
                    _this.totalObtainedm1marks1 = res.object[1].m1ObtainedMarks;
                    _this.totalObtainedm2marks1 = res.object[1].m2ObtainedMarks;
                    _this.totalObtainedc1marks1 = res.object[1].c1ObtainedMarks;
                    _this.totalObtainedc2marks1 = res.object[1].c2ObtainedMarks;
                    _this.totalmarkst1 = res.object[1].obtainedMarks;
                    var cmrks1 = res.object[1].dRILLSubjectResult;
                    cmrks1.forEach(function (e) {
                        e.id = e.id;
                        console.log("eeee===>>", e);
                        _this.getCSubjectRes2.push(_this.genSubRec());
                    });
                    _this.drillForm.patchValue({
                        dRILLSubjectResult2: cmrks1,
                    });
                }
                // this.updatetotalmarks2 = res.object[2].totalMarks;
                // this.totalmarkst2 = res.object[2].obtainedMarks;
                // let cmrks2 = res.object[2].dRILLSubjectResult;
                // cmrks2.forEach(e => {
                //   e.id = e.id;
                //   console.log("eeee===>>", e);
                //   this.getCSubjectRes3.push(this.genSubRec())
                // });
                // this.drillForm.patchValue({
                //   dRILLSubjectResult3: cmrks2,
                // })
                // console.log(this.obtainedmarks, "obtainedmarks")
                // this.dataSource = new MatTableDataSource(res.object.trgEQTNSubResult);
                _this.drillForm.patchValue({
                    remarks: res.object.remarks,
                });
                // alert( res.object.remarks)
                _this.tempArr1 = [];
                _this.cdref.detectChanges();
            }
            else {
                _this.adminservice.openSnackbar(res.message);
                _this.spinner.hide();
            }
        });
    };
    DrillComponent.prototype.ngAfterViewInit = function () {
    };
    DrillComponent.prototype.getTotal = function () {
        return this.Campmarks.map(function (t) { return t.totalMarks; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    DrillComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    DrillComponent.prototype.goBack = function () {
        window.history.back();
    };
    DrillComponent.prototype.onChange = function (value, totalMarks, index) {
        console.log(value, "value");
        console.log(totalMarks, "totalMarks");
        console.log(index, "index");
        if (value > totalMarks || value == NaN || value == '') {
            this.adminservice.openSnackbar("Obtained marks is greater then Total marks");
            this.getCSubjectRes1.controls[index].get('c1ObtainedMarks').setValue('');
            this.getCSubjectRes1.controls[index].get('c2ObtainedMarks').setValue('');
            this.getCSubjectRes1.controls[index].get('m1ObtainedMarks').setValue('');
            this.getCSubjectRes1.controls[index].get('m2ObtainedMarks').setValue('');
            // console.log(value, "index=", +index);
            value = 0;
            // this.totalmarkst = 0
        }
        this.totalmarkst += parseInt(value);
        this.test = value;
    };
    DrillComponent.prototype.onFocusEvent = function (value1) {
        if (value1 == NaN || value1 == '' || value1 == undefined) {
            value1 = 0;
        }
        this.totalmarkst -= parseInt(value1);
        if (this.totalmarkst == NaN) {
            this.totalmarkst = 0;
        }
        console.log(this.totalmarkst);
    };
    DrillComponent.prototype.getMarks = function (i, e) {
        if (this.tempArr[i] == undefined || this.tempArr[i] == '') {
            this.tempArr.push(e);
        }
        else {
            this.tempArr[i] = e;
        }
    };
    DrillComponent.prototype.attemptChange = function (e) {
        this.attemptvalue = e;
    };
    DrillComponent.prototype.getDrillDatByServiceIdAndStatus = function () {
        var _this = this;
        this.STATUS = 1;
        this.edossierservice.getDillDatById(this.serviceID, this.STATUS).subscribe(function (res) {
            if (res.status == "OK") {
                _this.obj = res.object;
                _this.DRILLDATFORM.patchValue({
                    id: _this.obj.id,
                    a: _this.obj.a,
                    b: _this.obj.b,
                    c: _this.obj.c,
                    d: _this.obj.d,
                    e: _this.obj.e,
                    status: _this.obj.status,
                });
                _this.adminservice.openSnackbar(res.message);
                console.log(_this.DRILLDATFORM.value);
                _this.id = _this.obj.id;
                //  alert(this.id)
            }
        });
    };
    DrillComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.DRILLDATFORM.value);
        this.data = this.DRILLDATFORM.value;
        // this.data['termId'] = this.termId;
        this.data['serviceId'] = this.serviceID;
        console.log(this.data);
        if (this.id == undefined || this.id == null || this.id == '') {
            this.edossierservice.addDrillDat(this.data).subscribe(function (res) {
                console.log(res);
                if (res.message == 'OK') {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
                (function (err) {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar("Some Error Occured.");
                });
            });
        }
        else {
            this.data = this.DRILLDATFORM.value;
            this.edossierservice.updateDrillDat(this.data).subscribe(function (res) {
                console.log(res);
                if (res.message == 'OK') {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
                (function (err) {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar("Some Error Occured.");
                });
            });
        }
        window.history.back();
    };
    DrillComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_2__["EDossierService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_10__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] },
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_2__["EDossierService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
    ]; };
    DrillComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true },] }]
    };
    DrillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'ms-drill',
            template: _raw_loader_drill_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_drill_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_2__["EDossierService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_10__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_2__["EDossierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])
    ], DrillComponent);
    return DrillComponent;
}());



/***/ }),

/***/ "gvSq":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/drill/drill.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"mat-heading\">\r\n        <div id=\"top-bar\" class=\"\">\r\n          <h2>\r\n            <button mat-icon-button (click)=\"goBack()\">\r\n              <mat-icon>chevron_left</mat-icon>\r\n          </button>\r\n          <span class=\"sub-menu1\">\r\n            E-Dossier > Overall Assessment > DRILL</span></h2>\r\n      </div>\r\n      </div>\r\n        <div class=\"drill mb-5\">\r\n            \r\n            <div class=\"mat-card mat-focus-indicator\">\r\n              <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"rank\">Ima No.</label>\r\n                            <input placeholder=\"No\" formcontrolname=\"\" disabled id=\"drillcadetServiceId\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                    </div>\t\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"rank\">Term</label>\r\n                          <input placeholder=\"Term\"  type=\"text\" disabled id=\"drillcadettermname\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                      </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"rank\">Rank</label>\r\n                            <input placeholder=\"Rank\" formcontrolname=\"\" disabled id=\"drillcadetRank\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"rank\">Name</label>\r\n                            <input placeholder=\"Name\" formcontrolname=\"\" disabled id=\"drillcadetName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"rank\">Bn</label>\r\n                            <input placeholder=\"Bn\" formcontrolname=\"\" disabled id=\"drillbattalionName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"rank\">Coy</label>\r\n                            <input placeholder=\"Coy\" formcontrolname=\"\" disabled id=\"drillcompanyName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n              </form>\r\n              <mat-card *ngIf=\"Campmark1.length==0\" style=\" margin: auto; width: 100%;text-align: center;padding-top: 80px;\">\r\n                <img src=\"assets/img/empty-no-data.png\" >\r\n              </mat-card>\r\n           \r\n            <form [formGroup]=\"drillForm\">\r\n            \r\n\r\n              <div formArrayName=\"dRILLSubjectResult\" *ngIf=\"this.termid==1 || this.termid == 2 || this.termid == 3\">\r\n              <div class=\"ng-star-inserted\"  *ngIf=\"TermFetch == 1\" >\r\n                    <div class=\"mat-new mb-4\">\r\n                        <h4 class=\"card-heading\">1ST TERM & 2ND TECH (KHALI HATH)</h4>\r\n                    </div>\r\n                </div>\r\n                \r\n                <table   *ngIf=\"TermFetch == 1\" class=\"tg\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"tg-kln5\" colspan=\"8\">TESTS/MKS</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"tg-kln5\">S NO</td>\r\n                    <td class=\"tg-kln5\">SUBJECT</td>\r\n                    <td class=\"tg-kln5\">MAX MKS</td>\r\n                    <td class=\"tg-kln5\">M1</td>\r\n                    <td class=\"tg-kln5\">M2</td>\r\n                    <td class=\"tg-kln5\">C1</td>\r\n                    <td class=\"tg-kln5\">C2</td>\r\n                   \r\n                  \r\n                    <td class=\"tg-kln5\">GRADING</td>\r\n                  </tr>\r\n\r\n                   <tr *ngFor=\"let mr of getCSubjectRes.controls;let i=index\">\r\n                                    <ng-container [formGroupName]=\"i\">\r\n                                        <td> {{i+1}} </td>\r\n                                        <!-- <td> {{mr.value.termSession}}</td> -->\r\n                                          \r\n                                        <td> {{mr.value.subjectName}} </td>  \r\n                                        <td> <b>{{mr.value.totalMarks}}</b> </td>\r\n                                        <td>\r\n                                          <input min=\"0\"  oninput=\"this.value = \r\n                                  !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                              formControlName=\"m1ObtainedMarks\" class=\"form-control\"\r\n                                              (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                              on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                              maxlength=\"2\" (keypress)=\"keyPress($event)\" disabled>\r\n                                        </td>\r\n                                        <td>\r\n                                          <input min=\"0\"  oninput=\"this.value = \r\n                                  !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                              formControlName=\"m2ObtainedMarks\" class=\"form-control\"\r\n                                              (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                              on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                              maxlength=\"2\" (keypress)=\"keyPress($event)\" disabled>\r\n                                        </td>\r\n                                         \r\n                                       <td>\r\n                                          <input min=\"0\"  oninput=\"this.value = \r\n                                  !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                              formControlName=\"c1ObtainedMarks\" class=\"form-control\"\r\n                                              (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                              on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                              maxlength=\"2\" (keypress)=\"keyPress($event)\" disabled>\r\n                                      </td>\r\n                                      <td>\r\n                                        <input min=\"0\" oninput=\"this.value = \r\n                                !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                            formControlName=\"c2ObtainedMarks\" class=\"form-control\"\r\n                                            (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                            on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                            maxlength=\"2\" (keypress)=\"keyPress($event)\" disabled >\r\n                                      </td>\r\n                                    \r\n                                        <!-- <td>{{mr.value.m2ObtainedMarks}}</td> -->\r\n                                      \r\n                                      \r\n\r\n\r\n                                       <td><input class=\"form-control\"\r\n                                        formControlName=\"remarks\"  disabled   ></td>\r\n                                    </ng-container>\r\n                    </tr>\r\n                \r\n                  <tr >\r\n                    <td class=\"tg-baqh\" colspan=\"2\"><b>Total</b></td>\r\n                    <td class=\"tg-baqh\"><b>{{updatetotalmarks}}</b></td>\r\n                    <td class=\"tg-0lax\">{{totalObtainedm1marks}}</td>\r\n                    <td class=\"tg-0lax\">{{totalObtainedm2marks}}</td>\r\n                    <td class=\"tg-0lax\">{{totalObtainedc1marks}}</td>\r\n                    <td class=\"tg-0lax\">{{totalObtainedc2marks}}</td>\r\n                    <td class=\"tg-0lax\">{{remarks}}</td>\r\n                  </tr> \r\n                </tbody>\r\n                </table>\r\n              </div>\r\n              <div formArrayName=\"dRILLSubjectResult2\" *ngIf=\"this.termid == 2 || this.termid == 3\" >\r\n                <div class=\"ng-star-inserted mt-3\"  *ngIf=\"TermFetch == 1 && TermFetch == 2 \" >\r\n                    <div class=\"mat-new mb-4\">\r\n                        <h4 class=\"card-heading\">2ND TERM & 3RD TECH (RIFLE DRILL)</h4>\r\n                    </div>\r\n                </div>\r\n                <table  *ngIf=\"TermFetch == 1 && TermFetch1 == 2 \"  class=\"tg\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"tg-kln5\" colspan=\"8\">TESTS/MKS</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"tg-kln5\">S NO</td>\r\n                    <td class=\"tg-kln5\">SUBJECT</td>\r\n                    <td class=\"tg-kln5\">MAX MKS</td>\r\n                    <td class=\"tg-kln5\">M1</td>\r\n                    <td class=\"tg-kln5\">M2</td>\r\n                    <td class=\"tg-kln5\">C1</td>\r\n                    <td class=\"tg-kln5\">C2</td>\r\n                 \r\n                  \r\n                    <td class=\"tg-kln5\">GRADING</td>\r\n                  </tr>\r\n\r\n                   <tr *ngFor=\"let mr of getCSubjectRes2.controls;let i=index\">\r\n                                    <ng-container [formGroupName]=\"i\">\r\n                                        <td> {{i+1}} </td>\r\n                                        <!-- <td> {{mr.value.termSession}}</td> -->\r\n                                          \r\n                                        <td> {{mr.value.subjectName}} </td>  \r\n                                        <td> <b>{{mr.value.totalMarks}}</b> </td>\r\n                                        <td>\r\n                                          <input min=\"0\" disabled oninput=\"this.value = \r\n                                  !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                              formControlName=\"m1ObtainedMarks\" class=\"form-control\"\r\n                                              (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                              on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                              maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                        </td>\r\n                                        <td>\r\n                                          <input min=\"0\" disabled oninput=\"this.value = \r\n                                  !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                              formControlName=\"m2ObtainedMarks\" class=\"form-control\"\r\n                                              (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                              on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                              maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                        </td>\r\n                                       <td>\r\n                                          <input min=\"0\" disabled oninput=\"this.value = \r\n                                  !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                              formControlName=\"c1ObtainedMarks\" class=\"form-control\"\r\n                                              (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                              on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                              maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                      </td>\r\n                                      <td>\r\n                                        <input min=\"0\" disabled oninput=\"this.value = \r\n                                !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                            formControlName=\"c2ObtainedMarks\" class=\"form-control\"\r\n                                            (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                            on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                            maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                      </td>\r\n                                    \r\n                                       \r\n                                        <!-- <td>{{mr.value.m2ObtainedMarks}}</td> -->\r\n                                      \r\n                                      \r\n\r\n\r\n                                       <td><input class=\"form-control\" disabled\r\n                                        formControlName=\"remarks\"    ></td>\r\n                                    </ng-container>\r\n                    </tr>\r\n                \r\n                  <tr >\r\n                    <td class=\"tg-baqh\" colspan=\"2\"><b>Total</b></td>\r\n                    <td class=\"tg-baqh\"><b>{{updatetotalmarks1}}</b></td>\r\n                    <td class=\"tg-0lax\">{{totalObtainedm1marks1}}</td>\r\n                    <td class=\"tg-0lax\">{{totalObtainedm2marks1}}</td>\r\n                    <td class=\"tg-0lax\">{{totalObtainedc1marks1}}</td>\r\n                    <td class=\"tg-0lax\">{{totalObtainedc2marks1}}</td>                   \r\n                    <td class=\"tg-0lax\">{{remarks}}</td>\r\n                  </tr> \r\n                </tbody>\r\n                </table>\r\n              </div>\r\n                <!-- <div formArrayName=\"dRILLSubjectResult3\" >\r\n                <div class=\"ng-star-inserted mt-3\">\r\n                    <div class=\"mat-new mb-4\">\r\n                        <h4 class=\"card-heading\">3RD TERM (DAT)</h4>\r\n                    </div>\r\n                </div>\r\n                <table class=\"tg\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"tg-kln5\" colspan=\"8\">TESTS/MKS</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"tg-kln5\">S NO</td>\r\n                    <td class=\"tg-kln5\">SUBJECT</td>\r\n                    <td class=\"tg-kln5\">MAX MKS</td>\r\n                    <td class=\"tg-kln5\">C1</td>\r\n                    <td class=\"tg-kln5\">C2</td>\r\n                    <td class=\"tg-kln5\">M1</td>\r\n                    <td class=\"tg-kln5\">M2</td>\r\n                  \r\n                    <td class=\"tg-kln5\">GRADING</td>\r\n                  </tr>\r\n\r\n                   <tr *ngFor=\"let mr of getCSubjectRes3.controls;let i=index\">\r\n                                    <ng-container [formGroupName]=\"i\">\r\n                                        <td> {{i+1}} </td>\r\n\r\n                                          \r\n                                        <td> {{mr.value.subjectName}} </td>  \r\n                                        <td> <b>{{mr.value.totalMarks}}</b> </td>\r\n                                          \r\n                                       <td>\r\n                                          <input min=\"0\" disabled oninput=\"this.value = \r\n                                  !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                              formControlName=\"c1ObtainedMarks\" class=\"form-control\"\r\n                                              (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                              on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                              maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                      </td>\r\n                                      <td>\r\n                                        <input min=\"0\" disabled oninput=\"this.value = \r\n                                !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                            formControlName=\"c2ObtainedMarks\" class=\"form-control\"\r\n                                            (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                            on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                            maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                      </td>\r\n                                      <td>\r\n                                        <input min=\"0\" disabled oninput=\"this.value = \r\n                                !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                            formControlName=\"m1ObtainedMarks\" class=\"form-control\"\r\n                                            (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                            on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                            maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                      </td>\r\n                                      <td>\r\n                                        <input min=\"0\" disabled oninput=\"this.value = \r\n                                !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                            formControlName=\"m2ObtainedMarks\" class=\"form-control\"\r\n                                            (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                            on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                            maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                      </td>\r\n                                       \r\n                                  \r\n\r\n                                       <td><input class=\"form-control\" disabled\r\n                                        formControlName=\"remarks\"    ></td>\r\n                                    </ng-container>\r\n                    </tr>\r\n                \r\n                  <tr >\r\n                    <td class=\"tg-baqh\" colspan=\"2\"><b>Total</b></td>\r\n                    <td class=\"tg-baqh\"><b>{{updatetotalmarks2}}</b></td>\r\n                    <td class=\"tg-0lax\">{{totalObtainedc1marks2}}</td>\r\n                    <td class=\"tg-0lax\">{{totalObtainedc2marks2}}</td>\r\n                    <td class=\"tg-0lax\">{{totalObtainedm1marks2}}</td>\r\n                    <td class=\"tg-0lax\">{{totalObtainedm2marks2}}</td>\r\n                    <td class=\"tg-0lax\">{{remarks}}</td>\r\n                  </tr> \r\n                </tbody>\r\n                </table>\r\n                </div>     -->\r\n\r\n                <div *ngIf=\"this.termid==3\" >    \r\n\r\n\r\n                  <div class=\"ng-star-inserted mt-3\">\r\n                    <div class=\"mat-new mb-4\">\r\n                        <h4 class=\"card-heading\">3RD TERM (DAT)</h4>\r\n                    </div>\r\n                </div>\r\n                <ol class=\"mt-3\">\r\n                  <form [formGroup]=\"DRILLDATFORM\">\r\n                    <li class=\"mb-3\">Achievements to incl appt of Cane Orderly, Nishan Toli, Rashtriya Dhwaj Toli & Winner of Motivation Badge in Drill.</li>\r\n                    <li>To endorse participation in Continuity Drill, Samman Toli, Wreath Laying Gd.\r\n                        <ol class=\"mt-3\" type=\"a\">\r\n                            <li class=\"mb-3 pl-4\"><input type=\"text\" class=\"form-control\" formControlName=\"a\"></li>\r\n                            <li class=\"mb-3 pl-4\"><input type=\"text\" class=\"form-control\" formControlName=\"b\"></li>\r\n                            <li class=\"mb-3 pl-4\"><input type=\"text\" class=\"form-control\" formControlName=\"c\"></li>\r\n                            <li class=\"mb-3 pl-4\"><input type=\"text\" class=\"form-control\" formControlName=\"d\"></li>\r\n                            <li class=\"mb-3 pl-4\"><input type=\"text\" class=\"form-control\" formControlName=\"e\"></li>\r\n                        </ol>\r\n                    </li>\r\n                    <button mat-raised-button class=\"pull-right\" type=\"submit\" (click)=\"onSubmit()\">Submit</button>\r\n                  </form>\r\n                </ol>\r\n                </div>\r\n               \r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "j9xO":
/*!****************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/drill/drill.module.ts ***!
  \****************************************************************************************/
/*! exports provided: DrillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrillModule", function() { return DrillModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _drill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drill.component */ "P6AB");
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
        component: _drill_component__WEBPACK_IMPORTED_MODULE_4__["DrillComponent"]
    },
];
var DrillModule = /** @class */ (function () {
    function DrillModule() {
    }
    DrillModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _drill_component__WEBPACK_IMPORTED_MODULE_4__["DrillComponent"],
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
    ], DrillModule);
    return DrillModule;
}());



/***/ }),

/***/ "xvUI":
/*!*********************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/drill/drill.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.mat-card {\n  margin: 1rem 0 !important;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 0 !important;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-kln5 {\n  background-color: #c6c4c4;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0lax {\n  text-align: left;\n  vertical-align: top;\n}\n\nh2 button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}\n\n.main-content {\n  min-height: 45vw !important;\n}");

/***/ })

}]);