(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oq-marks-oq-marks-module"],{

/***/ "PsTI":
/*!************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/oq-marks/oq-marks.component.ts ***!
  \************************************************************************************/
/*! exports provided: OQMarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OQMarksComponent", function() { return OQMarksComponent; });
/* harmony import */ var _raw_loader_oq_marks_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./oq-marks.component.html */ "yyjV");
/* harmony import */ var _oq_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oq-marks.component.scss */ "gl5o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
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




// import { AdminService } from 'app/service/admin/admin.service';








var OQMarksComponent = /** @class */ (function () {
    function OQMarksComponent(router, adminservice, spinner, cdref, dialog, sharedService) {
        this.router = router;
        this.adminservice = adminservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.displayedColumns = ['number', 'subjectName', 'plTotalMarks', 'coyTotalMarks', 'bnTotalMarks', 'status', 'action'];
        this.POC = [];
    }
    OQMarksComponent.prototype.ngOnInit = function () {
    };
    OQMarksComponent.prototype.ngAfterViewInit = function () {
        this.getSubject();
    };
    OQMarksComponent.prototype.getSubject = function () {
        var _this = this;
        this.spinner.show();
        this.adminservice.getSubject(2).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.POC = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.object);
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
    OQMarksComponent.prototype.addPOC = function () {
        this.router.navigate(['/main/admin/trg-battalion/oq-subject/add-subject']);
    };
    OQMarksComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    OQMarksComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    OQMarksComponent.prototype.viewPOC = function (element) {
        this.router.navigate(['main/admin/trg-battalion/oq-subject/view-subject'], { queryParams: { id: element.id } });
    };
    OQMarksComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.POC.slice();
        if (!sort.active || sort.direction === '') {
            this.POC = datalist;
            return;
        }
        this.POC = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'description': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.POC);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    OQMarksComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "POC Document", url: e.file
            }
        });
    };
    OQMarksComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__["TrgBattalionService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
    ]; };
    OQMarksComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }]
    };
    OQMarksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-oq-marks',
            template: _raw_loader_oq_marks_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_oq_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__["TrgBattalionService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], OQMarksComponent);
    return OQMarksComponent;
}());



/***/ }),

/***/ "YHFG":
/*!*********************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/oq-marks/oq-marks.module.ts ***!
  \*********************************************************************************/
/*! exports provided: OQMarksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OQMarksModule", function() { return OQMarksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../material/material.module */ "hctd");
/* harmony import */ var _oq_marks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oq-marks.component */ "PsTI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _oq_marks_component__WEBPACK_IMPORTED_MODULE_5__["OQMarksComponent"]
    },
    {
        path: 'add-subject',
        loadChildren: function () { return __webpack_require__.e(/*! import() | oq-marks-add-subject-add-subject-module */ "oq-marks-add-subject-add-subject-module").then(__webpack_require__.bind(null, /*! ../oq-marks/add-subject/add-subject.module */ "fbr6")).then(function (m) { return m.AddSubjectModule; }); }
    },
    {
        path: 'view-subject',
        loadChildren: function () { return __webpack_require__.e(/*! import() | oq-marks-add-subject-add-subject-module */ "oq-marks-add-subject-add-subject-module").then(__webpack_require__.bind(null, /*! ../oq-marks/add-subject/add-subject.module */ "fbr6")).then(function (m) { return m.AddSubjectModule; }); }
    }
];
var OQMarksModule = /** @class */ (function () {
    function OQMarksModule() {
    }
    OQMarksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _oq_marks_component__WEBPACK_IMPORTED_MODULE_5__["OQMarksComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ]
        })
    ], OQMarksModule);
    return OQMarksModule;
}());



/***/ }),

/***/ "boX8":
/*!****************************************************************!*\
  !*** ./src/app/main/trg-battalion/oq-marks/oq-marks.module.ts ***!
  \****************************************************************/
/*! exports provided: OQModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OQModule", function() { return OQModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _oq_marks_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oq-marks.routes */ "dUKH");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OQModule = /** @class */ (function () {
    function OQModule() {
    }
    OQModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_oq_marks_routes__WEBPACK_IMPORTED_MODULE_4__["OQ_ROUTES"]),
            ]
        })
    ], OQModule);
    return OQModule;
}());



/***/ }),

/***/ "dUKH":
/*!****************************************************************!*\
  !*** ./src/app/main/trg-battalion/oq-marks/oq-marks.routes.ts ***!
  \****************************************************************/
/*! exports provided: OQ_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OQ_ROUTES", function() { return OQ_ROUTES; });
var OQ_ROUTES = [
    // Guard for Modules
    { path: 'FINAL TERM', loadChildren: function () { return __webpack_require__.e(/*! import() | oq-final-oq-final-module */ "oq-final-oq-final-module").then(__webpack_require__.bind(null, /*! ./oq-final/oq-final.module */ "v2+9")).then(function (m) { return m.OqMarksFinalModule; }); } },
    { path: 'MID TERM', loadChildren: function () { return __webpack_require__.e(/*! import() | oq-mid-oq-mid-module */ "oq-mid-oq-mid-module").then(__webpack_require__.bind(null, /*! ./oq-mid/oq-mid.module */ "oxBZ")).then(function (m) { return m.OqMarksMidModule; }); } },
];


/***/ }),

/***/ "gl5o":
/*!**************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/oq-marks/oq-marks.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "yyjV":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/oq-marks/oq-marks.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Admin OQ SUBJECT </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addPOC()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- name Column -->\r\n                <ng-container matColumnDef=\"subjectName\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Subject Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.subjectName}} </td>\r\n                </ng-container>\r\n\r\n                 <!-- Name Column -->\r\n            <ng-container matColumnDef=\"plTotalMarks\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Pl Cdr TotalMarks </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.totalMarksPlCdr}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"coyTotalMarks\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Coy Cdr TotalMarks </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.totalMarksCoyCdr}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"bnTotalMarks\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Bn Cdr TotalMarks </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.totalMarksBnCdr}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Description Column -->\r\n               \r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changePOCStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewPOC(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n  \r\n</mat-card>\r\n");

/***/ })

}]);