(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gc-assessment-gc-assessment-module"],{

/***/ "DqKr":
/*!***********************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/gc-assessment/gc-assessment.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: GcAssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcAssessmentComponent", function() { return GcAssessmentComponent; });
/* harmony import */ var _raw_loader_gc_assessment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./gc-assessment.component.html */ "uofM");
/* harmony import */ var _gc_assessment_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gc-assessment.component.scss */ "Gobj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GcAssessmentComponent = /** @class */ (function () {
    function GcAssessmentComponent(service, router, fb, sharedService, spinner) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.fb = fb;
        this.sharedService = sharedService;
        this.spinner = spinner;
        this.hasAccess = true;
        this.I_termOfficerQuotient = [];
        this.II_termOfficerQuotient = [];
        this.III_termOfficerQuotient = [];
        this.II_techOfficerQuotient = [];
        this.I_termPhysical = [];
        this.II_termPhysical = [];
        this.III_termPhysical = [];
        this.II_techPhysical = [];
        this.I_termServiceSubjects = [];
        this.II_termServiceSubjects = [];
        this.III_termServiceSubjects = [];
        this.II_techServiceSubjects = [];
        this.I_termAcademicSubjects = [];
        this.II_termAcademicSubjects = [];
        this.III_termAcademicSubjects = [];
        this.II_techAcademicSubjects = [];
        this.I_termOtherSubjects = [];
        this.II_termOtherSubjects = [];
        this.III_termOtherSubjects = [];
        this.II_techOtherSubjects = [];
        this.officerQuotient = [];
        this.physical = [];
        this.serviceSubjects = [];
        this.academicSubjects = [];
        this.otherSubjects = [];
        service.cadetObj.subscribe(function (object) {
            console.log("CADET: ", object);
            if (!object) {
                _this.router.navigate(['/e-dossior/ed-content/Ed-dashboard']);
            }
            else {
                _this.cadetDetails = JSON.parse(object);
            }
        });
        // this.cadetDetails = JSON.parse(localStorage.getItem('cadet'))
        this.serviceId = this.cadetDetails.serviceId;
        this.cadetDetails.rank = (this.cadetDetails.nationality == 'India') ? 'GC' : 'FGC';
    }
    GcAssessmentComponent.prototype.ngOnInit = function () {
    };
    GcAssessmentComponent.prototype.ngAfterViewInit = function () {
        this.getGcAssessment();
    };
    GcAssessmentComponent.prototype.getGcAssessment = function () {
        var _this = this;
        this.service.getGCAssessment(this.serviceId).subscribe(function (res) {
            console.log("RESPONSE: ", res);
            if (res.status == 'OK') {
                var dataITerm = res.object.term1;
                var dataIITerm = res.object.term2;
                var dataIIITerm = res.object.term3;
                var dataIITech = res.object.tech2;
                dataITerm.filter(function (element) {
                    if (element.category === 'Officer Quotient') {
                        _this.I_termOfficerQuotient.push(element);
                    }
                    else if (element.category === 'Physicals') {
                        _this.I_termPhysical.push(element);
                    }
                    else if (element.category === 'Service Subjects') {
                        _this.I_termServiceSubjects.push(element);
                    }
                    else if (element.category === 'Academics Subjects') {
                        _this.I_termAcademicSubjects.push(element);
                    }
                    else {
                        _this.I_termOtherSubjects.push(element);
                    }
                });
                dataIITerm.filter(function (element) {
                    if (element.category === 'Officer Quotient') {
                        _this.II_termOfficerQuotient.push(element);
                    }
                    else if (element.category === 'Physicals') {
                        _this.II_termPhysical.push(element);
                    }
                    else if (element.category === 'Service Subjects') {
                        _this.II_termServiceSubjects.push(element);
                    }
                    else if (element.category === 'Academics Subjects') {
                        _this.II_termAcademicSubjects.push(element);
                    }
                    else {
                        _this.II_termOtherSubjects.push(element);
                    }
                });
                dataIIITerm.filter(function (element) {
                    if (element.category === 'Officer Quotient') {
                        _this.III_termOfficerQuotient.push(element);
                    }
                    else if (element.category === 'Physicals') {
                        _this.III_termPhysical.push(element);
                    }
                    else if (element.category === 'Service Subjects') {
                        _this.III_termServiceSubjects.push(element);
                    }
                    else if (element.category === 'Academics Subjects') {
                        _this.III_termAcademicSubjects.push(element);
                    }
                    else {
                        _this.III_termOtherSubjects.push(element);
                    }
                });
                dataIITech.filter(function (element) {
                    if (element.category === 'Officer Quotient') {
                        _this.II_techOfficerQuotient.push(element);
                    }
                    else if (element.category === 'Physicals') {
                        _this.II_techPhysical.push(element);
                    }
                    else if (element.category === 'Service Subjects') {
                        _this.II_techServiceSubjects.push(element);
                    }
                    else if (element.category === 'Academics Subjects') {
                        _this.II_techAcademicSubjects.push(element);
                    }
                    else {
                        _this.II_techOtherSubjects.push(element);
                    }
                });
                _this.I_termOfficerQuotient.forEach(function (el) {
                    _this.officerQuotient.push([]);
                });
                _this.I_termPhysical.forEach(function (el) {
                    _this.physical.push([]);
                });
                _this.I_termServiceSubjects.forEach(function (el) {
                    _this.serviceSubjects.push([]);
                });
                _this.I_termAcademicSubjects.forEach(function (el) {
                    _this.academicSubjects.push([]);
                });
                _this.I_termOtherSubjects.forEach(function (el) {
                    _this.otherSubjects.push([]);
                });
                console.log("======== OQ ==========");
                if (_this.cadetDetails.entry == 'TGC') {
                    for (var i = 0; i < _this.II_techOfficerQuotient.length; i++) {
                        _this.officerQuotient[i].push(_this.II_techOfficerQuotient[i]);
                        _this.officerQuotient[i].push(_this.III_termOfficerQuotient[i]);
                    }
                    for (var i = 0; i < _this.II_techPhysical.length; i++) {
                        _this.physical[i].push(_this.II_techPhysical[i]);
                        _this.physical[i].push(_this.III_termPhysical[i]);
                    }
                    for (var i = 0; i < _this.II_techServiceSubjects.length; i++) {
                        _this.serviceSubjects[i].push(_this.II_techServiceSubjects[i]);
                        _this.serviceSubjects[i].push(_this.III_termServiceSubjects[i]);
                    }
                    for (var i = 0; i < _this.II_techAcademicSubjects.length; i++) {
                        _this.academicSubjects[i].push(_this.II_techAcademicSubjects[i]);
                        _this.academicSubjects[i].push(_this.III_termAcademicSubjects[i]);
                    }
                    for (var i = 0; i < _this.II_techOtherSubjects.length; i++) {
                        _this.otherSubjects[i].push(_this.II_techOtherSubjects[i]);
                        _this.otherSubjects[i].push(_this.III_termOtherSubjects[i]);
                    }
                }
                else {
                    for (var i = 0; i < _this.I_termOfficerQuotient.length; i++) {
                        _this.officerQuotient[i].push(_this.I_termOfficerQuotient[i]);
                        _this.officerQuotient[i].push(_this.II_termOfficerQuotient[i]);
                        _this.officerQuotient[i].push(_this.III_termOfficerQuotient[i]);
                    }
                    for (var i = 0; i < _this.I_termPhysical.length; i++) {
                        _this.physical[i].push(_this.I_termPhysical[i]);
                        _this.physical[i].push(_this.II_termPhysical[i]);
                        _this.physical[i].push(_this.III_termPhysical[i]);
                    }
                    for (var i = 0; i < _this.I_termServiceSubjects.length; i++) {
                        _this.serviceSubjects[i].push(_this.I_termServiceSubjects[i]);
                        _this.serviceSubjects[i].push(_this.II_termServiceSubjects[i]);
                        _this.serviceSubjects[i].push(_this.III_termServiceSubjects[i]);
                    }
                    for (var i = 0; i < _this.I_termAcademicSubjects.length; i++) {
                        _this.academicSubjects[i].push(_this.I_termAcademicSubjects[i]);
                        _this.academicSubjects[i].push(_this.II_termAcademicSubjects[i]);
                        _this.academicSubjects[i].push(_this.III_termAcademicSubjects[i]);
                    }
                    for (var i = 0; i < _this.I_termOtherSubjects.length; i++) {
                        _this.otherSubjects[i].push(_this.I_termOtherSubjects[i]);
                        _this.otherSubjects[i].push(_this.II_termOtherSubjects[i]);
                        _this.otherSubjects[i].push(_this.III_termOtherSubjects[i]);
                    }
                }
                console.log("===========ALL SUBJECTS============");
                console.log("OQ: ", _this.officerQuotient);
                console.log("PHYSICALS: ", _this.physical);
                console.log("SERVICE SUBJECTS: ", _this.serviceSubjects);
                console.log("ACADEMIC SUBJECTS: ", _this.academicSubjects);
                console.log("OTHER SUBJECTS: ", _this.otherSubjects);
                console.log("====================================");
            }
        });
    };
    GcAssessmentComponent.prototype.goBack = function () {
        window.history.back();
    };
    GcAssessmentComponent.ctorParameters = function () { return [
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_5__["EDossierService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
    ]; };
    GcAssessmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-gc-assessment',
            template: _raw_loader_gc_assessment_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_gc_assessment_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_5__["EDossierService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], GcAssessmentComponent);
    return GcAssessmentComponent;
}());



/***/ }),

/***/ "Gobj":
/*!*************************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/gc-assessment/gc-assessment.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=text] {\n  width: 50px;\n  text-align: center;\n  border: 1px solid #ccc;\n  background: #fafafa;\n  border-radius: 3px;\n  height: 31px;\n}\n\ndiv#top-bar {\n  background: #4c5041;\n  padding: 5px 15px;\n  color: #fff;\n}\n\ndiv#top-bar h2 {\n  font-size: 19px;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #bb9450;\n  background: #e1e3de;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.box-shadow {\n  float: left;\n  width: 100%;\n  margin: 10px 0;\n}\n\n.mat-card {\n  transition: all 0.4s ease 0s;\n  color: #37474F;\n  font-family: \"Nunito Sans\", sans-serif;\n  background-color: #ffffff;\n  margin-bottom: 20px !important;\n  width: 100%;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background: #fff;\n  padding: 20px;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n}\n\n.tg td {\n  border-color: #ccc;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 10px 5px;\n  word-break: normal;\n  text-align: left;\n  text-align: left;\n}\n\n.tg th {\n  text-align: left;\n  border-color: #ccc;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 10px 5px;\n  word-break: normal;\n  background: #eee;\n  font-weight: bold;\n}\n\ntd.tg-0lax.bold {\n  font-weight: bold;\n}\n\n.sports input[type=text] {\n  width: 100px;\n  text-align: center;\n  border: 1px solid #ccc;\n  background: #fafafa;\n  border-radius: 3px;\n  height: 31px;\n}\n\nh4.red-heading {\n  font-size: 15px;\n  color: #721a0c;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n\ntable {\n  margin-bottom: 30px;\n}\n\n.sss {\n  display: block;\n  overflow-x: scroll;\n  width: 100%;\n}\n\nbutton.btn-color {\n  background: #742923;\n  color: #fff;\n}\n\nbutton.btn-color:hover, button.btn-color:focus {\n  color: #fff;\n}\n\n.cdt-dtls {\n  height: 40px !important;\n  padding: 8px 0 0 10px;\n}");

/***/ }),

/***/ "WM2Z":
/*!********************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/gc-assessment/gc-assessment.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: GcAssessmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcAssessmentModule", function() { return GcAssessmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gc_assessment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gc-assessment.component */ "DqKr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _gc_assessment_component__WEBPACK_IMPORTED_MODULE_2__["GcAssessmentComponent"]
    },
];
var GcAssessmentModule = /** @class */ (function () {
    function GcAssessmentModule() {
    }
    GcAssessmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _gc_assessment_component__WEBPACK_IMPORTED_MODULE_2__["GcAssessmentComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], GcAssessmentModule);
    return GcAssessmentModule;
}());



/***/ }),

/***/ "uofM":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/gc-assessment/gc-assessment.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n\n  <!-- <div id=\"top-bar\" class=\"row\">\n      <h2>E-Dossier</h2>\n    </div> -->\n  <div class=\"box-shadow\">\n\n    <h4 class=\"card-heading\">\n      <button mat-icon-button (click)=\"goBack()\">\n        <mat-icon>chevron_left</mat-icon>\n      </button>\n      <span class=\"sub-menu1\"> E-Dossier > Assessment: GC Assessment </span>\n    </h4>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-2 form-group\">\n\n      <label for=\"rank\">Ima No.</label>\n      <div class=\"border cdt-dtls\"> {{cadetDetails.serviceId}} </div>\n      <!-- <input placeholder=\"No\" type=\"text\" [value]=\"cadetDetails.serviceId\" disabled class=\"form-control\"> -->\n\n    </div>\n    <div class=\"col-md-2 form-group\">\n\n      <label for=\"rank\">Rank</label>\n      <div class=\"border cdt-dtls\"> {{cadetDetails.rank}} </div>\n      <!-- <input placeholder=\"Rank\" [value]=\"cadetDetails.rank\" type=\"text\" disabled class=\"form-control\"> -->\n\n    </div>\n    <div class=\"col-md-2 form-group\">\n\n      <label for=\"rank\">Name</label>\n      <div class=\"border cdt-dtls\">{{cadetDetails.name}} </div>\n      <!-- <input placeholder=\"Name\" [value]=\"cadetDetails.name\" type=\"text\" disabled class=\"form-control\"> -->\n\n    </div>\n    <div class=\"col-md-2 form-group\">\n\n      <label for=\"rank\">Term</label>\n      <div class=\"border cdt-dtls\">{{cadetDetails.termName}} </div>\n      <!-- <input placeholder=\"Term\" [value]=\"cadetDetails.termName\" type=\"text\" disabled class=\"form-control\"> -->\n\n    </div>\n    <div class=\"col-md-2 form-group\">\n\n      <label for=\"rank\">Battalion</label>\n      <div class=\"border cdt-dtls\">{{cadetDetails.battalian + ' Bn'}} </div>\n      <!-- <input placeholder=\"Bn\" [value]=\"cadetDetails.battalian + ' Bn'\" type=\"text\" disabled class=\"form-control\"> -->\n\n    </div>\n    <div class=\"col-md-2 form-group\">\n\n      <label for=\"rank\">Company</label>\n      <div class=\"border cdt-dtls\">{{cadetDetails.company}} </div>\n      <!-- <input placeholder=\"Coy\" [value]=\"cadetDetails.company\" type=\"text\" disabled class=\"form-control\"> -->\n\n    </div>\n\n  </div>\n\n\n  <div class=\"main-row row\">\n    <div class=\"container-fluid\">\n      <div class=\"mat-card\">\n        <table class=\"tg sss\">\n          <thead>\n            <tr>\n              <th class=\"tg-0pky\">S NO</th>\n              <th class=\"tg-0pky\">SUBJECTS</th>\n              <ng-container *ngIf=\"cadetDetails.entry != 'TGC'\">\n                <th class=\"tg-c3ow\" colspan=\"8\">I TERM</th>\n                <th class=\"tg-c3ow\" colspan=\"8\">II TERM</th>\n              </ng-container>\n              <th class=\"tg-c3ow\" colspan=\"8\" *ngIf=\"cadetDetails.entry == 'TGC'\">II TECH</th>\n              <th class=\"tg-c3ow\" colspan=\"8\">III TERM</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\"></td>\n              <ng-container *ngIf=\"cadetDetails.entry != 'TGC'\">\n                <td class=\"tg-0pky\" colspan=\"2\">PL CDR</td>\n                <td class=\"tg-0pky\" colspan=\"2\">Coy CDR</td>\n                <td class=\"tg-0pky\" colspan=\"2\">BN CDR</td>\n                <td class=\"tg-0pky\" colspan=\"2\">TOTAL</td>\n              </ng-container>\n\n              <td class=\"tg-0pky\" colspan=\"2\">PL CDR</td>\n              <td class=\"tg-0pky\" colspan=\"2\">Coy CDR</td>\n              <td class=\"tg-0pky\" colspan=\"2\">BN CDR</td>\n              <td class=\"tg-0pky\" colspan=\"2\">TOTAL</td>\n\n              <td class=\"tg-0pky\" colspan=\"2\">PL CDR</td>\n              <td class=\"tg-0pky\" colspan=\"2\">Coy CDR</td>\n              <td class=\"tg-0pky\" colspan=\"2\">BN CDR</td>\n              <td class=\"tg-0pky\" colspan=\"2\">TOTAL</td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\">1</td>\n              <td class=\"tg-0pky\">Officer Quotient</td>\n\n              <ng-container *ngIf=\"cadetDetails.entry != 'TGC'\">\n                <td class=\"tg-0pky\">Out of marks</td>\n                <td class=\"tg-0pky\">Marks Given</td>\n\n                <td class=\"tg-0pky\">Out of marks</td>\n                <td class=\"tg-0pky\">Marks Given</td>\n\n                <td class=\"tg-0pky\">Out of marks</td>\n                <td class=\"tg-0pky\">Marks Given</td>\n\n                <td class=\"tg-0pky\">Max marks</td>\n                <td class=\"tg-0pky\">Marks Given</td>\n\n              </ng-container>\n\n\n\n              <td class=\"tg-0pky\">Out of marks</td>\n              <td class=\"tg-0pky\">Marks Given</td>\n\n              <td class=\"tg-0pky\">Out of marks</td>\n              <td class=\"tg-0pky\">Marks Given</td>\n\n              <td class=\"tg-0pky\">Out of marks</td>\n              <td class=\"tg-0pky\">Marks Given</td>\n\n              <td class=\"tg-0pky\">Max marks</td>\n              <td class=\"tg-0pky\">Marks Given</td>\n\n\n\n\n              <td class=\"tg-0pky\">Out of marks</td>\n              <td class=\"tg-0pky\">Marks Given</td>\n\n              <td class=\"tg-0pky\">Out of marks</td>\n              <td class=\"tg-0pky\">Marks Given</td>\n\n              <td class=\"tg-0pky\">Max marks</td>\n              <td class=\"tg-0pky\">Marks Given</td>\n\n              <td class=\"tg-0pky\">Max marks</td>\n              <td class=\"tg-0pky\">Marks Given</td>\n\n\n\n            </tr>\n            <tr *ngFor=\"let offrQtnt of officerQuotient; let i=index\">\n\n              <td class=\"tg-0pky\"></td>\n\n              <td class=\"tg-0pky\">{{offrQtnt[0].subjectName}}</td>\n              <ng-container *ngFor=\"let oq of offrQtnt; let j=index\">\n                <td class=\"tg-0pky\"> {{oq.oqPlTotalMarks || '-'}} </td>\n                <td class=\"tg-0pky\">\n                  <span >{{oq.oqPlObtainedMarks || '-'}}</span>\n                </td>\n\n                <td class=\"tg-0pky\">{{oq.oqCoyTotalMarks || '-'}}</td>\n                <td class=\"tg-0pky\">\n                  <span>{{oq.oqCoyObtainedMarks || '-'}}</span>\n                </td>\n                <td class=\"tg-0pky\">{{oq.oqBnTotalMarks || '-'}}</td>\n                <td class=\"tg-0pky\">\n                  <span >{{oq.oqBnObtainedMarks || '-'}}</span>\n                </td>\n\n                <td class=\"tg-0pky\">{{oq.totalMarks || '-'}}</td>\n                <td class=\"tg-0pky\">\n                  <span >{{oq.obtainedMarks || '-'}}</span>\n                </td>\n              </ng-container>\n\n              <!-- <td class=\"tg-0pky\">140</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n              <td class=\"tg-0pky\">90</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n              <td class=\"tg-0pky\">70</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n              <td class=\"tg-0pky\">140</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n              <td class=\"tg-0pky\">140</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n              <td class=\"tg-0pky\">90</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n              <td class=\"tg-0pky\">70</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n              <td class=\"tg-0pky\">140</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n              <td class=\"tg-0pky\">140</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n              <td class=\"tg-0pky\">90</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n              <td class=\"tg-0pky\">70</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n              <td class=\"tg-0pky\">140</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td> -->\n\n            </tr>\n            <!-- <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Acad</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">20</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">20</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">20</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Drill</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">20</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">20</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">20</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Eqtn</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">10</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">10</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">10</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">OQ Marks Awarded by Dy Comdt & CI</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">20</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">20</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">20</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">OQ Marks Awarded by Comdt</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">30</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">30</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">30</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr> -->\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Total Officer Quotient Marks</td>\n\n              <ng-container *ngIf=\"cadetDetails.entry != 'TGC'\">\n                <td class=\"tg-0pky\" colspan=\"6\"></td>\n                <td class=\"tg-0pky\">400</td>\n                <td class=\"tg-0pky\"><input type=\"text\"></td>\n              </ng-container>\n\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">400</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">400</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Officer Quotient Percentage</td>\n              <ng-container *ngIf=\"cadetDetails.entry != 'TGC'\">\n                <td class=\"tg-0pky\" colspan=\"6\"></td>\n                <td class=\"tg-0pky\"><input type=\"text\"></td>\n                <td class=\"tg-0pky\"><input type=\"text\"></td>\n              </ng-container>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Officer Quotient Grading</td>\n              <ng-container *ngIf=\"cadetDetails.entry != 'TGC'\">\n                <td class=\"tg-0pky\" colspan=\"6\"></td>\n                <td class=\"tg-0pky\"><input type=\"text\"></td>\n                <td class=\"tg-0pky\"><input type=\"text\"></td>\n              </ng-container>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n\n            <tr>\n              <td class=\"tg-0pky\">2</td>\n              <td class=\"tg-0pky\" colspan=\"25\"> Physicals</td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">PT</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">225</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">225</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">225</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Speed Marches/Runback</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">65</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">65</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">65</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Games</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">100</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">100</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">100</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Equitatition Trg</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">50</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">50</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">50</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Drill</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">100</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">100</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">100</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Total Physicals</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">540</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">540</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">540</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Physicals Percentage</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\">3</td>\n              <td class=\"tg-0pky\" colspan=\"25\"> Service Subjects</td>\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Weapon Training</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">150</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">150</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">150</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">BMT 1</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">200</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">200</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">200</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">BMT 2</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">150</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">150</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">150</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Map (Practical)</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">25</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">25</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">25</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Camp/Exercise (Incl Tac Trg (Practical)</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">125</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">125</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">125</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Total Service Subjects Marks</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">700</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">700</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">700</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Service Subjects Percentage</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\">4</td>\n              <td class=\"tg-0pky\" colspan=\"25\">Academics Subjects</td>\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Mil History & Mil Thinking</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">80</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">80</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">80</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">CAIR, Area Cultural Studies & Mil Mgt</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">50</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">50</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">50</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Science & Warfare (SAW)</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">70</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">70</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">70</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"> </td>\n              <td class=\"tg-0pky\">Service Writing (SWT)</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">25</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">25</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">25</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">English Comn Skills (ECS)</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">25</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">25</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">25</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">IT</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">50</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">50</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">50</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"></td>\n              <td class=\"tg-0pky\">Total Academics Subjects</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">300</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">300</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">300</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\"> </td>\n              <td class=\"tg-0pky\">Academics Subjects Percentage</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\">5 </td>\n              <td class=\"tg-0pky\">Leadership Matrix</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">60</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">60</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">60</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\">6 </td>\n              <td class=\"tg-0pky\">Credit for Excellence</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">50</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">50</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">50</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\">7 </td>\n              <td class=\"tg-0pky\">Gross Total</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">2000</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">2000</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">2000</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\">8 </td>\n              <td class=\"tg-0pky\">Mutual Assessment (Rank/Out of)</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\">9 </td>\n              <td class=\"tg-0pky\">Weightage of II Term(50% to be added in III Term Marks</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">1000</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\">10 </td>\n              <td class=\"tg-0pky\">Grand Total of all Term Merit</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">2000</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">2000</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\">3000</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\">11 </td>\n              <td class=\"tg-0pky\">Percentage out of Max Marks</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\">12 </td>\n              <td class=\"tg-0pky\">Grading</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n            <tr>\n              <td class=\"tg-0pky\">13 </td>\n              <td class=\"tg-0pky\">Order of Merit (merit/Out of)</td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\" colspan=\"6\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n\n            </tr>\n          </tbody>\n        </table>\n\n        <table class=\"tg\">\n\n          <thead>\n            <tr>\n              <td class=\"tg-0lax\" rowspan=\"2\">GRADING@</td>\n              <td class=\"tg-0lax\">OS</td>\n              <td class=\"tg-0lax\">AA</td>\n              <td class=\"tg-0lax\">JAA</td>\n              <td class=\"tg-0lax\">HA</td>\n              <td class=\"tg-0lax\">A</td>\n              <td class=\"tg-0lax\">LA</td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\">75%</td>\n              <td class=\"tg-0lax\">(74%-70)</td>\n              <td class=\"tg-0lax\">(69-65%)</td>\n              <td class=\"tg-0lax\">(64-60%)</td>\n              <td class=\"tg-0lax\">(59-50%)</td>\n              <td class=\"tg-0lax\">(49-40%)</td>\n            </tr>\n          </thead>\n        </table>\n        <table class=\"tg\">\n          <thead>\n            <tr>\n              <th class=\"tg-0lax\">Trg Activity</th>\n              <th class=\"tg-0lax\">Avg Pds Allotted</th>\n              <th class=\"tg-0lax\">Pl Cdr</th>\n              <th class=\"tg-0lax\">Coy Cdr</th>\n              <th class=\"tg-0lax\">Bn Cdr</th>\n              <th class=\"tg-0lax\">Total</th>\n              <th class=\"tg-0lax\">Remarks</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td class=\"tg-0lax\">PT</td>\n              <td class=\"tg-0lax\">60</td>\n              <td class=\"tg-0lax\">15</td>\n              <td class=\"tg-0lax\">10</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">30</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\">Obst Course/Trg</td>\n              <td class=\"tg-0lax\">08</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">15</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\">Swimming</td>\n              <td class=\"tg-0lax\">16</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">15</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\">WpnTrg</td>\n              <td class=\"tg-0lax\">95</td>\n              <td class=\"tg-0lax\">15</td>\n              <td class=\"tg-0lax\">10</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">30</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\">Sports/Games</td>\n              <td class=\"tg-0lax\">88</td>\n              <td class=\"tg-0lax\">20</td>\n              <td class=\"tg-0lax\">15</td>\n              <td class=\"tg-0lax\">10</td>\n              <td class=\"tg-0lax\">45</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\">X- Country</td>\n              <td class=\"tg-0lax\">10</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">15</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\">TacTrgexcl Camps</td>\n              <td class=\"tg-0lax\">165</td>\n              <td class=\"tg-0lax\">25</td>\n              <td class=\"tg-0lax\">10</td>\n              <td class=\"tg-0lax\">10</td>\n              <td class=\"tg-0lax\">45</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\">Camps/Ex</td>\n              <td class=\"tg-0lax\">120</td>\n              <td class=\"tg-0lax\">40</td>\n              <td class=\"tg-0lax\">20</td>\n              <td class=\"tg-0lax\">15</td>\n              <td class=\"tg-0lax\">75</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\">Dinner/Guest Ni</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">15</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\">Misc</td>\n              <td class=\"tg-0lax\">-</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">5</td>\n              <td class=\"tg-0lax\">15</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\">Total (Bn level)</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n              <td class=\"tg-0lax\">140</td>\n              <td class=\"tg-0lax\">90</td>\n              <td class=\"tg-0lax\">70</td>\n              <td class=\"tg-0lax\">300</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\">Acad</td>\n              <td class=\"tg-0lax\">150</td>\n              <td class=\"tg-0lax\">-</td>\n              <td class=\"tg-0lax\">-</td>\n              <td class=\"tg-0lax\">-</td>\n              <td class=\"tg-0lax\">20</td>\n              <td class=\"tg-0lax\">AEC DS</td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\">Drill</td>\n              <td class=\"tg-0lax\">55</td>\n              <td class=\"tg-0lax\">-</td>\n              <td class=\"tg-0lax\">-</td>\n              <td class=\"tg-0lax\">-</td>\n              <td class=\"tg-0lax\">20</td>\n              <td class=\"tg-0lax\">Adjt</td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\">Eqtn</td>\n              <td class=\"tg-0lax\">22</td>\n              <td class=\"tg-0lax\">-</td>\n              <td class=\"tg-0lax\">-</td>\n              <td class=\"tg-0lax\">-</td>\n              <td class=\"tg-0lax\">10</td>\n              <td class=\"tg-0lax\">ETO</td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\" colspan=\"5\">DC & CI</td>\n              <td class=\"tg-0lax\">20</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\" colspan=\"5\">Comdt</td>\n              <td class=\"tg-0lax\">30</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n            </tr>\n            <tr>\n              <td class=\"tg-0lax\" colspan=\"5\">Grand Total</td>\n              <td class=\"tg-0lax\">400</td>\n              <td class=\"tg-0pky\"><input type=\"text\"></td>\n            </tr>\n          </tbody>\n        </table>\n\n\n        <div class=\"text-right\">\n          <button class=\"btn btn-color mt-2\">Submit</button>\n        </div>\n      </div>\n    </div>\n\n\n\n  </div>");

/***/ })

}]);