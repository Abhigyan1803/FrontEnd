(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-staff-manage-staff-module"],{

/***/ "Hv0u":
/*!****************************************************************************!*\
  !*** ./src/app/main/admin/user-access/manage-staff/manage-staff.module.ts ***!
  \****************************************************************************/
/*! exports provided: ManageStaffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStaffModule", function() { return ManageStaffModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _manage_staff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-staff.component */ "K7oy");
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
        component: _manage_staff_component__WEBPACK_IMPORTED_MODULE_4__["ManageStaffComponent"]
    },
    {
        path: 'add-staff',
        loadChildren: function () { return Promise.all(/*! import() | add-staff-add-staff-module */[__webpack_require__.e("common"), __webpack_require__.e("add-staff-add-staff-module")]).then(__webpack_require__.bind(null, /*! ./add-staff/add-staff.module */ "5hQV")).then(function (m) { return m.AddStaffModule; }); }
    },
    {
        path: 'view-staff',
        loadChildren: function () { return Promise.all(/*! import() | add-staff-add-staff-module */[__webpack_require__.e("common"), __webpack_require__.e("add-staff-add-staff-module")]).then(__webpack_require__.bind(null, /*! ./add-staff/add-staff.module */ "5hQV")).then(function (m) { return m.AddStaffModule; }); }
    }
];
var ManageStaffModule = /** @class */ (function () {
    function ManageStaffModule() {
    }
    ManageStaffModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _manage_staff_component__WEBPACK_IMPORTED_MODULE_4__["ManageStaffComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], ManageStaffModule);
    return ManageStaffModule;
}());



/***/ }),

/***/ "K7oy":
/*!*******************************************************************************!*\
  !*** ./src/app/main/admin/user-access/manage-staff/manage-staff.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ManageStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStaffComponent", function() { return ManageStaffComponent; });
/* harmony import */ var _raw_loader_manage_staff_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./manage-staff.component.html */ "egFU");
/* harmony import */ var _manage_staff_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-staff.component.scss */ "KSNM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ManageStaffComponent = /** @class */ (function () {
    function ManageStaffComponent(router, adminservice, spinner, cdref, dialog, sharedService) {
        this.router = router;
        this.adminservice = adminservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.displayedColumns = ['number', 'name', 'roleName', 'username', 'battalion', 'company', 'status', 'action'];
        this.PCHT = [];
        this.staffList = [];
    }
    ManageStaffComponent.prototype.ngOnInit = function () {
    };
    ManageStaffComponent.prototype.ngAfterViewInit = function () {
        // this.getRole()
        this.getStaffList();
    };
    // getRole() {
    //   this.spinner.show();
    //   this.adminservice.getRole().subscribe(res => {
    //     console.log(res);
    //     if (res.status == "OK") {
    //       this.PCHT = res.object;
    //       this.dataSource = new MatTableDataSource(res.object);
    //       this.dataSource.sort = this.sort;
    //       this.dataSource.paginator = this.paginator;
    //       this.spinner.hide();
    //       this.cdref.detectChanges();
    //       console.log(res, "=================");
    //     }
    //     else {
    //       this.spinner.hide()
    //       this.adminservice.openSnackbar(res.message)
    //     }
    //   },
    //     err => {
    //       this.spinner.hide()
    //       this.adminservice.openSnackbar("Some Error Occured.");
    //     }
    //   )
    // }
    ManageStaffComponent.prototype.getStaffList = function () {
        var _this = this;
        this.spinner.show();
        this.adminservice.getStaffList(2).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.staffList = res.object;
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
    ManageStaffComponent.prototype.addRole = function () {
        this.router.navigate(['main/admin/user-access/manage-staff/add-staff']);
    };
    ManageStaffComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    ManageStaffComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ManageStaffComponent.prototype.viewRole = function (element) {
        this.adminservice.setStaffMember(element);
        this.router.navigate(['main/admin/user-access/manage-staff/view-staff'], { queryParams: { id: element.loginId } });
    };
    ManageStaffComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "View Document", url: e.document
            }
        });
    };
    ManageStaffComponent.prototype.changeStaffStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        var status;
        if (e.checked)
            status = 1;
        else
            status = 0;
        this.adminservice.changeStaffStatus(d.loginId, status).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.adminservice.openSnackbar(res.message);
                _this.cdref.detectChanges();
                // this.ngAfterViewInit();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.adminservice.openSnackbar('Error Occured.');
        });
        this.spinner.hide();
        // if (e.checked) {
        //   this.adminservice.changeStaffStatus(d.id, 1).subscribe(
        //     res => {
        //       console.log(res);
        //       if (res.status == 'OK') {
        //         this.adminservice.openSnackbar(res.message)
        //         this.cdref.detectChanges();
        //         // this.ngAfterViewInit();
        //         this.spinner.hide()
        //       }
        //       else {
        //         this.spinner.hide()
        //         this.adminservice.openSnackbar(res.message)
        //       }
        //     },
        //     err => {
        //       this.spinner.hide();
        //       this.adminservice.openSnackbar('Error Occured.')
        //     }
        //   )
        //   this.spinner.hide();
        // }
        // else {
        //   this.adminservice.updateClubsStatus(d.id, 0).subscribe(
        //     res => {
        //       console.log(res);
        //       if (res.status == 'OK') {
        //         this.adminservice.openSnackbar(res.message)
        //         this.cdref.detectChanges();
        //         // this.ngAfterViewInit();
        //         this.spinner.hide()
        //       }
        //       else {
        //         this.spinner.hide()
        //         this.adminservice.openSnackbar(res.message)
        //       }
        //     },
        //     err => {
        //       this.spinner.hide()
        //       this.adminservice.openSnackbar('Error Occured.')
        //     }
        //   )
        //   this.spinner.hide();
        // }
    };
    ManageStaffComponent.prototype.goBack = function () {
        this.router.navigate(['main/admin/dashboard']);
    };
    ManageStaffComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.staffList.slice();
        if (!sort.active || sort.direction === '') {
            this.staffList = datalist;
            return;
        }
        this.staffList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'roleName': return _this.sharedService.compare(a.roleName.toLowerCase(), b.roleName.toLowerCase(), isAsc);
                case 'battalion': return _this.sharedService.compare(a.battalionName.toLowerCase(), b.battalionName.toLowerCase(), isAsc);
                case 'company': return _this.sharedService.compare(a.companyName.toLowerCase(), b.companyName.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.staffList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ManageStaffComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
    ]; };
    ManageStaffComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }]
    };
    ManageStaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-manage-staff',
            template: _raw_loader_manage_staff_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_manage_staff_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], ManageStaffComponent);
    return ManageStaffComponent;
}());



/***/ }),

/***/ "KSNM":
/*!*********************************************************************************!*\
  !*** ./src/app/main/admin/user-access/manage-staff/manage-staff.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "egFU":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/user-access/manage-staff/manage-staff.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">\r\n        <!-- \r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button> \r\n        -->\r\n        User Access\r\n        <span class=\"sub-menu1\"> > </span>\r\n        <span class=\"sub-menu1\">Manage Staff</span>\r\n    </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addRole()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                <!-- role Column -->\r\n                <ng-container matColumnDef=\"roleName\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Role Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.roleName}} </td>\r\n                </ng-container>\r\n                \r\n                <!-- Username Column -->\r\n                <ng-container matColumnDef=\"username\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Username Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\r\n                </ng-container>\r\n\r\n                <!-- battalion Column -->\r\n                <ng-container matColumnDef=\"battalion\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Battalion </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <span *ngIf=\"element.battalionName\">\r\n                            {{element.battalionName+' Bn'}}\r\n                        </span>\r\n                        <span *ngIf=\"!element.battalionName\">\r\n                            -\r\n                        </span>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- company Column -->\r\n                <ng-container matColumnDef=\"company\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Company </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.companyName || '-'}} </td>\r\n                </ng-container>\r\n\r\n\r\n\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStaffStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewRole(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n</mat-card>");

/***/ })

}]);