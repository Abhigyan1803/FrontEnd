(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallantry-awards-gallantry-awards-module"],{

/***/ "Rxzo":
/*!******************************************************************************************!*\
  !*** ./src/app/main/admin/home/hall-of-fame/gallantry-awards/gallantry-awards.module.ts ***!
  \******************************************************************************************/
/*! exports provided: GallantryAwardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallantryAwardsModule", function() { return GallantryAwardsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _gallantry_awards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallantry-awards.component */ "g/vt");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _gallantry_awards_component__WEBPACK_IMPORTED_MODULE_5__["GallantryAwardsComponent"]
    },
    { path: 'add-gallantry-awardee', loadChildren: function () { return __webpack_require__.e(/*! import() | add-awardee-add-awardee-module */ "add-awardee-add-awardee-module").then(__webpack_require__.bind(null, /*! ./add-awardee/add-awardee.module */ "yGEA")).then(function (m) { return m.AddAwardeeModule; }); } },
    { path: 'view-gallantry-awardee', loadChildren: function () { return __webpack_require__.e(/*! import() | add-awardee-add-awardee-module */ "add-awardee-add-awardee-module").then(__webpack_require__.bind(null, /*! ./add-awardee/add-awardee.module */ "yGEA")).then(function (m) { return m.AddAwardeeModule; }); } },
];
var GallantryAwardsModule = /** @class */ (function () {
    function GallantryAwardsModule() {
    }
    GallantryAwardsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _gallantry_awards_component__WEBPACK_IMPORTED_MODULE_5__["GallantryAwardsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ]
        })
    ], GallantryAwardsModule);
    return GallantryAwardsModule;
}());



/***/ }),

/***/ "g/vt":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/admin/home/hall-of-fame/gallantry-awards/gallantry-awards.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: GallantryAwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallantryAwardsComponent", function() { return GallantryAwardsComponent; });
/* harmony import */ var _raw_loader_gallantry_awards_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./gallantry-awards.component.html */ "toUT");
/* harmony import */ var _gallantry_awards_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallantry-awards.component.scss */ "qqp6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var GallantryAwardsComponent = /** @class */ (function () {
    function GallantryAwardsComponent(router, service, cdref, sharedService, spinner, localID) {
        this.router = router;
        this.service = service;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.spinner = spinner;
        this.displayedColumns = ['number', 'image', 'name', 'regiment', 'battalion', 'awards', 'status', 'view'];
        this.fameList = [];
    }
    GallantryAwardsComponent.prototype.ngOnInit = function () { };
    GallantryAwardsComponent.prototype.ngAfterViewInit = function () {
        this.getHallOfFameGallantryAwardees();
    };
    GallantryAwardsComponent.prototype.getHallOfFameGallantryAwardees = function () {
        var _this = this;
        this.spinner.show();
        this.service.getHallOfFameGallantryAwardeesList(2).subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                _this.fameList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
            }
        }, function (err) {
            _this.service.openSnackbar('Error Occured.');
            _this.spinner.hide();
        });
    };
    GallantryAwardsComponent.prototype.changeHallOfFameGallantrytatus = function (e, id) {
        var _this = this;
        this.spinner.show();
        var status;
        if (e.checked) {
            status = 1;
        }
        else {
            status = 0;
        }
        this.service.changeGallantryHallOfFameStatus(id, status).subscribe(function (res) {
            if (res.status == 'OK') {
                _this.sharedService.openSnackbar(res.message);
                _this.cdref.detectChanges();
                // this.ngAfterViewInit();
                _this.spinner.hide();
            }
            else {
                _this.sharedService.openSnackbar(res.message);
                _this.spinner.hide();
            }
        }, function (err) {
            _this.service.openSnackbar('Error Occured.');
            _this.spinner.hide();
        });
    };
    GallantryAwardsComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/id.png";
    };
    GallantryAwardsComponent.prototype.addHallOfFame = function () {
        this.router.navigate(['/main/admin/home/hall-of-fame/gallantry-awardees/add-gallantry-awardee']);
    };
    GallantryAwardsComponent.prototype.viewHallOfFame = function (e) {
        this.router.navigate(['/main/admin/home/hall-of-fame/gallantry-awardees/view-gallantry-awardee'], { queryParams: { id: e.id } });
    };
    GallantryAwardsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    GallantryAwardsComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.fameList.slice();
        if (!sort.active || sort.direction === '') {
            this.fameList = datalist;
            return;
        }
        this.fameList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                // case 'date': return this.sharedService.compare(a.eventDate, b.eventDate, isAsc);
                case 'name': return _this.sharedService.compare(a.officerRank.toLowerCase() + a.officerName.toLowerCase(), b.officerRank.toLowerCase() + b.officerName.toLowerCase(), isAsc);
                case 'regiment': return _this.sharedService.compare(a.officerRegiment.toLowerCase(), b.officerRegiment.toLowerCase(), isAsc);
                case 'battalion': return _this.sharedService.compare(a.officerBattalion.toLowerCase(), b.officerBattalion.toLowerCase(), isAsc);
                case 'awards': return _this.sharedService.compare(a.awardMedal.toLowerCase() + a.yearAwarded, b.awardMedal.toLowerCase() + b.yearAwarded, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.fameList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    GallantryAwardsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
    ]; };
    GallantryAwardsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true },] }]
    };
    GallantryAwardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-gallantry-awards',
            template: _raw_loader_gallantry_awards_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_gallantry_awards_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], String])
    ], GallantryAwardsComponent);
    return GallantryAwardsComponent;
}());



/***/ }),

/***/ "qqp6":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/admin/home/hall-of-fame/gallantry-awards/gallantry-awards.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "toUT":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/hall-of-fame/gallantry-awards/gallantry-awards.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Home <span class=\"sub-menu1\"> > Hall of Fame > Gallantry Awardees</span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addHallOfFame()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"image\">\r\n                    <th mat-header-cell *matHeaderCellDef> Image </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> <img [src]=\"element.officerImage\" (error)=\"noImg($event)\"\r\n                            width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"> </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"rank-name\"> {{element.officerRank}} {{element.officerName}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"regiment\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Unit </th>\r\n                    <td mat-cell *matCellDef=\"let element\" class=\"rank-name\"> {{element.officerRegiment}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"battalion\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Battalion </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.officerBattalion}} Bn</td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"awards\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Awards/Medals </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.awardMedal}} {{element.yearAwarded}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeHallOfFameGallantrytatus($event,element.id)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <ng-container matColumnDef=\"view\">\r\n                    <th mat-header-cell *matHeaderCellDef> View </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewHallOfFame(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n</mat-card>");

/***/ })

}]);