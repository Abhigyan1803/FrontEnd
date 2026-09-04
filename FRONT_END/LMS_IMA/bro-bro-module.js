(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bro-bro-module"],{

/***/ "GBhr":
/*!***********************************************************!*\
  !*** ./src/app/main/adjutant-branch/bro/bro.component.ts ***!
  \***********************************************************/
/*! exports provided: BroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroComponent", function() { return BroComponent; });
/* harmony import */ var _raw_loader_bro_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./bro.component.html */ "u8Uw");
/* harmony import */ var _bro_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bro.component.scss */ "h22O");
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
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var BroComponent = /** @class */ (function () {
    function BroComponent(service, _trgBattalion, sharedService, router, cdref, spinner, dialog) {
        this.service = service;
        this._trgBattalion = _trgBattalion;
        this.sharedService = sharedService;
        this.router = router;
        this.cdref = cdref;
        this.spinner = spinner;
        this.dialog = dialog;
        this.broList = [];
        this.displayedColumns = ['number', 'date', 'broNumber', 'battalion', 'document'];
        this.battalionsList = [];
    }
    BroComponent.prototype.ngOnInit = function () {
        this.getAllBattalions();
    };
    BroComponent.prototype.ngAfterViewInit = function () {
        this.getBro("All");
    };
    BroComponent.prototype.getAllBattalions = function () {
        var _this = this;
        this._trgBattalion.getBattalionList().subscribe(function (res) {
            if (res.status == "OK") {
                _this.battalionsList = res.object;
                _this.cdref.detectChanges();
            }
        });
    };
    BroComponent.prototype.getBro = function (type) {
        var _this = this;
        this.spinner.show();
        this._trgBattalion.getBro(type).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.broList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.object);
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
            _this._trgBattalion.openSnackbar("Some Error Occured.");
        });
    };
    BroComponent.prototype.bnSelected = function (e) {
        var bn = e.target.value;
        this.getBro(bn);
    };
    BroComponent.prototype.openDoc = function (doc) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: 'BRO Document', url: doc[0].broDocument
            }
        });
    };
    BroComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    BroComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.broList.slice();
        if (!sort.active || sort.direction === '') {
            this.broList = datalist;
            return;
        }
        this.broList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'date': return _this.sharedService.compare(a.date, b.date, isAsc);
                case 'battalion': return _this.sharedService.compare(a.battalian.shortName.toLowerCase(), b.battalian.shortName.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.broList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    BroComponent.ctorParameters = function () { return [
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_3__["AdjutantService"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_12__["TrgBattalionService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }
    ]; };
    BroComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true },] }]
    };
    BroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-bro',
            template: _raw_loader_bro_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_bro_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_3__["AdjutantService"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_12__["TrgBattalionService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]])
    ], BroComponent);
    return BroComponent;
}());



/***/ }),

/***/ "h22O":
/*!*************************************************************!*\
  !*** ./src/app/main/adjutant-branch/bro/bro.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "u8Uw":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/bro/bro.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\n    <h4 class=\"card-heading\"> TRG Battalion <span class=\"sub-menu1\"> > BRO </span> </h4>\n\n</div>\n\n<mat-card>\n\n    <div class=\"d-flex btn-set\">\n        <div class=\"col-md-3\" >\n            <select name=\"\" id=\"\" class=\"form-control\" (change)=\"bnSelected($event)\" >\n                <option value=\"All\">All Battalions</option>\n                <option *ngFor=\"let bn of battalionsList\"  [value]=\"bn.id\">{{bn.shortName}} Bn</option>\n            </select>\n        </div>\n        <div class=\"search\">\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search by BRO NO. ...\" #input>\n        </div>\n    </div>\n\n    <div class=\"example-container \">\n        <div class=\"example-table-container\">\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\n\n                <!-- Position Column -->\n                <ng-container matColumnDef=\"number\">\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\n                </ng-container>\n\n                <!-- Date Column -->\n                <ng-container matColumnDef=\"date\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.date|date:'d MMMM, y'}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"broNumber\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> BRO Number </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.broNumber}} </td>\n                </ng-container>\n\n                <!-- Battalion -->\n                <ng-container matColumnDef=\"battalion\" >\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Battalion </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.battalian?.shortName || '-'}} Bn </td>\n                </ng-container>\n\n                <!-- Document Column -->\n                <ng-container matColumnDef=\"document\">\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\n                        <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element.broDocuments)\">\n                            <mat-icon>description</mat-icon>\n                        </a>\n                    </td>\n                </ng-container>\n\n              \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                <!-- Row shown when there is no matching data. -->\n                <tr class=\"mat-row\" *matNoDataRow>\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\n                </tr>\n            </table>\n\n        </div>\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\n    </div>\n\n\n</mat-card>");

/***/ }),

/***/ "vvR6":
/*!********************************************************!*\
  !*** ./src/app/main/adjutant-branch/bro/bro.module.ts ***!
  \********************************************************/
/*! exports provided: BroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroModule", function() { return BroModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _bro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bro.component */ "GBhr");
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
        component: _bro_component__WEBPACK_IMPORTED_MODULE_2__["BroComponent"],
    }
];
var BroModule = /** @class */ (function () {
    function BroModule() {
    }
    BroModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _bro_component__WEBPACK_IMPORTED_MODULE_2__["BroComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ]
        })
    ], BroModule);
    return BroModule;
}());



/***/ })

}]);