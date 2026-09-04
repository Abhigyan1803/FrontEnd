(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assignment-of-duties-assignment-of-duties-assignment-of-duties-module"],{

/***/ "ELH0":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-battalion/assignment-of-duties/assignment-of-duties/assignment-of-duties.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">TRG Battalion<span class=\"sub-menu1\"> >  Assignment of Duties</span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addAssignment()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n     \r\n    <div class=\"example-container \">  \r\n        <div class=\"example-table-container\">\r\n    <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"number\">\r\n            <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n            <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Date Column -->\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.date|date:'d MMMM, y'}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Status Column -->\r\n        <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef > Status </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n                <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStatus($event,element)\">\r\n                </mat-slide-toggle>\r\n            </td>\r\n        </ng-container>\r\n        <!-- Document Column -->\r\n        <ng-container matColumnDef=\"document\">\r\n            <th mat-header-cell *matHeaderCellDef > Document </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element.document)\"><mat-icon>description</mat-icon> </a>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Battalion Column -->\r\n        <ng-container matColumnDef=\"battalion\">\r\n            <th mat-header-cell *matHeaderCellDef > Battalion </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n               {{element.battalion}}\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Action Column -->\r\n        <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef > Action </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\" (click)=\"viewAssignment(element.id)\">\r\n                    <mat-icon >visibility</mat-icon>\r\n                </a> </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"delete\">\r\n            <th mat-header-cell *matHeaderCellDef > Delete </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\" (click)=\"delete(element)\">\r\n                    <mat-icon >delete</mat-icon>\r\n                </a> </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          <!-- Row shown when there is no matching data. -->\r\n          <tr class=\"mat-row\" *matNoDataRow>\r\n            <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n        </tr>\r\n    </table>\r\n\r\n</div>\r\n    <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n</mat-card>");

/***/ }),

/***/ "WYSk":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/assignment-of-duties/assignment-of-duties/assignment-of-duties.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AssignmentOfDutiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentOfDutiesComponent", function() { return AssignmentOfDutiesComponent; });
/* harmony import */ var _raw_loader_assignment_of_duties_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./assignment-of-duties.component.html */ "ELH0");
/* harmony import */ var _assignment_of_duties_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignment-of-duties.component.scss */ "hjJS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AssignmentOfDutiesComponent = /** @class */ (function () {
    function AssignmentOfDutiesComponent(router, _trgBattalion, spinner, cdref, dialog) {
        this.router = router;
        this._trgBattalion = _trgBattalion;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.displayedColumns = ['number', 'date', 'status', 'document', 'action', 'delete'];
        this.isAdmin = false;
        this.battalionDetails = {};
    }
    AssignmentOfDutiesComponent.prototype.ngOnInit = function () {
        if (this.router.url.includes('main/trg-battalion')) {
            this.isAdmin = false;
            this.battalionDetails = JSON.parse(localStorage.getItem('loginResponse')).object.battalion;
        }
        else if (this.router.url.includes('main/admin')) {
            this.isAdmin = true;
            this.displayedColumns.splice(2, 0, 'battalion');
        }
    };
    AssignmentOfDutiesComponent.prototype.ngAfterViewInit = function () {
        if (this.isAdmin)
            this.getAssignment(0, 2);
        else if (!this.isAdmin)
            this.getAssignment(this.battalionDetails.id, 2);
    };
    AssignmentOfDutiesComponent.prototype.getAssignment = function (battalionId, status) {
        var _this = this;
        this.spinner.show();
        this._trgBattalion.getAssigment(battalionId, status).subscribe(function (res) {
            if (res.status == "1") {
                _this.assignmentList = res.List;
                _this.assignmentList = _this.assignmentList.map(function (res) { return ({
                    id: res.id, date: res.createdAt,
                    document: res.document,
                    battalion: res.battalionType.shortName,
                    status: res.status
                }); });
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.assignmentList);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
            }
            else {
                _this.dataSource = [];
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar(res.msg);
            }
        }, function (err) {
            _this.spinner.hide();
            _this._trgBattalion.openSnackbar("Some Error Occured.");
        });
    };
    AssignmentOfDutiesComponent.prototype.openDoc = function (doc) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Assignment of Duties", url: doc
            }
        });
    };
    AssignmentOfDutiesComponent.prototype.addAssignment = function () {
        if (this.router.url.includes('main/trg-battalion'))
            this.router.navigate(['/main/trg-battalion/assignment-of-duties/add-aod']);
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['/main/admin/trg-battalion/assignment-of-duties/add-aod']);
    };
    AssignmentOfDutiesComponent.prototype.viewAssignment = function (id) {
        if (this.router.url.includes('main/trg-battalion'))
            this.router.navigate(['/main/trg-battalion/assignment-of-duties/view-aod'], { queryParams: { id: id } });
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['/main/admin/trg-battalion/assignment-of-duties/view-aod'], { queryParams: { id: id } });
    };
    AssignmentOfDutiesComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AssignmentOfDutiesComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.assignmentList.slice();
        if (!sort.active || sort.direction === '') {
            this.assignmentList = datalist;
            return;
        }
        this.assignmentList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'date': return _this._trgBattalion.compare(a.date, b.date, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.assignmentList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AssignmentOfDutiesComponent.prototype.delete = function (element) {
        var _this = this;
        this._trgBattalion.deleteAssignmentofDuties(element.id, 3).subscribe(function (res) {
            console.log(res);
            if (res.status == '1') {
                _this._trgBattalion.openSnackbar("Record Deleted");
                _this.ngAfterViewInit();
                _this.cdref.detectChanges();
                _this.spinner.hide();
                _this.router.navigate(['main/trg-battalion/assignment-of-duties']);
            }
            else {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this._trgBattalion.openSnackbar('Error Occured.');
            console.log(JSON.stringify(err));
        });
    };
    AssignmentOfDutiesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    AssignmentOfDutiesComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true },] }]
    };
    AssignmentOfDutiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-assignment-of-duties',
            template: _raw_loader_assignment_of_duties_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_assignment_of_duties_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_6__["TrgBattalionService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AssignmentOfDutiesComponent);
    return AssignmentOfDutiesComponent;
}());



/***/ }),

/***/ "hNQX":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/assignment-of-duties/assignment-of-duties/assignment-of-duties.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AssignmentOfDutiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentOfDutiesModule", function() { return AssignmentOfDutiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _assignment_of_duties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignment-of-duties.component */ "WYSk");
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
        component: _assignment_of_duties_component__WEBPACK_IMPORTED_MODULE_4__["AssignmentOfDutiesComponent"]
    },
    {
        path: 'add-aod',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-assignment-of-duties-add-assignment-of-duties-module */ "add-assignment-of-duties-add-assignment-of-duties-module").then(__webpack_require__.bind(null, /*! ../add-assignment-of-duties/add-assignment-of-duties.module */ "eMAL")).then(function (m) { return m.AddAssignmentOfDutiesModule; }); }
    },
    {
        path: 'view-aod',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-assignment-of-duties-add-assignment-of-duties-module */ "add-assignment-of-duties-add-assignment-of-duties-module").then(__webpack_require__.bind(null, /*! ../add-assignment-of-duties/add-assignment-of-duties.module */ "eMAL")).then(function (m) { return m.AddAssignmentOfDutiesModule; }); }
    }
];
var AssignmentOfDutiesModule = /** @class */ (function () {
    function AssignmentOfDutiesModule() {
    }
    AssignmentOfDutiesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _assignment_of_duties_component__WEBPACK_IMPORTED_MODULE_4__["AssignmentOfDutiesComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AssignmentOfDutiesModule);
    return AssignmentOfDutiesModule;
}());



/***/ }),

/***/ "hjJS":
/*!******************************************************************************************************************!*\
  !*** ./src/app/main/trg-battalion/assignment-of-duties/assignment-of-duties/assignment-of-duties.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);