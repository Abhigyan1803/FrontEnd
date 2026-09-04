(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["central-library-management-central-library-management-module"],{

/***/ "/UYC":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/admin/home/central-library-management/central-library-management.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CentralLibraryManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralLibraryManagementComponent", function() { return CentralLibraryManagementComponent; });
/* harmony import */ var _raw_loader_central_library_management_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./central-library-management.component.html */ "jXbb");
/* harmony import */ var _central_library_management_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./central-library-management.component.scss */ "nskZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CentralLibraryManagementComponent = /** @class */ (function () {
    function CentralLibraryManagementComponent(router, service, sharedService, cdref, spinner) {
        this.router = router;
        this.service = service;
        this.sharedService = sharedService;
        this.cdref = cdref;
        this.spinner = spinner;
        this.displayedColumns = ['number', 'name', /*'url',*/ 'visit', 'status', 'action'];
        this.centralLibraryList = [];
    }
    CentralLibraryManagementComponent.prototype.ngOnInit = function () {
    };
    CentralLibraryManagementComponent.prototype.ngAfterViewInit = function () {
        this.getCentralLbraryList();
    };
    CentralLibraryManagementComponent.prototype.getCentralLbraryList = function () {
        var _this = this;
        this.service.getCentralLibraryList().subscribe(function (res) {
            _this.spinner.show();
            console.log(res);
            if (res.status == "OK") {
                _this.centralLibraryList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.object);
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
    CentralLibraryManagementComponent.prototype.addLink = function () {
        this.router.navigate(['/main/admin/home/central-library-management/add-link']);
    };
    CentralLibraryManagementComponent.prototype.viewLink = function (a) {
        this.router.navigate(['/main/admin/home/central-library-management/view-link'], { queryParams: { id: a.id } });
    };
    CentralLibraryManagementComponent.prototype.changeCentralLibraryStatus = function (e, a) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeCentralLibraryStatus(a.id, 1).subscribe(function (res) {
                console.log("Central Library Status Changed:");
                console.log(res);
                if (res.status == 'OK') {
                    _this.service.openSnackbar("Recore Updated Successfully");
                    _this.cdref.detectChanges();
                    // this.ngAfterViewInit();
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
            this.service.changeCentralLibraryStatus(a.id, 0).subscribe(function (res) {
                console.log("Central Library Status Changed:");
                console.log(res);
                if (res.status == 'OK') {
                    _this.service.openSnackbar("Recore Updated Successfully");
                    _this.cdref.detectChanges();
                    // this.ngAfterViewInit();
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
    CentralLibraryManagementComponent.prototype.visitURL = function (l) {
        window.open(l.linkUrl, '_blank');
    };
    CentralLibraryManagementComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CentralLibraryManagementComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.centralLibraryList.slice();
        if (!sort.active || sort.direction === '') {
            this.centralLibraryList = datalist;
            return;
        }
        this.centralLibraryList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.tabName.toLowerCase(), b.tabName.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.centralLibraryList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CentralLibraryManagementComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }
    ]; };
    CentralLibraryManagementComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true },] }]
    };
    CentralLibraryManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-central-library-management',
            template: _raw_loader_central_library_management_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_central_library_management_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
    ], CentralLibraryManagementComponent);
    return CentralLibraryManagementComponent;
}());



/***/ }),

/***/ "BP10":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/admin/home/central-library-management/central-library-management.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: CentralLibraryManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralLibraryManagementModule", function() { return CentralLibraryManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _central_library_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./central-library-management.component */ "/UYC");
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
        component: _central_library_management_component__WEBPACK_IMPORTED_MODULE_4__["CentralLibraryManagementComponent"]
    },
    { path: 'add-link', loadChildren: function () { return __webpack_require__.e(/*! import() | add-link-add-link-module */ "add-link-add-link-module").then(__webpack_require__.bind(null, /*! ./add-link/add-link.module */ "pDem")).then(function (m) { return m.AddLinkModule; }); } },
    { path: 'view-link', loadChildren: function () { return __webpack_require__.e(/*! import() | add-link-add-link-module */ "add-link-add-link-module").then(__webpack_require__.bind(null, /*! ./add-link/add-link.module */ "pDem")).then(function (m) { return m.AddLinkModule; }); } },
];
var CentralLibraryManagementModule = /** @class */ (function () {
    function CentralLibraryManagementModule() {
    }
    CentralLibraryManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _central_library_management_component__WEBPACK_IMPORTED_MODULE_4__["CentralLibraryManagementComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], CentralLibraryManagementModule);
    return CentralLibraryManagementModule;
}());



/***/ }),

/***/ "jXbb":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/central-library-management/central-library-management.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Home <span class=\"sub-menu1\">> Central Library </span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n   \r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addLink()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n\r\n    <div class=\"example-container \">\r\n\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Tab Name</th>\r\n                    <td mat-cell *matCellDef=\"let a\"> {{a.tabName}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"url\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Link URL</th>\r\n                    <td mat-cell *matCellDef=\"let a\"> {{a.linkUrl}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"visit\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Visit URL</th>\r\n                    <td mat-cell *matCellDef=\"let a\"> \r\n                        <a href=\"javascript:void(0)\" (click)=\"visitURL(a)\" >\r\n                            <mat-icon>\r\n                                open_in_new\r\n                            </mat-icon>\r\n                        </a>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let a\">\r\n                        <mat-slide-toggle [checked]=\"a.status == 1\"\r\n                            (change)=\"changeCentralLibraryStatus($event,a)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let a\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewLink(a)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        \r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "nskZ":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/admin/home/central-library-management/central-library-management.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);