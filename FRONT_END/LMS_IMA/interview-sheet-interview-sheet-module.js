(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["interview-sheet-interview-sheet-module"],{

/***/ "0LrW":
/*!****************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/interviews/interview-sheet/interview-sheet.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: InterviewSheetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewSheetModule", function() { return InterviewSheetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _interview_sheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interview-sheet.component */ "LUJr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _interview_sheet_component__WEBPACK_IMPORTED_MODULE_7__["InterviewSheetComponent"]
    },
];
var InterviewSheetModule = /** @class */ (function () {
    function InterviewSheetModule() {
    }
    InterviewSheetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _interview_sheet_component__WEBPACK_IMPORTED_MODULE_7__["InterviewSheetComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"]
            ],
        })
    ], InterviewSheetModule);
    return InterviewSheetModule;
}());



/***/ }),

/***/ "LUJr":
/*!*******************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/interviews/interview-sheet/interview-sheet.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: InterviewSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewSheetComponent", function() { return InterviewSheetComponent; });
/* harmony import */ var _raw_loader_interview_sheet_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./interview-sheet.component.html */ "s/ni");
/* harmony import */ var _interview_sheet_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interview-sheet.component.scss */ "enh+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var InterviewSheetComponent = /** @class */ (function () {
    function InterviewSheetComponent(location, EDossierService, adminservice, fb, router, spinner, cdref, dialog, sharedService, route) {
        this.location = location;
        this.EDossierService = EDossierService;
        this.adminservice = adminservice;
        this.fb = fb;
        this.router = router;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.route = route;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]('en-IN');
        this.interviewFormI = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.interviewFormII = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.interviewFormIII = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.interviewFormIV = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.interviewFormV = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.interviewFormVI = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.interviewFormVII = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.maxDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.yScrollStack = [];
        this.Id = this.route.snapshot.queryParamMap.get('Id');
        this.termId = this.route.snapshot.queryParamMap.get('termId');
        this.interviewFormI = this.fb.group({
            appdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            appearence: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            appGcInitialsWithDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [1],
            serviceId: this.Id,
            status: [1],
            id: [''],
            isViewByGc: false
        });
        this.interviewFormII = this.fb.group({
            famDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            familyback: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            famiGcInitialsWithDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [1],
            serviceId: this.Id,
            status: [1],
            id: [''],
            isViewByGc: false
        });
        this.interviewFormIII = this.fb.group({
            workDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            workExp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            workGcInitialsWithDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [1],
            serviceId: this.Id,
            status: [1],
            id: [''],
            isViewByGc: false
        });
        this.interviewFormIV = this.fb.group({
            iniDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            initialAss: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            iniGcInitialsWithDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [1],
            serviceId: this.Id,
            status: [1],
            id: [''],
            isViewByGc: false
        });
        this.interviewFormV = this.fb.group({
            misDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            misc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            misGcInitialsWithDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [1],
            serviceId: this.Id,
            status: [1],
            id: [''],
            isViewByGc: false
        });
        this.interviewFormVI = this.fb.group({
            anyDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            anyPts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            anyGcInitialsWithDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [1],
            serviceId: this.Id,
            status: [1],
            id: [''],
            isViewByGc: false
        });
        this.interviewFormVII = this.fb.group({
            ihavDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            iHaveExp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ihavGcInitialsWithDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [1],
            serviceId: this.Id,
            status: [1],
            id: [''],
            isViewByGc: false
        });
        // this.maxTodayDate = formatDate(new Date(), 'yyyy-MM-dd', this.localID);
        // this.minAppdate = formatDate(new Date().setFullYear(this.currentYear - 18), 'yyyy-MM-dd', this.localID);
        // this.maxAppdate = formatDate(new Date().setFullYear(this.currentYear - 28), 'yyyy-MM-dd', this.localID);
    }
    InterviewSheetComponent.prototype.ngOnInit = function () {
        document.getElementById("IcompanyName").value = localStorage.getItem("companyName");
        document.getElementById("IbattalionName").value = localStorage.getItem("battalionName");
        document.getElementById("IcadetServiceId").value = localStorage.getItem("e");
        document.getElementById("IcadetName").value = localStorage.getItem("i");
        document.getElementById("ItermName").value = localStorage.getItem("termName");
        document.getElementById("IcadetRank").value = localStorage.getItem("rank");
    };
    InterviewSheetComponent.prototype.ngAfterViewInit = function () {
        this.getEdossierInterview();
    };
    InterviewSheetComponent.prototype.goBack = function () {
        window.history.back();
    };
    /*-------------------------GET----------------------*/
    InterviewSheetComponent.prototype.getEdossierInterview = function () {
        var _this = this;
        this.EDossierService.getInterviewDetails(this.Id).subscribe(function (res) {
            if (res && res.object) {
                _this.interviewFormI.patchValue({
                    appdate: _this.datePipe.transform(res.object.appdate, 'yyyy-MM-dd'),
                    appearence: res.object.appearence,
                    appGcInitialsWithDate: res.object.appGcInitialsWithDate,
                    id: res.object.id,
                });
                _this.interviewFormII.patchValue({
                    famDate: _this.datePipe.transform(res.object.famDate, 'yyyy-MM-dd'),
                    familyback: res.object.familyback,
                    famiGcInitialsWithDate: res.object.famiGcInitialsWithDate,
                    id: res.object.id,
                });
                _this.interviewFormIII.patchValue({
                    workDate: _this.datePipe.transform(res.object.workDate, 'yyyy-MM-dd'),
                    workExp: res.object.workExp,
                    workGcInitialsWithDate: res.object.workGcInitialsWithDate,
                    id: res.object.id,
                });
                _this.interviewFormIV.patchValue({
                    iniDate: _this.datePipe.transform(res.object.iniDate, 'yyyy-MM-dd'),
                    initialAss: res.object.initialAss,
                    iniGcInitialsWithDate: res.object.iniGcInitialsWithDate,
                    id: res.object.id,
                });
                _this.interviewFormV.patchValue({
                    misDate: _this.datePipe.transform(res.object.misDate, 'yyyy-MM-dd'),
                    misc: res.object.misc,
                    misGcInitialsWithDate: res.object.misGcInitialsWithDate,
                    id: res.object.id,
                });
                _this.interviewFormVI.patchValue({
                    anyDate: _this.datePipe.transform(res.object.anyDate, 'yyyy-MM-dd'),
                    anyPts: res.object.anyPts,
                    anyGcInitialsWithDate: res.object.anyGcInitialsWithDate,
                    id: res.object.id,
                });
                _this.interviewFormVII.patchValue({
                    ihavDate: _this.datePipe.transform(res.object.ihavDate, 'yyyy-MM-dd'),
                    iHaveExp: res.object.iHaveExp,
                    ihavGcInitialsWithDate: res.object.ihavGcInitialsWithDate,
                    id: res.object.id,
                });
            }
        });
    };
    InterviewSheetComponent.prototype.addClubsubmitI = function (Type) {
        console.log("Type==>>", Type);
        var interviewForm;
        var validateFormstatus;
        if (Type == 'appearence') {
            interviewForm = this.interviewFormI.value;
            validateFormstatus = this.validateFormI(interviewForm);
        }
        else if (Type == 'familyback') {
            interviewForm = this.interviewFormII.value;
            validateFormstatus = this.validateFormII(interviewForm);
        }
        else if (Type == 'workExp') {
            interviewForm = this.interviewFormIII.value;
            validateFormstatus = this.validateFormIII(interviewForm);
        }
        else if (Type == 'initialAss') {
            interviewForm = this.interviewFormIV.value;
            validateFormstatus = this.validateFormIV(interviewForm);
        }
        else if (Type == 'misc') {
            interviewForm = this.interviewFormV.value;
            validateFormstatus = this.validateFormV(interviewForm);
        }
        else if (Type == 'anyPts') {
            interviewForm = this.interviewFormVI.value;
            validateFormstatus = this.validateFormVI(interviewForm);
        }
        else if (Type == 'iHaveExp') {
            interviewForm = this.interviewFormVII.value;
            validateFormstatus = this.validateFormVII(interviewForm);
        }
        var id = interviewForm.id;
        //const validateFormstatus = this.validateForm(interviewForm);
        if (validateFormstatus) {
            if (id == undefined || id == '') {
                this.addInterview(interviewForm);
            }
            else {
                this.updateInterview(interviewForm);
            }
        }
    };
    // validateForm(interviewForm) {
    //   let flag = true;
    //   if (!interviewForm.appdate || !interviewForm.appearence || !interviewForm.famDate || !interviewForm.familyback || !interviewForm.workDate || !interviewForm.workExp || !interviewForm.iniDate || !interviewForm.initialAss || !interviewForm.misDate || !interviewForm.misc || !interviewForm.anyDate || !interviewForm.anyPts || !interviewForm.ihavDate || !interviewForm.iHaveExp) {
    //     this.adminservice.openSnackbar('Please fill all fields');
    //     flag = false;
    //   }
    //   return flag;
    // }
    InterviewSheetComponent.prototype.validateFormI = function (interviewForm) {
        var flag = true;
        if (!interviewForm.appdate || !interviewForm.appearence || interviewForm.appearence.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        var currentdateArr = interviewForm.appdate.split("-");
        var date = new Date();
        var currentdate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        // (YYYY, MM, DD) 
        var newdate = new Date(currentdateArr[0], currentdateArr[1] - 1, currentdateArr[2]);
        if (currentdate.getTime() < newdate.getTime()) {
            this.adminservice.openSnackbar('Please enter valid date');
            flag = false;
        }
        return flag;
    };
    InterviewSheetComponent.prototype.validateFormII = function (interviewForm) {
        var flag = true;
        if (!interviewForm.famDate || !interviewForm.familyback || interviewForm.familyback.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        var currentdateArr = interviewForm.famDate.split("-");
        var date = new Date();
        var currentdate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        // (YYYY, MM, DD) 
        var newdate = new Date(currentdateArr[0], currentdateArr[1] - 1, currentdateArr[2]);
        if (currentdate.getTime() < newdate.getTime()) {
            this.adminservice.openSnackbar('Please enter valid date');
            flag = false;
        }
        return flag;
    };
    InterviewSheetComponent.prototype.validateFormIII = function (interviewForm) {
        var flag = true;
        if (!interviewForm.workDate || !interviewForm.workExp || interviewForm.workExp.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        var currentdateArr = interviewForm.workDate.split("-");
        var date = new Date();
        var currentdate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        // (YYYY, MM, DD) 
        var newdate = new Date(currentdateArr[0], currentdateArr[1] - 1, currentdateArr[2]);
        if (currentdate.getTime() < newdate.getTime()) {
            this.adminservice.openSnackbar('Please enter valid date');
            flag = false;
        }
        return flag;
    };
    InterviewSheetComponent.prototype.validateFormIV = function (interviewForm) {
        var flag = true;
        if (!interviewForm.iniDate || !interviewForm.initialAss || interviewForm.initialAss.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        var currentdateArr = interviewForm.iniDate.split("-");
        var date = new Date();
        var currentdate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        // (YYYY, MM, DD) 
        var newdate = new Date(currentdateArr[0], currentdateArr[1] - 1, currentdateArr[2]);
        if (currentdate.getTime() < newdate.getTime()) {
            this.adminservice.openSnackbar('Please enter valid date');
            flag = false;
        }
        return flag;
    };
    InterviewSheetComponent.prototype.validateFormV = function (interviewForm) {
        var flag = true;
        if (!interviewForm.misDate || !interviewForm.misc || interviewForm.misc.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        var currentdateArr = interviewForm.misDate.split("-");
        var date = new Date();
        var currentdate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        // (YYYY, MM, DD) 
        var newdate = new Date(currentdateArr[0], currentdateArr[1] - 1, currentdateArr[2]);
        if (currentdate.getTime() < newdate.getTime()) {
            this.adminservice.openSnackbar('Please enter valid date');
            flag = false;
        }
        return flag;
    };
    InterviewSheetComponent.prototype.validateFormVI = function (interviewForm) {
        var flag = true;
        if (!interviewForm.anyDate || !interviewForm.anyPts || interviewForm.anyPts.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        var currentdateArr = interviewForm.anyDate.split("-");
        var date = new Date();
        var currentdate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        // (YYYY, MM, DD) 
        var newdate = new Date(currentdateArr[0], currentdateArr[1] - 1, currentdateArr[2]);
        if (currentdate.getTime() < newdate.getTime()) {
            this.adminservice.openSnackbar('Please enter valid date');
            flag = false;
        }
        return flag;
    };
    InterviewSheetComponent.prototype.validateFormVII = function (interviewForm) {
        var flag = true;
        if (!interviewForm.ihavDate || !interviewForm.iHaveExp || interviewForm.iHaveExp.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        var currentdateArr = interviewForm.ihavDate.split("-");
        var date = new Date();
        var currentdate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        // (YYYY, MM, DD) 
        var newdate = new Date(currentdateArr[0], currentdateArr[1] - 1, currentdateArr[2]);
        if (currentdate.getTime() < newdate.getTime()) {
            this.adminservice.openSnackbar('Please enter valid date');
            flag = false;
        }
        return flag;
    };
    InterviewSheetComponent.prototype.addInterview = function (formVal) {
        var _this = this;
        if (formVal.appearence != undefined) {
            formVal.appearence = formVal.appearence.trim();
        }
        if (formVal.familyback != undefined) {
            formVal.familyback = formVal.familyback.trim();
        }
        if (formVal.workExp != undefined) {
            formVal.workExp = formVal.workExp.trim();
        }
        if (formVal.initialAss != undefined) {
            formVal.initialAss = formVal.initialAss.trim();
        }
        if (formVal.misc != undefined) {
            formVal.misc = formVal.misc.trim();
        }
        if (formVal.anyPts != undefined) {
            formVal.anyPts = formVal.anyPts.trim();
        }
        if (formVal.iHaveExp != undefined) {
            formVal.iHaveExp = formVal.iHaveExp.trim();
        }
        this.spinner.show();
        console.log(formVal);
        this.EDossierService.addInterviewDetails(formVal).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.adminservice.openSnackbar(res.message);
                window.location.reload();
                _this.cdref.detectChanges();
                _this.spinner.hide();
                // this.router.navigate(['e-dossior/ed-content/Ed-index/Otherdetails/club']);
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.adminservice.openSnackbar('Error Occured.');
            console.log(JSON.stringify(err));
        });
    };
    /*-----------------UPDATE------------------*/
    InterviewSheetComponent.prototype.updateInterview = function (formVal) {
        var _this = this;
        if (formVal.appearence != undefined) {
            formVal.appearence = formVal.appearence.trim();
        }
        if (formVal.familyback != undefined) {
            formVal.familyback = formVal.familyback.trim();
        }
        if (formVal.workExp != undefined) {
            formVal.workExp = formVal.workExp.trim();
        }
        if (formVal.initialAss != undefined) {
            formVal.initialAss = formVal.initialAss.trim();
        }
        if (formVal.misc != undefined) {
            formVal.misc = formVal.misc.trim();
        }
        if (formVal.anyPts != undefined) {
            formVal.anyPts = formVal.anyPts.trim();
        }
        if (formVal.iHaveExp != undefined) {
            formVal.iHaveExp = formVal.iHaveExp.trim();
        }
        this.spinner.show();
        this.EDossierService.updateinterviewDetails(formVal).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.getEdossierInterview();
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
                window.location.reload();
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.adminservice.openSnackbar("Error Occured.");
        });
    };
    InterviewSheetComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_8__["EDossierService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    InterviewSheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-interview-sheet',
            template: _raw_loader_interview_sheet_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_interview_sheet_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_8__["EDossierService"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], InterviewSheetComponent);
    return InterviewSheetComponent;
}());



/***/ }),

/***/ "enh+":
/*!*********************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/interviews/interview-sheet/interview-sheet.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 0 !important;\n}\n\n.mat-new-inner {\n  padding: 0.875rem 0 0 !important;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.backbtn button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle !important;\n}\n\n.tg .tg-54o0 {\n  background-color: #c6c4c4;\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle !important;\n}\n\n.tg .tg-719i {\n  background-color: #c6c4c4;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n}\n\n.tg .tg-9fba {\n  background-color: #c6c4c4;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: left;\n  vertical-align: top;\n}\n\nbutton.btn-color {\n  background: #742923;\n  color: #fff;\n}\n\nbutton.btn-color:hover, button.btn-color:focus {\n  color: #fff;\n}");

/***/ }),

/***/ "s/ni":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/interviews/interview-sheet/interview-sheet.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"mat-heading\">\r\n        <div id=\"top-bar\" class=\"\">\r\n          <h2 class=\"backbtn\">\r\n            <button mat-icon-button (click)=\"goBack()\">\r\n              <mat-icon>chevron_left</mat-icon>\r\n            </button> E-Dossier <span class=\"sub-menu1\">\r\n            > Interviews > INTERVIEW SHEET</span></h2>\r\n      </div>\r\n      </div>\r\n        \r\n        <div class=\"interview-sheet\">\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n                <!-- <div class=\"ng-star-inserted\">\r\n                    <div class=\"mat-new\">\r\n                        <h4 class=\"card-heading\">INTERVIEW SHEET</h4>\r\n                    </div>\r\n                </div> -->\r\n                <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"rank\">IMA No.</label>\r\n                          <input placeholder=\"No\"  type=\"text\" disabled id=\"IcadetServiceId\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                      </div>  \r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"rank\">Rank</label>\r\n                          <input placeholder=\"Rank\"  type=\"text\" disabled id=\"IcadetRank\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"rank\">Name</label>\r\n                          <input placeholder=\"Name\"  type=\"text\" disabled id=\"IcadetName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"rank\">Term</label>\r\n                          <input placeholder=\"Term\"  type=\"text\" disabled id=\"ItermName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"rank\">Bn</label>\r\n                          <input placeholder=\"Bn\"  type=\"text\" disabled id=\"IbattalionName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"rank\">Coy</label>\r\n                          <input placeholder=\"Coy\"  type=\"text\" disabled id=\"IcompanyName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                      </div>\r\n                      \r\n                    </div>\r\n                  </form>\r\n                <table class=\"tg\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"tg-9fba\" rowspan=\"2\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Date</span></th>\r\n                    <th class=\"tg-719i\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Details</span></th>\r\n                    <th class=\"tg-54o0\" rowspan=\"2\">GC Initials with date</th>\r\n                    <th class=\"tg-9fba\" rowspan=\"2\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Action</span></th>\r\n                  </tr>\r\n                  <tr>\r\n                      <th class=\"tg-54o0\">\r\n                          INITIAL INTERVIEW : PL CDR\r\n                      </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr [formGroup]=\"interviewFormI\">\r\n                    \r\n                    <td class=\"tg-0lax\"><input type=\"date\" max=\"{{maxDate}}\" required formControlName=\"appdate\" class=\"form-control\"></td>\r\n\r\n                    <td class=\"tg-0lax\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">1.</span>\t<span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">Appearance, Bg and  Comn Skills</span><span class=\"mb-2\" style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\"> :</span><br><textarea  placeholder=\"\" maxlength=\"1500\"\r\n                        formControlName=\"appearence\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" class=\"form-control ng-untouched ng-pristine ng-invalid mt-2\" rows=\"5\"></textarea></td>\r\n                    <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"appGcInitialsWithDate\" disabled class=\"form-control\"></td>\r\n                    <td class=\"tg-0lax text-center\"><button class=\"btn btn-color\" (click)=\"addClubsubmitI('appearence')\">Submit</button></td>\r\n                  </tr>\r\n\r\n\r\n                  <tr [formGroup]=\"interviewFormII\">\r\n                       <td class=\"tg-0lax\"><input type=\"date\" max=\"{{maxDate}}\" formControlName=\"famDate\" class=\"form-control\"></td> \r\n                     <td class=\"tg-0lax\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">2.</span>\t<span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">Family Background</span><span class=\"mb-2\" style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\"> :<br><textarea  placeholder=\"\" maxlength=\"1500\"\r\n                        formControlName=\"familyback\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" class=\"form-control ng-untouched ng-pristine ng-invalid mt-2\" rows=\"5\"></textarea></span></td>\r\n                     <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"famiGcInitialsWithDate\" disabled class=\"form-control\"></td>\r\n                    <td class=\"tg-0lax text-center\"><button class=\"btn btn-color\" (click)=\"addClubsubmitI('familyback')\">Submit</button></td>\r\n                  </tr>\r\n\r\n\r\n                  <tr [formGroup]=\"interviewFormIII\">\r\n                       <td class=\"tg-0lax\"><input type=\"date\" max=\"{{maxDate}}\" formControlName=\"workDate\" class=\"form-control\"></td>  \r\n                     <td class=\"tg-0lax\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">3.</span>\t<span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">Work Experience (if any</span><span class=\"mb-2\" style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">):</span><br><textarea  placeholder=\"\" maxlength=\"1500\"\r\n                        formControlName=\"workExp\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" class=\"mt-2 form-control ng-untouched ng-pristine ng-invalid\" rows=\"5\"></textarea></td>\r\n                     <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"workGcInitialsWithDate\" disabled class=\"form-control\"></td>\r\n                    <td class=\"tg-0lax text-center\"><button class=\"btn btn-color\" (click)=\"addClubsubmitI('workExp')\">Submit</button></td>\r\n                  </tr>\r\n\r\n\r\n                  <tr [formGroup]=\"interviewFormIV\">\r\n                      <td class=\"tg-0lax\"><input type=\"date\" max=\"{{maxDate}}\" formControlName=\"iniDate\" class=\"form-control\"></td>\r\n                      <td class=\"tg-0lax\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">4.</span>\t<span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">Initial Assessment</span><span class=\"mb-2\" style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">:<textarea  placeholder=\"\" maxlength=\"1500\"\r\n                        formControlName=\"initialAss\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" class=\"mt-2 form-control ng-untouched ng-pristine ng-invalid\" rows=\"5\"></textarea></span>\r\n                      </td>\r\n                       <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"iniGcInitialsWithDate\" disabled class=\"form-control\"></td>\r\n                    <td class=\"tg-0lax text-center\"><button class=\"btn btn-color\" (click)=\"addClubsubmitI('initialAss')\">Submit</button></td>\r\n                      </tr>\r\n\r\n\r\n                      <tr [formGroup]=\"interviewFormV\">\r\n                       <td class=\"tg-0lax\"><input type=\"date\" max=\"{{maxDate}}\" formControlName=\"misDate\" class=\"form-control\"></td>\r\n                      <td class=\"tg-0lax\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">5.</span>\t<span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">Misc/Other Relevant Info</span><span class=\"mb-2\" style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">:<br><textarea  placeholder=\"\" maxlength=\"1500\"\r\n                        formControlName=\"misc\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" class=\"mt-2 form-control ng-untouched ng-pristine ng-invalid\" rows=\"5\"></textarea></span>\r\n                      </td>\t\r\n                       <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"misGcInitialsWithDate\" disabled class=\"form-control\"></td>\r\n                    <td class=\"tg-0lax text-center\"><button class=\"btn btn-color\" (click)=\"addClubsubmitI('misc')\">Submit</button></td>\r\n                      </tr>\r\n\r\n\r\n                      <tr [formGroup]=\"interviewFormVI\">\r\n                          <td class=\"tg-0lax\"><input type=\"date\" max=\"{{maxDate}}\" formControlName=\"anyDate\" class=\"form-control\"></td>\r\n                          <td class=\"tg-0lax\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">6.</span>\t<span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">Any Pts From the GC</span><span class=\"mb-2\" style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">:<br><textarea  placeholder=\"\" maxlength=\"1500\"\r\n                            formControlName=\"anyPts\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" class=\"mt-2 form-control ng-untouched ng-pristine ng-invalid\" rows=\"5\"></textarea></span>\r\n                          </td>\r\n                       <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"anyGcInitialsWithDate\" disabled class=\"form-control\"></td>\r\n                    <td class=\"tg-0lax text-center\"><button class=\"btn btn-color\" (click)=\"addClubsubmitI('anyPts')\">Submit</button></td>\r\n                      </tr>\r\n\r\n                      \r\n                      <tr [formGroup]=\"interviewFormVII\">\r\n                      <td class=\"tg-0lax\"><input type=\"date\" max=\"{{maxDate}}\" formControlName=\"ihavDate\" class=\"form-control\"></td>\t\r\n                      <td class=\"tg-0lax\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">7.</span>\t<span class=\"mb-2\" style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">I have explained the trg curriculum, SOPs &amp;TrgInstrs being followed at IMA: <br><textarea  placeholder=\"\" maxlength=\"1500\"\r\n                        formControlName=\"iHaveExp\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" class=\"form-control ng-untouched ng-pristine ng-invalid mt-2\" rows=\"5\"></textarea></span></td>\r\n                    <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"ihavGcInitialsWithDate\" disabled class=\"form-control\"></td>\r\n                    <td class=\"tg-0lax text-center\"><button class=\"btn btn-color\" (click)=\"addClubsubmitI('iHaveExp')\">Submit</button></td>\r\n\r\n                  </tr>\r\n                </tbody>\r\n                </table>\r\n                <!-- <div class=\"text-right\">\r\n                  <button class=\"btn btn-color mt-2\" (click)=\"addClubsubmitI()\">Submit</button>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ })

}]);