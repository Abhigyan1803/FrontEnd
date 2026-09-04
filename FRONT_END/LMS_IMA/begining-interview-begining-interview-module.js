(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["begining-interview-begining-interview-module"],{

/***/ "Bbtd":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/interviews/begining-interview/begining-interview.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"mat-heading\">\r\n        <div id=\"top-bar\" class=\"\">\r\n          <h2 class=\"backbtn\"><button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n          </button>E-Dossier <span class=\"sub-menu1\">\r\n            > Interviews > BEGINNING OF TERM INTERVIEW</span></h2>\r\n      </div>\r\n      </div>\r\n      <div class=\"interview-sheet\">\r\n        <div class=\"mat-card mat-focus-indicator\">\r\n          <!-- <div class=\"ng-star-inserted\">\r\n            <div class=\"mat-new\">\r\n              <h4 class=\"card-heading\">BEGINNING OF TERM INTERVIEW</h4>\r\n            </div>\r\n          </div> -->\r\n          <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">IMA No.</label>\r\n                  <input placeholder=\"No\"  type=\"text\" disabled id=\"bgcadetServiceId\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>  \r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Rank</label>\r\n                  <input placeholder=\"Rank\"  type=\"text\" disabled id=\"bgcadetRank\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Name</label>\r\n                  <input placeholder=\"Name\"  type=\"text\" disabled id=\"bgcadetName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Term</label>\r\n                  <input placeholder=\"Term\"  type=\"text\" disabled id=\"bgtermName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"rank\">Bn</label>\r\n                    <input placeholder=\"Bn\" formcontrolname=\"\" disabled id=\"bgbattalionName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n            </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Coy</label>\r\n                  <input placeholder=\"Coy\"  type=\"text\" disabled id=\"bgcompanyName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Course</label>\r\n                  <input placeholder=\"Course\"  type=\"text\" disabled id=\"bgcourseNo\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n          </form>\r\n            <table class=\"tg\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-t2cw\"><span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">Date</span></th>\r\n                <th class=\"tg-t2cw\"><span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">Details</span></th>\r\n                <th class=\"tg-t2cw\" colspan=\"2\"><span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">GC Initials with date</span></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr [formGroup]=\"interviewFormI\">\r\n                <td class=\"tg-0lax\"><input type=\"date\" max=\"{{maxDate}}\" placeholder=\"\"  formControlName=\"date\" class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"></td>\r\n                <td class=\"tg-0lax\">\r\n                  <textarea  placeholder=\"\"  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" class=\"form-control ng-untouched ng-pristine ng-invalid\" rows=\"3\" maxlength=\"1500\"\r\n                  formControlName=\"details\"></textarea><br><br><br><br>\r\n                  <label>Capt/Maj <br>Pl Cdr</label>\r\n                  <input type=\"text\" placeholder=\"\" formControlName=\"capt\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\">\r\n                </td>\r\n                <td class=\"tg-0lax\"><input type=\"text\" placeholder=\"\"  formControlName=\"gcInitialsWithDate\" disabled class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"></td>\r\n                <td class=\"tg-0lax text-center\"><button class=\"btn btn-color mt-2\" (click)=\"addClubsubmitI('PL_CDR')\">Submit</button></td>\r\n              </tr>\r\n              <tr [formGroup]=\"interviewFormII\">\r\n                <td class=\"tg-0lax\"><input type=\"date\" max=\"{{maxDate}}\" placeholder=\"\" formControlName=\"date\" class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"></td>\r\n                <td class=\"tg-0lax\"><textarea  placeholder=\"\"  maxlength=\"1500\"\r\n                  formControlName=\"details\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" class=\"form-control ng-untouched ng-pristine ng-invalid\" rows=\"3\"></textarea><br><br><br><br>\r\n                  <label>Maj/Lt Col <br>Coy Cdr</label>\r\n                  <input type=\"text\" placeholder=\"\" formControlName=\"capt\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\">\r\n                </td>\r\n                <td class=\"tg-0lax\"><input type=\"text\" placeholder=\"\" formControlName=\"gcInitialsWithDate\" disabled class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"></td>\r\n                <td class=\"tg-0lax text-center\"><button class=\"btn btn-color mt-2\" (click)=\"addClubsubmitI('COY_CDR')\">Submit</button></td>\r\n              </tr>\r\n              <tr [formGroup]=\"interviewFormIII\">\r\n                <td class=\"tg-0lax\"><input type=\"date\" max=\"{{maxDate}}\" placeholder=\"\" formControlName=\"date\"  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"></td>\r\n                <td class=\"tg-0lax\"><textarea  placeholder=\"\" maxlength=\"1500\"\r\n                  formControlName=\"details\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" class=\"form-control ng-untouched ng-pristine ng-invalid\" rows=\"3\"></textarea><br><br><br><br>\r\n                  <label>Col <br>Bn Cdr</label>\r\n                  <input type=\"text\" placeholder=\"\"  formControlName=\"capt\" (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\" class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\">\r\n                </td>\r\n                <td class=\"tg-0lax\"><input type=\"text\" placeholder=\"\" formControlName=\"gcInitialsWithDate\" disabled class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"></td>\r\n                <td class=\"tg-0lax text-center\"><button class=\"btn btn-color mt-2\" (click)=\"addClubsubmitI('BN_CDR')\">Submit</button></td>\r\n              </tr>\r\n            </tbody>\r\n            </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "G7MB":
/*!*************************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/interviews/begining-interview/begining-interview.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: BeginingInterviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginingInterviewComponent", function() { return BeginingInterviewComponent; });
/* harmony import */ var _raw_loader_begining_interview_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./begining-interview.component.html */ "Bbtd");
/* harmony import */ var _begining_interview_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./begining-interview.component.scss */ "LWRs");
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











var BeginingInterviewComponent = /** @class */ (function () {
    function BeginingInterviewComponent(EDossierService, adminservice, fb, router, spinner, cdref, dialog, sharedService, route) {
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
        this.maxDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.Id = this.route.snapshot.queryParamMap.get('Id');
        this.termId = this.route.snapshot.queryParamMap.get('termId');
        this.interviewFormI = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            capt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [1],
            serviceId: this.Id,
            gcInitialsWithDate: [''],
            status: [1],
            id: [''],
            isViewByGc: false
        });
        this.interviewFormII = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            capt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [1],
            serviceId: this.Id,
            gcInitialsWithDate: [''],
            status: [1],
            id: [''],
            isViewByGc: false
        });
        this.interviewFormIII = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            capt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [1],
            serviceId: this.Id,
            gcInitialsWithDate: [''],
            status: [1],
            id: [''],
            isViewByGc: false
        });
    }
    BeginingInterviewComponent.prototype.ngOnInit = function () {
        document.getElementById("bgcompanyName").value = localStorage.getItem("companyName");
        document.getElementById("bgbattalionName").value = localStorage.getItem("battalionName");
        document.getElementById("bgcadetServiceId").value = localStorage.getItem("e");
        document.getElementById("bgcadetName").value = localStorage.getItem("i");
        // (<HTMLInputElement>document.getElementById("bgtermId")).value = localStorage.getItem("termId");
        document.getElementById("bgtermName").value = localStorage.getItem("termName");
        document.getElementById("bgcadetRank").value = localStorage.getItem("rank");
        // (<HTMLInputElement>document.getElementById("bgcourseNo")).value = localStorage.getItem("courseNo");
    };
    BeginingInterviewComponent.prototype.ngAfterViewInit = function () {
        this.getEdossierInterview();
    };
    BeginingInterviewComponent.prototype.goBack = function () {
        window.history.back();
    };
    /*-------------------------GET----------------------*/
    BeginingInterviewComponent.prototype.getEdossierInterview = function () {
        var _this = this;
        this.EDossierService.getBegInterviewDetails(this.Id).subscribe(function (res) {
            if (res && res.object) {
                var PLObj = res.object.find(function (obj) { return obj.submittedBy == 'PL_CDR'; });
                var PLData = PLObj;
                var coyObj = res.object.find(function (obj) { return obj.submittedBy == 'COY_CDR'; });
                var coyData = coyObj;
                var bnObj = res.object.find(function (obj) { return obj.submittedBy == 'BN_CDR'; });
                var bnData = bnObj;
                //   let PLData = res.object[0];
                // let coyData = res.object[1];
                // let bnData = res.object[2];
                // if(coyData && coyData.submittedBy !='COY_CDR'){
                //   let temp=coyData;
                //   coyData=bnData;
                //   bnData=temp;
                // }
                if (PLData != undefined) {
                    _this.interviewFormI.patchValue({
                        date: _this.datePipe.transform(PLData.date, 'yyyy-MM-dd'),
                        details: PLData.details,
                        capt: PLData.capt,
                        id: PLData,
                        gcInitialsWithDate: PLData.gcInitialsWithDate
                    });
                }
                if (coyData != undefined) {
                    _this.interviewFormII.patchValue({
                        date: _this.datePipe.transform(coyData.date, 'yyyy-MM-dd'),
                        details: coyData.details,
                        capt: coyData.capt,
                        id: coyData.id,
                        gcInitialsWithDate: coyData.gcInitialsWithDate
                    });
                }
                if (bnData != undefined) {
                    _this.interviewFormIII.patchValue({
                        date: _this.datePipe.transform(bnData.date, 'yyyy-MM-dd'),
                        details: bnData.details,
                        capt: bnData.capt,
                        id: bnData.id,
                        gcInitialsWithDate: bnData.gcInitialsWithDate
                    });
                }
            }
        });
    };
    /*------------------ADD------------------*/
    BeginingInterviewComponent.prototype.addClubsubmitI = function (cdrType) {
        var interviewForm;
        if (cdrType == 'PL_CDR') {
            interviewForm = this.interviewFormI.value;
        }
        else if (cdrType == 'COY_CDR') {
            interviewForm = this.interviewFormII.value;
        }
        else {
            interviewForm = this.interviewFormIII.value;
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
    BeginingInterviewComponent.prototype.validateForm = function (interviewForm) {
        var flag = true;
        if (!interviewForm.date || interviewForm.date.trim() == '' || !interviewForm.details || interviewForm.details.trim() == '' || !interviewForm.capt || interviewForm.capt.trim() == '') {
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
    // addClubsubmitII() {
    //   this.updateClubsubmitII(this.interviewFormII.value);
    // }
    BeginingInterviewComponent.prototype.addInitialsubmitI = function (formVal, cdrType) {
        var _this = this;
        formVal.details = formVal.details.trim();
        formVal.capt = formVal.capt.trim();
        if (cdrType == 'PL_CDR') {
            formVal.submittedBy = cdrType;
        }
        else if (cdrType == 'COY_CDR') {
            formVal.submittedBy = cdrType;
        }
        else {
            formVal.submittedBy = cdrType;
        }
        this.EDossierService.addBegInterviewDetails(formVal).subscribe(function (res) {
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
    BeginingInterviewComponent.prototype.updateInterview = function (formVal, cdrType) {
        var _this = this;
        formVal.details = formVal.details.trim();
        formVal.capt = formVal.capt.trim();
        if (cdrType == 'PL_CDR') {
            formVal.submittedBy = cdrType;
        }
        else if (cdrType == 'COY_CDR') {
            formVal.submittedBy = cdrType;
        }
        else {
            formVal.submittedBy = cdrType;
        }
        this.EDossierService.updateBegInterviewDetails(formVal).subscribe(function (res) {
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
    BeginingInterviewComponent.ctorParameters = function () { return [
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
    BeginingInterviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-begining-interview',
            template: _raw_loader_begining_interview_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_begining_interview_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_8__["EDossierService"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], BeginingInterviewComponent);
    return BeginingInterviewComponent;
}());



/***/ }),

/***/ "LWRs":
/*!***************************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/interviews/begining-interview/begining-interview.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 0 !important;\n}\n\n.mat-new-inner {\n  padding: 0.875rem 0 0 !important;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.backbtn button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  background-color: #c6c4c4;\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle;\n}\n\n.tg .tg-t2cw {\n  font-weight: bold;\n  text-align: center;\n  text-decoration: underline;\n  vertical-align: top;\n}\n\n.tg .tg-0lax {\n  text-align: left;\n  vertical-align: top;\n}\n\nbutton.btn-color {\n  background: #742923;\n  color: #fff;\n}\n\nbutton.btn-color:hover, button.btn-color:focus {\n  color: #fff;\n}");

/***/ }),

/***/ "jd6S":
/*!**********************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/interviews/begining-interview/begining-interview.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: BeginingInterviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginingInterviewModule", function() { return BeginingInterviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _begining_interview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./begining-interview.component */ "G7MB");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _begining_interview_component__WEBPACK_IMPORTED_MODULE_8__["BeginingInterviewComponent"]
    },
];
var BeginingInterviewModule = /** @class */ (function () {
    function BeginingInterviewModule() {
    }
    BeginingInterviewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _begining_interview_component__WEBPACK_IMPORTED_MODULE_8__["BeginingInterviewComponent"],
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
    ], BeginingInterviewModule);
    return BeginingInterviewModule;
}());



/***/ })

}]);