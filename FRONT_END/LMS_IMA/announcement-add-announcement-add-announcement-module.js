(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["announcement-add-announcement-add-announcement-module"],{

/***/ "+miy":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/announcement/add-announcement/add-announcement.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\">\r\n    <button mat-icon-button (click)=\"goBack()\">\r\n      <mat-icon>chevron_left</mat-icon>\r\n    </button>\r\n    Home <span class=\"sub-menu1\"> > Announcements <span class=\"sub-menu1\"> > {{pageTitle}}</span></span>\r\n  </h4>\r\n</div>\r\n<mat-card>\r\n  <div class=\"top-br\">\r\n    <form [formGroup]=\"addAnnouncementForm\">\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <label for=\"awards\">Announcement Description <span class=\"char-count\"> ({{descLength}}/1500) </span> <span\r\n              class=\"required\">*</span></label>\r\n          <!-- <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\"> -->\r\n          <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\" (input)=\"charCount($event)\"\r\n            maxlength=\"1500\" formControlName=\"announcementDescp\"></textarea>\r\n          <span class=\"val_msg\"\r\n            *ngIf=\"f.announcementDescp.errors && f.announcementDescp.errors.required && isError\">*Please Enter\r\n            announcementDescp</span>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"date\">Valid Till<span class=\"required\">*</span></label>\r\n          <input id=\"date\" #scheduleDate type=\"date\" [min]=\"minDate\" class=\"form-control\" (change)=\"dateChanged($event)\"\r\n            formControlName=\"validTill\">\r\n          <!-- <span  class=\"validation_msg\"  *ngIf=\"f.validTill.touched && f.validTill.invalid\" >Please Select validTill</span> -->\r\n          <span class=\"validation_msg\" *ngIf=\"f.validTill.errors && f.validTill.errors.required && isError\">This\r\n            Field is Required</span>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">Document (Optional)</label>\r\n        <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx,png,jpeg,jpg\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n        <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\">description</mat-icon>\r\n        <span class=\"note\">Max File Size 150 MB. </span>\r\n        <span class=\"validation_msg\" *ngIf=\"!isDoc\">Document is required</span>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"status\">Status<span class=\"required\">*</span></label>\r\n          <select name=\"\" id=\"\" class=\"form-control \" formControlName=\"status\">\r\n            <option value=\"\" disabled selected hidden>Status</option>\r\n            <option value=\"1\">Active</option>\r\n            <option value=\"0\">Inactive</option>\r\n          </select>\r\n          <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\">Status is\r\n            required</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"pull-right\" >\r\n\r\n        <button mat-raised-button *ngIf=\"!id\" (click)=\"addAnnouncement()\">Add</button>\r\n        <button mat-raised-button *ngIf=\"id\" (click)=\"updateAnnouncement()\">Update</button>\r\n  \r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</mat-card>");

/***/ }),

/***/ "4V+c":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/admin/home/announcement/add-announcement/add-announcement.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddAnnouncementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAnnouncementComponent", function() { return AddAnnouncementComponent; });
/* harmony import */ var _raw_loader_add_announcement_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-announcement.component.html */ "+miy");
/* harmony import */ var _add_announcement_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-announcement.component.scss */ "X3KH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
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










var AddAnnouncementComponent = /** @class */ (function () {
    function AddAnnouncementComponent(dialog, spinner, route, fb, router, adminservice, cdref, localID, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add Announcement";
        this.battalions = [];
        this.descLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addAnnouncementForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.battalionList = [];
        this.isDoc = true;
        this.addAnnouncementForm = this.fb.group({
            announcementDescp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            validTill: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            doc: []
        });
        // this.minDate =formatDate(Date.now(), 'yyyy-MM-dd',this.localID);
        // this.getBattalion();
        this.localID = localID;
    }
    AddAnnouncementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unSelectedFile = this.inputFile.nativeElement.files;
        if (this.router.url.includes('add-announcement')) {
            this.pageTitle = 'Add Announcement';
        }
        else if (this.router.url.includes('view-announcement')) {
            this.spinner.show();
            this.pageTitle = 'View Announcement';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adminservice.getAnnouncementById(this.id).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.addAnnouncementForm.patchValue({
                        announcementDescp: res.object.announcementDescp,
                        validTill: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(res.object.validTill, 'yyyy-MM-dd', _this.localID),
                        status: res.object.status,
                    });
                    _this.descLength = res.object.announcementDescp.length;
                    _this.docUrl = res.object.announcementDocument;
                    // this.isDoc = true;
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            });
        }
    };
    Object.defineProperty(AddAnnouncementComponent.prototype, "f", {
        get: function () {
            return this.addAnnouncementForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddAnnouncementComponent.prototype.goBack = function () {
        this.router.navigate(['main/admin/home/announcement/']);
    };
    AddAnnouncementComponent.prototype.addAnnouncement = function () {
        var _this = this;
        if (this.addAnnouncementForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.adminservice.addAnnouncement(this.addAnnouncementForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/admin/home/announcement/']);
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
    AddAnnouncementComponent.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddAnnouncementComponent.prototype.openDoc = function (l) {
        console.log(l);
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    AddAnnouncementComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 157286400) {
            this.inputFile.nativeElement.files = this.unSelectedFile;
            this.adminservice.openSnackbar('Document Should Be Maximum 5 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addAnnouncementForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddAnnouncementComponent.prototype.updateAnnouncement = function () {
        var _this = this;
        this.spinner.show();
        // console.log("Bdo", this.addBdoForm.value);
        if (this.addAnnouncementForm.valid) {
            this.adminservice.updateAnnouncement(this.id, this.addAnnouncementForm.value).subscribe(function (res) {
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
    AddAnnouncementComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
            if (this.router.url.includes('main/GS-Branch'))
                this.router.navigate(['main/admin/home/announcement/']);
            if (this.router.url.includes('main/admin'))
                this.router.navigate(['main/admin/home/announcement/']);
        }
        else {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
        }
    };
    AddAnnouncementComponent.prototype.dateChanged = function (e) {
        console.log(e.target.value);
        this.date_time = new Date(e.target.value);
        var currDt = new Date();
        var checkDt = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(currDt, 'yyyy-MM-dd', this.localID);
        if (e.target.value == checkDt) {
            this.date_time.setHours(currDt.getHours());
            this.date_time.setMinutes(currDt.getMinutes());
        }
        else {
            this.date_time.setHours("00");
            this.date_time.setMinutes("00");
        }
    };
    AddAnnouncementComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    AddAnnouncementComponent.propDecorators = {
        inputFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }],
        scheduleDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['scheduleDate', { static: true },] }]
    };
    AddAnnouncementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-announcement',
            template: _raw_loader_add_announcement_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_announcement_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], String, _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], AddAnnouncementComponent);
    return AddAnnouncementComponent;
}());



/***/ }),

/***/ "X3KH":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/admin/home/announcement/add-announcement/add-announcement.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "Yygy":
/*!******************************************************************************************!*\
  !*** ./src/app/main/admin/home/announcement/add-announcement/add-announcement.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AddAnnouncementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAnnouncementModule", function() { return AddAnnouncementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_announcement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-announcement.component */ "4V+c");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_announcement_component__WEBPACK_IMPORTED_MODULE_8__["AddAnnouncementComponent"]
    }
];
var AddAnnouncementModule = /** @class */ (function () {
    function AddAnnouncementModule() {
    }
    AddAnnouncementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_announcement_component__WEBPACK_IMPORTED_MODULE_8__["AddAnnouncementComponent"],
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
    ], AddAnnouncementModule);
    return AddAnnouncementModule;
}());



/***/ })

}]);