(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nominal-add-nominal-add-nominal-module"],{

/***/ "4gPQ":
/*!****************************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/nominal/add-nominal/add-nominal.module.ts ***!
  \****************************************************************************************/
/*! exports provided: AddNominalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNominalModule", function() { return AddNominalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_nominal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-nominal.component */ "ZdYI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_nominal_component__WEBPACK_IMPORTED_MODULE_8__["AddNominalComponent"]
    }
];
var AddNominalModule = /** @class */ (function () {
    function AddNominalModule() {
    }
    AddNominalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_nominal_component__WEBPACK_IMPORTED_MODULE_8__["AddNominalComponent"],
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
    ], AddNominalModule);
    return AddNominalModule;
}());



/***/ }),

/***/ "Bgck":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/nominal/add-nominal/add-nominal.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "ZdYI":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/nominal/add-nominal/add-nominal.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddNominalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNominalComponent", function() { return AddNominalComponent; });
/* harmony import */ var _raw_loader_add_nominal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-nominal.component.html */ "bMQs");
/* harmony import */ var _add_nominal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-nominal.component.scss */ "Bgck");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
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










var AddNominalComponent = /** @class */ (function () {
    function AddNominalComponent(dialog, _trgTeam, spinner, fb, router, _trgBattalion, activeRoute) {
        this.dialog = dialog;
        this._trgTeam = _trgTeam;
        this.spinner = spinner;
        this.fb = fb;
        this.router = router;
        this._trgBattalion = _trgBattalion;
        this.activeRoute = activeRoute;
        this.isDoc = true;
        this.nameLength = 0;
        this.descLength = 0;
        this.addNominalForm = this.fb.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            file: [],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [],
        });
    }
    AddNominalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
        });
        console.log("id", this.id);
        if (this.id > 0) {
            this.title = "View Nominal Role";
            this.getNominal();
        }
        else {
            this.title = "Add Nominal Role";
        }
    };
    AddNominalComponent.prototype.getNominal = function () {
        var _this = this;
        this.spinner.show();
        this._trgTeam.getByIdNominal(this.id).subscribe(function (res) {
            console.log("by id", res);
            _this.spinner.hide();
            if (res.status == '1') {
                _this.addNominalForm.patchValue(res.Object);
                _this.docUrl = res.Object.document;
                _this.nameLength = res.Object.name.length;
                _this.descLength = res.Object.description.length;
            }
            else {
                _this._trgBattalion.openSnackbar(res.msg);
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    AddNominalComponent.prototype.openDoc = function (l) {
        var dialogRef = this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1200px', height: '600px',
            data: {
                type: 'document', url: l
            }
        });
    };
    AddNominalComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this._trgBattalion.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addNominalForm.patchValue({
                file: file
            });
            this.isDoc = true;
        }
    };
    AddNominalComponent.prototype.charCount = function (e, t) {
        if (t == 'name')
            this.nameLength = e.target.value.length;
        if (t == 'description')
            this.descLength = e.target.value.length;
    };
    Object.defineProperty(AddNominalComponent.prototype, "f", {
        get: function () {
            return this.addNominalForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddNominalComponent.prototype.submit = function () {
        var _this = this;
        if (this.addNominalForm.valid) {
            if (this.addNominalForm.value.file == null) {
                this.isDoc = false;
            }
            else {
                this.isDoc = true;
                this.spinner.show();
                this._trgTeam.addNominal(this.addNominalForm.value).subscribe(function (res) {
                    console.log("result", res);
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
    AddNominalComponent.prototype.updateNominal = function () {
        var _this = this;
        if (this.addNominalForm.valid) {
            this.spinner.show();
            this._trgTeam.updateNominal(this.addNominalForm.value).subscribe(function (res) {
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Some Error Occured.");
            });
        }
    };
    AddNominalComponent.prototype.apiRes = function (res) {
        if (res.status == '1') {
            this.spinner.hide();
            this._trgBattalion.openSnackbar(res.msg);
            this.goBack();
        }
        else {
            this.spinner.hide();
            this._trgBattalion.openSnackbar(res.msg);
        }
    };
    AddNominalComponent.prototype.goBack = function () {
        if (this.router.url.includes('/main/admin/trg-team/')) {
            this.router.navigate(['/main/admin/trg-team/adventure-cell/nominal']);
        }
        else {
            this.router.navigate(['/main/trg-team/adventure-cell/nominal']);
        }
    };
    AddNominalComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__["TrgBattalionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddNominalComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddNominalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-nominal',
            template: _raw_loader_add_nominal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_nominal_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__["TrgBattalionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddNominalComponent);
    return AddNominalComponent;
}());



/***/ }),

/***/ "bMQs":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/adventure-cell/nominal/add-nominal/add-nominal.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"><button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button> Adventure Cell <span class=\"sub-menu1\"> > Nominal Role > {{title}} </span>\r\n        <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addNominalForm\" >\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Nominal name <span class=\"char-count\" > ({{nameLength}}/100) </span> <span class=\"required\">*</span></label>\r\n                    <input type=\"text\" formControlName=\"name\" (input)=\"charCount($event,'name')\" maxlength=\"100\" placeholder=\"Nominal Name (Maximum 100 Characters)\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\" >Nominal Name is required</span>   \r\n                </div>\r\n             \r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label class=\"form-label\">Description<span class=\"char-count\" > ({{descLength}}/500) </span> <span class=\"required\">*</span></label>\r\n                    <textarea class=\"form-control\" (input)=\"charCount($event,'description')\" id=\"message\" formControlName=\"description\" maxlength=\"500\" placeholder=\"Description (Maximum 500 Characters)\"></textarea>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >Description is required</span>   \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label class=\"form-label\">Document <span class=\"required\">*</span></label>\r\n                    <input type=\"file\"   #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                    <mat-icon class=\"document_icon\" *ngIf=\"docUrl\" (click)=\"openDoc(docUrl)\">description</mat-icon>\r\n                    <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n                    <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span> \r\n                </div>\r\n            </div>\r\n\r\n            \r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span>   \r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n            <button *ngIf=\"title == 'Add Nominal Role'\" mat-raised-button (click)=\"submit()\"  >Add Nominal Roll</button>\r\n            <button *ngIf=\"title == 'View Nominal Role'\" mat-raised-button (click)=\"updateNominal()\"  >Update Nominal Roll</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ })

}]);