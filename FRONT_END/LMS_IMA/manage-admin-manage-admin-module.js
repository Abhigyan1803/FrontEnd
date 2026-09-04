(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-admin-manage-admin-module"],{

/***/ "+KFR":
/*!*********************************************************************************!*\
  !*** ./src/app/main/admin/user-access/manage-admin/manage-admin.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-dialog {\n  background: none;\n}\n\nbutton.btn-dark {\n  background-color: #721a0c !important;\n}\n\ntable td {\n  vertical-align: middle !important;\n  padding: 15px !important;\n}");

/***/ }),

/***/ "1WHX":
/*!****************************************************************************!*\
  !*** ./src/app/main/admin/user-access/manage-admin/manage-admin.module.ts ***!
  \****************************************************************************/
/*! exports provided: ManageAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdminModule", function() { return ManageAdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _manage_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-admin.component */ "sDOr");
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
        component: _manage_admin_component__WEBPACK_IMPORTED_MODULE_4__["ManageAdminComponent"]
    },
];
var ManageAdminModule = /** @class */ (function () {
    function ManageAdminModule() {
    }
    ManageAdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _manage_admin_component__WEBPACK_IMPORTED_MODULE_4__["ManageAdminComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], ManageAdminModule);
    return ManageAdminModule;
}());



/***/ }),

/***/ "g6y9":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/user-access/manage-admin/manage-admin.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\">\r\n      <button mat-icon-button (click)=\"goBack()\"><mat-icon>chevron_left</mat-icon></button> User Access\r\n      <span class=\"sub-menu1\"> > </span>\r\n      <span class=\"sub-menu1\">Manage Admin</span>\r\n  </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"openPopup()\" class=\"add-btton btn-dark\" >\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n        <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"name\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Name </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n              </ng-container>\r\n\r\n                <!-- name Column -->\r\n                <ng-container matColumnDef=\"username\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> User Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\r\n                </ng-container>\r\n\r\n                 <!-- Name Column -->\r\n            <!-- <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Password </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                </ng-container> -->\r\n\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    \r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeManageAdminStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Change password </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"text-left justify-content-center\" style=\"text-align:left; display:block;\" >\r\n                      <mat-icon type=\"button\" (click)=\"firstPopup(element.adminId,element.username)\" >create</mat-icon>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Action Column -->\r\n                <!-- <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewPOC(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container> -->\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n  \r\n</mat-card>\r\n\r\n\r\n\r\n\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayStyle}\">\r\n    <div class=\"modal-dialog modal-lg  custom-lg\" role=\"document\">\r\n      <div class=\"modal-content p-3\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Register User Admin</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form action=\"\" [formGroup]=\"addAdminForm\" autocomplete=\"off\">\r\n              <div class=\"mb-3 mt-3\">\r\n                <label for=\"text\" class=\"form-label\">Name:</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"name\" name=\"Name\">\r\n              </div>\r\n                <div class=\"mb-3\">\r\n                  <label for=\"text\" class=\"form-label\">User Name:</label>\r\n                  <input type=\"text\" class=\"form-control\" autocomplete=\"off\" formControlName=\"username\" id=\"user\" placeholder=\"Username\" name=\"username\">\r\n                </div>\r\n                <div class=\"mb-3\">\r\n                  <label for=\"pwd\" class=\"form-label\" >Password:</label>\r\n                  <input type=\"password\" class=\"form-control\" autocomplete=\"new-password\" id=\"pwd\" formControlName=\"password\" placeholder=\"Enter password\" name=\"pswd\">\r\n                </div>\r\n                <div class=\"mb-3\">\r\n                  <label for=\"pwd\" class=\"form-label\">Confirm Password:</label>\r\n                  <input type=\"password\" class=\"form-control\" id=\"confpwd\" formControlName=\"confirmpassword\" placeholder=\"Confirm password\" name=\"confpswd\">\r\n                </div>\r\n                <button type=\"button\" mat-raised-button (click)=\"addDetails()\">Submit</button>\r\n                <button mat-raised-button type=\"button\" class=\"btn-dark\" (click)=\"closePopup()\">Close</button>\r\n                \r\n              </form>\r\n        </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayStyles}\">\r\n    <div class=\"modal-dialog modal-lg custom-lg\" role=\"document\">\r\n      <div class=\"modal-content p-3\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Change Password</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n              <form action=\"\" [formGroup]=\"changePassForm\">\r\n                \r\n                <div class=\"mb-3 mt-3\">\r\n                  <label for=\"text\" class=\"form-label\">User Name:</label>\r\n                  <input type=\"text\" class=\"form-control\" disabled formControlName=\"username\" id=\"user\" placeholder=\"Username\" name=\"username\">\r\n                </div>\r\n                <div class=\"mb-3\">\r\n                  <label for=\"pwd\" class=\"form-label\">New Password:</label>\r\n                  <input type=\"password\" class=\"form-control\" id=\"pwd\" formControlName=\"password\" placeholder=\"Enter password\" name=\"pswd\">\r\n                </div>\r\n                <div class=\"mb-3\">\r\n                  <label for=\"pwd\" class=\"form-label\">Confirm Password:</label>\r\n                  <input type=\"password\" class=\"form-control\" id=\"confpwd\" formControlName=\"confirmpassword\" placeholder=\"Confirm password\" name=\"confpswd\">\r\n                </div>\r\n                <button type=\"button\" mat-raised-button (click)=\"updateManageAdmin()\">Submit</button>\r\n                <button mat-raised-button type=\"button\" class=\"btn-dark\" (click)=\"secondPopup()\">Close</button>\r\n                \r\n              </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "sDOr":
/*!*******************************************************************************!*\
  !*** ./src/app/main/admin/user-access/manage-admin/manage-admin.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ManageAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdminComponent", function() { return ManageAdminComponent; });
/* harmony import */ var _raw_loader_manage_admin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./manage-admin.component.html */ "g6y9");
/* harmony import */ var _manage_admin_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-admin.component.scss */ "+KFR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ManageAdminComponent = /** @class */ (function () {
    function ManageAdminComponent(router, fb, adminservice, spinner, cdref, dialog, sharedService) {
        this.router = router;
        this.fb = fb;
        this.adminservice = adminservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.awardeesList = [];
        this.displayedColumns = ['number', 'name', 'username', 'status', 'action'];
        this.POC = [];
        this.displayStyle = "none";
        this.displayStyles = "none";
        this.addAdminForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.changePassForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        /*-----------GET------------*/
        this.id = [];
        this.addAdminForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.changePassForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            adminId: ['']
        });
    }
    ManageAdminComponent.prototype.ngOnInit = function () {
    };
    ManageAdminComponent.prototype.ngAfterViewInit = function () {
        this.getAdmin();
    };
    ManageAdminComponent.prototype.goBack = function () {
        this.router.navigate(['main/admin/dashboard']);
    };
    ManageAdminComponent.prototype.getAdmin = function () {
        var _this = this;
        this.spinner.show();
        this.adminservice.getManageAdmin().subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.obj = res.object;
                _this.adminId = res.object.adminId;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
                console.log(res, "=================");
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
    /*--------ADD-------------*/
    ManageAdminComponent.prototype.addDetails = function () {
        var _this = this;
        // if (this.addAdminForm.invalid) {
        //   this.isError = true;
        //   this.adminservice.openSnackbar("Please Fill All Required Fields")
        // } else {
        var password = this.addAdminForm.value.password;
        var confirmpassword = this.addAdminForm.value.confirmpassword;
        if (password != confirmpassword) {
            this.adminservice.openSnackbar("Confirm password not matched");
            return;
        }
        console.log(this.addAdminForm.value, "=================");
        this.spinner.show();
        this.adminservice.addAdmin(this.addAdminForm.value).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.adminservice.openSnackbar(res.message);
                _this.cdref.detectChanges();
                _this.spinner.hide();
                _this.router.navigate(['/main/admin/user-access/manage-admin']);
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.adminservice.openSnackbar('Error Occured.');
            console.log(JSON.stringify(err));
        });
        // }
    };
    // noImg(e) {
    //   e.target.src = "assets/img/default_user.png"
    // }
    ManageAdminComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ManageAdminComponent.prototype.viewPOC = function (element) {
        this.router.navigate(['main/admin/user-access/manage-admin/view-user'], { queryParams: { id: element.id } });
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['main/admin/user-access/manage-admin/view-user'], { queryParams: { id: element.id } });
        //   if(this.router.url.includes('main/admin'))
        //   this.router.navigate(['main/admin/GS-Branch/stats/stats/poc/view-poc'],{queryParams:{id:element.id}})  
    };
    ManageAdminComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.POC.slice();
        if (!sort.active || sort.direction === '') {
            this.POC = datalist;
            return;
        }
        this.POC = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'description': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.POC);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ManageAdminComponent.prototype.changeManageAdminStatus = function (e, d) {
        var _this = this;
        console.log(e + '--' + d);
        this.spinner.show();
        if (e.checked) {
            this.adminservice.changeAdminStatus(d.adminId, 1).subscribe(function (res) {
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
        }
        else {
            this.adminservice.changeAdminStatus(d.adminId, 0).subscribe(function (res) {
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
        }
    };
    // changePOCStatus(e, d) {
    //   this.spinner.show();
    //   if (e.checked) {
    //     this.adminservice.changePOCStatus(d.id, 1).subscribe(
    //       res => {
    //         console.log(res);
    //         if (res.status == 'OK') {
    //           this.adminservice.openSnackbar(res.message)
    //           this.cdref.detectChanges();
    //           this.spinner.hide()
    //         }
    //         else {
    //           this.spinner.hide()
    //           this.adminservice.openSnackbar(res.message)
    //         }
    //       },
    //       err => {
    //         this.spinner.hide();
    //         this.adminservice.openSnackbar('Error Occured.')
    //       }
    //     )
    //     this.spinner.hide();
    //   }
    //   else {
    //     this.adminservice.changeCourtCasesStatus(d.id, 0).subscribe(
    //       res => {
    //         console.log(res);
    //         if (res.status == 'OK') {
    //           this.adminservice.openSnackbar(res.message)
    //           this.cdref.detectChanges();
    //           this.spinner.hide()
    //         }
    //         else {
    //           this.spinner.hide()
    //           this.adminservice.openSnackbar(res.message)
    //         }
    //       },
    //       err => {
    //         this.spinner.hide()
    //         this.adminservice.openSnackbar('Error Occured.')
    //       }
    //     )
    //     this.spinner.hide();
    //   }
    // }
    /*------------------Update-------------------*/
    ManageAdminComponent.prototype.updateManageAdmin = function () {
        var _this = this;
        this.adminservice.updateAdminPass(this.changePassForm.value).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.adminservice.openSnackbar("Error Occured.");
        });
    };
    ManageAdminComponent.prototype.openPopup = function () {
        this.displayStyle = "block";
    };
    ManageAdminComponent.prototype.closePopup = function () {
        this.displayStyle = "none";
    };
    ManageAdminComponent.prototype.firstPopup = function (adminId, username) {
        this.changePassForm.reset();
        this.changePassForm.patchValue({
            adminId: adminId,
            username: username,
        });
        this.adminId = adminId;
        this.displayStyles = "block";
    };
    ManageAdminComponent.prototype.secondPopup = function () {
        this.displayStyles = "none";
    };
    ManageAdminComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] }
    ]; };
    ManageAdminComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true },] }]
    };
    ManageAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-manage-admin',
            template: _raw_loader_manage_admin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_manage_admin_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], ManageAdminComponent);
    return ManageAdminComponent;
}());



/***/ })

}]);