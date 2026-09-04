(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forecast-of-trg-events-forecast-of-trg-events-module"],{

/***/ "bc9r":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/trg-calendar/forecast-of-trg-events/forecast-of-trg-events.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "f4Dr":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/trg-calendar/forecast-of-trg-events/forecast-of-trg-events.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ForecastOfTrgEventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastOfTrgEventsModule", function() { return ForecastOfTrgEventsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _forecast_of_trg_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forecast-of-trg-events.component */ "idY6");
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
        component: _forecast_of_trg_events_component__WEBPACK_IMPORTED_MODULE_4__["ForecastOfTrgEventsComponent"]
    },
    {
        path: 'add-forecast',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-forecast-add-forecast-module */ "add-forecast-add-forecast-module").then(__webpack_require__.bind(null, /*! ./add-forecast/add-forecast.module */ "ybyZ")).then(function (m) { return m.AddForecastModule; }); },
    },
    {
        path: 'view-forecast',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-forecast-add-forecast-module */ "add-forecast-add-forecast-module").then(__webpack_require__.bind(null, /*! ./add-forecast/add-forecast.module */ "ybyZ")).then(function (m) { return m.AddForecastModule; }); },
    }
];
var ForecastOfTrgEventsModule = /** @class */ (function () {
    function ForecastOfTrgEventsModule() {
    }
    ForecastOfTrgEventsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _forecast_of_trg_events_component__WEBPACK_IMPORTED_MODULE_4__["ForecastOfTrgEventsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], ForecastOfTrgEventsModule);
    return ForecastOfTrgEventsModule;
}());



/***/ }),

/***/ "gmoI":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/trg-calendar/forecast-of-trg-events/forecast-of-trg-events.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> GSO-2(PGME)<span class=\"sub-menu1\"> > TRG Calendar > Forecast of TRG Events </span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n  \r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addForecast()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr.No.</th>\r\n                        <th>Date</th>\r\n                        <th>Week</th>\r\n                        <th>Season Term</th>\r\n                        <th>Status</th>\r\n                        <th>View</th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let f of forecastsList;let i=index\">\r\n                        <td>{{i+1}}</td>\r\n                        <td>{{f.date | date:'d, MMMM, y'}}</td>\r\n                        <td>Week - {{f.week}} </td>\r\n                        <td> {{f.sessionTerm}}-{{f.year || '-'}} </td>\r\n                        \r\n                        <td> <mat-slide-toggle [checked]=\"f.status == 1\" (change)=\"changeStatus($event,f)\" ></mat-slide-toggle></td>\r\n                        <td class=\"act-btn\"> <a href=\"javascript:void(0)\" (click)=\"viewForecast(f)\" > <mat-icon>visibility</mat-icon>  </a> </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.date|date:'d MMMM, y, EEEE'}} </td>\r\n                </ng-container>\r\n\r\n             \r\n\r\n                <!-- Season Term Column -->\r\n                <ng-container matColumnDef=\"seasonTerm\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Season Term </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.sessionTerm}}-{{element?.year || '-'}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Week Column -->\r\n                <ng-container matColumnDef=\"week\" >\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Week </th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element.week || '-'}} </td>\r\n                </ng-container>\r\n\r\n                 <!-- Description Column -->\r\n                 <ng-container matColumnDef=\"description\" >\r\n                    <th mat-header-cell *matHeaderCellDef > Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element.description}} </td>\r\n                </ng-container>\r\n\r\n             <!-- For Gc or Not -->\r\n             <!-- <ng-container matColumnDef=\"isGcLec\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> For OC </th>\r\n                <td mat-cell *matCellDef=\"let element\"> \r\n                    \r\n                <span *ngIf=\"element.isGcLec\" >For C Lec</span>\r\n                </td>\r\n            </ng-container> -->\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \r\n                        <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\" >\r\n                            <mat-icon>description</mat-icon>\r\n                        </a>    \r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewForecast(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> \r\n                    </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "idY6":
/*!********************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/trg-calendar/forecast-of-trg-events/forecast-of-trg-events.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ForecastOfTrgEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastOfTrgEventsComponent", function() { return ForecastOfTrgEventsComponent; });
/* harmony import */ var _raw_loader_forecast_of_trg_events_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./forecast-of-trg-events.component.html */ "gmoI");
/* harmony import */ var _forecast_of_trg_events_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast-of-trg-events.component.scss */ "bc9r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
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












var ForecastOfTrgEventsComponent = /** @class */ (function () {
    function ForecastOfTrgEventsComponent(router, spinner, cdref, _trgBattalion, service, dialog) {
        this.router = router;
        this.spinner = spinner;
        this.cdref = cdref;
        this._trgBattalion = _trgBattalion;
        this.service = service;
        this.dialog = dialog;
        this.displayedColumns = ['number', 'date', 'seasonTerm', 'week', 'description', 'document', 'status', 'action'];
        this.forecastsList = [];
    }
    ForecastOfTrgEventsComponent.prototype.ngOnInit = function () {
    };
    ForecastOfTrgEventsComponent.prototype.ngAfterViewInit = function () {
        this.getAllForecasts();
    };
    ForecastOfTrgEventsComponent.prototype.getAllForecasts = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllForecast(2).subscribe(function (res) {
            if (res.status == 'OK') {
                console.log(res);
                _this.forecastsList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
            }
            else {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this._trgBattalion.openSnackbar('Error Occured.');
        });
    };
    ForecastOfTrgEventsComponent.prototype.addForecast = function () {
        this.router.navigate(['main/trg-team/gso-2-pgme/trg-calendar/forecast/add-forecast']);
    };
    ForecastOfTrgEventsComponent.prototype.viewForecast = function (p) {
        this.router.navigate(['main/trg-team/gso-2-pgme/trg-calendar/forecast/view-forecast'], { queryParams: { id: p.id } });
    };
    ForecastOfTrgEventsComponent.prototype.changeStatus = function (e, f) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeForecastStatus(f.id, 1).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar("Status Changed Successfully.");
                }
                else {
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Error Occured.");
            });
        }
        else {
            this.service.changeForecastStatus(f.id, 0).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar("Status Changed Successfully.");
                }
                else {
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Error Occured.");
            });
        }
    };
    ForecastOfTrgEventsComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Forcast-Event Document", url: e.locationImage
            }
        });
    };
    ForecastOfTrgEventsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ForecastOfTrgEventsComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.forecastsList.slice();
        if (!sort.active || sort.direction === '') {
            this.forecastsList = datalist;
            return;
        }
        this.forecastsList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'date': return _this._trgBattalion.compare(a.date, b.date, isAsc);
                case 'seasonTerm': return _this._trgBattalion.compare(a.sessionTerm, b.sessionTerm, isAsc);
                case 'week': return _this._trgBattalion.compare(a.week, b.week, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.forecastsList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ForecastOfTrgEventsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_10__["TrgBattalionService"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__["TrgTeamService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    ForecastOfTrgEventsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true },] }]
    };
    ForecastOfTrgEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-forecast-of-trg-events',
            template: _raw_loader_forecast_of_trg_events_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_forecast_of_trg_events_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_10__["TrgBattalionService"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__["TrgTeamService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ForecastOfTrgEventsComponent);
    return ForecastOfTrgEventsComponent;
}());



/***/ })

}]);