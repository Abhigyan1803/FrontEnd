(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-state-location-state-module"],{

/***/ "2qbC":
/*!******************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/location-state/location-state.module.ts ***!
  \******************************************************************************/
/*! exports provided: LocationStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationStateModule", function() { return LocationStateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _location_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location-state.component */ "LCQ6");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _location_state_component__WEBPACK_IMPORTED_MODULE_4__["LocationStateComponent"],
    },
    { path: 'add-locationstate', loadChildren: function () { return __webpack_require__.e(/*! import() | add-location-add-location-module */ "add-location-add-location-module").then(__webpack_require__.bind(null, /*! ./add-location/add-location.module */ "RfvS")).then(function (m) { return m.AddLocationModule; }); } },
    { path: 'view-locationstate', loadChildren: function () { return __webpack_require__.e(/*! import() | add-location-add-location-module */ "add-location-add-location-module").then(__webpack_require__.bind(null, /*! ./add-location/add-location.module */ "RfvS")).then(function (m) { return m.AddLocationModule; }); } },
];
var LocationStateModule = /** @class */ (function () {
    function LocationStateModule() {
    }
    LocationStateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _location_state_component__WEBPACK_IMPORTED_MODULE_4__["LocationStateComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], LocationStateModule);
    return LocationStateModule;
}());



/***/ }),

/***/ "LCQ6":
/*!*********************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/location-state/location-state.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LocationStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationStateComponent", function() { return LocationStateComponent; });
/* harmony import */ var _raw_loader_location_state_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./location-state.component.html */ "OZ6o");
/* harmony import */ var _location_state_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-state.component.scss */ "ihNX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
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












var LocationStateComponent = /** @class */ (function () {
    function LocationStateComponent(spinner, cdref, sharedService, router, _trgBattalion, dialog) {
        this.spinner = spinner;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.router = router;
        this._trgBattalion = _trgBattalion;
        this.dialog = dialog;
        this.displayedColumns = ['number', 'createdAt', 'name', 'document', 'status', 'action'];
    }
    LocationStateComponent.prototype.ngOnInit = function () {
    };
    LocationStateComponent.prototype.ngAfterViewInit = function () {
        this.getLocationState();
    };
    LocationStateComponent.prototype.getLocationState = function () {
        var _this = this;
        this.spinner.show();
        this._trgBattalion.getLocationState().subscribe(function (res) {
            console.log(res, "loaction state");
            if (res.status == "1") {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](res.List);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
            }
            _this.spinner.hide();
        }, function (err) {
            _this._trgBattalion.openSnackbar('Error Occured.');
            _this.spinner.hide();
        });
    };
    LocationStateComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: 'Location State of Officers', url: e.document
            }
        });
    };
    LocationStateComponent.prototype.changeStatus = function (e, l) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this._trgBattalion.changeLocationStateStatus(l.id, 1).subscribe(function (res) {
                if (res.status == '1') {
                    _this._trgBattalion.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    // this.ngAfterViewInit();
                }
                else {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this._trgBattalion.changeLocationStateStatus(l.id, 0).subscribe(function (res) {
                if (res.status == '1') {
                    _this._trgBattalion.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    // this.ngAfterViewInit();
                }
                else {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
        }
    };
    LocationStateComponent.prototype.addLocationState = function () {
        if (this.router.url.includes('main/trg-battalion'))
            this.router.navigate(['/main/trg-battalion/location-state/add-locationstate']);
        if (this.router.url.includes('main/adjutant-branch'))
            this.router.navigate(['/main/adjutant-branch/officer-parade/add-locationstate']);
    };
    LocationStateComponent.prototype.editLocationState = function (ob) {
        if (this.router.url.includes('trg-battalion'))
            this.router.navigate(['/main/trg-battalion/location-state/view-locationstate'], { queryParams: { id: ob.id } });
        if (this.router.url.includes('main/adjutant-branch'))
            this.router.navigate(['/main/adjutant-branch/Officer-Parade/view-locationstate'], { queryParams: { id: ob.id } });
    };
    LocationStateComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    LocationStateComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.broList.slice();
        if (!sort.active || sort.direction === '') {
            this.broList = datalist;
            return;
        }
        this.broList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'createdAt': return _this.sharedService.compare(a.createdAt, b.createdAt, isAsc);
                case 'name': return _this.sharedService.compare(a.name, b.name, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.broList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    LocationStateComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    LocationStateComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], { static: true },] }]
    };
    LocationStateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-location-state',
            template: _raw_loader_location_state_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_location_state_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], LocationStateComponent);
    return LocationStateComponent;
}());



/***/ }),

/***/ "OZ6o":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/location-state/location-state.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Location State of Officers <span class=\"sub-menu1\"> </span> </h4>\r\n\r\n</div>\r\n\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addLocationState()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n       <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                 <!-- Date Column -->\r\n             <ng-container matColumnDef=\"createdAt\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n             <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \r\n                        <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\" >\r\n                            <mat-icon>description</mat-icon>\r\n                        </a>    \r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"editLocationState(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n  \r\n</mat-card>");

/***/ }),

/***/ "ihNX":
/*!***********************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/location-state/location-state.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);