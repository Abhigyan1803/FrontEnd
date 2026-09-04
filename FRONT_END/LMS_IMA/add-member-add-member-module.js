(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-member-add-member-module"],{

/***/ "/4Ub":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/members/add-member/add-member.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\"> <button mat-icon-button (click)=\"goBack()\">\r\n      <mat-icon>chevron_left</mat-icon>\r\n    </button> TRG Battalion <span class=\"sub-menu1\"> > Member </span> <span class=\"sub-menu1\"> >\r\n      {{pageTitle}}</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n  <div class=\"top-br\">\r\n    <form [formGroup]=\"addMemberForm\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"rank\">Rank<span class=\"required\">*</span></label>\r\n          <input type=\"text\" id=\"rank\" class=\"form-control\" maxlength=\"100\" formControlName=\"rank\" placeholder=\"Rank\">\r\n          <span class=\"val_msg\" *ngIf=\"f.rank.errors && f.rank.errors.required && isError\">*Please Enter Officer's\r\n            Rank</span>\r\n\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"name\">Name<span class=\"required\">*</span></label>\r\n          <input type=\"text\" id=\"name\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\" placeholder=\"Name\">\r\n          <span class=\"val_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">*Please Enter Officer's\r\n            Name</span>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"awards\">Awards/Medals</label>\r\n          <input type=\"text\" id=\"awards\" class=\"form-control\" maxlength=\"100\" formControlName=\"awards\"\r\n            placeholder=\"Awards\">\r\n          <!-- <span class=\"val_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >*Please Enter Officer's Name</span> -->\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"post\">Appt<span class=\"required\">*</span></label>\r\n          <select id=\"post\" (change)=\"postSelected($event.target.value)\" formControlName=\"post\" class=\"form-control\">\r\n            <option value=\"\" selected hidden disabled>Select</option>\r\n            <option *ngFor=\"let b of battalionPosts\" [value]=\"b.id\">{{b.shortName}}</option>\r\n          </select>\r\n          <span class=\"val_msg\" *ngIf=\"f.post.errors && f.post.errors.required && isError\">*Please Select Post</span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"battalion\">Battalion<span class=\"required\">*</span></label>\r\n          <select id=\"battalion\" (change)=\"battalionSelected($event.target.value)\" formControlName=\"battalion\"\r\n            class=\"form-control\">\r\n            <option value=\"\" selected hidden disabled>Select</option>\r\n            <option *ngFor=\"let b of battalionList\" [value]=\"b.id\"> {{b.shortName}} Bn</option>\r\n          </select>\r\n          <span class=\"val_msg\" *ngIf=\"f.battalion.errors && f.battalion.errors.required && isError\">*Please Select\r\n            Battalion</span>\r\n        </div>\r\n        <div class=\"form-group col-md-6\" *ngIf=\"isCoyCmdr\">\r\n          <label for=\"company\">Company<span class=\"required\">*</span></label>\r\n          <select id=\"company\" formControlName=\"company\" class=\"form-control\">\r\n            <option value=\"\" selected hidden disabled>Select</option>\r\n            <option *ngFor=\"let c of companyList\" [value]=\"c.id\"> {{c?.name || ''}}</option>\r\n          </select>\r\n          <span class=\"val_msg\" *ngIf=\"f.company.errors && f.company.errors.required && isError\">*Please Select\r\n            Company</span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">Image</label>\r\n        <!-- <img *ngIf=\"previewImg\" [src]=\"previewImg\" width=\"100\" height=\"100\" alt=\"\"> -->\r\n        <input type=\"file\" id=\"image\" accept=\"image/*\" (change)=\"onSelectImage($event)\"> (Optional)\r\n        <span class=\"size_info\">Max Image Size 5 MB. (Image size must be 65px * 65px)</span>\r\n        <div *ngIf=\"previewImg\" class=\"preview_image\"> <img class=\"img\" [src]=\"IP+previewImg\" alt=\"\"></div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"status\">Status<span class=\"required\">*</span></label>\r\n          <select id=\"status\" formControlName=\"status\" class=\"form-control\">\r\n            <option value=\"\" selected hidden disabled>Select</option>\r\n            <option value=\"1\">Active</option>\r\n            <option value=\"0\">Inactive</option>\r\n          </select>\r\n\r\n          <span class=\"val_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\">*Please Select\r\n            Status</span>\r\n\r\n        </div>\r\n      </div>\r\n      <button *ngIf=\"pageTitle == 'Add Member'\" mat-raised-button (click)=\"addMember()\">Add Member</button>\r\n      <button *ngIf=\"pageTitle == 'View Member'\" mat-raised-button (click)=\"updateMember()\">Update Member</button>\r\n\r\n    </form>\r\n  </div>\r\n</mat-card>");

/***/ }),

/***/ "4F36":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/admin/trg-team-management/members/add-member/add-member.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberComponent", function() { return AddMemberComponent; });
/* harmony import */ var _raw_loader_add_member_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-member.component.html */ "9m89");
/* harmony import */ var _add_member_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-member.component.scss */ "HoWm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
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








var AddMemberComponent = /** @class */ (function () {
    function AddMemberComponent(router, fb, route, service, cdref, snackbar, spinner) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.service = service;
        this.cdref = cdref;
        this.snackbar = snackbar;
        this.spinner = spinner;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.isError = false;
        this.posts = [];
        this.isPt = false;
        this.isWt = false;
        this.isEqnt = false;
        this.addMemberForm = this.fb.group({
            rank: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[\a-zA-Z0-9\s]+$/)]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[\a-zA-Z0-9\s]+$/)]],
            awards: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[\a-zA-Z0-9\s]+$/)]],
            position: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[\a-zA-Z0-9\s]+$/)]],
            wa: this.fb.array([this.AddInternalMember()]),
            image: [],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.id = this.route.snapshot.queryParamMap.get('id');
        this.service.getAllPositions().subscribe(function (res) {
            if (res.status == 'OK') {
                _this.posts = res.object;
                _this.cdref.detectChanges();
            }
        }, function (err) { return console.log(err); });
    }
    AddMemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-member')) {
            this.pageTitle = 'Add Member';
        }
        else if (this.router.url.includes('view-member')) {
            this.spinner.show();
            this.pageTitle = 'View Member';
            this.service.getTRGMemberDetails(this.id).subscribe(function (res) {
                if (res.status == '1') {
                    _this.memberObj = res.List;
                    console.log(res);
                    _this.addMemberForm.patchValue({
                        rank: res.List.organizationChart.rank,
                        name: res.List.organizationChart.name,
                        position: res.List.organizationChart.position.id,
                        status: res.List.organizationChart.status
                    });
                    var tempArr_1 = [];
                    if (res.List.memberList.length > 1) {
                        res.List.memberList.forEach(function (element) {
                            _this.addnewMember();
                            var tempObj = {
                                id: element.id,
                                team_rank: element.team_rank,
                                team_name: element.team_name,
                                team_position: element.team_position,
                                team_award: element.team_award,
                                status: element.status
                            };
                            tempArr_1.push(tempObj);
                        });
                        _this.addMemberForm.patchValue({
                            wa: tempArr_1
                        });
                    }
                    _this.previewImg = res.List.image;
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                }
            });
        }
    };
    AddMemberComponent.prototype.goBack = function () {
        this.router.navigate(['/main/admin/trg-team/members']);
    };
    AddMemberComponent.prototype.selectChanged = function (e) {
        var sec = e.target.value;
        if (sec === 'PT SEC') {
            this.isPt = true;
            this.isEqnt = false;
            this.isWt = false;
            this.addMemberForm.patchValue({
                subPosition: ''
            });
        }
        else if (sec == 'WT SEC') {
            this.isWt = true;
            this.isEqnt = false;
            this.isPt = false;
            this.addMemberForm.patchValue({
                subPosition: ''
            });
        }
        else if (sec == 'eqntsec') {
            this.isEqnt = true;
            this.isPt = false;
            this.isWt = false;
            this.addMemberForm.patchValue({
                subPosition: ''
            });
        }
        else {
            this.isEqnt = false;
            this.isPt = false;
            this.isWt = false;
            this.addMemberForm.patchValue({
                subPosition: ''
            });
        }
    };
    AddMemberComponent.prototype.onSelectImage = function (e) {
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
    Object.defineProperty(AddMemberComponent.prototype, "f", {
        get: function () {
            return this.addMemberForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddMemberComponent.prototype.addMember = function () {
        var _this = this;
        console.log(this.addMemberForm.value);
        if (this.addMemberForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.service.addTRGMember(this.addMemberForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/trg-team/members']);
                }
                else {
                    _this.spinner.hide();
                    _this.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
        console.log(this.wa.value, "================>");
    };
    AddMemberComponent.prototype.updateMember = function () {
        var _this = this;
        console.log(this.addMemberForm.value);
        if (this.addMemberForm.invalid) {
            console.log('invalid');
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.service.updateTRGMember(this.id, this.addMemberForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/trg-team/members']);
                }
                else {
                    _this.spinner.hide();
                    _this.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddMemberComponent.prototype.openSnackbar = function (msg) {
        this.snackbar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    AddMemberComponent.prototype.AddInternalMember = function () {
        return this.fb.group({
            id: [''],
            team_rank: [''],
            team_name: [''],
            team_award: [''],
            team_position: [''],
            status: ['1']
        });
    };
    Object.defineProperty(AddMemberComponent.prototype, "wa", {
        get: function () {
            return this.addMemberForm.controls["wa"];
        },
        enumerable: false,
        configurable: true
    });
    AddMemberComponent.prototype.addnewMember = function () {
        this.wa.push(this.AddInternalMember());
    };
    AddMemberComponent.prototype.deleteMember = function (i) {
        this.wa.removeAt(i);
    };
    AddMemberComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
    ]; };
    AddMemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-member',
            template: _raw_loader_add_member_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_member_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], AddMemberComponent);
    return AddMemberComponent;
}());



/***/ }),

/***/ "52Jf":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/members/add-member/add-member.module.ts ***!
  \*********************************************************************************************/
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
/* harmony import */ var _add_member_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-member.component */ "f8dp");
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
        component: _add_member_component__WEBPACK_IMPORTED_MODULE_6__["AddMemberComponent"]
    }
];
var AddMemberModule = /** @class */ (function () {
    function AddMemberModule() {
    }
    AddMemberModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_member_component__WEBPACK_IMPORTED_MODULE_6__["AddMemberComponent"],
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



/***/ }),

/***/ "9m89":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-team-management/members/add-member/add-member.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\"> <button mat-icon-button (click)=\"goBack()\"><mat-icon>chevron_left</mat-icon> </button> TRG Team <span class=\"sub-menu1\"> > Organisation Chart </span> <span class=\"sub-menu1\"> > {{pageTitle}}</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n  <div class=\"top-br\">\r\n    <form [formGroup]=\"addMemberForm\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"rank\">Rank<span class=\"required\">*</span> </label>\r\n          <input id=\"rank\" type=\"text\" class=\"form-control\"  maxlength=\"100\" \r\n          formControlName=\"rank\" placeholder=\"Rank\" >\r\n          <span class=\"val_msg\" *ngIf=\"f.rank.errors && f.rank.errors.required && isError\" >Please Enter Officer's Rank</span>\r\n          <span class=\"val_msg\"\r\n          *ngIf=\"f.rank.errors  && f.rank.errors.pattern && isError\">No Special Character</span>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"name\">Name<span class=\"required\">*</span></label>\r\n          <input id=\"name\" type=\"text\" class=\"form-control\"  maxlength=\"100\" formControlName=\"name\"\r\n           placeholder=\"Name\">\r\n          <span class=\"val_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >Please Enter Officer's Name</span>\r\n          <span class=\"val_msg\"\r\n          *ngIf=\"f.name.errors  && f.name.errors.pattern && isError\">No Special Character</span>\r\n   \r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"awards\">Awards/Medals </label>\r\n          <input id=\"awards\" type=\"text\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" \r\n          placeholder=\"Awards\" >\r\n          <!-- <span class=\"val_msg\" *ngIf=\"f.rank.errors && f.rank.errors.required && isError\" >Please Enter Officer's Rank</span> -->\r\n          <span class=\"val_msg\"\r\n          *ngIf=\"f.awards.errors  && f.awards.errors.pattern && isError\">No Special Character</span>\r\n        </div>\r\n        \r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"position\">Appt<span class=\"required\">*</span></label>\r\n          <select id=\"posission\" formControlName=\"position\" class=\"form-control\" >\r\n            <option value=\"\" selected hidden disabled>Select</option>\r\n            <option *ngFor=\"let p of posts\"  [value]=\"p.id\">{{p.name}} </option>\r\n          </select>\r\n          <span class=\"val_msg\" *ngIf=\"f.position.errors && f.position.errors.required && isError\" >Please Select Section/Position</span>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n\r\n      <div class=\"card\" >\r\n        <div class=\"text-center\" >\r\n         <h3>Team Members</h3> \r\n        </div>\r\n        <div class=\"card-body\">\r\n          \r\n      <ng-container formArrayName=\"wa\">\r\n\r\n        <table>\r\n          <thead>\r\n            <tr>\r\n              <th>Rank</th>\r\n              <th>Name</th>\r\n              <th>Awards</th>\r\n              <th>Position</th>\r\n              <th>Status</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of addMemberForm.get('wa')['controls']; let i = index;\"\r\n            [formGroupName]=\"i\" >  \r\n              <td>\r\n                <input id=\"rank\" type=\"text\" class=\"form-control\"  maxlength=\"100\" formControlName=\"team_rank\" placeholder=\"Rank\" >\r\n              </td>\r\n              <td>\r\n                <input id=\"name\" type=\"text\" class=\"form-control\"  maxlength=\"100\" formControlName=\"team_name\" placeholder=\"Name\">\r\n              </td>\r\n              <td>\r\n                <input id=\"awards\" type=\"text\" class=\"form-control\"  maxlength=\"100\" formControlName=\"team_award\" placeholder=\"Awards\" >\r\n              </td>\r\n              <td>\r\n                <input id=\"posission\" type=\"text\" class=\"form-control\"  maxlength=\"100\" formControlName=\"team_position\" placeholder=\"position\" >\r\n              </td>\r\n              <td>\r\n                <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\" >\r\n                  <option value=\"\" disabled selected hidden >Select</option>\r\n                  <option value=\"1\">Active</option>\r\n                  <option value=\"0\">Inactive</option>\r\n               </select>\r\n              </td>\r\n              <td>\r\n                <button (click)=\"deleteMember(i)\" class=\"mt-23 btn btn-danger rmv\"\r\n                *ngIf=\"addMemberForm.get('wa').value.length>1\">\r\n                <mat-icon>remove</mat-icon>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <!-- <ng-container *ngFor=\"let item of addMemberForm.get('wa')['controls']; let i = index;\"\r\n            [formGroupName]=\"i\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-4\">\r\n                  <label for=\"rank\">Rank<span class=\"required\">*</span> </label>\r\n                  <input id=\"rank\" type=\"text\" class=\"form-control\"  maxlength=\"100\" formControlName=\"team_rank\" placeholder=\"Rank\" >\r\n                  <span class=\"val_msg\" *ngIf=\"f.rank.errors && f.rank.errors.required && isError\" >Please Enter Officer's Rank</span>\r\n                  <span class=\"val_msg\"\r\n                  *ngIf=\"f.rank.errors  && f.rank.errors.pattern && isError\">No Special Character</span>        \r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                  <label for=\"name\">Name<span class=\"required\">*</span></label>\r\n                  <input id=\"name\" type=\"text\" class=\"form-control\"  maxlength=\"100\" formControlName=\"team_name\" placeholder=\"Name\">\r\n                  <span class=\"val_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >Please Enter Officer's Name</span>\r\n                  <span class=\"val_msg\"\r\n                  *ngIf=\"f.name.errors  && f.name.errors.pattern && isError\">No Special Character</span>        \r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                  <label for=\"awards\">Awards </label>\r\n                  <input id=\"awards\" type=\"text\" class=\"form-control\"  maxlength=\"100\" formControlName=\"team_award\" placeholder=\"Awards\" >\r\n                  <span class=\"val_msg\"\r\n                  *ngIf=\"f.awards.errors  && f.awards.errors.pattern && isError\">No Special Character</span>\r\n                </div>\r\n               \r\n                <div class=\"form-group col-md-4\">\r\n                  <label for=\"position\">Position<span class=\"required\">*</span></label>\r\n                  <input id=\"posission\" type=\"text\" class=\"form-control\"  maxlength=\"100\" formControlName=\"team_position\" placeholder=\"position\" >\r\n                  <span class=\"val_msg\" *ngIf=\"f.position.errors && f.position.errors.required && isError\" >Please Select Section/Position</span>\r\n                  <span class=\"val_msg\"\r\n                  *ngIf=\"f.position.errors  && f.position.errors.pattern && isError\">No Special Character</span>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-4\">\r\n                  <label for=\"status\">Status<span class=\"required\" >*</span></label>\r\n                 <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\" >\r\n                    <option value=\"\" disabled selected hidden >Select</option>\r\n                    <option value=\"1\">Active</option>\r\n                    <option value=\"0\">Inactive</option>\r\n                 </select>\r\n                   <span class=\"val_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Please Select Status</span>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-1\">\r\n                  <label style=\"visibility: hidden;margin-bottom: 0px;\" for=\"status\">Remove<span class=\"required\">*</span></label>\r\n                    <button (click)=\"deleteMember(i)\" class=\"mt-23 btn btn-danger rmv\"\r\n                        *ngIf=\"addMemberForm.get('wa').value.length>1\">\r\n                        <mat-icon>remove</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n           \r\n\r\n        </ng-container> -->\r\n        <div class=\"row\">\r\n            <div class=\" col-md-12\">\r\n                <button (click)=\"addnewMember()\" style=\"float: right;\" class=\" btn btn-success add-gs\">\r\n                    <mat-icon>add_circle_outline</mat-icon>\r\n                </button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </ng-container>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">Image</label>\r\n        <!-- <img *ngIf=\"previewImg\" [src]=\"previewImg\" width=\"100\" height=\"100\" alt=\"\"> -->\r\n        <input type=\"file\" accept=\"image/*\" id=\"image\" (change)=\"onSelectImage($event)\"> (Optional)\r\n        <span  class=\"size_info\">Max Image Size 5 MB. (Image size must be  65px * 65px)</span>\r\n        <div *ngIf=\"previewImg\" class=\"preview_image\"> <img class=\"img\" [src]=\"previewImg\" alt=\"\"></div> \r\n     \r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"status\">Status<span class=\"required\" >*</span></label>\r\n          <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\" >\r\n            <option value=\"\" disabled selected hidden >Select</option>\r\n            <option value=\"1\">Active</option>\r\n            <option value=\"0\">Inactive</option>\r\n          </select>\r\n          <span class=\"val_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Please Select Status</span>\r\n        </div>\r\n      </div>\r\n\r\n      <button *ngIf=\"pageTitle == 'Add Member'\" mat-raised-button (click)=\"addMember()\">Add Member</button>\r\n      <button *ngIf=\"pageTitle == 'View Member'\" mat-raised-button (click)=\"updateMember()\">Update Member</button>\r\n\r\n    </form>\r\n  </div>\r\n</mat-card>");

/***/ }),

/***/ "D6IS":
/*!****************************************************************************************!*\
  !*** ./src/app/main/admin/trg-team-management/members/add-member/add-member.module.ts ***!
  \****************************************************************************************/
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
/* harmony import */ var _add_member_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-member.component */ "4F36");
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
        component: _add_member_component__WEBPACK_IMPORTED_MODULE_6__["AddMemberComponent"]
    }
];
var AddMemberModule = /** @class */ (function () {
    function AddMemberModule() {
    }
    AddMemberModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_member_component__WEBPACK_IMPORTED_MODULE_6__["AddMemberComponent"],
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



/***/ }),

/***/ "HoWm":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/admin/trg-team-management/members/add-member/add-member.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button.btn.btn-success.add-gs {\n  background: #721a0c;\n  border: navajowhite;\n  padding-top: 10px;\n  border-radius: 50%;\n}\n\n.rmv {\n  width: 40px;\n  border-radius: 50%;\n  height: 40px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}");

/***/ }),

/***/ "V0Gg":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/members/add-member/add-member.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "f8dp":
/*!************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/members/add-member/add-member.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberComponent", function() { return AddMemberComponent; });
/* harmony import */ var _raw_loader_add_member_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-member.component.html */ "/4Ub");
/* harmony import */ var _add_member_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-member.component.scss */ "V0Gg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_links_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/links.module */ "Uhg6");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
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








var AddMemberComponent = /** @class */ (function () {
    function AddMemberComponent(router, fb, route, service, cdref, spinner) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.service = service;
        this.cdref = cdref;
        this.spinner = spinner;
        this.IP = app_links_module__WEBPACK_IMPORTED_MODULE_5__["Links"].IP;
        this.isError = false;
        this.isCoyCmdr = false;
        this.battalionPosts = [];
        this.battalionList = [];
        this.companyList = [];
        this.addMemberForm = this.fb.group({
            rank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            awards: [''],
            post: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: ['0'],
            image: [],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.service.getBattalionList().subscribe(function (res) {
            _this.spinner.show();
            if (res.status == 'OK') {
                _this.battalionList = res.object;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
        this.service.getBattalionPosts().subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                _this.battalionPosts = res.object;
                _this.cdref.detectChanges();
            }
        });
    }
    AddMemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-member')) {
            this.pageTitle = 'Add Member';
        }
        else if (this.router.url.includes('view-member')) {
            this.spinner.show();
            this.pageTitle = 'View Member';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getTRGBattalionMemberById(this.id).subscribe(function (res) {
                // console.log(res);
                if (res.status == 'OK') {
                    _this.battalionSelected(res.object.battalionType.id);
                    _this.addMemberForm.patchValue({
                        rank: res.object.rank,
                        name: res.object.name,
                        post: res.object.battalionPost.id,
                        battalion: res.object.battalionType.id,
                        company: res.object.companyId,
                        status: res.object.status,
                        awards: res.object.award
                    });
                    if (res.object.battalionPost.id == 3) {
                        _this.isCoyCmdr = true;
                        _this.addMemberForm.get('company').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                        _this.addMemberForm.get('company').updateValueAndValidity();
                    }
                    else {
                        _this.isCoyCmdr = false;
                        _this.addMemberForm.get('company').clearValidators();
                        _this.addMemberForm.get('company').updateValueAndValidity();
                    }
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
    AddMemberComponent.prototype.goBack = function () {
        this.router.navigate(['/main/admin/trg-battalion/members']);
    };
    AddMemberComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        this.spinner.show();
        this.service.getCompanyList(e).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.companyList = res.object;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    AddMemberComponent.prototype.postSelected = function (e) {
        if (e == 3) {
            this.isCoyCmdr = true;
            this.addMemberForm.get('company').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            this.addMemberForm.get('company').updateValueAndValidity();
        }
        else {
            this.isCoyCmdr = false;
            this.addMemberForm.get('company').clearValidators();
            this.addMemberForm.get('company').updateValueAndValidity();
        }
    };
    AddMemberComponent.prototype.onSelectImage = function (e) {
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
    Object.defineProperty(AddMemberComponent.prototype, "f", {
        get: function () {
            return this.addMemberForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddMemberComponent.prototype.addMember = function () {
        var _this = this;
        if (this.addMemberForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.service.addTRGBattalionMember(this.addMemberForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/trg-battalion/members']);
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
    AddMemberComponent.prototype.updateMember = function () {
        var _this = this;
        if (this.addMemberForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.service.updateTRGBattalionMember(this.id, this.addMemberForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/trg-battalion/members']);
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
    AddMemberComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
    ]; };
    AddMemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-member',
            template: _raw_loader_add_member_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_member_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], AddMemberComponent);
    return AddMemberComponent;
}());



/***/ })

}]);