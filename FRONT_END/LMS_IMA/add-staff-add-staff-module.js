(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-staff-add-staff-module"],{

/***/ "5hQV":
/*!***********************************************************************************!*\
  !*** ./src/app/main/admin/user-access/manage-staff/add-staff/add-staff.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AddStaffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStaffModule", function() { return AddStaffModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_staff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-staff.component */ "99gD");
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
        component: _add_staff_component__WEBPACK_IMPORTED_MODULE_4__["AddStaffComponent"]
    }
];
var AddStaffModule = /** @class */ (function () {
    function AddStaffModule() {
    }
    AddStaffModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_staff_component__WEBPACK_IMPORTED_MODULE_4__["AddStaffComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AddStaffModule);
    return AddStaffModule;
}());



/***/ }),

/***/ "99gD":
/*!**************************************************************************************!*\
  !*** ./src/app/main/admin/user-access/manage-staff/add-staff/add-staff.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStaffComponent", function() { return AddStaffComponent; });
/* harmony import */ var _raw_loader_add_staff_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-staff.component.html */ "Qv0w");
/* harmony import */ var _add_staff_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-staff.component.scss */ "9jdL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var app_Constants_Constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/Constants/Constants */ "zzRl");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddStaffComponent = /** @class */ (function () {
    function AddStaffComponent(router, fb, route, service, cdref, spinner) {
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.service = service;
        this.cdref = cdref;
        this.spinner = spinner;
        this.officersList = [];
        this.departments = app_Constants_Constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].DEPARTMENTS;
        this.isError = false;
        this.isCoyCmdr = false;
        this.AppId = [];
        this.subDepart = [];
        this.Department = [];
        this.roles = [];
        this.modules = [];
        this.battalionsList = [];
        this.companyList = [];
        this.newRolesArr = [];
        this.roleArr = [];
        this.addStaffForm = this.fb.group({
            // departmentId: [''],
            // subDepartmentId: [''],
            // roleId: ['0'],
            // password: [''],
            // userId: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            battalionId: ['0'],
            compId: ['0'],
            email: [''],
            hasRole: ['0'],
            loginId: [''],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            status: ['1'],
            userId: [''],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.getOfficersList();
        this.getBattalions();
    }
    AddStaffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDepart();
        this.getRole();
        if (this.router.url.includes('add-staff')) {
            this.pageTitle = 'Add Staff';
        }
        else if (this.router.url.includes('view-staff')) {
            this.spinner.show();
            this.f.password.clearValidators();
            this.f.password.updateValueAndValidity();
            this.pageTitle = 'View Staff';
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getStaffMember.subscribe(function (res) {
                // console.log("USER: ", res);
                if (res) {
                    _this.addStaffForm.patchValue(res);
                    _this.battalionSelected(res.battalionId);
                    // this.addStaffForm.disable();
                    _this.setModule();
                    _this.roleArr = res.hasRole.split(',').map(function (item) {
                        return parseInt(item, 10);
                    });
                }
                else {
                    _this.goBack();
                }
            });
            // this.service.getTRGBattalionMemberById(this.id).subscribe(
            //   res => {
            //     // console.log(res);
            //     // if (res.status == 'OK') {
            //     //   this.battalionSelected(res.object.battalionType.id)
            //     //   this.addStaffForm.patchValue({
            //     //     rank: res.object.rank,
            //     //     name: res.object.name,
            //     //     post: res.object.battalionPost.id,
            //     //     battalion: res.object.battalionType.id,
            //     //     company: res.object.companyId,
            //     //     status: res.object.status,
            //     //     awards: res.object.award
            //     //   })
            //     //   if (res.object.battalionPost.id == 3) {
            //     //     this.isCoyCmdr = true;
            //     //     this.addStaffForm.get('company').setValidators([Validators.required]);
            //     //     this.addStaffForm.get('company').updateValueAndValidity();
            //     //   }
            //     //   else {
            //     //     this.isCoyCmdr = false;
            //     //     this.addStaffForm.get('company').clearValidators();
            //     //     this.addStaffForm.get('company').updateValueAndValidity();
            //     //   }
            //     //   this.previewImg = res.object.image
            //     //   this.spinner.hide();
            //     // } else {
            //     //   this.spinner.hide();
            //     //   this.service.openSnackbar(res.message);
            //     // }
            //   }
            // )
        }
    };
    AddStaffComponent.prototype.ngAfterViewInit = function () {
    };
    // ======== OFFICER'S LIST =======
    AddStaffComponent.prototype.getOfficersList = function () {
        var _this = this;
        this.service.getOfficersList().subscribe(function (res) {
            _this.officersList = res.object;
            _this.cdref.detectChanges();
        }, function (err) {
        });
    };
    AddStaffComponent.prototype.officerSelected = function (value) {
        var _this = this;
        // console.log(value);
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(this.officersList);
        var findOfficer = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["find"])(function (obj) { return obj.id === parseInt(value); }));
        var subscribeOfficerRecord = findOfficer.subscribe(function (val) {
            // console.log(val);
            if (val) {
                _this.f.name.setValue(val.name);
            }
        });
    };
    //===== GET BATTALION LIST=======
    AddStaffComponent.prototype.getBattalions = function () {
        var _this = this;
        this.service.getBattalionList().subscribe(function (res) {
            // console.log(res);
            _this.battalionsList = res.object;
            _this.cdref.detectChanges();
        }, function (err) {
        });
    };
    AddStaffComponent.prototype.battalionSelected = function (id) {
        if (id != 0) {
            this.companyList = [];
            this.f.compId.setValue('');
            // this.f.compId.setValidators([Validators.required])
            // this.f.compId.updateValueAndValidity();
            this.getCompaniesList(id);
            // console.log(this.addStaffForm.value);
        }
        else if (id == 0) {
            this.companyList = [];
            this.f.compId.setValue('');
            // this.f.compId.clearValidators();
            // this.f.compId.updateValueAndValidity();
        }
    };
    //======== GET COMPANY LIST ========
    AddStaffComponent.prototype.getCompaniesList = function (id) {
        var _this = this;
        this.service.getCompanyList(id).subscribe(function (res) {
            _this.companyList = res.object;
        });
    };
    AddStaffComponent.prototype.goBack = function () {
        this.router.navigate(['main/admin/user-access/manage-staff']);
    };
    AddStaffComponent.prototype.getRole = function () {
        var _this = this;
        this.service.getRole().subscribe(function (res) {
            if (res.status == "OK") {
                _this.roles = res.object;
                // console.log("ALL ROLES: ",res);
                _this.roles.forEach(function (element) {
                    var dept = _this.newRolesArr.find(function (el) { return el.department == element.department; });
                    if (!dept) {
                        _this.newRolesArr.push({
                            department: element.department,
                            roles: [element]
                        });
                    }
                    else {
                        dept.roles.push(element);
                    }
                });
                _this.newRolesArr.map(function (element) {
                    if (!element.department)
                        element.department = 'Other';
                });
                _this.newRolesArr.sort(function (a, b) {
                    var num;
                    if (a.department < b.department)
                        num = -1;
                    if (a.department > b.department)
                        num = 1;
                    if (a.department == b.department)
                        num = 0;
                    return num;
                });
                var otherIndex = _this.newRolesArr.findIndex(function (element) { return element.department == 'Other'; });
                var otherDept = _this.newRolesArr.splice(otherIndex, 1)[0];
                _this.newRolesArr.splice(_this.newRolesArr.length, 0, otherDept);
                console.log(_this.newRolesArr);
                if (_this.roles) {
                    _this.setModule();
                }
            }
        }, function (err) { });
    };
    AddStaffComponent.prototype.setModule = function (value) {
        // console.log(this.roles);
        // const role = this.roles.find(
        //   ele=>{
        //     if(ele.roleId == value){
        //       this.f.username.setValue(ele.roleName)
        //       return ele;
        //     }
        //   }
        // )
        // console.log("ROLE, ",role);
        // console.log("EVENT: ",event.target.value);
        var _this = this;
        // this.modules = [];
        if (this.addStaffForm.value.hasRole) {
            this.roles.forEach(function (rElement) {
                if (_this.addStaffForm.value.hasRole == rElement['roleId']) {
                    _this.modules = rElement['modulesPayLoadList'];
                    for (var index = 0; index < _this.modules.length; index++) {
                        var mElement = _this.modules[index];
                        if (mElement['isCreate'] || mElement['isView'] || mElement['isUpdate'] || mElement['isDelete']) {
                            _this.modules[index]['isModule'] = true;
                        }
                        if (mElement.subModules.length) {
                            for (var subIndex = 0; subIndex < mElement.subModules.length; subIndex++) {
                                var sElement = mElement.subModules[subIndex];
                                if (sElement['isCreate'] || sElement['isView'] || sElement['isUpdate'] || sElement['isDelete']) {
                                    _this.modules[index]['subModules'][subIndex]['isSubModule'] = true;
                                }
                            }
                        }
                    }
                }
            });
        }
        console.log(this.modules);
    };
    AddStaffComponent.prototype.getDepart = function () {
        var _this = this;
        this.service.getDepartmentLIST().subscribe(function (res) {
            _this.spinner.show();
            if (res.status == 'OK') {
                _this.Department = res.object;
                // this.Did = res.object.id
                // console.log(this.Did,"did>........");
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    AddStaffComponent.prototype.getSubDepart = function (e) {
        var _this = this;
        this.dj = e;
        this.spinner.show();
        this.service.getSubDepartmentLIST(this.dj).subscribe(function (res) {
            console.log(res);
            _this.addStaffForm.patchValue({
                roleName: res.object.roleName,
            });
            if (res.status == 'OK') {
                _this.subDepart = res.object;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    AddStaffComponent.prototype.getApptRole = function (e) {
        var _this = this;
        this.dj1 = e;
        this.spinner.show();
        // console.log(this.dj1, "dj11");
        this.service.getApptRoleLIST(this.dj, this.dj1).subscribe(function (res) {
            console.log("APPT: ", res);
            if (res.status == 'OK') {
                _this.AppId = res.object;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    AddStaffComponent.prototype.roleSelected = function (e, role) {
        if (e.target.checked) {
            this.roleArr.push(role.roleId);
        }
        else {
            if (this.roleArr.includes(role.roleId)) {
                this.roleArr.splice(this.roleArr.findIndex(function (element) { return element == role.roleId; }), 1);
            }
        }
    };
    Object.defineProperty(AddStaffComponent.prototype, "f", {
        get: function () {
            return this.addStaffForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddStaffComponent.prototype.addStaff = function () {
        var _this = this;
        console.log(this.addStaffForm.value);
        if (this.addStaffForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.f.hasRole.setValue(this.roleArr.toString());
            console.log(this.addStaffForm.value);
            this.service.createStaff(this.addStaffForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.goBack();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
        // if (this.addStaffForm.invalid) {
        //   this.isError = true;
        // } else {
        //   this.spinner.show();
        //   console.log(this.addStaffForm.value.hasRole);
        //   this.service.addRole(this.addStaffForm.value).subscribe(
        //     res => {
        //       if (res.status == 'OK') {
        //         this.service.openSnackbar(res.message)
        //         this.cdref.detectChanges();
        //         this.spinner.hide();
        //         this.router.navigate(['main/admin/role']);
        //       } else {
        //         this.spinner.hide();
        //         this.service.openSnackbar(res.message)
        //       }
        //     },
        //     err => {
        //       this.spinner.hide();
        //       this.service.openSnackbar('Error Occured.')
        //       console.log(JSON.stringify(err));
        //     }
        //   )
        // }
    };
    AddStaffComponent.prototype.updateStaff = function () {
        var _this = this;
        if (this.addStaffForm.invalid) {
            this.isError = true;
        }
        else {
            this.spinner.show();
            this.f.hasRole.setValue(this.roleArr.toString());
            this.service.updateStaff(this.addStaffForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.goBack();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
                console.log(JSON.stringify(err));
            });
        }
        // if (this.addStaffForm.invalid) {
        //   this.isError = true;
        // } else {
        //   this.spinner.show()
        //   this.service.updateTRGBattalionMember(this.id, this.addStaffForm.value).subscribe(
        //     res => {
        //       if (res.status == 'OK') {
        //         this.service.openSnackbar(res.message)
        //         this.cdref.detectChanges();
        //         this.spinner.hide();
        //         this.router.navigate(['main/admin/user-access/manage-staff'])
        //       } else {
        //         this.spinner.hide()
        //         this.service.openSnackbar(res.message);
        //       }
        //     },
        //     err => {
        //       this.spinner.hide()
        //       this.service.openSnackbar('Error Occured.')
        //     }
        //   )
        // }
    };
    AddStaffComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
    ]; };
    AddStaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-staff',
            template: _raw_loader_add_staff_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_staff_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], AddStaffComponent);
    return AddStaffComponent;
}());



/***/ }),

/***/ "9jdL":
/*!****************************************************************************************!*\
  !*** ./src/app/main/admin/user-access/manage-staff/add-staff/add-staff.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".field-icon {\n  float: right;\n  margin-left: -25px;\n  margin-top: -25px;\n  position: relative;\n  z-index: 2;\n}\n\n.custom-form-check-label {\n  font-weight: 400;\n}\n\n.custom-table-1 {\n  table-layout: auto;\n}\n\n.custom-table-1 td {\n  padding: 0.25rem 0.65rem !important;\n}\n\n.custom-table-1 td .form-check-input {\n  margin-top: 0.25rem;\n}\n\n.custom-table-1 td .custom-form-check-label {\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.custom-table-1 td.w25 {\n  width: 30px !important;\n  border-bottom: 0 !important;\n}\n\n.example-section {\n  margin: 12px 0;\n}\n\n.example-margin {\n  margin: 0 12px;\n}\n\nul {\n  list-style-type: none;\n  margin-top: 4px;\n}");

/***/ }),

/***/ "Qv0w":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/user-access/manage-staff/add-staff/add-staff.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> User Access\r\n        <span class=\"sub-menu1\"> > Manage Staff > </span>\r\n        <span class=\"sub-menu1\">{{pageTitle}}</span>\r\n    </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addStaffForm\">\r\n            <!-- <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"post\">Department<span class=\"required\">*</span></label>\r\n                    <select (change)=\"getSubDepart($event.target.value)\" formControlName=\"departmentId\" class=\"form-control\">\r\n                        <option value=\"\">Select</option>\r\n                        <option *ngFor=\"let d of Department\" [value]=\"d.roleId\">{{d.roleName}}</option>\r\n                    </select>\r\n                    <span class=\"val_msg\" *ngIf=\"f.departmentId.errors && f.departmentId.errors.required && isError\">*Please\r\n                        Select\r\n                        roleName</span>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"post\">Sub Department<span class=\"required\">*</span></label>\r\n                    <select (change)=\"getApptRole($event.target.value)\" formControlName=\"subDepartmentId\"\r\n                        class=\"form-control\">\r\n                        <option value=\"\" selected hidden (click)=\"$event.preventDefault()\">Select</option>\r\n                        <option *ngFor=\"let sub of subDepart\" [value]=\"sub.subRoleId\">{{sub.subRoleName}}</option>\r\n                    </select>\r\n                    <span class=\"val_msg\"\r\n                        *ngIf=\"f.subDepartmentId.errors && f.subDepartmentId.errors.required && isError\">*Please Select\r\n                        subRoleName</span>\r\n                </div>\r\n\r\n            </div> -->\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"post\">Officer's Name<span class=\"required\">*</span></label>\r\n                    <select (change)=\"officerSelected($event.target.value)\" formControlName=\"userId\"\r\n                        class=\"form-control\">\r\n                        <option value=\"\">Select</option>\r\n                        <option *ngFor=\"let officer of officersList\" [value]=\"officer.id\">{{officer.name}}</option>\r\n                    </select>\r\n                    <span class=\"val_msg\" *ngIf=\"f.userId.errors && f.userId.errors.required && isError\">*Please Select\r\n                        Officer</span>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"post\">Battalion</label>\r\n                    <select (change)=\"battalionSelected($event.target.value)\" formControlName=\"battalionId\"\r\n                        class=\"form-control\">\r\n                        <option value=\"0\" selected>NA</option>\r\n                        <option *ngFor=\"let b of battalionsList\" [value]=\"b.id\">{{b.shortName}} Bn</option>\r\n                    </select>\r\n                    <!-- <span class=\"val_msg\"\r\n                        *ngIf=\"f.subDepartmentId.errors && f.subDepartmentId.errors.required && isError\">*Please Select\r\n                        subRoleName</span> -->\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"companyList.length\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"post\">Company</label>\r\n                    <select formControlName=\"compId\" class=\"form-control\">\r\n                        <option value=\"\" selected hidden (click)=\"$event.preventDefault()\">Select</option>\r\n                        <option *ngFor=\"let c of companyList\" [value]=\"c.id\">{{c.name}}</option>\r\n                    </select>\r\n                    <span class=\"val_msg\" *ngIf=\"f.compId.errors && f.compId.errors.required && isError\">*Please Select\r\n                        Company</span>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"name\">Username<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" class=\"form-control\" maxlength=\"100\" formControlName=\"username\"\r\n                        placeholder=\"Username\">\r\n                    <span class=\"val_msg\" *ngIf=\"f.username.errors && f.username.errors.required && isError\">*Please\r\n                        Enter\r\n                        Username</span>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Password\r\n                        <span *ngIf=\"!id\"\r\n                            class=\"required\">*</span></label>\r\n                    <input type=\"password\" class=\"form-control\" formControlName=\"password\">\r\n                    <!-- <i toggle=\"#password-field\" class=\"fa fa-eye field-icon\"></i> -->\r\n                    <span class=\"val_msg\" *ngIf=\"f.password.errors && f.password.errors.required && isError\">*Please\r\n                        Enter Password</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <!-- <div class=\"form-group col-md-6\">\r\n                    <label for=\"post\">Role<span class=\"required\">*</span></label>\r\n                    <select id=\"post\" formControlName=\"hasRole\" class=\"form-control\"\r\n                        (change)=\"setModule($event.target.value)\">\r\n                        <option value=\"0\">Select role</option>\r\n                        <option *ngFor=\"let b of roles\" [value]=\"b.roleId\">{{b.roleName}}</option>\r\n                    </select>\r\n                    <span class=\"val_msg\" *ngIf=\"f.hasRole.errors && f.hasRole.errors.required && isError\">*Please\r\n                        select role</span>\r\n                </div> -->\r\n\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"status\">Status<span class=\"required\">*</span></label>\r\n                    <select id=\"status\" formControlName=\"status\" class=\"form-control\">\r\n                        <option value=\"\" selected hidden (click)=\"$event.preventDefault()\">Select</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"\">Roles</label>\r\n                    <div *ngIf=\"!roles.length\" class=\"text-center\">\r\n                        <div class=\"spinner-border\" role=\"status\">\r\n                            <span class=\"sr-only\">Loading...</span>\r\n                        </div>\r\n                    </div>\r\n                    <section class=\"example-section\" *ngFor=\"let dept of newRolesArr;let i=index\">\r\n                        <span class=\"example-list-section\">\r\n                            <h3> {{dept.department}}</h3>\r\n                            <ul >\r\n                                <li  *ngFor=\"let role of dept.roles; let j=index\">\r\n                                    <label [for]=\"i+''+j\">\r\n                                        <input type=\"checkbox\" [id]=\"i+''+j\" [checked]=\"roleArr.includes(role.roleId)\"   (change)=\"roleSelected($event,role)\">\r\n                                        {{role.roleName ||'-'}}    \r\n                                    </label>\r\n                                </li>\r\n                            </ul>\r\n                        </span>\r\n                    </section>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"modules.length\">\r\n                <div class=\"col-12\">\r\n                    <h4 class=\"my-3\">Available Previleges</h4>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\">\r\n                    <table class=\"w-100 table table-bordered custom-table-1 mt-2\">\r\n                        <tbody>\r\n                            <ng-container *ngFor=\"let module of modules; let moduleIndex = index\">\r\n                                <tr>\r\n                                    <td colspan=\"2\">\r\n                                        <div class=\"form-check\">\r\n                                            <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"module.isModule\"\r\n                                                (click)=\"$event.preventDefault()\">\r\n                                            <label class=\"custom-form-check-label mb-0\">{{module.moduleName}}</label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-check pull-right\">\r\n                                            <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"module.isCreate\"\r\n                                                (click)=\"$event.preventDefault()\">\r\n                                            <label class=\"custom-form-check-label mb-0\">Create</label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-check pull-right\">\r\n                                            <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"module.isUpdate\"\r\n                                                (click)=\"$event.preventDefault()\">\r\n                                            <label class=\"custom-form-check-label mb-0\">Edit</label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-check pull-right\">\r\n                                            <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"module.isView\"\r\n                                                (click)=\"$event.preventDefault()\">\r\n                                            <label class=\"custom-form-check-label mb-0\">View</label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-check pull-right\">\r\n                                            <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"module.isDelete\"\r\n                                                (click)=\"$event.preventDefault()\">\r\n                                            <label class=\"custom-form-check-label mb-0\">Delete</label>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <ng-container *ngIf=\"module.isModule\">\r\n                                    <tr *ngFor=\"let subModule of module.subModules; let subModuleIndex = index\">\r\n                                        <td class=\"w25\"></td>\r\n                                        <td>\r\n                                            <div class=\"form-check\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\"\r\n                                                    [checked]=\"subModule.isSubModule\" (click)=\"$event.preventDefault()\">\r\n                                                <label\r\n                                                    class=\"custom-form-check-label mb-0\">{{subModule.subModuleName}}</label>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"form-check pull-right\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\"\r\n                                                    [checked]=\"subModule.isCreate\" (click)=\"$event.preventDefault()\">\r\n                                                <label class=\"custom-form-check-label mb-0\">Create</label>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"form-check pull-right\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\"\r\n                                                    [checked]=\"subModule.isUpdate\" (click)=\"$event.preventDefault()\">\r\n                                                <label class=\"custom-form-check-label mb-0\">Edit</label>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"form-check pull-right\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\"\r\n                                                    [checked]=\"subModule.isView\" (click)=\"$event.preventDefault()\">\r\n                                                <label class=\"custom-form-check-label mb-0\">View</label>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"form-check pull-right\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\"\r\n                                                    [checked]=\"subModule.isDelete\" (click)=\"$event.preventDefault()\">\r\n                                                <label class=\"custom-form-check-label mb-0\">Delete</label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"pull-right\">\r\n                <button class=\"mt-2\" *ngIf=\"!id\" mat-raised-button (click)=\"addStaff()\">Add</button>\r\n                <button class=\"mt-2\" *ngIf=\"id\" mat-raised-button (click)=\"updateStaff()\">Update</button>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ })

}]);