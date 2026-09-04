(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-record-add-record-module"],{

/***/ "4Mus":
/*!******************************************************************************!*\
  !*** ./src/app/main/admin/service-record/add-record/add-record.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecordComponent", function() { return AddRecordComponent; });
/* harmony import */ var _raw_loader_add_record_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-record.component.html */ "X+Jf");
/* harmony import */ var _add_record_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-record.component.scss */ "M8jV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddRecordComponent = /** @class */ (function () {
    function AddRecordComponent(dialog, service, cdref, spinner, localID, fb, router, route) {
        var _this = this;
        this.dialog = dialog;
        this.service = service;
        this.cdref = cdref;
        this.spinner = spinner;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.pTitle = "Add Record of Service";
        this.nationalities = [];
        this.states = [];
        this.religions = [];
        this.casts = [];
        this.bloodGroups = [];
        this.maritalStatuses = [];
        this.battalions = [];
        this.companies = [];
        this.seasonTerms = [];
        this.terms = [];
        this.currentYear = new Date().getFullYear();
        this.maxYear = this.currentYear + 4;
        this.personalDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.qualificationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.otherDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.isIndia = false;
        this.editPersonalDetails = true;
        this.isError = false;
        this.isErrQForm = false;
        this.isErrODForm = false;
        this.docArray = ['', '', '', '', '', '', ''];
        this.id = '';
        this.trueValue = true;
        this.falseValue = false;
        this.localID = localID;
        this.today = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'yyyy-MM-dd', this.localID);
        //========= CADET DETAILS FORM ========
        this.personalDetailsForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            personalNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            rankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            substantiveDate: [''],
            actingDate: [''],
            regimentCrops: [''],
            isEcCommission: [false],
            isPcSlCommission: [false],
            isPcWefCommission: [false],
            isSscCommission: [false],
            isTaCommission: [false],
            authority: [''],
            commissionDate: [''],
            substantivePromotionSeniorityDate: [''],
            firstCommissionDate: [''],
            dob: [''],
            placeOfBirth: [''],
            nationality: [''],
            religiousDenomination: [''],
            motherTongue: [''],
            medicalCategory: [''],
            previousOccupation: [''],
            accountNumber: [''],
            idCardNo: [''],
        });
        //=============== EDUCATION AND QUALIFICATION FORM ===============
        this.qualificationForm = this.fb.group({
            academicList: this.fb.array([this.getAcad()]),
            professionalList: this.fb.array([this.createProfTechQl()]),
            experienceInCivilTradeList: this.fb.array([this.createExp()]),
            formerServiceList: this.fb.array([this.createService()]),
            jcoPersonalNumber: [''],
            jcoRank: [''],
            offrPersonalNumber: [''],
            offrRank: [''],
            otherReckonableServiceDetails: [''],
            passingOutTrainingEstablishmentList: this.fb.array([this.createCommission()])
        });
        this.otherDetailsForm = this.fb.group({
            courseList: this.fb.array([this.createCourse()]),
            promotionExaminationList: this.fb.array([this.createPromotionExam()]),
            foreignlanguageList: this.fb.array([this.createForeignLanguage()]),
            indianLanguageList: this.fb.array([this.createIndianLanguage()]),
            regimentalDutyList: this.fb.array([this.createRegimentalDuties()]),
            staffEmploymentOtherRegimentalList: this.fb.array([this.createStaffEmployment()]),
            extraRegimentalEmploymentList: this.fb.array([this.createInstructional()]),
            decorationList: this.fb.array([this.createDecoration()]),
            // PERSONAL ADDRESS
            perAddLine1: [''],
            perAddLine2: [''],
            perVillage: [''],
            perTehsil: [''],
            perPostOffice: [''],
            perCity: [''],
            perDistrict: [''],
            perState: [''],
            perPinCode: [''],
            // BANKERS ADDRESS
            officerBankersName: [''],
            officerBankersAddLine1: [''],
            officerBankersAddLine2: [''],
            officerBankersVillage: [''],
            officerBankersTehsil: [''],
            officerBankersPostOffice: [''],
            officerBankersCity: [''],
            officerBankersDistrict: [''],
            officerBankersState: [''],
            officerBankersPinCode: [''],
            nextKinList: this.fb.array([this.createNextKin()]),
            whetherLocation: [''],
            isDeathCumRetirementGratuity: [''],
            isArmyGroupInsurance: [''],
            isDSOPFund: [''],
            insurancePolicyList: this.fb.array([this.createLifeInsurancePolicy()]),
            familyDetailsAList: this.fb.array([this.createFamilyDetail()]),
            familyDetailsBList: this.fb.array([this.createChildrenDetail()]),
            annualLeaveList: this.fb.array([this.createAnnualLeave()]),
            confirmationPlace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            confirmationDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            declareConfirmation: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        //get nationality
        this.service.getNationalities().subscribe(function (res) {
            // console.log(res);
            if (res.status == 'OK') {
                _this.nationalities = res.object;
                _this.cdref.detectChanges();
            }
        });
        //get religions
        this.service.getReligions().subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                _this.religions = res.object;
                _this.cdref.detectChanges();
            }
        });
        //get castes
        this.service.getCasts().subscribe(function (res) {
            // console.log(res);    
            if (res.status == "OK") {
                _this.casts = res.object;
                _this.cdref.detectChanges();
            }
        });
        //get blood groups
        this.service.getBloodGroups().subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                _this.bloodGroups = res.object;
                _this.cdref.detectChanges();
            }
        });
        //get merital statuses
        this.service.getMeritalStatuses().subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                _this.maritalStatuses = res.object;
                _this.cdref.detectChanges();
            }
        });
        //get battalions
        this.service.getBattalionList().subscribe(function (res) {
            // console.log(res);
            if (res.status == 'OK') {
                _this.battalions = res.object;
                _this.cdref.detectChanges();
            }
            else {
                // alert('Battalions not found.')
            }
        }, function (err) {
            // alert('Cannot find battalions')
        });
        //get season terms
        this.service.getSeasonTerms().subscribe(function (res) {
            if (res.status == "1") {
                _this.seasonTerms = res.List;
                _this.cdref.detectChanges();
            }
        });
        //get all terms
        this.service.getTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == "1") {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
        this.maxTodayDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'yyyy-MM-dd', this.localID);
        this.minDob = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date().setFullYear(this.currentYear - 18), 'yyyy-MM-dd', this.localID);
        this.maxDob = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date().setFullYear(this.currentYear - 28), 'yyyy-MM-dd', this.localID);
    }
    AddRecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view-record')) {
            this.pTitle = 'View Record of Service';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getRecordOfServiceById(this.id).subscribe(function (res) {
                // console.log('swapnil',res);
                if (res.status == "OK") {
                    var obj = res.object;
                    _this.personalDetailsForm.patchValue({
                        name: obj.name,
                        personalNumber: obj.personalNumber,
                        rankName: obj.rankName,
                        substantiveDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.substantiveDate, 'yyyy-MM-dd', _this.localID),
                        actingDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.actingDate, 'yyyy-MM-dd', _this.localID),
                        regimentCrops: obj.regimentCrops,
                        isEcCommission: obj.isEcCommission,
                        isPcSlCommission: obj.isPcSlCommission,
                        isPcWefCommission: obj.isPcWefCommission,
                        isSscCommission: obj.isSscCommission,
                        isTaCommission: obj.isTaCommission,
                        authority: obj.authority,
                        commissionDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.commissionDate, 'yyyy-MM-dd', _this.localID),
                        substantivePromotionSeniorityDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.substantivePromotionSeniorityDate, 'yyyy-MM-dd', _this.localID),
                        firstCommissionDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.firstCommissionDate, 'yyyy-MM-dd', _this.localID),
                        dob: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.dob, 'yyyy-MM-dd', _this.localID),
                        placeOfBirth: obj.placeOfBirth,
                        nationality: obj.nationality,
                        religiousDenomination: obj.religiousDenomination,
                        motherTongue: obj.motherTongue,
                        medicalCategory: obj.medicalCategory,
                        previousOccupation: obj.previousOccupation,
                        accountNumber: obj.accountNumber,
                        idCardNo: obj.idCardNo,
                    });
                    _this.qualificationForm.patchValue({
                        jcoPersonalNumber: obj.jcoPersonalNumber,
                        jcoRank: obj.jcoRank,
                        offrPersonalNumber: obj.offrPersonalNumber,
                        offrRank: obj.offrRank,
                        otherReckonableServiceDetails: obj.otherReckonableServiceDetails,
                    });
                    if (obj.academicList.length) {
                        _this.getAcads.clear();
                        for (var i = 0; i < obj.academicList.length; i++) {
                            _this.getAcads.push(_this.fb.group({
                                id: obj.academicList[i].id,
                                divisionClass: obj.academicList[i].divisionClass,
                                examination: obj.academicList[i].examination,
                                schoolCollege: obj.academicList[i].schoolCollege,
                                year: obj.academicList[i].year
                            }));
                        }
                        _this.qualificationForm.patchValue({
                            academicList: _this.getAcads.value
                        });
                    }
                    if (obj.professionalList.length) {
                        _this.getAllProfTechQl.clear();
                        for (var i = 0; i < obj.professionalList.length; i++) {
                            _this.getAllProfTechQl.push(_this.fb.group({
                                id: obj.professionalList[i].id,
                                qualification: obj.professionalList[i].qualification,
                                institution: obj.professionalList[i].institution,
                                year: obj.professionalList[i].year,
                                distinction: obj.professionalList[i].distinction,
                            }));
                        }
                        _this.qualificationForm.patchValue({
                            professionalList: _this.getAllProfTechQl.value
                        });
                    }
                    if (obj.experienceInCivilTradeList.length) {
                        _this.getAllExp.clear();
                        for (var i = 0; i < obj.experienceInCivilTradeList.length; i++) {
                            _this.getAllExp.push(_this.fb.group({
                                id: obj.experienceInCivilTradeList[i].id,
                                addressOfEmployer: obj.experienceInCivilTradeList[i].addressOfEmployer,
                                duration: obj.experienceInCivilTradeList[i].duration,
                                nameOfEmployer: obj.experienceInCivilTradeList[i].nameOfEmployer,
                                profession: obj.experienceInCivilTradeList[i].profession
                            }));
                        }
                        _this.qualificationForm.patchValue({
                            experienceInCivilTradeList: _this.getAllExp.value
                        });
                    }
                    if (obj.formerServiceList.length) {
                        _this.getAllService.clear();
                        // console.log(this.getAllService, 'mine')
                        // console.log(obj.formerServiceList);
                        for (var i = 0; i < obj.formerServiceList.length; i++) {
                            // alert(this.localID)
                            //alert(formatDate(obj.formerServiceList[i].dateFrom, 'yyyy-MM-dd', this.localID));
                            _this.getAllService.push(_this.fb.group({
                                id: obj.formerServiceList[i].id,
                                dateFrom: (obj.formerServiceList[i].dateFrom) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.formerServiceList[i].dateFrom, 'yyyy-MM-dd', _this.localID) : null,
                                dateTo: (obj.formerServiceList[i].dateTo) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.formerServiceList[i].dateTo, 'yyyy-MM-dd', _this.localID) : null,
                                preCommissionService: obj.formerServiceList[i].preCommissionService,
                                regtCorpsOfficeDeptt: obj.formerServiceList[i].regtCorpsOfficeDeptt,
                                totalServiceExperience: obj.formerServiceList[i].totalServiceExperience,
                                remark: obj.formerServiceList[i].remark
                            }));
                        }
                        _this.qualificationForm.patchValue({
                            formerServiceList: _this.getAllService.value
                        });
                    }
                    if (obj.passingOutTrainingEstablishmentList.length) {
                        _this.getAllCommissions.clear();
                        for (var j = 0; j < _this.getAllCommissions.length; j++) {
                            _this.getAllCommissions[j].dateFrom = null;
                        }
                        // console.log(this.getAllCommissions)
                        for (var i = 0; i < obj.passingOutTrainingEstablishmentList.length; i++) {
                            // alert(obj.passingOutTrainingEstablishmentList[i].dateFrom);
                            _this.getAllCommissions.push(_this.fb.group({
                                id: obj.passingOutTrainingEstablishmentList[i].id,
                                dateFrom: (obj.passingOutTrainingEstablishmentList[i].dateFrom) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.passingOutTrainingEstablishmentList[i].dateFrom, 'yyyy-MM-dd', _this.localID) : null,
                                dateTo: (obj.passingOutTrainingEstablishmentList[i].dateTo) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.passingOutTrainingEstablishmentList[i].dateTo, 'yyyy-MM-dd', _this.localID) : null,
                                courseNo: obj.passingOutTrainingEstablishmentList[i].courseNo,
                                trainingEstablishmentLocation: obj.passingOutTrainingEstablishmentList[i].trainingEstablishmentLocation,
                                trainingEstablishmentName: obj.passingOutTrainingEstablishmentList[i].trainingEstablishmentName
                            }));
                            // console.log(this.getAllCommissions)
                        }
                        _this.qualificationForm.patchValue({
                            passingOutTrainingEstablishmentList: _this.getAllCommissions.value
                        });
                    }
                    _this.otherDetailsForm.patchValue({
                        // PERSONAL ADDRESS
                        perAddLine1: obj.perAddLine1,
                        perAddLine2: obj.perAddLine2,
                        perVillage: obj.perVillage,
                        perTehsil: obj.perTehsil,
                        perPostOffice: obj.perPostOffice,
                        perCity: obj.perCity,
                        perDistrict: obj.perDistrict,
                        perState: obj.perState,
                        perPinCode: obj.perPinCode,
                        // BANKERS ADDRESS
                        officerBankersName: obj.officerBankersName,
                        officerBankersAddLine1: obj.officerBankersAddLine1,
                        officerBankersAddLine2: obj.officerBankersAddLine2,
                        officerBankersVillage: obj.officerBankersVillage,
                        officerBankersTehsil: obj.officerBankersTehsil,
                        officerBankersPostOffice: obj.officerBankersPostOffice,
                        officerBankersCity: obj.officerBankersCity,
                        officerBankersDistrict: obj.officerBankersDistrict,
                        officerBankersState: obj.officerBankersState,
                        officerBankersPinCode: obj.officerBankersPinCode,
                        whetherLocation: obj.whetherLocation,
                        isDeathCumRetirementGratuity: obj.isDeathCumRetirementGratuity,
                        isArmyGroupInsurance: obj.isArmyGroupInsurance,
                        isDSOPFund: obj.isDSOPFund,
                        confirmationPlace: obj.confirmationPlace,
                        confirmationDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.confirmationDate, 'yyyy-MM-dd', _this.localID),
                        declareConfirmation: obj.declareConfirmation,
                        status: obj.status,
                    });
                    if (obj.courseList.length) {
                        _this.getAllCourses.clear();
                        for (var i = 0; i < obj.courseList.length; i++) {
                            _this.getAllCourses.push(_this.fb.group({
                                id: obj.courseList[i].id,
                                courseName: obj.courseList[i].courseName,
                                dateFrom: (obj.courseList[i].dateFrom) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.courseList[i].dateFrom, 'yyyy-MM-dd', _this.localID) : null,
                                dateTo: (obj.courseList[i].dateTo) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.courseList[i].dateTo, 'yyyy-MM-dd', _this.localID) : null,
                                institution: obj.courseList[i].institution,
                                location: obj.courseList[i].location,
                                gradingObtained: obj.courseList[i].gradingObtained,
                            }));
                        }
                        _this.otherDetailsForm.patchValue({
                            courseList: _this.getAllCourses.value
                        });
                    }
                    if (obj.promotionExaminationList.length) {
                        _this.getAllPromotionExams.clear();
                        for (var i = 0; i < obj.promotionExaminationList.length; i++) {
                            _this.getAllPromotionExams.push(_this.fb.group({
                                id: obj.promotionExaminationList[i].id,
                                exam: obj.promotionExaminationList[i].exam,
                                cleared: obj.promotionExaminationList[i].cleared,
                                attempts: obj.promotionExaminationList[i].attempts,
                                auth: obj.promotionExaminationList[i].auth,
                            }));
                        }
                        _this.otherDetailsForm.patchValue({
                            promotionExaminationList: _this.getAllPromotionExams.value
                        });
                    }
                    if (obj.foreignlanguageList.length) {
                        _this.getAllForeignLanguages.clear();
                        for (var i = 0; i < obj.foreignlanguageList.length; i++) {
                            _this.getAllForeignLanguages.push(_this.fb.group({
                                id: obj.foreignlanguageList[i].id,
                                language: obj.foreignlanguageList[i].language,
                                examinationPassed: obj.foreignlanguageList[i].examinationPassed,
                                examinationDate: (obj.foreignlanguageList[i].examinationDate) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.foreignlanguageList[i].examinationDate, 'yyyy-MM-dd', _this.localID) : null,
                                canRead: obj.foreignlanguageList[i].canRead,
                                canWrite: obj.foreignlanguageList[i].canWrite,
                                canSpeak: obj.foreignlanguageList[i].canSpeak,
                            }));
                        }
                        _this.otherDetailsForm.patchValue({
                            foreignlanguageList: _this.getAllForeignLanguages.value
                        });
                    }
                    if (obj.indianLanguageList.length) {
                        _this.getAllIndianLanguages.clear();
                        for (var i = 0; i < obj.indianLanguageList.length; i++) {
                            _this.getAllIndianLanguages.push(_this.fb.group({
                                id: obj.indianLanguageList[i].id,
                                language: obj.indianLanguageList[i].language,
                                examinationPassed: obj.indianLanguageList[i].examinationPassed,
                                examinationDate: (obj.indianLanguageList[i].examinationDate) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.indianLanguageList[i].examinationDate, 'yyyy-MM-dd', _this.localID) : null,
                                canRead: obj.indianLanguageList[i].canRead,
                                canWrite: obj.indianLanguageList[i].canWrite,
                                canSpeak: obj.indianLanguageList[i].canSpeak,
                            }));
                        }
                        _this.otherDetailsForm.patchValue({
                            indianLanguageList: _this.getAllIndianLanguages.value
                        });
                    }
                    if (obj.regimentalDutyList.length) {
                        _this.getAllRegimentalDuties.clear();
                        for (var i = 0; i < obj.regimentalDutyList.length; i++) {
                            _this.getAllRegimentalDuties.push(_this.fb.group({
                                id: obj.regimentalDutyList[i].id,
                                unit: obj.regimentalDutyList[i].unit,
                                appt: obj.regimentalDutyList[i].appt,
                                place: obj.regimentalDutyList[i].place,
                                dateFrom: (obj.regimentalDutyList[i].dateFrom) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.regimentalDutyList[i].dateFrom, 'yyyy-MM-dd', _this.localID) : null,
                                dateTo: (obj.regimentalDutyList[i].dateTo) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.regimentalDutyList[i].dateTo, 'yyyy-MM-dd', _this.localID) : null,
                                totalDays: obj.regimentalDutyList[i].totalDays,
                            }));
                        }
                        _this.otherDetailsForm.patchValue({
                            regimentalDutyList: _this.getAllRegimentalDuties.value
                        });
                    }
                    if (obj.staffEmploymentOtherRegimentalList.length) {
                        _this.getAllStaffEmployment.clear();
                        for (var i = 0; i < obj.staffEmploymentOtherRegimentalList.length; i++) {
                            _this.getAllStaffEmployment.push(_this.fb.group({
                                id: obj.staffEmploymentOtherRegimentalList[i].id,
                                unit: obj.staffEmploymentOtherRegimentalList[i].unit,
                                appointment: obj.staffEmploymentOtherRegimentalList[i].appointment,
                                place: obj.staffEmploymentOtherRegimentalList[i].place,
                                dateFrom: (obj.staffEmploymentOtherRegimentalList[i].dateFrom) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.staffEmploymentOtherRegimentalList[i].dateFrom, 'yyyy-MM-dd', _this.localID) : null,
                                dateTo: (obj.staffEmploymentOtherRegimentalList[i].dateTo) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.staffEmploymentOtherRegimentalList[i].dateTo, 'yyyy-MM-dd', _this.localID) : null,
                                totalDays: obj.staffEmploymentOtherRegimentalList[i].totalDays,
                            }));
                        }
                        _this.otherDetailsForm.patchValue({
                            staffEmploymentOtherRegimentalList: _this.getAllStaffEmployment.value
                        });
                    }
                    if (obj.extraRegimentalEmploymentList.length) {
                        _this.getAllInstructionals.clear();
                        for (var i = 0; i < obj.extraRegimentalEmploymentList.length; i++) {
                            _this.getAllInstructionals.push(_this.fb.group({
                                id: obj.extraRegimentalEmploymentList[i].id,
                                unit: obj.extraRegimentalEmploymentList[i].unit,
                                appointment: obj.extraRegimentalEmploymentList[i].appointment,
                                place: obj.extraRegimentalEmploymentList[i].place,
                                dateFrom: (obj.extraRegimentalEmploymentList[i].dateFrom) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.extraRegimentalEmploymentList[i].dateFrom, 'yyyy-MM-dd', _this.localID) : null,
                                dateTo: (obj.extraRegimentalEmploymentList[i].dateTo) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.extraRegimentalEmploymentList[i].dateTo, 'yyyy-MM-dd', _this.localID) : null,
                                totalDays: obj.extraRegimentalEmploymentList[i].totalDays
                            }));
                        }
                        _this.otherDetailsForm.patchValue({
                            extraRegimentalEmploymentList: _this.getAllInstructionals.value
                        });
                    }
                    if (obj.decorationList.length) {
                        _this.getAllDecorations.clear();
                        for (var i = 0; i < obj.decorationList.length; i++) {
                            _this.getAllDecorations.push(_this.fb.group({
                                id: obj.decorationList[i].id,
                                decorations: obj.decorationList[i].decorations,
                                servingUnit: obj.decorationList[i].servingUnit,
                                authority: obj.decorationList[i].authority,
                            }));
                        }
                        _this.otherDetailsForm.patchValue({
                            decorationList: _this.getAllDecorations.value
                        });
                    }
                    if (obj.nextKinList.length) {
                        _this.getAllNextKins.clear();
                        for (var i = 0; i < obj.nextKinList.length; i++) {
                            _this.getAllNextKins.push(_this.fb.group({
                                id: obj.nextKinList[i].id,
                                name: obj.nextKinList[i].name,
                                relationship: obj.nextKinList[i].relationship,
                                address: obj.nextKinList[i].address,
                            }));
                        }
                        _this.otherDetailsForm.patchValue({
                            nextKinList: _this.getAllNextKins.value
                        });
                    }
                    if (obj.insurancePolicyList.length) {
                        _this.getAllLifeInsurancePolicies.clear();
                        for (var i = 0; i < obj.insurancePolicyList.length; i++) {
                            _this.getAllLifeInsurancePolicies.push(_this.fb.group({
                                id: obj.insurancePolicyList[i].id,
                                policyNo: obj.insurancePolicyList[i].policyNo,
                                sumAssured: obj.insurancePolicyList[i].sumAssured,
                                assigned: obj.insurancePolicyList[i].assigned,
                                paymentMode: obj.insurancePolicyList[i].paymentMode,
                            }));
                        }
                        _this.otherDetailsForm.patchValue({
                            insurancePolicyList: _this.getAllLifeInsurancePolicies.value
                        });
                    }
                    if (obj.familyDetailsAList.length) {
                        _this.getAllFamilyDetails.clear();
                        for (var i = 0; i < obj.familyDetailsAList.length; i++) {
                            _this.getAllFamilyDetails.push(_this.fb.group({
                                id: obj.familyDetailsAList[i].id,
                                marriageDate: (obj.familyDetailsAList[i].marriageDate) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.familyDetailsAList[i].marriageDate, 'yyyy-MM-dd', _this.localID) : null,
                                marriagePlace: obj.familyDetailsAList[i].marriagePlace,
                                law: obj.familyDetailsAList[i].law,
                                toWhom: obj.familyDetailsAList[i].toWhom,
                                spouseNationality: obj.familyDetailsAList[i].spouseNationality,
                                authority: obj.familyDetailsAList[i].authority
                            }));
                        }
                        _this.otherDetailsForm.patchValue({
                            familyDetailsAList: _this.getAllFamilyDetails.value
                        });
                    }
                    if (obj.familyDetailsBList.length) {
                        _this.getAllChildrenDetails.clear();
                        for (var i = 0; i < obj.familyDetailsBList.length; i++) {
                            _this.getAllChildrenDetails.push(_this.fb.group({
                                id: obj.familyDetailsBList[i].id,
                                name: obj.familyDetailsBList[i].name,
                                gender: obj.familyDetailsBList[i].gender,
                                dob: (obj.familyDetailsBList[i].dob) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.familyDetailsBList[i].dob, 'yyyy-MM-dd', _this.localID) : null,
                                birthPlace: obj.familyDetailsBList[i].birthPlace,
                                authority: obj.familyDetailsBList[i].authority
                            }));
                        }
                        _this.otherDetailsForm.patchValue({
                            familyDetailsBList: _this.getAllChildrenDetails.value
                        });
                    }
                    if (obj.annualLeaveList.length) {
                        _this.getAllAnnualLeaves.clear();
                        for (var i = 0; i < obj.annualLeaveList.length; i++) {
                            _this.getAllAnnualLeaves.push(_this.fb.group({
                                id: obj.annualLeaveList[i].id,
                                unit: obj.annualLeaveList[i].unit,
                                dateFrom: (obj.annualLeaveList[i].dateFrom) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.annualLeaveList[i].dateFrom, 'yyyy-MM-dd', _this.localID) : null,
                                dateTo: (obj.annualLeaveList[i].dateTo) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(obj.annualLeaveList[i].dateTo, 'yyyy-MM-dd', _this.localID) : null,
                                remarks: obj.annualLeaveList[i].remarks
                            }));
                        }
                        _this.otherDetailsForm.patchValue({
                            annualLeaveList: _this.getAllAnnualLeaves.value
                        });
                    }
                }
            });
        }
    };
    /**========FOR QUALIFICATIONS========= */
    //----------ACADEMIC DETAILS------------
    AddRecordComponent.prototype.getAcad = function () {
        return this.fb.group({
            divisionClass: [''],
            examination: [''],
            schoolCollege: [''],
            year: ['']
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAcads", {
        get: function () {
            return this.qualificationForm.get('academicList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addAcad = function () {
        this.getAcads.push(this.getAcad());
        // console.log(this.getAcads)
    };
    AddRecordComponent.prototype.removeAAcad = function (i) {
        this.getAcads.removeAt(i);
    };
    //-----------------------------------
    //----------PROFESSIONAL/TECHNICAL----------
    AddRecordComponent.prototype.createProfTechQl = function () {
        return this.fb.group({
            qualification: [''],
            institution: [''],
            year: [''],
            distinction: [''],
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllProfTechQl", {
        get: function () {
            return this.qualificationForm.get('professionalList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addProfTechQl = function () {
        this.getAllProfTechQl.push(this.createProfTechQl());
    };
    AddRecordComponent.prototype.removeProfTechQl = function (i) {
        this.getAllProfTechQl.removeAt(i);
    };
    //------------------------------------------
    //--------EXPERIENCE IN CIVIL TRADDE--------
    AddRecordComponent.prototype.createExp = function () {
        return this.fb.group({
            addressOfEmployer: [''],
            duration: [''],
            nameOfEmployer: [''],
            profession: ['']
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllExp", {
        get: function () {
            return this.qualificationForm.get('experienceInCivilTradeList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addExp = function () {
        this.getAllExp.push(this.createExp());
    };
    AddRecordComponent.prototype.removeExp = function (i) {
        this.getAllExp.removeAt(i);
    };
    //------------------------------------------
    //-------- PARTICULARS OF FORMER SERVICE ------
    AddRecordComponent.prototype.createService = function () {
        return this.fb.group({
            dateFrom: [''],
            dateTo: [''],
            preCommissionService: [''],
            regtCorpsOfficeDeptt: [''],
            totalServiceExperience: [''],
            remark: ['']
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllService", {
        get: function () {
            return this.qualificationForm.get('formerServiceList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addService = function () {
        this.getAllService.push(this.createService());
    };
    AddRecordComponent.prototype.removeService = function (i) {
        this.getAllService.removeAt(i);
    };
    //-----------------------------------------
    //----------commisioned after passing out from NDA/IMA/OTS-------------------
    AddRecordComponent.prototype.createCommission = function () {
        return this.fb.group({
            dateFrom: [''],
            dateTo: [''],
            courseNo: [''],
            trainingEstablishmentLocation: [''],
            trainingEstablishmentName: ['']
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllCommissions", {
        get: function () {
            //alert(this.qualificationForm.get('passingOutTrainingEstablishmentList') as FormArray);
            return this.qualificationForm.get('passingOutTrainingEstablishmentList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addCommission = function () {
        this.getAllCommissions.push(this.createCommission());
    };
    AddRecordComponent.prototype.removeCommission = function (i) {
        this.getAllCommissions.removeAt(i);
    };
    //--------------------------------
    //--------------COURSES-----------
    AddRecordComponent.prototype.createCourse = function () {
        return this.fb.group({
            courseName: [''],
            dateFrom: [''],
            dateTo: [''],
            institution: [''],
            location: [''],
            gradingObtained: [''],
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllCourses", {
        get: function () {
            return this.otherDetailsForm.get('courseList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addCourse = function () {
        this.getAllCourses.push(this.createCourse());
    };
    AddRecordComponent.prototype.removeCourse = function (i) {
        this.getAllCourses.removeAt(i);
    };
    //--------------------------------
    //---------PROMOTION EXAM---------
    AddRecordComponent.prototype.createPromotionExam = function () {
        return this.fb.group({
            exam: [''],
            cleared: [''],
            attempts: [''],
            auth: [''],
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllPromotionExams", {
        get: function () {
            return this.otherDetailsForm.get('promotionExaminationList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addPromotionExam = function () {
        this.getAllPromotionExams.push(this.createPromotionExam());
    };
    AddRecordComponent.prototype.removePromotionExam = function (i) {
        this.getAllPromotionExams.removeAt(i);
    };
    //--------------------------------
    //----------FOREIGN LANGUAGES----------
    AddRecordComponent.prototype.createForeignLanguage = function () {
        return this.fb.group({
            language: [''],
            examinationPassed: [''],
            examinationDate: [''],
            canRead: [''],
            canWrite: [''],
            canSpeak: [''],
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllForeignLanguages", {
        get: function () {
            return this.otherDetailsForm.get('foreignlanguageList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addForeignLanguage = function () {
        this.getAllForeignLanguages.push(this.createForeignLanguage());
    };
    AddRecordComponent.prototype.removeForeignLanguage = function (i) {
        this.getAllForeignLanguages.removeAt(i);
    };
    //------------------------------------
    //----------INDIAN LANGUAGES----------
    AddRecordComponent.prototype.createIndianLanguage = function () {
        return this.fb.group({
            language: [''],
            examinationPassed: [''],
            examinationDate: [''],
            canRead: [false],
            canSpeak: [false],
            canWrite: [false],
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllIndianLanguages", {
        get: function () {
            return this.otherDetailsForm.get('indianLanguageList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addIndianLanguage = function () {
        this.getAllIndianLanguages.push(this.createIndianLanguage());
    };
    AddRecordComponent.prototype.removeIndianLanguage = function (i) {
        this.getAllIndianLanguages.removeAt(i);
    };
    //------------------------------------
    //----------REGIMENTAL DUTIES----------
    AddRecordComponent.prototype.createRegimentalDuties = function () {
        return this.fb.group({
            unit: [''],
            appt: [''],
            place: [''],
            dateFrom: [''],
            dateTo: [''],
            totalDays: [''],
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllRegimentalDuties", {
        get: function () {
            return this.otherDetailsForm.get('regimentalDutyList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addRegimentalDuties = function () {
        this.getAllRegimentalDuties.push(this.createRegimentalDuties());
    };
    AddRecordComponent.prototype.removeRegimentalDuties = function (i) {
        this.getAllRegimentalDuties.removeAt(i);
    };
    //------------------------------------
    //----------Staff employment other than regimental----------
    AddRecordComponent.prototype.createStaffEmployment = function () {
        return this.fb.group({
            unit: [''],
            appointment: [''],
            place: [''],
            dateFrom: [''],
            dateTo: [''],
            totalDays: [''],
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllStaffEmployment", {
        get: function () {
            return this.otherDetailsForm.get('staffEmploymentOtherRegimentalList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addStaffEmployment = function () {
        this.getAllStaffEmployment.push(this.createStaffEmployment());
    };
    AddRecordComponent.prototype.removeStaffEmployment = function (i) {
        this.getAllStaffEmployment.removeAt(i);
    };
    //------------------------------------
    //----------Instructional and Extra Regimental Employment----------
    AddRecordComponent.prototype.createInstructional = function () {
        return this.fb.group({
            unit: [''],
            appointment: [''],
            place: [''],
            dateFrom: [''],
            dateTo: [''],
            totalDays: [''],
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllInstructionals", {
        get: function () {
            return this.otherDetailsForm.get('extraRegimentalEmploymentList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addInstructional = function () {
        this.getAllInstructionals.push(this.createInstructional());
    };
    AddRecordComponent.prototype.removeInstructional = function (i) {
        this.getAllInstructionals.removeAt(i);
    };
    //------------------------------------
    //----------Decorations, Campaign Stars and Medals----------
    AddRecordComponent.prototype.createDecoration = function () {
        return this.fb.group({
            decorations: [''],
            servingUnit: [''],
            authority: [''],
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllDecorations", {
        get: function () {
            return this.otherDetailsForm.get('decorationList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addDecoration = function () {
        this.getAllDecorations.push(this.createDecoration());
    };
    AddRecordComponent.prototype.removeDecoration = function (i) {
        this.getAllDecorations.removeAt(i);
    };
    //------------------------------------
    //----------NEXT OF KIN----------
    AddRecordComponent.prototype.createNextKin = function () {
        return this.fb.group({
            name: [''],
            relationship: [''],
            address: [''],
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllNextKins", {
        get: function () {
            return this.otherDetailsForm.get('nextKinList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addNextKin = function () {
        this.getAllNextKins.push(this.createNextKin());
    };
    AddRecordComponent.prototype.removeNextKin = function (i) {
        this.getAllNextKins.removeAt(i);
    };
    //------------------------------------
    AddRecordComponent.prototype.createLifeInsurancePolicy = function () {
        return this.fb.group({
            policyNo: [''],
            sumAssured: [''],
            assigned: [''],
            paymentMode: ['']
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllLifeInsurancePolicies", {
        get: function () {
            return this.otherDetailsForm.get('insurancePolicyList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addLifeInsurancePolicy = function () {
        this.getAllLifeInsurancePolicies.push(this.createLifeInsurancePolicy());
    };
    AddRecordComponent.prototype.removeLifeInsurancePolicy = function (i) {
        this.getAllLifeInsurancePolicies.removeAt(i);
    };
    //------------------------------------
    //----------FAMILY DETAILS----------
    AddRecordComponent.prototype.createFamilyDetail = function () {
        return this.fb.group({
            marriageDate: [''],
            marriagePlace: [''],
            law: [''],
            toWhom: [''],
            spouseNationality: [''],
            authority: ['']
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllFamilyDetails", {
        get: function () {
            return this.otherDetailsForm.get('familyDetailsAList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addFamilyDetail = function () {
        this.getAllFamilyDetails.push(this.createFamilyDetail());
    };
    AddRecordComponent.prototype.removeFamilyDetail = function (i) {
        this.getAllFamilyDetails.removeAt(i);
    };
    //------------------------------------
    //----------CHILDREN DETAILS----------
    AddRecordComponent.prototype.createChildrenDetail = function () {
        return this.fb.group({
            name: [''],
            gender: [''],
            dob: [''],
            birthPlace: [''],
            authority: ['']
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllChildrenDetails", {
        get: function () {
            return this.otherDetailsForm.get('familyDetailsBList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addChildrenDetail = function () {
        this.getAllChildrenDetails.push(this.createChildrenDetail());
    };
    AddRecordComponent.prototype.removeChildrenDetail = function (i) {
        this.getAllChildrenDetails.removeAt(i);
    };
    //------------------------------------
    //----------ANNUAL LEAVE DETAILS----------
    AddRecordComponent.prototype.createAnnualLeave = function () {
        return this.fb.group({
            unit: [''],
            dateFrom: [''],
            dateTo: [''],
            remarks: ['']
        });
    };
    Object.defineProperty(AddRecordComponent.prototype, "getAllAnnualLeaves", {
        get: function () {
            return this.otherDetailsForm.get('annualLeaveList');
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.addAnnualLeave = function () {
        this.getAllAnnualLeaves.push(this.createAnnualLeave());
    };
    AddRecordComponent.prototype.removeAnnualLeave = function (i) {
        this.getAllAnnualLeaves.removeAt(i);
    };
    //------------------------------------
    /**=================================== */
    // noImg(e: any): void {
    //   e.target.src = "assets/img/default_cadet_img.jpg"
    // }
    // noDocImg(e: any): void {
    //   e.target.src = "assets/img/default-doc-image.jpg"
    // }
    AddRecordComponent.prototype.noKeyInput = function () {
        return false;
    };
    AddRecordComponent.prototype.onlyNum = function (event) {
        var pattern = /^[0-9]*\.?\d{0,2}$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    Object.defineProperty(AddRecordComponent.prototype, "b", {
        get: function () {
            return this.personalDetailsForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddRecordComponent.prototype, "ef", {
        get: function () {
            return this.qualificationForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddRecordComponent.prototype, "of", {
        get: function () {
            return this.otherDetailsForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddRecordComponent.prototype.submitPersonalForm = function () {
        // console.log(this.personalDetailsForm);
        this.spinner.show();
        // if (this.personalDetailsForm.invalid ||  !this.b['isPcWefCommission'].value 
        // && !this.b['isPcSlCommission'].value
        // && !this.b['isSscCommission'].value
        // && !this.b['isEcCommission'].value
        // && !this.b['isTaCommission'].value ) 
        if (this.personalDetailsForm.invalid) {
            this.isError = true;
            this.spinner.hide();
            this.service.openSnackbar("Please Fill All the Required Fields.");
        }
        else {
            this.spinner.hide();
            this.stepper.next();
        }
    };
    AddRecordComponent.prototype.submitQualificationForm = function () {
        this.spinner.show();
        if (this.qualificationForm.invalid) {
            this.isErrQForm = true;
            this.spinner.hide();
            this.service.openSnackbar("Please Fill All the Required Fields.");
        }
        else {
            this.spinner.hide();
            this.stepper.next();
        }
    };
    AddRecordComponent.prototype.addRecordOfService = function () {
        var _this = this;
        this.spinner.show();
        // if (this.personalDetailsForm.invalid || this.qualificationForm.invalid || this.otherDetailsForm.invalid || !this.b['isPcWefCommission'].value
        //   && !this.b['isPcSlCommission'].value
        //   && !this.b['isSscCommission'].value
        //   && !this.b['isEcCommission'].value
        //   && !this.b['isTaCommission'].value)
        if (this.personalDetailsForm.invalid || this.qualificationForm.invalid
            || this.otherDetailsForm.invalid) {
            this.spinner.hide();
            this.isErrODForm = true;
            this.service.openSnackbar("Please Field All the Required Fields.");
        }
        else {
            this.service.addRecordOfService(this.personalDetailsForm.value, this.qualificationForm.value, this.otherDetailsForm.value).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            });
        }
    };
    AddRecordComponent.prototype.updateRecordOfService = function () {
        var _this = this;
        this.spinner.show();
        if (this.personalDetailsForm.invalid || this.qualificationForm.invalid || this.otherDetailsForm.invalid) {
            this.spinner.hide();
            this.isErrODForm = true;
            this.service.openSnackbar("Please Field All the Required Fields.");
        }
        else {
            this.service.updateRecordOfService(this.id, this.personalDetailsForm.value, this.qualificationForm.value, this.otherDetailsForm.value).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            });
        }
    };
    AddRecordComponent.prototype.apiRes = function (res) {
        if (res.status == "OK") {
            this.service.openSnackbar(res.message);
            this.goBack();
        }
        else {
            this.service.openSnackbar(res.message);
        }
    };
    AddRecordComponent.prototype.goBack = function () {
        var arr = this.router.url.split('/');
        var navigateUrl = '';
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i]) {
                navigateUrl = navigateUrl + ("/" + arr[i]);
            }
        }
        this.router.navigate([navigateUrl]);
    };
    AddRecordComponent.prototype.openImg = function (img) {
        // console.log(img);
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'img', title: '', url: img
            }
        });
    };
    AddRecordComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    AddRecordComponent.propDecorators = {
        stepper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['stepper', { static: true },] }]
    };
    AddRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-record',
            template: _raw_loader_add_record_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_record_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], String, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], AddRecordComponent);
    return AddRecordComponent;
}());



/***/ }),

/***/ "6iTL":
/*!***************************************************************************!*\
  !*** ./src/app/main/admin/service-record/add-record/add-record.module.ts ***!
  \***************************************************************************/
/*! exports provided: AddRecordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecordModule", function() { return AddRecordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_record_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-record.component */ "4Mus");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { MatStepperModule } from '@angular/material/stepper';
var routes = [
    {
        path: '',
        component: _add_record_component__WEBPACK_IMPORTED_MODULE_4__["AddRecordComponent"]
    },
];
var AddRecordModule = /** @class */ (function () {
    function AddRecordModule() {
    }
    AddRecordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_record_component__WEBPACK_IMPORTED_MODULE_4__["AddRecordComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddRecordModule);
    return AddRecordModule;
}());



/***/ }),

/***/ "M8jV":
/*!********************************************************************************!*\
  !*** ./src/app/main/admin/service-record/add-record/add-record.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.invalid-input {\n  color: #f10606;\n}\n.image {\n  width: 170px;\n  height: 250px;\n  background-color: #f0f0f0;\n  margin-left: 15px;\n}\n.img-btn {\n  background-color: #cecccc;\n  margin: 10px 0px 0px 60px;\n}\n.doc-btn {\n  background-color: #cecccc;\n}\n.img-div {\n  width: 100%;\n  height: 140px;\n}\n.image .img-div img {\n  position: relative;\n  margin: 10px 0px 0px 10px;\n}\n.doc-img {\n  width: 180px;\n  height: 200px;\n}\n.row.border.acc_doc h3 {\n  font-size: 16px;\n  color: #721a0c;\n  letter-spacing: 0;\n  margin: 0px;\n}\n.edi_btn {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  margin-bottom: 10px;\n  background: #eee;\n  width: 100%;\n}\n.img-div img {\n  border: 1px solid #721a0c;\n  box-shadow: 1px 1px 1px #c3b7b7;\n  height: 100%;\n  border-bottom: 0 !important;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.img-btn {\n  font-size: 30px;\n  color: #fff;\n  border: 1px solid #721a0c;\n  WIDTH: 100%;\n  margin-left: 0px;\n  border-radius: 0px;\n  background: #c09450;\n  height: 37px;\n  line-height: 30px;\n  margin-top: 0px;\n}\n.edi {\n  background: #4c5041;\n  height: 30px !important;\n  width: 30px !important;\n  color: #fff;\n}\n.act-btns {\n  display: flex;\n  align-items: center;\n}\n.edi mat-icon {\n  /* font-size: 17px; */\n  line-height: 30px !important;\n  position: relative;\n  top: -6px;\n  font-size: 17px;\n}\n.clo {\n  background: #721a0c;\n  height: 30px !important;\n  width: 30px !important;\n  color: #fff;\n}\n.clo mat-icon {\n  /* font-size: 17px; */\n  line-height: 30px !important;\n  position: relative;\n  top: -6px;\n  font-size: 17px;\n}\n.act-btns button {\n  margin-right: 5px;\n}\n.edi:focus {\n  outline: 0;\n}\n.clo:focus {\n  outline: 0;\n}\n.row.border.acc_doc {\n  margin: 15px 0px;\n  padding-bottom: 15px;\n}\nbutton.mat-focus-indicator.upt_dne.mat-raised-button.mat-button-base {\n  float: right;\n}\n.cmn span {\n  margin: 0px 4px 0;\n}\n.inner-section {\n  padding: 15px;\n  background: #fafafa;\n  box-shadow: 1px ​1px 4px #ccc;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  margin-bottom: 15px;\n}\n.kin {\n  display: flex;\n}\n.inner-new1 {\n  padding: 15px 0;\n  background: #fafafa;\n  box-shadow: 1px ​1px 4px #ccc;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.mat-expansion-panel-body {\n  border-top: 1px solid #eee;\n  padding: 15px;\n}\nmat-expansion-panel.mat-expansion-panel {\n  width: 100% !important;\n}\n.col-md-3.diimage p {\n  text-transform: capitalize;\n  font-weight: 600;\n  font-size: 13px;\n  text-align: center;\n  margin: 10px 0px;\n  color: #9c9b9b !important;\n}\nth, td {\n  border: 1px solid #ccc;\n}\n.doc-btn {\n  background-color: transparent;\n  width: 125px;\n  height: 125px;\n  border-radius: 0px;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  box-shadow: 1px 1px 2px #ccc;\n  z-index: 99;\n  position: relative;\n  color: #721a0c;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n.my-addd {\n  background: rgba(204, 204, 204, 0.7);\n  width: 30px;\n  height: 30px !important;\n  line-height: 30px !important;\n  border-radius: 50%;\n}\n.doc-img {\n  width: 125px;\n  height: 125px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ntr.docs-sec td {\n  width: 16%;\n  position: relative;\n  padding: 2px !important;\n}\n.doc-img img {\n  height: 100% !important;\n  box-shadow: 1px 1px 2px #ccc;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n}\n.edi_btn h3 {\n  font-size: 16px;\n  color: #721a0c;\n  letter-spacing: 0;\n  margin: 0px;\n}\n.back_nxt {\n  margin: 15px 0px;\n}\n.cancel_img {\n  position: absolute;\n  margin-top: -5px;\n  z-index: 9999;\n  margin-left: 0px;\n  color: #fff;\n  cursor: pointer;\n  background: #721a0c;\n  border-radius: 35px;\n  font-size: 16px;\n  width: 20px;\n  border: 1px solid #dadada;\n  height: 20px;\n  text-align: center;\n  line-height: 18px;\n}\np.onew {\n  height: 46px;\n  background: #eeeeee;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  justify-content: center;\n  color: #4c5041;\n  font-size: 13px;\n  font-weight: 600;\n}\n.border1.acc_doc {\n  border: 1px solid #ccc;\n  margin: 15px 0;\n}\n.iner-cg {\n  padding: 15px;\n}\n.diimage p {\n  font-size: 12px !important;\n  color: #a8a1a1;\n  text-align: center;\n  margin-top: 10px;\n}\n.chk-input span {\n  width: 100px;\n  display: flex;\n  align-items: baseline;\n}\n.chk-input span {\n  width: auto;\n  display: flex;\n  background: #eee;\n  margin-right: 10px;\n  padding: 7px 10px 7px;\n  border-radius: 4px;\n}\n.chk-input p {\n  margin: 0;\n}\n.chk-input {\n  display: flex;\n}\n.chk-input p {\n  margin-left: 5px;\n}\n.inner-section h4 {\n  font-size: 14px;\n  color: #333;\n  font-weight: 600;\n}\n.nany {\n  display: flex;\n  width: 100%;\n}\n.chk-input-new {\n  display: flex;\n}\n.chk-input-new span {\n  padding: 0px 6px !important;\n  display: flex;\n  align-items: baseline;\n  height: 30px;\n  justify-content: center;\n  margin: 0px 4px;\n  background: #eee;\n  border-radius: 2px;\n  line-height: 30px;\n}\n.chk-input-new p {\n  margin: 0 0 0 5px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.add-btn.cus-btn {\n  width: 40px;\n  height: 40px;\n  background: #4c5041;\n  float: right;\n  margin: 0px 3px 0 0;\n}\n.cus-btn mat-icon {\n  color: #fff;\n}\n.remove-btn {\n  width: 40px;\n  height: 40px;\n  background: #721a0c;\n  bottom: 0px;\n  margin: 0px;\n}\n.remove-btn mat-icon {\n  color: #fff;\n}\n.remove-btn-td {\n  width: 76px;\n  margin: 0px;\n  border: none;\n  text-align: center;\n}\n.remove-btn-td button {\n  margin: 0;\n}\n.ading-bhn {\n  padding: 15px;\n}\n.chk-input-new {\n  display: flex;\n}\n.chk-input-new span {\n  padding: 0px 6px !important;\n  display: flex;\n  align-items: baseline;\n  height: 30px;\n  justify-content: center;\n  margin: 0px 4px;\n  background: #eee;\n  border-radius: 2px;\n  line-height: 30px;\n}\n.chk-input-new span p {\n  font-size: 13px;\n  letter-spacing: 0;\n  padding-left: 2px;\n}\n.chk-input-new span input {\n  position: relative;\n  top: 2px;\n}\n.y-n-tbl-td-lbl {\n  border: none;\n  width: 400px;\n}\n.y-n-tbl-td-opt {\n  border: none;\n  width: 30px;\n}\n.mat-icon-button:disabled {\n  background-color: #9c9b9b;\n}");

/***/ }),

/***/ "X+Jf":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/service-record/add-record/add-record.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button>\r\n        Record of Service <span class=\"sub-menu1\"> > {{pTitle}} </span> <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n\r\n\r\n\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n\r\n        <mat-horizontal-stepper #stepper linear>\r\n            <mat-step label=\"Personal Information\" [stepControl]=\"personalDetailsForm\">\r\n\r\n                <form [formGroup]=\"personalDetailsForm\">\r\n                    <div class=\"row border acc_doc \">\r\n\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Personal and Service Detail of Particulars Officers </h3>\r\n\r\n                            <!-- \r\n                            <div class=\"act-btns\" *ngIf=\"id\">\r\n                                <button mat-icon-button class=\"edi\" *ngIf=\"!editPersonalDetails\" (click)=\"editPersonalDetails = true\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"clo\" *ngIf=\"editPersonalDetails\" (click)=\"editPersonalDetails = false\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div> \r\n                            -->\r\n\r\n                        </div>\r\n\r\n                        <div class=\"col-md-12 iner-bs\">\r\n                            <div class=\"row per_cls\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"name\">Name (In Capital Letters) <span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" id=\"name\" required maxlength=\"100\" class=\"form-control\"\r\n                                                [readonly]=\"!editPersonalDetails\" formControlName=\"name\"\r\n                                                placeholder=\"-\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['name'].errors && b['name'].errors.required && isError\">This\r\n                                                Field is\r\n                                                Required</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"personalNumber\">Personal Number<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" maxlength=\"100\" id=\"personalNumber\" required\r\n                                                class=\"form-control\" [readonly]=\"!editPersonalDetails\"\r\n                                                formControlName=\"personalNumber\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['personalNumber'].errors && b['personalNumber'].errors.required && isError\">This\r\n                                                Field is\r\n                                                Required</span>\r\n                                        </div>\r\n\r\n\r\n\r\n                                    </div>\r\n                                    <div class=\"inner-section\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"form-group col-md-12\">\r\n                                                <label for=\"rankName\">Rank<span class=\"required\">*</span></label>\r\n                                                <input type=\"text\" id=\"rankName\" maxlength=\"100\"\r\n                                                    [readonly]=\"!editPersonalDetails\" class=\"form-control\"\r\n                                                    formControlName=\"rankName\" placeholder=\"-\">\r\n                                                <span class=\"invalid-input\"\r\n                                                    *ngIf=\"b['rankName'].errors && b['rankName'].errors.required && isError\">This\r\n                                                    Field is Required</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n\r\n                                            <div class=\"form-group col-md-6\">\r\n                                                <label for=\"substantiveDate\">Substantive with date</label>\r\n                                                <input type=\"date\" id=\"substantiveDate\" [readonly]=\"!editPersonalDetails\" class=\"form-control\" [max]=\"today\"\r\n                                                    formControlName=\"substantiveDate\" placeholder=\"-\">\r\n                                                <span class=\"invalid-input\"\r\n                                                    *ngIf=\"b['substantiveDate'].errors && b['substantiveDate'].errors.required && isError\">This\r\n                                                    Field is Required</span>\r\n                                            </div>\r\n\r\n                                            <div class=\"form-group col-md-6\">\r\n                                                <label for=\"actingDate\">Acting with date</label>\r\n                                                <input type=\"date\" id=\"actingDate\" [max]=\"today\"\r\n                                                    [readonly]=\"!editPersonalDetails\" class=\"form-control\"\r\n                                                    formControlName=\"actingDate\" placeholder=\"-\">\r\n                                                <span class=\"invalid-input\"\r\n                                                    *ngIf=\"b['actingDate'].errors && b['actingDate'].errors.required && isError\">This\r\n                                                    Field\r\n                                                    is Required</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"form-group col-md-12\">\r\n                                            <label for=\"regimentCrops\">Regiment / Corps</label>\r\n                                            <input type=\"text\" id=\"regimentCrops\" maxlength=\"100\"\r\n                                                [readonly]=\"!editPersonalDetails\" class=\"form-control\"\r\n                                                formControlName=\"regimentCrops\" placeholder=\"-\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['regimentCrops'].errors && b['regimentCrops'].errors.required && isError\">This\r\n                                                Field\r\n                                                is Required</span>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"inner-section\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"form-group col-md-12\">\r\n                                                <label for=\"birthPlace\">Type of commission\r\n\r\n                                                    <!-- <span class=\"invalid-input\" *ngIf=\"\r\n                                                !b['isPcWefCommission'].value \r\n                                                && !b['isPcSlCommission'].value\r\n                                                && !b['isSscCommission'].value\r\n                                                && !b['isEcCommission'].value\r\n                                                && !b['isTaCommission'].value \r\n                                                && isError\">Please Select One of These</span> -->\r\n                                                </label>\r\n\r\n\r\n                                                <div class=\"row\">\r\n\r\n                                                    <div class=\"form-group col-md-12\">\r\n                                                        <div class=\"chk-input-new\">\r\n                                                            <span>\r\n                                                                <input id=\"pcwef\" type=\"checkbox\"\r\n                                                                    formControlName=\"isPcWefCommission\"\r\n                                                                    name=\"commission\">\r\n                                                                <label for=\"pcwef\">\r\n                                                                    <p>PC wef</p>\r\n                                                                </label>\r\n\r\n                                                            </span>\r\n                                                            <span>\r\n                                                                <input id=\"pcsl\" type=\"checkbox\"\r\n                                                                    formControlName=\"isPcSlCommission\"\r\n                                                                    name=\"commission\">\r\n                                                                <label for=\"pcsl\">\r\n                                                                    <p> PC(SL)</p>\r\n                                                                </label>\r\n                                                            </span>\r\n                                                            <span>\r\n\r\n                                                                <input id=\"ssc\" type=\"checkbox\"\r\n                                                                    formControlName=\"isSscCommission\" name=\"commission\">\r\n                                                                <label for=\"ssc\">\r\n                                                                    <p> SSC</p>\r\n                                                                </label>\r\n                                                            </span>\r\n\r\n                                                            <span>\r\n                                                                <input id=\"ec\" type=\"checkbox\"\r\n                                                                    formControlName=\"isEcCommission\" name=\"commission\">\r\n                                                                <label for=\"ec\">\r\n                                                                    <p> EC </p>\r\n                                                                </label>\r\n                                                            </span>\r\n                                                            <span>\r\n                                                                <input id=\"ta\" type=\"checkbox\"\r\n                                                                    formControlName=\"isTaCommission\" name=\"commission\">\r\n                                                                <label for=\"ta\">\r\n                                                                    <p> TA </p>\r\n                                                                </label>\r\n                                                            </span>\r\n                                                        </div>\r\n\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                            </div>\r\n\r\n\r\n\r\n                                            <div class=\"form-group col-md-6\">\r\n                                                <label for=\"authority\"> Authority</label>\r\n                                                <input type=\"text\" id=\"authority\" maxlength=\"100\"\r\n                                                    [readonly]=\"!editPersonalDetails\" class=\"form-control\"\r\n                                                    formControlName=\"authority\" placeholder=\"-\">\r\n                                                <span class=\"invalid-input\"\r\n                                                    *ngIf=\"b['authority'].errors && b['authority'].errors.required && isError\">This\r\n                                                    Field\r\n                                                    is Required</span>\r\n                                            </div>\r\n                                            <div class=\"form-group col-md-6\">\r\n                                                <label for=\"commissionDate\">Date</label>\r\n                                                <input type=\"date\" id=\"commissionDate\" [readonly]=\"!editPersonalDetails\" class=\"form-control\"\r\n                                                    formControlName=\"commissionDate\">\r\n                                                <span class=\"invalid-input\"\r\n                                                    *ngIf=\"b['commissionDate'].errors && b['commissionDate'].errors.required && isError\">This\r\n                                                    Field\r\n                                                    is Required</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"substantivePromotionSeniorityDate\">Date of seniority for\r\n                                                Substantive Promotion</label>\r\n                                            <input type=\"date\" id=\"substantivePromotionSeniorityDate\"\r\n                                                [readonly]=\"!editPersonalDetails\" class=\"form-control\"\r\n                                                formControlName=\"substantivePromotionSeniorityDate\" placeholder=\"-\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['substantivePromotionSeniorityDate'].errors && b['substantivePromotionSeniorityDate'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"firstCommissionDate\">Date of first commission</label>\r\n                                            <input type=\"date\" id=\"battalion\" class=\"form-control\"\r\n                                                formControlName=\"firstCommissionDate\" [readonly]=\"!editPersonalDetails\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['firstCommissionDate'].errors && b['firstCommissionDate'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"dob\">DOB(As Recorded\r\n                                                by UPSC or in Sheet Roll)</label>\r\n                                            <input type=\"date\" id=\"battalion\" class=\"form-control\" formControlName=\"dob\"\r\n                                                [readonly]=\"!editPersonalDetails\">\r\n\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['dob'].errors && b['dob'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"placeOfBirth\">Place of birth</label>\r\n                                            <input [readonly]=\"!editPersonalDetails\" type=\"text\" class=\"form-control\"\r\n                                                formControlName=\"placeOfBirth\" maxlength=\"100\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['placeOfBirth'].errors && b['placeOfBirth'].errors.required && isError\">This\r\n                                                Field is\r\n                                                Required</span>\r\n                                        </div>\r\n\r\n\r\n\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"nationality\">Nationality</label>\r\n\r\n                                            <select type=\"text\" id=\"nationality\" class=\"form-control\"\r\n                                                [attr.disabled]=\"!editPersonalDetails ? 'disabled' : null\"\r\n                                                formControlName=\"nationality\">\r\n                                                <option value=\"\" selected hidden disabled>Select</option>\r\n                                                <option *ngFor=\"let n of nationalities\" [value]=\"n.name\">\r\n                                                    {{n.name}}\r\n                                                </option>\r\n                                            </select>\r\n\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['nationality'].errors && b['nationality'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"religiousDenomination\">Religious Denomination</label>\r\n                                            <input [readonly]=\"!editPersonalDetails\" type=\"text\" name=\"\" id=\"\"\r\n                                                class=\"form-control\" formControlName=\"religiousDenomination\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['religiousDenomination'].errors && b['religiousDenomination'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"motherTongue\">Mother tongue</label>\r\n                                            <input *ngIf=\"!isIndia\" type=\"text\" id=\"motherTongue\"\r\n                                                maxlength=\"100\" [readonly]=\"!editPersonalDetails\" class=\"form-control\"\r\n                                                placeholder=\"-\" formControlName=\"motherTongue\">\r\n\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['motherTongue'].errors && b['motherTongue'].errors.required && isError\">\r\n                                                This Field is Required</span>\r\n\r\n                                        </div>\r\n\r\n\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"medicalCategory\">Medical category (Present)</label>\r\n                                            <input type=\"text\" id=\"medicalCategory\" maxlength=\"100\"\r\n                                                [readonly]=\"!editPersonalDetails\" class=\"form-control\"\r\n                                                formControlName=\"medicalCategory\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['medicalCategory'].errors && b['medicalCategory'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"previousOccupation\">Previous Occupation</label>\r\n                                            <input type=\"text\" id=\"previousOccupation\" maxlength=\"100\"\r\n                                                [readonly]=\"!editPersonalDetails\" class=\"form-control\"\r\n                                                formControlName=\"previousOccupation\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['previousOccupation'].errors && b['previousOccupation'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"accountNumber\">CDA (Officers) Account No.</label>\r\n                                            <input style=\"margin: 0;\" type=\"text\" id=\"accountNumber\" maxlength=\"16\"\r\n                                                formControlName=\"accountNumber\" class=\"form-control\"\r\n                                                [readonly]=\"!editPersonalDetails\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['accountNumber'].errors && b['accountNumber'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"idCardNo\">Identity Card No</label>\r\n                                            <input style=\"margin: 0;\" type=\"text\" id=\"idCardNo\" maxlength=\"16\"\r\n                                                [readonly]=\"!editPersonalDetails\" class=\"form-control\"\r\n                                                formControlName=\"idCardNo\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['idCardNo'].errors && b['idCardNo'].errors.required && isError\">This\r\n                                                Field is\r\n                                                Required</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- <div class=\"row\" *ngIf=\"id\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <button mat-raised-button [disabled]=\"!editPersonalDetails\"\r\n                                                (click)=\"updatePersonalDetails()\" class=\"upt_dne\">Update</button>\r\n                                        </div>\r\n                                    </div> -->\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n\r\n                    <div style=\"float: right;\">\r\n                        <button mat-raised-button (click)=\"submitPersonalForm()\">Next</button>\r\n                    </div>\r\n\r\n                </form>\r\n            </mat-step>\r\n\r\n            <!-- STEP 2 EDUCATION QUALIFICATION -->\r\n\r\n            <mat-step label=\"Qualification\" [stepControl]=\"qualificationForm\">\r\n\r\n                <form [formGroup]=\"qualificationForm\">\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Academic</h3>\r\n                        </div>\r\n                        <div formArrayName=\"academicList\" class=\"col-md-12\">\r\n                            <table>\r\n                                <thead>\r\n                                    <th>Examination Passed</th>\r\n                                    <th>Name of School/College attended</th>\r\n                                    <th>Year</th>\r\n                                    <th>Div/Class</th>\r\n                                </thead>\r\n\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let ac of getAcads.controls; let i = index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n                                            <td>\r\n                                                <input type=\"text\" maxlength=\"100\" class=\"form-control\" placeholder=\"-\"\r\n                                                    formControlName=\"examination\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input type=\"text\" maxlength=\"100\" class=\"form-control\" placeholder=\"-\"\r\n                                                    formControlName=\"schoolCollege\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    (keypress)=\"onlyNum($event)\" maxlength=\"4\" formControlName=\"year\"\r\n                                                    placeholder=\"-\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input type=\"text\" maxlength=\"100\" class=\"form-control\" placeholder=\"-\"\r\n                                                    formControlName=\"divisionClass\">\r\n                                            </td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAcads.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeAAcad(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n\r\n                                        </ng-container>\r\n\r\n                                    </tr>\r\n\r\n                                </tbody>\r\n\r\n                            </table>\r\n\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addAcad()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- <div class=\"row\" *ngIf=\"id\">\r\n                            <div class=\"col-md-12\">\r\n                                <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editEducationDetails\"\r\n                                    (click)=\"updateEducationDetails()\">Update</button>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Professional / Technical</h3>\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n                        </div>\r\n\r\n                        <div formArrayName=\"professionalList\" class=\"col-md-12\">\r\n                            <table>\r\n                                <thead>\r\n                                    <th>Qualification</th>\r\n                                    <th>Institution</th>\r\n                                    <th>Year</th>\r\n                                    <th>Distinction</th>\r\n                                </thead>\r\n\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let pt of getAllProfTechQl.controls; let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n\r\n                                            <td>\r\n                                                <input maxlength=\"100\" type=\"text\" class=\"form-control\" placeholder=\"-\"\r\n                                                    formControlName=\"qualification\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input maxlength=\"100\" type=\"text\" class=\"form-control\" placeholder=\"-\"\r\n                                                    formControlName=\"institution\">\r\n                                                <!-- <span class=\"invalid-input\" *ngIf=\"ef._10schoolName.errors && ef._10schoolName.errors.required && isErrorInEduForm \">Required Field</span> -->\r\n                                            </td>\r\n                                            <td> <input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    (keypress)=\"onlyNum($event)\" maxlength=\"4\" placeholder=\"-\"\r\n                                                    formControlName=\"year\">\r\n                                                <!-- <span class=\"invalid-input\" *ngIf=\"ef._10passedYear.errors && ef._10passedYear.errors.required && isErrorInEduForm \">Required\r\n                                                                                            Field</span> -->\r\n                                            </td>\r\n                                            <td>\r\n                                                <input maxlength=\"100\" type=\"text\" class=\"form-control\" placeholder=\"-\"\r\n                                                    formControlName=\"distinction\">\r\n                                                <!-- <span class=\"invalid-input\" *ngIf=\"ef._10division.errors && ef._10division.errors.required && isErrorInEduForm \">Required Field</span> -->\r\n                                            </td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllProfTechQl.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeProfTechQl(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n                                        </ng-container>\r\n\r\n                                    </tr>\r\n\r\n                                </tbody>\r\n                            </table>\r\n\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addProfTechQl()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n\r\n                        <!-- <div class=\"row\" *ngIf=\"id\">\r\n                            <div class=\"col-md-12\">\r\n                                <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editEducationDetails\"\r\n                                    (click)=\"updateEducationDetails()\">Update</button>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Experience in Civil Trades/ Professions\r\n                            </h3>\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n                        </div>\r\n                        <div formArrayName=\"experienceInCivilTradeList\" class=\"col-md-12\">\r\n                            <p class=\"btn-deta\">(Details in chronological order, of civil professions in which served or\r\n                                gained\r\n                                experience prior to joining the Army) </p>\r\n                            <table>\r\n                                <thead>\r\n                                    <th>Trade/Profession</th>\r\n                                    <th>Duration</th>\r\n                                    <th>Name of Employer</th>\r\n                                    <th>Address of Employer</th>\r\n\r\n                                </thead>\r\n\r\n                                <tbody>\r\n\r\n                                    <tr *ngFor=\"let e of getAllExp.controls; let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n\r\n                                            <td>\r\n\r\n                                                <input type=\"text\" maxlength=\"100\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"profession\">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input type=\"text\" maxlength=\"100\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"duration\">\r\n                                                <!-- <span class=\"invalid-input\"\r\n                                                *ngIf=\"ef._10schoolName.errors && ef._10schoolName.errors.required && isErrorInEduForm \">Required\r\n                                                Field</span> -->\r\n                                            </td>\r\n                                            <td> <input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"nameOfEmployer\" placeholder=\"\">\r\n                                                <!-- <span class=\"invalid-input\"\r\n                                                *ngIf=\"ef._10passedYear.errors && ef._10passedYear.errors.required && isErrorInEduForm \">Required\r\n                                                Field</span> -->\r\n                                            </td>\r\n                                            <td> <input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"addressOfEmployer\" placeholder=\"\">\r\n                                                <!-- <span class=\"invalid-input\"\r\n                                                                                            *ngIf=\"ef._10passedYear.errors && ef._10passedYear.errors.required && isErrorInEduForm \">Required\r\n                                                                                            Field</span> -->\r\n                                            </td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllExp.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeExp(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addExp()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                        <!-- <div class=\"row\" *ngIf=\"id\">\r\n                            <div class=\"col-md-12\">\r\n                                <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editEducationDetails\"\r\n                                    (click)=\"updateEducationDetails()\">Update</button>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Particulars of former service\r\n                            </h3>\r\n\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n                        </div>\r\n\r\n                        <div formArrayName=\"formerServiceList\" class=\"col-md-12\">\r\n                            <p class=\"btn-deta\">(This portion should be completed as far as information is known to the\r\n                                officer. The name of the Regt/ Corps/Record\r\n                                office/Department from which authority permitting reckoning of former service can be\r\n                                obtained will be stated in Column\r\n                                2, if it cannot produced by the officer). </p>\r\n                            <table class=\"tg\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Particulars of Pre-Commission Service</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Regt/Corps/Office Deptt</th>\r\n                                        <th class=\"tg-0lax\" colspan=\"2\">Period</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Total Service Years- Days</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Remarks (Here state authority permitting\r\n                                            reckoning\r\n                                            of this service for pension)</th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"tg-0lax\"><b>From</b></td>\r\n                                        <td class=\"tg-0lax\"><b>To</b></td>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let s of getAllService.controls; let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"preCommissionService\">\r\n                                            </td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"regtCorpsOfficeDeptt\">\r\n                                            </td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"date\" class=\"form-control\" formControlName=\"dateFrom\">\r\n                                            </td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"date\" class=\"form-control\" formControlName=\"dateTo\">\r\n                                            </td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"totalServiceExperience\">\r\n                                            </td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"remark\">\r\n                                            </td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllService.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeService(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addService()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- <div class=\"row\" *ngIf=\"id\">\r\n                            <div class=\"col-md-12\">\r\n                                <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editEducationDetails\"\r\n                                    (click)=\"updateEducationDetails()\">Update</button>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>JCO/Equivalent Service Personal No and Rank</h3>\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n                        </div>\r\n\r\n                        <div class=\"col-md-12 iner-bs\">\r\n                            <div class=\"row per_cls\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"jcoPersonalNumber\">Personal Number</label>\r\n                                            <input type=\"text\" id=\"jcoPersonalNumber\" class=\"form-control\"\r\n                                                formControlName=\"jcoPersonalNumber\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"ef['jcoPersonalNumber'].errors && ef['jcoPersonalNumber'].errors.required && isErrQForm\">This\r\n                                                Field is\r\n                                                Required</span>\r\n                                        </div>\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"jcoRank\">Rank </label>\r\n                                            <input type=\"text\" id=\"jcoRank\" maxlength=\"100\" class=\"form-control\"\r\n                                                formControlName=\"jcoRank\" placeholder=\"-\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"ef['jcoRank'].errors && ef['jcoRank'].errors.required && isErrQForm\">This\r\n                                                Field is\r\n                                                Required</span>\r\n                                        </div>\r\n\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n\r\n\r\n                        <!-- <div class=\"row\" *ngIf=\"id\">\r\n                            <div class=\"col-md-12\">\r\n                                <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editEducationDetails\"\r\n                                    (click)=\"updateEducationDetails()\">Update</button>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Officer Service Personal No\r\n                                and Rank</h3>\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n                        </div>\r\n\r\n                        <div class=\"col-md-12 iner-bs\">\r\n                            <div class=\"row per_cls\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"offrPersonalNumber\">Personal Number</label>\r\n                                            <input type=\"text\" id=\"offrPersonalNumber\" class=\"form-control\"\r\n                                                formControlName=\"offrPersonalNumber\" maxlength=\"100\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"ef['offrPersonalNumber'].errors && ef['offrPersonalNumber'].errors.required && isErrQForm\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <label for=\"offrRank\">Rank </label>\r\n                                            <input type=\"text\" id=\"offrRank\" maxlength=\"100\" class=\"form-control\"\r\n                                                formControlName=\"offrRank\" placeholder=\"-\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"ef['offrRank'].errors && ef['offrRank'].errors.required && isErrQForm\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <!-- <div class=\"row\" *ngIf=\"id\">\r\n                            <div class=\"col-md-12\">\r\n                                <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editEducationDetails\"\r\n                                    (click)=\"updateEducationDetails()\">Update</button>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Other Reckonable Service</h3>\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n                        </div>\r\n\r\n                        <div class=\"col-md-12 iner-bs\">\r\n                            <div class=\"row per_cls\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"form-group col-md-12\">\r\n                                            <label for=\"otherReckonableServiceDetails\">Details</label>\r\n                                            <textarea type=\"text\" id=\"otherReckonableServiceDetails\"\r\n                                                formControlName=\"otherReckonableServiceDetails\"\r\n                                                class=\"form-control\"></textarea>\r\n                                            <span class=\"invalid-input\" *ngIf=\"ef['otherReckonableServiceDetails'].errors \r\n                                            && ef['otherReckonableServiceDetails'].errors.required && isErrQForm\">\r\n                                                This Field is Required\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <!-- <div class=\"row\" *ngIf=\"id\">\r\n                            <div class=\"col-md-12\">\r\n                                <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editEducationDetails\"\r\n                                    (click)=\"updateEducationDetails()\">Update</button>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>If commissioned after passing out from NDA/IMA/OTS :-\r\n                            </h3>\r\n\r\n                            <!--                             \r\n                                <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n                        </div>\r\n                        <div formArrayName=\"passingOutTrainingEstablishmentList\" class=\"col-md-12\">\r\n                            <table class=\"tg\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Name of Training Establishment</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Location of Training Establishment</th>\r\n                                        <th class=\"tg-0lax\" colspan=\"2\">Period</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Course S No</th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"tg-0lax\"><b>From</b></td>\r\n                                        <td class=\"tg-0lax\"><b>To</b></td>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let c of getAllCommissions.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"trainingEstablishmentName\">\r\n                                            </td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"trainingEstablishmentLocation\">\r\n                                            </td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"date\" class=\"form-control\" formControlName=\"dateFrom\">\r\n                                            </td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"date\" class=\"form-control\" formControlName=\"dateTo\">\r\n                                            </td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"courseNo\">\r\n                                            </td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllCommissions.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeCommission(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n\r\n                                        </ng-container>\r\n\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addCommission()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"row\" *ngIf=\"id\">\r\n                            <div class=\"col-md-12\">\r\n                                <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editEducationDetails\"\r\n                                    (click)=\"updateEducationDetails()\">Update</button>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                    <div class=\"back_nxt\" style=\"float: right;\">\r\n                        <button mat-raised-button matStepperPrevious>Back</button>\r\n                        <button mat-raised-button (click)=\"submitQualificationForm()\">Next</button>\r\n                    </div>\r\n\r\n                </form>\r\n            </mat-step>\r\n\r\n\r\n\r\n            <mat-step label=\"Courses & Regimental Duties\" [stepControl]=\"otherDetailsForm\">\r\n\r\n                <form [formGroup]=\"otherDetailsForm\">\r\n\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n\r\n                            <h3>Courses</h3>\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n                        </div>\r\n                        <div formArrayName=\"courseList\" class=\"col-md-12\">\r\n                            <table class=\"tg\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Name of Course</th>\r\n                                        <th class=\"tg-0lax\" colspan=\"2\">Period</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Institution</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Location</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Grading Obtained</th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"tg-0lax\"><b>From</b></td>\r\n                                        <td class=\"tg-0lax\"><b>To</b></td>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let cr of getAllCourses.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"courseName\">\r\n                                            </td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"date\" class=\"form-control\" formControlName=\"dateFrom\">\r\n                                            </td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"date\" class=\"form-control\" formControlName=\"dateTo\">\r\n                                            </td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"institution\">\r\n                                            </td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"location\">\r\n                                            </td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"gradingObtained\">\r\n                                            </td>\r\n\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllCourses.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeCourse(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n\r\n\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addCourse()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Promotion Examination passed or yet to be passed including Number of chances remaining\r\n                            </h3>\r\n\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n\r\n                        </div>\r\n                        <div formArrayName=\"promotionExaminationList\" class=\"col-md-12\">\r\n                            <table class=\"tg\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"tg-0lax\">Exam</th>\r\n                                        <th class=\"tg-0lax\">Cleared/Part cleared/Not cleared</th>\r\n                                        <th class=\"tg-0lax\">No of attempts</th>\r\n                                        <th>Auth (if cleared)</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let pe of getAllPromotionExams.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"exam\"></td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <!-- <input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"cleared\"> -->\r\n                                                <select name=\"\" id=\"\" formControlName=\"cleared\"\r\n                                                    class=\"form-control form-select\">\r\n                                                    <option value=\"\" selected hidden disabled>Select</option>\r\n                                                    <option value=\"Cleared\">Cleared</option>\r\n                                                    <option value=\"Part Cleared\">Part Cleared</option>\r\n                                                    <option value=\"Not Cleared\">Not Cleared</option>\r\n\r\n                                                </select>\r\n                                            </td>\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"attempts\"></td>\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"auth\"></td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllPromotionExams.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removePromotionExam(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addPromotionExam()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Foreign languages and degree of proficiency :-\r\n                            </h3>\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n\r\n                        </div>\r\n                        <div formArrayName=\"foreignlanguageList\" class=\"col-md-12\">\r\n                            <table class=\"tg\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Language</th>\r\n                                        <th>Interpretership Held / Examination Passed</th>\r\n                                        <th>Date</th>\r\n                                        <th>Proficiency</th>\r\n                                    </tr>\r\n\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let fl of getAllForeignLanguages.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n\r\n                                            <td><input type=\"text\" class=\"form-control\" formControlName=\"language\"></td>\r\n                                            <td><input type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"examinationPassed\"></td>\r\n                                            <td><input type=\"date\" class=\"form-control\"\r\n                                                    formControlName=\"examinationDate\"></td>\r\n                                            <td>\r\n                                                <div class=\"chk-input-new proff\">\r\n                                                    <span>\r\n                                                        <input type=\"checkbox\" formControlName=\"canRead\" [id]=\"'r'+i\">\r\n                                                        <label [for]=\"'r'+i\">\r\n                                                            <p>\r\n                                                                Read\r\n                                                            </p>\r\n                                                        </label>\r\n                                                    </span>\r\n                                                    <span>\r\n                                                        <input type=\"checkbox\" formControlName=\"canWrite\" [id]=\"'w'+i\">\r\n                                                        <label [for]=\"'w'+i\">\r\n                                                            <p>\r\n                                                                Write\r\n                                                            </p>\r\n                                                        </label>\r\n                                                    </span>\r\n                                                    <span>\r\n                                                        <input type=\"checkbox\" formControlName=\"canSpeak\" [id]=\"'s'+i\">\r\n                                                        <label [for]=\"'s'+i\">\r\n                                                            <p>\r\n                                                                Speak\r\n                                                            </p>\r\n                                                        </label>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllForeignLanguages.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeForeignLanguage(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n\r\n                                        </ng-container>\r\n\r\n\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addForeignLanguage()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Indian languages and degree of proficiency :-\r\n                            </h3>\r\n\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n\r\n\r\n                        </div>\r\n                        <div formArrayName=\"indianLanguageList\" class=\"col-md-12\">\r\n                            <table class=\"tg\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Language</th>\r\n                                        <th>Examination passed</th>\r\n                                        <th>Date</th>\r\n                                        <th>Proficiency</th>\r\n                                    </tr>\r\n\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let il of getAllIndianLanguages.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"language\"\r\n                                                    class=\"form-control\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" formControlName=\"examinationPassed\"\r\n                                                    class=\"form-control\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"date\" formControlName=\"examinationDate\"\r\n                                                    class=\"form-control\"></td>\r\n                                            <td>\r\n                                                <div class=\"chk-input-new proff\">\r\n                                                    <span>\r\n                                                        <input type=\"checkbox\" formControlName=\"canRead\" [id]=\"'Ir'+i\">\r\n                                                        <label [for]=\"'Ir'+i\">\r\n                                                            <p>\r\n                                                                Read\r\n                                                            </p>\r\n                                                        </label>\r\n\r\n                                                    </span>\r\n                                                    <span>\r\n                                                        <input type=\"checkbox\" formControlName=\"canWrite\" [id]=\"'Iw'+i\">\r\n                                                        <label [for]=\"'Iw'+i\">\r\n                                                            <p>\r\n                                                                Write\r\n                                                            </p>\r\n                                                        </label>\r\n\r\n                                                    </span>\r\n                                                    <span>\r\n                                                        <input type=\"checkbox\" formControlName=\"canSpeak\" [id]=\"'Is'+i\">\r\n                                                        <label [for]=\"'Is'+i\">\r\n                                                            <p>\r\n                                                                Speak\r\n                                                            </p>\r\n                                                        </label>\r\n                                                    </span>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllIndianLanguages.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeIndianLanguage(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n\r\n\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addIndianLanguage()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Regimental Duties.\r\n                            </h3>\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n\r\n                        </div>\r\n                        <div formArrayName=\"regimentalDutyList\" class=\"col-md-12\">\r\n                            <table class=\"tg\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Formation/Unit</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Appt</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Place</th>\r\n                                        <th class=\"tg-0lax\" colspan=\"2\">Period</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Total Days</th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"tg-0lax\"><b>From</b></td>\r\n                                        <td class=\"tg-0lax\"><b>To </b></td>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let rd of getAllRegimentalDuties.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"unit\"></td>\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"appt\"></td>\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"place\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"date\" class=\"form-control\"\r\n                                                    formControlName=\"dateFrom\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"date\" class=\"form-control\"\r\n                                                    formControlName=\"dateTo\"></td>\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"totalDays\"></td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllRegimentalDuties.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeRegimentalDuties(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addRegimentalDuties()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Staff employment other than regimental\r\n                            </h3>\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div>                            -->\r\n\r\n                        </div>\r\n                        <div formArrayName=\"staffEmploymentOtherRegimentalList\" class=\"col-md-12\">\r\n                            <table class=\"tg\">\r\n                                <thead>\r\n                                    <tr>\r\n\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Formation/Unit</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Appt</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Place</th>\r\n                                        <th class=\"tg-0lax\" colspan=\"2\">Period</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Total Days</th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"tg-0lax\"><b>From</b></td>\r\n                                        <td class=\"tg-0lax\"><b>To</b></td>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let se of getAllStaffEmployment.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"unit\"></td>\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"appointment\"></td>\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"place\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"date\" class=\"form-control\"\r\n                                                    formControlName=\"dateFrom\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"date\" class=\"form-control\"\r\n                                                    formControlName=\"dateTo\"></td>\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"totalDays\"></td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllStaffEmployment.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeStaffEmployment(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addStaffEmployment()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Instructional and Extra Regimental Employment\r\n                            </h3>\r\n\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n\r\n                        </div>\r\n\r\n\r\n                        <div formArrayName=\"extraRegimentalEmploymentList\" class=\"col-md-12\">\r\n                            <table class=\"tg\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Formation/Unit</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Appt</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Place</th>\r\n                                        <th class=\"tg-0lax\" colspan=\"2\">Period</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Total Days</th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"tg-0lax\"><b>From</b></td>\r\n                                        <td class=\"tg-0lax\"><b>To </b></td>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let ins of getAllInstructionals.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"unit\"></td>\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"appointment\"></td>\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"place\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"date\" class=\"form-control\"\r\n                                                    formControlName=\"dateFrom\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"date\" class=\"form-control\"\r\n                                                    formControlName=\"dateTo\"></td>\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"totalDays\"></td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllInstructionals.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeInstructional(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n\r\n                                        </ng-container>\r\n\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addInstructional()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Decorations, Campaign Stars and Medals\r\n                            </h3>\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n                        </div>\r\n                        <div formArrayName=\"decorationList\" class=\"col-md-12\">\r\n                            <table class=\"tg\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"tg-0lax\">Decorations/Stars/Medals</th>\r\n                                        <th class=\"tg-0lax\">Unit serving with at the time of award</th>\r\n                                        <th class=\"tg-0lax\">Authority</th>\r\n\r\n                                    </tr>\r\n\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let d of getAllDecorations.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"decorations\"></td>\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"servingUnit\"></td>\r\n                                            <td class=\"tg-0lax\"><input maxlength=\"100\" type=\"text\" class=\"form-control\"\r\n                                                    formControlName=\"authority\"></td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllDecorations.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeDecoration(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n\r\n\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addDecoration()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Permanent Home Address\r\n                            </h3>\r\n\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-md-12 iner-bs\">\r\n                            <div class=\"row inner-pd\">\r\n\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label for=\"address\"> Address Line 1 </label>\r\n                                    <input maxlength=\"100\" type=\"text\" formControlName=\"perAddLine1\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"of['perAddLine1'].errors && of['perAddLine1'].errors.required && isErrODForm\">This\r\n                                        Field is Required</span>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label for=\"address\"> Address Line 2 </label>\r\n                                    <input maxlength=\"100\" type=\"text\" formControlName=\"perAddLine2\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> Village </label>\r\n                                    <input maxlength=\"100\" type=\"text\" formControlName=\"perVillage\" class=\"form-control\"\r\n                                        name=\"\" id=\"\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> Tehsil </label>\r\n                                    <input maxlength=\"100\" type=\"text\" formControlName=\"perTehsil\" class=\"form-control\"\r\n                                        name=\"\" id=\"\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> Post Office </label>\r\n                                    <input maxlength=\"100\" type=\"text\" formControlName=\"perPostOffice\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> City  </label>\r\n                                    <input maxlength=\"100\" type=\"text\" formControlName=\"perCity\" class=\"form-control\"\r\n                                        name=\"\" id=\"\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"of['perCity'].errors && of['perCity'].errors.required && isErrODForm\">This\r\n                                        Field is Required</span>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> District </label>\r\n                                    <input maxlength=\"100\" type=\"text\" formControlName=\"perDistrict\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> State </label>\r\n                                    <input maxlength=\"100\" type=\"text\" formControlName=\"perState\" class=\"form-control\"\r\n                                        name=\"\" id=\"\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"of['perState'].errors && of['perState'].errors.required && isErrODForm\">This\r\n                                        Field is Required</span>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> Pincode </label>\r\n                                    <input maxlength=\"10\" type=\"text\" formControlName=\"perPinCode\"\r\n                                        (keypress)=\"onlyNum($event)\" class=\"form-control\" name=\"\" id=\"\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"of['perPinCode'].errors && of['perPinCode'].errors.required && isErrODForm\">This\r\n                                        Field is Required</span>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Name and address of the Officer’s Bankers\r\n                            </h3>\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                    (click)=\"editEducationDetails = true\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                    (click)=\"editEducationDetails = false\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div> -->\r\n\r\n                        </div>\r\n\r\n                        <div class=\"col-md-12 iner-bs\">\r\n                            <div class=\"row inner-pd\">\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label for=\"nameObBanker\"> Name </label>\r\n                                    <input type=\"text\" maxlength=\"100\" formControlName=\"officerBankersName\"\r\n                                        class=\"form-control\" name=\"\" id=\"nameObBanker\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"of['officerBankersName'].errors && of['officerBankersName'].errors.required && isErrODForm\">This\r\n                                        Field is Required</span>\r\n                                </div>\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label for=\"address1b\"> Address Line 1 </label>\r\n                                    <input type=\"text\" maxlength=\"100\" formControlName=\"officerBankersAddLine1\"\r\n                                        class=\"form-control\" name=\"\" id=\"address1b\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"of['officerBankersAddLine1'].errors && of['officerBankersAddLine1'].errors.required && isErrODForm\">This\r\n                                        Field is Required</span>\r\n                                </div>\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label for=\"address2b\"> Address Line 2 </label>\r\n                                    <input type=\"text\" maxlength=\"100\" formControlName=\"officerBankersAddLine2\"\r\n                                        class=\"form-control\" name=\"\" id=\"address2b\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> Village </label>\r\n                                    <input type=\"text\" maxlength=\"100\" formControlName=\"officerBankersVillage\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> Tehsil </label>\r\n                                    <input type=\"text\" maxlength=\"100\" formControlName=\"officerBankersTehsil\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> Post Office </label>\r\n                                    <input type=\"text\" maxlength=\"100\" formControlName=\"officerBankersPostOffice\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> City </label>\r\n                                    <input type=\"text\" maxlength=\"100\" formControlName=\"officerBankersCity\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"of['officerBankersCity'].errors && of['officerBankersCity'].errors.required && isErrODForm\">This\r\n                                        Field is Required</span>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> District </label>\r\n                                    <input type=\"text\" maxlength=\"100\" formControlName=\"officerBankersDistrict\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> State </label>\r\n                                    <input type=\"text\" maxlength=\"100\" formControlName=\"officerBankersState\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"of['officerBankersState'].errors && of['officerBankersState'].errors.required && isErrODForm\">This\r\n                                        Field is Required</span>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> Pincode </label>\r\n                                    <input type=\"text\" maxlength=\"100\" formControlName=\"officerBankersPinCode\"\r\n                                        (keypress)=\"onlyNum($event)\" class=\"form-control\" name=\"\" id=\"\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"of['officerBankersPinCode'].errors && of['officerBankersPinCode'].errors.required && isErrODForm\">This\r\n                                        Field is Required</span>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Next of Kin (Name, relationship and full address of relative to whom in the event of\r\n                                death or serious emergency or on being placed on DI/SI list officer wishes intimation\r\n                                sent)\r\n                            </h3>\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n\r\n                        </div>\r\n                        <div formArrayName=\"nextKinList\" class=\"col-md-12\">\r\n                            <table class=\"tg\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"tg-0lax\">Name</th>\r\n                                        <th class=\"tg-0lax\">Relationship</th>\r\n                                        <th class=\"tg-0lax\">Address</th>\r\n\r\n                                    </tr>\r\n\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let k of getAllNextKins.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\"\r\n                                                    formControlName=\"name\" class=\"form-control\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\"\r\n                                                    formControlName=\"relationship\" class=\"form-control\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\"\r\n                                                    formControlName=\"address\" class=\"form-control\"></td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllNextKins.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeNextKin(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addNextKin()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Whether 'Will' executed, if so its location\r\n                            </h3>\r\n\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n\r\n                        </div>\r\n                        <div class=\"col-md-12 iner-bs\">\r\n                            <div class=\"row inner-pd\">\r\n\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label for=\"address\"> Location </label>\r\n                                    <input type=\"text\" maxlength=\"100\" formControlName=\"whetherLocation\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                    <span class=\"invalid-input\" *ngIf=\"of['whetherLocation'].errors && \r\n                                    of['whetherLocation'].errors.required && isErrODForm\">This Field is Required</span>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Whether under mentioned nomination made</h3>\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n\r\n\r\n\r\n\r\n                        </div>\r\n                        <div class=\"nany\">\r\n\r\n                            <div class=\"form-group col-md-12\">\r\n\r\n                                <table>\r\n                                    <tr>\r\n                                        <td class=\"y-n-tbl-td-lbl\"> <strong>Death cum Retirement Gratuity</strong> </td>\r\n                                        <td class=\"y-n-tbl-td-opt\"> <label> <input type=\"radio\" name=\"\"\r\n                                                    formControlName=\"isDeathCumRetirementGratuity\" [value]=\"trueValue\">\r\n                                                Yes</label>\r\n                                        </td>\r\n                                        <td class=\"y-n-tbl-td-opt\"> <label> <input type=\"radio\" name=\"\"\r\n                                                    formControlName=\"isDeathCumRetirementGratuity\" [value]=\"falseValue\">\r\n                                                No</label>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"of['isDeathCumRetirementGratuity'].errors && of['isDeathCumRetirementGratuity'].errors.required && isErrODForm\">This\r\n                                        Field is Required</span>\r\n\r\n                                </table>\r\n\r\n                                <table>\r\n                                    <tr>\r\n                                        <td class=\"y-n-tbl-td-lbl\"> <strong>Army Group Insurance</strong></td>\r\n                                        <td class=\"y-n-tbl-td-opt\"> <label> <input type=\"radio\" name=\"\"\r\n                                                    formControlName=\"isArmyGroupInsurance\" [value]=\"trueValue\">\r\n                                                Yes</label> </td>\r\n                                        <td class=\"y-n-tbl-td-opt\"> <label> <input type=\"radio\" name=\"\"\r\n                                                    formControlName=\"isArmyGroupInsurance\" [value]=\"falseValue\">\r\n                                                No</label> </td>\r\n                                    </tr>\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"of['isArmyGroupInsurance'].errors && of['isArmyGroupInsurance'].errors.required && isErrODForm\">This\r\n                                        Field is Required</span>\r\n                                </table>\r\n                                <table>\r\n                                    <tr>\r\n                                        <td class=\"y-n-tbl-td-lbl\"> <strong>DSOP Fund</strong></td>\r\n                                        <td class=\"y-n-tbl-td-opt\"> <label> <input type=\"radio\" name=\"\"\r\n                                                    [value]=\"trueValue\" formControlName=\"isDSOPFund\" value=\"1\">\r\n                                                Yes</label> </td>\r\n                                        <td class=\"y-n-tbl-td-opt\"> <label> <input type=\"radio\" name=\"\"\r\n                                                    [value]=\"falseValue\" formControlName=\"isDSOPFund\" value=\"0\">\r\n                                                No</label> </td>\r\n                                    </tr>\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"of['isDSOPFund'].errors && of['isDSOPFund'].errors.required && isErrODForm\">This\r\n                                        Field is Required</span>\r\n                                </table>\r\n\r\n                            </div>\r\n\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Details of Life Insurance Policies\r\n                            </h3>\r\n\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                    (click)=\"editEducationDetails = true\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                    (click)=\"editEducationDetails = false\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div> -->\r\n\r\n\r\n                        </div>\r\n                        <div formArrayName=\"insurancePolicyList\" class=\"col-md-12\">\r\n                            <table class=\"tg\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"tg-0lax\">Policy No</th>\r\n                                        <th class=\"tg-0lax\">Sum Assured</th>\r\n                                        <th class=\"tg-0lax\">Assigned</th>\r\n                                        <th class=\"tg-0lax\">Whether paid directly or through DSOP Fund</th>\r\n                                    </tr>\r\n\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let lip of getAllLifeInsurancePolicies.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"policyNo\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"sumAssured\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"assigned\"></td>\r\n                                            <td class=\"tg-0lax\">\r\n                                                <select type=\"text\" class=\"form-control\" formControlName=\"paymentMode\">\r\n                                                    <option value=\"\" selected hidden disabled>Select</option>\r\n                                                    <option value=\"Paid Directly\">Paid Directly</option>\r\n                                                    <option value=\"Paid by DSOP Fund\">Paid through DSOP Fund</option>\r\n                                                </select>\r\n                                            </td>\r\n\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllLifeInsurancePolicies.controls.length>1\"\r\n                                                    mat-icon-button (click)=\"removeLifeInsurancePolicy(i)\"\r\n                                                    class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addLifeInsurancePolicy()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Details of family (To be left blank where not applicable).\r\n                            </h3>\r\n\r\n\r\n                            <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n\r\n\r\n                        </div>\r\n                        <div formArrayName=\"familyDetailsAList\" class=\"col-md-12\">\r\n                            <P>(a) Whether single/married/widower/divorcee if married specify</P>\r\n                            <table class=\"tg\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"tg-0lax\">Date of Marriage</th>\r\n                                        <th class=\"tg-0lax\">Place of Marriage</th>\r\n                                        <th class=\"tg-0lax\">Under what rites/law</th>\r\n                                        <th class=\"tg-0lax\">To whom</th>\r\n                                        <th class=\"tg-0lax\">Nationality of spouse before marriage</th>\r\n                                        <th>Authority if any</th>\r\n                                    </tr>\r\n\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let fd of getAllFamilyDetails.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n                                            <td class=\"tg-0lax\"><input type=\"date\" class=\"form-control\"\r\n                                                    formControlName=\"marriageDate\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"marriagePlace\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"law\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"toWhom\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"spouseNationality\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"authority\"></td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllFamilyDetails.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeFamilyDetail(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addFamilyDetail()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n\r\n                        <div formArrayName=\"familyDetailsBList\" class=\"col-md-12\">\r\n                            <P style=\"margin-top: 15px;\">(b) If the officer has any legitimate (including validity\r\n                                adopted) children, specify</P>\r\n                            <table class=\"tg\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"tg-0lax\">Name</th>\r\n                                        <th class=\"tg-0lax\">Sex</th>\r\n                                        <th class=\"tg-0lax\">Date of Birth</th>\r\n                                        <th class=\"tg-0lax\">Place of Birth</th>\r\n                                        <th class=\"tg-0lax\">Auth if any</th>\r\n                                    </tr>\r\n\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let cd of getAllChildrenDetails.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"name\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"gender\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"date\" class=\"form-control\"\r\n                                                    formControlName=\"dob\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"birthPlace\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"authority\"></td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllChildrenDetails.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeChildrenDetail(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addChildrenDetail()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Particulars of annual leave for the last two years\r\n                            </h3>\r\n                            <!-- \r\n                                <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div>                             -->\r\n\r\n                        </div>\r\n                        <div formArrayName=\"annualLeaveList\" class=\"col-md-12\">\r\n                            <table class=\"tg\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Unit</th>\r\n                                        <th class=\"tg-0lax\" colspan=\"2\">Period</th>\r\n                                        <th class=\"tg-0lax\" rowspan=\"2\">Remark</th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"tg-0lax\"><b>From</b></td>\r\n                                        <td class=\"tg-0lax\"><b>To</b></td>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let al of getAllAnnualLeaves.controls;let i=index\">\r\n                                        <ng-container [formGroupName]=\"i\">\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"unit\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"date\" class=\"form-control\"\r\n                                                    formControlName=\"dateFrom\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"date\" class=\"form-control\"\r\n                                                    formControlName=\"dateTo\"></td>\r\n                                            <td class=\"tg-0lax\"><input type=\"text\" maxlength=\"100\" class=\"form-control\"\r\n                                                    formControlName=\"remarks\"></td>\r\n                                            <td class=\"remove-btn-td\">\r\n                                                <button *ngIf=\"getAllAnnualLeaves.controls.length>1\" mat-icon-button\r\n                                                    (click)=\"removeAnnualLeave(i)\" class=\"remove-btn\">\r\n                                                    <mat-icon> remove </mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"ading-bhn\">\r\n                                <button (click)=\"addAnnualLeave()\" class=\"add-btn cus-btn\" mat-icon-button>\r\n                                    <mat-icon>add</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row border acc_doc\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Confirmation\r\n                            </h3>\r\n\r\n                            <div class=\"act-btns\" *ngIf=\"id\">\r\n\r\n                                <!-- <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div> -->\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"nany\">\r\n\r\n                            <div class=\"form-group col-md-6\">\r\n                                <label for=\"bloodGroup\">Place<span class=\"required\">*</span></label>\r\n                                <input type=\"text\" maxlength=\"100\" formControlName=\"confirmationPlace\"\r\n                                    class=\"form-control\">\r\n                                <span class=\"invalid-input\"\r\n                                    *ngIf=\"of['confirmationPlace'].errors && of['confirmationPlace'].errors.required && isErrODForm\">This\r\n                                    Field\r\n                                    is Required</span>\r\n                            </div>\r\n                            <div class=\"form-group col-md-6\">\r\n                                <label for=\"state\">Date<span class=\"required\">*</span></label>\r\n                                <input type=\"date\" formControlName=\"confirmationDate\" class=\"form-control\">\r\n                                <span class=\"invalid-input\"\r\n                                    *ngIf=\"of['confirmationDate'].errors && of['confirmationDate'].errors.required && isErrODForm\">This\r\n                                    Field\r\n                                    is Required</span>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <p>\r\n                                <label for=\"declaration\">\r\n                                    <input type=\"checkbox\" id=\"declaration\" formControlName=\"declareConfirmation\">\r\n                                    <!-- <span class=\"required\">*</span> -->\r\n                                    I hereby certify that to\r\n                                    the best of my knowledge and belief the\r\n                                    above particulars are, in all respects correct and\r\n                                    true.\r\n\r\n                                </label>\r\n                            </p>\r\n                            <span class=\"invalid-input\" *ngIf=\"!of['declareConfirmation'] && isError\">This\r\n                                Field\r\n                                is Required</span>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"form-group col-md-6\">\r\n                            <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                            <select name=\"\" id=\"status\" class=\"form-control\" formControlName=\"status\">\r\n                                <option value=\"\" disabled selected hidden>Select</option>\r\n                                <option value=\"1\">Active</option>\r\n                                <option value=\"0\">Inactive</option>\r\n                            </select>\r\n                            <!-- <span class=\"validation_msg\" *ngIf=\"af.status.touched && af.status.invalid\">\r\n                                *Please Select Status\r\n                            </span> -->\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n\r\n                    <!-- <div class=\"row\" *ngIf=\"id\">\r\n                        <div class=\"col-md-12\">\r\n                            <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editEducationDetails\"\r\n                                (click)=\"updateEducationDetails()\">Update</button>\r\n                        </div>\r\n                    </div> -->\r\n\r\n\r\n\r\n                </form>\r\n\r\n\r\n                <div style=\"float: right;\">\r\n                    <button mat-raised-button matStepperPrevious>Back</button>\r\n                    <button *ngIf=\"!id\" mat-raised-button (click)=\"addRecordOfService()\"\r\n                        [disabled]=\"!of['declareConfirmation'].value\">Add Record of Service</button>\r\n                    <button *ngIf=\"id\" mat-raised-button (click)=\"updateRecordOfService()\"\r\n                        [disabled]=\"!of['declareConfirmation'].value\">\r\n                        Update Record of Service\r\n                    </button>\r\n                </div>\r\n\r\n            </mat-step>\r\n\r\n        </mat-horizontal-stepper>\r\n\r\n    </div>\r\n\r\n</mat-card>");

/***/ })

}]);