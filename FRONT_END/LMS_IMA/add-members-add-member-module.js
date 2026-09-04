(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-members-add-member-module"],{

/***/ "39MU":
/*!***********************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/members/add-members/add-members.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMembersComponent", function() { return AddMembersComponent; });
/* harmony import */ var _raw_loader_add_members_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-members.component.html */ "fXbl");
/* harmony import */ var _add_members_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-members.component.scss */ "9IaB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddMembersComponent = /** @class */ (function () {
    function AddMembersComponent(router, fb, route, service, cdref, spinner) {
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.service = service;
        this.cdref = cdref;
        this.spinner = spinner;
        this.pageTitle = "Add Member";
        this.isError = false;
        this.isCoyCmdr = false;
        this.appts = [];
        this.addMemberForm = this.fb.group({
            rank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            icNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            awards: [''],
            appt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            image: [],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    AddMembersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAppts();
        if (this.router.url.includes('add-member')) {
            this.pageTitle = 'Add Member';
        }
        else if (this.router.url.includes('view-member')) {
            this.spinner.show();
            this.pageTitle = 'View Member';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getGSBranchMemberById(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addMemberForm.patchValue({
                        rank: res.object.gsRank,
                        icNum: res.object.icnum,
                        name: res.object.name,
                        awards: res.object.award,
                        appt: res.object.gsPosition.id,
                        status: res.object.status
                    });
                    _this.previewImg = res.object.image;
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            });
        }
    };
    AddMembersComponent.prototype.omit_number = function (event) {
        var key;
        key = event.charCode; //         key = event.keyCode;  (Both can be used)
        return ((key > 47 && key < 58) || key == 45 || key == 46);
    };
    AddMembersComponent.prototype.getAppts = function () {
        var _this = this;
        this.service.getAllGSBranchPosts(1).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.appts = res.object;
                _this.cdref.detectChanges();
            }
        });
    };
    AddMembersComponent.prototype.goBack = function () {
        this.router.navigate(['/main/admin/GS-Branch/members']);
    };
    AddMembersComponent.prototype.onSelectImage = function (e) {
        var _this = this;
        this.addMemberForm.patchValue({
            image: e.target.files[0]
        });
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function (event) {
            _this.previewImg = event.target.result;
        };
    };
    Object.defineProperty(AddMembersComponent.prototype, "f", {
        get: function () {
            return this.addMemberForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddMembersComponent.prototype.addMember = function () {
        var _this = this;
        if (this.addMemberForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.service.addGSBranchMembers(this.addMemberForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/BS-Branch/members']);
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
    AddMembersComponent.prototype.updateMember = function () {
        var _this = this;
        if (this.addMemberForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.service.updateGSBranchMembers(this.id, this.addMemberForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/GS-Branch/members']);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
            });
        }
    };
    AddMembersComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
    ]; };
    AddMembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-members',
            template: _raw_loader_add_members_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_members_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], AddMembersComponent);
    return AddMembersComponent;
}());



/***/ }),

/***/ "9IaB":
/*!*************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/members/add-members/add-members.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "fXbl":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/gs-branch/members/add-members/add-members.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> GS Branch <span class=\"sub-menu1\"> > Members </span> <span class=\"sub-menu1\"> >\r\n            {{pageTitle}}</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addMemberForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"rank\">Rank<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" id=\"rank\" class=\"form-control\" maxlength=\"100\" formControlName=\"rank\"\r\n                        placeholder=\"Rank\"  >\r\n                    <span class=\"val_msg\" *ngIf=\"f.rank.errors && f.rank.errors.required && isError\">*Please Enter\r\n                        Officer's\r\n                        Rank</span>\r\n\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"name\">Name<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" id=\"name\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\"\r\n                        placeholder=\"Name\"  >\r\n                    <span class=\"val_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">*Please Enter\r\n                        Officer's\r\n                        Name</span>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"icNum\">IC Number<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" id=\"icNum\" formControlName=\"icNum\"   class=\"form-control\" maxlength=\"150\" placeholder=\"IC Number\">\r\n                      \r\n                    <span class=\"val_msg\" *ngIf=\"f.appt.errors && f.appt.errors.required && isError\">*Please Select\r\n                        Appointment</span>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"post\">Appt<span class=\"required\">*</span></label>\r\n                    <select id=\"post\"  formControlName=\"appt\" class=\"form-control\">\r\n                        <option value=\"\" selected hidden disabled>Select</option>\r\n                        <option *ngFor=\"let a of appts\" [value]=\"a.id\">{{a.name}}</option>\r\n                    </select>\r\n                    <span class=\"val_msg\" *ngIf=\"f.appt.errors && f.appt.errors.required && isError\">*Please Select\r\n                        Appointment</span>\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"awards\">Awards/Medals</label>\r\n                    <input type=\"text\" id=\"awards\" class=\"form-control\" maxlength=\"100\"   formControlName=\"awards\" placeholder=\"Awards\">\r\n                    <!-- <span class=\"val_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >*Please Enter Officer's Name</span> -->\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\">Image</label>\r\n                <!-- <img *ngIf=\"previewImg\" [src]=\"previewImg\" width=\"100\" height=\"100\" alt=\"\"> -->\r\n                <input type=\"file\" id=\"image\" accept=\"image/*\" (change)=\"onSelectImage($event)\"> (Optional)\r\n                <span class=\"size_info\">Max Image Size 5 MB. (Image size must be 65px * 65px)</span>\r\n                <div *ngIf=\"previewImg\" class=\"preview_image\"> <img class=\"img\" [src]=\"previewImg\" alt=\"\"></div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"status\">Status<span class=\"required\">*</span></label>\r\n                    <select id=\"status\" formControlName=\"status\" class=\"form-control\">\r\n                        <option value=\"\" selected hidden disabled>Select</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n\r\n                    <span class=\"val_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\">*Please Select\r\n                        Status</span>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <button *ngIf=\"!id\" mat-raised-button (click)=\"addMember()\">Add Member</button>\r\n            <button *ngIf=\"id\" mat-raised-button (click)=\"updateMember()\">Update Member</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "nUsv":
/*!*******************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/members/add-members/add-member.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AddMemberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberModule", function() { return AddMemberModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _add_members_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-members.component */ "39MU");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _add_members_component__WEBPACK_IMPORTED_MODULE_6__["AddMembersComponent"]
    }
];
var AddMemberModule = /** @class */ (function () {
    function AddMemberModule() {
    }
    AddMemberModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_members_component__WEBPACK_IMPORTED_MODULE_6__["AddMembersComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]
            ]
        })
    ], AddMemberModule);
    return AddMemberModule;
}());



/***/ })

}]);