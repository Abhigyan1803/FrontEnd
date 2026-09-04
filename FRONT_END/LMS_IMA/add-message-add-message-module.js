(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-message-add-message-module"],{

/***/ "K6Op":
/*!*********************************************************************************!*\
  !*** ./src/app/main/admin/home/messages/add-message/add-message.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".char-count {\n  color: #8d8d8d;\n}");

/***/ }),

/***/ "ZUEb":
/*!*******************************************************************************!*\
  !*** ./src/app/main/admin/home/messages/add-message/add-message.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMessageComponent", function() { return AddMessageComponent; });
/* harmony import */ var _raw_loader_add_message_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-message.component.html */ "hDzs");
/* harmony import */ var _add_message_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-message.component.scss */ "K6Op");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
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








var AddMessageComponent = /** @class */ (function () {
    function AddMessageComponent(fb, router, spinner, cdref, route, snackbar, service) {
        this.fb = fb;
        this.router = router;
        this.spinner = spinner;
        this.cdref = cdref;
        this.route = route;
        this.snackbar = snackbar;
        this.service = service;
        this.previewImg = '';
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.rankLength = 0;
        this.nameLength = 0;
        this.awardsLength = 0;
        this.msgLength = 0;
        this.addMessageForm = this.fb.group({
            rank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            awards: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            organisation: ['INDIAN MILITARY ACADEMY', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            image: ['']
        });
    }
    AddMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view-message')) {
            this.pageName = "View Message";
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getCommandantMessageById(this.id).subscribe(function (res) {
                console.log(res);
                _this.addMessageForm.patchValue({
                    rank: res.List.designation,
                    name: res.List.name,
                    awards: res.List.award,
                    message: res.List.message,
                    status: res.List.status,
                });
                _this.rankLength = res.List.designation.length;
                _this.nameLength = res.List.name.length;
                _this.awardsLength = res.List.award.length;
                _this.msgLength = res.List.message.length;
                _this.previewImg = res.List.image;
            });
        }
        else if (this.router.url.includes('add-message')) {
            this.pageName = "Add Message";
        }
        this.unSelectedFile = this.imgFile.nativeElement.files;
    };
    AddMessageComponent.prototype.goBack = function () {
        this.router.navigate(['/main/admin/home/messages']);
    };
    AddMessageComponent.prototype.onSelectImage = function (e) {
        // this.addMessageForm.patchValue({
        //   image: e.target.files[0]
        // })
        var _this = this;
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.imgFile.nativeElement.files = this.unSelectedFile;
            this.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.addMessageForm.patchValue({
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
    Object.defineProperty(AddMessageComponent.prototype, "f", {
        get: function () {
            return this.addMessageForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddMessageComponent.prototype.charCount = function (e, t) {
        if (t == 'rank')
            this.rankLength = e.target.value.length;
        if (t == 'name')
            this.nameLength = e.target.value.length;
        if (t == 'awards')
            this.awardsLength = e.target.value.length;
        if (t == 'msg')
            this.msgLength = e.target.value.length;
    };
    AddMessageComponent.prototype.addMessage = function () {
        var _this = this;
        if (this.addMessageForm.invalid) {
            alert('Please Fill Required Details');
        }
        else {
            this.spinner.show();
            this.service.addCommandantMessage(this.addMessageForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == "1") {
                    _this.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/home/messages']);
                }
                else {
                    _this.openSnackbar(res.msg);
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
                console.log(JSON.stringify(err));
            });
        }
    };
    AddMessageComponent.prototype.updateMessage = function () {
        var _this = this;
        if (this.addMessageForm.invalid) {
            alert('Please Fill Required Details');
        }
        else {
            this.spinner.show();
            this.service.updateCommandantMessage(this.id, this.addMessageForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == "1") {
                    _this.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/home/messages']);
                }
                else {
                    _this.openSnackbar(res.msg);
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
                console.log(JSON.stringify(err));
            });
        }
    };
    AddMessageComponent.prototype.openSnackbar = function (msg) {
        this.snackbar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    AddMessageComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] }
    ]; };
    AddMessageComponent.propDecorators = {
        imgFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['file', { static: true },] }]
    };
    AddMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-message',
            template: _raw_loader_add_message_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_message_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"]])
    ], AddMessageComponent);
    return AddMessageComponent;
}());



/***/ }),

/***/ "hDzs":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/messages/add-message/add-message.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\">\r\n    <button mat-icon-button (click)=\"goBack()\"><mat-icon>chevron_left</mat-icon> </button>\r\n    Home <span class=\"sub-menu1\"> > Commandant Message </span> <span class=\"sub-menu1\"> > {{pageName}}</span>\r\n  </h4>\r\n</div>\r\n\r\n<mat-card>\r\n  <div class=\"top-br\">\r\n    <form [formGroup]=\"addMessageForm\" >\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Rank  <span class=\"char-count\" > ({{rankLength}}/50)</span><span class=\"required\">*</span></label>\r\n          <input type=\"text\" class=\"form-control\" maxlength=\"50\" formControlName=\"rank\" placeholder=\"Maximum 50 Characters\"  (input)=\"charCount($event,'rank')\" >\r\n          <span *ngIf=\"f.rank.touched && f.rank.invalid\" class=\"required\"> *Please Enter Rank </span>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label >Name  <span class=\"char-count\" > ({{nameLength}}/50)</span><span class=\"required\">*</span></label>\r\n          <input type=\"text\" class=\"form-control\"  maxlength=\"50\" formControlName=\"name\" placeholder=\"Maximum 50 Characters\"  (input)=\"charCount($event,'name')\" >\r\n          <span *ngIf=\"f.name.touched && f.name.invalid\" class=\"required\"> *Please Enter Name </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label >Awards/Medals <span class=\"char-count\" > ({{awardsLength}}/150)</span><span class=\"required\">*</span></label>\r\n          <input type=\"text\" class=\"form-control\"  maxlength=\"150\" formControlName=\"awards\" placeholder=\"Maximum 150 Characters\"  (input)=\"charCount($event,'awards')\">\r\n          <span *ngIf=\"f.awards.touched && f.awards.invalid\" class=\"required\"> *Please Enter Awards </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <label >Message <span class=\"char-count\" > ({{msgLength}}/500)</span> <span class=\"required\">*</span></label>\r\n          <textarea class=\"form-control\"  maxlength=\"500\"  placeholder=\"Maximum 500 Characters\" formControlName=\"message\"  (input)=\"charCount($event,'msg')\" ></textarea>\r\n          <span *ngIf=\"f.message.touched && f.message.invalid\" class=\"required\"> *Please Enter Message </span>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label >Image</label>\r\n        <input #file type=\"file\" id=\"image\" accept=\"image/*\" (change)=\"onSelectImage($event)\">\r\n        <span  class=\"size_info\">Max Image Size 50 MB. (Image size must be  186px * 225px)</span>\r\n        <div  *ngIf=\"previewImg\" class=\"preview_image\"> <img [src]=\"previewImg\" alt=\"\"></div> \r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label >Status<span class=\"required\">*</span></label>\r\n          <select name=\"\" id=\"\" class=\"form-control\" formControlName=\"status\">\r\n            <option value=\"\" selected hidden disabled>Select</option>\r\n            <option value=\"1\">Active</option>\r\n            <option value=\"0\">Inactive</option>\r\n          </select>\r\n          <span *ngIf=\"f.status.touched && f.status.invalid\" class=\"required\"> *Please Select Status </span>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <button mat-raised-button *ngIf=\"pageName == 'Add Message'\"  (click)=\"addMessage()\"  >Add Message</button>\r\n      <button mat-raised-button  *ngIf=\"pageName == 'View Message'\"  (click)=\"updateMessage()\"  >Update Message</button>\r\n\r\n    </form>\r\n  </div>\r\n</mat-card>");

/***/ }),

/***/ "hMev":
/*!****************************************************************************!*\
  !*** ./src/app/main/admin/home/messages/add-message/add-message.module.ts ***!
  \****************************************************************************/
/*! exports provided: AddMessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMessagesModule", function() { return AddMessagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _add_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-message.component */ "ZUEb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { MatCardModule, MatIconModule, MatMenuModule, MatTabsModule, MatProgressBarModule,
//      MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatTableModule,
//       MatTooltipModule, MatPaginatorModule, MatDatepickerModule, MatDividerModule, MatChipsModule, MatListModule } from '@angular/material';





var routes = [
    {
        path: '',
        component: _add_message_component__WEBPACK_IMPORTED_MODULE_6__["AddMessageComponent"]
    }
];
var AddMessagesModule = /** @class */ (function () {
    function AddMessagesModule() {
    }
    AddMessagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_message_component__WEBPACK_IMPORTED_MODULE_6__["AddMessageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]
                //  MatProgressBarModule, MatMenuModule, ChartsModule,/* NgxChartsModule */
                // MatIconModule, MatRadioModule, /* NgxChartsModule, */
                // MatButtonModule, MatDividerModule, MatChipsModule, MatListModule, 
                // SharedPipesModule,
                // MatFormFieldModule, FlexLayoutModule,
                // MatInputModule, MatTabsModule,
                // MatRippleModule, MatSelectModule, MatTableModule, MatTooltipModule, MatPaginatorModule, MatDatepickerModule
            ]
        })
    ], AddMessagesModule);
    return AddMessagesModule;
}());



/***/ })

}]);