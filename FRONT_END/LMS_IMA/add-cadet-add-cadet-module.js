(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-cadet-add-cadet-module"],{

/***/ "987W":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gc-database/add-cadet/add-cadet.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: AddCadetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCadetModule", function() { return AddCadetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_cadet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-cadet.component */ "t1Rd");
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
        component: _add_cadet_component__WEBPACK_IMPORTED_MODULE_4__["AddCadetComponent"]
    },
];
var AddCadetModule = /** @class */ (function () {
    function AddCadetModule() {
    }
    AddCadetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_cadet_component__WEBPACK_IMPORTED_MODULE_4__["AddCadetComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            ]
        })
    ], AddCadetModule);
    return AddCadetModule;
}());



/***/ }),

/***/ "b9QT":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/gc-database/add-cadet/add-cadet.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button>\r\n        GC Database<span class=\"sub-menu1\"> > {{pTitle}} </span> <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n\r\n\r\n\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n\r\n        <mat-horizontal-stepper #stepper  >\r\n            <mat-step label=\"Personal Information\" [stepControl]=\"addCadetForm\" >\r\n\r\n                <form [formGroup]=\"addCadetForm\">\r\n                    <div class=\"row border acc_doc \">\r\n\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Personal Details</h3>\r\n\r\n                            <div class=\"act-btns\" *ngIf=\"id\">\r\n                                <button mat-icon-button class=\"edi\" *ngIf=\"!editPersonalDetails\"\r\n                                    (click)=\"editPersonalDetails = true\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"clo\" *ngIf=\"editPersonalDetails\"\r\n                                    (click)=\"editPersonalDetails = false\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-12 iner-bs\">\r\n                            <div class=\"row per_cls\">\r\n                                <div class=\" col-md-2 diimage\" >\r\n                                    <div class=\"img-div\">\r\n                                        <img (error)=\"noImg($event)\" [src]=\"previewImg\" (click)=\"openImg(previewImg)\"\r\n                                            alt=\"\">\r\n                                    </div>\r\n                                    <button mat-icon-button class=\"img-btn\" [disabled]=\"!editPersonalDetails\"\r\n                                        (click)=\"candidateImage.click()\">\r\n                                        <mat-icon>add</mat-icon>\r\n                                    </button>\r\n                                    <input type=\"file\" hidden accept=\"image/*\"  #candidateImage required\r\n                                        (change)=\"imgSelected($event)\" >\r\n                                    <p>Upload image size (203px X 200px)</p>\r\n                                    <!-- <span class=\"invalid-input\" *ngIf=\"!previewImg && isError\">Please Select\r\n                                        Image</span> -->\r\n\r\n                                </div>\r\n\r\n                                <div class=\"col-md-10\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"form-group col-md-4\">\r\n                                            <label for=\"name\">Name<span class=\"required\">*</span></label>\r\n                                            <input type=\"text\" id=\"name\" required maxlength=\"100\" class=\"form-control\"\r\n                                            [readonly]=\"!editPersonalDetails\" formControlName=\"name\"\r\n                                                placeholder=\"-\">\r\n                                                <span class=\"invalid-input\"\r\n                                                *ngIf=\" b['name'].errors && b['name'].errors.required && isError\">This\r\n                                                Field is\r\n                                                Required</span>\r\n                                                <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['name'].errors  && b['name'].errors.pattern && isError\">No Speacial Character</span>\r\n                                         \r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-4\">\r\n                                            <label for=\"dob\">Date Of Birth<span class=\"required\">*</span></label>\r\n                                            <input type=\"date\" id=\"dob\" required class=\"form-control\"\r\n                                                [readonly]=\"!editPersonalDetails\" formControlName=\"dob\"\r\n                                                >\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['dob'].errors && b['dob'].errors.required && isError\">This\r\n                                                Field is\r\n                                                Required</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-4\">\r\n                                            <label for=\"birthPlace\">Place of Birth<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" id=\"birthPlace\" required maxlength=\"100\"\r\n                                                [readonly]=\"!editPersonalDetails\" class=\"form-control\"\r\n                                                formControlName=\"birthPlace\" placeholder=\"-\">\r\n                                                <span class=\"invalid-input\"\r\n                                                *ngIf=\" b['birthPlace'].errors && b['birthPlace'].errors.required && isError\">This\r\n                                                Field\r\n                                                is Required</span>\r\n                                            \r\n                                                <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['birthPlace'].errors  && b['birthPlace'].errors.pattern && isError\">No Digits & Speacial Character</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-4\">\r\n                                            <label for=\"religion\">Religion<span class=\"required\">*</span></label>\r\n                                            <select [attr.disabled]=\"!editPersonalDetails ? 'disabled' : null\"\r\n                                                #religionSelect id=\"religion\" class=\"form-control\"\r\n                                                 (change)=\"religionSelected($event.target.value)\" >\r\n                                                <option value=\"\" selected disabled hidden>Select</option>\r\n                                                <option *ngFor=\"let r of religions\" [value]=\"r.name\">{{r.name}}</option>\r\n                                            </select>\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['religion'].errors && b['religion'].errors.required && isError && !oReligion\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-4\" *ngIf=\"oReligion\">\r\n                                            <label for=\"name\">Religion Name<span class=\"required\">*</span></label>\r\n                                            <input type=\"text\" id=\"name\" required maxlength=\"100\" class=\"form-control\"\r\n                                                [readonly]=\"!editPersonalDetails\" formControlName=\"religion\"\r\n                                                placeholder=\"-\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['religion'].errors && b['religion'].errors.required && isError\">This\r\n                                                Field is\r\n                                                Required</span>\r\n                                        </div>\r\n\r\n\r\n\r\n\r\n                                        <div class=\"form-group col-md-4\">\r\n                                            <label for=\"cast\">Caste<span class=\"required\">*</span></label>\r\n                                            <select type=\"text\" id=\"religion\" required class=\"form-control\"\r\n                                                [attr.disabled]=\"!editPersonalDetails ? 'disabled' : null\"\r\n                                                formControlName=\"cast\">\r\n                                                <option value=\"\" selected disabled hidden>Select</option>\r\n                                                <option *ngFor=\"let c of casts\" [value]=\"c.type\">{{c.type}}\r\n                                                </option>\r\n                                            </select>\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['cast'].errors && b['cast'].errors.required && isError\">This\r\n                                                Field is\r\n                                                Required</span>\r\n                                        </div>\r\n\r\n\r\n                                        <div class=\"form-group col-md-4\">\r\n                                            <label for=\"bloodGroup\">Blood Group<span class=\"required\">*</span></label>\r\n                                            <select type=\"text\" id=\"bloodGroup\" required class=\"form-control\"\r\n                                                [attr.disabled]=\"!editPersonalDetails ? 'disabled' : null\"\r\n                                                formControlName=\"bloodGroup\">\r\n                                                <option value=\"\" selected disabled hidden>Select</option>\r\n                                                <option *ngFor=\"let bg of bloodGroups\" [value]=\"bg.type\">\r\n                                                    {{bg.type}}\r\n                                                </option>\r\n                                            </select>\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['bloodGroup'].errors && b['bloodGroup'].errors.required && isError\">This\r\n                                                Field\r\n                                                is Required</span>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n\r\n                                </div>\r\n\r\n\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"row\">\r\n\r\n\r\n                                        <div class=\"form-group col-md-4\">\r\n                                            <label for=\"nationality\">Nationality<span class=\"required\">*</span></label>\r\n\r\n                                            <select type=\"text\" id=\"nationality\" required class=\"form-control\"\r\n                                                [attr.disabled]=\"!editPersonalDetails ? 'disabled' : null\"\r\n                                                (change)=\"nationalitySelected($event.target.value)\"\r\n                                                formControlName=\"nationality\">\r\n                                                <option value=\"\" selected hidden disabled>Select</option>\r\n                                                <option *ngFor=\"let n of nationalities\" [value]=\"n.name\">\r\n                                                    {{n.name}}\r\n                                                </option>\r\n                                            </select>\r\n\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['nationality'].errors && b['nationality'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-4\">\r\n                                            <label for=\"state\">State<span class=\"required\">*</span></label>\r\n                                            <select *ngIf=\"isIndia\" id=\"state\" required class=\"form-control\"\r\n                                                [attr.disabled]=\"!editPersonalDetails ? 'disabled' : null\"\r\n                                                placeholder=\"-\" formControlName=\"state\">\r\n                                                <option value=\"\" selected hidden disabled>Select</option>\r\n                                                <option *ngFor=\"let s of states\" [value]=\"s.name\">{{s.name}}\r\n                                                </option>\r\n                                            </select>\r\n\r\n                                            <input *ngIf=\"!isIndia\" type=\"text\" id=\"state\" required maxlength=\"100\"\r\n                                                [readonly]=\"!editPersonalDetails\" class=\"form-control\" placeholder=\"-\"\r\n                                                formControlName=\"state\">\r\n\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['state'].errors && b['state'].errors.required && isError\">\r\n                                                This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-4\">\r\n                                            <label for=\"identificationMarks\">Identification Marks<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" id=\"identificationMarks\" required maxlength=\"100\"\r\n                                                [readonly]=\"!editPersonalDetails\" class=\"form-control\"\r\n                                                formControlName=\"identificationMarks\">\r\n                                                <span class=\"invalid-input\"\r\n                                                *ngIf=\" b['identificationMarks'].errors && b['identificationMarks'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n\r\n                                                <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['identificationMarks'].errors  && b['identificationMarks'].errors.pattern && isError\">No Digits & Speacial Character</span>\r\n                                        </div>\r\n\r\n\r\n                                        <div class=\"form-group col-md-4\">\r\n                                            <label for=\"maritalStatus\">Marital Status<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <select style=\"margin: 0;\" width=\"50%\" type=\"text\" id=\"maritalStatus\"\r\n                                                required [attr.disabled]=\"!editPersonalDetails ? 'disabled' : null\"\r\n                                                class=\"form-control\" formControlName=\"maritalStatus\">\r\n                                                <option value=\"\" selected hidden disabled>Select</option>\r\n                                                <option *ngFor=\"let ms of maritalStatuses\" [value]=\"ms.type\">\r\n                                                    {{ms.type}}\r\n                                                </option>\r\n                                            </select>\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['maritalStatus'].errors && b['maritalStatus'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-4\" *ngIf=\"isIndia\">\r\n                                            <label for=\"adharNo\">Aadhar Card Number<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input style=\"margin: 0;\" type=\"text\" id=\"adharNo\" required maxlength=\"16\"\r\n                                                class=\"form-control\" [readonly]=\"!editPersonalDetails\"\r\n                                                 formControlName=\"adharNo\">\r\n                                                <span class=\"invalid-input\"\r\n                                                *ngIf=\" b['adharNo'].errors && b['adharNo'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                                <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['adharNo'].errors?.pattern && isError\">Please\r\n                                            Enter Number Only</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-4\" *ngIf=\"!isIndia\">\r\n                                            <label for=\"adharNo\">Passport Number<span class=\"required\">*</span></label>\r\n                                            <input style=\"margin: 0;\" type=\"text\" id=\"passport\" required maxlength=\"16\"\r\n                                                [readonly]=\"!editPersonalDetails\" class=\"form-control\"\r\n                                                 formControlName=\"adharNo\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['adharNo'].errors && b['adharNo'].errors.required && isError\">This\r\n                                                Field is\r\n                                                Required</span>\r\n                                        </div>\r\n\r\n\r\n                                        <div class=\"form-group col-md-4\">\r\n                                            <label for=\"sports\">Hobbies/extra activities<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input style=\"margin: 0;\" type=\"text\" id=\"hobies\" required maxlength=\"100\"\r\n                                                class=\"form-control\" [readonly]=\"!editPersonalDetails\"\r\n                                                formControlName=\"hobies\">\r\n                                                <span class=\"invalid-input\"\r\n                                                *ngIf=\" b['hobies'].errors && b['hobies'].errors.required && isError\">This\r\n                                                Field is\r\n                                                Required</span>\r\n                                                <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['hobies'].errors  && b['hobies'].errors.pattern && isError\">No Digits & Speacial Character</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-4\">\r\n                                            <label for=\"mothertongue\">Mother Tongue<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input style=\"margin: 0;\" type=\"text\" id=\"mothertongue\" maxlength=\"100\"\r\n                                                formControlName=\"motheTongue\" class=\"form-control\"\r\n                                                [readonly]=\"!editPersonalDetails\">\r\n                                                <span class=\"invalid-input\"\r\n                                                *ngIf=\" b['motheTongue'].errors && b['motheTongue'].errors.required && isError\">This\r\n                                                Field is\r\n                                                Required</span>\r\n                                                <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['motheTongue'].errors  && b['motheTongue'].errors.pattern && isError\">No Digits & Speacial Character</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-12\">\r\n\r\n                                            <label for=\"sports\">Foreign Languages</label>\r\n                                            <div formArrayName=\"foreignLanguages\">\r\n                                                <table>\r\n                                                    <thead>\r\n                                                        <th>Language</th>\r\n                                                        <th>Qualification</th>\r\n                                                        <th>University</th>\r\n                                                        <th>Proficiency</th>\r\n                                                    </thead>\r\n                                                    <tbody>\r\n                                                        <tr *ngFor=\"let l of getForeignLanguages.controls;let i=index\">\r\n                                                            <ng-container [formGroupName]=\"i\">\r\n                                                                <td>\r\n                                                                    <input type=\"text\" formControlName=\"language\"\r\n                                                                        [readonly]=\"!editPersonalDetails\"\r\n                                                                        class=\"form-control\" id=\"\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <input type=\"text\" formControlName=\"qualification\"\r\n                                                                        [readonly]=\"!editPersonalDetails\"\r\n                                                                        class=\"form-control\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <input type=\"text\" formControlName=\"university\"\r\n                                                                        [readonly]=\"!editPersonalDetails\"\r\n                                                                        class=\"form-control\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <div class=\"chk-input-new proff\">\r\n                                                                        <span>\r\n                                                                            <input type=\"checkbox\"\r\n                                                                                [attr.disabled]=\"!editPersonalDetails? 'disabled' : null\"\r\n                                                                                formControlName=\"proRead\" [id]=\"'r'+i\">\r\n                                                                            <label [for]=\"'r'+i\">\r\n                                                                                <p>\r\n                                                                                    Read\r\n                                                                                </p>\r\n                                                                            </label>\r\n\r\n                                                                        </span>\r\n                                                                        <span>\r\n                                                                            <input type=\"checkbox\"\r\n                                                                                [attr.disabled]=\"!editPersonalDetails ? 'disabled' : null\"\r\n                                                                                formControlName=\"proWrite\" [id]=\"'w'+i\">\r\n                                                                            <label [for]=\"'w'+i\">\r\n                                                                                <p>\r\n                                                                                    Write\r\n                                                                                </p>\r\n                                                                            </label>\r\n\r\n                                                                        </span>\r\n                                                                        <span>\r\n                                                                            <input type=\"checkbox\"\r\n                                                                                [attr.disabled]=\"!editPersonalDetails ? 'disabled' : null\"\r\n                                                                                formControlName=\"proSpeak\" [id]=\"'s'+i\">\r\n                                                                            <label [for]=\"'s'+i\">\r\n                                                                                <p>\r\n                                                                                    Speak\r\n                                                                                </p>\r\n                                                                            </label>\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                </td>\r\n                                                                <td class=\"remove-btn-td\">\r\n                                                                    <button [disabled]=\"!editPersonalDetails\"\r\n                                                                        *ngIf=\"getForeignLanguages.controls.length>1\"\r\n                                                                        mat-icon-button\r\n                                                                        (click)=\"removeAForeignLanguage(i)\"\r\n                                                                        class=\"remove-btn\">\r\n                                                                        <mat-icon>\r\n                                                                            remove\r\n                                                                        </mat-icon>\r\n                                                                    </button>\r\n\r\n                                                                </td>\r\n\r\n                                                                <!-- <span>\r\n                                                                    <button *ngIf=\"languages.controls.length>1\" mat-icon-button (click)=\"removeALanguage(i)\" class=\"remove-btn\">\r\n                                                                        <mat-icon>\r\n                                                                            remove\r\n                                                                        </mat-icon>\r\n                                                                    </button>\r\n                                                                </span> -->\r\n\r\n                                                            </ng-container>\r\n\r\n                                                        </tr>\r\n                                                    </tbody>\r\n\r\n                                                </table>\r\n                                                <div class=\"ading-bhn\">\r\n                                                    <button [disabled]=\"!editPersonalDetails\"\r\n                                                        (click)=\"addAForeignLanguage()\" class=\"add-btn cus-btn\"\r\n                                                        mat-icon-button>\r\n                                                        <mat-icon>add</mat-icon>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n\r\n\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"row\" *ngIf=\"id\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <button mat-raised-button [disabled]=\"!editPersonalDetails\"\r\n                                                (click)=\"updatePersonalDetails()\" class=\"upt_dne\">Update</button>\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                    <div class=\"row border acc_doc\">\r\n\r\n                        <div class=\"edi_btn\">\r\n\r\n                            <h3>Contact And Address Details</h3>\r\n                            <div class=\"act-btns\" *ngIf=\"id\">\r\n                                <button mat-icon-button class=\"edi\" *ngIf=\"!editContactDetails\"\r\n                                    (click)=\"editContactDetails = true\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"clo\" *ngIf=\"editContactDetails\"\r\n                                    (click)=\"editContactDetails = false\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n\r\n                        <div class=\"col-md-12 iner-bs\">\r\n                            <div class=\"row inner-pd\">\r\n                                <div class=\" col-md-4\">\r\n                                    <label for=\"belongsTo\">You Belong To <span class=\"required\">*</span></label>\r\n                                    <div class=\"chk-input-new\">\r\n                                        <span>\r\n                                            <input type=\"radio\" formControlName=\"belongsTo\" value=\"Urban\" id=\"urban\"\r\n                                                [attr.disabled]=\"!editContactDetails ? 'disabled' : null\">\r\n                                            <label for=\"urban\">\r\n                                                <p>\r\n                                                    Urban\r\n                                                </p>\r\n                                            </label>\r\n                                        </span>\r\n\r\n                                        <span>\r\n                                            <input type=\"radio\" formControlName=\"belongsTo\" value=\"Semi Urban\"\r\n                                                id=\"semiurban\"\r\n                                                [attr.disabled]=\"!editContactDetails ? 'disabled' : null\">\r\n                                            <label for=\"semiurban\">\r\n                                                <p>\r\n                                                    Semi Urban\r\n                                                </p>\r\n                                            </label>\r\n                                        </span>\r\n                                        <span>\r\n                                            <input type=\"radio\" formControlName=\"belongsTo\" value=\"Rural\" id=\"rural\"\r\n                                                [attr.disabled]=\"!editContactDetails ? 'disabled' : null\">\r\n                                            <label for=\"rural\">\r\n                                                <p>\r\n                                                    Rural\r\n                                                </p>\r\n                                            </label>\r\n                                        </span>\r\n                                    </div>\r\n\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['belongsTo'].errors && b['belongsTo'].errors.required && isError\">This\r\n                                        Field is\r\n                                        Required</span>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"contactNo\">Contact No.<span class=\"required\">*</span></label>\r\n                                    <input type=\"text\" id=\"contactNo\" required maxlength=\"13\"\r\n                                        [readonly]=\"!editContactDetails\" class=\"form-control\"\r\n                                         formControlName=\"contactNo\">\r\n                                        <span class=\"invalid-input\"\r\n                                        *ngIf=\" b['contactNo'].errors && b['contactNo'].errors.required && isError\">This\r\n                                        Field is\r\n                                        Required</span>\r\n                                        <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['contactNo'].errors?.pattern && isError\">Please\r\n                                    Enter Number Only</span>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"email\">Email Address<span class=\"required\">*</span></label>\r\n                                    <input type=\"text\" id=\"email\" required maxlength=\"100\" class=\"form-control\"\r\n                                        [readonly]=\"!editContactDetails\" placeholder=\"Ex. xyz@abc.com\"\r\n                                        formControlName=\"email\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['email'].errors && b['email'].errors.required && isError\">This\r\n                                        Field is\r\n                                        Required</span>\r\n                                    <span class=\"invalid-input\" *ngIf=\"b['email'].touched && b['email'].errors\">Please\r\n                                        Enter a\r\n                                        Valid Email Address</span>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"row inner-pd\">\r\n\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label for=\"address\"> Address Line 1 <span class=\"required\">*</span></label>\r\n                                    <input [readonly]=\"!editContactDetails\" type=\"text\" formControlName=\"addressLine1\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['addressLine1'].errors && b['addressLine1'].errors.required && isError\">This\r\n                                        Field is\r\n                                        Required</span>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label for=\"address\"> Address Line 2 </label>\r\n                                    <input [readonly]=\"!editContactDetails\" type=\"text\" formControlName=\"addressLine2\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> Village </label>\r\n                                    <input [readonly]=\"!editContactDetails\" type=\"text\" formControlName=\"village\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                        <!-- <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['village'].errors?.alpha && isError\">Please Enter Only Character</span> -->\r\n                                        <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['village'].errors  && b['village'].errors.pattern && isError\">No Digits & Speacial Character</span>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> Tehsil </label>\r\n                                    <input [readonly]=\"!editContactDetails\" type=\"text\" formControlName=\"tehsil\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                        <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['tehsil'].errors  && b['tehsil'].errors.pattern && isError\">No Digits & Speacial Character</span>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> Post Office</label>\r\n                                    <input [readonly]=\"!editContactDetails\" type=\"text\" formControlName=\"postOffice\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                        <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['postOffice'].errors  && b['postOffice'].errors.pattern && isError\">No  Speacial Character</span>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> City <span class=\"required\">*</span> </label>\r\n                                    <input [readonly]=\"!editContactDetails\" type=\"text\" formControlName=\"city\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                        <span class=\"invalid-input\"\r\n                                        *ngIf=\" b['city'].errors && b['city'].errors.required && isError\">This\r\n                                        Field is\r\n                                        Required</span>\r\n                                        <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['city'].errors  && b['city'].errors.pattern && isError\">No Digits & Speacial Character</span>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> District </label>\r\n                                    <input [readonly]=\"!editContactDetails\" type=\"text\" formControlName=\"district\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                        <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['district'].errors  && b['district'].errors.pattern && isError\">No Digits & Speacial Character</span>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> State <span class=\"required\">*</span></label>\r\n                                    <input [readonly]=\"!editContactDetails\" type=\"text\" formControlName=\"AddressState\"\r\n                                        class=\"form-control\" name=\"\" id=\"\">\r\n                                        <span class=\"invalid-input\"\r\n                                        *ngIf=\" b['AddressState'].errors && b['AddressState'].errors.required && isError\">This\r\n                                        Field is\r\n                                        Required</span>\r\n                                       \r\n                                        <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['AddressState'].errors  && b['AddressState'].errors.pattern && isError\">No Digits & Speacial Character</span>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"address\"> Pincode <span class=\"required\">*</span></label>\r\n                                    <input [readonly]=\"!editContactDetails\" type=\"text\" (keypress)=\"onlyNum($event)\"\r\n                                        formControlName=\"pincode\" class=\"form-control\" name=\"\" id=\"\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['pincode'].errors && b['pincode'].errors.required && isError\">This\r\n                                        Field is\r\n                                        Required</span>\r\n                                        <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['pincode'].errors && b['pincode'].errors.pattern && isError\">\r\n                                        Only Digits</span>    \r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"id\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editContactDetails\"\r\n                                        (click)=\"updateContactDetails()\">Update</button>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                    <div class=\"row border acc_doc\">\r\n\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Family Details</h3>\r\n                            <div class=\"act-btns\" *ngIf=\"id\">\r\n                                <button mat-icon-button class=\"edi\" *ngIf=\"!editFamilyDetails\"\r\n                                    (click)=\"editFamilyDetails = true\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"clo\" *ngIf=\"editFamilyDetails\"\r\n                                    (click)=\"editFamilyDetails = false\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-12 iner-bs\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label for=\"fatherName\"> Father's Name<span class=\"required\">*</span></label>\r\n                                    <input type=\"text\" id=\"fatherName\" required maxlength=\"100\"\r\n                                        [readonly]=\"!editFamilyDetails\" class=\"form-control\"\r\n                                        formControlName=\"fatherName\">\r\n                                        <span class=\"invalid-input\"\r\n                                        *ngIf=\" b['fatherName'].errors && b['fatherName'].errors.required && isError\">This\r\n                                        Field\r\n                                        is Required</span>\r\n                                        <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['fatherName'].errors  && b['fatherName'].errors.pattern && isError\">No Digits & Speacial Character</span>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"form-group col-md-12 inner-input\">\r\n                                    <div class=\"inner-section\" style=\"display: flex;\r\n                                    flex-wrap: wrap;width: 100%;\">\r\n                                        <label for=\"parentMonthlyIncome\">Parent's/Guardian's Monthly Income<span\r\n                                                class=\"required\">*</span> <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['parentMonthlyIncome'].errors && b['parentMonthlyIncome'].errors.required && isError\">Required</span> </label>\r\n\r\n                                        <!-- <input type=\"text\" id=\"parentMonthlyIncome\" required\r\n                                            [readonly]=\"!editFamilyDetails\" maxlength=\"100\" class=\"form-control\"\r\n                                            (keypress)=\"onlyNum($event)\" formControlName=\"parentMonthlyIncome\"> -->\r\n                                        <div class=\"chk-input-new\">\r\n                                            <span>\r\n                                                <input [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    type=\"radio\" formControlName=\"parentMonthlyIncome\"\r\n                                                    value=\"Below 1 Lakh\" id=\"0_1\">\r\n                                                <label for=\"0_1\">\r\n                                                    <p>Below 1 Lakh </p>\r\n                                                </label>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"chk-input-new\">\r\n                                            <span>\r\n                                                <input [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    type=\"radio\" formControlName=\"parentMonthlyIncome\"\r\n                                                    value=\"1 Lakh - 5 Lakh\" id=\"1_5\">\r\n                                                <label for=\"1_5\">\r\n                                                    <p> 1 Lakh - 5 Lakh </p>\r\n                                                </label>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"chk-input-new\">\r\n                                            <span>\r\n                                                <input [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    type=\"radio\" formControlName=\"parentMonthlyIncome\"\r\n                                                    value=\"> 5 Lakh - 10 Lakh\" id=\"5_10\">\r\n                                                <label for=\"5_10\">\r\n                                                    <p> > 5 Lakh - 10 Lakh</p>\r\n                                                </label>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"chk-input-new\">\r\n                                            <span>\r\n                                                <input [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    type=\"radio\" formControlName=\"parentMonthlyIncome\"\r\n                                                    value=\" > 10Lakh - 20 Lakh\" id=\"10_20\">\r\n                                                <label for=\"10_20\">\r\n                                                    <p> > 10Lakh - 20 Lakh</p>\r\n                                                </label>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"chk-input-new\">\r\n                                            <span>\r\n                                                <input [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    type=\"radio\" formControlName=\"parentMonthlyIncome\"\r\n                                                    value=\"> 20Lakh - 50 Lakh\" id=\"20_50\">\r\n                                                <label for=\"20_50\">\r\n                                                    <p> > 20Lakh - 50 Lakh</p>\r\n                                                </label>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"chk-input-new\">\r\n                                            <span>\r\n                                                <input [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    type=\"radio\" formControlName=\"parentMonthlyIncome\" value=\"> 50 Lakh\"\r\n                                                    id=\"50_\">\r\n                                                <label for=\"50_\">\r\n                                                    <p> > 50 Lakh</p>\r\n                                                </label>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n\r\n                                <div class=\"form-group col-md-12 inner-input\">\r\n                                    <div class=\"inner-section\"> \r\n                                        <label for=\"fatherProfession\">\r\n                                            Father's/Guardian's profession <span class=\"required\">*</span>\r\n                                            <span class=\"invalid-input\" *ngIf=\"b['fatherProfession'].errors && b['fatherProfession'].errors.required && isError\">Required</span>\r\n                                        </label>\r\n\r\n                                        <div class=\"\">\r\n                                            <div class=\"fprofession\">\r\n                                                <input [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    type=\"radio\" formControlName=\"fatherProfession\"\r\n                                                    value=\"Indian Armed Forces\" id=\"iaf\">\r\n                                                <label for=\"iaf\">\r\n                                                    <p>Indian Armed Forces</p>\r\n                                                </label>\r\n                                            </div>\r\n\r\n                                            <div *ngIf=\"b['fatherProfession'].value == 'Indian Armed Forces'\"\r\n                                                class=\"card border\" style=\"margin: 10px 0px\">\r\n\r\n\r\n                                                <div class=\"card-body\">\r\n\r\n                                                    <div class=\"ine-card\" style=\"display: flex;\">\r\n                                                        <div class=\"card\" style=\"width: 50%; display: flex;\">\r\n                                                            <div class=\"card-header\">\r\n                                                                <h5>Rank Type  \r\n                                                                    <span class=\"required\">*</span>  <span class=\"invalid-input\" \r\n                                                                    *ngIf=\"b['fatherProfessionIAFRankType'].errors && b['fatherProfessionIAFRankType'].errors.required &&\r\n                                                                     isError\">Required</span> </h5>\r\n                                           \r\n\r\n                                                            </div>\r\n                                                            <div class=\"card-body\">\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRankType\"\r\n                                                                        value=\"officerRank\" id=\"ofrank\">\r\n                                                                    <label for=\"ofrank\">\r\n                                                                        <p>Officer</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRankType\"\r\n                                                                        value=\"otherRank\" id=\"otrank\">\r\n                                                                    <label for=\"otrank\">\r\n                                                                        <p>Other Rank</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n\r\n                                                        <div class=\"card\" style=\"width: 50%; display: flex; \">\r\n                                                            <div class=\"card-header\">\r\n                                                                <h5>Current Status \r\n                                                                    <span class=\"required\">*</span>  <span class=\"invalid-input\" \r\n                                                                    *ngIf=\"b['fatherProfessionStatus'].errors && b['fatherProfessionStatus'].errors.required &&\r\n                                                                     isError\">Required</span> \r\n                                                                </h5>\r\n                                                            </div>\r\n                                                            <div class=\"card-body\">\r\n\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        formControlName=\"fatherProfessionStatus\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        value=\"Serving\" id=\"serving1\">\r\n                                                                    <label for=\"serving1\">\r\n                                                                        <p>Serving</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        formControlName=\"fatherProfessionStatus\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        value=\"Retired\" id=\"retd1\">\r\n                                                                    <label for=\"retd1\">\r\n                                                                        <p>Retd</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        formControlName=\"fatherProfessionStatus\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        value=\"Ex Serviceman\" id=\"exservice1\">\r\n                                                                    <label for=\"exservice1\">\r\n                                                                        <p>Ex Serviceman</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n\r\n\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n\r\n                                                    <div class=\"card\" style=\"margin: 5px;\">\r\n                                                        <div class=\"card-header\">\r\n                                                            <h5>Type of Defence Forces\r\n                                                                <span class=\"required\">*</span>  <span class=\"invalid-input\" \r\n                                                                *ngIf=\"b['fatherProfessionIAFType'].errors && b['fatherProfessionIAFType'].errors.required &&\r\n                                                                 isError\">Required</span> \r\n                                                            </h5>\r\n                                                        </div>\r\n\r\n                                                        <div class=\"card-body\">\r\n                                                            <div class=\"fprofession\">\r\n                                                                <input type=\"radio\"\r\n                                                                    [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                    formControlName=\"fatherProfessionIAFType\"\r\n                                                                    value=\"Army\" id=\"Army\">\r\n                                                                <label for=\"Army\">\r\n                                                                    <p>Army</p>\r\n                                                                </label>\r\n                                                            </div>\r\n\r\n                                                            <div class=\"fprofession\">\r\n                                                                <input type=\"radio\"\r\n                                                                    [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                    formControlName=\"fatherProfessionIAFType\"\r\n                                                                    value=\"Air Force\" id=\"airforce\">\r\n                                                                <label for=\"airforce\">\r\n                                                                    <p>Air Force</p>\r\n                                                                </label>\r\n                                                            </div>\r\n\r\n                                                            <div class=\"fprofession\">\r\n                                                                <input type=\"radio\"\r\n                                                                    [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                    formControlName=\"fatherProfessionIAFType\"\r\n                                                                    value=\"Navy\" id=\"navy\">\r\n                                                                <label for=\"navy\">\r\n                                                                    <p>Navy</p>\r\n                                                                </label>\r\n\r\n                                                            </div>\r\n\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-6\">\r\n                                                                    <label for=\"\">Unit\r\n                                                                        <span class=\"required\">*</span> \r\n                                                                    </label>\r\n                                                                    <input type=\"text\" class=\"form-control\" name=\"\"\r\n                                                                        [readonly]=\"!editFamilyDetails\"\r\n                                                                        formControlName=\"fatherProfessionIAFUnit\" id=\"\">\r\n\r\n                                                                        <span class=\"invalid-input\" \r\n                                                                        *ngIf=\"b['fatherProfessionIAFUnit'].errors && b['fatherProfessionIAFUnit'].errors.required &&\r\n                                                                         isError\">Required</span> \r\n                                                                </div>\r\n                                                                <div class=\"col-md-6\">\r\n                                                                    <label for=\"\">Choice of Arms\r\n                                                                        <span class=\"required\">*</span> \r\n\r\n                                                                    </label>\r\n                                                                    <input type=\"text\" class=\"form-control\" name=\"\"\r\n                                                                        [readonly]=\"!editFamilyDetails\"\r\n                                                                        formControlName=\"fatherProfessionIAFChoceOfArms\"\r\n                                                                        id=\"\">\r\n                                                                        <span class=\"invalid-input\" \r\n                                                                        *ngIf=\"b['fatherProfessionIAFChoceOfArms'].errors && b['fatherProfessionIAFChoceOfArms'].errors.required &&\r\n                                                                         isError\">Required</span> \r\n                                                                </div>\r\n                                                            </div>\r\n\r\n\r\n                                                        </div>\r\n\r\n\r\n                                                    </div>\r\n\r\n                                                    <div *ngIf=\"b['fatherProfessionIAFType'].value\" class=\"card\"\r\n                                                        style=\"margin: 5px;\">\r\n                                                        <div class=\"card-header\">\r\n                                                            <h5>Rank\r\n                                                                <span class=\"required\">*</span>  <span class=\"invalid-input\" \r\n                                                                *ngIf=\"b['fatherProfessionIAFRank'].errors && b['fatherProfessionIAFRank'].errors.required &&\r\n                                                                 isError\">Required</span> \r\n                                                            </h5>\r\n                                                        </div>\r\n                                                        <div class=\"card-body\">\r\n\r\n                                                            <div *ngIf=\"b['fatherProfessionIAFType'].value == 'Army'\">\r\n\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        value=\"Lt Gen\" id=\"ltgen\">\r\n                                                                    <label for=\"ltgen\">\r\n                                                                        <p>Lt Gen</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        value=\"Maj Gen\" id=\"majgen\">\r\n                                                                    <label for=\"majgen\">\r\n                                                                        <p>Maj Gen</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        value=\"Brig\" id=\"brig\">\r\n                                                                    <label for=\"brig\">\r\n                                                                        <p>Brig</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        value=\"Col\" id=\"col\">\r\n                                                                    <label for=\"col\">\r\n                                                                        <p>Col</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        value=\"Lt Col\" id=\"ltcol\">\r\n                                                                    <label for=\"ltcol\">\r\n                                                                        <p>Lt Col</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        value=\"Major\" id=\"maj\">\r\n                                                                    <label for=\"maj\">\r\n                                                                        <p>Major</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        value=\"Capt\" id=\"capt\">\r\n                                                                    <label for=\"capt\">\r\n                                                                        <p>Capt</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        value=\"Lt\" id=\"lt\">\r\n                                                                    <label for=\"lt\">\r\n                                                                        <p>Lt</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        value=\"Sub Maj\" id=\"submaj\">\r\n                                                                    <label for=\"submaj\">\r\n                                                                        <p>Sub Maj</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        value=\"Sub/Nb Sub\" id=\"nbsub\">\r\n                                                                    <label for=\"nbsub\">\r\n                                                                        <p>Sub/Nb Sub</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        value=\"Hav\" id=\"hav\">\r\n                                                                    <label for=\"hav\">\r\n                                                                        <p>Hav</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        value=\"NK/LHav\" id=\"nklhav\">\r\n                                                                    <label for=\"nklhav\">\r\n                                                                        <p>NK/LHav</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        value=\"Rfn/LNK\" id=\"rfnlnk\">\r\n                                                                    <label for=\"rfnlnk\">\r\n                                                                        <p>Rfn/LNK</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                            </div>\r\n\r\n                                                            <div *ngIf=\"b['fatherProfessionIAFType'].value == 'Navy'\">\r\n\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"admiral\" value=\"Admiral\">\r\n                                                                    <label for=\"admiral\">\r\n                                                                        <p>Admiral</p>\r\n                                                                    </label>\r\n\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"commodore\" value=\"Commodore\">\r\n                                                                    <label for=\"commodore\">\r\n                                                                        <p>Commodore</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"captain\" value=\"Captain\">\r\n                                                                    <label for=\"captain\">\r\n                                                                        <p>Captain</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"commander\" value=\"Commander\">\r\n                                                                    <label for=\"commander\">\r\n                                                                        <p>Commander</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"ltcommander\" value=\"Lt Commander\">\r\n                                                                    <label for=\"ltcommander\">\r\n                                                                        <p>Lt Commander</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"lt2\" value=\"Lt\">\r\n                                                                    <label for=\"lt2\">\r\n                                                                        <p>Lt</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"sublt\" value=\"Sub-Lt\">\r\n                                                                    <label for=\"sublt\">\r\n                                                                        <p>Sub-Lt</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"mcpo\" value=\"MCPO(I/II)\">\r\n                                                                    <label for=\"mcpo\">\r\n                                                                        <p>MCPO(I/II)</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"cpopo\" value=\"CPO/PO\">\r\n                                                                    <label for=\"cpopo\">\r\n                                                                        <p>CPO/PO</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"lseaman\" value=\"L/Seaman\">\r\n                                                                    <label for=\"lseaman\">\r\n                                                                        <p>L/Seaman</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"seaman\" value=\"Seaman(I/II)\">\r\n                                                                    <label for=\"seaman\">\r\n                                                                        <p>Seaman(I/II)</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n\r\n                                                            </div>\r\n\r\n\r\n                                                            <div class=\"\"\r\n                                                                *ngIf=\"b['fatherProfessionIAFType'].value == 'Air Force'\">\r\n\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"airmarshal\" value=\"Air Marshal\">\r\n                                                                    <label for=\"airmarshal\">\r\n                                                                        <p>Air Marshal</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"aircommodore\" value=\"Air Commodore\">\r\n                                                                    <label for=\"aircommodore\">\r\n                                                                        <p>Air Commodore</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"groupcapt\" value=\"Group Capt\">\r\n                                                                    <label for=\"groupcapt\">\r\n                                                                        <p>Group Capt</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"wingcdr\" value=\"Wing Cdr\">\r\n                                                                    <label for=\"wingcdr\">\r\n                                                                        <p>Wing Cdr</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"squadronldr\" value=\"Squadron Leader\">\r\n                                                                    <label for=\"squadronldr\">\r\n                                                                        <p>Squadron Leader</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"flightlt\" value=\"Flight Lt\">\r\n                                                                    <label for=\"flightlt\">\r\n                                                                        <p>Flight Lt</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"flyingoffcr\" value=\"Flying Officer\">\r\n                                                                    <label for=\"flyingoffcr\">\r\n                                                                        <p>Flying Officer</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"mwo\" value=\"MWO\">\r\n                                                                    <label for=\"mwo\">\r\n                                                                        <p>MWO</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"wo\" value=\"WO\">\r\n                                                                    <label for=\"wo\">\r\n                                                                        <p>WO</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"jwo\" value=\"JWO\">\r\n                                                                    <label for=\"jwo\">\r\n                                                                        <p>JWO</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"sergeant\" value=\"Sergeant\">\r\n                                                                    <label for=\"sergeant\">\r\n                                                                        <p>Sergeant</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"corporal\" value=\"Corporal\">\r\n                                                                    <label for=\"corporal\">\r\n                                                                        <p>Corporal</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n                                                                <div class=\"fprofession\">\r\n                                                                    <input type=\"radio\"\r\n                                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                                        formControlName=\"fatherProfessionIAFRank\"\r\n                                                                        id=\"airman\" value=\"Airman\">\r\n                                                                    <label for=\"airman\">\r\n                                                                        <p>Airman</p>\r\n                                                                    </label>\r\n                                                                </div>\r\n\r\n\r\n                                                            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n\r\n\r\n\r\n\r\n                                                </div>\r\n\r\n                                            </div>\r\n\r\n\r\n                                            <div class=\"fprofession\">\r\n                                                <input type=\"radio\"\r\n                                                    [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    formControlName=\"fatherProfession\" value=\"Central Govt\"\r\n                                                    id=\"centralgovt\">\r\n                                                <label for=\"centralgovt\">\r\n                                                    <p>Central Govt</p>\r\n                                                </label>\r\n                                            </div>\r\n\r\n                                            <div class=\"fprofession\">\r\n                                                <input type=\"radio\"\r\n                                                    [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    formControlName=\"fatherProfession\" value=\"State Govt\"\r\n                                                    id=\"stategovt\">\r\n                                                <label for=\"stategovt\">\r\n                                                    <p>State Govt</p>\r\n                                                </label>\r\n                                            </div>\r\n\r\n                                            <div class=\"fprofession\">\r\n                                                <input type=\"radio\"\r\n                                                    [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    formControlName=\"fatherProfession\" value=\"Banking\" id=\"bank\">\r\n                                                <label for=\"bank\">\r\n                                                    <p>Banking</p>\r\n                                                </label>\r\n                                            </div>\r\n\r\n\r\n                                            <div class=\"fprofession\">\r\n                                                <input type=\"radio\"\r\n                                                    [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    formControlName=\"fatherProfession\" value=\"Teacher\" id=\"teacher\">\r\n                                                <label for=\"teacher\">\r\n                                                    <p>Teacher</p>\r\n                                                </label>\r\n                                            </div>\r\n\r\n                                            <div class=\"fprofession\">\r\n                                                <input type=\"radio\"\r\n                                                    [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    formControlName=\"fatherProfession\" value=\"Doctor\" id=\"doctor\">\r\n                                                <label for=\"doctor\">\r\n                                                    <p>Doctor</p>\r\n                                                </label>\r\n                                            </div>\r\n\r\n                                            <div class=\"fprofession\">\r\n                                                <input type=\"radio\"\r\n                                                    [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    formControlName=\"fatherProfession\" value=\"Advocate\" id=\"advocate\">\r\n                                                <label for=\"advocate\">\r\n                                                    <p>Advocate</p>\r\n                                                </label>\r\n                                            </div>\r\n\r\n\r\n                                            <div class=\"fprofession\">\r\n                                                <input type=\"radio\"\r\n                                                    [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    formControlName=\"fatherProfession\" value=\"Corporate\" id=\"corporate\">\r\n                                                <label for=\"corporate\">\r\n                                                    <p>Corporate</p>\r\n                                                </label>\r\n                                            </div>\r\n\r\n                                            <div class=\"fprofession\">\r\n                                                <input type=\"radio\"\r\n                                                    [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    formControlName=\"fatherProfession\" value=\"Business\" id=\"business\">\r\n                                                <label for=\"business\">\r\n                                                    <p>Business</p>\r\n                                                </label>\r\n                                            </div>\r\n\r\n                                            <div class=\"fprofession\">\r\n                                                <input type=\"radio\"\r\n                                                    [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    formControlName=\"fatherProfession\" value=\"Police\" id=\"police\">\r\n                                                <label for=\"police\">\r\n                                                    <p>Police</p>\r\n                                                </label>\r\n                                            </div>\r\n\r\n\r\n                                            <div class=\"fprofession\">\r\n                                                <input type=\"radio\"\r\n                                                    [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    formControlName=\"fatherProfession\" value=\"Agriculture/Farming\"\r\n                                                    id=\"farm\">\r\n                                                <label for=\"farm\">\r\n                                                    <p>Agriculture/Farming</p>\r\n                                                </label>\r\n                                            </div>\r\n\r\n                                            <div class=\"fprofession\">\r\n                                                <input type=\"radio\"\r\n                                                    [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                    formControlName=\"fatherProfession\" value=\"Other\" id=\"other\">\r\n                                                <label for=\"other\">\r\n                                                    <p>Other</p>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"card\"\r\n                                            *ngIf=\" b['fatherProfession'].value && b['fatherProfession'].value != 'Indian Armed Forces' \"\r\n                                            style=\"margin-bottom: 15px;margin-top: 15px;\">\r\n                                            <div class=\"card-header\">\r\n                                                <h5>\r\n                                                    Current Status \r\n                                                    <span class=\"required\">*</span>  <span class=\"invalid-input\" \r\n                                                    *ngIf=\"b['fatherProfessionStatus'].errors && b['fatherProfessionStatus'].errors.required &&\r\n                                                     isError\">Required</span> \r\n                                                </h5>\r\n                                            </div>\r\n                                            <div class=\"card-body\">\r\n                                                <div class=\"fprofession\">\r\n                                                    <input type=\"radio\"\r\n                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                        formControlName=\"fatherProfessionStatus\"\r\n                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                        id=\"serving2\" value=\"Serving\">\r\n                                                    <label for=\"serving2\">\r\n                                                        <p>Serving</p>\r\n                                                    </label>\r\n                                                </div>\r\n                                                <div class=\"fprofession\">\r\n                                                    <input type=\"radio\"\r\n                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                        formControlName=\"fatherProfessionStatus\"\r\n                                                        [attr.disabled]=\"!editFamilyDetails ? 'disabled' : null\"\r\n                                                        value=\"Retired\" id=\"retd2\">\r\n                                                    <label for=\"retd2\">\r\n                                                        <p>Retd</p>\r\n                                                    </label>\r\n                                                </div>\r\n\r\n                                            </div>\r\n\r\n                                        </div>\r\n\r\n                                        <div class=\"card\"\r\n                                            *ngIf=\" b['fatherProfession'].value && b['fatherProfession'].value != 'Indian Armed Forces' \">\r\n                                            <div class=\"card-header\">\r\n                                                <h5>\r\n                                                    Please Furnish the Details\r\n                                                    <span class=\"required\">*</span>  <span class=\"invalid-input\" \r\n                                                    *ngIf=\"b['fatherProfessionDetails'].errors && b['fatherProfessionDetails'].errors.required &&\r\n                                                     isError\">Required</span> \r\n                                                </h5>\r\n                                            </div>\r\n                                            <div class=\"card-body\">\r\n                                                <textarea type=\"text\" id=\"fatherProfessionDetails\" required\r\n                                                    maxlength=\"500\" class=\"form-control\" [readonly]=\"!editFamilyDetails\"\r\n                                                    placeholder=\"Please Furnish the Details\"\r\n                                                    formControlName=\"fatherProfessionDetails\" style=\"margin-top: 10px;\">\r\n                                            </textarea>\r\n                                                <span class=\"invalid-input\"\r\n                                                    *ngIf=\"b['fatherProfession'].errors && b['fatherProfession'].errors.required && isError\">This\r\n                                                    Field is Required </span>\r\n\r\n                                            </div>\r\n\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"inner-new1\">\r\n                                        <div class=\"kin\">\r\n                                            <div class=\"form-group col-md-6\">\r\n                                                <label for=\"nameOfNextKinRelation\">Name of next of kin showing\r\n                                                    relationship<span class=\"required\">*</span></label>\r\n                                                <input type=\"text\" id=\"nameOfNextKinRelation\" required maxlength=\"100\"\r\n                                                    class=\"form-control\" formControlName=\"nameOfNextKinRelation\"\r\n                                                    [readonly]=\"!editFamilyDetails\" placeholder=\"Name\">\r\n                                                    <span class=\"invalid-input\"\r\n                                                    *ngIf=\" b['nameOfNextKinRelation'].errors && b['nameOfNextKinRelation'].errors.required && isError\">This\r\n                                                    Field is Required</span>\r\n                                                    <span class=\"invalid-input\"\r\n                                                    *ngIf=\"b['nameOfNextKinRelation'].errors  && b['nameOfNextKinRelation'].errors.pattern && isError\">No Digits & Speacial Character</span>\r\n                                            </div>\r\n                                            <div class=\"form-group col-md-6\">\r\n                                                <label for=\"relationWithKin\">Relation<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" id=\"relationWithKin\" required maxlength=\"100\"\r\n                                                    class=\"form-control\" formControlName=\"relationWithKin\"\r\n                                                    [readonly]=\"!editFamilyDetails\"\r\n                                                    placeholder=\"Nearest relative i.e. Father, Mother or Wife\">\r\n                                                <span class=\"invalid-input\"\r\n                                                    *ngIf=\" b['relationWithKin'].errors && b['relationWithKin'].errors.required && isError\">This\r\n                                                    Field is Required</span>\r\n                                                    <span class=\"invalid-input\"\r\n                                                    *ngIf=\"b['relationWithKin'].errors  && b['relationWithKin'].errors.pattern && isError\">No Digits & Speacial Character</span>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-12\" style=\"margin: 0px !important;\">\r\n                                            <label for=\"addressOfNextKinRelation\">Address of next of kin showing\r\n                                                relationship<span class=\"required\">*</span></label>\r\n\r\n                                            <textarea formControlName=\"addressOfNextKinRelation\" class=\"form-control\"\r\n                                                [readonly]=\"!editFamilyDetails\" maxlength=\"500\"\r\n                                                placeholder=\"Address\"></textarea>\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['addressOfNextKinRelation'].errors && b['addressOfNextKinRelation'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"id\" style=\"margin-top: 15px;\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editFamilyDetails\"\r\n                                        (click)=\"updateFamilyDetails()\">Update</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row border acc_doc\">\r\n\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Professional Details</h3>\r\n                            <div class=\"act-btns\" *ngIf=\"id\">\r\n                                <button mat-icon-button class=\"edi\" *ngIf=\"!editProfessionalDetails\"\r\n                                    (click)=\"editProfessionalDetails = true\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"clo\" *ngIf=\"editProfessionalDetails\"\r\n                                    (click)=\"editProfessionalDetails = false\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12 iner-bs\">\r\n\r\n                            <div class=\"row\">\r\n\r\n\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label for=\"\">Add Your Professional Details</label>\r\n                                    <div formArrayName=\"professionalDetails\">\r\n\r\n                                        <table>\r\n                                            <thead>\r\n                                                <th> Profession </th>\r\n                                                <th> Date of Resignation </th>\r\n                                                <th> Company Name </th>\r\n                                                <th> Duration (In Months) </th>\r\n                                            </thead>\r\n\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let p of professions.controls; let pIndex=index\">\r\n                                                    <ng-container [formGroupName]=\"pIndex\">\r\n                                                        <td>\r\n                                                            <input type=\"text\" class=\"form-control\" id=\"\"\r\n                                                                [readonly]=\"!editProfessionalDetails\"\r\n                                                                formControlName=\"profession\">\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <input type=\"date\" class=\"form-control\" id=\"\"\r\n                                                                [readonly]=\"!editProfessionalDetails\"\r\n                                                                formControlName=\"dateOfResignation\">\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <input type=\"text\" class=\"form-control\" id=\"\"\r\n                                                                [readonly]=\"!editProfessionalDetails\"\r\n                                                                formControlName=\"companyName\">\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <input type=\"text\" class=\"form-control\" id=\"\"\r\n                                                                [readonly]=\"!editProfessionalDetails\"\r\n                                                                formControlName=\"duration\">\r\n                                                        </td>\r\n                                                        <td class=\"remove-btn-td\">\r\n                                                            <button mat-icon-button\r\n                                                                [disabled]=\"!editProfessionalDetails\"\r\n                                                                (click)=\"removeAProfessionalDetail(pIndex)\"\r\n                                                                class=\"remove-btn\"\r\n                                                                *ngIf=\"professions.controls.length > 1\">\r\n                                                                <mat-icon>remove</mat-icon>\r\n                                                            </button>\r\n                                                        </td>\r\n                                                    </ng-container>\r\n\r\n                                                </tr>\r\n                                            </tbody>\r\n\r\n                                        </table>\r\n\r\n\r\n                                        <div class=\"ading-bhn\">\r\n                                            <button [disabled]=\"!editProfessionalDetails\" mat-icon-button\r\n                                                (click)=\"addProfessionalDetail()\" class=\"add-btn cus-btn\">\r\n                                                <mat-icon>add</mat-icon>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <div class=\"inner-new1\" style=\"padding: 15px;\">\r\n                                        <label for=\"\">\r\n                                            Are you from\r\n                                        </label>\r\n\r\n                                        <div class=\"chk-input\">\r\n\r\n                                            \r\n                                            <span>\r\n                                                <input #govtEmpArmy type=\"checkbox\"\r\n                                                    [attr.disabled]=\"!editProfessionalDetails ? 'disabled' : null\"\r\n                                                    id=\"fromarmy\" \r\n                                                    (change)=\"govEmpCheckboxChecked($event,'Army')\">\r\n                                                <label for=\"fromarmy\">\r\n                                                    <p>Army</p>\r\n                                                </label>\r\n                                            </span>\r\n                                            <span>\r\n                                                <input #govtEmpNavy type=\"checkbox\"\r\n                                                    [attr.disabled]=\"!editProfessionalDetails ? 'disabled' : null\"\r\n                                                    id=\"fromnavy\" \r\n                                                    (change)=\"govEmpCheckboxChecked($event,'Navy')\">\r\n                                                <label for=\"fromnavy\">\r\n                                                    <p>Navy</p>\r\n                                                </label>\r\n                                            </span>\r\n                                            <span>\r\n                                                <input #govtEmpAirForce type=\"checkbox\"\r\n                                                    [attr.disabled]=\"!editProfessionalDetails ? 'disabled' : null\"\r\n                                                    id=\"fromairforce\"\r\n                                                    (change)=\"govEmpCheckboxChecked($event,'Air Force')\">\r\n                                                <label for=\"fromairforce\">\r\n                                                    <p>Air force</p>\r\n                                                </label>\r\n                                            </span>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                                            <span>\r\n                                                <input #govtEmpTA type=\"checkbox\"\r\n                                                    [attr.disabled]=\"!editProfessionalDetails ? 'disabled' : null\"\r\n                                                    id=\"fromta\" (change)=\"govEmpCheckboxChecked($event,'TA')\">\r\n                                                <label for=\"fromta\">\r\n                                                    <p>TA</p>\r\n                                                </label>\r\n                                            </span>\r\n\r\n                                            <span>\r\n                                                <input #govtEmpCivilGovt type=\"checkbox\"\r\n                                                    [attr.disabled]=\"!editProfessionalDetails ? 'disabled' : null\"\r\n                                                    id=\"fromcg\"\r\n                                                    (change)=\"govEmpCheckboxChecked($event,'Civil Government')\">\r\n                                                <label for=\"fromcg\">\r\n                                                    <p>Civil Government</p>\r\n\r\n                                                </label>\r\n                                            </span>\r\n\r\n                                            <span>\r\n                                                <input #govtEmpSemiGovt type=\"checkbox\"\r\n                                                    [attr.disabled]=\"!editProfessionalDetails ? 'disabled' : null\"\r\n                                                    id=\"fromsg\"\r\n                                                    (change)=\"govEmpCheckboxChecked($event,'Semi Government')\">\r\n                                                <label for=\"fromsg\">\r\n                                                    <p>Semi Government</p>\r\n                                                </label>\r\n\r\n                                            </span>\r\n                                            <span>\r\n                                                <input #govtEmpGovt type=\"checkbox\"\r\n                                                    [attr.disabled]=\"!editProfessionalDetails ? 'disabled' : null\"\r\n                                                    id=\"fromgovt\" (change)=\"govEmpCheckboxChecked($event,'Government')\">\r\n                                                <label for=\"fromgovt\">\r\n                                                    <p>Government</p>\r\n                                                </label>\r\n\r\n                                            </span>\r\n\r\n                                        </div>\r\n\r\n\r\n\r\n\r\n\r\n                                        <div style=\"margin-top: 5px;\"\r\n                                            *ngIf=\"this.isArmy || this.isNavy || this.isAirForce || this.isTA || this.isCivil || this.isSemiGovernment || this.isGovernment\">\r\n                                            <textarea [readonly]=\"!editProfessionalDetails\" id=\"isEmployee\"\r\n                                                maxlength=\"500\" placeholder=\"Please furnish the details.\"\r\n                                                class=\"form-control\" formControlName=\"govtEmp\"></textarea>\r\n                                        </div>\r\n\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"b['govtEmp'].errors && b['govtEmp'].errors.required && isError\">This\r\n                                            Field is Required</span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"id\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editProfessionalDetails\"\r\n                                        (click)=\"updateProfessionalDetails()\">Update</button>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                    <div class=\"row border acc_doc\">\r\n\r\n\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Academic Details</h3>\r\n                            <div class=\"act-btns\" *ngIf=\"id\">\r\n                                <button mat-icon-button class=\"edi\" *ngIf=\"!editAcademicDetails\"\r\n                                    (click)=\"editAcademicDetails = true\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"clo\" *ngIf=\"editAcademicDetails\"\r\n                                    (click)=\"editAcademicDetails = false\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12 iner-bs\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <div>\r\n\r\n                                        <label>\r\n                                            Have you ever been a member of ?</label>\r\n                                        <div class=\"chk-input\">\r\n                                            <span>\r\n                                                <input type=\"checkbox\" #memberOfNCC value=\"NCC\"\r\n                                                    [attr.disabled]=\"!editAcademicDetails ? 'disabled' : null\" id=\"ncc\"\r\n                                                    (change)=\"memberOfNCC_Checked($event)\">\r\n                                                <label for=\"ncc\">\r\n                                                    <p>NCC</p>\r\n                                                </label>\r\n                                            </span>\r\n                                            <span>\r\n                                                <input type=\"checkbox\" #memberOfOTU value=\"OTU\"\r\n                                                    [attr.disabled]=\"!editAcademicDetails ? 'disabled' : null\" id=\"otu\"\r\n                                                    (change)=\"memberOfOTU_Checked($event)\">\r\n                                                <label for=\"otu\">\r\n                                                    <p>OTU</p>\r\n                                                </label>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div *ngIf=\"b['memberOfNCC'].value == '1'\" class=\"row\">\r\n\r\n                                            <div class=\"col-md-6\">\r\n                                                <label for=\"ncc_rank\">Rank in NCC<span class=\"required\">*</span></label>\r\n                                                <input type=\"text\" id=\"ncc_rank\" required maxlength=\"100\"\r\n                                                    [readonly]=\"!editAcademicDetails\" class=\"form-control\"\r\n                                                    formControlName=\"cadetRank\" placeholder=\"Rank in NCC\">\r\n                                                <span class=\"invalid-input\"\r\n                                                    *ngIf=\"b['cadetRank'].errors && b['cadetRank'].errors.required && isError\">This\r\n                                                    Field is Required</span>\r\n                                            </div>\r\n                                            <div class=\"col-md-6\">\r\n                                                <label for=\"ncc_dte\">NCC Date<span class=\"required\">*</span></label>\r\n                                                <input type=\"date\" id=\"ncc_dte\" required maxlength=\"100\"\r\n                                                    [readonly]=\"!editAcademicDetails\" class=\"form-control\"\r\n                                                    (keypress)=\"noKeyInput()\" [max]=\"maxTodayDate\"\r\n                                                    formControlName=\"NCCDate\" placeholder=\"NCC Dte\">\r\n                                                <span class=\"invalid-input\"\r\n                                                    *ngIf=\"b['NCCDate'].errors && b['NCCDate'].errors.required && isError\">This\r\n                                                    Field is Required</span>\r\n                                            </div>\r\n                                            <div class=\"col-md-6\">\r\n                                                <label for=\"ncc_dte\">Cert Obtained A/B/C<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" id=\"ncc_dte\" required maxlength=\"100\"\r\n                                                    [readonly]=\"!editAcademicDetails\" class=\"form-control\"\r\n                                                    formControlName=\"certObtained\" placeholder=\"Certificate A/B/C\">\r\n                                                <span class=\"invalid-input\"\r\n                                                    *ngIf=\"b['NCCDate'].errors && b['NCCDate'].errors.required && isError\">This\r\n                                                    Field is Required</span>\r\n                                            </div>\r\n                                            <div class=\"col-md-6\">\r\n                                                <label for=\"ncc_dte\">Whether in Jr Div/Sr Div<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" id=\"ncc_dte\" required maxlength=\"100\"\r\n                                                    [readonly]=\"!editAcademicDetails\" class=\"form-control\"\r\n                                                    formControlName=\"division\" placeholder=\"Jr Div/Sr Div\">\r\n                                                <span class=\"invalid-input\"\r\n                                                    *ngIf=\"b['division'].errors && b['division'].errors.required && isError\">This\r\n                                                    Field is Required</span>\r\n                                            </div>\r\n                                            <div class=\"col-md-6\">\r\n                                                <label for=\"ncc_dte\">Period of Training<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" id=\"ncc_dte\" required maxlength=\"100\"\r\n                                                    [readonly]=\"!editAcademicDetails\" class=\"form-control\"\r\n                                                    formControlName=\"trainingPeriod\" placeholder=\"Period\">\r\n                                                <span class=\"invalid-input\"\r\n                                                    *ngIf=\"b['trainingPeriod'].errors && b['trainingPeriod'].errors.required && isError\">This\r\n                                                    Field is Required</span>\r\n\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label>\r\n\r\n                                        Have you ever been trained at ?\r\n\r\n                                    </label>\r\n                                    <div class=\"chk-input\">\r\n                                        <span>\r\n                                            <input type=\"checkbox\" #everTrainedWithIMA value=\"IMA\"\r\n                                                [attr.disabled]=\"!editAcademicDetails ? 'disabled' : null\" id=\"tima\"\r\n                                                (change)=\"everTrainedWithIMAOTANDAChecked($event,'IMA')\">\r\n                                            <label for=\"tima\">\r\n                                                <p>IMA</p>\r\n                                            </label>\r\n                                        </span>\r\n                                        <span>\r\n                                            <input type=\"checkbox\" #everTrainedWithOTA value=\"OTA\"\r\n                                                [attr.disabled]=\"!editAcademicDetails ? 'disabled' : null\" id=\"tota\"\r\n                                                (change)=\"everTrainedWithIMAOTANDAChecked($event,'OTA')\">\r\n                                            <label for=\"tota\">\r\n                                                <p>OTA</p>\r\n                                            </label>\r\n\r\n                                        </span>\r\n                                        <span>\r\n                                            <input type=\"checkbox\" #everTrainedWithNDA value=\"NDA\"\r\n                                                [attr.disabled]=\"!editAcademicDetails ? 'disabled' : null\" id=\"tnda\"\r\n                                                (change)=\"everTrainedWithIMAOTANDAChecked($event,'NDA')\">\r\n                                            <label for=\"tnda\">\r\n                                                <p>NDA</p>\r\n                                            </label>\r\n                                        </span>\r\n                                    </div>\r\n\r\n\r\n                                    <div *ngIf=\"isIMA || isOTA || isNDA\" class=\"row\">\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <label for=\"trainingAcademyNo\">Academy No.<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" id=\"trainingAcademyNo\" required maxlength=\"100\"\r\n                                                class=\"form-control\" formControlName=\"trainingAcademyNo\"\r\n                                                [readonly]=\"!editAcademicDetails\" placeholder=\"Academy No.\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['trainingAcademyNo'].errors && b['trainingAcademyNo'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <label for=\"trainingCourseSerNo\">Course Ser No<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" id=\"trainingCourseSerNo\" required maxlength=\"100\"\r\n                                                class=\"form-control\" formControlName=\"trainingCourseSerNo\"\r\n                                                [readonly]=\"!editAcademicDetails\" placeholder=\"Course Ser No\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['trainingCourseSerNo'].errors && b['trainingCourseSerNo'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <label for=\"trainingJoiningDate\">Date of Joining Academy<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"date\" id=\"trainingJoiningDate\" required maxlength=\"100\"\r\n                                                [max]=\"maxTodayDate\" class=\"form-control\"\r\n                                                [readonly]=\"!editAcademicDetails\" formControlName=\"trainingJoiningDate\"\r\n                                                placeholder=\"Date of Joining\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['trainingJoiningDate'].errors && b['trainingJoiningDate'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <label for=\"trainingLeavingDate\">Date of Leaving Academy<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"date\" id=\"trainingLeavingDate\" required maxlength=\"100\"\r\n                                                [readonly]=\"!editAcademicDetails\" (keypress)=\"noKeyInput()\"\r\n                                                [max]=\"maxTodayDate\" class=\"form-control\"\r\n                                                formControlName=\"trainingLeavingDate\" placeholder=\"Date of Leaving\">\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['trainingLeavingDate'].errors && b['trainingLeavingDate'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-12\">\r\n                                            <label for=\"reasionOfLeaving\">Reason of Leaving<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <textarea type=\"text\" id=\"reasionOfLeaving\" required maxlength=\"500\"\r\n                                                [readonly]=\"!editAcademicDetails\" class=\"form-control\"\r\n                                                formControlName=\"reasionOfLeaving\"\r\n                                                placeholder=\"Reason of Leaving\"></textarea>\r\n                                            <span class=\"invalid-input\"\r\n                                                *ngIf=\"b['reasionOfLeaving'].errors && b['reasionOfLeaving'].errors.required && isError\">This\r\n                                                Field is Required</span>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"id\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editAcademicDetails\"\r\n                                        (click)=\"updateAcademicDetails()\">Update</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n\r\n                    </div>\r\n                    <div class=\"row border acc_doc\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Games/Sports Details</h3>\r\n                            <div class=\"act-btns\" *ngIf=\"id\">\r\n                                <button mat-icon-button class=\"edi\" *ngIf=\"!editSportsDetails\"\r\n                                    (click)=\"editSportsDetails = true\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"clo\" *ngIf=\"editSportsDetails\"\r\n                                    (click)=\"editSportsDetails = false\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12 iner-bs\">\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"sports\">Games/Sports</label>\r\n                                    <input type=\"text\" id=\"sports\" maxlength=\"100\" class=\"form-control\"\r\n                                        [readonly]=\"!editSportsDetails\" formControlName=\"sports\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"sportsLevel\">National/State level Sports, if any</label>\r\n                                    <input type=\"text\" id=\"sportsLevel\" maxlength=\"100\" class=\"form-control\"\r\n                                        [readonly]=\"!editSportsDetails\" formControlName=\"sportsLevel\">\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"id\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editSportsDetails\"\r\n                                        (click)=\"updateSportsDetails()\">Update</button>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                    <div class=\"row border acc_doc\">\r\n\r\n\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Course Details</h3>\r\n                            <div class=\"act-btns\" *ngIf=\"id\">\r\n                                <button mat-icon-button class=\"edi\" *ngIf=\"!editCourseDetails\"\r\n                                    (click)=\"editCourseDetails = true\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"clo\" *ngIf=\"editCourseDetails\"\r\n                                    (click)=\"editCourseDetails = false\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12 iner-bs\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"courseSer\">Course Ser. No.<span class=\"required\">*</span></label>\r\n                                    <input type=\"text\" id=\"courseSer\" required maxlength=\"100\" class=\"form-control\"\r\n                                        [readonly]=\"!editCourseDetails\" formControlName=\"courseSerNo\" placeholder=\"-\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['courseSerNo'].errors && b['courseSerNo'].errors.required && isError\">This\r\n                                        Field is Required</span>\r\n                                </div>\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"entry\">Entry(DE/TGC)<span class=\"required\">*</span></label>\r\n                                    <select type=\"text\" id=\"entry\" required maxlength=\"100\" class=\"form-control\" (change)=entryTerm($event)\r\n                                        formControlName=\"entry\"\r\n                                        [attr.disabled]=\"!editCourseDetails ? 'disabled' : null\">\r\n                                        <option value=\"\" selected hidden disabled>Select</option>\r\n                                        <option value=\"DE\">DE</option>\r\n                                        <option value=\"TGC\">TGC</option>\r\n                                        <option value=\"NDA\">NDA</option>\r\n                                        <option value=\"ACC\">ACC</option>\r\n                                        <option value=\"SCO\">SCO</option>\r\n                                        <option value=\"PC(SL)\">PC(SL)</option>\r\n\r\n                                    </select>\r\n\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['entry'].errors && b['entry'].errors.required && isError\">This\r\n                                        Field is\r\n                                        Required</span>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"id\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editCourseDetails\"\r\n                                        (click)=\"updateCourseDetails()\">Update</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row border acc_doc\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>SSB Details</h3>\r\n                            <div class=\"act-btns\" *ngIf=\"id\">\r\n                                <button mat-icon-button class=\"edi\" *ngIf=\"!editSSBDetails\"\r\n                                    (click)=\"editSSBDetails = true\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"clo\" *ngIf=\"editSSBDetails\"\r\n                                    (click)=\"editSSBDetails = false\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12 iner-bs\">\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"upscRollNo\">UPSC Roll No.(DE)/HQ's Roll No.(Tech)</label>\r\n                                    <input type=\"text\" id=\"upscRollNo\" maxlength=\"100\" class=\"form-control\"\r\n                                        [readonly]=\"!editSSBDetails\" formControlName=\"upscRollNo\" placeholder=\"-\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"ssbSerNo\">SSB Ser. No.</label>\r\n                                    <input type=\"text\" id=\"ssbSerNo\" maxlength=\"100\" class=\"form-control\"\r\n                                        [readonly]=\"!editSSBDetails\" formControlName=\"ssbSerNo\" placeholder=\"-\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"ssbBatchNo\">SSB Batch No.</label>\r\n                                    <input type=\"text\" id=\"ssbBatchNo\" maxlength=\"100\" class=\"form-control\"\r\n                                        [readonly]=\"!editSSBDetails\" formControlName=\"ssbBatchNo\" placeholder=\"-\">\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"chestNo\">Chest No.</label>\r\n                                    <input type=\"text\" id=\"chestNo\" maxlength=\"100\" class=\"form-control\"\r\n                                        [readonly]=\"!editSSBDetails\" formControlName=\"chestNo\" placeholder=\"-\">\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"id\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editSSBDetails\"\r\n                                        (click)=\"updateSSBDetails()\">Update</button>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n\r\n\r\n                    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                    <div class=\"row border acc_doc\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Date and Time of Arrival at Indian Military\r\n                                Academy</h3>\r\n                            <div class=\"act-btns\" *ngIf=\"id\">\r\n                                <button mat-icon-button class=\"edi\" *ngIf=\"!editArivalDetails\"\r\n                                    (click)=\"editArivalDetails = true\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"clo\" *ngIf=\"editArivalDetails\"\r\n                                    (click)=\"editArivalDetails = false\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12 iner-bs\"  formGroupName=\"arrivingDateTime\" >\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"IMA_JoiningDate\">Date<span class=\"required\">*</span></label>\r\n                                    <input #imaArrivalDate type=\"date\" id=\"IMA_JoiningDate\" required\r\n                                    formControlName=\"date\" [readonly]=\"!editArivalDetails\" class=\"form-control\"\r\n                                        >\r\n                                        <span class=\"invalid-input\"\r\n                                        *ngIf=\"arriving['controls']['date'].errors && arriving['controls']['date'].errors.required && isError\">Please Select Date</span>\r\n                            \r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-3\">\r\n                                    <label for=\"IMA_JoiningDateH\">Hours<span class=\"required\">*</span></label>\r\n                                    <select #imaArrivalHours id=\"IMA_JoiningDateH\" formControlName=\"hours\"\r\n                                        class=\"form-control\" [attr.disabled]=\"!editArivalDetails ? 'disabled' : null\" \r\n                                        >\r\n                                        <option value=\"\" selected hidden disabled>--</option>\r\n                                        <option *ngFor=\"let h of arHours\" [value]=\"h\">{{h}} </option>\r\n                                    </select>\r\n\r\n\r\n                                    <span class=\"invalid-input\"\r\n                                            *ngIf=\"arriving['controls']['hours'].errors && arriving['controls']['hours'].errors.required && isError\">Please Select Hours</span>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-3\">\r\n                                    <label for=\"IMA_JoiningDateM\">Minutes<span class=\"required\">*</span></label>\r\n                                    <select #imaArrivalMinutes id=\"IMA_JoiningDateM\"  formControlName=\"minutes\"\r\n                                        class=\"form-control\" [attr.disabled]=\"!editArivalDetails ? 'disabled' : null \"\r\n                                        >\r\n                                        <option value=\"\" selected hidden disabled>--</option>\r\n                                        <option *ngFor=\"let m of arMinutes\" [value]=\"m\">{{m}} </option>\r\n                                    </select>\r\n\r\n                                    <span class=\"invalid-input\"\r\n                                            *ngIf=\"arriving['controls']['minutes'].errors && arriving['controls']['minutes'].errors.required && isError\">Please Select Minutes</span>\r\n                                </div>\r\n                                <span class=\"invalid-input\"\r\n                                *ngIf=\"b['IMA_JoiningDate'].errors && b['IMA_JoiningDate'].errors.required && isError\">\r\n                                Please Select Date and Time  of Arrival at Indian Military Academy </span>\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"id\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editArivalDetails\"\r\n                                        (click)=\"updateArivalDetails()\">Update</button>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                    <div class=\"row border acc_doc\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Commissioning Details</h3>\r\n                            <div class=\"act-btns\" *ngIf=\"id\">\r\n                                <button mat-icon-button class=\"edi\" *ngIf=\"!editCommissioningDetails\"\r\n                                    (click)=\"editCommissioningDetails = true\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"clo\" *ngIf=\"editCommissioningDetails\"\r\n                                    (click)=\"editCommissioningDetails = false\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12 iner-bs\">\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"commissioningDtls\">IC Number\r\n                                        <!-- <span class=\"required\">*</span> -->\r\n                                    </label>\r\n                                    <input [readonly]=\"!editCommissioningDetails\" id=\"commissioningDtls\" maxlength=\"100\"\r\n                                        formControlName=\"commissioningDetailsIC_Number\"\r\n                                        placeholder=\"Please enter IC Number\" class=\"form-control\">\r\n                                    <!-- formControlName=\"commissioningDtls\" -->\r\n                                    <!-- <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['commissioningDtls'].errors && b['commissioningDtls'].errors.required && isError\">This\r\n                                        Field is Required</span> -->\r\n                                </div>\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"commissioningDtls\">Unit Posted To\r\n                                        <!-- <span class=\"required\">*</span> -->\r\n                                    </label>\r\n                                    <input [readonly]=\"!editCommissioningDetails\" id=\"commissioningDtls\" maxlength=\"100\"\r\n                                        placeholder=\"Please enter Unit Name\"\r\n                                        formControlName=\"commissioningDetailsunit_Posted_To\" class=\"form-control\">\r\n                                    <!-- formControlName=\"commissioningDtls\" -->\r\n                                    <!-- <span class=\"invalid-input\"\r\n                                        *ngIf=\"b['commissioningDtls'].errors && b['commissioningDtls'].errors.required && isError\">This\r\n                                        Field is Required</span> -->\r\n                                </div>\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"commissioningDtls\">Choice of Arms\r\n                                        <!-- <span class=\"required\">*</span> -->\r\n                                    </label>\r\n                                    <input [readonly]=\"!editCommissioningDetails\" id=\"commissioningDtls\" maxlength=\"100\"\r\n                                        placeholder=\"Please enter Choice of Arms\"\r\n                                        formControlName=\"commissioningDetailschoice_of_Arms\" class=\"form-control\">\r\n                                    <!-- formControlName=\"commissioningDtls\" -->\r\n                                    <!-- <span class=\"invalid-input\"\r\n                                                                        *ngIf=\"b['commissioningDtls'].errors && b['commissioningDtls'].errors.required && isError\">This\r\n                                                                        Field is Required</span> -->\r\n                                </div>\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"commissioningDtls\">Date of Commissioning\r\n                                        <!-- <span class=\"required\">*</span> -->\r\n                                    </label>\r\n                                    <input [readonly]=\"!editCommissioningDetails\" type=\"date\" id=\"commissioningDtls\"\r\n                                        maxlength=\"100\" placeholder=\"Please enter Date of Commissioning\"\r\n                                        formControlName=\"commissioningDetailsdate_of_Commissioning\"\r\n                                        class=\"form-control\">\r\n                                    <!-- formControlName=\"commissioningDtls\" -->\r\n                                    <!-- <span class=\"invalid-input\"\r\n                                                                        *ngIf=\"b['commissioningDtls'].errors && b['commissioningDtls'].errors.required && isError\">This\r\n                                                                        Field is Required</span> -->\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"id\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editCommissioningDetails\"\r\n                                        (click)=\"updateCommissioningDetails()\">Update</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div style=\"float: right;\">\r\n                        <button mat-raised-button (click)=\"submitPersonalForm()\">Next</button>\r\n                    </div>\r\n\r\n\r\n                </form>\r\n\r\n            </mat-step>\r\n\r\n\r\n            <!-- STEP 2 EDUCATION QUALIFICATION -->\r\n\r\n            <mat-step label=\"Educational Qualifications & Documents\" [stepControl]=\"educationQualificationForm\">\r\n\r\n                <form [formGroup]=\"educationQualificationForm\">\r\n                    <div class=\"inner-section\" style=\" margin-top: 15px;background-color: #fff;\">\r\n                        <div class=\"edi_btn\">\r\n                            <h3>Examination Details</h3>\r\n\r\n                            <div class=\"act-btns\" *ngIf=\"id\">\r\n\r\n                                <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editEducationDetails\"\r\n                                        (click)=\"editEducationDetails = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <table style=\"margin-bottom: 15px;\">\r\n                            <thead>\r\n                                <th>Examination Passed</th>\r\n                                <th>Year</th>\r\n                                <th>Main Subjects taken</th>\r\n                                <th>%age or CGPA</th>\r\n                                <th>Div/Class</th>\r\n                                <th>Name of University/Board granting Degree or Certificate</th>\r\n                                <th>Name of School/College attended</th>\r\n                            </thead>\r\n\r\n                            <tbody>\r\n                                <!-- 10th -->\r\n\r\n                                <tr>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\" 10th/High School\" readonly\r\n                                            formControlName=\"_10passed\">\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._10passed.errors && ef._10passed.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n                                            \r\n                                    </td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control\" \r\n                                            [readonly]=\"!editEducationDetails\" placeholder=\"Required\"\r\n                                            formControlName=\"_10passedYear\">\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._10passedYear.errors && ef._10passedYear.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n                                            <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._10passedYear.errors?.pattern && isErrorInEduForm\">Please Enter Digit Only</span>\r\n                                    </td>\r\n                                    <td> <input type=\"text\" class=\"form-control\" placeholder=\"Required\"\r\n                                            [readonly]=\"!editEducationDetails\" formControlName=\"_10subjects\" >\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._10subjects.errors && ef._10subjects.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n                                            <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._10subjects.errors?.pattern && isErrorInEduForm\">No Digits & Speacial Character</span>\r\n                                    </td>\r\n                                    <td> <input type=\"text\" class=\"form-control\" (keypress)=\"onlyNum($event)\"\r\n                                            [readonly]=\"!editEducationDetails\" placeholder=\"Required\"\r\n                                            formControlName=\"_10percentage\">\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._10subjects.errors && ef._10subjects.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n                                    </td>\r\n                                    <td> <input type=\"text\" class=\"form-control\" placeholder=\"Required\"\r\n                                            [readonly]=\"!editEducationDetails\" formControlName=\"_10division\">\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._10division.errors && ef._10division.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n                                            <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._10division.errors && ef._10division.errors.pattern && isErrorInEduForm \">Please Enter Character Only</span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <select class=\"form-control\" name=\"\" formControlName=\"_10board\" id=\"\"\r\n                                            [attr.disabled]=\"!editEducationDetails ? 'disabled' : null\"\r\n                                            (change)=\"X_schoolOrgSelected($event.target.value)\">\r\n                                            <option value=\"\" selected hidden disabled>Required</option>\r\n                                            <option *ngFor=\"let s of schoolOrgs; let i=index\" [value]=\"s.name\">\r\n                                                {{s.name}}\r\n                                            </option>\r\n                                        </select>\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._10board.errors && ef._10board.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n\r\n                                    </td>\r\n                                    <td>\r\n\r\n                                        <input *ngIf=\"!X_SainikSchool\" style=\"margin-top: 5px;\" type=\"text\"\r\n                                            class=\"form-control\" placeholder=\"Required\"\r\n                                            [readonly]=\"!editEducationDetails\" formControlName=\"_10schoolName\">\r\n\r\n                                        <select *ngIf=\"X_SainikSchool\" class=\"form-control\" name=\"\"\r\n                                            [attr.disabled]=\"!editEducationDetails ? 'disabled' : null\"\r\n                                            formControlName=\"_10schoolName\" id=\"\">\r\n                                            <option value=\"\" selected hidden disabled>Required</option>\r\n                                            <option *ngFor=\"let s of sainikShools; let i=index\" [value]=\"s.location\">\r\n                                                {{s.location}}\r\n                                            </option>\r\n                                        </select>\r\n\r\n\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._10schoolName.errors && ef._10schoolName.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n                                            <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._10schoolName.errors?.alpha && isErrorInEduForm\">Please Enter Character Only</span>   \r\n                                    </td>\r\n                                </tr>\r\n                                <!-- 12th -->\r\n                                <tr>\r\n                                    <td> <input type=\"text\" class=\"form-control\" formControlName=\"_12passed\" readonly\r\n                                            placeholder=\" 12th/Higher Secondary\">\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._12passed.errors && ef._12passed.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n                                    </td>\r\n\r\n                                    <td> <input type=\"text\" class=\"form-control\" formControlName=\"_12passedYear\"\r\n                                            [readonly]=\"!editEducationDetails\" \r\n                                            placeholder=\"Required\">\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._12passedYear.errors && ef._12passedYear.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n\r\n                                            <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._12passedYear.errors?.pattern && isErrorInEduForm\">Please Enter Digit Only</span> \r\n                                    </td>\r\n                                    <td> <input type=\"text\" class=\"form-control\" formControlName=\"_12subjects\"\r\n                                            [readonly]=\"!editEducationDetails\" placeholder=\"Required\">\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._12subjects.errors && ef._12subjects.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n                                            <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._12subjects.errors  && ef._12subjects.errors.pattern && isErrorInEduForm\">No Digits & Speacial Character</span>\r\n                                    </td>\r\n                                    <td> <input type=\"text\" class=\"form-control\" formControlName=\"_12percentage\"\r\n                                            [readonly]=\"!editEducationDetails\" \r\n                                            placeholder=\"Required\">\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._12percentage.errors && ef._12percentage.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n\r\n                                    </td>\r\n                                    <td> <input type=\"text\" class=\"form-control\" formControlName=\"_12division\"\r\n                                            [readonly]=\"!editEducationDetails\" placeholder=\"Required\">\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._12division.errors && ef._12division.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n                                            <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._12division.errors && ef._12division.errors.pattern && isErrorInEduForm \">Please Enter Character Only</span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <select class=\"form-control\" name=\"\" id=\"\" formControlName=\"_12board\"\r\n                                            [attr.disabled]=\"!editEducationDetails ? 'disabled' : null\"\r\n                                            (change)=\"XII_schoolOrgSelected($event.target.value)\">\r\n                                            <option value=\"\" selected hidden disabled>Required</option>\r\n                                            <option *ngFor=\"let s of schoolOrgs; let i=index\" [value]=\"s.name\">\r\n                                                {{s.name}} </option>\r\n                                        </select>\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._12board.errors && ef._12board.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n\r\n                                    </td>\r\n                                    <td>\r\n\r\n                                        <input *ngIf=\"!XII_SainikSchool\" style=\"margin-top: 5px;\" type=\"text\"\r\n                                            class=\"form-control\" formControlName=\"_12schoolName\"\r\n                                            [readonly]=\"!editEducationDetails\" placeholder=\"Required\">\r\n\r\n                                        <select *ngIf=\"XII_SainikSchool\" class=\"form-control\" name=\"\"\r\n                                            [attr.disabled]=\"!editEducationDetails ? 'disabled' : null\"\r\n                                            formControlName=\"_12schoolName\" id=\"\">\r\n                                            <option value=\"\" selected hidden disabled>Required</option>\r\n                                            <option *ngFor=\"let s of sainikShools; let i=index\" [value]=\"s.location\">\r\n                                                {{s.location}}\r\n                                            </option>\r\n                                        </select>\r\n\r\n\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._12schoolName.errors && ef._12schoolName.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n\r\n                                            <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef._12schoolName.errors?.alpha && isError\">Please Enter Character Only</span>\r\n                                    </td>\r\n                                </tr>\r\n                                <!-- Graduation -->\r\n\r\n                                <tr>\r\n                                    <td> <select type=\"text\" class=\"form-control\" formControlName=\"gradu_passed\"\r\n                                            (change)=\"graduationSelected($event.target.value)\"\r\n                                            [attr.disabled]=\"!editEducationDetails ? 'disabled' : null\"\r\n                                            placeholder=\"Graduation\">\r\n                                            <option value=\"\" selected disabled hidden>Graduation </option>\r\n                                            <option value=\"\">----NA----</option>\r\n                                            <option *ngFor=\"let gr of graduations\" [value]=\"gr\"> {{gr}} </option>\r\n                                        </select>\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef.gradu_passed.errors && ef.gradu_passed.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n                                    </td>\r\n                                    <td> <input type=\"text\" class=\"form-control\" formControlName=\"gradu_passedYear\"\r\n                                            [readonly]=\"!editEducationDetails\" (keypress)=\"onlyNum($event)\">\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef.gradu_passedYear.errors && ef.gradu_passedYear.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n                                    </td>\r\n                                    <td> <select type=\"text\" class=\"form-control\"\r\n                                            [attr.disabled]=\"!editEducationDetails ? 'disabled' : null\"\r\n                                            (change)=\"gradStreadSelected($event.target.value)\"\r\n                                            [disabled]=\"!editEducationDetails\">\r\n                                            <option value=\"\" selected hidden disabled>Stream</option>\r\n                                            <option *ngFor=\"let st of streams\" [value]=\"st\">{{st}} </option>\r\n                                        </select>\r\n                                        <input style=\"margin-top: 5px;\" formControlName=\"gradu_subjects\"\r\n                                            [readonly]=\"!editEducationDetails\" *ngIf=\"gradOthStream\" type=\"text\"\r\n                                            class=\"form-control\">\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef.gradu_subjects.errors && ef.gradu_subjects.errors.pattern && isErrorInEduForm \">No Special Character</span>\r\n                                    </td>\r\n                                    <td> <input type=\"text\" class=\"form-control\" formControlName=\"gradu_percentage\"\r\n                                            [readonly]=\"!editEducationDetails\" (keypress)=\"onlyNum($event)\">\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef.gradu_percentage.errors && ef.gradu_percentage.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n                                    </td>\r\n                                    <td> <input type=\"text\" class=\"form-control\" formControlName=\"gradu_division\"\r\n                                            [readonly]=\"!editEducationDetails\">\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef.gradu_division.errors && ef.gradu_division.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n                                    </td>\r\n                                    <td> <input type=\"text\" class=\"form-control\" formControlName=\"gradu_university\"\r\n                                            [readonly]=\"!editEducationDetails\">\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef.gradu_university.errors && ef.gradu_university.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n                                    </td>\r\n                                    <td> <input type=\"text\" class=\"form-control\" formControlName=\"gradu_collName\"\r\n                                            [readonly]=\"!editEducationDetails\">\r\n                                        <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef.gradu_collName.errors && ef.gradu_collName.errors.pattern && isErrorInEduForm \">No Special Character</span>\r\n                                            \r\n                                    </td>\r\n                                </tr>\r\n\r\n                                <!-- Post Graduation -->\r\n\r\n                                <tr>\r\n                                    <td> <select type=\"text\" class=\"form-control\" formControlName=\"post_gradu_passed\"\r\n                                            [attr.disabled]=\"!editEducationDetails ? 'disabled' : null\"\r\n                                           (change)=\"postGraduationSelected($event.target.value)\"\r\n                                            placeholder=\"Post Graduation\">\r\n                                            <option value=\"\" selected disabled hidden>Post Graduation</option>\r\n                                            <option value=\"\">----NA----</option>\r\n                                            <option *ngFor=\"let pg of postGraduations\" [value]=\"pg\">{{pg}} </option>\r\n                                        </select>\r\n                                        <span class=\"invalid-input\"\r\n                                        *ngIf=\"ef.post_gradu_passed.errors && ef.post_gradu_passed.errors.required && isErrorInEduForm \">Required\r\n                                        Field</span>\r\n                                    </td>\r\n\r\n                                    <td> <input type=\"text\" class=\"form-control\" formControlName=\"post_gradu_passedYear\"\r\n                                            [readonly]=\"!editEducationDetails\" (keypress)=\"onlyNum($event)\"> \r\n                                            <span class=\"invalid-input\"\r\n                                            *ngIf=\"ef.post_gradu_passedYear.errors && ef.post_gradu_passedYear.errors.required && isErrorInEduForm \">Required\r\n                                            Field</span>\r\n\r\n                                    </td>\r\n\r\n                                    <td> <select type=\"text\" class=\"form-control\"\r\n                                            (change)=\"pgStreadSelected($event.target.value)\"\r\n                                            [attr.disabled]=\"!editEducationDetails ? 'disabled' : null\">\r\n                                            <option value=\"\" selected hidden disabled>Stream</option>\r\n                                            <option *ngFor=\"let st of streams\" [value]=\"st\">{{st}} </option>\r\n                                        </select>\r\n                                        <input style=\"margin-top: 5px;\" *ngIf=\"pgOthStream\" type=\"text\"\r\n                                            formControlName=\"post_gradu_subjects\" class=\"form-control\">\r\n                                            <span class=\"invalid-input\" *ngIf=\"ef.post_gradu_subjects.errors && ef.post_gradu_subjects.errors.pattern && isErrorInEduForm \">No Special Character</span>\r\n                                    </td>\r\n                                    <td> <input type=\"text\" class=\"form-control\" formControlName=\"post_gradu_percentage\"\r\n                                            [readonly]=\"!editEducationDetails\" (keypress)=\"onlyNum($event)\">\r\n                                            <span class=\"invalid-input\" *ngIf=\"ef.post_gradu_percentage.errors && ef.post_gradu_percentage.errors.required && isErrorInEduForm \">Required Field</span>\r\n                                    </td>\r\n                                    <td> <input type=\"text\" class=\"form-control\" formControlName=\"post_gradu_division\"\r\n                                            [readonly]=\"!editEducationDetails\">\r\n                                            <span class=\"invalid-input\" *ngIf=\"ef.post_gradu_division.errors && ef.post_gradu_division.errors.required && isErrorInEduForm \">Required Field</span>\r\n                                        \r\n                                    </td>\r\n                                    <td> <input type=\"text\" class=\"form-control\" [readonly]=\"!editEducationDetails\"\r\n                                            formControlName=\"post_gradu_university\">\r\n                                            <span class=\"invalid-input\" *ngIf=\"ef.post_gradu_university.errors && ef.post_gradu_university.errors.required && isErrorInEduForm \">Required Field</span>\r\n                                        \r\n                                    </td>\r\n                                    <td> <input type=\"text\" class=\"form-control\" formControlName=\"post_gradu_collName\"\r\n                                            [readonly]=\"!editEducationDetails\">\r\n                                            <span class=\"invalid-input\" *ngIf=\"ef.post_gradu_collName.errors && ef.post_gradu_collName.errors.pattern && isErrorInEduForm \">No Special Character</span>\r\n                                        \r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n                        </table>\r\n                        <div class=\"row\" *ngIf=\"id\">\r\n                            <div class=\"col-md-12\">\r\n                                <button mat-raised-button class=\"upt_dne\" [disabled]=\"!editEducationDetails\"\r\n                                    (click)=\"updateEducationDetails()\">Update</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <table>\r\n                        <div class=\"inner-section\" style=\"margin-top: 15px;background-color: #fff;\">\r\n                            <div class=\"edi_btn\">\r\n                                <h3>Educational Documents</h3>\r\n\r\n                                <div class=\"act-btns\" *ngIf=\"id\">\r\n                                    <button mat-icon-button class=\"edi\" *ngIf=\"!editDocuments\"\r\n                                        (click)=\"editDocuments = true\">\r\n                                        <mat-icon>edit</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button class=\"clo\" *ngIf=\"editDocuments\"\r\n                                        (click)=\"editDocuments = false\">\r\n                                        <mat-icon>close</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"inner-section\" style=\"height: 235px;margin-bottom: 15px;\">\r\n                                <tr class=\"docs-sec\">\r\n\r\n                                    \r\n                                    <td style=\"border: 0;\">\r\n                                        <p class=\"onew\">Aadhar Card</p>\r\n                                        <mat-icon class=\"cancel_img\" *ngIf=\"previewAadharImg && editDocuments\"\r\n                                            (click)=\"removeDocument('aadhar')\">close</mat-icon>\r\n                                        <button mat-icon-button class=\"doc-btn\" *ngIf=\"!previewAadharImg\"\r\n                                            (click)=\"aadharImage.click()\">\r\n                                            <mat-icon class=\"my-addd\">add</mat-icon>\r\n                                        </button>\r\n                                        <input type=\"file\" accept=\"image/*\" hidden #aadharImage\r\n                                            (change)=\"aadharCardSelected($event)\" >\r\n                                        <!-- <span class=\"invalid-input\" *ngIf=\"!previewAadharImg && isErrorInEduForm \">\r\n                                            Required</span> -->\r\n\r\n                                        <div *ngIf=\"previewAadharImg\" class=\"doc-img\">\r\n                                            <img [src]=\"previewAadharImg\" width=\"180\" height=\"200\" alt=\"\"\r\n                                                (click)=\"openImg(previewAadharImg)\">\r\n                                        </div>\r\n                                    </td>\r\n\r\n                                    <td style=\"border: 0;\">\r\n                                        <p class=\"onew\">PAN Card</p>\r\n                                        <mat-icon class=\"cancel_img\" *ngIf=\"previewPANImg && editDocuments\"\r\n                                            (click)=\"removeDocument('pan')\">close</mat-icon>\r\n                                        <button mat-icon-button class=\"doc-btn\" *ngIf=\"!previewPANImg\"\r\n                                            (click)=\"panCardImage.click()\">\r\n                                            <mat-icon class=\"my-addd\">add</mat-icon>\r\n                                        </button>\r\n                                        <input type=\"file\" accept=\"image/*\" hidden #panCardImage\r\n                                            (change)=\"panCardSelected($event)\" >\r\n                                        <!-- <span class=\"invalid-input\" *ngIf=\"!previewPANImg && isErrorInEduForm \">\r\n                                            Required</span> -->\r\n\r\n                                        <div *ngIf=\"previewPANImg\" class=\"doc-img\">\r\n                                            <img [src]=\"previewPANImg\" width=\"180\" height=\"200\" alt=\"\"\r\n                                                (click)=\"openImg(previewPANImg)\">\r\n                                        </div>\r\n\r\n                                    </td>\r\n\r\n\r\n                                    <td style=\"border: 0;\">\r\n                                        <p class=\"onew\">10th Marksheet</p>\r\n                                        <mat-icon class=\"cancel_img\" *ngIf=\"preview10thImg && editDocuments\"\r\n                                            (click)=\"removeDocument('10')\">close</mat-icon>\r\n                                        <button mat-icon-button class=\"doc-btn\" (click)=\"_10thImage.click()\"\r\n                                            *ngIf=\"!preview10thImg\">\r\n                                            <mat-icon class=\"my-addd\">add</mat-icon>\r\n                                        </button>\r\n                                        <input type=\"file\" class=\"img-btn\" accept=\"image/*\" hidden #_10thImage required\r\n                                            (change)=\"_10thImgSelected($event)\" >\r\n                                        <!-- <span class=\"invalid-input\" *ngIf=\"!preview10thImg && isErrorInEduForm \">\r\n                                            Required</span> -->\r\n\r\n                                        <div *ngIf=\"preview10thImg\" class=\"doc-img\">\r\n                                            <img [src]=\"preview10thImg\" width=\"180\" height=\"200\" alt=\"\"\r\n                                                (click)=\"openImg(preview10thImg)\">\r\n                                        </div>\r\n                                    </td>\r\n\r\n                                    <td style=\"border: 0;\">\r\n                                        <p class=\"onew\">12th Marksheet</p>\r\n                                        <mat-icon class=\"cancel_img\" *ngIf=\"preview12thImg && editDocuments\"\r\n                                            (click)=\"removeDocument('12')\">close</mat-icon>\r\n                                        <button mat-icon-button class=\"doc-btn\" *ngIf=\"!preview12thImg\"\r\n                                            (click)=\"_12thImage.click()\">\r\n                                            <mat-icon class=\"my-addd\">add</mat-icon>\r\n                                        </button>\r\n                                        <input type=\"file\" accept=\"image/*\" hidden #_12thImage required\r\n                                            (change)=\"_12thImgSelected($event)\" >\r\n                                        <!-- <span class=\"invalid-input\" *ngIf=\"!preview12thImg && isErrorInEduForm \">\r\n                                            Required</span> -->\r\n\r\n\r\n                                        <div *ngIf=\"preview12thImg\" class=\"doc-img\">\r\n                                            <img [src]=\"preview12thImg\" width=\"180\" height=\"200\" alt=\"\"\r\n                                                (click)=\"openImg(preview12thImg)\">\r\n                                        </div>\r\n                                    </td>\r\n\r\n\r\n\r\n                                    <td style=\"border: 0;\"  *ngIf=\"ef.gradu_passed.value\" >\r\n                                        <p class=\"onew\">Graduation Marksheet</p>\r\n                                        <mat-icon class=\"cancel_img\" *ngIf=\"previewGraduationImg && editDocuments\"\r\n                                            (click)=\"removeDocument('grad')\">close</mat-icon>\r\n                                        <button mat-icon-button class=\"doc-btn\" *ngIf=\"!previewGraduationImg\"\r\n                                            (click)=\"graduationImage.click()\">\r\n                                            <mat-icon class=\"my-addd\">add</mat-icon>\r\n                                        </button>\r\n                                        <input type=\"file\" accept=\"image/*\" hidden #graduationImage\r\n                                            (change)=\"graduationImgSelected($event)\" >\r\n\r\n                                        <ng-container *ngIf=\"ef.gradu_passed.value\">\r\n                                            <!-- <span class=\"invalid-input\"\r\n                                                *ngIf=\"ef.graduationMarksheet.errors && isErrorInEduForm \">\r\n                                                Required</span> -->\r\n                                        </ng-container>\r\n\r\n                                        <div *ngIf=\"previewGraduationImg\" class=\"doc-img\">\r\n                                            <img [src]=\"previewGraduationImg\" width=\"180\" height=\"200\" alt=\"\"\r\n                                                (click)=\"openImg(previewGraduationImg)\">\r\n                                        </div>\r\n                                    </td>\r\n\r\n\r\n                                    <td style=\"border: 0;\" *ngIf=\"ef.post_gradu_passed.value\" >\r\n                                        <p class=\"onew\">Post Graduation Marksheet </p>\r\n                                        <mat-icon class=\"cancel_img\" *ngIf=\"previewPostGraduationImg && editDocuments\"\r\n                                            (click)=\"removeDocument('postGrad')\">close</mat-icon>\r\n                                        <button mat-icon-button class=\"doc-btn\" *ngIf=\"!previewPostGraduationImg\"\r\n                                            (click)=\"postGraduationImage.click()\">\r\n                                            <mat-icon class=\"my-addd\">add</mat-icon>\r\n                                        </button>\r\n                                        <input type=\"file\" accept=\"image/*\" hidden #postGraduationImage\r\n                                            (change)=\"postGraduationImgSelected($event)\" >\r\n\r\n                                        <ng-container *ngIf=\"ef.post_gradu_passed.value\">\r\n                                            <!-- <span class=\"invalid-input\"\r\n                                                *ngIf=\"!previewPostGraduationImg && isErrorInEduForm \">\r\n                                                Required</span> -->\r\n                                        </ng-container>\r\n\r\n\r\n                                        <div *ngIf=\"previewPostGraduationImg\" class=\"doc-img\">\r\n                                            <img [src]=\"previewPostGraduationImg\" width=\"180\" height=\"200\" alt=\"\"\r\n                                                (click)=\"openImg(previewPostGraduationImg)\">\r\n                                        </div>\r\n                                    </td>\r\n\r\n                                </tr>\r\n\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"id\">\r\n\r\n                                <div class=\"col-md-12\">\r\n                                    <button mat-raised-button (click)=\"updateDocuments()\" class=\"upt_dne\"\r\n                                        [disabled]=\"!editDocuments\">Update</button>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </table>\r\n                    <div class=\"back_nxt\" style=\"float: right;\">\r\n                        <button mat-raised-button matStepperPrevious>Back</button>\r\n                        <button mat-raised-button (click)=\"submitEducationForm()\">Next</button>\r\n                    </div>\r\n\r\n                </form>\r\n            </mat-step>\r\n\r\n\r\n            <mat-step label=\"Academy Details\">\r\n\r\n                <form [formGroup]=\"imaAuthorityForm\">\r\n                    <div class=\" border1 acc_doc\">\r\n                        <div class=\"edi_btn\" style=\"margin: 0px;\">\r\n                            <h3>Academy Details</h3>\r\n                            <div class=\"act-btns\" *ngIf=\"id\">\r\n                                <button mat-icon-button class=\"edi\" *ngIf=\"!editAcademyDetails\"\r\n                                    (click)=\"editAcademyDetails = true\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"clo\" *ngIf=\"editAcademyDetails\"\r\n                                    (click)=\"editAcademyDetails = false\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"iner-cg\">\r\n\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"username\">Username<span class=\"required\">*</span> </label>\r\n                                    <input type=\"text\" id=\"username\" class=\"form-control\" maxlength=\"100\"\r\n                                        readonly placeholder=\"Username\" \r\n                                        formControlName=\"username\" [(ngModel)]='userN'>\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"af.username.errors && af.username.errors.required && isErrorAuthorityForm \">Required\r\n                                        Field</span>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"password\">Password<span class=\"required\"></span> </label>\r\n                                    <input type=\"password\" id=\"password\" class=\"form-control\" maxlength=\"100\"\r\n                                        [readonly]=\"!editAcademyDetails\" placeholder=\"Password\"\r\n                                        formControlName=\"password\">\r\n                                    <!-- <span class=\"invalid-input\"\r\n                                        *ngIf=\"af.password.errors && af.password.errors.required && isErrorAuthorityForm \">Required\r\n                                        Field</span> -->\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"srno\">Serial No.<span class=\"required\">*</span> </label>\r\n                                    <input type=\"text\" id=\"srno\" class=\"form-control\" maxlength=\"100\"\r\n                                        [readonly]=\"!editAcademyDetails\" placeholder=\"Serial No.\"\r\n                                        formControlName=\"srno\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"af.srno.errors && af.srno.errors.required && isErrorAuthorityForm \">Required\r\n                                        Field</span>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"academyNo\">Academy No.<span class=\"required\">*</span> </label>\r\n                                    <input type=\"text\" id=\"academyNo\" class=\"form-control\" maxlength=\"100\"\r\n                                        [readonly]=\"!editAcademyDetails\" placeholder=\"Academy No.\"\r\n                                        formControlName=\"academyNo\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"af.academyNo.errors && af.academyNo.errors.required && isErrorAuthorityForm \">Required\r\n                                        Field</span>\r\n                                </div>\r\n\r\n\r\n\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"serviceId\">Service Id<span class=\"required\">*</span> </label>\r\n                                    <input type=\"text\" id=\"serviceId\" class=\"form-control\" maxlength=\"100\"\r\n                                         placeholder=\"Service Id\"\r\n                                        formControlName=\"serviceId\" [readonly]=\"!editAcademyDetails\" (keyup)=\"keyupfor($event)\" >\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"af.serviceId.errors && af.serviceId.errors.required && isErrorAuthorityForm \">Required\r\n                                        Field</span>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-4\" *ngIf=\"!bnDetails\" >\r\n                                    <label for=\"battalion\">Battalion<span class=\"required\">*</span></label>\r\n                                    <select type=\"text\" id=\"battalion\" class=\"form-control\" formControlName=\"battalion\"\r\n                                        [attr.disabled]=\"!editAcademyDetails ? 'disabled' : null\"\r\n                                        (change)=\"battalionSelected($event.target.value)\">\r\n                                        <option value=\"\" selected hidden disabled>Select</option>\r\n                                        <option *ngFor=\"let b of battalions\" [value]=\"b.shortName\">{{b.shortName}} Bn\r\n                                        </option>\r\n                                    </select>\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"af.battalion.errors && af.battalion.errors.required && isErrorAuthorityForm \">Required\r\n                                        Field</span>\r\n\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\" *ngIf=\"!coyDetails\">\r\n                                    <label for=\"company\">Company<span class=\"required\">*</span></label>\r\n                                    <select type=\"text\" id=\"company\" class=\"form-control\" formControlName=\"company\"\r\n                                        [attr.disabled]=\"!editAcademyDetails ? 'disabled' : null\">\r\n                                        <option value=\"\" selected hidden disabled>Select</option>\r\n                                        <option *ngFor=\"let c of companies\" [value]=\"c.name\">{{c.name}} </option>\r\n                                    </select>\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"af.company.errors && af.company.errors.required && isErrorAuthorityForm \">Required\r\n                                        Field</span>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"battalion\">Date<span class=\"required\">*</span> </label>\r\n                                    <input type=\"date\" id=\"battalion\" class=\"form-control\" formControlName=\"date\"\r\n                                        [readonly]=\"!editAcademyDetails\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"af.date.errors && af.date.errors.required && isErrorAuthorityForm \">Required\r\n                                        Field</span>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"seasonTerm\">Season Term<span class=\"required\">*</span></label>\r\n                                    <select id=\"seasonTerm\" class=\"form-control\" formControlName=\"seasonTerm\"\r\n                                        [attr.disabled]=\"!editAcademyDetails ? 'disabled' : null\">\r\n                                        <option value=\"\" selected hidden disabled>Select</option>\r\n                                        <option *ngFor=\"let t of seasonTerms\" [value]=\"t.name\">{{t.name}} </option>\r\n                                    </select>\r\n                                    <span class=\"validation_msg\"\r\n                                        *ngIf=\"af.seasonTerm.errors && af.seasonTerm.errors.required && isErrorAuthorityForm\">Please\r\n                                        Select Season Term</span>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"year\">Year<span class=\"required\">*</span></label>\r\n                                    <input id=\"year\" type=\"number\"  [max]=\"maxYear\" maxlength=\"4\"\r\n                                        [readonly]=\"!editAcademyDetails\" class=\"form-control\" formControlName=\"year\">\r\n                                    <span class=\"validation_msg\"\r\n                                        *ngIf=\"af.year.errors && af.year.errors.required && isErrorAuthorityForm\">Please\r\n                                        Enter\r\n                                        Year</span>\r\n                                    <span class=\"validation_msg\" *ngIf=\"af.year.touched && af.year.errors\">Please Enter\r\n                                        a Valid\r\n                                        Year</span>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"seasonTerm\">Term<span class=\"required\">*</span></label>\r\n                                    <select id=\"seasonTerm\" class=\"form-control\" formControlName=\"term\"\r\n                                        [attr.disabled]=\"!editAcademyDetails ? 'disabled' : null\">\r\n                                        <option value=\"\" selected hidden disabled>Select</option>\r\n                                        <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                                        <!-- <option  value=\"1\">Term I</option>\r\n                                        <option  value=\"7\">Tech II</option> -->\r\n                                    </select>\r\n                                    <span class=\"validation_msg\"\r\n                                        *ngIf=\"af.term.errors && af.term.errors.required && isErrorAuthorityForm\">Please\r\n                                        Select Term\r\n                                    </span>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"course\">Course<span class=\"required\">*</span> </label>\r\n                                    <input type=\"text\" id=\"course\" class=\"form-control\" maxlength=\"100\"\r\n                                        [readonly]=\"!editAcademyDetails\" placeholder=\"Course\" formControlName=\"course\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"af.course.errors && af.course.errors.required && isErrorAuthorityForm \">Required\r\n                                        Field</span>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"status\" class=\"form-label\">Status <span\r\n                                            class=\"required\">*</span></label>\r\n                                    <select name=\"\" id=\"status\" class=\"form-control\" formControlName=\"status\"\r\n                                        [attr.disabled]=\"!editAcademyDetails ? 'disabled' : null\">\r\n                                        <option value=\"\" disabled selected hidden>Select</option>\r\n                                        <option value=\"1\">Active</option>\r\n                                        <option value=\"0\">Inactive</option>\r\n                                    </select>\r\n                                    <span class=\"validation_msg\" *ngIf=\"af.status.touched && af.status.invalid\">\r\n                                        *Please Select Status\r\n                                    </span>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label for=\"course\">Miscellaneous<span class=\"required\">*</span> </label>\r\n                                    <textarea type=\"text\" id=\"course\" class=\"form-control\" maxlength=\"100\"\r\n                                        [readonly]=\"!editAcademyDetails\" placeholder=\"Miscellaneous\"\r\n                                        formControlName=\"miscellaneous\"></textarea>\r\n                                    <!-- <span class=\"invalid-input\" *ngIf=\"af.course.errors && af.course.errors.required && isErrorAuthorityForm \">Required\r\n                                        Field</span> -->\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"id\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button mat-raised-button class=\"upt_dne\" (click)=\"update_IMA_Authority_Details()\"\r\n                                        [disabled]=\"!editAcademyDetails\">Update</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n\r\n                    <div class=\" border1 acc_doc\">\r\n                        <div class=\"edi_btn\" style=\"margin: 0px;\">\r\n                            <h3>Vaccination Details</h3>\r\n                            <div class=\"act-btns\" *ngIf=\"id\">\r\n                                <button mat-icon-button class=\"edi\" *ngIf=\"!editVaccinationDetails\"\r\n                                    (click)=\"editVaccinationDetails = true\">\r\n                                    <mat-icon>edit</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button class=\"clo\" *ngIf=\"editVaccinationDetails\"\r\n                                    (click)=\"editVaccinationDetails = false\">\r\n                                    <mat-icon>close</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"iner-cg\">\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label for=\"vaccineName\">Name of Vaccine<span class=\"required\">*</span> </label>\r\n                                    <input type=\"text\" id=\"vaccineName\" class=\"form-control\" maxlength=\"100\"\r\n                                        [readonly]=\"!editVaccinationDetails\"\r\n                                        placeholder=\"Covaxin/Covishield/Sputnik-V/etc\" formControlName=\"vaccineName\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"af.vaccineName.errors && af.vaccineName.errors.required && isErrorAuthorityForm \">Required\r\n                                        Field</span>\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                            <div class=\"row\">\r\n\r\n\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"IstDoseDate\">Date of 1st Dose<span class=\"required\">*</span> </label>\r\n                                    <input type=\"date\" id=\"IstDoseDate\" class=\"form-control\" maxlength=\"100\"\r\n                                        [readonly]=\"!editVaccinationDetails\" formControlName=\"IstDoseDate\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"af.IstDoseDate.errors && af.IstDoseDate.errors.required && isErrorAuthorityForm \">Required\r\n                                        Field</span>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"IstDoseRefferenceId\">1st Dose Reference I'd<span\r\n                                            class=\"required\">*</span> </label>\r\n                                    <input type=\"text\" id=\"IstDoseRefferenceId\" class=\"form-control\" maxlength=\"100\"\r\n                                        [readonly]=\"!editVaccinationDetails\" placeholder=\"Reference I'd\"\r\n                                        formControlName=\"IstDoseRefferenceId\">\r\n                                    <span class=\"invalid-input\"\r\n                                        *ngIf=\"af.IstDoseRefferenceId.errors && af.IstDoseRefferenceId.errors.required && isErrorAuthorityForm \">Required\r\n                                        Field</span>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"IIndDoseDate\">Date of 2nd Dose </label>\r\n                                    <input type=\"date\" id=\"IIndDoseDate\" class=\"form-control\" maxlength=\"100\"\r\n                                        [readonly]=\"!editVaccinationDetails\" formControlName=\"IIndDoseDate\">\r\n                                 \r\n                                </div>\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label for=\"IIndDoseRefferenceId\">2nd Dose Reference I'd </label>\r\n                                    <input type=\"text\" id=\"IIndDoseRefferenceId\" class=\"form-control\" maxlength=\"100\"\r\n                                        [readonly]=\"!editVaccinationDetails\" placeholder=\"Reference I'd\"\r\n                                        formControlName=\"IIndDoseRefferenceId\">\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"id\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button mat-raised-button class=\"upt_dne\" (click)=\"updateVaccinationDetails()\"\r\n                                        [disabled]=\"!editVaccinationDetails\">Update</button>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                </form>\r\n\r\n                <div style=\"float: right;\">\r\n                    <button mat-raised-button matStepperPrevious>Back</button>\r\n                    <button *ngIf=\"!id\" mat-raised-button (click)=\"addCadet()\">Add Cadet</button>\r\n                    <!-- <button *ngIf=\"id\" mat-raised-button (click)=\"updateCadet()\">Update Cadet</button> -->\r\n                </div>\r\n\r\n            </mat-step>\r\n\r\n        </mat-horizontal-stepper>\r\n\r\n    </div>\r\n</mat-card>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "hQ82":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gc-database/add-cadet/add-cadet.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.invalid-input {\n  color: #f10606;\n}\n.image {\n  width: 170px;\n  height: 250px;\n  background-color: #f0f0f0;\n  margin-left: 15px;\n}\n.img-btn {\n  background-color: #cecccc;\n  margin: 10px 0px 0px 60px;\n}\n.doc-btn {\n  background-color: #cecccc;\n}\n.img-div {\n  width: 100%;\n  height: 140px;\n}\n.image .img-div img {\n  position: relative;\n  margin: 10px 0px 0px 10px;\n}\n.doc-img {\n  width: 180px;\n  height: 200px;\n}\n.row.border.acc_doc h3 {\n  font-size: 16px;\n  color: #721a0c;\n  letter-spacing: 0;\n  margin: 0px;\n}\n.edi_btn {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  margin-bottom: 10px;\n  background: #eee;\n  width: 100%;\n}\n.img-div img {\n  border: 1px solid #721a0c;\n  box-shadow: 1px 1px 1px #c3b7b7;\n  height: 100%;\n  border-bottom: 0 !important;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.img-btn {\n  font-size: 30px;\n  color: #fff;\n  border: 1px solid #721a0c;\n  WIDTH: 100%;\n  margin-left: 0px;\n  border-radius: 0px;\n  background: #c09450;\n  height: 37px;\n  line-height: 30px;\n  margin-top: 0px;\n}\n.edi {\n  background: #4c5041;\n  height: 30px !important;\n  width: 30px !important;\n  color: #fff;\n}\n.act-btns {\n  display: flex;\n  align-items: center;\n}\n.edi mat-icon {\n  /* font-size: 17px; */\n  line-height: 30px !important;\n  position: relative;\n  top: -6px;\n  font-size: 17px;\n}\n.clo {\n  background: #721a0c;\n  height: 30px !important;\n  width: 30px !important;\n  color: #fff;\n}\n.clo mat-icon {\n  /* font-size: 17px; */\n  line-height: 30px !important;\n  position: relative;\n  top: -5px;\n  font-size: 17px;\n}\n.act-btns button {\n  margin-right: 5px;\n}\n.edi:focus {\n  outline: 0;\n}\n.clo:focus {\n  outline: 0;\n}\n.row.border.acc_doc {\n  margin: 15px 0px;\n  padding-bottom: 15px;\n}\nbutton.mat-focus-indicator.upt_dne.mat-raised-button.mat-button-base {\n  float: right;\n}\n.cmn span {\n  margin: 0px 4px 0;\n}\n.inner-section {\n  padding: 15px;\n  background: #fafafa;\n  box-shadow: 1px ​1px 4px #ccc;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.kin {\n  display: flex;\n}\n.inner-new1 {\n  padding: 15px 0;\n  background: #fafafa;\n  box-shadow: 1px ​1px 4px #ccc;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.mat-expansion-panel-body {\n  border-top: 1px solid #eee;\n  padding: 15px;\n}\nmat-expansion-panel.mat-expansion-panel {\n  width: 100% !important;\n}\n.col-md-3.diimage p {\n  text-transform: capitalize;\n  font-weight: 600;\n  font-size: 13px;\n  text-align: center;\n  margin: 10px 0px;\n  color: #9c9b9b !important;\n}\nth, td {\n  border: 1px solid #ccc;\n}\n.doc-btn {\n  background-color: transparent;\n  width: 125px;\n  height: 125px;\n  border-radius: 0px;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  box-shadow: 1px 1px 2px #ccc;\n  z-index: 99;\n  position: relative;\n  color: #721a0c;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n.my-addd {\n  background: rgba(204, 204, 204, 0.7);\n  width: 30px;\n  height: 30px !important;\n  line-height: 30px !important;\n  border-radius: 50%;\n}\n.doc-img {\n  width: 125px;\n  height: 125px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ntr.docs-sec td {\n  width: 16%;\n  position: relative;\n  padding: 2px !important;\n}\n.doc-img img {\n  height: 100% !important;\n  box-shadow: 1px 1px 2px #ccc;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n}\n.edi_btn h3 {\n  font-size: 16px;\n  color: #721a0c;\n  letter-spacing: 0;\n  margin: 0px;\n}\n.back_nxt {\n  margin: 15px 0px;\n}\n.cancel_img {\n  position: absolute;\n  margin-top: -5px;\n  z-index: 9999;\n  margin-left: 0px;\n  color: #fff;\n  cursor: pointer;\n  background: #721a0c;\n  border-radius: 35px;\n  font-size: 16px;\n  width: 20px;\n  border: 1px solid #dadada;\n  height: 20px;\n  text-align: center;\n  line-height: 18px;\n}\np.onew {\n  height: 46px;\n  background: #eeeeee;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  justify-content: center;\n  color: #4c5041;\n  font-size: 13px;\n  font-weight: 600;\n}\n.border1.acc_doc {\n  border: 1px solid #ccc;\n  margin: 15px 0;\n}\n.iner-cg {\n  padding: 15px;\n}\n.diimage p {\n  font-size: 12px !important;\n  color: #a8a1a1;\n  text-align: center;\n  margin-top: 10px;\n}\n.chk-input span {\n  width: 100px;\n  display: flex;\n  align-items: baseline;\n}\n.chk-input span {\n  width: auto;\n  display: flex;\n  background: #eee;\n  margin-right: 10px;\n  padding: 7px 10px 0px;\n  border-radius: 4px;\n}\n.chk-input p {\n  margin: 0;\n}\n.chk-input {\n  display: flex;\n}\n.chk-input p {\n  margin-left: 5px;\n}\n.add-btn.cus-btn {\n  width: 40px;\n  height: 40px;\n  background: #4c5041;\n  float: right;\n  margin: 0px 3px 0 0;\n}\n.cus-btn mat-icon {\n  color: #fff;\n}\n.remove-btn {\n  width: 40px;\n  height: 40px;\n  background: #721a0c;\n  bottom: 0px;\n  margin: 0px;\n}\n.remove-btn mat-icon {\n  color: #fff;\n}\n.mat-icon-button:disabled {\n  background-color: #9c9b9b;\n}\n.remove-btn-td {\n  width: 76px;\n  margin: 0px;\n  border: none;\n  text-align: center;\n}\n.remove-btn-td button {\n  margin: 0;\n}\n.chk-input-new {\n  display: flex;\n}\n.chk-input-new span {\n  padding: 0px 6px !important;\n  display: flex;\n  align-items: baseline;\n  height: 30px;\n  justify-content: center;\n  margin: 0px 4px;\n  background: #eee;\n  border-radius: 2px;\n  line-height: 30px;\n}\n.chk-input-new span p {\n  font-size: 13px;\n  letter-spacing: 0;\n  padding-left: 2px;\n}\n.chk-input-new span input {\n  position: relative;\n  top: 2px;\n}\n.ading-bhn {\n  padding: 15px;\n}\n.cmn {\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 4px #ccc;\n  padding: 6px 10px;\n  border-radius: 3px;\n  background: #e9ecef;\n}\n.ine-card .card {\n  margin: 5px;\n}\nbutton:focus {\n  outline: none !important;\n}\n.fprofession {\n  display: flex;\n}\n.fprofession p {\n  margin: -4px 0 0 6px;\n}\n.proff {\n  margin-top: 3px;\n}");

/***/ }),

/***/ "t1Rd":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gc-database/add-cadet/add-cadet.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddCadetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCadetComponent", function() { return AddCadetComponent; });
/* harmony import */ var _raw_loader_add_cadet_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-cadet.component.html */ "b9QT");
/* harmony import */ var _add_cadet_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-cadet.component.scss */ "hQ82");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddCadetComponent = /** @class */ (function () {
    function AddCadetComponent(dialog, service, cdref, spinner, localID, fb, el, router, route) {
        var _this = this;
        this.dialog = dialog;
        this.service = service;
        this.cdref = cdref;
        this.spinner = spinner;
        this.fb = fb;
        this.el = el;
        this.router = router;
        this.route = route;
        this.count = 0;
        this.arHours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
        this.arMinutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];
        this.pTitle = "Add Cadet";
        this.schoolings = ["RIMC", "Mil School", "Sainik School", "KV", "APS", "Army School", "Convent School (any bd - CBSE/ISCE/State etc)", "CBSE (Non Convent)", "ICSE (Non Convent)", "State Board", "Other"];
        this.graduations = ["B.A", "B.Sc", "B.Tech", "BE", "BCA", "BBA", "B.Com."];
        this.postGraduations = ["M.A", "M.Sc", "M.Tech", "ME", "MCA", "MBA", "M.Com"];
        this.streamsXII = [];
        this.streams = ["Humanities/Mgt", "Science", "Technical", "Commerce", "Other"];
        this.nationalities = [];
        this.states = [];
        this.religions = [];
        this.casts = [];
        this.bloodGroups = [];
        this.maritalStatuses = [];
        this.schoolOrgs = [];
        this.sainikShools = [];
        this.X_SainikSchool = false;
        this.XII_SainikSchool = false;
        this.battalions = [];
        this.companies = [];
        this.seasonTerms = [];
        this.terms = [];
        this.currentYear = new Date().getFullYear();
        this.maxYear = this.currentYear + 4;
        this.addCadetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.educationQualificationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.imaAuthorityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.oReligion = false;
        this.isIndia = false;
        this.isArmy = false;
        this.isNavy = false;
        this.isAirForce = false;
        this.isTA = false;
        this.isCivil = false;
        this.isSemiGovernment = false;
        this.isGovernment = false;
        this.isIMA = false;
        this.isOTA = false;
        this.isNDA = false;
        this.isError = false;
        this.isErrorInEduForm = false;
        this.isErrorAuthorityForm = false;
        this.docArray = ['', '', '', '', '', '', ''];
        this.id = '';
        this.editPersonalDetails = true;
        this.editContactDetails = true;
        this.editFamilyDetails = true;
        this.editProfessionalDetails = true;
        this.editAcademicDetails = true;
        this.editSportsDetails = true;
        this.editCourseDetails = true;
        this.editSSBDetails = true;
        this.editArivalDetails = true;
        this.editCommissioningDetails = true;
        this.editEducationDetails = true;
        this.editDocuments = true;
        this.editAcademyDetails = true;
        this.editVaccinationDetails = true;
        this.ter = [{
                id: 1, name: 'term1'
            },
            { id: 7, name: 'tech II' }
        ];
        this.gradOthStream = false;
        this.pgOthStream = false;
        this.localID = localID;
        //========= CADET DETAILS FORM ========
        this.addCadetForm = this.fb.group({
            courseSerNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            entry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[\a-zA-Z0-9\s]+$/)]],
            upscRollNo: [''],
            ssbSerNo: [''],
            ssbBatchNo: [''],
            chestNo: [''],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            birthPlace: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            religion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cast: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            bloodGroup: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nationality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            identificationMarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            motheTongue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            foreignLanguages: this.fb.array([this.getALanguage()]),
            fatherName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addressLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            addressLine2: [''],
            village: [''],
            tehsil: [''],
            postOffice: [''],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            district: [''],
            AddressState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            contactNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            familiDetailsId: [''],
            fatherProfession: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fatherProfessionDetails: [''],
            fatherProfessionStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fatherProfessionIAFRankType: [''],
            fatherProfessionIAFUnit: [''],
            fatherProfessionIAFChoceOfArms: [''],
            fatherProfessionIAFType: [''],
            fatherProfessionIAFRank: [''],
            parentMonthlyIncome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            professionalDetails: this.fb.array([this.getAProfessionalDetail()]),
            maritalStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            isArmy: ['0'],
            isNavy: ['0'],
            isAirForce: ['0'],
            isTA: ['0'],
            isCivil: ['0'],
            isSemiGovernment: ['0'],
            isGovernment: ['0'],
            govtEmp: [''],
            memberOfNCC: ['0'],
            memberOfOTU: ['0'],
            cadetRank: [''],
            NCCDate: [''],
            certObtained: [''],
            division: [''],
            trainingPeriod: [''],
            nameOfNextKinRelation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            relationWithKin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            addressOfNextKinRelation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            sports: [''],
            sportsLevel: [''],
            hobies: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            adharNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            belongsTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            isTrainedWithIMA: ['0'],
            isTrainedWithOTA: ['0'],
            isTrainedWithNDA: ['0'],
            trainingAcademyNo: [''],
            trainingCourseSerNo: [''],
            trainingJoiningDate: [''],
            trainingLeavingDate: [''],
            reasionOfLeaving: [''],
            arrivingDateTime: this.fb.group({
                date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                hours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                minutes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            IMA_JoiningDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            commissioningDetailsId: [''],
            commissioningDetailsIC_Number: [''],
            commissioningDetailsunit_Posted_To: [''],
            commissioningDetailschoice_of_Arms: [''],
            commissioningDetailsdate_of_Commissioning: [''],
        });
        //=============== EDUCATION FORM ===============
        this.educationQualificationForm = this.fb.group({
            _10passed: ['10th', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            _10schoolName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            _10passedYear: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            _10subjects: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            _10percentage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            _10division: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            _10board: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            _12passed: ['12th', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            _12schoolName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            _12passedYear: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]],
            _12subjects: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            _12percentage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            _12division: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            _12board: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            gradu_passed: [''],
            gradu_collName: [''],
            gradu_passedYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")],
            gradu_subjects: [''],
            gradu_percentage: [''],
            gradu_division: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")],
            gradu_university: [''],
            post_gradu_passed: [''],
            post_gradu_collName: [''],
            post_gradu_passedYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")],
            post_gradu_subjects: [''],
            post_gradu_percentage: [''],
            post_gradu_division: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")],
            post_gradu_university: [''],
            graduationMarksheet: [''],
            postGraduationMarksheet: [''],
        });
        //============IMA DETAILS FORM=============
        this.imaAuthorityForm = this.fb.group({
            srno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            academyNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            serviceId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            battalion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            miscellaneous: [''],
            //{value:(this.addCadetForm.value.entry=='DE'?1:7)}
            seasonTerm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            year: [this.currentYear, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            vaccinationDetailsId: [''],
            vaccineName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            IstDoseRefferenceId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            IstDoseDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            IIndDoseDate: [''],
            IIndDoseRefferenceId: [''],
        });
        //get nationality
        this.service.getNationalities().subscribe(function (res) {
            // console.log(res);
            if (res.status == 'OK') {
                _this.nationalities = res.object;
                _this.cdref.detectChanges();
            }
        });
        //get religions
        this.service.getReligions().subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                _this.religions = res.object;
                _this.cdref.detectChanges();
            }
        });
        //get castes
        this.service.getCasts().subscribe(function (res) {
            // console.log(res);    
            if (res.status == "OK") {
                _this.casts = res.object;
                _this.cdref.detectChanges();
            }
        });
        //get blood groups
        this.service.getBloodGroups().subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                _this.bloodGroups = res.object;
                _this.cdref.detectChanges();
            }
        });
        //get merital statuses
        this.service.getMeritalStatuses().subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                _this.maritalStatuses = res.object;
                _this.cdref.detectChanges();
            }
        });
        //get battalions
        this.service.getBattalionList().subscribe(function (res) {
            // console.log("BATTALIONS: ",res);
            if (res.status == 'OK') {
                _this.battalions = res.object;
                if (_this.userDetails.battalion) {
                    _this.af.battalion.setValue(_this.userDetails.battalion.shortName);
                    _this.bnDetails = _this.userDetails.battalion;
                    _this.battalionSelected(_this.bnDetails.shortName);
                    if (_this.userDetails.company) {
                        _this.af.company.setValue(_this.userDetails.company.name);
                        _this.coyDetails = _this.userDetails.company;
                    }
                }
                _this.cdref.detectChanges();
            }
            else {
                //    alert('Battalions not found.')
            }
        }, function (err) {
            //  alert('Cannot find battalions')
        });
        //get season terms
        this.service.getSeasonTerms().subscribe(function (res) {
            if (res.status == "1") {
                _this.seasonTerms = res.List;
                _this.cdref.detectChanges();
            }
        });
        //get all terms
        this.service.getTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == "1") {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
        this.service.getSchoolOrgList().subscribe(function (res) {
            // console.log("SCHOOLS ORGS",res);
            if (res.status == "OK")
                _this.schoolOrgs = res.object;
            _this.cdref.detectChanges();
        });
        this.service.getSainikSchoolList().subscribe(function (res) {
            // console.log("SAINIK SCHOOLS: ",res);
            if (res.status == "OK") {
                _this.sainikShools = res.object;
                _this.cdref.detectChanges();
            }
        });
        this.maxTodayDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'yyyy-MM-dd', this.localID);
        this.minDob = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date().setFullYear(this.currentYear - 18), 'yyyy-MM-dd', this.localID);
        this.maxDob = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date().setFullYear(this.currentYear - 28), 'yyyy-MM-dd', this.localID);
        console.log('swap', this.minDob, this.maxDob);
        this.userDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        // console.log("USER DETAILS: ",this.userDetails);
    }
    AddCadetComponent.prototype.ngOnInit = function () {
        this.onPersonalFormFatherProfessionChanges();
        this.arrivingValueChanges();
    };
    AddCadetComponent.prototype.ngAfterViewInit = function () {
        if (this.router.url.includes('view-cadet')) {
            this.viewCadet();
        }
    };
    Object.defineProperty(AddCadetComponent.prototype, "arriving", {
        //ima arriving date and time
        get: function () {
            return this.b.arrivingDateTime;
        },
        enumerable: false,
        configurable: true
    });
    AddCadetComponent.prototype.arrivingValueChanges = function () {
        var _this = this;
        this.b.arrivingDateTime.valueChanges.subscribe(function (val) {
            // console.log("CHANGED VALUES: ",val);
            if (_this.arriving.valid) {
                // console.log("Form is Valid");
                _this.imaArrivingDate = new Date(val.date);
                _this.imaArrivingDate.setHours(val.hours);
                _this.imaArrivingDate.setMinutes(val.minutes);
                // console.log(this.imaArrivingDate);
                _this.addCadetForm.patchValue({
                    IMA_JoiningDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(_this.imaArrivingDate, 'yyyy-MM-dd HH:mm:ss', _this.localID)
                });
                // console.log(this.b.IMA_JoiningDate.value);
            }
            else {
                // console.log("Form is Invalid");
            }
        });
    };
    //father profession value change
    AddCadetComponent.prototype.onPersonalFormFatherProfessionChanges = function () {
        var _this = this;
        this.b.fatherProfession.valueChanges.subscribe(function (val) {
            // console.log(val);
            if (val == 'Indian Armed Forces') {
                _this.b.fatherProfessionIAFRankType.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                _this.b.fatherProfessionIAFUnit.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                _this.b.fatherProfessionIAFChoceOfArms.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                _this.b.fatherProfessionIAFType.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                _this.b.fatherProfessionIAFRank.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                _this.b.fatherProfessionIAFRankType.updateValueAndValidity();
                _this.b.fatherProfessionIAFUnit.updateValueAndValidity();
                _this.b.fatherProfessionIAFChoceOfArms.updateValueAndValidity();
                _this.b.fatherProfessionIAFType.updateValueAndValidity();
                _this.b.fatherProfessionIAFRank.updateValueAndValidity();
                _this.b.fatherProfessionStatus.setValue('');
                _this.b.fatherProfessionDetails.setValue('');
                _this.b.fatherProfessionDetails.clearValidators();
                _this.b.fatherProfessionDetails.updateValueAndValidity();
            }
            else {
                _this.b.fatherProfessionDetails.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                _this.b.fatherProfessionDetails.updateValueAndValidity();
                _this.b.fatherProfessionIAFRankType.clearValidators();
                _this.b.fatherProfessionIAFUnit.clearValidators();
                _this.b.fatherProfessionIAFChoceOfArms.clearValidators();
                _this.b.fatherProfessionIAFType.clearValidators();
                _this.b.fatherProfessionIAFRank.clearValidators();
                _this.b.fatherProfessionIAFRankType.setValue('');
                _this.b.fatherProfessionIAFUnit.setValue('');
                _this.b.fatherProfessionIAFChoceOfArms.setValue('');
                _this.b.fatherProfessionIAFType.setValue('');
                _this.b.fatherProfessionIAFRank.setValue('');
                _this.b.fatherProfessionStatus.setValue('');
                _this.b.fatherProfessionIAFRankType.updateValueAndValidity();
                _this.b.fatherProfessionIAFUnit.updateValueAndValidity();
                _this.b.fatherProfessionIAFChoceOfArms.updateValueAndValidity();
                _this.b.fatherProfessionIAFType.updateValueAndValidity();
                _this.b.fatherProfessionIAFRank.updateValueAndValidity();
            }
        });
    };
    AddCadetComponent.prototype.viewCadet = function () {
        var _this = this;
        this.spinner.show();
        this.pTitle = 'View Cadet';
        this.id = this.route.snapshot.queryParamMap.get('id');
        if (this.id) {
            this.service.getACadet(this.id).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.editPersonalDetails = false;
                    _this.editContactDetails = false;
                    _this.editFamilyDetails = false;
                    _this.editProfessionalDetails = false;
                    _this.editAcademicDetails = false;
                    _this.editSportsDetails = false;
                    _this.editCourseDetails = false;
                    _this.editSSBDetails = false;
                    _this.editArivalDetails = false;
                    _this.editCommissioningDetails = false;
                    _this.editEducationDetails = false;
                    _this.editDocuments = false;
                    _this.editAcademyDetails = false;
                    _this.editVaccinationDetails = false;
                    var f_1 = res.object;
                    console.log(f_1, 'image_object');
                    _this.previewImg = f_1.profileImg;
                    _this.previewAadharImg = f_1.adharImg;
                    _this.previewPANImg = f_1.panImg;
                    _this.nationalitySelected(f_1.nationality);
                    var findReligion = _this.religions.find(function (el) {
                        if (el.name == f_1.religion) {
                            console.log(el.name);
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                    if (findReligion) {
                        _this.religionSelect.nativeElement.value = f_1.religion;
                    }
                    else {
                        _this.oReligion = true;
                        _this.religionSelect.nativeElement.value = 'Others';
                    }
                    _this.addCadetForm.patchValue({
                        courseSerNo: f_1.courseSerNo,
                        entry: f_1.entry,
                        name: f_1.name,
                        upscRollNo: f_1.upscRollNo,
                        ssbSerNo: f_1.ssbSerNo,
                        ssbBatchNo: f_1.ssbBatchNo,
                        chestNo: f_1.chestNo,
                        dob: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(f_1.dob, 'yyyy-MM-dd', _this.localID),
                        birthPlace: f_1.birthPlace,
                        religion: f_1.religion,
                        cast: f_1.cast,
                        bloodGroup: f_1.bloodGroup,
                        nationality: f_1.nationality,
                        state: f_1.state,
                        identificationMarks: f_1.identificationMarks,
                        motheTongue: f_1.motheTongue,
                        addressLine1: f_1.addressLine1,
                        addressLine2: f_1.addressLine2,
                        village: f_1.village,
                        tehsil: f_1.tehsil,
                        postOffice: f_1.postOffice,
                        city: f_1.city,
                        district: f_1.district,
                        AddressState: f_1.addressState,
                        pincode: f_1.pincode,
                        contactNo: f_1.contactNo,
                        email: f_1.email,
                        familiDetailsId: f_1.familyDetails.id,
                        fatherName: f_1.familyDetails.fatherName,
                        parentMonthlyIncome: f_1.familyDetails.monthlyIncome,
                        fatherProfession: f_1.familyDetails.father_profession,
                        fatherProfessionDetails: f_1.familyDetails.furnishDetail,
                        fatherProfessionStatus: f_1.familyDetails.currentStatus,
                        fatherProfessionIAFRankType: f_1.familyDetails.rankType,
                        fatherProfessionIAFUnit: f_1.familyDetails.unit,
                        fatherProfessionIAFChoceOfArms: f_1.familyDetails.choiceofArms,
                        fatherProfessionIAFType: f_1.familyDetails.armedForce,
                        fatherProfessionIAFRank: f_1.familyDetails.rankName,
                        nameOfNextKinRelation: f_1.familyDetails.name_of_next_of_kin_showing_rel,
                        relationWithKin: f_1.familyDetails.relation,
                        addressOfNextKinRelation: f_1.familyDetails.address_of_next_of_kin_showing_rel,
                        // professionPriorIMA: f.professionPriorIMA,
                        maritalStatus: f_1.maritalStatus,
                        sports: f_1.sports,
                        sportsLevel: f_1.sportsLevel,
                        hobies: f_1.hobies,
                        adharNo: f_1.adharNo,
                        belongsTo: f_1.belongsTo,
                        commissioningDetailsId: f_1.commissioningDetails.id,
                        commissioningDetailsIC_Number: f_1.commissioningDetails.ic_Number,
                        commissioningDetailsunit_Posted_To: f_1.commissioningDetails.unit_Posted_To,
                        commissioningDetailschoice_of_Arms: f_1.commissioningDetails.choice_of_Arms,
                        commissioningDetailsdate_of_Commissioning: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(f_1.commissioningDetails.date_of_Commissioning, 'yyyy-MM-dd', _this.localID),
                    });
                    _this.arriving.controls.date.setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(f_1.ima_JoiningDate, 'yyyy-MM-dd', _this.localID));
                    _this.arriving.controls.hours.setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(f_1.ima_JoiningDate, 'HH', _this.localID));
                    _this.arriving.controls.minutes.setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(f_1.ima_JoiningDate, 'mm', _this.localID));
                    // this.imaArrivalDate.nativeElement.value = formatDate(f.ima_JoiningDate, 'yyyy-MM-dd', this.localID)
                    // this.arrivalDateSelected(f.ima_JoiningDate)
                    // this.imaArrivalHours.nativeElement.value = formatDate(f.ima_JoiningDate, 'HH', this.localID)
                    // this.arrivalHoursSelected(this.imaArrivalHours.nativeElement.value)
                    // this.imaArrivalMinutes.nativeElement.value = formatDate(f.ima_JoiningDate, 'mm', this.localID)
                    // this.arrivalMinutesSelected(this.imaArrivalMinutes.nativeElement.value)
                    /**=======FOREIGN LANGUAGES========== */
                    if (f_1.foreignLanguages.length > 1) {
                        for (var i = 1; i <= f_1.foreignLanguages.length - 1; i++) {
                            _this.addAForeignLanguage();
                        }
                    }
                    _this.addCadetForm.patchValue({
                        foreignLanguages: f_1.foreignLanguages
                    });
                    /**==================================== */
                    /**===========PROFESSIONAL DETAILS========= */
                    if (f_1.professionalDetails.length >= 1) {
                        _this.professions.clear();
                        for (var i = 0; i <= f_1.professionalDetails.length - 1; i++) {
                            _this.professions.push(_this.fb.group({
                                id: f_1.professionalDetails[i].id,
                                profession: f_1.professionalDetails[i].profession,
                                dateOfResignation: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(f_1.professionalDetails[i].dateofResignation, 'yyyy-MM-dd', _this.localID),
                                companyName: f_1.professionalDetails[i].companyName,
                                duration: f_1.professionalDetails[i].duration
                            }));
                        }
                        // console.log(this.professions);
                        _this.addCadetForm.patchValue({
                            professionalDetails: _this.professions.value
                        });
                    }
                    /**========================================= */
                    if (f_1.govtEmp) {
                        if (f_1.isArmy == 1) {
                            _this.isArmy = true;
                            _this.govtEmpArmy.nativeElement.checked = true;
                        }
                        if (f_1.isNavy == 1) {
                            _this.isNavy = true;
                            _this.govtEmpNavy.nativeElement.checked = true;
                        }
                        if (f_1.isAirForce == 1) {
                            _this.isAirForce = true;
                            _this.govtEmpAirForce.nativeElement.checked = true;
                        }
                        if (f_1.isTA == 1) {
                            _this.isTA = true;
                            _this.govtEmpTA.nativeElement.checked = true;
                        }
                        if (f_1.isCivil == 1) {
                            _this.isCivil = true;
                            _this.govtEmpCivilGovt.nativeElement.checked = true;
                        }
                        if (f_1.isSemiGovernment == 1) {
                            _this.isSemiGovernment = true;
                            _this.govtEmpSemiGovt.nativeElement.checked = true;
                        }
                        if (f_1.isGovernment == 1) {
                            _this.isGovernment = true;
                            _this.govtEmpGovt.nativeElement.checked = true;
                        }
                        _this.addCadetForm.patchValue({
                            govtEmp: f_1.govtEmp
                        });
                    }
                    if (f_1.memberOfNCC == 1) {
                        _this.memberOfNCC.nativeElement.checked = true;
                        _this.addCadetForm.patchValue({
                            memberOfNCC: f_1.memberOfNCC,
                            cadetRank: f_1.cadetRank,
                            NCCDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(f_1.nccdate, "yyyy-MM-dd", _this.localID),
                            certObtained: f_1.certObtained,
                            division: f_1.division,
                            trainingPeriod: f_1.trainingPeriod,
                        });
                    }
                    if (f_1.memberOfOTU == 1) {
                        _this.memberOfOTU.nativeElement.checked = true;
                        _this.addCadetForm.patchValue({
                            memberOfOTU: f_1.memberOfOTU
                        });
                    }
                    if (f_1.isTrainedWithIMA == 1 || f_1.isTrainedWithOTA == 1 || f_1.isTrainedWithNDA == 1) {
                        _this.addCadetForm.patchValue({
                            trainingAcademyNo: f_1.trainingAcademyNo,
                            trainingCourseSerNo: f_1.trainingCourseSerNo,
                            trainingJoiningDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(f_1.trainingJoiningDate, "yyyy-MM-dd", _this.localID),
                            trainingLeavingDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(f_1.trainingLeavingDate, "yyyy-MM-dd", _this.localID),
                            reasionOfLeaving: f_1.reasionOfLeaving
                        });
                        if (f_1.isTrainedWithIMA == 1) {
                            _this.addCadetForm.patchValue({
                                isTrainedWithIMA: f_1.isTrainedWithIMA
                            });
                            _this.isIMA = true;
                            _this.everTrainedWithIMA.nativeElement.checked = true;
                        }
                        if (f_1.isTrainedWithOTA == 1) {
                            _this.addCadetForm.patchValue({
                                isTrainedWithOTA: f_1.isTrainedWithOTA
                            });
                            _this.isOTA = true;
                            _this.everTrainedWithOTA.nativeElement.checked = true;
                        }
                        if (f_1.isTrainedWithNDA == 1) {
                            _this.addCadetForm.patchValue({
                                isTrainedWithNDA: f_1.isTrainedWithNDA
                            });
                            _this.isNDA = true;
                            _this.everTrainedWithNDA.nativeElement.checked = true;
                        }
                    }
                    if (f_1.cadetEducation[0]) {
                        _this.educationQualificationForm.patchValue({
                            _10passed: f_1.cadetEducation[0].examination,
                            _10schoolName: f_1.cadetEducation[0].schoolCollege,
                            _10passedYear: f_1.cadetEducation[0].year,
                            _10subjects: f_1.cadetEducation[0].subjectTaken,
                            _10percentage: f_1.cadetEducation[0].percentage,
                            _10division: f_1.cadetEducation[0].divisionClass,
                            _10board: f_1.cadetEducation[0].university,
                            _12passed: f_1.cadetEducation[1].examination,
                            _12schoolName: f_1.cadetEducation[1].schoolCollege,
                            _12passedYear: f_1.cadetEducation[1].year,
                            _12subjects: f_1.cadetEducation[1].subjectTaken,
                            _12percentage: f_1.cadetEducation[1].percentage,
                            _12division: f_1.cadetEducation[1].divisionClass,
                            _12board: f_1.cadetEducation[1].university,
                        });
                        _this.preview10thImg = f_1.cadetEducation[0].certImg;
                    }
                    if (f_1.cadetEducation[1]) {
                        _this.educationQualificationForm.patchValue({
                            _12passed: f_1.cadetEducation[1].examination,
                            _12schoolName: f_1.cadetEducation[1].schoolCollege,
                            _12passedYear: f_1.cadetEducation[1].year,
                            _12subjects: f_1.cadetEducation[1].subjectTaken,
                            _12percentage: f_1.cadetEducation[1].percentage,
                            _12division: f_1.cadetEducation[1].divisionClass,
                            _12board: f_1.cadetEducation[1].university,
                        });
                        _this.preview12thImg = f_1.cadetEducation[1].certImg;
                    }
                    if (f_1.cadetEducation[2]) {
                        _this.educationQualificationForm.patchValue({
                            gradu_passed: f_1.cadetEducation[2].examination,
                            gradu_collName: f_1.cadetEducation[2].schoolCollege,
                            gradu_passedYear: f_1.cadetEducation[2].year,
                            gradu_subjects: f_1.cadetEducation[2].subjectTaken,
                            gradu_percentage: f_1.cadetEducation[2].percentage,
                            gradu_division: f_1.cadetEducation[2].divisionClass,
                            gradu_university: f_1.cadetEducation[2].university,
                        });
                        _this.previewGraduationImg = f_1.cadetEducation[2].certImg;
                        ;
                    }
                    if (f_1.cadetEducation[3]) {
                        _this.educationQualificationForm.patchValue({
                            post_gradu_passed: f_1.cadetEducation[3].examination,
                            post_gradu_collName: f_1.cadetEducation[3].schoolCollege,
                            post_gradu_passedYear: f_1.cadetEducation[3].year,
                            post_gradu_subjects: f_1.cadetEducation[3].subjectTaken,
                            post_gradu_percentage: f_1.cadetEducation[3].percentage,
                            post_gradu_division: f_1.cadetEducation[3].divisionClass,
                            post_gradu_university: f_1.cadetEducation[3].university,
                        });
                        _this.previewPostGraduationImg = f_1.cadetEducation[3].certImg;
                        ;
                    }
                    _this.battalionSelected(f_1.battalian);
                    _this.imaAuthorityForm.patchValue({
                        username: f_1.username,
                        password: f_1.password,
                        srno: f_1.serialNo,
                        academyNo: f_1.academyNo,
                        serviceId: f_1.serviceId,
                        battalion: f_1.battalian,
                        company: f_1.company,
                        date: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(f_1.createdAt, "yyyy-MM-dd", _this.localID),
                        seasonTerm: f_1.termSession,
                        year: f_1.year,
                        term: f_1.term,
                        course: f_1.course,
                        status: f_1.status,
                        miscellaneous: f_1.miscellaneous,
                        vaccinationDetailsId: f_1.vaccinationDetails.id,
                        vaccineName: f_1.vaccinationDetails.nameOfVaccine,
                        IstDoseRefferenceId: f_1.vaccinationDetails.fistDoseReferenceId,
                        IstDoseDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(f_1.vaccinationDetails.dateOfFistDose, 'yyyy-MM-dd', _this.localID),
                        IIndDoseDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(f_1.vaccinationDetails.dateOfSecDose, 'yyyy-MM-dd', _this.localID),
                        IIndDoseRefferenceId: f_1.vaccinationDetails.secDoseReferenceId
                    });
                    _this.imaAuthorityForm.get('password').clearValidators();
                    _this.imaAuthorityForm.get('password').updateValueAndValidity();
                    _this.spinner.hide();
                }
            });
        }
        this.cdref.detectChanges();
    };
    AddCadetComponent.prototype.X_schoolOrgSelected = function (e) {
        // console.log(e);
        if (e == "Sainik School") {
            this.X_SainikSchool = true;
        }
        else {
            this.X_SainikSchool = false;
        }
    };
    AddCadetComponent.prototype.XII_schoolOrgSelected = function (e) {
        // console.log(e);
        if (e == "Sainik School") {
            this.XII_SainikSchool = true;
        }
        else {
            this.XII_SainikSchool = false;
        }
    };
    /**=======LANGUAGES====== */
    AddCadetComponent.prototype.getALanguage = function () {
        return this.fb.group({
            id: [''],
            language: [''],
            qualification: [''],
            university: [''],
            proRead: [false],
            proWrite: [false],
            proSpeak: [false],
            status: ['1']
        });
    };
    Object.defineProperty(AddCadetComponent.prototype, "getForeignLanguages", {
        get: function () {
            return this.addCadetForm.get('foreignLanguages');
        },
        enumerable: false,
        configurable: true
    });
    AddCadetComponent.prototype.addAForeignLanguage = function () {
        this.getForeignLanguages.push(this.getALanguage());
    };
    AddCadetComponent.prototype.removeAForeignLanguage = function (i) {
        this.getForeignLanguages.removeAt(i);
    };
    /**==========PROFESSIONAL DETAILS=============== */
    AddCadetComponent.prototype.getAProfessionalDetail = function () {
        return this.fb.group({
            id: [''],
            profession: [''],
            dateOfResignation: [''],
            companyName: [''],
            duration: ['']
        });
    };
    Object.defineProperty(AddCadetComponent.prototype, "professions", {
        get: function () {
            return this.addCadetForm.get('professionalDetails');
        },
        enumerable: false,
        configurable: true
    });
    AddCadetComponent.prototype.addProfessionalDetail = function () {
        this.professions.push(this.getAProfessionalDetail());
    };
    AddCadetComponent.prototype.removeAProfessionalDetail = function (i) {
        this.professions.removeAt(i);
    };
    /** ============================================= */
    AddCadetComponent.prototype.noImg = function (e) {
        // e.target.src = "assets/img/default_cadet_img.jpg"
        e.target.src = "assets/img/cadet-default-img.png";
    };
    /** ============================ */
    //for religion 
    AddCadetComponent.prototype.religionSelected = function (e) {
        if (e == "Others") {
            // alert('a')
            this.oReligion = true;
            this.b.religion.setValue('');
        }
        else {
            // alert('b')
            this.oReligion = false;
            this.b.religion.setValue(e);
        }
    };
    /**================================= */
    AddCadetComponent.prototype.noDocImg = function (e) {
        e.target.src = "assets/img/default-doc-image.jpg";
    };
    AddCadetComponent.prototype.noKeyInput = function () {
        return false;
    };
    Object.defineProperty(AddCadetComponent.prototype, "b", {
        get: function () {
            //console.log(this.addCadetForm.controls['birthPlace']);
            return this.addCadetForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddCadetComponent.prototype, "ef", {
        get: function () {
            return this.educationQualificationForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddCadetComponent.prototype, "af", {
        get: function () {
            return this.imaAuthorityForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddCadetComponent.prototype.nationalitySelected = function (e) {
        var _this = this;
        this.addCadetForm.get('state').setValue('');
        if (e == 'India') {
            this.spinner.show();
            this.isIndia = true;
            this.addCadetForm.get('adharNo').setValue('');
            this.service.getStates().subscribe(function (res) {
                if (res.status == "OK") {
                    _this.states = res.object;
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
                // alert('No States Found')
            });
        }
        else {
            this.isIndia = false;
            this.states = [];
            this.addCadetForm.get('adharNo').setValue('');
        }
    };
    AddCadetComponent.prototype.govEmpCheckboxChecked = function (e, type) {
        if (e.target.checked) {
            this.addCadetForm.get('govtEmp').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.addCadetForm.get('govtEmp').updateValueAndValidity();
            if (type == 'Army') {
                this.isArmy = true;
                this.addCadetForm.get('isArmy').setValue('1');
            }
            if (type == 'Navy') {
                this.isNavy = true;
                this.addCadetForm.get('isNavy').setValue('1');
            }
            if (type == 'Air Force') {
                this.isAirForce = true;
                this.addCadetForm.get('isAirForce').setValue('1');
            }
            if (type == 'TA') {
                this.isTA = true;
                this.addCadetForm.get('isTA').setValue('1');
            }
            if (type == 'Civil Government') {
                this.isCivil = true;
                this.addCadetForm.get('isCivil').setValue('1');
            }
            if (type == 'Semi Government') {
                this.isSemiGovernment = true;
                this.addCadetForm.get('isSemiGovernment').setValue('1');
            }
            if (type == 'Government') {
                this.isGovernment = true;
                this.addCadetForm.get('isGovernment').setValue('1');
            }
        }
        else {
            if (type == 'Army') {
                this.isArmy = false;
                this.addCadetForm.get('isArmy').setValue('0');
            }
            if (type == 'Navy') {
                this.isNavy = false;
                this.addCadetForm.get('isNavy').setValue('0');
            }
            if (type == 'Air Force') {
                this.isAirForce = false;
                this.addCadetForm.get('isAirForce').setValue('0');
            }
            if (type == 'TA') {
                this.isTA = false;
                this.addCadetForm.get('isTA').setValue('0');
            }
            if (type == 'Civil Government') {
                this.isCivil = false;
                this.addCadetForm.get('isCivil').setValue('0');
            }
            if (type == 'Semi Government') {
                this.isSemiGovernment = false;
                this.addCadetForm.get('isSemiGovernment').setValue('0');
            }
            if (type == 'Government') {
                this.isGovernment = false;
                this.addCadetForm.get('isGovernment').setValue('0');
            }
            if (!this.isArmy && !this.isNavy && !this.isAirForce && !this.isTA && !this.isCivil && !this.isSemiGovernment && !this.isGovernment) {
                this.addCadetForm.get('govtEmp').clearValidators();
                this.addCadetForm.get('govtEmp').updateValueAndValidity();
                this.addCadetForm.get('govtEmp').setValue('');
            }
        }
    };
    AddCadetComponent.prototype.memberOfNCC_Checked = function (e) {
        if (e.target.checked) {
            this.addCadetForm.patchValue({ memberOfNCC: '1' });
            this.addCadetForm.get('cadetRank').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.addCadetForm.get('NCCDate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.addCadetForm.get('certObtained').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.addCadetForm.get('division').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.addCadetForm.get('trainingPeriod').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.addCadetForm.get('cadetRank').updateValueAndValidity();
            this.addCadetForm.get('NCCDate').updateValueAndValidity();
            this.addCadetForm.get('certObtained').updateValueAndValidity();
            this.addCadetForm.get('division').updateValueAndValidity();
            this.addCadetForm.get('trainingPeriod').updateValueAndValidity();
        }
        else {
            this.addCadetForm.patchValue({ memberOfNCC: '0' });
            this.addCadetForm.get('cadetRank').clearValidators();
            this.addCadetForm.get('NCCDate').clearValidators();
            this.addCadetForm.get('certObtained').clearValidators();
            this.addCadetForm.get('division').clearValidators();
            this.addCadetForm.get('trainingPeriod').clearValidators();
            this.addCadetForm.get('cadetRank').updateValueAndValidity();
            this.addCadetForm.get('NCCDate').updateValueAndValidity();
            this.addCadetForm.get('certObtained').updateValueAndValidity();
            this.addCadetForm.get('division').updateValueAndValidity();
            this.addCadetForm.get('trainingPeriod').updateValueAndValidity();
        }
    };
    AddCadetComponent.prototype.memberOfOTU_Checked = function (e) {
        if (e.target.checked) {
            this.addCadetForm.get('memberOfOTU').setValue('1');
        }
        else {
            this.addCadetForm.get('memberOfOTU').setValue('0');
        }
    };
    AddCadetComponent.prototype.everTrainedWithIMAOTANDAChecked = function (e, type) {
        if (e.target.checked) {
            this.addCadetForm.get('trainingAcademyNo').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.addCadetForm.get('trainingCourseSerNo').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.addCadetForm.get('trainingJoiningDate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.addCadetForm.get('trainingLeavingDate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.addCadetForm.get('reasionOfLeaving').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.addCadetForm.get('trainingAcademyNo').updateValueAndValidity();
            this.addCadetForm.get('trainingCourseSerNo').updateValueAndValidity();
            this.addCadetForm.get('trainingJoiningDate').updateValueAndValidity();
            this.addCadetForm.get('trainingLeavingDate').updateValueAndValidity();
            this.addCadetForm.get('reasionOfLeaving').updateValueAndValidity();
            if (type == 'IMA') {
                this.isIMA = true;
                this.addCadetForm.get('isTrainedWithIMA').setValue('1');
            }
            if (type == 'OTA') {
                this.isOTA = true;
                this.addCadetForm.get('isTrainedWithOTA').setValue('1');
            }
            if (type == 'NDA') {
                this.isNDA = true;
                this.addCadetForm.get('isTrainedWithNDA').setValue('1');
            }
        }
        else {
            if (type == 'IMA') {
                this.isIMA = false;
                this.addCadetForm.get('isTrainedWithIMA').setValue('0');
            }
            if (type == 'OTA') {
                this.isOTA = false;
                this.addCadetForm.get('isTrainedWithOTA').setValue('0');
            }
            if (type == 'NDA') {
                this.isNDA = false;
                this.addCadetForm.get('isTrainedWithNDA').setValue('0');
            }
            if (!this.isIMA && !this.isOTA && !this.isNDA) {
                this.addCadetForm.get('trainingAcademyNo').clearValidators();
                this.addCadetForm.get('trainingCourseSerNo').clearValidators();
                this.addCadetForm.get('trainingJoiningDate').clearValidators();
                this.addCadetForm.get('trainingLeavingDate').clearValidators();
                this.addCadetForm.get('reasionOfLeaving').clearValidators();
                this.addCadetForm.get('trainingAcademyNo').updateValueAndValidity();
                this.addCadetForm.get('trainingCourseSerNo').updateValueAndValidity();
                this.addCadetForm.get('trainingJoiningDate').updateValueAndValidity();
                this.addCadetForm.get('trainingLeavingDate').updateValueAndValidity();
                this.addCadetForm.get('reasionOfLeaving').updateValueAndValidity();
            }
        }
    };
    AddCadetComponent.prototype.onlyNum = function (event) {
        var pattern = /^[0-9]*\.?\d{0,2}$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddCadetComponent.prototype.imgSelected = function (e) {
        var _this = this;
        var file = e.target.files[0];
        if (file.size > 5242880) {
            // this.imgFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 5 MB in Size');
        }
        else {
            this.docArray[0] = e.target.files[0];
            this.profileImg = e.target.files[0];
            console.log(this.profileImg, 'here it is');
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function (event) {
                _this.previewImg = event.target.result;
                // this.profileImg=this.previewImg.split('data:image/jpeg;base64,')[1];
            };
        }
    };
    AddCadetComponent.prototype.arrivalDateSelected = function (e) {
        // console.log(e);
        this.imaArrivingDate = new Date(e);
        this.imaArrivingDate.setHours(0);
        this.imaArrivingDate.setMinutes(0);
        // console.log(this.imaArrivingDate);
        this.addCadetForm.patchValue({
            IMA_JoiningDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.imaArrivingDate, 'yyyy-MM-dd HH:mm:ss', this.localID)
        });
    };
    AddCadetComponent.prototype.arrivalHoursSelected = function (e) {
        // this.imaArrivingDate = this.imaArrivingDate +" "+e+":"
        this.imaArrivingDate.setHours(e);
        this.addCadetForm.patchValue({
            IMA_JoiningDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.imaArrivingDate, 'yyyy-MM-dd HH:mm:ss', this.localID)
        });
        // console.log(this.imaArrivingDate);
    };
    AddCadetComponent.prototype.arrivalMinutesSelected = function (e) {
        // this.imaArrivingDate = this.imaArrivingDate+e+":00"
        this.imaArrivingDate.setMinutes(e);
        // console.log(this.imaArrivingDate);
        this.addCadetForm.patchValue({
            IMA_JoiningDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.imaArrivingDate, 'yyyy-MM-dd HH:mm:ss', this.localID)
        });
    };
    AddCadetComponent.prototype.submitPersonalForm = function () {
        // alert("start")
        console.log(this.addCadetForm);
        console.log(this.previewImg);
        // this.stepper.next();
        console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', this.addCadetForm.value);
        if (this.addCadetForm.invalid) {
            console.log(this.addCadetForm.invalid);
            console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', this.addCadetForm.value);
            this.isError = true;
            for (var _i = 0, _a = Object.keys(this.addCadetForm.controls); _i < _a.length; _i++) {
                var key = _a[_i];
                if (this.addCadetForm.controls[key].invalid) {
                    var invalidControl = this.el.nativeElement.querySelector('[formcontrolname="' + key + '"]');
                    invalidControl.focus();
                    break;
                }
            }
            this.service.openSnackbar('Please Fill all Required Fields.');
        }
        else {
            this.isError = false;
            this.stepper.next();
        }
    };
    AddCadetComponent.prototype.graduationSelected = function (gr) {
        // console.log(gr);
        if (gr) {
            this.ef.gradu_passed.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.gradu_collName.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.gradu_passedYear.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.gradu_subjects.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.gradu_percentage.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.gradu_division.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.gradu_university.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.graduationMarksheet.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.gradu_passed.updateValueAndValidity();
            this.ef.gradu_collName.updateValueAndValidity();
            this.ef.gradu_passedYear.updateValueAndValidity();
            this.ef.gradu_subjects.updateValueAndValidity();
            this.ef.gradu_percentage.updateValueAndValidity();
            this.ef.gradu_division.updateValueAndValidity();
            this.ef.gradu_university.updateValueAndValidity();
            this.ef.graduationMarksheet.updateValueAndValidity();
        }
        else {
            this.ef.gradu_passed.clearValidators();
            this.ef.gradu_collName.clearValidators();
            this.ef.gradu_passedYear.clearValidators();
            this.ef.gradu_subjects.clearValidators();
            this.ef.gradu_percentage.clearValidators();
            this.ef.gradu_division.clearValidators();
            this.ef.gradu_university.clearValidators();
            this.ef.graduationMarksheet.clearValidators();
            this.ef.gradu_passed.updateValueAndValidity();
            this.ef.gradu_collName.updateValueAndValidity();
            this.ef.gradu_passedYear.updateValueAndValidity();
            this.ef.gradu_subjects.updateValueAndValidity();
            this.ef.gradu_percentage.updateValueAndValidity();
            this.ef.gradu_division.updateValueAndValidity();
            this.ef.gradu_university.updateValueAndValidity();
            this.ef.graduationMarksheet.updateValueAndValidity();
        }
    };
    AddCadetComponent.prototype.postGraduationSelected = function (pg) {
        // console.log(pg);
        if (pg) {
            this.ef.post_gradu_passed.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.post_gradu_collName.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.post_gradu_passedYear.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.post_gradu_subjects.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.post_gradu_percentage.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.post_gradu_division.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.post_gradu_university.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.postGraduationMarksheet.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.ef.post_gradu_passed.updateValueAndValidity();
            this.ef.post_gradu_collName.updateValueAndValidity();
            this.ef.post_gradu_passedYear.updateValueAndValidity();
            this.ef.post_gradu_subjects.updateValueAndValidity();
            this.ef.post_gradu_percentage.updateValueAndValidity();
            this.ef.post_gradu_division.updateValueAndValidity();
            this.ef.post_gradu_university.updateValueAndValidity();
            this.ef.postGraduationMarksheet.updateValueAndValidity();
        }
        else {
            this.ef.post_gradu_passed.clearValidators();
            this.ef.post_gradu_collName.clearValidators();
            this.ef.post_gradu_passedYear.clearValidators();
            this.ef.post_gradu_subjects.clearValidators();
            this.ef.post_gradu_percentage.clearValidators();
            this.ef.post_gradu_division.clearValidators();
            this.ef.post_gradu_university.clearValidators();
            this.ef.postGraduationMarksheet.clearValidators();
            this.ef.post_gradu_passed.updateValueAndValidity();
            this.ef.post_gradu_collName.updateValueAndValidity();
            this.ef.post_gradu_passedYear.updateValueAndValidity();
            this.ef.post_gradu_subjects.updateValueAndValidity();
            this.ef.post_gradu_percentage.updateValueAndValidity();
            this.ef.post_gradu_division.updateValueAndValidity();
            this.ef.post_gradu_university.updateValueAndValidity();
            this.ef.postGraduationMarksheet.updateValueAndValidity();
        }
    };
    AddCadetComponent.prototype._10thImgSelected = function (e) {
        var _this = this;
        var file = e.target.files[0];
        if (file.size > 5242880) {
            // this.imgFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 5 MB in Size');
        }
        else {
            this.docArray[3] = e.target.files[0];
            this.tenthImg = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function (event) {
                _this.preview10thImg = event.target.result;
                // this.tenthImg=this.preview10thImg.split('data:image/jpeg;base64,')[1];
            };
        }
    };
    AddCadetComponent.prototype._12thImgSelected = function (e) {
        var _this = this;
        var file = e.target.files[0];
        if (file.size > 5242880) {
            // this.imgFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 5 MB in Size');
        }
        else {
            this.docArray[4] = e.target.files[0];
            this.twelfthImg = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function (event) {
                _this.preview12thImg = event.target.result;
                //   this.twelfthImg =this.preview12thImg.split('data:image/jpeg;base64,')[1];
            };
        }
    };
    AddCadetComponent.prototype.graduationImgSelected = function (e) {
        var _this = this;
        var file = e.target.files[0];
        if (file.size > 5242880) {
            // this.imgFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 5 MB in Size');
        }
        else {
            this.docArray[5] = e.target.files[0];
            this.graduationImg = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function (event) {
                _this.previewGraduationImg = event.target.result;
                // this.graduationImg =this.previewGraduationImg.split('data:image/jpeg;base64,')[1];
            };
            this.ef.graduationMarksheet.setValue('1');
        }
    };
    AddCadetComponent.prototype.postGraduationImgSelected = function (e) {
        var _this = this;
        var file = e.target.files[0];
        if (file.size > 5242880) {
            // this.imgFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 5 MB in Size');
        }
        else {
            this.docArray[6] = e.target.files[0];
            this.postGraduationImg = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function (event) {
                _this.previewPostGraduationImg = event.target.result;
                // this.postGraduationImg=this.previewPostGraduationImg.split('data:image/jpeg;base64,')[1];
            };
            this.ef.postGraduationMarksheet.setValue('1');
        }
    };
    AddCadetComponent.prototype.aadharCardSelected = function (e) {
        var _this = this;
        //alert('adhar')
        var file = e.target.files[0];
        console.log(file, 'helloImage');
        if (file.size > 5242880) {
            // this.imgFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 5 MB in Size');
        }
        else {
            this.docArray[1] = e.target.files[0];
            this.aadharImg = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function (event) {
                _this.previewAadharImg = event.target.result;
                // this.aadharImg=this.previewAadharImg.split('data:image/jpeg;base64,')[1];
            };
        }
    };
    AddCadetComponent.prototype.panCardSelected = function (e) {
        var _this = this;
        var file = e.target.files[0];
        if (file.size > 5242880) {
            // this.imgFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 5 MB in Size');
        }
        else {
            this.docArray[2] = e.target.files[0];
            this.panImg = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function (event) {
                _this.previewPANImg = event.target.result;
                // this.panImg =this.previewPANImg.split('data:image/jpeg;base64,')[1];
            };
        }
    };
    AddCadetComponent.prototype.submitEducationForm = function () {
        if (this.educationQualificationForm.invalid) {
            this.isErrorInEduForm = true;
            this.service.openSnackbar('Please Fill all Required Fields.');
        }
        else {
            this.stepper.next();
        }
    };
    AddCadetComponent.prototype.battalionSelected = function (bn) {
        var _this = this;
        this.af.company.setValue('');
        // this.spinner.show();
        console.log("Battalions: ", this.battalions);
        var id;
        this.battalions.find(function (el) {
            if (el.shortName == bn) {
                // console.log("ELEMENTS: ",el);          
                id = el.id;
            }
        });
        this.service.getCompanyList(id).subscribe(function (res) {
            if (res.status == 'OK') {
                _this.companies = res.object;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                // alert('Companies not found.')
                _this.spinner.hide();
            }
        }, function (err) {
            // alert('Cannot find companies.')
            _this.spinner.hide();
        });
    };
    AddCadetComponent.prototype.goBack = function () {
        if (this.router.url.includes('/main/admin/trg-battalion/gc-database')) {
            this.router.navigate(['/main/admin/trg-battalion/gc-database']);
        }
        else if (this.router.url.includes('/main/trg-battalion/gc-database')) {
            this.router.navigate(['/main/trg-battalion/gc-database']);
        }
    };
    AddCadetComponent.prototype.openImg = function (img) {
        // console.log(img);
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'img', title: '', url: img
            }
        });
    };
    AddCadetComponent.prototype.removeDocument = function (type) {
        if (type == "aadhar") {
            this.docArray[1] = "";
            this.previewAadharImg = "";
        }
        if (type == "pan") {
            this.docArray[2] = "";
            this.previewPANImg = "";
        }
        if (type == "10") {
            this.docArray[3] = "";
            this.preview10thImg = "";
        }
        if (type == "12") {
            this.docArray[4] = "";
            this.preview12thImg = "";
        }
        if (type == "grad") {
            this.docArray[5] = "";
            this.previewGraduationImg = "";
        }
        if (type == "postGrad") {
            this.docArray[6] = "";
            this.previewPostGraduationImg = "";
        }
    };
    AddCadetComponent.prototype.addCadet = function () {
        var _this = this;
        if (this.imaAuthorityForm.invalid) {
            this.isErrorAuthorityForm = true;
            this.service.openSnackbar('Please Fill all Required Fields.');
        }
        else {
            this.spinner.show();
            this.service.addCadet(this.docArray, this.addCadetForm.value, this.educationQualificationForm.value, this.imaAuthorityForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.goBack();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                console.log(JSON.stringify(err));
                _this.service.openSnackbar('Some Error Occured.');
            });
        }
    };
    AddCadetComponent.prototype.updatePersonalDetails = function () {
        var _this = this;
        this.isError = false;
        if (!this.previewImg || !this.addCadetForm.value.name || !this.addCadetForm.value.dob || !this.addCadetForm.value.birthPlace
            || !this.addCadetForm.value.religion || !this.addCadetForm.value.cast || !this.addCadetForm.value.bloodGroup
            || !this.addCadetForm.value.nationality || !this.addCadetForm.value.state || !this.addCadetForm.value.maritalStatus
            || !this.addCadetForm.value.hobies || !this.addCadetForm.value.adharNo) {
            this.isError = true;
            this.service.openSnackbar('Please Fill All Required Details');
        }
        else {
            this.spinner.show();
            this.service.updateCadetPersonalDetails(this.id, this.docArray, this.addCadetForm.value).subscribe(function (res) {
                if (res.status == "OK") {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.editPersonalDetails = false;
                    _this.cdref.detectChanges();
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
    AddCadetComponent.prototype.updateContactDetails = function () {
        var _this = this;
        this.isError = false;
        if (!this.b.belongsTo.value || !this.b.addressLine1.value ||
            !this.b.city.value || !this.b.AddressState.value || !this.b.pincode.value ||
            !this.b.contactNo.value || !this.b.email.value) {
            this.isError = true;
            // alert(this.b.postOffice.value)
            this.service.openSnackbar("Required Fields Should Not Be Blank");
            // alert('contact')
        }
        else {
            this.spinner.show();
            this.service.updateCadetContactDetails(this.id, this.addCadetForm.value).subscribe(function (res) {
                if (res.status == "OK") {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.editContactDetails = false;
                    _this.cdref.detectChanges();
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
    AddCadetComponent.prototype.updateFamilyDetails = function () {
        var _this = this;
        this.isError = false;
        if (!this.b.fatherName.value || !this.b.fatherProfession.value || !this.b.nameOfNextKinRelation.value
            || !this.b.relationWithKin.value || !this.b.addressOfNextKinRelation.value) {
            this.isError = true;
            this.service.openSnackbar("Required Fields Should Not Be Blank");
        }
        else {
            this.spinner.show();
            this.service.updateCadetFamilyDetails(this.id, this.addCadetForm.value).subscribe(function (res) {
                if (res.status == "OK") {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.editFamilyDetails = false;
                    _this.cdref.detectChanges();
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
    AddCadetComponent.prototype.updateProfessionalDetails = function () {
        var _this = this;
        this.isError = false;
        if (this.b.govtEmp.errors) {
            this.isError = true;
            this.service.openSnackbar("Please Provide Details");
        }
        else {
            this.spinner.show();
            this.service.updateCadetProfessionalDetails(this.id, this.addCadetForm.value).subscribe(function (res) {
                if (res.status == "OK") {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.editProfessionalDetails = false;
                    _this.cdref.detectChanges();
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
    AddCadetComponent.prototype.keyupfor = function (e) {
        // alert(e.target.value)
        this.userN = e.target.value;
    };
    AddCadetComponent.prototype.updateAcademicDetails = function () {
        var _this = this;
        this.isError = false;
        if (this.b.cadetRank.errors || this.b.NCCDate.errors || this.b.certObtained.errors || this.b.division.errors || this.b.trainingPeriod.errors
            || this.b.trainingAcademyNo.errors || this.b.trainingCourseSerNo.errors || this.b.trainingJoiningDate.errors || this.b.trainingLeavingDate.errors || this.b.reasionOfLeaving.errors) {
            this.isError = true;
            this.service.openSnackbar("Please Provide Details");
        }
        else {
            this.spinner.show();
            this.service.updateCadetAcademicDetails(this.id, this.addCadetForm.value).subscribe(function (res) {
                if (res.status == "OK") {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.editAcademicDetails = false;
                    _this.cdref.detectChanges();
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
    AddCadetComponent.prototype.updateSportsDetails = function () {
        var _this = this;
        if (!this.b.sports.value && !this.b.sportsLevel.value) {
            this.service.openSnackbar("Please Provide Details");
        }
        else {
            this.spinner.show();
            this.service.updateCadetSportsDetails(this.id, this.addCadetForm.value).subscribe(function (res) {
                if (res.status == "OK") {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.editSportsDetails = false;
                    _this.cdref.detectChanges();
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
    AddCadetComponent.prototype.updateCourseDetails = function () {
        var _this = this;
        this.isError = false;
        if (this.b.courseSerNo.errors || this.b.entry.errors) {
            this.isError = true;
            this.service.openSnackbar("Required Fields Should Not Be Blank");
        }
        else {
            this.spinner.show();
            this.service.updateCadetCourseDetails(this.id, this.addCadetForm.value).subscribe(function (res) {
                if (res.status == "OK") {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.editCourseDetails = false;
                    _this.cdref.detectChanges();
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
    AddCadetComponent.prototype.updateSSBDetails = function () {
        var _this = this;
        this.isError = false;
        if (this.b.upscRollNo.errors || this.b.ssbSerNo.errors || this.b.ssbBatchNo.errors || this.b.chestNo.errors) {
            this.isError = true;
            this.service.openSnackbar("Required Fields Should Not Be Blank");
        }
        else {
            this.spinner.show();
            this.service.updateCadetSSBDetails(this.id, this.addCadetForm.value).subscribe(function (res) {
                if (res.status == "OK") {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.editSSBDetails = false;
                    _this.cdref.detectChanges();
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
    AddCadetComponent.prototype.updateArivalDetails = function () {
        var _this = this;
        this.isError = false;
        if (this.b.IMA_JoiningDate.errors) {
            this.isError = true;
            this.service.openSnackbar("Required Fields Should Not Be Blank");
        }
        else {
            this.spinner.show();
            this.service.updateCadetArrivalDetails(this.id, this.addCadetForm.value).subscribe(function (res) {
                if (res.status == "OK") {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.editArivalDetails = false;
                    _this.cdref.detectChanges();
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
    AddCadetComponent.prototype.updateCommissioningDetails = function () {
        var _this = this;
        this.spinner.show();
        this.service.updateCadetCommissioningDetails(this.id, this.addCadetForm.value).subscribe(function (res) {
            if (res.status == "OK") {
                _this.spinner.hide();
                _this.service.openSnackbar(res.message);
                _this.editCommissioningDetails = false;
                _this.cdref.detectChanges();
            }
            else {
                _this.spinner.hide();
                _this.service.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.service.openSnackbar("Some Error Occured.");
        });
    };
    AddCadetComponent.prototype.updateEducationDetails = function () {
        var _this = this;
        // alert('latest')
        if (this.educationQualificationForm.invalid) {
            this.isErrorInEduForm = true;
            this.service.openSnackbar("Please Fill All Required Educational Details");
        }
        else {
            this.spinner.show();
            this.service.updateCadetEducationalDetails(this.id, this.educationQualificationForm.value).subscribe(function (res) {
                if (res.status == "OK") {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.editEducationDetails = false;
                    _this.cdref.detectChanges();
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
    // updateDocuments() {
    //    console.log('aaaaaaaa==>',this.docArray);
    //    console.log('docArray length==>',this.docArray.length);
    //    //console.log(this.adharImage,this.panImage,this.postImage,this.gradImage)
    //   this.spinner.show();
    //   this.service.updateDocuments(this.id, this.docArray).subscribe(
    //     res => {
    //       if (res.status == "OK") {
    //         this.spinner.hide()
    //         this.service.openSnackbar(res.message);
    //         this.editDocuments = false;
    //         this.cdref.detectChanges();
    //       } else {
    //         this.spinner.hide();
    //         this.service.openSnackbar(res.message);
    //       }
    //     },
    //     err => {
    //       this.spinner.hide()
    //       this.service.openSnackbar("Some Error Occured.");
    //     }
    //   )
    // }
    AddCadetComponent.prototype.updateDocuments = function () {
        var _this = this;
        console.log('aaaaaaaa==>', this.docArray);
        console.log('docArray length==>', this.docArray.length);
        //console.log(this.adharImage,this.panImage,this.postImage,this.gradImage)
        this.spinner.show();
        this.service.updateDocuments2(this.id, this.profileImg, this.aadharImg, this.panImg, this.tenthImg, this.twelfthImg, this.graduationImg, this.postGraduationImg).subscribe(function (res) {
            if (res.status == "OK") {
                _this.spinner.hide();
                _this.service.openSnackbar(res.message);
                _this.editDocuments = false;
                _this.cdref.detectChanges();
            }
            else {
                _this.spinner.hide();
                _this.service.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.service.openSnackbar("Some Error Occured.");
        });
    };
    AddCadetComponent.prototype.update_IMA_Authority_Details = function () {
        var _this = this;
        console.log("password check", this.imaAuthorityForm.value);
        if (this.imaAuthorityForm.invalid) {
            this.service.openSnackbar("Please Fill All Required Educational Details");
            this.isErrorInEduForm = true;
        }
        else {
            this.spinner.show();
            this.service.updateIMA_AuthorityDetails(this.id, this.imaAuthorityForm.value).subscribe(function (res) {
                if (res.status == "OK") {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                    _this.editAcademyDetails = false;
                    _this.cdref.detectChanges();
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
    AddCadetComponent.prototype.updateVaccinationDetails = function () {
        var _this = this;
        this.spinner.show();
        this.service.updateVaccinationDetails(this.id, this.imaAuthorityForm.value).subscribe(function (res) {
            if (res.status == "OK") {
                _this.spinner.hide();
                _this.service.openSnackbar(res.message);
                _this.editVaccinationDetails = false;
                _this.cdref.detectChanges();
            }
            else {
                _this.spinner.hide();
                _this.service.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.service.openSnackbar("Some Error Occured.");
        });
    };
    AddCadetComponent.prototype.updateCadet = function () {
        var _this = this;
        if (this.imaAuthorityForm.invalid || !this.previewImg || !this.previewAadharImg || !this.previewPANImg || !this.preview10thImg || !this.preview12thImg) {
            this.isErrorAuthorityForm = true;
            this.service.openSnackbar('Please Fill all Required Fields and Choose Required Documents and Images.');
        }
        else {
            this.spinner.show();
            this.service.updateCadet(this.id, this.docArray, this.addCadetForm.value, this.educationQualificationForm.value, this.imaAuthorityForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.service.openSnackbarTime(res.message, 5000);
                    _this.goBack();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbarTime(res.message, 5000);
                }
            }, function (err) {
                _this.spinner.hide();
                console.log(JSON.stringify(err));
                _this.service.openSnackbarTime('Some Error Occured.', 5000);
            });
        }
    };
    AddCadetComponent.prototype.gradStreadSelected = function (e) {
        var val = e;
        if (val == "Other") {
            this.gradOthStream = true;
            this.ef.gradu_subjects.setValue('');
        }
        else {
            this.gradOthStream = false;
            this.ef.gradu_subjects.setValue(e);
        }
    };
    AddCadetComponent.prototype.pgStreadSelected = function (e) {
        var val = e;
        if (val == "Other") {
            this.pgOthStream = true;
            this.ef.post_gradu_subjects.setValue('');
        }
        else {
            this.pgOthStream = false;
            this.ef.post_gradu_subjects.setValue(e);
        }
    };
    AddCadetComponent.prototype.entryTerm = function (e) {
        // alert(e.target.value)
        this.entryResult = e.target.value;
        // if(this.entryResult=='DE'){
        //   this.x=1;
        //   this.addCadetForm.value.term=1;
        //   alert(this.x)
        // }
        // else{
        //   this.addCadetForm.value.term=7;
        // }
        if (this.entryResult == 'DE') {
            //  alert('DE')
            this.ter = [{ id: 1, name: 'term1' }];
        }
        else if (this.entryResult == 'TGC') {
            // alert('TGC')
            this.ter = [{ id: 7, name: 'tech II' }];
        }
    };
    AddCadetComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    AddCadetComponent.propDecorators = {
        stepper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['stepper', { static: true },] }],
        religionSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['religionSelect', { static: true },] }],
        govtEmpArmy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['govtEmpArmy', { static: true },] }],
        govtEmpNavy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['govtEmpNavy', { static: true },] }],
        govtEmpAirForce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['govtEmpAirForce', { static: true },] }],
        govtEmpTA: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['govtEmpTA', { static: true },] }],
        govtEmpCivilGovt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['govtEmpCivilGovt', { static: true },] }],
        govtEmpSemiGovt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['govtEmpSemiGovt', { static: true },] }],
        govtEmpGovt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['govtEmpGovt', { static: true },] }],
        memberOfNCC: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['memberOfNCC', { static: true },] }],
        memberOfOTU: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['memberOfOTU', { static: true },] }],
        everTrainedWithIMA: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['everTrainedWithIMA', { static: true },] }],
        everTrainedWithOTA: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['everTrainedWithOTA', { static: true },] }],
        everTrainedWithNDA: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['everTrainedWithNDA', { static: true },] }],
        imaArrivalDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['imaArrivalDate', { static: true },] }],
        imaArrivalHours: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['imaArrivalHours', { static: true },] }],
        imaArrivalMinutes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['imaArrivalMinutes', { static: true },] }]
    };
    AddCadetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-cadet',
            template: _raw_loader_add_cadet_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_cadet_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], String, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], AddCadetComponent);
    return AddCadetComponent;
}());



/***/ })

}]);