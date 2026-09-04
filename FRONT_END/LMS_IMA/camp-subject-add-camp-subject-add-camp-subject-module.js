(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camp-subject-add-camp-subject-add-camp-subject-module"],{

/***/ "bpom":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/camp-subject/add-camp-subject/add-camp-subject.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "fSRJ":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/camp-subject/add-camp-subject/add-camp-subject.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddCampSubjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCampSubjectModule", function() { return AddCampSubjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_camp_subject_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-camp-subject.component */ "kQOi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_camp_subject_component__WEBPACK_IMPORTED_MODULE_8__["AddCampSubjectComponent"]
    }
];
var AddCampSubjectModule = /** @class */ (function () {
    function AddCampSubjectModule() {
    }
    AddCampSubjectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_camp_subject_component__WEBPACK_IMPORTED_MODULE_8__["AddCampSubjectComponent"],
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
    ], AddCampSubjectModule);
    return AddCampSubjectModule;
}());



/***/ }),

/***/ "hYM/":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/camp-subject/add-camp-subject/add-camp-subject.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n      <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n      CAMP SUBJECT <span class=\"sub-menu1\"></span>\r\n    </h4>\r\n  </div>\r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addCAMPSUBJECTForm\">\r\n  \r\n        <div class=\"row\">\r\n\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Subject Name<span class=\"required\">*</span></label>\r\n               <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"subjectName\"\r\n               placeholder=\"Name\">\r\n                <span class=\"validation_msg\"\r\n                    *ngIf=\"f.subjectName.errors && f.subjectName.errors.required && isError\">Please Enter Name</span>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"position\">TotalMarks<span class=\"required\">*</span></label>\r\n                <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"totalMarks\"\r\n                placeholder=\"TotalMarks\">\r\n                 <span class=\"validation_msg\"\r\n                     *ngIf=\"f.totalMarks.errors && f.totalMarks.errors.required && isError\">Please Enter TotalMarks</span>\r\n             </div>\r\n        </div> \r\n  \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"status\">Status<span class=\"required\" >*</span></label>\r\n            <select name=\"\" id=\"\" class=\"form-control \" formControlName=\"status\">\r\n              <option value=\"\" disabled selected hidden>Status</option>\r\n              <option value=\"1\">Active</option>\r\n              <option value=\"0\">Inactive</option>\r\n            </select>\r\n            <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span> \r\n          </div>\r\n        </div>\r\n  \r\n        <button mat-raised-button *ngIf=\"pageTitle=='Add CAMP SUBJECT'\" (click)=\"addCAMPSUBJECT()\">ADD SUBJECT</button>\r\n        <button mat-raised-button *ngIf=\"pageTitle=='View CAMP SUBJECT'\" (click)=\"updateCAMPSUBJECT()\">Update SUBJECT</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ }),

/***/ "kQOi":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/camp-subject/add-camp-subject/add-camp-subject.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AddCampSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCampSubjectComponent", function() { return AddCampSubjectComponent; });
/* harmony import */ var _raw_loader_add_camp_subject_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-camp-subject.component.html */ "hYM/");
/* harmony import */ var _add_camp_subject_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-camp-subject.component.scss */ "bpom");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
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








var AddCampSubjectComponent = /** @class */ (function () {
    function AddCampSubjectComponent(dialog, spinner, route, fb, router, adminservice, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add CAMP SUBJECT";
        this.id = '';
        this.addCAMPSUBJECTForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.addCAMPSUBJECTForm = this.fb.group({
            subjectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    AddCampSubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-camp-subject')) {
            this.pageTitle = 'Add CAMP SUBJECT';
        }
        else if (this.router.url.includes('view-camp-subject')) {
            this.spinner.show();
            this.pageTitle = 'View CAMP SUBJECT';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adminservice.getCAMPSUBJByID(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addCAMPSUBJECTForm.patchValue({
                        subjectName: res.object.subjectName,
                        totalMarks: res.object.totalMarks,
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
    Object.defineProperty(AddCampSubjectComponent.prototype, "f", {
        get: function () {
            return this.addCAMPSUBJECTForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddCampSubjectComponent.prototype.goBack = function () {
        this.router.navigate(['main/admin/trg-battalion/camp-subject/']);
    };
    AddCampSubjectComponent.prototype.addCAMPSUBJECT = function () {
        var _this = this;
        this.spinner.show();
        this.adminservice.addCampSubject(this.addCAMPSUBJECTForm.value).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.adminservice.openSnackbar(res.message);
                _this.cdref.detectChanges();
                _this.spinner.hide();
                _this.router.navigate(['main/admin/trg-battalion/camp-subject/']);
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
    };
    AddCampSubjectComponent.prototype.updateCAMPSUBJECT = function () {
        var _this = this;
        this.spinner.show();
        console.log("Bdo", this.addCAMPSUBJECTForm.value);
        if (this.addCAMPSUBJECTForm.valid) {
            this.adminservice.updateCAMPSUBJECT(this.id, this.addCAMPSUBJECTForm.value).subscribe(function (res) {
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
    AddCampSubjectComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
            if (this.router.url.includes('main/GS-Branch'))
                this.router.navigate(['main/admin/trg-battalion/camp-subject']);
            if (this.router.url.includes('main/admin'))
                this.router.navigate(['main/admin/trg-battalion/camp-subject']);
        }
        else {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
        }
    };
    AddCampSubjectComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddCampSubjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-camp-subject',
            template: _raw_loader_add_camp_subject_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_camp_subject_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddCampSubjectComponent);
    return AddCampSubjectComponent;
}());



/***/ })

}]);