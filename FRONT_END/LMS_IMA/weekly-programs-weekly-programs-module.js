(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["weekly-programs-weekly-programs-module"],{

/***/ "HTNw":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/trg-calendar/weekly-programs/weekly-programs.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: WeeklyProgramsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyProgramsModule", function() { return WeeklyProgramsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _weekly_programs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weekly-programs.component */ "zxfo");
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
        component: _weekly_programs_component__WEBPACK_IMPORTED_MODULE_4__["WeeklyProgramsComponent"]
    },
    {
        path: 'add-program',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-weekly-program-add-weekly-program-module */ "add-weekly-program-add-weekly-program-module").then(__webpack_require__.bind(null, /*! ./add-weekly-program/add-weekly-program.module */ "sXj1")).then(function (m) { return m.AddWeeklyProgramModule; }); },
    },
    {
        path: 'view-program',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-weekly-program-add-weekly-program-module */ "add-weekly-program-add-weekly-program-module").then(__webpack_require__.bind(null, /*! ./add-weekly-program/add-weekly-program.module */ "sXj1")).then(function (m) { return m.AddWeeklyProgramModule; }); },
    }
];
var WeeklyProgramsModule = /** @class */ (function () {
    function WeeklyProgramsModule() {
    }
    WeeklyProgramsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _weekly_programs_component__WEBPACK_IMPORTED_MODULE_4__["WeeklyProgramsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], WeeklyProgramsModule);
    return WeeklyProgramsModule;
}());



/***/ }),

/***/ "N7Bj":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/trg-calendar/weekly-programs/weekly-programs.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> GSO-2(PGME)<span class=\"sub-menu1\"> > TRG Calendar > Weekly PGME </span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addProgram()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>  \r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr.No.</th>\r\n                        <th>Week Ending</th>\r\n                        <th>Date</th>\r\n                        <th>Week</th>\r\n                        <th>Season Term</th>\r\n                        <th>Term</th>\r\n                        <th>Status</th>\r\n                        <th>View</th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n\r\n                    <tr *ngFor=\"let p of programsList;let i=index\">\r\n                        <td>{{i+1}}</td>\r\n                        <td>{{p.weekEndDate |date:'d, MMMM, y'}}</td>\r\n                        <td>{{p.date | date:'d, MMMM, y, EEEE'}} </td>\r\n                        <td>Week - {{p.week}} </td>\r\n                        <td> {{p.sessionTerm}}-{{p.year}} </td>\r\n                        <td> {{p.term}} </td>\r\n                        <td> <mat-slide-toggle [checked]=\"p.status == 1\" (change)=\"changeStatus($event,p)\" ></mat-slide-toggle></td>\r\n                        <td> <a href=\"javascript:void(0)\" (click)=\"viewProgram(p)\" > <mat-icon>visibility</mat-icon>  </a> </td>\r\n                    </tr>\r\n                   \r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- number Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n   \r\n                <!-- Battalion Column -->\r\n                <ng-container matColumnDef=\"battalion\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Battalion </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        {{element?.battalian?.name || '-'}} Bn\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Week Column -->\r\n                <ng-container matColumnDef=\"week\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Week </th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element?.week?.name || '-'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Week Start -->\r\n                <ng-container matColumnDef=\"weekStart\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Week Start Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element.weekStartDate | date:'dd MMM yyyy'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Week End -->\r\n                <ng-container matColumnDef=\"weekEnd\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Week End Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\">{{element.weekEndDate | date:'dd MMM yyyy'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Season Term Column -->\r\n                <ng-container matColumnDef=\"seasonTerm\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Season Term </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.sessionTerm?.name}}-{{element?.year || '-'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Term Column -->\r\n                <ng-container matColumnDef=\"term\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Term </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.term?.name || '-'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Action Column -->\r\n                <!-- <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewProgram(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container> -->\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"    text-align: center;\r\n            \" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n</mat-card>\r\n");

/***/ }),

/***/ "mHV6":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/trg-calendar/weekly-programs/weekly-programs.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "zxfo":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/trg-calendar/weekly-programs/weekly-programs.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: WeeklyProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyProgramsComponent", function() { return WeeklyProgramsComponent; });
/* harmony import */ var _raw_loader_weekly_programs_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./weekly-programs.component.html */ "N7Bj");
/* harmony import */ var _weekly_programs_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weekly-programs.component.scss */ "mHV6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
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











var WeeklyProgramsComponent = /** @class */ (function () {
    function WeeklyProgramsComponent(router, spinner, cdref, sharedService, service, dialog) {
        this.router = router;
        this.spinner = spinner;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.service = service;
        this.dialog = dialog;
        this.displayedColumns = ['number', 'battalion', 'week', 'weekStart', 'weekEnd', 'seasonTerm', 'term', 'status',];
        this.programsList = [];
    }
    WeeklyProgramsComponent.prototype.ngOnInit = function () {
    };
    WeeklyProgramsComponent.prototype.ngAfterViewInit = function () {
        this.getAllPrograms();
    };
    WeeklyProgramsComponent.prototype.getAllPrograms = function () {
        var _this = this;
        this.spinner.show();
        this.service.getWeeklyPrograms().subscribe(function (res) {
            // console.log(res);
            if (res.status == 'OK') {
                _this.programsList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](res.object);
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
            _this.sharedService.openSnackbar('Error Occured.');
        });
    };
    WeeklyProgramsComponent.prototype.changeStatus = function (e, p) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeWeeklyProgramStatus(p.id, 1).subscribe(function (res) {
                // console.log(res);
                if (res.status == 'OK') {
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar("Status Changed Successfully.");
                }
                else {
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar("Error Occured.");
            });
        }
        else {
            this.service.changeWeeklyProgramStatus(p.id, 0).subscribe(function (res) {
                // console.log(res);
                if (res.status == 'OK') {
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar("Status Changed Successfully.");
                }
                else {
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.sharedService.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.sharedService.openSnackbar("Error Occured.");
            });
        }
    };
    WeeklyProgramsComponent.prototype.addProgram = function () {
        this.router.navigate(['main/trg-team/gso-2-pgme/trg-calendar/weekly-programs/add-program']);
    };
    WeeklyProgramsComponent.prototype.viewProgram = function (p) {
        this.router.navigate(['main/trg-team/gso-2-pgme/trg-calendar/weekly-programs/view-program'], { queryParams: { id: p.id } });
    };
    WeeklyProgramsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    WeeklyProgramsComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.programsList.slice();
        if (!sort.active || sort.direction === '') {
            this.programsList = datalist;
            return;
        }
        this.programsList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'date': return _this.sharedService.compare(a.date, b.date, isAsc);
                case 'term': return _this.sharedService.compare(a === null || a === void 0 ? void 0 : a.term, b === null || b === void 0 ? void 0 : b.term, isAsc);
                case 'seasonTerm': return _this.sharedService.compare(a.sessionTerm.toLowerCase(), b.sessionTerm.toLowerCase(), isAsc);
                case 'week': return _this.sharedService.compare(a.week, b.week, isAsc);
                case 'battalion': return _this.sharedService.compare(a.battalian, b.battalian, isAsc);
                case 'period': return _this.sharedService.compare(a.period.toLowerCase(), b.period.toLowerCase(), isAsc);
                case 'subject': return _this.sharedService.compare(a.subject.toLowerCase(), b.subject.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.programsList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    WeeklyProgramsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__["TrgTeamService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    WeeklyProgramsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true },] }]
    };
    WeeklyProgramsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-weekly-programs',
            template: _raw_loader_weekly_programs_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_weekly_programs_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__["TrgTeamService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], WeeklyProgramsComponent);
    return WeeklyProgramsComponent;
}());



/***/ })

}]);