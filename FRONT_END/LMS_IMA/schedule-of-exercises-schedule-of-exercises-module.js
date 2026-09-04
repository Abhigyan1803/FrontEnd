(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-of-exercises-schedule-of-exercises-module"],{

/***/ "M0/v":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/schedule-of-exercises/schedule-of-exercises.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "SA6E":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-one-training/schedule-of-exercises/schedule-of-exercises.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> GSO 1 TRG <span class=\"sub-menu1\">> Schedule of Exercises </span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addSchedule()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr.No.</th>\r\n                        <th>Exercise</th>\r\n                        <th>Season Term</th>\r\n                        <th>Term</th>\r\n                        <th>RESP</th>\r\n                        <th>DS Briefing</th>\r\n                        <th>RECCE/TEWT</th>\r\n                        <th>BBE</th>\r\n                        <th>Verbal Orders</th>\r\n                        <th>SMD</th>\r\n                        <th>Duration</th>\r\n                        <th>Status</th>\r\n                        <th>View</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let s of scheduleList; let i=index\">\r\n                        <td>\r\n                            {{i+1}}\r\n                        </td>\r\n                        <td>\r\n                            <ng-container *ngIf=\"s.exercise\"> {{s.exercise}}</ng-container>\r\n                            <ng-container *ngIf=\"!s.exercise\">--</ng-container> \r\n                        </td>\r\n                        <td>\r\n                            {{s.termSeason.name}} {{s.year}}\r\n                        </td>\r\n                        <td>\r\n                            <ng-container *ngIf=\"s.term\"> {{s.term.name}}</ng-container>\r\n                            <ng-container *ngIf=\"!s.term\">--</ng-container>     \r\n                        </td>\r\n                        <td>\r\n                            <ng-container *ngIf=\"s.respDetails.respType\"> {{s.respDetails.respType}}</ng-container>\r\n                            <ng-container *ngIf=\"!s.respDetails.respType\">--</ng-container> \r\n                          </td>      \r\n                        <td>\r\n                            <ng-container *ngIf=\"s.dsBriefing\"> {{s.dsBriefing}}</ng-container>\r\n                            <ng-container *ngIf=\"!s.dsBriefing\">--</ng-container>   \r\n                           </td>\r\n                        <td>\r\n                            <ng-container *ngIf=\"s.recceTewt\"> {{s.recceTewt}}</ng-container>\r\n                            <ng-container *ngIf=\"!s.recceTewt\">--</ng-container> \r\n                          </td>\r\n                        <td>\r\n                            <ng-container *ngIf=\"s.bbe\"> {{s.bbe}}</ng-container>\r\n                            <ng-container *ngIf=\"!s.bbe\">--</ng-container> \r\n                            </td>\r\n                        <td>\r\n                            <ng-container *ngIf=\"s.verbalOrders\"> {{s.verbalOrders}}</ng-container>\r\n                            <ng-container *ngIf=\"!s.verbalOrders\">--</ng-container>  \r\n                           </td>\r\n                        <td>\r\n                            <ng-container *ngIf=\"s.smd\"> {{s.smd}}</ng-container>\r\n                            <ng-container *ngIf=\"!s.smd\">--</ng-container>  \r\n                          </td>\r\n                        <td>\r\n                            <ng-container *ngIf=\"s.duration\"> {{s.duration}}</ng-container>\r\n                            <ng-container *ngIf=\"!s.duration\">--</ng-container>  \r\n                            </td>\r\n                        <td> <mat-slide-toggle [checked]=\"s.status == '1'\" (change)=\"changeStatus($event,s)\" ></mat-slide-toggle> </td>\r\n                        <td class=\"act-btn\"> <a href=\"javascript:void(0)\" (click)=\"viewSchedule(s)\" ><mat-icon>visibility</mat-icon> </a> </td>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n   \r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Exercise Column -->\r\n                <ng-container matColumnDef=\"exercise\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Exercise </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.exercise||'--'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Season Term Column -->\r\n                <ng-container matColumnDef=\"season_term\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Season Term </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.termSeason}}-{{element.year}}</td>\r\n                </ng-container>\r\n\r\n                <!-- Term Column -->\r\n                <ng-container matColumnDef=\"term\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Term </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.term||'--' }} </td>\r\n                </ng-container>\r\n\r\n                <!-- RESP Column -->\r\n                <ng-container matColumnDef=\"resp\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> RESP </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        {{element.respDetails||'--' }}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- DS Briefing Column -->\r\n                <ng-container matColumnDef=\"ds\">\r\n                    <th mat-header-cell *matHeaderCellDef> DS Briefing </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        {{element?.dsBriefing||'--'}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- RECCE/TEWT Column -->\r\n                <ng-container matColumnDef=\"recce\">\r\n                    <th mat-header-cell *matHeaderCellDef> RECCE/TEWT </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        {{element?.recceTewt||'--'}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- BBE Column -->\r\n                <ng-container matColumnDef=\"bbe\">\r\n                    <th mat-header-cell *matHeaderCellDef> BBE </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        {{element?.bbe||'--'}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Verbal Orders Column -->\r\n                <ng-container matColumnDef=\"verbal\">\r\n                    <th mat-header-cell *matHeaderCellDef> Verbal Orders </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        {{element?.verbalOrders||'--'}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- SMD Column -->\r\n                <ng-container matColumnDef=\"smd\">\r\n                    <th mat-header-cell *matHeaderCellDef> SMD </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        {{element?.smd||'--'}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Duration Column -->\r\n                <ng-container matColumnDef=\"duration\">\r\n                    <th mat-header-cell *matHeaderCellDef> Duration </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        {{element?.duration||'--'}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n                            <mat-icon>description</mat-icon>\r\n                        </a>\r\n                    </td>\r\n                </ng-container>\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewSchedule(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <!-- Row shown when there is no matching data. -->\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "jGfY":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/schedule-of-exercises/schedule-of-exercises.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ScheduleOfExercisesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleOfExercisesModule", function() { return ScheduleOfExercisesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _schedule_of_exercises_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule-of-exercises.component */ "suj1");
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
        component: _schedule_of_exercises_component__WEBPACK_IMPORTED_MODULE_4__["ScheduleOfExercisesComponent"]
    },
    { path: 'add-schedule', loadChildren: function () { return __webpack_require__.e(/*! import() | add-schedule-add-schedule-module */ "add-schedule-add-schedule-module").then(__webpack_require__.bind(null, /*! ./add-schedule/add-schedule.module */ "SOmB")).then(function (m) { return m.AddScheduleModule; }); } },
    { path: 'view-schedule', loadChildren: function () { return __webpack_require__.e(/*! import() | add-schedule-add-schedule-module */ "add-schedule-add-schedule-module").then(__webpack_require__.bind(null, /*! ./add-schedule/add-schedule.module */ "SOmB")).then(function (m) { return m.AddScheduleModule; }); } }
];
var ScheduleOfExercisesModule = /** @class */ (function () {
    function ScheduleOfExercisesModule() {
    }
    ScheduleOfExercisesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _schedule_of_exercises_component__WEBPACK_IMPORTED_MODULE_4__["ScheduleOfExercisesComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], ScheduleOfExercisesModule);
    return ScheduleOfExercisesModule;
}());



/***/ }),

/***/ "suj1":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-one-training/schedule-of-exercises/schedule-of-exercises.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ScheduleOfExercisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleOfExercisesComponent", function() { return ScheduleOfExercisesComponent; });
/* harmony import */ var _raw_loader_schedule_of_exercises_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./schedule-of-exercises.component.html */ "SA6E");
/* harmony import */ var _schedule_of_exercises_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-of-exercises.component.scss */ "M0/v");
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












var ScheduleOfExercisesComponent = /** @class */ (function () {
    function ScheduleOfExercisesComponent(router, _trgBattalion, spinner, cdref, service, dialog) {
        this.router = router;
        this._trgBattalion = _trgBattalion;
        this.spinner = spinner;
        this.cdref = cdref;
        this.service = service;
        this.dialog = dialog;
        this.displayedColumns = ['number', 'exercise', 'season_term', 'term', 'resp', 'ds', 'recce', 'bbe', 'verbal', 'smd', 'duration', 'status', 'document', 'action'];
        this.scheduleList = [];
    }
    ScheduleOfExercisesComponent.prototype.ngOnInit = function () {
        console.log(this.paginator);
    };
    ScheduleOfExercisesComponent.prototype.ngAfterViewInit = function () {
        this.getScheduleOfExerciseList();
    };
    ScheduleOfExercisesComponent.prototype.getScheduleOfExerciseList = function () {
        var _this = this;
        this.spinner.show();
        this.service.getScheduleOfExercisesList().subscribe(function (res) {
            _this.spinner.hide();
            if (res.status == '1') {
                _this.scheduleList = res.List;
                _this.scheduleList = _this.scheduleList.map(function (res) { return ({ id: res.id, createdDate: res.createdDate, bbe: res.bbe,
                    dsBriefing: res.dsBriefing, duration: res.duration, exercise: res.exercise, recceTewt: res.recceTewt,
                    respDetails: res.respDetails.respType, smd: res.smd,
                    term: res.term.name, termSeason: res.termSeason.name,
                    verbalOrders: res.verbalOrders, year: res.year,
                    status: res.status, url: res.url }); });
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](_this.scheduleList);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
            }
            else {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar(res.msg);
            }
        }, function (err) {
            _this.spinner.hide();
            _this._trgBattalion.openSnackbar('Some Error Occured.');
        });
    };
    ScheduleOfExercisesComponent.prototype.changeStatus = function (e, s) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeSchduleOfExerciseStatus(s.id, 1).subscribe(function (res) {
                if (res.status == '1') {
                    _this.cdref.detectChanges();
                    _this._trgBattalion.openSnackbar(res.msg);
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar('Some Error Occured');
            });
        }
        else {
            this.service.changeSchduleOfExerciseStatus(s.id, 0).subscribe(function (res) {
                if (res.status == '1') {
                    _this.cdref.detectChanges();
                    _this._trgBattalion.openSnackbar(res.msg);
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar('Some Error Occured');
            });
        }
    };
    ScheduleOfExercisesComponent.prototype.addSchedule = function () {
        this.router.navigate(['/main/trg-team/gso-1-training/schedule-of-exercises/add-schedule']);
    };
    ScheduleOfExercisesComponent.prototype.viewSchedule = function (s) {
        this.router.navigate(['/main/trg-team/gso-1-training/schedule-of-exercises/view-schedule'], { queryParams: { id: s.id } });
    };
    ScheduleOfExercisesComponent.prototype.openDoc = function (doc) {
        console.log(doc);
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], {
            width: '1200px', height: '600px',
            data: {
                type: 'document', url: doc.url
            }
        });
    };
    ScheduleOfExercisesComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ScheduleOfExercisesComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.scheduleList.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = datalist;
            return;
        }
        this.scheduleList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'exercise': return _this._trgBattalion.compare(a.exercise.toLowerCase(), b.exercise.toLowerCase(), isAsc);
                case 'season_term': return _this._trgBattalion.compare(a.termSeason, b.termSeason, isAsc);
                case 'term': return _this._trgBattalion.compare(a.term, b.term, isAsc);
                case 'resp': return _this._trgBattalion.compare(a.respDetails, b.respDetails, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.scheduleList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ScheduleOfExercisesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__["TrgBattalionService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    ScheduleOfExercisesComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
    };
    ScheduleOfExercisesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-schedule-of-exercises',
            template: _raw_loader_schedule_of_exercises_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_schedule_of_exercises_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__["TrgBattalionService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ScheduleOfExercisesComponent);
    return ScheduleOfExercisesComponent;
}());



/***/ })

}]);