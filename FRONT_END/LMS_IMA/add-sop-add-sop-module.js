(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-sop-add-sop-module"],{

/***/ "Bd7E":
/*!******************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/sop/add-sop/add-sop.module.ts ***!
  \******************************************************************************/
/*! exports provided: AddSOPModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSOPModule", function() { return AddSOPModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _add_sop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-sop.component */ "U7p2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _add_sop_component__WEBPACK_IMPORTED_MODULE_7__["AddSopComponent"]
    }
];
var AddSOPModule = /** @class */ (function () {
    function AddSOPModule() {
    }
    AddSOPModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_sop_component__WEBPACK_IMPORTED_MODULE_7__["AddSopComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
            ]
        })
    ], AddSOPModule);
    return AddSOPModule;
}());



/***/ }),

/***/ "U7p2":
/*!*********************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/sop/add-sop/add-sop.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddSopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSopComponent", function() { return AddSopComponent; });
/* harmony import */ var _raw_loader_add_sop_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-sop.component.html */ "aYaj");
/* harmony import */ var _add_sop_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-sop.component.scss */ "s6sI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddSopComponent = /** @class */ (function () {
    function AddSopComponent(fb, service, snackbar, dialog, spinner, router, route, cdref) {
        var _this = this;
        this.fb = fb;
        this.service = service;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.spinner = spinner;
        this.router = router;
        this.route = route;
        this.cdref = cdref;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.isDoc = true;
        this.titleLength = 0;
        this.descLength = 0;
        this.addSopForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            doc: []
        });
        if (this.router.url.includes('view-sop')) {
            this.spinner.show();
            this.pTitle = "View SOP";
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getSopDetails(this.id).subscribe(function (res) {
                if (res.status == '1') {
                    console.log(res);
                    _this.addSopForm.patchValue({
                        title: res.List.title,
                        description: res.List.description,
                        status: res.List.status
                    });
                    _this.docUrl = res.List.document;
                    _this.titleLength = res.List.title.length;
                    _this.descLength = res.List.description.length;
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
            });
        }
        else {
            this.pTitle = "Add SOP";
        }
    }
    AddSopComponent.prototype.ngOnInit = function () {
        this.unSelectedFile = this.docFile.nativeElement.files;
    };
    AddSopComponent.prototype.goBack = function () {
        this.router.navigate(['/main/trg-team/gso-1-training/sop']);
    };
    Object.defineProperty(AddSopComponent.prototype, "f", {
        get: function () {
            return this.addSopForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    /** ========= CHARACTERS COUNT ========= */
    AddSopComponent.prototype.charCount = function (e, t) {
        if (t == 'title')
            this.titleLength = e.target.value.length;
        if (t == 'description')
            this.descLength = e.target.value.length;
    };
    AddSopComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addSopForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
    };
    AddSopComponent.prototype.addDocument = function () {
        var _this = this;
        console.log("Document", this.addSopForm.value.doc);
        if (this.addSopForm.valid) {
            if (this.addSopForm.value.doc == null) {
                this.isDoc = false;
            }
            else {
                this.isDoc = true;
                this.spinner.show();
                this.service.addSopDocument(this.addSopForm.value).subscribe(function (res) {
                    if (res.status == '1') {
                        _this.spinner.hide();
                        _this.cdref.detectChanges();
                        _this.openSnackbar(res.msg);
                        _this.router.navigate(['/main/trg-team/gso-1-training/sop']);
                    }
                    else {
                        _this.spinner.hide();
                        _this.openSnackbar(res.msg);
                    }
                }, function (err) {
                    _this.spinner.hide();
                    console.log(JSON.stringify(err));
                    _this.openSnackbar("Some Error Occured.");
                });
            }
        }
        else {
            this.isError = true;
        }
    };
    AddSopComponent.prototype.updateDocument = function () {
        var _this = this;
        if (this.addSopForm.valid) {
            this.spinner.show();
            this.service.updateSOPDoc(this.id, this.addSopForm.value).subscribe(function (res) {
                if (res.status == '1') {
                    _this.spinner.hide();
                    _this.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.router.navigate(['/main/trg-team/gso-1-training/sop']);
                }
                else {
                    _this.spinner.hide();
                    _this.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this.isError = true;
        }
    };
    AddSopComponent.prototype.openDoc = function () {
        // console.log(doc);  
        var dialogRef = this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '1200px', height: '600px',
            data: {
                type: 'document', url: this.docUrl
            }
        });
    };
    AddSopComponent.prototype.openSnackbar = function (msg) {
        this.snackbar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    AddSopComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    AddSopComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddSopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-sop',
            template: _raw_loader_add_sop_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_sop_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], AddSopComponent);
    return AddSopComponent;
}());



/***/ }),

/***/ "aYaj":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-one-training/sop/add-sop/add-sop.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button> GSO-1 TRG <span class=\"sub-menu1\"> > SOPs</span> ><span class=\"sub-menu1\"> {{pTitle}} </span>\r\n    </h4>\r\n  </div>\r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addSopForm\" >\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label class=\"form-label\">SOP Name <span class=\"char-count\" > ({{titleLength}}/100) </span><span class=\"required\">*</span></label>\r\n            <input type=\"text\" class=\"form-control\" maxlength=\"100\"  formControlName=\"title\" id=\"designation\" (input)=\"charCount($event,'title')\" placeholder=\"SOP Name (Maximum 100 Characters)\">\r\n            <span class=\"validation_msg\" *ngIf=\"f.title.errors && f.title.errors.required && isError\" >SOP Name is required</span>        \r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-12\">\r\n            <label class=\"form-label\"> Description <span class=\"char-count\" > ({{descLength}}/500) </span> <span class=\"required\">*</span></label>\r\n            <textarea class=\"form-control\" maxlength=\"500\" id=\"message\" formControlName=\"description\" (input)=\"charCount($event,'description')\" placeholder=\"Description (Maximum 500 Characters)\"></textarea>\r\n            <span class=\"validation_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >Description is required</span>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\"> Document <span class=\"required\">*</span></label>\r\n          <input type=\"file\"  #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\"> \r\n          <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc()\" >description</mat-icon>\r\n          <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n          <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label class=\"form-label\"> Status <span class=\"required\">*</span></label>\r\n            <select class=\"form-control\" formControlName=\"status\" >\r\n              <option value=\"\" selected hidden disabled>Status</option>\r\n              <option value=\"1\">Active</option>\r\n              <option value=\"0\">Inactive</option>\r\n            </select>\r\n            <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span>\r\n          </div>\r\n        </div>\r\n     \r\n    \r\n        <button *ngIf=\"pTitle == 'Add SOP'\" mat-raised-button  (click)=\"addDocument()\">Add SOP</button>\r\n        <button *ngIf=\"pTitle == 'View SOP'\" mat-raised-button  (click)=\"updateDocument()\">Update SOP</button>\r\n\r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ }),

/***/ "s6sI":
/*!***********************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/sop/add-sop/add-sop.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);