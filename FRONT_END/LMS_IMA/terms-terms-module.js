(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-terms-module"],{

/***/ "HSif":
/*!******************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/terms/terms.component.ts ***!
  \******************************************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./terms.component.html */ "zm9Y");
/* harmony import */ var _terms_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms.component.scss */ "J8Sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
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












var TermsComponent = /** @class */ (function () {
    function TermsComponent(spinner, cdref, dialog, _trgBattalion, router, service) {
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this._trgBattalion = _trgBattalion;
        this.router = router;
        this.service = service;
        this.displayedColumns = ['number', 'date', 'name', 'term', 'description', 'status', 'document', 'action'];
        this.syllabusList = [];
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent.prototype.ngAfterViewInit = function () {
        this.getTermSyllabuses();
    };
    TermsComponent.prototype.getTermSyllabuses = function () {
        var _this = this;
        this.spinner.show();
        this.service.getTermSyllabus().subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.syllabusList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
            }
            else {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this._trgBattalion.openSnackbar('Error Occured.');
        });
    };
    TermsComponent.prototype.changeStatus = function (e, l) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.updateTermSyllabusStatus(l.id, 1).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this._trgBattalion.openSnackbar("Status updated successfully");
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this.service.updateTermSyllabusStatus(l.id, 0).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this._trgBattalion.openSnackbar("Status updated successfully");
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    TermsComponent.prototype.addSyllabus = function () {
        this.router.navigate(['/main/trg-team/gso-2-pgme/syllabus/terms/add-syllabus']);
    };
    TermsComponent.prototype.viewSyllabus = function (s) {
        this.router.navigate(['/main/trg-team/gso-2-pgme/syllabus/terms/view-syllabus'], { queryParams: { id: s.id } });
    };
    TermsComponent.prototype.openDoc = function (s) {
        var dialogRef = this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1200px', height: '600px',
            data: {
                type: 'document', url: s.doc
            }
        });
    };
    TermsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    TermsComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.syllabusList.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = datalist;
            return;
        }
        this.syllabusList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'date': return _this._trgBattalion.compare(a.date, b.date, isAsc);
                case 'name': return _this._trgBattalion.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'term': return _this._trgBattalion.compare(a.term, b.term, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.syllabusList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    TermsComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_10__["TrgBattalionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__["TrgTeamService"] }
    ]; };
    TermsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true },] }]
    };
    TermsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-terms',
            template: _raw_loader_terms_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_terms_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_10__["TrgBattalionService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_5__["TrgTeamService"]])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "J8Sk":
/*!********************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/terms/terms.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "z/6g":
/*!***************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/terms/terms.module.ts ***!
  \***************************************************************************/
/*! exports provided: TermsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsModule", function() { return TermsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _terms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terms.component */ "HSif");
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
        component: _terms_component__WEBPACK_IMPORTED_MODULE_4__["TermsComponent"]
    },
    { path: 'add-syllabus', loadChildren: function () { return __webpack_require__.e(/*! import() | add-syllabus-add-syllabus-module */ "add-syllabus-add-syllabus-module").then(__webpack_require__.bind(null, /*! ./add-syllabus/add-syllabus.module */ "u73q")).then(function (m) { return m.AddSyllabusModule; }); } },
    { path: 'view-syllabus', loadChildren: function () { return __webpack_require__.e(/*! import() | add-syllabus-add-syllabus-module */ "add-syllabus-add-syllabus-module").then(__webpack_require__.bind(null, /*! ./add-syllabus/add-syllabus.module */ "u73q")).then(function (m) { return m.AddSyllabusModule; }); } },
];
var TermsModule = /** @class */ (function () {
    function TermsModule() {
    }
    TermsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _terms_component__WEBPACK_IMPORTED_MODULE_4__["TermsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], TermsModule);
    return TermsModule;
}());



/***/ }),

/***/ "zm9Y":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/syllabus/terms/terms.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> GSO-2(PGME) <span class=\"sub-menu1\"> > Syllabus > Termwise </span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n \r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addSyllabus()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr.No.</th>\r\n                        <th>Name</th>\r\n                        <th>Term</th>\r\n                        <th>Date</th>\r\n                        <th>Status</th>\r\n                        <th>Document</th>\r\n                        <th>View</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let s of syllabusList; let i=index\" >\r\n                        <td>{{i+1}} </td>\r\n                        <td>{{s.name}} </td>\r\n                        <td>{{s.term}}</td>\r\n                        <td>{{s.date | date:'d, MMMM, y'}} </td>\r\n                        <td><mat-slide-toggle [checked]=\"s.status == 1\" (change)=\"changeSyllabusStatus($event,s)\" ></mat-slide-toggle></td>\r\n                        <td> <a href=\"javascript:void(0)\" (click)=\"openDoc(s)\" > <mat-icon>description</mat-icon></a> </td>\r\n                        <td>\r\n                            <a href=\"javascript:void(0)\" (click)=\"viewSyllabus(s)\" >\r\n                                <mat-icon>visibility</mat-icon>    \r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.date|date:'d MMMM, y'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                  <!-- Description Column -->\r\n                  <ng-container matColumnDef=\"term\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Term </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.term}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef > Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef > Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Document Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef > Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n                            <mat-icon>description</mat-icon>\r\n                        </a>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef > Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewSyllabus(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <!-- Row shown when there is no matching data. -->\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n            <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n       \r\n    </div>\r\n    \r\n\r\n</mat-card>");

/***/ })

}]);