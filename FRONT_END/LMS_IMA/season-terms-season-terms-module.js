(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["season-terms-season-terms-module"],{

/***/ "4NHi":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/season-terms/season-terms.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> TRG Team <span class=\"sub-menu1\"> > Season Terms</span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addSeasonTerm()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"seasonTerm\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Season Term </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.termSeason?.name || \"-\"}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"seasonYear\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Season Year </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.sessionYear}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"startDate\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Start Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.startDate | date:'d MMMM, y, EEEE'}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"endDate\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> End Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.endDate | date:'d MMMM, y, EEEE'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewEvent(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container> -->\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "VDhe":
/*!***********************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/season-terms/season-terms.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SeasonTermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonTermsComponent", function() { return SeasonTermsComponent; });
/* harmony import */ var _raw_loader_season_terms_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./season-terms.component.html */ "4NHi");
/* harmony import */ var _season_terms_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./season-terms.component.scss */ "jX9L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SeasonTermsComponent = /** @class */ (function () {
    function SeasonTermsComponent(router, service, cdref, spinner, sharedService) {
        this.router = router;
        this.service = service;
        this.cdref = cdref;
        this.spinner = spinner;
        this.sharedService = sharedService;
        this.displayedColumns = ['number', 'seasonTerm', 'seasonYear', 'startDate', 'endDate' /**, 'view'*/];
        this.seasonTermsList = [];
    }
    SeasonTermsComponent.prototype.ngOnInit = function () { };
    SeasonTermsComponent.prototype.ngAfterViewInit = function () {
        this.getSeasonTermsList();
    };
    SeasonTermsComponent.prototype.getSeasonTermsList = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllSeasonTerms(1).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.seasonTermsList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
            }
            // console.log(res);
            _this.spinner.hide();
        }, function (err) {
            _this.sharedService.openSnackbar('Error Occured.');
            _this.spinner.hide();
        });
    };
    SeasonTermsComponent.prototype.addSeasonTerm = function () {
        if (this.router.url.includes('main/trg-team'))
            this.router.navigate(['/main/trg-team/gso-2-pgme/season-terms/add-season-term']);
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['/main/admin/trg-team/gso-2-pgme/season-terms/add-season-term']);
    };
    SeasonTermsComponent.prototype.applyFilter = function (event) {
        // console.log(event);
        var filterValue = event.target.value;
        console.log(filterValue);
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SeasonTermsComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.seasonTermsList.slice();
        if (!sort.active || sort.direction === '') {
            this.seasonTermsList = datalist;
            return;
        }
        this.seasonTermsList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'startDate': return _this.sharedService.compare(a.startDate, b.startDate, isAsc);
                case 'endDate': return _this.sharedService.compare(a.endDate, b.endDate, isAsc);
                case 'seasonTerm': return _this.sharedService.compare(a.termSeason.name.toLowerCase(), b.termSeason.name.toLowerCase(), isAsc);
                case 'seasonYear': return _this.sharedService.compare(a.sessionYear, b.sessionYear, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.seasonTermsList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SeasonTermsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] }
    ]; };
    SeasonTermsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true },] }]
    };
    SeasonTermsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-season-terms',
            template: _raw_loader_season_terms_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_season_terms_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])
    ], SeasonTermsComponent);
    return SeasonTermsComponent;
}());



/***/ }),

/***/ "XaUm":
/*!********************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/season-terms/season-terms.module.ts ***!
  \********************************************************************************/
/*! exports provided: SeasonTermsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonTermsModule", function() { return SeasonTermsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _season_terms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./season-terms.component */ "VDhe");
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
        component: _season_terms_component__WEBPACK_IMPORTED_MODULE_4__["SeasonTermsComponent"]
    },
    {
        path: 'add-season-term',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-season-terms-add-season-terms-module */ "add-season-terms-add-season-terms-module").then(__webpack_require__.bind(null, /*! ./add-season-terms/add-season-terms.module */ "Bcyt")).then(function (m) { return m.AddSeasonTermsModule; }); },
    },
    {
        path: 'view-season-term',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-season-terms-add-season-terms-module */ "add-season-terms-add-season-terms-module").then(__webpack_require__.bind(null, /*! ./add-season-terms/add-season-terms.module */ "Bcyt")).then(function (m) { return m.AddSeasonTermsModule; }); }
    }
];
var SeasonTermsModule = /** @class */ (function () {
    function SeasonTermsModule() {
    }
    SeasonTermsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _season_terms_component__WEBPACK_IMPORTED_MODULE_4__["SeasonTermsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], SeasonTermsModule);
    return SeasonTermsModule;
}());



/***/ }),

/***/ "jX9L":
/*!*************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/season-terms/season-terms.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);