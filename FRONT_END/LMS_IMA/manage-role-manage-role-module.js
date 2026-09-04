(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-role-manage-role-module"],{

/***/ "5/dV":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/user-access/manage-role/manage-role.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <!-- <button mat-icon-button (click)=\"goBack()\"><mat-icon>chevron_left</mat-icon></button> User Access -->\r\n        User Access >\r\n        <span class=\"sub-menu1\"> Manage Role</span>\r\n    </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addRole()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element; let i = index;\">\r\n                        {{i + 1 + (myPaginator.pageIndex * myPaginator.pageSize)}}. </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- name Column -->\r\n                <ng-container matColumnDef=\"roleName\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Role Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.roleName}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\" disabled>\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n                \r\n                <!-- DEPARTMENT -->\r\n                <ng-container matColumnDef=\"department\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Department </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.department || '-'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- APPOINTMENT -->\r\n                <ng-container matColumnDef=\"appt\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Appt </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.appointment || '-'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        <a href=\"javascript:void(0)\" (click)=\"editRow(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator pageSize=\"50\" [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "Nqeo":
/*!*****************************************************************************!*\
  !*** ./src/app/main/admin/user-access/manage-role/manage-role.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ManageRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageRoleComponent", function() { return ManageRoleComponent; });
/* harmony import */ var _raw_loader_manage_role_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./manage-role.component.html */ "5/dV");
/* harmony import */ var _manage_role_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-role.component.scss */ "lXmx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_Shared_postman_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/Shared/postman-service */ "ylrG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ManageRoleComponent = /** @class */ (function () {
    function ManageRoleComponent(router, adminservice, spinner, cdref, dialog, sharedService, postmanService) {
        this.router = router;
        this.adminservice = adminservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.postmanService = postmanService;
        this.tableSource = [];
        this.displayedColumns = ['number', 'roleName', 'department', 'appt', 'status', 'action'];
    }
    ManageRoleComponent.prototype.ngOnInit = function () { };
    ManageRoleComponent.prototype.ngAfterViewInit = function () {
        this.getRole();
    };
    ManageRoleComponent.prototype.getRole = function () {
        var _this = this;
        this.spinner.show();
        this.adminservice.getRole().subscribe(function (res) {
            if (res.status == "OK") {
                _this.tableSource = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.adminservice.openSnackbar("Some Error Occured.");
        });
    };
    ManageRoleComponent.prototype.addRole = function () {
        this.router.navigate(['main/admin/user-access/manage-role/add-role']);
    };
    ManageRoleComponent.prototype.editRow = function (row) {
        this.postmanService.setRowData(row);
        this.router.navigate(['main/admin/user-access/manage-role/add-role']);
    };
    ManageRoleComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    ManageRoleComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ManageRoleComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.tableSource.slice();
        if (!sort.active || sort.direction === '') {
            this.tableSource = datalist;
            return;
        }
        this.tableSource = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'roleName': return _this.sharedService.compare(a.roleName.toLowerCase(), b.roleName.toLowerCase(), isAsc);
                case 'department': return _this.sharedService.compare(a.department.toLowerCase(), b.department.toLowerCase(), isAsc);
                case 'appt': return _this.sharedService.compare(a.appointment.toLowerCase(), b.appointment.toLowerCase(), isAsc);
                // case 'status': return this.sharedService.compare(a.status.toLowerCase(), b.status.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.tableSource);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ManageRoleComponent.prototype.goBack = function () {
        this.router.navigate(['main/admin/dashboard']);
    };
    ManageRoleComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
        { type: app_Shared_postman_service__WEBPACK_IMPORTED_MODULE_11__["PostmanService"] }
    ]; };
    ManageRoleComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }]
    };
    ManageRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-manage-role',
            template: _raw_loader_manage_role_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_manage_role_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
            app_Shared_postman_service__WEBPACK_IMPORTED_MODULE_11__["PostmanService"]])
    ], ManageRoleComponent);
    return ManageRoleComponent;
}());



/***/ }),

/***/ "T6Xa":
/*!**************************************************************************!*\
  !*** ./src/app/main/admin/user-access/manage-role/manage-role.module.ts ***!
  \**************************************************************************/
/*! exports provided: ManageRoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageRoleModule", function() { return ManageRoleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _manage_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-role.component */ "Nqeo");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _manage_role_component__WEBPACK_IMPORTED_MODULE_4__["ManageRoleComponent"]
    },
    {
        path: 'add-role',
        loadChildren: function () { return Promise.all(/*! import() | add-role-add-role-module */[__webpack_require__.e("common"), __webpack_require__.e("add-role-add-role-module")]).then(__webpack_require__.bind(null, /*! ./add-role/add-role.module */ "lfSo")).then(function (m) { return m.AddRoleModule; }); }
    },
    {
        path: 'view-role',
        loadChildren: function () { return Promise.all(/*! import() | add-role-add-role-module */[__webpack_require__.e("common"), __webpack_require__.e("add-role-add-role-module")]).then(__webpack_require__.bind(null, /*! ./add-role/add-role.module */ "lfSo")).then(function (m) { return m.AddRoleModule; }); }
    }
];
var ManageRoleModule = /** @class */ (function () {
    function ManageRoleModule() {
    }
    ManageRoleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _manage_role_component__WEBPACK_IMPORTED_MODULE_4__["ManageRoleComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]
            ]
        })
    ], ManageRoleModule);
    return ManageRoleModule;
}());



/***/ }),

/***/ "lXmx":
/*!*******************************************************************************!*\
  !*** ./src/app/main/admin/user-access/manage-role/manage-role.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);