(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-program-add-program-module"],{

/***/ "E1FD":
/*!*******************************************************************************!*\
  !*** ./src/app/main/admin/home/programs/add-program/add-program.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProgramComponent", function() { return AddProgramComponent; });
/* harmony import */ var _raw_loader_add_program_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-program.component.html */ "OTCp");
/* harmony import */ var _add_program_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-program.component.scss */ "ygxL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
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









var AddProgramComponent = /** @class */ (function () {
    function AddProgramComponent(fb, service, router, spinner, route, snackbar, cdref, localID) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.spinner = spinner;
        this.route = route;
        this.snackbar = snackbar;
        this.cdref = cdref;
        this.min_s_hrs = '00';
        this.min_s_mnts = '00';
        this.min_e_hrs = '00';
        this.min_e_mnts = '00';
        this.isError = false;
        this.date = new Date();
        this.hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
        this.minutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        /** ========= CHARACTERS COUNT ========= */
        this.titleLength = 0;
        this.venueLength = 0;
        this.addProgramForm = this.fb.group({
            scheduledDate: [''],
            startTime: [''],
            endTime: [''],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            venue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.localID = localID;
        this.minDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(Date.now(), 'yyyy-MM-dd', this.localID);
        this.maxDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(Date.now() + (48 * 60 * 60 * 1000), 'yyyy-MM-dd', this.localID);
    }
    AddProgramComponent.prototype.ngOnInit = function () {
        // console.log(this.scheduleDate);
        var _this = this;
        this.spinner.show();
        if (this.router.url.includes('view-program')) {
            this.pageName = "View PGME";
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getProgramDetailsById(this.id).subscribe(function (res) {
                if (res.status == '1') {
                    var checkDt = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(res.List.scheduledDate, 'yyyy-MM-dd', _this.localID);
                    var currDt = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(Date.now(), 'yyyy-MM-dd', _this.localID);
                    _this.scheduleDate.nativeElement.value = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(res.List.scheduledDate, 'yyyy-MM-dd', _this.localID);
                    _this.date_time = new Date(res.List.scheduledDate);
                    // this.scheduleHours.nativeElement.value = formatDate(res.List.scheduledDate, "HH", this.localID);
                    // this.scheduleMinutes.nativeElement.value = formatDate(res.List.scheduledDate, "mm", this.localID);
                    _this.addProgramForm.patchValue({
                        scheduledDate: res.List.scheduledDate,
                        startTime: res.List.startTime,
                        endTime: res.List.endTime,
                        title: res.List.title,
                        venue: res.List.venue
                    });
                    _this.dateSelected = new Date(res.List.scheduledDate);
                    _this.startHours.nativeElement.value = new Date(res.List.startTime).getHours();
                    _this.endHours.nativeElement.value = new Date(res.List.endTime).getHours();
                    _this.startMinutes.nativeElement.value = new Date(res.List.startTime).getMinutes();
                    _this.endMinutes.nativeElement.value = new Date(res.List.endTime).getMinutes();
                    if (currDt == checkDt) {
                        // this.minHours = new Date().getHours();
                        // this.minMinutes = new Date().getMinutes();
                    }
                    _this.titleLength = res.List.title.length;
                    _this.venueLength = res.List.venue.length;
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.openSnackbar('Some Error Occured.');
            });
        }
        else if (this.router.url.includes('add-program')) {
            this.pageName = "Add PGME";
            this.spinner.hide();
        }
    };
    Object.defineProperty(AddProgramComponent.prototype, "f", {
        get: function () {
            return this.addProgramForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddProgramComponent.prototype.onSelectDate = function (e) {
        var selectedDate = e.target.value;
        console.log(selectedDate, "rr");
        // console.log("Parsed date: ");
        // console.log(Date.parse(selectedDate));
        this.addProgramForm.patchValue({
            scheduledDate: Date.parse(selectedDate)
        });
        // console.log(e.target.value);
        this.dateSelected = new Date(e.target.value);
        console.log(this.dateSelected);
        var currDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.date, 'yyyy-MM-dd', this.localID);
        if (selectedDate == currDate) {
            this.startHours.nativeElement.value = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.date, 'HH', this.localID);
            this.startMinutes.nativeElement.value = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.date, 'mm', this.localID);
            this.min_s_hrs = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.date, 'HH', this.localID);
            this.min_s_mnts = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.date, 'mm', this.localID);
            this.min_e_hrs = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.date, 'HH', this.localID);
            this.min_e_mnts = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.date, 'mm', this.localID);
            this.dateSelected.setHours(this.min_s_hrs, this.min_s_mnts);
            this.addProgramForm.patchValue({
                startTime: new Date(this.dateSelected)
            });
            console.log(new Date(this.dateSelected));
            console.log(this.addProgramForm.value);
        }
        else {
            this.min_s_hrs = '00';
            this.min_s_mnts = '00';
            this.min_e_hrs = '00';
            this.min_e_mnts = '00';
        }
    };
    AddProgramComponent.prototype.startHoursSelected = function (e) {
        this.min_e_hrs = e.target.value;
        console.log(this.min_e_hrs);
        this.startHours.nativeElement.value = e.target.value;
        console.log(this.startHours.nativeElement.value);
        // if (this.startMinutes.nativeElement.value) {
        this.addProgramForm.patchValue({
            startTime: new Date(this.dateSelected.setHours(this.startHours.nativeElement.value))
        });
        // }
        console.log(this.addProgramForm.value);
        this.endHours.nativeElement.value = '';
        this.endMinutes.nativeElement.value = '';
        if (this.date.getHours() != this.dateSelected.getHours()) {
            this.min_s_mnts = '00';
        }
        else {
            this.min_s_mnts = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.date, 'mm', this.localID);
        }
    };
    AddProgramComponent.prototype.startMinutesSelected = function (e) {
        if (this.startHours.nativeElement.value) {
            this.startMinutes.nativeElement.value = e.target.value;
            console.log(this.startMinutes.nativeElement.value);
            this.addProgramForm.patchValue({
                startTime: new Date(this.dateSelected.setMinutes(e.target.value))
            });
            console.log(this.addProgramForm.value);
        }
        else {
            // console.log('select hours');
            alert('Please Select Hours');
        }
        // console.log(this.addProgramForm.value);
    };
    AddProgramComponent.prototype.endHoursSelected = function (e) {
        if (e.target.value == this.startHours.nativeElement.value) {
            this.min_e_mnts = this.startMinutes.nativeElement.value;
        }
        else {
            this.min_e_mnts = '00';
        }
        // if (this.endMinutes.nativeElement.value) {
        this.addProgramForm.patchValue({
            endTime: new Date(this.dateSelected.setHours(this.endHours.nativeElement.value, this.endMinutes.nativeElement.value))
        });
        // }
        console.log(this.addProgramForm.value);
        this.endHours.nativeElement.value = e.target.value;
    };
    AddProgramComponent.prototype.endMinutesSelected = function (e) {
        this.endMinutes.nativeElement.value = e.target.value;
        // if (this.endHours.nativeElement.value) {
        this.addProgramForm.patchValue({
            endTime: new Date(this.dateSelected.setHours(this.endHours.nativeElement.value, this.endMinutes.nativeElement.value))
        });
        console.log(this.addProgramForm.value);
    };
    //   dateChanged(e: any) {
    //     this.date_time = new Date(e.target.value);
    //     let currDt = new Date();
    //     let checkDt = formatDate(currDt, 'yyyy-MM-dd', this.localID);
    //     if (e.target.value == checkDt) {
    //       this.minHours = currDt.getHours();
    //       this.minMinutes = currDt.getMinutes();
    //       this.scheduleHours.nativeElement.value =  formatDate(currDt, 'HH', this.localID);
    //       this.scheduleMinutes.nativeElement.value =  formatDate(currDt, 'mm', this.localID);;
    //       this.date_time.setHours(currDt.getHours());
    //       this.date_time.setMinutes(currDt.getMinutes());
    //     } else {
    //       this.date_time.setHours("00");
    //       this.date_time.setMinutes("00");
    //       this.minHours = '00';
    //       this.minMinutes = '00';
    //       this.scheduleHours.nativeElement.value = '00';
    //       this.scheduleMinutes.nativeElement.value = '00';
    //     }
    //     this.addProgramForm.patchValue({
    //       dateTime: Date.parse(this.date_time)
    //     })
    //  }
    //   hoursSelected(e: any) {
    //     let currDt = new Date();
    //     let checkDt = formatDate(currDt, 'yyyy-MM-dd', this.localID);
    //     if (this.scheduleDate.nativeElement.value == checkDt) {
    //       let currHrs = currDt.getHours();
    //       if (e.target.value > currHrs) {
    //         this.minMinutes = '00';
    //         this.scheduleMinutes.nativeElement.value = '00';
    //       }
    //     }
    //     this.date_time.setHours(e.target.value)
    //     this.addProgramForm.patchValue({
    //       dateTime: Date.parse(this.date_time)
    //     })
    //     console.log(this.date_time);
    //   }
    //   minutesSelected(e: any) {
    //     this.date_time.setMinutes(e.target.value);
    //     this.addProgramForm.patchValue({
    //       dateTime: Date.parse(this.date_time)
    //     })
    //     console.log(this.date_time);
    //   }
    AddProgramComponent.prototype.goBack = function () {
        this.router.navigate(['/main/admin/home/programes']);
    };
    AddProgramComponent.prototype.charCount = function (e, t) {
        if (t == 'title')
            this.titleLength = e.target.value.length;
        if (t == 'venue')
            this.venueLength = e.target.value.length;
    };
    AddProgramComponent.prototype.addProgram = function () {
        var _this = this;
        if (this.addProgramForm.invalid) {
            alert('Please Select All Required Fields');
        }
        else {
            this.spinner.show();
            this.service.addProgram(this.addProgramForm.value).subscribe(function (res) {
                // console.log(res);
                if (res.status == "1") {
                    _this.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/home/programes']);
                }
                else {
                    _this.openSnackbar(res.msg);
                }
            }, function (err) {
                console.log(JSON.stringify(err));
                _this.spinner.hide();
                _this.openSnackbar('Some error occured.');
            });
        }
    };
    AddProgramComponent.prototype.updateProgram = function () {
        var _this = this;
        if (this.addProgramForm.invalid) {
            alert('Please Select All Required Fields');
        }
        else {
            this.spinner.show();
            this.service.updateProgram(this.id, this.addProgramForm.value).subscribe(function (res) {
                // console.log(res);
                if (res.status == "1") {
                    _this.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/home/programes']);
                }
                else {
                    _this.spinner.hide();
                    _this.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                console.log(JSON.stringify(err));
                _this.openSnackbar('Some error occured.');
            });
        }
    };
    AddProgramComponent.prototype.openSnackbar = function (msg) {
        this.snackbar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    AddProgramComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
    ]; };
    AddProgramComponent.propDecorators = {
        scheduleDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['scheduleDate', { static: true },] }],
        startHours: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['startHours', { static: true },] }],
        startMinutes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['startMinutes', { static: true },] }],
        endHours: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['endHours', { static: true },] }],
        endMinutes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['endMinutes', { static: true },] }]
    };
    AddProgramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-program',
            template: _raw_loader_add_program_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_program_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], String])
    ], AddProgramComponent);
    return AddProgramComponent;
}());



/***/ }),

/***/ "OTCp":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/programs/add-program/add-program.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\"> <button mat-icon-button (click)=\"goBack()\" > <mat-icon>chevron_left</mat-icon>  </button> Home <span class=\"sub-menu1\"> > Daily PGME </span> <span class=\"sub-menu1\"> > {{pageName}}</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n  <div class=\"top-br\">\r\n    <form [formGroup]=\"addProgramForm\"  >\r\n      <div class=\"row\">\r\n\r\n        <div class=\"form-group col-md-6\" >\r\n          <label for=\"date\">Date <span class=\"required\">*</span></label>\r\n          <input id=\"date\" #scheduleDate  type=\"date\" [min]=\"minDate\" [max]=\"maxDate\" class=\"form-control\"\r\n           (change)=\"onSelectDate($event)\" formControlName=\"scheduledDate\" >\r\n          <span class=\"validation_msg\" *ngIf=\"f['scheduledDate'].errors && isError && f['scheduledDate'].invalid\" >*Please Select Date</span>\r\n        </div>\r\n        <!-- <div class=\"form-group col-md-3\" >\r\n          <label for=\"hours\">Hours<span class=\"required\">*</span></label>\r\n          <select type=\"date\" id=\"hours\" #scheduleHours [disabled]=\"!date_time\" class=\"form-control\" (change)=\"hoursSelected($event)\"  >\r\n            <option value=\"\" selected hidden disabled >00</option>\r\n            <option *ngFor=\"let h of hours\" [value]=\"h\" [disabled]=\"minHours>h\" >{{h}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-md-3\" >\r\n          <label for=\"minutes\">Minutes<span class=\"required\">*</span></label>\r\n          <select id=\"minutes\" #scheduleMinutes class=\"form-control\" [disabled]=\"!date_time\" (change)=\"minutesSelected($event)\"  >\r\n            <option value=\"\" selected hidden disabled >00</option>\r\n            <option *ngFor=\"let m of minutes\" [value]=\"m\" [disabled]=\"minMinutes>m\" >{{m}} </option>\r\n          </select>\r\n       </div> -->\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"hours\">Start Hours<span class=\"required\">*</span></label>\r\n          <select type=\"date\" id=\"hours\" #startHours class=\"form-control\" [disabled]=\"!f.scheduledDate.value\"\r\n            (change)=\"startHoursSelected($event)\">\r\n            <option value=\"\" selected disabled hidden>--</option>\r\n            <option *ngFor=\"let h of hours\" [value]=\"h\" [disabled]=\"min_s_hrs>h\">{{h}}</option>\r\n          </select>\r\n          <span class=\"validation_msg\" *ngIf=\"f.startTime.errors && f.startTime.errors.required && isError\">Please Select\r\n            Start Time</span>\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"minutes\">Start Minutes<span class=\"required\">*</span></label>\r\n          <select id=\"minutes\" #startMinutes class=\"form-control\" [disabled]=\"!f.scheduledDate.value\"\r\n            (change)=\"startMinutesSelected($event)\">\r\n            <option value=\"\" selected disabled hidden>--</option>\r\n            <option *ngFor=\"let m of minutes\" [value]=\"m\" [disabled]=\"min_s_mnts>m\">{{m}} </option>\r\n          </select>\r\n          <!-- <span class=\"validation_msg\" *ngIf=\"f.username.errors && f.username.errors.required && isError\" >Login Id is required</span> -->\r\n        </div>\r\n      \r\n      \r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"hours\">End Hours<span class=\"required\">*</span></label>\r\n          <select type=\"date\" #endHours id=\"hours\" class=\"form-control\" [disabled]=\"!f.startTime.value\"\r\n            (change)=\"endHoursSelected($event)\">\r\n            <option value=\"\" selected disabled hidden>--</option>\r\n            <option *ngFor=\"let h of hours\" [value]=\"h\" [disabled]=\"min_e_hrs>h\">{{h}}</option>\r\n          </select>\r\n          <span class=\"validation_msg\" *ngIf=\"f.endTime.errors && f.endTime.errors.required && isError\">Please Select End\r\n            Time</span>\r\n          <!-- <span class=\"validation_msg\" *ngIf=\"f.username.errors && f.username.errors.required && isError\" >Login Id is required</span> -->\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"minutes\">End Minutes<span class=\"required\">*</span></label>\r\n          <select id=\"minutes\" #endMinutes class=\"form-control\" [disabled]=\"!f.startTime.value\"\r\n            (change)=\"endMinutesSelected($event)\">\r\n            <option value=\"\" selected disabled hidden>--</option>\r\n            <option *ngFor=\"let m of minutes\" [value]=\"m\" [disabled]=\"min_e_mnts>m\">{{m}} </option>\r\n          </select>\r\n          <!-- <span class=\"validation_msg\" *ngIf=\"f.username.errors && f.username.errors.required && isError\" >Login Id is required</span> -->\r\n        </div>\r\n      \r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"row\">\r\n        \r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"title\">Programme <span class=\"char-count\" >   ({{titleLength}}/100)  </span> <span class=\"required\">*</span></label>\r\n          <input type=\"text\" id=\"title\" class=\"form-control\"  maxlength=\"100\" placeholder=\"Maximum 100 Characters\"  formControlName=\"title\" (input)=\"charCount($event,'title')\">\r\n          <span class=\"validation_msg\" *ngIf=\"f.title.touched && f.title.invalid\" >*Please Enter Title</span> \r\n          <!-- <span class=\"validation_msg\" *ngIf=\"f.username.errors && f.username.errors.required && isError\" >Login Id is required</span> -->\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"venue\">Venue<span class=\"char-count\" >   ({{venueLength}}/100)  </span>  <span class=\"required\">*</span></label>\r\n          <input type=\"text\" id=\"venue\" class=\"form-control\"  maxlength=\"100\" placeholder=\"Maximum 100 Characters\"  formControlName=\"venue\" (input)=\"charCount($event,'venue')\">\r\n          <span class=\"validation_msg\" *ngIf=\"f.venue.touched && f.venue.invalid\" >*Please Enter Venue</span> \r\n          <!-- <span class=\"validation_msg\" *ngIf=\"f.username.errors && f.username.errors.required && isError\" >Login Id is required</span> -->\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <textarea class=\"form-control\" id=\"message\" placeholder=\"Schedule\"  formControlName=\"schedule\"></textarea>\r\n        </div>\r\n      </div> -->\r\n\r\n      <!-- <div class=\"row\">\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <select name=\"\" id=\"\" class=\"form-control \">\r\n            <option value=\"\">Active</option>\r\n            <option value=\"\">Inactive</option>\r\n          </select>\r\n        </div>\r\n      </div> -->\r\n\r\n      \r\n      <button  mat-raised-button *ngIf=\"pageName == 'Add PGME'\" (click)=\"addProgram()\"  >Add PGME</button>\r\n      <button  mat-raised-button *ngIf=\"pageName == 'View PGME'\" (click)=\"updateProgram()\"  >Update PGME</button> \r\n     \r\n\r\n    </form>\r\n  </div>\r\n</mat-card>");

/***/ }),

/***/ "uvse":
/*!****************************************************************************!*\
  !*** ./src/app/main/admin/home/programs/add-program/add-program.module.ts ***!
  \****************************************************************************/
/*! exports provided: AddProgramModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProgramModule", function() { return AddProgramModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _add_program_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-program.component */ "E1FD");
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
        component: _add_program_component__WEBPACK_IMPORTED_MODULE_6__["AddProgramComponent"]
    },
];
var AddProgramModule = /** @class */ (function () {
    function AddProgramModule() {
    }
    AddProgramModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_program_component__WEBPACK_IMPORTED_MODULE_6__["AddProgramComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]
            ]
        })
    ], AddProgramModule);
    return AddProgramModule;
}());



/***/ }),

/***/ "ygxL":
/*!*********************************************************************************!*\
  !*** ./src/app/main/admin/home/programs/add-program/add-program.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-input {\n  color: red;\n}\n\n.char-count {\n  color: #8d8d8d;\n}\n\n.inner-nfs.form-group {\n  display: flex;\n  flex-wrap: wrap;\n  padding-bottom: 30px;\n}");

/***/ })

}]);