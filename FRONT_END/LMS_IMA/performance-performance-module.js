(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["performance-performance-module"],{

/***/ "DqiL":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/performance/performance.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> TRG Battalion <span class=\"sub-menu1\"> > Performance Highlight</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addPerformance()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr.No.</th>\r\n                        <th>Image</th>\r\n                        <th>Rank</th>\r\n                        <th>Name</th> \r\n                        <th>Battalion</th>\r\n                        <th>Company</th>\r\n                        <th>View</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let m of trgBattalionMembers; let i = index\">\r\n                        <td>{{i+1}} </td>\r\n                        <td><img [src]=\"m.image\" (error)=\"noImg($event)\"  width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"></td>\r\n                        <td class=\"rank-name\">{{m.rank}}</td>\r\n                        <td class=\"rank-name\">{{m.name}}</td>\r\n                        <td> {{m.battalionType.name}} </td>\r\n                        <td>{{m.battalionCompany.name}} </td>\r\n                        <td class=\"act-btn\">\r\n                            <a href=\"javascript:void(0)\" (click)=\"  viewMember(m)\" >\r\n                                <mat-icon>visibility</mat-icon>\r\n                            </a>\r\n\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Post Column -->\r\n                <ng-container matColumnDef=\"battalion\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Battalion </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.battalian?.shortName || '-'}} Bn </td>\r\n                </ng-container>\r\n                <!-- Post Column -->\r\n                <ng-container matColumnDef=\"company\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Company </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.battalionCompany|| '-'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changePerformanceStatus($event,element.id)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewPerformance(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "a28X":
/*!********************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/performance/performance.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "hNce":
/*!******************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/performance/performance.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceComponent", function() { return PerformanceComponent; });
/* harmony import */ var _raw_loader_performance_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./performance.component.html */ "DqiL");
/* harmony import */ var _performance_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./performance.component.scss */ "a28X");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PerformanceComponent = /** @class */ (function () {
    function PerformanceComponent(spinner, cdref, router, service, sharedService, dialog) {
        this.spinner = spinner;
        this.cdref = cdref;
        this.router = router;
        this.service = service;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.performanceList = [];
        this.displayedColumns = ['number', 'battalion', 'company', 'description', 'status', 'action'];
    }
    PerformanceComponent.prototype.ngOnInit = function () {
    };
    PerformanceComponent.prototype.ngAfterViewInit = function () {
        this.getPerformanceList();
    };
    PerformanceComponent.prototype.getPerformanceList = function () {
        var _this = this;
        this.spinner.show();
        this.service.getPerformanceList(0, 2).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.performanceList = res.object;
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
    PerformanceComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    PerformanceComponent.prototype.addPerformance = function () {
        this.router.navigate(['/main/admin/trg-battalion/performance/add-performance']);
    };
    PerformanceComponent.prototype.viewPerformance = function (m) {
        this.router.navigate(['/main/admin/trg-battalion/performance/view-performance'], { queryParams: { id: m.id } });
    };
    PerformanceComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    PerformanceComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.performanceList.slice();
        if (!sort.active || sort.direction === '') {
            this.performanceList = datalist;
            return;
        }
        this.performanceList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                //'name','rank','battalion'
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'rank': return _this.sharedService.compare(a.performanceRank.toLowerCase(), b.performanceRank.toLowerCase(), isAsc);
                case 'battalion': return _this.sharedService.compare(a.battalian.shortName.toLowerCase(), b.battalian.shortName.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.performanceList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    PerformanceComponent.prototype.changePerformanceStatus = function (e, id) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changePerformanceStatus(id, 1).subscribe(function (res) {
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
                _this.spinner.hide();
                _this.service.openSnackbar("Some Error Occured");
            });
        }
        else {
            this.service.changePerformanceStatus(id, 0).subscribe(function (res) {
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
                _this.spinner.hide();
                _this.service.openSnackbar("Some Error Occured");
            });
        }
    };
    PerformanceComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    PerformanceComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true },] }]
    };
    PerformanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'ms-performance',
            template: _raw_loader_performance_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_performance_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], PerformanceComponent);
    return PerformanceComponent;
}());



/***/ }),

/***/ "zI1m":
/*!***************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/performance/performance.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PerformanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceModule", function() { return PerformanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _performance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./performance.component */ "hNce");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { AddHistoryComponent } from './add-history/add-history.component';

var routes = [
    {
        path: '',
        component: _performance_component__WEBPACK_IMPORTED_MODULE_4__["PerformanceComponent"]
    },
    { path: 'add-performance', loadChildren: function () { return __webpack_require__.e(/*! import() | add-performance-add-performance-module */ "add-performance-add-performance-module").then(__webpack_require__.bind(null, /*! ./add-performance/add-performance.module */ "u0YH")).then(function (m) { return m.AddPerformanceModule; }); } },
    { path: 'view-performance', loadChildren: function () { return __webpack_require__.e(/*! import() | add-performance-add-performance-module */ "add-performance-add-performance-module").then(__webpack_require__.bind(null, /*! ./add-performance/add-performance.module */ "u0YH")).then(function (m) { return m.AddPerformanceModule; }); } },
];
var PerformanceModule = /** @class */ (function () {
    function PerformanceModule() {
    }
    PerformanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _performance_component__WEBPACK_IMPORTED_MODULE_4__["PerformanceComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], PerformanceModule);
    return PerformanceModule;
}());



/***/ })

}]);