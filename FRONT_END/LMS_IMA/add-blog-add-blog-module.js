(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-blog-add-blog-module"],{

/***/ "9kX6":
/*!***********************************************************************!*\
  !*** ./src/app/main/admin/home/ima-blogs/add-blog/add-blog.module.ts ***!
  \***********************************************************************/
/*! exports provided: AddBlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlogModule", function() { return AddBlogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-blog.component */ "wnNC");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _add_blog_component__WEBPACK_IMPORTED_MODULE_4__["AddBlogComponent"]
    },
];
var AddBlogModule = /** @class */ (function () {
    function AddBlogModule() {
    }
    AddBlogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_blog_component__WEBPACK_IMPORTED_MODULE_4__["AddBlogComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"]
            ]
        })
    ], AddBlogModule);
    return AddBlogModule;
}());



/***/ }),

/***/ "VshX":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/ima-blogs/add-blog/add-blog.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button>  IMA Blog<span class=\"sub-menu1\"> > {{pageName}} </span> <span class=\"sub-menu1\">\r\n            </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addBlogForm\">\r\n           \r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"title\">Title <span class=\"required\">*</span></label>\r\n                    <input type=\"text\" id=\"title\" class=\"form-control\" maxlength=\"100\" \r\n                    [disabled]=\"disableForm\"\r\n                    placeholder=\"IMA Blog Title\" required formControlName=\"title\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.title.errors && isError\">Please Enter Title</span>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"category\">Category <span class=\"required\">*</span></label>\r\n                    <select #categorySelector id=\"category\" class=\"form-control\" (change)=\"categorySelected($event.target.value)\"\r\n                    [attr.disabled]=\"disableForm ? 'disabled' : null\" \r\n                     placeholder=\"IMA Blog Category\" >\r\n                        <option value=\"\" selected hidden disabled>Select</option>\r\n                        <option *ngFor=\"let c of blogCategory\" [value]=\"c\">{{c}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.category.errors && isError\">Please Enter Category</span>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\" *ngIf=\"otherCategory\" >\r\n                    <label for=\"category\">Category Name<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" id=\"category\" class=\"form-control\" maxlength=\"100\" placeholder=\"IMA Blog Category\" required\r\n                    [disabled]=\"disableForm\" formControlName=\"category\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.category.errors && isError\">Please Enter Category</span>\r\n                </div>\r\n\r\n                <!-- <div class=\"form-group col-md-6\">\r\n                    <label for=\"author\">Author <span class=\"required\">*</span></label>\r\n                    <input type=\"text\" id=\"author\" class=\"form-control\" maxlength=\"100\" placeholder=\"Author Name of Blog\" required\r\n                        formControlName=\"author\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.author.errors && isError\">Please Enter Author Name</span>\r\n                </div> -->\r\n            </div>\r\n\r\n            <!-- <div class=\"row\">\r\n              \r\n             <div class=\"form-group col-md-6\">\r\n                    <label for=\"minutesOfReading\">Minutes of Reading <span class=\"required\">*</span></label>\r\n                    <input type=\"text\" id=\"minutesOfReading\" class=\"form-control\" maxlength=\"100\" placeholder=\"Minutes of Reading\" required\r\n                        formControlName=\"minutesOfReading\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.minutesOfReading.errors && isError\">Please Enter Author Name</span>\r\n                </div> \r\n            </div> -->\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label for=\"title\">Write Your Blog \r\n                        <!-- <span class=\"char-count\"> ({{descLength}}/3000) </span>  -->\r\n                        <span\r\n                            class=\"required\">*</span></label>\r\n                            \r\n                            <ckeditor [readOnly]=\"disableForm\"  formControlName=\"description\"  (change)=\"onChange($event)\" (mouseover)=\"eventFired($event,'mouseover')\"\r\n                            (mouseout)=\"eventFired($event,'mouseout')\" (click)=\"eventFired($event,'click')\">\r\n                        </ckeditor>\r\n                    <!-- <textarea [disabled]=\"disableForm\" class=\"form-control\" maxlength=\"3000\" placeholder=\"Maximum 3000 Characters\" required\r\n                        formControlName=\"description\" (input)=\"charCount($event,'description')\"></textarea> -->\r\n                    <span class=\"validation_msg\" *ngIf=\"f.description.errors && isError\">Please Write Something.</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"!disableForm\">\r\n                <label class=\"form-label\">Image (Optional)</label>\r\n                <input #file type=\"file\" accept=\"image/*\" (change)=\"onSelectImage($event)\" id=\"image\">\r\n                <span class=\"size_info\">Max Image Size 50 MB. (Image size must be 200px * 150px)</span>\r\n                <div *ngIf=\"previewImg\" class=\"preview_image\"> <img [src]=\"previewImg\" alt=\"\"></div>\r\n            </div>\r\n            <div class=\"form-group\" *ngIf=\"!disableForm\">\r\n                <label class=\"form-label\">Document (Optional)</label>\r\n                <input #document type=\"file\" accept=\"application/pdf\" (change)=\"onSelectDocument($event)\" id=\"image\">\r\n                <span class=\"size_info\">Only PDF and Maximum Size 150 MB.</span>\r\n                <div *ngIf=\"previewDoc\" class=\"preview_image\"> \r\n                    <a (click)=\"openDoc(previewDoc)\" >\r\n                        <mat-icon>\r\n                            description\r\n                        </mat-icon>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <!-- <div class=\"form-group col-md-6\">\r\n                    <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                    <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\">\r\n                        <option value=\"\" disabled selected hidden>Select</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.touched && f.status.invalid\">*Please Select\r\n                        Status</span>\r\n                </div> -->\r\n            </div>\r\n\r\n            <div  >\r\n            <button mat-raised-button *ngIf=\"!id\" (click)=\"addBlog()\">Add</button>\r\n            <button mat-raised-button *ngIf=\"id\" (click)=\"updateBlog()\" [disabled]=\"addBlogForm.disabled\">Update</button>\r\n            </div>\r\n            \r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "ffFL":
/*!****************************************************************************!*\
  !*** ./src/app/main/admin/home/ima-blogs/add-blog/add-blog.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "wnNC":
/*!**************************************************************************!*\
  !*** ./src/app/main/admin/home/ima-blogs/add-blog/add-blog.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlogComponent", function() { return AddBlogComponent; });
/* harmony import */ var _raw_loader_add_blog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-blog.component.html */ "VshX");
/* harmony import */ var _add_blog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-blog.component.scss */ "ffFL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/auth-service/auth.service */ "V7IE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
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











var AddBlogComponent = /** @class */ (function () {
    function AddBlogComponent(fb, router, spinner, authService, dialog, route, cdref, service, sharedService) {
        this.fb = fb;
        this.router = router;
        this.spinner = spinner;
        this.authService = authService;
        this.dialog = dialog;
        this.route = route;
        this.cdref = cdref;
        this.service = service;
        this.sharedService = sharedService;
        this.userName = localStorage.getItem('userName');
        this.isError = false;
        this.previewImg = '';
        this.previewDoc = '';
        this.pageName = "Add Blog";
        this.otherCategory = false;
        this.blogCategory = ['Lifestyle', 'Fitness', 'Sports', 'Warfare', 'Entertainment', 'Arts',
            'Historical', 'Others'];
        this.disableForm = false;
        /** ========= CHARACTERS COUNT ========= */
        this.titleLength = 0;
        this.descLength = 0;
        this.userDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        console.log("user details: ", this.userDetails);
        if (this.userDetails.battalion != undefined) {
            console.log('111');
            localStorage.setItem('bid', this.userDetails.battalion.id);
            this.bid = this.userDetails.battalion.id;
        }
        console.log('222');
        console.log('333', localStorage.getItem('bid'));
        this.addBlogForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            author: [this.userName],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            image: [''],
            docs: [''],
            battalionId: [localStorage.getItem('bid')]
        });
    }
    AddBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('ima-blog/view-blog')) {
            this.pageName = 'View Blog';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getIMABlogById(this.id).subscribe(function (res) {
                _this.spinner.show();
                console.log(res);
                var d = res.object;
                if (res.status == 'OK') {
                    _this.addBlogForm.patchValue({
                        title: d.title,
                        category: d.category,
                        author: d.author,
                        description: d.description,
                        status: d.status,
                    });
                    if (_this.userName != d.author) {
                        _this.disableForm = true;
                        _this.addBlogForm.disable();
                    }
                    if (!_this.blogCategory.includes(d.category)) {
                        _this.otherCategory = true;
                        _this.categorySelector.nativeElement.value = 'Others';
                    }
                    else {
                        _this.categorySelector.nativeElement.value = d.category;
                    }
                    _this.descLength = d.description.length;
                    _this.previewImg = d.blogImage;
                    _this.previewDoc = d.docs;
                    _this.spinner.hide();
                }
                else {
                    _this.sharedService.openSnackbar(res.msg);
                    _this.spinner.hide();
                }
            });
        }
        // else if (this.router.url.includes('add-event')) {
        //   this.pageName = 'Add Upcoming Event'
        // }
        // this.unSelectedFile = this.imgFile.nativeElement.files
    };
    AddBlogComponent.prototype.goBack = function () {
        window.history.back();
        // this.router.navigate(['/main/admin/home/ima-blog'])
    };
    AddBlogComponent.prototype.charCount = function (e, t) {
        if (t == 'title')
            this.titleLength = e.target.value.length;
        if (t == 'description') {
            if (e.target.value.length > 3000) {
                return false;
            }
            else {
                this.descLength = e.target.value.length;
            }
        }
    };
    AddBlogComponent.prototype.categorySelected = function (e) {
        if (e == 'Others') {
            this.otherCategory = true;
            this.f.category.setValue('');
        }
        else {
            this.otherCategory = false;
            // this.addBlogForm.patchValue({
            //   category:e
            // })
            this.f.category.setValue(e);
        }
    };
    AddBlogComponent.prototype.onSelectImage = function (e) {
        // this.addBlogForm.patchValue({
        //   image: e.target.files[0]
        // })
        var _this = this;
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.imgFile.nativeElement.files = this.unSelectedFile;
            this.sharedService.openSnackbar('Image Should Be Maximum 50 MB in Size');
        }
        else {
            this.addBlogForm.patchValue({
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
    AddBlogComponent.prototype.onSelectDocument = function (e) {
        var file = e.target.files[0];
        // console.log(file);
        if (file.type != "application/pdf") {
            this.sharedService.openAlertSnackbarWithSeconds('Please Chose Only PDF Document.', 4);
        }
        else {
            if (file.size > 157286400) {
                this.document.nativeElement.files = this.unSelectedFile;
                this.sharedService.openSnackbar('Document Should Be Maximum 150 MB in Size');
            }
            else {
                this.addBlogForm.patchValue({
                    docs: file
                });
            }
        }
    };
    Object.defineProperty(AddBlogComponent.prototype, "f", {
        get: function () {
            return this.addBlogForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddBlogComponent.prototype.addBlog = function () {
        var _this = this;
        if (this.addBlogForm.invalid) {
            alert('Please Fill Required Details');
        }
        else {
            this.spinner.show();
            this.service.addIMABlog(this.addBlogForm.value).subscribe(function (res) {
                _this.apiRes(res);
            }, function (err) {
                _this.sharedService.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
                _this.spinner.hide();
            });
        }
    };
    AddBlogComponent.prototype.apiRes = function (res) {
        if (res.status == "OK") {
            this.sharedService.openSnackbar(res.message);
            this.cdref.detectChanges();
            this.spinner.hide();
            this.goBack();
        }
        else {
            this.sharedService.openSnackbar(res.message);
            this.spinner.hide();
        }
    };
    AddBlogComponent.prototype.updateBlog = function () {
        var _this = this;
        if (this.addBlogForm.invalid) {
            alert('Please Fill Required Details');
        }
        else {
            this.spinner.show();
            this.service.updateIMABlog(this.id, this.addBlogForm.value).subscribe(function (res) {
                _this.apiRes(res);
            }, function (err) {
                _this.sharedService.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
                _this.spinner.hide();
            });
        }
    };
    AddBlogComponent.prototype.onChange = function (event) {
        this.authService.resetTime();
        // console.log(event.editor.getData());
        // console.log(event.editor)
    };
    AddBlogComponent.prototype.eventFired = function (e, t) {
        // console.log(t)
        this.authService.resetTime();
    };
    AddBlogComponent.prototype.openDoc = function (url) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: this.previewDoc
            }
        });
    };
    AddBlogComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] }
    ]; };
    AddBlogComponent.propDecorators = {
        imgFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['file', { static: true },] }],
        document: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['document', { static: true },] }],
        categorySelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['categorySelector', { static: true },] }]
    };
    AddBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-blog',
            template: _raw_loader_add_blog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_blog_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], AddBlogComponent);
    return AddBlogComponent;
}());



/***/ })

}]);