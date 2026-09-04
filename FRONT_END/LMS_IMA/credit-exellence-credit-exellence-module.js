(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["credit-exellence-credit-exellence-module"],{

/***/ "0M0V":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/assessment/credit-exellence/credit-exellence.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CreditExellenceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditExellenceModule", function() { return CreditExellenceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _credit_exellence_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./credit-exellence.component */ "rh7G");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _credit_exellence_component__WEBPACK_IMPORTED_MODULE_4__["CreditExellenceComponent"]
    },
    {
        path: 'add-credit',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-credit-exellence-add-credit-exellence-module */ "add-credit-exellence-add-credit-exellence-module").then(__webpack_require__.bind(null, /*! ./add-credit-exellence/add-credit-exellence.module */ "hmJX")).then(function (m) { return m.AddCreditExellenceModule; }); }
    },
    {
        path: 'view-credit',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-credit-exellence-add-credit-exellence-module */ "add-credit-exellence-add-credit-exellence-module").then(__webpack_require__.bind(null, /*! ./add-credit-exellence/add-credit-exellence.module */ "hmJX")).then(function (m) { return m.AddCreditExellenceModule; }); }
    }
];
var CreditExellenceModule = /** @class */ (function () {
    function CreditExellenceModule() {
    }
    CreditExellenceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _credit_exellence_component__WEBPACK_IMPORTED_MODULE_4__["CreditExellenceComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], CreditExellenceModule);
    return CreditExellenceModule;
}());



/***/ }),

/***/ "ABBM":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/assessment/credit-exellence/credit-exellence.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div#top-bar {\n  background: #4c5041;\n  padding: 5px 15px;\n  color: #fff;\n}\n\ndiv#top-bar h2 {\n  font-size: 19px;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #bb9450;\n  background: #e1e3de;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle !important;\n  font-weight: bold !important;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: normal;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.modal-content {\n  max-width: 100% !important;\n}\n\n.open-button {\n  background-color: #555;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 280px;\n}\n\n/* The popup form - hidden by default */\n\n.form-popup {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}\n\n/* Add styles to the form container */\n\n.form-container {\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n}\n\n/* Full-width input fields */\n\n.form-container input[type=text], .form-container input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* When the inputs get focus, do something */\n\n.form-container input[type=text]:focus, .form-container input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for the submit/login button */\n\n.form-container .btn {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom: 10px;\n  opacity: 0.8;\n}\n\n/* Add a red background color to the cancel button */\n\n.form-container .cancel {\n  background-color: red;\n}\n\n/* Add some hover effects to buttons */\n\n.form-container .btn:hover, .open-button:hover {\n  opacity: 1;\n}\n\n.custom-lg {\n  max-width: unset;\n  margin: 0px;\n  border-radius: 1px;\n}\n\n.custom-lg .modal-content {\n  border-radius: 0px;\n}\n\n.oq-matrix-form {\n  overflow-x: scroll;\n}\n\n.modal-dialog-scrollable {\n  max-height: 100%;\n}\n\n.modal-dialog-scrollable .modal-content {\n  max-height: 100%;\n}");

/***/ }),

/***/ "rh7G":
/*!************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/assessment/credit-exellence/credit-exellence.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CreditExellenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditExellenceComponent", function() { return CreditExellenceComponent; });
/* harmony import */ var _raw_loader_credit_exellence_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./credit-exellence.component.html */ "ynEc");
/* harmony import */ var _credit_exellence_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credit-exellence.component.scss */ "ABBM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/academic-dept/academic-dept.service */ "1ABS");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/observable/of */ "G4OQ");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CreditExellenceComponent = /** @class */ (function () {
    function CreditExellenceComponent(dialog, spinner, route, fb, router, academicservice, adminservice, cdref, activeRoute) {
        var _this = this;
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.academicservice = academicservice;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.creditForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.pageTitle = "Add Campmark";
        this.id = '';
        this.creditSubjectList = [];
        this.displayStyle = "none";
        this.totalmarks = 0;
        this.pageSize = 50;
        this.currentPage = 0;
        this.battalionList = [];
        this.companyList = [];
        this.battalionName = '0';
        this.route.params.subscribe(function (params) {
            document.addEventListener("keydown", function (event) {
                if (event.ctrlKey) {
                    event.preventDefault();
                }
            });
            _this.term = params.term;
            if (_this.term == "I Term") {
                _this.termId = 1;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
            }
            else if (_this.term == "II Term") {
                _this.termId = 2;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
            }
            else if (_this.term == "III Term") {
                _this.termId = 3;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
            }
            else if (_this.term == "II Tech") {
                _this.termId = 7;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
            }
            _this.getCreditSubjectList();
            if (_this.resultsLength == 0) {
                _this.creditCadetList = null;
            }
            if (_this.companyName == undefined || _this.companyName == null || _this.companyName == '' || _this.companyName == 0) {
                _this.getCreditAllCadetlist();
            }
            else {
                _this.getLeaderShipBCName();
            }
            _this.adminservice.getBattalionList().subscribe(function (res) {
                _this.spinner.show();
                if (res.status == 'OK') {
                    _this.battalionList = res.object;
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
            });
        });
        this.creditForm = this.fb.group({
            serialNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalian: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termSession: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cadetRank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    CreditExellenceComponent.prototype.blockPaste = function (e) {
        e.preventDefault();
    };
    CreditExellenceComponent.prototype.ngOnInit = function () {
    };
    CreditExellenceComponent.prototype.clearSearch = function () {
        if (this.battalionList.length || this.companyList.length || this.serviceid) {
            this.companyList = [];
            this.battalion = '0';
            this.company = '0';
            this.serviceid = '';
            this.allData();
        }
    };
    CreditExellenceComponent.prototype.getLeaderShipBCName = function () {
    };
    CreditExellenceComponent.prototype.allData = function () {
        var _this = this;
        this.academicservice.getCREDIT_list(this.termId, this.currentPage, this.pageSize).subscribe(function (res) {
            console.log(res);
            if (res.message == 'Record not found') {
                _this.spinner.hide();
                _this.academicservice.openSnackbar(res.message);
            }
            if (res.message == 'OK') {
                _this.creditCadetList = res.object.creditExcellenceFilterPayload;
                if (res.object.creditExcellenceFilterPayload.length > 0) {
                    _this.resultsLength = res.object.totalRecords;
                    _this.creditCadetList = res.object.creditExcellenceFilterPayload;
                }
                else {
                    _this.creditCadetList = [];
                }
                _this.cdref.detectChanges();
            }
            else {
                _this.creditCadetList = [];
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.academicservice.openSnackbar("Some Error Occured.");
        });
    };
    CreditExellenceComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        this.battalionName = e;
        this.companyName = null;
        if (this.battalionName == '0') {
            this.battalionId = null;
            this.companyName = null;
        }
        if (this.battalionName == 'CA') {
            this.battalionId = 1;
        }
        else if (this.battalionName == "TH") {
            this.battalionId = 2;
        }
        else if (this.battalionName == "MA") {
            this.battalionId = 3;
        }
        else if (this.battalionName == "BH") {
            this.battalionId = 4;
        }
        this.spinner.show();
        if (this.battalionId != null || this.battalionName != '0') {
            this.academicservice.getCompanyList(this.battalionId).subscribe(function (res) {
                _this.spinner.show();
                console.log(res);
                if (res.status == 'OK') {
                    _this.companyList = res.object;
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
            });
        }
        else {
            this.companyList = [];
            this.companyName = null;
        }
        this.companyList = [];
        this.getCreditAllCadetlist();
    };
    CreditExellenceComponent.prototype.companySelected = function (e) {
        this.companyName = e;
        if (this.companyName == 0) {
            this.getSpecialAllList();
            this.companyName = null;
        }
        else {
            if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
                this.getCreditAllCadetlist();
            }
        }
        this.getCreditAllCadetlist();
    };
    CreditExellenceComponent.prototype.getSpecialAllList = function () {
        var _this = this;
        this.academicservice.getCredit_All_ListByBCNameComp(this.termId, this.currentPage, this.pageSize, this.battalionName).subscribe(function (res) {
            console.log(res);
            if (res.message == 'OK') {
                _this.resultsLength = res.object.totalRecords;
                _this.creditCadetList = res.object.eqtnFilterPayload;
            }
            else {
                _this.creditCadetList = [];
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.academicservice.openSnackbar("Some Error Occured.");
        });
    };
    CreditExellenceComponent.prototype.ngAfterViewInit = function () {
        // this.getCreditAllCadetlist();
    };
    CreditExellenceComponent.prototype.onChange = function (e, value, totalMarks, sub_id, mainIndex, subIndex) {
        if (value > totalMarks || value == NaN) {
            this.adminservice.openSnackbar("Obtained marks is greater than total marks");
            value = '';
            e.target.value = null;
        }
        else if (value == "") {
            this.creditCadetList[mainIndex].academicCreditForExcellenceResult.creditExcellenceSubResult[subIndex].obtainedMarks = '';
            return false;
        }
        else {
            var total = document.getElementById(mainIndex).value;
            if (total) {
                document.getElementById(mainIndex).value = parseInt(total) + (value == '' ? 0 : parseInt(value)) + "";
                this.creditCadetList[mainIndex].academicCreditForExcellenceResult.obtainedMarks = parseInt(total) + (value == '' ? 0 : parseInt(value));
            }
            else {
                document.getElementById(mainIndex).value = value;
                this.creditCadetList[mainIndex].academicCreditForExcellenceResult.obtainedMarks = (value == '' ? 0 : parseInt(value));
            }
            this.creditCadetList[mainIndex].academicCreditForExcellenceResult.creditExcellenceSubResult[subIndex].obtainedMarks = value;
        }
        console.log('%%%%%%%%%%%%%%%%%%%%%%', this.creditCadetList);
        // this.creditCadetList
    };
    CreditExellenceComponent.prototype.onFocusEvent = function (value, mainIndex) {
        if (value == NaN || value == '' || value == undefined) {
            return false;
        }
        var total = document.getElementById(mainIndex).value;
        if (total) {
            var temp = parseInt(total) - parseInt(value);
            document.getElementById(mainIndex).value = parseInt(total) + parseInt(value) + "";
            this.creditCadetList[mainIndex].academicCreditForExcellenceResult.obtainedMarks = temp == 0 ? null : temp;
        }
        else {
            document.getElementById(mainIndex).value = value;
            this.creditCadetList[mainIndex].academicCreditForExcellenceResult.obtainedMarks = value;
        }
        // this.obtainedTotalMarks -= parseInt(val);
        if (this.obtainedTotalMarks == NaN) {
            this.obtainedTotalMarks = 0;
            if (this.obtainedTotalMarks == 0) {
                this.obtainedTotalMarks = '';
            }
        }
    };
    CreditExellenceComponent.prototype.confirm = function () {
        var _this = this;
        this.spinner.show();
        this.creditForm.value == this.totalMarks1;
        this.totalMarks1 = Object.assign({}, this.creditForm.value, { obtainedMarks: this.obtainedTotalMarks });
        var formdata = this.creditCadetList;
        console.log(formdata);
        this.academicservice.updateCREDIT(formdata).subscribe(function (res) {
            if (res.message == "Record updated successfully") {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Updated Successfully");
                window.location.reload();
            }
            else {
                (function (err) {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar("Some Error Occured.");
                });
            }
        });
    };
    CreditExellenceComponent.prototype.getCreditSubjectList = function () {
        var _this = this;
        this.spinner.show();
        this.academicservice.getCREDIT_Subject(1).subscribe(function (res) {
            console.log(res, "========getCREDIT_Subject=========");
            if (res.status == "OK") {
                _this.creditSubjectList = res.object;
                _this.subjectSize = res.object.length;
                console.log(_this.subjectSize, "this.subjectSizethis.subjectSize");
                _this.spinner.hide();
                _this.cdref.detectChanges();
                console.log(res, "========getCREDIT_Subject=========");
            }
            else {
                _this.spinner.hide();
                _this.academicservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.academicservice.openSnackbar("Some Error Occured.");
        });
    };
    CreditExellenceComponent.prototype.serviceSearch = function (e) {
        this.serviceid = e;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this.getCreditAllCadetlist();
        }
    };
    CreditExellenceComponent.prototype.edSearch = function (event) {
        var _this = this;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this.academicservice.openSnackbar("Search Bar is Empty. Please fill the details");
        }
        else {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(/* this.sort.sortChange,  */ this.paginator.page)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function () {
                _this.spinner.show();
                return _this.academicservice.searchCREDIT(_this.termId, _this.serviceid, _this.paginator.pageIndex, _this.paginator.pageSize);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (data) {
                _this.resultsLength = data.object.totalRecords;
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(function () {
                console.log('Error here');
                _this.spinner.hide();
                return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12__["of"])([]);
            })).subscribe(function (data) {
                if (data.status == 'OK') {
                    _this.creditCadetList = data.object.creditExcellenceFilterPayload;
                    if (data.object.creditExcellenceFilterPayload.length > 0) {
                        _this.creditCadetList = data.object.creditExcellenceFilterPayload;
                    }
                    else {
                        _this.creditCadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.creditCadetList = [];
                }
                _this.spinner.hide();
            });
        }
    };
    CreditExellenceComponent.prototype.pageChanged = function (event) {
        this.pageSize = event.pageSize;
        console.log(this.pageSize, "page size");
        this.currentPage = event.pageIndex;
        console.log(this.currentPage, "currentPage");
        this.getCreditAllCadetlist();
    };
    CreditExellenceComponent.prototype.getCreditAllCadetlist = function () {
        var _this = this;
        this.spinner.show();
        if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
            this.academicservice.getCredit_All_ListByBCName(this.termId, this.currentPage, this.pageSize, this.battalionName, this.companyName).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this.academicservice.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.creditCadetList = res.object.creditExcellenceFilterPayload;
                    if (res.object.creditExcellenceFilterPayload.length > 0) {
                        _this.resultsLength = res.object.totalRecords;
                        _this.creditCadetList = res.object.creditExcellenceFilterPayload;
                    }
                    else {
                        _this.creditCadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.creditCadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.academicservice.getCREDIT_list(this.termId, this.currentPage, this.pageSize).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this.academicservice.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.creditCadetList = res.object.creditExcellenceFilterPayload;
                    if (res.object.creditExcellenceFilterPayload.length > 0) {
                        _this.resultsLength = res.object.totalRecords;
                        _this.creditCadetList = res.object.creditExcellenceFilterPayload;
                    }
                    else {
                        _this.creditCadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.creditCadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Some Error Occured.");
            });
        }
    };
    CreditExellenceComponent.prototype.openPopup = function () {
        this.displayStyle = "block";
    };
    CreditExellenceComponent.prototype.closePopup = function () {
        this.displayStyle = "none";
    };
    CreditExellenceComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode == 32) {
            event.preventDefault();
        }
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    CreditExellenceComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_6__["AcademicDeptService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    CreditExellenceComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true },] }],
        blockPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['paste', ['$event'],] }]
    };
    CreditExellenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-credit-exellence',
            template: _raw_loader_credit_exellence_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_credit_exellence_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_6__["AcademicDeptService"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], CreditExellenceComponent);
    return CreditExellenceComponent;
}());



/***/ }),

/***/ "ynEc":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/examination/assessment/credit-exellence/credit-exellence.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"mat-new\">\r\n      <h4 class=\"card-heading\">Examination <span class=\"sub-menu1\">> Assessment > {{term}} > Credit for Excellence</span></h4>\r\n    </div>\r\n    <div class=\"academics\">\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n        <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"battalion\">Battalion</label>\r\n              <select id=\"battalion\" name=\"battalion\" (change)=\"battalionSelected($event.target.value)\" class=\"form-control\">\r\n                <option value=\"0\" selected>Select</option>\r\n                <option *ngFor=\"let b of battalionList\" [value]=\"b.shortName\"> {{b.shortName}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"company\">Company</label>\r\n              <select id=\"company\" class=\"form-control\" name=\"company\"  (change)=\"companySelected($event.target.value)\">\r\n                <option value=\"0\" selected>Select</option>\r\n                <option *ngFor=\"let c of companyList\" [value]=\"c.name\"> {{c.name}}</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Search</label>\r\n                <input placeholder=\"Search\" formcontrolname=\"\" type=\"text\" name=\"serviceid\" [(ngModel)]=\"serviceid\" (keyup)=\"serviceSearch($event.target.value)\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <label>&nbsp;</label>\r\n              <button type=\"button\" mat-raised-button (click)=\"edSearch()\">Search</button>\r\n              <!-- <button mat-raised-button (click)=\"clearSearch()\" >Clear</button> -->\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <form class=\"oq-matrix-form\">\r\n          <table class=\"tg mb-2\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Bn/Coy</th>\r\n                <th class=\"tg-qnnc\" colspan=\"9\">Subjects</th>\r\n              </tr>\r\n              <tr>\r\n                <th colspan=\"1\" style=\"width: 11%;\" *ngFor=\"let subject of creditSubjectList\" class=\"tg-qnnc\">\r\n                  {{subject.subjectName}}<br>Marks\r\n                  ({{subject.totalMarks}})</th>\r\n\r\n                  <th class=\"tg-qnnc\" rowspan=\"3\">Total<br>Marks\r\n                    (50)</th>\r\n\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let leadership of creditCadetList; let leadershipIndex = index\">\r\n                <td class=\"tg-c3ow\">{{ leadershipIndex + 1}}</td>\r\n                <td class=\"tg-c3ow\">{{ leadership.serviceId }}</td>\r\n                <td class=\"tg-0pky\">{{ leadership.course }}</td>\r\n                <td class=\"tg-c3ow\">{{ leadership.name }}</td>\r\n                <!-- <td class=\"tg-0pky\">{{ leadership.nationality }}</td> -->\r\n                <td class=\"tg-c3ow\">\r\n                  <p *ngIf=\"leadership.nationality=='India'\">OC</p>\r\n                  <p *ngIf=\"leadership.nationality !='India'\">FGC</p>\r\n                </td>\r\n                <td class=\"tg-c3ow\">{{ leadership.battalian }}/{{leadership.company}}</td>\r\n                <td class=\"tg-c3ow\"\r\n                  *ngFor=\"let leadershipSubject of leadership.academicCreditForExcellenceResult.creditExcellenceSubResult; let leadershipSubjectIndex = index\">\r\n                  <div class=\"d-flex\">\r\n                    <ng-container>\r\n                      <input type=\"text\" class=\"form-control d-inline\" value=\"{{leadershipSubject.obtainedMarks}}\"\r\n                        (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\" min=\"0\"\r\n                        (keypress)=\"keyPress($event)\"\r\n                        on-focusout=\"onChange($event,$event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                    </ng-container>\r\n                  </div>\r\n                </td>\r\n\r\n                <td class=\"tg-0pky\">\r\n                  <input type=\"text\" class=\"form-control\" disabled id=\"{{leadershipIndex}}\"\r\n                    value=\"{{ leadership.academicCreditForExcellenceResult.obtainedMarks }}\">\r\n                </td>\r\n\r\n\r\n\r\n                <div *ngIf=\"!leadership.academicCreditForExcellenceResult\">\r\n                  <div *ngFor=\"let size of leaderShipSubject;let ser=index;\">\r\n                    <td class=\"tg-c3ow\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"obtainedMarks\">\r\n                    </td>\r\n                    <td *ngIf=\"ser+1 == leaderShipSubject.length\" class=\"tg-c3ow\">{{obtainedTotalMarks}}</td>\r\n                  </div>\r\n                </div>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"mat-cell\" style=\"text-align: center;\" *ngIf=\"! creditCadetList?.length\" colspan=\"14\">\r\n                  <div>No Record Found</div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </form>\r\n        <div class=\"\">\r\n          <!-- <mat-paginator #myPaginator [length]=\"resultsLength\" [pageSizeOptions]=\"[30]\"  showFirstLastButtons>\r\n            </mat-paginator> -->\r\n          <mat-paginator #myPaginator [length]=\"resultsLength\" [pageIndex]=\"currentPage\" [pageSize]=\"pageSize\"\r\n            [pageSizeOptions]=\"[50]\" (page)=\"pageChanged($event)\" aria-label=\"Select page\" showFirstLastButtons>\r\n          </mat-paginator>\r\n\r\n        </div>\r\n        <div class=\"btn-sec mt-3 text-right  mb-3\">\r\n          <button type=\"button\" disabled mat-raised-button (click)=\"openPopup()\" *ngIf=\"! creditCadetList?.length\">Preview</button>\r\n          <button type=\"button\" mat-raised-button (click)=\"openPopup()\" *ngIf=\"creditCadetList?.length > 0\">Preview</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayStyle}\">\r\n  <div class=\"modal-dialog modal-lg modal-dialog-scrollable custom-lg\" role=\"document\">\r\n    <div class=\"modal-content p-3\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Review</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <table class=\"tg h-auto\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Bn/Coy</th>\r\n              <th class=\"tg-qnnc\" colspan=\"9\">Subjects</th>\r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"1\" style=\"width: 11%;\" *ngFor=\"let subject of creditSubjectList\" class=\"tg-qnnc\">\r\n                {{subject.subjectName}}<br>Marks\r\n                ({{subject.totalMarks}})</th>\r\n\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Total<br>Marks\r\n                  (50)</th>\r\n\r\n\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let leadership of creditCadetList; let leadershipIndex = index\">\r\n              <td class=\"tg-c3ow\">{{ leadershipIndex + 1}}</td>\r\n              <td class=\"tg-c3ow\">{{ leadership.serviceId }}</td>\r\n              <td class=\"tg-0pky\">{{ leadership.course }}</td>\r\n              <td class=\"tg-c3ow\">{{ leadership.name }}</td>\r\n              <!-- <td class=\"tg-0pky\">{{ leadership.nationality }}</td> -->\r\n              <td class=\"tg-c3ow\">\r\n                <p *ngIf=\"leadership.nationality=='India'\">OC</p>\r\n                <p *ngIf=\"leadership.nationality !='India'\">FGC</p>\r\n              </td>\r\n              <td class=\"tg-c3ow\">{{ leadership.battalian }}/{{leadership.company}}</td>\r\n              <td class=\"tg-c3ow\"\r\n                *ngFor=\"let leadershipSubject of leadership.academicCreditForExcellenceResult.creditExcellenceSubResult; let leadershipSubjectIndex = index\">\r\n                <div class=\"d-flex\">\r\n                  <ng-container>\r\n                    <input type=\"text\" disabled class=\"form-control d-inline\"\r\n                      value=\"{{leadershipSubject.obtainedMarks}}\"\r\n                      (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\"\r\n                      on-focusout=\"onChange($event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                  </ng-container>\r\n                </div>\r\n              </td>\r\n\r\n              <td class=\"tg-0pky\">\r\n                <input type=\"text\" class=\"form-control\" disabled id=\"{{leadershipIndex}}\"\r\n                  value=\"{{ leadership.academicCreditForExcellenceResult.obtainedMarks }}\">\r\n              </td>\r\n\r\n\r\n\r\n              <div *ngIf=\"!leadership.academicCreditForExcellenceResult\">\r\n                <div *ngFor=\"let size of leaderShipSubject;let ser=index;\">\r\n                  <td class=\"tg-c3ow\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"obtainedMarks\">\r\n                  </td>\r\n                  <td *ngIf=\"ser+1 == leaderShipSubject.length\" class=\"tg-c3ow\">{{obtainedTotalMarks}}</td>\r\n                </div>\r\n              </div>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button mat-raised-button type=\"button\" class=\"btn-dark\" (click)=\"closePopup()\">Back</button>\r\n        <button type=\"button\" mat-raised-button (click)=\"confirm()\">Submit</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ })

}]);