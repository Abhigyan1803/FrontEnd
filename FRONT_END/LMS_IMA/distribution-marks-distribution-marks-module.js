(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["distribution-marks-distribution-marks-module"],{

/***/ "A3yD":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/examination/distribution-marks/distribution-marks.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Examination ><span class=\"sub-menu1\"> Distribution of Marks > {{type}} </span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addDistributionMarks()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n   \r\n\r\n    <div class=\"example-container \">  \r\n        <div class=\"example-table-container\">\r\n    <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"number\">\r\n            <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n            <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"uploadedDate\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.uploadedDate|date:'d MMMM, y'}} </td>\r\n        </ng-container>\r\n        \r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Description Column -->\r\n        <ng-container matColumnDef=\"description\">\r\n            <th mat-header-cell *matHeaderCellDef > Description </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <!-- Status Column -->\r\n        <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef > Status </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n                <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStatus($event,element)\">\r\n                </mat-slide-toggle>\r\n            </td>\r\n        </ng-container>\r\n        <!-- Document Column -->\r\n        <ng-container matColumnDef=\"document\">\r\n            <th mat-header-cell *matHeaderCellDef > Document </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\"><mat-icon>description</mat-icon> </a>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Action Column -->\r\n        <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef > Action </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\" (click)=\"viewMark(element.id)\">\r\n                    <mat-icon >visibility</mat-icon>\r\n                </a> </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          <!-- Row shown when there is no matching data. -->\r\n          <tr class=\"mat-row\" *matNoDataRow>\r\n            <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n        </tr>\r\n    </table>\r\n\r\n</div>\r\n    <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n</mat-card>");

/***/ }),

/***/ "Yf8F":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/distribution-marks/distribution-marks.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DistributionMarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributionMarksComponent", function() { return DistributionMarksComponent; });
/* harmony import */ var _raw_loader_distribution_marks_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./distribution-marks.component.html */ "A3yD");
/* harmony import */ var _distribution_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distribution-marks.component.scss */ "neS+");
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
/* harmony import */ var app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/academic-dept/academic-dept.service */ "1ABS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DistributionMarksComponent = /** @class */ (function () {
    function DistributionMarksComponent(router, route, adminservice, adService, spinner, cdref, dialog, sharedService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.adminservice = adminservice;
        this.adService = adService;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.displayedColumns = ['number', 'name', 'uploadedDate', 'document', 'status', 'action'];
        this.DistributionMarks = [];
        this.route.params.subscribe(function (params) {
            _this.type = params.type;
            if (_this.type == "I Term") {
                _this.termId = 1;
            }
            else if (_this.type == "II Term") {
                _this.termId = 2;
            }
            else if (_this.type == "III Term") {
                _this.termId = 3;
            }
            else if (_this.type == "II Tech") {
                _this.termId = 7;
            }
            else {
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 5);
                _this.router.navigate(['/main/academic-depart/dashboard']);
            }
            console.log(_this.type, "type route");
            // this.ngAfterViewInit();
            _this.getDistributionMarks('Academic Distribution of Marks');
        });
    }
    DistributionMarksComponent.prototype.ngOnInit = function () {
    };
    DistributionMarksComponent.prototype.ngAfterViewInit = function () {
        // this.getDistributionMarks('Academic Distribution of Marks')
    };
    DistributionMarksComponent.prototype.getDistributionMarks = function (DistributionMarks) {
        var _this = this;
        this.spinner.show();
        this.adService.getDistributionOfMarksLIST(DistributionMarks, this.termId).subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                _this.DistributionMarks = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res.object);
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
            console.log(JSON.stringify(err));
            _this.sharedService.openSnackbar("Some Error Occured.");
        });
    };
    DistributionMarksComponent.prototype.addDistributionMarks = function () {
        this.router.navigate(['main/academic-depart/examination/Distribution-of-Marks/' + this.type + '/add-distribution-marks']);
    };
    DistributionMarksComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    DistributionMarksComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    DistributionMarksComponent.prototype.viewMark = function (id) {
        this.router.navigate(['main/academic-depart/examination/Distribution-of-Marks/' + this.type + '/view-distribution-marks'], { queryParams: { id: id } });
    };
    DistributionMarksComponent.prototype.sortData = function (sort) {
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
    DistributionMarksComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: e.url
            }
        });
    };
    DistributionMarksComponent.prototype.changeStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        var status;
        if (e.checked)
            status = 1;
        else
            status = 0;
        this.adService.updateDistributionOfMarksStatis(d.id, status).subscribe(function (res) {
            // console.log(res);
            if (res.status == 'OK') {
                _this.sharedService.openSnackbar('Status Changed.');
                _this.cdref.detectChanges();
                // this.ngAfterViewInit();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar('Status Changed.');
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar('Error Occured.');
        });
        this.spinner.hide();
        //   if (e.checked) {
        //     this.adService.updateDistributionOfMarks(d.id, 1).subscribe(
        //       res => {
        //         console.log(res);
        //         if (res.status == 'OK') {
        //           this.sharedService.openSnackbar(res.message)
        //           this.cdref.detectChanges();
        //           // this.ngAfterViewInit();
        //           this.spinner.hide()
        //         }
        //         else {
        //           this.spinner.hide()
        //           this.sharedService.openSnackbar(res.message)
        //         }
        //       },
        //       err => {
        //         this.spinner.hide();
        //         this.sharedService.openSnackbar('Error Occured.')
        //       }
        //     )
        //     this.spinner.hide();
        //   }
        //   else {
        //     this.adService.updateDistributionOfMarks(d.id, 0).subscribe(
        //       res => {
        //         console.log(res);
        //         if (res.status == 'OK') {
        //           this.sharedService.openSnackbar(res.message)
        //           this.cdref.detectChanges();
        //           // this.ngAfterViewInit();
        //           this.spinner.hide()
        //         }
        //         else {
        //           this.spinner.hide()
        //           this.sharedService.openSnackbar(res.message)
        //         }
        //       },
        //       err => {
        //         this.spinner.hide()
        //         this.sharedService.openSnackbar('Error Occured.')
        //       }
        //     )
        //     this.spinner.hide();
        //   }
    };
    DistributionMarksComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_12__["AcademicDeptService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
    ]; };
    DistributionMarksComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }]
    };
    DistributionMarksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ms-distribution-marks',
            template: _raw_loader_distribution_marks_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_distribution_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_12__["AcademicDeptService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], DistributionMarksComponent);
    return DistributionMarksComponent;
}());



/***/ }),

/***/ "neS+":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/distribution-marks/distribution-marks.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "shHF":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/distribution-marks/distribution-marks.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: DistributionMarksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributionMarksModule", function() { return DistributionMarksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _distribution_marks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./distribution-marks.component */ "Yf8F");
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
        component: _distribution_marks_component__WEBPACK_IMPORTED_MODULE_4__["DistributionMarksComponent"]
    },
    {
        path: 'add-distribution-marks',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-distribution-marks-add-distribution-marks-module */ "add-distribution-marks-add-distribution-marks-module").then(__webpack_require__.bind(null, /*! ./add-distribution-marks/add-distribution-marks.module */ "xsr5")).then(function (m) { return m.AddDistributionMarksModule; }); }
    },
    {
        path: 'view-distribution-marks',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-distribution-marks-add-distribution-marks-module */ "add-distribution-marks-add-distribution-marks-module").then(__webpack_require__.bind(null, /*! ./add-distribution-marks/add-distribution-marks.module */ "xsr5")).then(function (m) { return m.AddDistributionMarksModule; }); }
    }
];
var DistributionMarksModule = /** @class */ (function () {
    function DistributionMarksModule() {
    }
    DistributionMarksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _distribution_marks_component__WEBPACK_IMPORTED_MODULE_4__["DistributionMarksComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], DistributionMarksModule);
    return DistributionMarksModule;
}());



/***/ })

}]);