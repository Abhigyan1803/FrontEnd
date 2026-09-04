(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adjutant-orders-adjutant-orders-module"],{

/***/ "+gRQ":
/*!**************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/adjutant-orders/adjutant-orders.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AdjutantOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjutantOrdersComponent", function() { return AdjutantOrdersComponent; });
/* harmony import */ var _raw_loader_adjutant_orders_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./adjutant-orders.component.html */ "YFVU");
/* harmony import */ var _adjutant_orders_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adjutant-orders.component.scss */ "vSTK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/gc/gc.service */ "yuBT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
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











var AdjutantOrdersComponent = /** @class */ (function () {
    function AdjutantOrdersComponent(gcservice, spinner, cdref, sharedService, dialog) {
        this.gcservice = gcservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.displayedColumns = ['number', 'name', 'document', 'date'];
        this.aroRecords = [];
    }
    AdjutantOrdersComponent.prototype.ngOnInit = function () {
    };
    AdjutantOrdersComponent.prototype.ngAfterViewInit = function () {
        this.getAdjutantOrders();
    };
    AdjutantOrdersComponent.prototype.getAdjutantOrders = function () {
        var _this = this;
        this.spinner.show();
        this.gcservice.getAdjutantOrders(1, true).subscribe(function (res) {
            if (res.status == "1") {
                _this.aroRecords = res.List;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.List);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
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
    AdjutantOrdersComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: 'ARO Document', url: e.document
            }
        });
    };
    AdjutantOrdersComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.aroRecords.slice();
        if (!sort.active || sort.direction === '') {
            this.aroRecords = datalist;
            return;
        }
        this.aroRecords = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'date': return _this.sharedService.compare(a.createdAt.toLowerCase(), b.createdAt.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.aroRecords);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AdjutantOrdersComponent.prototype.search = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AdjutantOrdersComponent.ctorParameters = function () { return [
        { type: app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_7__["GcService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    AdjutantOrdersComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
    };
    AdjutantOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-adjutant-orders',
            template: _raw_loader_adjutant_orders_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_adjutant_orders_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_7__["GcService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AdjutantOrdersComponent);
    return AdjutantOrdersComponent;
}());



/***/ }),

/***/ "YFVU":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/adjutant-orders/adjutant-orders.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"maincontent\">\n    <div class=\"container-fluid mt-20\">\n\n        <div class=\"mat-new\">\n            <h4 class=\"card-heading\"> ADJUTANT ORDERS </h4>\n        </div>\n\n\n        <div>\n\n\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\n\n                <ng-container matColumnDef=\"number\">\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> ARO Number </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"document\">\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\n                        <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\n                            <mat-icon>description</mat-icon>\n                        </a>\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"date\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n                    <td mat-cell *matCellDef=\"let element\">{{element.createdAt | date:'dd MMM yyyy, HH:mm' }}</td>\n                </ng-container>\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                <tr class=\"mat-row\" *matNoDataRow>\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\n                </tr>\n            </table>\n\n\n            <div class=\"\">\n                <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>");

/***/ }),

/***/ "e1Zo":
/*!***********************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/adjutant-orders/adjutant-orders.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AdjutantOrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjutantOrdersModule", function() { return AdjutantOrdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _adjutant_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adjutant-orders.component */ "+gRQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _adjutant_orders_component__WEBPACK_IMPORTED_MODULE_2__["AdjutantOrdersComponent"]
    },
];
var AdjutantOrdersModule = /** @class */ (function () {
    function AdjutantOrdersModule() {
    }
    AdjutantOrdersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _adjutant_orders_component__WEBPACK_IMPORTED_MODULE_2__["AdjutantOrdersComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ]
        })
    ], AdjutantOrdersModule);
    return AdjutantOrdersModule;
}());



/***/ }),

/***/ "vSTK":
/*!****************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/adjutant-orders/adjutant-orders.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".maincontent {\n  min-height: 45vw;\n}\n\n.mat-new {\n  clear: both;\n  padding: 10px 0;\n  display: block;\n}\n\n.mat-new h4 {\n  margin-bottom: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card {\n  margin: 1rem 0;\n}\n\n.example-container {\n  min-height: auto;\n}");

/***/ })

}]);