(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-recommended-book-add-recommended-book-module"],{

/***/ "0pbl":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/admin/home/recommened-book/add-recommended-book/add-recommended-book.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddRecommendedBookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecommendedBookModule", function() { return AddRecommendedBookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _add_recommended_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-recommended-book.component */ "kF6U");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_recommended_book_component__WEBPACK_IMPORTED_MODULE_6__["AddRecommendedBookComponent"]
    },
];
var AddRecommendedBookModule = /** @class */ (function () {
    function AddRecommendedBookModule() {
    }
    AddRecommendedBookModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_recommended_book_component__WEBPACK_IMPORTED_MODULE_6__["AddRecommendedBookComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]
            ]
        })
    ], AddRecommendedBookModule);
    return AddRecommendedBookModule;
}());



/***/ }),

/***/ "fsjd":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/admin/home/recommened-book/add-recommended-book/add-recommended-book.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "kF6U":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/admin/home/recommened-book/add-recommended-book/add-recommended-book.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AddRecommendedBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecommendedBookComponent", function() { return AddRecommendedBookComponent; });
/* harmony import */ var _raw_loader_add_recommended_book_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-recommended-book.component.html */ "qVhi");
/* harmony import */ var _add_recommended_book_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-recommended-book.component.scss */ "fsjd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
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







var AddRecommendedBookComponent = /** @class */ (function () {
    function AddRecommendedBookComponent(fb, router, spinner, route, cdref, service) {
        this.fb = fb;
        this.router = router;
        this.spinner = spinner;
        this.route = route;
        this.cdref = cdref;
        this.service = service;
        this.pTitle = '';
        this.descLength = 0;
        this.addRecommendedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.isError = false;
        this.addRecommendedForm = this.fb.group({
            bookName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bookGenre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            authorName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    AddRecommendedBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view-book-list')) {
            this.pTitle = 'View Recommended Reading List';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getRecommendedBookById(this.id).subscribe(function (res) {
                var values = res.object;
                console.log(res);
                _this.addRecommendedForm.patchValue({
                    authorName: values.authorName,
                    bookGenre: values.bookGenre,
                    bookName: values.bookName,
                    description: values.description,
                    status: values.status,
                });
                _this.descLength = res.object.description.length;
            });
        }
        else {
            this.pTitle = 'Add Recommended Reading List';
        }
    };
    AddRecommendedBookComponent.prototype.goBack = function () {
        this.router.navigate(['/main/admin/home/book-list']);
    };
    AddRecommendedBookComponent.prototype.addRecommendedBook = function () {
        var _this = this;
        this.spinner.show();
        if (this.addRecommendedForm.invalid) {
            this.isError = true;
            this.spinner.hide();
        }
        else {
            this.service.addRecommendedBook(this.addRecommendedForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/home/book-list']);
                    _this.service.openSnackbar(res.message);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Error Occured.");
            });
        }
    };
    AddRecommendedBookComponent.prototype.charCount = function (e) {
        this.descLength = e.target.value.length;
    };
    AddRecommendedBookComponent.prototype.updateRecommendedBook = function () {
        var _this = this;
        this.spinner.show();
        if (this.addRecommendedForm.invalid) {
            this.isError = true;
            this.spinner.hide();
        }
        else {
            this.service.updateRecommendedBook(this.id, this.addRecommendedForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/home/book-list']);
                    _this.service.openSnackbar(res.message);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Error Occured.");
            });
        }
    };
    Object.defineProperty(AddRecommendedBookComponent.prototype, "f", {
        get: function () {
            return this.addRecommendedForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddRecommendedBookComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] }
    ]; };
    AddRecommendedBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-recommended-book',
            template: _raw_loader_add_recommended_book_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_recommended_book_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]])
    ], AddRecommendedBookComponent);
    return AddRecommendedBookComponent;
}());



/***/ }),

/***/ "qVhi":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/recommened-book/add-recommended-book/add-recommended-book.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> Home <span class=\"sub-menu1\"> > IMA Recommended Reading List </span> <span class=\"sub-menu1\"> >\r\n            {{pTitle}}</span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addRecommendedForm\">\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"authorName\">AuthorName<span class=\"required\">*</span></label>\r\n                    <input id=\"authorName\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"authorName\"\r\n                        placeholder=\"authorName\">\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.authorName.errors && f.authorName.errors.required && isError\">Please Enter AuthorName</span>\r\n            \r\n                </div>\r\n                </div>\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"userRank\">BookName<span class=\"required\">*</span></label>\r\n                    <input id=\"userRank\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"bookName\"\r\n                        placeholder=\"BookName\">\r\n                    <span class=\"validation_msg\"\r\n                        *ngIf=\"f.bookName.errors && f.bookName.errors.required && isError\">Please Enter BookName</span>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"bookGenre\">BookGenre<span class=\"required\">*</span></label>\r\n                    <input id=\"bookGenre\" type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"bookGenre\"\r\n                        placeholder=\"BookGenre\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.bookGenre.errors && f.bookGenre.errors.required && isError\">Please Enter\r\n                        bookGenre</span>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n           <label for=\"description\">Description <span class=\"char-count\" >   ({{descLength}}/1500)  </span> <span class=\"required\">*</span></label>\r\n           <!-- <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\"> -->\r\n           <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\"  (input)=\"charCount($event)\" maxlength=\"1500\" formControlName=\"description\"></textarea>\r\n           <span class=\"val_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >*Please Enter description</span>\r\n\r\n            </div>\r\n       </div> \r\n\r\n                      \r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                    <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\">\r\n                        <option value=\"\" disabled selected hidden>Select</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span> \r\n                </div>\r\n            </div>\r\n\r\n            <button mat-raised-button *ngIf=\"!id\" (click)=\"addRecommendedBook()\">Add Recommended List</button>\r\n            <button mat-raised-button *ngIf=\"id\" (click)=\"updateRecommendedBook()\">Update Recommended List</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ })

}]);