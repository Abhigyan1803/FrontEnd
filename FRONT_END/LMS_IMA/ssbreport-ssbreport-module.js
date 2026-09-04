(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ssbreport-ssbreport-module"],{

/***/ "1pbc":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/ed-cadetdetails/ssbreport/ssbreport.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"mat-heading\">\r\n        <div id=\"top-bar\" class=\"\">\r\n          <h2>\r\n            <button mat-icon-button (click)=\"goBack()\">\r\n              <mat-icon>chevron_left</mat-icon>\r\n            </button>\r\n            <span class=\"sub-menu1\">\r\n             E-Dossier > Assessment > SSB-Report</span></h2>\r\n      </div>\r\n      </div>\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n      <div class=\"service-id mb-2 mx-0\">\r\n        <!-- <div class=\"input_id col-md-6\">\r\n            <b> Service Id :</b> <input type=\"text\" disabled id=\"clubServiceID\" class=\"form-control mt-2\">\r\n        </div>\r\n        <div class=\"input_id col-md-6\">\r\n            <b> Name :</b> <input type=\"text\" disabled id=\"clubName\" class=\"form-control mt-2\">\r\n        </div> -->\r\n        <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Ima No.</label>\r\n                <input placeholder=\"No\"  type=\"text\" disabled id=\"ssbID\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>  \r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Rank</label>\r\n                <input placeholder=\"Rank\"  type=\"text\" disabled id=\"ssbRk\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Name</label>\r\n                <input placeholder=\"Name\"  type=\"text\" disabled id=\"ssbName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Term</label>\r\n                <input placeholder=\"Term\"  type=\"text\" disabled id=\"ssbTermName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Bn</label>\r\n                <input placeholder=\"Bn\"  type=\"text\" disabled id=\"ssbBn\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Coy</label>\r\n                <input placeholder=\"Coy\"  type=\"text\" disabled id=\"ssbComp\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n        </form>\r\n      </div>\r\n      </div>\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n      <div class=\"main-row\">\r\n        <!-- <div class=\"box-shadow\">\r\n            <h4 class=\"card-heading\">\r\n                <span class=\"sub-menu1\"> SSB</span>\r\n            </h4>\r\n        </div> -->\r\n        <form [formGroup]=\"ssbreportForm\">\r\n\r\n            <div class=\"mat-card\">\r\n                <h4 class=\"red-heading\">Traits</h4>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"rank\">Positive<span class=\"required\">*</span></label>\r\n                            <textarea class=\"form-control\" formControlName=\"positiveTraits\" \r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.positiveTraits.errors }\"></textarea>\r\n                            <span class=\"val_msg\" *ngIf=\"f.positiveTraits.errors && f.positiveTraits.errors.required && isError\" >Please Enter Positive</span>\r\n                          \r\n                            <!-- <div *ngIf=\"submitted && f.positiveTraits.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f.positiveTraits.errors.required\">Email is required</div>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"rank\">Negative<span class=\"required\">*</span></label>\r\n                            <textarea class=\"form-control\" formControlName=\"negativeTraits\"></textarea>\r\n                            <span class=\"val_msg\" *ngIf=\"f.negativeTraits.errors && f.negativeTraits.errors.required && isError\" >Please Enter Negative</span>\r\n                          </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"mat-card\">\r\n                <table class=\"tg sports\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"tg-0lax\">OS</th>\r\n                            <th class=\"tg-0lax\">WAA</th>\r\n                            <th class=\"tg-0lax\">AA</th>\r\n                            <th class=\"tg-0lax\">JAA</th>\r\n                            <th class=\"tg-0lax\">HA</th>\r\n                            <th class=\"tg-0lax\">LA</th>\r\n                            <th class=\"tg-0lax\">JBA</th>\r\n                            <th class=\"tg-0lax\">BA</th>\r\n                            <th class=\"tg-0lax\">WBA</th>\r\n                            <th class=\"tg-0lax\">POOR</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td class=\"tg-0lax\"><input type=\"radio\" formControlName=\"avgResult\"  name=\"avgResult\" checked=\"true\"  value=\"OS\" (change)=\"onChange($event)\"></td>\r\n                            <td class=\"tg-0lax\"><input type=\"radio\"  formControlName=\"avgResult\" name=\"avgResult\"  value=\"WAA\" (change)=\"onChange($event)\"></td>\r\n                            <td class=\"tg-0lax\"><input type=\"radio\"  formControlName=\"avgResult\" name=\"avgResult\" value=\"AA\" (change)=\"onChange($event)\"></td>\r\n                            <td class=\"tg-0lax\"><input type=\"radio\"  formControlName=\"avgResult\" name=\"avgResult\" value=\"JAA\" (change)=\"onChange($event)\"></td>\r\n                            <td class=\"tg-0lax\"><input type=\"radio\"  formControlName=\"avgResult\" name=\"avgResult\" value=\"HA\" (change)=\"onChange($event)\"></td>\r\n                            <td class=\"tg-0lax\"><input type=\"radio\"  formControlName=\"avgResult\" name=\"avgResult\" value=\"LA\" (change)=\"onChange($event)\"></td>\r\n                            <td class=\"tg-0lax\"><input type=\"radio\"  formControlName=\"avgResult\" name=\"avgResult\" value=\"JBA\" (change)=\"onChange($event)\"></td>\r\n                            <td class=\"tg-0lax\"><input type=\"radio\"  formControlName=\"avgResult\" name=\"avgResult\" value=\"BA\" (change)=\"onChange($event)\"></td>\r\n                            <td class=\"tg-0lax\"><input type=\"radio\"  formControlName=\"avgResult\" name=\"avgResult\" value=\"WBA\" (change)=\"onChange($event)\"></td>\r\n                            <td class=\"tg-0lax\"><input type=\"radio\"  formControlName=\"avgResult\" name=\"avgResult\" value=\"POOR\" (change)=\"onChange($event)\"></td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <span class=\"val_msg\" *ngIf=\"f.avgResult.errors && f.avgResult.errors.required && isError\" >Please Select AVERAGE RESULT</span>\r\n                          \r\n                </table>\r\n                <p class=\"txt-cc\"><b>Note: </b> OS - OUTSTANDING, WAA - WAY ABOVE AVERAGE, AA - ABOVE AVERAGE, JAA - JUST ABOVE AVERAGE, HA - HIGH AVERAGE, LA - LOW AVERAGE, JBA - JUST BELOW AVERAGE, BA - BELOW AVERAGE, WBA - WAY BELOW AVERAGE</p>\r\n            </div>\r\n            <div class=\"mat-card\">\r\n                <h4 class=\"red-heading\">DETAILS OF PABT </h4>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"rank\">Location<span class=\"required\">*</span></label>\r\n                            <input type=\"text\" formControlName=\"location\" class=\"form-control\">\r\n                            <span class=\"val_msg\" *ngIf=\"f.location.errors && f.location.errors.required && isError\" >Please Enter Location</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"rank\">Date<span class=\"required\">*</span></label>\r\n                            <input type=\"date\" id=\"date\" formControlName=\"date\" class=\"form-control\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"rank\">Result<span class=\"required\">*</span></label>\r\n                            <textarea class=\"form-control\" formControlName=\"result\"></textarea>\r\n                            <span class=\"val_msg\" *ngIf=\"f.result.errors && f.result.errors.required && isError\" >Please Enter Result</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <h4 class=\"red-heading main-red-heading\">NDA/ ACC REPORT</h4>\r\n            <div class=\"mat-card\">\r\n                <h4 class=\"red-heading\">Highlights</h4>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"rank\">Achievements/ Strong Points  <span class=\"required\">*</span></label>\r\n                            <textarea class=\"form-control\" formControlName=\"achivements\"></textarea>\r\n                            <span class=\"val_msg\" *ngIf=\"f.achivements.errors && f.achivements.errors.required && isError\" >Please Enter Achievements</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"rank\">Weakness<span class=\"required\">*</span></label>\r\n                            <textarea class=\"form-control\" formControlName=\"weakness\"></textarea>\r\n                            <span class=\"val_msg\" *ngIf=\"f.weakness.errors && f.weakness.errors.required && isError\" >Please Enter Weakness</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n        <button mat-raised-button class=\"pull-right\" type=\"submit\" (click)=\"onSubmit()\">Submit</button>\r\n        <!-- <button mat-raised-button type=\"submit\" *ngIf='id!=0' (click)=\"onUpdate()\">Update</button> -->\r\n\r\n      </div>\r\n      </div>\r\n</div>");

/***/ }),

/***/ "Brr5":
/*!************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-cadetdetails/ssbreport/ssbreport.component.ts ***!
  \************************************************************************************************/
/*! exports provided: SsbreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsbreportComponent", function() { return SsbreportComponent; });
/* harmony import */ var _raw_loader_ssbreport_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ssbreport.component.html */ "1pbc");
/* harmony import */ var _ssbreport_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ssbreport.component.scss */ "jFqh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SsbreportComponent = /** @class */ (function () {
    function SsbreportComponent(fb, dialog, spinner, route, router, adminservice, sharedservice, cdref, edossierservice, activeRoute, trg_team_services, el) {
        this.fb = fb;
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.router = router;
        this.adminservice = adminservice;
        this.sharedservice = sharedservice;
        this.cdref = cdref;
        this.edossierservice = edossierservice;
        this.activeRoute = activeRoute;
        this.trg_team_services = trg_team_services;
        this.el = el;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-IN');
        this.ssbreportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.submitted = false;
        this.isError = false;
        var today = new Date();
        var DATE = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var x = this.datePipe.transform(DATE, 'yyyy-MM-dd');
        this.ssbreportForm = this.fb.group({
            id: [''],
            positiveTraits: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            negativeTraits: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            avgResult: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['',],
            result: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            achivements: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            weakness: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [1],
        });
        this.ssbreportForm.get('date').patchValue(x);
        this.serviceId = this.route.snapshot.queryParamMap.get('Id');
        this.termId = this.route.snapshot.queryParamMap.get('termId');
        this.getssbreportbyserviceid();
    }
    SsbreportComponent.prototype.ngOnInit = function () {
        // (<HTMLInputElement>document.getElementById("currentDate")).value = this.date;
        console.log(localStorage.getItem("e"), '1111');
        console.log(localStorage.getItem("i"), '2222');
        document.getElementById("ssbID").value = localStorage.getItem("e");
        document.getElementById("ssbName").value = localStorage.getItem("i");
        document.getElementById("ssbComp").value = localStorage.getItem("companyName");
        document.getElementById("ssbBn").value = localStorage.getItem("battalionName");
        // (<HTMLInputElement>document.getElementById("ssbTermId")).value = localStorage.getItem("termId");
        document.getElementById("ssbTermName").value = localStorage.getItem("termName");
        document.getElementById("ssbRk").value = localStorage.getItem("rank");
    };
    SsbreportComponent.prototype.ngAfterViewInit = function () {
    };
    SsbreportComponent.prototype.onChange = function (e) {
        // alert(e.target.value)
    };
    SsbreportComponent.prototype.getssbreportbyserviceid = function () {
        var _this = this;
        this.edossierservice.getssbreportservicebyid(this.serviceId).subscribe(function (res) {
            _this.spinner.show();
            if (res.message == "Record found successfully") {
                _this.spinner.hide();
                _this.obj = res.object;
                _this.ssbreportForm.patchValue({
                    id: _this.obj.id,
                    positiveTraits: _this.obj.positiveTraits,
                    negativeTraits: _this.obj.negativeTraits,
                    location: _this.obj.location,
                    achivements: _this.obj.achivements,
                    result: _this.obj.result,
                    date: _this.datePipe.transform(_this.obj.date, 'yyyy-MM-dd'),
                    weakness: _this.obj.weakness,
                    avgResult: _this.obj.avgResult,
                });
                _this.trg_team_services.openSnackbar(res.message);
                console.log(_this.ssbreportForm.value);
                _this.id = _this.obj.id;
                (function (err) {
                    _this.spinner.hide();
                    _this.trg_team_services.openSnackbar("Some Error Occured.");
                });
            }
            else {
                _this.spinner.hide();
                _this.trg_team_services.openSnackbar(res.message);
            }
        });
    };
    Object.defineProperty(SsbreportComponent.prototype, "f", {
        get: function () {
            return this.ssbreportForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    SsbreportComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.ssbreportForm.invalid) {
            // this.submitted = true;  
            this.isError = true;
            for (var _i = 0, _a = Object.keys(this.ssbreportForm.controls); _i < _a.length; _i++) {
                var key = _a[_i];
                if (this.ssbreportForm.controls[key].invalid) {
                    var invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
                    invalidControl.focus();
                    break;
                }
            }
        }
        else {
            console.log(this.ssbreportForm.value);
            this.data = this.ssbreportForm.value;
            this.data['termId'] = this.termId;
            this.data['serviceId'] = this.serviceId;
            console.log(this.data);
            if (this.id == undefined || this.id == null || this.id == '') {
                this.edossierservice.addssbreport(this.data).subscribe(function (res) {
                    _this.spinner.show();
                    console.log(res);
                    if (res.status == 'OK') {
                        _this.spinner.hide();
                        _this.trg_team_services.openSnackbar(res.message);
                        window.history.back();
                    }
                    (function (err) {
                        _this.spinner.hide();
                        _this.trg_team_services.openSnackbar("Some Error Occured.");
                    });
                });
            }
            else {
                this.data = this.ssbreportForm.value;
                this.edossierservice.updatessbreport(this.data).subscribe(function (res) {
                    _this.spinner.show();
                    console.log(res);
                    if (res.status == 'OK') {
                        _this.spinner.hide();
                        _this.trg_team_services.openSnackbar(res.message);
                        window.history.back();
                    }
                    (function (err) {
                        _this.spinner.hide();
                        _this.trg_team_services.openSnackbar("Some Error Occured.");
                    });
                });
            }
            window.history.back();
        }
    };
    SsbreportComponent.prototype.goBack = function () {
        window.history.back();
    };
    SsbreportComponent.prototype.onUpdate = function () {
    };
    SsbreportComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] },
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_3__["EDossierService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_11__["TrgTeamService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
    ]; };
    SsbreportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'ms-ssbreport',
            template: _raw_loader_ssbreport_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ssbreport_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_3__["EDossierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_11__["TrgTeamService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]])
    ], SsbreportComponent);
    return SsbreportComponent;
}());



/***/ }),

/***/ "jFqh":
/*!**************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-cadetdetails/ssbreport/ssbreport.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-row {\n  margin: 0px;\n}\n\n.mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.box-shadow {\n  float: left;\n  width: 100%;\n  margin: 10px 0;\n}\n\n.mat-card {\n  transition: all 0.4s ease 0s;\n  color: #37474F;\n  font-family: \"Nunito Sans\", sans-serif;\n  background-color: #ffffff;\n  margin-bottom: 20px !important;\n  width: 100%;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background: #fff;\n  padding: 20px;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  padding: 0.875rem 1.5rem;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n}\n\n.tg td {\n  border-color: #ccc;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 10px 5px;\n  word-break: normal;\n  text-align: center;\n}\n\n.tg th {\n  border-color: #ccc;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 10px 5px;\n  word-break: normal;\n  background: #eee;\n  text-align: center;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: left;\n  vertical-align: top;\n}\n\ntd.tg-0lax.bold {\n  font-weight: bold;\n}\n\n.sports input[type=text] {\n  width: 50px;\n  text-align: center;\n  border: 1px solid #ccc;\n  background: #fafafa;\n  border-radius: 3px;\n  height: 31px;\n}\n\nh4.red-heading {\n  font-size: 15px;\n  color: #721a0c;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\nh4.main-red-heading {\n  font-size: 15px;\n  color: #721a0c;\n  font-weight: bold;\n  margin-bottom: 20px;\n  background: #eee;\n  padding: 10px 15px;\n  width: 100%;\n}\n\np.txt-cc {\n  font-size: 12px;\n  margin-top: 13px;\n  margin-bottom: 0;\n}\n\nh2 button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}");

/***/ }),

/***/ "urxk":
/*!*********************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-cadetdetails/ssbreport/ssbreport.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: SsbReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsbReportModule", function() { return SsbReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ssbreport_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ssbreport.component */ "Brr5");
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
        component: _ssbreport_component__WEBPACK_IMPORTED_MODULE_4__["SsbreportComponent"]
    },
];
var SsbReportModule = /** @class */ (function () {
    function SsbReportModule() {
    }
    SsbReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _ssbreport_component__WEBPACK_IMPORTED_MODULE_4__["SsbreportComponent"],
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
    ], SsbReportModule);
    return SsbReportModule;
}());



/***/ })

}]);