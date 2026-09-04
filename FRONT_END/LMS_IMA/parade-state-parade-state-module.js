(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parade-state-parade-state-module"],{

/***/ "O87Z":
/*!***************************************************************************!*\
  !*** ./src/app/main/trg-battalion/parade-state/parade-state.component.ts ***!
  \***************************************************************************/
/*! exports provided: ParadeStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParadeStateComponent", function() { return ParadeStateComponent; });
/* harmony import */ var _raw_loader_parade_state_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./parade-state.component.html */ "x4ha");
/* harmony import */ var _parade_state_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parade-state.component.scss */ "R0+c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
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












var ParadeStateComponent = /** @class */ (function () {
    function ParadeStateComponent(router, _trgBattalion, sharedService, spinner, cdref, dialog) {
        this.router = router;
        this._trgBattalion = _trgBattalion;
        this.sharedService = sharedService;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.paredList = [];
        this.displayedColumns = ['number', 'createdAt', 'name', 'document', 'status', 'action'];
        this.trgBattalionMembers = [];
    }
    ParadeStateComponent.prototype.ngOnInit = function () {
    };
    ParadeStateComponent.prototype.ngAfterViewInit = function () {
        this.getParadeState();
    };
    ParadeStateComponent.prototype.getParadeState = function () {
        var _this = this;
        this.spinner.show();
        this._trgBattalion.getParadeState().subscribe(function (res) {
            if (res.status == "1") {
                _this.paredList = res.List;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res.List);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
            }
            console.log(res);
            _this.spinner.hide();
        }, function (err) {
            _this._trgBattalion.openSnackbar('Error Occured.');
            _this.spinner.hide();
        });
    };
    ParadeStateComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Pared State of OCs", url: e.document
            }
        });
    };
    ParadeStateComponent.prototype.paradeStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this._trgBattalion.changeParadeStateStatus(d.id, 1).subscribe(function (res) {
                console.log(res);
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
            this._trgBattalion.changeParadeStateStatus(d.id, 0).subscribe(function (res) {
                console.log(res);
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
    ParadeStateComponent.prototype.addParadeState = function () {
        if (this.router.url.includes('trg-battalion'))
            this.router.navigate(['/main/trg-battalion/parade-state/add-paradestate']);
        if (this.router.url.includes('admin'))
            this.router.navigate(['/main/admin/trg-battalion/parade-state/add-paradestate']);
    };
    ParadeStateComponent.prototype.viewDrill = function (ob) {
        if (this.router.url.includes('trg-battalion'))
            this.router.navigate(['/main/trg-battalion/parade-state/view-paradestate'], { queryParams: { id: ob.id } });
        if (this.router.url.includes('admin'))
            this.router.navigate(['/main/admin/trg-battalion/parade-state/view-paradestate'], { queryParams: { id: ob.id } });
    };
    ParadeStateComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ParadeStateComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.paredList.slice();
        if (!sort.active || sort.direction === '') {
            this.paredList = datalist;
            return;
        }
        this.paredList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'createdAt': return _this.sharedService.compare(a.createdAt, b.createdAt, isAsc);
                case 'name': return _this.sharedService.compare(a.name, b.name, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.paredList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ParadeStateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_9__["TrgBattalionService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
    ]; };
    ParadeStateComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true },] }]
    };
    ParadeStateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-parade-state',
            template: _raw_loader_parade_state_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_parade_state_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_9__["TrgBattalionService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], ParadeStateComponent);
    return ParadeStateComponent;
}());



/***/ }),

/***/ "R0+c":
/*!*****************************************************************************!*\
  !*** ./src/app/main/trg-battalion/parade-state/parade-state.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "SPhh":
/*!************************************************************************!*\
  !*** ./src/app/main/trg-battalion/parade-state/parade-state.module.ts ***!
  \************************************************************************/
/*! exports provided: ParadeStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParadeStateModule", function() { return ParadeStateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _parade_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parade-state.component */ "O87Z");
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
        component: _parade_state_component__WEBPACK_IMPORTED_MODULE_4__["ParadeStateComponent"],
    },
    { path: 'add-paradestate', loadChildren: function () { return __webpack_require__.e(/*! import() | add-parade-add-parade-module */ "add-parade-add-parade-module").then(__webpack_require__.bind(null, /*! ./add-parade/add-parade.module */ "dXeJ")).then(function (m) { return m.AddParadeModule; }); } },
    { path: 'view-paradestate', loadChildren: function () { return __webpack_require__.e(/*! import() | add-parade-add-parade-module */ "add-parade-add-parade-module").then(__webpack_require__.bind(null, /*! ./add-parade/add-parade.module */ "dXeJ")).then(function (m) { return m.AddParadeModule; }); } },
];
var ParadeStateModule = /** @class */ (function () {
    function ParadeStateModule() {
    }
    ParadeStateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _parade_state_component__WEBPACK_IMPORTED_MODULE_4__["ParadeStateComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], ParadeStateModule);
    return ParadeStateModule;
}());



/***/ }),

/***/ "x4ha":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-battalion/parade-state/parade-state.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\">\r\n    TRG Battalion<span class=\"sub-menu1\"> >  Parade State of OCs</span>\r\n  </h4>\r\n</div>\r\n\r\n<mat-card>\r\n  <div class=\"d-flex btn-set\">\r\n    <div class=\"search\">\r\n      <input\r\n        class=\"search_input\"\r\n        (input)=\"applyFilter($event)\"\r\n        placeholder=\"Search ...\"\r\n        #input\r\n      />\r\n    </div>\r\n    <button mat-raised-button (click)=\"addParadeState()\" class=\"add-btton\">\r\n      <mat-icon>add</mat-icon> Add\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"example-container\">\r\n    <div class=\"example-table-container\">\r\n      <table\r\n        mat-table\r\n        [dataSource]=\"dataSource\"\r\n        (matSortChange)=\"sortData($event)\"\r\n        matSort\r\n      >\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"number\">\r\n          <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n          <td mat-cell *matCellDef=\"let element; let i = index\">\r\n            {{ i + 1 + myPaginator.pageIndex * myPaginator.pageSize }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <!-- name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n          <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\r\n        </ng-container>\r\n\r\n        <!-- Date Column -->\r\n        <ng-container matColumnDef=\"createdAt\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            {{ element.createdAt | date: \"d MMMM, y\" }}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <!-- Description Column -->\r\n        <ng-container matColumnDef=\"document\">\r\n          <th mat-header-cell *matHeaderCellDef>Document</th>\r\n          <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n            <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n              <mat-icon>description</mat-icon>\r\n            </a>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <!-- Status Column -->\r\n        <ng-container matColumnDef=\"status\">\r\n          <th mat-header-cell *matHeaderCellDef>Status</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <mat-slide-toggle\r\n              [checked]=\"element.status == 1\"\r\n              (change)=\"paradeStatus($event, element)\"\r\n            >\r\n            </mat-slide-toggle>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <!-- Action Column -->\r\n        <ng-container matColumnDef=\"action\">\r\n          <th mat-header-cell *matHeaderCellDef>View</th>\r\n          <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n            <a href=\"javascript:void(0)\" (click)=\"viewDrill(element)\">\r\n              <mat-icon>visibility</mat-icon>\r\n            </a>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr\r\n          mat-header-row\r\n          *matHeaderRowDef=\"displayedColumns; sticky: true\"\r\n        ></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n        <tr class=\"mat-row\" *matNoDataRow>\r\n          <td class=\"mat-cell\" style=\"text-align: center\" colspan=\"10\">\r\n            No Record Found\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n    <mat-paginator\r\n      #myPaginator\r\n      [pageSizeOptions]=\"[10, 20, 50, 100]\"\r\n      showFirstLastButtons\r\n    ></mat-paginator>\r\n  </div>\r\n</mat-card>\r\n");

/***/ })

}]);