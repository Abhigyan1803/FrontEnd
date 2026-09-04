(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-home-special-occasions-special-occasions-module"],{

/***/ "PvO2":
/*!*******************************************************************************!*\
  !*** ./src/app/main/admin/home/special-occasions/special-occasions.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SpecialOccasionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialOccasionsModule", function() { return SpecialOccasionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _special_occasions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./special-occasions.component */ "Ri4F");
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
        component: _special_occasions_component__WEBPACK_IMPORTED_MODULE_4__["SpecialOccasionsComponent"]
    },
    { path: 'view', loadChildren: function () { return __webpack_require__.e(/*! import() | add-occasion-add-occasion-module */ "add-occasion-add-occasion-module").then(__webpack_require__.bind(null, /*! ./add-occasion/add-occasion.module */ "R46c")).then(function (m) { return m.AddOccasionModule; }); } },
    { path: 'add', loadChildren: function () { return __webpack_require__.e(/*! import() | add-occasion-add-occasion-module */ "add-occasion-add-occasion-module").then(__webpack_require__.bind(null, /*! ./add-occasion/add-occasion.module */ "R46c")).then(function (m) { return m.AddOccasionModule; }); } },
];
var SpecialOccasionsModule = /** @class */ (function () {
    function SpecialOccasionsModule() {
    }
    SpecialOccasionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _special_occasions_component__WEBPACK_IMPORTED_MODULE_4__["SpecialOccasionsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], SpecialOccasionsModule);
    return SpecialOccasionsModule;
}());



/***/ }),

/***/ "Ri4F":
/*!**********************************************************************************!*\
  !*** ./src/app/main/admin/home/special-occasions/special-occasions.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SpecialOccasionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialOccasionsComponent", function() { return SpecialOccasionsComponent; });
/* harmony import */ var _raw_loader_special_occasions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./special-occasions.component.html */ "sfew");
/* harmony import */ var _special_occasions_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./special-occasions.component.scss */ "wJ7k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xlsx */ "JcrP");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SpecialOccasionsComponent = /** @class */ (function () {
    function SpecialOccasionsComponent(router, service, sharedService, cdref, spinner) {
        this.router = router;
        this.service = service;
        this.sharedService = sharedService;
        this.cdref = cdref;
        this.spinner = spinner;
        this.title = 'Excel';
        this.displayedColumns = ['number', 'rank', 'name', 'ic_number', 'department', 'spouse', 'relation', 'dob', 'sdob', 'dom', 'status', 'view'];
        this.specialOccasionsList = [];
    }
    SpecialOccasionsComponent.prototype.ngOnInit = function () { };
    SpecialOccasionsComponent.prototype.ngAfterViewInit = function () {
        this.getSpecialOccasionsList();
    };
    SpecialOccasionsComponent.prototype.getSpecialOccasionsList = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllSpecialOccasionsList(2).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.specialOccasionsList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.service.openSnackbar(res.message);
            }
        }, function (err) {
            _this.service.openSnackbar('Error Occured.');
            _this.spinner.hide();
        });
    };
    SpecialOccasionsComponent.prototype.ExportTOExcel = function () {
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].table_to_sheet(this.TABLE.nativeElement);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        xlsx__WEBPACK_IMPORTED_MODULE_10__["writeFile"](wb, 'SocialList.xlsx');
    };
    SpecialOccasionsComponent.prototype.changeSpecialOccasionStatus = function (e, id) {
        var _this = this;
        var status;
        if (e.checked) {
            status = 1;
        }
        else {
            status = 0;
        }
        this.spinner.show();
        this.service.changeSpecialOccasionStatus(id, status).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.spinner.hide();
                _this.service.openSnackbar(res.message);
                _this.cdref.detectChanges();
                // this.ngAfterViewInit();
            }
            else {
                _this.spinner.hide();
                _this.service.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.service.openSnackbar('Error Occured.');
        });
    };
    SpecialOccasionsComponent.prototype.addSpecialOccasion = function () {
        // this.router.navigate(['/main/admin/home/special-occasions/add'])
        this.router.navigate(['/main/adjutant-branch/social-list/add']);
    };
    SpecialOccasionsComponent.prototype.viewSpecialOccasion = function (e) {
        // this.router.navigate(['/main/admin/home/special-occasions/view'], { queryParams: { id: e.id } })
        this.router.navigate(['/main/adjutant-branch/social-list/view'], { queryParams: { id: e.id } });
    };
    SpecialOccasionsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SpecialOccasionsComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.specialOccasionsList.slice();
        if (!sort.active || sort.direction === '') {
            this.specialOccasionsList = datalist;
            return;
        }
        this.specialOccasionsList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'rank': return _this.sharedService.compare(a.officerRank.toLowerCase(), b.officerRank.toLowerCase(), isAsc);
                case 'name': return _this.sharedService.compare(a.officerName.toLowerCase(), b.officerName.toLowerCase(), isAsc);
                case 'department': return _this.sharedService.compare(a.postedBranch.toLowerCase(), b.postedBranch.toLowerCase(), isAsc);
                case 'spouse': return _this.sharedService.compare(a.spouseName.toLowerCase(), b.spouseName.toLowerCase(), isAsc);
                case 'relation': return _this.sharedService.compare(a.relation.toLowerCase(), b.relation.toLowerCase(), isAsc);
                case 'dob': return _this.sharedService.compare(a.officerDOB, b.officerDOB, isAsc);
                case 'sdob': return _this.sharedService.compare(a.spouseDOB, b.spouseDOB, isAsc);
                case 'dom': return _this.sharedService.compare(a.marriageAnniversary, b.marriageAnniversary, isAsc);
                // case 'phone': return this.sharedService.compare(a.phoneNumber, b.phoneNumber, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.specialOccasionsList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SpecialOccasionsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }
    ]; };
    SpecialOccasionsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true },] }],
        TABLE: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['TABLE', { static: false },] }]
    };
    SpecialOccasionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-special-occasions',
            template: _raw_loader_special_occasions_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_special_occasions_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
    ], SpecialOccasionsComponent);
    return SpecialOccasionsComponent;
}());



/***/ }),

/***/ "sfew":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/special-occasions/special-occasions.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Social List<span class=\"sub-menu1\"></span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n\r\n\r\n    <div class=\"d-flex btn-set justify-content-between\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <div class=\"w-100\">\r\n        <button (click)=\"ExportTOExcel()\" class=\"add-btton\" mat-raised-button>Export</button>\r\n            <button mat-raised-button (click)=\"addSpecialOccasion()\" class=\"add-btton\">\r\n                <mat-icon>add</mat-icon> Add\r\n            </button>\r\n        </div>\r\n     <div>\r\n     </div>\r\n    </div>\r\n     <div class=\"example-container \">\r\n        <div class=\"example-table-container\" #TABLE> \r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n    \r\n                <ng-container matColumnDef=\"rank\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Officer's Rank </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.officerRank || '-'}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Officer's Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.officerName || '-'}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"ic_number\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> IC Number </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.icNumber || '-'}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"department\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Department </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.postedBranch || '-'}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"spouse\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Spouse Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.spouseName || '-'}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"relation\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Relation</th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.relation || '-'}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"dob\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Officer's DOB </th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element?.officerDOB | date:'dd MMM' || '-'}}</td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"sdob\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Spouse DOB </th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element?.spouseDOB | date:'dd MMM' || '-'}}</td>\r\n                </ng-container>\r\n                \r\n                <ng-container matColumnDef=\"dom\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Date of Marriage</th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element?.marriageAnniversary | date:'dd MMM' || '-'}}</td>\r\n                </ng-container>\r\n                \r\n\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeSpecialOccasionStatus($event,element.id)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"view\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewSpecialOccasion(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "wJ7k":
/*!************************************************************************************!*\
  !*** ./src/app/main/admin/home/special-occasions/special-occasions.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);