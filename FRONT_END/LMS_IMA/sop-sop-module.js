(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sop-sop-module"],{

/***/ "6r82":
/*!***********************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/sop/sop.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "8NYq":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/adjutant-gi/sop/sop.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Adjutant Branch<span class=\"sub-menu1\"> > SOPs</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addSOP()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- name Column -->\r\n                <ng-container matColumnDef=\"letterNo\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> LetterNo  </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.letterNo}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"scheduleDate\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> ScheduleDate  </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.scheduleDate | date:'dd MMM y'}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"subject\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Subject  </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.subject}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \r\n                        <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\" >\r\n                            <mat-icon>description</mat-icon>\r\n                        </a>    \r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeAROStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewAro(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n  \r\n</mat-card>\r\n");

/***/ }),

/***/ "E2bx":
/*!***********************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/sop/sop.component.ts ***!
  \***********************************************************************/
/*! exports provided: SopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SopComponent", function() { return SopComponent; });
/* harmony import */ var _raw_loader_sop_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sop.component.html */ "8NYq");
/* harmony import */ var _sop_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sop.component.scss */ "pYTg");
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












var SopComponent = /** @class */ (function () {
    function SopComponent(service, sharedService, router, cdref, spinner, dialog) {
        this.service = service;
        this.sharedService = sharedService;
        this.router = router;
        this.cdref = cdref;
        this.spinner = spinner;
        this.dialog = dialog;
        this.aroList = [];
        this.displayedColumns = ['number', 'letterNo', 'scheduleDate', 'subject', 'document', 'status', 'action'];
    }
    SopComponent.prototype.ngOnInit = function () {
    };
    SopComponent.prototype.ngAfterViewInit = function () {
        this.getSOP();
    };
    SopComponent.prototype.getSOP = function () {
        var _this = this;
        this.spinner.show();
        this.service.getSOP(2).subscribe(function (res) {
            if (res.status == "OK") {
                _this.aroList = res.object;
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
    SopComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "SOP Document", url: e.document
            }
        });
    };
    // changeAROStatus(e:any,id){}
    SopComponent.prototype.changeAROStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.orderSOPStatus(d.id, 1).subscribe(function (res) {
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
            this.service.orderSOPStatus(d.id, 0).subscribe(function (res) {
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
    SopComponent.prototype.addSOP = function () {
        if (this.router.url.includes('main/adjutant-branch'))
            this.router.navigate(['main/adjutant-branch/general-instruction/sop/add-sop']);
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['main/adjutant-branch/general-instruction/sop/add-sop']);
    };
    SopComponent.prototype.viewAro = function (ob) {
        if (this.router.url.includes('main/adjutant-branch'))
            this.router.navigate(['main/adjutant-branch/general-instruction/sop/view-sop'], { queryParams: { id: ob.id } });
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['main/adjutant-branch/general-instruction/sop/view-sop'], { queryParams: { id: ob.id } });
    };
    // getAdjutantList(){
    //   this.service.getAdjutantList().subscribe(res => {
    //     console.log(res);
    //     if(res.status=="OK"){
    //      this.adjutantlist = res.object
    //     }
    //   })   
    // }
    SopComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SopComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.aroList.slice();
        if (!sort.active || sort.direction === '') {
            this.aroList = datalist;
            return;
        }
        this.aroList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.aroList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SopComponent.ctorParameters = function () { return [
        { type: app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_3__["AdjutantService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }
    ]; };
    SopComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true },] }]
    };
    SopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-sop',
            template: _raw_loader_sop_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sop_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_adjutant_adjutant_service__WEBPACK_IMPORTED_MODULE_3__["AdjutantService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]])
    ], SopComponent);
    return SopComponent;
}());



/***/ }),

/***/ "JWvb":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-one-training/sop/sop.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> GSO 1 TRG<span class=\"sub-menu1\"> > SOPs </span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n  \r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addDocument()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n    <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"number\">\r\n            <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n            <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Date Column -->\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Description Column -->\r\n        <ng-container matColumnDef=\"description\">\r\n            <th mat-header-cell *matHeaderCellDef > Description </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Status Column -->\r\n        <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef > Status </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n                <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStatus($event,element)\">\r\n                </mat-slide-toggle>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Document Column -->\r\n        <ng-container matColumnDef=\"document\">\r\n            <th mat-header-cell *matHeaderCellDef > Document </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\"><mat-icon>description</mat-icon> </a>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Action Column -->\r\n        <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef > Action </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\" (click)=\"viewTrgDoc(element)\">\r\n                    <mat-icon >visibility</mat-icon>\r\n                </a> </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n        </div>\r\n\r\n\r\n    <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n</mat-card>");

/***/ }),

/***/ "Ovcs":
/*!******************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/sop/sop.module.ts ***!
  \******************************************************************/
/*! exports provided: SOPModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOPModule", function() { return SOPModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _sop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sop.component */ "PuWK");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _sop_component__WEBPACK_IMPORTED_MODULE_4__["SopComponent"]
    },
    { path: 'add-sop', loadChildren: function () { return __webpack_require__.e(/*! import() | add-sop-add-sop-module */ "add-sop-add-sop-module").then(__webpack_require__.bind(null, /*! ./add-sop/add-sop.module */ "Bd7E")).then(function (m) { return m.AddSOPModule; }); } },
    { path: 'view-sop', loadChildren: function () { return __webpack_require__.e(/*! import() | add-sop-add-sop-module */ "add-sop-add-sop-module").then(__webpack_require__.bind(null, /*! ./add-sop/add-sop.module */ "Bd7E")).then(function (m) { return m.AddSOPModule; }); } }
];
var SOPModule = /** @class */ (function () {
    function SOPModule() {
    }
    SOPModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sop_component__WEBPACK_IMPORTED_MODULE_4__["SopComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ]
        })
    ], SOPModule);
    return SOPModule;
}());



/***/ }),

/***/ "PuWK":
/*!*********************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/sop/sop.component.ts ***!
  \*********************************************************************/
/*! exports provided: SopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SopComponent", function() { return SopComponent; });
/* harmony import */ var _raw_loader_sop_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sop.component.html */ "JWvb");
/* harmony import */ var _sop_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sop.component.scss */ "6r82");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SopComponent = /** @class */ (function () {
    function SopComponent(router, spinner, cdref, _trgBattalion, service, dialog) {
        this.router = router;
        this.spinner = spinner;
        this.cdref = cdref;
        this._trgBattalion = _trgBattalion;
        this.service = service;
        this.dialog = dialog;
        this.displayedColumns = ['number', 'date', 'name', 'description', 'status', 'document', 'action'];
    }
    SopComponent.prototype.ngOnInit = function () { };
    SopComponent.prototype.ngAfterViewInit = function () {
        this.getAllTrgDocs();
    };
    SopComponent.prototype.getAllTrgDocs = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllGsoOneTrg().subscribe(function (res) {
            if (res.status == '1') {
                _this.sopList = res.List;
                _this.cdref.detectChanges();
                _this.spinner.hide();
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.List);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                _this._trgBattalion.openSnackbar(res.msg);
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
            _this._trgBattalion.openSnackbar('Some Error Occured.');
        });
    };
    SopComponent.prototype.changeStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeGSOOneTrgDocStatus(d.id, 1).subscribe(function (res) {
                if (res.status == '1') {
                    _this._trgBattalion.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this.service.changeGSOOneTrgDocStatus(d.id, 0).subscribe(function (res) {
                if (res.status == '1') {
                    _this._trgBattalion.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    SopComponent.prototype.openDoc = function (doc) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: 'GSO One Training SOP', url: doc.document
            }
        });
    };
    SopComponent.prototype.addDocument = function () {
        this.router.navigate(['/main/trg-team/gso-1-training/sop/add-sop']);
    };
    SopComponent.prototype.viewTrgDoc = function (d) {
        if (this.router.url.includes('main/trg-team'))
            this.router.navigate(['/main/trg-team/gso-1-training/sop/view-sop'], { queryParams: { id: d.id } });
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['/main/admin/trg-team/gso-1-training/sop/view-sop'], { queryParams: { id: d.id } });
    };
    SopComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SopComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.sopList.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = datalist;
            return;
        }
        this.sopList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'date': return _this._trgBattalion.compare(a.createdAt, b.createdAt, isAsc);
                case 'name': return _this._trgBattalion.compare(a.title.toLowerCase(), b.title.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.sopList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SopComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__["TrgBattalionService"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    SopComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true },] }]
    };
    SopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-sop',
            template: _raw_loader_sop_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sop_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__["TrgBattalionService"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], SopComponent);
    return SopComponent;
}());



/***/ }),

/***/ "pYTg":
/*!*************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/sop/sop.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "qnob":
/*!********************************************************************!*\
  !*** ./src/app/main/adjutant-branch/adjutant-gi/sop/sop.module.ts ***!
  \********************************************************************/
/*! exports provided: SopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SopModule", function() { return SopModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _sop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sop.component */ "E2bx");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { AddSopComponent } from './add-sop/add-sop.component';
var routes = [
    {
        path: '',
        component: _sop_component__WEBPACK_IMPORTED_MODULE_4__["SopComponent"]
    },
    {
        path: 'add-sop',
        loadChildren: function () { return __webpack_require__.e(/*! import() | sop-add-sop-add-sop-module */ "sop-add-sop-add-sop-module").then(__webpack_require__.bind(null, /*! ../sop/add-sop/add-sop.module */ "XvC6")).then(function (m) { return m.AddSopModule; }); }
    },
    {
        path: 'view-sop',
        loadChildren: function () { return __webpack_require__.e(/*! import() | sop-add-sop-add-sop-module */ "sop-add-sop-add-sop-module").then(__webpack_require__.bind(null, /*! ../sop/add-sop/add-sop.module */ "XvC6")).then(function (m) { return m.AddSopModule; }); }
    }
];
var SopModule = /** @class */ (function () {
    function SopModule() {
    }
    SopModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sop_component__WEBPACK_IMPORTED_MODULE_4__["SopComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], SopModule);
    return SopModule;
}());



/***/ })

}]);