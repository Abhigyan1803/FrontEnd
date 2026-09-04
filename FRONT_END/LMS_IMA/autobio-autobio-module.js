(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["autobio-autobio-module"],{

/***/ "+7AE":
/*!**********************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-cadetdetails/autobio/autobio.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 0;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\nh2 button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}");

/***/ }),

/***/ "WbBb":
/*!*****************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-cadetdetails/autobio/autobio.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AutobioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutobioModule", function() { return AutobioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _autobio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autobio.component */ "cSoM");
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
        component: _autobio_component__WEBPACK_IMPORTED_MODULE_4__["AutobioComponent"]
    },
];
var AutobioModule = /** @class */ (function () {
    function AutobioModule() {
    }
    AutobioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _autobio_component__WEBPACK_IMPORTED_MODULE_4__["AutobioComponent"],
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
    ], AutobioModule);
    return AutobioModule;
}());



/***/ }),

/***/ "cSoM":
/*!********************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-cadetdetails/autobio/autobio.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AutobioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutobioComponent", function() { return AutobioComponent; });
/* harmony import */ var _raw_loader_autobio_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./autobio.component.html */ "vC11");
/* harmony import */ var _autobio_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autobio.component.scss */ "+7AE");
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












var AutobioComponent = /** @class */ (function () {
    function AutobioComponent(fb, dialog, spinner, route, router, adminservice, sharedservice, cdref, edossierservice, activeRoute, EDossierService, el, trg_team_services) {
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
        this.EDossierService = EDossierService;
        this.el = el;
        this.trg_team_services = trg_team_services;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-IN');
        this.autobioForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.isError = false;
        var today = new Date();
        var d = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var x = this.datePipe.transform(d, 'yyyy-MM-dd');
        this.autobioForm = this.fb.group({
            id: [''],
            general: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['',],
            specialAchivement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            strength: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            weakness: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isDeclared: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue],
            status: [1],
        });
        this.autobioForm.get('date').patchValue(x);
        this.serviceId = this.route.snapshot.queryParamMap.get('Id');
        this.termId = this.route.snapshot.queryParamMap.get('termId');
        this.getautobiobyserviceid();
    }
    AutobioComponent.prototype.onChange = function (e) {
        this.checkBoxValue = e;
        if (e.target.checked) {
            this.isDeclared = true;
        }
        else {
            this.isDeclared = false;
        }
    };
    AutobioComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem("e"), '1111');
        console.log(localStorage.getItem("i"), '2222');
        document.getElementById("autobiographyID").value = localStorage.getItem("e");
        document.getElementById("autobiographyName").value = localStorage.getItem("i");
        document.getElementById("autobiographyComp").value = localStorage.getItem("companyName");
        document.getElementById("autobiographyBn").value = localStorage.getItem("battalionName");
        // (<HTMLInputElement>document.getElementById("autobiographyTermId")).value = localStorage.getItem("termId");
        document.getElementById("autobiographyTermName").value = localStorage.getItem("termName");
        document.getElementById("autobiographyRk").value = localStorage.getItem("rank");
    };
    AutobioComponent.prototype.ngAfterViewInit = function () {
        // this.getautobio(),
        // this.getautobiobyserviceid(),
        // this.updateautobiography(),
        // this.addAutobio()
    };
    Object.defineProperty(AutobioComponent.prototype, "f", {
        get: function () {
            return this.autobioForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AutobioComponent.prototype.getautobiobyserviceid = function () {
        var _this = this;
        this.edossierservice.getautobiographybyserviceid(this.serviceId).subscribe(function (res) {
            _this.spinner.show();
            if (res.status == "OK") {
                _this.spinner.hide();
                _this.obj = res.object;
                _this.autobioForm.patchValue({
                    id: _this.obj.id,
                    general: _this.obj.general,
                    date: _this.datePipe.transform(_this.obj.date, 'yyyy-MM-dd'),
                    specialAchivement: _this.obj.specialAchivement,
                    strength: _this.obj.strength,
                    weakness: _this.obj.weakness,
                    isDeclared: _this.obj.isDeclared
                });
                _this.trg_team_services.openSnackbar(res.message);
                console.log(_this.autobioForm.value);
                _this.id = _this.obj.id;
                (function (err) {
                    _this.spinner.hide();
                    _this.trg_team_services.openSnackbar("Some Error Occured.");
                });
            }
        });
    };
    AutobioComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.autobioForm.invalid) {
            // this.submitted = true;  
            this.isError = true;
            for (var _i = 0, _a = Object.keys(this.autobioForm.controls); _i < _a.length; _i++) {
                var key = _a[_i];
                if (this.autobioForm.controls[key].invalid) {
                    var invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
                    invalidControl.focus();
                    break;
                }
            }
        }
        else {
            console.log(this.autobioForm.value);
            this.data = this.autobioForm.value;
            this.data['termId'] = this.termId;
            this.data['serviceId'] = this.serviceId;
            console.log(this.data);
            if (this.id == undefined || this.id == null || this.id == '') {
                this.edossierservice.addAutography(this.data).subscribe(function (res) {
                    console.log(res);
                    if (res.status == 'OK') {
                        _this.spinner.hide();
                        _this.adminservice.openSnackbar(res.message);
                        window.history.back();
                    }
                    (function (err) {
                        _this.spinner.hide();
                        _this.adminservice.openSnackbar("Some Error Occured.");
                    });
                });
            }
            else {
                this.data = this.autobioForm.value;
                this.edossierservice.updateautobiography(this.data).subscribe(function (res) {
                    console.log(res);
                    if (res.status == 'OK') {
                        _this.spinner.hide();
                        _this.adminservice.openSnackbar(res.message);
                        window.history.back();
                    }
                    (function (err) {
                        _this.spinner.hide();
                        _this.adminservice.openSnackbar("Some Error Occured.");
                    });
                });
            }
            window.history.back();
        }
    };
    AutobioComponent.prototype.goBack = function () {
        window.history.back();
    };
    AutobioComponent.ctorParameters = function () { return [
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
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_3__["EDossierService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_11__["TrgTeamService"] }
    ]; };
    AutobioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'ms-autobio',
            template: _raw_loader_autobio_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_autobio_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_3__["EDossierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_3__["EDossierService"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"],
            app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_11__["TrgTeamService"]])
    ], AutobioComponent);
    return AutobioComponent;
}());



/***/ }),

/***/ "vC11":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/ed-cadetdetails/autobio/autobio.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n\r\n\r\n        <div class=\"mat-heading\">\r\n            <div id=\"top-bar\" class=\"\">\r\n              <h2>\r\n                <button mat-icon-button (click)=\"goBack()\">\r\n                  <mat-icon>chevron_left</mat-icon>\r\n                </button>\r\n                 <span class=\"sub-menu1\">\r\n                  E-Dossier > Assessment > AUTOBIOGRAPHY</span></h2>\r\n          </div>\r\n          </div>\r\n\r\n          <div class=\"mat-card mat-focus-indicator\">\r\n            <div class=\"service-id mb-2 mx-0\">\r\n                <!-- <div class=\"input_id col-md-6\">\r\n                    <b> Service Id :</b> <input type=\"text\" disabled id=\"clubServiceID\" class=\"form-control mt-2\">\r\n                </div>\r\n                <div class=\"input_id col-md-6\">\r\n                    <b> Name :</b> <input type=\"text\" disabled id=\"clubName\" class=\"form-control mt-2\">\r\n                </div> -->\r\n                <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Ima No.</label>\r\n                        <input placeholder=\"No\"  type=\"text\" disabled id=\"autobiographyID\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>  \r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Rank</label>\r\n                        <input placeholder=\"Rank\"  type=\"text\" disabled id=\"autobiographyRk\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Name</label>\r\n                        <input placeholder=\"Name\"  type=\"text\" disabled id=\"autobiographyName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Term</label>\r\n                        <input placeholder=\"Term\"  type=\"text\" disabled id=\"autobiographyTermName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Bn</label>\r\n                        <input placeholder=\"Bn\"  type=\"text\" disabled id=\"autobiographyBn\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Coy</label>\r\n                        <input placeholder=\"Coy\"  type=\"text\" disabled id=\"autobiographyComp\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    \r\n                  </div>\r\n                </form>\r\n            </div>\r\n          </div>\r\n        <div class=\"autobiography\">\r\n\r\n\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n\r\n                <!-- <div class=\"ng-star-inserted\">\r\n                    <div class=\"mat-new mb-4\">\r\n                        <h4 class=\"card-heading\">AUTOBIOGRAPHY</h4>\r\n                    </div>\r\n                </div> -->\r\n\r\n\r\n\r\n\r\n                <form [formGroup]=\"autobioForm\">\r\n                    <div class=\"biography-data\">\r\n                        <ol>\r\n                            <li class=\"mb-3\"><b>General/Self</b>\r\n                                <textarea placeholder=\"\" formControlName=\"general\" class=\"form-control ng-untouched ng-pristine\r\n                                    ng-invalid\"></textarea>\r\n                                    <span class=\"val_msg\" *ngIf=\"f.general.errors && f.general.errors.required && isError\" >Please Enter General</span>\r\n                                  </li>\r\n                            <li class=\"mb-3\"><b>Special Achievements (Games,\r\n                                    adventure activities, extra co- curricular\r\n                                    activities and participation in NCC)</b>\r\n                                <textarea placeholder=\"\" formControlName=\"specialAchivement\" class=\"form-control ng-untouched ng-pristine\r\n                                    ng-invalid\">\r\n                                  </textarea>\r\n                                  <span class=\"val_msg\" *ngIf=\"f.specialAchivement.errors && f.specialAchivement.errors.required && isError\" >Please Enter Achievements</span>\r\n                                </li>\r\n\r\n                            <li class=\"mb-3\"><b>Strength</b><textarea placeholder=\"\" formControlName=\"strength\" class=\"form-control ng-untouched ng-pristine\r\n                                    ng-invalid\"></textarea>\r\n                                    <span class=\"val_msg\" *ngIf=\"f.strength.errors && f.strength.errors.required && isError\" >Please Enter Strength</span>\r\n                                  </li>\r\n                            <li class=\"mb-3\"><b>Weaknesses</b><textarea placeholder=\"\" formControlName=\"weakness\" class=\"form-control ng-untouched ng-pristine\r\n                                    ng-invalid\"></textarea>\r\n                                    <span class=\"val_msg\" *ngIf=\"f.weakness.errors && f.weakness.errors.required && isError\" >Please Enter Weakness</span>\r\n                                  </li>\r\n\r\n                            <li class=\"mb-3\">\r\n\r\n                                <label for=\"declartion\">\r\n                                <input type=\"checkbox\" id=\"declartion\" name=\"\"  (change)=\"onChange($event)\" formControlName=\"isDeclared\" checked>\r\n                                    \r\n                                    I hereby\r\n                                    certify that to the best of my knowledge and\r\n                                    belief the above particulars are, in all\r\n                                    respect, correct and true</label>\r\n                                    <span class=\"val_msg\" *ngIf=\"f.isDeclared.errors && f.isDeclared.errors.required && isError\" >Please Accept the Terms & Conditions</span>\r\n\r\n                            </li>\r\n                        </ol>\r\n                        <div class=\"date mr-4 ml-4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"rank\">Date<span class=\"required\">*</span></label>\r\n                                    <input type=\"date\" id=\"date\" formControlName=\"date\"  class=\"form-control\">\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </form>\r\n                <!-- <button mat-raised-button (click)=\"addAutobio()\">Submit</button> -->\r\n\r\n                <button mat-raised-button class=\"pull-right\" type=\"submit\"  (click)=\"onSubmit()\">Submit</button>\r\n             \r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>");

/***/ })

}]);