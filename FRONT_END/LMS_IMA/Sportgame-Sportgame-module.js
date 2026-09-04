(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Sportgame-Sportgame-module"],{

/***/ "/zKX":
/*!***************************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/Sportgame/sportgame/sportgame.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n}\n\n.tg .tg-xakg {\n  background-color: #c6c4c4;\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-1pqm {\n  background-color: #c6c4c4;\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-amwm {\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.main-content {\n  min-height: 45vw !important;\n}\n\nh2 button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}");

/***/ }),

/***/ "IoXr":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/Sportgame/sportgame/sportgame.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"mat-heading\">\r\n            <div id=\"top-bar\" class=\"\">\r\n                <h2>\r\n                    <button mat-icon-button (click)=\"goBack()\">\r\n                        <mat-icon>chevron_left</mat-icon>\r\n                    </button>\r\n                    <span class=\"sub-menu1\">\r\n                        E-Dossier > Overall Assessment > SPORTS</span>\r\n                </h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"mat-card mat-focus-indicator\">\r\n            <div class=\"service-id mb-2 mx-5 row\">\r\n                <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Ima No.</label>\r\n                                <input placeholder=\"No\" type=\"text\" disabled id=\"sportgameID\"\r\n                                    class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Rank</label>\r\n                                <input placeholder=\"Rank\" type=\"text\" disabled id=\"sportgameRk\"\r\n                                    class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Name</label>\r\n                                <input placeholder=\"Name\" type=\"text\" disabled id=\"sportgameName\"\r\n                                    class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Term</label>\r\n                                <input placeholder=\"Term\" type=\"text\" disabled id=\"sportgameTermName\"\r\n                                    class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Bn</label>\r\n                                <input placeholder=\"Bn\" type=\"text\" disabled id=\"sportgameBn\"\r\n                                    class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Coy</label>\r\n                                <input placeholder=\"Coy\" type=\"text\" disabled id=\"sportgameComp\"\r\n                                    class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div class=\"eqtn mb-5\">\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n                <div class=\"ng-star-inserted\">\r\n                    <!-- <div class=\"mat-new mb-4\">\r\n                        <h4 class=\"card-heading\">Sports & Games</h4>\r\n                    </div> -->\r\n                </div>\r\n                <mat-card *ngIf=\"Campmark1.length==0\" style=\" margin: auto; width: 100%;text-align: center;padding-top: 80px;\">\r\n                    <img src=\"assets/img/empty-no-data.png\" >\r\n                </mat-card>\r\n               \r\n                <form [formGroup]=\"sportForm\">\r\n                    <div formArrayName=\"sportsSubResult\" *ngIf=\"this.termid==1 || this.termid == 2 || this.termid == 3\" class=\"mb-5\">\r\n                       <div *ngIf=\"TermFetch == 1\">\r\n                        <h3>I-Term</h3>\r\n                        <table  class=\"tg\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"tg-1pqm\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">S\r\n                                            No </span></th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Session</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Subject</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Max\r\n                                            Marks</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Marks\r\n                                            Obtained</span>\r\n                                    </th>\r\n\r\n                                    <!-- <th class=\"tg-xakg\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Remarks</span>\r\n                                    </th> -->\r\n\r\n                                </tr>\r\n                                <tr>\r\n                                  \r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let mr of getCSubjectRes.controls;let i=index\">\r\n                                    <ng-container [formGroupName]=\"i\">\r\n                                        <td> {{i+1}} </td>\r\n                                        <td> {{mr.value.termSession}}</td>\r\n                                        <td> {{mr.value.subjectName}} </td>\r\n                                        <td> <b>{{mr.value.totalMarks}}</b> </td>\r\n\r\n                                        <td>\r\n                                            <input min=\"0\" disabled oninput=\"this.value = \r\n                                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                                formControlName=\"obtainedMarks\" class=\"form-control\"\r\n                                                (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                                on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                                maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                        </td>\r\n                                        <!-- <td><input class=\"form-control\" disabled formControlName=\"remarks\"></td> -->\r\n                                    </ng-container>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td class=\"tg-amwm\" colspan=\"3\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total</span>\r\n                                    </td>\r\n                                    <td class=\"tg-amwm\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">{{updatetotalmarks}}</span>\r\n                                    </td>\r\n                                    <td class=\"tg-0lax\">{{totalmarkst}}</td>\r\n                                </tr>\r\n\r\n\r\n\r\n                            </tbody>\r\n                        </table>\r\n                       </div>\r\n                       \r\n                       \r\n                        <!-- <button  mat-raised-button (click)=\"confirm(1)\">CONFIRM</button> -->\r\n\r\n                    </div>\r\n                   \r\n\r\n                    <div formArrayName=\"sportsSubResult2\" *ngIf=\"this.termid == 2 || this.termid == 3\" class=\"mb-5\">\r\n                    <div *ngIf=\"TermFetch == 1 && TermFetch1 == 2 \">\r\n                        <h3>II-Term</h3>\r\n                        <table  class=\"tg\" >\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"tg-1pqm\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">S\r\n                                            No </span></th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Session</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Subject</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Max\r\n                                            Marks</span>\r\n                                    </th>\r\n                                    <th class=\"tg-xakg\" colspan=\"3\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">MARKS\r\n                                            OBTAINED</span></th>\r\n                                </tr>\r\n                                <!-- <tr>\r\n\r\n                                    <th class=\"tg-xakg\" colspan=\"4\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">II\r\n                                            TERM</span></th>\r\n\r\n                                </tr> -->\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let mr of getCSubjectRes2.controls;let i=index\">\r\n                                    <ng-container [formGroupName]=\"i\">\r\n                                        <td> {{i+1}} </td>\r\n                                        <td> {{mr.value.termSession}}</td>\r\n                                        <td> {{mr.value.subjectName}} </td>\r\n                                        <td> {{mr.value.totalMarks}} </td>\r\n                                        <td colspan=\"4\">\r\n                                            <input min=\"0\" disabled oninput=\"this.value = \r\n                                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                                formControlName=\"obtainedMarks\" class=\"form-control\"\r\n                                                (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                                on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                                maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                        </td>\r\n\r\n                                    </ng-container>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td class=\"tg-amwm\" colspan=\"3\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total</span>\r\n                                    </td>\r\n                                    <td class=\"tg-amwm\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">{{updatetotalmarks1}}</span>\r\n                                    </td>\r\n                                    <td class=\"tg-0lax\">{{totalmarkst1}}</td>\r\n                                </tr>\r\n\r\n\r\n\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                     \r\n                 \r\n                        <!-- <button *ngIf=\"id=='2'\" mat-raised-button (click)=\"confirm(2)\">CONFIRM</button> -->\r\n\r\n                    </div>\r\n\r\n             \r\n                    <div formArrayName=\"sportsSubResult3\" *ngIf=\"this.termid == 3\" class=\"mb-5\">\r\n                     <div *ngIf=\"TermFetch == 1 && TermFetch1 == 2 && TermFetch2 == 3\">\r\n                        <h3>III-Term</h3>\r\n                        <table class=\"tg\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"tg-1pqm\" rowspan=\"2\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">S\r\n                                            No </span></th>\r\n                                            <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                                style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Session</span>\r\n                                        </th>\r\n                                        <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                                style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Subject</span>\r\n                                        </th>\r\n                                        <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                                style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Max\r\n                                                Marks</span>\r\n                                        </th>\r\n                                    <th class=\"tg-xakg\" colspan=\"3\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">MARKS\r\n                                            OBTAINED</span></th>\r\n                                </tr>\r\n                                <!-- <tr>\r\n\r\n                                    <th class=\"tg-xakg\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">III\r\n                                            TERM</span></th>\r\n                                </tr> -->\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let mr of getCSubjectRes3.controls;let i=index\">\r\n                                    <ng-container [formGroupName]=\"i\">\r\n                                        <td> {{i+1}} </td>\r\n                                        <td> {{mr.value.termSession}}</td>\r\n                                        <td> {{mr.value.subjectName}} </td>\r\n                                        <td> {{mr.value.totalMarks}} </td>\r\n                                        <td colspan=\"4\">\r\n                                            <input min=\"0\" disabled oninput=\"this.value = \r\n                                    !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\"\r\n                                                formControlName=\"obtainedMarks\" class=\"form-control\"\r\n                                                (focus)=\"onFocusEvent($event.target.value,mr.controls.totalMarks.value)\"\r\n                                                on-focusout=\"onChange($event.target.value,mr.controls.totalMarks.value,i)\"\r\n                                                maxlength=\"2\" (keypress)=\"keyPress($event)\">\r\n                                        </td>\r\n\r\n                                    </ng-container>\r\n                                </tr>\r\n\r\n                                <tr>\r\n                                    <td class=\"tg-amwm\" colspan=\"3\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total</span>\r\n                                    </td>\r\n                                    <td class=\"tg-amwm\"><span\r\n                                            style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">{{updatetotalmarks2}}</span>\r\n                                    </td>\r\n                                    <td class=\"tg-0lax\">{{totalmarkst2}}</td>\r\n                                </tr>\r\n\r\n                         \r\n                            </tbody>\r\n                        </table>\r\n                     </div>\r\n                        \r\n                    </div>\r\n\r\n                    <div *ngIf=\"mnc=='update'\" class=\"form-group col-md-2 submitbutton\">\r\n                        \r\n                        <!-- <button *ngIf=\"id=='3'\" mat-raised-button  (click)=\"confirm(3)\">CONFIRM</button> -->\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "jIur":
/*!************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/Sportgame/Sportgame.module.ts ***!
  \************************************************************************************************/
/*! exports provided: SportgameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportgameModule", function() { return SportgameModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sportgame_sportgame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sportgame/sportgame.component */ "wiIs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/material/material.module */ "hctd");
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
// import { MaterialModule } from 'app/material/material.module';




var routes = [
    {
        path: '',
        component: _sportgame_sportgame_component__WEBPACK_IMPORTED_MODULE_2__["SportgameComponent"]
    },
];
var SportgameModule = /** @class */ (function () {
    function SportgameModule() {
    }
    SportgameModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sportgame_sportgame_component__WEBPACK_IMPORTED_MODULE_2__["SportgameComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]
            ]
        })
    ], SportgameModule);
    return SportgameModule;
}());



/***/ }),

/***/ "wiIs":
/*!*************************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/Sportgame/sportgame/sportgame.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SportgameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportgameComponent", function() { return SportgameComponent; });
/* harmony import */ var _raw_loader_sportgame_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sportgame.component.html */ "IoXr");
/* harmony import */ var _sportgame_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sportgame.component.scss */ "/zKX");
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












var SportgameComponent = /** @class */ (function () {
    function SportgameComponent(dialog, spinner, route, fb, router, adminservice, sharedservice, cdref, edossierservice, activeRoute, EDossierService) {
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
        this.sportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.totalss = 0;
        this.mnc = "add  ";
        this.obtainedmarks = [];
        this.tempArr1 = [];
        this.tempObj1 = [];
        this.totalmarkst = 0;
        this.totalmarks1 = 0;
        this.totalmarkst1 = 0;
        this.totalmarkst2 = 0;
        this.displayedColumns = ['id', 'termSession', 'subjectName', 'totalMarks', 'MarksObtained'];
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
        this.sportForm = this.fb.group({
            serviceId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalian: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            // termSession: ['', Validators.required],
            course: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cadetRank: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: [{ disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            sportsSubResult: this.fb.array([]),
            sportsSubResult2: this.fb.array([]),
            sportsSubResult3: this.fb.array([]),
        });
    }
    Object.defineProperty(SportgameComponent.prototype, "getCSubjectRes", {
        get: function () {
            return this.sportForm.get('sportsSubResult');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SportgameComponent.prototype, "getCSubjectRes1", {
        get: function () {
            return this.sportForm.get('sportsSubResult');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SportgameComponent.prototype, "getCSubjectRes2", {
        get: function () {
            return this.sportForm.get('sportsSubResult2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SportgameComponent.prototype, "getCSubjectRes3", {
        get: function () {
            return this.sportForm.get('sportsSubResult3');
        },
        enumerable: false,
        configurable: true
    });
    SportgameComponent.prototype.genSubRec = function () {
        return this.fb.group({
            id: [''],
            obtainedMarks: [''],
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
    SportgameComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(localStorage.getItem("e"), '1111');
        console.log(localStorage.getItem("i"), '2222');
        document.getElementById("sportgameID").value = localStorage.getItem("e");
        document.getElementById("sportgameName").value = localStorage.getItem("i");
        document.getElementById("sportgameComp").value = localStorage.getItem("companyName");
        document.getElementById("sportgameBn").value = localStorage.getItem("battalionName");
        // (<HTMLInputElement>document.getElementById("sportgameTermId")).value = localStorage.getItem("termId");
        document.getElementById("sportgameTermName").value = localStorage.getItem("termName");
        document.getElementById("sportgameRk").value = localStorage.getItem("rank");
        this.id = this.route.snapshot.queryParamMap.get('Id');
        this.termid = this.route.snapshot.queryParamMap.get('termId');
        // alert(this.termid);
        this.serid = this.id;
        console.log("service ID IN EQTN ", this.id);
        console.log("TERM ID IN EQTN", this.termid);
        this.EDossierService.getSportsEdossiermarksByServiceId(this.id).subscribe(function (res) {
            if (res.message == "Record found successfully") {
                _this.mnc = "update";
                _this.spinner.hide();
                _this.Campmark1 = res.object;
                if (_this.termid == 1 || _this.termid == 2 || _this.termid == 3) {
                    _this.drilleditid = res.object[0].id;
                    _this.TermFetch = res.object[0].termId;
                    _this.updatetotalmarks = res.object[0].totalMarks;
                    _this.totalmarkst = res.object[0].obtainedMarks;
                    _this.termSession = res.object[0].termSession;
                    console.log(_this.updatetotalmarks, "updatetotalmarks");
                    console.log(_this.totalmarkst, "totalmarkst");
                    var cmrks = res.object[0].sportsSubResult;
                    console.log("view for cmrks", cmrks);
                    cmrks.forEach(function (e) {
                        e.id = e.id;
                        console.log("eeee===>>", e);
                        _this.getCSubjectRes.push(_this.genSubRec());
                    });
                    _this.sportForm.patchValue({
                        sportsSubResult: cmrks,
                    });
                }
                if (_this.termid == 2 || _this.termid == 3) {
                    _this.TermFetch1 = res.object[1].termId;
                    _this.updatetotalmarks1 = res.object[1].totalMarks;
                    _this.totalmarkst1 = res.object[1].obtainedMarks;
                    _this.termSession = res.object[1].termSession;
                    var cmrks1 = res.object[1].sportsSubResult;
                    cmrks1.forEach(function (e) {
                        e.id = e.id;
                        console.log("eeee===>>", e);
                        _this.getCSubjectRes2.push(_this.genSubRec());
                    });
                    _this.sportForm.patchValue({
                        sportsSubResult2: cmrks1,
                    });
                }
                if (_this.termid == 3) {
                    _this.TermFetch2 = res.object[2].termId;
                    _this.updatetotalmarks2 = res.object[2].totalMarks;
                    _this.totalmarkst2 = res.object[2].obtainedMarks;
                    _this.termSession = res.object[2].termSession;
                    var cmrks2 = res.object[2].sportsSubResult;
                    cmrks2.forEach(function (e) {
                        e.id = e.id;
                        console.log("eeee===>>", e);
                        _this.getCSubjectRes3.push(_this.genSubRec());
                    });
                    _this.sportForm.patchValue({
                        sportsSubResult3: cmrks2,
                    });
                }
                // console.log(this.obtainedmarks, "obtainedmarks")
                // this.dataSource = new MatTableDataSource(res.object.trgEQTNSubResult);
                _this.sportForm.patchValue({
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
    SportgameComponent.prototype.ngAfterViewInit = function () {
    };
    SportgameComponent.prototype.getTotal = function () {
        return this.Campmarks.map(function (t) { return t.totalMarks; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    SportgameComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    SportgameComponent.prototype.goBack = function () {
        window.history.back();
    };
    SportgameComponent.prototype.onChange = function (value, totalMarks, index) {
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
    SportgameComponent.prototype.onFocusEvent = function (value1) {
        if (value1 == NaN || value1 == '' || value1 == undefined) {
            value1 = 0;
        }
        this.totalmarkst -= parseInt(value1);
        if (this.totalmarkst == NaN) {
            this.totalmarkst = 0;
        }
        console.log(this.totalmarkst);
    };
    SportgameComponent.prototype.getMarks = function (i, e) {
        if (this.tempArr[i] == undefined || this.tempArr[i] == '') {
            this.tempArr.push(e);
        }
        else {
            this.tempArr[i] = e;
        }
    };
    SportgameComponent.prototype.attemptChange = function (e) {
        this.attemptvalue = e;
    };
    SportgameComponent.prototype.confirm = function (termid) {
        var _this = this;
        console.log(termid, "tttt");
        // alert(this.sportForm.value.termSession)
        this.sportForm.value.termSession = "Spring";
        this.sportForm.value.serviceId = this.serviceId;
        var indexT = 0;
        this.sportForm.value == this.totalMarks1;
        this.totalMarks1 = Object.assign({}, this.sportForm.value, { obtainedMarks: this.totalmarkst, totalMarks: this.updatetotalmarks, status: 1, termId: termid, id: this.drilleditid });
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
        // delete formdata.termSession;
        delete formdata.subject;
        delete formdata.term;
        delete formdata.username;
        delete formdata.subject1;
        delete formdata.grading;
        delete formdata.attempt;
        this.sportForm.value.sportsSubResult = [];
        console.log(formdata, "all");
        this.EDossierService.updateSportsEdossiermarks(formdata).subscribe(function (res) {
            if (res.message == 'Record found successfully') {
                _this.adminservice.openSnackbar("Drill Marks Updated Successfully");
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
    SportgameComponent.ctorParameters = function () { return [
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
    SportgameComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true },] }]
    };
    SportgameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-sportgame',
            template: _raw_loader_sportgame_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sportgame_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_9__["EDossierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_9__["EDossierService"]])
    ], SportgameComponent);
    return SportgameComponent;
}());



/***/ })

}]);