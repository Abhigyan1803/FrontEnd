(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-awardee-add-awardee-module"],{

/***/ "KRmS":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/admin/home/hall-of-fame/gallantry-awards/add-awardee/add-awardee.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "Y602":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/admin/home/hall-of-fame/gallantry-awards/add-awardee/add-awardee.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AddAwardeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAwardeeComponent", function() { return AddAwardeeComponent; });
/* harmony import */ var _raw_loader_add_awardee_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-awardee.component.html */ "wJPJ");
/* harmony import */ var _add_awardee_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-awardee.component.scss */ "KRmS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddAwardeeComponent = /** @class */ (function () {
    function AddAwardeeComponent(fb, router, spinner, route, sharedService, cdref, service, snackbar) {
        this.fb = fb;
        this.router = router;
        this.spinner = spinner;
        this.route = route;
        this.sharedService = sharedService;
        this.cdref = cdref;
        this.service = service;
        this.snackbar = snackbar;
        this.awards = ["Param Vir Chakra", "Ashoka Chakra", "SYSM", "Mahavir Chakra", "Kirti Chakra", "UYSM", "Vir Chakra", "Shaurya Chakra"];
        this.battalions = [];
        this.isError = false;
        this.previewImg = '';
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.addHallOfFameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.pageName = "Add Gallantry Awardee";
        /** ========= CHARACTERS COUNT ========= */
        this.titleLength = 0;
        this.descLength = 0;
        this.addHallOfFameForm = this.fb.group({
            officerRank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            officerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            officerRegiment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            officerBattalion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            awardMedal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            yearAwarded: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            recognition: [''],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            isForeign: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            country: ['India', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            image: ['']
        });
        this.getBattalions();
    }
    AddAwardeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('hall-of-fame/gallantry-awardees/view-gallantry-awardee')) {
            this.pageName = 'View Gallantry Awardee';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getGallantryHallOfFameById(this.id).subscribe(function (res) {
                _this.spinner.show();
                console.log(res);
                if (res.status == 'OK') {
                    var data = res.object;
                    _this.addHallOfFameForm.patchValue({
                        officerRank: data.officerRank,
                        officerName: data.officerName,
                        officerRegiment: data.officerRegiment,
                        officerBattalion: data.officerBattalion,
                        awardMedal: data.awardMedal,
                        yearAwarded: data.yearAwarded,
                        recognition: data.recognition,
                        description: data.description,
                        isForeign: data.isForeign,
                        country: data.country,
                        status: data.status,
                    });
                    _this.descLength = data.description.length;
                    _this.previewImg = data.officerImage;
                    _this.spinner.hide();
                }
                else {
                    _this.sharedService.openSnackbar(res.msg);
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.sharedService.openSnackbar("Some Error Occured");
            });
        }
    };
    AddAwardeeComponent.prototype.getBattalions = function () {
        var _this = this;
        this.sharedService.getBattalionList().subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.battalions = res.object;
            }
        });
    };
    AddAwardeeComponent.prototype.onlyNum = function (event) {
        var pattern = /^[0-9]*\.?\d{0,2}$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddAwardeeComponent.prototype.goBack = function () {
        this.router.navigate(['/main/admin/home/hall-of-fame/gallantry-awardees']);
    };
    AddAwardeeComponent.prototype.charCount = function (e) {
        if (e.target.value.length === 3000) {
            return false;
        }
        this.descLength = e.target.value.length;
    };
    AddAwardeeComponent.prototype.onSelectImage = function (e) {
        // this.addHallOfFameForm.patchValue({
        //   image: e.target.files[0]
        // })
        var _this = this;
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.imgFile.nativeElement.files = this.unSelectedFile;
            this.sharedService.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.addHallOfFameForm.patchValue({
                image: file
            });
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function (event) {
                _this.previewImg = event.target.result;
            };
        }
        //  var reader = new FileReader();
        // reader.readAsDataURL(e.target.files[0]);
        // reader.onload = (event:any)=>{
        //   this.previewImg = event.target.result;
        // }
    };
    Object.defineProperty(AddAwardeeComponent.prototype, "f", {
        get: function () {
            return this.addHallOfFameForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddAwardeeComponent.prototype.addHallOfFame = function () {
        var _this = this;
        if (this.addHallOfFameForm.invalid) {
            this.isError = true;
            this.sharedService.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.service.addGallantryHallOfFame(this.addHallOfFameForm.value).subscribe(function (res) {
                console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.sharedService.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
                _this.spinner.hide();
            });
        }
    };
    AddAwardeeComponent.prototype.apiRes = function (res) {
        if (res.status == "OK") {
            this.sharedService.openSnackbar(res.message);
            this.cdref.detectChanges();
            this.goBack();
            this.spinner.hide();
        }
        else {
            this.sharedService.openSnackbar(res.message);
            this.spinner.hide();
        }
    };
    AddAwardeeComponent.prototype.updateHallOfFame = function () {
        var _this = this;
        if (this.addHallOfFameForm.invalid) {
            this.isError = true;
            this.sharedService.openSnackbar("Please Fill All Required Fields");
        }
        else {
            this.spinner.show();
            this.service.updateGallantryHallOfFame(this.id, this.addHallOfFameForm.value).subscribe(function (res) {
                console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.sharedService.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
                _this.spinner.hide();
            });
        }
    };
    AddAwardeeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    AddAwardeeComponent.propDecorators = {
        imgFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['file', { static: true },] }]
    };
    AddAwardeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-awardee',
            template: _raw_loader_add_awardee_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_awardee_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], AddAwardeeComponent);
    return AddAwardeeComponent;
}());



/***/ }),

/***/ "wJPJ":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/hall-of-fame/gallantry-awards/add-awardee/add-awardee.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> Home <span class=\"sub-menu1\"> > Hall of Fame > Gallantry Awardees</span> <span class=\"sub-menu1\"> >\r\n            {{pageName}}</span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addHallOfFameForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"officerRank\">Officer's Rank<span class=\"required\">*</span></label>\r\n                    <input id=\"officerRank\" class=\"form-control\" formControlName=\"officerRank\"\r\n                        placeholder=\"Officer's Rank\" maxlength=\"150\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.officerRank.errors && isError\">Please Enter Officer's\r\n                        Rank</span>\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"officerName\">Officer's Name<span class=\"required\">*</span></label>\r\n                    <input id=\"officerName\" class=\"form-control\" formControlName=\"officerName\"\r\n                        placeholder=\"Officer's Name\" maxlength=\"150\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.officerName.errors && isError\">Please Enter Officer's\r\n                        Name</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n            \r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"officerRegiment\">Officer's Unit<span class=\"required\">*</span></label>\r\n                    <input id=\"officerRegiment\" class=\"form-control\" formControlName=\"officerRegiment\" placeholder=\"Officer's Unit\"\r\n                        maxlength=\"150\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.officerRegiment.errors && isError\">Please Enter Officer's\r\n                        Unit</span>\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"officerBattalion\">Officer's Battalion<span class=\"required\">*</span></label>\r\n                    \r\n                    <select id=\"officerBattalion\" class=\"form-control\" formControlName=\"officerBattalion\">\r\n                        <option value=\"\" selected hidden disabled>Select</option>\r\n                        <option *ngFor=\"let b of battalions\" [value]=\"b.shortName\">{{b.shortName}} Bn</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.officerBattalion.errors && isError\">Please Select Officer's Battalion</span>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <!-- \r\n                  recognition: ['', Validators.required],\r\n                  description: ['', Validators.required],\r\n            \r\n                  status: ['1', Validators.required],\r\n                  image: ['']\r\n                             -->\r\n            \r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"awardMedal\">Awards/Medals</label>\r\n                    <select id=\"awardMedal\" class=\"form-control\" formControlName=\"awardMedal\">\r\n                        <option value=\"\" selected hidden disabled>Select</option>\r\n                        <option *ngFor=\"let a of awards\" [value]=\"a\">{{a}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.awardMedal.errors && isError\">Please Enter Officer's\r\n                        Regiment</span>\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"yearAwarded\">Year</label>\r\n                    <input id=\"yearAwarded\"  class=\"form-control\" formControlName=\"yearAwarded\" \r\n                    placeholder=\"Year When Officer Got Awarded\" (keypress)=\"onlyNum($event)\" maxlength=\"4\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.yearAwarded.errors && isError\">Please Enter Officer's\r\n                                        Year</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"recognition\">Recognition</label>\r\n                    <input id=\"recognition\" class=\"form-control\" formControlName=\"recognition\" placeholder=\"Recognition\"\r\n                        maxlength=\"150\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.recognition.errors && isError\">Please Write Something</span>\r\n                </div>\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"title\">Description <span class=\"char-count\"> ({{descLength}}/3000) </span> <span\r\n                            class=\"required\">*</span></label>\r\n                    <textarea class=\"form-control\" maxlength=\"3000\" placeholder=\"Maximum 3000 Characters\" required\r\n                        formControlName=\"description\" (input)=\"charCount($event)\"></textarea>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.description.errors && isError\">Please Write Some\r\n                        Description</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\">Image (Optional)</label>\r\n                <input #file type=\"file\" accept=\"image/*\" (change)=\"onSelectImage($event)\" id=\"image\">\r\n                <span class=\"size_info\">Max Image Size 50 MB. (Image size must be 200px * 150px)</span>\r\n                <div *ngIf=\"previewImg\" class=\"preview_image\"> <img [src]=\"previewImg\" alt=\"\"></div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                    <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\">\r\n                        <option value=\"\" disabled selected hidden>Select</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.touched && f.status.invalid\">*Please Select\r\n                        Status</span>\r\n                </div>\r\n            </div>\r\n\r\n            <button mat-raised-button *ngIf=\"!id\" (click)=\"addHallOfFame()\">Add</button>\r\n            <button mat-raised-button *ngIf=\"id\" (click)=\"updateHallOfFame()\">Update</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "yGEA":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/admin/home/hall-of-fame/gallantry-awards/add-awardee/add-awardee.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddAwardeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAwardeeModule", function() { return AddAwardeeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_awardee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-awardee.component */ "Y602");
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
        component: _add_awardee_component__WEBPACK_IMPORTED_MODULE_4__["AddAwardeeComponent"]
    },
];
var AddAwardeeModule = /** @class */ (function () {
    function AddAwardeeModule() {
    }
    AddAwardeeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_awardee_component__WEBPACK_IMPORTED_MODULE_4__["AddAwardeeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddAwardeeModule);
    return AddAwardeeModule;
}());



/***/ })

}]);