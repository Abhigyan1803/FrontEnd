(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["officers-MS-adjutant-orders-adjutant-order-module"],{

/***/ "+kd4":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/officers-MS/adjutant orders/adjutant-order.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AdjutantOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjutantOrderModule", function() { return AdjutantOrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _adjutant_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adjutant-order.component */ "jzAL");
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
        component: _adjutant_order_component__WEBPACK_IMPORTED_MODULE_4__["AdjutantOrderComponent"]
    },
    { path: 'add-order', loadChildren: function () { return __webpack_require__.e(/*! import() | add-order-add-order-module */ "add-order-add-order-module").then(__webpack_require__.bind(null, /*! ../add-order/add-order.module */ "/ucw")).then(function (m) { return m.AddOrderModule; }); } },
    { path: 'view-order', loadChildren: function () { return __webpack_require__.e(/*! import() | add-order-add-order-module */ "add-order-add-order-module").then(__webpack_require__.bind(null, /*! ../add-order/add-order.module */ "/ucw")).then(function (m) { return m.AddOrderModule; }); } },
];
var AdjutantOrderModule = /** @class */ (function () {
    function AdjutantOrderModule() {
    }
    AdjutantOrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _adjutant_order_component__WEBPACK_IMPORTED_MODULE_4__["AdjutantOrderComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AdjutantOrderModule);
    return AdjutantOrderModule;
}());



/***/ }),

/***/ "Es6j":
/*!************************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/officers-MS/adjutant orders/adjutant-order.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "gy+Q":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/officers-MS/adjutant orders/adjutant-order.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Adjutant Branch <span class=\"sub-menu1\"> > Adjutant Order</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addOrder()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr.No.</th>\r\n                        <th>Name</th>\r\n                        <th>Document</th>\r\n                        <th>Status</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let e of adjutantaro; let i = index\">\r\n                        <td> {{i+1}} </td>\r\n                        <td >{{e.name}} </td>\r\n                        <td >{{e.document}} </td>\r\n                        <td>{{e.status}} </td>                   \r\n                   </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"createdAt\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n             <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"for gc\">\r\n                    <th mat-header-cell *matHeaderCellDef> Is For OC </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \r\n                       <span *ngIf=\"element.flag\" >\r\n                           <mat-icon>\r\n                            check_circle\r\n                           </mat-icon>\r\n                       </span> \r\n                    </td>\r\n                </ng-container>\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \r\n                        <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\" >\r\n                            <mat-icon>description</mat-icon>\r\n                        </a>    \r\n                    </td>\r\n                </ng-container>\r\n               \r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"orderStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewOrder(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n  \r\n</mat-card>");

/***/ }),

/***/ "jzAL":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/officers-MS/adjutant orders/adjutant-order.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AdjutantOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjutantOrderComponent", function() { return AdjutantOrderComponent; });
/* harmony import */ var _raw_loader_adjutant_order_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./adjutant-order.component.html */ "gy+Q");
/* harmony import */ var _adjutant_order_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adjutant-order.component.scss */ "Es6j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AdjutantOrderComponent = /** @class */ (function () {
    function AdjutantOrderComponent(service, router, cdref, sharedService, spinner, dialog) {
        this.service = service;
        this.router = router;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.spinner = spinner;
        this.dialog = dialog;
        this.aoList = [];
        this.displayedColumns = ['number', 'name', 'description', 'createdAt', 'for gc', 'document', 'status', 'action'];
    }
    AdjutantOrderComponent.prototype.ngOnInit = function () {
        // this.getAdjutantList()
        this.getAdjutantOrder();
    };
    AdjutantOrderComponent.prototype.ngAfterViewInit = function () {
        // this.getAllTrgDocs();
    };
    AdjutantOrderComponent.prototype.getAdjutantOrder = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAdjutantOrder(1, 2).subscribe(function (res) {
            if (res.status == "1") {
                _this.aoList = res.List;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.List);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
            }
            console.log(res);
            _this.spinner.hide();
        }, function (err) {
            _this.service.openSnackbar('Error Occured.');
            _this.spinner.hide();
        });
    };
    AdjutantOrderComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1250px', height: '650px',
            data: {
                type: 'document', title: "Adjutant Order Document", url: e.document
            }
        });
    };
    // changeorderStatus(e:any,id){}
    AdjutantOrderComponent.prototype.orderStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.orderStatus(d.id, 1).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.service.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this.service.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this.service.orderStatus(d.id, 0).subscribe(function (res) {
                console.log(res);
                if (res.status == '1') {
                    _this.service.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this.service.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    AdjutantOrderComponent.prototype.addOrder = function () {
        if (this.router.url.includes('main/adjutant-branch'))
            this.router.navigate(['/main/adjutant-branch/adjutant-orders/add-order']);
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['/main/admin/Adjutant-Branch-Management/adjutant-order/add-order']);
    };
    AdjutantOrderComponent.prototype.viewOrder = function (ob) {
        if (this.router.url.includes('main/adjutant-branch'))
            this.router.navigate(['/main/adjutant-branch/adjutant-orders/view-order'], { queryParams: { id: ob.id } });
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['/main/admin/Adjutant-Branch-Management/adjutant-order/view-order'], { queryParams: { id: ob.id } });
    };
    AdjutantOrderComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AdjutantOrderComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.aoList.slice();
        if (!sort.active || sort.direction === '') {
            this.aoList = datalist;
            return;
        }
        this.aoList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.aoList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AdjutantOrderComponent.ctorParameters = function () { return [
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_3__["AdjutantService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }
    ]; };
    AdjutantOrderComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true },] }]
    };
    AdjutantOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'adj-aro',
            template: _raw_loader_adjutant_order_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_adjutant_order_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_3__["AdjutantService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]])
    ], AdjutantOrderComponent);
    return AdjutantOrderComponent;
}());



/***/ })

}]);