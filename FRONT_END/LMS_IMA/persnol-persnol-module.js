(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["persnol-persnol-module"],{

/***/ "WfRt":
/*!*****************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-cadetdetails/persnol/persnol.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PersnolModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersnolModule", function() { return PersnolModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _persnol_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persnol.component */ "XaXM");
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
        component: _persnol_component__WEBPACK_IMPORTED_MODULE_4__["PersnolComponent"]
    },
];
var PersnolModule = /** @class */ (function () {
    function PersnolModule() {
    }
    PersnolModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _persnol_component__WEBPACK_IMPORTED_MODULE_4__["PersnolComponent"],
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
    ], PersnolModule);
    return PersnolModule;
}());



/***/ }),

/***/ "XaXM":
/*!********************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-cadetdetails/persnol/persnol.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PersnolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersnolComponent", function() { return PersnolComponent; });
/* harmony import */ var _raw_loader_persnol_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./persnol.component.html */ "pKc/");
/* harmony import */ var _persnol_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persnol.component.scss */ "uvyx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PersnolComponent = /** @class */ (function () {
    function PersnolComponent(route, dialog, fb, trg_team_services, spinner, edossierservice, adminservice) {
        // this.serid = (<HTMLInputElement>document.getElementById("result")).value = localStorage.getItem("e");
        this.route = route;
        this.dialog = dialog;
        this.fb = fb;
        this.trg_team_services = trg_team_services;
        this.spinner = spinner;
        this.edossierservice = edossierservice;
        this.adminservice = adminservice;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-IN');
        this.persnolForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.Date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.serialNo = 1;
        this.sendData = {};
        // openImg(img) {
        //   console.log(img);
        //   this.dialog.open(DialogComponent, {
        //     width: '1300px', height: '650px',
        //     data: {
        //       type: 'img', title: '', url: img
        //     }
        //   })
        // }
        this.docArray = ['', '', '', '', '', '', ''];
        this.serviceId = this.route.snapshot.queryParamMap.get('Id');
        // this.termId = this.route.snapshot.queryParamMap.get('termId');
        this.persnolForm = this.fb.group({
            id: [''],
            serviceId: [this.serviceId],
            academyNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            entry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            previewImg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            birthPlace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            religion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nationality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            upscRollNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ssbSerNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            identificationMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bloodGroup: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fatherName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address_of_next_of_kin_showing_rel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            father_profession: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            monthlyIncome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            maritalStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            detailsOfNOk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rankType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            relation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            currentStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            serialNo: [this.serialNo],
            contactNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cadetEducation: this.fb.array([]),
            achievements: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            appt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            armAndService: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bankAccountNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fGPA: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            marriageDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            medalAward: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            merit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            noOfChild: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            orderNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pay: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            postAndOrg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            spouseDetails: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            spouseName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ssbPlan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            visaExpiredDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    PersnolComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode == 32) {
            event.preventDefault();
        }
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    PersnolComponent.prototype.newSkill = function () {
        return this.fb.group({
            id: [''],
            examination: [''],
            schoolCollege: [''],
            university: [''],
            subjectTaken: [''],
            percentage: [''],
            divisionClass: [''],
        });
    };
    PersnolComponent.prototype.getControls = function () {
        return this.persnolForm.get('cadetEducation').controls;
    };
    Object.defineProperty(PersnolComponent.prototype, "cadetEducation", {
        get: function () {
            return this.persnolForm.get('cadetEducation');
        },
        enumerable: false,
        configurable: true
    });
    PersnolComponent.prototype.addCadetEducation = function () {
        this.cadetEducation.push(this.newSkill());
    };
    // cadetEducation:any=[];
    PersnolComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(localStorage.getItem("e"), '1111');
        console.log(localStorage.getItem("i"), '2222');
        document.getElementById("autobiographyID").value = localStorage.getItem("e");
        document.getElementById("autobiographyName").value = localStorage.getItem("i");
        document.getElementById("autobiographyComp").value = localStorage.getItem("companyName");
        document.getElementById("autobiographyBn").value = localStorage.getItem("battalionName");
        // (<HTMLInputElement>document.getElementById("autobiographyTermId")).value = localStorage.getItem("termId");
        document.getElementById("autobiographyTermName").value = localStorage.getItem("termName");
        document.getElementById("autobiographyRk").value = localStorage.getItem("rank");
        // this.spinner.show();
        // if (this.router.url.includes('id'), ('termid')) {
        //   this.id = this.route.snapshot.queryParamMap.get('id');
        //   this.termid = this.route.snapshot.queryParamMap.get('termid');
        // }
        // if (this.router.url.includes('add-eqtn'))
        // this.spinner.show();
        // this.id = this.serid;
        // console.log(this.id, "---------");
        this.adminservice.getDrillMarks(this.serviceId).subscribe(function (res) {
            _this.spinner.show();
            if (res.status == 'OK') {
                _this.spinner.hide();
                // this.trg_team_services.openSnackbar(res.message);
                // this.serId=res.object.serviceId
                console.log(res, "id");
                // this.spinner.hide();
                var obj = res.object;
                /**=======CADET EDUCATION========== */
                if (obj.cadetEducation.length >= 1) {
                    for (var i = 0; i <= obj.cadetEducation.length - 1; i++) {
                        _this.addCadetEducation();
                    }
                }
                _this.persnolForm.patchValue({
                    cadetEducation: obj.cadetEducation
                });
                console.log(_this.cadetEducation, '------------------');
                /**==================================== */
                // this.cadetEducation=res.object.cadetEducation;
                _this.persnolForm.patchValue({
                    academyNo: obj.academyNo,
                    name: obj.name,
                    course: obj.course,
                    entry: obj.entry,
                    previewImg: obj.profileImg,
                    company: obj.company,
                    // dob:obj.dob,
                    dob: _this.datePipe.transform(obj.dob, 'yyyy-MM-dd'),
                    birthPlace: obj.birthPlace,
                    religion: obj.religion,
                    nationality: obj.nationality,
                    upscRollNo: obj.upscRollNo,
                    identificationMarks: obj.identificationMarks,
                    bloodGroup: obj.bloodGroup,
                    fatherName: obj.familyDetails.fatherName,
                    relation: obj.familyDetails.relation,
                    father_profession: obj.familyDetails.father_profession,
                    currentStatus: obj.familyDetails.currentStatus,
                    address_of_next_of_kin_showing_rel: obj.address_of_next_of_kin_showing_rel,
                    monthlyIncome: obj.familyDetails.monthlyIncome,
                    maritalStatus: obj.maritalStatus,
                    ssbSerNo: obj.ssbSerNo,
                    rankType: obj.rankType,
                    rankName: obj.rankName,
                    contactNo: obj.contactNo,
                    cadetEducation: obj.cadetEducation,
                    achievements: obj.achievements,
                    appt: obj.appt,
                    armAndService: obj.armAndService,
                    bankAccountNo: obj.bankAccountNo,
                    detailsOfNOk: obj.detailsOfNOk,
                    fGPA: obj.fGPA,
                    marriageDate: _this.datePipe.transform(obj.marriageDate, 'yyyy-MM-dd'),
                    medalAward: obj.medalAward,
                    merit: obj.merit,
                    noOfChild: obj.noOfChild,
                    orderNo: obj.orderNo,
                    pay: obj.pay,
                    postAndOrg: obj.postAndOrg,
                    spouseDetails: obj.spouseDetails,
                    spouseName: obj.spouseName,
                    ssbPlan: obj.ssbPlan,
                    visaExpiredDate: _this.datePipe.transform(obj.visaExpiredDate, 'yyyy-MM-dd'),
                    serviceId: obj.serviceId
                });
                _this.id = obj.id;
                _this.pay = obj.pay;
                _this.previewImg = obj.profileImg;
                console.log(_this.persnolForm.value.previewImg);
            }
            else {
                _this.adminservice.openSnackbar(res.message);
                _this.spinner.hide();
            }
        });
    };
    PersnolComponent.prototype.noImg = function () {
    };
    PersnolComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        // this.updatepersnoldetails()
    };
    PersnolComponent.prototype.update = function () {
        var _this = this;
        this.sendData = this.persnolForm.value;
        console.log(this.sendData);
        this.sendData = {
            // achievements:this.persnolForm.value.achievements,
            id: this.id,
            achievements: this.persnolForm.value.achievements,
            appt: this.persnolForm.value.appt,
            armAndService: this.persnolForm.value.armAndService,
            bankAccountNo: this.persnolForm.value.bankAccountNo,
            detailsOfNOk: this.persnolForm.value.detailsOfNOk,
            fGPA: this.persnolForm.value.fGPA,
            marriageDate: this.persnolForm.value.marriageDate,
            medalAward: this.persnolForm.value.medalAward,
            merit: this.persnolForm.value.merit,
            noOfChild: this.persnolForm.value.noOfChild,
            orderNo: this.persnolForm.value.orderNo,
            pay: this.persnolForm.value.pay,
            postAndOrg: this.persnolForm.value.postAndOrg,
            spouseDetails: this.persnolForm.value.spouseDetails,
            spouseName: this.persnolForm.value.spouseName,
            ssbPlan: this.persnolForm.value.ssbPlan,
            visaExpiredDate: this.persnolForm.value.visaExpiredDate,
            serviceId: this.persnolForm.value.serviceId
        };
        //let x:any={};
        //  this.sendData['id'] = this.id;
        console.log(this.sendData.value);
        // delete sendData.academyNo
        this.edossierservice.updatecadetdetails(this.sendData).subscribe(function (res) {
            _this.spinner.show();
            console.log("updatedpersnoldetails:", res);
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
    };
    PersnolComponent.prototype.goBack = function () {
        window.history.back();
    };
    PersnolComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_4__["EDossierService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] }
    ]; };
    PersnolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-persnol',
            template: _raw_loader_persnol_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_persnol_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_4__["EDossierService"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]])
    ], PersnolComponent);
    return PersnolComponent;
}());

function Number(pay) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "pKc/":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/ed-cadetdetails/persnol/persnol.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"mat-heading\">\r\n            <div id=\"top-bar\" class=\"\">\r\n              <h2>\r\n                <button mat-icon-button (click)=\"goBack()\">\r\n                    <mat-icon>chevron_left</mat-icon>\r\n                  </button> <span class=\"sub-menu1\">\r\n                    E-Dossier > Assessment > Personal Details</span></h2>\r\n          </div>\r\n          </div>\r\n          <div class=\"mat-card mat-focus-indicator\">\r\n            <div class=\"service-id mb-2 mx-0\">\r\n                <!-- <div class=\"input_id col-md-6\">\r\n                    <b> Service Id :</b> <input type=\"text\" disabled id=\"clubServiceID\" class=\"form-control mt-2\">\r\n                </div>\r\n                <div class=\"input_id col-md-6\">\r\n                    <b> Name :</b> <input type=\"text\" disabled id=\"clubName\" class=\"form-control mt-2\">\r\n                </div> -->\r\n                <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Ima No.</label>\r\n                        <input placeholder=\"No\"  type=\"text\" disabled id=\"autobiographyID\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>  \r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Rank</label>\r\n                        <input placeholder=\"Rank\"  type=\"text\" disabled id=\"autobiographyRk\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Name</label>\r\n                        <input placeholder=\"Name\"  type=\"text\" disabled id=\"autobiographyName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Term</label>\r\n                        <input placeholder=\"Term\"  type=\"text\" disabled id=\"autobiographyTermName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Bn</label>\r\n                        <input placeholder=\"Bn\"  type=\"text\" disabled id=\"autobiographyBn\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Coy</label>\r\n                        <input placeholder=\"Coy\"  type=\"text\" disabled id=\"autobiographyComp\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    \r\n                  </div>\r\n                </form>\r\n            </div>\r\n          </div>\r\n        <div class=\"persional-detail\">\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n                <!-- <div class=\"ng-star-inserted\">\r\n                    <div class=\"mat-new\">\r\n                        <h4 class=\"card-heading\">PERSONAL DETAILS</h4>\r\n                    </div>\r\n                </div> -->\r\n                <form [formGroup]=\"persnolForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"row\">\r\n                        <div class=\" col-md-3 diimage\">\r\n                            <div class=\"img-div\">\r\n                                <img  [src]=\"previewImg\"   alt=\"\">\r\n                            </div>\r\n                        </div>\r\n                       \r\n                        \r\n                        <div class=\"col-md-9\">\r\n                            <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Academy No</label>\r\n                                <input placeholder=\"Academy No\" formControlName=\"academyNo\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Name</label>\r\n                                <input placeholder=\"Name\" formControlName=\"name\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Name in Hindi</label>\r\n                                <input placeholder=\"Name in Hindi\" formControlName=\"\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Course</label>\r\n                                <input placeholder=\"Course\" formControlName=\"course\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Type of Entry</label>\r\n                                <input placeholder=\"Type of Entry\" formControlName=\"entry\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Date of Arrival</label>\r\n                                <input placeholder=\"Dt of Arrival\" formcontrolname=\"\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled >\r\n                            </div>\r\n                        </div> -->\r\n                        <!-- <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Pl</label>\r\n                                <input placeholder=\"Pl\" formControlName=\"panImg\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Coy/Bn</label>\r\n                                <input placeholder=\"Coy/Bn\" formControlName=\"company\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">DOB</label>\r\n                                <input placeholder=\"DOB\" formControlName=\"dob\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Age on Joining</label>\r\n                                <input placeholder=\"Age on Joining\" formcontrolname=\"\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" >\r\n                            </div>\r\n                        </div> -->\r\n                        <!-- <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Place of Birth</label>\r\n                                <input placeholder=\"Place of Birth\" formControlName=\"birthPlace\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div> -->\r\n                        <!-- <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Domicile</label>\r\n                                <input placeholder=\"Domicile\" formcontrolname=\"\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Religion</label>\r\n                                <input placeholder=\"Religion\" formControlName=\"religion\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Nationality</label>\r\n                                <input placeholder=\"Nationality\" formControlName=\"nationality\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">UPSC Roll No</label>\r\n                                <input placeholder=\"UPSC Roll No\" formControlName=\"upscRollNo\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">SSB No</label>\r\n                                <input placeholder=\"SSB No\" formControlName=\"ssbSerNo\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled >\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">SSB Plan</label>\r\n                                <input placeholder=\"SSB Plan\" formControlName=\"ssbPlan\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Identity Marks</label>\r\n                                <input placeholder=\"Iden Mks\" formControlName=\"identificationMarks\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Blood Group</label>\r\n                                <input placeholder=\"Blood Gp\" formControlName=\"bloodGroup\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Name of Father(Guardian, if father not alive)</label>\r\n                                <input type=\"text\" placeholder=\"Name of Father\" formControlName=\"fatherName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Father's add (Guardian, if father not alive)</label>\r\n                                <textarea placeholder=\"Father's add\" formControlName=\"address_of_next_of_kin_showing_rel\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Father's Profession</label>\r\n                                <input placeholder=\"Father’s Profession\" formControlName=\"father_profession\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Monthly Income</label>\r\n                                <input placeholder=\"Monthly Income\" formControlName=\"monthlyIncome\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Family Monthly income</label>\r\n                                <input placeholder=\"Family Monthly income\" formControlName=\"monthlyIncome\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Married/Single</label>\r\n                                <input placeholder=\"Married/Single\" formControlName=\"maritalStatus\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Spouse Name</label>\r\n                                <input placeholder=\"Spouse Name\" formControlName=\"spouseName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">No of Children</label>\r\n                                <input placeholder=\"No of Children\" formControlName=\"noOfChild\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Permanent Add</label>\r\n                                <textarea placeholder=\"Permanent Add\" formcontrolname=\"\" rows=\"3\" class=\"form-control ng-untouched ng-pristine ng-invalid\"></textarea>\r\n                            </div>\r\n                        </div> -->\r\n                        <!-- <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">Phone No (Parents)</label>\r\n                                <input placeholder=\"Phone No\" formcontrolname=\"\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div> -->\r\n                        <!-- <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rank\">E-mail ID (OC)</label>\r\n                                <input placeholder=\"E-mail\" formcontrolname=\"\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                    </div>\r\n                    </div>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"ng-star-inserted\">\r\n                        <div class=\"mat-new mat-new-inner\">\r\n                            <h4 class=\"card-heading\">Details of Previous Occupation </h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mat-card inner-mat-card mat-focus-indicator\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\"> Post & Org</label>\r\n                                    <input placeholder=\" Post & Org\" formControlName=\"postAndOrg\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Period</label>\r\n                                    <input placeholder=\"Period\" formcontrolname=\"\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div> -->\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Pay</label>\r\n                                    <input placeholder=\"Pay\" formControlName=\"pay\" type=\"number\" (keypress)=\"keyPress($event)\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ng-star-inserted\">\r\n                        <div class=\"mat-new mat-new-inner\">\r\n                            <h4 class=\"card-heading\">Details of Previous Service in Armed Forces (If any)</h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mat-card inner-mat-card mat-focus-indicator\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Arm/Service</label>\r\n                                    <input placeholder=\"Arm/Service\" formControlName=\"armAndService\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Period</label>\r\n                                    <input placeholder=\"Period\" formcontrolname=\"\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div> -->\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Medal/Award</label>\r\n                                    <input placeholder=\"Medal/Award\" formControlName=\"medalAward\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ng-star-inserted\">\r\n                        <div class=\"mat-new mat-new-inner\">\r\n                            <h4 class=\"card-heading\">Applicable to Ex NDA/Ex ACC Cadets</h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mat-card inner-mat-card mat-focus-indicator\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Appt</label>\r\n                                    <input placeholder=\"Appt\" formControlName=\"appt\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Merit</label>\r\n                                    <input placeholder=\"Merit\" formControlName=\"merit\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">FGPA</label>\r\n                                    <input placeholder=\"FGPA\" formControlName=\"fGPA\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Achievements</label>\r\n                                    <input placeholder=\"Achievements\" formControlName=\"achievements\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ng-star-inserted\">\r\n                        <div class=\"mat-new mat-new-inner\">\r\n                            <h4 class=\"card-heading\">Applicable to Ex ACC Cadets</h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mat-card inner-mat-card mat-focus-indicator\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Details of Spouse (if any)</label>\r\n                                    <input placeholder=\"Details of Spouse\" formControlName=\"spouseDetails\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Date of Marriage</label>\r\n                                    <input placeholder=\"Date of Marriage\" formControlName=\"marriageDate\" type=\"date\" class=\"form-control ng-untouched ng-pristine ng-invalid\" max=\"{{Date}}\" required>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">DO Part II Order No</label>\r\n                                    <input placeholder=\"DO Part II Order No\" formControlName=\"orderNo\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ng-star-inserted\">\r\n                        <div class=\"mat-new mat-new-inner\">\r\n                            <h4 class=\"card-heading\">Applicable to FGCs</h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mat-card inner-mat-card mat-focus-indicator\">\r\n                        <div class=\"row\">\r\n                            <!-- <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Country</label>\r\n                                    <input placeholder=\"Country\" formcontrolname=\"\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div> -->\r\n                            <!-- <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Passport No.</label>\r\n                                    <input placeholder=\"Passport No\" formcontrolname=\"\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div> -->\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Visa Expiry Date</label>\r\n                                    <input placeholder=\"Visa Expiry Dt\" formControlName=\"visaExpiredDate\" type=\"date\" class=\"form-control ng-untouched ng-pristine ng-invalid\" min=\"{{Date}}\" required>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Details of NOK</label>\r\n                                    <textarea placeholder=\"Details of NOK\" formControlName=\"detailsOfNOk\" class=\"form-control ng-untouched ng-pristine ng-invalid\"></textarea>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ng-star-inserted\">\r\n                        <div class=\"mat-new\">\r\n                            <h4 class=\"card-heading\"> Relative serving in Armed Forces (State his Unit)</h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mat-card inner-mat-card mat-focus-indicator\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Rank</label>\r\n                                    <input placeholder=\"Rank\" formControlName=\"rankType\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Name</label>\r\n                                    <input placeholder=\"Name\" formControlName=\"rankName\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Relation</label>\r\n                                    <input placeholder=\"Relation\" formControlName=\"relation\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\"disabled>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ng-star-inserted\">\r\n                        <div class=\"mat-new mat-new-inner\">\r\n                            <h4 class=\"card-heading\">Misc Details (All)</h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mat-card inner-mat-card mat-focus-indicator\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Mobile No</label>\r\n                                    <input placeholder=\"Mobile No\" formControlName=\"contactNo\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\" disabled>\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Pan Card No</label>\r\n                                    <input placeholder=\"Pan Card No\" formcontrolname=\"\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div> -->\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Bank Account No</label>\r\n                                    <input placeholder=\"Bank Account No\" formControlName=\"bankAccountNo\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"rank\">Identity Card No</label>\r\n                                    <input placeholder=\"Identity Card No\" formcontrolname=\"\" type=\"text\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                                </div>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ng-star-inserted\">\r\n                        <div class=\"mat-new mat-new-inner\">\r\n                            <h4 class=\"card-heading\">FAMILY BACKGROUND (Details of Parents, Brothers and Sisters)</h4>\r\n                        </div>\r\n                    </div>\r\n                     <div class=\"mat-card inner-mat-card mat-focus-indicator\">\r\n                        <table class=\"tg\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"tg-cjmp\">S. No.</th>\r\n                                    <th class=\"tg-ratz\">Name</th>\r\n                                    <th class=\"tg-ratz\">Relationship</th>\r\n                                    <th class=\"tg-ratz\">Occupation with Details</th>\r\n                                    <th class=\"tg-ratz\">Current Status</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td class=\"tg-0pky\"><input type=\"text\" formControlName=\"serialNo\"  class=\"form-control\" readonly></td>\r\n                                    <td class=\"tg-0pky\"><input type=\"text\" formControlName=\"fatherName\"  class=\"form-control\" readonly></td>\r\n                                    <td class=\"tg-0pky\"><input type=\"text\" formControlName=\"relation\" class=\"form-control\" readonly></td>\r\n                                    <td class=\"tg-0pky\"><input type=\"text\" formControlName=\"father_profession\" class=\"form-control\" readonly></td>\r\n                                    <td class=\"tg-0pky\"><input type=\"text\" formControlName=\"currentStatus\" class=\"form-control\" readonly></td>\r\n                                </tr>\r\n                              </tbody>\r\n                        </table>\r\n                    </div>\r\n                     <div class=\"ng-star-inserted\">\r\n                        <div class=\"mat-new mat-new-inner\">\r\n                            <h4 class=\"card-heading\">EDUCATION/TECHNICAL QUALIFICATION (Details of Graduation, Post Graduation and Technical Qualification to be given)</h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"mat-card inner-mat-card mat-focus-indicator\">\r\n                        <div formArrayName=\"cadetEducation\">\r\n                        <table class=\"tg\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"tg-cjmp\">S. No.</th>\r\n                                    <th class=\"tg-ratz\">Qualification</th>\r\n                                    <th class=\"tg-ratz\">Name of College</th>\r\n                                    <th class=\"tg-ratz\">University</th>\r\n                                    <th class=\"tg-ratz\">Subjects</th>\r\n                                    <th class=\"tg-ratz\">Marks (%)</th>\r\n                                    <th class=\"tg-ratz\">Div</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <!-- <tr *ngFor=\"let item of persnolForm.get('cadetEducation').controls;let i = index;\"> -->\r\n                                   <tr *ngFor=\"let item of getControls(); let i = index\">\r\n                                    <ng-container [formGroupName]=\"i\">\r\n                                        <td>\r\n                                            {{i+1}}\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" formControlName=\"examination\"\r\n                                               \r\n                                                class=\"form-control\" readonly>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" formControlName=\"schoolCollege\"\r\n                                               \r\n                                                class=\"form-control\" readonly>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" formControlName=\"university\"\r\n                                              \r\n                                                class=\"form-control\" readonly>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" formControlName=\"subjectTaken\"\r\n                                               \r\n                                                class=\"form-control\" readonly>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" formControlName=\"percentage\"\r\n                                               \r\n                                                class=\"form-control\" readonly>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type=\"text\" formControlName=\"divisionClass\"\r\n                                              \r\n                                                class=\"form-control\" readonly>\r\n                                        </td>\r\n                                \r\n                                    \r\n\r\n                                    </ng-container>\r\n\r\n                                </tr>\r\n                               </tbody>\r\n                        </table>\r\n                        </div>\r\n                    </div>\r\n                    <button mat-raised-button (click)=\"update()\">Submit</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "uvyx":
/*!**********************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/ed-cadetdetails/persnol/persnol.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 0 !important;\n}\n\n.mat-new-inner {\n  padding: 0.875rem 0 0 !important;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.inner-mat-card {\n  margin: 1rem 0;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.required {\n  color: red;\n  font-size: 18px;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: #e1e3de;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: #e1e3de;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-cjmp {\n  background-color: #e1e3de;\n  border-color: #000000;\n  color: #000000;\n  font-size: 1rem;\n  text-align: center;\n  vertical-align: top;\n  font-weight: bold;\n}\n\n.tg .tg-ratz {\n  background-color: #e1e3de;\n  border-color: #000000;\n  text-align: center;\n  vertical-align: top;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: top;\n}\n\n.img-div {\n  width: 100%;\n  height: auto;\n  padding: 20px;\n}\n\n.img-div img {\n  border: 1px solid #721a0c;\n  box-shadow: 1px 1px 1px #c3b7b7;\n  height: 100%;\n  border-bottom: 0 !important;\n  width: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n.img-btn {\n  font-size: 30px;\n  color: #fff;\n  border: 1px solid #721a0c;\n  WIDTH: 100%;\n  margin-left: 0px;\n  border-radius: 0px;\n  background: #c09450;\n  height: 37px;\n  line-height: 30px;\n  margin-top: 0px;\n}\n\nh2 button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}");

/***/ })

}]);