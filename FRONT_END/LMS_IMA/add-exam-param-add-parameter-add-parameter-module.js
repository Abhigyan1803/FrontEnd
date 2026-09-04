(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-exam-param-add-parameter-add-parameter-module"],{

/***/ "COcI":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/add-exam-param/add-parameter/add-parameter.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button>\r\n        Admin ST & WTT\r\n    </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <!-- <ng-container *ngFor=\"let weapon of weaponList\"> -->\r\n    <form [formGroup]=\"addParamForm\">\r\n\r\n        <div class=\"gene-card-content pad-t-none\">\r\n\r\n            <div class=\"table-responsive\">\r\n\r\n                <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Term</th>\r\n                            <th>Spot Test </th>\r\n                            <th>WTT </th>\r\n\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>\r\n                                <div  class=\"form-group \">\r\n                                    <!-- <label class=\"form-label\"> Term <span class=\"required\">*</span></label> -->\r\n                                    <select id=\"term\" type=\"text\" class=\"form-control\" formControlName=\"termId\"\r\n                                        placeholder=\"Term\">\r\n                                        <option value=\"\" selected hidden disabled>Select</option>\r\n                                        <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                                    </select>\r\n                                    <span class=\"val_msg\" *ngIf=\"f.termId.errors && f.termId.errors.required && isError\" >Please Select TermId</span>\r\n\r\n                                </div>\r\n                            </td>\r\n                            <td><input class=\"form-control\" placeholder=\"Spot Test max Marks\"\r\n                                    formControlName=\"spotTestMark\" type=\"text\">\r\n                                    <span class=\"val_msg\" *ngIf=\"f.spotTestMark.errors && f.spotTestMark.errors.required && isError\" >Please Enter Sport Test Marks</span>\r\n                                </td>\r\n                            <td><input class=\"form-control\" placeholder=\"WTT max Marks \" formControlName=\"wttMark\"\r\n                                    type=\"text\">\r\n                                    <span class=\"val_msg\" *ngIf=\"f.wttMark.errors && f.wttMark.errors.required && isError\" >Please Enter WTT Marks</span>\r\n                                </td>\r\n\r\n\r\n                        </tr>\r\n                        <tr>\r\n\r\n                        </tr>\r\n                    </tbody>\r\n\r\n                </table>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <button mat-raised-button (click)=\"addSUBJECT()\">ADD Marks</button>\r\n    </form>\r\n    <!-- </ng-container> -->\r\n\r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "Mqx8":
/*!***************************************************************************************!*\
  !*** ./src/app/main/trg-team/add-exam-param/add-parameter/add-parameter.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddParameterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddParameterComponent", function() { return AddParameterComponent; });
/* harmony import */ var _raw_loader_add_parameter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-parameter.component.html */ "COcI");
/* harmony import */ var _add_parameter_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-parameter.component.scss */ "qLSm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
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







var AddParameterComponent = /** @class */ (function () {
    function AddParameterComponent(service, router, cdref, _fb, spinner, el) {
        this.service = service;
        this.router = router;
        this.cdref = cdref;
        this._fb = _fb;
        this.spinner = spinner;
        this.el = el;
        this.addParamForm = this._fb.group({
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            spotTestMark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            wttMark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    AddParameterComponent.prototype.ngOnInit = function () {
        this.getTerms();
    };
    AddParameterComponent.prototype.goBack = function () {
        // this.router.navigate(['/main/admin/trg-team/add-exam-param']);
        window.history.back();
    };
    AddParameterComponent.prototype.getTerms = function () {
        var _this = this;
        this.service.getAllTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
    };
    Object.defineProperty(AddParameterComponent.prototype, "f", {
        get: function () {
            return this.addParamForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddParameterComponent.prototype.addSUBJECT = function () {
        var _this = this;
        this.spinner.show();
        if (this.addParamForm.invalid) {
            // this.submitted = true;  
            this.spinner.hide();
            this.isError = true;
            for (var _i = 0, _a = Object.keys(this.addParamForm.controls); _i < _a.length; _i++) {
                var key = _a[_i];
                if (this.addParamForm.controls[key].invalid) {
                    var invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
                    invalidControl.focus();
                    break;
                }
            }
        }
        else {
            this.service.addWtt(this.addParamForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/admin/trg-team/add-exam-param']);
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
    AddParameterComponent.ctorParameters = function () { return [
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__["TrgTeamService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    AddParameterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-parameter',
            template: _raw_loader_add_parameter_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_parameter_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__["TrgTeamService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], AddParameterComponent);
    return AddParameterComponent;
}());



/***/ }),

/***/ "qLSm":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/trg-team/add-exam-param/add-parameter/add-parameter.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "w3UO":
/*!************************************************************************************!*\
  !*** ./src/app/main/trg-team/add-exam-param/add-parameter/add-parameter.module.ts ***!
  \************************************************************************************/
/*! exports provided: AddParameterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddParameterModule", function() { return AddParameterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_parameter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-parameter.component */ "Mqx8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_parameter_component__WEBPACK_IMPORTED_MODULE_8__["AddParameterComponent"]
    },
];
var AddParameterModule = /** @class */ (function () {
    function AddParameterModule() {
    }
    AddParameterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_parameter_component__WEBPACK_IMPORTED_MODULE_8__["AddParameterComponent"],
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
    ], AddParameterModule);
    return AddParameterModule;
}());



/***/ })

}]);