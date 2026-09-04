(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counsellors-singarh-counsellors-singarh-module"],{

/***/ "04s3":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/bh_bn/counsellors-singarh/counsellors-singarh.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "75LU":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/counsellors/bh_bn/counsellors-singarh/counsellors-singarh.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> ACADEMIC-DEPART > Counsellors > BH BN > Singarh Coy </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addSINGARH()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"rankName\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Rank </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.rankName}} </td>\r\n                </ng-container>\r\n                <!-- name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n              \r\n\r\n                <ng-container matColumnDef=\"mobileNumber\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Mobile </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.mobileNumber}} </td>\r\n                </ng-container>\r\n               \r\n                <!-- <ng-container matColumnDef=\"batallion\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Batallion </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> BH BN </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"company\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Company </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> Singarh Coy </td>\r\n                </ng-container> -->\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewSINGARH(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "ihrz":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/bh_bn/counsellors-singarh/counsellors-singarh.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CounsellorsSingarhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounsellorsSingarhComponent", function() { return CounsellorsSingarhComponent; });
/* harmony import */ var _raw_loader_counsellors_singarh_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./counsellors-singarh.component.html */ "75LU");
/* harmony import */ var _counsellors_singarh_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counsellors-singarh.component.scss */ "04s3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CounsellorsSingarhComponent = /** @class */ (function () {
    function CounsellorsSingarhComponent(router, adminservice, spinner, cdref, sharedService) {
        this.router = router;
        this.adminservice = adminservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.awardeesList = [];
        this.displayedColumns = ['number', 'rankName', 'name', 'mobileNumber', 'action'];
        this.Singarh = [];
    }
    CounsellorsSingarhComponent.prototype.ngOnInit = function () {
    };
    CounsellorsSingarhComponent.prototype.ngAfterViewInit = function () {
        this.getKeren();
    };
    CounsellorsSingarhComponent.prototype.getKeren = function () {
        var _this = this;
        this.spinner.show();
        this.battalionId = 4;
        this.companyId = 14;
        this.status = 2;
        this.adminservice.getCounsellor(this.battalionId, this.companyId, this.status).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.Singarh = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
                console.log(res, "=================");
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.adminservice.openSnackbar("Some Error Occured.");
        });
    };
    CounsellorsSingarhComponent.prototype.addSINGARH = function () {
        this.router.navigate(['/main/academic-depart/counsellors/bhbn/counsellors-singarh/add-singarh']);
    };
    CounsellorsSingarhComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CounsellorsSingarhComponent.prototype.viewSINGARH = function (element) {
        if (this.router.url.includes('main/academic-depart'))
            this.router.navigate(['/main/academic-depart/counsellors/bhbn/counsellors-singarh/view-singarh'], { queryParams: { id: element.id } });
        // if(this.router.url.includes('main/academic-depart'))
        // this.router.navigate(['/main/academic-depart/counsellors/cabn/counsellors-hajipir/view-hajipir'],{queryParams:{id:element.id}})  
    };
    CounsellorsSingarhComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.Singarh.slice();
        if (!sort.active || sort.direction === '') {
            this.Singarh = datalist;
            return;
        }
        this.Singarh = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'description': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.Singarh);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CounsellorsSingarhComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] }
    ]; };
    CounsellorsSingarhComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true },] }]
    };
    CounsellorsSingarhComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-counsellors-singarh',
            template: _raw_loader_counsellors_singarh_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_counsellors_singarh_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])
    ], CounsellorsSingarhComponent);
    return CounsellorsSingarhComponent;
}());



/***/ }),

/***/ "vJr8":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/counsellors/bh_bn/counsellors-singarh/counsellors-singarh.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CounsellorsSingarhModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounsellorsSingarhModule", function() { return CounsellorsSingarhModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _counsellors_singarh_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counsellors-singarh.component */ "ihrz");
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
        component: _counsellors_singarh_component__WEBPACK_IMPORTED_MODULE_4__["CounsellorsSingarhComponent"]
    },
    {
        path: 'add-singarh',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-conus-singarh-add-conus-singarh-module */ "add-conus-singarh-add-conus-singarh-module").then(__webpack_require__.bind(null, /*! ./add-conus-singarh/add-conus-singarh.module */ "Qk9Z")).then(function (m) { return m.AddConusSingarhModule; }); }
    },
    {
        path: 'view-singarh',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-conus-singarh-add-conus-singarh-module */ "add-conus-singarh-add-conus-singarh-module").then(__webpack_require__.bind(null, /*! ./add-conus-singarh/add-conus-singarh.module */ "Qk9Z")).then(function (m) { return m.AddConusSingarhModule; }); }
    },
];
var CounsellorsSingarhModule = /** @class */ (function () {
    function CounsellorsSingarhModule() {
    }
    CounsellorsSingarhModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _counsellors_singarh_component__WEBPACK_IMPORTED_MODULE_4__["CounsellorsSingarhComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], CounsellorsSingarhModule);
    return CounsellorsSingarhModule;
}());



/***/ })

}]);