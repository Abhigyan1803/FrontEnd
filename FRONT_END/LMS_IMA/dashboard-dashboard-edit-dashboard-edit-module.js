(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-edit-dashboard-edit-module"],{

/***/ "5dC/":
/*!**************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/dashboard/dashboard-edit/dashboard-edit.module.ts ***!
  \**************************************************************************************/
/*! exports provided: DashboardEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardEditModule", function() { return DashboardEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _dashboard_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-edit.component */ "wVYs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _dashboard_edit_component__WEBPACK_IMPORTED_MODULE_8__["DashboardEditComponent"]
    }
];
var DashboardEditModule = /** @class */ (function () {
    function DashboardEditModule() {
    }
    DashboardEditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dashboard_edit_component__WEBPACK_IMPORTED_MODULE_8__["DashboardEditComponent"],
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
    ], DashboardEditModule);
    return DashboardEditModule;
}());



/***/ }),

/***/ "c9iS":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-battalion/dashboard/dashboard-edit/dashboard-edit.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\n    <h4 class=\"card-heading\">\n        <button mat-icon-button (click)=\"goBack()\">\n            <mat-icon>chevron_left</mat-icon>\n        </button>\n        Trg battalion  <span class=\"sub-menu1\"> > Dashboard<span class=\"sub-menu1\"> > {{pageTitle}}</span></span>\n    </h4>\n</div>\n<mat-card>\n    <div class=\"top-br\">\n        <form [formGroup]=\"addItpppForm\">\n            <div class=\"row\">\n                <div class=\"form-group col-md-12\">\n                    <label for=\"awards\">Description <span class=\"char-count\"> ({{descLength}}/1500) </span> <span\n                            class=\"required\">*</span></label>\n                    <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\" rows=\"5\"\n                        (input)=\"charCount($event)\" maxlength=\"1500\" formControlName=\"description\"></textarea>\n                    <span class=\"val_msg\"\n                        *ngIf=\"f.description.errors && f.description.errors.required && isError\">*Please Enter\n                        Description</span>\n\n                </div>\n            </div>\n            <button mat-raised-button  (click)=\"updatePerformance()\">Update</button>\n        </form>\n    </div>\n</mat-card>");

/***/ }),

/***/ "cV4e":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/dashboard/dashboard-edit/dashboard-edit.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "wVYs":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/dashboard/dashboard-edit/dashboard-edit.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DashboardEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardEditComponent", function() { return DashboardEditComponent; });
/* harmony import */ var _raw_loader_dashboard_edit_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard-edit.component.html */ "c9iS");
/* harmony import */ var _dashboard_edit_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-edit.component.scss */ "cV4e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
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








var DashboardEditComponent = /** @class */ (function () {
    function DashboardEditComponent(dialog, spinner, route, fb, router, adminservice, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add ITPPP";
        this.battalions = [];
        this.descLength = 0;
        this.id = '';
        this.addItpppForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.addItpppForm = this.fb.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    DashboardEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.pageTitle = 'View Dashboard';
        this.id = this.route.snapshot.queryParamMap.get('id');
        this.adminservice.getTRGBattalionPerformanceById(this.id).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.addItpppForm.patchValue({
                    description: res.object.description,
                });
                _this.descLength = res.object.description.length;
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        });
    };
    Object.defineProperty(DashboardEditComponent.prototype, "f", {
        get: function () {
            return this.addItpppForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    DashboardEditComponent.prototype.goBack = function () {
        this.router.navigate(['main/trg-battalion/dashboard']);
    };
    DashboardEditComponent.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    DashboardEditComponent.prototype.updatePerformance = function () {
        var _this = this;
        if (this.addItpppForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.adminservice.updateTRGPerformance(this.id, this.addItpppForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/trg-battalion/dashboard']);
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar('Error Occured.');
            });
        }
    };
    DashboardEditComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    DashboardEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-dashboard-edit',
            template: _raw_loader_dashboard_edit_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_edit_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], DashboardEditComponent);
    return DashboardEditComponent;
}());



/***/ })

}]);