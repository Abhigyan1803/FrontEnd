(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-gc-msg-add-gc-msg-module"],{

/***/ "6+Vb":
/*!***********************************************************************************!*\
  !*** ./src/app/main/admin/home/gc-msg-board/add-gc-msg/add-gc-msg.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "P7th":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/gc-msg-board/add-gc-msg/add-gc-msg.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> <button mat-icon-button (click)=\"goBack()\" > <mat-icon>chevron_left</mat-icon>  </button> Home <span class=\"sub-menu1\"> > GC MSG </span> <span class=\"sub-menu1\"> > {{pageName}}</span> </h4>\r\n  </div>\r\n  \r\n  <mat-card>\r\n    <div class=\"top-br\">\r\n      <form [formGroup]=\"addProgramForm\"  >\r\n        \r\n        <div class=\"row\">\r\n\r\n          <!-- <div class=\"form-group col-md-6\" >\r\n            <label for=\"date\">Date <span class=\"required\">*</span></label>\r\n            <input id=\"date\" #scheduleDate  type=\"date\" [min]=\"minDate\"  class=\"form-control\"\r\n             (change)=\"onSelectDate($event)\" >\r\n          </div> -->\r\n      \r\n        </div>\r\n  \r\n        <!-- <div class=\"row\">\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"hours\">Start Hours<span class=\"required\">*</span></label>\r\n            <select type=\"date\" id=\"hours\" #startHours class=\"form-control\" \r\n              (change)=\"startHoursSelected($event)\">\r\n              <option value=\"\" selected disabled hidden>--</option>\r\n              <option *ngFor=\"let h of hours\" [value]=\"h\" [disabled]=\"min_s_hrs>h\">{{h}}</option>\r\n            </select>\r\n           \r\n          </div>\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"minutes\">Start Minutes<span class=\"required\">*</span></label>\r\n            <select id=\"minutes\" #startMinutes class=\"form-control\" \r\n              (change)=\"startMinutesSelected($event)\">\r\n              <option value=\"\" selected disabled hidden>--</option>\r\n              <option *ngFor=\"let m of minutes\" [value]=\"m\" [disabled]=\"min_s_mnts>m\">{{m}} </option>\r\n            </select>\r\n            \r\n          </div>\r\n        \r\n        \r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"hours\">End Hours<span class=\"required\">*</span></label>\r\n            <select type=\"date\" #endHours id=\"hours\" class=\"form-control\" \r\n              (change)=\"endHoursSelected($event)\">\r\n              <option value=\"\" selected disabled hidden>--</option>\r\n              <option *ngFor=\"let h of hours\" [value]=\"h\" [disabled]=\"min_e_hrs>h\">{{h}}</option>\r\n            </select>\r\n           \r\n          </div>\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"minutes\">End Minutes<span class=\"required\">*</span></label>\r\n            <select id=\"minutes\" #endMinutes class=\"form-control\" \r\n              (change)=\"endMinutesSelected($event)\">\r\n              <option value=\"\" selected disabled hidden>--</option>\r\n              <option *ngFor=\"let m of minutes\" [value]=\"m\" [disabled]=\"min_e_mnts>m\">{{m}} </option>\r\n            </select>\r\n          </div>\r\n        \r\n        </div> -->\r\n  \r\n  \r\n  \r\n        <div class=\"row\">\r\n          \r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"title\">Title <span class=\"char-count\" >   ({{titleLength}}/100)  </span> <span class=\"required\">*</span></label>\r\n            <input type=\"text\" id=\"title\" class=\"form-control\"  maxlength=\"100\" placeholder=\"Maximum 100 Characters\"  formControlName=\"title\" (input)=\"charCount($event,'title')\">\r\n            <!-- <span class=\"validation_msg\" *ngIf=\"f.title.touched && f.title.invalid\" >*Please Enter Title</span>  -->\r\n            <!-- <span class=\"validation_msg\" *ngIf=\"f.username.errors && f.username.errors.required && isError\" >Login Id is required</span> -->\r\n          </div>\r\n          <!-- <div class=\"form-group col-md-6\">\r\n            <label for=\"description\">description</label>\r\n            <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\"  (input)=\"charCount($event)\" maxlength=\"1500\" formControlName=\"description\"></textarea>\r\n          </div> -->\r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-12\">\r\n     <label for=\"awards\">Description <span class=\"char-count\"> ({{descLength}}/1500) </span> <span class=\"required\">*</span> </label>\r\n     <!-- <input type=\"text\" id=\"awards\" class=\"form-control\"  maxlength=\"100\" formControlName=\"awards\" placeholder=\"Awards\"> -->\r\n     <textarea matInput placeholder=\"Maximum 1500 Characters\" class=\"form-control\"  (input)=\"charCount($event,'description')\"\r\n      maxlength=\"1500\" formControlName=\"description\"></textarea>\r\n\r\n     <span class=\"val_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >*Please Enter history</span>\r\n\r\n      </div>\r\n </div> \r\n\r\n        <!-- <div class=\"row\">\r\n          <div class=\"form-group col-md-12\">\r\n            <textarea class=\"form-control\" id=\"message\" placeholder=\"Schedule\"  formControlName=\"schedule\"></textarea>\r\n          </div>\r\n        </div> -->\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Document<span class=\"required\">*</span></label>\r\n              <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n              <mat-icon *ngIf=\"docUrl\" class=\"document_icon\" (click)=\"openDoc(docUrl)\" >description</mat-icon>\r\n              <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n              <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span>\r\n          </div>\r\n  \r\n          <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"status\">Status<span class=\"required\" >*</span></label>\r\n              <select name=\"\" id=\"\" class=\"form-control \" formControlName=\"status\">\r\n                <option value=\"\" disabled selected hidden>Status</option>\r\n                <option value=\"1\">Active</option>\r\n                <option value=\"0\">Inactive</option>\r\n              </select>\r\n              <!-- <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span>  -->\r\n            </div>\r\n          </div>\r\n  \r\n\r\n        \r\n        <button  mat-raised-button *ngIf=\"!id\" (click)=\"addProgram()\"  >Add GC</button>\r\n        <button  mat-raised-button *ngIf=\"id\" (click)=\"updateProgram()\"  >Update GC</button> \r\n       \r\n  \r\n      </form>\r\n    </div>\r\n  </mat-card>");

/***/ }),

/***/ "mHdT":
/*!*********************************************************************************!*\
  !*** ./src/app/main/admin/home/gc-msg-board/add-gc-msg/add-gc-msg.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddGcMsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGcMsgComponent", function() { return AddGcMsgComponent; });
/* harmony import */ var _raw_loader_add_gc_msg_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-gc-msg.component.html */ "P7th");
/* harmony import */ var _add_gc_msg_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-gc-msg.component.scss */ "6+Vb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddGcMsgComponent = /** @class */ (function () {
    function AddGcMsgComponent(fb, service, router, spinner, dialog, route, snackbar, cdref, localID) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.spinner = spinner;
        this.dialog = dialog;
        this.route = route;
        this.snackbar = snackbar;
        this.cdref = cdref;
        this.isDoc = true;
        this.isError = false;
        this.date = new Date();
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        /** ========= CHARACTERS COUNT ========= */
        this.titleLength = 0;
        this.descLength = 0;
        this.addProgramForm = this.fb.group({
            doc: [''],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.localID = localID;
        // this.minDate = formatDate(Date.now(), 'yyyy-MM-dd', this.localID);
        // this.maxDate = formatDate(Date.now() + (48 * 60 * 60 * 1000), 'yyyy-MM-dd', this.localID);
    }
    AddGcMsgComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("=========================");
        console.log(new Date());
        console.log("=========================");
        // console.log(this.scheduleDate);
        this.spinner.show();
        if (this.router.url.includes('view-gcMsg')) {
            this.pageName = "View GC MSG";
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getMESSAGEBOARDByID(this.id).subscribe(function (res) {
                if (res.status == 'OK') {
                    console.log(res, "======GC MSG==");
                    _this.addProgramForm.patchValue({
                        title: res.object.title,
                        description: res.object.description,
                        status: res.object.status,
                    });
                    _this.docUrl = res.object.document;
                    _this.isDoc = true;
                    console.log(_this.addProgramForm, "addProgramForm===");
                    // this.dateSelected = new Date(res.object.scheduledDate);
                    // this.startHours.nativeElement.value = new Date(res.object.startTime).getHours()
                    // this.endHours.nativeElement.value = new Date(res.object.endTime).getHours()
                    // this.startMinutes.nativeElement.value = new Date(res.object.startTime).getMinutes()
                    // this.endMinutes.nativeElement.value = new Date(res.object.endTime).getMinutes()
                    // if(currDt == checkDt){
                    //   // this.minHours = new Date().getHours();
                    //   // this.minMinutes = new Date().getMinutes();
                    // }
                    _this.titleLength = res.object.title.length;
                    _this.descLength = res.object.description.length;
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.openSnackbar('Some Error Occured.');
            });
        }
        else if (this.router.url.includes('add-gcMsg')) {
            this.pageName = "Add GC MSG";
            this.spinner.hide();
        }
    };
    Object.defineProperty(AddGcMsgComponent.prototype, "f", {
        get: function () {
            return this.addProgramForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    // onSelectDate(e: any) {
    //   let selectedDate = e.target.value;
    //   // console.log("Parsed date: ");
    //   // console.log(Date.parse(selectedDate));
    //   this.addProgramForm.patchValue({
    //     scheduledDate: Date.parse(selectedDate)
    //   })
    //   // console.log(e.target.value);
    //   // this.dateSelected = new Date(e.target.value);
    //   // console.log(this.dateSelected)
    //   let currDate = formatDate(this.date, 'yyyy-MM-dd', this.localID);
    //   if (selectedDate == currDate) {
    //     // this.startHours.nativeElement.value = formatDate(this.date, 'HH', this.localID);
    //     // this.startMinutes.nativeElement.value = formatDate(this.date, 'mm', this.localID);
    //     // this.min_s_hrs = formatDate(this.date, 'HH', this.localID);
    //     // this.min_s_mnts = formatDate(this.date, 'mm', this.localID);
    //     // this.min_e_hrs = formatDate(this.date, 'HH', this.localID);
    //     // this.min_e_mnts = formatDate(this.date, 'mm', this.localID);
    //     // this.dateSelected.setHours(this.min_s_hrs,this.min_s_mnts)
    //     this.addProgramForm.patchValue({
    //       startTime: new Date(this.dateSelected)
    //       // startTime: formatDate(this.dateSelected, 'YYYY-MM-ddTHH:mm:ss.ss:sZ', this.localID)
    //     })
    //     console.log(new Date(this.dateSelected));
    //     console.log(this.addProgramForm.value);
    //   } else {
    //     this.min_s_hrs = '00';
    //     this.min_s_mnts = '00';
    //     this.min_e_hrs = '00';
    //     this.min_e_mnts = '00';
    //   }
    // }
    // startHoursSelected(e: any) {
    //   this.min_e_hrs = e.target.value
    //   console.log(this.min_e_hrs)
    //   this.startHours.nativeElement.value = e.target.value;
    //   this.dateSelected.setHours(this.startHours.nativeElement.value)
    //   console.log(this.startHours.nativeElement.value)
    //   // if (this.startMinutes.nativeElement.value) {
    //     this.addProgramForm.patchValue({
    //       // startTime: new Date(this.dateSelected.setHours(this.startHours.nativeElement.value))
    //       startTime: formatDate(this.dateSelected, "yyyy-MM-dd HH:mm:ss", this.localID)
    //     })
    //   // }
    //   console.log(this.addProgramForm.value);
    //   this.endHours.nativeElement.value = '';
    //   this.endMinutes.nativeElement.value = '';
    //   if(this.date.getHours() != this.dateSelected.getHours()){
    //     this.min_s_mnts = '00'
    //   } else {
    //     this.min_s_mnts = formatDate(this.date, 'mm', this.localID);
    //   }
    // }
    // startMinutesSelected(e: any) {
    //   if (this.startHours.nativeElement.value) {
    //   this.startMinutes.nativeElement.value = e.target.value;
    //   console.log(this.startMinutes.nativeElement.value)
    //   this.dateSelected.setMinutes(e.target.value)
    //     this.addProgramForm.patchValue({
    //       // startTime: new Date(this.dateSelected.setMinutes(e.target.value))
    //       startTime: formatDate(this.dateSelected, "yyyy-MM-dd HH:mm:ss", this.localID)
    //     })
    //     console.log(this.addProgramForm.value);
    //   } else {
    //     // console.log('select hours');
    //     alert('Please Select Hours');
    //   }
    //   // console.log(this.addProgramForm.value);
    // }
    // endHoursSelected(e: any) {
    //   if (e.target.value == this.startHours.nativeElement.value) {
    //     this.min_e_mnts = this.startMinutes.nativeElement.value;
    //   } else {
    //     this.min_e_mnts = '00'
    //   }
    //   this.dateSelected.setHours(this.endHours.nativeElement.value, this.endMinutes.nativeElement.value)
    //   // if (this.endMinutes.nativeElement.value) {
    //     this.addProgramForm.patchValue({
    //       // endTime: new Date(this.dateSelected.setHours(this.endHours.nativeElement.value, this.endMinutes.nativeElement.value))
    //       endTime: formatDate(this.dateSelected, "yyyy-MM-dd HH:mm:ss", this.localID)
    //     })
    //   // }
    //   console.log(this.addProgramForm.value);
    //   this.endHours.nativeElement.value = e.target.value;
    // }
    // endMinutesSelected(e: any) {
    //   this.endMinutes.nativeElement.value = e.target.value
    //   this.dateSelected.setHours(this.endHours.nativeElement.value, this.endMinutes.nativeElement.value)
    //   // if (this.endHours.nativeElement.value) {
    //     this.addProgramForm.patchValue({
    //       // endTime: new Date(this.dateSelected.setHours(this.endHours.nativeElement.value, this.endMinutes.nativeElement.value))
    //       endTime: formatDate(this.dateSelected, "yyyy-MM-dd HH:mm:ss", this.localID)
    //     })
    //     console.log(this.addProgramForm.value);
    // }
    AddGcMsgComponent.prototype.goBack = function () {
        this.router.navigate(['/main/admin/home/gc-msg']);
    };
    AddGcMsgComponent.prototype.charCount = function (e, t) {
        if (t == 'title')
            this.titleLength = e.target.value.length;
        if (t == 'description')
            this.descLength = e.target.value.length;
    };
    AddGcMsgComponent.prototype.addProgram = function () {
        var _this = this;
        if (this.addProgramForm.invalid) {
            alert('Please Select All Required Fields');
        }
        else {
            this.spinner.show();
            this.service.addMESSAGEBOARD(this.addProgramForm.value).subscribe(function (res) {
                console.log(res);
                if (res.status == "OK") {
                    _this.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/home/gc-msg']);
                }
                else {
                    _this.openSnackbar(res.message);
                }
            }, function (err) {
                console.log(JSON.stringify(err));
                _this.spinner.hide();
                _this.openSnackbar('Some error occured.');
            });
        }
    };
    AddGcMsgComponent.prototype.updateProgram = function () {
        var _this = this;
        if (this.addProgramForm.invalid) {
            alert('Please Select All Required Fields');
        }
        else {
            this.spinner.show();
            this.service.updateMESSAGEBOARD(this.id, this.addProgramForm.value).subscribe(function (res) {
                // console.log(res);
                if (res.status == "OK") {
                    _this.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['/main/admin/home/gc-msg']);
                }
                else {
                    _this.spinner.hide();
                    _this.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                console.log(JSON.stringify(err));
                _this.openSnackbar('Some error occured.');
            });
        }
    };
    AddGcMsgComponent.prototype.openSnackbar = function (message) {
        this.snackbar.open(message, 'x', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    AddGcMsgComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: l
            }
        });
    };
    AddGcMsgComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.service.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.docUrl = '';
            this.addProgramForm.patchValue({
                doc: file
            });
            this.isDoc = true;
        }
        // console.log("selected Doc", this.addBdoForm.value);
    };
    AddGcMsgComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
    ]; };
    AddGcMsgComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddGcMsgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-gc-msg',
            template: _raw_loader_add_gc_msg_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_gc_msg_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], String])
    ], AddGcMsgComponent);
    return AddGcMsgComponent;
}());



/***/ }),

/***/ "oLkr":
/*!******************************************************************************!*\
  !*** ./src/app/main/admin/home/gc-msg-board/add-gc-msg/add-gc-msg.module.ts ***!
  \******************************************************************************/
/*! exports provided: AddGcMsgModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGcMsgModule", function() { return AddGcMsgModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_gc_msg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-gc-msg.component */ "mHdT");
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
        component: _add_gc_msg_component__WEBPACK_IMPORTED_MODULE_4__["AddGcMsgComponent"]
    },
];
var AddGcMsgModule = /** @class */ (function () {
    function AddGcMsgModule() {
    }
    AddGcMsgModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_gc_msg_component__WEBPACK_IMPORTED_MODULE_4__["AddGcMsgComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddGcMsgModule);
    return AddGcMsgModule;
}());



/***/ })

}]);