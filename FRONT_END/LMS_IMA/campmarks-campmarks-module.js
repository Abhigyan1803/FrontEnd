(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campmarks-campmarks-module"],{

/***/ "9+iD":
/*!**********************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-campmark/campmarks/campmarks.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div#top-bar {\n  background: #4c5041;\n  padding: 5px 15px;\n  color: #fff;\n}\n\ndiv#top-bar h2 {\n  font-size: 19px;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  /*margin: 1rem;*/\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-l71o {\n  font-style: italic;\n  font-weight: bold;\n  text-align: right;\n  vertical-align: middle;\n}\n\n.tg .tg-lqy6 {\n  text-align: right;\n  vertical-align: middle;\n}\n\n.tg .tg-akbm {\n  font-weight: bold;\n  text-align: left;\n  text-decoration: none;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: left;\n  vertical-align: middle;\n}\n\n.tg .tg-l2oz {\n  font-weight: bold;\n  text-align: right;\n  vertical-align: middle;\n}");

/***/ }),

/***/ "CO3+":
/*!********************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-campmark/campmarks/campmarks.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CampmarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampmarksComponent", function() { return CampmarksComponent; });
/* harmony import */ var _raw_loader_campmarks_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./campmarks.component.html */ "Yis1");
/* harmony import */ var _campmarks_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campmarks.component.scss */ "9+iD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CampmarksComponent = /** @class */ (function () {
    function CampmarksComponent() {
    }
    CampmarksComponent.prototype.ngOnInit = function () {
    };
    CampmarksComponent.ctorParameters = function () { return []; };
    CampmarksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-campmarks',
            template: _raw_loader_campmarks_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_campmarks_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], CampmarksComponent);
    return CampmarksComponent;
}());



/***/ }),

/***/ "LHqW":
/*!*****************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-campmark/campmarks/campmarks.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: CampmarksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampmarksModule", function() { return CampmarksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _campmarks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./campmarks.component */ "CO3+");
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
        component: _campmarks_component__WEBPACK_IMPORTED_MODULE_4__["CampmarksComponent"]
    },
];
var CampmarksModule = /** @class */ (function () {
    function CampmarksModule() {
    }
    CampmarksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _campmarks_component__WEBPACK_IMPORTED_MODULE_4__["CampmarksComponent"],
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
    ], CampmarksModule);
    return CampmarksModule;
}());



/***/ }),

/***/ "Yis1":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/ed-campmark/campmarks/campmarks.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div id=\"top-bar\" class=\"row\">\r\n            <h2>E-Dossier - CAMPS</h2>\r\n        </div>\r\n        <div class=\"eqtn mb-5\">\r\n            <div class=\"ng-star-inserted\">\r\n                <div class=\"mat-new mb-4 mt-3\">\r\n                    <h4 class=\"card-heading\">CAMPS : I TERM</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n                <div class=\"ng-star-inserted\">\r\n                    <div class=\"mat-new mb-4\">\r\n                        <h4 class=\"card-heading\">EX-</h4>\r\n                    </div>\r\n                </div>\r\n                <table class=\"tg\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"tg-akbm\" colspan=\"4\"><span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">Performance During Camp</span><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\"> (To include application of theoretical knowledge on ground, tactical acumen, logical approach, briefing/ orders , appt held, runback and any specific strength/ weaknesses) -</span><br>\r\n                                <form class=\"ng-untouched ng-pristine ng-invalid mt-3\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <textarea rows=\"5\" placeholder=\"\" formcontrolname=\"\" class=\"form-control ng-untouched ng-pristine ng-invalid\"></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td class=\"tg-lqy6\"><span style=\"font-weight:bold;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Spot Test (50 Mks)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                            <td class=\"tg-l71o\" colspan=\"2\" rowspan=\"2\"><span style=\"font-weight:700;font-style:italic;text-decoration:none;color:#000;background-color:transparent\"><textarea rows=\"5\" placeholder=\"\" formcontrolname=\"\" class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"></textarea>(Name/ Signature of Pl/ Coy Cdr)</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"tg-lqy6\"><span style=\"font-weight:bold;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Performance in Coy (75 Mks)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"tg-l2oz\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total Camp Mks (125)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                            <td class=\"tg-l2oz\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Route March/ Run Back (65)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"ng-star-inserted\">\r\n                <div class=\"mat-new mb-4 mt-3\">\r\n                    <h4 class=\"card-heading\">CAMPS : II TERM</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n                <div class=\"ng-star-inserted\">\r\n                    <div class=\"mat-new mb-4\">\r\n                        <h4 class=\"card-heading\">EX-</h4>\r\n                    </div>\r\n                </div>\r\n                <table class=\"tg\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"tg-akbm\" colspan=\"4\"><span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">Performance During Camp</span><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\"> (To include application of theoretical knowledge on ground, tactical acumen, logical approach, briefing/ orders , appt held, runback and any specific strength/ weaknesses) -</span><br>\r\n                                <form class=\"ng-untouched ng-pristine ng-invalid mt-3\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <textarea rows=\"5\" placeholder=\"\" formcontrolname=\"\" class=\"form-control ng-untouched ng-pristine ng-invalid\"></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td class=\"tg-lqy6\"><span style=\"font-weight:bold;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Spot Test (50 Mks)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                            <td class=\"tg-l71o\" colspan=\"2\" rowspan=\"2\"><span style=\"font-weight:700;font-style:italic;text-decoration:none;color:#000;background-color:transparent\"><textarea rows=\"5\" placeholder=\"\" formcontrolname=\"\" class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"></textarea>(Name/ Signature of Pl/ Coy Cdr)</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"tg-lqy6\"><span style=\"font-weight:bold;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Performance in Coy (75 Mks)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"tg-l2oz\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total Camp Mks (125)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                            <td class=\"tg-l2oz\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Route March/ Run Back (65)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"ng-star-inserted\">\r\n                <div class=\"mat-new mb-4 mt-3\">\r\n                    <h4 class=\"card-heading\">CAMPS : II TECH</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n                <div class=\"ng-star-inserted\">\r\n                    <div class=\"mat-new mb-4\">\r\n                        <h4 class=\"card-heading\">EX-</h4>\r\n                    </div>\r\n                </div>\r\n                <table class=\"tg\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"tg-akbm\" colspan=\"4\"><span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">Performance During Camp</span><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\"> (To include application of theoretical knowledge on ground, tactical acumen, logical approach, briefing/ orders , appt held, runback and any specific strength/ weaknesses) -</span><br>\r\n                                <form class=\"ng-untouched ng-pristine ng-invalid mt-3\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <textarea rows=\"5\" placeholder=\"\" formcontrolname=\"\" class=\"form-control ng-untouched ng-pristine ng-invalid\"></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td class=\"tg-lqy6\"><span style=\"font-weight:bold;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Spot Test (50 Mks)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                            <td class=\"tg-l71o\" colspan=\"2\" rowspan=\"2\"><span style=\"font-weight:700;font-style:italic;text-decoration:none;color:#000;background-color:transparent\"><textarea rows=\"5\" placeholder=\"\" formcontrolname=\"\" class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"></textarea>(Name/ Signature of Pl/ Coy Cdr)</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"tg-lqy6\"><span style=\"font-weight:bold;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Performance in Coy (75 Mks)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"tg-l2oz\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total Camp Mks (125)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                            <td class=\"tg-l2oz\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Route March/ Run Back (65)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"ng-star-inserted\">\r\n                <div class=\"mat-new mb-4 mt-3\">\r\n                    <h4 class=\"card-heading\">CAMPS : III TERM</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n                <div class=\"ng-star-inserted\">\r\n                    <div class=\"mat-new mb-4\">\r\n                        <h4 class=\"card-heading\">EX-</h4>\r\n                    </div>\r\n                </div>\r\n                <table class=\"tg\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"tg-akbm\" colspan=\"4\"><span style=\"font-weight:700;font-style:normal;text-decoration:underline;color:#000;background-color:transparent\">Performance During Camp</span><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\"> (To include application of theoretical knowledge on ground, tactical acumen, logical approach, briefing/ orders , appt held, runback and any specific strength/ weaknesses) -</span><br>\r\n                                <form class=\"ng-untouched ng-pristine ng-invalid mt-3\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"form-group\">\r\n                                                <textarea rows=\"5\" placeholder=\"\" formcontrolname=\"\" class=\"form-control ng-untouched ng-pristine ng-invalid\"></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td class=\"tg-lqy6\"><span style=\"font-weight:bold;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Spot Test (50 Mks)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                            <td class=\"tg-l71o\" colspan=\"2\" rowspan=\"2\"><span style=\"font-weight:700;font-style:italic;text-decoration:none;color:#000;background-color:transparent\"><textarea rows=\"5\" placeholder=\"\" formcontrolname=\"\" class=\"form-control ng-untouched ng-pristine ng-invalid mb-2\"></textarea>(Name/ Signature of Pl/ Coy Cdr)</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"tg-lqy6\"><span style=\"font-weight:bold;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Performance in Coy (75 Mks)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"tg-l2oz\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total Camp Mks (125)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                            <td class=\"tg-l2oz\"><span style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Route March/ Run Back (65)</span></td>\r\n                            <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ })

}]);