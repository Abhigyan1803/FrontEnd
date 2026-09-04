(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-event-add-event-module"],{

/***/ "MCNO":
/*!*************************************************************************!*\
  !*** ./src/app/main/admin/home/events/add-event/add-event.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventComponent", function() { return AddEventComponent; });
/* harmony import */ var _raw_loader_add_event_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-event.component.html */ "Z0mr");
/* harmony import */ var _add_event_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-event.component.scss */ "TLqm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
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









var AddEventComponent = /** @class */ (function () {
    function AddEventComponent(fb, router, spinner, route, cdref, service, snackbar, localID) {
        this.fb = fb;
        this.router = router;
        this.spinner = spinner;
        this.route = route;
        this.cdref = cdref;
        this.service = service;
        this.snackbar = snackbar;
        this.hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
        this.minutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];
        this.isError = false;
        this.previewImg = '';
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        /** ========= CHARACTERS COUNT ========= */
        this.titleLength = 0;
        this.descLength = 0;
        this.addEventForm = this.fb.group({
            date: [''],
            time: [''],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            isGcEvent: [''],
            image: ['']
        });
        this.localID = localID;
        this.minDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(Date.now(), 'yyyy-MM-dd', this.localID);
    }
    AddEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes('view-event')) {
            this.pageName = 'View Upcoming Event';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getEventDetailsById(this.id).subscribe(function (res) {
                _this.spinner.show();
                console.log(res);
                if (res.status == '1') {
                    var checkDt = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(res.List.eventDate, 'yyyy-MM-dd', _this.localID);
                    var currDt = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(Date.now(), 'yyyy-MM-dd', _this.localID);
                    _this.scheduleDate.nativeElement.value = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(res.List.eventDate, 'yyyy-MM-dd', _this.localID);
                    _this.date_time = new Date(res.List.eventDate);
                    _this.scheduleHours.nativeElement.value = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(res.List.eventDate, "HH", _this.localID);
                    _this.scheduleMinutes.nativeElement.value = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(res.List.eventDate, "mm", _this.localID);
                    _this.addEventForm.patchValue({
                        time: res.List.eventDate,
                        title: res.List.title,
                        description: res.List.description,
                        status: res.List.status,
                        isGcEvent: res.List.isGcEvent
                    });
                    _this.titleLength = res.List.title.length;
                    _this.descLength = res.List.description.length;
                    if (currDt == checkDt) {
                        _this.minHours = new Date().getHours();
                        _this.minMinutes = new Date().getMinutes();
                    }
                    _this.titleLength = res.List.title.length;
                    _this.descLength = res.List.description.length;
                    _this.previewImg = res.List.image;
                    _this.spinner.hide();
                }
                else {
                    _this.openSnackbar(res.msg);
                    _this.spinner.hide();
                }
            });
        }
        else if (this.router.url.includes('add-event')) {
            this.pageName = 'Add Upcoming Event';
        }
        this.unSelectedFile = this.imgFile.nativeElement.files;
    };
    AddEventComponent.prototype.goBack = function () {
        this.router.navigate(['/main/admin/home/events']);
    };
    AddEventComponent.prototype.dateChanged = function (e) {
        console.log(e.target.value);
        this.date_time = new Date(e.target.value);
        var currDt = new Date();
        var checkDt = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(currDt, 'yyyy-MM-dd', this.localID);
        if (e.target.value == checkDt) {
            this.minHours = currDt.getHours();
            this.minMinutes = currDt.getMinutes();
            this.scheduleHours.nativeElement.value = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(currDt, 'HH', this.localID);
            this.scheduleMinutes.nativeElement.value = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(currDt, 'mm', this.localID);
            this.date_time.setHours(currDt.getHours());
            this.date_time.setMinutes(currDt.getMinutes());
        }
        else {
            this.date_time.setHours("00");
            this.date_time.setMinutes("00");
            this.minHours = '00';
            this.minMinutes = '00';
            this.scheduleHours.nativeElement.value = '00';
            this.scheduleMinutes.nativeElement.value = '00';
        }
        this.addEventForm.patchValue({
            time: Date.parse(this.date_time)
        });
        console.log(this.date_time);
        console.log(new Date(this.addEventForm.get('time').value));
    };
    AddEventComponent.prototype.hoursSelected = function (e) {
        var currDt = new Date();
        var checkDt = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(currDt, 'yyyy-MM-dd', this.localID);
        if (this.scheduleDate.nativeElement.value == checkDt) {
            var currHrs = currDt.getHours();
            if (e.target.value > currHrs) {
                this.minMinutes = '00';
                this.scheduleMinutes.nativeElement.value = '00';
            }
        }
        this.date_time.setHours(e.target.value);
        this.addEventForm.patchValue({
            time: Date.parse(this.date_time)
        });
        console.log(this.date_time);
    };
    AddEventComponent.prototype.minutesSelected = function (e) {
        this.date_time.setMinutes(e.target.value);
        this.addEventForm.patchValue({
            time: Date.parse(this.date_time)
        });
        console.log(this.date_time);
    };
    AddEventComponent.prototype.charCount = function (e, t) {
        if (t == 'title')
            this.titleLength = e.target.value.length;
        if (t == 'description')
            this.descLength = e.target.value.length;
    };
    AddEventComponent.prototype.onSelectImage = function (e) {
        // this.addEventForm.patchValue({
        //   image: e.target.files[0]
        // })
        var _this = this;
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.imgFile.nativeElement.files = this.unSelectedFile;
            this.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.addEventForm.patchValue({
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
    Object.defineProperty(AddEventComponent.prototype, "f", {
        get: function () {
            return this.addEventForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddEventComponent.prototype.addEvent = function () {
        var _this = this;
        if (this.addEventForm.invalid) {
            alert('Please Fill Required Details');
        }
        else {
            this.spinner.show();
            this.service.addEvent(this.addEventForm.value).subscribe(function (res) {
                if (res.status == "1") {
                    _this.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.router.navigate(['/main/admin/home/events']);
                    window.history.back;
                }
                else {
                    _this.openSnackbar(res.msg);
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.openSnackbar('Error Occured.');
                console.log(JSON.parse(err));
            });
        }
    };
    AddEventComponent.prototype.updateEvent = function () {
        var _this = this;
        if (this.addEventForm.invalid) {
            alert('Please Fill Required Details');
        }
        else {
            this.spinner.show();
            this.service.updateEvent(this.id, this.addEventForm.value).subscribe(function (res) {
                if (res.status == "1") {
                    _this.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.router.navigate(['/main/admin/home/events']);
                    _this.spinner.hide();
                    window.history.back;
                }
                else {
                    _this.openSnackbar(res.msg);
                    _this.spinner.hide();
                }
                console.log(res);
            }, function (err) {
                _this.spinner.hide();
                console.log(JSON.parse(err));
            });
        }
    };
    AddEventComponent.prototype.openSnackbar = function (msg) {
        this.snackbar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    AddEventComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
    ]; };
    AddEventComponent.propDecorators = {
        scheduleDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['scheduleDate', { static: true },] }],
        scheduleHours: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['scheduleHours', { static: true },] }],
        scheduleMinutes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['scheduleMinutes', { static: true },] }],
        imgFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['file', { static: true },] }],
        dateTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['dateTime', { static: true },] }]
    };
    AddEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-event',
            template: _raw_loader_add_event_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_event_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], String])
    ], AddEventComponent);
    return AddEventComponent;
}());



/***/ }),

/***/ "TLqm":
/*!***************************************************************************!*\
  !*** ./src/app/main/admin/home/events/add-event/add-event.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".char-count {\n  color: #8d8d8d;\n}");

/***/ }),

/***/ "Z0mr":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/events/add-event/add-event.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\"> \r\n    <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button> Home <span class=\"sub-menu1\"> > Upcoming Events </span> <span class=\"sub-menu1\"> >\r\n      {{pageName}}</span>\r\n  </h4>\r\n</div>\r\n<mat-card>\r\n  <div class=\"top-br\">\r\n    <form [formGroup]=\"addEventForm\">     \r\n      <div class=\"row\">\r\n\r\n        <div class=\"form-group col-md-6\" >\r\n          <label for=\"date\">Date<span class=\"required\">*</span></label>\r\n          <input id=\"date\" #scheduleDate  type=\"date\" [min]=\"minDate\"  class=\"form-control\" (change)=\"dateChanged($event)\" formControlName=\"date\" > \r\n          <span  class=\"validation_msg\"  *ngIf=\"f.date.touched && f.time.invalid\" >Please Select Date</span>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-3\" >\r\n          <label for=\"hours\">Hours</label>\r\n          <select type=\"date\" id=\"hours\" #scheduleHours [disabled]=\"!date_time\" class=\"form-control\" (change)=\"hoursSelected($event)\" >\r\n            <option value=\"\" selected hidden disabled >--</option>\r\n            <option *ngFor=\"let h of hours\" [value]=\"h\" [disabled]=\"minHours>h\" >{{h}}</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-3\" >\r\n          <label for=\"minutes\">Minutes</label>\r\n          <select id=\"minutes\" #scheduleMinutes class=\"form-control\" [disabled]=\"!date_time\" (change)=\"minutesSelected($event)\">\r\n            <option value=\"\" selected hidden disabled >--</option>\r\n            <option *ngFor=\"let m of minutes\" [value]=\"m\" [disabled]=\"minMinutes>m\">{{m}} </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">     \r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"title\">Event Name <span class=\"char-count\" >({{titleLength}}/100)</span><span class=\"required\">*</span></label>\r\n          <input type=\"text\" id=\"title\" class=\"form-control\"  maxlength=\"100\" placeholder=\"Maximum 100 Characters\" required formControlName=\"title\"  (input)=\"charCount($event,'title')\" >\r\n          <span  class=\"validation_msg\"  *ngIf=\"f.title.touched && f.title.invalid\" >Please Enter Title</span>\r\n        </div>        \r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <label for=\"title\">Description <span class=\"char-count\" >   ({{descLength}}/500)  </span> <span class=\"required\">*</span></label>\r\n          <textarea class=\"form-control\" maxlength=\"500\"  placeholder=\"Maximum 500 Characters\" required formControlName=\"description\"  (input)=\"charCount($event,'description')\"></textarea>\r\n          <span  class=\"validation_msg\"  *ngIf=\"f.description.touched && f.description.invalid\" >Please Enter Description</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">Image (Optional)</label> \r\n        <input #file type=\"file\" accept=\"image/*\" (change)=\"onSelectImage($event)\" id=\"image\"> \r\n        <span  class=\"size_info\">Max Image Size 50 MB. (Image size must be  200px * 150px)</span>\r\n        <div *ngIf=\"previewImg\" class=\"preview_image\"> <img [src]=\"previewImg\" alt=\"\"></div> \r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n         <label for=\"isGcEvent\">  <input type=\"checkbox\" formControlName=\"isGcEvent\" name=\"\" id=\"isGcEvent\"> Is for Officer Cadet </label> \r\n         </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">       \r\n        <label for=\"status\" class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n          <select name=\"\" id=\"status\" class=\"form-control\" required formControlName=\"status\" >\r\n            <option value=\"\" disabled selected hidden >Select</option>\r\n            <option value=\"1\">Active</option>\r\n            <option value=\"0\">Inactive</option>\r\n          </select>\r\n          <span  class=\"validation_msg\"  *ngIf=\"f.status.touched && f.status.invalid\" >*Please Select Status</span>\r\n        </div>\r\n      </div>\r\n\r\n      <button mat-raised-button *ngIf=\"!id\" (click)=\"addEvent()\" >Add Event</button>\r\n      <button mat-raised-button *ngIf=\"id\" (click)=\"updateEvent()\" >Update Event</button>\r\n\r\n    </form>\r\n  </div>\r\n</mat-card>");

/***/ }),

/***/ "uLwd":
/*!**********************************************************************!*\
  !*** ./src/app/main/admin/home/events/add-event/add-event.module.ts ***!
  \**********************************************************************/
/*! exports provided: AddEventModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventModule", function() { return AddEventModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-event.component */ "MCNO");
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
        component: _add_event_component__WEBPACK_IMPORTED_MODULE_4__["AddEventComponent"]
    }
];
var AddEventModule = /** @class */ (function () {
    function AddEventModule() {
    }
    AddEventModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_event_component__WEBPACK_IMPORTED_MODULE_4__["AddEventComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddEventModule);
    return AddEventModule;
}());



/***/ })

}]);