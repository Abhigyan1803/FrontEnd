(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Interactual-Interactual-module"],{

/***/ "MpRQ":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/Interactual/interactual.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"mat-heading\">\r\n      <div id=\"top-bar\" class=\"\">\r\n        <h2 class=\"backbtn\"><button mat-icon-button (click)=\"goBack()\">\r\n          <mat-icon>chevron_left</mat-icon>\r\n        </button>E-Dossier <span class=\"sub-menu1\">\r\n          > Overall Assessment > INTELLECTUAL SKILLS DEVP</span></h2>\r\n    </div>\r\n    </div>\r\n    <div class=\"academics\">\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n        <div class=\"service-id mb-2 mx-1 row\">\r\n            \r\n          <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">IMA No.</label>\r\n                  <input placeholder=\"No\"  type=\"text\" disabled id=\"interactualServiceID\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>  \r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Rank</label>\r\n                  <input placeholder=\"Rank\"  type=\"text\" disabled id=\"interactualrank\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Name</label>\r\n                  <input placeholder=\"Name\"  type=\"text\" disabled id=\"interactualName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Term</label>\r\n                  <input placeholder=\"Term\"  type=\"text\" disabled id=\"interactualtName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Bn</label>\r\n                  <input placeholder=\"Bn\"  type=\"text\" disabled id=\"interactualBn\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Coy</label>\r\n                  <input placeholder=\"Coy\"  type=\"text\" disabled id=\"interactualComp\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n          </form>\r\n      </div>\r\n        <!-- <div class=\"ng-star-inserted\">\r\n          <div class=\"mat-new mb-4\">\r\n            <h4 class=\"card-heading\">ACADEMICS: INTELLECTUAL SKILLS DEVP</h4>\r\n          </div>\r\n        </div> -->\r\n        <div *ngIf=\"isShow\">\r\n          <h2 class=\"msgCenter\">Record not found</h2> \r\n        </div>\r\n          <div *ngIf=\"isEnabled\">\r\n\r\n            <form [formGroup]=\"interactualForm\" >\r\n\r\n              <div *ngIf=\"this.termId==1 || this.termId == 2 || this.termId == 3\">\r\n                <h3>I-Term</h3>\r\n                <table class=\"tg mb-3\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"tg-as14\" rowspan=\"4\">SUBJECTS</th>\r\n                      <th class=\"tg-as14\" colspan=\"2\">I TERM</th>\r\n                    </tr>\r\n                    <tr>\r\n                      <th class=\"tg-qnnc\" colspan=\"2\">Final Exam</th>\r\n                    </tr>\r\n                    <tr>\r\n                    <tr>\r\n                      <th class=\"tg-hbt2\">Max Marks</th>\r\n                      <th class=\"tg-hbt2\">Marks Obtained</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let mr of intellectualSkillsSubResult;let i=index\">\r\n                      <td class=\"tg-c3ow\">{{mr.subjectName}}</td>\r\n                      <td class=\"tg-c3ow\">{{mr.finalTotalMarks}}</td> \r\n                      <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" value=\"{{mr.finalObtainedMarks}}\"></td>\r\n      \r\n                      <!-- <td class=\"tg-0pky\"><input min=\"0\" oninput=\"this.value = \r\n                        !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                    formControlName=\"finalObtainedMarks\" disabled class=\"form-control\"\r\n                                    (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                    on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                    maxlength=\"2\" (keypress)=\"keyPress($event)\"></td> -->\r\n                    </tr>\r\n                      <tr>\r\n                        <td class=\"tg-7btt\"><b>Total</b></td>\r\n                        <td class=\"tg-7btt\"><b>{{finalTotalMarks}}</b></td>\r\n                        <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\" disabled value=\"{{finalObtainedMarks}}\"></td>\r\n                      </tr>\r\n                      <!-- <button mat-raised-button type=\"button\" class=\"btn-dark\" (click)=\"confirm()\">Submit</button> -->\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              \r\n\r\n              <div *ngIf=\"this.termId == 2 && this.termId == 3\">\r\n                <h3>II-Term</h3>\r\n                <table class=\"tg mt-4 mb-3\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"tg-as14\" rowspan=\"4\">SUBJECTS</th>\r\n                      <th class=\"tg-as14\" colspan=\"4\">II TERM</th>\r\n                    </tr>\r\n                    <tr>\r\n                      <th class=\"tg-qnnc\" colspan=\"2\">Mid Term Exam</th>\r\n                      <th class=\"tg-qnnc\" colspan=\"2\">Final Exam</th>\r\n                    </tr>\r\n                    <tr>\r\n                    <tr>\r\n                      <th class=\"tg-hbt2\">Max Marks</th>\r\n                      <th class=\"tg-hbt2\">Marks Obtained</th>\r\n                      <th class=\"tg-hbt2\">Max Marks</th>\r\n                      <th class=\"tg-hbt2\">Marks Obtained</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    \r\n                    \r\n                    <tr *ngFor=\"let mr of intellectualSkillsSubResult1;let i=index\">\r\n                      <td class=\"tg-c3ow\">{{mr.subjectName}}</td>\r\n                      <td class=\"tg-c3ow\"></td>\r\n                      <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\"></td>\r\n                      <td class=\"tg-c3ow\">{{mr.finalTotalMarks}}</td>\r\n                      <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" value=\"{{mr.finalObtainedMarks}}\"></td>\r\n                    </tr>\r\n                    \r\n                      <tr>\r\n                        <td class=\"tg-7btt\">Total</td>\r\n                        <td class=\"tg-7btt\">{{midTotalMarks1}}</td>\r\n                        <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" disabled value=\"{{midObtainedMarks1}}\"></td>\r\n                        <td class=\"tg-c3ow\">{{finalTotalMarks1}}</td>\r\n                      <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" disabled value=\"{{finalObtainedMarks1}}\"></td>\r\n                      </tr> \r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              \r\n              <div *ngIf=\"this.termId == 7 || this.termId == 3\">\r\n                <h3>II-Tech</h3>\r\n                <table class=\"tg mt-4 mb-3\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"tg-as14\" rowspan=\"4\">SUBJECTS</th>\r\n                      <th class=\"tg-as14\" colspan=\"4\">II TECH</th>\r\n                    </tr>\r\n                    <tr>\r\n                      <th class=\"tg-qnnc\" colspan=\"2\">Mid Term Exam</th>\r\n                      <th class=\"tg-qnnc\" colspan=\"2\">Final Exam</th>\r\n                    </tr>\r\n                    <tr>\r\n                    <tr>\r\n                      <th class=\"tg-hbt2\">Max Marks</th>\r\n                      <th class=\"tg-hbt2\">Marks Obtained</th>\r\n                      <th class=\"tg-hbt2\">Max Marks</th>\r\n                      <th class=\"tg-hbt2\">Marks Obtained</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let mr of intellectualSkillsSubResult7;let i=index\">\r\n                      <td class=\"tg-c3ow\">{{mr.subjectName}}</td>\r\n                      <td class=\"tg-c3ow\">{{mr.midTotalMarks}}</td>\r\n                      <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" value=\"{{mr.midObtainedMarks}}\" \r\n                        on-focusout=\"onChange($event.target.value, i, 'midObtainedMarks')\"></td>\r\n                      <td class=\"tg-c3ow\">{{mr.finalTotalMarks}}</td>\r\n                      <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" value=\"{{mr.finalObtainedMarks}}\"\r\n                        on-focusout=\"onChange($event.target.value, i, 'finalObtainedMarks')\"></td>\r\n                    </tr>\r\n                    \r\n                      <tr> \r\n                        <td class=\"tg-7btt\">Total</td>\r\n                        <td class=\"tg-7btt\">{{midTotalMarks7}}</td>\r\n                        <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" disabled value=\"{{midObtainedMarks7}}\"></td>\r\n                        <td class=\"tg-c3ow\">{{finalTotalMarks7}}</td>\r\n                      <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" disabled value=\"{{finalObtainedMarks7}}\"></td>\r\n                      </tr>\r\n                      <!-- <button mat-raised-button type=\"button\" class=\"btn-dark\" (click)=\"confirm()\">Submit</button> -->\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              \r\n              <div *ngIf=\"this.termId == 3\">\r\n                <h3>III-Term</h3>\r\n                <table class=\"tg mt-4 mb-3\"> \r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"tg-as14\" rowspan=\"4\">SUBJECTS</th>\r\n                      <th class=\"tg-as14\" colspan=\"2\">III TERM</th>\r\n                    </tr>\r\n                    <tr>\r\n                      <th class=\"tg-qnnc\" colspan=\"2\">Final Exam</th>\r\n                    </tr>\r\n                    <tr>\r\n                    <tr>\r\n                      <th class=\"tg-hbt2\">Max Marks</th>\r\n                      <th class=\"tg-hbt2\">Marks Obtained</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let mr of intellectualSkillsSubResult2;let i=index\">\r\n                      <td class=\"tg-c3ow\">{{mr.subjectName}}</td>\r\n                      <td class=\"tg-c3ow\">{{mr.finalTotalMarks}}</td>\r\n                      <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\"\r\n                        value=\"{{mr.finalObtainedMarks}}\"></td>\r\n                    </tr>\r\n                   \r\n                      <tr> \r\n                        <td class=\"tg-7btt\">Total</td>\r\n                        <td class=\"tg-7btt\">{{finalTotalMarks2}}</td>\r\n                        <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\" disabled value=\"{{finalObtainedMarks2}}\"></td>\r\n                      </tr>\r\n                  </tbody>\r\n                </table> \r\n              </div>\r\n              \r\n\r\n              </form>\r\n              </div>\r\n        \r\n        \r\n          <!-- <table class=\"tg\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-as14\" rowspan=\"3\">SUBJECTS</th>\r\n                <th class=\"tg-as14\" colspan=\"2\">I TERM</th>\r\n                <th class=\"tg-qnnc\" colspan=\"4\">II TERM</th>\r\n                <th class=\"tg-qnnc\" colspan=\"4\">II TECH</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">III Term</th>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Final Exam</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Mid Term Exam</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Final Exam</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Mid Term Exam</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Final Exam</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">Final Exam</th>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"tg-hbt2\">Max Marks</th>\r\n                <th class=\"tg-hbt2\">Marks Obtained</th>\r\n                <th class=\"tg-hbt2\">Max Marks</th>\r\n                <th class=\"tg-hbt2\">Marks Obtained</th>\r\n                <th class=\"tg-hbt2\">Max Marks</th>\r\n                <th class=\"tg-hbt2\">Marks Obtained</th>\r\n                <th class=\"tg-hbt2\">Max Marks</th>\r\n                <th class=\"tg-hbt2\">Marks Obtained</th>\r\n                <th class=\"tg-hbt2\">Max Marks</th>\r\n                <th class=\"tg-hbt2\">Marks Obtained</th>\r\n                <th class=\"tg-hbt2\">Max Marks</th>\r\n                <th class=\"tg-hbt2\">Marks Obtained</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"let mark of obj.intellectualSkillsSubResult\">\r\n                <td class=\"tg-c3ow\">Mil History &amp; Mil Thinking</td>\r\n                <td class=\"tg-c3ow\">80</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" value=\"mark.finalObtainedMarks\" class=\"form-control\"\r\n                    formControlName=\"finalObtainedMarks\"></td>\r\n                <td class=\"tg-c3ow\">40</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">40</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">40</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">40</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">80</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\">CAIR, Area Cultural Studies &amp; Mil Mgt</td>\r\n                <td class=\"tg-c3ow\">50</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">25</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">25</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">25</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">25</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">50</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\">Science &amp; Warfare (SAW)</td>\r\n                <td class=\"tg-c3ow\">70</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">30</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">40</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">30</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">40</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">70</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\">Service Writing (SWT)</td>\r\n                <td class=\"tg-c3ow\">25</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">10</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">15</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">10</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">15</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">25</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\">English Comn Skills (ECS)</td>\r\n                <td class=\"tg-c3ow\">25</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">10</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">15</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">10</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">15</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">50</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\">IT</td>\r\n                <td class=\"tg-c3ow\">50</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">25</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">25</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">25</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">25</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-c3ow\">50</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-7btt\">Total</td>\r\n                <td class=\"tg-7btt\">300</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-7btt\">140</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-7btt\">160</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-7btt\">140</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-7btt\">160</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n                <td class=\"tg-7btt\">300</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\"></td>\r\n              </tr>\r\n            </tbody>\r\n          </table> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "WPSd":
/*!*********************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/Interactual/interactual.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-content {\n  min-height: 45vw;\n}\n\n.mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.backbtn button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}\n\n.msgCenter {\n  text-align: center;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-hbt2 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: left;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-7btt {\n  border-color: inherit;\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n}");

/***/ }),

/***/ "c20/":
/*!*******************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/Interactual/interactual.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: InteractualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractualComponent", function() { return InteractualComponent; });
/* harmony import */ var _raw_loader_interactual_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./interactual.component.html */ "MpRQ");
/* harmony import */ var _interactual_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactual.component.scss */ "WPSd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
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










var InteractualComponent = /** @class */ (function () {
    function InteractualComponent(dialog, spinner, route, fb, router, adminservice, sharedservice, cdref, edossierservice, activeRoute, EDossierService) {
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
        this.termid = '';
        this.interactualForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.totalss = 0;
        this.mnc = "";
        this.obtainedmarks = [];
        this.tempArr1 = [];
        this.tempObj1 = [];
        this.isEnabled = true;
        this.isShow = false;
        this.totalmarkst = 0;
        this.totalmarks1 = 0;
        this.totalmarkst1 = 0;
        this.totalmarkst2 = 0;
        this.intellectualSkillsSubResult = [];
        this.obtainedTotalMarks = 0;
        this.Id = this.route.snapshot.queryParamMap.get('Id');
        this.termId = this.route.snapshot.queryParamMap.get('termId');
        this.interactualForm = this.fb.group({
            finalObtainedMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            finalTotalMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            midObtainedMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            midTotalMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            serviceId: ['',],
            subjectId: [''],
            status: [''],
            termId: [''],
            intellectualSkillsSubResult: [''],
        });
    }
    Object.defineProperty(InteractualComponent.prototype, "getCSubjectRes", {
        get: function () {
            return this.interactualForm.get('intellectualSkillsSubResult');
        },
        enumerable: false,
        configurable: true
    });
    InteractualComponent.prototype.genSubRec = function () {
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
    InteractualComponent.prototype.ngOnInit = function () {
        document.getElementById("interactualServiceID").value = localStorage.getItem("e");
        document.getElementById("interactualName").value = localStorage.getItem("i");
        document.getElementById("interactualComp").value = localStorage.getItem("companyName");
        document.getElementById("interactualBn").value = localStorage.getItem("battalionName");
        // (<HTMLInputElement>document.getElementById("lvetid")).value = localStorage.getItem("termId");
        document.getElementById("interactualtName").value = localStorage.getItem("termName");
        document.getElementById("interactualrank").value = localStorage.getItem("rank");
    };
    InteractualComponent.prototype.ngAfterViewInit = function () {
        // this.getAssignments()
        this.getEdossier();
    };
    InteractualComponent.prototype.goBack = function () {
        window.history.back();
    };
    InteractualComponent.prototype.getEdossier = function () {
        // this.spinner.show();
        var _this = this;
        this.EDossierService.getEDossierInteractualMarks(this.Id).subscribe(function (res) {
            console.log(res);
            if (res.message == "Record not found") {
                _this.adminservice.openSnackbar("Record not found");
                _this.isShow = true;
                _this.isEnabled = false;
            }
            else if (res.status == "OK") {
                _this.obj = res.object;
                if (_this.termId == 1 || _this.termId == 2 || _this.termId == 3) {
                    _this.finalTotalMarks = res.object[0].finalTotalMarks,
                        _this.finalObtainedMarks = res.object[0].finalObtainedMarks,
                        _this.drilleditid1 = res.object[0].id;
                    var cmrks = res.object[0].intellectualSkillsSubResult;
                    _this.intellectualSkillsSubResult = res.object[0].intellectualSkillsSubResult;
                    console.log(_this.intellectualSkillsSubResult, '-->intellectualSkillsSubResult');
                    _this.interactualForm.patchValue({
                        finalTotalMarks: res.object[0].finalTotalMarks,
                        id: _this.obj[0].id,
                        midObtainedMarks: _this.obj[0].midObtainedMarks,
                        midTotalMarks: _this.obj[0].midTotalMarks,
                        serviceId: _this.obj[0].serviceId,
                        subjectId: _this.obj[0].subjectId,
                        status: _this.obj[0].status,
                        termId: _this.obj[0].termId,
                        intellectualSkillsSubResult: _this.obj[0].intellectualSkillsSubResult
                    });
                    _this.midObtainedMarks = _this.obj[0].midObtainedMarks;
                    console.log(_this.midObtainedMarks, 'this.obj[0].midObtainedMarks');
                    _this.midTotalMarks = _this.obj[0].midTotalMarks;
                    console.log(_this.midTotalMarks, 'this.obj[0].midObtainedMarks');
                }
                if (_this.termId == 2 || _this.termId == 3) {
                    _this.finalTotalMarks1 = res.object[1].finalTotalMarks,
                        _this.finalObtainedMarks1 = res.object[1].finalObtainedMarks,
                        _this.drilleditid1 = res.object[1].id;
                    var cmrks = res.object[1].intellectualSkillsSubResult;
                    _this.intellectualSkillsSubResult1 = res.object[1].intellectualSkillsSubResult;
                    console.log(_this.intellectualSkillsSubResult, '-->intellectualSkillsSubResult');
                    _this.interactualForm.patchValue({
                        finalTotalMarks1: res.object[1].finalTotalMarks,
                        id: _this.obj[1].id,
                        midObtainedMarks1: _this.obj[1].midObtainedMarks,
                        midTotalMarks1: _this.obj[1].midTotalMarks,
                        serviceId: _this.obj[1].serviceId,
                        subjectId: _this.obj[1].subjectId,
                        status: _this.obj[1].status,
                        termId: _this.obj[1].termId,
                        intellectualSkillsSubResult1: _this.obj[1].intellectualSkillsSubResult
                    });
                    _this.midObtainedMarks1 = _this.obj[1].midObtainedMarks;
                    console.log(_this.midObtainedMarks, 'this.obj[1].midObtainedMarks');
                    _this.midTotalMarks1 = _this.obj[1].midTotalMarks;
                    console.log(_this.midTotalMarks, 'this.obj[0].midObtainedMarks');
                }
                if (_this.termId == 7 || _this.termId == 3) {
                    _this.finalTotalMarks7 = res.object[1].finalTotalMarks,
                        _this.finalObtainedMarks7 = res.object[1].finalObtainedMarks,
                        _this.drilleditid1 = res.object[1].id;
                    var cmrks = res.object[1].intellectualSkillsSubResult;
                    _this.intellectualSkillsSubResult7 = res.object[1].intellectualSkillsSubResult;
                    console.log(_this.intellectualSkillsSubResult, '-->intellectualSkillsSubResult');
                    _this.interactualForm.patchValue({
                        finalTotalMarks7: res.object[1].finalTotalMarks,
                        id: _this.obj[1].id,
                        midObtainedMarks7: _this.obj[1].midObtainedMarks,
                        midTotalMarks7: _this.obj[1].midTotalMarks,
                        serviceId: _this.obj[1].serviceId,
                        subjectId: _this.obj[1].subjectId,
                        status: _this.obj[1].status,
                        termId: _this.obj[1].termId,
                        intellectualSkillsSubResult7: _this.obj[1].intellectualSkillsSubResult
                    });
                    _this.midObtainedMarks7 = _this.obj[1].midObtainedMarks;
                    console.log(_this.midObtainedMarks, 'this.obj[1].midObtainedMarks');
                    _this.midTotalMarks7 = _this.obj[1].midTotalMarks;
                    console.log(_this.midTotalMarks, 'this.obj[1].midObtainedMarks');
                }
                if (_this.termId == 3) {
                    _this.finalTotalMarks2 = res.object[2].finalTotalMarks,
                        _this.finalObtainedMarks2 = res.object[2].finalObtainedMarks,
                        _this.drilleditid1 = res.object[2].id;
                    var cmrks = res.object[2].intellectualSkillsSubResult;
                    _this.intellectualSkillsSubResult2 = res.object[2].intellectualSkillsSubResult;
                    console.log(_this.intellectualSkillsSubResult2, '-->intellectualSkillsSubResult');
                    _this.interactualForm.patchValue({
                        finalTotalMarks2: res.object[2].finalTotalMarks,
                        id: _this.obj[2].id,
                        midObtainedMarks2: _this.obj[2].midObtainedMarks,
                        midTotalMarks2: _this.obj[2].midTotalMarks,
                        serviceId: _this.obj[2].serviceId,
                        subjectId: _this.obj[2].subjectId,
                        status: _this.obj[2].status,
                        termId: _this.obj[2].termId,
                        intellectualSkillsSubResult2: _this.obj[2].intellectualSkillsSubResult
                    });
                    _this.midObtainedMarks2 = _this.obj[2].midObtainedMarks;
                    console.log(_this.midObtainedMarks2, 'this.obj[2].midObtainedMarks');
                    _this.midTotalMarks2 = _this.obj[2].midTotalMarks;
                    console.log(_this.midTotalMarks2, 'this.obj[2].midObtainedMarks');
                }
            }
        });
    };
    InteractualComponent.prototype.onChange = function (value, totalMarks, sub_id, mainIndex, subIndex) {
        if (value > totalMarks || value == NaN) {
            this.adminservice.openSnackbar("Obtained marks is greater than total marks");
            value = '';
        }
        var total = document.getElementById(mainIndex).value;
        if (total) {
            document.getElementById(mainIndex).value = parseInt(total) + (value == '' ? 0 : parseInt(value)) + "";
            this.leaderShipList[mainIndex].academicLeadershipMatrixResult.obtainedMarks = parseInt(total) + (value == '' ? 0 : parseInt(value));
        }
        else {
            document.getElementById(mainIndex).value = value;
            this.leaderShipList[mainIndex].academicLeadershipMatrixResult.obtainedMarks = (value == '' ? 0 : parseInt(value));
        }
        this.leaderShipList[mainIndex].academicLeadershipMatrixResult.leadershipSubjectResult[subIndex].obtainedMarks = value;
        console.log('%%%%%%%%%%%%%%%%%%%%%%', this.leaderShipList);
        this.leaderShipList;
    };
    InteractualComponent.prototype.onFocusEvent = function (value, mainIndex) {
        console.log(value + '==' + mainIndex);
        if (value == NaN || value == '' || value == undefined) {
            value = 0;
        }
        var total = document.getElementById(mainIndex).value;
        if (total) {
            document.getElementById(mainIndex).value = parseInt(total) + parseInt(value) + "";
            this.leaderShipList[mainIndex].academicLeadershipMatrixResult.obtainedMarks = parseInt(total) - parseInt(value);
        }
        else {
            document.getElementById(mainIndex).value = value;
            this.leaderShipList[mainIndex].academicLeadershipMatrixResult.obtainedMarks = value;
        }
        // this.obtainedTotalMarks -= parseInt(val);
        if (this.obtainedTotalMarks == NaN) {
            this.obtainedTotalMarks = 0;
        }
    };
    InteractualComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_7__["EDossierService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_7__["EDossierService"] }
    ]; };
    InteractualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-interactual',
            template: _raw_loader_interactual_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_interactual_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_7__["EDossierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_7__["EDossierService"]])
    ], InteractualComponent);
    return InteractualComponent;
}());



/***/ }),

/***/ "fSd1":
/*!****************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/Interactual/Interactual.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: InteractualModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractualModule", function() { return InteractualModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _interactual_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactual.component */ "c20/");
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
        component: _interactual_component__WEBPACK_IMPORTED_MODULE_4__["InteractualComponent"]
    },
];
var InteractualModule = /** @class */ (function () {
    function InteractualModule() {
    }
    InteractualModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _interactual_component__WEBPACK_IMPORTED_MODULE_4__["InteractualComponent"]
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
    ], InteractualModule);
    return InteractualModule;
}());



/***/ })

}]);