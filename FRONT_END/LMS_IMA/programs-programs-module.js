(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["programs-programs-module"],{

/***/ "Fl4V":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/programs/programs.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n   <h4 class=\"card-heading\"> Home <span class=\"sub-menu1\"> > Daily PGME</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n \r\n\r\n   <div class=\"d-flex btn-set\">\r\n      <div class=\"search\">\r\n         <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n     </div>\r\n      <button mat-raised-button (click)=\"addProgram()\" class=\"add-btton\">\r\n         <mat-icon>add</mat-icon> Add\r\n      </button>\r\n   </div>\r\n\r\n   <!-- <div class=\"gene-card-content pad-t-none\">\r\n      <div class=\"table-responsive\">\r\n         <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n            <thead>\r\n               <tr>\r\n                  <th>Sr.No.</th>\r\n                  <th>Date & Time</th>\r\n                  <th>Programme</th>\r\n                  <th>Venue</th>\r\n                  <th>View</th>\r\n               </tr>\r\n            </thead>\r\n            <tbody>\r\n               <tr *ngFor=\"let p of programsArr ;let i =index\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{p.scheduledDate | date:'d MMM, y, HHmm'}} </td>\r\n                  <td class=\"capitalize\">{{p.title}} </td>\r\n                  <td class=\"capitalize\">{{p.venue}} </td>\r\n                  <td class=\"act-btn\"> <a href=\"javascript:void(0)\">\r\n                        <mat-icon class=\"act-btn\" (click)=\"viewProgram(p)\">visibility</mat-icon>\r\n                     </a></td>\r\n               </tr>\r\n            </tbody>\r\n         </table>\r\n      </div>\r\n   </div> -->\r\n  <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.scheduledDate|date:'d MMM, y'}} </td>\r\n                </ng-container>\r\n\r\n               <ng-container matColumnDef=\"time\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Time </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.startTime|date:'HHmm'}}-{{element.endTime|date:'HHmm'}} </td>\r\n               </ng-container>\r\n\r\n                <!-- Programme Column -->\r\n                <ng-container matColumnDef=\"programme\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Programme </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Venue Column -->\r\n                <ng-container matColumnDef=\"venue\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Venue </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.venue}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewProgram(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n   \r\n\r\n</mat-card>");

/***/ }),

/***/ "M50E":
/*!******************************************************************!*\
  !*** ./src/app/main/admin/home/programs/programs.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".capitalize {\n  text-transform: capitalize;\n}");

/***/ }),

/***/ "MS/a":
/*!*************************************************************!*\
  !*** ./src/app/main/admin/home/programs/programs.module.ts ***!
  \*************************************************************/
/*! exports provided: ProgramsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsModule", function() { return ProgramsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _programs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./programs.component */ "ZrDc");
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
        component: _programs_component__WEBPACK_IMPORTED_MODULE_4__["ProgramsComponent"]
    },
    { path: 'add-program', loadChildren: function () { return __webpack_require__.e(/*! import() | add-program-add-program-module */ "add-program-add-program-module").then(__webpack_require__.bind(null, /*! ./add-program/add-program.module */ "uvse")).then(function (m) { return m.AddProgramModule; }); } },
    { path: 'view-program', loadChildren: function () { return __webpack_require__.e(/*! import() | add-program-add-program-module */ "add-program-add-program-module").then(__webpack_require__.bind(null, /*! ./add-program/add-program.module */ "uvse")).then(function (m) { return m.AddProgramModule; }); } },
];
var ProgramsModule = /** @class */ (function () {
    function ProgramsModule() {
    }
    ProgramsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _programs_component__WEBPACK_IMPORTED_MODULE_4__["ProgramsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], ProgramsModule);
    return ProgramsModule;
}());



/***/ }),

/***/ "ZrDc":
/*!****************************************************************!*\
  !*** ./src/app/main/admin/home/programs/programs.component.ts ***!
  \****************************************************************/
/*! exports provided: ProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsComponent", function() { return ProgramsComponent; });
/* harmony import */ var _raw_loader_programs_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./programs.component.html */ "Fl4V");
/* harmony import */ var _programs_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./programs.component.scss */ "M50E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProgramsComponent = /** @class */ (function () {
    function ProgramsComponent(router, _trgBattalion, service, cdref) {
        this.router = router;
        this._trgBattalion = _trgBattalion;
        this.service = service;
        this.cdref = cdref;
        this.displayedColumns = ['number', 'date', 'time', 'programme', 'venue', 'action'];
        this.programsArr = [];
    }
    ProgramsComponent.prototype.ngOnInit = function () {
    };
    ProgramsComponent.prototype.ngAfterViewInit = function () {
        this.getAllPrograms();
    };
    ProgramsComponent.prototype.getAllPrograms = function () {
        var _this = this;
        this.service.getAllPrograms().subscribe(function (res) {
            console.log(res);
            if (res.status == "1") {
                _this.programsArr = res.List;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res.List);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
            }
            else {
                _this.programsArr = [];
            }
        }, function (err) {
            console.log(JSON.stringify(err));
            _this.programsArr = [];
            _this._trgBattalion.openSnackbar('Error Occured.');
        });
    };
    ProgramsComponent.prototype.addProgram = function () {
        this.router.navigate(['/main/admin/home/programes/add-program']);
    };
    ProgramsComponent.prototype.viewProgram = function (p) {
        this.router.navigate(['/main/admin/home/programes/view-program'], { queryParams: { id: p.id } });
    };
    ProgramsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ProgramsComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.programsArr.slice();
        if (!sort.active || sort.direction === '') {
            this.programsArr = datalist;
            return;
        }
        this.programsArr = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'date': return _this._trgBattalion.compare(a.scheduledDate, b.scheduledDate, isAsc);
                case 'programme': return _this._trgBattalion.compare(a.title.toLowerCase(), b.title.toLowerCase(), isAsc);
                case 'venue': return _this._trgBattalion.compare(a.venue.toLowerCase(), b.venue.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.programsArr);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ProgramsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    ProgramsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true },] }]
    };
    ProgramsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-programs',
            template: _raw_loader_programs_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_programs_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], ProgramsComponent);
    return ProgramsComponent;
}());



/***/ })

}]);