(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cyber-policy-cyber-policy-module"],{

/***/ "00k0":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/cyber-policy/cyber-policy.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Home <span class=\"sub-menu1\">> Cyber Policy</span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n   \r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addCyberPolicy()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n\r\n <div class=\"example-container \">\r\n\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Tab Name</th>\r\n                    <td mat-cell *matCellDef=\"let c\"> {{c.tabName}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Document</th>\r\n                    <td mat-cell *matCellDef=\"let c\">\r\n                        <a href=\"javascript:void(0)\" (click)=\"openDoc(c)\">\r\n                            <mat-icon>description</mat-icon>\r\n                        </a>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let c\">\r\n                        <mat-slide-toggle [checked]=\"c.status == 1\"\r\n                            (change)=\"changeCyberPolicyStatus($event,c)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let c\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewCyberPolicy(c)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        \r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div> \r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "6HcA":
/*!************************************************************************!*\
  !*** ./src/app/main/admin/home/cyber-policy/cyber-policy.component.ts ***!
  \************************************************************************/
/*! exports provided: CyberPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CyberPolicyComponent", function() { return CyberPolicyComponent; });
/* harmony import */ var _raw_loader_cyber_policy_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./cyber-policy.component.html */ "00k0");
/* harmony import */ var _cyber_policy_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cyber-policy.component.scss */ "ZUX8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CyberPolicyComponent = /** @class */ (function () {
    function CyberPolicyComponent(router, service, cdref, sharedService, spinner, dialog) {
        this.router = router;
        this.service = service;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.spinner = spinner;
        this.dialog = dialog;
        this.displayedColumns = ['number', 'name', 'document', 'status', 'action'];
        this.cyberPolicyList = [];
    }
    CyberPolicyComponent.prototype.ngOnInit = function () {
    };
    CyberPolicyComponent.prototype.ngAfterViewInit = function () {
        this.getCyberPolicyList();
    };
    CyberPolicyComponent.prototype.getCyberPolicyList = function () {
        var _this = this;
        this.service.getCyberPolicyList().subscribe(function (res) {
            _this.spinner.show();
            console.log(res);
            if (res.status == "OK") {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.service.openSnackbar(res.message);
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
            _this.service.openSnackbar('Error Occured.');
        });
    };
    CyberPolicyComponent.prototype.addCyberPolicy = function () {
        this.router.navigate(['/main/admin/home/cyber-policy/add-cyber-policy']);
    };
    CyberPolicyComponent.prototype.viewCyberPolicy = function (c) {
        this.router.navigate(['/main/admin/home/cyber-policy/view-cyber-policy'], { queryParams: { id: c.id } });
    };
    CyberPolicyComponent.prototype.changeCyberPolicyStatus = function (e, c) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeCyberPolicyStatus(c.id, 1).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
            });
        }
        else {
            this.service.changeCyberPolicyStatus(c.id, 0).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
            });
        }
    };
    CyberPolicyComponent.prototype.openDoc = function (c) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: 'Cyber Policy', url: c.link
            }
        });
    };
    CyberPolicyComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CyberPolicyComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.cyberPolicyList.slice();
        if (!sort.active || sort.direction === '') {
            this.cyberPolicyList = datalist;
            return;
        }
        this.cyberPolicyList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.tabName.toLowerCase(), b.tabName.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.cyberPolicyList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CyberPolicyComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    CyberPolicyComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
    };
    CyberPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-cyber-policy',
            template: _raw_loader_cyber_policy_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_cyber_policy_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], CyberPolicyComponent);
    return CyberPolicyComponent;
}());



/***/ }),

/***/ "FpLa":
/*!*********************************************************************!*\
  !*** ./src/app/main/admin/home/cyber-policy/cyber-policy.module.ts ***!
  \*********************************************************************/
/*! exports provided: CentralLibraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralLibraryModule", function() { return CentralLibraryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _cyber_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cyber-policy.component */ "6HcA");
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
        component: _cyber_policy_component__WEBPACK_IMPORTED_MODULE_4__["CyberPolicyComponent"]
    },
    { path: 'add-cyber-policy', loadChildren: function () { return Promise.all(/*! import() | add-cyber-policy-add-cyber-policy-module */[__webpack_require__.e("common"), __webpack_require__.e("add-cyber-policy-add-cyber-policy-module")]).then(__webpack_require__.bind(null, /*! ./add-cyber-policy/add-cyber-policy.module */ "GvYF")).then(function (m) { return m.AddCyberPolicyModule; }); } },
    { path: 'view-cyber-policy', loadChildren: function () { return Promise.all(/*! import() | add-cyber-policy-add-cyber-policy-module */[__webpack_require__.e("common"), __webpack_require__.e("add-cyber-policy-add-cyber-policy-module")]).then(__webpack_require__.bind(null, /*! ./add-cyber-policy/add-cyber-policy.module */ "GvYF")).then(function (m) { return m.AddCyberPolicyModule; }); } },
];
var CentralLibraryModule = /** @class */ (function () {
    function CentralLibraryModule() {
    }
    CentralLibraryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _cyber_policy_component__WEBPACK_IMPORTED_MODULE_4__["CyberPolicyComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], CentralLibraryModule);
    return CentralLibraryModule;
}());



/***/ }),

/***/ "ZUX8":
/*!**************************************************************************!*\
  !*** ./src/app/main/admin/home/cyber-policy/cyber-policy.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);