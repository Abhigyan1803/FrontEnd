(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entitlements-entitlements-module"],{

/***/ "1gZp":
/*!********************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/entitlements/entitlements.component.ts ***!
  \********************************************************************************/
/*! exports provided: EntitlementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitlementsComponent", function() { return EntitlementsComponent; });
/* harmony import */ var _raw_loader_entitlements_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./entitlements.component.html */ "AGsk");
/* harmony import */ var _entitlements_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entitlements.component.scss */ "HNIY");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/gc/gc.service */ "yuBT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EntitlementsComponent = /** @class */ (function () {
    function EntitlementsComponent(router, route, service, sharedService, cdref, spinner) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.service = service;
        this.sharedService = sharedService;
        this.cdref = cdref;
        this.spinner = spinner;
        this.type = "";
        this.entitlements = ['MES', 'Personal Kit Items', 'IT', 'Additional Items'];
        this.displayedColumns = [
            "number",
            "title",
            "address",
            "details",
        ];
        this.entitlementsList = [];
        this.cadetDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        this.route.params.subscribe(function (params) {
            _this.type = params.type;
            if (!_this.entitlements.includes(_this.type)) {
                _this.router.navigate(['/gc/content/dashboard']);
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 5);
            }
            else {
                _this.getEntitlementsList();
            }
        });
    }
    EntitlementsComponent.prototype.ngOnInit = function () {
    };
    EntitlementsComponent.prototype.ngAfterViewInit = function () {
        this.getEntitlementsList();
    };
    EntitlementsComponent.prototype.getEntitlementsList = function () {
        var _this = this;
        console.log(this.type, "this.type");
        this.spinner.show();
        this.service.getEntitlementList(this.cadetDetails.id, this.type).subscribe(function (res) {
            if (res.status == "OK") {
                if (res.object) {
                    console.log(res.message, "ggg");
                    _this.entitlementsList = res.object;
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.entitlementsList);
                    _this.dataSource.sort = _this.sort;
                    _this.dataSource.paginator = _this.paginator;
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                }
                else if (res.object == null) {
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar(res.message);
                }
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
    EntitlementsComponent.prototype.addEntitlement = function () {
        this.router.navigate(["/gc/content/entitlements/" + this.type + "/add-entitlement"]);
    };
    EntitlementsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    EntitlementsComponent.prototype.sortData = function (sort) {
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
    EntitlementsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_9__["GcService"] },
        { type: _service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
    ]; };
    EntitlementsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true },] }]
    };
    EntitlementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
            selector: "ms-entitlements",
            template: _raw_loader_entitlements_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_entitlements_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_9__["GcService"],
            _service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], EntitlementsComponent);
    return EntitlementsComponent;
}());



/***/ }),

/***/ "AGsk":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/entitlements/entitlements.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"maincontent\">\r\n    <div class=\"container-fluid mt-20\">\r\n\r\n\r\n\r\n        <div class=\"mt-20 show-data \">\r\n           \r\n               \r\n                    <div class=\"mat-new\">\r\n                        <h4 class=\"card-heading\"> Entitlements <span class=\"sub-menu1\"> > {{type}}</span> </h4>\r\n                    \r\n                    </div>\r\n                <div class=\"row btn-set\" >\r\n                    <div class=\"search\">\r\n                        <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                    </div>\r\n                  \r\n                    <button mat-raised-button (click)=\"addEntitlement()\" class=\"add-btton\">\r\n                        <mat-icon>add</mat-icon> Add\r\n                    </button>\r\n                </div>\r\n            \r\n                <div class=\"example-container \">\r\n                    <div class=\"example-table-container\">\r\n                        <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n            \r\n                            <ng-container matColumnDef=\"number\">\r\n                                <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                                <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                                    {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                            </ng-container>\r\n            \r\n                            <ng-container matColumnDef=\"title\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\r\n                            </ng-container>\r\n            \r\n                            \r\n                            <ng-container matColumnDef=\"address\" >\r\n                                <th mat-header-cell *matHeaderCellDef  mat-sort-header>Address </th>\r\n                                <td mat-cell *matCellDef=\"let element\">{{element.address}}</td>\r\n                            </ng-container>\r\n            \r\n                            <ng-container matColumnDef=\"details\">\r\n                                <th mat-header-cell *matHeaderCellDef  mat-sort-header>Details</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element?.details}} </td>\r\n                            </ng-container>\r\n            \r\n                            \r\n                            \r\n            \r\n                            \r\n                            <!-- <ng-container matColumnDef=\"status\">\r\n                                <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                                <td mat-cell *matCellDef=\"let element\">\r\n                                    <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                                        (change)=\"changeGreybookStatus($event,element.id)\">\r\n                                    </mat-slide-toggle>\r\n                                </td>\r\n                            </ng-container> -->\r\n            \r\n            \r\n                            \r\n                            <!-- <ng-container matColumnDef=\"action\">\r\n                                <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                                <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                                        (click)=\"viewGreybook(element)\">\r\n                                        <mat-icon>visibility</mat-icon>\r\n                                    </a> </td>\r\n                            </ng-container> -->\r\n            \r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                            <tr class=\"mat-row\" *matNoDataRow>\r\n                                <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n            \r\n                    <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n                </div>\r\n            \r\n            \r\n            \r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "HNIY":
/*!**********************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/entitlements/entitlements.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".maincontent {\n  min-height: 45vw;\n}\n\n.mat-new {\n  clear: both;\n  padding: 10px 0;\n  display: block;\n}\n\n.mat-new h4 {\n  margin-bottom: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card {\n  margin: 1rem 0;\n}\n\n.example-container {\n  min-height: auto;\n}\n\n.btn-set {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  margin: 10px 0px 10px 0px;\n}");

/***/ }),

/***/ "TzLj":
/*!*****************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/entitlements/entitlements.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EntitlementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitlementsModule", function() { return EntitlementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _entitlements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entitlements.component */ "1gZp");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { MatCardModule, MatIconModule, MatMenuModule, MatTabsModule, MatProgressBarModule,
//      MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatTableModule,
//       MatTooltipModule, MatPaginatorModule, MatDatepickerModule, MatDividerModule, MatChipsModule, MatListModule } from '@angular/material';


var routes = [
    {
        path: '',
        component: _entitlements_component__WEBPACK_IMPORTED_MODULE_4__["EntitlementsComponent"]
    },
    { path: 'add-entitlement', loadChildren: function () { return __webpack_require__.e(/*! import() | add-entitlement-add-entitlement-module */ "add-entitlement-add-entitlement-module").then(__webpack_require__.bind(null, /*! ./add-entitlement/add-entitlement.module */ "BqKR")).then(function (m) { return m.AddEntitlementModule; }); } },
    { path: 'update-entitlement', loadChildren: function () { return __webpack_require__.e(/*! import() | add-entitlement-add-entitlement-module */ "add-entitlement-add-entitlement-module").then(__webpack_require__.bind(null, /*! ./add-entitlement/add-entitlement.module */ "BqKR")).then(function (m) { return m.AddEntitlementModule; }); } },
];
var EntitlementsModule = /** @class */ (function () {
    function EntitlementsModule() {
    }
    EntitlementsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _entitlements_component__WEBPACK_IMPORTED_MODULE_4__["EntitlementsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ]
        })
    ], EntitlementsModule);
    return EntitlementsModule;
}());



/***/ })

}]);