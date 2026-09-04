(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-record-service-record-module"],{

/***/ "+03s":
/*!*************************************************************************!*\
  !*** ./src/app/main/admin/service-record/service-record.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "VbJE":
/*!***********************************************************************!*\
  !*** ./src/app/main/admin/service-record/service-record.component.ts ***!
  \***********************************************************************/
/*! exports provided: ServiceRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRecordComponent", function() { return ServiceRecordComponent; });
/* harmony import */ var _raw_loader_service_record_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./service-record.component.html */ "lK2h");
/* harmony import */ var _service_record_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-record.component.scss */ "+03s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ServiceRecordComponent = /** @class */ (function () {
    function ServiceRecordComponent(spinner, cdref, sharedService, router, service, dialog) {
        this.spinner = spinner;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.router = router;
        this.service = service;
        this.dialog = dialog;
        this.recordsOfServiceList = [];
        this.displayedColumns = ['number', 'rankName', 'name', 'personalNumber', 'idCardNo', 'status', 'view'];
    }
    ServiceRecordComponent.prototype.ngOnInit = function () {
    };
    ServiceRecordComponent.prototype.ngAfterViewInit = function () {
        this.getRecordsOfServiceList();
    };
    ServiceRecordComponent.prototype.getRecordsOfServiceList = function () {
        var _this = this;
        this.spinner.show();
        this.service.getRecordOfServiceList(2).subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                _this.recordsOfServiceList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.service.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.service.openSnackbar("Some Error Occured.");
        });
    };
    ServiceRecordComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_cadet_img.jpg";
    };
    ServiceRecordComponent.prototype.changeOfficerStatus = function (e, c) {
        var _this = this;
        this.spinner.show();
        var s;
        if (e.checked) {
            s = 1;
        }
        else {
            s = 0;
        }
        this.service.changeOfficerStats(c.id, s).subscribe(function (res) {
            if (res.status == 'OK') {
                _this.service.openSnackbar(res.message);
                _this.cdref.detectChanges();
                // this.ngAfterViewInit();
                _this.spinner.hide();
            }
        }, function (err) {
            _this.service.openSnackbar('Error Occured.');
        });
    };
    ServiceRecordComponent.prototype.addRecordOfService = function () {
        // if(this.router.url.includes('/main/admin/record')){
        //   this.router.navigate(['/main/admin/record/add-record'])
        // } else if(this.router.url.includes('/main/adjutant-branch/record')) {
        //   this.router.navigate(['/main/adjutant-branch/record/add-record'])
        // }
        this.router.navigate([this.router.url + "/add-record"]);
    };
    ServiceRecordComponent.prototype.viewRecordOfService = function (c) {
        // if(this.router.url.includes('/main/admin/record')){
        //   this.router.navigate(['/main/admin/record/view-record'], { queryParams: { id: c.id } })
        // } else if(this.router.url.includes('/main/adjutant-branch/record')) {
        //   this.router.navigate(['/main/adjutant-branch/view-record'], { queryParams: { id: c.id } })
        // }
        this.router.navigate([this.router.url + "/view-record"], { queryParams: { id: c.id } });
    };
    ServiceRecordComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ServiceRecordComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.recordsOfServiceList.slice();
        if (!sort.active || sort.direction === '') {
            this.recordsOfServiceList = datalist;
            return;
        }
        this.recordsOfServiceList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'rankName': return _this.sharedService.compare(a.rankName.toLowerCase(), b.rankName.toLowerCase(), isAsc);
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'personalNumber': return _this.sharedService.compare(a.personalNumber.toLowerCase(), b.personalNumber.toLowerCase(), isAsc);
                case 'idCardNo': return _this.sharedService.compare(a.idCardNo.toLowerCase(), b.idCardNo.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.recordsOfServiceList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ServiceRecordComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    ServiceRecordComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }]
    };
    ServiceRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-service-record',
            template: _raw_loader_service_record_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_service_record_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ServiceRecordComponent);
    return ServiceRecordComponent;
}());



/***/ }),

/***/ "Vn44":
/*!********************************************************************!*\
  !*** ./src/app/main/admin/service-record/service-record.module.ts ***!
  \********************************************************************/
/*! exports provided: ServiceRecordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRecordModule", function() { return ServiceRecordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_record_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service-record.component */ "VbJE");
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
        component: _service_record_component__WEBPACK_IMPORTED_MODULE_4__["ServiceRecordComponent"]
    },
    { path: 'add-record', loadChildren: function () { return __webpack_require__.e(/*! import() | add-record-add-record-module */ "add-record-add-record-module").then(__webpack_require__.bind(null, /*! ./add-record/add-record.module */ "6iTL")).then(function (m) { return m.AddRecordModule; }); } },
    { path: 'view-record', loadChildren: function () { return __webpack_require__.e(/*! import() | add-record-add-record-module */ "add-record-add-record-module").then(__webpack_require__.bind(null, /*! ./add-record/add-record.module */ "6iTL")).then(function (m) { return m.AddRecordModule; }); } },
];
var ServiceRecordModule = /** @class */ (function () {
    function ServiceRecordModule() {
    }
    ServiceRecordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _service_record_component__WEBPACK_IMPORTED_MODULE_4__["ServiceRecordComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], ServiceRecordModule);
    return ServiceRecordModule;
}());



/***/ }),

/***/ "lK2h":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/service-record/service-record.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">Record of Service <span class=\"sub-menu1\"></span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n            </div>\r\n        <button mat-raised-button (click)=\"addRecordOfService()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let c;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"rankName\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header > Rank </th>\r\n                    <td mat-cell *matCellDef=\"let o\">\r\n                        {{o.rankName}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let o\">\r\n                        {{o.name}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"personalNumber\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Personal Number </th>\r\n                    <td mat-cell *matCellDef=\"let o\">\r\n                        {{o.personalNumber}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"idCardNo\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> ID Card Number </th>\r\n                    <td mat-cell *matCellDef=\"let o\">\r\n                        {{o.idCardNo}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef > Status </th>\r\n                    <td mat-cell *matCellDef=\"let o\">\r\n                        <mat-slide-toggle [checked]=\"o.status == 1\" (change)=\"changeOfficerStatus($event,o)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <ng-container matColumnDef=\"view\">\r\n                    <th mat-header-cell *matHeaderCellDef> View </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewRecordOfService(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator (page)=\"ngAfterViewInit()\" [length]=\"100\" [pageSizeOptions]=\"[10,20,50,100]\"\r\n            showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n</mat-card>");

/***/ })

}]);