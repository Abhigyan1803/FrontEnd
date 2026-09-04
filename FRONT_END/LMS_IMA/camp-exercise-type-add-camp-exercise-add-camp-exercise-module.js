(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camp-exercise-type-add-camp-exercise-add-camp-exercise-module"],{

/***/ "/0On":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/camp-exercise-type/add-camp-exercise/add-camp-exercise.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: AddCampExerciseComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCampExerciseComponentModule", function() { return AddCampExerciseComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_camp_exercise_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-camp-exercise.component */ "nJTl");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_camp_exercise_component__WEBPACK_IMPORTED_MODULE_8__["AddCampExerciseComponent"]
    }
];
var AddCampExerciseComponentModule = /** @class */ (function () {
    function AddCampExerciseComponentModule() {
    }
    AddCampExerciseComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_camp_exercise_component__WEBPACK_IMPORTED_MODULE_8__["AddCampExerciseComponent"],
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
    ], AddCampExerciseComponentModule);
    return AddCampExerciseComponentModule;
}());



/***/ }),

/***/ "CVZB":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/camp-exercise-type/add-camp-exercise/add-camp-exercise.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "TQca":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/camp-exercise-type/add-camp-exercise/add-camp-exercise.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n      <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n      Exercise Type  <span class=\"sub-menu1\">  <span class=\"sub-menu1\"> > {{pageTitle}}</span></span>\r\n    </h4>\r\n  </div>\r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addExerciseTypeForm\">\r\n  \r\n        <div class=\"row\">\r\n\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">ExerciseType<span class=\"required\">*</span></label>\r\n               <input id=\"type\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"type\"\r\n               placeholder=\"ExerciseType\">\r\n                <span class=\"validation_msg\"\r\n                    *ngIf=\"f.type.errors && f.type.errors.required && isError\">Please Enter ExerciseType</span>\r\n            </div>\r\n\r\n\r\n        </div> \r\n\r\n   \r\n  \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"status\">Status<span class=\"required\" >*</span></label>\r\n            <select name=\"\" id=\"\" class=\"form-control \" formControlName=\"status\">\r\n              <option value=\"\" disabled selected hidden>Status</option>\r\n              <option value=\"1\">Active</option>\r\n              <option value=\"0\">Inactive</option>\r\n            </select>\r\n            <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span> \r\n          </div>\r\n        </div>\r\n  \r\n        <button mat-raised-button *ngIf=\"pageTitle=='Add Exercise Type'\" (click)=\"addExerciseType()\">Add ExerciseType</button>\r\n        <button mat-raised-button *ngIf=\"pageTitle=='View Exercise Type'\" (click)=\"updateExerciseType()\">Update ExerciseType</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ }),

/***/ "nJTl":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/camp-exercise-type/add-camp-exercise/add-camp-exercise.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AddCampExerciseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCampExerciseComponent", function() { return AddCampExerciseComponent; });
/* harmony import */ var _raw_loader_add_camp_exercise_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-camp-exercise.component.html */ "TQca");
/* harmony import */ var _add_camp_exercise_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-camp-exercise.component.scss */ "CVZB");
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








var AddCampExerciseComponent = /** @class */ (function () {
    function AddCampExerciseComponent(dialog, spinner, route, fb, router, adminservice, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add Exercise Type";
        this.descLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addExerciseTypeForm = this.fb.group({
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    AddCampExerciseComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-exercise-type')) {
            this.pageTitle = 'Add Exercise Type';
        }
        else if (this.router.url.includes('view-exercise-type')) {
            // this.spinner.show()
            this.pageTitle = 'View Exercise Type';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.adminservice.getExerciseTypeByID(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addExerciseTypeForm.patchValue({
                        type: res.object.type,
                        status: res.object.status,
                    });
                    _this.descLength = res.object.description.length;
                    // this.spinner.hide()
                }
                else {
                    // this.spinner.hide()
                    _this.adminservice.openSnackbar(res.message);
                }
            });
        }
    };
    Object.defineProperty(AddCampExerciseComponent.prototype, "f", {
        get: function () {
            return this.addExerciseTypeForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddCampExerciseComponent.prototype.goBack = function () {
        this.router.navigate(['main/admin/trg-battalion/exercise-type']);
    };
    AddCampExerciseComponent.prototype.addExerciseType = function () {
        var _this = this;
        console.log(this.addExerciseTypeForm.value);
        if (this.addExerciseTypeForm.invalid) {
            this.adminservice.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.addedExerciseType = {
                type: this.addExerciseTypeForm.value.type,
                status: this.addExerciseTypeForm.value.status
            };
            console.log(this.addedExerciseType);
            this.adminservice.addExerciseType(this.addedExerciseType).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/admin/trg-battalion/exercise-type']);
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
    AddCampExerciseComponent.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddCampExerciseComponent.prototype.updateExerciseType = function () {
        var _this = this;
        this.spinner.show();
        // console.log("Bdo", this.addBdoForm.value);
        if (this.addExerciseTypeForm.valid) {
            this.updateExercisetype = {
                type: this.addExerciseTypeForm.value.type,
                status: this.addExerciseTypeForm.value.status,
                id: this.id
            };
            console.log(this.updateExercisetype);
            this.adminservice.updateExerciseType(this.updateExercisetype).subscribe(function (res) {
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
    AddCampExerciseComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
            if (this.router.url.includes('main/exercise-type'))
                this.router.navigate(['main/admin/trg-battalion/exercise-type']);
            if (this.router.url.includes('main/admin'))
                this.router.navigate(['main/admin/trg-battalion/exercise-type']);
        }
        else {
            this.spinner.hide();
            this.adminservice.openSnackbar(res.message);
        }
    };
    AddCampExerciseComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddCampExerciseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-camp-exercise',
            template: _raw_loader_add_camp_exercise_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_camp_exercise_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddCampExerciseComponent);
    return AddCampExerciseComponent;
}());



/***/ })

}]);