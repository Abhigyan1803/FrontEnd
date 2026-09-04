(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-trg-team-weapons-add-weapons-add-weapons-module"],{

/***/ "ZFUW":
/*!****************************************************************************!*\
  !*** ./src/app/main/trg-team/weapons/add-weapons/add-weapons.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddWeaponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWeaponsComponent", function() { return AddWeaponsComponent; });
/* harmony import */ var _raw_loader_add_weapons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-weapons.component.html */ "apEz");
/* harmony import */ var _add_weapons_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-weapons.component.scss */ "kKce");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var app_Shared_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Shared/constant */ "rheE");
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









var AddWeaponsComponent = /** @class */ (function () {
    function AddWeaponsComponent(_fb, activeRoute, spinner, service, router, _trgBattalion, cdref) {
        this._fb = _fb;
        this.activeRoute = activeRoute;
        this.spinner = spinner;
        this.service = service;
        this.router = router;
        this._trgBattalion = _trgBattalion;
        this.cdref = cdref;
        this.pattern = "^[a-zA-Z0-9 ]*$";
        this.term = +this.activeRoute.snapshot.queryParamMap.get('term');
        this.weaponsForm = this._fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.pattern)]],
            gPointIIITerm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gPointIITerm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gPointITerm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gPointIITech: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            wa: this._fb.array([this.createWeapon()]),
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [],
        });
    }
    AddWeaponsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTerms();
        this.activeRoute.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
        });
        if (this.term > 0 && !this.id) {
            this.isTerm = false;
        }
        else {
            this.isTerm = true;
        }
        if (this.id > 0) {
            this.pTitle = "View Weapon";
            if (this.term == 1) {
                this.mainTitle = "Term I Weapon";
            }
            else if (this.term == 2) {
                this.mainTitle = "Term II Weapon";
            }
            else if (this.term == 3) {
                this.mainTitle = "Term III Weapon";
            }
            this.getWeponById();
        }
        else {
            if (this.term == 1) {
                this.mainTitle = "Term I Weapon";
            }
            else if (this.term == 2) {
                this.mainTitle = "Term II Weapon";
            }
            else if (this.term == 3) {
                this.mainTitle = "Term III Weapon";
            }
            this.pTitle = "Add Weapon";
        }
    };
    AddWeaponsComponent.prototype.getWeponById = function () {
        var _this = this;
        this.service.getByIdWeapon(this.id).subscribe(function (res) {
            _this.patchValueForm(res.object);
            _this.patchWa(res.object);
        });
    };
    AddWeaponsComponent.prototype.patchValueForm = function (formData) {
        this.weaponsForm.patchValue({
            name: formData.name,
            status: formData.status,
            gPointIITech: formData.gPointIITech,
            gPointIIITerm: formData.gPointIIITerm,
            gPointIITerm: formData.gPointIITerm,
            gPointITerm: formData.gPointITerm,
            id: formData.id
        });
    };
    AddWeaponsComponent.prototype.patchWa = function (formData) {
        for (var i = 0; i < formData.wa.length; i++) {
            if (formData.wa.length != i && this.weaponsForm.value.wa.length != formData.wa.length) {
                this.addItem();
            }
        }
        if (formData.wa.length != 0) {
            this.weaponsForm.patchValue({ wa: formData.wa });
        }
    };
    AddWeaponsComponent.prototype.getTerms = function () {
        var _this = this;
        this.service.getAllTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
    };
    Object.defineProperty(AddWeaponsComponent.prototype, "f", {
        get: function () {
            return this.weaponsForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddWeaponsComponent.prototype, "wa", {
        get: function () {
            return this.weaponsForm.controls["wa"];
        },
        enumerable: false,
        configurable: true
    });
    AddWeaponsComponent.prototype.createWeapon = function () {
        if (this.term == 1) {
            return this._fb.group({
                attrName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.pattern)]],
                termId: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                maxMarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.pattern)]],
                id: [],
            });
        }
        else if (this.term == 2) {
            return this._fb.group({
                attrName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.pattern)]],
                termId: ['2', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                maxMarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.pattern)]],
                id: [],
            });
        }
        else if (this.term == 3) {
            return this._fb.group({
                attrName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.pattern)]],
                termId: ['3', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                maxMarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.pattern)]],
                id: [],
            });
        }
        else if (this.term == 7) {
            return this._fb.group({
                attrName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.pattern)]],
                termId: ['7', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                maxMarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.pattern)]],
                id: [],
            });
        }
        else {
            return this._fb.group({
                attrName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.pattern)]],
                termId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                maxMarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.pattern)]],
                id: [],
            });
        }
    };
    AddWeaponsComponent.prototype.addItem = function () {
        this.wa.push(this.createWeapon());
    };
    AddWeaponsComponent.prototype.deleteWeapon = function (i) {
        this.wa.removeAt(i);
    };
    AddWeaponsComponent.prototype.addWeapons = function () {
        var _this = this;
        if (this.weaponsForm.valid) {
            this.isError = false;
            this.count_duplicate();
            if (this.isDuplicate) {
                this._trgBattalion.openSnackbar(app_Shared_constant__WEBPACK_IMPORTED_MODULE_7__["StringText"].duplicate);
            }
            else {
                this.service.addWeapon(this.weaponsForm.value).subscribe(function (res) {
                    _this.service.openSnackbar(res.object.message);
                    console.log(_this.weaponsForm.value);
                    if (_this.term > 0) {
                        _this.apiRes(res);
                    }
                    else {
                        _this.weaponsForm.reset();
                        // this.weaponsForm.value.wa.clear();
                        _this._trgBattalion.openSnackbar(app_Shared_constant__WEBPACK_IMPORTED_MODULE_7__["StringText"].weapon);
                    }
                });
            }
        }
        else {
            this.isError = true;
        }
    };
    AddWeaponsComponent.prototype.updateWeapons = function () {
        var _this = this;
        if (this.weaponsForm.valid) {
            this.isError = false;
            this.count_duplicate();
            if (this.isDuplicate) {
                this._trgBattalion.openSnackbar(app_Shared_constant__WEBPACK_IMPORTED_MODULE_7__["StringText"].duplicate);
            }
            else {
                this.service.updateWeapon(this.weaponsForm.value).subscribe(function (res) {
                    _this.apiRes(res);
                });
            }
        }
        else {
            this.isError = true;
        }
    };
    AddWeaponsComponent.prototype.count_duplicate = function () {
        this.isDuplicate = false;
        var counts = {};
        var result = [];
        console.log("this.weaponsForm.value.wa-->>", this.weaponsForm.value);
        for (var i = 0; i < this.weaponsForm.value.wa.length; i++) {
            console.log("counts11==>>", counts[this.weaponsForm.value.wa[i].attrName]);
            if (counts[this.weaponsForm.value.wa[i].attrName]) {
                counts[this.weaponsForm.value.wa[i].attrName] += 1;
                console.log("counts22==>>", counts[this.weaponsForm.value.wa[i].attrName]);
            }
            else {
                counts[this.weaponsForm.value.wa[i].attrName] = 1;
            }
        }
        console.log("counts===>>>", counts);
        for (var prop in counts) {
            console.log("prop---->>>", prop);
            console.log("counts[prop]==>>", counts[prop]);
            if (counts[prop] >= 2) {
                result.push(prop);
            }
        }
        console.log("result-->>>", result);
        if (result.length) {
            // var filter = this.weaponsForm.value.wa.filter((element) => {
            //   console.log(result[0],">>>>>>>>>>----");
            //   return element.attrName == result[0];
            // });
            var filterTest = [];
            var filter;
            var _loop_1 = function (i) {
                filter = this_1.weaponsForm.value.wa.filter(function (element) {
                    console.log(result[i], ">>>>>>>>>>----");
                    return element.attrName == result[i];
                });
                for (var j = 0; j < filter.length; j++) {
                    filterTest.push(filter[j]);
                }
            };
            var this_1 = this;
            for (var i = 0; i < result.length; i++) {
                _loop_1(i);
            }
            console.log("filter---->>>", filter);
            console.log("filterTest---->>>", filterTest);
            for (var index = 0; index < filterTest.length - 1; index++) {
                if (filterTest[index].termId == filterTest[index + 1].termId) {
                    this.isDuplicate = true;
                    console.log("is", this.isDuplicate);
                }
                else {
                    // this.isDuplicate = false;
                    console.log("is", this.isDuplicate);
                }
            }
        }
        else {
            this.isDuplicate = false;
            console.log("outside result", this.isDuplicate);
        }
    };
    AddWeaponsComponent.prototype.apiRes = function (res) {
        if (res.status == 'OK') {
            this.spinner.hide();
            this._trgBattalion.openSnackbar(res.message);
            this.routeNavigate();
        }
        else {
            this.spinner.hide();
            this._trgBattalion.openSnackbar(res.message);
        }
    };
    AddWeaponsComponent.prototype.routeNavigate = function () {
        if (this.term == 1) {
            this.router.navigate(['main/admin/trg-team/weapons/1']);
        }
        else if (this.term == 2) {
            this.router.navigate(['main/admin/trg-team/weapons/2']);
        }
        else if (this.term == 3) {
            this.router.navigate(['main/admin/trg-team/weapons/3']);
        }
    };
    AddWeaponsComponent.prototype.goBack = function () {
        this.routeNavigate();
    };
    AddWeaponsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_5__["TrgBattalionService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    AddWeaponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-weapons',
            template: _raw_loader_add_weapons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_weapons_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_5__["TrgBattalionService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], AddWeaponsComponent);
    return AddWeaponsComponent;
}());



/***/ }),

/***/ "apEz":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/weapons/add-weapons/add-weapons.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <!-- <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> -->\r\n         TRG Team<span class=\"sub-menu1\"> > {{mainTitle}}</span> <span class=\"sub-menu1\"> {{pTitle}} </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"weaponsForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Weapon Name <span class=\"required\">*</span></label>\r\n                    <input type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"name\" id=\"designation\"\r\n                        placeholder=\"Weapon Name\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">Weapon\r\n                        Name is required</span>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.pattern && isError\">\r\n                        Only alphanumeric is allowed</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">I Term GPoint<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"gPointITerm\" id=\"designation\"\r\n                        placeholder=\"Term I GPoint (Enter max point)\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">Weapon\r\n                        Term I GPoint is required</span>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.pattern && isError\">\r\n                        Only alphanumeric is allowed</span>\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">II Term GPoint<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"gPointIITerm\" id=\"designation\"\r\n                        placeholder=\"Term II GPoint (Enter max point)\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">Weapon\r\n                        Term II GPoint is required</span>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.pattern && isError\">\r\n                        Only alphanumeric is allowed</span>\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">III Term GPoint<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"gPointIIITerm\" id=\"designation\"\r\n                        placeholder=\"Term III GPoint (Enter max point)\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">Weapon\r\n                        Term III GPoint is required</span>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.pattern && isError\">\r\n                        Only alphanumeric is allowed</span>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-3\">\r\n                    <label class=\"form-label\">II Tech GPoint<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"gPointIITech\" id=\"designation\"\r\n                        placeholder=\"II Tech GPoint (Enter max point)\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.required && isError\">Weapon\r\n                        Tech II GPoint is required</span>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.name.errors && f.name.errors.pattern && isError\">\r\n                        Only alphanumeric is allowed</span>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <ng-container formArrayName=\"wa\">\r\n                <ng-container *ngFor=\"let item of weaponsForm.get('wa')['controls']; let i = index;\"\r\n                    [formGroupName]=\"i\">\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label class=\"form-label\">\r\n                                Weapon Parameter <span class=\"required\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"attrName\"\r\n                                id=\"designation\" placeholder=\"Weapon Parameter \">\r\n                            <span class=\"validation_msg\" *ngIf=\"item.get('attrName').hasError('required') && isError\">\r\n\r\n                                Weapon Parameter is required</span>\r\n\r\n                            <span class=\"validation_msg\" *ngIf=\"item.get('attrName').hasError('pattern') && isError\">\r\n                                Only alphanumeric is allowed</span>\r\n                        </div>\r\n                        <div *ngIf=\"isTerm\" class=\"form-group col-md-4\">\r\n                            <label class=\"form-label\"> Term <span class=\"required\">*</span></label>\r\n                            <select id=\"term\" type=\"text\" class=\"form-control\" formControlName=\"termId\"\r\n                                placeholder=\"Term\">\r\n                                <option value=\"\" selected hidden disabled>Select</option>\r\n                                <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                            </select>\r\n                            <span class=\"validation_msg\" *ngIf=\"item.get('termId').hasError('required') && isError\">Term\r\n                                is required</span>\r\n                            <span class=\"validation_msg\" *ngIf=\"item.get('termId').hasError('pattern') && isError\">\r\n                                Only alphanumeric is allowed</span>\r\n                        </div>\r\n                        <div class=\"form-group col-md-3\">\r\n                            <label class=\"form-label\">Max Marks <span class=\"required\">*</span></label>\r\n                            <input type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"maxMarks\"\r\n                                id=\"designation\" placeholder=\"Marks\">\r\n                            <span class=\"validation_msg\"\r\n                                *ngIf=\"item.get('maxMarks').hasError('required') && isError\">Max Marks is\r\n                                required</span>\r\n                        </div>\r\n                        <div class=\" form-group col-md-1\">\r\n\r\n                            <button (click)=\"deleteWeapon(i)\" class=\"mt-23 btn btn-danger rmv\"\r\n                                *ngIf=\"weaponsForm.get('wa').value.length>1\">\r\n                                <mat-icon>remove</mat-icon>\r\n                            </button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </ng-container>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 pd\">\r\n                        <button (click)=\"addItem()\" style=\"float: right;\" class=\" btn btn-success add-gs\">\r\n                            <mat-icon>add_circle_outline</mat-icon>\r\n                        </button>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </ng-container>\r\n\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\"> Status <span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\">Status\r\n                        is required</span>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <button *ngIf=\"!id\" mat-raised-button (click)=\"addWeapons()\">Add Weapon</button>\r\n            <button *ngIf=\"id\" mat-raised-button (click)=\"updateWeapons()\">Update Weapon</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "it4D":
/*!*************************************************************************!*\
  !*** ./src/app/main/trg-team/weapons/add-weapons/add-weapons.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddWeaponsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWeaponsModule", function() { return AddWeaponsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_weapons_add_weapons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-weapons/add-weapons.component */ "ZFUW");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_weapons_add_weapons_component__WEBPACK_IMPORTED_MODULE_4__["AddWeaponsComponent"]
    }
];
var AddWeaponsModule = /** @class */ (function () {
    function AddWeaponsModule() {
    }
    AddWeaponsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_weapons_add_weapons_component__WEBPACK_IMPORTED_MODULE_4__["AddWeaponsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddWeaponsModule);
    return AddWeaponsModule;
}());



/***/ }),

/***/ "kKce":
/*!******************************************************************************!*\
  !*** ./src/app/main/trg-team/weapons/add-weapons/add-weapons.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mt-23 {\n  margin-top: 23px;\n}\n\n.mr-10 {\n  margin-right: 10px;\n}\n\n.right {\n  float: right;\n}\n\nbutton.btn.btn-success.add-gs {\n  background: #721a0c;\n  border: navajowhite;\n  padding-top: 10px;\n  border-radius: 50%;\n}\n\n.rmv {\n  width: 40px;\n  border-radius: 50%;\n  height: 40px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.col-md-12.pd {\n  margin: -23px;\n  margin-top: 3px;\n}");

/***/ })

}]);