(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "+LbA":
/*!**********************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/history/history.component.ts ***!
  \**********************************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _raw_loader_history_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./history.component.html */ "X24E");
/* harmony import */ var _history_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.component.scss */ "iqFn");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_links_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/links.module */ "Uhg6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(spinner, cdref, sharedService, router, service, dialog, snackbar) {
        this.spinner = spinner;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.router = router;
        this.service = service;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.IP = app_links_module__WEBPACK_IMPORTED_MODULE_12__["Links"].IP;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.historyList = [];
        this.displayedColumns = ['number', 'image', 'description', 'battalion', 'status', 'action'];
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent.prototype.ngAfterViewInit = function () {
        this.getHistoryList();
    };
    HistoryComponent.prototype.getHistoryList = function () {
        var _this = this;
        this.spinner.show();
        this.service.getHistoryList().subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.historyList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
            }
            _this.spinner.hide();
        }, function (err) {
            _this.service.openSnackbar('Error Occured.');
            _this.spinner.hide();
        });
    };
    HistoryComponent.prototype.changeHistoryStatus = function (e, id) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.updateHistoryStatus(id, 1).subscribe(function (res) {
                // console.log(res);
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    // this.ngAfterViewInit()
                }
                else {
                    _this.service.openSnackbar(res.message);
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.service.openSnackbar("Some Error Occured");
                _this.spinner.hide();
            });
        }
        else {
            this.service.updateHistoryStatus(id, 0).subscribe(function (res) {
                // console.log(res);
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    // this.ngAfterViewInit()
                }
                else {
                    _this.service.openSnackbar(res.message);
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.service.openSnackbar("Some Error Occured");
                _this.spinner.hide();
            });
        }
    };
    HistoryComponent.prototype.addHistory = function () {
        this.router.navigate(['/main/admin/trg-battalion/history/add-history']);
    };
    HistoryComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    HistoryComponent.prototype.viewHistory = function (m) {
        this.router.navigate(['/main/admin/trg-battalion/history/view-history'], { queryParams: { id: m.id } });
    };
    HistoryComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    HistoryComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.historyList.slice();
        if (!sort.active || sort.direction === '') {
            this.historyList = datalist;
            return;
        }
        this.historyList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'description': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                case 'battalion': return _this.sharedService.compare(a.battalionType.shortName.toLowerCase(), b.battalionType.shortName.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.historyList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    HistoryComponent.prototype.openSnackbar = function (msg) {
        this.snackbar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    HistoryComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"] }
    ]; };
    HistoryComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true },] }]
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'ms-history',
            template: _raw_loader_history_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_history_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "X24E":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/history/history.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> TRG Battalion <span class=\"sub-menu1\"> > Histories</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addHistory()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr.No.</th>\r\n                        <th>Image</th>\r\n                        <th>Rank</th>\r\n                        <th>Name</th> \r\n                        <th>Battalion</th>\r\n                        <th>Company</th>\r\n                        <th>View</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let m of trgBattalionMembers; let i = index\">\r\n                        <td>{{i+1}} </td>\r\n                        <td><img [src]=\"m.image\" (error)=\"noImg($event)\"  width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"></td>\r\n                        <td class=\"rank-name\">{{m.rank}}</td>\r\n                        <td class=\"rank-name\">{{m.name}}</td>\r\n                        <td> {{m.battalionType.name}} </td>\r\n                        <td>{{m.battalionCompany.name}} </td>\r\n                        <td class=\"act-btn\">\r\n                            <a href=\"javascript:void(0)\" (click)=\"  viewMember(m)\" >\r\n                                <mat-icon>visibility</mat-icon>\r\n                            </a>\r\n\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Image Cell Column -->\r\n                <ng-container matColumnDef=\"image\">\r\n                    <th mat-header-cell *matHeaderCellDef> Image </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> <img [src]=\"IP+element.image\" (error)=\"noImg($event)\"\r\n                            width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"> </td>\r\n                </ng-container>\r\n\r\n             \r\n\r\n         \r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Post Column -->\r\n                <ng-container matColumnDef=\"battalion\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Battalion </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.battalionType?.shortName || '-'}} Bn </td>\r\n                </ng-container>\r\n              \r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeHistoryStatus($event,element.id)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewHistory(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator  #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "iqFn":
/*!************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/history/history.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "iqlg":
/*!*******************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/history/history.module.ts ***!
  \*******************************************************************************/
/*! exports provided: HistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryModule", function() { return HistoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history.component */ "+LbA");
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
        component: _history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"]
    },
    { path: 'add-history', loadChildren: function () { return __webpack_require__.e(/*! import() | add-history-add-history-module */ "add-history-add-history-module").then(__webpack_require__.bind(null, /*! ./add-history/add-history.module */ "e3oe")).then(function (m) { return m.AddHistoryModule; }); } },
    { path: 'view-history', loadChildren: function () { return __webpack_require__.e(/*! import() | add-history-add-history-module */ "add-history-add-history-module").then(__webpack_require__.bind(null, /*! ./add-history/add-history.module */ "e3oe")).then(function (m) { return m.AddHistoryModule; }); } },
];
var HistoryModule = /** @class */ (function () {
    function HistoryModule() {
    }
    HistoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], HistoryModule);
    return HistoryModule;
}());



/***/ })

}]);