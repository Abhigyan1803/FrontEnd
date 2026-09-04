(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["academic-syllabus-academic-syllabus-module"],{

/***/ "2lT8":
/*!***************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-syllabus/academic-syllabus.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AcademicSyllabusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicSyllabusComponent", function() { return AcademicSyllabusComponent; });
/* harmony import */ var _raw_loader_academic_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./academic-syllabus.component.html */ "qZZC");
/* harmony import */ var _academic_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./academic-syllabus.component.scss */ "Citf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/academic-dept/academic-dept.service */ "1ABS");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AcademicSyllabusComponent = /** @class */ (function () {
    function AcademicSyllabusComponent(router, route, adminservice, spinner, cdref, dialog, sharedService, service) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.adminservice = adminservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.service = service;
        this.syllabusList = [];
        this.displayedColumns = ['number', 'name', 'document', 'status', 'view'];
        this.route.params.subscribe(function (params) {
            _this.term = params.term;
            _this.paper = params.paper;
            _this.subject = params.subject;
            if (_this.subject == "Science and Warfare") {
                _this.sTitle = "Science & Warfare";
            }
            else {
                _this.sTitle = params.subject;
            }
            if (_this.term == "I Term") {
                _this.termId = 1;
            }
            else if (_this.term == "II Term") {
                _this.termId = 2;
            }
            else if (_this.term == "III Term") {
                _this.termId = 3;
            }
            else if (_this.term == "II Tech") {
                _this.termId = 7;
            }
            _this.getSyllabusList();
        });
    }
    AcademicSyllabusComponent.prototype.ngOnInit = function () {
    };
    AcademicSyllabusComponent.prototype.getSyllabusList = function () {
        var _this = this;
        this.spinner.show();
        this.service.getSyllabusList(this.termId, this.paper, this.subject, 2).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.syllabusList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar("Some Error Occured.");
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar("Some Error Occured.");
        });
    };
    AcademicSyllabusComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AcademicSyllabusComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.syllabusList.slice();
        if (!sort.active || sort.direction === '') {
            this.syllabusList = datalist;
            return;
        }
        this.syllabusList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'description': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.syllabusList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AcademicSyllabusComponent.prototype.addSubject = function () {
        this.router.navigate(["/main/academic-depart/syllabus/" + this.term + "/" + this.paper + "/" + this.subject + "/add-syllabus"]);
        // this.router.navigate(['/main/academic-depart/syllabus/'+this.term+'/'+this.paper+'/add-syllabus'])
    };
    AcademicSyllabusComponent.prototype.viewsyllabus = function (id) {
        console.log(id);
        this.router.navigate(["/main/academic-depart/syllabus/" + this.term + "/" + this.paper + "/" + this.subject + "/view-syllabus"], { queryParams: { id: id } });
    };
    AcademicSyllabusComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: e.doc
            }
        });
    };
    AcademicSyllabusComponent.prototype.changeSyllabusStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.updateSyllabusStatus(d.id, 1).subscribe(function (res) {
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
            this.service.updateSyllabusStatus(d.id, 0).subscribe(function (res) {
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
    AcademicSyllabusComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] },
        { type: app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_8__["AcademicDeptService"] }
    ]; };
    AcademicSyllabusComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
    };
    AcademicSyllabusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-academic-syllabus',
            template: _raw_loader_academic_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_academic_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_8__["AcademicDeptService"]])
    ], AcademicSyllabusComponent);
    return AcademicSyllabusComponent;
}());



/***/ }),

/***/ "4IMb":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/academic-syllabus/academic-syllabus.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"maincontent\">\n    <div class=\"container-fluid mt-20\">\n\n\n\n\n        <div class=\"mat-new\">\n            <h4 class=\"card-heading breadcrum\"> Syllabus > <span class=\"sub-menu1\"> Academic Subjects </span> </h4>\n        </div>\n       \n            <mat-tab-group  (focusChange)=\"syllabusTabChanged($event)\">\n                <mat-tab label=\"Paper 1\" >\n\n                    <mat-tab-group (focusChange)=\"suubjectChanged('Paper 1',$event)\" [(selectedIndex)]=\"selectedIndex\" >\n                        <mat-tab label=\"Military History\" >\n                            <div class=\"example-container \">\n                                <div class=\"example-table-container\">\n                                    <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\n                    \n                                        <ng-container matColumnDef=\"number\">\n                                            <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                                            <td mat-cell *matCellDef=\"let element;let i = index;\">\n                                                {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\n                                        </ng-container>\n                    \n                                        <ng-container matColumnDef=\"date\">\n                                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n                                            <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y' || \"-\" }} </td>\n                                        </ng-container>\n                    \n                    \n                                        <ng-container matColumnDef=\"name\">\n                                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                                            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                                        </ng-container>\n                    \n                                        <!-- Description Column -->\n                                        <ng-container matColumnDef=\"document\">\n                                            <th mat-header-cell *matHeaderCellDef> Document </th>\n                                            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\n                                                <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\n                                                    <mat-icon>description</mat-icon>\n                                                </a>\n                                            </td>\n                                        </ng-container>\n                    \n                                     \n                    \n                    \n                    \n                                        <ng-container matColumnDef=\"view\">\n                                            <th mat-header-cell *matHeaderCellDef> View </th>\n                                            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\n                                                    (click)=\"viewsyllabus(element.id)\">\n                                                    <mat-icon>visibility</mat-icon>\n                                                </a> </td>\n                                        </ng-container>\n                    \n                                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\n                                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                                        <tr class=\"mat-row\" *matNoDataRow>\n                                            <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\n                                        </tr>\n                                    </table>\n                                </div>\n                    \n                    \n                            </div>\n                        </mat-tab>\n                        <mat-tab label=\"Military Geography\" >\n                            <div class=\"example-container \">\n                                <div class=\"example-table-container\">\n                                    <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\n                    \n                                        <ng-container matColumnDef=\"number\">\n                                            <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                                            <td mat-cell *matCellDef=\"let element;let i = index;\">\n                                                {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\n                                        </ng-container>\n                    \n                                        <ng-container matColumnDef=\"date\">\n                                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n                                            <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y' || \"-\" }} </td>\n                                        </ng-container>\n                    \n                    \n                                        <ng-container matColumnDef=\"name\">\n                                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                                            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                                        </ng-container>\n                    \n                                        <!-- Description Column -->\n                                        <ng-container matColumnDef=\"document\">\n                                            <th mat-header-cell *matHeaderCellDef> Document </th>\n                                            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\n                                                <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\n                                                    <mat-icon>description</mat-icon>\n                                                </a>\n                                            </td>\n                                        </ng-container>\n                    \n                                     \n                    \n                    \n                    \n                                        <ng-container matColumnDef=\"view\">\n                                            <th mat-header-cell *matHeaderCellDef> View </th>\n                                            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\n                                                    (click)=\"viewsyllabus(element.id)\">\n                                                    <mat-icon>visibility</mat-icon>\n                                                </a> </td>\n                                        </ng-container>\n                    \n                                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\n                                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                                        <tr class=\"mat-row\" *matNoDataRow>\n                                            <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\n                                        </tr>\n                                    </table>\n                                </div>\n                    \n                    \n                            </div>\n                        </mat-tab>\n                    </mat-tab-group>\n\n\n\n                   \n        \n                </mat-tab>\n                <mat-tab label=\"Paper 2\" >\n                    <mat-tab-group  (focusChange)=\"suubjectChanged('Paper 2',$event)\" [(selectedIndex)]=\"selectedIndex\" >\n                        <mat-tab label=\"CAIR\" >\n                            <div class=\"example-container \">\n                                <div class=\"example-table-container\">\n                                    <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\n                    \n                                        <ng-container matColumnDef=\"number\">\n                                            <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                                            <td mat-cell *matCellDef=\"let element;let i = index;\">\n                                                {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\n                                        </ng-container>\n                    \n                                        <ng-container matColumnDef=\"date\">\n                                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n                                            <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y' || \"-\" }} </td>\n                                        </ng-container>\n                    \n                    \n                                        <ng-container matColumnDef=\"name\">\n                                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                                            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                                        </ng-container>\n                    \n                                        <!-- Description Column -->\n                                        <ng-container matColumnDef=\"document\">\n                                            <th mat-header-cell *matHeaderCellDef> Document </th>\n                                            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\n                                                <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\n                                                    <mat-icon>description</mat-icon>\n                                                </a>\n                                            </td>\n                                        </ng-container>\n                    \n                                     \n                    \n                    \n                    \n                                        <ng-container matColumnDef=\"view\">\n                                            <th mat-header-cell *matHeaderCellDef> View </th>\n                                            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\n                                                    (click)=\"viewsyllabus(element.id)\">\n                                                    <mat-icon>visibility</mat-icon>\n                                                </a> </td>\n                                        </ng-container>\n                    \n                                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\n                                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                                        <tr class=\"mat-row\" *matNoDataRow>\n                                            <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\n                                        </tr>\n                                    </table>\n                                </div>\n                    \n                    \n                            </div>\n                        </mat-tab>\n                        <mat-tab label=\"BS\" >\n                            <div class=\"example-container \">\n                                <div class=\"example-table-container\">\n                                    <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\n                    \n                                        <ng-container matColumnDef=\"number\">\n                                            <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                                            <td mat-cell *matCellDef=\"let element;let i = index;\">\n                                                {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\n                                        </ng-container>\n                    \n                                        <ng-container matColumnDef=\"date\">\n                                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n                                            <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y' || \"-\" }} </td>\n                                        </ng-container>\n                    \n                    \n                                        <ng-container matColumnDef=\"name\">\n                                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                                            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                                        </ng-container>\n                    \n                                        <!-- Description Column -->\n                                        <ng-container matColumnDef=\"document\">\n                                            <th mat-header-cell *matHeaderCellDef> Document </th>\n                                            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\n                                                <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\n                                                    <mat-icon>description</mat-icon>\n                                                </a>\n                                            </td>\n                                        </ng-container>\n                    \n                                     \n                    \n                    \n                    \n                                        <ng-container matColumnDef=\"view\">\n                                            <th mat-header-cell *matHeaderCellDef> View </th>\n                                            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\n                                                    (click)=\"viewsyllabus(element.id)\">\n                                                    <mat-icon>visibility</mat-icon>\n                                                </a> </td>\n                                        </ng-container>\n                    \n                                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\n                                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                                        <tr class=\"mat-row\" *matNoDataRow>\n                                            <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\n                                        </tr>\n                                    </table>\n                                </div>\n                    \n                    \n                            </div>\n                        </mat-tab>\n                    </mat-tab-group>\n\n                 \n                </mat-tab>\n                <mat-tab label=\"Paper 3\" >\n                    <div class=\"example-container \">\n                        <div class=\"example-table-container\">\n                            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\n            \n                                <ng-container matColumnDef=\"number\">\n                                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                                    <td mat-cell *matCellDef=\"let element;let i = index;\">\n                                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\n                                </ng-container>\n            \n                                <ng-container matColumnDef=\"date\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n                                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y' || \"-\" }} </td>\n                                </ng-container>\n            \n            \n                                <ng-container matColumnDef=\"name\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                                </ng-container>\n            \n                                <!-- Description Column -->\n                                <ng-container matColumnDef=\"document\">\n                                    <th mat-header-cell *matHeaderCellDef> Document </th>\n                                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\n                                        <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\n                                            <mat-icon>description</mat-icon>\n                                        </a>\n                                    </td>\n                                </ng-container>\n            \n                             \n            \n            \n            \n                                <ng-container matColumnDef=\"view\">\n                                    <th mat-header-cell *matHeaderCellDef> View </th>\n                                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\n                                            (click)=\"viewsyllabus(element.id)\">\n                                            <mat-icon>visibility</mat-icon>\n                                        </a> </td>\n                                </ng-container>\n            \n                                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\n                                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                                <tr class=\"mat-row\" *matNoDataRow>\n                                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\n                                </tr>\n                            </table>\n                        </div>\n            \n            \n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Paper 4\" >\n                    <div class=\"example-container \">\n                        <div class=\"example-table-container\">\n                            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\n            \n                                <ng-container matColumnDef=\"number\">\n                                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                                    <td mat-cell *matCellDef=\"let element;let i = index;\">\n                                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\n                                </ng-container>\n            \n                                <ng-container matColumnDef=\"date\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n                                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y' || \"-\" }} </td>\n                                </ng-container>\n            \n            \n                                <ng-container matColumnDef=\"name\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                                </ng-container>\n            \n                                <!-- Description Column -->\n                                <ng-container matColumnDef=\"document\">\n                                    <th mat-header-cell *matHeaderCellDef> Document </th>\n                                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\n                                        <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\n                                            <mat-icon>description</mat-icon>\n                                        </a>\n                                    </td>\n                                </ng-container>\n            \n                             \n            \n            \n            \n                                <ng-container matColumnDef=\"view\">\n                                    <th mat-header-cell *matHeaderCellDef> View </th>\n                                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\n                                            (click)=\"viewsyllabus(element.id)\">\n                                            <mat-icon>visibility</mat-icon>\n                                        </a> </td>\n                                </ng-container>\n            \n                                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\n                                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                                <tr class=\"mat-row\" *matNoDataRow>\n                                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\n                                </tr>\n                            </table>\n                        </div>\n            \n            \n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Paper 5\" >\n                    <div class=\"example-container \">\n                        <div class=\"example-table-container\">\n                            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\n            \n                                <ng-container matColumnDef=\"number\">\n                                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                                    <td mat-cell *matCellDef=\"let element;let i = index;\">\n                                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\n                                </ng-container>\n            \n                                <ng-container matColumnDef=\"date\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n                                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y' || \"-\" }} </td>\n                                </ng-container>\n            \n            \n                                <ng-container matColumnDef=\"name\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                                </ng-container>\n            \n                                <!-- Description Column -->\n                                <ng-container matColumnDef=\"document\">\n                                    <th mat-header-cell *matHeaderCellDef> Document </th>\n                                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\n                                        <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\n                                            <mat-icon>description</mat-icon>\n                                        </a>\n                                    </td>\n                                </ng-container>\n            \n                             \n            \n            \n            \n                                <ng-container matColumnDef=\"view\">\n                                    <th mat-header-cell *matHeaderCellDef> View </th>\n                                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\n                                            (click)=\"viewsyllabus(element.id)\">\n                                            <mat-icon>visibility</mat-icon>\n                                        </a> </td>\n                                </ng-container>\n            \n                                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\n                                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                                <tr class=\"mat-row\" *matNoDataRow>\n                                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\n                                </tr>\n                            </table>\n                        </div>\n            \n            \n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Paper 6\" >\n                    <div class=\"example-container \">\n                        <div class=\"example-table-container\">\n                            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\n            \n                                <ng-container matColumnDef=\"number\">\n                                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\n                                    <td mat-cell *matCellDef=\"let element;let i = index;\">\n                                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\n                                </ng-container>\n            \n                                <ng-container matColumnDef=\"date\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n                                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y' || \"-\" }} </td>\n                                </ng-container>\n            \n            \n                                <ng-container matColumnDef=\"name\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                                </ng-container>\n            \n                                <ng-container matColumnDef=\"document\">\n                                    <th mat-header-cell *matHeaderCellDef> Document </th>\n                                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\n                                        <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\n                                            <mat-icon>description</mat-icon>\n                                        </a>\n                                    </td>\n                                </ng-container>\n            \n                                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\n                                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                                <tr class=\"mat-row\" *matNoDataRow>\n                                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\n                                </tr>\n                            </table>\n                        </div>\n            \n            \n                    </div>\n                </mat-tab>\n            \n            </mat-tab-group>\n            <div>\n                <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\n        \n            </div>\n     \n        \n\n\n\n\n    </div>\n</div>\n    \n");

/***/ }),

/***/ "Citf":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-syllabus/academic-syllabus.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "OSEv":
/*!******************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/academic-syllabus/academic-syllabus.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AcademicSyllabusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicSyllabusComponent", function() { return AcademicSyllabusComponent; });
/* harmony import */ var _raw_loader_academic_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./academic-syllabus.component.html */ "4IMb");
/* harmony import */ var _academic_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./academic-syllabus.component.scss */ "l0XB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/gc/gc.service */ "yuBT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
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












var AcademicSyllabusComponent = /** @class */ (function () {
    function AcademicSyllabusComponent(router, activatedRoute, service, sharedService, cdref, spinner, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.sharedService = sharedService;
        this.cdref = cdref;
        this.spinner = spinner;
        this.dialog = dialog;
        this.displayedColumns = ['number', 'name', 'date', 'document',];
        this.selectedIndex = 0;
        this.userDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
    }
    AcademicSyllabusComponent.prototype.ngOnInit = function () {
    };
    AcademicSyllabusComponent.prototype.ngAfterViewInit = function () {
        this.getSyllabus('Paper 1', 'Military History');
    };
    AcademicSyllabusComponent.prototype.syllabusTabChanged = function (e) {
        var paper = e.tab.textLabel;
        var subject;
        if (paper == 'Paper 1') {
            this.selectedIndex = 0;
            subject = 'Military History';
        }
        else if (paper == 'Paper 2') {
            this.selectedIndex = 0;
            subject = 'CAIR';
        }
        else if (paper == 'Paper 3') {
            subject = 'Science and Warfare';
        }
        else if (paper == 'Paper 4') {
            subject = 'SWT';
        }
        else if (paper == 'Paper 5') {
            subject = 'ECS';
        }
        else if (paper == 'Paper 6') {
            subject = 'IT';
        }
        this.getSyllabus(paper, subject);
    };
    AcademicSyllabusComponent.prototype.suubjectChanged = function (paper, e) {
        this.selectedIndex = 0;
        var subject = e.tab.textLabel;
        this.getSyllabus(paper, subject);
    };
    AcademicSyllabusComponent.prototype.getSyllabus = function (paper, subject) {
        var _this = this;
        this.service.getAcademicSyllabusList(this.userDetails.term, paper, subject, 1).subscribe(function (res) {
            if (res.status == "OK") {
                _this.syllabusList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar("Some Error Occured.");
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar("Some Error Occured.");
        });
    };
    AcademicSyllabusComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: e.doc
            }
        });
    };
    AcademicSyllabusComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.syllabusList.slice();
        if (!sort.active || sort.direction === '') {
            this.syllabusList = datalist;
            return;
        }
        this.syllabusList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'date': return _this.sharedService.compare(a.createdAt, b.createdAt, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.syllabusList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AcademicSyllabusComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_8__["GcService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    AcademicSyllabusComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
    };
    AcademicSyllabusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-academic-syllabus',
            template: _raw_loader_academic_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_academic_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_8__["GcService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AcademicSyllabusComponent);
    return AcademicSyllabusComponent;
}());



/***/ }),

/***/ "UQnf":
/*!************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-syllabus/academic-syllabus.module.ts ***!
  \************************************************************************************/
/*! exports provided: AcademicSyllabusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicSyllabusModule", function() { return AcademicSyllabusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _academic_syllabus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./academic-syllabus.component */ "2lT8");
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
        component: _academic_syllabus_component__WEBPACK_IMPORTED_MODULE_4__["AcademicSyllabusComponent"]
    },
    {
        path: 'add-syllabus',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-acad-syllabus-add-acad-syllabus-module */ "add-acad-syllabus-add-acad-syllabus-module").then(__webpack_require__.bind(null, /*! ./add-acad-syllabus/add-acad-syllabus.module */ "2CdF")).then(function (m) { return m.AddAcadSyllabusModule; }); }
    },
    {
        path: 'view-syllabus',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-acad-syllabus-add-acad-syllabus-module */ "add-acad-syllabus-add-acad-syllabus-module").then(__webpack_require__.bind(null, /*! ./add-acad-syllabus/add-acad-syllabus.module */ "2CdF")).then(function (m) { return m.AddAcadSyllabusModule; }); }
    }
];
var AcademicSyllabusModule = /** @class */ (function () {
    function AcademicSyllabusModule() {
    }
    AcademicSyllabusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _academic_syllabus_component__WEBPACK_IMPORTED_MODULE_4__["AcademicSyllabusComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AcademicSyllabusModule);
    return AcademicSyllabusModule;
}());



/***/ }),

/***/ "l0XB":
/*!********************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/academic-syllabus/academic-syllabus.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".maincontent {\n  min-height: 45vw;\n}\n\n.mat-new {\n  clear: both;\n  padding: 10px 0;\n  display: block;\n}\n\n.mat-new h4 {\n  margin-bottom: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card {\n  margin: 1rem 0;\n}\n\n.example-container {\n  min-height: auto;\n}");

/***/ }),

/***/ "lYH4":
/*!***************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/academic-syllabus/academic-syllabus.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AcademicSyllabusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicSyllabusModule", function() { return AcademicSyllabusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _academic_syllabus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./academic-syllabus.component */ "OSEv");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _academic_syllabus_component__WEBPACK_IMPORTED_MODULE_6__["AcademicSyllabusComponent"]
    },
];
var AcademicSyllabusModule = /** @class */ (function () {
    function AcademicSyllabusModule() {
    }
    AcademicSyllabusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _academic_syllabus_component__WEBPACK_IMPORTED_MODULE_6__["AcademicSyllabusComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ]
        })
    ], AcademicSyllabusModule);
    return AcademicSyllabusModule;
}());



/***/ }),

/***/ "qZZC":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/academic-syllabus/academic-syllabus.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Syllabus > <span class=\"sub-menu1\"> {{term}} </span> <span class=\"sub-menu1\">> {{paper}} > {{sTitle}} </span></h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addSubject()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y' || \"-\" }} </td>\r\n                </ng-container>\r\n\r\n\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                   <!-- Description Column -->\r\n                   <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \r\n                        <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\" >\r\n                            <mat-icon>description</mat-icon>\r\n                        </a>    \r\n                    </td>\r\n                </ng-container>\r\n                \r\n                <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef > Status </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n                <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeSyllabusStatus($event,element)\">\r\n                </mat-slide-toggle>\r\n            </td>\r\n        </ng-container>\r\n\r\n\r\n\r\n                <ng-container matColumnDef=\"view\">\r\n                    <th mat-header-cell *matHeaderCellDef> View </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewsyllabus(element.id)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n</mat-card>");

/***/ })

}]);