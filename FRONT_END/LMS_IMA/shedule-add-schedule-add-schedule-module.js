(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shedule-add-schedule-add-schedule-module"],{

/***/ "4DRF":
/*!************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-comp/shedule/add-schedule/add-schedule.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddScheduleComponent", function() { return AddScheduleComponent; });
/* harmony import */ var _raw_loader_add_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-schedule.component.html */ "H6lW");
/* harmony import */ var _add_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-schedule.component.scss */ "kDhb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddScheduleComponent = /** @class */ (function () {
    // term:string;
    // termId:number;
    function AddScheduleComponent(dialog, spinner, route, fb, router, service, cdref, activeRoute) {
        var _this = this;
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add";
        this.battalions = [];
        this.descLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addScheduleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        activeRoute.params.subscribe(function (params) {
            console.log(params);
            // this.term = params.term;
            _this.type = params.type;
            // if(this.term == 'I Term'){
            //   this.termId = 1;
            // } else if(this.term == 'II Term'){
            //   this.termId = 2;
            // } else if(this.term == 'III Term'){
            //   this.termId = 3;
            // } else if(this.term == 'II Tech'){
            //   this.termId = 7;
            // } else {
            //     this.router.navigate(['/main/adjutant-branch/dashboard'])
            // }
            // console.log(this.termId);
        });
        this.addScheduleForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            file: [],
            type: [this.type],
        });
        // this.getBattalion();
    }
    AddScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view')) {
            this.spinner.show();
            this.pageTitle = 'View';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.viewSCHEDULEId(this.id).subscribe(function (res) {
                console.log(res, "durgesh");
                if (res.status == 'OK') {
                    _this.addScheduleForm.patchValue({
                        title: res.object.title,
                        status: res.object.status,
                    });
                    // this.descLength =  res.object.description.length;
                    _this.docUrl = res.object.document;
                    console.log(_this.docUrl, "durgesh1");
                    _this.isDoc = true;
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            });
        }
    };
    Object.defineProperty(AddScheduleComponent.prototype, "f", {
        get: function () {
            return this.addScheduleForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddScheduleComponent.prototype.goBack = function () {
        window.history.back();
    };
    AddScheduleComponent.prototype.addSchedule = function () {
        var _this = this;
        if (this.addScheduleForm.invalid || !this.isDoc) {
            this.isError = true;
            this.service.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.service.addScheduleNResult(this.addScheduleForm.value).subscribe(function (res) {
                console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
    };
    AddScheduleComponent.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddScheduleComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    AddScheduleComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 104857600) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 100 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addScheduleForm.patchValue({
                file: file
            });
            this.isDoc = true;
        }
    };
    AddScheduleComponent.prototype.updateSchedule = function () {
        var _this = this;
        this.spinner.show();
        console.log("durgesh", this.addScheduleForm.value);
        if (this.addScheduleForm.valid) {
            this.service.updateSCHEDULE(this.addScheduleForm.value, this.id).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddScheduleComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.service.openSnackbar(res.message);
            this.goBack();
        }
        else {
            this.spinner.hide();
            this.service.openSnackbar(res.message);
        }
    };
    AddScheduleComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_8__["AdjutantService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddScheduleComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-schedule',
            template: _raw_loader_add_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_8__["AdjutantService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddScheduleComponent);
    return AddScheduleComponent;
}());



/***/ }),

/***/ "AuFK":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/adjutant-gi/shedule/add-schedule/add-schedule.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n      <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n       <span class=\"sub-menu1\">  schedule <span class=\"sub-menu1\"> > {{pageTitle}}</span></span>\r\n    </h4>\r\n  </div>\r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addPACBForm\">\r\n  \r\n        <div class=\"row\">\r\n\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Title<span class=\"required\">*</span></label>\r\n               <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"title\"\r\n               placeholder=\"title\">\r\n                <span class=\"validation_msg\"\r\n                    *ngIf=\"f.title.errors && f.title.errors.required && isError\">Please Enter title</span>\r\n            </div>\r\n\r\n\r\n        </div> \r\n\r\n       \r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n            <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n            <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\" >description</mat-icon>\r\n            <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n            <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\" >Document is required</span>  \r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"status\">Status<span class=\"required\" >*</span></label>\r\n            <select name=\"\" id=\"\" class=\"form-control \" formControlName=\"status\">\r\n              <option value=\"\" disabled selected hidden>Status</option>\r\n              <option value=\"1\">Active</option>\r\n              <option value=\"0\">Inactive</option>\r\n            </select>\r\n            <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span> \r\n          </div>\r\n        </div>\r\n  \r\n        <button mat-raised-button *ngIf=\"pageTitle=='Add Schedule'\" (click)=\"addSchedule()\">Add Schedule</button>\r\n        <button mat-raised-button *ngIf=\"pageTitle=='View Schedule'\" (click)=\"updateSchedule()\">Update Schedule</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ }),

/***/ "EG+x":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-comp/shedule/add-schedule/add-schedule.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddScheduleModule", function() { return AddScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_schedule_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-schedule.component */ "4DRF");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_schedule_component__WEBPACK_IMPORTED_MODULE_8__["AddScheduleComponent"]
    }
];
var AddScheduleModule = /** @class */ (function () {
    function AddScheduleModule() {
    }
    AddScheduleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_schedule_component__WEBPACK_IMPORTED_MODULE_8__["AddScheduleComponent"],
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
    ], AddScheduleModule);
    return AddScheduleModule;
}());



/***/ }),

/***/ "H6lW":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/drill-comp/shedule/add-schedule/add-schedule.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n      <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n     Drill Competetion <span class=\"sub-menu1\"> > <span class=\"sub-menu1\"> {{type}} > {{pageTitle}} {{type}} </span></span>\r\n    </h4>\r\n  </div>\r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addScheduleForm\">\r\n  \r\n        <div class=\"row\">\r\n\r\n            <div class=\"form-group col-md-6\">\r\n               <label for=\"position\">Title<span class=\"required\">*</span></label>\r\n               <input id=\"title\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"title\"\r\n               placeholder=\"title\">\r\n                <span class=\"validation_msg\"\r\n                    *ngIf=\"f.title.errors && f.title.errors.required && isError\">Please Enter title</span>\r\n            </div>\r\n\r\n\r\n        </div> \r\n\r\n       \r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n            <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx,.xls,.xlsx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n            <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\" >description</mat-icon>\r\n            <span class=\"note\">Max File Size 100 MB. (Only pdf,doc and excel format)</span>\r\n            <span class=\"validation_msg\" *ngIf=\"!isDoc && isError\" >Document is required</span>  \r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"status\">Status<span class=\"required\" >*</span></label>\r\n            <select name=\"\" id=\"\" class=\"form-control \" formControlName=\"status\">\r\n              <option value=\"\" disabled selected hidden>Status</option>\r\n              <option value=\"1\">Active</option>\r\n              <option value=\"0\">Inactive</option>\r\n            </select>\r\n            <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span> \r\n          </div>\r\n        </div>\r\n  \r\n        <button mat-raised-button *ngIf=\"!id\" (click)=\"addSchedule()\">Add Schedule</button>\r\n        <button mat-raised-button *ngIf=\"id\" (click)=\"updateSchedule()\">Update Schedule</button>\r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ }),

/***/ "V26u":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/shedule/add-schedule/add-schedule.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "Y/P6":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/shedule/add-schedule/add-schedule.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddScheduleModule", function() { return AddScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_schedule_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-schedule.component */ "in1w");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_schedule_component__WEBPACK_IMPORTED_MODULE_8__["AddScheduleComponent"]
    }
];
var AddScheduleModule = /** @class */ (function () {
    function AddScheduleModule() {
    }
    AddScheduleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_schedule_component__WEBPACK_IMPORTED_MODULE_8__["AddScheduleComponent"],
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
    ], AddScheduleModule);
    return AddScheduleModule;
}());



/***/ }),

/***/ "in1w":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/shedule/add-schedule/add-schedule.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddScheduleComponent", function() { return AddScheduleComponent; });
/* harmony import */ var _raw_loader_add_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-schedule.component.html */ "AuFK");
/* harmony import */ var _add_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-schedule.component.scss */ "V26u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddScheduleComponent = /** @class */ (function () {
    function AddScheduleComponent(dialog, spinner, route, fb, router, service, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.pageTitle = "Add PACB";
        this.battalions = [];
        this.descLength = 0;
        this.id = '';
        this.isAdmin = false;
        this.addPACBForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.addPACBForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            file: []
        });
        // this.getBattalion();
    }
    AddScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('add-schedule')) {
            this.pageTitle = 'Add Schedule';
        }
        else if (this.router.url.includes('view-schedule')) {
            this.spinner.show();
            this.pageTitle = 'View Schedule';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.viewSCHEDULEId(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.addPACBForm.patchValue({
                        title: res.object.title,
                        status: res.object.status,
                    });
                    // this.descLength =  res.object.description.length;
                    _this.docUrl = res.object.file;
                    _this.isDoc = true;
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            });
        }
    };
    Object.defineProperty(AddScheduleComponent.prototype, "f", {
        get: function () {
            return this.addPACBForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddScheduleComponent.prototype.goBack = function () {
        this.router.navigate(['main/adjutant-branch/general-instruction/drill-competition/schedule']);
    };
    AddScheduleComponent.prototype.addSchedule = function () {
        var _this = this;
        if (this.addPACBForm.invalid || !this.isDoc) {
            this.isError = true;
            this.service.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.service.addSCHEDULE(this.addPACBForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/adjutant-branch/general-instruction/drill-competition/schedule']);
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
    AddScheduleComponent.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddScheduleComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    AddScheduleComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addPACBForm.patchValue({
                file: file
            });
            this.isDoc = true;
        }
    };
    AddScheduleComponent.prototype.updateSchedule = function () {
        var _this = this;
        this.spinner.show();
        // console.log("Bdo", this.addBdoForm.value);
        if (this.addPACBForm.valid) {
            this.service.updateSCHEDULE(this.addPACBForm.value, this.id).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddScheduleComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this.service.openSnackbar(res.message);
            if (this.router.url.includes('main/GS-Branch'))
                this.router.navigate(['main/adjutant-branch/general-instruction/drill-competition/schedule']);
            if (this.router.url.includes('adjutant-branch'))
                this.router.navigate(['main/adjutant-branch/general-instruction/drill-competition/schedule']);
        }
        else {
            this.spinner.hide();
            this.service.openSnackbar(res.message);
        }
    };
    AddScheduleComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_8__["AdjutantService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddScheduleComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-schedule',
            template: _raw_loader_add_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_8__["AdjutantService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddScheduleComponent);
    return AddScheduleComponent;
}());



/***/ }),

/***/ "kDhb":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-comp/shedule/add-schedule/add-schedule.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);