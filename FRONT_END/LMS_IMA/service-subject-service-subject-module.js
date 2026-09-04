(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-subject-service-subject-module"],{

/***/ "2tTo":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/service-subject/service-subject.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.backbtn button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  font-weight: bold;\n  text-align: center !important;\n  vertical-align: middle !important;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: top;\n}\n\n.tg .tg-0y56 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: left;\n  vertical-align: middle;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: top;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: top;\n}\n\n.tg .tg-0pky input {\n  text-align: center;\n}\n\nbutton.btn-color {\n  background: #742923;\n  color: #fff;\n}\n\nbutton.btn-color:hover, button.btn-color:focus {\n  color: #fff;\n}\n\n.top-space {\n  margin-top: 20px;\n}");

/***/ }),

/***/ "cWU4":
/*!***************************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/service-subject/service-subject.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ServiceSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceSubjectComponent", function() { return ServiceSubjectComponent; });
/* harmony import */ var _raw_loader_service_subject_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./service-subject.component.html */ "sakB");
/* harmony import */ var _service_subject_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-subject.component.scss */ "2tTo");
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










var ServiceSubjectComponent = /** @class */ (function () {
    function ServiceSubjectComponent(dialog, spinner, route, fb, router, adminservice, sharedservice, cdref, edossierservice, activeRoute, EDossierService) {
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
        this.termIServiceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.termIIServiceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.techIIServiceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.termIIIServiceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.isShow = false;
        this.resultType = "MR Prac";
        this.serviceSubjectType = "BMT1";
        this.Id = this.route.snapshot.queryParamMap.get('Id');
        this.termId = this.route.snapshot.queryParamMap.get('termId');
        this.termIServiceForm = this.fb.group({
            resultType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            subjectType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            assesmentTermType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalObtainedMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalObtainedMarks1: [''],
            bmt2ObtainedMarks: [''],
            mrPracObtainedMarks: [''],
            finalObtainedMarks: [''],
            midObtainedMarks: [''],
            serviceId: [''],
        });
        this.termIIServiceForm = this.fb.group({
            resultType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            subjectType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            assesmentTermType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalObtainedMarkst2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalObtainedMarksmidt2: [''],
            bmt2ObtainedMarks: [''],
            mrPracObtainedMarks: [''],
            finalObtainedMarks: [''],
            midObtainedMarks: [''],
            serviceId: [''],
        });
        this.techIIServiceForm = this.fb.group({
            resultType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            subjectType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            assesmentTermType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalObtainedMarkst7: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalObtainedMarksmidt7: [''],
            bmt2ObtainedMarks: [''],
            mrPracObtainedMarks: [''],
            finalObtainedMarks: [''],
            midObtainedMarks: [''],
            serviceId: [''],
        });
        this.termIIIServiceForm = this.fb.group({
            resultType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            subjectType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            assesmentTermType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalObtainedMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalObtainedMarkst3: [''],
            bmt2ObtainedMarksmidt3: [''],
            bmt2ObtainedMarks: [''],
            mrPracObtainedMarks: [''],
            finalObtainedMarks: [''],
            midObtainedMarks: [''],
            serviceId: [''],
        });
    }
    ServiceSubjectComponent.prototype.ngOnInit = function () {
        document.getElementById("subServiceID").value = localStorage.getItem("e");
        document.getElementById("subName").value = localStorage.getItem("i");
        document.getElementById("subComp").value = localStorage.getItem("companyName");
        document.getElementById("subBn").value = localStorage.getItem("battalionName");
        // (<HTMLInputElement>document.getElementById("lvetid")).value = localStorage.getItem("termId");
        document.getElementById("subtName").value = localStorage.getItem("termName");
        document.getElementById("subrank").value = localStorage.getItem("rank");
    };
    ServiceSubjectComponent.prototype.ngAfterViewInit = function () {
        this.getObtainMarks();
    };
    ServiceSubjectComponent.prototype.goBack = function () {
        window.history.back();
    };
    ServiceSubjectComponent.prototype.getObtainMarks = function () {
        var _this = this;
        this.EDossierService.getEdServiceSubMarks(this.Id, this.resultType, this.serviceSubjectType).subscribe(function (res) {
            if (res.status == "OK") {
                var obj = res.object;
                var objTerm1 = obj.term1;
                var objTerm2 = obj.term2;
                var objTerm3 = obj.term3;
                var objTech2 = obj.tech2;
                _this.X = obj.term1;
                _this.Y = obj.term2;
                /*-----------------Term 1----------------*/
                if (_this.termId == 1 || _this.termId == 2 || _this.termId == 3) {
                    if (objTerm1 != undefined) {
                        var bmt1 = objTerm1.bmt1;
                        var bmt2 = objTerm1.bmt2;
                        var mrPrac = objTerm1.mrPrac;
                        var totalObtainedMarks = 0;
                        var totalObtainedMarks1 = 0;
                        if (bmt1 != undefined) {
                            totalObtainedMarks = totalObtainedMarks + parseInt(bmt1.finalObtainedMarks == undefined ? 0 : bmt1.finalObtainedMarks);
                            console.log("totalObtainedMarks111==>>", totalObtainedMarks, parseInt(bmt1.finalObtainedMarks));
                            totalObtainedMarks1 = totalObtainedMarks1 + parseInt(bmt1.midObtainedMarks == undefined ? 0 : bmt1.midObtainedMarks);
                            _this.termIServiceForm.patchValue({
                                midObtainedMarks: bmt1.midObtainedMarks,
                                finalObtainedMarks: bmt1.finalObtainedMarks,
                            });
                            // }else if(bmt1 == ""){
                            //   totalObtainedMarks=totalObtainedMarks;
                        }
                        if (bmt2 != undefined) {
                            totalObtainedMarks = totalObtainedMarks + parseInt(bmt2.obtainedMarks == undefined ? 0 : bmt2.obtainedMarks);
                            console.log("totalObtainedMarks222==>>", totalObtainedMarks, parseInt(bmt2.obtainedMarks));
                            _this.termIServiceForm.patchValue({
                                bmt2ObtainedMarks: bmt2.obtainedMarks,
                            });
                        }
                        if (mrPrac != undefined) {
                            totalObtainedMarks = totalObtainedMarks + parseInt(mrPrac.obtainedMarks == undefined ? 0 : mrPrac.obtainedMarks);
                            console.log("totalObtainedMarks333==>>", totalObtainedMarks);
                            console.log("totalObtainedMarks4444S==>>", parseInt(mrPrac.obtainedMarks));
                            _this.termIServiceForm.patchValue({
                                mrPracObtainedMarks: mrPrac.obtainedMarks,
                            });
                        }
                        if (bmt1 != undefined || bmt2 != undefined || mrPrac != undefined) {
                            console.log("totalObtainedMarkscheck==>>", totalObtainedMarks);
                            _this.termIServiceForm.patchValue({
                                totalObtainedMarks: totalObtainedMarks + totalObtainedMarks1,
                                totalObtainedMarks1: totalObtainedMarks1,
                            });
                            _this.x = totalObtainedMarks + totalObtainedMarks1;
                        }
                    }
                }
                /*------------TERM2------------*/
                if (_this.termId == 2 || _this.termId == 3) {
                    if (objTerm2 != undefined) {
                        var bmt1 = objTerm2.bmt1;
                        var bmt2 = objTerm2.bmt2;
                        var mrPrac = objTerm2.mrPrac;
                        var totalObtainedMarkst2 = 0;
                        var totalObtainedMarksmidt2 = 0;
                        if (bmt1 != undefined) {
                            totalObtainedMarkst2 = totalObtainedMarkst2 + parseInt(bmt1.finalObtainedMarks == undefined ? 0 : bmt1.finalObtainedMarks);
                            console.log("totalObtainedMarkst2111==>>", totalObtainedMarkst2);
                            totalObtainedMarksmidt2 = totalObtainedMarksmidt2 + parseInt(bmt1.midObtainedMarks == undefined ? 0 : bmt1.midObtainedMarks);
                            _this.termIIServiceForm.patchValue({
                                midObtainedMarks: bmt1.midObtainedMarks,
                                finalObtainedMarks: bmt1.finalObtainedMarks,
                            });
                        }
                        if (bmt2 != undefined) {
                            totalObtainedMarkst2 = totalObtainedMarkst2 + parseInt(bmt2.obtainedMarks == undefined ? 0 : bmt2.obtainedMarks);
                            console.log("totalObtainedMarkst2222==>>", totalObtainedMarkst2, parseInt(bmt2.obtainedMarks));
                            _this.termIIServiceForm.patchValue({
                                bmt2ObtainedMarks: bmt2.obtainedMarks,
                            });
                        }
                        if (mrPrac != undefined) {
                            totalObtainedMarkst2 = totalObtainedMarkst2 + parseInt(mrPrac.obtainedMarks == undefined ? 0 : mrPrac.obtainedMarks);
                            console.log("totalObtainedMarkst2333==>>", totalObtainedMarkst2);
                            _this.termIIServiceForm.patchValue({
                                mrPracObtainedMarks: mrPrac.obtainedMarks,
                            });
                        }
                        if (bmt1 != undefined || bmt2 != undefined || mrPrac != undefined) {
                            _this.termIIServiceForm.patchValue({
                                totalObtainedMarkst2: totalObtainedMarkst2 + totalObtainedMarksmidt2,
                                totalObtainedMarksmidt2: totalObtainedMarksmidt2,
                            });
                            _this.y = totalObtainedMarkst2 + totalObtainedMarksmidt2;
                        }
                    }
                }
                /*----------------TECH 2----------------*/
                if (_this.termId == 7 || _this.termId == 3) {
                    if (objTech2 != undefined) {
                        var bmt1 = objTech2.bmt1;
                        var bmt2 = objTech2.bmt2;
                        var mrPrac = objTech2.mrPrac;
                        var totalObtainedMarkst7 = 0;
                        var totalObtainedMarksmidt7 = 0;
                        if (bmt1 != undefined) {
                            totalObtainedMarkst7 = totalObtainedMarkst7 + parseInt(bmt1.finalObtainedMarks == undefined ? 0 : bmt1.finalObtainedMarks);
                            console.log("totalObtainedMarkst7111==>>", totalObtainedMarkst7);
                            totalObtainedMarksmidt7 = totalObtainedMarksmidt7 + parseInt(bmt1.midObtainedMarks == undefined ? 0 : bmt1.midObtainedMarks);
                            _this.techIIServiceForm.patchValue({
                                midObtainedMarks: bmt1.midObtainedMarks,
                                finalObtainedMarks: bmt1.finalObtainedMarks,
                            });
                        }
                        if (bmt2 != undefined) {
                            totalObtainedMarkst7 = totalObtainedMarkst7 + parseInt(bmt2.obtainedMarks == undefined ? 0 : bmt2.obtainedMarks);
                            console.log("totalObtainedMarkst7222==>>", totalObtainedMarkst7, parseInt(bmt2.obtainedMarks));
                            _this.techIIServiceForm.patchValue({
                                bmt2ObtainedMarks: bmt2.obtainedMarks,
                            });
                        }
                        if (mrPrac != undefined) {
                            totalObtainedMarkst7 = totalObtainedMarkst7 + parseInt(mrPrac.obtainedMarks == undefined ? 0 : mrPrac.obtainedMarks);
                            console.log("totalObtainedMarkst7333==>>", totalObtainedMarkst7);
                            _this.techIIServiceForm.patchValue({
                                mrPracObtainedMarks: mrPrac.obtainedMarks,
                            });
                        }
                        if (bmt1 != undefined || bmt2 != undefined || mrPrac != undefined) {
                            _this.techIIServiceForm.patchValue({
                                totalObtainedMarkst7: totalObtainedMarkst7 + totalObtainedMarksmidt7,
                                totalObtainedMarksmidt7: totalObtainedMarksmidt7,
                            });
                            _this.z = totalObtainedMarkst7 + totalObtainedMarksmidt7;
                        }
                    }
                }
                /*-------------------TERM 3---------------------*/
                if (_this.termId == 3) {
                    if (objTerm3 != undefined) {
                        var bmt1 = objTerm3.bmt1;
                        var bmt2 = objTerm3.bmt2;
                        var mrPrac = objTerm3.mrPrac;
                        var totalObtainedMarkst3 = 0;
                        var totalObtainedMarksmidt3 = 0;
                        console.log('bmt11-->', bmt1);
                        console.log('bmt22-->', bmt2);
                        console.log('mrr11-->', mrPrac);
                        if (bmt1 != undefined) {
                            totalObtainedMarkst3 = totalObtainedMarkst3 + parseInt(bmt1.finalObtainedMarks == undefined ? 0 : bmt1.finalObtainedMarks);
                            console.log("totalObtainedMarksmidt311==>>", totalObtainedMarkst3);
                            totalObtainedMarksmidt3 = totalObtainedMarksmidt3 + parseInt(bmt1.midObtainedMarks == undefined ? 0 : bmt1.midObtainedMarks);
                            _this.termIIIServiceForm.patchValue({
                                midObtainedMarks: bmt1.midObtainedMarks,
                                finalObtainedMarks: bmt1.finalObtainedMarks,
                            });
                        }
                        if (bmt2 != undefined) {
                            totalObtainedMarkst3 = totalObtainedMarkst3 + parseInt(bmt2.obtainedMarks == undefined ? 0 : bmt2.obtainedMarks);
                            console.log("totalObtainedMarkst3222==>>", totalObtainedMarkst3, parseInt(bmt2.obtainedMarks == undefined ? 0 : bmt2.obtainedMarks));
                            _this.termIIIServiceForm.patchValue({
                                bmt2ObtainedMarks: bmt2.obtainedMarks,
                            });
                        }
                        if (mrPrac != undefined) {
                            totalObtainedMarkst3 = totalObtainedMarkst3 + parseInt(mrPrac.obtainedMarks == undefined ? 0 : mrPrac.obtainedMarks);
                            console.log("totalObtainedMarkst3333==>>", totalObtainedMarkst3);
                            _this.termIIIServiceForm.patchValue({
                                mrPracObtainedMarks: mrPrac.obtainedMarks,
                            });
                        }
                        if (bmt1 != undefined || bmt2 != undefined || mrPrac != undefined) {
                            _this.termIIIServiceForm.patchValue({
                                totalObtainedMarkst3: totalObtainedMarkst3,
                                totalObtainedMarksmidt3: totalObtainedMarksmidt3,
                            });
                            _this.k = totalObtainedMarkst3;
                        }
                    }
                }
            }
        });
    };
    ServiceSubjectComponent.ctorParameters = function () { return [
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
    ServiceSubjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-service-subject',
            template: _raw_loader_service_subject_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_service_subject_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_7__["EDossierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_7__["EDossierService"]])
    ], ServiceSubjectComponent);
    return ServiceSubjectComponent;
}());



/***/ }),

/***/ "r3as":
/*!************************************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/service-subject/service-subject.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: ServiceSubjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceSubjectModule", function() { return ServiceSubjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_subject_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service-subject.component */ "cWU4");
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
        component: _service_subject_component__WEBPACK_IMPORTED_MODULE_4__["ServiceSubjectComponent"]
    },
];
var ServiceSubjectModule = /** @class */ (function () {
    function ServiceSubjectModule() {
    }
    ServiceSubjectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _service_subject_component__WEBPACK_IMPORTED_MODULE_4__["ServiceSubjectComponent"]
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
    ], ServiceSubjectModule);
    return ServiceSubjectModule;
}());



/***/ }),

/***/ "sakB":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/Overall-Assessment/service-subject/service-subject.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"mat-heading\">\r\n      <div id=\"top-bar\" class=\"\">\r\n        <h2 class=\"backbtn\"><button mat-icon-button (click)=\"goBack()\">\r\n          <mat-icon>chevron_left</mat-icon>\r\n        </button>E-Dossier <span class=\"sub-menu1\">\r\n          > Overall Assessment > SERVICE SUBJECTS (MIL SKILLS DEVP)</span></h2>\r\n    </div>\r\n    <div class=\"academics\">\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n        <div class=\"service-id mb-2 mx-1 row\">\r\n            \r\n          <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">IMA No.</label>\r\n                  <input placeholder=\"No\"  type=\"text\" disabled id=\"subServiceID\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>  \r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Rank</label>\r\n                  <input placeholder=\"Rank\"  type=\"text\" disabled id=\"subrank\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Name</label>\r\n                  <input placeholder=\"Name\"  type=\"text\" disabled id=\"subName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Term</label>\r\n                  <input placeholder=\"Term\"  type=\"text\" disabled id=\"subtName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Bn</label>\r\n                  <input placeholder=\"Bn\"  type=\"text\" disabled id=\"subBn\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Coy</label>\r\n                  <input placeholder=\"Coy\"  type=\"text\" disabled id=\"subComp\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n          </form>\r\n      </div>\r\n        <!-- <div class=\"ng-star-inserted\">\r\n          <div class=\"mat-new mb-4\">\r\n            <h4 class=\"card-heading\">SERVICE SUBJECTS (MIL SKILLS DEVP)</h4>\r\n          </div>\r\n        </div> -->\r\n        <div *ngIf=\"this.termId==1 || this.termId == 2 || this.termId == 3\">\r\n          <h3>I-Term</h3>\r\n          <table class=\"tg mb-3\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-0y56\" rowspan=\"3\">SUBJECTS</th>\r\n                <th class=\"tg-qnnc\" colspan=\"4\">I TERM</th>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">MID TERM</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">FINAL</th>\r\n  \r\n              </tr>\r\n              <tr>\r\n                <th class=\"tg-qnnc\">Max Marks</th>\r\n                <th class=\"tg-qnnc\">Marks Obtained</th>\r\n                <th class=\"tg-qnnc\">Max Marks</th>\r\n                <th class=\"tg-qnnc\">Marks Obtained</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody [formGroup]=\"termIServiceForm\">\r\n              <tr>\r\n                <td class=\"tg-c3ow\">BMT-I</td>\r\n                <td class=\"tg-c3ow\">100</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"midObtainedMarks\"></td>\r\n                <td class=\"tg-c3ow\">100</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled  class=\"form-control\" formControlName=\"finalObtainedMarks\" ></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\">BMT-II</td>\r\n                <td class=\"tg-c3ow\">NA</td>\r\n                <td class=\"tg-0pky\"></td>\r\n                <td class=\"tg-c3ow\">150</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"bmt2ObtainedMarks\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\">MR</td>\r\n                <td class=\"tg-c3ow\">NA</td>\r\n                <td class=\"tg-0pky\"></td>\r\n                <td class=\"tg-c3ow\">25</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"mrPracObtainedMarks\"></td>\r\n              </tr>\r\n  \r\n              <tr>\r\n                <td class=\"tg-c3ow\"><b>Total</b></td>\r\n                <td class=\"tg-c3ow\"  colspan=\"2\"></td>\r\n                <!-- <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"totalObtainedMarks1\"></td> -->\r\n                <td class=\"tg-c3ow\"><b>375</b></td>\r\n                <td class=\"tg-0pky\">{{this.x}}</td>\r\n                <!-- <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"totalObtainedMarks\"></td> -->\r\n  \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <!-- term II -->\r\n        <div *ngIf=\"this.termId==2 || this.termId == 3\">\r\n          <h3>II-Term</h3>\r\n\r\n          <table class=\"tg top-space mb-3\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-0y56\" rowspan=\"3\">SUBJECTS</th>\r\n                <th class=\"tg-qnnc\" colspan=\"4\">II TERM</th>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">MID TERM</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">FINAL</th>\r\n  \r\n              </tr>\r\n              <tr>\r\n                <th class=\"tg-qnnc\">Max Marks</th>\r\n                <th class=\"tg-qnnc\">Marks Obtained</th>\r\n                <th class=\"tg-qnnc\">Max Marks</th>\r\n                <th class=\"tg-qnnc\">Marks Obtained</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody [formGroup]=\"termIIServiceForm\">\r\n              <tr>\r\n                <td class=\"tg-c3ow\">BMT-I</td>\r\n                <td class=\"tg-c3ow\">100</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"midObtainedMarks\"></td>\r\n                <td class=\"tg-c3ow\">100</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"finalObtainedMarks\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\">BMT-II</td>\r\n                <td class=\"tg-c3ow\">NA</td>\r\n                <td class=\"tg-0pky\"></td>\r\n                <td class=\"tg-c3ow\">150</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"bmt2ObtainedMarks\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\">MR</td>\r\n                <td class=\"tg-c3ow\">NA</td>\r\n                <td class=\"tg-0pky\"></td>\r\n                <td class=\"tg-c3ow\">25</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"mrPracObtainedMarks\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\"><b>Total</b></td>\r\n                <td class=\"tg-c3ow\" colspan=\"2\"></td>\r\n                <td class=\"tg-c3ow\"><b>375</b></td>\r\n                <td class=\"tg-0pky\">{{this.y}}</td>\r\n              </tr>\r\n              <!-- <tr>\r\n                <td class=\"tg-c3ow\"><b>Total</b></td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" ></td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"totalObtainedMarks1\"></td>\r\n                <td class=\"tg-c3ow\"><b>375</b></td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"totalObtainedMarks\"></td>\r\n              </tr> -->\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n\r\n        <!-- tech II -->\r\n        <div *ngIf=\"X==null && Y ==null\">\r\n          <h3>II-Tech</h3>\r\n\r\n          <table class=\"tg top-space mb-3\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-0y56\" rowspan=\"3\">SUBJECTS</th>\r\n                <th class=\"tg-qnnc\" colspan=\"4\">II TECH</th>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">MID TERM</th>\r\n                <th class=\"tg-qnnc\" colspan=\"2\">FINAL</th>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"tg-qnnc\">Max Marks</th>\r\n                <th class=\"tg-qnnc\">Marks Obtained</th>\r\n                <th class=\"tg-qnnc\">Max Marks</th>\r\n                <th class=\"tg-qnnc\">Marks Obtained</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody [formGroup]=\"techIIServiceForm\">\r\n              <tr>\r\n                <td class=\"tg-c3ow\">BMT-I</td>\r\n                <td class=\"tg-c3ow\">100</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"midObtainedMarks\"></td>\r\n                <td class=\"tg-c3ow\">100</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"finalObtainedMarks\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\">BMT-II</td>\r\n                <td class=\"tg-c3ow\">NA</td>\r\n                <td class=\"tg-0pky\"></td>\r\n                <td class=\"tg-c3ow\">150</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"bmt2ObtainedMarks\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\">MR</td>\r\n                <td class=\"tg-c3ow\">NA</td>\r\n                <td class=\"tg-0pky\"></td>\r\n                <td class=\"tg-c3ow\">25</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"mrPracObtainedMarks\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\"><b>Total</b></td>\r\n                <td class=\"tg-c3ow\" colspan=\"2\">-</td>\r\n                <td class=\"tg-c3ow\"><b>375</b></td>\r\n                <td class=\"tg-0pky\">{{this.z}}</td>\r\n              </tr>\r\n              <!-- <tr>\r\n                <td class=\"tg-c3ow\"><b>Total</b></td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\"></td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"totalObtainedMarks1\"></td>\r\n                <td class=\"tg-c3ow\"><b>375</b></td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"totalObtainedMarks\"></td>\r\n              </tr> -->\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n       \r\n\r\n\r\n\r\n        <!-- term III -->\r\n        <div *ngIf=\"termId == 3\">\r\n          <h3>III-Term</h3>\r\n\r\n          <table class=\"tg top-space mb-3\" >\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-0y56\" rowspan=\"3\">SUBJECTS</th>\r\n                <th class=\"tg-qnnc\" colspan=\"4\">III TERM</th>\r\n              </tr>\r\n              <tr>\r\n                <!-- <th class=\"tg-qnnc\" colspan=\"2\">MID TERM</th> -->\r\n                <th class=\"tg-qnnc\" colspan=\"2\">FINAL</th>\r\n              </tr>\r\n              <tr>\r\n                <!-- <th class=\"tg-qnnc\">Max Marks</th> -->\r\n                <!-- <th class=\"tg-qnnc\">Marks Obtained</th> -->\r\n                <th class=\"tg-qnnc\">Max Marks</th>\r\n                <th class=\"tg-qnnc\">Marks Obtained</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody [formGroup]=\"termIIIServiceForm\">\r\n              <tr>\r\n                <td class=\"tg-c3ow\">BMT-I</td>\r\n                <td class=\"tg-c3ow\">200</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"finalObtainedMarks\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\">BMT-II</td>\r\n                <td class=\"tg-c3ow\">150</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"bmt2ObtainedMarks\"></td>\r\n\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\">MR</td>\r\n                <td class=\"tg-c3ow\">25</td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"mrPracObtainedMarks\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"tg-c3ow\"><b>Total</b></td>\r\n                <td class=\"tg-c3ow\"><b>375</b></td>\r\n                <td class=\"tg-0pky\">{{this.k}}</td>\r\n                <!-- <td class=\"tg-0pky\"><input type=\"text\" disabled class=\"form-control\" formControlName=\"totalObtainedMarks\"></td> -->\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n\r\n        <p class=\"m-4\">* OC failing in subject is liable for relegation.</p>\r\n        <!-- <div class=\"text-right\">\r\n          <button class=\"btn btn-color mt-2\">Submit</button>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ })

}]);