(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oq-marks-add-subject-add-subject-module"],{

/***/ "MVBE":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/oq-marks/add-subject/add-subject.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "fbr6":
/*!************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/oq-marks/add-subject/add-subject.module.ts ***!
  \************************************************************************************************/
/*! exports provided: AddSubjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubjectModule", function() { return AddSubjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_subject_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-subject.component */ "jBpJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_subject_component__WEBPACK_IMPORTED_MODULE_8__["AddSubjectComponent"]
    }
];
var AddSubjectModule = /** @class */ (function () {
    function AddSubjectModule() {
    }
    AddSubjectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_subject_component__WEBPACK_IMPORTED_MODULE_8__["AddSubjectComponent"],
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
    ], AddSubjectModule);
    return AddSubjectModule;
}());



/***/ }),

/***/ "jBpJ":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/oq-marks/add-subject/add-subject.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubjectComponent", function() { return AddSubjectComponent; });
/* harmony import */ var _raw_loader_add_subject_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-subject.component.html */ "vcxw");
/* harmony import */ var _add_subject_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-subject.component.scss */ "MVBE");
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








var AddSubjectComponent = /** @class */ (function () {
    function AddSubjectComponent(dialog, spinner, route, fb, router, adminservice, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add SUBJECT";
        this.id = '';
        this.addSUBJECTForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.addSUBJECTForm = this.fb.group({
            subjectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalMarksPlCdr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalMarksCoyCdr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalMarksBnCdr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        // this.getBattalion();
    }
    AddSubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-subject')) {
            this.pageTitle = 'Add SUBJECT';
        }
        else if (this.router.url.includes('view-subject')) {
            this.spinner.show();
            this.pageTitle = 'View SUBJECT';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adminservice.getSUBJECTByID(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addSUBJECTForm.patchValue({
                        subjectName: res.object.subjectName,
                        plTotalMarks: res.object.plTotalMarks,
                        totalMarksCoyCdr: res.object.totalMarksCoyCdr,
                        totalMarksBnCdr: res.object.totalMarksBnCdr,
                        totalMarksPlCdr: res.object.totalMarksPlCdr,
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
    Object.defineProperty(AddSubjectComponent.prototype, "f", {
        get: function () {
            return this.addSUBJECTForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddSubjectComponent.prototype.goBack = function () {
        this.router.navigate(['main/admin/trg-battalion/oq-subject/']);
    };
    AddSubjectComponent.prototype.addSUBJECT = function () {
        var _this = this;
        this.spinner.show();
        this.adminservice.addSubject(this.addSUBJECTForm.value).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.adminservice.openSnackbar(res.message);
                _this.cdref.detectChanges();
                _this.spinner.hide();
                _this.router.navigate(['main/admin/trg-battalion/oq-subject/']);
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
    AddSubjectComponent.prototype.updateSUBJECT = function () {
        var _this = this;
        this.spinner.show();
        console.log("Bdo", this.addSUBJECTForm.value);
        if (this.addSUBJECTForm.valid) {
            this.adminservice.updateSUBJECT(this.id, this.addSUBJECTForm.value).subscribe(function (res) {
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
    AddSubjectComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
            if (this.router.url.includes('main/GS-Branch'))
                this.router.navigate(['main/admin/trg-battalion/oq-subject']);
            if (this.router.url.includes('main/admin'))
                this.router.navigate(['main/admin/trg-battalion/oq-subject']);
        }
        else {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
        }
    };
    AddSubjectComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddSubjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-subject',
            template: _raw_loader_add_subject_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_subject_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddSubjectComponent);
    return AddSubjectComponent;
}());



/***/ }),

/***/ "vcxw":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/oq-marks/add-subject/add-subject.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n      <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n      OQ SUBJECT <span class=\"sub-menu1\"></span>\r\n    </h4>\r\n  </div>\r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addSUBJECTForm\">\r\n  \r\n        <div class=\"row\">\r\n\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Subject Name<span class=\"required\">*</span></label>\r\n               <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"subjectName\"\r\n               placeholder=\"Name\">\r\n                <span class=\"validation_msg\"\r\n                    *ngIf=\"f.subjectName.errors && f.subjectName.errors.required && isError\">Please Enter Name</span>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"position\">Pl CDR TotalMarks<span class=\"required\">*</span></label>\r\n                <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"totalMarksPlCdr\"\r\n                placeholder=\"Pl TotalMarks\">\r\n                 <span class=\"validation_msg\"\r\n                     *ngIf=\"f.totalMarksPlCdr.errors && f.totalMarksPlCdr.errors.required && isError\">Please Enter Pl TotalMarks</span>\r\n             </div>\r\n             \r\n            <div class=\"form-group col-md-6\">\r\n                <label for=\"position\">Coy CDR TotalMarks<span class=\"required\">*</span></label>\r\n                <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"totalMarksCoyCdr\"\r\n                placeholder=\"Coy TotalMarks\">\r\n                 <span class=\"validation_msg\"\r\n                     *ngIf=\"f.totalMarksCoyCdr.errors && f.totalMarksCoyCdr.errors.required && isError\">Please Enter Coy TotalMarks</span>\r\n             </div>\r\n\r\n             <div class=\"form-group col-md-6\">\r\n                <label for=\"position\">Bn CDR TotalMarks<span class=\"required\">*</span></label>\r\n                <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"totalMarksBnCdr\"\r\n                placeholder=\"Bn TotalMarks\">\r\n                 <span class=\"validation_msg\"\r\n                     *ngIf=\"f.totalMarksBnCdr.errors && f.totalMarksBnCdr.errors.required && isError\">Please Enter Bn TotalMarks</span>\r\n             </div>\r\n\r\n\r\n        </div> \r\n\r\n       \r\n\r\n        \r\n  \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"status\">Status<span class=\"required\" >*</span></label>\r\n            <select name=\"\" id=\"\" class=\"form-control \" formControlName=\"status\">\r\n              <option value=\"\" disabled selected hidden>Status</option>\r\n              <option value=\"1\">Active</option>\r\n              <option value=\"0\">Inactive</option>\r\n            </select>\r\n            <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span> \r\n          </div>\r\n        </div>\r\n  \r\n        <button mat-raised-button *ngIf=\"pageTitle=='Add SUBJECT'\" (click)=\"addSUBJECT()\">ADD SUBJECT</button>\r\n        <button mat-raised-button *ngIf=\"pageTitle=='View SUBJECT'\" (click)=\"updateSUBJECT()\">Update SUBJECT</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ })

}]);