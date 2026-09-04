(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ac-subjects-distribution-of-marks-distribution-of-marks-module"],{

/***/ "63a2":
/*!**************************************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/ac-subjects/distribution-of-marks/distribution-of-marks.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: DistributionOfMarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributionOfMarksComponent", function() { return DistributionOfMarksComponent; });
/* harmony import */ var _raw_loader_distribution_of_marks_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./distribution-of-marks.component.html */ "CNfG");
/* harmony import */ var _distribution_of_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distribution-of-marks.component.scss */ "uzFO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/gc/gc.service */ "yuBT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DistributionOfMarksComponent = /** @class */ (function () {
    function DistributionOfMarksComponent(router, route, spinner, service, cdref, dialog, sharedService) {
        this.router = router;
        this.route = route;
        this.spinner = spinner;
        this.service = service;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.displayedColumns = ['number', 'name', 'uploadedDate', 'document'];
        this.distributionOfMarksList = [];
        this.cadetDetails = JSON.parse(localStorage.getItem("loginResponse")).object;
    }
    DistributionOfMarksComponent.prototype.ngOnInit = function () {
    };
    DistributionOfMarksComponent.prototype.ngAfterViewInit = function () {
        this.getDistributionOfMarksList();
    };
    DistributionOfMarksComponent.prototype.getDistributionOfMarksList = function () {
        var _this = this;
        this.spinner.show();
        this.service.getDistributionOfMarksLIST('Academic Distribution of Marks', this.cadetDetails.term).subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                _this.distributionOfMarksList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(JSON.stringify(err));
            _this.sharedService.openSnackbar("Some Error Occured.");
        });
    };
    DistributionOfMarksComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    DistributionOfMarksComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.distributionOfMarksList.slice();
        if (!sort.active || sort.direction === '') {
            this.distributionOfMarksList = datalist;
            return;
        }
        this.distributionOfMarksList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'description': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.distributionOfMarksList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    DistributionOfMarksComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: e.url
            }
        });
    };
    DistributionOfMarksComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
        { type: app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_8__["GcService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
    ]; };
    DistributionOfMarksComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
    };
    DistributionOfMarksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-distribution-of-marks',
            template: _raw_loader_distribution_of_marks_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_distribution_of_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"], app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_8__["GcService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], DistributionOfMarksComponent);
    return DistributionOfMarksComponent;
}());



/***/ }),

/***/ "7RB9":
/*!***********************************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/ac-subjects/distribution-of-marks/distribution-of-marks.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DistributionOfMarksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributionOfMarksModule", function() { return DistributionOfMarksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _distribution_of_marks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./distribution-of-marks.component */ "63a2");
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
        component: _distribution_of_marks_component__WEBPACK_IMPORTED_MODULE_4__["DistributionOfMarksComponent"]
    }
];
var DistributionOfMarksModule = /** @class */ (function () {
    function DistributionOfMarksModule() {
    }
    DistributionOfMarksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _distribution_of_marks_component__WEBPACK_IMPORTED_MODULE_4__["DistributionOfMarksComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ]
        })
    ], DistributionOfMarksModule);
    return DistributionOfMarksModule;
}());



/***/ }),

/***/ "CNfG":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/ac-subjects/distribution-of-marks/distribution-of-marks.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mt-20\">\n    \n        <!-- <div class=\"mat-new\">\n            <h4 class=\"card-heading\">\n                <span class=\"sub-menu1\"> Distribution of Marks </span>\n            </h4>\n        </div> -->\n    <mat-card class=\"data-card\" >\n        <div class=\"d-flex btn-set mb-2 intro-bar\">\n            <div class=\"pname\">\n                <h4>\n                    Distribution of Marks\n                </h4>\n            </div>\n            <div class=\"search\">\n                <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\n            </div>\n        </div>\n\n        <div class=\"example-container \">\n\n\n            <div class=\"example-table-container\">\n\n                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\n\n\n                    <ng-container matColumnDef=\"number\">\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                        <td mat-cell *matCellDef=\"let element;let i = index;\">\n                            {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"uploadedDate\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.uploadedDate|date:'d MMMM, y'}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"document\">\n                        <th mat-header-cell *matHeaderCellDef> Document </th>\n                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\n                            <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\n                                <mat-icon>description</mat-icon>\n                            </a>\n                        </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                    <tr class=\"mat-row\" *matNoDataRow>\n                        <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\n                    </tr>\n                </table>\n            </div>\n\n\n\n\n            <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\n        </div>\n\n\n\n\n\n\n\n\n\n\n\n    </mat-card>\n</div>");

/***/ }),

/***/ "uzFO":
/*!****************************************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/ac-subjects/distribution-of-marks/distribution-of-marks.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card {\n  min-height: 470px;\n}\n\n.intro-bar {\n  justify-content: space-between;\n}\n\n.pname {\n  color: #bb9450;\n}");

/***/ })

}]);