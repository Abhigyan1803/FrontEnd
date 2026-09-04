(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ed-counselling-ed-counselling-module"],{

/***/ "DeRY":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/ed-counselling/ed-counselling.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\" style=\"min-height:45vw;\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"mat-heading\">\r\n            <div id=\"top-bar\" class=\"\">\r\n                <h2 class=\"backbtn\"><button mat-icon-button (click)=\"goBack()\">\r\n                    <mat-icon>chevron_left</mat-icon>\r\n                  </button>E-Dossier <span class=\"sub-menu1\">\r\n                > Counselling > COUNSELLING ALL TERMS</span></h2>\r\n          </div>\r\n          </div>\r\n        <div class=\"councselling\">\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n                <!-- <div class=\"ng-star-inserted\">\r\n                    <div class=\"mat-new\">\r\n                        <h4 class=\"card-heading\">COUNSELLING: ALL TERMS</h4>\r\n                    </div>\r\n                </div> -->\r\n                <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">IMA No.</label>\r\n                                <input placeholder=\"Ima No\" formcontrolname=\"\" disabled id=\"cServiceId\" type=\"text\"\r\n                                    class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"rank\">Term</label>\r\n                              <input placeholder=\"Term\"  type=\"text\" disabled id=\"ctermname\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                          </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Name</label>\r\n                                <input placeholder=\"Name\" formcontrolname=\"\" disabled id=\"cName\" type=\"text\"\r\n                                    class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Rank</label>\r\n                                <input placeholder=\"Rank\" formcontrolname=\"\" disabled id=\"cRank\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Bn</label>\r\n                                <input placeholder=\"Bn\" formcontrolname=\"\" disabled id=\"cbattalionName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Coy</label>\r\n                                <input placeholder=\"Coy\" formcontrolname=\"\" disabled id=\"cCompName\" type=\"text\"\r\n                                    class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Course No</label>\r\n                                <input placeholder=\"Course No\" formcontrolname=\"\" disabled id=\"cCourseName\" type=\"text\"\r\n                                    class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div> -->\r\n                        \r\n                    </div>\r\n                </form>\r\n                <form [formGroup]=\"counsellingForm\">\r\n                    <table class=\"tg\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"tg-t7dr\">S NO</th>\r\n                                <th class=\"tg-t7dr\">Date</th>\r\n                                <th class=\"tg-t7dr\">Term</th>\r\n                                <th class=\"tg-t7dr\">Details</th>\r\n                                <th class=\"tg-t7dr\" colspan=\"2\">OC Initials with date</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody formArrayName=\"counsArrayForm\">\r\n                            <tr *ngFor=\"let item of getForm.controls; let i=index;let l=last\" [formGroupName]=\"i\">\r\n                                <td class=\"tg-0lax\">{{i+1}}</td>\r\n                                <td class=\"tg-0lax\"><input type=\"Date\" class=\"form-control\" formControlName=\"date\"></td>\r\n                                <td class=\"tg-0lax\">\r\n                                    <div class=\"form-group\">\r\n\r\n                                        <select id=\"term\" type=\"text\" class=\"form-control\" formControlName=\"termId\"\r\n                                            (change)=\"termChange($event.target.value)\" placeholder=\"Term\">\r\n                                            <option value=\"\" selected hidden disabled>Select</option>\r\n                                            <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                                        </select>\r\n                                    </div>\r\n                                </td>\r\n                                <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\" formControlName=\"details\">\r\n                                </td>\r\n                                <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"\r\n                                        formControlName=\"gcInitialsWithDate\"></td>\r\n                                <td class=\"tg-0lax\" *ngIf=\"counsellingForm.controls.counsArrayForm.controls.length > 1\"><button\r\n                                     (click)=\"removeAForm(i)\" class=\"btn btn-danger\">Delete</button></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </form>\r\n\r\n                <button type=\"button\" (click)=\"addForm()\" class=\"btn btn-color pull-right mt-2\">\r\n                    <mat-icon>add_circle_outline</mat-icon>\r\n                </button>\r\n                <button class=\"btn btn-color mt-2\" (click)=\"addCounssubmit()\">Submit</button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "Er5m":
/*!******************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-counselling/ed-counselling.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EdCounsellingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdCounsellingComponent", function() { return EdCounsellingComponent; });
/* harmony import */ var _raw_loader_ed_counselling_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ed-counselling.component.html */ "DeRY");
/* harmony import */ var _ed_counselling_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ed-counselling.component.scss */ "YqMf");
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











var EdCounsellingComponent = /** @class */ (function () {
    function EdCounsellingComponent(service, EDossierService, adminservice, fb, router, spinner, cdref, dialog, sharedService, route) {
        this.service = service;
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
        // minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.counsellingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.UPDATETERM = [];
        this.Id = this.route.snapshot.queryParamMap.get('Id');
        this.termId = this.route.snapshot.queryParamMap.get('termId');
        this.counsellingForm = this.fb.group({
            counsArrayForm: this.fb.array([]),
        });
    }
    EdCounsellingComponent.prototype.getCouns = function () {
        console.log('add');
        return this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gcInitialsWithDate: [''],
            serviceId: this.Id,
            status: ['1']
        });
    };
    Object.defineProperty(EdCounsellingComponent.prototype, "getForm", {
        get: function () {
            return this.counsellingForm.get('counsArrayForm');
        },
        enumerable: false,
        configurable: true
    });
    EdCounsellingComponent.prototype.addForm = function () {
        this.getForm.push(this.getCouns());
    };
    EdCounsellingComponent.prototype.removeAForm = function (i) {
        this.getForm.removeAt(i);
    };
    EdCounsellingComponent.prototype.goBack = function () {
        window.history.back();
    };
    EdCounsellingComponent.prototype.ngOnInit = function () {
        console.log("CserviceId--->>", localStorage.getItem("e"));
        console.log("CName--->>", localStorage.getItem("i"));
        console.log("cCourseName--->>", localStorage.getItem("courseNo"));
        document.getElementById("cCompName").value = localStorage.getItem("companyName");
        document.getElementById("cServiceId").value = localStorage.getItem("e");
        document.getElementById("cName").value = localStorage.getItem("i");
        // (<HTMLInputElement>document.getElementById("cCourseName")).value = localStorage.getItem("courseNo");
        document.getElementById("ctermname").value = localStorage.getItem("termName");
        document.getElementById("cRank").value = localStorage.getItem("rank");
        document.getElementById("cbattalionName").value = localStorage.getItem("battalionName");
    };
    EdCounsellingComponent.prototype.ngAfterViewInit = function () {
        this.getEdossiercouns();
        this.getTerms();
    };
    EdCounsellingComponent.prototype.getTerms = function () {
        var _this = this;
        this.service.getAllTerms().subscribe(function (res) {
            if (res.status == '1') {
                _this.terms = res.List;
                console.log(_this.terms);
                if (_this.termId === "1") {
                    var includesArr_1 = [1];
                    _this.terms = _this.terms.filter(function (e) {
                        if (includesArr_1.includes(e.id)) {
                            return true;
                        }
                    });
                    console.log(_this.terms);
                }
                else if (_this.termId === "2") {
                    var includesArr_2 = [2];
                    _this.terms = _this.terms.filter(function (e) {
                        if (includesArr_2.includes(e.id)) {
                            return true;
                        }
                    });
                }
                else if (_this.termId === "3") {
                    var includesArr_3 = [3];
                    _this.terms = _this.terms.filter(function (e) {
                        if (includesArr_3.includes(e.id)) {
                            return true;
                        }
                    });
                }
                else if (_this.termId === "7") {
                    var includesArr_4 = [7];
                    _this.terms = _this.terms.filter(function (e) {
                        if (includesArr_4.includes(e.id)) {
                            return true;
                        }
                    });
                }
                else if (_this.termId === "8") {
                    var includesArr_5 = [8];
                    _this.terms = _this.terms.filter(function (e) {
                        if (includesArr_5.includes(e.id)) {
                            return true;
                        }
                    });
                }
                _this.cdref.detectChanges();
            }
        });
    };
    EdCounsellingComponent.prototype.getEdossiercouns = function () {
        var _this = this;
        this.EDossierService.getCounsDetails(this.Id).subscribe(function (res) {
            var values = res.object;
            console.log("RESPONSE OF OBSN", res);
            if (res.status == 'OK') {
                if (res.object.length != 0) {
                    for (var i = 0; i < res.object.length; i++) {
                        var formVal = _this.addResponseinForm(res.object[i]);
                        _this.getForm.push(formVal);
                    }
                }
                else {
                    console.log('addnew--');
                    _this.addForm();
                }
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        });
    };
    EdCounsellingComponent.prototype.addResponseinForm = function (res) {
        return this.fb.group({
            date: this.datePipe.transform(res.date, 'yyyy-MM-dd'),
            termId: res.termId,
            details: res.details,
            gcInitialsWithDate: res.gcInitialsWithDate,
            id: res.id,
            serviceId: res.serviceId,
            status: 1
        });
    };
    /* ==============Button===========*/
    // addCounssubmit() {
    //   this.addCounsellingsubmit(this.counsellingForm.value);
    // }
    EdCounsellingComponent.prototype.addCounssubmit = function () {
        var counsellingFormvalid = this.counsellingForm.value;
        var id = counsellingFormvalid.id;
        var validateFormstatus = this.validateForm(counsellingFormvalid);
        if (validateFormstatus) {
            if (id == undefined || id == '') {
                for (var i = 0; i < counsellingFormvalid.counsArrayForm.length; i++) {
                    counsellingFormvalid.counsArrayForm[i].details = counsellingFormvalid.counsArrayForm[i].details.trim();
                    counsellingFormvalid.counsArrayForm[i].gcInitialsWithDate = counsellingFormvalid.counsArrayForm[i].gcInitialsWithDate.trim();
                }
                this.addCounsellingsubmit(counsellingFormvalid);
            }
        }
    };
    EdCounsellingComponent.prototype.validateForm = function (counsellingFormvalid) {
        var flag = true;
        for (var i = 0; i < counsellingFormvalid.counsArrayForm.length; i++) {
            var counsellingData = counsellingFormvalid.counsArrayForm[i];
            if (!counsellingData.date || counsellingData.date.trim() == '' || !counsellingData.details || counsellingData.details.trim() == '' || !counsellingData.gcInitialsWithDate || counsellingData.gcInitialsWithDate.trim() == '') {
                this.adminservice.openSnackbar('Please fill all fields');
                flag = false;
            }
        }
        return flag;
    };
    EdCounsellingComponent.prototype.addCounsellingsubmit = function (formVal) {
        var _this = this;
        if (this.counsellingForm.invalid) {
            this.isError = true;
            this.adminservice.openSnackbar("Please Fill All Required Fields");
        }
        else {
            // formVal.counsArrayForm.details = formVal.counsArrayForm.details.trim();
            // formVal.counsArrayForm.gcInitialsWithDate = formVal.counsArrayForm.gcInitialsWithDate.trim();
            this.EDossierService.addCounsDetails(formVal.counsArrayForm).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    window.location.reload();
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
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
        }
    };
    EdCounsellingComponent.ctorParameters = function () { return [
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
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
    EdCounsellingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-ed-counselling',
            template: _raw_loader_ed_counselling_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ed_counselling_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_8__["EDossierService"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EdCounsellingComponent);
    return EdCounsellingComponent;
}());



/***/ }),

/***/ "YqMf":
/*!********************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-counselling/ed-counselling.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 0 !important;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.backbtn button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  font-weight: bold;\n  text-align: center;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: top;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: top;\n}\n\nbutton.btn-color {\n  background: #742923;\n  color: #fff;\n}\n\nbutton.btn-color:hover, button.btn-color:focus {\n  color: #fff;\n}");

/***/ }),

/***/ "kxmE":
/*!***************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-counselling/ed-counselling.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EdCounsellingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdCounsellingModule", function() { return EdCounsellingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var _ed_counselling_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ed-counselling.component */ "Er5m");
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
        component: _ed_counselling_component__WEBPACK_IMPORTED_MODULE_7__["EdCounsellingComponent"]
    },
];
var EdCounsellingModule = /** @class */ (function () {
    function EdCounsellingModule() {
    }
    EdCounsellingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _ed_counselling_component__WEBPACK_IMPORTED_MODULE_7__["EdCounsellingComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"]
            ]
        })
    ], EdCounsellingModule);
    return EdCounsellingModule;
}());



/***/ })

}]);