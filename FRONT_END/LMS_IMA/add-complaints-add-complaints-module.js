(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-complaints-add-complaints-module"],{

/***/ "6AFe":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/admin/complaint-requirement/add-complaints/add-complaints.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "Cm1H":
/*!******************************************************************************************!*\
  !*** ./src/app/main/admin/complaint-requirement/add-complaints/add-complaints.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AddComplaintsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComplaintsModule", function() { return AddComplaintsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_complaints_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-complaints.component */ "prrB");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_complaints_component__WEBPACK_IMPORTED_MODULE_8__["AddComplaintsComponent"]
    }
];
var AddComplaintsModule = /** @class */ (function () {
    function AddComplaintsModule() {
    }
    AddComplaintsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_complaints_component__WEBPACK_IMPORTED_MODULE_8__["AddComplaintsComponent"],
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
    ], AddComplaintsModule);
    return AddComplaintsModule;
}());



/***/ }),

/***/ "Q+Y1":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/complaint-requirement/add-complaints/add-complaints.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n      <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n      ADMIN1 <span class=\"sub-menu1\"> > Complaints <span class=\"sub-menu1\"> > {{pageTitle}}</span></span>\r\n    </h4>\r\n  </div>\r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addComplaintsForm\">\r\n  \r\n        <div class=\"row\">\r\n\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Title<span class=\"required\">*</span></label>\r\n               <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"title\"\r\n               placeholder=\"Title\">\r\n                <span class=\"validation_msg\"\r\n                    *ngIf=\"f.title.errors && f.title.errors.required && isError\">Please Enter title</span>\r\n                    <span class=\"validation_msg\"\r\n                    *ngIf=\"f.title.errors && f.title.errors.pattern && isError\">Invalid Characters</span>\r\n            </div>\r\n\r\n          \r\n\r\n        </div> \r\n\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"requestType\">Request Type<span class=\"required\" >*</span></label>\r\n                <select name=\"\" id=\"\" class=\"form-control \" formControlName=\"requestType\">\r\n                  <option value=\"\" disabled selected hidden>Request Type</option>\r\n                  <option value=\"Requirement\">Requirement </option>\r\n                  <option value=\"Complaint\">Complaint</option>\r\n                </select>\r\n                <span class=\"validation_msg\" *ngIf=\"f.requestType.errors && f.requestType.errors.required && isError\" >Request Type is required</span> \r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label for=\"requestNature\">Nature of Request<span class=\"required\" >*</span></label>\r\n                <select name=\"\" id=\"\" class=\"form-control \" formControlName=\"requestNature\">\r\n                  <option value=\"\" disabled selected hidden>requestNature</option>\r\n                  <option value=\"IT\">IT</option>\r\n                  <option value=\"Communication\">Communication</option>\r\n                </select>\r\n                <span class=\"validation_msg\" *ngIf=\"f.requestNature.errors && f.requestNature.errors.required && isError\" >requestNature is required</span> \r\n              </div>\r\n       </div> \r\n\r\n       \r\n\r\n        <div class=\"row\">\r\n                 <div class=\"form-group col-md-12\">\r\n            <label for=\"details\">Details <span class=\"char-count\" >   ({{descLength}}/1500)  </span> <span class=\"required\">*</span></label>\r\n            <!-- <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\"> -->\r\n            <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\"  (input)=\"charCount($event,'desc')\" maxlength=\"1500\" formControlName=\"details\"></textarea>\r\n            <span class=\"val_msg\" *ngIf=\"f.details.errors && f.details.errors.required && isError\" >*Please Enter Details</span>\r\n\r\n             </div>\r\n        </div> \r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">File</label>\r\n            <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n            <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\" >description</mat-icon>\r\n            <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n            <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\" >Document is required</span>  \r\n\r\n        </div>\r\n\r\n    \r\n  \r\n        <div class=\"row\"  *ngIf=\"id\" [readonly]=\"true\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"requestStatus\">Request Status</label>\r\n            <select name=\"\" id=\"\" class=\"form-control \" disabled formControlName=\"requestStatus\">\r\n              <option value=\"\" disabled selected hidden>Request status</option>\r\n              <option value=\"Pending\">Pending</option>\r\n              <option value=\"Completed\">Completed/Resolved</option>\r\n              <option value=\"Rejected\">Rejected</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"row\" *ngIf=\"id\">\r\n            <div class=\"form-group col-md-12\">\r\n            <label for=\"remarks\">Remarks by GS Branch</label>\r\n            <textarea matInput disabled placeholder=\"Maximum 500 Characters\" class=\"form-control\"  (input)=\"charCount($event,'remarks')\" maxlength=\"1500\" formControlName=\"remarks\"></textarea>\r\n                <span class=\"validation_msg\"\r\n                    *ngIf=\"f.remarks.errors && f.remarks.errors.required && isError\">Please Enter title</span>\r\n            </div>\r\n        </div>\r\n   \r\n  \r\n        <button mat-raised-button *ngIf=\"!id\" (click)=\"addComplaints()\">ADD Complaints</button>\r\n        <button mat-raised-button *ngIf=\"id\" (click)=\"updateComplaints()\">Update Complaints</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ }),

/***/ "prrB":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/admin/complaint-requirement/add-complaints/add-complaints.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddComplaintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComplaintsComponent", function() { return AddComplaintsComponent; });
/* harmony import */ var _raw_loader_add_complaints_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-complaints.component.html */ "Q+Y1");
/* harmony import */ var _add_complaints_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-complaints.component.scss */ "6AFe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddComplaintsComponent = /** @class */ (function () {
    function AddComplaintsComponent(dialog, spinner, route, fb, router, el, adminservice, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.el = el;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add Complaints";
        this.battalions = [];
        this.descLength = 0;
        this.RemarksLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addComplaintsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.addComplaintsForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[\a-zA-Z0-9\s]+$/)]],
            requestType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            requestNature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            requestStatus: [''],
            name: [''],
            department: [localStorage.getItem('department')],
            remarks: ['',],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            doc: []
        });
        // this.getBattalion();
    }
    AddComplaintsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-complaints')) {
            this.pageTitle = 'Add Complaints';
        }
        else if (this.router.url.includes('view-complaints')) {
            this.spinner.show();
            this.pageTitle = 'View Complaints';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adminservice.getComplaintsByID(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addComplaintsForm.patchValue({
                        title: res.object.title,
                        details: res.object.details,
                        requestType: res.object.requestType,
                        requestNature: res.object.requestNature,
                        remarks: res.object.remarks,
                        name: res.object.name,
                        department: res.object.department,
                        requestStatus: res.object.requestStatus,
                        status: res.object.status,
                    });
                    _this.descLength = res.object.details.length;
                    _this.docUrl = res.object.doc;
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
    Object.defineProperty(AddComplaintsComponent.prototype, "f", {
        get: function () {
            return this.addComplaintsForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddComplaintsComponent.prototype.goBack = function () {
        this.router.navigate(['main/admin/it']);
    };
    AddComplaintsComponent.prototype.addComplaints = function () {
        var _this = this;
        console.log(this.addComplaintsForm.value);
        if (this.addComplaintsForm.invalid || !this.isDoc) {
            this.isError = true;
            for (var _i = 0, _a = Object.keys(this.addComplaintsForm.controls); _i < _a.length; _i++) {
                var key = _a[_i];
                if (this.addComplaintsForm.controls[key].invalid) {
                    var invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
                    invalidControl.focus();
                    break;
                }
            }
            this.adminservice.openSnackbar('Please Fill all Required Fields.');
        }
        else {
            this.spinner.show();
            this.adminservice.addComplaints(this.addComplaintsForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/admin/it']);
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
    AddComplaintsComponent.prototype.charCount = function (e, t) {
        if (t == 'desc')
            this.descLength = e.target.value.length;
        if (t == 'remarks')
            this.RemarksLength = e.target.value.length;
    };
    AddComplaintsComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l.file
            }
        });
    };
    AddComplaintsComponent.prototype.onSelectDoc = function (e) {
        console.log(this.docUrl);
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.adminservice.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addComplaintsForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddComplaintsComponent.prototype.updateComplaints = function () {
        // console.log("Bdo", this.addBdoForm.value);
        var _this = this;
        // if (this.addComplaintsForm.valid) {
        //   this.spinner.show();
        //   this.adminservice.updateComplaints(this.addComplaintsForm.value,this.id).subscribe(
        //     res => {
        //       // console.log(res);
        //       this.apiRes(res);
        //     },
        //     err => {
        //       this.spinner.hide()
        //       this.adminservice.openSnackbar("Some Error Occured.")
        //     }
        //   )
        // }
        // else {
        //   for (const key of Object.keys(this.addComplaintsForm.controls)) {
        //     if (this.addComplaintsForm.controls[key].invalid) {
        //       const invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
        //       invalidControl.focus();
        //       break;
        //     }
        //   }
        //   this.adminservice.openSnackbar('Please Fill all Required Fields.')
        //   this.isError = true;
        // }
        if (this.addComplaintsForm.invalid || !this.isDoc) {
            this.isError = true;
            for (var _i = 0, _a = Object.keys(this.addComplaintsForm.controls); _i < _a.length; _i++) {
                var key = _a[_i];
                if (this.addComplaintsForm.controls[key].invalid) {
                    var invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
                    invalidControl.focus();
                    break;
                }
            }
            this.adminservice.openSnackbar('Please Fill all Required Fields.');
        }
        else {
            this.spinner.show();
            this.adminservice.updateComplaints(this.addComplaintsForm.value, this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/admin/it']);
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
    AddComplaintsComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
            if (this.router.url.includes('main/academic-depart'))
                this.router.navigate(['main/academic-depart/it']);
            if (this.router.url.includes('main/admin'))
                this.router.navigate(['main/admin/it']);
        }
        else {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
        }
    };
    AddComplaintsComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddComplaintsComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddComplaintsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-complaints',
            template: _raw_loader_add_complaints_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_complaints_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddComplaintsComponent);
    return AddComplaintsComponent;
}());



/***/ })

}]);