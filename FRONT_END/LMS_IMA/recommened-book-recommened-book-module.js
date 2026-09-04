(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recommened-book-recommened-book-module"],{

/***/ "Tihp":
/*!********************************************************************************!*\
  !*** ./src/app/main/admin/home/recommened-book/recommened-book.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "ZvMc":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/recommened-book/recommened-book.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Home <span class=\"sub-menu1\"> > IMA Recommended Reading List </span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n   \r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addRecommendedbook()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>P.</th>\r\n                        <th>Image</th>\r\n                        <th>Date & Time</th>\r\n                        <th>Event Name</th>\r\n                        <th>Status</th>\r\n                        <th>View</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let e of eventsList; let i = index\">\r\n                        <td> {{i+1}} </td>\r\n                        <td><img [src]=\"e.image\" (error)=\"noImg($event)\" width=\"50\" height=\"50\"\r\n                                class=\"img-fluid img-circle\" alt=\"User Image\"></td>\r\n                        <td>{{e.eventDate | date:'d MMM, y, HHmm'}}</td>\r\n                        <td>{{e.title}} </td>\r\n                        <td>\r\n                            <mat-slide-toggle [checked]=\"e.status == 1\" (change)=\"changeEventStatus($event, e.id)\">\r\n                            </mat-slide-toggle>\r\n                        </td>\r\n                        <td class=\"act-btn\"> <a href=\"javascript:void(0)\">\r\n                                <mat-icon (click)=\"viewEvent(e)\">visibility</mat-icon>\r\n                            </a> </td>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Rank Column -->\r\n                <ng-container matColumnDef=\"bookName\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Book Name  </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.bookName}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"bookGenre\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Book Genre </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.bookGenre}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Email Column -->\r\n                <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef>Description</th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"authorName\" >\r\n                    <th mat-header-cell *matHeaderCellDef  mat-sort-header>Author </th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element.authorName}}</td>\r\n                </ng-container>\r\n\r\n              \r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeRecommendedbookStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewRecommendedbook(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "kjFi":
/*!******************************************************************************!*\
  !*** ./src/app/main/admin/home/recommened-book/recommened-book.component.ts ***!
  \******************************************************************************/
/*! exports provided: RecommenedBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommenedBookComponent", function() { return RecommenedBookComponent; });
/* harmony import */ var _raw_loader_recommened_book_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./recommened-book.component.html */ "ZvMc");
/* harmony import */ var _recommened_book_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recommened-book.component.scss */ "Tihp");
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










var RecommenedBookComponent = /** @class */ (function () {
    function RecommenedBookComponent(router, service, sharedService, cdref, spinner) {
        this.router = router;
        this.service = service;
        this.sharedService = sharedService;
        this.cdref = cdref;
        this.spinner = spinner;
        this.displayedColumns = ['number', 'bookName', 'bookGenre', 'description', 'authorName', 'status', 'action'];
        this.greybooksList = [];
    }
    RecommenedBookComponent.prototype.ngOnInit = function () {
    };
    RecommenedBookComponent.prototype.ngAfterViewInit = function () {
        this.getAllRecommendedBook();
    };
    RecommenedBookComponent.prototype.getAllRecommendedBook = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllRecommendedBook(2).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.greybooksList = res.object;
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
    RecommenedBookComponent.prototype.changeRecommendedbookStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeRecommendedbookStatus(d.id, 1).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    // this.ngAfterViewInit();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this.service.changeRecommendedbookStatus(d.id, 0).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    // this.ngAfterViewInit();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    RecommenedBookComponent.prototype.addRecommendedbook = function () {
        this.router.navigate(['/main/admin/home/book-list/add-book-list']);
    };
    RecommenedBookComponent.prototype.viewRecommendedbook = function (e) {
        this.router.navigate(['/main/admin/home/book-list/view-book-list'], { queryParams: { id: e.id } });
    };
    RecommenedBookComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    RecommenedBookComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.greybooksList.slice();
        if (!sort.active || sort.direction === '') {
            this.greybooksList = datalist;
            return;
        }
        this.greybooksList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'bookName': return _this.sharedService.compare(a.bookName.toLowerCase(), b.bookName.toLowerCase(), isAsc);
                case 'bookGenre': return _this.sharedService.compare(a.bookGenre.toLowerCase(), b.bookGenre.toLowerCase(), isAsc);
                case 'description': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                case 'authorName': return _this.sharedService.compare(a.authorName.toLowerCase(), b.authorName.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.greybooksList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    RecommenedBookComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }
    ]; };
    RecommenedBookComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true },] }]
    };
    RecommenedBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-recommened-book',
            template: _raw_loader_recommened_book_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_recommened_book_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
    ], RecommenedBookComponent);
    return RecommenedBookComponent;
}());



/***/ }),

/***/ "mjPz":
/*!***************************************************************************!*\
  !*** ./src/app/main/admin/home/recommened-book/recommened-book.module.ts ***!
  \***************************************************************************/
/*! exports provided: RecommenedBookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommenedBookModule", function() { return RecommenedBookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _recommened_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recommened-book.component */ "kjFi");
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
        component: _recommened_book_component__WEBPACK_IMPORTED_MODULE_4__["RecommenedBookComponent"]
    },
    { path: 'add-book-list', loadChildren: function () { return __webpack_require__.e(/*! import() | add-recommended-book-add-recommended-book-module */ "add-recommended-book-add-recommended-book-module").then(__webpack_require__.bind(null, /*! ./add-recommended-book/add-recommended-book.module */ "0pbl")).then(function (m) { return m.AddRecommendedBookModule; }); } },
    { path: 'view-book-list', loadChildren: function () { return __webpack_require__.e(/*! import() | add-recommended-book-add-recommended-book-module */ "add-recommended-book-add-recommended-book-module").then(__webpack_require__.bind(null, /*! ./add-recommended-book/add-recommended-book.module */ "0pbl")).then(function (m) { return m.AddRecommendedBookModule; }); } },
];
var RecommenedBookModule = /** @class */ (function () {
    function RecommenedBookModule() {
    }
    RecommenedBookModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _recommened_book_component__WEBPACK_IMPORTED_MODULE_4__["RecommenedBookComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], RecommenedBookModule);
    return RecommenedBookModule;
}());



/***/ })

}]);