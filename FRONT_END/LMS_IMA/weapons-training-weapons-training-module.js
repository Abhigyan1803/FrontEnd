(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["weapons-training-weapons-training-module"],{

/***/ "3h/p":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/weapons-training/weapons-training/weapons-training.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"mat-heading\">\r\n      <div id=\"top-bar\" class=\"\">\r\n        <h2>Weapons Training <span class=\"sub-menu1\">\r\n            > {{type}}</span></h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"academics\">\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n        <form class=\"ng-untouched ng-pristine ng-invalid wtfilter\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"battalion\">Battalion</label>\r\n              <select id=\"battalion\" name=\"battalion\" (change)=\"battalionSelected($event.target.value)\" class=\"form-control\">\r\n                <option value=\"0\" selected>Select</option>\r\n                <option *ngFor=\"let b of battalionList\" [value]=\"b.shortName\"> {{b.shortName}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"company\">Company</label>\r\n              <select id=\"company\" class=\"form-control\" name=\"company\"  (change)=\"companySelected($event.target.value)\">\r\n                <option value=\"0\" selected>Select</option>\r\n                <option *ngFor=\"let c of companyList\" [value]=\"c.name\"> {{c.name}}</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Search</label>\r\n                <input placeholder=\"IMA NO.\" formcontrolname=\"\" type=\"text\" name=\"serviceid\" [(ngModel)]=\"serviceid\" (keyup)=\"serviceSearch($event.target.value)\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <label>&nbsp;</label>\r\n              <button type=\"button\" mat-raised-button (click)=\"edSearch()\">Search</button>\r\n              <!-- <button mat-raised-button (click)=\"clearSearch()\" >Clear</button> -->\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <form class=\"oq-matrix-form\">\r\n          <table class=\"tg\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Bn/Coy</th>\r\n                <th class=\"tg-qnnc\" colspan=\"65\">Subjects</th>\r\n              </tr>\r\n              <tr>\r\n                <th *ngFor=\"let weaponName of weaponList\" class=\"tg-qnnc\" [attr.colspan]=\"weaponName.wa.length + 3\">\r\n                  {{weaponName.name}}</th>\r\n                <th class=\"tg-qnnc\" colspan=\"10\">Main Result</th>\r\n              </tr>\r\n              <tr>\r\n                <ng-container *ngFor=\"let subWeaponName of weaponList\">\r\n                  <ng-container *ngFor=\"let waName of subWeaponName.wa\">\r\n                    <th class=\"tg-qnnc\">{{waName.attrName}} <br>Marks\r\n                     ({{waName.maxMarks}})\r\n                    </th>\r\n\r\n                  </ng-container>\r\n                  <th class=\"tg-qnnc\"> Total  <br>Marks\r\n                    ({{subWeaponName.totalMaxMarks}}) </th>\r\n                  <th class=\"tg-qnnc\">Std</th>\r\n                  <th class=\"tg-qnnc\" style=\"width:65px;\">G/Pt <br> ({{subWeaponName.gPointITerm}})</th>\r\n                  <!-- <th class=\"tg-qnnc\">Remark</th> -->\r\n\r\n                </ng-container>\r\n\r\n                <th class=\"tg-qnnc\" *ngFor=\"let weaponName of weaponList\">{{weaponName.name}}</th>\r\n\r\n                <th class=\"tg-qnnc\">WTT <br>Marks (40)</th>\r\n                <th class=\"tg-qnnc\">Spot Test <br>Marks (40)</th>\r\n                <th class=\"tg-qnnc\">Grand Total</th>\r\n                <th class=\"tg-qnnc\" style=\"max-width:130px;\">Remark</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let weapon of WTCadetList; let weaponIndex = index\">\r\n                <td class=\"tg-c3ow\">{{ weaponIndex + 1}}</td>\r\n                <td class=\"tg-c3ow\">{{ weapon.serviceId }}</td>\r\n                <td class=\"tg-0pky\">{{ weapon.course }}</td>\r\n                <td class=\"tg-c3ow\">{{ weapon.name }}</td>\r\n                <td class=\"tg-c3ow\">\r\n                  <p *ngIf=\"weapon.nationality=='India'\">OC</p>\r\n                  <p *ngIf=\"weapon.nationality !='India'\">FGC</p>\r\n                </td>\r\n                <td class=\"tg-c3ow\">{{weapon.battalian}}/{{ weapon.company}}</td>\r\n\r\n                <ng-container\r\n                  *ngFor=\"let wtSubject of weapon.weaponTrainingResult.cadetWTMainResultlist; let wtSubjectIndex = index\">\r\n                  <td class=\"tg-c3ow\"\r\n                    *ngFor=\"let wtSubSubject of wtSubject.cadetWTResultlist; let wtSubSubjectIndex = index\">\r\n                    <div class=\"d-flex\">\r\n                      <ng-container>\r\n                        <input type=\"text\" class=\"form-control d-inline\" value=\"{{wtSubSubject.marks}}\"\r\n                          id=\"{{weaponIndex}}{{wtSubjectIndex}}{{wtSubSubjectIndex}}\"\r\n                          (focus)=\"onFocusEvent($event,$event.target.value, wtSubSubject.maxMarks, wtSubSubject.subjectId,weaponIndex, wtSubjectIndex, wtSubSubjectIndex)\"\r\n                          min=\"0\" (keypress)=\"keyPress($event)\"\r\n                          on-focusout=\"onChange($event,$event.target.value, wtSubSubject.maxMarks, wtSubSubject.subjectId,weaponIndex, wtSubjectIndex, wtSubSubjectIndex)\">\r\n                      </ng-container>\r\n\r\n                    </div>\r\n\r\n                  </td>\r\n                  <td class=\"tg-0pky\">\r\n                    <input type=\"text\" class=\"form-control\" disabled id=\"{{weaponIndex}}{{wtSubjectIndex}}\"\r\n                      value=\"{{ wtSubject.marks }}\">\r\n                  </td>\r\n                  <td class=\"tg-0pky\">\r\n                    <input type=\"text\" class=\"form-control\" style=\"width: 95px;\" disabled\r\n                      id=\"std{{weaponIndex}}{{wtSubjectIndex}}\" [value]=\"wtSubject.std\">\r\n                  </td>\r\n                  <td class=\"tg-0pky\">\r\n                    <input type=\"text\" class=\"form-control\" style=\"width: 65px;\" disabled\r\n                      id=\"gpoint{{weaponIndex}}{{wtSubjectIndex}}\" value=\"{{ wtSubject.gPoint }}\">\r\n                  </td>\r\n                  <!-- <td class=\"tg-0pky\">\r\n                    <input type=\"text\" class=\"form-control\" style=\"width: 125px;\"\r\n                      id=\"remark{{weaponIndex}}{{wtSubjectIndex}}\" value=\"{{ wtSubject.remark }}\">\r\n                  </td> -->\r\n                </ng-container>\r\n\r\n                <td style=\"border-color: darkgray;\"\r\n                  *ngFor=\"let wtSubject of weapon.weaponTrainingResult.cadetWTMainResultlist; let wtSubjectIndex = index\">\r\n                  <input disabled style=\"width: 93px;border-color: darkgray;\" type=\"text\" class=\"form-control d-inline\"\r\n                    id=\"_gp{{weaponIndex}}{{wtSubjectIndex}}\" value=\"{{ wtSubject.gPoint }}\" min=\"0\"\r\n                    (keypress)=\"keyPress($event)\">\r\n                </td>\r\n                <td class=\"tg-0pky\">\r\n                  <input type=\"text\" class=\"form-control\" on-focusout=\"onChange1($event.target.value,weaponIndex)\"\r\n                    (focus)=\"onFocusEvent1($event.target.value,weaponIndex)\" style=\"width: 100px;\"\r\n                    id=\"wtt{{weaponIndex}}{{wtSubjectIndex}}\" value=\"{{weapon.weaponTrainingResult.wtt}}\">\r\n                </td>\r\n                <td class=\"tg-0pky\">\r\n                  <input type=\"text\" class=\"form-control\" on-focusout=\"onChange2($event.target.value,weaponIndex)\"\r\n                    (focus)=\"onFocusEvent2($event.target.value,weaponIndex)\" style=\"width: 100px;\"\r\n                    id=\"spot{{weaponIndex}}{{wtSubjectIndex}}\" value=\"{{weapon.weaponTrainingResult.spotTest}}\">\r\n                </td>\r\n                <td class=\"tg-0pky\">\r\n                  <input type=\"text\" class=\"form-control\" style=\"width: 100px;\" disabled\r\n                    id=\"grandT{{weaponIndex}}{{wtSubjectIndex}}\" value=\"{{ weapon.weaponTrainingResult.grandTotal }}\">\r\n                </td>\r\n                <td class=\"tg-0pky\">\r\n                  <input type=\"text\" class=\"form-control\" style=\"width: 106px;\"\r\n                    on-focusout=\"onChangeRemark($event.target.value,weaponIndex)\"\r\n                    id=\"remark{{weaponIndex}}{{wtSubjectIndex}}\" value=\"{{weapon.weaponTrainingResult.remark}}\">\r\n                </td>\r\n\r\n                <div *ngIf=\"!weapon.weaponTrainingResult\">\r\n                  <div *ngFor=\"let size of wtSubject;let ser=index;\">\r\n                    <td class=\"tg-c3ow\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"obtainedMarks\">\r\n                    </td>\r\n                    <td *ngIf=\"ser+1 == wtSubject.length\" class=\"tg-c3ow\">{{obtainedTotalMarks}}</td>\r\n                  </div>\r\n                </div>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"mat-cell\" style=\"text-align: center;\" *ngIf=\"! WTCadetList?.length\" colspan=\"68\">\r\n                  <div>No Record Found</div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </form>\r\n        <div class=\"btn-sec mt-3 mb-3 text-right\">\r\n          <button type=\"button\" disabled mat-raised-button (click)=\"openPopup()\" *ngIf=\"! WTCadetList?.length\">Preview</button>\r\n                  <button type=\"button\" mat-raised-button (click)=\"openPopup()\" *ngIf=\"WTCadetList?.length > 0\">Preview</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayStyle}\">\r\n  <div class=\"modal-dialog modal-lg modal-dialog-scrollable custom-lg\" role=\"document\">\r\n    <div class=\"modal-content p-3\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Review</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n       Are you Sure you want to submit ?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button mat-raised-button type=\"button\" class=\"btn-dark\" (click)=\"closePopup()\">Back</button>\r\n        <button type=\"button\" mat-raised-button (click)=\"confirm()\">Save</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayStyle}\">\r\n\r\n  <div class=\"modal-dialog modal-lg modal-dialog-scrollable custom-lg\" role=\"document\">\r\n    <div class=\"modal-content p-3\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Review</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <table class=\"tg\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Bn/Coy</th>\r\n              <th class=\"tg-qnnc\" colspan=\"65\">Subjects</th>\r\n            </tr>\r\n            <tr>\r\n              <th *ngFor=\"let weaponName of weaponList\" class=\"tg-qnnc\" [attr.colspan]=\"weaponName.wa.length + 3\">\r\n                {{weaponName.name}}</th>\r\n              <th class=\"tg-qnnc\" colspan=\"10\">Main Result</th>\r\n            </tr>\r\n            <tr>\r\n              <ng-container *ngFor=\"let subWeaponName of weaponList\">\r\n                <ng-container *ngFor=\"let waName of subWeaponName.wa\">\r\n                  <th class=\"tg-qnnc\">{{waName.attrName}} <br>Marks\r\n                   ({{waName.maxMarks}})\r\n                  </th>\r\n\r\n                </ng-container>\r\n                <th class=\"tg-qnnc\"> Total  <br>Marks\r\n                  ({{subWeaponName.totalMaxMarks}}) </th>\r\n                <th class=\"tg-qnnc\">Std</th>\r\n                <th class=\"tg-qnnc\" style=\"width:65px;\">G/Pt <br> ({{subWeaponName.gPointITerm}})</th>\r\n                <!-- <th class=\"tg-qnnc\">Remark</th> -->\r\n\r\n              </ng-container>\r\n\r\n              <th class=\"tg-qnnc\" *ngFor=\"let weaponName of weaponList\">{{weaponName.name}}</th>\r\n\r\n              <th class=\"tg-qnnc\">WTT <br>Marks (40)</th>\r\n              <th class=\"tg-qnnc\">Spot Test <br>Marks (40)</th>\r\n              <th class=\"tg-qnnc\">Grand Total</th>\r\n              <th class=\"tg-qnnc\" style=\"max-width:130px;\">Remark</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let weapon of WTCadetList; let weaponIndex = index\">\r\n              <td class=\"tg-c3ow\">{{ weaponIndex + 1}}</td>\r\n              <td class=\"tg-c3ow\">{{ weapon.serviceId }}</td>\r\n              <td class=\"tg-0pky\">{{ weapon.course }}</td>\r\n              <td class=\"tg-c3ow\">{{ weapon.name }}</td>\r\n              <td class=\"tg-c3ow\">\r\n                <p *ngIf=\"weapon.nationality=='India'\">OC</p>\r\n                <p *ngIf=\"weapon.nationality !='India'\">FGC</p>\r\n              </td>\r\n              <td class=\"tg-c3ow\">{{weapon.battalian}}/{{ weapon.company}}</td>\r\n\r\n              <ng-container\r\n                *ngFor=\"let wtSubject of weapon.weaponTrainingResult.cadetWTMainResultlist; let wtSubjectIndex = index\">\r\n                <td class=\"tg-c3ow\"\r\n                  *ngFor=\"let wtSubSubject of wtSubject.cadetWTResultlist; let wtSubSubjectIndex = index\">\r\n                  <div class=\"d-flex\">\r\n                    <ng-container>\r\n                      <input type=\"text\" disabled class=\"form-control d-inline\" value=\"{{wtSubSubject.marks}}\"\r\n                        id=\"{{weaponIndex}}{{wtSubjectIndex}}{{wtSubSubjectIndex}}\"\r\n                        (focus)=\"onFocusEvent($event,$event.target.value, wtSubSubject.maxMarks, wtSubSubject.subjectId,weaponIndex, wtSubjectIndex, wtSubSubjectIndex)\"\r\n                        min=\"0\" (keypress)=\"keyPress($event)\"\r\n                        on-focusout=\"onChange($event,$event.target.value, wtSubSubject.maxMarks, wtSubSubject.subjectId,weaponIndex, wtSubjectIndex, wtSubSubjectIndex)\">\r\n                    </ng-container>\r\n\r\n                  </div>\r\n\r\n                </td>\r\n                <td class=\"tg-0pky\">\r\n                  <input type=\"text\" class=\"form-control\" disabled id=\"{{weaponIndex}}{{wtSubjectIndex}}\"\r\n                    value=\"{{ wtSubject.marks }}\">\r\n                </td>\r\n                <td class=\"tg-0pky\">\r\n                  <input type=\"text\" class=\"form-control\" style=\"width: 95px;\" disabled\r\n                    id=\"std{{weaponIndex}}{{wtSubjectIndex}}\" [value]=\"wtSubject.std\">\r\n                </td>\r\n                <td class=\"tg-0pky\">\r\n                  <input type=\"text\" class=\"form-control\" style=\"width: 65px;\" disabled\r\n                    id=\"gpoint{{weaponIndex}}{{wtSubjectIndex}}\" value=\"{{ wtSubject.gPoint }}\">\r\n                </td>\r\n                <!-- <td class=\"tg-0pky\">\r\n                  <input type=\"text\" class=\"form-control\" style=\"width: 125px;\"\r\n                    id=\"remark{{weaponIndex}}{{wtSubjectIndex}}\" value=\"{{ wtSubject.remark }}\">\r\n                </td> -->\r\n              </ng-container>\r\n\r\n              <td style=\"border-color: darkgray;\"\r\n                *ngFor=\"let wtSubject of weapon.weaponTrainingResult.cadetWTMainResultlist; let wtSubjectIndex = index\">\r\n                <input disabled style=\"width: 93px;border-color: darkgray;\" type=\"text\" class=\"form-control d-inline\"\r\n                  id=\"_gp{{weaponIndex}}{{wtSubjectIndex}}\" value=\"{{ wtSubject.gPoint }}\" min=\"0\"\r\n                  (keypress)=\"keyPress($event)\">\r\n              </td>\r\n              <td class=\"tg-0pky\">\r\n                <input type=\"text\" disabled class=\"form-control\" on-focusout=\"onChange1($event.target.value,weaponIndex)\"\r\n                  (focus)=\"onFocusEvent1($event.target.value,weaponIndex)\" style=\"width: 100px;\"\r\n                  id=\"wtt{{weaponIndex}}{{wtSubjectIndex}}\" value=\"{{weapon.weaponTrainingResult.wtt}}\">\r\n              </td>\r\n              <td class=\"tg-0pky\">\r\n                <input type=\"text\" disabled class=\"form-control\" on-focusout=\"onChange2($event.target.value,weaponIndex)\"\r\n                  (focus)=\"onFocusEvent2($event.target.value,weaponIndex)\" style=\"width: 100px;\"\r\n                  id=\"spot{{weaponIndex}}{{wtSubjectIndex}}\" value=\"{{weapon.weaponTrainingResult.spotTest}}\">\r\n              </td>\r\n              <td class=\"tg-0pky\">\r\n                <input type=\"text\" disabled class=\"form-control\" style=\"width: 100px;\" disabled\r\n                  id=\"grandT{{weaponIndex}}{{wtSubjectIndex}}\" value=\"{{ weapon.weaponTrainingResult.grandTotal }}\">\r\n              </td>\r\n              <td class=\"tg-0pky\">\r\n                <input type=\"text\" disabled class=\"form-control\" style=\"width: 106px;\"\r\n                  on-focusout=\"onChangeRemark($event.target.value,weaponIndex)\"\r\n                  id=\"remark{{weaponIndex}}{{wtSubjectIndex}}\" value=\"{{weapon.weaponTrainingResult.remark}}\">\r\n              </td>\r\n\r\n              <div *ngIf=\"!weapon.weaponTrainingResult\">\r\n                <div *ngFor=\"let size of wtSubject;let ser=index;\">\r\n                  <td class=\"tg-c3ow\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"obtainedMarks\">\r\n                  </td>\r\n                  <td *ngIf=\"ser+1 == wtSubject.length\" class=\"tg-c3ow\">{{obtainedTotalMarks}}</td>\r\n                </div>\r\n              </div>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button mat-raised-button type=\"button\" class=\"btn-dark\" (click)=\"closePopup()\">Back</button>\r\n        <button type=\"button\" mat-raised-button (click)=\"confirm()\">Submit</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "5uKj":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/trg-team/weapons-training/weapons-training/weapons-training.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n  text-align: center;\n}\n\ntable thead {\n  position: sticky;\n  top: 0;\n  z-index: 4;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  text-align: center !important;\n  vertical-align: middle !important;\n  max-width: 110px;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  max-width: 110px;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle !important;\n  font-weight: bold !important;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: normal;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.modal-content {\n  max-width: 100% !important;\n}\n\n.open-button {\n  background-color: #555;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 280px;\n}\n\n/* The popup form - hidden by default */\n\n.form-popup {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}\n\n/* Add styles to the form container */\n\n.form-container {\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n}\n\n/* Full-width input fields */\n\n.form-container input[type=text], .form-container input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* When the inputs get focus, do something */\n\n.form-container input[type=text]:focus, .form-container input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for the submit/login button */\n\n.form-container .btn {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom: 10px;\n  opacity: 0.8;\n}\n\n/* Add a red background color to the cancel button */\n\n.form-container .cancel {\n  background-color: red;\n}\n\n/* Add some hover effects to buttons */\n\n.form-container .btn:hover, .open-button:hover {\n  opacity: 1;\n}\n\n.custom-lg {\n  max-width: unset;\n  margin: 0px;\n  border-radius: 1px;\n}\n\n.custom-lg .modal-content {\n  border-radius: 0px;\n}\n\n.oq-matrix-form {\n  overflow-x: scroll;\n  position: relative;\n  height: 460px;\n}\n\n.modal-dialog {\n  /* background-color: rgba(0, 0, 0, 0.5); */\n  /* position: fixed; */\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 999;\n}\n\n.mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.modal-dialog-scrollable {\n  max-height: 100%;\n}\n\n.modal-dialog-scrollable .modal-content {\n  max-height: 100%;\n}\n\n.wtfilter select, .wtfilter input {\n  text-align: left;\n}");

/***/ }),

/***/ "PogS":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/trg-team/weapons-training/weapons-training/weapons-training.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: WeaponsTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponsTrainingComponent", function() { return WeaponsTrainingComponent; });
/* harmony import */ var _raw_loader_weapons_training_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./weapons-training.component.html */ "3h/p");
/* harmony import */ var _weapons_training_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weapons-training.component.scss */ "5uKj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var WeaponsTrainingComponent = /** @class */ (function () {
    function WeaponsTrainingComponent(service, _router, spinner, route, _fb, serv, cdref, adminservice) {
        var _this = this;
        this.service = service;
        this._router = _router;
        this.spinner = spinner;
        this.route = route;
        this._fb = _fb;
        this.serv = serv;
        this.cdref = cdref;
        this.adminservice = adminservice;
        this.cadetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.activeTab = 0;
        this.total = 0;
        this.displayStyle = "none";
        this.pageSize = 50;
        this.currentPage = 0;
        this.percent = 0;
        this.maxPercent = 0;
        this.battalionList = [];
        this.companyList = [];
        this.battalionId = '';
        this.companyId = '';
        this.battalionName = '0';
        this.tempnewTotal = 0;
        document.addEventListener("keydown", function (event) {
            if (event.ctrlKey) {
                event.preventDefault();
            }
        });
        this.route.params.subscribe(function (params) {
            _this.type = params.type;
            if (_this.type == "I Term") {
                _this.termId = 1;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
            }
            else if (_this.type == "II Term") {
                _this.termId = 2;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
            }
            else if (_this.type == "III Term") {
                _this.termId = 3;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
            }
            else if (_this.type == "II Tech") {
                _this.termId = 7;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
            }
            if (_this.resultsLength == 0) {
                _this.weaponList = null;
            }
            if (_this.companyName == undefined || _this.companyName == null || _this.companyName == '') {
                _this.getWTAllCadetlist();
            }
            _this.getWeapons();
            _this.service.getBattalionList().subscribe(function (res) {
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
    }
    WeaponsTrainingComponent.prototype.blockPaste = function (e) {
        e.preventDefault();
    };
    WeaponsTrainingComponent.prototype.battalionSelected = function (e) {
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
            this.service.getCompanyList(this.battalionId).subscribe(function (res) {
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
        this.getWTAllCadetlist();
    };
    WeaponsTrainingComponent.prototype.companySelected = function (e) {
        this.companyName = e;
        if (this.companyName == 0) {
            this.getSpecialAllList();
            this.companyName = null;
        }
        else {
            if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
                this.getWTAllCadetlist();
            }
        }
        this.getWTAllCadetlist();
    };
    WeaponsTrainingComponent.prototype.getSpecialAllList = function () {
        var _this = this;
        this.service.getWT_All_ListByBCNameComp(this.termId, this.currentPage, this.pageSize, this.battalionName).subscribe(function (res) {
            console.log(res);
            if (res.message == 'OK') {
                _this.resultsLength = res.object.totalRecords;
                _this.WTCadetList = res.object.weaponTrainingResultFilterPayload;
            }
            else {
                _this.WTCadetList = [];
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.service.openSnackbar("Some Error Occured.");
        });
    };
    WeaponsTrainingComponent.prototype.ngOnInit = function () {
        // this.getWeapons(1);
    };
    WeaponsTrainingComponent.prototype.getWeapons = function () {
        var _this = this;
        this.service.getWeaponByTerm(this.termId, 2).subscribe(function (res) {
            if (res.status = "OK") {
                _this.weaponList = res.object;
                console.log(_this.weaponList.length, "-----");
            }
            else {
            }
        });
    };
    WeaponsTrainingComponent.prototype.serviceSearch = function (e) {
        this.serviceid = e;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this.getWTAllCadetlist();
        }
    };
    WeaponsTrainingComponent.prototype.getWTAllCadetlist = function () {
        var _this = this;
        this.spinner.show();
        if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
            this.service.getWt_All_ListByBCName(this.termId, this.currentPage, this.pageSize, this.battalionName, this.companyName).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.WTCadetList = res.object.weaponTrainingResultFilterPayload;
                    if (res.object.weaponTrainingResultFilterPayload.length > 0) {
                        _this.resultsLength = res.object.totalRecords;
                        _this.WTCadetList = res.object.weaponTrainingResultFilterPayload;
                    }
                    else {
                        _this.WTCadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.WTCadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.service.getWTAllCadetlist(this.termId, this.currentPage, this.pageSize).subscribe(function (res) {
                console.log(res);
                _this.resultsLength = res.object.totalRecords;
                if (res.status == 'OK') {
                    _this.WTCadetList = res.object.weaponTrainingResultFilterPayload;
                    if (res.object.weaponTrainingResultFilterPayload.length > 0) {
                        _this.WTCadetList = res.object.weaponTrainingResultFilterPayload;
                    }
                    else {
                        _this.WTCadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.WTCadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Some Error Occured.");
            });
        }
    };
    WeaponsTrainingComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode == 32) {
            event.preventDefault();
        }
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    WeaponsTrainingComponent.prototype.openPopup = function () {
        this.displayStyle = "block";
    };
    WeaponsTrainingComponent.prototype.closePopup = function () {
        this.displayStyle = "none";
    };
    WeaponsTrainingComponent.prototype.onChange = function (e, value, totalMarks, sub_id, mainIndex, subIndex, subSubIndex) {
        if (value > totalMarks || value == NaN) {
            this.adminservice.openSnackbar("Obtained marks is greater than total marks");
            value = '';
            e.target.value = null;
        }
        else if (value == "") {
            this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].cadetWTResultlist[subSubIndex].marks = '';
            this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].std = '';
            this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].gPoint = '';
            return false;
        }
        else {
            var total = document.getElementById(mainIndex + "" + subIndex).value;
            var __value = void 0;
            if (total) {
                __value = parseInt(total) + (value == '' ? 0 : parseInt(value)) + "";
                this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].marks = parseInt(total) + (value == '' ? 0 : parseInt(value));
            }
            else {
                __value = value;
                this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].marks = (value == '' ? 0 : parseInt(value));
            }
            document.getElementById(mainIndex + "" + subIndex).value = __value;
            this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].cadetWTResultlist[subSubIndex].marks = value;
            console.log(this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].cadetWTResultlist[subSubIndex].marks, "juned test subsubINdex");
            this.percent = ((this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].marks / this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].maxMarks) * 100);
            this.maxPercent = Math.round(this.percent);
            var gPT = ((this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].maxGPoint / 100) * this.maxPercent);
            this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].gPoint = Math.round(gPT);
            document.getElementById("gpoint" + mainIndex + "" + subIndex).value = Math.round(gPT).toString();
            document.getElementById("_gp" + mainIndex + "" + subIndex).value = Math.round(gPT).toString();
            var std = void 0;
            if (this.maxPercent > 70) {
                std = 'Marksman';
            }
            else if (this.maxPercent >= 60 && this.maxPercent <= 69) {
                std = 'First Class';
            }
            else if (this.maxPercent >= 40 && this.maxPercent <= 59) {
                std = 'Standard Shot';
            }
            else {
                std = 'Fail';
            }
            this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].std = std;
            document.getElementById("std" + mainIndex + "" + subIndex).value = std;
            console.log(document.getElementById("std" + mainIndex + "" + subIndex).value, "std test subsubINdex");
            this.newTotal = 0;
            for (var index = 0; index < this.weaponList.length; index++) {
                this.newTotal += parseFloat(document.getElementById("_gp" + mainIndex + index + "").value);
            }
            this.WTCadetList[mainIndex].weaponTrainingResult.grandTotal = this.newTotal;
            var val1 = this.WTCadetList[mainIndex].weaponTrainingResult.wtt;
            var val2 = this.WTCadetList[mainIndex].weaponTrainingResult.spotTest;
            this.setWtttotal(val1, val2, mainIndex);
        }
    };
    WeaponsTrainingComponent.prototype.setWtttotal = function (val1, val2, mainIndex) {
        this.onChange1(val1, mainIndex);
        this.onChange2(val2, mainIndex);
    };
    WeaponsTrainingComponent.prototype.onFocusEvent = function (e, value, totalMarks, sub_id, mainIndex, subIndex, subSubIndex) {
        if (value == NaN || value == '' || value == undefined) {
            return false;
        }
        // var total = (<HTMLInputElement>document.getElementById(mainIndex + "" + subIndex+""+subSubIndex)).value;
        // if (total) {
        //   (<HTMLInputElement>document.getElementById(mainIndex + "" + subIndex+""+subSubIndex)).value = parseInt(total) - parseInt(value) + "";
        //   this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist.marks = parseInt(total) - parseInt(value);
        // } else {
        //   (<HTMLInputElement>document.getElementById(mainIndex + "" + subIndex+""+subSubIndex)).value = value;
        //   this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist.marks = value;
        // }
        // // this.obtainedTotalMarks -= parseInt(val);
        // if (this.obtainedTotalMarks == NaN) {
        //   this.obtainedTotalMarks = 0;
        // }
        var total = document.getElementById(mainIndex + "" + subIndex).value;
        var __value;
        if (total) {
            var temp = parseInt(total) - (value == '' ? 0 : parseInt(value));
            // __value = parseInt(total) - (value == '' ? 0 : parseInt(value)) + "";
            this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].marks = temp == 0 ? null : temp;
        }
        else {
            __value = value;
            this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].marks = (value == '' ? 0 : parseInt(value));
        }
        document.getElementById(mainIndex + "" + subIndex).value = __value;
        this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].cadetWTResultlist[subSubIndex].marks = value;
        this.percent = ((this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].marks / this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].maxMarks) * 100);
        this.maxPercent = Math.round(this.percent);
        var gPT = ((this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].maxGPoint / 100) * this.maxPercent);
        this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].gPoint = Math.round(gPT);
        document.getElementById("gpoint" + mainIndex + "" + subIndex).value = Math.round(gPT).toString();
        document.getElementById("_gp" + mainIndex + "" + subIndex).value = Math.round(gPT).toString();
        var std;
        if (this.maxPercent > 70) {
            std = 'Marksman';
        }
        else if (this.maxPercent >= 60 && this.maxPercent <= 69) {
            std = 'First Class';
        }
        else if (this.maxPercent >= 40 && this.maxPercent <= 59) {
            std = 'Standard Shot';
        }
        else {
        }
        this.WTCadetList[mainIndex].weaponTrainingResult.cadetWTMainResultlist[subIndex].std = std;
        document.getElementById("std" + mainIndex + "" + subIndex).value = std;
        this.newTotal = 0;
        for (var index = 0; index < this.weaponList.length; index++) {
            this.newTotal += parseFloat(document.getElementById("_gp" + mainIndex + index + "").value);
        }
        this.WTCadetList[mainIndex].weaponTrainingResult.grandTotal = this.newTotal;
    };
    WeaponsTrainingComponent.prototype.onChange1 = function (value2, mainIndex) {
        console.log(value2, 'wtt value');
        if (value2 == NaN || value2 == '' || value2 == undefined) {
            value2 = null;
        }
        else if (value2 == "") {
            this.WTCadetList[mainIndex].weaponTrainingResult.wtt = '';
            return false;
        }
        else {
            this.tempnewTotal = parseInt(this.WTCadetList[mainIndex].weaponTrainingResult.grandTotal);
            this.tempnewTotal = this.tempnewTotal + parseInt(value2);
            this.WTCadetList[mainIndex].weaponTrainingResult.grandTotal = this.tempnewTotal;
            this.WTCadetList[mainIndex].weaponTrainingResult.wtt = value2;
        }
        console.log(this.tempnewTotal, 'tempnewtotal');
    };
    WeaponsTrainingComponent.prototype.onChange2 = function (value2, mainIndex) {
        if (value2 == NaN || value2 == '' || value2 == undefined) {
            value2 = '';
        }
        else if (value2 == "") {
            this.WTCadetList[mainIndex].weaponTrainingResult.spotTest = '';
            return false;
        }
        else {
            console.log(this.newTotal);
            this.tempnewTotal = parseFloat(this.WTCadetList[mainIndex].weaponTrainingResult.grandTotal);
            this.tempnewTotal = this.tempnewTotal + parseInt(value2);
            this.WTCadetList[mainIndex].weaponTrainingResult.grandTotal = this.tempnewTotal;
            this.WTCadetList[mainIndex].weaponTrainingResult.spotTest = value2;
        }
        console.log(this.tempnewTotal);
    };
    WeaponsTrainingComponent.prototype.onFocusEvent1 = function (value2, mainIndex) {
        if (value2 == NaN || value2 == '' || value2 == undefined) {
            value2 = 0;
        }
        this.tempnewTotal = parseFloat(this.WTCadetList[mainIndex].weaponTrainingResult.grandTotal);
        this.tempnewTotal = this.tempnewTotal - parseInt(value2);
        this.WTCadetList[mainIndex].weaponTrainingResult.grandTotal = this.tempnewTotal;
        console.log(this.tempnewTotal);
    };
    WeaponsTrainingComponent.prototype.onFocusEvent2 = function (value2, mainIndex) {
        if (value2 == NaN || value2 == '' || value2 == undefined) {
            value2 = 0;
        }
        console.log(this.newTotal);
        this.tempnewTotal = parseFloat(this.WTCadetList[mainIndex].weaponTrainingResult.grandTotal);
        this.tempnewTotal = this.tempnewTotal - parseInt(value2);
        this.WTCadetList[mainIndex].weaponTrainingResult.grandTotal = this.tempnewTotal;
        console.log(this.tempnewTotal);
    };
    WeaponsTrainingComponent.prototype.onChangeRemark = function (value2, mainIndex) {
        this.WTCadetList[mainIndex].weaponTrainingResult.remark = value2;
        console.log(this.tempnewTotal);
    };
    WeaponsTrainingComponent.prototype.confirm = function () {
        var _this = this;
        this.spinner.show();
        var formdata = this.WTCadetList;
        console.log(formdata);
        this.service.updateWTCadet(formdata).subscribe(function (res) {
            if (res.message == "Record updated successfully") {
                _this.spinner.hide();
                _this.service.openSnackbar("Updated Successfully");
                window.location.reload();
            }
            else {
                (function (err) {
                    _this.spinner.hide();
                    _this.service.openSnackbar("Some Error Occured.");
                });
            }
        });
    };
    WeaponsTrainingComponent.prototype.edSearch = function (event) {
        var _this = this;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this.service.openSnackbar("Search Bar is Empty. Please fill the details");
        }
        else {
            this.service.searchWT(this.termId, this.serviceid, 0, 100).subscribe(function (res) {
                console.log(res);
                // this.resultsLength = res.object.totalRecords;
                if (res.message == 'OK') {
                    _this.WTCadetList = res.object.weaponTrainingResultFilterPayload;
                    if (res.object.weaponTrainingResultFilterPayload.length > 0) {
                        _this.WTCadetList = res.object.weaponTrainingResultFilterPayload;
                    }
                    else {
                        _this.WTCadetList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else if (res.message == 'Record not found') {
                    _this.WTCadetList = [];
                }
                else {
                    _this.WTCadetList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Some Error Occured.");
            });
        }
    };
    WeaponsTrainingComponent.ctorParameters = function () { return [
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__["TrgTeamService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] }
    ]; };
    WeaponsTrainingComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true },] }],
        blockPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['paste', ['$event'],] }]
    };
    WeaponsTrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-weapons-training',
            template: _raw_loader_weapons_training_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_weapons_training_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__["TrgTeamService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"]])
    ], WeaponsTrainingComponent);
    return WeaponsTrainingComponent;
}());



/***/ }),

/***/ "wPnd":
/*!********************************************************************************************!*\
  !*** ./src/app/main/trg-team/weapons-training/weapons-training/weapons-training.module.ts ***!
  \********************************************************************************************/
/*! exports provided: WeaponsTrainingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponsTrainingModule", function() { return WeaponsTrainingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _weapons_training_weapons_training_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../weapons-training/weapons-training.component */ "PogS");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../material/material.module */ "hctd");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _weapons_training_weapons_training_component__WEBPACK_IMPORTED_MODULE_4__["WeaponsTrainingComponent"]
    }
];
var WeaponsTrainingModule = /** @class */ (function () {
    function WeaponsTrainingModule() {
    }
    WeaponsTrainingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _weapons_training_weapons_training_component__WEBPACK_IMPORTED_MODULE_4__["WeaponsTrainingComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], WeaponsTrainingModule);
    return WeaponsTrainingModule;
}());



/***/ })

}]);