(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["interview-gc-interviewgc-module"],{

/***/ "IiG8":
/*!**********************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/interview-gc/interview-gc.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 0 !important;\n}\n\n.mat-new-inner {\n  padding: 0.875rem 0 0 !important;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  min-height: 420px;\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.backbtn button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle !important;\n}\n\n.tg .tg-54o0 {\n  background-color: #c6c4c4;\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle !important;\n}\n\n.tg .tg-719i {\n  background-color: #c6c4c4;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n}\n\n.tg .tg-9fba {\n  background-color: #c6c4c4;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: left;\n  vertical-align: top;\n}\n\nbutton.btn-color {\n  background: #742923;\n  color: #fff;\n}\n\nbutton.btn-color:hover, button.btn-color:focus {\n  color: #fff;\n}");

/***/ }),

/***/ "WBNo":
/*!****************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/interview-gc/interviewgc.module.ts ***!
  \****************************************************************************/
/*! exports provided: InterviewGcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewGcModule", function() { return InterviewGcModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _interview_gc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interview-gc.component */ "rqcI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _interview_gc_component__WEBPACK_IMPORTED_MODULE_6__["InterviewGcComponent"] },
];
var InterviewGcModule = /** @class */ (function () {
    function InterviewGcModule() {
    }
    InterviewGcModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _interview_gc_component__WEBPACK_IMPORTED_MODULE_6__["InterviewGcComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ]
        })
    ], InterviewGcModule);
    return InterviewGcModule;
}());



/***/ }),

/***/ "aaFE":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/interview-gc/interview-gc.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!---------------------------- Interview-sheet ----------------------------->\r\n<div class=\"main-content\" *ngIf=\"isShowSheet\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"mat-heading\">\r\n      <div id=\"top-bar\" class=\"\">\r\n        <h2 class=\"backbtn\">\r\n          <!-- <button mat-icon-button (click)=\"goBack()\">\r\n                <mat-icon>chevron_left</mat-icon>\r\n              </button>  -->\r\n          Interviews <span class=\"sub-menu1\">\r\n            > {{this.type}}</span>\r\n        </h2>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"interview-sheet\">\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n\r\n        <table class=\"tg\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"tg-9fba\" rowspan=\"2\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Date</span></th>\r\n              <th class=\"tg-719i\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Details</span></th>\r\n              <th class=\"tg-54o0\" rowspan=\"2\">OC Initials with date</th>\r\n              <!-- <th class=\"tg-9fba\" rowspan=\"2\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Action</span></th> -->\r\n            </tr>\r\n            <tr>\r\n              <th class=\"tg-54o0\">\r\n                INITIAL INTERVIEW : PL CDR\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr [formGroup]=\"interviewFormI\">\r\n\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" disabled max=\"{{maxDate}}\" required formControlName=\"appdate\"\r\n                    class=\"form-control\"> -->\r\n                <p class=\"text-center\">{{appdate}}</p>\r\n              </td>\r\n\r\n              <td class=\"tg-0lax\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">1.</span>\r\n                <span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Appearance,\r\n                  Bg and Comn Skills</span><span class=\"mb-2\"\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">\r\n                  :</span><br><br>\r\n                <!-- <textarea placeholder=\"\" maxlength=\"1500\" formControlName=\"appearence\" disabled\r\n                    (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                    class=\"form-control ng-untouched ng-pristine ng-invalid mt-2\" rows=\"5\"></textarea> -->\r\n                <p>{{appearence}}</p>\r\n\r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\" [value]=\"this.interviewFormI.value.appGcInitialsWithDate == null ? CurrentDate : this.interviewFormI.value.appGcInitialsWithDate\" formControlName=\"appGcInitialsWithDate\" disabled\r\n                    class=\"form-control\"> -->\r\n                <p class=\"text-center\">{{appGcInitialsWithDate}}</p>\r\n              </td>\r\n\r\n\r\n\r\n              <!-- <td class=\"tg-0lax text-center\"><button class=\"btn btn-color\" (click)=\"addClubsubmitI('appearence')\">Submit</button></td> -->\r\n            </tr>\r\n\r\n\r\n            <tr [formGroup]=\"interviewFormII\">\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" disabled max=\"{{maxDate}}\" formControlName=\"famDate\"\r\n                    class=\"form-control\"> -->\r\n                <p class=\"text-center\">{{famDate}}</p>\r\n                  \r\n              </td>\r\n              <td class=\"tg-0lax\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">2.</span>\r\n                <span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Family\r\n                  Background</span><span class=\"mb-2\"\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">\r\n                  :<br>\r\n                  <br>\r\n                <p>{{familyback}}</p>\r\n\r\n                  <!-- <textarea placeholder=\"\" disabled maxlength=\"1500\" formControlName=\"familyback\"\r\n                    (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                    class=\"form-control ng-untouched ng-pristine ng-invalid mt-2\" rows=\"5\"></textarea> -->\r\n\r\n                  </span>\r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\"\r\n                  [value]=\"this.interviewFormI.value.famiGcInitialsWithDate == null ? CurrentDate : this.interviewFormI.value.famiGcInitialsWithDate\"\r\n                  formControlName=\"famiGcInitialsWithDate\" disabled class=\"form-control\"> -->\r\n                <p class=\"text-center\">{{famiGcInitialsWithDate}}</p>\r\n\r\n                </td>\r\n            </tr>\r\n\r\n\r\n            <tr [formGroup]=\"interviewFormIII\">\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" disabled max=\"{{maxDate}}\" formControlName=\"workDate\"\r\n                  class=\"form-control\"> -->\r\n                <p class=\"text-center\">{{workDate}}</p>\r\n                </td>\r\n              <td class=\"tg-0lax\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">3.</span>\r\n                <span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Work\r\n                  Experience (if any</span><span class=\"mb-2\"\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">):</span><br><br>\r\n                  <!-- <textarea\r\n                  placeholder=\"\" maxlength=\"1500\" formControlName=\"workExp\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  class=\"mt-2 form-control ng-untouched ng-pristine ng-invalid\" rows=\"5\"></textarea> -->\r\n                <p >{{workExp}}</p>\r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\"\r\n                  [value]=\"this.interviewFormI.value.workGcInitialsWithDate == null ? CurrentDate : this.interviewFormI.value.workGcInitialsWithDate\"\r\n                  formControlName=\"workGcInitialsWithDate\" disabled class=\"form-control\"> -->\r\n                <p class=\"text-center\">{{workGcInitialsWithDate}}</p>\r\n                </td>\r\n            </tr>\r\n\r\n\r\n            <tr [formGroup]=\"interviewFormIV\">\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" disabled max=\"{{maxDate}}\" formControlName=\"iniDate\"\r\n                  class=\"form-control\"> -->\r\n                <p class=\"text-center\">{{iniDate}}</p>\r\n\r\n                </td>\r\n              <td class=\"tg-0lax\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">4.</span>\r\n                <span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Initial\r\n                  Assessment</span><span class=\"mb-2\"\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">:</span><br><br>\r\n                  <!-- <textarea\r\n                    placeholder=\"\" maxlength=\"1500\" formControlName=\"initialAss\" disabled\r\n                    (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                    class=\"mt-2 form-control ng-untouched ng-pristine ng-invalid\" rows=\"5\"></textarea> -->\r\n                <p >{{initialAss}}</p>\r\n\r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\"\r\n                  [value]=\"this.interviewFormI.value.iniGcInitialsWithDate == null ? CurrentDate : this.interviewFormI.value.iniGcInitialsWithDate\"\r\n                  formControlName=\"iniGcInitialsWithDate\" disabled class=\"form-control\"> -->\r\n                <p class=\"text-center\">{{iniGcInitialsWithDate}}</p>\r\n\r\n                </td>\r\n            </tr>\r\n\r\n\r\n            <tr [formGroup]=\"interviewFormV\">\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" disabled max=\"{{maxDate}}\" formControlName=\"misDate\"\r\n                  class=\"form-control\"> -->\r\n                <p class=\"text-center\">{{misDate}}</p>\r\n\r\n                </td>\r\n              <td class=\"tg-0lax\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">5.</span>\r\n                <span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Misc/Other\r\n                  Relevant Info</span><span class=\"mb-2\"\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">:</span><br><br>\r\n                  <!-- <textarea\r\n                    placeholder=\"\" disabled maxlength=\"1500\" formControlName=\"misc\"\r\n                    (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                    class=\"mt-2 form-control ng-untouched ng-pristine ng-invalid\" rows=\"5\"></textarea> -->\r\n                <p>{{misc}}</p>\r\n\r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\"\r\n                  [value]=\"this.interviewFormI.value.misGcInitialsWithDate == null ? CurrentDate : this.interviewFormI.value.misGcInitialsWithDate\"\r\n                  formControlName=\"misGcInitialsWithDate\" disabled class=\"form-control\"> -->\r\n                <p class=\"text-center\">{{misGcInitialsWithDate}}</p>\r\n\r\n                </td>\r\n            </tr>\r\n\r\n\r\n            <tr [formGroup]=\"interviewFormVI\">\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" disabled max=\"{{maxDate}}\" formControlName=\"anyDate\"\r\n                  class=\"form-control\"> -->\r\n                <p class=\"text-center\">{{anyDate}}</p>\r\n\r\n                </td>\r\n              <td class=\"tg-0lax\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">6.</span>\r\n                <span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Any\r\n                  Pts From the OC</span><span class=\"mb-2\"\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">:</span><br><br>\r\n                  <!-- <textarea\r\n                    placeholder=\"\" maxlength=\"1500\" formControlName=\"anyPts\" disabled\r\n                    (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                    class=\"mt-2 form-control ng-untouched ng-pristine ng-invalid\" rows=\"5\"></textarea> -->\r\n                <p>{{anyPts}}</p>\r\n\r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\"\r\n                  [value]=\"this.interviewFormI.value.anyGcInitialsWithDate == null ? CurrentDate : this.interviewFormI.value.anyGcInitialsWithDate\"\r\n                  formControlName=\"anyGcInitialsWithDate\" disabled class=\"form-control\"> -->\r\n                <p class=\"text-center\">{{anyGcInitialsWithDate}}</p>\r\n                </td>\r\n            </tr>\r\n\r\n\r\n            <tr [formGroup]=\"interviewFormVII\">\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" disabled max=\"{{maxDate}}\" formControlName=\"ihavDate\"\r\n                  class=\"form-control\"> -->\r\n                <p class=\"text-center\">{{ihavDate}}</p>\r\n\r\n                </td>\r\n              <td class=\"tg-0lax\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">7.</span>\r\n                <span class=\"mb-2\"\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">I\r\n                  have explained the trg curriculum, SOPs &amp;TrgInstrs being followed at IMA:</span><br><br>\r\n                  <!-- <textarea\r\n                    placeholder=\"\" maxlength=\"1500\" formControlName=\"iHaveExp\" disabled\r\n                    (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                    class=\"form-control ng-untouched ng-pristine ng-invalid mt-2\" rows=\"5\"></textarea> -->\r\n                <p >{{iHaveExp}}</p>\r\n\r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\"\r\n                  [value]=\"this.interviewFormI.value.ihavGcInitialsWithDate == null ? CurrentDate : this.interviewFormI.value.ihavGcInitialsWithDate\"\r\n                  formControlName=\"ihavGcInitialsWithDate\" disabled class=\"form-control\"> -->\r\n                <p class=\"text-center\">{{ihavGcInitialsWithDate}}</p>\r\n\r\n                </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!------------------------------------- Instructions for Interviews and Counselling -------------------->\r\n<div class=\"main-content\" *ngIf=\"isInstructions\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"warning-instruction\">\r\n      <div class=\"mat-heading\">\r\n        <div id=\"top-bar\" class=\"\">\r\n          <!-- <h2 class=\"backbtn\"><button mat-icon-button (click)=\"goBack()\">\r\n                  <mat-icon>chevron_left</mat-icon>\r\n                </button>E-Dossier <span class=\"sub-menu1\">\r\n                  > Interviews > INSTRUCTIONS FOR INTERVIEWS AND COUNSELLING</span></h2> -->\r\n          <h2 class=\"backbtn\">\r\n            <!-- <button mat-icon-button (click)=\"goBack()\">\r\n                    <mat-icon>chevron_left</mat-icon>\r\n                  </button> -->\r\n                 Interviews <span class=\"sub-menu1\">\r\n               > {{this.type}}</span>\r\n          </h2>\r\n        </div>\r\n      </div>\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n        <div class=\"ng-star-inserted\">\r\n\r\n        </div>\r\n        <div class=\"interview-counselling-description\">\r\n          <ol>\r\n            <li class=\"mb-2\">Instructions for initial interview are as given below :-\r\n              <ol class=\"mt-2 laparent\" type=\"a\">\r\n                <li class=\"pr-2\">\r\n                  Interview to be recorded in ink in the Offr’s own hand.\r\n                </li>\r\n                <li class=\"pr-2\">\r\n                  Pl Cdr’s initial interview to be conducted within 24hrs of arr of the OC.\r\n                </li>\r\n                <li class=\"pr-2\">Pts to be conveyed by Pl Cdr -\r\n                  <ol class=\"mt-2 laparent\" type=\"i\">\r\n                    <li class=\"mb-2 pr-2\">Welcome.</li>\r\n                    <li class=\"mb-2 pr-2\">Brief on gen conduct of trginclspl emphasis.</li>\r\n                    <li class=\"mb-2 pr-2\">Expectations of the environment.</li>\r\n                    <li class=\"mb-2 pr-2\">Adm Brief.</li>\r\n                    <li class=\"mb-2 pr-2\">Ascertain if the OC has any problem.</li>\r\n                  </ol>\r\n                </li>\r\n                <li class=\"pr-2\">Instrs for Coy Cdr for initial interview -\r\n                  <ol class=\"mt-2 laparent\" type=\"i\">\r\n                    <li class=\"mb-2 pr-2\">Interview to be recorded in ink in the Offr’s own hand.</li>\r\n                    <li class=\"mb-2 pr-2\">Coy Cdr’s initial interview to be conducted within 48hrs of arr of the OC.\r\n                    </li>\r\n                    <li class=\"mb-2 pr-2\">Initial interview by Coy Cdr will reaffirm all the obsn of Pl Cdr.</li>\r\n                    <li class=\"mb-2 pr-2\">Check whether the OC has settled down or not.</li>\r\n                    <li class=\"mb-2 pr-2\">Advise him on conduct of trg.</li>\r\n                  </ol>\r\n                </li>\r\n              </ol>\r\n            </li>\r\n            <li class=\"mb-2 pr-2\"><span class=\"mr-3\"><b>Mid Term Interview.</b></span>Pl Cdr to interview the OC after\r\n              Mid Term Break and brief him about his performance in various fields and endorse the same. Coy Cdr to\r\n              guide the OC and enquire about any adm problem being faced. Cases requiring spl attention to be brought to\r\n              Bn Cdr’s notice.</li>\r\n            <li class=\"mb-2 pr-2\"><span class=\"mr-3\"><b>Beginning of Term Interview.</b></span>Interview to be recorded\r\n              in ink in the Offr’s own hand. Previous term’s performance to be highlighted and aspects requiring\r\n              improvement to be brought out.</li>\r\n            <li class=\"mb-2 pr-2\"><span class=\"mr-3\"><b>Special Interview.</b></span>By Coy Cdr/ Bn Cdr for OC who\r\n              wishes to resign and also for those who merit attention due to various reasons.</li>\r\n            <li class=\"mb-2 pr-2\"><span class=\"mr-3\"><b>Obsn Sheet.</b></span>Any significant obsn which is brought to\r\n              the notice of the Pl/Coy Cdr to be endorsed in this space. Good obsns should be endorsed in blue ink while\r\n              adverse obsns to be endorsed in red ink.Actions taken by the Pl/Coy Cdr to be mentioned in the Remarks\r\n              coln.</li>\r\n            <li class=\"mb-2 pr-2\"><span class=\"mr-3\"><b>Counselling.</b></span>A OC will be counselled by Pl Cdr/ Coy\r\n              Cdr/ BnCdr on poor performance in various fields and for not adhering to laid down norms.</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!------------------------------------- Initial Interview ------------------------------>\r\n<div class=\"main-content\" *ngIf=\"isInitial\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"mat-heading\">\r\n      <div id=\"top-bar\" class=\"\">\r\n        \r\n        <h2 class=\"backbtn\">\r\n          \r\n          Interviews <span class=\"sub-menu1\">\r\n            > {{type}}</span>\r\n        </h2>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"interview-sheet\">\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n        <table class=\"tg\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"tg-t2cw\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;\">Date</span>\r\n              </th>\r\n              <th class=\"tg-t2cw\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Details</span>\r\n              </th>\r\n              <th class=\"tg-t2cw\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">OCs\r\n                  Initials with date</span></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr [formGroup]=\"initialInterviewFormI\">\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" disabled class=\"form-control ng-untouched ng-pristine ng-invalid\"\r\n                  formControlName=\"date\" max=\"{{maxDate}}\" required> -->\r\n                <p >{{date}}</p>\r\n\r\n                </td>\r\n              <td class=\"tg-0lax\">\r\n                <label\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">INITIAL\r\n                  INTERVIEW : COY CDR</label>\r\n                <!-- <textarea placeholder=\"\" maxlength=\"1500\" formControlName=\"initialInterview\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid\" rows=\"3\"></textarea> -->\r\n                <p >{{initialInterview}}</p>\r\n\r\n                  <br><br><br><br>\r\n                <label>Maj/Lt Col <br>Coy Cdr</label>\r\n                <!-- <input type=\"text\" placeholder=\"\"\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  formControlName=\"majCol\" disabled class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                <p >{{majCol}}</p>\r\n\r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\"\r\n                  [value]=\"this.initialInterviewFormI.value.gcInitialsWithDate == null ? CurrentDate : this.initialInterviewFormI.value.gcInitialsWithDate\"\r\n                  formControlName=\"gcInitialsWithDate\" disabled> -->\r\n                <p >{{gcInitialsWithDate}}</p>\r\n\r\n                </td>\r\n            </tr>\r\n\r\n\r\n            <tr [formGroup]=\"initialInterviewFormII\">\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" max=\"{{maxDate}}\" disabled\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid\" formControlName=\"date\"> -->\r\n                <p >{{date}}</p>\r\n\r\n                </td>\r\n              <td class=\"tg-0lax\">\r\n                <label\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">INITIAL\r\n                  INTERVIEW : Bn CDR</label>\r\n                <!-- <textarea placeholder=\"\" maxlength=\"1500\" formControlName=\"initialInterview\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid\" rows=\"3\"></textarea> -->\r\n                <p >{{initialInterview}}</p>\r\n\r\n                  <br><br><br><br>\r\n                <label>Col <br>Bn Cdr</label>\r\n                <!-- <input type=\"text\" placeholder=\"\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  formControlName=\"majCol\" class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                <p>{{majCol}}</p>\r\n\r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\"\r\n                  [value]=\"this.initialInterviewFormII.value.gcInitialsWithDate == null ? CurrentDate : this.initialInterviewFormII.value.gcInitialsWithDate\"\r\n                  formControlName=\"gcInitialsWithDate\" disabled> -->\r\n                <p >{{gcInitialsWithDate}}</p>\r\n\r\n                </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!------------------------- Begining Term Interview ---------------------------------->\r\n<div class=\"main-content\" *ngIf=\"isBegining\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"mat-heading\">\r\n      <div id=\"top-bar\" class=\"\">\r\n        \r\n        <h2 class=\"backbtn\">\r\n          \r\n          Interviews <span class=\"sub-menu1\">\r\n             > {{type}}</span>\r\n        </h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"interview-sheet\">\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n        <table class=\"tg\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"tg-t2cw\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Date</span>\r\n              </th>\r\n              <th class=\"tg-t2cw\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Details</span>\r\n              </th>\r\n              <th class=\"tg-t2cw\" colspan=\"2\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">OC\r\n                  Initials with date</span></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr [formGroup]=\"begInterviewFormI\">\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" disabled max=\"{{maxDate}}\" placeholder=\"\" formControlName=\"date\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                <p >{{date}}</p>\r\n                </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <textarea placeholder=\"\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid\" rows=\"3\" maxlength=\"1500\"\r\n                  formControlName=\"details\"></textarea> -->\r\n                <p >{{details}}</p>\r\n                  <br><br><br><br>\r\n                <label>Capt/Maj <br>Pl Cdr</label>\r\n                <!-- <input type=\"text\" placeholder=\"\" formControlName=\"capt\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                <p >{{capt}}</p>\r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\" placeholder=\"\"\r\n                  [value]=\"this.begInterviewFormI.value.gcInitialsWithDate == null ? CurrentDate : this.begInterviewFormI.value.gcInitialsWithDate\"\r\n                  formControlName=\"gcInitialsWithDate\" disabled\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                <p >{{gcInitialsWithDate}}</p>\r\n                </td>\r\n            </tr>\r\n            <tr [formGroup]=\"begInterviewFormII\">\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" max=\"{{maxDate}}\" disabled placeholder=\"\" formControlName=\"date\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                  <p >{{date}}</p>\r\n                \r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <textarea placeholder=\"\" maxlength=\"1500\" formControlName=\"details\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid\" rows=\"3\"></textarea> -->\r\n                  <p >{{details}}</p>\r\n\r\n                  <br><br><br><br>\r\n                <label>Maj/Lt Col <br>Coy Cdr</label>\r\n                <!-- <input type=\"text\" placeholder=\"\" formControlName=\"capt\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                  <p >{{capt}}</p>\r\n\r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\" placeholder=\"\"\r\n                  [value]=\"this.begInterviewFormII.value.gcInitialsWithDate == null ? CurrentDate : this.begInterviewFormII.value.gcInitialsWithDate\"\r\n                  formControlName=\"gcInitialsWithDate\" disabled\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                  <p >{{gcInitialsWithDate}}</p>\r\n                </td>\r\n            </tr>\r\n            <tr [formGroup]=\"begInterviewFormIII\">\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" max=\"{{maxDate}}\" disabled placeholder=\"\" formControlName=\"date\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                  <p >{{date}}</p>\r\n\r\n                </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <textarea placeholder=\"\" maxlength=\"1500\" formControlName=\"details\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid\" rows=\"3\"></textarea> -->\r\n                  <p >{{details}}</p>\r\n\r\n                  <br><br><br><br>\r\n                <label>Col <br>Bn Cdr</label>\r\n                <!-- <input type=\"text\" placeholder=\"\" formControlName=\"capt\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                  <p >{{capt}}</p>\r\n\r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\" placeholder=\"\"\r\n                  [value]=\"this.begInterviewFormIII.value.gcInitialsWithDate == null ? CurrentDate : this.begInterviewFormIII.value.gcInitialsWithDate\"\r\n                  formControlName=\"gcInitialsWithDate\" disabled\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                  <p >{{gcInitialsWithDate}}</p>\r\n\r\n                </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- ------------------------Mid Term Interview -------------------------->\r\n<div class=\"main-content\" *ngIf=\"isMid\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"mat-heading\">\r\n      <div id=\"top-bar\" class=\"\">\r\n        \r\n        <h2 class=\"backbtn\">\r\n          \r\n          Interviews <span class=\"sub-menu1\">\r\n             > {{type}}</span>\r\n        </h2>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"interview-sheet\">\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n        <table class=\"tg\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"tg-t2cw\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Date</span>\r\n              </th>\r\n              <th class=\"tg-t2cw\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Details</span>\r\n              </th>\r\n              <th class=\"tg-t2cw\" colspan=\"2\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">OC\r\n                  Initials with date</span></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr [formGroup]=\"MidInterviewFormI\">\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" max=\"{{maxDate}}\" disabled placeholder=\"\" formControlName=\"date\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                  <p >{{date}}</p>\r\n\r\n                </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <textarea placeholder=\"\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid\" rows=\"3\" maxlength=\"1500\"\r\n                  formControlName=\"details\"></textarea> -->\r\n                  <p >{{details}}</p>\r\n\r\n                  <br><br><br><br>\r\n                <label>Capt/Maj <br>Pl Cdr</label>\r\n                <!-- <input type=\"text\" placeholder=\"\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  formControlName=\"capt\" class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                  <p >{{capt}}</p>\r\n\r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\" placeholder=\"\"\r\n                  [value]=\"this.MidInterviewFormI.value.gcInitialsWithDate == null ? CurrentDate : this.MidInterviewFormI.value.gcInitialsWithDate\"\r\n                  formControlName=\"gcInitialsWithDate\" disabled\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                  <p >{{gcInitialsWithDate}}</p>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr [formGroup]=\"MidInterviewFormII\">\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" max=\"{{maxDate}}\" disabled placeholder=\"\" formControlName=\"date\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                  <p >{{date}}</p>\r\n\r\n                </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <textarea placeholder=\"\" maxlength=\"1500\" formControlName=\"details\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid\" rows=\"3\"></textarea> -->\r\n                  <p >{{details}}</p>\r\n\r\n                  <br><br><br><br>\r\n                <label>Maj/Lt Col <br>Coy Cdr</label>\r\n                <!-- <input type=\"text\" placeholder=\"\" formControlName=\"capt\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                  <p >{{capt}}</p>\r\n\r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\" placeholder=\"\"\r\n                  [value]=\"this.MidInterviewFormII.value.gcInitialsWithDate == null ? CurrentDate : this.MidInterviewFormII.value.gcInitialsWithDate\"\r\n                  formControlName=\"gcInitialsWithDate\" disabled\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                  <p >{{gcInitialsWithDate}}</p>\r\n\r\n                </td>\r\n            </tr>\r\n            <tr [formGroup]=\"MidInterviewFormIII\">\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" max=\"{{maxDate}}\" disabled placeholder=\"\" formControlName=\"date\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                  <p >{{date}}</p>\r\n\r\n                </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <textarea placeholder=\"\" maxlength=\"1500\" formControlName=\"details\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid\" rows=\"3\"></textarea> -->\r\n                  <p >{{details}}</p>\r\n\r\n                  <br><br><br><br>\r\n                <label>Col <br>Bn Cdr</label>\r\n                <!-- <input type=\"text\" placeholder=\"\" formControlName=\"capt\" disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                  <p >{{capt}}</p>\r\n\r\n              </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\" placeholder=\"\"\r\n                  [value]=\"this.MidInterviewFormIII.value.gcInitialsWithDate == null ? CurrentDate : this.MidInterviewFormIII.value.gcInitialsWithDate\"\r\n                  formControlName=\"gcInitialsWithDate\" disabled\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"> -->\r\n                  <p >{{gcInitialsWithDate}}</p>\r\n\r\n                </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!---------------------- Special Interview -------------------------->\r\n<div class=\"main-content\" *ngIf=\"isSpecial\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"mat-heading\">\r\n      <div id=\"top-bar\" class=\"\">\r\n        \r\n        <h2 class=\"backbtn\">\r\n          \r\n          Interviews <span class=\"sub-menu1\">\r\n             > {{type}}</span>\r\n        </h2>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"interview-sheet\">\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n\r\n        <table class=\"tg\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"tg-t2cw\" rowspan=\"2\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Date</span>\r\n              </th>\r\n              <th class=\"tg-t2cw\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Details</span>\r\n              </th>\r\n              <th class=\"tg-t2cw\" rowspan=\"2\"><span\r\n                  style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">OCs\r\n                  Initials with date</span></th>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"tg-t2cw\">SPECIAL INTERVIEW</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr [formGroup]=\"specialInterviewFormI\">\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"date\" max=\"{{maxDate}}\" disabled formControlName=\"date\"\r\n                  class=\"form-control\"> -->\r\n                  <p >{{date}}</p>\r\n\r\n                </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <textarea class=\"form-control\" maxlength=\"1500\" formControlName=\"specialInterview\"\r\n                  disabled\r\n                  (keypress)=\"$event.keyCode === 32 && !$event.target.value.length ? $event.preventDefault() : true\"\r\n                  rows=\"3\"></textarea> -->\r\n                  <p >{{specialInterview}}</p>\r\n\r\n                </td>\r\n              <td class=\"tg-0lax\">\r\n                <!-- <input type=\"text\"\r\n                  [value]=\"this.specialInterviewFormI.value.gcInitialsWithDate == null ? CurrentDate : this.specialInterviewFormI.value.gcInitialsWithDate\"\r\n                  formControlName=\"gcInitialsWithDate\" disabled class=\"form-control\"> -->\r\n                  <p >{{gcInitialsWithDate}}</p>\r\n\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "rqcI":
/*!********************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/interview-gc/interview-gc.component.ts ***!
  \********************************************************************************/
/*! exports provided: InterviewGcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewGcComponent", function() { return InterviewGcComponent; });
/* harmony import */ var _raw_loader_interview_gc_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./interview-gc.component.html */ "aaFE");
/* harmony import */ var _interview_gc_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interview-gc.component.scss */ "IiG8");
/* harmony import */ var _service_gc_gc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../service/gc/gc.service */ "yuBT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var InterviewGcComponent = /** @class */ (function () {
    function InterviewGcComponent(router, route, adminservice, spinner, cdref, dialog, sharedService, GcService, location, fb, EDossierService, localID) {
        this.router = router;
        this.route = route;
        this.adminservice = adminservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.GcService = GcService;
        this.location = location;
        this.fb = fb;
        this.EDossierService = EDossierService;
        // displayedColumns: string[] = ['number', 'name', 'createdAt', 'document'];
        this.PCHT = [];
        this.isShow = false;
        this.isShowSheet = false;
        this.isInstructions = false;
        this.isInitial = false;
        this.isBegining = false;
        this.isMid = false;
        this.isSpecial = false;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]('en-IN');
        this.interviewFormI = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.interviewFormII = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.interviewFormIII = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.interviewFormIV = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.interviewFormV = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.interviewFormVI = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.interviewFormVII = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.initialInterviewFormI = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.initialInterviewFormII = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.begInterviewFormI = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.begInterviewFormII = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.begInterviewFormIII = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.MidInterviewFormI = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.MidInterviewFormII = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.MidInterviewFormIII = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.specialInterviewFormI = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.yScrollStack = [];
        this.localID = localID;
        var today = new Date();
        var DATE = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.CurrentDate = this.datePipe.transform(DATE, 'dd/MM/yyyy');
        /**************INTERVIEW SHEET***************/
        this.interviewFormI = this.fb.group({
            appdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            appearence: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            appGcInitialsWithDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
        this.interviewFormII = this.fb.group({
            famDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            familyback: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            famiGcInitialsWithDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
        this.interviewFormIII = this.fb.group({
            workDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            workExp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            workGcInitialsWithDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
        this.interviewFormIV = this.fb.group({
            iniDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            initialAss: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            iniGcInitialsWithDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
        this.interviewFormV = this.fb.group({
            misDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            misc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            misGcInitialsWithDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
        this.interviewFormVI = this.fb.group({
            anyDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            anyPts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            anyGcInitialsWithDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
        this.interviewFormVII = this.fb.group({
            ihavDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            iHaveExp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            ihavGcInitialsWithDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
        /**************INITIAL INTERVIEW***************/
        this.initialInterviewFormI = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            initialInterview: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            majCol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            gcInitialsWithDate: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
        this.initialInterviewFormII = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            initialInterview: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            majCol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            gcInitialsWithDate: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
        /**************BEGINING INTERVIEW***************/
        this.begInterviewFormI = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            capt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            gcInitialsWithDate: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
        this.begInterviewFormII = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            capt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            gcInitialsWithDate: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
        this.begInterviewFormIII = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            capt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            gcInitialsWithDate: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
        /**************MID INTERVIEW***************/
        this.MidInterviewFormI = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            capt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            gcInitialsWithDate: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
        this.MidInterviewFormII = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            capt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            gcInitialsWithDate: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
        this.MidInterviewFormIII = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            capt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            gcInitialsWithDate: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
        /**************SPECIAL INTERVIEW***************/
        this.specialInterviewFormI = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            specialInterview: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            termId: [1],
            serviceId: [''],
            gcInitialsWithDate: [''],
            status: [1],
            id: [''],
            isViewByGc: true
        });
    } //constructor
    InterviewGcComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.length) {
            this.router.navigate(['/pages']);
        }
        this.cadetDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        this.route.params.subscribe(function (params) {
            _this.type = params.type;
            _this.isShowSheet = false;
            _this.isInstructions = false;
            _this.isInitial = false;
            _this.isBegining = false;
            _this.isMid = false;
            _this.isSpecial = false;
            console.log("this.type==>", _this.type);
            if (_this.type == "Interview Sheet") {
                _this.isShowSheet = true;
                _this.getEdossierInterview();
            }
            else if (_this.type == "Instructions for Interviews and Counselling") {
                _this.isInstructions = true;
            }
            if (_this.type == "Initial Interview") {
                _this.isInitial = true;
                _this.getInitialInterview();
            }
            if (_this.type == "Begining Term Interview") {
                _this.isBegining = true;
                _this.getBegningInterview();
            }
            if (_this.type == "Mid Term Interview") {
                _this.isMid = true;
                _this.getMidInterview();
            }
            if (_this.type == "Special Interview") {
                _this.isSpecial = true;
                _this.getSpecialInterview();
            }
        });
    };
    // ngAfterViewInit() {
    //   this.getEdossierInterview();
    //   this.getInitialInterview();
    //   this.getBegningInterview();
    //   this.getMidInterview();
    //   this.getSpecialInterview();
    // }
    InterviewGcComponent.prototype.goBack = function () {
        window.history.back();
    };
    InterviewGcComponent.prototype.getEdossierInterview = function () {
        var _this = this;
        this.serviceId = this.cadetDetails.serviceId;
        var name = this.cadetDetails.name;
        var nameArr = name.split(" ");
        var gcInitials = "";
        for (var i = 0; i < nameArr.length; i++) {
            gcInitials = gcInitials + nameArr[i].charAt(0).toUpperCase();
        }
        this.CurrentDate = gcInitials + "-" + this.CurrentDate;
        console.log('name-->>', name);
        console.log('CurrentDate==>>', this.CurrentDate);
        this.EDossierService.getInterviewDetails(this.serviceId).subscribe(function (res) {
            if (res && res.object) {
                _this.interviewFormI.patchValue({
                    appdate: _this.datePipe.transform(res.object.appdate, 'yyyy-MM-dd'),
                    appearence: res.object.appearence,
                    appGcInitialsWithDate: res.object.appGcInitialsWithDate,
                    id: res.object.id,
                    serviceId: res.object.serviceId,
                });
                _this.appdate = _this.datePipe.transform(res.object.appdate, 'yyyy-MM-dd');
                _this.appearence = res.object.appearence;
                _this.appGcInitialsWithDate = res.object.appGcInitialsWithDate;
                _this.updateInterviewSheet(_this.interviewFormI);
                _this.interviewFormII.patchValue({
                    famDate: _this.datePipe.transform(res.object.famDate, 'yyyy-MM-dd'),
                    familyback: res.object.familyback,
                    famiGcInitialsWithDate: res.object.famiGcInitialsWithDate,
                    id: res.object.id,
                    serviceId: res.object.serviceId,
                });
                _this.famDate = _this.datePipe.transform(res.object.famDate, 'yyyy-MM-dd'),
                    _this.familyback = res.object.familyback,
                    _this.famiGcInitialsWithDate = res.object.famiGcInitialsWithDate,
                    _this.updateInterviewSheet(_this.interviewFormII);
                _this.interviewFormIII.patchValue({
                    workDate: _this.datePipe.transform(res.object.workDate, 'yyyy-MM-dd'),
                    workExp: res.object.workExp,
                    workGcInitialsWithDate: res.object.workGcInitialsWithDate,
                    id: res.object.id,
                    serviceId: res.object.serviceId,
                });
                _this.workDate = _this.datePipe.transform(res.object.workDate, 'yyyy-MM-dd'),
                    _this.workExp = res.object.workExp,
                    _this.workGcInitialsWithDate = res.object.workGcInitialsWithDate,
                    _this.updateInterviewSheet(_this.interviewFormIII);
                _this.interviewFormIV.patchValue({
                    iniDate: _this.datePipe.transform(res.object.iniDate, 'yyyy-MM-dd'),
                    initialAss: res.object.initialAss,
                    iniGcInitialsWithDate: res.object.iniGcInitialsWithDate,
                    id: res.object.id,
                    serviceId: res.object.serviceId,
                });
                _this.iniDate = _this.datePipe.transform(res.object.iniDate, 'yyyy-MM-dd'),
                    _this.initialAss = res.object.initialAss,
                    _this.iniGcInitialsWithDate = res.object.iniGcInitialsWithDate,
                    _this.updateInterviewSheet(_this.interviewFormIV);
                _this.interviewFormV.patchValue({
                    misDate: _this.datePipe.transform(res.object.misDate, 'yyyy-MM-dd'),
                    misc: res.object.misc,
                    misGcInitialsWithDate: res.object.misGcInitialsWithDate,
                    id: res.object.id,
                    serviceId: res.object.serviceId,
                });
                _this.misDate = _this.datePipe.transform(res.object.misDate, 'yyyy-MM-dd'),
                    _this.misc = res.object.misc,
                    _this.misGcInitialsWithDate = res.object.misGcInitialsWithDate,
                    _this.updateInterviewSheet(_this.interviewFormV);
                _this.interviewFormVI.patchValue({
                    anyDate: _this.datePipe.transform(res.object.anyDate, 'yyyy-MM-dd'),
                    anyPts: res.object.anyPts,
                    anyGcInitialsWithDate: res.object.anyGcInitialsWithDate,
                    id: res.object.id,
                    serviceId: res.object.serviceId,
                });
                _this.anyDate = _this.datePipe.transform(res.object.anyDate, 'yyyy-MM-dd'),
                    _this.anyPts = res.object.anyPts,
                    _this.anyGcInitialsWithDate = res.object.anyGcInitialsWithDate,
                    _this.updateInterviewSheet(_this.interviewFormVI);
                _this.interviewFormVII.patchValue({
                    ihavDate: _this.datePipe.transform(res.object.ihavDate, 'yyyy-MM-dd'),
                    iHaveExp: res.object.iHaveExp,
                    ihavGcInitialsWithDate: res.object.ihavGcInitialsWithDate,
                    id: res.object.id,
                    serviceId: res.object.serviceId,
                });
                _this.ihavDate = _this.datePipe.transform(res.object.ihavDate, 'yyyy-MM-dd'),
                    _this.iHaveExp = res.object.iHaveExp,
                    _this.ihavGcInitialsWithDate = res.object.ihavGcInitialsWithDate,
                    _this.updateInterviewSheet(_this.interviewFormVII);
            }
        });
    };
    InterviewGcComponent.prototype.updateInterviewSheet = function (form) {
        var _this = this;
        var formVal = form.value;
        this.serviceId = this.cadetDetails.serviceId;
        this.spinner.show();
        this.EDossierService.updateinterviewDetailsGc(formVal).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                // this.getEdossierInterview();
                _this.spinner.hide();
                // this.adminservice.openSnackbar(res.message);
                // window.location.reload();
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
    InterviewGcComponent.prototype.getInitialInterview = function () {
        var _this = this;
        this.serviceId = this.cadetDetails.serviceId;
        var name = this.cadetDetails.name;
        var nameArr = name.split(" ");
        var gcInitials = "";
        for (var i = 0; i < nameArr.length; i++) {
            gcInitials = gcInitials + nameArr[i].charAt(0).toUpperCase();
        }
        this.CurrentDate = gcInitials + "-" + this.CurrentDate;
        console.log('name-->>', name);
        console.log('CurrentDate==>>', this.CurrentDate);
        this.EDossierService.getInitialInterviewDetails(this.serviceId).subscribe(function (res) {
            if (res && res.object) {
                var Id = res.object.id;
                var coyObj = res.object.find(function (obj) { return obj.submittedBy == 'COY_CDR'; });
                var coyData = coyObj;
                var bnObj = res.object.find(function (obj) { return obj.submittedBy == 'BN_CDR'; });
                var bnData = bnObj;
                if (coyData != undefined) {
                    _this.initialInterviewFormI.patchValue({
                        date: _this.datePipe.transform(coyData.date, 'yyyy-MM-dd'),
                        initialInterview: coyData.initialInterview,
                        majCol: coyData.majCol,
                        id: coyData.id,
                        serviceId: coyData.serviceId,
                        gcInitialsWithDate: coyData.gcInitialsWithDate
                    });
                    _this.date = _this.datePipe.transform(coyData.date, 'yyyy-MM-dd');
                    _this.initialInterview = coyData.initialInterview;
                    _this.majCol = coyData.majCol;
                    _this.gcInitialsWithDate = coyData.gcInitialsWithDate;
                    _this.updateInitialInterview(_this.initialInterviewFormI);
                }
                if (bnData != undefined) {
                    _this.initialInterviewFormII.patchValue({
                        date: _this.datePipe.transform(bnData.date, 'yyyy-MM-dd'),
                        initialInterview: bnData.initialInterview,
                        majCol: bnData.majCol,
                        id: bnData.id,
                        serviceId: bnData.serviceId,
                        gcInitialsWithDate: bnData.gcInitialsWithDate
                    });
                    _this.date = _this.datePipe.transform(bnData.date, 'yyyy-MM-dd');
                    _this.initialInterview = bnData.initialInterview;
                    _this.majCol = bnData.majCol;
                    _this.gcInitialsWithDate = bnData.gcInitialsWithDate;
                    _this.updateInitialInterview(_this.initialInterviewFormII);
                    _this.spinner.hide();
                }
            }
        });
    };
    InterviewGcComponent.prototype.updateInitialInterview = function (form) {
        var _this = this;
        var formVal = form.value;
        this.serviceId = this.cadetDetails.serviceId;
        this.EDossierService.updateInitialInterviewDetailsGc(formVal).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.spinner.hide();
                // this.adminservice.openSnackbar(res.message);
                // window.location.reload();
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
    InterviewGcComponent.prototype.getBegningInterview = function () {
        var _this = this;
        this.serviceId = this.cadetDetails.serviceId;
        var name = this.cadetDetails.name;
        var nameArr = name.split(" ");
        var gcInitials = "";
        for (var i = 0; i < nameArr.length; i++) {
            gcInitials = gcInitials + nameArr[i].charAt(0).toUpperCase();
        }
        this.CurrentDate = gcInitials + "-" + this.CurrentDate;
        console.log('name-->>', name);
        console.log('CurrentDate==>>', this.CurrentDate);
        this.EDossierService.getBegInterviewDetails(this.serviceId).subscribe(function (res) {
            if (res && res.object) {
                var PLObj = res.object.find(function (obj) { return obj.submittedBy == 'PL_CDR'; });
                var PLData = PLObj;
                var coyObj = res.object.find(function (obj) { return obj.submittedBy == 'COY_CDR'; });
                var coyData = coyObj;
                var bnObj = res.object.find(function (obj) { return obj.submittedBy == 'BN_CDR'; });
                var bnData = bnObj;
                if (PLData != undefined) {
                    _this.begInterviewFormI.patchValue({
                        date: _this.datePipe.transform(PLData.date, 'yyyy-MM-dd'),
                        details: PLData.details,
                        capt: PLData.capt,
                        id: PLData.id,
                        serviceId: PLData.serviceId,
                        gcInitialsWithDate: PLData.gcInitialsWithDate
                    });
                    _this.date = _this.datePipe.transform(PLData.date, 'yyyy-MM-dd');
                    _this.details = PLData.details;
                    _this.capt = PLData.capt;
                    _this.gcInitialsWithDate = PLData.gcInitialsWithDate;
                    _this.updateBegningInterview(_this.begInterviewFormI);
                }
                if (coyData != undefined) {
                    _this.begInterviewFormII.patchValue({
                        date: _this.datePipe.transform(coyData.date, 'yyyy-MM-dd'),
                        details: coyData.details,
                        capt: coyData.capt,
                        id: coyData.id,
                        serviceId: coyData.serviceId,
                        gcInitialsWithDate: coyData.gcInitialsWithDate
                    });
                    _this.date = _this.datePipe.transform(coyData.date, 'yyyy-MM-dd');
                    _this.details = coyData.details;
                    _this.capt = coyData.capt;
                    _this.gcInitialsWithDate = coyData.gcInitialsWithDate;
                    _this.updateBegningInterview(_this.begInterviewFormII);
                }
                if (bnData != undefined) {
                    _this.begInterviewFormIII.patchValue({
                        date: _this.datePipe.transform(bnData.date, 'yyyy-MM-dd'),
                        details: bnData.details,
                        capt: bnData.capt,
                        id: bnData.id,
                        serviceId: bnData.serviceId,
                        gcInitialsWithDate: bnData.gcInitialsWithDate
                    });
                    _this.date = _this.datePipe.transform(bnData.date, 'yyyy-MM-dd');
                    _this.details = bnData.details;
                    _this.capt = bnData.capt;
                    _this.gcInitialsWithDate = bnData.gcInitialsWithDate;
                    _this.updateBegningInterview(_this.begInterviewFormIII);
                }
            }
        });
    };
    InterviewGcComponent.prototype.updateBegningInterview = function (form) {
        var _this = this;
        var formVal = form.value;
        this.serviceId = this.cadetDetails.serviceId;
        this.EDossierService.updateBegInterviewDetailsGc(formVal).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.spinner.hide();
                // this.adminservice.openSnackbar(res.message);
                // window.location.reload();
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
    /*------------------------------------MID INTERVIEW GET---------------------------*/
    InterviewGcComponent.prototype.getMidInterview = function () {
        var _this = this;
        this.serviceId = this.cadetDetails.serviceId;
        var name = this.cadetDetails.name;
        var nameArr = name.split(" ");
        var gcInitials = "";
        for (var i = 0; i < nameArr.length; i++) {
            gcInitials = gcInitials + nameArr[i].charAt(0).toUpperCase();
        }
        this.CurrentDate = gcInitials + "-" + this.CurrentDate;
        console.log('name-->>', name);
        console.log('CurrentDate==>>', this.CurrentDate);
        this.EDossierService.getMidInterviewDetails(this.serviceId).subscribe(function (res) {
            if (res && res.object) {
                var PLObj = res.object.find(function (obj) { return obj.submittedBy == 'PL_CDR'; });
                var PLData = PLObj;
                var coyObj = res.object.find(function (obj) { return obj.submittedBy == 'COY_CDR'; });
                var coyData = coyObj;
                var bnObj = res.object.find(function (obj) { return obj.submittedBy == 'BN_CDR'; });
                var bnData = bnObj;
                if (PLData != undefined) {
                    _this.MidInterviewFormI.patchValue({
                        date: _this.datePipe.transform(PLData.date, 'yyyy-MM-dd'),
                        details: PLData.details,
                        capt: PLData.capt,
                        id: PLData.id,
                        serviceId: PLData.serviceId,
                        gcInitialsWithDate: PLData.gcInitialsWithDate
                    });
                    _this.date = _this.datePipe.transform(PLData.date, 'yyyy-MM-dd');
                    _this.details = PLData.details;
                    _this.capt = PLData.capt;
                    _this.gcInitialsWithDate = PLData.gcInitialsWithDate;
                    _this.updateMidInterview(_this.MidInterviewFormI);
                }
                if (coyData != undefined) {
                    _this.MidInterviewFormII.patchValue({
                        date: _this.datePipe.transform(coyData.date, 'yyyy-MM-dd'),
                        details: coyData.details,
                        capt: coyData.capt,
                        id: coyData.id,
                        serviceId: coyData.serviceId,
                        gcInitialsWithDate: coyData.gcInitialsWithDate
                    });
                    _this.date = _this.datePipe.transform(coyData.date, 'yyyy-MM-dd');
                    _this.details = coyData.details;
                    _this.capt = coyData.capt;
                    _this.gcInitialsWithDate = coyData.gcInitialsWithDate;
                    _this.updateMidInterview(_this.MidInterviewFormII);
                }
                if (bnData != undefined) {
                    _this.MidInterviewFormIII.patchValue({
                        date: _this.datePipe.transform(bnData.date, 'yyyy-MM-dd'),
                        details: bnData.details,
                        capt: bnData.capt,
                        id: bnData.id,
                        serviceId: coyData.serviceId,
                        gcInitialsWithDate: coyData.gcInitialsWithDate
                    });
                    _this.date = _this.datePipe.transform(bnData.date, 'yyyy-MM-dd');
                    _this.details = bnData.details;
                    _this.capt = bnData.capt;
                    _this.gcInitialsWithDate = bnData.gcInitialsWithDate;
                    _this.updateMidInterview(_this.MidInterviewFormIII);
                }
            }
        });
    };
    InterviewGcComponent.prototype.updateMidInterview = function (form) {
        var _this = this;
        var formVal = form.value;
        this.serviceId = this.cadetDetails.serviceId;
        this.EDossierService.updateMidInterviewDetailsGc(formVal).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.spinner.hide();
                // this.adminservice.openSnackbar(res.message);
                // window.location.reload();
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
    InterviewGcComponent.prototype.getSpecialInterview = function () {
        var _this = this;
        this.serviceId = this.cadetDetails.serviceId;
        var name = this.cadetDetails.name;
        var nameArr = name.split(" ");
        var gcInitials = "";
        for (var i = 0; i < nameArr.length; i++) {
            gcInitials = gcInitials + nameArr[i].charAt(0).toUpperCase();
        }
        this.CurrentDate = gcInitials + "-" + this.CurrentDate;
        console.log('name-->>', name);
        console.log('CurrentDate==>>', this.CurrentDate);
        this.EDossierService.getSpecialInterviewDetails(this.serviceId).subscribe(function (res) {
            if (res && res.object) {
                _this.specialInterviewFormI.patchValue({
                    date: _this.datePipe.transform(res.object.date, 'yyyy-MM-dd'),
                    specialInterview: res.object.specialInterview,
                    id: res.object.id,
                    serviceId: res.object.serviceId,
                    gcInitialsWithDate: res.object.gcInitialsWithDate
                });
                _this.date = _this.datePipe.transform(res.object.date, 'yyyy-MM-dd');
                _this.specialInterview = res.object.specialInterview;
                _this.gcInitialsWithDate = res.object.gcInitialsWithDate;
                _this.updateSpecialInterview(_this.specialInterviewFormI);
            }
        });
    };
    InterviewGcComponent.prototype.updateSpecialInterview = function (form) {
        var _this = this;
        var formVal = form.value;
        this.serviceId = this.cadetDetails.serviceId;
        this.spinner.show();
        this.EDossierService.updateSpecialInterviewDetailsGc(formVal).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.spinner.hide();
                // this.adminservice.openSnackbar(res.message);
                // window.location.reload();
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
    InterviewGcComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
        { type: _service_gc_gc_service__WEBPACK_IMPORTED_MODULE_2__["GcService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_13__["EDossierService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"],] }] }
    ]; };
    InterviewGcComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }]
    };
    InterviewGcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ms-interview-gc',
            template: _raw_loader_interview_gc_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_interview_gc_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
            _service_gc_gc_service__WEBPACK_IMPORTED_MODULE_2__["GcService"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_13__["EDossierService"], String])
    ], InterviewGcComponent);
    return InterviewGcComponent;
}());



/***/ })

}]);