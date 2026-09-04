(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chart-chart-chart-module"],{

/***/ "7so3":
/*!*****************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/chart/chart/chart.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _raw_loader_chart_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./chart.component.html */ "xbNi");
/* harmony import */ var _chart_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart.component.scss */ "Ddhq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ChartComponent = /** @class */ (function () {
    function ChartComponent(spinner, cdref, _trgBattalion, router, _trgTeam, dialog) {
        this.spinner = spinner;
        this.cdref = cdref;
        this._trgBattalion = _trgBattalion;
        this.router = router;
        this._trgTeam = _trgTeam;
        this.dialog = dialog;
        this.displayedColumns = ['number', 'date', 'name', 'term', 'description', 'status', 'document', 'action'];
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent.prototype.ngAfterViewInit = function () {
        this.getChart();
    };
    ChartComponent.prototype.getChart = function () {
        var _this = this;
        this._trgTeam.getChart().subscribe(function (res) {
            if (res.status == "1") {
                _this.chartList = res.List;
                _this.chartList = _this.chartList.map(function (res) { return ({
                    id: res.id, date: res.createdAt,
                    description: res.description, document: res.document, year: res.year,
                    seasonTerm: res.seasonTerm.name,
                    name: res.name, status: res.status
                }); });
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](_this.chartList);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            }
            else {
            }
        });
    };
    ChartComponent.prototype.changeStatus = function (e, l) {
        var _this = this;
        console.log(e, l);
        this.spinner.show();
        if (e.checked) {
            this._trgTeam.changeChartStatus(l.id, 1).subscribe(function (res) {
                if (res.status == '1') {
                    _this._trgBattalion.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this._trgTeam.changeChartStatus(l.id, 0).subscribe(function (res) {
                if (res.status == '1') {
                    _this._trgBattalion.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    ChartComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
            width: '1200px', height: '600px',
            data: {
                type: 'document', url: l.document
            }
        });
    };
    ChartComponent.prototype.addChart = function () {
        if (this.router.url.includes('/main/admin/trg-team/')) {
            this.router.navigate(['/main/admin/trg-team//adventure-cell/add/chart']);
        }
        else {
            this.router.navigate(['main/trg-team/adventure-cell/add/chart']);
        }
    };
    ChartComponent.prototype.viewChart = function (id) {
        if (this.router.url.includes('/main/admin/trg-team/')) {
            this.router.navigate(['/main/admin/trg-team/adventure-cell/view/chart/' + id]);
        }
        else {
            this.router.navigate(['/main/trg-team/adventure-cell/view/chart/' + id]);
        }
    };
    ChartComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ChartComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.chartList.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = datalist;
            return;
        }
        this.chartList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'date': return _this._trgBattalion.compare(a.date, b.date, isAsc);
                case 'name': return _this._trgBattalion.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'term': return _this._trgBattalion.compare(a.seasonTerm, b.seasonTerm, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.chartList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ChartComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_7__["TrgTeamService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    ChartComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], { static: true },] }]
    };
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-chart',
            template: _raw_loader_chart_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_chart_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_7__["TrgTeamService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "Ddhq":
/*!*******************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/chart/chart/chart.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "HEgu":
/*!**************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/chart/chart/chart.module.ts ***!
  \**************************************************************************/
/*! exports provided: ChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModule", function() { return ChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart.component */ "7so3");
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
        component: _chart_component__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"]
    }
];
var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    ChartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _chart_component__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], ChartModule);
    return ChartModule;
}());



/***/ }),

/***/ "xbNi":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/adventure-cell/chart/chart/chart.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Chart <span class=\"sub-menu1\"> </span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n  \r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addChart()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr.No.</th>\r\n                        <th>Date</th>\r\n                        <th>Name</th>\r\n                        <th>Term & Year</th>\r\n                        <th>Status</th>\r\n                        <th>Document</th>\r\n                        <th>View</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                \r\n                    <ng-container>\r\n                        <tr *ngFor=\"let chart of chartList;let i=index \">\r\n                            <td>{{i+1}}</td>\r\n                            <td>{{chart.createdAt|date:'d MMMM, y'}} </td>\r\n                            <td>{{chart.name}} </td>\r\n                            <td>{{chart.seasonTerm?.name ||'na' }} - {{chart.year}} </td>\r\n                            <td>\r\n                                <mat-slide-toggle [checked]=\"chart.status == 1\"\r\n                                    (change)=\"changeStatus($event,chart)\"></mat-slide-toggle>\r\n                            </td>\r\n                            <td> <a href=\"javascript:void(0)\" (click)=\"openDoc(chart)\">\r\n                                    <mat-icon>description</mat-icon>\r\n                                </a> </td>\r\n                            <td class=\"act-btn\">\r\n                                <a href=\"javascript:void(0)\"  title=\"View Chart\" (click)=\"viewChart(chart.id)\">\r\n                                    <mat-icon>visibility</mat-icon>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                    </ng-container>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"example-container \">  \r\n        <div class=\"example-table-container\">\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"number\">\r\n            <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n            <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Date Column -->\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.date|date:'d MMMM, y'}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Description Column -->\r\n        <ng-container matColumnDef=\"description\">\r\n            <th mat-header-cell *matHeaderCellDef > Description </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Description Column -->\r\n        <ng-container matColumnDef=\"term\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Season Term </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element?.seasonTerm ||'--' }} - {{element.year}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Status Column -->\r\n        <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef> Status </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n                <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStatus($event,element)\">\r\n                </mat-slide-toggle>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Document Column -->\r\n        <ng-container matColumnDef=\"document\">\r\n            <th mat-header-cell *matHeaderCellDef > Document </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\"><mat-icon>description</mat-icon> </a>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Action Column -->\r\n        <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef > Action </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\" (click)=\"viewChart(element.id)\">\r\n                    <mat-icon >visibility</mat-icon>\r\n                </a> </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          <!-- Row shown when there is no matching data. -->\r\n          <tr class=\"mat-row\" *matNoDataRow>\r\n            <td class=\"mat-cell\" style=\"    text-align: center;\r\n        \" colspan=\"10\">No Record Found</td>\r\n        </tr>\r\n    </table>\r\n    </div>\r\n\r\n\r\n    <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n   \r\n</div>\r\n</mat-card>");

/***/ })

}]);