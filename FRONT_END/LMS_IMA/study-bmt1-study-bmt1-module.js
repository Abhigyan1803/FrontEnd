(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["study-bmt1-study-bmt1-module"],{

/***/ "3AHu":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/study-material/study-bmt1/study-bmt1.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: StudyBMT1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyBMT1Component", function() { return StudyBMT1Component; });
/* harmony import */ var _raw_loader_study_bmt1_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./study-bmt1.component.html */ "hIXX");
/* harmony import */ var _study_bmt1_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./study-bmt1.component.scss */ "oAO9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var StudyBMT1Component = /** @class */ (function () {
    function StudyBMT1Component(router, route, adminservice, trgTeamService, spinner, cdref, dialog, sharedService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.adminservice = adminservice;
        this.trgTeamService = trgTeamService;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.displayedColumns = ['number', 'name', 'createdAt', 'description',
            //'term',
            'document', 'status', 'action', 'delete'];
        this.studyMaterialList = [];
        this.route.params.subscribe(function (params) {
            _this.type = params.type;
            _this.term = params.term;
            console.log(params);
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
    StudyBMT1Component.prototype.ngOnInit = function () {
    };
    StudyBMT1Component.prototype.ngAfterViewInit = function () {
        this.getStudyMaterial();
    };
    StudyBMT1Component.prototype.getStudyMaterial = function () {
        var _this = this;
        this.spinner.show();
        this.trgTeamService.getStudyMaterialList(this.type, this.termId).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.studyMaterialList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
                // console.log(res,"=================");
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar("Some Error Occured.");
        });
    };
    StudyBMT1Component.prototype.delete = function (element) {
        var _this = this;
        this.trgTeamService.updateStudyMaterialDelete(element.id, 3).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.adminservice.openSnackbar("Record Deleted");
                _this.ngAfterViewInit();
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.adminservice.openSnackbar('Error Occured.');
            console.log(JSON.stringify(err));
        });
    };
    StudyBMT1Component.prototype.addStudyMaterial = function () {
        this.router.navigate(['main/trg-team/gso-2-pgme/' + this.term + '/study-material/material/' + this.type + '/add-study-material']);
    };
    StudyBMT1Component.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    StudyBMT1Component.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    StudyBMT1Component.prototype.viewStudyMaterial = function (id) {
        this.router.navigate(['main/trg-team/gso-2-pgme/' + this.term + '/study-material/material/' + this.type + '/view-study-material'], { queryParams: { id: id } });
    };
    StudyBMT1Component.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.studyMaterialList.slice();
        if (!sort.active || sort.direction === '') {
            this.studyMaterialList = datalist;
            return;
        }
        this.studyMaterialList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'description': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.studyMaterialList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    StudyBMT1Component.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: e.doc
            }
        });
    };
    StudyBMT1Component.prototype.changeStatus = function (e, d) {
        var _this = this;
        var status;
        if (e.checked) {
            status = 1;
        }
        else {
            status = 0;
        }
        this.spinner.show();
        this.trgTeamService.changeStudyMaterialStatus(d.id, status).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
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
        // if (e.checked) {
        //   this.adminservice.updateBMT1Status(d.id, 1).subscribe(
        //     res => {
        //       console.log(res);
        //       if (res.status == 'OK') {
        //         this.sharedService.openSnackbar(res.message)
        //         this.cdref.detectChanges();
        //         // this.ngAfterViewInit();
        //         this.spinner.hide()
        //       }
        //       else {
        //         this.spinner.hide()
        //         this.sharedService.openSnackbar(res.message)
        //       }
        //     },
        //     err => {
        //       this.spinner.hide();
        //       this.sharedService.openSnackbar('Error Occured.')
        //     }
        //   )
        //   this.spinner.hide();
        // }
        // else {
        //   this.adminservice.updateBMT1Status(d.id, 0).subscribe(
        //     res => {
        //       console.log(res);
        //       if (res.status == 'OK') {
        //         this.sharedService.openSnackbar(res.message)
        //         this.cdref.detectChanges();
        //         // this.ngAfterViewInit();
        //         this.spinner.hide()
        //       }
        //       else {
        //         this.spinner.hide()
        //         this.sharedService.openSnackbar(res.message)
        //       }
        //     },
        //     err => {
        //       this.spinner.hide()
        //       this.sharedService.openSnackbar('Error Occured.')
        //     }
        //   )
        //   this.spinner.hide();
        // }
    };
    StudyBMT1Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_12__["TrgTeamService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
    ]; };
    StudyBMT1Component.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }]
    };
    StudyBMT1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-study-bmt1',
            template: _raw_loader_study_bmt1_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_study_bmt1_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"],
            app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_12__["TrgTeamService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], StudyBMT1Component);
    return StudyBMT1Component;
}());



/***/ }),

/***/ "Ny6X":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/study-material/study-bmt1/study-bmt1.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: StudyBMT1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyBMT1Module", function() { return StudyBMT1Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _study_bmt1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./study-bmt1.component */ "3AHu");
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
        component: _study_bmt1_component__WEBPACK_IMPORTED_MODULE_4__["StudyBMT1Component"]
    },
    {
        path: 'add-study-material',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-study-bmt1-add-study-bmt1-module */ "add-study-bmt1-add-study-bmt1-module").then(__webpack_require__.bind(null, /*! ./add-study-bmt1/add-study-bmt1.module */ "QTof")).then(function (m) { return m.AddStudyBmt1Module; }); }
    },
    {
        path: 'view-study-material',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-study-bmt1-add-study-bmt1-module */ "add-study-bmt1-add-study-bmt1-module").then(__webpack_require__.bind(null, /*! ./add-study-bmt1/add-study-bmt1.module */ "QTof")).then(function (m) { return m.AddStudyBmt1Module; }); }
    }
];
var StudyBMT1Module = /** @class */ (function () {
    function StudyBMT1Module() {
    }
    StudyBMT1Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _study_bmt1_component__WEBPACK_IMPORTED_MODULE_4__["StudyBMT1Component"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], StudyBMT1Module);
    return StudyBMT1Module;
}());



/***/ }),

/***/ "hIXX":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/gso-two-pgme/study-material/study-bmt1/study-bmt1.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> GSO 2 (PGME) <span class=\"sub-menu1\"> > {{term}} > Study Material > {{type}} </span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addStudyMaterial()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n   \r\n\r\n    <div class=\"example-container \">  \r\n        <div class=\"example-table-container\">\r\n    <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"number\">\r\n            <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n            <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"createdAt\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n     <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n        </ng-container>\r\n        \r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Description Column -->\r\n        <ng-container matColumnDef=\"description\">\r\n            <th mat-header-cell *matHeaderCellDef > Description </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"term\">\r\n            <th mat-header-cell *matHeaderCellDef > Term </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.termId}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Status Column -->\r\n        <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef > Status </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n                <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStatus($event,element)\">\r\n                </mat-slide-toggle>\r\n            </td>\r\n        </ng-container>\r\n        <!-- Document Column -->\r\n        <ng-container matColumnDef=\"document\">\r\n            <th mat-header-cell *matHeaderCellDef > Document </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\"><mat-icon>description</mat-icon> </a>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Action Column -->\r\n        <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef > Action </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\"\r\n                 (click)=\"viewStudyMaterial(element.id)\">\r\n                    <mat-icon >visibility</mat-icon>\r\n                </a> </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"delete\">\r\n            <th mat-header-cell *matHeaderCellDef> Delete </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                    (click)=\"delete(element)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                </a> </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          <!-- Row shown when there is no matching data. -->\r\n          <tr class=\"mat-row\" *matNoDataRow>\r\n            <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n        </tr>\r\n    </table>\r\n\r\n</div>\r\n    <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n</mat-card>");

/***/ }),

/***/ "oAO9":
/*!************************************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/study-material/study-bmt1/study-bmt1.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);