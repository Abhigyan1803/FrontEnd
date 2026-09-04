(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["communication-sec-add-communication-sec-add-communication-sec-module"],{

/***/ "3BYg":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/gs-branch/it-&-communication/charter/communication-sec/add-communication-sec/add-communication-sec.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n      <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n      GS Branch <span class=\"sub-menu1\"> > Communication Sec<span class=\"sub-menu1\"> > {{pageTitle}}</span></span>\r\n    </h4>\r\n  </div>\r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addCommunicationsecForm\">\r\n  \r\n        <div class=\"row\">\r\n\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Name<span class=\"required\">*</span></label>\r\n               <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n               placeholder=\"Name\">\r\n                <span class=\"validation_msg\"\r\n                    *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter Name</span>\r\n                    <span class=\"validation_msg\"\r\n                    *ngIf=\"f.name.errors  && f.name.errors.pattern && isError\">No Speacial Character</span>\r\n                 </div>\r\n\r\n\r\n        </div> \r\n\r\n        <div class=\"row\">\r\n                 <div class=\"form-group col-md-12\">\r\n            <label for=\"awards\">Description <span class=\"char-count\" >   ({{descLength}}/1500)  </span> <span class=\"required\">*</span></label>\r\n            <!-- <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\"> -->\r\n            <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\"  (input)=\"charCount($event)\" maxlength=\"1500\" formControlName=\"description\"></textarea>\r\n            <span class=\"val_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >*Please Enter history</span>\r\n\r\n             </div>\r\n        </div> \r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n            <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n            <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\" >description</mat-icon>\r\n            <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n            <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\" >Document is required</span>  \r\n           \r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"status\">Status<span class=\"required\" >*</span></label>\r\n            <select name=\"\" id=\"\" class=\"form-control \" formControlName=\"status\">\r\n              <option value=\"\" disabled selected hidden>Status</option>\r\n              <option value=\"1\">Active</option>\r\n              <option value=\"0\">Inactive</option>\r\n            </select>\r\n            <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span> \r\n          </div>\r\n        </div>\r\n  \r\n        <button mat-raised-button *ngIf=\"pageTitle=='Add Communication Sec'\" (click)=\"addCommunicationSec()\">Add CommunicationSec</button>\r\n        <button mat-raised-button *ngIf=\"pageTitle=='View Communication Sec'\" (click)=\"updateCommunicationSec()\">Update CommunicationSec</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ }),

/***/ "3iI2":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/main/gs-branch/it-&-communication/charter/communication-sec/add-communication-sec/add-communication-sec.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: AddCommunicationSecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommunicationSecComponent", function() { return AddCommunicationSecComponent; });
/* harmony import */ var _raw_loader_add_communication_sec_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-communication-sec.component.html */ "cHgp");
/* harmony import */ var _add_communication_sec_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-communication-sec.component.scss */ "z1tz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
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









var AddCommunicationSecComponent = /** @class */ (function () {
    function AddCommunicationSecComponent(dialog, spinner, route, fb, router, adminservice, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add Communication Sec";
        this.battalions = [];
        this.descLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addCommunicationsecForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.isDoc = true;
        this.addCommunicationsecForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            doc: []
        });
        // this.getBattalion();
    }
    AddCommunicationSecComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-communication-sec')) {
            this.pageTitle = 'Add CommunicationSec';
        }
        else if (this.router.url.includes('view-communication-sec')) {
            this.spinner.show();
            this.pageTitle = 'View CommunicationSec';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adminservice.getCommunicationSecByID(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addCommunicationsecForm.patchValue({
                        name: res.object.name,
                        description: res.object.description,
                        status: res.object.status,
                    });
                    _this.descLength = res.object.description.length;
                    _this.docUrl = res.object.file;
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
    Object.defineProperty(AddCommunicationSecComponent.prototype, "f", {
        get: function () {
            return this.addCommunicationsecForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddCommunicationSecComponent.prototype.goBack = function () {
        this.router.navigate(['main/gs-branch/itcommunication/charter/communication-sec']);
    };
    AddCommunicationSecComponent.prototype.addCommunicationSec = function () {
        var _this = this;
        if (this.addCommunicationsecForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.adminservice.addCommunicationSec(this.addCommunicationsecForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/gs-granch/itcommunication/charter/communication-sec']);
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
    AddCommunicationSecComponent.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddCommunicationSecComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    AddCommunicationSecComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.adminservice.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addCommunicationsecForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddCommunicationSecComponent.prototype.updateCommunicationSec = function () {
        var _this = this;
        this.spinner.show();
        // console.log("Bdo", this.addBdoForm.value);
        if (this.addCommunicationsecForm.valid) {
            this.adminservice.updateCommunicationSec(this.addCommunicationsecForm.value, this.id).subscribe(function (res) {
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
    AddCommunicationSecComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
            if (this.router.url.includes('main/gs-granch'))
                this.router.navigate(['main/gs-granch/itcommunication/charter/communication-sec']);
            // if(this.router.url.includes('main/admin'))
            // this.router.navigate(['main/admin/GS-Branch/itcommunication/charter/communication-sec'])  
        }
        else {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
        }
    };
    AddCommunicationSecComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddCommunicationSecComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddCommunicationSecComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-communication-sec',
            template: _raw_loader_add_communication_sec_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_communication_sec_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddCommunicationSecComponent);
    return AddCommunicationSecComponent;
}());



/***/ }),

/***/ "7d9b":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/it-&-communication/charter/communication-sec/add-communication-sec/add-communication-sec.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: AddCommunicationSecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommunicationSecComponent", function() { return AddCommunicationSecComponent; });
/* harmony import */ var _raw_loader_add_communication_sec_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-communication-sec.component.html */ "3BYg");
/* harmony import */ var _add_communication_sec_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-communication-sec.component.scss */ "RkRx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
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









var AddCommunicationSecComponent = /** @class */ (function () {
    function AddCommunicationSecComponent(dialog, spinner, route, fb, router, el, adminservice, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.el = el;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add Communication Sec";
        this.battalions = [];
        this.descLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addCommunicationsecForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.addCommunicationsecForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[\a-zA-Z0-9\s]+$/)]],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            doc: []
        });
        // this.getBattalion();
    }
    AddCommunicationSecComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-communication-sec')) {
            this.pageTitle = 'Add Communication Sec';
        }
        else if (this.router.url.includes('view-communication-sec')) {
            this.spinner.show();
            this.pageTitle = 'View Communication Sec';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adminservice.getCommunicationSecByID(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addCommunicationsecForm.patchValue({
                        name: res.object.name,
                        description: res.object.description,
                        status: res.object.status,
                    });
                    _this.descLength = res.object.description.length;
                    _this.docUrl = res.object.file;
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
    Object.defineProperty(AddCommunicationSecComponent.prototype, "f", {
        get: function () {
            return this.addCommunicationsecForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddCommunicationSecComponent.prototype.goBack = function () {
        this.router.navigate(['main/admin/GS-Branch/itcommunication/charter/communication-sec']);
    };
    AddCommunicationSecComponent.prototype.addCommunicationSec = function () {
        var _this = this;
        console.log(this.addCommunicationsecForm.value);
        if (this.addCommunicationsecForm.invalid || !this.isDoc) {
            this.isError = true;
            for (var _i = 0, _a = Object.keys(this.addCommunicationsecForm.controls); _i < _a.length; _i++) {
                var key = _a[_i];
                if (this.addCommunicationsecForm.controls[key].invalid) {
                    var invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
                    invalidControl.focus();
                    break;
                }
            }
            this.adminservice.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.adminservice.addCommunicationSec(this.addCommunicationsecForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/admin/GS-Branch/itcommunication/charter/communication-sec']);
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
    AddCommunicationSecComponent.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddCommunicationSecComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    // onSelectDoc(e) {
    //   var file = e.target.files[0]
    //   if (file.size > 5242880) {
    //     this.docFile.nativeElement.files = this.unSelectedFile;
    //     this.adminservice.openSnackbar('Document Should Be Maximum 5 MB in Size')
    //   } else {
    //     this.docUrl = ''
    //     this.addCommunicationsecForm.patchValue({
    //       doc: file
    //     });
    //     this.isDoc=true;
    //   }
    // }
    AddCommunicationSecComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.adminservice.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addCommunicationsecForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
        console.log(file, 'pppppppppppp');
    };
    AddCommunicationSecComponent.prototype.updateCommunicationSec = function () {
        // console.log("Bdo", this.addBdoForm.value);
        var _this = this;
        // if (this.addCommunicationsecForm.valid) {
        //   this.adminservice.updateCommunicationSec(this.addCommunicationsecForm.value,this.id).subscribe(
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
        //   this.isError = true;
        // }
        if (this.addCommunicationsecForm.invalid || !this.isDoc) {
            this.isError = true;
            for (var _i = 0, _a = Object.keys(this.addCommunicationsecForm.controls); _i < _a.length; _i++) {
                var key = _a[_i];
                if (this.addCommunicationsecForm.controls[key].invalid) {
                    var invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
                    invalidControl.focus();
                    break;
                }
            }
            this.adminservice.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.adminservice.updateCommunicationSec(this.addCommunicationsecForm.value, this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/admin/GS-Branch/itcommunication/charter/communication-sec']);
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
    AddCommunicationSecComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
            if (this.router.url.includes('main/GS-Branch'))
                this.router.navigate(['main/admin/GS-Branch/itcommunication/charter/communication-sec']);
            if (this.router.url.includes('main/admin'))
                this.router.navigate(['main/admin/GS-Branch/itcommunication/charter/communication-sec']);
        }
        else {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
        }
    };
    AddCommunicationSecComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddCommunicationSecComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddCommunicationSecComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-communication-sec',
            template: _raw_loader_add_communication_sec_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_communication_sec_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddCommunicationSecComponent);
    return AddCommunicationSecComponent;
}());



/***/ }),

/***/ "IcaV":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/main/gs-branch/it-&-communication/charter/communication-sec/add-communication-sec/add-communication-sec.module.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: AddCommunicationSecModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommunicationSecModule", function() { return AddCommunicationSecModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_communication_sec_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-communication-sec.component */ "3iI2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_communication_sec_component__WEBPACK_IMPORTED_MODULE_8__["AddCommunicationSecComponent"]
    }
];
var AddCommunicationSecModule = /** @class */ (function () {
    function AddCommunicationSecModule() {
    }
    AddCommunicationSecModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_communication_sec_component__WEBPACK_IMPORTED_MODULE_8__["AddCommunicationSecComponent"],
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
    ], AddCommunicationSecModule);
    return AddCommunicationSecModule;
}());



/***/ }),

/***/ "RkRx":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/it-&-communication/charter/communication-sec/add-communication-sec/add-communication-sec.component.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "cHgp":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/gs-branch/it-&-communication/charter/communication-sec/add-communication-sec/add-communication-sec.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n      <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n      GS Branch <span class=\"sub-menu1\"> > CommunicationSec<span class=\"sub-menu1\"> > {{pageTitle}}</span></span>\r\n    </h4>\r\n  </div>\r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addCommunicationsecForm\">\r\n  \r\n        <div class=\"row\">\r\n\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Name<span class=\"required\">*</span></label>\r\n               <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n               placeholder=\"Name\">\r\n                <span class=\"validation_msg\"\r\n                    *ngIf=\"f.name.errors && f.name.errors.required && isError\">Please Enter Name</span>\r\n            </div>\r\n\r\n\r\n        </div> \r\n\r\n        <div class=\"row\">\r\n                 <div class=\"form-group col-md-12\">\r\n            <label for=\"awards\">Description <span class=\"char-count\" >   ({{descLength}}/1500)  </span> <span class=\"required\">*</span></label>\r\n            <!-- <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\"> -->\r\n            <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\"  (input)=\"charCount($event)\" maxlength=\"1500\" formControlName=\"description\"></textarea>\r\n            <span class=\"val_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >*Please Enter history</span>\r\n\r\n             </div>\r\n        </div> \r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n            <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n            <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\" >description</mat-icon>\r\n            <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n            <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span>\r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"status\">Status<span class=\"required\" >*</span></label>\r\n            <select name=\"\" id=\"\" class=\"form-control \" formControlName=\"status\">\r\n              <option value=\"\" disabled selected hidden>Status</option>\r\n              <option value=\"1\">Active</option>\r\n              <option value=\"0\">Inactive</option>\r\n            </select>\r\n            <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span> \r\n          </div>\r\n        </div>\r\n  \r\n        <button mat-raised-button *ngIf=\"pageTitle=='Add CommunicationSec'\" (click)=\"addCommunicationSec()\">Add CommunicationSec</button>\r\n        <button mat-raised-button *ngIf=\"pageTitle=='View CommunicationSec'\" (click)=\"updateCommunicationSec()\">Update CommunicationSec</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ }),

/***/ "jDX9":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/it-&-communication/charter/communication-sec/add-communication-sec/add-communication-sec.module.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: AddCommunicationSecModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommunicationSecModule", function() { return AddCommunicationSecModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_communication_sec_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-communication-sec.component */ "7d9b");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_communication_sec_component__WEBPACK_IMPORTED_MODULE_8__["AddCommunicationSecComponent"]
    }
];
var AddCommunicationSecModule = /** @class */ (function () {
    function AddCommunicationSecModule() {
    }
    AddCommunicationSecModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_communication_sec_component__WEBPACK_IMPORTED_MODULE_8__["AddCommunicationSecComponent"],
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
    ], AddCommunicationSecModule);
    return AddCommunicationSecModule;
}());



/***/ }),

/***/ "z1tz":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/main/gs-branch/it-&-communication/charter/communication-sec/add-communication-sec/add-communication-sec.component.scss ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);