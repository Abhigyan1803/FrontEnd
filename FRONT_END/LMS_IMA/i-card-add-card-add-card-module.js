(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["i-card-add-card-add-card-module"],{

/***/ "7HTW":
/*!*********************************************************************!*\
  !*** ./src/app/main/trg-team/i-card/add-card/add-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardComponent", function() { return AddCardComponent; });
/* harmony import */ var _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-card.component.html */ "y6t/");
/* harmony import */ var _add_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-card.component.scss */ "G0FG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddCardComponent = /** @class */ (function () {
    function AddCardComponent(dialog, localID, spinner, route, fb, router, adminservice, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add CARD";
        this.battalions = [];
        this.descLength = 0;
        this.RemarksLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addCardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.localID = localID;
        this.addCardForm = this.fb.group({
            name_of_issuing_Auth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fatherOrHusband_Designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fatherOrHusband_Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pers_No: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            old_ICard_No: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            place_of_Birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            place_of_Issue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            permanent_Home_Address_Elsewhere: [''],
            permanent_Home_Address_India: [''],
            date_of_CommissionOrEnrolment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason_for_Change_ICard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date_of_Retirement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            color_of_Hair: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            color_of_Eyes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            station: ['Dehradun'],
            unit_crops_ship: ['',],
            date_of_issue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date_of_Birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            request_type: [''],
            signature_name: [''],
            department: [localStorage.getItem('department')],
            todayDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        // this.getBattalion();
    }
    AddCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-card')) {
            this.pageTitle = 'Add CARD';
        }
        else if (this.router.url.includes('view-card')) {
            // this.spinner.show();
            this.pageTitle = 'View CARD';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adminservice.getICardById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addCardForm.patchValue({
                        id: res.object.id,
                        name_of_issuing_Auth: res.object.name_of_issuing_Auth,
                        fatherOrHusband_Designation: res.object.fatherOrHusband_Designation,
                        fatherOrHusband_Name: res.object.fatherOrHusband_Name,
                        pers_No: res.object.pers_No,
                        rankName: res.object.rankName,
                        old_ICard_No: res.object.old_ICard_No,
                        place_of_Birth: res.object.place_of_Birth,
                        place_of_Issue: res.object.place_of_Issue,
                        permanent_Home_Address: res.object.permanent_Home_Address,
                        unit_crops_ship: res.object.unit_crops_ship,
                        permanent_Home_Address_Elsewhere: res.object.permanent_Home_Address_Elsewhere,
                        reason_for_Change_ICard: res.object.reason_for_Change_ICard,
                        permanent_Home_Address_India: res.object.permanent_Home_Address_India,
                        height: res.object.height,
                        color_of_Hair: res.object.color_of_Hair,
                        color_of_Eyes: res.object.color_of_Eyes,
                        station: res.object.station,
                        request_type: res.object.request_type,
                        // date_of_issue: res.object.date_of_issue ,
                        // date_of_Birth: res.object.date_of_Birth,
                        name: res.object.name,
                        // fathername: res.object.fathername,
                        signature_name: res.object.signature_name,
                        // todayDate: res.object.todayDate,
                        todayDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.todayDate, 'yyyy-MM-dd', _this.localID),
                        retd: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.todayDate, 'yyyy-MM-dd', _this.localID),
                        date_of_CommissionOrEnrolment: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.date_of_CommissionOrEnrolment, 'yyyy-MM-dd', _this.localID),
                        date_of_Birth: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.date_of_Birth, 'yyyy-MM-dd', _this.localID),
                        date_of_Retirement: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.date_of_Retirement, 'yyyy-MM-dd', _this.localID),
                        date_of_issue: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.date_of_issue, 'yyyy-MM-dd', _this.localID),
                        status: res.object.status,
                    });
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            });
        }
    };
    Object.defineProperty(AddCardComponent.prototype, "f", {
        get: function () {
            return this.addCardForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddCardComponent.prototype.goBack = function () {
        this.router.navigate(['main/trg-team/i-card']);
    };
    AddCardComponent.prototype.addCard = function () {
        var _this = this;
        console.log(this.addCardForm.value);
        if (this.addCardForm.invalid) {
            this.isError = true;
            this.adminservice.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.adminservice.addICard(this.addCardForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/trg-team/i-card']);
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
    AddCardComponent.prototype.charCount = function (e, t) {
        if (t == 'desc')
            this.descLength = e.target.value.length;
        if (t == 'remarks')
            this.RemarksLength = e.target.value.length;
    };
    AddCardComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l.file
            }
        });
    };
    AddCardComponent.prototype.onSelectDoc = function (e) {
        console.log(this.docUrl);
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.adminservice.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addCardForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddCardComponent.prototype.updateCard = function () {
        var _this = this;
        this.spinner.show();
        if (this.addCardForm.valid) {
            this.addCardForm.value.color_of_Eyes;
            console.log(this.addCardForm.value.color_of_Eyes, "this.addCardForm.value.color_of_Eyes;");
            this.addCardForm.value.id = this.id;
            this.adminservice.updateICard(this.addCardForm.value).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddCardComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
            if (this.router.url.includes('main/academic-depart'))
                this.router.navigate(['main/academic-depart/it']);
            if (this.router.url.includes('main/trg-team'))
                this.router.navigate(['main/trg-team/i-card']);
        }
        else {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
        }
    };
    AddCardComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddCardComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddCardComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-card',
            template: _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_card_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], String, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddCardComponent);
    return AddCardComponent;
}());



/***/ }),

/***/ "9f4Y":
/*!****************************************************************************!*\
  !*** ./src/app/main/academic-depart/i-card/add-card/add-card.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardComponent", function() { return AddCardComponent; });
/* harmony import */ var _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-card.component.html */ "dE+q");
/* harmony import */ var _add_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-card.component.scss */ "lTUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddCardComponent = /** @class */ (function () {
    function AddCardComponent(dialog, localID, spinner, route, fb, router, adminservice, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add CARD";
        this.battalions = [];
        this.descLength = 0;
        this.RemarksLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addCardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.localID = localID;
        this.addCardForm = this.fb.group({
            name_of_issuing_Auth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fatherOrHusband_Designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fatherOrHusband_Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pers_No: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            old_ICard_No: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            place_of_Birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            place_of_Issue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            permanent_Home_Address_Elsewhere: [''],
            permanent_Home_Address_India: [''],
            date_of_CommissionOrEnrolment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason_for_Change_ICard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date_of_Retirement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            color_of_Hair: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            color_of_Eyes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            station: ['Dehradun'],
            unit_crops_ship: ['',],
            date_of_issue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date_of_Birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            request_type: [''],
            signature_name: [''],
            department: [localStorage.getItem('department')],
            todayDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        // this.getBattalion();
    }
    AddCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-card')) {
            this.pageTitle = 'Add CARD';
        }
        else if (this.router.url.includes('view-card')) {
            // this.spinner.show();
            this.pageTitle = 'View CARD';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adminservice.getICardById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addCardForm.patchValue({
                        id: res.object.id,
                        name_of_issuing_Auth: res.object.name_of_issuing_Auth,
                        fatherOrHusband_Designation: res.object.fatherOrHusband_Designation,
                        fatherOrHusband_Name: res.object.fatherOrHusband_Name,
                        pers_No: res.object.pers_No,
                        rankName: res.object.rankName,
                        old_ICard_No: res.object.old_ICard_No,
                        place_of_Birth: res.object.place_of_Birth,
                        place_of_Issue: res.object.place_of_Issue,
                        permanent_Home_Address: res.object.permanent_Home_Address,
                        unit_crops_ship: res.object.unit_crops_ship,
                        permanent_Home_Address_Elsewhere: res.object.permanent_Home_Address_Elsewhere,
                        reason_for_Change_ICard: res.object.reason_for_Change_ICard,
                        permanent_Home_Address_India: res.object.permanent_Home_Address_India,
                        height: res.object.height,
                        color_of_Hair: res.object.color_of_Hair,
                        color_of_Eyes: res.object.color_of_Eyes,
                        station: res.object.station,
                        request_type: res.object.request_type,
                        // date_of_issue: res.object.date_of_issue ,
                        // date_of_Birth: res.object.date_of_Birth,
                        name: res.object.name,
                        // fathername: res.object.fathername,
                        signature_name: res.object.signature_name,
                        // todayDate: res.object.todayDate,
                        todayDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.todayDate, 'yyyy-MM-dd', _this.localID),
                        retd: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.todayDate, 'yyyy-MM-dd', _this.localID),
                        date_of_CommissionOrEnrolment: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.date_of_CommissionOrEnrolment, 'yyyy-MM-dd', _this.localID),
                        date_of_Birth: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.date_of_Birth, 'yyyy-MM-dd', _this.localID),
                        date_of_Retirement: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.date_of_Retirement, 'yyyy-MM-dd', _this.localID),
                        date_of_issue: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.date_of_issue, 'yyyy-MM-dd', _this.localID),
                        status: res.object.status,
                    });
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            });
        }
    };
    Object.defineProperty(AddCardComponent.prototype, "f", {
        get: function () {
            return this.addCardForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddCardComponent.prototype.goBack = function () {
        this.router.navigate(['main/academic-depart/i-card']);
    };
    AddCardComponent.prototype.addCard = function () {
        var _this = this;
        console.log(this.addCardForm.value);
        if (this.addCardForm.invalid) {
            this.isError = true;
            this.adminservice.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.adminservice.addICard(this.addCardForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/academic-depart/i-card']);
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
    AddCardComponent.prototype.charCount = function (e, t) {
        if (t == 'desc')
            this.descLength = e.target.value.length;
        if (t == 'remarks')
            this.RemarksLength = e.target.value.length;
    };
    AddCardComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddCardComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l.file
            }
        });
    };
    AddCardComponent.prototype.onSelectDoc = function (e) {
        console.log(this.docUrl);
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.adminservice.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addCardForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddCardComponent.prototype.updateCard = function () {
        var _this = this;
        this.spinner.show();
        if (this.addCardForm.valid) {
            this.addCardForm.value.color_of_Eyes;
            console.log(this.addCardForm.value.color_of_Eyes, "this.addCardForm.value.color_of_Eyes;");
            this.addCardForm.value.id = this.id;
            this.adminservice.updateICard(this.addCardForm.value).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddCardComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
            this.router.navigate(['main/academic-depart/i-card']);
        }
        else {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
        }
    };
    AddCardComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddCardComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-card',
            template: _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_card_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], String, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddCardComponent);
    return AddCardComponent;
}());



/***/ }),

/***/ "G0FG":
/*!***********************************************************************!*\
  !*** ./src/app/main/trg-team/i-card/add-card/add-card.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edi_btn {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  margin-bottom: 10px;\n  background: #eee;\n  width: 100%;\n}\n\n.edi_btn h3 {\n  font-size: 16px;\n  color: #721a0c;\n  letter-spacing: 0;\n  margin: 0px;\n}\n\n.row.border.acc_doc {\n  margin: 15px 0px;\n  padding-bottom: 15px;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.col-md-12.d-flex.plr-0 {\n  padding: 0;\n}\n\n.d-flex.d-row {\n  width: 100%;\n}");

/***/ }),

/***/ "Nv6C":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/i-card/add-card/add-card.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button>\r\n        Adjutant Branch > I Card\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addCardForm\">\r\n            <div class=\"row border acc_doc\">\r\n                <div class=\"edi_btn\">\r\n                    <h3>Personal Details</h3>\r\n                </div>\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Name<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" disabled type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n                            placeholder=\"Name\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter Name</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Father/Husband's Name <span class=\"required\">*</span></label>\r\n                        <input id=\"title\" disabled type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"fatherOrHusband_Name\"\r\n                            placeholder=\"Father/Husband's Name\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.fatherOrHusband_Name.errors && f.fatherOrHusband_Name.errors.required && isError\">Please Enter Father/Husband's Name</span>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Father/Husband's Designation <span class=\"required\">*</span></label>\r\n                        <input id=\"title\" disabled type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"fatherOrHusband_Designation\"\r\n                            placeholder=\"Father Husband_Designation\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.fatherOrHusband_Designation.errors && f.fatherOrHusband_Designation.errors.required && isError\">Please Enter Father/Husband's Designation</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Name of Issuing Auth<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" disabled type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name_of_issuing_Auth\"\r\n                            placeholder=\"Name of issuing Auth\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.name_of_issuing_Auth.errors && f.name_of_issuing_Auth.errors.required && isError\">Please Enter Name of Issuing Auth</span>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Pers No<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" disabled class=\"form-control\" maxlength=\"100\" formControlName=\"pers_No\"\r\n                            placeholder=\"Personal No\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.pers_No.errors && f.pers_No.errors.required && isError\">Please Enter Number</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Rank<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" disabled class=\"form-control\" maxlength=\"100\" formControlName=\"rankName\"\r\n                            placeholder=\"Rank\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.rankName.errors && f.rankName.errors.required && isError\">Please Enter Rank</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Old I/Card No<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" disabled class=\"form-control\" maxlength=\"100\" formControlName=\"old_ICard_No\"\r\n                            placeholder=\"Old I/Card No\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.old_ICard_No.errors && f.old_ICard_No.errors.required && isError\">Please Enter CardNo</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Date of Issue<span class=\"required\">*</span></label>\r\n                        <input id=\"scheduleDate\" disabled type=\"date\" class=\"form-control\" formControlName=\"date_of_issue\"\r\n                           >\r\n                            <span class=\"validation_msg\" *ngIf=\"f.date_of_issue.errors && f.date_of_issue.errors.required && isError\">Please Enter Date of Issue</span>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Place of Issue<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" disabled type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"place_of_Issue\"\r\n                            placeholder=\"Place of Issue\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.place_of_Issue.errors && f.place_of_Issue.errors.required && isError\">Please Enter Place of Issue</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Place of Birth<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" disabled type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"place_of_Birth\"\r\n                            placeholder=\"Place of Birth\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.place_of_Birth.errors && f.place_of_Birth.errors.required && isError\">Please Enter Place of Birth</span>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"scheduleDate\"> Date of Birth<span class=\"required\">*</span></label>\r\n                        <input id=\"scheduleDate\" disabled type=\"date\" class=\"form-control\" formControlName=\"date_of_Birth\"\r\n                           >\r\n                        <span class=\"validation_msg\" *ngIf=\"f.date_of_Birth.errors && f.date_of_Birth.errors.required && isError\">Date of Birth</span>\r\n\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"scheduleDate\">Date of Commission/Enrolment<span class=\"required\">*</span></label>\r\n                        <input id=\"scheduleDate\" disabled type=\"date\" class=\"form-control\" formControlName=\"date_of_CommissionOrEnrolment\"\r\n                           >\r\n                            <span class=\"validation_msg\" *ngIf=\"f.date_of_CommissionOrEnrolment.errors && f.date_of_CommissionOrEnrolment.errors.required && isError\">Date of Commission/Enrolment</span>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"remarks\">Reason for Change I-Card<span class=\"required\">*</span></label>\r\n                        <textarea disabled matInput placeholder=\"Maximum 500 Characters\" class=\"form-control\"\r\n                            (input)=\"charCount($event,'remarks')\" maxlength=\"1500\" formControlName=\"reason_for_Change_ICard\"></textarea>\r\n                            <span class=\"validation_msg\" *ngIf=\"f.reason_for_Change_ICard.errors && f.reason_for_Change_ICard.errors.required && isError\">Reason for Change I-Card</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Date of Retirement</label>\r\n                        <input id=\"scheduleDate\" disabled type=\"date\" class=\"form-control\" formControlName=\"date_of_Retirement\"\r\n                           >\r\n                            <span class=\"validation_msg\" *ngIf=\"f.date_of_Retirement.errors && f.date_of_Retirement.errors.required && isError\">Date of Retirement</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Unit/Corps/Ship<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" disabled type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"unit_crops_ship\"\r\n                            placeholder=\"Unit\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.unit_crops_ship.errors && f.unit_crops_ship.errors.required && isError\">Date of Unit/Corps/Ship</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row border acc_doc\">\r\n                <div class=\"edi_btn\">\r\n                    <h3>Permanent Home Address</h3>\r\n                </div>\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">India</label>\r\n                        <input id=\"title\" disabled type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"permanent_Home_Address_India\"\r\n                            placeholder=\"Address\">\r\n                        \r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Elsewhere</label>\r\n                        <input id=\"title\" disabled type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"permanent_Home_Address_Elsewhere\"\r\n                            placeholder=\"Address\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row border acc_doc\">\r\n                <div class=\"edi_btn\">\r\n                    <h3>Visible Identification Mark</h3>\r\n                </div>\r\n                <div class=\"col-md-12 d-flex plr-0\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"position\">Height<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" disabled type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"height\"\r\n                            placeholder=\"height\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.height.errors && f.height.errors.required && isError\">please enter Height</span>    \r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"position\">Color of Hair<span class=\"required\">*</span></label>\r\n                        <input disabled id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"color_of_Hair\"\r\n                            placeholder=\"Color of Hair\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.color_of_Hair.errors && f.color_of_Hair.errors.required && isError\">please enter Height</span>    \r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"position\">Color of Eyes<span class=\"required\">*</span></label>\r\n                        <input disabled id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"color_of_Eyes\"\r\n                            placeholder=\"Color of Eyes\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.color_of_Eyes.errors && f.color_of_Eyes.errors.required && isError\">please enter Height</span>    \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Height<span class=\"required\">*</span></label>\r\n               <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"height\"\r\n               placeholder=\"height\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"position\">Color of Hair<span class=\"required\">*</span></label>\r\n                <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"haircolor\"\r\n                placeholder=\"Color of Hair\">\r\n                \r\n             </div>\r\n        </div> \r\n\r\n        <div class=\"row\">\r\n            \r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"position\">Color of Eyes<span class=\"required\">*</span></label>\r\n                <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"eyecolor\"\r\n                placeholder=\"Color of Eyes\">\r\n                \r\n             </div>\r\n        </div>  -->\r\n\r\n            <div class=\"row border acc_doc\">\r\n                <!-- <div  class=\"edi_btn\"><h3>Witnesses</h3></div> -->\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Station</label>\r\n                    <input id=\"title\" disabled type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"station\"\r\n                     value=\"Dehradun\"  >\r\n                     \r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Date <span class=\"required\">*</span></label>\r\n                    <input id=\"scheduleDate\" disabled type=\"date\" class=\"form-control\" formControlName=\"todayDate\"\r\n                       >\r\n                        <span class=\"validation_msg\" *ngIf=\"f.todayDate.errors && f.todayDate.errors.required && isError\">please enter Date</span>    \r\n\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Signature<span class=\"required\">*</span></label>\r\n                    <input id=\"title\" disabled type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"signature_name\"\r\n                        placeholder=\"signature\">\r\n                        <span class=\"validation_msg\"\r\n                        *ngIf=\"f.signature_name.errors && f.signature_name.errors.required && isError\">Please Enter Name</span>\r\n                </div>\r\n            </div>\r\n\r\n           \r\n\r\n\r\n            <div class=\"row\" >\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"request_type\">Request Status</label>\r\n                    <select name=\"\" id=\"\" class=\"form-control \"  formControlName=\"request_type\">\r\n                        <option value=\"Requested\" disabled selected hidden >Requested</option>\r\n                        <option value=\"On Hold\">On Hold</option>\r\n                        <option value=\"Under Process\">Under Process</option>\r\n                        <option value=\"Issued\">Issued</option>\r\n                    <option value=\"Rejected\">Rejected</option>\r\n\r\n                    </select>\r\n                </div>\r\n            </div>\r\n      \r\n            <button mat-raised-button *ngIf=\"pageTitle=='Add CARD'\" (click)=\"addCard()\">Add Request</button>\r\n            <button mat-raised-button *ngIf=\"pageTitle=='View CARD'\" (click)=\"updateCard()\">Update Request</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "P3Uy":
/*!***********************************************************************!*\
  !*** ./src/app/main/trg-battalion/i-card/add-card/add-card.module.ts ***!
  \***********************************************************************/
/*! exports provided: AddCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardModule", function() { return AddCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-card.component */ "pO4K");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_card_component__WEBPACK_IMPORTED_MODULE_8__["AddCardComponent"]
    }
];
var AddCardModule = /** @class */ (function () {
    function AddCardModule() {
    }
    AddCardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_card_component__WEBPACK_IMPORTED_MODULE_8__["AddCardComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
            ]
        })
    ], AddCardModule);
    return AddCardModule;
}());



/***/ }),

/***/ "PvXT":
/*!****************************************************************************!*\
  !*** ./src/app/main/trg-battalion/i-card/add-card/add-card.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edi_btn {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  margin-bottom: 10px;\n  background: #eee;\n  width: 100%;\n}\n\n.edi_btn h3 {\n  font-size: 16px;\n  color: #721a0c;\n  letter-spacing: 0;\n  margin: 0px;\n}\n\n.row.border.acc_doc {\n  margin: 15px 0px;\n  padding-bottom: 15px;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.col-md-12.d-flex.plr-0 {\n  padding: 0;\n}\n\n.d-flex.d-row {\n  width: 100%;\n}");

/***/ }),

/***/ "QfwJ":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/gs-branch/i-card/add-card/add-card.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button>\r\n        GS Branch > I Card\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addCardForm\">\r\n            <div class=\"row border acc_doc\">\r\n                <div class=\"edi_btn\">\r\n                    <h3>Personal Details</h3>\r\n                </div>\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Name<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n                            placeholder=\"Name\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter Name</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Father/Husband's Name <span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"fatherOrHusband_Name\"\r\n                            placeholder=\"Father/Husband's Name\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.fatherOrHusband_Name.errors && f.fatherOrHusband_Name.errors.required && isError\">Please Enter Father/Husband's Name</span>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Father/Husband's Designation <span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"fatherOrHusband_Designation\"\r\n                            placeholder=\"Father Husband_Designation\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.fatherOrHusband_Designation.errors && f.fatherOrHusband_Designation.errors.required && isError\">Please Enter Father/Husband's Designation</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Name of Issuing Auth<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name_of_issuing_Auth\"\r\n                            placeholder=\"Name of issuing Auth\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.name_of_issuing_Auth.errors && f.name_of_issuing_Auth.errors.required && isError\">Please Enter Name of Issuing Auth</span>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Pers No<span class=\"required\">*</span></label>\r\n                        <input id=\"pers_No\" type=\"text\" class=\"form-control\" (keypress)=\"keyPress($event)\" maxlength=\"10\" formControlName=\"pers_No\"\r\n                            placeholder=\"Personal No\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.pers_No.errors && f.pers_No.errors.required && isError\">Please Enter Number</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Rank<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"rankName\"\r\n                            placeholder=\"Rank\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.rankName.errors && f.rankName.errors.required && isError\">Please Enter Rank</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Old I/Card No<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"old_ICard_No\"\r\n                            placeholder=\"Old I/Card No\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.old_ICard_No.errors && f.old_ICard_No.errors.required && isError\">Please Enter CardNo</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Date of Issue<span class=\"required\">*</span></label>\r\n                        <input id=\"scheduleDate\" type=\"date\" class=\"form-control\" formControlName=\"date_of_issue\"\r\n                            >\r\n                            <span class=\"validation_msg\" *ngIf=\"f.date_of_issue.errors && f.date_of_issue.errors.required && isError\">Please Enter Date of Issue</span>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Place of Issue<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"place_of_Issue\"\r\n                            placeholder=\"Place of Issue\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.place_of_Issue.errors && f.place_of_Issue.errors.required && isError\">Please Enter Place of Issue</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Place of Birth<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"place_of_Birth\"\r\n                            placeholder=\"Place of Birth\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.place_of_Birth.errors && f.place_of_Birth.errors.required && isError\">Please Enter Place of Birth</span>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"scheduleDate\"> Date of Birth<span class=\"required\">*</span></label>\r\n                        <input id=\"scheduleDate\" type=\"date\"  class=\"form-control\" formControlName=\"date_of_Birth\"\r\n                            >\r\n                        <span class=\"validation_msg\" *ngIf=\"f.date_of_Birth.errors && f.date_of_Birth.errors.required && isError\">Date of Birth</span>\r\n\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"scheduleDate\">Date of Commission/Enrollment<span class=\"required\">*</span></label>\r\n                        <input id=\"datepicker1\" type=\"date\"  class=\"form-control\" formControlName=\"date_of_CommissionOrEnrolment\"\r\n                            >\r\n                            <span class=\"validation_msg\" *ngIf=\"f.date_of_CommissionOrEnrolment.errors && f.date_of_CommissionOrEnrolment.errors.required && isError\">Date of Commission/Enrolment</span>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                \r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"remarks\">Reason for Change I-Card<span class=\"required\">*</span></label>\r\n                        <textarea matInput placeholder=\"Maximum 500 Characters\" class=\"form-control\"\r\n                            (input)=\"charCount($event,'remarks')\" maxlength=\"1500\" formControlName=\"reason_for_Change_ICard\"></textarea>\r\n                            <span class=\"validation_msg\" *ngIf=\"f.reason_for_Change_ICard.errors && f.reason_for_Change_ICard.errors.required && isError\">Reason for Change I-Card</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Date of Retirement</label>\r\n                        <input id=\"scheduleDate\" type=\"date\" class=\"form-control\" formControlName=\"date_of_Retirement\"\r\n                            >\r\n                            <span class=\"validation_msg\" *ngIf=\"f.date_of_Retirement.errors && f.date_of_Retirement.errors.required && isError\">Date of Retirement</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Unit/Corps/Ship<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"unit_crops_ship\"\r\n                            placeholder=\"Unit\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.unit_crops_ship.errors && f.unit_crops_ship.errors.required && isError\">Date of Unit/Corps/Ship</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row border acc_doc\">\r\n                <div class=\"edi_btn\">\r\n                    <h3>Permanent Home Address</h3>\r\n                </div>\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">India</label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"permanent_Home_Address_India\"\r\n                            placeholder=\"Address\">\r\n                        \r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Elsewhere</label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"permanent_Home_Address_Elsewhere\"\r\n                            placeholder=\"Address\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row border acc_doc\">\r\n                <div class=\"edi_btn\">\r\n                    <h3>Visible Identification Mark</h3>\r\n                </div>\r\n                <div class=\"col-md-12 d-flex plr-0\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"position\">Height<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"height\"\r\n                            placeholder=\"height\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.height.errors && f.height.errors.required && isError\">please enter Height</span>    \r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"position\">Color of Hair<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"color_of_Hair\"\r\n                            placeholder=\"Color of Hair\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.color_of_Hair.errors && f.color_of_Hair.errors.required && isError\">please enter Color of Hair</span>    \r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"position\">Color of Eyes<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"color_of_Eyes\"\r\n                            placeholder=\"Color of Eyes\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.color_of_Eyes.errors && f.color_of_Eyes.errors.required && isError\">please enter Color of Eyes</span>    \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Height<span class=\"required\">*</span></label>\r\n               <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"height\"\r\n               placeholder=\"height\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"position\">Color of Hair<span class=\"required\">*</span></label>\r\n                <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"haircolor\"\r\n                placeholder=\"Color of Hair\">\r\n                \r\n             </div>\r\n        </div> \r\n\r\n        <div class=\"row\">\r\n            \r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"position\">Color of Eyes<span class=\"required\">*</span></label>\r\n                <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"eyecolor\"\r\n                placeholder=\"Color of Eyes\">\r\n                \r\n             </div>\r\n        </div>  -->\r\n\r\n            <div class=\"row border acc_doc\">\r\n                <!-- <div  class=\"edi_btn\"><h3>Witnesses</h3></div> -->\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Station</label>\r\n                    <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"station\"\r\n                     value=\"Dehradun\"  >\r\n                     \r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Date <span class=\"required\">*</span></label>\r\n                    <input id=\"scheduleDate\" type=\"date\" class=\"form-control\" formControlName=\"todayDate\"\r\n                        >\r\n                        <span class=\"validation_msg\" *ngIf=\"f.todayDate.errors && f.todayDate.errors.required && isError\">please enter Date</span>    \r\n\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Signature<span class=\"required\">*</span></label>\r\n                    <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"signature_name\"\r\n                        placeholder=\"signature\">\r\n                        <span class=\"validation_msg\"\r\n                        *ngIf=\"f.signature_name.errors && f.signature_name.errors.required && isError\">Please Enter Name</span>\r\n                </div>\r\n            </div>\r\n\r\n           \r\n\r\n\r\n            <!-- <div class=\"row\"  *ngIf=\"id\" [readonly]=\"true\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"request_type\">Request Status</label>\r\n                    <select name=\"\" id=\"\" class=\"form-control \" disabled formControlName=\"request_type\">\r\n                        <option value=\"\"  disabled selected hidden>Requested</option>\r\n                        <option value=\"Pending\">On Hold</option>\r\n                        <option value=\"Completed\">Under Process</option>\r\n                        <option value=\"Rejected\">Issued</option>\r\n                    <option value=\"Rejected\">Rejected</option>\r\n\r\n                    </select>\r\n                </div>\r\n            </div> -->\r\n      \r\n            <button mat-raised-button *ngIf=\"pageTitle=='Add CARD'\" (click)=\"addCard()\">Add Request</button>\r\n            <button mat-raised-button *ngIf=\"pageTitle=='View CARD'\" (click)=\"updateCard()\">Update Request</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "bKpD":
/*!******************************************************************!*\
  !*** ./src/app/main/trg-team/i-card/add-card/add-card.module.ts ***!
  \******************************************************************/
/*! exports provided: AddCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardModule", function() { return AddCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-card.component */ "7HTW");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_card_component__WEBPACK_IMPORTED_MODULE_8__["AddCardComponent"]
    }
];
var AddCardModule = /** @class */ (function () {
    function AddCardModule() {
    }
    AddCardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_card_component__WEBPACK_IMPORTED_MODULE_8__["AddCardComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
            ]
        })
    ], AddCardModule);
    return AddCardModule;
}());



/***/ }),

/***/ "cmLG":
/*!**********************************************************************!*\
  !*** ./src/app/main/gs-branch/i-card/add-card/add-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardComponent", function() { return AddCardComponent; });
/* harmony import */ var _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-card.component.html */ "QfwJ");
/* harmony import */ var _add_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-card.component.scss */ "mu+B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
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











var AddCardComponent = /** @class */ (function () {
    function AddCardComponent(service, localID, dialog, spinner, route, fb, router, adminservice, cdref, activeRoute) {
        this.service = service;
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add CARD";
        this.battalions = [];
        this.descLength = 0;
        this.RemarksLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addCardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.localID = localID;
        this.addCardForm = this.fb.group({
            name_of_issuing_Auth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fatherOrHusband_Designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fatherOrHusband_Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pers_No: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            old_ICard_No: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            place_of_Birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            place_of_Issue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            permanent_Home_Address_Elsewhere: [''],
            permanent_Home_Address_India: [''],
            date_of_CommissionOrEnrolment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason_for_Change_ICard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date_of_Retirement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            color_of_Hair: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            color_of_Eyes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            station: ['Dehradun'],
            unit_crops_ship: ['',],
            date_of_issue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date_of_Birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            request_type: [''],
            signature_name: [''],
            department: [localStorage.getItem('department')],
            todayDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        // this.getBattalion();
    }
    AddCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-card')) {
            this.pageTitle = 'Add CARD';
        }
        else if (this.router.url.includes('view-card')) {
            // this.spinner.show();
            this.pageTitle = 'View CARD';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getICardById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addCardForm.patchValue({
                        id: res.object.id,
                        name_of_issuing_Auth: res.object.name_of_issuing_Auth,
                        fatherOrHusband_Designation: res.object.fatherOrHusband_Designation,
                        fatherOrHusband_Name: res.object.fatherOrHusband_Name,
                        pers_No: res.object.pers_No,
                        rankName: res.object.rankName,
                        old_ICard_No: res.object.old_ICard_No,
                        place_of_Birth: res.object.place_of_Birth,
                        place_of_Issue: res.object.place_of_Issue,
                        permanent_Home_Address: res.object.permanent_Home_Address,
                        unit_crops_ship: res.object.unit_crops_ship,
                        permanent_Home_Address_Elsewhere: res.object.permanent_Home_Address_Elsewhere,
                        reason_for_Change_ICard: res.object.reason_for_Change_ICard,
                        permanent_Home_Address_India: res.object.permanent_Home_Address_India,
                        height: res.object.height,
                        color_of_Hair: res.object.color_of_Hair,
                        color_of_Eyes: res.object.color_of_Eyes,
                        station: res.object.station,
                        request_type: res.object.request_type,
                        // date_of_issue: res.object.date_of_issue ,
                        // date_of_Birth: res.object.date_of_Birth,
                        name: res.object.name,
                        // fathername: res.object.fathername,
                        signature_name: res.object.signature_name,
                        // todayDate: res.object.todayDate,
                        todayDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(res.object.todayDate, 'yyyy-MM-dd', _this.localID),
                        retd: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(res.object.todayDate, 'yyyy-MM-dd', _this.localID),
                        date_of_CommissionOrEnrolment: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(res.object.date_of_CommissionOrEnrolment, 'yyyy-MM-dd', _this.localID),
                        date_of_Birth: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(res.object.date_of_Birth, 'yyyy-MM-dd', _this.localID),
                        date_of_Retirement: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(res.object.date_of_Retirement, 'yyyy-MM-dd', _this.localID),
                        date_of_issue: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(res.object.date_of_issue, 'yyyy-MM-dd', _this.localID),
                        status: res.object.status,
                    });
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            });
        }
    };
    Object.defineProperty(AddCardComponent.prototype, "f", {
        get: function () {
            return this.addCardForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddCardComponent.prototype.goBack = function () {
        this.router.navigate(['main/gs-branch/i-card']);
    };
    // date_of_Birth:any;
    // cardDAte(){
    //   this.addCardForm.patchValue({
    //     todayDate:formatDate(todayDate,'yyyy-MM-dd',this.localID),
    //     retd:formatDate(todayDate,'yyyy-MM-dd',this.localID),
    //     date_of_CommissionOrEnrolment:formatDate(date_of_CommissionOrEnrolment,'yyyy-MM-dd',this.localID),
    //     date_of_Birth:formatDate(this.date_of_Birth,'yyyy-MM-dd',this.localID),
    //     place_of_Birth:formatDate(place_of_Birth,'yyyy-MM-dd',this.localID),
    //     date_of_issue:formatDate(date_of_issue,'yyyy-MM-dd',this.localID),
    //   })
    //   console.log(this.cardDAte);
    // }
    AddCardComponent.prototype.addCard = function () {
        var _this = this;
        console.log(this.addCardForm.value);
        if (this.addCardForm.invalid) {
            this.isError = true;
            this.service.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.service.addICard(this.addCardForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/gs-branch/i-card']);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddCardComponent.prototype.charCount = function (e, t) {
        if (t == 'desc')
            this.descLength = e.target.value.length;
        if (t == 'remarks')
            this.RemarksLength = e.target.value.length;
    };
    AddCardComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l.file
            }
        });
    };
    AddCardComponent.prototype.onSelectDoc = function (e) {
        console.log(this.docUrl);
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addCardForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddCardComponent.prototype.updateCard = function () {
        var _this = this;
        this.spinner.show();
        // console.log("Bdo", this.addBdoForm.value);
        this.addCardForm.value.color_of_Eyes;
        console.log(this.addCardForm.value.request_type, "request_type");
        this.addCardForm.value.id = this.id;
        if (this.addCardForm.valid) {
            this.service.updateICard(this.addCardForm.value).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddCardComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.service.openSnackbar(res.message);
            this.router.navigate(['main/gs-branch/i-card']);
        }
        else {
            this.spinner.hide();
            this.service.openSnackbar(res.message);
        }
    };
    AddCardComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddCardComponent.ctorParameters = function () { return [
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_9__["AdjutantService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddCardComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-card',
            template: _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_card_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_9__["AdjutantService"], String, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddCardComponent);
    return AddCardComponent;
}());



/***/ }),

/***/ "coFe":
/*!****************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/i-card/add-card/add-card.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardComponent", function() { return AddCardComponent; });
/* harmony import */ var _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-card.component.html */ "Nv6C");
/* harmony import */ var _add_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-card.component.scss */ "hpeV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
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











var AddCardComponent = /** @class */ (function () {
    function AddCardComponent(service, localID, dialog, spinner, route, fb, router, adminservice, cdref, activeRoute) {
        this.service = service;
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add CARD";
        this.battalions = [];
        this.descLength = 0;
        this.RemarksLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addCardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.localID = localID;
        this.addCardForm = this.fb.group({
            name_of_issuing_Auth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fatherOrHusband_Designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fatherOrHusband_Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pers_No: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            old_ICard_No: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            place_of_Birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            place_of_Issue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            permanent_Home_Address_Elsewhere: [''],
            permanent_Home_Address_India: [''],
            date_of_CommissionOrEnrolment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason_for_Change_ICard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date_of_Retirement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            color_of_Hair: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            color_of_Eyes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            station: ['Dehradun'],
            unit_crops_ship: ['',],
            date_of_issue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date_of_Birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            request_type: [''],
            signature_name: [''],
            department: [localStorage.getItem('department')],
            todayDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        // this.getBattalion();
    }
    AddCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-card')) {
            this.pageTitle = 'Add CARD';
        }
        else if (this.router.url.includes('view-card')) {
            // this.spinner.show();
            this.pageTitle = 'View CARD';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getICardById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addCardForm.patchValue({
                        id: res.object.id,
                        name_of_issuing_Auth: res.object.name_of_issuing_Auth,
                        fatherOrHusband_Designation: res.object.fatherOrHusband_Designation,
                        fatherOrHusband_Name: res.object.fatherOrHusband_Name,
                        pers_No: res.object.pers_No,
                        rankName: res.object.rankName,
                        old_ICard_No: res.object.old_ICard_No,
                        place_of_Birth: res.object.place_of_Birth,
                        place_of_Issue: res.object.place_of_Issue,
                        permanent_Home_Address: res.object.permanent_Home_Address,
                        unit_crops_ship: res.object.unit_crops_ship,
                        permanent_Home_Address_Elsewhere: res.object.permanent_Home_Address_Elsewhere,
                        reason_for_Change_ICard: res.object.reason_for_Change_ICard,
                        permanent_Home_Address_India: res.object.permanent_Home_Address_India,
                        height: res.object.height,
                        color_of_Hair: res.object.color_of_Hair,
                        color_of_Eyes: res.object.color_of_Eyes,
                        station: res.object.station,
                        request_type: res.object.request_type,
                        // date_of_issue: res.object.date_of_issue ,
                        // date_of_Birth: res.object.date_of_Birth,
                        name: res.object.name,
                        // fathername: res.object.fathername,
                        signature_name: res.object.signature_name,
                        // todayDate: res.object.todayDate,
                        todayDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(res.object.todayDate, 'yyyy-MM-dd', _this.localID),
                        retd: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(res.object.todayDate, 'yyyy-MM-dd', _this.localID),
                        date_of_CommissionOrEnrolment: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(res.object.date_of_CommissionOrEnrolment, 'yyyy-MM-dd', _this.localID),
                        date_of_Birth: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(res.object.date_of_Birth, 'yyyy-MM-dd', _this.localID),
                        date_of_Retirement: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(res.object.date_of_Retirement, 'yyyy-MM-dd', _this.localID),
                        date_of_issue: Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(res.object.date_of_issue, 'yyyy-MM-dd', _this.localID),
                        status: res.object.status,
                    });
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            });
        }
    };
    Object.defineProperty(AddCardComponent.prototype, "f", {
        get: function () {
            return this.addCardForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddCardComponent.prototype.goBack = function () {
        this.router.navigate(['main/adjutant-branch/i-card']);
    };
    // date_of_Birth:any;
    // cardDAte(){
    //   this.addCardForm.patchValue({
    //     todayDate:formatDate(todayDate,'yyyy-MM-dd',this.localID),
    //     retd:formatDate(todayDate,'yyyy-MM-dd',this.localID),
    //     date_of_CommissionOrEnrolment:formatDate(date_of_CommissionOrEnrolment,'yyyy-MM-dd',this.localID),
    //     date_of_Birth:formatDate(this.date_of_Birth,'yyyy-MM-dd',this.localID),
    //     place_of_Birth:formatDate(place_of_Birth,'yyyy-MM-dd',this.localID),
    //     date_of_issue:formatDate(date_of_issue,'yyyy-MM-dd',this.localID),
    //   })
    //   console.log(this.cardDAte);
    // }
    AddCardComponent.prototype.addCard = function () {
        var _this = this;
        console.log(this.addCardForm.value);
        if (this.addCardForm.invalid || !this.isDoc) {
            this.isError = true;
            this.service.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.service.addICard(this.addCardForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/adjutant-branch/i-card']);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddCardComponent.prototype.charCount = function (e, t) {
        if (t == 'desc')
            this.descLength = e.target.value.length;
        if (t == 'remarks')
            this.RemarksLength = e.target.value.length;
    };
    AddCardComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l.file
            }
        });
    };
    AddCardComponent.prototype.onSelectDoc = function (e) {
        console.log(this.docUrl);
        var file = e.target.files[0];
        if (file.size > 5242880) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 5 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addCardForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddCardComponent.prototype.updateCard = function () {
        var _this = this;
        this.spinner.show();
        // console.log("Bdo", this.addBdoForm.value);
        this.addCardForm.value.color_of_Eyes;
        console.log(this.addCardForm.value.request_type, "request_type");
        this.addCardForm.value.id = this.id;
        if (this.addCardForm.valid) {
            this.service.updateICard(this.addCardForm.value).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddCardComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.service.openSnackbar(res.message);
            this.router.navigate(['main/adjutant-branch/i-card']);
            if (this.router.url.includes('main/academic-depart'))
                this.router.navigate(['main/adjutant-branch/i-card']);
        }
        else {
            this.spinner.hide();
            this.service.openSnackbar(res.message);
        }
    };
    AddCardComponent.ctorParameters = function () { return [
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_9__["AdjutantService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddCardComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-card',
            template: _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_card_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_9__["AdjutantService"], String, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddCardComponent);
    return AddCardComponent;
}());



/***/ }),

/***/ "dE+q":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/i-card/add-card/add-card.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button>\r\n        Academic Branch > I Card\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addCardForm\">\r\n            <div class=\"row border acc_doc\">\r\n                <div class=\"edi_btn\">\r\n                    <h3>Personal Details</h3>\r\n                </div>\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Name<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n                            placeholder=\"Name\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter Name</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Father/Husband's Name <span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"fatherOrHusband_Name\"\r\n                            placeholder=\"Father/Husband's Name\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.fatherOrHusband_Name.errors && f.fatherOrHusband_Name.errors.required && isError\">Please Enter Father/Husband's Name</span>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Father/Husband's Designation <span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"fatherOrHusband_Designation\"\r\n                            placeholder=\"Father Husband_Designation\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.fatherOrHusband_Designation.errors && f.fatherOrHusband_Designation.errors.required && isError\">Please Enter Father/Husband's Designation</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Name of Issuing Auth<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name_of_issuing_Auth\"\r\n                            placeholder=\"Name of issuing Auth\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.name_of_issuing_Auth.errors && f.name_of_issuing_Auth.errors.required && isError\">Please Enter Name of Issuing Auth</span>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Pers No<span class=\"required\">*</span></label>\r\n                        <input id=\"pers_No\" type=\"text\" class=\"form-control\" (keypress)=\"keyPress($event)\" maxlength=\"10\" formControlName=\"pers_No\"\r\n                            placeholder=\"Personal No\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.pers_No.errors && f.pers_No.errors.required && isError\">Please Enter Number</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Rank<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"rankName\"\r\n                            placeholder=\"Rank\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.rankName.errors && f.rankName.errors.required && isError\">Please Enter Rank</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Old I/Card No<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"old_ICard_No\"\r\n                            placeholder=\"Old I/Card No\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.old_ICard_No.errors && f.old_ICard_No.errors.required && isError\">Please Enter CardNo</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Date of Issue<span class=\"required\">*</span></label>\r\n                        <input id=\"scheduleDate\" type=\"date\" class=\"form-control\" formControlName=\"date_of_issue\"\r\n                            >\r\n                            <span class=\"validation_msg\" *ngIf=\"f.date_of_issue.errors && f.date_of_issue.errors.required && isError\">Please Enter Date of Issue</span>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Place of Issue<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"place_of_Issue\"\r\n                            placeholder=\"Place of Issue\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.place_of_Issue.errors && f.place_of_Issue.errors.required && isError\">Please Enter Place of Issue</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Place of Birth<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"place_of_Birth\"\r\n                            placeholder=\"Place of Birth\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.place_of_Birth.errors && f.place_of_Birth.errors.required && isError\">Please Enter Place of Birth</span>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"scheduleDate\"> Date of Birth<span class=\"required\">*</span></label>\r\n                        <input id=\"scheduleDate\" type=\"date\"  class=\"form-control\" formControlName=\"date_of_Birth\"\r\n                            >\r\n                        <span class=\"validation_msg\" *ngIf=\"f.date_of_Birth.errors && f.date_of_Birth.errors.required && isError\">Date of Birth</span>\r\n\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"scheduleDate\">Date of Commission/Enrollment<span class=\"required\">*</span></label>\r\n                        <input id=\"datepicker1\" type=\"date\"  class=\"form-control\" formControlName=\"date_of_CommissionOrEnrolment\"\r\n                            >\r\n                            <span class=\"validation_msg\" *ngIf=\"f.date_of_CommissionOrEnrolment.errors && f.date_of_CommissionOrEnrolment.errors.required && isError\">Date of Commission/Enrolment</span>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                \r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"remarks\">Reason for Change I-Card<span class=\"required\">*</span></label>\r\n                        <textarea matInput placeholder=\"Maximum 500 Characters\" class=\"form-control\"\r\n                            (input)=\"charCount($event,'remarks')\" maxlength=\"1500\" formControlName=\"reason_for_Change_ICard\"></textarea>\r\n                            <span class=\"validation_msg\" *ngIf=\"f.reason_for_Change_ICard.errors && f.reason_for_Change_ICard.errors.required && isError\">Reason for Change I-Card</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Date of Retirement</label>\r\n                        <input id=\"scheduleDate\" type=\"date\" class=\"form-control\" formControlName=\"date_of_Retirement\"\r\n                            >\r\n                            <span class=\"validation_msg\" *ngIf=\"f.date_of_Retirement.errors && f.date_of_Retirement.errors.required && isError\">Date of Retirement</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Unit/Corps/Ship<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"unit_crops_ship\"\r\n                            placeholder=\"Unit\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.unit_crops_ship.errors && f.unit_crops_ship.errors.required && isError\">Date of Unit/Corps/Ship</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row border acc_doc\">\r\n                <div class=\"edi_btn\">\r\n                    <h3>Permanent Home Address</h3>\r\n                </div>\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">India</label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"permanent_Home_Address_India\"\r\n                            placeholder=\"Address\">\r\n                        \r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Elsewhere</label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"permanent_Home_Address_Elsewhere\"\r\n                            placeholder=\"Address\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row border acc_doc\">\r\n                <div class=\"edi_btn\">\r\n                    <h3>Visible Identification Mark</h3>\r\n                </div>\r\n                <div class=\"col-md-12 d-flex plr-0\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"position\">Height<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"height\"\r\n                            placeholder=\"height\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.height.errors && f.height.errors.required && isError\">please enter Height</span>    \r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"position\">Color of Hair<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"color_of_Hair\"\r\n                            placeholder=\"Color of Hair\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.color_of_Hair.errors && f.color_of_Hair.errors.required && isError\">please enter Color of Hair</span>    \r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"position\">Color of Eyes<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"color_of_Eyes\"\r\n                            placeholder=\"Color of Eyes\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.color_of_Eyes.errors && f.color_of_Eyes.errors.required && isError\">please enter Color of Eyes</span>    \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Height<span class=\"required\">*</span></label>\r\n               <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"height\"\r\n               placeholder=\"height\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"position\">Color of Hair<span class=\"required\">*</span></label>\r\n                <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"haircolor\"\r\n                placeholder=\"Color of Hair\">\r\n                \r\n             </div>\r\n        </div> \r\n\r\n        <div class=\"row\">\r\n            \r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"position\">Color of Eyes<span class=\"required\">*</span></label>\r\n                <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"eyecolor\"\r\n                placeholder=\"Color of Eyes\">\r\n                \r\n             </div>\r\n        </div>  -->\r\n\r\n            <div class=\"row border acc_doc\">\r\n                <!-- <div  class=\"edi_btn\"><h3>Witnesses</h3></div> -->\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Station</label>\r\n                    <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"station\"\r\n                     value=\"Dehradun\"  >\r\n                     \r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Date <span class=\"required\">*</span></label>\r\n                    <input id=\"scheduleDate\" type=\"date\" class=\"form-control\" formControlName=\"todayDate\"\r\n                        >\r\n                        <span class=\"validation_msg\" *ngIf=\"f.todayDate.errors && f.todayDate.errors.required && isError\">please enter Date</span>    \r\n\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Signature<span class=\"required\">*</span></label>\r\n                    <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"signature_name\"\r\n                        placeholder=\"signature\">\r\n                        <span class=\"validation_msg\"\r\n                        *ngIf=\"f.signature_name.errors && f.signature_name.errors.required && isError\">Please Enter Name</span>\r\n                </div>\r\n            </div>\r\n\r\n           \r\n\r\n\r\n            <!-- <div class=\"row\"  *ngIf=\"id\" [readonly]=\"true\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"request_type\">Request Status</label>\r\n                    <select name=\"\" id=\"\" class=\"form-control \" disabled formControlName=\"request_type\">\r\n                        <option value=\"\"  disabled selected hidden>Requested</option>\r\n                        <option value=\"Pending\">On Hold</option>\r\n                        <option value=\"Completed\">Under Process</option>\r\n                        <option value=\"Rejected\">Issued</option>\r\n                    <option value=\"Rejected\">Rejected</option>\r\n\r\n                    </select>\r\n                </div>\r\n            </div> -->\r\n      \r\n            <button mat-raised-button *ngIf=\"pageTitle=='Add CARD'\" (click)=\"addCard()\">Add Request</button>\r\n            <button mat-raised-button *ngIf=\"pageTitle=='View CARD'\" (click)=\"updateCard()\">Update Request</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "hpeV":
/*!******************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/i-card/add-card/add-card.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edi_btn {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  margin-bottom: 10px;\n  background: #eee;\n  width: 100%;\n}\n\n.edi_btn h3 {\n  font-size: 16px;\n  color: #721a0c;\n  letter-spacing: 0;\n  margin: 0px;\n}\n\n.row.border.acc_doc {\n  margin: 15px 0px;\n  padding-bottom: 15px;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.col-md-12.d-flex.plr-0 {\n  padding: 0;\n}\n\n.d-flex.d-row {\n  width: 100%;\n}");

/***/ }),

/***/ "kv+t":
/*!*************************************************************************!*\
  !*** ./src/app/main/academic-depart/i-card/add-card/add-card.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardModule", function() { return AddCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-card.component */ "9f4Y");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_card_component__WEBPACK_IMPORTED_MODULE_8__["AddCardComponent"]
    }
];
var AddCardModule = /** @class */ (function () {
    function AddCardModule() {
    }
    AddCardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_card_component__WEBPACK_IMPORTED_MODULE_8__["AddCardComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
            ]
        })
    ], AddCardModule);
    return AddCardModule;
}());



/***/ }),

/***/ "lTUh":
/*!******************************************************************************!*\
  !*** ./src/app/main/academic-depart/i-card/add-card/add-card.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edi_btn {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  margin-bottom: 10px;\n  background: #eee;\n  width: 100%;\n}\n\n.edi_btn h3 {\n  font-size: 16px;\n  color: #721a0c;\n  letter-spacing: 0;\n  margin: 0px;\n}\n\n.row.border.acc_doc {\n  margin: 15px 0px;\n  padding-bottom: 15px;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.col-md-12.d-flex.plr-0 {\n  padding: 0;\n}\n\n.d-flex.d-row {\n  width: 100%;\n}");

/***/ }),

/***/ "mu+B":
/*!************************************************************************!*\
  !*** ./src/app/main/gs-branch/i-card/add-card/add-card.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edi_btn {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  margin-bottom: 10px;\n  background: #eee;\n  width: 100%;\n}\n\n.edi_btn h3 {\n  font-size: 16px;\n  color: #721a0c;\n  letter-spacing: 0;\n  margin: 0px;\n}\n\n.row.border.acc_doc {\n  margin: 15px 0px;\n  padding-bottom: 15px;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.col-md-12.d-flex.plr-0 {\n  padding: 0;\n}\n\n.d-flex.d-row {\n  width: 100%;\n}");

/***/ }),

/***/ "oXJ1":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-battalion/i-card/add-card/add-card.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button>\r\n        TRG Battalion Branch > I Card\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addCardForm\">\r\n            <div class=\"row border acc_doc\">\r\n                <div class=\"edi_btn\">\r\n                    <h3>Personal Details</h3>\r\n                </div>\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Name<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n                            placeholder=\"Name\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter Name</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Father/Husband's Name <span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"fatherOrHusband_Name\"\r\n                            placeholder=\"Father/Husband's Name\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.fatherOrHusband_Name.errors && f.fatherOrHusband_Name.errors.required && isError\">Please Enter Father/Husband's Name</span>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Father/Husband's Designation <span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"fatherOrHusband_Designation\"\r\n                            placeholder=\"Father Husband_Designation\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.fatherOrHusband_Designation.errors && f.fatherOrHusband_Designation.errors.required && isError\">Please Enter Father/Husband's Designation</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Name of Issuing Auth<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name_of_issuing_Auth\"\r\n                            placeholder=\"Name of issuing Auth\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.name_of_issuing_Auth.errors && f.name_of_issuing_Auth.errors.required && isError\">Please Enter Name of Issuing Auth</span>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Pers No<span class=\"required\">*</span></label>\r\n                        <input id=\"pers_No\" type=\"text\" class=\"form-control\" (keypress)=\"keyPress($event)\" maxlength=\"10\" formControlName=\"pers_No\"\r\n                            placeholder=\"Personal No\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.pers_No.errors && f.pers_No.errors.required && isError\">Please Enter Number</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Rank<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"rankName\"\r\n                            placeholder=\"Rank\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.rankName.errors && f.rankName.errors.required && isError\">Please Enter Rank</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Old I/Card No<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"old_ICard_No\"\r\n                            placeholder=\"Old I/Card No\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.old_ICard_No.errors && f.old_ICard_No.errors.required && isError\">Please Enter CardNo</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Date of Issue<span class=\"required\">*</span></label>\r\n                        <input id=\"scheduleDate\" type=\"date\" class=\"form-control\" formControlName=\"date_of_issue\"\r\n                            >\r\n                            <span class=\"validation_msg\" *ngIf=\"f.date_of_issue.errors && f.date_of_issue.errors.required && isError\">Please Enter Date of Issue</span>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Place of Issue<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"place_of_Issue\"\r\n                            placeholder=\"Place of Issue\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.place_of_Issue.errors && f.place_of_Issue.errors.required && isError\">Please Enter Place of Issue</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Place of Birth<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"place_of_Birth\"\r\n                            placeholder=\"Place of Birth\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.place_of_Birth.errors && f.place_of_Birth.errors.required && isError\">Please Enter Place of Birth</span>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"scheduleDate\"> Date of Birth<span class=\"required\">*</span></label>\r\n                        <input id=\"scheduleDate\" type=\"date\"  class=\"form-control\" formControlName=\"date_of_Birth\"\r\n                            >\r\n                        <span class=\"validation_msg\" *ngIf=\"f.date_of_Birth.errors && f.date_of_Birth.errors.required && isError\">Date of Birth</span>\r\n\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"scheduleDate\">Date of Commission/Enrollment<span class=\"required\">*</span></label>\r\n                        <input id=\"datepicker1\" type=\"date\"  class=\"form-control\" formControlName=\"date_of_CommissionOrEnrolment\"\r\n                            >\r\n                            <span class=\"validation_msg\" *ngIf=\"f.date_of_CommissionOrEnrolment.errors && f.date_of_CommissionOrEnrolment.errors.required && isError\">Date of Commission/Enrolment</span>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                \r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"remarks\">Reason for Change I-Card<span class=\"required\">*</span></label>\r\n                        <textarea matInput placeholder=\"Maximum 500 Characters\" class=\"form-control\"\r\n                            (input)=\"charCount($event,'remarks')\" maxlength=\"1500\" formControlName=\"reason_for_Change_ICard\"></textarea>\r\n                            <span class=\"validation_msg\" *ngIf=\"f.reason_for_Change_ICard.errors && f.reason_for_Change_ICard.errors.required && isError\">Reason for Change I-Card</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Date of Retirement</label>\r\n                        <input id=\"scheduleDate\" type=\"date\" class=\"form-control\" formControlName=\"date_of_Retirement\"\r\n                            >\r\n                            <span class=\"validation_msg\" *ngIf=\"f.date_of_Retirement.errors && f.date_of_Retirement.errors.required && isError\">Date of Retirement</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Unit/Corps/Ship<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"unit_crops_ship\"\r\n                            placeholder=\"Unit\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.unit_crops_ship.errors && f.unit_crops_ship.errors.required && isError\">Date of Unit/Corps/Ship</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row border acc_doc\">\r\n                <div class=\"edi_btn\">\r\n                    <h3>Permanent Home Address</h3>\r\n                </div>\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">India</label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"permanent_Home_Address_India\"\r\n                            placeholder=\"Address\">\r\n                        \r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Elsewhere</label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"permanent_Home_Address_Elsewhere\"\r\n                            placeholder=\"Address\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row border acc_doc\">\r\n                <div class=\"edi_btn\">\r\n                    <h3>Visible Identification Mark</h3>\r\n                </div>\r\n                <div class=\"col-md-12 d-flex plr-0\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"position\">Height<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"height\"\r\n                            placeholder=\"height\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.height.errors && f.height.errors.required && isError\">please enter Height</span>    \r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"position\">Color of Hair<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"color_of_Hair\"\r\n                            placeholder=\"Color of Hair\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.color_of_Hair.errors && f.color_of_Hair.errors.required && isError\">please enter Color of Hair</span>    \r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"position\">Color of Eyes<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"color_of_Eyes\"\r\n                            placeholder=\"Color of Eyes\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.color_of_Eyes.errors && f.color_of_Eyes.errors.required && isError\">please enter Color of Eyes</span>    \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Height<span class=\"required\">*</span></label>\r\n               <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"height\"\r\n               placeholder=\"height\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"position\">Color of Hair<span class=\"required\">*</span></label>\r\n                <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"haircolor\"\r\n                placeholder=\"Color of Hair\">\r\n                \r\n             </div>\r\n        </div> \r\n\r\n        <div class=\"row\">\r\n            \r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"position\">Color of Eyes<span class=\"required\">*</span></label>\r\n                <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"eyecolor\"\r\n                placeholder=\"Color of Eyes\">\r\n                \r\n             </div>\r\n        </div>  -->\r\n\r\n            <div class=\"row border acc_doc\">\r\n                <!-- <div  class=\"edi_btn\"><h3>Witnesses</h3></div> -->\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Station</label>\r\n                    <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"station\"\r\n                     value=\"Dehradun\"  >\r\n                     \r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Date <span class=\"required\">*</span></label>\r\n                    <input id=\"scheduleDate\" type=\"date\" class=\"form-control\" formControlName=\"todayDate\"\r\n                        >\r\n                        <span class=\"validation_msg\" *ngIf=\"f.todayDate.errors && f.todayDate.errors.required && isError\">please enter Date</span>    \r\n\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Signature<span class=\"required\">*</span></label>\r\n                    <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"signature_name\"\r\n                        placeholder=\"signature\">\r\n                        <span class=\"validation_msg\"\r\n                        *ngIf=\"f.signature_name.errors && f.signature_name.errors.required && isError\">Please Enter Name</span>\r\n                </div>\r\n            </div>\r\n\r\n           \r\n\r\n\r\n            <!-- <div class=\"row\"  *ngIf=\"id\" [readonly]=\"true\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"request_type\">Request Status</label>\r\n                    <select name=\"\" id=\"\" class=\"form-control \" disabled formControlName=\"request_type\">\r\n                        <option value=\"\"  disabled selected hidden>Requested</option>\r\n                        <option value=\"Pending\">On Hold</option>\r\n                        <option value=\"Completed\">Under Process</option>\r\n                        <option value=\"Rejected\">Issued</option>\r\n                    <option value=\"Rejected\">Rejected</option>\r\n\r\n                    </select>\r\n                </div>\r\n            </div> -->\r\n      \r\n            <button mat-raised-button *ngIf=\"pageTitle=='Add CARD'\" (click)=\"addCard()\">Add Request</button>\r\n            <button mat-raised-button *ngIf=\"pageTitle=='View CARD'\" (click)=\"updateCard()\">Update Request</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "pO4K":
/*!**************************************************************************!*\
  !*** ./src/app/main/trg-battalion/i-card/add-card/add-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardComponent", function() { return AddCardComponent; });
/* harmony import */ var _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-card.component.html */ "oXJ1");
/* harmony import */ var _add_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-card.component.scss */ "PvXT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddCardComponent = /** @class */ (function () {
    function AddCardComponent(dialog, localID, spinner, route, fb, router, adminservice, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add CARD";
        this.battalions = [];
        this.descLength = 0;
        this.RemarksLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addCardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.localID = localID;
        this.addCardForm = this.fb.group({
            name_of_issuing_Auth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fatherOrHusband_Designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fatherOrHusband_Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pers_No: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            old_ICard_No: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            place_of_Birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            place_of_Issue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            permanent_Home_Address_Elsewhere: [''],
            permanent_Home_Address_India: [''],
            date_of_CommissionOrEnrolment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason_for_Change_ICard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date_of_Retirement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            color_of_Hair: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            color_of_Eyes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            station: ['Dehradun'],
            unit_crops_ship: ['',],
            date_of_issue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            date_of_Birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            request_type: [''],
            signature_name: [''],
            department: [localStorage.getItem('department')],
            todayDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        // this.getBattalion();
    }
    AddCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-card')) {
            this.pageTitle = 'Add CARD';
        }
        else if (this.router.url.includes('view-card')) {
            this.spinner.show();
            this.pageTitle = 'View CARD';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adminservice.getICardById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addCardForm.patchValue({
                        id: res.object.id,
                        name_of_issuing_Auth: res.object.name_of_issuing_Auth,
                        fatherOrHusband_Designation: res.object.fatherOrHusband_Designation,
                        fatherOrHusband_Name: res.object.fatherOrHusband_Name,
                        pers_No: res.object.pers_No,
                        rankName: res.object.rankName,
                        old_ICard_No: res.object.old_ICard_No,
                        place_of_Birth: res.object.place_of_Birth,
                        place_of_Issue: res.object.place_of_Issue,
                        permanent_Home_Address: res.object.permanent_Home_Address,
                        unit_crops_ship: res.object.unit_crops_ship,
                        permanent_Home_Address_Elsewhere: res.object.permanent_Home_Address_Elsewhere,
                        reason_for_Change_ICard: res.object.reason_for_Change_ICard,
                        permanent_Home_Address_India: res.object.permanent_Home_Address_India,
                        height: res.object.height,
                        color_of_Hair: res.object.color_of_Hair,
                        color_of_Eyes: res.object.color_of_Eyes,
                        station: res.object.station,
                        request_type: res.object.request_type,
                        // date_of_issue: res.object.date_of_issue ,
                        // date_of_Birth: res.object.date_of_Birth,
                        name: res.object.name,
                        // fathername: res.object.fathername,
                        signature_name: res.object.signature_name,
                        // todayDate: res.object.todayDate,
                        todayDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.todayDate, 'yyyy-MM-dd', _this.localID),
                        retd: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.todayDate, 'yyyy-MM-dd', _this.localID),
                        date_of_CommissionOrEnrolment: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.date_of_CommissionOrEnrolment, 'yyyy-MM-dd', _this.localID),
                        date_of_Birth: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.date_of_Birth, 'yyyy-MM-dd', _this.localID),
                        date_of_Retirement: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.date_of_Retirement, 'yyyy-MM-dd', _this.localID),
                        date_of_issue: Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(res.object.date_of_issue, 'yyyy-MM-dd', _this.localID),
                        status: res.object.status,
                    });
                    // this.descLength =  res.object.details.length;
                    // this.docUrl = res.object.doc
                    _this.isDoc = true;
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            });
        }
    };
    Object.defineProperty(AddCardComponent.prototype, "f", {
        get: function () {
            return this.addCardForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddCardComponent.prototype.goBack = function () {
        this.router.navigate(['main/trg-battalion/i-card']);
    };
    AddCardComponent.prototype.addCard = function () {
        var _this = this;
        console.log(this.addCardForm.value);
        if (this.addCardForm.invalid) {
            this.isError = true;
            this.adminservice.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.adminservice.addICard(this.addCardForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/trg-battalion/i-card']);
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
    AddCardComponent.prototype.charCount = function (e, t) {
        if (t == 'desc')
            this.descLength = e.target.value.length;
        if (t == 'remarks')
            this.RemarksLength = e.target.value.length;
    };
    AddCardComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l.file
            }
        });
    };
    AddCardComponent.prototype.onSelectDoc = function (e) {
        console.log(this.docUrl);
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.adminservice.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addCardForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddCardComponent.prototype.updateCard = function () {
        var _this = this;
        this.spinner.show();
        if (this.addCardForm.valid) {
            this.addCardForm.value.color_of_Eyes;
            console.log(this.addCardForm.value.color_of_Eyes, "this.addCardForm.value.color_of_Eyes;");
            this.addCardForm.value.id = this.id;
            this.adminservice.updateICard(this.addCardForm.value).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddCardComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
            this.router.navigate(['main/trg-battalion/i-card']);
            if (this.router.url.includes('main/academic-depart'))
                this.router.navigate(['main/academic-depart/it']);
        }
        else {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
        }
    };
    AddCardComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddCardComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddCardComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-card',
            template: _raw_loader_add_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_card_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], String, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddCardComponent);
    return AddCardComponent;
}());



/***/ }),

/***/ "xzQ4":
/*!*************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/i-card/add-card/add-card.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardModule", function() { return AddCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-card.component */ "coFe");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_card_component__WEBPACK_IMPORTED_MODULE_8__["AddCardComponent"]
    }
];
var AddCardModule = /** @class */ (function () {
    function AddCardModule() {
    }
    AddCardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_card_component__WEBPACK_IMPORTED_MODULE_8__["AddCardComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
            ]
        })
    ], AddCardModule);
    return AddCardModule;
}());



/***/ }),

/***/ "y6t/":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/i-card/add-card/add-card.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button>\r\n        TRG TEAM Branch > I Card\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addCardForm\">\r\n            <div class=\"row border acc_doc\">\r\n                <div class=\"edi_btn\">\r\n                    <h3>Personal Details</h3>\r\n                </div>\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Name<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n                            placeholder=\"Name\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter Name</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Father/Husband's Name <span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"fatherOrHusband_Name\"\r\n                            placeholder=\"Father/Husband's Name\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.fatherOrHusband_Name.errors && f.fatherOrHusband_Name.errors.required && isError\">Please Enter Father/Husband's Name</span>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Father/Husband's Designation <span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"fatherOrHusband_Designation\"\r\n                            placeholder=\"Father Husband_Designation\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.fatherOrHusband_Designation.errors && f.fatherOrHusband_Designation.errors.required && isError\">Please Enter Father/Husband's Designation</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Name of Issuing Auth<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name_of_issuing_Auth\"\r\n                            placeholder=\"Name of issuing Auth\">\r\n                            <span class=\"validation_msg\"\r\n                            *ngIf=\"f.name_of_issuing_Auth.errors && f.name_of_issuing_Auth.errors.required && isError\">Please Enter Name of Issuing Auth</span>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Pers No<span class=\"required\">*</span></label>\r\n                        <input id=\"pers_No\" type=\"text\" class=\"form-control\" (keypress)=\"keyPress($event)\" maxlength=\"10\" formControlName=\"pers_No\"\r\n                            placeholder=\"Personal No\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.pers_No.errors && f.pers_No.errors.required && isError\">Please Enter Number</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Rank<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"rankName\"\r\n                            placeholder=\"Rank\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.rankName.errors && f.rankName.errors.required && isError\">Please Enter Rank</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Old I/Card No<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"old_ICard_No\"\r\n                            placeholder=\"Old I/Card No\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.old_ICard_No.errors && f.old_ICard_No.errors.required && isError\">Please Enter CardNo</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Date of Issue<span class=\"required\">*</span></label>\r\n                        <input id=\"scheduleDate\" type=\"date\" class=\"form-control\" formControlName=\"date_of_issue\"\r\n                            >\r\n                            <span class=\"validation_msg\" *ngIf=\"f.date_of_issue.errors && f.date_of_issue.errors.required && isError\">Please Enter Date of Issue</span>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Place of Issue<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"place_of_Issue\"\r\n                            placeholder=\"Place of Issue\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.place_of_Issue.errors && f.place_of_Issue.errors.required && isError\">Please Enter Place of Issue</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Place of Birth<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"place_of_Birth\"\r\n                            placeholder=\"Place of Birth\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.place_of_Birth.errors && f.place_of_Birth.errors.required && isError\">Please Enter Place of Birth</span>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"scheduleDate\"> Date of Birth<span class=\"required\">*</span></label>\r\n                        <input id=\"scheduleDate\" type=\"date\"  class=\"form-control\" formControlName=\"date_of_Birth\"\r\n                            >\r\n                        <span class=\"validation_msg\" *ngIf=\"f.date_of_Birth.errors && f.date_of_Birth.errors.required && isError\">Date of Birth</span>\r\n\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"scheduleDate\">Date of Commission/Enrollment<span class=\"required\">*</span></label>\r\n                        <input id=\"datepicker1\" type=\"date\"  class=\"form-control\" formControlName=\"date_of_CommissionOrEnrolment\"\r\n                            >\r\n                            <span class=\"validation_msg\" *ngIf=\"f.date_of_CommissionOrEnrolment.errors && f.date_of_CommissionOrEnrolment.errors.required && isError\">Date of Commission/Enrolment</span>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                \r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-12\">\r\n                        <label for=\"remarks\">Reason for Change I-Card<span class=\"required\">*</span></label>\r\n                        <textarea matInput placeholder=\"Maximum 500 Characters\" class=\"form-control\"\r\n                            (input)=\"charCount($event,'remarks')\" maxlength=\"1500\" formControlName=\"reason_for_Change_ICard\"></textarea>\r\n                            <span class=\"validation_msg\" *ngIf=\"f.reason_for_Change_ICard.errors && f.reason_for_Change_ICard.errors.required && isError\">Reason for Change I-Card</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Date of Retirement</label>\r\n                        <input id=\"scheduleDate\" type=\"date\" class=\"form-control\" formControlName=\"date_of_Retirement\"\r\n                            >\r\n                            <span class=\"validation_msg\" *ngIf=\"f.date_of_Retirement.errors && f.date_of_Retirement.errors.required && isError\">Date of Retirement</span>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Unit/Corps/Ship<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"unit_crops_ship\"\r\n                            placeholder=\"Unit\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.unit_crops_ship.errors && f.unit_crops_ship.errors.required && isError\">Date of Unit/Corps/Ship</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row border acc_doc\">\r\n                <div class=\"edi_btn\">\r\n                    <h3>Permanent Home Address</h3>\r\n                </div>\r\n                <div class=\"d-flex d-row\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">India</label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"permanent_Home_Address_India\"\r\n                            placeholder=\"Address\">\r\n                        \r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label for=\"position\">Elsewhere</label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"permanent_Home_Address_Elsewhere\"\r\n                            placeholder=\"Address\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row border acc_doc\">\r\n                <div class=\"edi_btn\">\r\n                    <h3>Visible Identification Mark</h3>\r\n                </div>\r\n                <div class=\"col-md-12 d-flex plr-0\">\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"position\">Height<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"height\"\r\n                            placeholder=\"height\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.height.errors && f.height.errors.required && isError\">please enter Height</span>    \r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"position\">Color of Hair<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"color_of_Hair\"\r\n                            placeholder=\"Color of Hair\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.color_of_Hair.errors && f.color_of_Hair.errors.required && isError\">please enter Color of Hair</span>    \r\n                    </div>\r\n                    <div class=\"form-group col-md-4\">\r\n                        <label for=\"position\">Color of Eyes<span class=\"required\">*</span></label>\r\n                        <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"color_of_Eyes\"\r\n                            placeholder=\"Color of Eyes\">\r\n                            <span class=\"validation_msg\" *ngIf=\"f.color_of_Eyes.errors && f.color_of_Eyes.errors.required && isError\">please enter Color of Eyes</span>    \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Height<span class=\"required\">*</span></label>\r\n               <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"height\"\r\n               placeholder=\"height\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"position\">Color of Hair<span class=\"required\">*</span></label>\r\n                <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"haircolor\"\r\n                placeholder=\"Color of Hair\">\r\n                \r\n             </div>\r\n        </div> \r\n\r\n        <div class=\"row\">\r\n            \r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"position\">Color of Eyes<span class=\"required\">*</span></label>\r\n                <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"eyecolor\"\r\n                placeholder=\"Color of Eyes\">\r\n                \r\n             </div>\r\n        </div>  -->\r\n\r\n            <div class=\"row border acc_doc\">\r\n                <!-- <div  class=\"edi_btn\"><h3>Witnesses</h3></div> -->\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Station</label>\r\n                    <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"station\"\r\n                     value=\"Dehradun\"  >\r\n                     \r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Date <span class=\"required\">*</span></label>\r\n                    <input id=\"scheduleDate\" type=\"date\" class=\"form-control\" formControlName=\"todayDate\"\r\n                        >\r\n                        <span class=\"validation_msg\" *ngIf=\"f.todayDate.errors && f.todayDate.errors.required && isError\">please enter Date</span>    \r\n\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"position\">Signature<span class=\"required\">*</span></label>\r\n                    <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"signature_name\"\r\n                        placeholder=\"signature\">\r\n                        <span class=\"validation_msg\"\r\n                        *ngIf=\"f.signature_name.errors && f.signature_name.errors.required && isError\">Please Enter Name</span>\r\n                </div>\r\n            </div>\r\n\r\n           \r\n\r\n\r\n            <!-- <div class=\"row\"  *ngIf=\"id\" [readonly]=\"true\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"request_type\">Request Status</label>\r\n                    <select name=\"\" id=\"\" class=\"form-control \" disabled formControlName=\"request_type\">\r\n                        <option value=\"\"  disabled selected hidden>Requested</option>\r\n                        <option value=\"Pending\">On Hold</option>\r\n                        <option value=\"Completed\">Under Process</option>\r\n                        <option value=\"Rejected\">Issued</option>\r\n                    <option value=\"Rejected\">Rejected</option>\r\n\r\n                    </select>\r\n                </div>\r\n            </div> -->\r\n      \r\n            <button mat-raised-button *ngIf=\"pageTitle=='Add CARD'\" (click)=\"addCard()\">Add Request</button>\r\n            <button mat-raised-button *ngIf=\"pageTitle=='View CARD'\" (click)=\"updateCard()\">Update Request</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "zGCH":
/*!*******************************************************************!*\
  !*** ./src/app/main/gs-branch/i-card/add-card/add-card.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardModule", function() { return AddCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-card.component */ "cmLG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_card_component__WEBPACK_IMPORTED_MODULE_8__["AddCardComponent"]
    }
];
var AddCardModule = /** @class */ (function () {
    function AddCardModule() {
    }
    AddCardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_card_component__WEBPACK_IMPORTED_MODULE_8__["AddCardComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
            ]
        })
    ], AddCardModule);
    return AddCardModule;
}());



/***/ })

}]);