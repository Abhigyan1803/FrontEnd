(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-of-central-lec-schedule-of-central-lec-module"],{

/***/ "7d/N":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-one-training/schedule-of-central-lec/schedule-of-central-lec.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\n    <h4 class=\"card-heading\"> GSO 1 TRG<span class=\"sub-menu1\"> > Schedule of Central-lec </span> </h4>\n\n</div>\n\n<mat-card>\n  \n\n    <div class=\"d-flex btn-set\">\n        <div class=\"search\">\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\n        </div>\n        <button mat-raised-button (click)=\"addDocument()\" class=\"add-btton\">\n            <mat-icon>add</mat-icon> Add\n        </button>\n    </div>\n\n    <div class=\"example-container \">\n        <div class=\"example-table-container\">\n    <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\n\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"number\">\n            <th mat-header-cell *matHeaderCellDef>S.No.</th>\n            <td mat-cell *matCellDef=\"let element;let i = index;\">\n                {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\n        </ng-container>\n\n        <!-- Date Column -->\n        <ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n        </ng-container>\n\n        <!-- Description Column -->\n        <ng-container matColumnDef=\"description\">\n            <th mat-header-cell *matHeaderCellDef > Description </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n        </ng-container>\n\n        <!-- Status Column -->\n        <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef > Status </th>\n            <td mat-cell *matCellDef=\"let element\">\n                <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStatus($event,element)\">\n                </mat-slide-toggle>\n            </td>\n        </ng-container>\n\n        <!-- Document Column -->\n        <ng-container matColumnDef=\"document\">\n            <th mat-header-cell *matHeaderCellDef > Document </th>\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\n                <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\"><mat-icon>description</mat-icon> </a>\n            </td>\n        </ng-container>\n\n        <!-- Action Column -->\n        <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef > Action </th>\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\" (click)=\"viewTrgDoc(element)\">\n                    <mat-icon >visibility</mat-icon>\n                </a> </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n        </div>\n\n\n    <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\n</div>\n</mat-card>");

/***/ }),

/***/ "Rh/b":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/schedule-of-central-lec/schedule-of-central-lec.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ScheduleOfCentralLecModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleOfCentralLecModule", function() { return ScheduleOfCentralLecModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _schedule_of_central_lec_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule-of-central-lec.component */ "nDzi");
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
        component: _schedule_of_central_lec_component__WEBPACK_IMPORTED_MODULE_4__["ScheduleOfCentralLecComponent"]
    },
    { path: 'add-schedule', loadChildren: function () { return __webpack_require__.e(/*! import() | add-schedule-of-central-lec-add-schedule-of-central-lec-module */ "add-schedule-of-central-lec-add-schedule-of-central-lec-module").then(__webpack_require__.bind(null, /*! ./add-schedule-of-central-lec/add-schedule-of-central-lec.module */ "42DG")).then(function (m) { return m.AddScheduleOfCentralLecModule; }); } },
    { path: 'view-schedule', loadChildren: function () { return __webpack_require__.e(/*! import() | add-schedule-of-central-lec-add-schedule-of-central-lec-module */ "add-schedule-of-central-lec-add-schedule-of-central-lec-module").then(__webpack_require__.bind(null, /*! ./add-schedule-of-central-lec/add-schedule-of-central-lec.module */ "42DG")).then(function (m) { return m.AddScheduleOfCentralLecModule; }); } }
];
var ScheduleOfCentralLecModule = /** @class */ (function () {
    function ScheduleOfCentralLecModule() {
    }
    ScheduleOfCentralLecModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _schedule_of_central_lec_component__WEBPACK_IMPORTED_MODULE_4__["ScheduleOfCentralLecComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], ScheduleOfCentralLecModule);
    return ScheduleOfCentralLecModule;
}());



/***/ }),

/***/ "nDzi":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/schedule-of-central-lec/schedule-of-central-lec.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ScheduleOfCentralLecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleOfCentralLecComponent", function() { return ScheduleOfCentralLecComponent; });
/* harmony import */ var _raw_loader_schedule_of_central_lec_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./schedule-of-central-lec.component.html */ "7d/N");
/* harmony import */ var _schedule_of_central_lec_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-of-central-lec.component.scss */ "vOUa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
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












var ScheduleOfCentralLecComponent = /** @class */ (function () {
    function ScheduleOfCentralLecComponent(router, spinner, cdref, _trgBattalion, service, dialog) {
        this.router = router;
        this.spinner = spinner;
        this.cdref = cdref;
        this._trgBattalion = _trgBattalion;
        this.service = service;
        this.dialog = dialog;
        this.displayedColumns = ['number', 'date', 'name', 'description', 'status', 'document', 'action'];
    }
    ScheduleOfCentralLecComponent.prototype.ngOnInit = function () { };
    ScheduleOfCentralLecComponent.prototype.ngAfterViewInit = function () {
        this.getAllCentralLecture();
    };
    ScheduleOfCentralLecComponent.prototype.getAllCentralLecture = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllCentralLecture().subscribe(function (res) {
            if (res.status == '1') {
                _this.sopList = res.List;
                _this.cdref.detectChanges();
                _this.spinner.hide();
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](res.List);
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
    ScheduleOfCentralLecComponent.prototype.changeStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeGSOOneTrglCentralLectureStatus(d.id, 1).subscribe(function (res) {
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
            this.service.changeGSOOneTrglCentralLectureStatus(d.id, 0).subscribe(function (res) {
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
    ScheduleOfCentralLecComponent.prototype.openDoc = function (doc) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: 'GSO One Training Schedule-of-central-lec', url: doc.document
            }
        });
    };
    ScheduleOfCentralLecComponent.prototype.addDocument = function () {
        this.router.navigate(['/main/trg-team/gso-1-training/schedule-of-central-lec/add-schedule']);
    };
    ScheduleOfCentralLecComponent.prototype.viewTrgDoc = function (d) {
        if (this.router.url.includes('main/trg-team'))
            this.router.navigate(['/main/trg-team/gso-1-training/schedule-of-central-lec/view-schedule'], { queryParams: { id: d.id } });
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['/main/admin/trg-team/gso-1-training/schedule-of-central-lec/view-schedule'], { queryParams: { id: d.id } });
    };
    ScheduleOfCentralLecComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ScheduleOfCentralLecComponent.prototype.sortData = function (sort) {
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
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.sopList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ScheduleOfCentralLecComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__["TrgBattalionService"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    ScheduleOfCentralLecComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
    };
    ScheduleOfCentralLecComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-schedule-of-central-lec',
            template: _raw_loader_schedule_of_central_lec_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_schedule_of_central_lec_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__["TrgBattalionService"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ScheduleOfCentralLecComponent);
    return ScheduleOfCentralLecComponent;
}());



/***/ }),

/***/ "vOUa":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/schedule-of-central-lec/schedule-of-central-lec.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);