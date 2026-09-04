(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bro-bro-bro-module"],{

/***/ "8xz2":
/*!**********************************************************!*\
  !*** ./src/app/main/trg-battalion/bro/bro/bro.module.ts ***!
  \**********************************************************/
/*! exports provided: BroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroModule", function() { return BroModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _bro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bro.component */ "LrGf");
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
        component: _bro_component__WEBPACK_IMPORTED_MODULE_4__["BroComponent"]
    },
    { path: 'add-bro', loadChildren: function () { return __webpack_require__.e(/*! import() | add-bro-add-bro-module */ "add-bro-add-bro-module").then(__webpack_require__.bind(null, /*! ../add-bro/add-bro.module */ "qS+P")).then(function (m) { return m.AddBroModule; }); } },
    { path: 'view-bro', loadChildren: function () { return __webpack_require__.e(/*! import() | add-bro-add-bro-module */ "add-bro-add-bro-module").then(__webpack_require__.bind(null, /*! ../add-bro/add-bro.module */ "qS+P")).then(function (m) { return m.AddBroModule; }); } },
];
var BroModule = /** @class */ (function () {
    function BroModule() {
    }
    BroModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _bro_component__WEBPACK_IMPORTED_MODULE_4__["BroComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            ]
        })
    ], BroModule);
    return BroModule;
}());



/***/ }),

/***/ "LrGf":
/*!*************************************************************!*\
  !*** ./src/app/main/trg-battalion/bro/bro/bro.component.ts ***!
  \*************************************************************/
/*! exports provided: BroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroComponent", function() { return BroComponent; });
/* harmony import */ var _raw_loader_bro_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./bro.component.html */ "iLZP");
/* harmony import */ var _bro_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bro.component.scss */ "y+E7");
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












var BroComponent = /** @class */ (function () {
    function BroComponent(spinner, cdref, router, _trgBattalion, sharedService, dialog) {
        this.spinner = spinner;
        this.cdref = cdref;
        this.router = router;
        this._trgBattalion = _trgBattalion;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.isAdmin = false;
        this.battalionDetails = {};
        this.displayedColumns = ['number', 'date', 'broNumber', 'document', 'status', 'action'];
    }
    BroComponent.prototype.ngOnInit = function () {
        this.userDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        if (this.router.url.includes('main/trg-battalion')) {
            this.isAdmin = false;
            this.battalionDetails = this.userDetails.battalion;
        }
        else if (this.router.url.includes('main/admin')) {
            this.isAdmin = true;
            this.displayedColumns.splice(3, 0, 'battalion');
        }
    };
    BroComponent.prototype.ngAfterViewInit = function () {
        if (this.isAdmin) {
            this.getBro("All");
        }
        else {
            this.getBro(this.battalionDetails.id);
        }
    };
    BroComponent.prototype.getBro = function (type) {
        var _this = this;
        this.spinner.show();
        this._trgBattalion.getBro(type).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.broList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](res.object);
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
    BroComponent.prototype.openDoc = function (doc) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: 'BRO Document', url: doc[0].broDocument
            }
        });
    };
    BroComponent.prototype.changeStatus = function (e, l) {
        var _this = this;
        console.log(e, l);
        this.spinner.show();
        if (e.checked) {
            this._trgBattalion.changeBroStatus(l.id, 1).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this._trgBattalion.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this._trgBattalion.changeBroStatus(l.id, 0).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this._trgBattalion.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    BroComponent.prototype.addBro = function () {
        // if(this.router.url.includes('main/trg-battalion'))
        // this.router.navigate(['/main/trg-battalion/bro/add-bro']);
        // if(this.router.url.includes('main/admin'))
        this.router.navigate([this.router.url + "/add-bro"]);
    };
    BroComponent.prototype.editBro = function (id) {
        this.router.navigate([this.router.url + "/view-bro"], { queryParams: { id: id } });
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
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.broList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    BroComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    BroComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], { static: true },] }]
    };
    BroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-bro',
            template: _raw_loader_bro_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_bro_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], BroComponent);
    return BroComponent;
}());



/***/ }),

/***/ "iLZP":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-battalion/bro/bro/bro.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> TRG Battalion <span class=\"sub-menu1\"> > BRO </span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\"   (input)=\"applyFilter($event)\" placeholder=\"Search by BRO NO. ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addBro()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>   \r\n                        <th>Sr.No.</th>    \r\n                        <th>Date</th>\r\n                        <th>Status</th>\r\n                        <th>Document</th>\r\n                        <th>View</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n             \r\n                    <ng-container>\r\n                        <tr *ngFor=\"let bro of broList ;let i=index\">\r\n                            <td>{{i+1}}</td>\r\n                            <td>{{bro.date|date}} </td>\r\n                            <td>\r\n                                <mat-slide-toggle [checked]=\"bro.status == 1\" (change)=\"changeStatus($event,bro)\" ></mat-slide-toggle>\r\n                            </td>\r\n                            <td>\r\n                                <button mat-icon-button  title=\"Open Doc\" (click)=\"openDoc(bro.broDocuments)\">\r\n                                    <mat-icon> description </mat-icon>\r\n                                </button>\r\n                            </td>\r\n                            <td class=\"act-btn\">\r\n                                <button mat-icon-button title=\"Edit Bro\" (click)=\"editBro(bro.id)\">\r\n                                    <mat-icon>visibility</mat-icon>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </ng-container>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"example-container \">  \r\n        <div class=\"example-table-container\">\r\n    <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"number\">\r\n            <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n            <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Date Column -->\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.date|date:'d MMMM, y'}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"broNumber\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> BRO Number </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.broNumber}} </td>\r\n        </ng-container>\r\n\r\n \r\n        <!-- Battalion -->\r\n        <ng-container matColumnDef=\"battalion\" *ngIf=\"isAdmin\" >\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Battalion </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element?.battalian?.shortName || '-'}} Bn </td>\r\n        </ng-container>\r\n\r\n\r\n        <!-- Status Column -->\r\n        <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef > Status </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n                <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStatus($event,element)\">\r\n                </mat-slide-toggle>\r\n            </td>\r\n        </ng-container>\r\n        <!-- Document Column -->\r\n        <ng-container matColumnDef=\"document\">\r\n            <th mat-header-cell *matHeaderCellDef > Document </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element.broDocuments)\"><mat-icon>description</mat-icon> </a>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Action Column -->\r\n        <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef > Action </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\" (click)=\"editBro(element.id)\">\r\n                    <mat-icon >visibility</mat-icon>\r\n                </a> </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          <!-- Row shown when there is no matching data. -->\r\n          <tr class=\"mat-row\" *matNoDataRow>\r\n            <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n        </tr>\r\n    </table>\r\n\r\n</div>\r\n    <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n   \r\n\r\n</mat-card>");

/***/ }),

/***/ "y+E7":
/*!***************************************************************!*\
  !*** ./src/app/main/trg-battalion/bro/bro/bro.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);