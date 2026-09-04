(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallantry-gallantry-module"],{

/***/ "2dHw":
/*!***********************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gallantry/gallantry.module.ts ***!
  \***********************************************************************************/
/*! exports provided: GallantryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallantryModule", function() { return GallantryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _gallantry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallantry.component */ "TrEO");
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
        component: _gallantry_component__WEBPACK_IMPORTED_MODULE_4__["GallantryComponent"]
    },
    { path: 'add-gallantry', loadChildren: function () { return __webpack_require__.e(/*! import() | add-gallantry-add-gallantry-module */ "add-gallantry-add-gallantry-module").then(__webpack_require__.bind(null, /*! ./add-gallantry/add-gallantry.module */ "NJdy")).then(function (m) { return m.AddGallantryModule; }); } },
    { path: 'view-gallantry', loadChildren: function () { return __webpack_require__.e(/*! import() | add-gallantry-add-gallantry-module */ "add-gallantry-add-gallantry-module").then(__webpack_require__.bind(null, /*! ./add-gallantry/add-gallantry.module */ "NJdy")).then(function (m) { return m.AddGallantryModule; }); } },
];
var GallantryModule = /** @class */ (function () {
    function GallantryModule() {
    }
    GallantryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _gallantry_component__WEBPACK_IMPORTED_MODULE_4__["GallantryComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], GallantryModule);
    return GallantryModule;
}());



/***/ }),

/***/ "AK51":
/*!****************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gallantry/gallantry.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "OIIl":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/gallantry/gallantry.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> TRG Battalion <span class=\"sub-menu1\"> > Gallantry Awardees</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addGallantry()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"image\">\r\n                    <th mat-header-cell *matHeaderCellDef> Image </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> <img [src]=\"element.image\" (error)=\"noImg($event)\"\r\n                            width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"> </td>\r\n                </ng-container>\r\n\r\n             \r\n                <ng-container matColumnDef=\"rank\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Rank </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.rank}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                   <ng-container matColumnDef=\"award\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Awards/Medals </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.award}} </td>\r\n                </ng-container>\r\n\r\n\r\n\r\n                <ng-container matColumnDef=\"battalion\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Battalion </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.battalionName}} Bn </td>\r\n                </ng-container>\r\n                <!-- Post Column -->\r\n                <ng-container matColumnDef=\"company\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Company </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.company?.name|| '-'}} </td>\r\n                </ng-container>\r\n\r\n                \r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeAwardeeStatus($event,element.id)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \r\n                        <a href=\"javascript:void(0)\" (click)=\"viewGallantry(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> \r\n                    </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator  [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "TrEO":
/*!**************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gallantry/gallantry.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GallantryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallantryComponent", function() { return GallantryComponent; });
/* harmony import */ var _raw_loader_gallantry_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./gallantry.component.html */ "OIIl");
/* harmony import */ var _gallantry_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallantry.component.scss */ "AK51");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
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











var GallantryComponent = /** @class */ (function () {
    function GallantryComponent(router, service, _trgBattalion, spinner, cdref, sharedService) {
        this.router = router;
        this.service = service;
        this._trgBattalion = _trgBattalion;
        this.spinner = spinner;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.awardeesList = [];
        this.displayedColumns = ['number', 'image', 'rank', 'name', 'award', 'battalion', 'company', 'status', 'action'];
        this.trgBattalionMembers = [];
    }
    GallantryComponent.prototype.ngOnInit = function () {
    };
    GallantryComponent.prototype.ngAfterViewInit = function () {
        this.getGallantryList();
    };
    GallantryComponent.prototype.getGallantryList = function () {
        var _this = this;
        this.spinner.show();
        this.service.getGallantryList(0, 2).subscribe(function (res) {
            console.log(res);
            if (res.status == "1") {
                _this.awardeesList = res.List;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res.List);
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
    GallantryComponent.prototype.addGallantry = function () {
        this.router.navigate(['/main/admin/trg-battalion/gallantry/add-gallantry']);
    };
    GallantryComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    GallantryComponent.prototype.viewGallantry = function (m) {
        this.router.navigate(['/main/admin/trg-battalion/gallantry/view-gallantry'], { queryParams: { id: m.id } });
    };
    GallantryComponent.prototype.changeAwardeeStatus = function (e, id) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeGallantryAwardeeStatus(id, 1).subscribe(function (res) {
                // console.log(res);
                if (res.status == '1') {
                    _this.service.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    // this.ngAfterViewInit()
                }
                else {
                    _this.service.openSnackbar(res.msg);
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.service.openSnackbar("Some Error Occured");
                _this.spinner.hide();
            });
        }
        else {
            this.service.changeGallantryAwardeeStatus(id, 0).subscribe(function (res) {
                // console.log(res);
                if (res.status == '1') {
                    _this.service.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    // this.ngAfterViewInit()
                }
                else {
                    _this.service.openSnackbar(res.msg);
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.service.openSnackbar("Some Error Occured");
                _this.spinner.hide();
            });
        }
    };
    GallantryComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    GallantryComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.awardeesList.slice();
        if (!sort.active || sort.direction === '') {
            this.awardeesList = datalist;
            return;
        }
        this.awardeesList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                //'rank', 'name', 'award', 'battalion',
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'rank': return _this.sharedService.compare(a.rank.toLowerCase(), b.rank.toLowerCase(), isAsc);
                case 'award': return _this.sharedService.compare(a.award.toLowerCase(), b.award.toLowerCase(), isAsc);
                // case 'battalion': return this.sharedService.compare(a.post.toLowerCase(), b.post.toLowerCase(), isAsc);      
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.awardeesList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    GallantryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] }
    ]; };
    GallantryComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true },] }]
    };
    GallantryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-gallantry',
            template: _raw_loader_gallantry_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_gallantry_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], GallantryComponent);
    return GallantryComponent;
}());



/***/ })

}]);