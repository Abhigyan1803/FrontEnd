(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exam-schedule-exam-schedule-module"],{

/***/ "/3Fz":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/exam-schedule/exam-schedule.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "1u+y":
/*!******************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/exam-schedule/exam-schedule.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ExamScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamScheduleComponent", function() { return ExamScheduleComponent; });
/* harmony import */ var _raw_loader_exam_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./exam-schedule.component.html */ "3EOw");
/* harmony import */ var _exam_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-schedule.component.scss */ "gSfH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
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












var ExamScheduleComponent = /** @class */ (function () {
    function ExamScheduleComponent(router, route, service, spinner, cdref, dialog, sharedService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.service = service;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.displayedColumns = ['number', 'name', 'createdAt', 'document', 'status', 'action'];
        this.examScheduleList = [];
        this.subTypes = ['General Instruction', 'Resp of Eval', 'Resp of Invigilation', 'Confirmation of Marks', 'Retest'];
        this.type = 'BMT-1';
        this.route.params.subscribe(function (params) {
            _this.dataSource = null;
            _this.examScheduleList = [];
            // console.log(params);
            _this.subType = params.subType;
            _this.term = params.term;
            if (_this.term == 'I Term') {
                _this.termId = 1;
            }
            else if (_this.term == 'II Term') {
                _this.termId = 2;
            }
            else if (_this.term == 'III Term') {
                _this.termId = 3;
            }
            else if (_this.term == 'II Tech') {
                _this.termId = 7;
            }
            else {
                _this.router.navigate(['/main/trg-team/dashboard']);
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 3);
            }
            if (!_this.subTypes.includes(_this.subType)) {
                _this.router.navigate(['/main/trg-team/dashboard']);
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 3);
            }
            _this.getExamSchedule(_this.termId, _this.type, _this.subType);
        });
    }
    ExamScheduleComponent.prototype.ngOnInit = function () {
    };
    ExamScheduleComponent.prototype.ngAfterViewInit = function () {
    };
    ExamScheduleComponent.prototype.getExamSchedule = function (termId, type, subType) {
        var _this = this;
        this.spinner.show();
        this.service.getExamScheduleList(termId, type, subType).subscribe(function (res) {
            // console.log(res);
            if (res.status == "1") {
                _this.examScheduleList = res.List;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.List);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.msg);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar("Some Error Occured.");
        });
    };
    ExamScheduleComponent.prototype.addExamSchedule = function () {
        this.router.navigate(["/main/trg-team/gso-2-assessment/" + this.term + "/service-subjects/" + this.type + "/" + this.subType + "/add-exam-schedule"]);
    };
    ExamScheduleComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    ExamScheduleComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ExamScheduleComponent.prototype.view = function (element) {
        this.router.navigate(["/main/trg-team/gso-2-assessment/" + this.term + "/service-subjects/" + this.type + "/" + this.subType + "/view-exam-schedule"], { queryParams: { id: element.id } });
    };
    ExamScheduleComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.examScheduleList.slice();
        if (!sort.active || sort.direction === '') {
            this.examScheduleList = datalist;
            return;
        }
        this.examScheduleList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'description': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.examScheduleList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ExamScheduleComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: e.document
            }
        });
    };
    ExamScheduleComponent.prototype.changeStatus = function (e, d) {
        var _this = this;
        var status;
        if (e.checked)
            status = 1;
        else
            status = 0;
        this.spinner.show();
        this.service.changeExamScheduleStatus(d.id, status).subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.sharedService.openSnackbar(res.message);
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar('Error Occured.');
        });
        this.spinner.hide();
    };
    ExamScheduleComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] }
    ]; };
    ExamScheduleComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
    };
    ExamScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-exam-schedule',
            template: _raw_loader_exam_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_exam_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])
    ], ExamScheduleComponent);
    return ExamScheduleComponent;
}());



/***/ }),

/***/ "3EOw":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/exam-schedule/exam-schedule.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\n    <h4 class=\"card-heading\"> GSO-2(Assement) <span class=\"sub-menu1\"> > {{term}} > Service Subject > {{type}} >\n            {{subType}} </span> </h4>\n</div>\n\n<mat-card>\n\n    <div class=\"d-flex btn-set\">\n        <div class=\"search\">\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\n        </div>\n        <button mat-raised-button (click)=\"addExamSchedule()\" class=\"add-btton\">\n            <mat-icon>add</mat-icon> Add\n        </button>\n    </div>\n\n\n\n    <div class=\"example-container \">\n        <div class=\"example-table-container\">\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\n\n                <!-- Position Column -->\n                <ng-container matColumnDef=\"number\">\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"createdAt\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\n                </ng-container>\n\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                </ng-container>\n\n                <!-- Description Column -->\n                <ng-container matColumnDef=\"description\">\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n                </ng-container>\n\n\n                <!-- Status Column -->\n                <ng-container matColumnDef=\"status\">\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                        <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStatus($event,element)\">\n                        </mat-slide-toggle>\n                    </td>\n                </ng-container>\n                <!-- Document Column -->\n                <ng-container matColumnDef=\"document\">\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\n                        <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\n                            <mat-icon>description</mat-icon>\n                        </a>\n                    </td>\n                </ng-container>\n\n                <!-- Action Column -->\n                <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\n                            (click)=\"view(element)\">\n                            <mat-icon>visibility</mat-icon>\n                        </a> </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                <!-- Row shown when there is no matching data. -->\n                <tr class=\"mat-row\" *matNoDataRow>\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\n                </tr>\n            </table>\n\n        </div>\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\n    </div>\n</mat-card>");

/***/ }),

/***/ "5JL8":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-2/exam-schedule/exam-schedule.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\n    <h4 class=\"card-heading\"> GSO-2(Assement) <span class=\"sub-menu1\"> > {{term}} > Service Subject > {{type}} >\n            {{subType}} </span> </h4>\n</div>\n\n<mat-card>\n\n    <div class=\"d-flex btn-set\">\n        <div class=\"search\">\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\n        </div>\n        <button mat-raised-button (click)=\"addExamSchedule()\" class=\"add-btton\">\n            <mat-icon>add</mat-icon> Add\n        </button>\n    </div>\n\n\n\n    <div class=\"example-container \">\n        <div class=\"example-table-container\">\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\n\n                <!-- Position Column -->\n                <ng-container matColumnDef=\"number\">\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"createdAt\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\n                </ng-container>\n\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                </ng-container>\n\n                <!-- Description Column -->\n                <ng-container matColumnDef=\"description\">\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n                </ng-container>\n\n\n                <!-- Status Column -->\n                <ng-container matColumnDef=\"status\">\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                        <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStatus($event,element)\">\n                        </mat-slide-toggle>\n                    </td>\n                </ng-container>\n                <!-- Document Column -->\n                <ng-container matColumnDef=\"document\">\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\n                        <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\n                            <mat-icon>description</mat-icon>\n                        </a>\n                    </td>\n                </ng-container>\n\n                <!-- Action Column -->\n                <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\n                            (click)=\"view(element)\">\n                            <mat-icon>visibility</mat-icon>\n                        </a> </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                <!-- Row shown when there is no matching data. -->\n                <tr class=\"mat-row\" *matNoDataRow>\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\n                </tr>\n            </table>\n\n        </div>\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\n    </div>\n</mat-card>");

/***/ }),

/***/ "Fle/":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/exam-schedule/exam-schedule.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ExamScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamScheduleModule", function() { return ExamScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _exam_schedule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exam-schedule.component */ "1u+y");
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
        component: _exam_schedule_component__WEBPACK_IMPORTED_MODULE_4__["ExamScheduleComponent"]
    },
    {
        path: 'add-exam-schedule',
        loadChildren: function () { return Promise.all(/*! import() | add-exam-schedule-add-exam-schedule-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("add-exam-schedule-add-exam-schedule-module")]).then(__webpack_require__.bind(null, /*! ./add-exam-schedule/add-exam-schedule.module */ "bXeZ")).then(function (m) { return m.AddExamScheduleModule; }); }
    },
    {
        path: 'view-exam-schedule',
        loadChildren: function () { return Promise.all(/*! import() | add-exam-schedule-add-exam-schedule-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("add-exam-schedule-add-exam-schedule-module")]).then(__webpack_require__.bind(null, /*! ./add-exam-schedule/add-exam-schedule.module */ "bXeZ")).then(function (m) { return m.AddExamScheduleModule; }); }
    },
];
var ExamScheduleModule = /** @class */ (function () {
    function ExamScheduleModule() {
    }
    ExamScheduleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _exam_schedule_component__WEBPACK_IMPORTED_MODULE_4__["ExamScheduleComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], ExamScheduleModule);
    return ExamScheduleModule;
}());



/***/ }),

/***/ "gSfH":
/*!********************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-1/exam-schedule/exam-schedule.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "iIQE":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/examination/exam-schedule/exam-schedule.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">  {{type}}<span class=\"sub-menu1\"> </span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addDistributionMarks()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n   \r\n\r\n    <div class=\"example-container \">  \r\n        <div class=\"example-table-container\">\r\n    <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"number\">\r\n            <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n            <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"uploadedDate\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.uploadedDate|date:'d MMMM, y'}} </td>\r\n        </ng-container>\r\n        \r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Description Column -->\r\n        <ng-container matColumnDef=\"description\">\r\n            <th mat-header-cell *matHeaderCellDef > Description </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <!-- Status Column -->\r\n        <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef > Status </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n                <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStatus($event,element)\">\r\n                </mat-slide-toggle>\r\n            </td>\r\n        </ng-container>\r\n        <!-- Document Column -->\r\n        <ng-container matColumnDef=\"document\">\r\n            <th mat-header-cell *matHeaderCellDef > Document </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\"><mat-icon>description</mat-icon> </a>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Action Column -->\r\n        <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef > Action </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\" (click)=\"viewMark(element.id)\">\r\n                    <mat-icon >visibility</mat-icon>\r\n                </a> </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          <!-- Row shown when there is no matching data. -->\r\n          <tr class=\"mat-row\" *matNoDataRow>\r\n            <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n        </tr>\r\n    </table>\r\n\r\n</div>\r\n    <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n</mat-card>");

/***/ }),

/***/ "jdw8":
/*!********************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-2/exam-schedule/exam-schedule.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "nso6":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/exam-schedule/exam-schedule.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ExamScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamScheduleComponent", function() { return ExamScheduleComponent; });
/* harmony import */ var _raw_loader_exam_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./exam-schedule.component.html */ "iIQE");
/* harmony import */ var _exam_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-schedule.component.scss */ "/3Fz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ExamScheduleComponent = /** @class */ (function () {
    function ExamScheduleComponent(router, route, adminservice, spinner, cdref, dialog, sharedService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.adminservice = adminservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.displayedColumns = ['number', 'name', 'uploadedDate', 'document', 'status', 'action'];
        this.DistributionMarks = [];
        this.route.params.subscribe(function (params) {
            _this.type = params.type;
            console.log(_this.type, "type route");
            if (_this.type == "Exam-I-Term") {
                _this.termId = 1;
            }
            else if (_this.type == "Exam-II-Term") {
                _this.termId = 2;
            }
            else if (_this.type == "Exam-III-Term") {
                _this.termId = 3;
            }
            else if (_this.type == "Exam-II-Tech") {
                _this.termId = 7;
            }
            _this.getDistributionMarks('Academic Exam Schedule');
            // this.ngAfterViewInit();
        });
    }
    ExamScheduleComponent.prototype.ngOnInit = function () {
    };
    ExamScheduleComponent.prototype.ngAfterViewInit = function () {
        // this.getDistributionMarks(this.type)
    };
    ExamScheduleComponent.prototype.getDistributionMarks = function (type) {
        var _this = this;
        this.spinner.show();
        this.adminservice.getDistributionMarksLIST(type, this.termId).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.DistributionMarks = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
                console.log(res, "=================");
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.adminservice.openSnackbar("Some Error Occured.");
        });
    };
    ExamScheduleComponent.prototype.addDistributionMarks = function () {
        this.router.navigate(['main/academic-depart/examination/Exam-schedule/' + this.type + '/add-exam-marks']);
    };
    ExamScheduleComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    ExamScheduleComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ExamScheduleComponent.prototype.viewMark = function (id) {
        this.router.navigate(['main/academic-depart/examination/Exam-schedule/' + this.type + '/view-exam-marks'], { queryParams: { id: id } });
    };
    ExamScheduleComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.DistributionMarks.slice();
        if (!sort.active || sort.direction === '') {
            this.DistributionMarks = datalist;
            return;
        }
        this.DistributionMarks = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'description': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.DistributionMarks);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ExamScheduleComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: e.url
            }
        });
    };
    ExamScheduleComponent.prototype.changeStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.adminservice.updateDistributionStatus(d.id, 1).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    // this.ngAfterViewInit();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this.adminservice.updateDistributionStatus(d.id, 0).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    // this.ngAfterViewInit();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    ExamScheduleComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
    ]; };
    ExamScheduleComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }]
    };
    ExamScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ms-exam-schedule',
            template: _raw_loader_exam_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_exam_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], ExamScheduleComponent);
    return ExamScheduleComponent;
}());



/***/ }),

/***/ "r3qU":
/*!******************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-2/exam-schedule/exam-schedule.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ExamScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamScheduleComponent", function() { return ExamScheduleComponent; });
/* harmony import */ var _raw_loader_exam_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./exam-schedule.component.html */ "5JL8");
/* harmony import */ var _exam_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-schedule.component.scss */ "jdw8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
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












var ExamScheduleComponent = /** @class */ (function () {
    function ExamScheduleComponent(router, route, service, spinner, cdref, dialog, sharedService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.service = service;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.displayedColumns = ['number', 'name', 'createdAt', 'document', 'status', 'action'];
        this.examScheduleList = [];
        this.subTypes = ['General Instruction', 'Resp of Eval', 'Resp of Invigilation', 'Confirmation of Marks', 'Retest'];
        this.type = 'BMT-2';
        this.route.params.subscribe(function (params) {
            _this.dataSource = null;
            _this.examScheduleList = [];
            // console.log(params);
            _this.subType = params.subType;
            _this.term = params.term;
            if (_this.term == 'I Term') {
                _this.termId = 1;
            }
            else if (_this.term == 'II Term') {
                _this.termId = 2;
            }
            else if (_this.term == 'III Term') {
                _this.termId = 3;
            }
            else if (_this.term == 'II Tech') {
                _this.termId = 7;
            }
            else {
                _this.router.navigate(['/main/trg-team/dashboard']);
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 3);
            }
            if (!_this.subTypes.includes(_this.subType)) {
                _this.router.navigate(['/main/trg-team/dashboard']);
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 3);
            }
            _this.getExamSchedule(_this.termId, _this.type, _this.subType);
        });
    }
    ExamScheduleComponent.prototype.ngOnInit = function () {
    };
    ExamScheduleComponent.prototype.ngAfterViewInit = function () {
    };
    ExamScheduleComponent.prototype.getExamSchedule = function (termId, type, subType) {
        var _this = this;
        this.spinner.show();
        this.service.getExamScheduleList(termId, type, subType).subscribe(function (res) {
            // console.log(res);
            if (res.status == "1") {
                _this.examScheduleList = res.List;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.List);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.msg);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar("Some Error Occured.");
        });
    };
    ExamScheduleComponent.prototype.addExamSchedule = function () {
        this.router.navigate(["/main/trg-team/gso-2-assessment/" + this.term + "/service-subjects/" + this.type + "/" + this.subType + "/add-exam-schedule"]);
    };
    ExamScheduleComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    ExamScheduleComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ExamScheduleComponent.prototype.view = function (element) {
        this.router.navigate(["/main/trg-team/gso-2-assessment/" + this.term + "/service-subjects/" + this.type + "/" + this.subType + "/view-exam-schedule"], { queryParams: { id: element.id } });
    };
    ExamScheduleComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.examScheduleList.slice();
        if (!sort.active || sort.direction === '') {
            this.examScheduleList = datalist;
            return;
        }
        this.examScheduleList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'description': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.examScheduleList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ExamScheduleComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: e.document
            }
        });
    };
    ExamScheduleComponent.prototype.changeStatus = function (e, d) {
        var _this = this;
        var status;
        if (e.checked)
            status = 1;
        else
            status = 0;
        this.spinner.show();
        this.service.changeExamScheduleStatus(d.id, status).subscribe(function (res) {
            if (res.status == '1') {
                _this.sharedService.openSnackbar(res.message);
                _this.cdref.detectChanges();
                // this.ngAfterViewInit();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar('Error Occured.');
        });
        this.spinner.hide();
    };
    ExamScheduleComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] }
    ]; };
    ExamScheduleComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
    };
    ExamScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-exam-schedule',
            template: _raw_loader_exam_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_exam_schedule_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_9__["TrgTeamService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])
    ], ExamScheduleComponent);
    return ExamScheduleComponent;
}());



/***/ }),

/***/ "uF7m":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-assessment/service-subjects/BMT-2/exam-schedule/exam-schedule.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ExamScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamScheduleModule", function() { return ExamScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _exam_schedule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exam-schedule.component */ "r3qU");
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
        component: _exam_schedule_component__WEBPACK_IMPORTED_MODULE_4__["ExamScheduleComponent"]
    },
    {
        path: 'add-exam-schedule',
        loadChildren: function () { return Promise.all(/*! import() | add-exam-schedule-add-exam-schedule-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("add-exam-schedule-add-exam-schedule-module")]).then(__webpack_require__.bind(null, /*! ./add-exam-schedule/add-exam-schedule.module */ "oR0r")).then(function (m) { return m.AddExamScheduleModule; }); }
    },
    {
        path: 'view-exam-schedule',
        loadChildren: function () { return Promise.all(/*! import() | add-exam-schedule-add-exam-schedule-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("add-exam-schedule-add-exam-schedule-module")]).then(__webpack_require__.bind(null, /*! ./add-exam-schedule/add-exam-schedule.module */ "oR0r")).then(function (m) { return m.AddExamScheduleModule; }); }
    },
];
var ExamScheduleModule = /** @class */ (function () {
    function ExamScheduleModule() {
    }
    ExamScheduleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _exam_schedule_component__WEBPACK_IMPORTED_MODULE_4__["ExamScheduleComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], ExamScheduleModule);
    return ExamScheduleModule;
}());



/***/ }),

/***/ "y9i3":
/*!****************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/exam-schedule/exam-schedule.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ExamScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamScheduleModule", function() { return ExamScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _exam_schedule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exam-schedule.component */ "nso6");
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
        component: _exam_schedule_component__WEBPACK_IMPORTED_MODULE_4__["ExamScheduleComponent"]
    },
    {
        path: 'add-exam-marks',
        loadChildren: function () { return Promise.all(/*! import() | add-exam-schedule-add-exam-schedule-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("add-exam-schedule-add-exam-schedule-module")]).then(__webpack_require__.bind(null, /*! ./add-exam-schedule/add-exam-schedule.module */ "XKw6")).then(function (m) { return m.AddExamScheduleModule; }); }
    },
    {
        path: 'view-exam-marks',
        loadChildren: function () { return Promise.all(/*! import() | add-exam-schedule-add-exam-schedule-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("add-exam-schedule-add-exam-schedule-module")]).then(__webpack_require__.bind(null, /*! ./add-exam-schedule/add-exam-schedule.module */ "XKw6")).then(function (m) { return m.AddExamScheduleModule; }); }
    }
];
var ExamScheduleModule = /** @class */ (function () {
    function ExamScheduleModule() {
    }
    ExamScheduleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _exam_schedule_component__WEBPACK_IMPORTED_MODULE_4__["ExamScheduleComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], ExamScheduleModule);
    return ExamScheduleModule;
}());



/***/ })

}]);