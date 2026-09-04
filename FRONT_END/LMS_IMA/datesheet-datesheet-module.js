(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["datesheet-datesheet-module"],{

/***/ "1aNK":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/datesheet/datesheet.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: DatesheetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatesheetModule", function() { return DatesheetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _datesheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datesheet.component */ "EUTl");
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
        component: _datesheet_component__WEBPACK_IMPORTED_MODULE_4__["DatesheetComponent"]
    },
    {
        path: 'add-datesheet',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-datesheet-add-datesheet-module */ "add-datesheet-add-datesheet-module").then(__webpack_require__.bind(null, /*! ./add-datesheet/add-datesheet.module */ "LiWP")).then(function (m) { return m.AddDatesheetModule; }); }
    },
    {
        path: 'view-datesheet',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-datesheet-add-datesheet-module */ "add-datesheet-add-datesheet-module").then(__webpack_require__.bind(null, /*! ./add-datesheet/add-datesheet.module */ "LiWP")).then(function (m) { return m.AddDatesheetModule; }); }
    }
];
var DatesheetModule = /** @class */ (function () {
    function DatesheetModule() {
    }
    DatesheetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _datesheet_component__WEBPACK_IMPORTED_MODULE_4__["DatesheetComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], DatesheetModule);
    return DatesheetModule;
}());



/***/ }),

/***/ "46rT":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-assessment/service-subjects/datesheet/datesheet.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> GSO-2(ASSESSMENT)<span class=\"sub-menu1\"> > {{term}} > Service Subjects > Datesheet </span> </h4> \r\n\r\n</div>\r\n\r\n<mat-card>\r\n   \r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addDatesheet()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"example-container \">  \r\n        <div class=\"example-table-container\">\r\n    \r\n            \r\n    <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"number\">\r\n            <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n            <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Date Column -->\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Description Column -->\r\n        <ng-container matColumnDef=\"description\">\r\n            <th mat-header-cell *matHeaderCellDef > Description </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Status Column -->\r\n        <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef > Status </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n                <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStatus($event,element)\">\r\n                </mat-slide-toggle>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Document Column -->\r\n        <ng-container matColumnDef=\"document\">\r\n            <th mat-header-cell *matHeaderCellDef > Document </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\"><mat-icon>description</mat-icon> </a>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Action Column -->\r\n        <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef > Action </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\" (click)=\"viewDatesheet(element)\">\r\n                    <mat-icon >visibility</mat-icon>\r\n                </a> </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          <!-- Row shown when there is no matching data. -->\r\n          <tr class=\"mat-row\" *matNoDataRow>\r\n            <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n        </tr>\r\n    </table>\r\n        </div>\r\n    <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "6ilC":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/datesheet/datesheet.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "EUTl":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/datesheet/datesheet.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DatesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatesheetComponent", function() { return DatesheetComponent; });
/* harmony import */ var _raw_loader_datesheet_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./datesheet.component.html */ "46rT");
/* harmony import */ var _datesheet_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datesheet.component.scss */ "6ilC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DatesheetComponent = /** @class */ (function () {
    function DatesheetComponent(spinner, dialog, _trgBattalion, sharedService, router, route, service) {
        var _this = this;
        this.spinner = spinner;
        this.dialog = dialog;
        this._trgBattalion = _trgBattalion;
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
        this.service = service;
        this.displayedColumns = ['number', 'date', 'name',
            //'description',
            'status', 'document', 'action'];
        this.datesheetList = [];
        this.route.params.subscribe(function (params) {
            console.log("ROUTE PARAMETERS", params);
            _this.term = params.term;
            if (params.term == "I Term") {
                _this.termId = 1;
                console.log(_this.term);
            }
            else if (params.term == "II Term") {
                _this.termId = 2;
                console.log(_this.term);
            }
            else if (params.term == "II Tech") {
                _this.termId = 7;
                console.log(_this.term);
            }
            else if (params.term == "III Term") {
                _this.termId = 3;
                console.log(_this.term);
            }
            _this.getDateSheets();
        });
    }
    DatesheetComponent.prototype.ngOnInit = function () { };
    DatesheetComponent.prototype.ngAfterViewInit = function () {
    };
    DatesheetComponent.prototype.getDateSheets = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllDatesheets(this.termId).subscribe(function (res) {
            console.log(res);
            if (res.status == '1') {
                _this.datesheetList = res.List;
                _this.spinner.hide();
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](res.List);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                _this.datesheetList = [];
                _this.dataSource = [];
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.msg);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar('Error Occured.');
        });
    };
    DatesheetComponent.prototype.openDoc = function (d) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', url: d.document
            }
        });
    };
    DatesheetComponent.prototype.addDatesheet = function () {
        this.router.navigate(['/main/trg-team/gso-2-assessment/' + this.term + '/service-subjects/datesheet/add-datesheet']);
    };
    DatesheetComponent.prototype.viewDatesheet = function (d) {
        this.router.navigate(['/main/trg-team/gso-2-assessment/' + this.term + '/service-subjects/datesheet/view-datesheet'], { queryParams: { id: d.id } });
    };
    DatesheetComponent.prototype.changeStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        var status;
        if (e.checked) {
            status = 1;
        }
        else if (!e.checked) {
            status = 0;
        }
        this.service.changeDatesheetStatus(d.id, status).subscribe(function (res) {
            if (res.status == '1') {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
            }
        });
        // if(e.checked){
        //   this.service.changeDatesheetStatus(d.id, 1).subscribe(
        //     res => {
        //       if(res.status == '1'){
        //         this.spinner.hide();
        //         this.sharedService.openSnackbar(res.message)
        //       } else {
        //         this.spinner.hide();
        //         this.sharedService.openSnackbar(res.message)
        //       }
        //     }
        //   )
        // } else {
        //   this.service.changeDatesheetStatus(d.id, 0).subscribe(
        //     res => {
        //       if(res.status == '1'){
        //         this.spinner.hide();
        //         this.sharedService.openSnackbar(res.message)
        //       } else {
        //         this.spinner.hide();
        //         this.sharedService.openSnackbar(res.message)
        //       }
        //     }
        //   )
        // }
    };
    DatesheetComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    DatesheetComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.datesheetList.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = datalist;
            return;
        }
        this.datesheetList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'date': return _this._trgBattalion.compare(a.createdAt, b.createdAt, isAsc);
                case 'name': return _this._trgBattalion.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.datesheetList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    DatesheetComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__["TrgBattalionService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"] }
    ]; };
    DatesheetComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], { static: true },] }]
    };
    DatesheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-datesheet',
            template: _raw_loader_datesheet_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_datesheet_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__["TrgBattalionService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"]])
    ], DatesheetComponent);
    return DatesheetComponent;
}());



/***/ })

}]);