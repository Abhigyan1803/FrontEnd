(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wt-wt-module"],{

/***/ "4+52":
/*!*************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/wt/wt.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WtComponent", function() { return WtComponent; });
/* harmony import */ var _raw_loader_wt_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./wt.component.html */ "zFNY");
/* harmony import */ var _wt_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wt.component.scss */ "GtLd");
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










var WtComponent = /** @class */ (function () {
    function WtComponent(dialog, spinner, route, fb, router, adminservice, sharedservice, cdref, edossierservice, activeRoute, EDossierService) {
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
        this.motivationFormI = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.motivationFormII = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.motivationFormIII = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.pageSize = 30;
        this.currentPage = 0;
        this.terid = '';
        this.totalSubjectmarks = 0;
        this.obtainedSubjectmarks = 0;
        this.serid = document.getElementById("result").value = localStorage.getItem("e");
        this.terid = document.getElementById("result").value = localStorage.getItem("j");
        this.Id = this.route.snapshot.queryParamMap.get('Id');
        console.log(this.terid, "juned id");
        this.intTermId = parseInt(this.terid);
        this.motivationFormI = this.fb.group({
            badge1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            badge2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            badge3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            badge4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [1],
            serviceId: this.serid
        });
        this.motivationFormII = this.fb.group({
            badge1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            badge2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            badge3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            badge4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [2],
            serviceId: this.serid
        });
        this.motivationFormIII = this.fb.group({
            badge1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            badge2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            badge3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            badge4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [3],
            serviceId: this.serid
        });
    }
    WtComponent.prototype.ngOnInit = function () {
        document.getElementById("WTcompanyName").value = localStorage.getItem("companyName");
        document.getElementById("WTbattalionName").value = localStorage.getItem("battalionName");
        document.getElementById("WTcadetServiceId").value = localStorage.getItem("e");
        document.getElementById("WTcadetName").value = localStorage.getItem("i");
        document.getElementById("WTcadetRank").value = localStorage.getItem("rank");
        document.getElementById("WTcadettermname").value = localStorage.getItem("termName");
        this.getWTAllCadetlist();
    };
    WtComponent.prototype.ngAfterViewInit = function () {
        this.getmotivationClub();
    };
    WtComponent.prototype.getmotivationClub = function () {
        var _this = this;
        this.EDossierService.getMotivationBadgeDetails(this.serid).subscribe(function (res) {
            var values = res.object;
            if (res.status == 'OK') {
                if (res.object && res.object.termId === 1) {
                    _this.motivationFormI.patchValue({
                        badge1: res.object.badge1,
                        badge2: res.object.badge2,
                        badge3: res.object.badge3,
                        badge4: res.object.badge4,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 2) {
                    _this.motivationFormII.patchValue({
                        badge1: res.object.badge1,
                        badge2: res.object.badge2,
                        badge3: res.object.badge3,
                        badge4: res.object.badge4,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 3) {
                    _this.motivationFormIII.patchValue({
                        badge1: res.object.badge1,
                        badge2: res.object.badge2,
                        badge3: res.object.badge3,
                        badge4: res.object.badge4,
                        id: res.object.id
                    });
                }
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        });
    };
    WtComponent.prototype.getWTAllCadetlist = function () {
        var _this = this;
        this.spinner.show();
        this.edossierservice.getWTAllCadetlist(this.serid).subscribe(function (res) {
            console.log(res);
            _this.resultsLength = res.object.totalRecords;
            if (res.message == "Record found successfully") {
                _this.WTCadetList = res.object;
                _this.subjectSize = res.object.length;
                for (var i = 0; i < _this.subjectSize; i += 1) {
                    for (var j = 0; j < res.object[i].cadetWTMainResultlist.length; j += 1) {
                        _this.totalSubjectmarks += res.object[i].cadetWTMainResultlist[j].maxMarks;
                        _this.obtainedSubjectmarks += res.object[i].cadetWTMainResultlist[j].marks;
                    }
                    console.log('this.totalSubjectmarks==>>', _this.totalSubjectmarks);
                    console.log('this.obtainedSubjectmarks==>>', _this.obtainedSubjectmarks);
                    _this.a = _this.totalSubjectmarks;
                }
                console.log("totalSubjectmarks==>a", _this.a);
            }
            else {
                _this.WTCadetList = [];
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            // this.service.openSnackbar("Some Error Occured.");
        });
    };
    WtComponent.prototype.romanize = function (num) {
        if (isNaN(num))
            return NaN;
        var digits = String(+num).split(""), key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], roman = "", i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
    };
    WtComponent.prototype.addMotivationsubmit1 = function () {
        var _this = this;
        this.EDossierService.addMotivationBadgeDetails(this.motivationFormI.value).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.adminservice.openSnackbar(res.message);
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
    };
    WtComponent.prototype.updateClub = function () {
        var _this = this;
        this.EDossierService.updateMotivationBadgeDetails(this.Id, this.motivationFormI.value).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.spinner.hide();
                _this.router.navigate(['e-dossior/ed-content/Ed-index/Otherdetails/club']);
                _this.adminservice.openSnackbar(res.message);
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
    WtComponent.ctorParameters = function () { return [
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
    WtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-wt',
            template: _raw_loader_wt_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_wt_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_7__["EDossierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_7__["EDossierService"]])
    ], WtComponent);
    return WtComponent;
}());



/***/ }),

/***/ "GtLd":
/*!***************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/wt/wt.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 0;\n}\n\n.inner-mat-new {\n  padding: 0 0 0;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.border.acc_doc {\n  margin: 15px 0px;\n  padding-bottom: 15px;\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  font-weight: bold;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: top;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: top;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-kln5 {\n  background-color: #c6c4c4;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: left;\n  vertical-align: middle;\n}");

/***/ }),

/***/ "MgVY":
/*!**********************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/wt/wt.module.ts ***!
  \**********************************************************************************/
/*! exports provided: WtModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WtModule", function() { return WtModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _wt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wt.component */ "4+52");
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
        component: _wt_component__WEBPACK_IMPORTED_MODULE_4__["WtComponent"]
    },
];
var WtModule = /** @class */ (function () {
    function WtModule() {
    }
    WtModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _wt_component__WEBPACK_IMPORTED_MODULE_4__["WtComponent"],
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
    ], WtModule);
    return WtModule;
}());



/***/ }),

/***/ "zFNY":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/wt/wt.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"mat-heading\">\r\n            <div id=\"top-bar\" class=\"\">\r\n              <h2>E-Dossier<span class=\"sub-menu1\">\r\n                > WEAPON TRAINING</span></h2>\r\n          </div>\r\n          </div>\r\n        <div class=\"weapon-training\">\r\n\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n\r\n                <!-- <div class=\"ng-star-inserted\">\r\n                    <div class=\"mat-new mb-4\">\r\n                        <h4 class=\"card-heading\">WEAPON TRAINING</h4>\r\n                    </div>\r\n                </div> -->\r\n                <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Ima No.</label>\r\n                                <input placeholder=\"No\" formcontrolname=\"\" disabled id=\"WTcadetServiceId\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\t\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"rank\">Term</label>\r\n                              <input placeholder=\"Term\"  type=\"text\" disabled id=\"WTcadettermname\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                          </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Rank</label>\r\n                                <input placeholder=\"Rank\" formcontrolname=\"\" disabled id=\"WTcadetRank\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Name</label>\r\n                                <input placeholder=\"Name\" formcontrolname=\"\" disabled id=\"WTcadetName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Bn</label>\r\n                                <input placeholder=\"Bn\" formcontrolname=\"\" disabled id=\"WTbattalionName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Coy</label>\r\n                                <input placeholder=\"Coy\" formcontrolname=\"\" disabled id=\"WTcompanyName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                </form>\r\n                \r\n                <form >\r\n                    <div class=\"col-md-12\">\r\n                        <div>\r\n\r\n                            <ng-container *ngFor=\"let weapon of WTCadetList; let mainIndex = index\">\r\n                                <table class=\"tg\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th class=\"tg-1pqm\" rowspan=\"2\"><span\r\n                                                    style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">S\r\n                                                    No </span></th>\r\n                                            <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                                    style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Subject</span>\r\n                                            </th>\r\n                                            <th class=\"tg-xakg\" rowspan=\"2\"><span\r\n                                                    style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">Marks</span>\r\n                                            </th>\r\n                                            <th class=\"tg-xakg\" colspan=\"3\"><span\r\n                                                    style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">MARKS\r\n                                                    OBTAINED</span></th>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <th class=\"tg-xakg\" colspan=\"4\"><span\r\n                                                    style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000\">{{romanize(mainIndex + 1)}}\r\n                                                    TERM</span></th>\r\n\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr\r\n                                            *ngFor=\"let wtSubject of weapon.cadetWTMainResultlist; let wtSubjectIndex = index\">\r\n\r\n                                            <td> {{wtSubjectIndex +1}} </td>\r\n                                            <td>{{wtSubject.weaponName}} </td>\r\n                                            <td> {{wtSubject.maxMarks}} </td>\r\n                                            <td colspan=\"4\">\r\n                                                <input min=\"0\" disabled class=\"form-control d-inline\"\r\n                                                    value=\"{{wtSubject.marks}}\">\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                        <td class=\"tg-amwm\" colspan=\"2\"><span\r\n                                                style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Total</span>\r\n                                        </td>\r\n                                        <td class=\"tg-amwm\"><span\r\n                                                style=\"font-weight:700;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">{{obtainedSubjectmarks}}</span>\r\n                                        </td>\r\n                                        <td class=\"tg-0lax\"><input min=\"0\" disabled class=\"form-control d-inline\"\r\n                                            value=\"{{obtainedSubjectmarks}}\"></td>\r\n                                    </tr>\r\n\r\n\r\n\r\n                                    </tbody>\r\n                                </table>\r\n                                <br>\r\n                            </ng-container>\r\n                            <!-- <button *ngIf=\"terid=='1'\" mat-raised-button (click)=\"confirm(1)\">CONFIRM</button> -->\r\n\r\n                        </div>\r\n\r\n                        <div class=\"border acc_doc\">\r\n                            <div class=\"ng-star-inserted\">\r\n                                <div class=\"mat-new inner-mat-new mb-4\">\r\n                                    <h4 class=\"card-heading\">FIRING STD</h4>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"firing-study p-3\">\r\n                                <p><b>MM</b> - 70% and above, <b>1st</b> - 60% to 69%, <b>SS</b> - 40% to 59%,\r\n                                    <b>FAIL</b> - Below 40%\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ng-star-inserted\">\r\n                            <div class=\"mat-new mb-4\">\r\n                                <h4 class=\"card-heading\">WT MOTIVATION BADGE</h4>\r\n                            </div>\r\n                        </div>\r\n                        <table class=\"tg\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"tg-kln5\" colspan=\"5\">I Term</th>\r\n                                   \r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr [formGroup]=\"motivationFormI\">\r\n                                    <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"  class=\"form-control\" formControlName=\"badge1\" ></td>\r\n                                    <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"  class=\"form-control\" formControlName=\"badge2\"></td>\r\n                                    <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"  class=\"form-control\" formControlName=\"badge3\"></td>\r\n                                    <td class=\"tg-0lax\"><input type=\"text\" class=\"form-control\"  class=\"form-control\" formControlName=\"badge4\"></td>\r\n                                    <td> <button mat-raised-button (click)=\"addMotivationsubmit1()\">Submit</button></td>\r\n                                </tr>\r\n                               \r\n                            </tbody>\r\n                        </table>\r\n                       \r\n\r\n                    </div>\r\n\r\n\r\n                </form>\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n</div>");

/***/ })

}]);