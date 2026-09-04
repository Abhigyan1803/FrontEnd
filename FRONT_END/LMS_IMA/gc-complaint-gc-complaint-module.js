(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gc-complaint-gc-complaint-module"],{

/***/ "MwrP":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/gs-branch/it/complaints-n-requirements/gc-complaint/gc-complaint/gc-complaint.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"maincontent\">\n    <div class=\"container-fluid mt-20\">\n\n\n\n        <div class=\"mt-20 show-data \">\n           \n               \n                    <div class=\"mat-new\">\n                        <h4 class=\"card-heading\"> Complaint & Requirement <span class=\"sub-menu1\"> > IT-Complaint</span> </h4>\n                    \n                    </div>\n                <div class=\"row btn-set\" >\n                    <div class=\"search\">\n                        <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\n                    </div>\n                  \n                </div>\n            \n                <div class=\"example-container \">\n                    <div class=\"example-table-container\">\n                        <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\n            \n                            <ng-container matColumnDef=\"number\">\n                                <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                                <td mat-cell *matCellDef=\"let element;let i = index;\">\n                                    {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\n                            </ng-container>\n            \n                            <ng-container matColumnDef=\"title\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n                            </ng-container>\n            \n                            \n                            <ng-container matColumnDef=\"address\" >\n                                <th mat-header-cell *matHeaderCellDef  mat-sort-header>Address </th>\n                                <td mat-cell *matCellDef=\"let element\">{{element.address}}</td>\n                            </ng-container>\n            \n                            <ng-container matColumnDef=\"details\">\n                                <th mat-header-cell *matHeaderCellDef  mat-sort-header>Details</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element?.details}} </td>\n                            </ng-container>\n            \n                            \n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                            <tr class=\"mat-row\" *matNoDataRow>\n                                <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\n                            </tr>\n                        </table>\n                    </div>\n            \n                    <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\n                </div>\n      \n            </div>\n    </div>\n</div>\n\n\n\n\n");

/***/ }),

/***/ "YU37":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/gs-branch/it/complaints-n-requirements/gc-complaint/gc-complaint/gc-complaint.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: GcComplaintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcComplaintComponent", function() { return GcComplaintComponent; });
/* harmony import */ var _raw_loader_gc_complaint_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./gc-complaint.component.html */ "MwrP");
/* harmony import */ var _gc_complaint_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gc-complaint.component.scss */ "whCW");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/gc/gc.service */ "yuBT");
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










var GcComplaintComponent = /** @class */ (function () {
    function GcComplaintComponent(router, route, service, sharedService, cdref, spinner) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.sharedService = sharedService;
        this.cdref = cdref;
        this.spinner = spinner;
        this.type = "IT";
        this.displayedColumns = [
            "number",
            "title",
            "address",
            "details",
        ];
        this.entitlementsList = [];
        this.cadetDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        console.log("***", this.cadetDetails);
        // this.route.params.subscribe((params) => {
        //   this.type = params.type;
        //   if (!this.entitlements.includes(this.type)) {
        //     this.router.navigate(['/gc/content/dashboard'])
        //     this.sharedService.openErrorSnackbarWithSeconds('Error!', 5)
        //   } else {
        //     this.getEntitlementsList();
        //   }
        // });
    }
    GcComplaintComponent.prototype.ngOnInit = function () {
        this.getEntitlementsList();
    };
    GcComplaintComponent.prototype.getEntitlementsList = function () {
        var _this = this;
        this.spinner.show();
        this.service.getComplaintList(this.type).subscribe(function (res) {
            if (res.status == "OK") {
                _this.entitlementsList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.entitlementsList);
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
            _this.sharedService.openSnackbar('Error Occured.');
            _this.spinner.hide();
        });
    };
    GcComplaintComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    GcComplaintComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.entitlementsList.slice();
        if (!sort.active || sort.direction === "") {
            this.entitlementsList = datalist;
            return;
        }
        this.entitlementsList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === "asc";
            switch (_this.sort.active) {
                case "title":
                    return _this.sharedService.compare(a.title.toLowerCase(), b.title.toLowerCase(), isAsc);
                case "address":
                    return _this.sharedService.compare(a.address.toLowerCase(), b.address.toLowerCase(), isAsc);
                case "details":
                    return _this.sharedService.compare(a.details.toLowerCase(), b.details.toLowerCase(), isAsc);
                default:
                    return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.entitlementsList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    GcComplaintComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_8__["GcService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
    ]; };
    GcComplaintComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
    };
    GcComplaintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'ms-gc-complaint',
            template: _raw_loader_gc_complaint_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_gc_complaint_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_8__["GcService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], GcComplaintComponent);
    return GcComplaintComponent;
}());



/***/ }),

/***/ "fyGv":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/gs-branch/it/complaints-n-requirements/gc-complaint/gc-complaint.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: GcComplaintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcComplaintModule", function() { return GcComplaintModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gc_complaint_gc_complaint_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gc-complaint/gc-complaint.component */ "YU37");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _gc_complaint_gc_complaint_component__WEBPACK_IMPORTED_MODULE_2__["GcComplaintComponent"] }
];
var GcComplaintModule = /** @class */ (function () {
    function GcComplaintModule() {
    }
    GcComplaintModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _gc_complaint_gc_complaint_component__WEBPACK_IMPORTED_MODULE_2__["GcComplaintComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], GcComplaintModule);
    return GcComplaintModule;
}());



/***/ }),

/***/ "whCW":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/main/gs-branch/it/complaints-n-requirements/gc-complaint/gc-complaint/gc-complaint.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".maincontent {\n  min-height: 45vw;\n}\n\n.mat-new {\n  clear: both;\n  padding: 10px 0 !important;\n  display: block;\n}\n\n.mat-new h4 {\n  margin-bottom: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card {\n  margin: 1rem 0;\n}\n\n.example-container {\n  min-height: auto;\n}\n\n.btn-set {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  margin: 10px 0px 10px 0px;\n}");

/***/ })

}]);