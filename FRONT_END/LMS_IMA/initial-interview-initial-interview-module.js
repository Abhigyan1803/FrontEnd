(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["initial-interview-initial-interview-module"],{

/***/ "1oI/":
/*!********************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/interviews/initial-interview/initial-interview.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: InitialInterviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialInterviewModule", function() { return InitialInterviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _initial_interview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./initial-interview.component */ "IoS+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _initial_interview_component__WEBPACK_IMPORTED_MODULE_8__["InitialInterviewComponent"]
    },
];
var InitialInterviewModule = /** @class */ (function () {
    function InitialInterviewModule() {
    }
    InitialInterviewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _initial_interview_component__WEBPACK_IMPORTED_MODULE_8__["InitialInterviewComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
            ]
        })
    ], InitialInterviewModule);
    return InitialInterviewModule;
}());



/***/ }),

/***/ "Djgj":
/*!*************************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/interviews/initial-interview/initial-interview.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 0 !important;\n}\n\n.mat-new-inner {\n  padding: 0.875rem 0 0 !important;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.backbtn button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  background-color: #c6c4c4;\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle !important;\n}\n\n.tg .tg-t2cw {\n  font-weight: bold;\n  text-align: center;\n  text-decoration: underline;\n  vertical-align: top;\n}\n\n.tg .tg-0lax {\n  text-align: left;\n  vertical-align: top;\n}\n\nbutton.btn-color {\n  background: #742923;\n  color: #fff;\n}\n\nbutton.btn-color:hover, button.btn-color:focus {\n  color: #fff;\n}");

/***/ }),

/***/ "IoS+":
/*!***********************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/interviews/initial-interview/initial-interview.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: InitialInterviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialInterviewComponent", function() { return InitialInterviewComponent; });
/* harmony import */ var _raw_loader_initial_interview_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./initial-interview.component.html */ "pXj5");
/* harmony import */ var _initial_interview_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial-interview.component.scss */ "Djgj");
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











var InitialInterviewComponent = /** @class */ (function () {
    function InitialInterviewComponent(EDossierService, adminservice, fb, router, spinner, cdref, dialog, sharedService, route) {
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
        this.maxDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.Id = this.route.snapshot.queryParamMap.get('Id');
        this.termId = this.route.snapshot.queryParamMap.get('termId');
        this.interviewFormI = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            initialInterview: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            majCol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [1],
            serviceId: this.Id,
            gcInitialsWithDate: [''],
            status: [1],
            id: [''],
            isViewByGc: false
        });
        this.interviewFormII = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            initialInterview: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            majCol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [1],
            serviceId: this.Id,
            gcInitialsWithDate: [''],
            status: [1],
            id: [''],
            isViewByGc: false
        });
    }
    InitialInterviewComponent.prototype.ngOnInit = function () {
        document.getElementById("IncompanyName").value = localStorage.getItem("companyName");
        document.getElementById("InbattalionName").value = localStorage.getItem("battalionName");
        document.getElementById("IncadetServiceId").value = localStorage.getItem("e");
        document.getElementById("IncadetName").value = localStorage.getItem("i");
        // (<HTMLInputElement>document.getElementById("IntermId")).value = localStorage.getItem("termId");
        document.getElementById("IntermName").value = localStorage.getItem("termName");
        document.getElementById("IncadetRank").value = localStorage.getItem("rank");
        console.log(this.maxDate + '--');
    };
    InitialInterviewComponent.prototype.ngAfterViewInit = function () {
        this.getEdossierInterview();
    };
    InitialInterviewComponent.prototype.goBack = function () {
        window.history.back();
    };
    /*-------------------------GET----------------------*/
    InitialInterviewComponent.prototype.getEdossierInterview = function () {
        var _this = this;
        this.EDossierService.getInitialInterviewDetails(this.Id).subscribe(function (res) {
            if (res && res.object) {
                var coyObj = res.object.find(function (obj) { return obj.submittedBy == 'COY_CDR'; });
                var coyData = coyObj;
                var bnObj = res.object.find(function (obj) { return obj.submittedBy == 'BN_CDR'; });
                var bnData = bnObj;
                // if(coyData.submittedBy !='COY_CDR'){
                //   let temp=coyData;
                //   coyData=bnData;
                //   bnData=temp;
                // }
                if (coyData != undefined) {
                    _this.interviewFormI.patchValue({
                        date: _this.datePipe.transform(coyData.date, 'yyyy-MM-dd'),
                        initialInterview: coyData.initialInterview,
                        majCol: coyData.majCol,
                        id: coyData.id,
                        gcInitialsWithDate: coyData.gcInitialsWithDate
                    });
                }
                if (bnData != undefined) {
                    _this.interviewFormII.patchValue({
                        date: _this.datePipe.transform(bnData.date, 'yyyy-MM-dd'),
                        initialInterview: bnData.initialInterview,
                        majCol: bnData.majCol,
                        id: bnData.id,
                        gcInitialsWithDate: bnData.gcInitialsWithDate
                    });
                }
            }
        });
    };
    /*------------------ADD------------------*/
    InitialInterviewComponent.prototype.addClubsubmitI = function (cdrType) {
        var interviewForm;
        console.log(this.interviewFormI.value);
        if (cdrType == 'COY_CDR') {
            interviewForm = this.interviewFormI.value;
        }
        else {
            interviewForm = this.interviewFormII.value;
        }
        var id = interviewForm.id;
        var validateFormstatus = this.validateForm(interviewForm);
        if (validateFormstatus) {
            if (id == undefined || id == '') {
                this.addInitialsubmitI(interviewForm, cdrType);
            }
            else {
                this.updateInterview(interviewForm, cdrType);
            }
        }
    };
    /////////////////////////////////////////
    InitialInterviewComponent.prototype.validateForm = function (interviewForm) {
        var flag = true;
        if (!interviewForm.date || interviewForm.date.trim() == '' || !interviewForm.majCol || interviewForm.majCol.trim() == '' || !interviewForm.initialInterview || interviewForm.initialInterview.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        var currentdateArr = interviewForm.date.split("-");
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
    InitialInterviewComponent.prototype.addInitialsubmitI = function (formVal, cdrType) {
        var _this = this;
        formVal.majCol = formVal.majCol.trim();
        formVal.initialInterview = formVal.initialInterview.trim();
        if (cdrType == 'COY_CDR') {
            formVal.submittedBy = cdrType;
        }
        else {
            formVal.submittedBy = cdrType;
        }
        this.EDossierService.addInitialInterviewDetails(formVal).subscribe(function (res) {
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
    InitialInterviewComponent.prototype.updateInterview = function (formVal, cdrType) {
        var _this = this;
        formVal.majCol = formVal.majCol.trim();
        formVal.initialInterview = formVal.initialInterview.trim();
        if (cdrType == 'COY_CDR') {
            formVal.submittedBy = cdrType;
        }
        else {
            formVal.submittedBy = cdrType;
        }
        console.log(formVal);
        this.EDossierService.updateInitialInterviewDetails(formVal).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
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
    InitialInterviewComponent.ctorParameters = function () { return [
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
    InitialInterviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-initial-interview',
            template: _raw_loader_initial_interview_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_initial_interview_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_8__["EDossierService"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], InitialInterviewComponent);
    return InitialInterviewComponent;
}());



/***/ }),

/***/ "pXj5":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/interviews/initial-interview/initial-interview.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"mat-heading\">\r\n      <div id=\"top-bar\" class=\"\">\r\n        <h2 class=\"backbtn\"><button mat-icon-button (click)=\"goBack()\">\r\n          <mat-icon>chevron_left</mat-icon>\r\n        </button>E-Dossier <span class=\"sub-menu1\">\r\n          > Interviews > INITIAL INTERVIEW</span></h2>\r\n    </div>\r\n    </div>\r\n    \r\n    <div class=\"interview-sheet\">\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n        <!-- <div class=\"ng-star-inserted\">\r\n          <div class=\"mat-new\">\r\n            <h4 class=\"card-heading\">INITIAL INTERVIEW</h4>\r\n          </div>\r\n        </div> -->\r\n        <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                      <label for=\"rank\">IMA No.</label>\r\n                      <input placeholder=\"No\" formcontrolname=\"\" disabled id=\"IncadetServiceId\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                  </div>\r\n              </div>\t\r\n              <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                      <label for=\"rank\">Rank</label>\r\n                      <input placeholder=\"Rank\" formcontrolname=\"\" disabled id=\"IncadetRank\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                      <label for=\"rank\">Name</label>\r\n                      <input placeholder=\"Name\" formcontrolname=\"\" disabled id=\"IncadetName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                      <label for=\"rank\">Term</label>\r\n                      <input placeholder=\"Term\" formcontrolname=\"\" disabled id=\"IntermName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"rank\">Bn</label>\r\n                    <input placeholder=\"Bn\" formcontrolname=\"\" disabled id=\"InbattalionName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n            </div>\r\n              <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                      <label for=\"rank\">Coy</label>\r\n                      <input placeholder=\"Coy\" formcontrolname=\"\" disabled id=\"IncompanyName\" Background=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                  </div>\r\n              </div>\r\n              \r\n          </div>\r\n      </form>\r\n          <table class=\"tg\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"tg-t2cw\"><span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">Date</span></th>\r\n              <th class=\"tg-t2cw\"><span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">Details</span></th>\r\n              <th class=\"tg-t2cw\"><span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">GCs Initials with date</span></th>\r\n              <th class=\"tg-t2cw\"><span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">Submission</span></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody >\r\n              <tr [formGroup]=\"interviewFormI\">\r\n                <td class=\"tg-0lax\"><input type=\"date\" class=\"form-control ng-untouched ng-pristine ng-invalid\"\r\n                   formControlName=\"date\" max=\"{{maxDate}}\" required></td>\r\n                <td class=\"tg-0lax\">\r\n                  <label style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">INITIAL INTERVIEW : COY CDR</label>\r\n                  <textarea  placeholder=\"\" maxlength=\"1500\"\r\n                  formControlName=\"initialInterview\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" class=\"form-control ng-untouched ng-pristine ng-invalid\" rows=\"3\"></textarea><br><br><br><br>\r\n                  <label>Maj/Lt Col <br>Coy Cdr</label>\r\n                  <input type=\"text\" placeholder=\"\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" formControlName=\"majCol\" class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\">\r\n                </td>\r\n                <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"gcInitialsWithDate\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled></td>\r\n                <td class=\"tg-0lax text-center\"><button class=\"btn btn-color\" (click)=\"addClubsubmitI('COY_CDR')\">Submit</button></td>\r\n              </tr>\r\n\r\n            \r\n            <tr [formGroup]=\"interviewFormII\">\r\n              <td class=\"tg-0lax\"><input type=\"date\" max=\"{{maxDate}}\" class=\"form-control ng-untouched ng-pristine ng-invalid\" formControlName=\"date\"></td>\r\n              <td class=\"tg-0lax\">\r\n                <label style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">INITIAL INTERVIEW : Bn CDR</label>\r\n                <textarea  placeholder=\"\" maxlength=\"1500\"\r\n                formControlName=\"initialInterview\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" class=\"form-control ng-untouched ng-pristine ng-invalid\" rows=\"3\"></textarea><br><br><br><br>\r\n                <label>Col <br>Bn Cdr</label>\r\n                <input type=\"text\" placeholder=\"\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" formControlName=\"majCol\" class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\">\r\n              </td>\r\n              <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"gcInitialsWithDate\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled></td>\r\n              <td class=\"tg-0lax text-center\"><button class=\"btn btn-color\" (click)=\"addClubsubmitI('BN_CDR')\">Submit</button></td>\r\n            </tr>\r\n          </tbody>\r\n          </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ })

}]);