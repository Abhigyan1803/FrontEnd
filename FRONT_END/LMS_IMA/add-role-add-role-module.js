(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-role-add-role-module"],{

/***/ "Ov2P":
/*!*************************************************************************************!*\
  !*** ./src/app/main/admin/user-access/manage-role/add-role/add-role.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".field-icon {\n  float: right;\n  margin-left: -25px;\n  margin-top: -25px;\n  position: relative;\n  z-index: 2;\n}\n\n.custom-table-1 {\n  table-layout: auto;\n}\n\n.custom-table-1 td {\n  padding: 0.25rem 0.65rem !important;\n}\n\n.custom-table-1 td .form-check-input {\n  margin-top: 0.25rem;\n}\n\n.custom-table-1 td .custom-form-check-label {\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.custom-table-1 td.w25 {\n  width: 30px !important;\n  border-bottom: 0 !important;\n}");

/***/ }),

/***/ "j66n":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/user-access/manage-role/add-role/add-role.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\"><mat-icon>chevron_left</mat-icon></button> User Access \r\n        <span class=\"sub-menu1\"> > Manage Role > </span>\r\n        <span class=\"sub-menu1\">{{pageTitle}}</span>\r\n    </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addRoleForm\">\r\n\r\n            <!-- <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"post\">Department<span class=\"required\">*</span></label>\r\n                    <select (change)=\"getSubDepart($event.target.value)\" formControlName=\"roleId\" class=\"form-control\">\r\n                        <option value=\"\">Select</option>\r\n                        <option *ngFor=\"let d of Department\" [value]=\"d.roleId\">{{d.roleName}}</option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"post\">Sub Department<span class=\"required\">*</span></label>\r\n                    <select (change)=\"getApptRole($event.target.value)\" formControlName=\"subRoleId\"\r\n                        class=\"form-control\">\r\n                        <option value=\"\" selected hidden disabled>Select</option>\r\n                        <option *ngFor=\"let sub of subDepart\" [value]=\"sub.subRoleId\">{{sub.subRoleName}}</option>\r\n                    </select>\r\n                </div>\r\n\r\n            </div> -->\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label>Role name<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"roleName\" placeholder=\"Enter role name\">\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label>Status<span class=\"required\">*</span></label>\r\n                    <select formControlName=\"status\" class=\"form-control\">\r\n                        <option value=\"\" disabled>Select status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label>Department</label>\r\n                    <!-- <input type=\"text\"  class=\"form-control\" formControlName=\"department\" placeholder=\"Enter role name\"> -->\r\n                    <select class=\"form-control\" formControlName=\"department\" id=\"\">\r\n                        <option value=\"\" selected>NA</option>\r\n                        <option *ngFor=\"let dept of departments\" [value]=\"dept\">{{dept}} </option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label>Appointment</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"appointment\" placeholder=\"Enter role name\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <h4 class=\"my-3\">\r\n                        Manage Previleges\r\n                        <div class=\"d-inline form-check mb-0\" style=\"float: right; color: #003f78 !important; font-size: 13px;\">\r\n                            <input type=\"checkbox\" class=\"form-check-input\"\r\n                              (change)=\"selectUnselectAll($event)\">\r\n                            <label class=\"form-check-label\" style=\"position: relative; top: 3px;\">Check/Uncheck All</label>\r\n                          </div>\r\n                    </h4>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\">\r\n                    <table class=\"w-100 table table-bordered custom-table-1 mt-2\">\r\n                        <tbody>\r\n                            <ng-container *ngFor=\"let module of modules; let moduleIndex = index\">\r\n                                <tr>\r\n                                    <td colspan=\"2\">\r\n                                        <div class=\"form-check\">\r\n                                            <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"module.isModule\"\r\n                                                (change)=\"trackInputRecord(moduleIndex, 'isModule', $event)\">\r\n                                            <label class=\"custom-form-check-label mb-0\"> <b> {{module.moduleName}}</b></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-check pull-right\">\r\n                                            <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"module.isCreate\"\r\n                                                (change)=\"trackInputRecord(moduleIndex, 'isCreate', $event)\">\r\n                                            <label class=\"custom-form-check-label mb-0\"> <b> Create</b></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-check pull-right\">\r\n                                            <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"module.isUpdate\"\r\n                                                (change)=\"trackInputRecord(moduleIndex, 'isUpdate', $event)\">\r\n                                            <label class=\"custom-form-check-label mb-0\"> <b> Edit</b></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-check pull-right\">\r\n                                            <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"module.isView\"\r\n                                                (change)=\"trackInputRecord(moduleIndex, 'isView', $event)\">\r\n                                            <label class=\"custom-form-check-label mb-0\"> <b> View</b></label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"form-check pull-right\">\r\n                                            <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"module.isDelete\"\r\n                                                (change)=\"trackInputRecord(moduleIndex, 'isDelete', $event)\">\r\n                                            <label class=\"custom-form-check-label mb-0\">Delete</label>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <ng-container *ngIf=\"module.isModule\">\r\n                                    <tr *ngFor=\"let subModule of module.subModules; let subModuleIndex = index\">\r\n                                        <td class=\"w25\"></td>\r\n                                        <td>\r\n                                            <div class=\"form-check\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"subModule.isSubModule\"\r\n                                                    (change)=\"trackSubInputRecord(moduleIndex, subModuleIndex, 'isSubModule', $event)\">\r\n                                                <label class=\"custom-form-check-label mb-0\">{{subModule.subModuleName}}</label>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"form-check pull-right\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"subModule.isCreate\"\r\n                                                    (change)=\"trackSubInputRecord(moduleIndex, subModuleIndex, 'isCreate', $event)\">\r\n                                                <label class=\"custom-form-check-label mb-0\">Create</label>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"form-check pull-right\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"subModule.isUpdate\"\r\n                                                    (change)=\"trackSubInputRecord(moduleIndex, subModuleIndex, 'isUpdate', $event)\">\r\n                                                <label class=\"custom-form-check-label mb-0\">Edit</label>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"form-check pull-right\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"subModule.isView\"\r\n                                                    (change)=\"trackSubInputRecord(moduleIndex, subModuleIndex, 'isView', $event)\">\r\n                                                <label class=\"custom-form-check-label mb-0\">View</label>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"form-check pull-right\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"subModule.isDelete\"\r\n                                                    (change)=\"trackSubInputRecord(moduleIndex, subModuleIndex, 'isDelete', $event)\">\r\n                                                <label class=\"custom-form-check-label mb-0\">Delete</label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n            <button class=\"mt-2\" mat-raised-button (click)=\"manageRole()\">{{pageTitle}}</button>\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "lfSo":
/*!********************************************************************************!*\
  !*** ./src/app/main/admin/user-access/manage-role/add-role/add-role.module.ts ***!
  \********************************************************************************/
/*! exports provided: AddRoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoleModule", function() { return AddRoleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _add_role_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-role.component */ "pGuR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_role_component__WEBPACK_IMPORTED_MODULE_8__["AddRoleComponent"]
    }
];
var AddRoleModule = /** @class */ (function () {
    function AddRoleModule() {
    }
    AddRoleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_role_component__WEBPACK_IMPORTED_MODULE_8__["AddRoleComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
            ]
        })
    ], AddRoleModule);
    return AddRoleModule;
}());



/***/ }),

/***/ "pGuR":
/*!***********************************************************************************!*\
  !*** ./src/app/main/admin/user-access/manage-role/add-role/add-role.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoleComponent", function() { return AddRoleComponent; });
/* harmony import */ var _raw_loader_add_role_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-role.component.html */ "j66n");
/* harmony import */ var _add_role_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-role.component.scss */ "Ov2P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_Shared_postman_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/postman-service */ "ylrG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_Constants_Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/Constants/Constants */ "zzRl");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddRoleComponent = /** @class */ (function () {
    function AddRoleComponent(router, fb, route, service, cdref, postmanService, spinner) {
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.service = service;
        this.cdref = cdref;
        this.postmanService = postmanService;
        this.spinner = spinner;
        this.pageTitle = 'Add Role';
        this.modules = [];
        this.departments = app_Constants_Constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].DEPARTMENTS;
        this.addRoleForm = this.fb.group({
            roleId: ['0'],
            roleName: [''],
            modulesPayLoadList: [''],
            department: [''],
            appointment: [''],
            status: ['1']
        });
        var rowData = this.postmanService.getRowData();
        if (rowData.length != 0) {
            this.getAllModules(rowData.modulesPayLoadList);
            this.addRoleForm.patchValue({
                roleId: rowData.roleId,
                roleName: rowData.roleName,
                department: rowData.department,
                appointment: rowData.appointment,
                status: rowData.status,
            });
            this.pageTitle = 'Update Role';
        }
        else {
            this.getAllModules();
        }
    }
    AddRoleComponent.prototype.ngOnInit = function () { };
    AddRoleComponent.prototype.ngOnDestroy = function () {
        this.postmanService.setRowData([]);
    };
    // ngAfterViewInit() {
    //   this.getDepart();
    // }
    AddRoleComponent.prototype.getPreviousRouote = function () {
        var routeArr = this.router.url.split('/');
        var navRoute = '';
        for (var i = 0; i < routeArr.length - 1; i++) {
            if (routeArr[i]) {
                navRoute = navRoute + '/' + routeArr[i];
            }
        }
        return navRoute;
    };
    AddRoleComponent.prototype.goBack = function () {
        this.router.navigate([this.getPreviousRouote()]);
    };
    AddRoleComponent.prototype.getAllModules = function (permissions) {
        var _this = this;
        if (permissions === void 0) { permissions = []; }
        this.spinner.show();
        this.service.getAllModuleList().subscribe(function (res) {
            if (res.status == 'OK') {
                _this.modules = res.object;
                if ((_this.addRoleForm.value.roleId != 0) && (permissions.length != 0)) {
                    permissions.forEach(function (pmElement) {
                        var _loop_1 = function (index) {
                            var mElement = _this.modules[index];
                            if (pmElement['id'] == mElement['id']) {
                                if (pmElement['isCreate'] || pmElement['isView'] || pmElement['isUpdate'] || pmElement['isDelete']) {
                                    _this.modules[index]['isModule'] = true;
                                }
                                _this.modules[index]['isCreate'] = pmElement['isCreate'];
                                _this.modules[index]['isView'] = pmElement['isView'];
                                _this.modules[index]['isUpdate'] = pmElement['isUpdate'];
                                _this.modules[index]['isDelete'] = pmElement['isDelete'];
                                if (pmElement.subModules.length != 0) {
                                    pmElement.subModules.forEach(function (psElement) {
                                        for (var subIndex = 0; subIndex < mElement.subModules.length; subIndex++) {
                                            var sElement = mElement.subModules[subIndex];
                                            if (psElement['id'] == sElement['id']) {
                                                if (psElement['isCreate'] || psElement['isView'] || psElement['isUpdate'] || psElement['isDelete']) {
                                                    _this.modules[index]['subModules'][subIndex]['isSubModule'] = true;
                                                }
                                                _this.modules[index]['subModules'][subIndex]['isCreate'] = psElement['isCreate'];
                                                _this.modules[index]['subModules'][subIndex]['isView'] = psElement['isView'];
                                                _this.modules[index]['subModules'][subIndex]['isUpdate'] = psElement['isUpdate'];
                                                _this.modules[index]['subModules'][subIndex]['isDelete'] = psElement['isDelete'];
                                            }
                                        }
                                    });
                                }
                            }
                        };
                        for (var index = 0; index < _this.modules.length; index++) {
                            _loop_1(index);
                        }
                    });
                    _this.addRoleForm.patchValue({
                        modulesPayLoadList: _this.modules
                    });
                }
            }
            _this.spinner.hide();
        }, function () {
            _this.spinner.hide();
        });
    };
    AddRoleComponent.prototype.manageRole = function () {
        var _this = this;
        this.spinner.show();
        if (this.pageTitle == 'Add Role') {
            this.service.addRole(this.addRoleForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/admin/user-access/manage-role']);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function () {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
            });
        }
        else {
            this.service.updateRole(this.addRoleForm.value).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.router.navigate(['main/admin/user-access/manage-role']);
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function () {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
            });
        }
    };
    AddRoleComponent.prototype.trackInputRecord = function (index, type, e) {
        this.modules[index][type] = e.target.checked;
        if (e.target.checked == true) {
            if (type == 'isModule') {
                this.modules[index]['isView'] = e.target.checked;
            }
            else if (type == 'isCreate' || type == 'isView' || type == 'isUpdate' || type == 'isDelete') {
                this.modules[index]['isModule'] = e.target.checked;
                this.modules[index]['isView'] = e.target.checked;
            }
        }
        else {
            if ((type == 'isModule') || (type == 'isView')) {
                this.modules[index]['isModule'] = e.target.checked;
                this.modules[index]['isCreate'] = e.target.checked;
                this.modules[index]['isView'] = e.target.checked;
                this.modules[index]['isUpdate'] = e.target.checked;
                this.modules[index]['isDelete'] = e.target.checked;
                if (this.modules[index]['subModules'].length != 0) {
                    for (var subIndex = 0; subIndex < this.modules[index]['subModules'].length; subIndex++) {
                        this.modules[index]['subModules'][subIndex]['isSubModule'] = e.target.checked;
                        this.modules[index]['subModules'][subIndex]['isCreate'] = e.target.checked;
                        this.modules[index]['subModules'][subIndex]['isView'] = e.target.checked;
                        this.modules[index]['subModules'][subIndex]['isUpdate'] = e.target.checked;
                        this.modules[index]['subModules'][subIndex]['isDelete'] = e.target.checked;
                    }
                }
            }
        }
        this.addRoleForm.patchValue({
            modulesPayLoadList: this.modules
        });
    };
    AddRoleComponent.prototype.trackSubInputRecord = function (index, subIndex, type, e) {
        this.modules[index]['subModules'][subIndex][type] = e.target.checked;
        if (e.target.checked == true) {
            this.modules[index]['isModule'] = e.target.checked;
            this.modules[index]['isView'] = e.target.checked;
            if (type == 'isSubModule') {
                this.modules[index]['subModules'][subIndex]['isView'] = e.target.checked;
            }
            else if (type == 'isCreate' || type == 'isView' || type == 'isUpdate' || type == 'isDelete') {
                this.modules[index]['subModules'][subIndex]['isSubModule'] = e.target.checked;
                this.modules[index]['subModules'][subIndex]['isView'] = e.target.checked;
            }
        }
        else {
            if ((type == 'isSubModule') || (type == 'isView')) {
                this.modules[index]['subModules'][subIndex]['isSubModule'] = e.target.checked;
                this.modules[index]['subModules'][subIndex]['isCreate'] = e.target.checked;
                this.modules[index]['subModules'][subIndex]['isView'] = e.target.checked;
                this.modules[index]['subModules'][subIndex]['isUpdate'] = e.target.checked;
                this.modules[index]['subModules'][subIndex]['isDelete'] = e.target.checked;
            }
        }
        this.addRoleForm.patchValue({
            modulesPayLoadList: this.modules
        });
    };
    AddRoleComponent.prototype.selectUnselectAll = function (e) {
        for (var index = 0; index < this.modules.length; index++) {
            this.modules[index]['isModule'] = e.target.checked;
            this.modules[index]['isCreate'] = e.target.checked;
            this.modules[index]['isView'] = e.target.checked;
            this.modules[index]['isUpdate'] = e.target.checked;
            this.modules[index]['isDelete'] = e.target.checked;
            if (this.modules[index]['subModules'].length != 0) {
                for (var subIndex = 0; subIndex < this.modules[index]['subModules'].length; subIndex++) {
                    this.modules[index]['subModules'][subIndex]['isSubModule'] = e.target.checked;
                    this.modules[index]['subModules'][subIndex]['isCreate'] = e.target.checked;
                    this.modules[index]['subModules'][subIndex]['isView'] = e.target.checked;
                    this.modules[index]['subModules'][subIndex]['isUpdate'] = e.target.checked;
                    this.modules[index]['subModules'][subIndex]['isDelete'] = e.target.checked;
                }
            }
        }
    };
    AddRoleComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_Shared_postman_service__WEBPACK_IMPORTED_MODULE_6__["PostmanService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
    ]; };
    AddRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-role',
            template: _raw_loader_add_role_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_role_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            app_Shared_postman_service__WEBPACK_IMPORTED_MODULE_6__["PostmanService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], AddRoleComponent);
    return AddRoleComponent;
}());



/***/ })

}]);