(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reception-gc-reception-gc-module"],{

/***/ "X0CK":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/adjutant-gi/reception-gc/reception-gc.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> RECEPTION</h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addSCHEDULE()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n   \r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- name Column -->\r\n                <ng-container matColumnDef=\"letterNo\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> LetterNo </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.letterNo}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"scheduleDate\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> ScheduleDate </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt | date:'dd MMM y'}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"subject\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Subject </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.subject}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \r\n                        <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\" >\r\n                            <mat-icon>description</mat-icon>\r\n                        </a>    \r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeReceptionStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewReception(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n  \r\n</mat-card>\r\n");

/***/ }),

/***/ "ZSo+":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/reception-gc/reception-gc.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ReceptionGcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceptionGcComponent", function() { return ReceptionGcComponent; });
/* harmony import */ var _raw_loader_reception_gc_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./reception-gc.component.html */ "X0CK");
/* harmony import */ var _reception_gc_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reception-gc.component.scss */ "zFVJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/adjutant/adjutant.service */ "UCXd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ReceptionGcComponent = /** @class */ (function () {
    function ReceptionGcComponent(service, sharedService, router, cdref, spinner, dialog) {
        this.service = service;
        this.sharedService = sharedService;
        this.router = router;
        this.cdref = cdref;
        this.spinner = spinner;
        this.dialog = dialog;
        this.Reception = [];
        this.displayedColumns = ['number', 'letterNo', 'scheduleDate', 'subject', 'document', 'status', 'action'];
    }
    ReceptionGcComponent.prototype.ngOnInit = function () {
    };
    ReceptionGcComponent.prototype.ngAfterViewInit = function () {
        this.getReception();
    };
    ReceptionGcComponent.prototype.getReception = function () {
        var _this = this;
        this.spinner.show();
        this.service.getReception(2).subscribe(function (res) {
            if (res.status == "OK") {
                _this.Reception = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.object);
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
    ReceptionGcComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Reception Document", url: e.document
            }
        });
    };
    // changeAROStatus(e:any,id){}
    ReceptionGcComponent.prototype.changeReceptionStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.orderReceptionStatus(d.id, 1).subscribe(function (res) {
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
            this.service.orderReceptionStatus(d.id, 0).subscribe(function (res) {
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
    ReceptionGcComponent.prototype.addSCHEDULE = function () {
        if (this.router.url.includes('main/adjutant-branch'))
            this.router.navigate(['/main/adjutant-branch/general-instruction/reception/add-reception']);
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['main/adjutant-branch/general-instruction/reception/add-reception']);
    };
    ReceptionGcComponent.prototype.viewReception = function (ob) {
        if (this.router.url.includes('main/adjutant-branch'))
            this.router.navigate(['/main/adjutant-branch/general-instruction/reception/view-reception'], { queryParams: { id: ob.id } });
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['main/adjutant-branch/general-instruction/reception/view-reception'], { queryParams: { id: ob.id } });
    };
    // getAdjutantobject(){
    //   this.service.getAdjutantList().subscribe(res => {
    //     console.log(res);
    //     if(res.status=="OK"){
    //      this.adjutantlist = res.object
    //     }
    //   })   
    // }
    ReceptionGcComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ReceptionGcComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.Reception.slice();
        if (!sort.active || sort.direction === '') {
            this.Reception = datalist;
            return;
        }
        this.Reception = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.Reception);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ReceptionGcComponent.ctorParameters = function () { return [
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_3__["AdjutantService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }
    ]; };
    ReceptionGcComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true },] }]
    };
    ReceptionGcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-reception-gc',
            template: _raw_loader_reception_gc_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_reception_gc_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_3__["AdjutantService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]])
    ], ReceptionGcComponent);
    return ReceptionGcComponent;
}());



/***/ }),

/***/ "oDmw":
/*!**************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/reception-gc/reception-gc.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ReceptionGcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceptionGcModule", function() { return ReceptionGcModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _reception_gc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reception-gc.component */ "ZSo+");
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
        component: _reception_gc_component__WEBPACK_IMPORTED_MODULE_4__["ReceptionGcComponent"]
    },
    {
        path: 'add-reception',
        loadChildren: function () { return __webpack_require__.e(/*! import() | reception-gc-add-reception-add-reception-module */ "reception-gc-add-reception-add-reception-module").then(__webpack_require__.bind(null, /*! ../reception-gc/add-reception/add-reception.module */ "pkFJ")).then(function (m) { return m.AddReceptionModule; }); }
    },
    {
        path: 'view-reception',
        loadChildren: function () { return __webpack_require__.e(/*! import() | reception-gc-add-reception-add-reception-module */ "reception-gc-add-reception-add-reception-module").then(__webpack_require__.bind(null, /*! ../reception-gc/add-reception/add-reception.module */ "pkFJ")).then(function (m) { return m.AddReceptionModule; }); }
    }
];
var ReceptionGcModule = /** @class */ (function () {
    function ReceptionGcModule() {
    }
    ReceptionGcModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _reception_gc_component__WEBPACK_IMPORTED_MODULE_4__["ReceptionGcComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], ReceptionGcModule);
    return ReceptionGcModule;
}());



/***/ }),

/***/ "zFVJ":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/reception-gc/reception-gc.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);