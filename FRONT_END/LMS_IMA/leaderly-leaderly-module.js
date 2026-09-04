(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leaderly-leaderly-module"],{

/***/ "1c3E":
/*!*********************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/leaderly/leaderly.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LeaderlyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderlyModule", function() { return LeaderlyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _leaderly_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaderly.component */ "uVJQ");
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
        component: _leaderly_component__WEBPACK_IMPORTED_MODULE_4__["LeaderlyComponent"]
    },
    { path: 'add-syllabus', loadChildren: function () { return __webpack_require__.e(/*! import() | add-syllabus-add-syllabus-module */ "add-syllabus-add-syllabus-module").then(__webpack_require__.bind(null, /*! ./add-syllabus/add-syllabus.module */ "1Evs")).then(function (m) { return m.AddSyllabusModule; }); } },
    { path: 'view-syllabus', loadChildren: function () { return __webpack_require__.e(/*! import() | add-syllabus-add-syllabus-module */ "add-syllabus-add-syllabus-module").then(__webpack_require__.bind(null, /*! ./add-syllabus/add-syllabus.module */ "1Evs")).then(function (m) { return m.AddSyllabusModule; }); } },
];
var LeaderlyModule = /** @class */ (function () {
    function LeaderlyModule() {
    }
    LeaderlyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _leaderly_component__WEBPACK_IMPORTED_MODULE_4__["LeaderlyComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], LeaderlyModule);
    return LeaderlyModule;
}());



/***/ }),

/***/ "R/31":
/*!**************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/leaderly/leaderly.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "sPDJ":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/syllabus/leaderly/leaderly.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> GSO-2(PGME) <span class=\"sub-menu1\"> > {{term}} > Syllabus > Leaderly </span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n\r\n\r\n    \r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addSyllabus()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr.No.</th>\r\n                        <th>Date</th>\r\n                        <th>Name</th>                       \r\n                        <th>Status</th>\r\n                        <th>Document</th>\r\n                        <th>View</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <ng-container>\r\n                        <tr *ngFor=\"let syllabus of syllabusList;let i=index \">\r\n                            <td>{{i+1}}</td>\r\n                            <td>{{syllabus.date | date:'d MMMM, y'}} </td>\r\n                            <td>{{syllabus.name}} </td>                        \r\n                            <td>\r\n                                <mat-slide-toggle [checked]=\"syllabus.status == 1\"\r\n                                    (change)=\"changeStatus($event,syllabus)\"></mat-slide-toggle>\r\n                            </td>\r\n                            <td> <a href=\"javascript:void(0)\" (click)=\"openDoc(syllabus.doc)\">\r\n                                    <mat-icon>description</mat-icon>\r\n                                </a> </td>\r\n                            <td class=\"act-btn\">\r\n                                <a href=\"javascript:void(0)\" title=\"View syllabus\" (click)=\"viewSyllabus(syllabus)\">\r\n                                    <mat-icon>visibility</mat-icon>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                    </ng-container>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n    <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"number\">\r\n            <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n            <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Date Column -->\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Description Column -->\r\n        <ng-container matColumnDef=\"description\">\r\n            <th mat-header-cell *matHeaderCellDef > Description </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"term\">\r\n            <th mat-header-cell *matHeaderCellDef > Term </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.termId}} </td>\r\n        </ng-container>\r\n        <!-- Status Column -->\r\n        <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef > Status </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n                <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStatus($event,element)\">\r\n                </mat-slide-toggle>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Document Column -->\r\n        <ng-container matColumnDef=\"document\">\r\n            <th mat-header-cell *matHeaderCellDef > Document </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\"><mat-icon>description</mat-icon> </a>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Action Column -->\r\n        <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef > View </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\" (click)=\"viewSyllabus(element)\">\r\n                    <mat-icon >visibility</mat-icon>\r\n                </a> </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          <!-- Row shown when there is no matching data. -->\r\n          <tr class=\"mat-row\" *matNoDataRow>\r\n            <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n        </tr>\r\n    </table>\r\n    </div>\r\n    <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n</mat-card>");

/***/ }),

/***/ "uVJQ":
/*!************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/leaderly/leaderly.component.ts ***!
  \************************************************************************************/
/*! exports provided: LeaderlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderlyComponent", function() { return LeaderlyComponent; });
/* harmony import */ var _raw_loader_leaderly_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./leaderly.component.html */ "sPDJ");
/* harmony import */ var _leaderly_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaderly.component.scss */ "R/31");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
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












var LeaderlyComponent = /** @class */ (function () {
    function LeaderlyComponent(spinner, cdref, dialog, sharedService, router, route, service) {
        var _this = this;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
        this.service = service;
        this.displayedColumns = ['number', 'date', 'name', 'description',
            //'term', 
            'status', 'document', 'action'];
        this.route.params.subscribe(function (params) {
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
            _this.ngAfterViewInit();
        });
    }
    LeaderlyComponent.prototype.ngOnInit = function () {
    };
    LeaderlyComponent.prototype.ngAfterViewInit = function () {
        this.getSyllabusList();
    };
    LeaderlyComponent.prototype.getSyllabusList = function () {
        var _this = this;
        this.spinner.show();
        this.service.getSyllabusList('Leaderly', this.termId, 2).subscribe(function (res) {
            if (res.status == "OK") {
                _this.syllabusList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar('Some Error Occurred');
        });
    };
    LeaderlyComponent.prototype.addSyllabus = function () {
        if (this.router.url.includes('/main/admin/trg-team/')) {
            this.router.navigate(['/main/admin/trg-team/gso-2-pgme/' + this.term + '/syllabus/leaderly/add-syllabus']);
        }
        else {
            this.router.navigate(['/main/trg-team/gso-2-pgme/' + this.term + '/syllabus/leaderly/add-syllabus']);
        }
    };
    LeaderlyComponent.prototype.viewSyllabus = function (s) {
        if (this.router.url.includes('/main/admin/trg-team/')) {
            this.router.navigate(['/main/admin/trg-team/gso-2-pgme/' + this.term + '/syllabus/leaderly/view-syllabus'], { queryParams: { id: s.id } });
        }
        else {
            this.router.navigate(['/main/trg-team/gso-2-pgme/syllabus/' + this.term + '/leaderly/view-syllabus'], { queryParams: { id: s.id } });
        }
    };
    LeaderlyComponent.prototype.openDoc = function (d) {
        var dialogRef = this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: 'Syllabus Leaderly', url: d
            }
        });
    };
    LeaderlyComponent.prototype.changeStatus = function (e, l) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.updateSyllabusStatus(l.id, 1).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.sharedService.openSnackbar("Status updated successfully");
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this.sharedService.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this.service.updateSyllabusStatus(l.id, 0).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.sharedService.openSnackbar("Status updated successfully");
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this.sharedService.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    LeaderlyComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    LeaderlyComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.syllabusList.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = datalist;
            return;
        }
        this.syllabusList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'date': return _this.sharedService.compare(a.createdAt, b.createdAt, isAsc);
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.syllabusList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    LeaderlyComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"] }
    ]; };
    LeaderlyComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], { static: true },] }]
    };
    LeaderlyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-leaderly',
            template: _raw_loader_leaderly_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_leaderly_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"]])
    ], LeaderlyComponent);
    return LeaderlyComponent;
}());



/***/ })

}]);