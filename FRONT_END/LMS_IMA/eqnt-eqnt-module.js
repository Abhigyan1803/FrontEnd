(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eqnt-eqnt-module"],{

/***/ "1Ks/":
/*!*******************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/eqnt/eqnt.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.main-content {\n  min-height: 45vw !important;\n}\n\nh2 button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px !important;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px !important;\n  word-break: normal;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-xakg {\n  background-color: #c6c4c4;\n  font-weight: bold;\n  text-align: left;\n  vertical-align: middle;\n}\n\n.tg .tg-akbm {\n  font-weight: bold;\n  text-align: center;\n  text-decoration: underline;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: left;\n  vertical-align: middle;\n}\n\n.tg .tg-l2oz {\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-amwm {\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n}");

/***/ }),

/***/ "B9n3":
/*!**************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/eqnt/eqnt.module.ts ***!
  \**************************************************************************************/
/*! exports provided: EqntModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqntModule", function() { return EqntModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _eqnt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eqnt.component */ "TCei");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
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
        component: _eqnt_component__WEBPACK_IMPORTED_MODULE_4__["EqntComponent"]
    },
];
var EqntModule = /** @class */ (function () {
    function EqntModule() {
    }
    EqntModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _eqnt_component__WEBPACK_IMPORTED_MODULE_4__["EqntComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"]
            ]
        })
    ], EqntModule);
    return EqntModule;
}());



/***/ }),

/***/ "TCei":
/*!*****************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/eqnt/eqnt.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EqntComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqntComponent", function() { return EqntComponent; });
/* harmony import */ var _raw_loader_eqnt_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./eqnt.component.html */ "tDCl");
/* harmony import */ var _eqnt_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eqnt.component.scss */ "1Ks/");
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












var EqntComponent = /** @class */ (function () {
    function EqntComponent(dialog, spinner, route, fb, router, adminservice, sharedservice, cdref, edossierservice, activeRoute, EDossierService) {
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
        this.EDossierService = EDossierService;
        this.id = '';
        this.eqtnForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.totalss = 0;
        this.mnc = "";
        this.obtainedmarks = [];
        this.tempArr1 = [];
        this.tempObj1 = [];
        this.totalmarkst = 0;
        this.totalmarks1 = 0;
        this.totalmarkst1 = 0;
        this.totalmarkst2 = 0;
        this.displayedColumns = ['id', 'subjectName', 'totalMarks', 'MarksObtained'];
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
        this.eqtnForm = this.fb.group({
            serviceId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalian: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termSession: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            course: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cadetRank: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            trgEQTNSubResult: this.fb.array([]),
            trgEQTNSubResult2: this.fb.array([]),
            trgEQTNSubResult3: this.fb.array([]),
        });
    }
    Object.defineProperty(EqntComponent.prototype, "getCSubjectRes", {
        get: function () {
            return this.eqtnForm.get('trgEQTNSubResult');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EqntComponent.prototype, "getCSubjectRes1", {
        get: function () {
            return this.eqtnForm.get('trgEQTNSubResult');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EqntComponent.prototype, "getCSubjectRes2", {
        get: function () {
            return this.eqtnForm.get('trgEQTNSubResult2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EqntComponent.prototype, "getCSubjectRes3", {
        get: function () {
            return this.eqtnForm.get('trgEQTNSubResult3');
        },
        enumerable: false,
        configurable: true
    });
    EqntComponent.prototype.genSubRec = function () {
        return this.fb.group({
            id: [''],
            obtainedMarks: [''],
            serviceId: [''],
            status: ['1'],
            subjectId: [''],
            subjectName: [''],
            termId: [''],
            totalMarks: [''],
            remarks: ['']
        });
    };
    EqntComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(localStorage.getItem("e"), '1111');
        console.log(localStorage.getItem("i"), '2222');
        document.getElementById("eqtnID").value = localStorage.getItem("e");
        document.getElementById("eqtnName").value = localStorage.getItem("i");
        document.getElementById("eqtnComp").value = localStorage.getItem("companyName");
        document.getElementById("eqtnBn").value = localStorage.getItem("battalionName");
        document.getElementById("eqtnTermName").value = localStorage.getItem("termId");
        document.getElementById("eqtnRk").value = localStorage.getItem("rank");
        this.id = this.route.snapshot.queryParamMap.get('serviceId');
        this.termid = this.route.snapshot.queryParamMap.get('termId');
        console.log("service ID IN EQTN ", this.id);
        console.log("TERM ID IN EQTN", this.termid);
        this.EDossierService.getEqtnEdossiermarks(this.id).subscribe(function (res) {
            if (res.message == "Record found successfully") {
                _this.mnc = "update";
                _this.spinner.hide();
                _this.Campmark1 = res.object;
                if (_this.termid == 1 || _this.termid == 2 || _this.termid == 3) {
                    _this.drilleditid = res.object[0].id;
                    _this.TermFetch = res.object[0].termId;
                    _this.updatetotalmarks = res.object[0].totalMarks;
                    _this.totalmarkst = res.object[0].obtainedMarks;
                    console.log(_this.updatetotalmarks, "updatetotalmarks");
                    console.log(_this.totalmarkst, "totalmarkst");
                    var cmrks = res.object[0].trgEQTNSubResult;
                    console.log("view for cmrks", cmrks);
                    cmrks.forEach(function (e) {
                        e.id = e.id;
                        console.log("eeee===>>", e);
                        _this.getCSubjectRes1.push(_this.genSubRec());
                    });
                    _this.eqtnForm.patchValue({
                        trgEQTNSubResult: cmrks,
                    });
                }
                if (_this.termid == 2 || _this.termid == 3) {
                    _this.TermFetch1 = res.object[1].termId;
                    _this.updatetotalmarks1 = res.object[1].totalMarks;
                    _this.totalmarkst1 = res.object[1].obtainedMarks;
                    var cmrks1 = res.object[1].trgEQTNSubResult;
                    cmrks1.forEach(function (e) {
                        e.id = e.id;
                        console.log("eeee===>>", e);
                        _this.getCSubjectRes2.push(_this.genSubRec());
                    });
                    console.log("view for cmrks", cmrks1);
                    _this.eqtnForm.patchValue({
                        trgEQTNSubResult2: cmrks1,
                    });
                }
                if (_this.termid == 3) {
                    _this.TermFetch2 = res.object[2].termId;
                    _this.updatetotalmarks2 = res.object[2].totalMarks;
                    _this.totalmarkst2 = res.object[2].obtainedMarks;
                    var cmrks2 = res.object[2].trgEQTNSubResult;
                    cmrks2.forEach(function (e) {
                        e.id = e.id;
                        console.log("eeee===>>", e);
                        _this.getCSubjectRes3.push(_this.genSubRec());
                    });
                    _this.eqtnForm.patchValue({
                        trgEQTNSubResult3: cmrks2,
                    });
                }
                _this.eqtnForm.patchValue({
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
        // }
    };
    EqntComponent.prototype.ngAfterViewInit = function () {
    };
    EqntComponent.prototype.getTotal = function () {
        return this.Campmarks.map(function (t) { return t.totalMarks; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    EqntComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    // viewCamp(element) {
    //   if (this.router.url.includes('main/trg-battalion'))
    //     this.router.navigate(['/main/admin/trg-battalion/camp-marks/view-camp-marks'], { queryParams: { id: element.id } })
    //   if (this.router.url.includes('main/trg-battalion'))
    //     this.router.navigate(['/main/admin/trg-battalion/camp-marks/view-camp-marks'], { queryParams: { id: element.id } })
    // }
    EqntComponent.prototype.goBack = function () {
        window.history.back();
    };
    EqntComponent.prototype.onChange = function (value, totalMarks, index) {
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
    EqntComponent.prototype.onFocusEvent = function (value1) {
        if (value1 == NaN || value1 == '' || value1 == undefined) {
            value1 = 0;
        }
        this.totalmarkst -= parseInt(value1);
        if (this.totalmarkst == NaN) {
            this.totalmarkst = 0;
        }
        console.log(this.totalmarkst);
    };
    EqntComponent.prototype.getMarks = function (i, e) {
        if (this.tempArr[i] == undefined || this.tempArr[i] == '') {
            this.tempArr.push(e);
        }
        else {
            this.tempArr[i] = e;
        }
    };
    EqntComponent.prototype.attemptChange = function (e) {
        this.attemptvalue = e;
    };
    EqntComponent.prototype.confirm = function (termid) {
        var _this = this;
        console.log(termid, "tttt");
        this.eqtnForm.value.serviceId = this.serviceId;
        var indexT = 0;
        this.eqtnForm.value == this.totalMarks1;
        this.totalMarks1 = Object.assign({}, this.eqtnForm.value, { obtainedMarks: this.totalmarkst, totalMarks: this.updatetotalmarks, status: 1, termId: termid, id: this.drilleditid });
        var formdata = this.totalMarks1;
        // if (termid == 1) {
        //   delete formdata.trgEQTNSubResult
        //   delete formdata.campSubjectResult3
        //   formdata.campSubjectResult=formdata.campSubjectResult
        // }
        // if (termid == 2) {
        //   delete formdata.campSubjectResult
        //   delete formdata.trgEQTNSubResult
        //   delete formdata.campSubjectResult3
        //   formdata.campSubjectResult=formdata.trgEQTNSubResult
        //   delete formdata.trgEQTNSubResult
        // }
        // if (termid == 3) {
        //   delete formdata.campSubjectResult
        //   delete formdata.trgEQTNSubResult
        //   formdata.campSubjectResult=formdata.campSubjectResult3
        //   delete formdata.campSubjectResult3
        // }
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
        this.eqtnForm.value.trgEQTNSubResult = [];
        console.log(formdata, "all");
        this.EDossierService.updateEdossiermarks(2).subscribe(function (res) {
            if (res.message == 'Record found successfully') {
                _this.adminservice.openSnackbar("EQTN Marks Updated Successfully");
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
    EqntComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_9__["EDossierService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_9__["EDossierService"] }
    ]; };
    EqntComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true },] }]
    };
    EqntComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-eqnt',
            template: _raw_loader_eqnt_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_eqnt_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_9__["EDossierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_9__["EDossierService"]])
    ], EqntComponent);
    return EqntComponent;
}());



/***/ }),

/***/ "tDCl":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/eqnt/eqnt.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n      <!-- <div id=\"top-bar\" class=\"row\">\r\n          <h2>EQTN</h2>\r\n      </div> -->\r\n    \r\n      <div class=\"mat-heading\">\r\n        <div id=\"top-bar\" class=\"\">\r\n          \r\n          <h2>\r\n            <button mat-icon-button (click)=\"goBack()\">\r\n              <mat-icon>chevron_left</mat-icon>\r\n            </button>\r\n            <span class=\"sub-menu1\">E-Dossier \r\n            > Overall Assessment > EQTN</span></h2>\r\n      </div>\r\n      </div>\r\n\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n      <div class=\"service-id mb-2 mx-5 row\">\r\n        <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Ima No.</label>\r\n                <input placeholder=\"No\"  type=\"text\" disabled id=\"eqtnID\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>  \r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Rank</label>\r\n                <input placeholder=\"Rank\"  type=\"text\" disabled id=\"eqtnRk\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Name</label>\r\n                <input placeholder=\"Name\"  type=\"text\" disabled id=\"eqtnName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Term</label>\r\n                <input placeholder=\"Term\"  type=\"text\" disabled id=\"eqtnTermName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Coy</label>\r\n                <input placeholder=\"Coy\"  type=\"text\" disabled id=\"eqtnComp\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Bn</label>\r\n                <input placeholder=\"Bn\"  type=\"text\" disabled id=\"eqtnBn\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      </div>\r\n      <div class=\"eqtn mb-5\">\r\n          <div class=\"mat-card mat-focus-indicator\">\r\n              <!-- <div class=\"ng-star-inserted\">\r\n                  <div class=\"mat-new mb-4\">\r\n                      <h4 class=\"card-heading\">EQTN</h4>\r\n                  </div>\r\n              </div> -->\r\n              <mat-card *ngIf=\"Campmark1.length==0\" style=\" margin: auto; width: 100%;text-align: center;padding-top: 80px;\">\r\n                <img src=\"assets/img/empty-no-data.png\" >\r\n              </mat-card>\r\n           \r\n              <form [formGroup]=\"eqtnForm\">\r\n                  <div formArrayName=\"trgEQTNSubResult\"  *ngIf=\"this.termid==1 || this.termid == 2 || this.termid == 3\" class=\"mb-5\">\r\n               <div *ngIf=\"TermFetch == 1\" class=\"tg\">\r\n                <h3>I-Term</h3>\r\n                <table>\r\n                  <thead>\r\n                      <tr>\r\n                          <th class=\"tg-1pqm\" rowspan=\"2\"><span\r\n                                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">S\r\n                                  No </span></th>\r\n                          <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Test</span>\r\n                          </th>\r\n                          <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Max Marks</span>\r\n                          </th>\r\n                          <th class=\"tg-xakg\" ><span\r\n                                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Marks Obtained</span></th>\r\n                          <!-- <th class=\"tg-xakg\"><span\r\n                                    style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Remarks</span></th>\r\n                                     -->\r\n                      </tr>\r\n                      <tr>\r\n                        \r\n                      </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                      <tr *ngFor=\"let mr of getCSubjectRes.controls;let i=index\">\r\n                          <ng-container [formGroupName]=\"i\">\r\n                              <td> {{i+1}} </td>\r\n                              <td> {{mr.value.subjectName}} </td>\r\n                              <td> <b>{{mr.value.totalMarks}}</b> </td>\r\n                              \r\n                              <td>\r\n                                  <input min=\"0\" disabled oninput=\"this.value = \r\n                          !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                      formControlName=\"obtainedMarks\" class=\"form-control\"\r\n                                      (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                      on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                      maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                              </td>\r\n                             <!-- <td><input class=\"form-control\" disabled\r\n                              formControlName=\"remarks\"    ></td> -->\r\n                          </ng-container>\r\n                      </tr>\r\n                      \r\n                      <tr>\r\n                          <td class=\"tg-amwm\" colspan=\"2\"><span\r\n                                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total</span>\r\n                          </td>\r\n                         \r\n                          <td class=\"tg-amwm\"><span\r\n                                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">{{updatetotalmarks}}</span>\r\n                          </td>\r\n                          <td class=\"tg-0lax\"><b>{{totalmarkst}}</b></td>\r\n                         \r\n                      </tr>\r\n                    \r\n                      \r\n                     \r\n                  </tbody>\r\n            </table>\r\n             \r\n               </div>\r\n                   \r\n                  <!-- <button  mat-raised-button (click)=\"confirm(1)\">CONFIRM</button> -->\r\n\r\n                  </div>\r\n                \r\n                   <div formArrayName=\"trgEQTNSubResult2\" *ngIf=\"termid==2 || termid==3\" class=\"mb-5\">\r\n                   <div *ngIf=\"TermFetch == 1 && TermFetch1 == 2\">\r\n                    <h3>II-Term</h3>\r\n                    <table class=\"tg\">\r\n                      <thead>\r\n                          <tr>\r\n                              <th class=\"tg-1pqm\" rowspan=\"2\"><span\r\n                                      style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">S\r\n                                      No </span></th>\r\n                              <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                      style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Events</span>\r\n                              </th>\r\n                              <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                      style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Marks</span>\r\n                              </th>\r\n                              <th class=\"tg-xakg\" colspan=\"3\"><span\r\n                                      style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">MARKS\r\n                                      OBTAINED</span></th>\r\n                          </tr>\r\n                          <!-- <tr>\r\n                            \r\n                              <th class=\"tg-xakg\"  colspan=\"4\"><span\r\n                                      style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">II\r\n                                      TERM</span></th>\r\n                    \r\n                          </tr> -->\r\n                      </thead>\r\n                      <tbody>\r\n                          <tr *ngFor=\"let mr of getCSubjectRes2.controls;let i=index\">\r\n                              <ng-container [formGroupName]=\"i\">\r\n                                  <td> {{i+1}} </td>\r\n                                  <td> {{mr.value.subjectName}} </td>\r\n                                  <td> {{mr.value.totalMarks}} </td>\r\n                                  <td colspan=\"4\">\r\n                                      <input min=\"0\" oninput=\"this.value = \r\n                              !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                          formControlName=\"obtainedMarks\" class=\"form-control\" disabled\r\n                                          (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                          on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                          maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                  </td>\r\n                                  \r\n                              </ng-container>\r\n                          </tr>\r\n                          \r\n                          <tr>\r\n                              <td class=\"tg-amwm\" colspan=\"2\"><span\r\n                                      style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total</span>\r\n                              </td>\r\n                              <td class=\"tg-amwm\"><span\r\n                                      style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">{{updatetotalmarks}}</span>\r\n                              </td>\r\n                              <td class=\"tg-0lax\">{{totalmarkst1}}</td>\r\n                          </tr>\r\n                         \r\n                          \r\n                         \r\n                      </tbody>\r\n                  </table>\r\n                   </div>\r\n                  \r\n                     \r\n                  <button *ngIf=\"id=='2'\" mat-raised-button (click)=\"confirm(2)\">CONFIRM</button>\r\n\r\n                  </div>\r\n                \r\n                   <div formArrayName=\"trgEQTNSubResult3\" *ngIf=\"termid==3\" class=\"mb-5\">\r\n                 \r\n                 <div *ngIf=\"TermFetch == 1 && TermFetch1 == 2 && TermFetch2 == 3\" >\r\n                  <h3>III-Term</h3>\r\n                  <table class=\"tg\">\r\n                      <thead>\r\n                          <tr>\r\n                              <th class=\"tg-1pqm\" rowspan=\"2\"><span\r\n                                      style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">S\r\n                                      No </span></th>\r\n                              <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                      style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Events</span>\r\n                              </th>\r\n                              <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                      style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Marks</span>\r\n                              </th>\r\n                              <th class=\"tg-xakg\" colspan=\"3\"><span\r\n                                      style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">MARKS\r\n                                      OBTAINED</span></th>\r\n                          </tr>\r\n                          <!-- <tr>\r\n                              \r\n                              <th class=\"tg-xakg\"><span\r\n                                      style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">III\r\n                                      TERM</span></th>\r\n                          </tr> -->\r\n                      </thead>\r\n                      <tbody>\r\n                          <tr *ngFor=\"let mr of getCSubjectRes3.controls;let i=index\">\r\n                              <ng-container [formGroupName]=\"i\">\r\n                                  <td> {{i+1}} </td>\r\n                                  <td> {{mr.value.subjectName}} </td>\r\n                                  <td> {{mr.value.totalMarks}} </td>\r\n                                  <td colspan=\"4\">\r\n                                      <input min=\"0\" oninput=\"this.value = \r\n                              !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                          formControlName=\"obtainedMarks\" class=\"form-control\" disabled\r\n                                          (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                          on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                          maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                  </td>\r\n                                  \r\n                              </ng-container>\r\n                          </tr>\r\n                          \r\n                          <tr>\r\n                              <td class=\"tg-amwm\" colspan=\"2\"><span\r\n                                      style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total</span>\r\n                              </td>\r\n                              <td class=\"tg-amwm\"><span\r\n                                      style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">{{updatetotalmarks1}}</span>\r\n                              </td>\r\n                              <td class=\"tg-0lax\">{{totalmarkst2}}</td>\r\n                          </tr>\r\n                         \r\n                        \r\n                      </tbody>\r\n                  </table>\r\n                 </div>\r\n                \r\n                  </div> \r\n             \r\n             \r\n             \r\n                  <div *ngIf=\"mnc=='update'\" class=\"form-group col-md-2 submitbutton\"\r\n                  >\r\n               \r\n                  <!-- <button *ngIf=\"id=='3'\" mat-raised-button  (click)=\"confirm(3)\">CONFIRM</button> -->\r\n              </div>\r\n              </form>\r\n          </div>\r\n      </div>\r\n      \r\n  </div>\r\n</div>");

/***/ })

}]);