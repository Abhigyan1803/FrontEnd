(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drill-competition-drill-comp-module"],{

/***/ "KjJa":
/*!*****************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-competition/drill-comp.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DrillCompModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrillCompModule", function() { return DrillCompModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _drill_competition_drill_comp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../drill-competition/drill-comp.component */ "cXu4");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _drill_competition_drill_comp_component__WEBPACK_IMPORTED_MODULE_5__["drillCompetitionComponent"],
    },
    { path: 'add-drill', loadChildren: function () { return __webpack_require__.e(/*! import() | add-drill-add-drill-module */ "add-drill-add-drill-module").then(__webpack_require__.bind(null, /*! ./add-drill/add-drill.module */ "t5p6")).then(function (m) { return m.AddDrillModule; }); } },
    { path: 'view-drill', loadChildren: function () { return __webpack_require__.e(/*! import() | add-drill-add-drill-module */ "add-drill-add-drill-module").then(__webpack_require__.bind(null, /*! ./add-drill/add-drill.module */ "t5p6")).then(function (m) { return m.AddDrillModule; }); } },
];
var DrillCompModule = /** @class */ (function () {
    function DrillCompModule() {
    }
    DrillCompModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _drill_competition_drill_comp_component__WEBPACK_IMPORTED_MODULE_5__["drillCompetitionComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ]
        })
    ], DrillCompModule);
    return DrillCompModule;
}());



/***/ }),

/***/ "auu9":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/drill-competition/drill-comp-component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> <span class=\"sub-menu1\"> Admin Drill Subject</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addDrill()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n \r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- name Column -->\r\n                <ng-container matColumnDef=\"subjectName\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> SubjectName </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.subjectName}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"totalMark\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> TotalMark </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.totalMarks}} </td>\r\n                </ng-container>\r\n                <!-- Status Column -->\r\n\r\n                <ng-container matColumnDef=\"termName\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>TermName </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.termName}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"subjectType\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> SubjectType </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.drillType}} </td>\r\n                </ng-container>\r\n                \r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"drillStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewDrill(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n  \r\n</mat-card>");

/***/ }),

/***/ "cXu4":
/*!********************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-competition/drill-comp.component.ts ***!
  \********************************************************************************/
/*! exports provided: drillCompetitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drillCompetitionComponent", function() { return drillCompetitionComponent; });
/* harmony import */ var _raw_loader_drill_comp_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./drill-comp-component.html */ "auu9");
/* harmony import */ var _drill_comp_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drill-comp.component.scss */ "wV6g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
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











var drillCompetitionComponent = /** @class */ (function () {
    function drillCompetitionComponent(service, router, cdref, sharedService, spinner, dialog) {
        this.service = service;
        this.router = router;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.spinner = spinner;
        this.dialog = dialog;
        this.DrillList = [];
        this.displayedColumns = ['number', 'subjectName', 'totalMark', 'termName', 'subjectType', 'status', 'action'];
        //////// Order By /////////////
        this.sortArrayOfObjects = function (data, keyToSort, direction) {
            if (direction === 'none') {
                return data;
            }
            var compare = function (objectA, objectB) {
                var valueA = objectA[keyToSort];
                var valueB = objectB[keyToSort];
                if (valueA === valueB) {
                    return 0;
                }
                if (valueA > valueB) {
                    return direction === 'ascending' ? 1 : -1;
                }
                else {
                    return direction === 'ascending' ? -1 : 1;
                }
            };
            return data.slice().sort(compare);
        };
    }
    drillCompetitionComponent.prototype.ngOnInit = function () {
        this.getAdjutantdrill();
    };
    drillCompetitionComponent.prototype.ngAfterViewInit = function () {
    };
    drillCompetitionComponent.prototype.getAdjutantdrill = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAdjutantdrill().subscribe(function (res) {
            if (res.status == "OK") {
                _this.DrillList = res.object;
                var allResult = _this.sortArrayOfObjects(_this.DrillList, "id", "ascending");
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](allResult);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
            }
            console.log(res);
            _this.spinner.hide();
        }, function (err) {
            _this.service.openSnackbar('Error Occured.');
            _this.spinner.hide();
        });
    };
    drillCompetitionComponent.prototype.drillStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.drillStatus(d.id, 1).subscribe(function (res) {
                console.log(res);
                if (res.message == 'drill subject updated') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this.service.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this.service.drillStatus(d.id, 0).subscribe(function (res) {
                console.log(res);
                if (res.message == 'drill subject updated') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this.service.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    drillCompetitionComponent.prototype.addDrill = function () {
        if (this.router.url.includes('main/adjutant-branch'))
            this.router.navigate(['/main/adjutant-branch/drill-competition/add-drill']);
        if (this.router.url.includes('main/admin/Adjutant-Branch-Management'))
            this.router.navigate(['/main/admin/Adjutant-Branch-Management/drill-competition/add-drill']);
    };
    drillCompetitionComponent.prototype.viewDrill = function (ob) {
        if (this.router.url.includes('main/adjutant-branch'))
            this.router.navigate(['/main/adjutant-branch/drill-competition/view-drill'], { queryParams: { id: ob.id } });
        if (this.router.url.includes('main/admin/Adjutant-Branch-Management'))
            this.router.navigate(['/main/admin/Adjutant-Branch-Management/drill-competition/view-drill'], { queryParams: { id: ob.id } });
    };
    drillCompetitionComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    drillCompetitionComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.DrillList.slice();
        if (!sort.active || sort.direction === '') {
            this.DrillList = datalist;
            return;
        }
        this.DrillList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.DrillList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    drillCompetitionComponent.ctorParameters = function () { return [
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_3__["AdjutantService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }
    ]; };
    drillCompetitionComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true },] }]
    };
    drillCompetitionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'adj-aro',
            template: _raw_loader_drill_comp_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_drill_comp_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_3__["AdjutantService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]])
    ], drillCompetitionComponent);
    return drillCompetitionComponent;
}());



/***/ }),

/***/ "wV6g":
/*!**********************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-competition/drill-comp.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);