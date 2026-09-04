(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pt-ed-pt-module"],{

/***/ "6z9s":
/*!*************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/pt/ed-pt.module.ts ***!
  \*************************************************************************************/
/*! exports provided: EdPtModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdPtModule", function() { return EdPtModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pt.component */ "OCTv");
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
        component: _pt_component__WEBPACK_IMPORTED_MODULE_4__["PtComponent"]
    },
];
var EdPtModule = /** @class */ (function () {
    function EdPtModule() {
    }
    EdPtModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _pt_component__WEBPACK_IMPORTED_MODULE_4__["PtComponent"],
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
    ], EdPtModule);
    return EdPtModule;
}());



/***/ }),

/***/ "OCTv":
/*!*************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/pt/pt.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PtComponent", function() { return PtComponent; });
/* harmony import */ var _raw_loader_pt_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./pt.component.html */ "WC1e");
/* harmony import */ var _pt_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pt.component.scss */ "R2uu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PtComponent = /** @class */ (function () {
    function PtComponent(service, router, fb, sharedService, spinner) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.fb = fb;
        this.sharedService = sharedService;
        this.spinner = spinner;
        this.hasAccess = true;
        this.attemptTypes = ['M1', 'M2', 'C1', 'C2'];
        this.serviceId = '';
        this.cadetDetails = {};
        this._I_termData = {};
        this._II_techData = {};
        this._II_termData = {};
        this._III_termData = {};
        service.cadetObj.subscribe(function (object) {
            // console.log("CADET: ", object);
            if (!object) {
                _this.router.navigate(['/e-dossior/ed-content/Ed-dashboard']);
            }
            else {
                _this.cadetDetails = JSON.parse(object);
            }
        });
        // this.cadetDetails = JSON.parse(localStorage.getItem('cadet'))
        this.serviceId = this.cadetDetails.serviceId;
        this.cadetDetails.rank = (this.cadetDetails.nationality == 'India') ? 'GC' : 'FGC';
    }
    PtComponent.prototype.ngOnInit = function () {
        this._I_termData = {
            termId: 1,
            dataAvailable: false,
            subjects: [],
            motivationalAwards: {
                blazer: '0',
                blue: '0',
                halfBlue: '0',
                meritCard: '0',
                obtainedMarks: 0,
                serviceId: this.cadetDetails.serviceId,
                status: 1,
                termId: 1,
                totalMarks: 0
            },
            totalObtainedMarks: 0
        };
        this._II_techData = {
            termId: 7,
            dataAvailable: false,
            subjects: [],
            motivationalAwards: {
                blazer: 0,
                blue: 0,
                halfBlue: 0,
                meritCard: 0,
                obtainedMarks: '',
                serviceId: this.cadetDetails.serviceId,
                status: 1,
                termId: 7,
                totalMarks: ''
            },
            totalObtainedMarks: 0
        };
        this._II_termData = {
            termId: 2,
            dataAvailable: false,
            subjects: [],
            motivationalAwards: {
                blazer: 0,
                blue: 0,
                halfBlue: 0,
                meritCard: 0,
                obtainedMarks: '',
                serviceId: this.cadetDetails.serviceId,
                status: 1,
                termId: 2,
                totalMarks: ''
            },
            totalObtainedMarks: 0
        };
        this._III_termData = {
            termId: 3,
            dataAvailable: false,
            subjects: [],
            motivationalAwards: {
                blazer: 0,
                blue: 0,
                halfBlue: 0,
                meritCard: 0,
                obtainedMarks: '',
                serviceId: this.cadetDetails.serviceId,
                status: 1,
                termId: 3,
                totalMarks: ''
            },
            totalObtainedMarks: 0
        };
    };
    PtComponent.prototype.ngAfterViewInit = function () {
        this.getPTRecords();
        this.getMotivationalAwards();
    };
    PtComponent.prototype.goBack = function () {
        window.history.back();
    };
    PtComponent.prototype.getPTRecords = function () {
        var _this = this;
        this.spinner.show();
        this.service.getPT_RecordsOfCadet(this.serviceId).subscribe(function (res) {
            console.log(res);
            if (res.object) {
                var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(res.object);
                var find_I_Term = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (obj) { return obj.termId === 1; }));
                var subscribe_I_term = find_I_Term.subscribe(function (val) {
                    //  console.log(JSON.stringify(val))
                    if (val) {
                        _this._I_termData.dataAvailable = true;
                        _this._I_termData.subjects.push(val);
                    }
                });
                var find_II_Tech = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (obj) { return obj.termId === 7; }));
                var subscribe_II_tech = find_II_Tech.subscribe(function (val) {
                    //  console.log(JSON.stringify(val))
                    if (val) {
                        _this._II_techData.dataAvailable = true;
                        _this._II_techData.subjects.push(val);
                    }
                });
                var find_II_Term = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (obj) { return obj.termId === 2; }));
                var subscribe_II_term = find_II_Term.subscribe(function (val) {
                    //  console.log(JSON.stringify(val))
                    if (val) {
                        _this._II_termData.dataAvailable = true;
                        _this._II_termData.subjects.push(val);
                    }
                });
                var find_III_Term = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (obj) { return obj.termId === 3; }));
                var subscribe_III_term = find_III_Term.subscribe(function (val) {
                    //  console.log(JSON.stringify(val))
                    if (val) {
                        _this._III_termData.dataAvailable = true;
                        _this._III_termData.subjects.push(val);
                    }
                });
                if (_this._I_termData.dataAvailable) {
                    _this.getTotalMarksIterm();
                }
                if (_this._II_termData.dataAvailable) {
                    _this.getTotalMarksIIterm();
                }
                if (_this._III_termData.dataAvailable) {
                    _this.getTotalMarksIIIterm();
                }
                if (_this._II_techData.dataAvailable) {
                    _this.getTotalMarksIItech();
                }
            }
            console.log('I term', _this._I_termData);
            console.log('II term', _this._II_termData);
            console.log('II tech', _this._II_techData);
            console.log('III term', _this._III_termData);
            _this.spinner.hide();
        });
    };
    PtComponent.prototype.getMotivationalAwards = function () {
        var _this = this;
        this.service.getPT_MotivationalAwards(this.cadetDetails.serviceId, 1).subscribe(function (res) {
            if (res.status == "OK") {
                if (res.object) {
                    Object.assign(_this._I_termData.motivationalAwards, res.object);
                    delete _this._I_termData.motivationalAwards.createdAt;
                    delete _this._I_termData.motivationalAwards.updatedAt;
                }
            }
        });
        this.service.getPT_MotivationalAwards(this.cadetDetails.serviceId, 2).subscribe(function (res) {
            if (res.status == "OK") {
                if (res.object) {
                    Object.assign(_this._II_termData.motivationalAwards, res.object);
                    delete _this._II_termData.motivationalAwards.createdAt;
                    delete _this._II_termData.motivationalAwards.updatedAt;
                }
            }
        });
        this.service.getPT_MotivationalAwards(this.cadetDetails.serviceId, 3).subscribe(function (res) {
            if (res.status == "OK") {
                if (res.object) {
                    Object.assign(_this._III_termData.motivationalAwards, res.object);
                    delete _this._III_termData.motivationalAwards.createdAt;
                    delete _this._III_termData.motivationalAwards.updatedAt;
                }
            }
        });
        this.service.getPT_MotivationalAwards(this.cadetDetails.serviceId, 7).subscribe(function (res) {
            if (res.status == "OK") {
                if (res.object) {
                    Object.assign(_this._II_techData.motivationalAwards, res.object);
                    delete _this._II_techData.motivationalAwards.createdAt;
                    delete _this._II_techData.motivationalAwards.updatedAt;
                }
            }
        });
    };
    PtComponent.prototype.onlyNum = function (event) {
        var pattern = /^[0-9]*$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    PtComponent.prototype.patchMarksIterm = function (event, subject, obj, i, j, type) {
        // console.log(obj);
        var value = event.target.value;
        if (value > obj.totalMarks || value < 0) {
            this.sharedService.openErrorSnackbarWithSeconds("Please Enter Correct Marks. Neither Marks Should be Greater than Subject's Maximum Marks Nor Negative(-).", 10);
            event.target.value = '';
            obj.resultGrade = '';
            if (type == 'M1') {
                obj.m1ObtainedMarks = '';
            }
            else if (type == 'M2') {
                obj.m2ObtainedMarks = '';
            }
            else if (type == 'C1') {
                obj.c1ObtainedMarks = '';
            }
            else if (type == 'C2') {
                obj.c2ObtainedMarks = '';
            }
            event.preventDefault();
            return false;
        }
        else {
            if (value) {
                if (obj.subjectType === "PPT") {
                    if (obj.subjectName == '2.4KM' || obj.subjectName == 'C/UP' || obj.subjectName == 'TOE TOUCH') {
                        if (value >= 9) {
                            if (value == 20) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 19) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value >= 17 && value <= 18) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value < 17 && value >= 15) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value < 15 && value >= 12) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value < 12 && value >= 9) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName == '5/MTR' || obj.subjectName == 'SIT/UP') {
                        if (value >= 6) {
                            if (value == 15) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 14) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value == 13) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value == 12) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value < 12 && value >= 9) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value < 9 && value >= 6) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName == '100 MTR') {
                        if (value >= 5) {
                            if (value == 10) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 9) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value == 8) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value == 7) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value == 6) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value == 5) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                }
                else if (obj.subjectType === "IPET") {
                    if (obj.subjectName == '3rd CL ROPE(3 MTR CLIMB)' || obj.subjectName == 'BEAM (2 REP)'
                        || obj.subjectName == 'A/VAULT (III CL)' || obj.subjectName == 'CW/F/ROLL') {
                        if (value >= 4) {
                            obj.resultGrade = 'Pass';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName == 'BACK ROLL' || obj.subjectName == 'DIVE ROLL') {
                        if (value >= 2) {
                            obj.resultGrade = 'Pass';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                }
                else if (obj.subjectType === "SWM") {
                    if (obj.subjectName == '6.5 MTR JUMP' || obj.subjectName == '150 MTR SWM'
                        || obj.subjectName == '100 MTR SWM' || obj.subjectName == '50 MTR SWM') {
                        if (value >= 2) {
                            obj.resultGrade = 'Pass';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName == '5 MTR JUMP') {
                        if (value >= 4) {
                            obj.resultGrade = 'Pass';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName == '25 MTR SWM') {
                        if (value >= 6) {
                            obj.resultGrade = 'Pass';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                }
                else if (obj.subjectType === "SOT") {
                    if (value >= 12) {
                        if (value == 30) {
                            obj.resultGrade = 'S/EX-1';
                        }
                        else if (value < 30 && value >= 28) {
                            obj.resultGrade = 'S/EX-2';
                        }
                        else if (value < 28 && value >= 26) {
                            obj.resultGrade = 'S/EX-3';
                        }
                        else if (value < 26 && value >= 24) {
                            obj.resultGrade = 'EX';
                        }
                        else if (value < 24 && value >= 18) {
                            obj.resultGrade = 'GOOD';
                        }
                        else if (value < 18 && value >= 12) {
                            obj.resultGrade = 'SAT';
                        }
                        obj.clearedIn = type;
                    }
                    else {
                        obj.resultGrade = 'Failed';
                    }
                }
                this.calculateMarks(subject);
                if (obj.termId == 1) {
                    this.getTotalMarksIterm();
                }
                else if (obj.termId == 7) {
                    this.getTotalMarksIItech();
                }
            }
            else {
                obj.resultGrade = '';
                this.calculateMarks(subject);
            }
        }
    };
    PtComponent.prototype.patchMarksIIterm = function (event, subject, obj, i, j, type) {
        // console.log(obj);
        var value = event.target.value;
        if (value > obj.totalMarks || value < 0) {
            this.sharedService.openErrorSnackbarWithSeconds("Please Enter Correct Marks. Neither Marks Should be Greater than Subject's Maximum Marks Nor Negative(-).", 10);
            event.target.value = '';
            obj.resultGrade = '';
            if (type == 'M1') {
                obj.m1ObtainedMarks = '';
            }
            else if (type == 'M2') {
                obj.m2ObtainedMarks = '';
            }
            else if (type == 'C1') {
                obj.c1ObtainedMarks = '';
            }
            else if (type == 'C2') {
                obj.c2ObtainedMarks = '';
            }
            event.preventDefault();
            return false;
        }
        else {
            if (value) {
                if (obj.subjectType === "PPT") {
                    if (obj.subjectName == '2.4KM' || obj.subjectName == 'C/UP' || obj.subjectName == 'TOE TOUCH') {
                        if (value >= 9) {
                            if (value == 20) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 19) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value >= 17 && value <= 18) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value < 17 && value >= 15) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value < 15 && value >= 12) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value < 12 && value >= 9) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName == '5/MTR' || obj.subjectName == 'SIT/UP') {
                        if (value >= 6) {
                            if (value == 15) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 14) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value == 13) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value == 12) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value < 12 && value >= 9) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value < 9 && value >= 6) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName == '100 MTR') {
                        if (value >= 5) {
                            if (value == 10) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 9) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value == 8) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value == 7) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value == 6) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value == 5) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                }
                else if (obj.subjectType === "IPET") {
                    if (value >= 4) {
                        obj.resultGrade = 'Pass';
                        obj.clearedIn = type;
                    }
                    else {
                        obj.resultGrade = 'Failed';
                    }
                }
                else if (obj.subjectType === "SWM") {
                    if (obj.subjectName == '10 MTR JUMP' || obj.subjectName == '200 MTR SWM'
                        || obj.subjectName == '150 MTR SWM' || obj.subjectName == '100 MTR SWM') {
                        if (value >= 2) {
                            obj.resultGrade = 'Pass';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName == '6.5 MTR JUMP') {
                        if (value >= 4) {
                            obj.resultGrade = 'Pass';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName == '35 MTR SWM') {
                        if (value >= 6) {
                            obj.resultGrade = 'Pass';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                }
                else if (obj.subjectType === "CTOT") {
                    if (value >= 2) {
                        obj.resultGrade = 'Pass';
                        obj.clearedIn = type;
                    }
                    else {
                        obj.resultGrade = 'Failed';
                    }
                }
                this.calculateMarks(subject);
                this.getTotalMarksIIterm();
            }
            else {
                obj.resultGrade = '';
            }
        }
    };
    PtComponent.prototype.patchMarksIIIterm = function (event, subject, obj, i, j, type) {
        // console.log(obj);
        var value = event.target.value;
        if (value > obj.totalMarks || value < 0) {
            this.sharedService.openErrorSnackbarWithSeconds("Please Enter Correct Marks. Neither Marks Should be Greater than Subject's Maximum Marks Nor Negative(-).", 10);
            event.target.value = '';
            obj.resultGrade = '';
            if (type == 'M1') {
                obj.m1ObtainedMarks = '';
            }
            else if (type == 'M2') {
                obj.m2ObtainedMarks = '';
            }
            else if (type == 'C1') {
                obj.c1ObtainedMarks = '';
            }
            else if (type == 'C2') {
                obj.c2ObtainedMarks = '';
            }
            event.preventDefault();
            return false;
        }
        else {
            if (value) {
                if (obj.subjectType === "PPT") {
                    if (obj.subjectName == '2.4KM' || obj.subjectName == 'C/UP' || obj.subjectName == 'TOE TOUCH') {
                        if (value >= 4) {
                            if (value == 12) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 11) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value == 10) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value < 10 && value >= 8) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value < 8 && value >= 6) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value < 6 && value >= 4) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName == '5/MTR') {
                        if (value >= 4) {
                            if (value == 11) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 10) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value == 9) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value == 8) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value < 8 && value >= 6) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value < 6 && value >= 4) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    if (obj.subjectName == 'SIT/UP' || obj.subjectName == '100 MTR') {
                        if (value >= 4) {
                            if (value == 9) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 8) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value == 7) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value == 6) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value == 5) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value == 4) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    if (obj.subjectName == '2nd CL Rope (4 Mtr Climb)') {
                        if (value == 10) {
                            obj.resultGrade = 'Pass';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                }
                else if (obj.subjectType === "SWM") {
                    if (obj.subjectName.trim() == '250 MTR SWM' || obj.subjectName.trim() == '200 MTR SWM'
                        || obj.subjectName.trim() == '150 MTR SWM' || obj.subjectName.trim() == '100 MTR SWM') {
                        if (value >= 2) {
                            obj.resultGrade = 'Pass';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName.trim() == '10 MTR JUMP') {
                        if (value >= 4) {
                            obj.resultGrade = 'Pass';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName.trim() == '50 MTR SWM') {
                        if (value >= 6) {
                            obj.resultGrade = 'Pass';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                }
                else if (obj.subjectType === "ROT") {
                    if (value >= 12) {
                        if (value == 30) {
                            obj.resultGrade = 'S/EX-1';
                        }
                        else if (value < 30 && value >= 28) {
                            obj.resultGrade = 'S/EX-2';
                        }
                        else if (value == 27) {
                            obj.resultGrade = 'S/EX-3';
                        }
                        else if (value == 26) {
                            obj.resultGrade = 'EX-1';
                        }
                        else if (value == 25) {
                            obj.resultGrade = 'EX-2';
                        }
                        else if (value == 24) {
                            obj.resultGrade = 'EX-3';
                        }
                        else if (value < 24 && value >= 22) {
                            obj.resultGrade = 'GD-1';
                        }
                        else if (value < 22 && value >= 20) {
                            obj.resultGrade = 'GD-2';
                        }
                        else if (value < 20 && value >= 18) {
                            obj.resultGrade = 'GD-3';
                        }
                        else if (value < 18 && value >= 16) {
                            obj.resultGrade = 'SAT-1';
                        }
                        else if (value < 16 && value >= 14) {
                            obj.resultGrade = 'SAT-2';
                        }
                        else if (value < 14 && value >= 12) {
                            obj.resultGrade = 'SAT-3';
                        }
                        obj.clearedIn = type;
                    }
                    else {
                        obj.resultGrade = 'Failed';
                    }
                }
                else if (obj.subjectType === "BPET") {
                    if (obj.subjectName == '5 KM') {
                        if (value >= 10) {
                            if (value == 25) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 24) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value == 23) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value == 22) {
                                obj.resultGrade = 'EX-1';
                            }
                            else if (value == 21) {
                                obj.resultGrade = 'EX-2';
                            }
                            else if (value == 20) {
                                obj.resultGrade = 'EX-3';
                            }
                            else if (value == 19) {
                                obj.resultGrade = 'GOOD-1';
                            }
                            else if (value < 19 && value >= 17) {
                                obj.resultGrade = 'GOOD-2';
                            }
                            else if (value < 17 && value >= 15) {
                                obj.resultGrade = 'GOOD-3';
                            }
                            else if (value == 14) {
                                obj.resultGrade = 'SAT-1';
                            }
                            else if (value < 14 && value >= 12) {
                                obj.resultGrade = 'SAT-2';
                            }
                            else if (value < 12 && value >= 10) {
                                obj.resultGrade = 'SAT-3';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName == '60 MTR') {
                        if (value >= 6) {
                            if (value == 15) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 14) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value == 13) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value == 12) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value < 12 && value >= 9) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value < 9 && value >= 6) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName == "V/ROPE 4 MTR CLIMB") {
                        if (value >= 12) {
                            if (value == 15) {
                                obj.resultGrade = 'S/EX-1';
                            }
                            else if (value == 14) {
                                obj.resultGrade = 'S/EX-2';
                            }
                            else if (value == 13) {
                                obj.resultGrade = 'S/EX-3';
                            }
                            else if (value == 12) {
                                obj.resultGrade = 'PASS';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName == 'H/ROPE 9 MTR') {
                        if (value >= 6) {
                            if (value == 10) {
                                obj.resultGrade = 'EX';
                            }
                            else if (value < 10 && value >= 8) {
                                obj.resultGrade = 'GOOD';
                            }
                            else if (value < 8 && value >= 6) {
                                obj.resultGrade = 'SAT';
                            }
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                    else if (obj.subjectName == "9' DITCH") {
                        if (value == 10) {
                            obj.resultGrade = 'PASS';
                            obj.clearedIn = type;
                        }
                        else {
                            obj.resultGrade = 'Failed';
                        }
                    }
                }
                this.calculateMarks(subject);
                this.getTotalMarksIIIterm();
            }
            else {
                obj.resultGrade = '';
                this.calculateMarks(subject);
            }
        }
    };
    PtComponent.prototype.calculateMarks = function (subject) {
        var ptTotal = 0;
        subject.edossierPtSubjectResult.forEach(function (el) {
            var currentMarks = 0;
            if (el.lastAttemptType == 'M1') {
                if (el.m1ObtainedMarks)
                    currentMarks = parseInt(el.m1ObtainedMarks);
                else
                    currentMarks = 0;
            }
            else if (el.lastAttemptType == 'M2') {
                if (el.m2ObtainedMarks)
                    currentMarks = parseInt(el.m2ObtainedMarks);
                else
                    currentMarks = 0;
            }
            else if (el.lastAttemptType == 'C1') {
                if (el.c1ObtainedMarks)
                    currentMarks = parseInt(el.c1ObtainedMarks);
                else
                    currentMarks = 0;
            }
            else if (el.lastAttemptType == 'C2') {
                if (el.c2ObtainedMarks)
                    currentMarks = parseInt(el.c2ObtainedMarks);
                else
                    currentMarks = 0;
            }
            else {
                currentMarks = 0;
            }
            ptTotal = ptTotal + currentMarks;
        });
        // return ptTotal;
        subject.obtainedMarks = ptTotal;
    };
    PtComponent.prototype.getTotalMarksIterm = function () {
        var obtMarks = 0;
        this._I_termData.subjects.forEach(function (el) {
            var currentMarks = 0;
            if (el.obtainedMarks)
                currentMarks = parseInt(el.obtainedMarks);
            obtMarks = obtMarks + currentMarks;
        });
        this._I_termData.totalObtainedMarks = obtMarks;
    };
    PtComponent.prototype.getTotalMarksIIterm = function () {
        var obtMarks = 0;
        this._II_termData.subjects.forEach(function (el) {
            var currentMarks = 0;
            if (el.obtainedMarks)
                currentMarks = parseInt(el.obtainedMarks);
            obtMarks = obtMarks + currentMarks;
        });
        this._II_termData.totalObtainedMarks = obtMarks;
    };
    PtComponent.prototype.getTotalMarksIIIterm = function () {
        var obtMarks = 0;
        this._III_termData.subjects.forEach(function (el) {
            var currentMarks = 0;
            if (el.obtainedMarks)
                currentMarks = parseInt(el.obtainedMarks);
            obtMarks = obtMarks + currentMarks;
        });
        this._III_termData.totalObtainedMarks = obtMarks;
    };
    PtComponent.prototype.getTotalMarksIItech = function () {
        var obtMarks = 0;
        this._II_techData.subjects.forEach(function (el) {
            var currentMarks = 0;
            if (el.obtainedMarks)
                currentMarks = parseInt(el.obtainedMarks);
            obtMarks = obtMarks + currentMarks;
        });
        this._II_techData.totalObtainedMarks = obtMarks;
    };
    PtComponent.prototype.updateResult = function (subject) {
        var _this = this;
        console.log(subject);
        this.spinner.show();
        this.service.updatePTResult(subject).subscribe(function (res) {
            if (res.status == 'OK') {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar("Error Occured.");
        });
    };
    PtComponent.prototype.markMotivationalAwards = function (event, awardName, termId) {
        var obj;
        var checked = event.target.checked;
        //SETTING TERM
        if (termId == 1) {
            obj = this._I_termData.motivationalAwards;
        }
        else if (termId == 2) {
            obj = this._II_termData.motivationalAwards;
        }
        else if (termId == 3) {
            obj = this._III_termData.motivationalAwards;
        }
        else if (termId == 7) {
            obj = this._II_techData.motivationalAwards;
        }
        //SETTING AWARDS
        if (awardName == 'Merit Card') {
            obj.meritCard = checked ? '1' : '0';
        }
        else if (awardName == 'Half Blue') {
            obj.halfBlue = checked ? '1' : '0';
        }
        else if (awardName == 'Blue') {
            obj.blue = checked ? '1' : '0';
        }
        else if (awardName == 'Blazer') {
            obj.blazer = checked ? '1' : '0';
        }
    };
    PtComponent.prototype.updateMotivationalAwards = function (term) {
        var _this = this;
        this.spinner.show();
        var obj;
        if (term == 1) {
            obj = this._I_termData.motivationalAwards;
        }
        else if (term == 2) {
            obj = this._II_termData.motivationalAwards;
        }
        else if (term == 3) {
            obj = this._III_termData.motivationalAwards;
        }
        else if (term == 7) {
            obj = this._II_techData.motivationalAwards;
        }
        console.log(obj);
        this.service.addPT_MotivationalAwards(obj).subscribe(function (res) {
            if (res.status == "OK") {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar("Error Occured");
        });
    };
    PtComponent.ctorParameters = function () { return [
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_5__["EDossierService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }
    ]; };
    PtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-pt',
            template: _raw_loader_pt_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_pt_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_5__["EDossierService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
    ], PtComponent);
    return PtComponent;
}());



/***/ }),

/***/ "R2uu":
/*!***************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/pt/pt.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div#top-bar {\n  background: #4c5041;\n  padding: 5px 15px;\n  color: #fff;\n}\n\ndiv#top-bar h2 {\n  font-size: 19px;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #bb9450;\n  background: #e1e3de;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.box-shadow {\n  float: left;\n  width: 100%;\n  margin: 10px 0;\n}\n\n.mat-card {\n  transition: all 0.4s ease 0s;\n  color: #37474F;\n  font-family: \"Nunito Sans\", sans-serif;\n  background-color: #ffffff;\n  margin-bottom: 20px !important;\n  width: 110%;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background: #fff;\n  padding: 20px;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n}\n\n.tg td {\n  border-color: #ccc;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 10px 5px;\n  word-break: normal;\n  text-align: center;\n  text-align: center;\n}\n\n.tg th {\n  text-align: center;\n  border-color: #ccc;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 10px 5px;\n  word-break: normal;\n  background: #eee;\n  text-align: center;\n  font-weight: bold;\n  text-align: center;\n}\n\ntd.tg-0lax.bold {\n  font-weight: bold;\n}\n\ninput {\n  text-align: center;\n  border: 1px solid #ccc;\n  background: #fafafa;\n  border-radius: 3px;\n}\n\nh4.red-heading {\n  font-size: 15px;\n  color: #721a0c;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n\ntable {\n  margin-bottom: 30px;\n}\n\nth {\n  text-align: center !important;\n}\n\ntd.resData {\n  text-align: center !important;\n}\n\n.card-title {\n  text-align: center !important;\n}\n\n.card {\n  border: 0;\n}");

/***/ }),

/***/ "WC1e":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/pt/pt.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n\r\n  <!-- <div id=\"top-bar\" class=\"row\">\r\n    <h2>E-Dossier</h2>\r\n  </div> -->\r\n  <div class=\"box-shadow\">\r\n\r\n    <h4 class=\"card-heading\">\r\n      <button mat-icon-button (click)=\"goBack()\">\r\n        <mat-icon>chevron_left</mat-icon>\r\n      </button>\r\n      <span class=\"sub-menu1\"> E-Dossier > Assessment: Physical Training </span>\r\n    </h4>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 form-group\">\r\n\r\n      <label for=\"rank\">Ima No.</label>\r\n      <input placeholder=\"No\" type=\"text\" [value]=\"cadetDetails.serviceId\" disabled class=\"form-control\">\r\n\r\n    </div>\r\n    <div class=\"col-md-2 form-group\">\r\n\r\n      <label for=\"rank\">Rank</label>\r\n      <input placeholder=\"Rank\" [value]=\"this.cadetDetails.rank\" type=\"text\" disabled class=\"form-control\">\r\n\r\n    </div>\r\n    <div class=\"col-md-2 form-group\">\r\n\r\n      <label for=\"rank\">Name</label>\r\n      <input placeholder=\"Name\" [value]=\"cadetDetails.name\" type=\"text\" disabled class=\"form-control\">\r\n\r\n    </div>\r\n    <div class=\"col-md-2 form-group\">\r\n\r\n      <label for=\"rank\">Term</label>\r\n      <input placeholder=\"Term\" [value]=\"cadetDetails.termName\" type=\"text\" disabled class=\"form-control\">\r\n\r\n    </div>\r\n    <div class=\"col-md-2 form-group\">\r\n\r\n      <label for=\"rank\">Battalion</label>\r\n      <input placeholder=\"Bn\" [value]=\"cadetDetails.battalian + ' Bn'\" type=\"text\" disabled class=\"form-control\">\r\n\r\n    </div>\r\n    <div class=\"col-md-2 form-group\">\r\n\r\n      <label for=\"rank\">Company</label>\r\n      <input placeholder=\"Coy\" [value]=\"cadetDetails.company\" type=\"text\" disabled class=\"form-control\">\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"main-row row\">\r\n\r\n    <mat-card *ngIf=\"!_I_termData.dataAvailable && !_II_techData.dataAvailable && !_II_termData.dataAvailable && !_III_termData.dataAvailable\"  >\r\n        <div style=\"width: 500px; height: 500px;\" >\r\n          <img src=\"assets/img/no_data_available.png\" style=\"width: 500px; height: 500px;\" alt=\"No Data Available\">\r\n        </div> \r\n    </mat-card>\r\n\r\n    <mat-card *ngIf=\"_I_termData.dataAvailable\">\r\n      <mat-card-title>\r\n        <div class=\"card-title\">\r\n          <h1>Term I</h1> \r\n        </div>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <div *ngFor=\"let subject of _I_termData.subjects;let i=index\" class=\"card m-4\">\r\n\r\n          <div>\r\n            <h4> {{i+1}}. {{subject.subjectType}}</h4>\r\n          </div>\r\n          <div>\r\n            <table class=\"tg\">\r\n              <thead>\r\n                <tr>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Sr.No.</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Test</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Last Attempt</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Total Marks</th>\r\n                  <th class=\"tg-0lax\" colspan=\"4\">Obtained Marks</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Cleared In</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Grade</th>\r\n                </tr>\r\n                <tr>\r\n                  <th class=\"tg-0lax\">M1</th>\r\n                  <th class=\"tg-0lax\">M2</th>\r\n                  <th class=\"tg-0lax\">C1</th>\r\n                  <th class=\"tg-0lax\">C2</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let sub of subject.edossierPtSubjectResult;let j=index\">\r\n                  <td class=\"tg-0lax\">{{j+1}} </td>\r\n                  <td class=\"tg-0lax\"> {{sub.subjectName || '-'}} </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <select *ngIf=\"hasAccess\" name=\"\" id=\"\" [(ngModel)]=\"sub.lastAttemptType\" class=\"form-control\">\r\n                      <!-- <option *ngFor=\"let at of attemptTypes\" [value]=\"at\">{{at}} </option> -->\r\n                      <option value=\"\" selected disabled hidden>Select</option>\r\n                      <option value=\"M1\">M1</option>\r\n                      <option value=\"M2\" [disabled]=\"!sub.m1ObtainedMarks\">M2</option>\r\n                      <option value=\"C1\" [disabled]=\"!sub.m2ObtainedMarks\">C1</option>\r\n                      <option value=\"C2\" [disabled]=\"!sub.c1ObtainedMarks\">C2</option>\r\n\r\n                    </select>\r\n                    <span *ngIf=\"!hasAccess\">\r\n                      {{sub.lastAttemptType || '-'}}\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span> {{sub.totalMarks || '-'}} </span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'M1'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.m1ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIterm($event,subject,sub,i,j,'M1')\">\r\n                    <span *ngIf=\"!hasAccess\">\r\n                      {{sub.m1ObtainedMarks || '-'}}\r\n                    </span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'M2'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.m2ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIterm($event,subject,sub,i,j,'M2')\">\r\n                    <span *ngIf=\"!hasAccess\">\r\n                      {{sub.m2ObtainedMarks || '-'}}\r\n                    </span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'C1'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.c1ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIterm($event,subject,sub,i,j,'C1')\">\r\n                    <span *ngIf=\"!hasAccess\">{{sub.c1ObtainedMarks || '-'}}</span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'C2'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.c2ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIterm($event,subject,sub,i,j,'C2')\">\r\n                    <span *ngIf=\"!hasAccess\">{{sub.c2ObtainedMarks || '-'}}</span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\"> {{sub.clearedIn || '-'}} </td>\r\n                  <td class=\"tg-0lax resData\"> {{sub.resultGrade || '-'}} </td>\r\n\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"3\">Total </td>\r\n                  <td> {{subject.totalMarks || '-'}} </td>\r\n                  <td colspan=\"6\"> {{subject.obtainedMarks||'-'}} </td>\r\n\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n          <div class=\"text-right\" *ngIf=\"hasAccess\">\r\n            <button mat-raised-button (click)=\"updateResult(subject)\">\r\n              Update\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"row col-md-12\">\r\n          <div class=\"card col-md-6\">\r\n            <div class=\"card-header\">\r\n              <h4>Motivational Awards</h4>\r\n            </div>\r\n            <div class=\"card-body row\">\r\n              <div class=\"\">\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"merit-card\"\r\n                      [checked]=\"_I_termData.motivationalAwards.meritCard == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event,'Merit Card',1)\"> Merit Card </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"half-blue\"\r\n                      [checked]=\"_I_termData.motivationalAwards.halfBlue == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event, 'Half Blue',1)\"> Half Blue </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"blue\"\r\n                      [checked]=\"_I_termData.motivationalAwards.blue == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event,'Blue',1)\"> Blue </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"blazer\"\r\n                      [checked]=\"_I_termData.motivationalAwards.blazer == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event,'Blazer',1)\"> Blazer </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"text-right\" *ngIf=\"hasAccess\">\r\n                  <button mat-raised-button (click)=\"updateMotivationalAwards(1)\">\r\n                    Update Motivational Awards\r\n                  </button>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card col-md-6\">\r\n            <div class=\"card-header\">\r\n              <h4>Total Marks in PT</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <h3>\r\n                {{_I_termData.totalObtainedMarks}}\r\n              </h3>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card *ngIf=\"_II_techData.dataAvailable\">\r\n      <mat-card-title>\r\n        <div class=\"card-title\">\r\n          <h1>Term II Tech</h1> \r\n        </div>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <div *ngFor=\"let subject of _II_techData.subjects;let i=index\" class=\"card m-4\">\r\n\r\n          <div>\r\n            <h4> {{i+1}}. {{subject.subjectType}}</h4>\r\n          </div>\r\n          <div>\r\n            <table class=\"tg\">\r\n              <thead>\r\n                <tr>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Sr.No.</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Test</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Last Attempt</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Total Marks</th>\r\n                  <th class=\"tg-0lax\" colspan=\"4\">Obtained Marks</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Cleared In</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Grade</th>\r\n                </tr>\r\n                <tr>\r\n                  <th class=\"tg-0lax\">M1</th>\r\n                  <th class=\"tg-0lax\">M2</th>\r\n                  <th class=\"tg-0lax\">C1</th>\r\n                  <th class=\"tg-0lax\">C2</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let sub of subject.edossierPtSubjectResult;let j=index\">\r\n                  <td class=\"tg-0lax\">{{j+1}} </td>\r\n                  <td class=\"tg-0lax\"> {{sub.subjectName || '-'}} </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <select *ngIf=\"hasAccess\" name=\"\" id=\"\" [(ngModel)]=\"sub.lastAttemptType\" class=\"form-control\">\r\n                      <!-- <option *ngFor=\"let at of attemptTypes\" [value]=\"at\">{{at}} </option> -->\r\n                      <option value=\"\" selected disabled hidden>Select</option>\r\n                      <option value=\"M1\">M1</option>\r\n                      <option value=\"M2\" [disabled]=\"!sub.m1ObtainedMarks\">M2</option>\r\n                      <option value=\"C1\" [disabled]=\"!sub.m2ObtainedMarks\">C1</option>\r\n                      <option value=\"C2\" [disabled]=\"!sub.c1ObtainedMarks\">C2</option>\r\n\r\n                    </select>\r\n                    <span *ngIf=\"!hasAccess\">\r\n                      {{sub.lastAttemptType || '-'}}\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span> {{sub.totalMarks || '-'}} </span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'M1'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.m1ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIterm($event,subject,sub,i,j,'M1')\">\r\n                    <span *ngIf=\"!hasAccess\">\r\n                      {{sub.m1ObtainedMarks || '-'}}\r\n                    </span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'M2'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.m2ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIterm($event,subject,sub,i,j,'M2')\">\r\n                    <span *ngIf=\"!hasAccess\">\r\n                      {{sub.m2ObtainedMarks || '-'}}\r\n                    </span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'C1'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.c1ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIterm($event,subject,sub,i,j,'C1')\">\r\n                    <span *ngIf=\"!hasAccess\">{{sub.c1ObtainedMarks || '-'}}</span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'C2'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.c2ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIterm($event,subject,sub,i,j,'C2')\">\r\n                    <span *ngIf=\"!hasAccess\">{{sub.c2ObtainedMarks || '-'}}</span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\"> {{sub.clearedIn || '-'}} </td>\r\n                  <td class=\"tg-0lax resData\"> {{sub.resultGrade || '-'}} </td>\r\n\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"3\">Total </td>\r\n                  <td> {{subject.totalMarks || '-'}} </td>\r\n                  <td colspan=\"6\"> {{subject.obtainedMarks||'-'}} </td>\r\n\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n          <div class=\"text-right\" *ngIf=\"hasAccess\">\r\n            <button mat-raised-button (click)=\"updateResult(subject)\">\r\n              Update\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"row col-md-12\">\r\n          <div class=\"card col-md-6\">\r\n            <div class=\"card-header\">\r\n              <h4>Motivational Awards</h4>\r\n            </div>\r\n            <div class=\"card-body row\">\r\n              <div class=\"\">\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"merit-card\"\r\n                      [checked]=\"_II_techData.motivationalAwards.meritCard == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event,'Merit Card',7)\"> Merit Card </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"half-blue\"\r\n                      [checked]=\"_II_techData.motivationalAwards.halfBlue == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event, 'Half Blue',7)\"> Half Blue </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"blue\"\r\n                      [checked]=\"_II_techData.motivationalAwards.blue == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event,'Blue',7)\"> Blue </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"blazer\"\r\n                      [checked]=\"_II_techData.motivationalAwards.blazer == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event,'Blazer',7)\"> Blazer </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"text-right\" *ngIf=\"hasAccess\">\r\n                  <button mat-raised-button (click)=\"updateMotivationalAwards(7)\">\r\n                    Update Motivational Awards\r\n                  </button>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card col-md-6\">\r\n            <div class=\"card-header\">\r\n              <h4>Total Marks in PT</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <h3>\r\n                {{_II_techData.totalObtainedMarks}}\r\n              </h3>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card *ngIf=\"_II_termData.dataAvailable\">\r\n  \r\n      <mat-card-title>\r\n        <div class=\"card-title\">\r\n          <h1>Term II</h1> \r\n        </div>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <div *ngFor=\"let subject of _II_termData.subjects;let i=index\" class=\"card m-4\">\r\n\r\n          <div>\r\n            <h4> {{i+1}}. {{subject.subjectType}}</h4>\r\n          </div>\r\n          <div>\r\n            <table class=\"tg\">\r\n              <thead>\r\n                <tr>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Sr.No.</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Test</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Last Attempt</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Total Marks</th>\r\n                  <th class=\"tg-0lax\" colspan=\"4\">Obtained Marks</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Cleared In</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Grade</th>\r\n                </tr>\r\n                <tr>\r\n                  <th class=\"tg-0lax\">M1</th>\r\n                  <th class=\"tg-0lax\">M2</th>\r\n                  <th class=\"tg-0lax\">C1</th>\r\n                  <th class=\"tg-0lax\">C2</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let sub of subject.edossierPtSubjectResult;let j=index\">\r\n                  <td class=\"tg-0lax\">{{j+1}} </td>\r\n                  <td class=\"tg-0lax\"> {{sub.subjectName || '-'}} </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <select *ngIf=\"hasAccess\" name=\"\" id=\"\" [(ngModel)]=\"sub.lastAttemptType\" class=\"form-control\">\r\n                      <!-- <option *ngFor=\"let at of attemptTypes\" [value]=\"at\">{{at}} </option> -->\r\n                      <option value=\"\" selected disabled hidden>Select</option>\r\n                      <option value=\"M1\">M1</option>\r\n                      <option value=\"M2\" [disabled]=\"!sub.m1ObtainedMarks\">M2</option>\r\n                      <option value=\"C1\" [disabled]=\"!sub.m2ObtainedMarks\">C1</option>\r\n                      <option value=\"C2\" [disabled]=\"!sub.c1ObtainedMarks\">C2</option>\r\n\r\n                    </select>\r\n                    <span *ngIf=\"!hasAccess\">\r\n                      {{sub.lastAttemptType || '-'}}\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span> {{sub.totalMarks || '-'}} </span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'M1'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.m1ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIIterm($event,subject,sub,i,j,'M1')\">\r\n                    <span *ngIf=\"!hasAccess\">\r\n                      {{sub.m1ObtainedMarks || '-'}}\r\n                    </span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'M2'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.m2ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIIterm($event,subject,sub,i,j,'M2')\">\r\n                    <span *ngIf=\"!hasAccess\">\r\n                      {{sub.m2ObtainedMarks || '-'}}\r\n                    </span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'C1'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.c1ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIIterm($event,subject,sub,i,j,'C1')\">\r\n                    <span *ngIf=\"!hasAccess\">{{sub.c1ObtainedMarks || '-'}}</span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'C2'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.c2ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIIterm($event,subject,sub,i,j,'C2')\">\r\n                    <span *ngIf=\"!hasAccess\">{{sub.c2ObtainedMarks || '-'}}</span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\"> {{sub.clearedIn || '-'}} </td>\r\n                  <td class=\"tg-0lax resData\"> {{sub.resultGrade || '-'}} </td>\r\n\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"3\">Total </td>\r\n                  <td> {{subject.totalMarks || '-'}} </td>\r\n                  <td colspan=\"6\"> {{subject.obtainedMarks||'-'}} </td>\r\n\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n          <div class=\"text-right\" *ngIf=\"hasAccess\">\r\n            <button mat-raised-button (click)=\"updateResult(subject)\">\r\n              Update\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-md-12\">\r\n          <div class=\"card col-md-6\">\r\n            <div class=\"card-header\">\r\n              <h4>Motivational Awards</h4>\r\n            </div>\r\n            <div class=\"card-body row\">\r\n              <div class=\"\">\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"merit-card\"\r\n                      [checked]=\"_II_termData.motivationalAwards.meritCard == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event,'Merit Card',2)\"> Merit Card </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"half-blue\"\r\n                      [checked]=\"_II_termData.motivationalAwards.halfBlue == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event, 'Half Blue',2)\"> Half Blue </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"blue\"\r\n                      [checked]=\"_II_termData.motivationalAwards.blue == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event,'Blue',2)\"> Blue </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"blazer\"\r\n                      [checked]=\"_II_termData.motivationalAwards.blazer == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event,'Blazer',2)\"> Blazer </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"text-right\" *ngIf=\"hasAccess\">\r\n                  <button mat-raised-button (click)=\"updateMotivationalAwards(2)\">\r\n                    Update Motivational Awards\r\n                  </button>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card col-md-6\">\r\n            <div class=\"card-header\">\r\n              <h4>Total Marks in PT</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <h3>\r\n                {{_II_termData.totalObtainedMarks}}\r\n              </h3>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </mat-card-content>\r\n\r\n    </mat-card>\r\n\r\n    <mat-card *ngIf=\"_III_termData.dataAvailable\">\r\n\r\n      <mat-card-title>\r\n        <div class=\"card-title\">\r\n          <h1>Term III</h1> \r\n        </div>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <div *ngFor=\"let subject of _III_termData.subjects;let i=index\" class=\"card m-4\">\r\n\r\n          <div>\r\n            <h4> {{i+1}}. {{subject.subjectType}}</h4>\r\n          </div>\r\n          <div>\r\n            <table class=\"tg\">\r\n              <thead>\r\n                <tr>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Sr.No.</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Test</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Last Attempt</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Total Marks</th>\r\n                  <th class=\"tg-0lax\" colspan=\"4\">Obtained Marks</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Cleared In</th>\r\n                  <th class=\"tg-0lax\" rowspan=\"2\">Grade</th>\r\n                </tr>\r\n                <tr>\r\n                  <th class=\"tg-0lax\">M1</th>\r\n                  <th class=\"tg-0lax\">M2</th>\r\n                  <th class=\"tg-0lax\">C1</th>\r\n                  <th class=\"tg-0lax\">C2</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let sub of subject.edossierPtSubjectResult;let j=index\">\r\n                  <td class=\"tg-0lax\">{{j+1}} </td>\r\n                  <td class=\"tg-0lax\"> {{sub.subjectName || '-'}} </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <select *ngIf=\"hasAccess\" name=\"\" id=\"\" [(ngModel)]=\"sub.lastAttemptType\" class=\"form-control\">\r\n                      <!-- <option *ngFor=\"let at of attemptTypes\" [value]=\"at\">{{at}} </option> -->\r\n                      <option value=\"\" selected disabled hidden>Select</option>\r\n                      <option value=\"M1\">M1</option>\r\n                      <option value=\"M2\" [disabled]=\"!sub.m1ObtainedMarks\">M2</option>\r\n                      <option value=\"C1\" [disabled]=\"!sub.m2ObtainedMarks\">C1</option>\r\n                      <option value=\"C2\" [disabled]=\"!sub.c1ObtainedMarks\">C2</option>\r\n\r\n                    </select>\r\n                    <span *ngIf=\"!hasAccess\">\r\n                      {{sub.lastAttemptType || '-'}}\r\n                    </span>\r\n                  </td>\r\n                  <td>\r\n                    <span> {{sub.totalMarks || '-'}} </span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'M1'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.m1ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIIIterm($event,subject,sub,i,j,'M1')\">\r\n                    <span *ngIf=\"!hasAccess\">\r\n                      {{sub.m1ObtainedMarks || '-'}}\r\n                    </span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'M2'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.m2ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIIIterm($event,subject,sub,i,j,'M2')\">\r\n                    <span *ngIf=\"!hasAccess\">\r\n                      {{sub.m2ObtainedMarks || '-'}}\r\n                    </span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'C1'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.c1ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIIIterm($event,subject,sub,i,j,'C1')\">\r\n                    <span *ngIf=\"!hasAccess\">{{sub.c1ObtainedMarks || '-'}}</span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\">\r\n                    <input *ngIf=\"hasAccess\" [disabled]=\"sub.lastAttemptType != 'C2'\" type=\"text\" name=\"\" id=\"\"\r\n                      class=\"form-control\" [(ngModel)]=\"sub.c1ObtainedMarks\" (keypress)=\"onlyNum($event)\"\r\n                      (focusout)=\"patchMarksIIIterm($event,subject,sub,i,j,'C2')\">\r\n                    <span *ngIf=\"!hasAccess\">{{sub.c2ObtainedMarks || '-'}}</span>\r\n                  </td>\r\n                  <td class=\"tg-0lax resData\"> {{sub.clearedIn || '-'}} </td>\r\n                  <td class=\"tg-0lax resData\"> {{sub.resultGrade || '-'}} </td>\r\n\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"3\">Total </td>\r\n                  <td> {{subject.totalMarks || '-'}} </td>\r\n                  <td colspan=\"6\"> {{subject.obtainedMarks||'-'}} </td>\r\n\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n          <div class=\"text-right\" *ngIf=\"hasAccess\">\r\n            <button mat-raised-button (click)=\"updateResult(subject)\">\r\n              Update\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-md-12\">\r\n          <div class=\"card col-md-6\">\r\n            <div class=\"card-header\">\r\n              <h4>Motivational Awards</h4>\r\n            </div>\r\n            <div class=\"card-body row\">\r\n              <div class=\"\">\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"merit-card\"\r\n                      [checked]=\"_III_termData.motivationalAwards.meritCard == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event,'Merit Card',3)\"> Merit Card </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"half-blue\"\r\n                      [checked]=\"_III_termData.motivationalAwards.halfBlue == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event, 'Half Blue',3)\"> Half Blue </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"blue\"\r\n                      [checked]=\"_III_termData.motivationalAwards.blue == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event,'Blue',3)\"> Blue </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label ><input type=\"checkbox\" name=\"\" id=\"blazer\"\r\n                      [checked]=\"_III_termData.motivationalAwards.blazer == '1'\" [disabled]=\"!hasAccess\"\r\n                      (change)=\"markMotivationalAwards($event,'Blazer',3)\"> Blazer </label>\r\n\r\n                </div>\r\n\r\n                <div class=\"text-right\" *ngIf=\"hasAccess\">\r\n                  <button mat-raised-button (click)=\"updateMotivationalAwards(3)\">\r\n                    Update Motivational Awards\r\n                  </button>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card col-md-6\">\r\n            <div class=\"card-header\">\r\n              <h4>Total Marks in PT</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <h3>\r\n                {{_III_termData.totalObtainedMarks}}\r\n              </h3>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </mat-card-content>\r\n\r\n    </mat-card>\r\n\r\n\r\n\r\n\r\n    <!-- <div class=\"mat-card\">\r\n      <table class=\"tg\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"tg-0lax\" rowspan=\"2\">TEST</th>\r\n            <th class=\"tg-0lax\" colspan=\"3\">SUPER EX</th>\r\n            <th class=\"tg-0lax\">EX</th>\r\n            <th class=\"tg-0lax\">GOOD</th>\r\n            <th class=\"tg-0lax\">SAT</th>\r\n            <th class=\"tg-0lax\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"tg-0lax\"></td>\r\n            <td class=\"tg-0lax\">S/EX-1</td>\r\n            <td class=\"tg-0lax\">S/EX-2</td>\r\n            <td class=\"tg-0lax\">S/EX-3</td>\r\n            <td class=\"tg-0lax\"></td>\r\n            <td class=\"tg-0lax\"></td>\r\n            <td class=\"tg-0lax\"></td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">2.4KM</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">TOTAL MARKS</td>\r\n            <td class=\"tg-0lax\">20</td>\r\n            <td class=\"tg-0lax\">19</td>\r\n            <td class=\"tg-0lax\">17</td>\r\n            <td class=\"tg-0lax\">15</td>\r\n            <td class=\"tg-0lax\">12</td>\r\n            <td class=\"tg-0lax\">9</td>\r\n            <td class=\"tg-0lax\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">C/UP</td>\r\n            <td class=\"tg-0lax\">15</td>\r\n            <td class=\"tg-0lax\">12</td>\r\n            <td class=\"tg-0lax\">10</td>\r\n            <td class=\"tg-0lax\">08</td>\r\n            <td class=\"tg-0lax\">06</td>\r\n            <td class=\"tg-0lax\">04</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">MARKS</td>\r\n            <td class=\"tg-0lax\">20</td>\r\n            <td class=\"tg-0lax\">19</td>\r\n            <td class=\"tg-0lax\">17</td>\r\n            <td class=\"tg-0lax\">15</td>\r\n            <td class=\"tg-0lax\">12</td>\r\n            <td class=\"tg-0lax\">9</td>\r\n            <td class=\"tg-0lax\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">TOE TOUCH</td>\r\n            <td class=\"tg-0lax\">15</td>\r\n            <td class=\"tg-0lax\">12</td>\r\n            <td class=\"tg-0lax\">10</td>\r\n            <td class=\"tg-0lax\">8</td>\r\n            <td class=\"tg-0lax\">6</td>\r\n            <td class=\"tg-0lax\">4</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">MARKS</td>\r\n            <td class=\"tg-0lax\">20</td>\r\n            <td class=\"tg-0lax\">19</td>\r\n            <td class=\"tg-0lax\">17</td>\r\n            <td class=\"tg-0lax\">15</td>\r\n            <td class=\"tg-0lax\">12</td>\r\n            <td class=\"tg-0lax\">9</td>\r\n            <td class=\"tg-0lax\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">5/MTR</td>\r\n            <td class=\"tg-0lax\">20</td>\r\n            <td class=\"tg-0lax\">19</td>\r\n            <td class=\"tg-0lax\">18</td>\r\n            <td class=\"tg-0lax\">16</td>\r\n            <td class=\"tg-0lax\">14</td>\r\n            <td class=\"tg-0lax\">12</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">MARKS</td>\r\n            <td class=\"tg-0lax\">15</td>\r\n            <td class=\"tg-0lax\">14</td>\r\n            <td class=\"tg-0lax\">13</td>\r\n            <td class=\"tg-0lax\">12</td>\r\n            <td class=\"tg-0lax\">9</td>\r\n            <td class=\"tg-0lax\">6</td>\r\n            <td class=\"tg-0lax\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">100 MTR</td>\r\n            <td class=\"tg-0lax\">10 Sec</td>\r\n            <td class=\"tg-0lax\">11 Sec</td>\r\n            <td class=\"tg-0lax\">12 Sec</td>\r\n            <td class=\"tg-0lax\">13 Sec</td>\r\n            <td class=\"tg-0lax\">15 Sec</td>\r\n            <td class=\"tg-0lax\">17 Sec</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">MARKS</td>\r\n            <td class=\"tg-0lax\">10</td>\r\n            <td class=\"tg-0lax\">9</td>\r\n            <td class=\"tg-0lax\">8</td>\r\n            <td class=\"tg-0lax\">7</td>\r\n            <td class=\"tg-0lax\">6</td>\r\n            <td class=\"tg-0lax\">5</td>\r\n            <td class=\"tg-0lax\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">SIT/UP</td>\r\n            <td class=\"tg-0lax\">55</td>\r\n            <td class=\"tg-0lax\">50</td>\r\n            <td class=\"tg-0lax\">45</td>\r\n            <td class=\"tg-0lax\">40</td>\r\n            <td class=\"tg-0lax\">35</td>\r\n            <td class=\"tg-0lax\">30</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">MARKS</td>\r\n            <td class=\"tg-0lax\">15</td>\r\n            <td class=\"tg-0lax\">14</td>\r\n            <td class=\"tg-0lax\">13</td>\r\n            <td class=\"tg-0lax\">12</td>\r\n            <td class=\"tg-0lax\">9</td>\r\n            <td class=\"tg-0lax\">6</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td class=\"tg-0lax\">TOTAL MARKS</td>\r\n            <td class=\"tg-0lax\">100</td>\r\n            <td class=\"tg-0lax\">94</td>\r\n            <td class=\"tg-0lax\">85</td>\r\n            <td class=\"tg-0lax\">76</td>\r\n            <td class=\"tg-0lax\">60</td>\r\n            <td class=\"tg-0lax\">44</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n      <table class=\"tg\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"tg-0pky\" colspan=\"8\">IPET</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"tg-0pky\">TEST</td>\r\n            <td class=\"tg-0pky\"></td>\r\n            <td class=\"tg-0pky\" colspan=\"3\">MANDATORY STDS</td>\r\n            <td class=\"tg-0pky\" colspan=\"2\">HIGHER TEST</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\"></td>\r\n            <td class=\"tg-0pky\">3rd CL ROPE(3 MTR CLIMB)</td>\r\n            <td class=\"tg-0pky\">BACK ROLL</td>\r\n            <td class=\"tg-0pky\">DIVE ROLL</td>\r\n            <td class=\"tg-0pky\">BEAM (2 REP)</td>\r\n            <td class=\"tg-0pky\">A/VAULT (III CL) </td>\r\n            <td class=\"tg-0pky\">CW/F/ROLL</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">MARKS</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <table class=\"tg\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"tg-0pky\" colspan=\"8\">SWM</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"tg-0pky\">TEST</td>\r\n            <td class=\"tg-0pky\">25 MTR SWM</td>\r\n            <td class=\"tg-0pky\">5 MTR JUMP </td>\r\n            <td class=\"tg-0pky\" colspan=\"3\"> (SWM HIGHER TEST)</td>\r\n            <td class=\"tg-0pky\">JUMP (HIGHER TEST) </td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\"></td>\r\n            <td class=\"tg-0pky\"></td>\r\n            <td class=\"tg-0pky\"></td>\r\n            <td class=\"tg-0pky\">50 MTR\r\n              SWM\r\n            </td>\r\n            <td class=\"tg-0pky\">100 MTR\r\n              SWM\r\n            </td>\r\n            <td class=\"tg-0pky\">150 MTR\r\n              SWM\r\n            </td>\r\n            <td class=\"tg-0pky\">6.5 MTR JUMP</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">MARKS</td>\r\n            <td class=\"tg-0pky\">15</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <table class=\"tg\">\r\n        <thead>\r\n          <tr>\r\n            <th colspan=\"8\" class=\"tg-0lax\">SOT</th>\r\n\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"tg-0pky\">GROUP</td>\r\n\r\n            <td class=\"tg-0pky\" colspan=\"3\"> SUPER EX</td>\r\n            <td class=\"tg-0pky\">EX</td>\r\n            <td class=\"tg-0pky\">GOOD </td>\r\n            <td class=\"tg-0pky\">SAT </td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\"></td>\r\n            <td class=\"tg-0pky\">S/EX-1\r\n            </td>\r\n            <td class=\"tg-0pky\">S/EX-2\r\n            </td>\r\n            <td class=\"tg-0pky\">S/EX-3\r\n            </td>\r\n            <td class=\"tg-0pky\"></td>\r\n            <td class=\"tg-0pky\"></td>\r\n\r\n            <td class=\"tg-0pky\"></td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">TIME</td>\r\n            <td class=\"tg-0pky\">1.10 M</td>\r\n            <td class=\"tg-0pky\">1.15 M</td>\r\n            <td class=\"tg-0pky\">1.20 M</td>\r\n            <td class=\"tg-0pky\">1.25 M</td>\r\n            <td class=\"tg-0pky\">1.40 M</td>\r\n            <td class=\"tg-0pky\">1.55 M</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">MARKS</td>\r\n            <td class=\"tg-0pky\">30</td>\r\n            <td class=\"tg-0pky\">28</td>\r\n            <td class=\"tg-0pky\">26</td>\r\n            <td class=\"tg-0pky\">24</td>\r\n            <td class=\"tg-0pky\">18</td>\r\n            <td class=\"tg-0pky\">12</td>\r\n            <td class=\"tg-0pky\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <table class=\"tg\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"tg-0lax\" colspan=\"4\">MOTIVATION AWARDS</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"tg-0lax\">MERIT CARD </td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\" rowspan=\"2\">TOTAL MARKS IN PT </td>\r\n            <td class=\"tg-0lax\" rowspan=\"2\">225</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">HALF BLUE </td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">BLUE</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\" rowspan=\"2\">MARKES OBTAINED </td>\r\n            <td class=\"tg-0lax\" rowspan=\"2\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">BLAZER </td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"box-shadow\">\r\n    <h4 class=\"card-heading\"> <span class=\"sub-menu1\"> ASSESSMENT : PHYSICAL TRAINING - II TERM (EX NDA, EX ACC,\r\n        DE)</span></h4>\r\n  </div>\r\n  <div class=\"main-row row\">\r\n\r\n    <div class=\"mat-card\">\r\n      <div class=\"box-shadow\">\r\n        <h4 class=\"card-heading\"> <span class=\"sub-menu1\"> PPT</span></h4>\r\n      </div>\r\n      <table class=\"tg\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"tg-0lax\" rowspan=\"2\">TEST</th>\r\n            <th class=\"tg-0lax\" colspan=\"3\">SUPER EX</th>\r\n            <th class=\"tg-0lax\">EX</th>\r\n            <th class=\"tg-0lax\">GOOD</th>\r\n            <th class=\"tg-0lax\">SAT</th>\r\n            <th class=\"tg-0lax\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"tg-0lax\"></td>\r\n            <td class=\"tg-0lax\">S/EX-1</td>\r\n            <td class=\"tg-0lax\">S/EX-2</td>\r\n            <td class=\"tg-0lax\">S/EX-3</td>\r\n            <td class=\"tg-0lax\"></td>\r\n            <td class=\"tg-0lax\"></td>\r\n            <td class=\"tg-0lax\"></td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">2.4KM</td>\r\n            <td class=\"tg-0lax\">7.30 M</td>\r\n            <td class=\"tg-0lax\">8 M</td>\r\n            <td class=\"tg-0lax\">8.30 M</td>\r\n            <td class=\"tg-0lax\">9.00 M</td>\r\n            <td class=\"tg-0lax\">9.30 M</td>\r\n            <td class=\"tg-0lax\">10.00 M</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">TOTAL MARKS</td>\r\n            <td class=\"tg-0lax\">20</td>\r\n            <td class=\"tg-0lax\">19</td>\r\n            <td class=\"tg-0lax\">17</td>\r\n            <td class=\"tg-0lax\">15</td>\r\n            <td class=\"tg-0lax\">12</td>\r\n            <td class=\"tg-0lax\">9</td>\r\n            <td class=\"tg-0lax\">Marks obtained</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">C/UP</td>\r\n            <td class=\"tg-0lax\">18</td>\r\n            <td class=\"tg-0lax\">15</td>\r\n            <td class=\"tg-0lax\">12</td>\r\n            <td class=\"tg-0lax\">10</td>\r\n            <td class=\"tg-0lax\">08</td>\r\n            <td class=\"tg-0lax\">06</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">MARKS</td>\r\n            <td class=\"tg-0lax\">20</td>\r\n            <td class=\"tg-0lax\">19</td>\r\n            <td class=\"tg-0lax\">17</td>\r\n            <td class=\"tg-0lax\">15</td>\r\n            <td class=\"tg-0lax\">12</td>\r\n            <td class=\"tg-0lax\">09</td>\r\n            <td class=\"tg-0lax\">Marks obtained</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">TOE TOUCH</td>\r\n            <td class=\"tg-0lax\">15</td>\r\n            <td class=\"tg-0lax\">13</td>\r\n            <td class=\"tg-0lax\">10</td>\r\n            <td class=\"tg-0lax\">8</td>\r\n            <td class=\"tg-0lax\">7</td>\r\n            <td class=\"tg-0lax\">6</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">MARKS</td>\r\n            <td class=\"tg-0lax\">20</td>\r\n            <td class=\"tg-0lax\">19</td>\r\n            <td class=\"tg-0lax\">17</td>\r\n            <td class=\"tg-0lax\">15</td>\r\n            <td class=\"tg-0lax\">12</td>\r\n            <td class=\"tg-0lax\">9</td>\r\n            <td class=\"tg-0lax\">Marks obtained</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">5/MTR</td>\r\n            <td class=\"tg-0lax\">20</td>\r\n            <td class=\"tg-0lax\">19</td>\r\n            <td class=\"tg-0lax\">18</td>\r\n            <td class=\"tg-0lax\">16</td>\r\n            <td class=\"tg-0lax\">15</td>\r\n            <td class=\"tg-0lax\">14</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">MARKS</td>\r\n            <td class=\"tg-0lax\">15</td>\r\n            <td class=\"tg-0lax\">14</td>\r\n            <td class=\"tg-0lax\">13</td>\r\n            <td class=\"tg-0lax\">12</td>\r\n            <td class=\"tg-0lax\">9</td>\r\n            <td class=\"tg-0lax\">6</td>\r\n            <td class=\"tg-0lax\">Marks obtained</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">100 MTR</td>\r\n            <td class=\"tg-0lax\">10 Sec</td>\r\n            <td class=\"tg-0lax\">11 Sec</td>\r\n            <td class=\"tg-0lax\">12 Sec</td>\r\n            <td class=\"tg-0lax\">13 Sec</td>\r\n            <td class=\"tg-0lax\">14 Sec</td>\r\n            <td class=\"tg-0lax\">15 Sec</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">MARKS</td>\r\n            <td class=\"tg-0lax\">10</td>\r\n            <td class=\"tg-0lax\">9</td>\r\n            <td class=\"tg-0lax\">8</td>\r\n            <td class=\"tg-0lax\">7</td>\r\n            <td class=\"tg-0lax\">6</td>\r\n            <td class=\"tg-0lax\">5</td>\r\n            <td class=\"tg-0lax\">Marks obtained</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">SIT/UP</td>\r\n            <td class=\"tg-0lax\">55</td>\r\n            <td class=\"tg-0lax\">50</td>\r\n            <td class=\"tg-0lax\">45</td>\r\n            <td class=\"tg-0lax\">40</td>\r\n            <td class=\"tg-0lax\">35</td>\r\n            <td class=\"tg-0lax\">30</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">MARKS</td>\r\n            <td class=\"tg-0lax\">15</td>\r\n            <td class=\"tg-0lax\">14</td>\r\n            <td class=\"tg-0lax\">13</td>\r\n            <td class=\"tg-0lax\">12</td>\r\n            <td class=\"tg-0lax\">9</td>\r\n            <td class=\"tg-0lax\">6</td>\r\n            <td class=\"tg-0lax\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td class=\"tg-0lax\">TOTAL MARKS</td>\r\n            <td class=\"tg-0lax\">100</td>\r\n            <td class=\"tg-0lax\">94</td>\r\n            <td class=\"tg-0lax\">85</td>\r\n            <td class=\"tg-0lax\">76</td>\r\n            <td class=\"tg-0lax\">60</td>\r\n            <td class=\"tg-0lax\">44</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n      <table class=\"tg\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"tg-0pky\" colspan=\"8\">IPET</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"tg-0pky\">TEST</td>\r\n            <td class=\"tg-0pky\"></td>\r\n            <td class=\"tg-0pky\" colspan=\"2\">MANDATORY STDS</td>\r\n            <td class=\"tg-0pky\" colspan=\"2\">HIGHER TEST</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\"></td>\r\n            <td class=\"tg-0pky\">III CL ROPE</td>\r\n            <td class=\"tg-0pky\">BEAM(4 REP)</td>\r\n            <td class=\"tg-0pky\">A/VAULT (III CL)</td>\r\n            <td class=\"tg-0pky\">II CL ROPE</td>\r\n            <td class=\"tg-0pky\">T/VAULT (III CL) </td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">MARKS</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">Marks obtained</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <table class=\"tg\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"tg-0pky\" colspan=\"8\">SWM</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"tg-0pky\">TEST</td>\r\n            <td class=\"tg-0pky\">35 MTR SWM</td>\r\n            <td class=\"tg-0pky\">6.5 MTR JUMP </td>\r\n            <td class=\"tg-0pky\" colspan=\"4\"> SWM (HIGHER TEST)</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\"></td>\r\n            <td class=\"tg-0pky\"></td>\r\n            <td class=\"tg-0pky\"></td>\r\n            <td class=\"tg-0pky\">100 MTR\r\n              SWM\r\n            </td>\r\n            <td class=\"tg-0pky\">150 MTR\r\n              SWM\r\n            </td>\r\n            <td class=\"tg-0pky\">200 MTR\r\n              SWM\r\n            </td>\r\n            <td class=\"tg-0pky\">10 MTR JUMP</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">MARKS</td>\r\n            <td class=\"tg-0pky\">15</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">Marks obtained</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <table class=\"tg sports\">\r\n        <thead>\r\n          <th class=\"tg-0pky\" colspan=\"8\">CTOT</th>\r\n        </thead>\r\n        <tr>\r\n          <td class=\"tg-0lax\">TEST</td>\r\n          <td class=\"tg-0lax\">HAND & FOOT BRIDGE </td>\r\n          <td class=\"tg-0lax\">HIGH LADDER </td>\r\n          <td class=\"tg-0lax\">CIRCUS </td>\r\n          <td class=\"tg-0lax\">TARZAN HANDWALK </td>\r\n          <td class=\"tg-0lax\">SCRAMBLE NET </td>\r\n          <td class=\"tg-0lax\">IMA LADDER </td>\r\n          <td class=\"tg-0lax\"></td>\r\n        </tr>\r\n\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"tg-0lax bold\">MARKS</td>\r\n            <td class=\"tg-0lax\">5</td>\r\n            <td class=\"tg-0lax\">5</td>\r\n            <td class=\"tg-0lax\">5</td>\r\n            <td class=\"tg-0lax\">5</td>\r\n            <td class=\"tg-0lax\">5</td>\r\n            <td class=\"tg-0lax\">5</td>\r\n            <td class=\"tg-0lax\">Marks obtained</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax bold\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\" name=\"\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\" name=\"\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\" name=\"\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\" name=\"\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\" name=\"\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\" name=\"\"></td>\r\n            <td class=\"tg-0lax\"><input type=\"text\" name=\"\"></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <table class=\"tg\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"tg-0lax\" colspan=\"4\">MOTIVATION AWARDS</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"tg-0lax\">MERIT CARD </td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\" rowspan=\"2\">TOTAL MARKS IN PT </td>\r\n            <td class=\"tg-0lax\" rowspan=\"2\">225</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">HALF BLUE </td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">BLUE</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n            <td class=\"tg-0lax\" rowspan=\"2\">MARKS OBTAINED</td>\r\n            <td class=\"tg-0lax\" rowspan=\"2\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">BLAZER </td>\r\n            <td class=\"tg-0lax\"><input type=\"text\"></td>\r\n\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"box-shadow\">\r\n    <h4 class=\"card-heading\"> <span class=\"sub-menu1\">ASSESSMENT : PHYSICAL TRAINING - III TERM& III TECH (EX NDA, EX\r\n        ACC, DE)</span></h4>\r\n  </div>\r\n\r\n  <div class=\"main-row row\">\r\n    <div class=\"mat-card\">\r\n      <div class=\"box-shadow\">\r\n        <h4 class=\"card-heading\"> <span class=\"sub-menu1\"> BPET</span></h4>\r\n      </div>\r\n      <table class=\"tg\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"tg-c3ow\" colspan=\"14\">BPET</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"tg-0pky\">TEST</td>\r\n            <td class=\"tg-c3ow\" colspan=\"3\">SUPER EX</td>\r\n            <td class=\"tg-c3ow\" colspan=\"3\">EX</td>\r\n            <td class=\"tg-c3ow\" colspan=\"3\">GOOD</td>\r\n            <td class=\"tg-c3ow\" colspan=\"3\">SAT</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\"></td>\r\n            <td class=\"tg-0pky\">S/EX-1</td>\r\n            <td class=\"tg-0pky\">S/EX-2</td>\r\n            <td class=\"tg-0pky\">S/EX-3</td>\r\n            <td class=\"tg-0pky\">EX-1</td>\r\n            <td class=\"tg-0pky\">EX-2</td>\r\n            <td class=\"tg-0pky\">EX-3</td>\r\n            <td class=\"tg-0pky\">GD-1</td>\r\n            <td class=\"tg-0pky\">GD-2</td>\r\n            <td class=\"tg-0pky\">GD-3</td>\r\n            <td class=\"tg-0pky\">SAT-1</td>\r\n            <td class=\"tg-0pky\">SAT-2</td>\r\n            <td class=\"tg-0pky\">SAT-3</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">5 KM</td>\r\n            <td class=\"tg-0pky\">21.30M</td>\r\n            <td class=\"tg-0pky\">22 M</td>\r\n            <td class=\"tg-0pky\">22.30M</td>\r\n            <td class=\"tg-0pky\">23 M</td>\r\n            <td class=\"tg-0pky\">24 M</td>\r\n            <td class=\"tg-0pky\">25 M</td>\r\n            <td class=\"tg-0pky\">25.30 M</td>\r\n            <td class=\"tg-0pky\">26 M</td>\r\n            <td class=\"tg-0pky\">26.3O M</td>\r\n            <td class=\"tg-0pky\">27 M</td>\r\n            <td class=\"tg-0pky\">27.30 M</td>\r\n            <td class=\"tg-0pky\">28 M</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">MARKS</td>\r\n            <td class=\"tg-0pky\">25</td>\r\n            <td class=\"tg-0pky\">24</td>\r\n            <td class=\"tg-0pky\">23</td>\r\n            <td class=\"tg-0pky\">22</td>\r\n            <td class=\"tg-0pky\">21</td>\r\n            <td class=\"tg-0pky\">20</td>\r\n            <td class=\"tg-0pky\">19</td>\r\n            <td class=\"tg-0pky\">17</td>\r\n            <td class=\"tg-0pky\">15</td>\r\n            <td class=\"tg-0pky\">14</td>\r\n            <td class=\"tg-0pky\">12</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">MARSK OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">CLEARED IN <br>(M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">60 MTR</td>\r\n            <td class=\"tg-0pky\">7 Sec</td>\r\n            <td class=\"tg-0pky\">8 Sec</td>\r\n            <td class=\"tg-0pky\">9 sec</td>\r\n            <td class=\"tg-c3ow\" colspan=\"3\">10 sec</td>\r\n            <td class=\"tg-c3ow\" colspan=\"3\">11 Sec</td>\r\n            <td class=\"tg-c3ow\" colspan=\"3\">12 Sec</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">MARKS</td>\r\n            <td class=\"tg-c3ow\">15</td>\r\n            <td class=\"tg-c3ow\">14</td>\r\n            <td class=\"tg-c3ow\">13</td>\r\n            <td class=\"tg-c3ow\" colspan=\"3\">12</td>\r\n            <td class=\"tg-c3ow\" colspan=\"3\">9</td>\r\n            <td class=\"tg-c3ow\" colspan=\"3\">6</td>\r\n            <td class=\"tg-0pky\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">CLEARED IN <br>(M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">V/ROPE</td>\r\n            <td class=\"tg-c3ow\">1st CL UP</td>\r\n            <td class=\"tg-0pky\">1 st&nbsp;&nbsp;CL UP</td>\r\n            <td class=\"tg-0pky\">2ND CL UP</td>\r\n            <td class=\"tg-c3ow\" colspan=\"9\" rowspan=\"2\"> <textarea style=\"    text-align: center;\" width=\"100%\"\r\n                cols=\"20\" class=\"form-control\">PASS</textarea></td>\r\n            <td class=\"tg-0pky\" rowspan=\"2\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">4 MTR CLIMB</td>\r\n            <td class=\"tg-0pky\">1st CL DOWN</td>\r\n            <td class=\"tg-0pky\">2ND CL DOWN</td>\r\n            <td class=\"tg-c3ow\">2ND CL DOWN</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">MARKS</td>\r\n            <td class=\"tg-c3ow\">15</td>\r\n            <td class=\"tg-c3ow\">14</td>\r\n            <td class=\"tg-c3ow\">13</td>\r\n            <td class=\"tg-0pky\" colspan=\"9\">12</td>\r\n            <td class=\"tg-0pky\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">CLEARED IN <br>(M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">H/ROPE</td>\r\n            <td class=\"tg-c3ow\" colspan=\"4\">EX</td>\r\n            <td class=\"tg-c3ow\" colspan=\"4\">GOOD</td>\r\n            <td class=\"tg-c3ow\" colspan=\"4\">SAT</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">9 MTR</td>\r\n            <td class=\"tg-0pky\" colspan=\"4\">CLIMB ONE TIME AND 9 MTR TRAVEL AND 3 TIME UP</td>\r\n            <td class=\"tg-0pky\" colspan=\"4\">CLIMB ONE TIME AND 9 MTR TRAVEL AND 2 TIME UP</td>\r\n            <td class=\"tg-0pky\" colspan=\"4\">CLIMB ONE TIME AND 9 MTR TRAVEL </td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">MARKS</td>\r\n            <td class=\"tg-c3ow\" colspan=\"4\">10</td>\r\n            <td class=\"tg-c3ow\" colspan=\"4\">8</td>\r\n            <td class=\"tg-c3ow\" colspan=\"4\">6</td>\r\n            <td class=\"tg-0pky\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">CLEARED IN <br>(M1/M2/C1/C2)</td>\r\n            <td class=\"tg-c3ow\" colspan=\"4\"></td>\r\n            <td class=\"tg-c3ow\" colspan=\"4\"></td>\r\n            <td class=\"tg-c3ow\" colspan=\"4\"></td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td class=\"tg-c3ow\">9' DITCH</td>\r\n            <td class=\"tg-c3ow\" colspan=\"12\"><textarea style=\"    text-align: center;\" width=\"100%\" cols=\"20\"\r\n                class=\"form-control\">PASS</textarea></td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">MARKS</td>\r\n            <td class=\"tg-c3ow\" colspan=\"12\">10</td>\r\n            <td class=\"tg-0pky\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">CLEARED IN <br>(M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\" colspan=\"12\"></td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">TOTAL MARKS</td>\r\n            <td class=\"tg-0pky\">75</td>\r\n            <td class=\"tg-0pky\">72</td>\r\n            <td class=\"tg-0pky\">69</td>\r\n            <td class=\"tg-0pky\">66</td>\r\n            <td class=\"tg-0pky\">65</td>\r\n            <td class=\"tg-0pky\">64</td>\r\n            <td class=\"tg-0pky\">60</td>\r\n            <td class=\"tg-0pky\">58</td>\r\n            <td class=\"tg-0pky\">56</td>\r\n            <td class=\"tg-0pky\">52</td>\r\n            <td class=\"tg-0pky\">50 </td>\r\n            <td class=\"tg-0pky\">48</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n      <table class=\"tg\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"tg-c3ow\" colspan=\"8\">PPT</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"tg-0pky\">TEST</td>\r\n            <td class=\"tg-0pky\" colspan=\"3\">SUPER EX</td>\r\n\r\n            <td class=\"tg-0pky\">EX</td>\r\n            <td class=\"tg-0pky\">GOOD</td>\r\n            <td class=\"tg-0pky\">SAT</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\">S/EX-1</td>\r\n            <td class=\"tg-0pky\">S/EX-2</td>\r\n            <td class=\"tg-0pky\">S/EX-3</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">2.4 KM</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">MARKS</td>\r\n            <td class=\"tg-0pky\">12</td>\r\n            <td class=\"tg-0pky\">11</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">8</td>\r\n            <td class=\"tg-0pky\">6</td>\r\n            <td class=\"tg-0pky\">4</td>\r\n            <td class=\"tg-0pky\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">CLEARED IN<br> (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">TOE TOUCH</td>\r\n            <td class=\"tg-0pky\">15</td>\r\n            <td class=\"tg-0pky\">13</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">8</td>\r\n            <td class=\"tg-0pky\">7</td>\r\n            <td class=\"tg-0pky\">6</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">MARKS</td>\r\n            <td class=\"tg-0pky\">12</td>\r\n            <td class=\"tg-0pky\">11</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">8</td>\r\n            <td class=\"tg-0pky\">6</td>\r\n            <td class=\"tg-0pky\">4</td>\r\n            <td class=\"tg-0pky\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">CLEARED IN <br>(M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">C/UP</td>\r\n            <td class=\"tg-0pky\">18</td>\r\n            <td class=\"tg-0pky\">15</td>\r\n            <td class=\"tg-0pky\">12</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">8</td>\r\n            <td class=\"tg-0pky\">6</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">MARKS</td>\r\n            <td class=\"tg-0pky\">12</td>\r\n            <td class=\"tg-0pky\">11</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">8</td>\r\n            <td class=\"tg-0pky\">6</td>\r\n            <td class=\"tg-0pky\">4</td>\r\n            <td class=\"tg-0pky\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">CLEARED IN <br>(M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">5/MTR</td>\r\n            <td class=\"tg-0pky\">20</td>\r\n            <td class=\"tg-0pky\">19</td>\r\n            <td class=\"tg-0pky\">18</td>\r\n            <td class=\"tg-0pky\">17</td>\r\n            <td class=\"tg-0pky\">16</td>\r\n            <td class=\"tg-0pky\">15</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">MARKS</td>\r\n            <td class=\"tg-0pky\">11</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">9</td>\r\n            <td class=\"tg-0pky\">8</td>\r\n            <td class=\"tg-0pky\">6</td>\r\n            <td class=\"tg-0pky\">4</td>\r\n            <td class=\"tg-0pky\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">CLEARED IN <br>(M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">100 MTR</td>\r\n            <td class=\"tg-0pky\">10 SEC</td>\r\n            <td class=\"tg-0pky\">11 SEC</td>\r\n            <td class=\"tg-0pky\">12 SEC</td>\r\n            <td class=\"tg-0pky\">13 SEC</td>\r\n            <td class=\"tg-0pky\">14 SEC</td>\r\n            <td class=\"tg-0pky\">15 SEC</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">MARKS</td>\r\n            <td class=\"tg-0pky\">9</td>\r\n            <td class=\"tg-0pky\">8</td>\r\n            <td class=\"tg-0pky\">7</td>\r\n            <td class=\"tg-0pky\">6</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">4</td>\r\n            <td class=\"tg-0pky\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">CLEARED IN <br>(M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">SIT/UP</td>\r\n            <td class=\"tg-0pky\">55</td>\r\n            <td class=\"tg-0pky\">50</td>\r\n            <td class=\"tg-0pky\">45</td>\r\n            <td class=\"tg-0pky\">40</td>\r\n            <td class=\"tg-0pky\">35</td>\r\n            <td class=\"tg-0pky\">50</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">MARKS</td>\r\n            <td class=\"tg-0pky\">9</td>\r\n            <td class=\"tg-0pky\">8</td>\r\n            <td class=\"tg-0pky\">7</td>\r\n            <td class=\"tg-0pky\">6</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">4</td>\r\n            <td class=\"tg-0pky\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">CLEARED IN <br>(M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">2nd CL Rope (4 Mtr Climb)</td>\r\n            <td class=\"tg-0pky\" colspan=\"6\"> <textarea style=\"    text-align: center;\" width=\"100%\" cols=\"20\"\r\n                class=\"form-control\">PASS</textarea></td>\r\n\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">MARKS</td>\r\n            <td class=\"tg-0pky\" colspan=\"6\">10</td>\r\n            <td class=\"tg-0pky\">MARKS OBTAINED</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-c3ow\">CLEARED IN <br>(M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\" colspan=\"6\"></td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">TOTAL</td>\r\n            <td class=\"tg-0pky\">75</td>\r\n            <td class=\"tg-0pky\">69</td>\r\n            <td class=\"tg-0pky\">63</td>\r\n            <td class=\"tg-0pky\">54</td>\r\n            <td class=\"tg-0pky\">44</td>\r\n            <td class=\"tg-0pky\">34</td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n      <table class=\"tg\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"tg-0pky\" colspan=\"14\">SWM</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"tg-0pky\">TEST</td>\r\n            <td class=\"tg-0pky\">50 MTR SWM</td>\r\n            <td class=\"tg-0pky\">10 MTR JUMP </td>\r\n            <td class=\"tg-0pky\" colspan=\"4\"> SWM HIGHER TEST)</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\"><input type=\"text\"></td>\r\n            <td class=\"tg-0pky\">100 MTR\r\n              SWM\r\n            </td>\r\n            <td class=\"tg-0pky\">150 MTR\r\n              SWM\r\n            </td>\r\n            <td class=\"tg-0pky\">200 MTR\r\n              SWM\r\n            </td>\r\n            <td class=\"tg-0pky\">250 MTR SWM</td>\r\n            <td class=\"tg-0pky\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">MARKS</td>\r\n            <td class=\"tg-0pky\">15</td>\r\n            <td class=\"tg-0pky\">10</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">5</td>\r\n            <td class=\"tg-0pky\">Marks obtained</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0pky\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\" colspan=\"7\"></td>\r\n\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <table class=\"tg\">\r\n        <thead>\r\n          <tr>\r\n            <th colspan=\"14\" class=\"tg-0lax\">ROT</th>\r\n\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"tg-0lax\">TEST</td>\r\n            <td class=\"tg-0lax\" colspan=\"3\">SUPER EX</td>\r\n            <td class=\"tg-0lax\" colspan=\"3\">EX</td>\r\n            <td class=\"tg-0lax\" colspan=\"3\">GOOD</td>\r\n            <td class=\"tg-0lax\" colspan=\"3\">SAT</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\"></td>\r\n            <td class=\"tg-0lax\">S/EX-1</td>\r\n            <td class=\"tg-0lax\">S/EX-2</td>\r\n            <td class=\"tg-0lax\">S/EX-3</td>\r\n            <td class=\"tg-0lax\">EX-1</td>\r\n            <td class=\"tg-0lax\">EX-2</td>\r\n            <td class=\"tg-0lax\">EX-3</td>\r\n            <td class=\"tg-0lax\">GD-1</td>\r\n            <td class=\"tg-0lax\">GD-2</td>\r\n            <td class=\"tg-0lax\">GD-3</td>\r\n            <td class=\"tg-0lax\">SAT-1</td>\r\n            <td class=\"tg-0lax\">SAT-2</td>\r\n            <td class=\"tg-0lax\">SAT-3</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">TIME</td>\r\n            <td class=\"tg-0lax\">2.50 M</td>\r\n            <td class=\"tg-0lax\">2.55 M</td>\r\n            <td class=\"tg-0lax\">3 M</td>\r\n            <td class=\"tg-0lax\">3.15 M</td>\r\n            <td class=\"tg-0lax\">3.30 M</td>\r\n            <td class=\"tg-0lax\">3.45 M</td>\r\n            <td class=\"tg-0lax\">4 M</td>\r\n            <td class=\"tg-0lax\">4.15 M</td>\r\n            <td class=\"tg-0lax\">4.30 M</td>\r\n            <td class=\"tg-0lax\">4.45</td>\r\n            <td class=\"tg-0lax\">5 M</td>\r\n            <td class=\"tg-0lax\">5.15 M</td>\r\n            <td class=\"tg-0lax\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">MARKS</td>\r\n            <td class=\"tg-0lax\">30</td>\r\n            <td class=\"tg-0lax\">28</td>\r\n            <td class=\"tg-0lax\">27</td>\r\n            <td class=\"tg-0lax\">26</td>\r\n            <td class=\"tg-0lax\">25</td>\r\n            <td class=\"tg-0lax\">24</td>\r\n            <td class=\"tg-0lax\">22</td>\r\n            <td class=\"tg-0lax\">20</td>\r\n            <td class=\"tg-0lax\">18</td>\r\n            <td class=\"tg-0lax\">16</td>\r\n            <td class=\"tg-0lax\">14</td>\r\n            <td class=\"tg-0lax\">12</td>\r\n\r\n            <td class=\"tg-0lax\">Marks obtained</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"\">CLEARED IN (M1/M2/C1/C2)</td>\r\n            <td class=\"tg-0pky\" colspan=\"13\"></td>\r\n\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <table class=\"tg\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"tg-0lax\" colspan=\"4\">MOTIVATION AWARDS</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"tg-0lax\">MERIT CARD </td>\r\n            <td class=\"tg-0lax\"><input type=\"text\" name=\"\"></td>\r\n            <td class=\"tg-0lax\" rowspan=\"2\">TOTAL MARKS IN PT </td>\r\n            <td class=\"tg-0lax\" rowspan=\"2\">225</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">HALF BLUE </td>\r\n            <td class=\"tg-0lax\"><input type=\"text\" name=\"\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">BLUE</td>\r\n            <td class=\"tg-0lax\"><input type=\"text\" name=\"\"></td>\r\n            <td class=\"tg-0lax\" rowspan=\"2\">MARKES OBTAINED</td>\r\n            <td class=\"tg-0lax\" rowspan=\"2\"><input type=\"text\" name=\"\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"tg-0lax\">BLAZER </td>\r\n            <td class=\"tg-0lax\"><input type=\"text\" name=\"\"></td>\r\n\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n<!-- </html> -->");

/***/ })

}]);