(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-assignment-of-duties-add-assignment-of-duties-module"],{

/***/ "eMAL":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/assignment-of-duties/add-assignment-of-duties/add-assignment-of-duties.module.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: AddAssignmentOfDutiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAssignmentOfDutiesModule", function() { return AddAssignmentOfDutiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_assignment_of_duties_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-assignment-of-duties.component */ "gMDP");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_assignment_of_duties_component__WEBPACK_IMPORTED_MODULE_8__["AddAssignmentOfDutiesComponent"]
    }
];
var AddAssignmentOfDutiesModule = /** @class */ (function () {
    function AddAssignmentOfDutiesModule() {
    }
    AddAssignmentOfDutiesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_assignment_of_duties_component__WEBPACK_IMPORTED_MODULE_8__["AddAssignmentOfDutiesComponent"],
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
    ], AddAssignmentOfDutiesModule);
    return AddAssignmentOfDutiesModule;
}());



/***/ }),

/***/ "gMDP":
/*!************************************************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/assignment-of-duties/add-assignment-of-duties/add-assignment-of-duties.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AddAssignmentOfDutiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAssignmentOfDutiesComponent", function() { return AddAssignmentOfDutiesComponent; });
/* harmony import */ var _raw_loader_add_assignment_of_duties_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-assignment-of-duties.component.html */ "pim4");
/* harmony import */ var _add_assignment_of_duties_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-assignment-of-duties.component.scss */ "xojU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
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









var AddAssignmentOfDutiesComponent = /** @class */ (function () {
    function AddAssignmentOfDutiesComponent(dialog, spinner, fb, router, _trgBattalion, cdref, activeRoute) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.fb = fb;
        this.router = router;
        this._trgBattalion = _trgBattalion;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.title = "Add Assignment of Duties";
        this.battalions = [];
        this.id = '';
        this.isAdmin = false;
        this.addAssignmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.battalionList = [];
        this.isDoc = true;
        this.addAssignmentForm = this.fb.group({
            battalionType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            doc: []
        });
        // this.getBattalion();
    }
    AddAssignmentOfDutiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('main/trg-battalion')) {
            this.isAdmin = false;
            var battalion = JSON.parse(localStorage.getItem('loginResponse')).object.battalion.id;
            this.addAssignmentForm.patchValue({
                battalionType: battalion
            });
        }
        else if (this.router.url.includes('main/admin')) {
            this.isAdmin = true;
            this._trgBattalion.getBattalionList().subscribe(function (res) {
                if (res.status == "OK") {
                    _this.battalionList = res.object;
                    _this.cdref.detectChanges();
                }
            });
        }
        this.unSelectedFile = this.docFile.nativeElement.files;
        if (this.router.url.includes('view-aod')) {
            this.id = this.activeRoute.snapshot.queryParamMap.get('id');
            this.title = "View Assignment of Duties";
            this.getAssignment();
        }
        // this.activeRoute.params.subscribe(params => {
        //   this.id = +params['id']; // (+) converts string 'id' to a number
        // });
        // this.getBattalion();
        // if (this.id > 0) {
        //   this.title = "View Assignment of Duties"
        //   this.getAssignment();
        // } else {
        //   this.title = "Add Assignment of Duties"
        // }
    };
    AddAssignmentOfDutiesComponent.prototype.getBattalion = function () {
        var _this = this;
        this._trgBattalion.getBattalionList().subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                _this.battalionList = res.object;
                _this.cdref.detectChanges();
            }
        });
    };
    AddAssignmentOfDutiesComponent.prototype.getAssignment = function () {
        var _this = this;
        this.spinner.show();
        this._trgBattalion.getAssigmentById(this.id).subscribe(function (res) {
            console.log(res);
            if (res.status == "1") {
                _this.addAssignmentForm.patchValue({
                    battalionType: res.List.battalionType.id,
                    status: res.List.status,
                });
                _this.docUrl = res.List.document;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this._trgBattalion.openSnackbar("Some Error Occured.");
        });
    };
    AddAssignmentOfDutiesComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this._trgBattalion.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addAssignmentForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddAssignmentOfDutiesComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Assignment of Duties", url: l
            }
        });
    };
    Object.defineProperty(AddAssignmentOfDutiesComponent.prototype, "f", {
        get: function () {
            return this.addAssignmentForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddAssignmentOfDutiesComponent.prototype.submit = function () {
        var _this = this;
        if (this.addAssignmentForm.valid) {
            if (this.addAssignmentForm.value.doc == null) {
                this.isDoc = false;
            }
            else {
                this.isDoc = true;
                this.spinner.show();
                this._trgBattalion.addAssigment(this.addAssignmentForm.value).subscribe(function (res) {
                    _this.apiRes(res);
                }, function (err) {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar("Some Error Occured.");
                });
            }
        }
        else {
            this.isError = true;
        }
    };
    AddAssignmentOfDutiesComponent.prototype.updateAssignment = function () {
        var _this = this;
        if (this.addAssignmentForm.valid) {
            this.spinner.show();
            this._trgBattalion.updateAssignment(this.id, this.addAssignmentForm.value).subscribe(function (res) {
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddAssignmentOfDutiesComponent.prototype.apiRes = function (res) {
        if (res.status == '1') {
            this.spinner.hide();
            this._trgBattalion.openSnackbar(res.msg);
            if (this.router.url.includes('main/trg-battalion'))
                this.router.navigate(['/main/trg-battalion/assignment-of-duties']);
            if (this.router.url.includes('main/admin'))
                this.router.navigate(['/main/admin/trg-battalion/assignment-of-duties']);
        }
        else {
            this.spinner.hide();
            this._trgBattalion.openSnackbar(res.msg);
        }
    };
    AddAssignmentOfDutiesComponent.prototype.goBack = function () {
        if (this.router.url.includes('main/trg-battalion'))
            this.router.navigate(['/main/trg-battalion/assignment-of-duties']);
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['/main/admin/trg-battalion/assignment-of-duties']);
    };
    AddAssignmentOfDutiesComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__["TrgBattalionService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddAssignmentOfDutiesComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddAssignmentOfDutiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-assignment-of-duties',
            template: _raw_loader_add_assignment_of_duties_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_assignment_of_duties_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__["TrgBattalionService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddAssignmentOfDutiesComponent);
    return AddAssignmentOfDutiesComponent;
}());



/***/ }),

/***/ "pim4":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-battalion/assignment-of-duties/add-assignment-of-duties/add-assignment-of-duties.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\">\r\n    <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button>\r\n    TRG Battalion <span class=\"sub-menu1\"> > Assignment of Duties > {{title}}</span>\r\n  </h4>\r\n</div>\r\n<mat-card>\r\n  <div class=\"top-br\">\r\n    <form [formGroup]=\"addAssignmentForm\">\r\n\r\n      <div class=\"row\" *ngIf=\"isAdmin\" >\r\n        <div class=\"form-group col-md-6\">\r\n          <label class=\"form-label\">Battalion<span class=\"required\">*</span></label>\r\n          <select name=\"\" id=\"\" class=\"form-control\" formControlName=\"battalionType\">\r\n            <option value=\"\" disabled selected hidden>Select Battalion</option>\r\n            <option *ngFor=\"let battlion of battalionList\" [value]=\"battlion.id\">{{battlion.shortName}} Bn</option>\r\n          </select>\r\n          <span class=\"validation_msg\" *ngIf=\"f.battalionType.errors && f.battalionType.errors.required && isError\" >Battalion is required</span> \r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n          <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n          <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\" >description</mat-icon>\r\n          <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n          <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"status\">Status<span class=\"required\" >*</span></label>\r\n          <select name=\"\" id=\"\" class=\"form-control \" formControlName=\"status\">\r\n            <option value=\"\" disabled selected hidden>Status</option>\r\n            <option value=\"1\">Active</option>\r\n            <option value=\"0\">Inactive</option>\r\n          </select>\r\n          <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span> \r\n        </div>\r\n      </div>\r\n\r\n      <button mat-raised-button *ngIf=\"title=='Add Assignment of Duties'\" (click)=\"submit()\">Add Assignment</button>\r\n      <button mat-raised-button *ngIf=\"title=='View Assignment of Duties'\" (click)=\"updateAssignment()\">Update Assignment</button>\r\n\r\n    </form>\r\n  </div>\r\n</mat-card>");

/***/ }),

/***/ "xojU":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/assignment-of-duties/add-assignment-of-duties/add-assignment-of-duties.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);