(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-drill-add-drill-module"],{

/***/ "A+tc":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/drill-competition/add-drill/add-drill.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button><span class=\"sub-menu1\"> Drill Subject > {{pTitle}} </span> <span class=\"sub-menu1\">\r\n           </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addDrillForm\">\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                   <label for=\"position\">SubjectName<span class=\"required\">*</span></label>\r\n                   <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"subjectName\"\r\n                   placeholder=\"SubjectName\">\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.subjectName.errors && f.subjectName.errors.required && isError\">Please Enter SubjectName</span>\r\n                </div>\r\n              \r\n              <div class=\"form-group col-md-6\">\r\n                <label class=\"form-label\">Term </label>\r\n                <select placeholder=\"\" class=\"form-control\" formControlName=\"termId\">\r\n                    <option disabled selected hidden></option>\r\n                    <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                </select>\r\n                <span class=\"validation_msg\"\r\n                *ngIf=\"f.termId.errors && f.termId.errors.required && isError\">Please Enter termId</span>\r\n            </div>\r\n\r\n            </div>\r\n          \r\n              <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                  <label for=\"position\">TotalMark<span class=\"required\">*</span></label>\r\n                  <input id=\"name\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"totalMarks\"\r\n                  placeholder=\"TotalMark\">\r\n                   <span class=\"validation_msg\"\r\n                       *ngIf=\"f.totalMarks.errors && f.totalMarks.errors.required && isError\">Please Enter TotalMark</span>\r\n               </div>\r\n                <div class=\"form-group col-md-6\">       \r\n                <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                  <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\" >\r\n                    <option value=\"\" disabled selected hidden >Select</option>\r\n                    <option value=\"1\">Active</option>\r\n                    <option value=\"0\">Inactive</option>\r\n                  </select>\r\n                  <span  class=\"validation_msg\"  *ngIf=\"f.status.touched && f.status.invalid\" >*Please Select Status</span>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label class=\"form-label\">Term Select</label>\r\n                <select placeholder=\"\" class=\"form-control\"  (change)=\"termChange($event.target.value)\" formControlName=\"subjectType\">\r\n                    <option value=\"DAT\">DAT</option>\r\n                    <option value=\"DST\">DST</option>\r\n                </select>\r\n                <span class=\"validation_msg\"\r\n                *ngIf=\"f.termId.errors && f.termId.errors.required && isError\">Please Enter termId</span>\r\n            </div>\r\n              </div> -->\r\n            <button mat-raised-button *ngIf=\"!id\" (click)=\"addDrill()\">Add DRILL</button>\r\n            <button mat-raised-button *ngIf=\"id\" (click)=\"updateDrill()\">Update DRILL</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "rvpv":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-competition/add-drill/add-drill.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddDrillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDrillComponent", function() { return AddDrillComponent; });
/* harmony import */ var _raw_loader_add_drill_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-drill.component.html */ "A+tc");
/* harmony import */ var _add_drill_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-drill.component.scss */ "vC0U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddDrillComponent = /** @class */ (function () {
    function AddDrillComponent(fb, router, route, cdref, spinner, service, dialog) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.cdref = cdref;
        this.spinner = spinner;
        this.service = service;
        this.dialog = dialog;
        this.pTitle = "Add Drill Competition";
        this.terms = [];
        this.addDrillForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.addDrillForm = this.fb.group({
            subjectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    AddDrillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTerms();
        if (this.router.url.includes('view-drill')) {
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.pTitle = "View Drill Competition";
            console.log(this.id);
            this.service.getDrillyId(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addDrillForm.patchValue({
                        subjectName: res.object.subjectName,
                        termId: res.object.termId,
                        status: res.object.status,
                        totalMarks: res.object.totalMarks,
                    });
                }
            });
        }
    };
    AddDrillComponent.prototype.termChange = function (e) {
        console.log(e);
        if (e = 1) {
            this.terms[0];
            console.log(this.terms[0]);
        }
    };
    AddDrillComponent.prototype.getTerms = function () {
        var _this = this;
        this.service.getAllTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
    };
    Object.defineProperty(AddDrillComponent.prototype, "f", {
        get: function () {
            return this.addDrillForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddDrillComponent.prototype.addDrill = function () {
        var _this = this;
        if (this.addDrillForm.invalid) {
            this.isError = true;
            this.service.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.service.addDRILL(this.addDrillForm.value).subscribe(function (res) {
                console.log(res);
                if (res.message == 'drill subject added') {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    if (_this.router.url.includes('adjutant-branch'))
                        _this.router.navigate(['/main/adjutant-branch/drill']);
                    if (_this.router.url.includes('admin/Adjutant-Branch-Management'))
                        _this.router.navigate(['/main/admin/Adjutant-Branch-Management/drill-competition']);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Some Error Occured.");
            });
        }
    };
    AddDrillComponent.prototype.updateDrill = function () {
        var _this = this;
        if (this.addDrillForm.invalid) {
            this.isError = true;
            this.service.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.updateDril = {
                subjectName: this.addDrillForm.value.subjectName,
                termId: this.addDrillForm.value.termId,
                totalMarks: this.addDrillForm.value.totalMarks,
                status: this.addDrillForm.value.status,
                id: this.id
            };
            this.service.updateDrill(this.updateDril).subscribe(function (res) {
                console.log(res);
                if (res.message == 'drill subject updated') {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    if (_this.router.url.includes('adjutant-branch'))
                        _this.router.navigate(['/main/adjutant-branch/drill']);
                    if (_this.router.url.includes('admin/Adjutant-Branch-Management'))
                        _this.router.navigate(['/main/admin/Adjutant-Branch-Management/drill-competition']);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Some Error Occured.");
            });
        }
    };
    AddDrillComponent.prototype.goBack = function () {
        if (this.router.url.includes('adjutant-branch'))
            this.router.navigate(['/main/adjutant-branch/drill']);
        if (this.router.url.includes('admin/Adjutant-Branch-Management'))
            this.router.navigate(['/main/admin/Adjutant-Branch-Management/drill-competition']);
    };
    AddDrillComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_5__["AdjutantService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
    ]; };
    AddDrillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-drill',
            template: _raw_loader_add_drill_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_drill_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_5__["AdjutantService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], AddDrillComponent);
    return AddDrillComponent;
}());



/***/ }),

/***/ "t5p6":
/*!**************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-competition/add-drill/add-drill.module.ts ***!
  \**************************************************************************************/
/*! exports provided: AddDrillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDrillModule", function() { return AddDrillModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_drill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-drill.component */ "rvpv");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_drill_component__WEBPACK_IMPORTED_MODULE_4__["AddDrillComponent"]
    },
];
var AddDrillModule = /** @class */ (function () {
    function AddDrillModule() {
    }
    AddDrillModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_drill_component__WEBPACK_IMPORTED_MODULE_4__["AddDrillComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddDrillModule);
    return AddDrillModule;
}());



/***/ }),

/***/ "vC0U":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-competition/add-drill/add-drill.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);