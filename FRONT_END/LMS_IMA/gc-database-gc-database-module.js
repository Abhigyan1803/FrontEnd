(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gc-database-gc-database-module"],{

/***/ "1BI/":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gc-database/gc-delete/gc-delete.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "6R9Y":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/gc-database/gc-database.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">GC Database<span class=\"sub-menu1\">  </span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n   \r\n\r\n\r\n\r\n    <div class=\"d-flex btn-set row\">\r\n        <!-- <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div> -->\r\n            <div class=\"col-md-3 search-fields\">\r\n                <label for=\"battalion\">Battalion</label>\r\n                <select id=\"battalion\" (change)=\"battalionSelected($event.target.value)\" [disabled]=\"bnDetails\" class=\"form-control\"\r\n                    [(ngModel)]=\"battalionId\">\r\n                    <option value=\"\" selected hidden disabled>Select</option>\r\n                    <option *ngFor=\"let b of battalionList\" [value]=\"b.id\"> {{b.shortName}} Bn</option>\r\n                </select>\r\n    \r\n            </div>\r\n    \r\n            <div class=\"col-md-3 search-fields\">\r\n                <label for=\"company\">Company</label>\r\n                <select id=\"company\" class=\"form-control\" (change)=\"companySelected($event.target.value)\" [disabled]=\"coyDetails\"\r\n                    [(ngModel)]=\"companyId\">\r\n                    <option value=\"\" selected hidden disabled>Select</option>\r\n                    <option *ngFor=\"let c of companyList\" [value]=\"c.id\"> {{c?.name || ''}}</option>\r\n                </select>\r\n    \r\n            </div>\r\n            <div class=\"col-md-3 search-fields\">\r\n                <label for=\"term\">Term</label>\r\n                <select id=\"term\" class=\"form-control\" [(ngModel)]=\"termId\">\r\n                    <option value=\"\" selected hidden disabled>Select</option>\r\n                    <option *ngFor=\"let t of terms\" [value]=\"t.id\"> {{t?.name || ''}}</option>\r\n                </select>\r\n    \r\n            </div>\r\n    \r\n            <!-- <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"rank\">Search</label>\r\n                    <input placeholder=\"IMA Number/Service Id\" formcontrolname=\"\" type=\"text\" [(ngModel)]=\"serviceId\"\r\n                        class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n            </div> -->\r\n           \r\n        <div class=\"search-btns\">\r\n            <button mat-raised-button (click)=\"search()\">Submit</button>\r\n            <button mat-raised-button (click)=\"clearSearch()\">Clear</button>\r\n        </div>\r\n        <div class=\"add-btn\">\r\n            <button mat-raised-button (click)=\"addCadet()\"  class=\"add-btton\">\r\n                <mat-icon>add</mat-icon> Add\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"cadetList\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let c;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Image and Name Cell Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef  mat-sort-header> GC Name </th>\r\n                    <td mat-cell *matCellDef=\"let c\"> \r\n                    <!-- <img [src]=\"c.profileImg\" (error)=\"noImg($event)\" width=\"30\" height=\"30\" class=\"img-fluid img-circle\" alt=\"User Image\"> -->\r\n                    {{c.name}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Father Name -->\r\n                <!-- <ng-container matColumnDef=\"fatherName\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Father Name </th>\r\n                    <td mat-cell *matCellDef=\"let c\"> \r\n                        {{c.fatherName}} \r\n                    </td>\r\n                </ng-container> -->\r\n\r\n                <!-- Academy No. -->\r\n                <ng-container matColumnDef=\"academyNo\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Academy No. </th>\r\n                    <td mat-cell *matCellDef=\"let c\"> \r\n                       {{c.serviceId}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Battalion-->\r\n                <ng-container matColumnDef=\"bnCoy\" >\r\n                    <th mat-header-cell *matHeaderCellDef  mat-sort-header>Battalion</th>\r\n                    <td mat-cell *matCellDef=\"let c\">\r\n                     {{c.battalian}} Bn/ {{c.company}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Season Term-->\r\n                <ng-container matColumnDef=\"seasonTerm\">\r\n                    <th mat-header-cell *matHeaderCellDef  mat-sort-header>Season Term</th>\r\n                    <td mat-cell *matCellDef=\"let c\">\r\n                     {{c.termSession}}-{{c.year}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Season Term-->\r\n                <ng-container matColumnDef=\"term\">\r\n                    <th mat-header-cell *matHeaderCellDef  mat-sort-header>Term</th>\r\n                    <td mat-cell *matCellDef=\"let c\">\r\n                     {{c.termName}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Date-->\r\n\r\n                <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef  mat-sort-header>Date</th>\r\n                    <td mat-cell *matCellDef=\"let c\">\r\n                     {{c.createdAt | date: 'dd-MM-yyyy'}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let c\">\r\n                        <mat-slide-toggle [checked]=\"c.status == 1\"\r\n                            (change)=\"changeCadetStatus($event,c)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewCadet(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"delete\">\r\n                    <th mat-header-cell *matHeaderCellDef> Delete </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"openDialog(element)\">\r\n                            <mat-icon>delete</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator  [length]=\"resultsLength\" pageSize=\"50\" [pageSizeOptions]=\"[10,20,50,100,500]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "W4nL":
/*!******************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gc-database/gc-database.component.ts ***!
  \******************************************************************************************/
/*! exports provided: GcDatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcDatabaseComponent", function() { return GcDatabaseComponent; });
/* harmony import */ var _raw_loader_gc_database_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./gc-database.component.html */ "6R9Y");
/* harmony import */ var _gc_database_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gc-database.component.scss */ "bSwS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _gc_delete_gc_delete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gc-delete/gc-delete.component */ "j1RO");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/observable/of */ "G4OQ");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var GcDatabaseComponent = /** @class */ (function () {
    function GcDatabaseComponent(spinner, cdref, sharedService, router, service, dialog) {
        this.spinner = spinner;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.router = router;
        this.service = service;
        this.dialog = dialog;
        this.displayedColumns = ['number', 'name',
            //fatherName
            'academyNo', 'bnCoy', 'seasonTerm', 'term', 'date', 'status', 'action', 'delete'];
        this.resultsLength = 0;
        this.gcList = [];
        this.cadetList = [];
        this.termId = '';
        this.battalionList = [];
        this.companyList = [];
        this.terms = [];
        this.battalionId = '';
        this.companyId = '';
        this.userDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        // console.log("USER DETAILS: ",this.userDetails);
        if (this.userDetails.battalion) {
            this.bnDetails = this.userDetails.battalion;
            this.battalion = this.userDetails.battalion.shortName;
            this.battalionId = this.userDetails.battalion.id;
            this.battalionSelected(this.userDetails.battalion.id);
        }
        if (this.userDetails.company) {
            this.coyDetails = this.userDetails.company;
            this.company = this.userDetails.company.name;
            this.companyId = this.userDetails.company.id;
        }
    }
    GcDatabaseComponent.prototype.ngOnInit = function () {
        this.getBattalionList();
        this.getTerms();
    };
    GcDatabaseComponent.prototype.ngAfterViewInit = function () {
        this.getCadetsList();
    };
    GcDatabaseComponent.prototype.openDialog = function (cadet) {
        var _this = this;
        var dialogRef = this.dialog.open(_gc_delete_gc_delete_component__WEBPACK_IMPORTED_MODULE_10__["GcDeleteComponent"], {
            data: {
                message: 'Are you sure want to delete?',
                buttonText: {
                    ok: 'Save',
                    cancel: 'No'
                }
            }
        });
        dialogRef.afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
                console.log("delete", cadet.id);
                _this.service.changeCadetStatus(cadet.id, 2).subscribe(function (res) {
                    if (res.status == 'OK') {
                        _this.service.openSnackbar("Cadet delete successfully");
                        _this.cdref.detectChanges();
                        _this.ngAfterViewInit();
                    }
                }, function (err) {
                    _this.service.openSnackbar('Error Occured.');
                });
                _this.spinner.hide();
            }
        });
    };
    GcDatabaseComponent.prototype.getBattalionList = function () {
        var _this = this;
        this.sharedService.getBattalionList().subscribe(function (res) {
            _this.spinner.show();
            if (res.status == 'OK') {
                _this.battalionList = res.object;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    GcDatabaseComponent.prototype.getTerms = function () {
        var _this = this;
        this.service.getAllTerms().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
    };
    GcDatabaseComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        this.companyList = [];
        this.company = '';
        this.companyId = '';
        this.battalionList.find(function (el) {
            if (el.id == e) {
                _this.battalion = el.shortName;
            }
        });
        // this.battalion = battalion.shortName;
        // console.log(this.battalion);
        this.spinner.show();
        this.service.getCompanyList(e).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.companyList = res.object;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.sharedService.openSnackbar(res.message);
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    GcDatabaseComponent.prototype.companySelected = function (e) {
        var _this = this;
        this.companyList.find(function (el) {
            if (el.id == e) {
                _this.company = el.name;
                // return;
            }
        });
        console.log(this.company);
    };
    GcDatabaseComponent.prototype.search = function () {
        // if(this.serviceId){
        //   this.getGCByImaNumber(this.serviceId)
        // } else if (this.battalion || this.company || this.termId) {
        //   this.paginator.pageIndex = 0;
        //   this.paginator.pageSize = 10;
        //   this.getCadetsList()
        // } else {
        //   this.sharedService.openAlertSnackbarWithSeconds("No Search Filters are Added.", 7)
        // }
        if (this.battalion || this.company || this.termId) {
            this.paginator.pageIndex = 0;
            this.paginator.pageSize = 50;
            this.getCadetsList();
        }
        else {
            this.sharedService.openAlertSnackbarWithSeconds("No Search Filters are Added.", 7);
        }
    };
    GcDatabaseComponent.prototype.clearSearch = function () {
        if (this.router.url.includes('/main/admin/trg-battalion/gc-database')) {
            if (this.battalion || this.company || this.termId) {
                this.companyList = [];
                this.company = '';
                this.battalion = '';
                this.serviceId = '';
                this.battalionId = '';
                this.companyId = '';
                this.termId = '';
                this.getCadetsList();
            }
        }
        else if (this.router.url.includes('/main/trg-battalion/gc-database')) {
            if (this.bnDetails && !this.coyDetails) {
                if (this.company || this.termId) {
                    this.company = '';
                    this.serviceId = '';
                    this.companyId = '';
                    this.termId = '';
                    this.getCadetsList();
                }
            }
            else if (this.coyDetails) {
                if (this.termId) {
                    this.termId = '';
                    this.getCadetsList();
                }
            }
        }
    };
    GcDatabaseComponent.prototype.getCadetsList = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(/* this.sort.sortChange,  */ this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])(function () {
            _this.spinner.show();
            return _this.service.getAllCadetsList("All", _this.paginator.pageIndex, _this.paginator.pageSize, _this.battalion, _this.company, _this.termId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (data) {
            _this.resultsLength = data.object.totalRecords;
            // console.log("DATA: ",data);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(function () {
            console.log('===========Error here============');
            _this.spinner.hide();
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_13__["of"])([]);
            // return null;
        })).subscribe(function (data) {
            console.log("DATA RECIEVED: ", data);
            if (data.status == 'OK') {
                _this.resultsLength = data.object.totalRecords;
                _this.cadetList = data.object.cadetList;
                _this.cadetList = data.object.cadetList.sort(function (a, b) { return Date.parse(b.createdAt) - Date.parse(a.createdAt); });
                if (data.object.cadetList.length > 0) {
                    _this.cadetList = data.object.cadetList;
                    //////
                    for (var i = 0; i < _this.cadetList.length; i++) {
                        if (_this.cadetList[i].term == 7) {
                            _this.cadetList[i].termName = "Tech II";
                        }
                    }
                    //////
                }
                else {
                    _this.cadetList = [];
                }
                _this.cdref.detectChanges();
            }
            else {
                _this.cadetList = [];
            }
            _this.spinner.hide();
            // var scrollElem = document.querySelector('#orders');
            // scrollElem.scrollIntoView();
        });
        // this.spinner.show()
        // this.service.getAllCadetsList("All",this.paginator.pageIndex, this.paginator.pageSize).subscribe(
        //   res => {
        //     console.log(res);
        //     if (res.status == "OK") {
        //       this.gcList = res.object;
        //       this.dataSource = new MatTableDataSource(res.object);
        //       this.dataSource.sort = this.sort;
        //       this.dataSource.paginator = this.paginator;
        //       this.cdref.detectChanges();
        //       this.spinner.hide();
        //     } else {
        //       this.spinner.hide();
        //       this.service.openSnackbar(res.message)
        //     }
        //   },
        //   err => {
        //     this.spinner.hide()
        //     this.service.openSnackbar("Some Error Occured.");
        //   }
        // )
    };
    GcDatabaseComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_cadet_img.jpg";
    };
    GcDatabaseComponent.prototype.changeCadetStatus = function (e, c) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeCadetStatus(c.id, 1).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this.service.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this.service.changeCadetStatus(c.id, 0).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this.service.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    GcDatabaseComponent.prototype.deleteCadet = function (cadet) {
        var _this = this;
        console.log("delete", cadet.id);
        this.service.changeCadetStatus(cadet.id, 2).subscribe(function (res) {
            if (res.status == 'OK') {
                _this.service.openSnackbar("Cadet delete successfully");
                _this.cdref.detectChanges();
                _this.ngAfterViewInit();
            }
        }, function (err) {
            _this.service.openSnackbar('Error Occured.');
        });
        this.spinner.hide();
    };
    GcDatabaseComponent.prototype.addCadet = function () {
        if (this.router.url.includes('/main/admin/trg-battalion/gc-database')) {
            this.router.navigate(['/main/admin/trg-battalion/gc-database/add-cadet']);
        }
        else if (this.router.url.includes('/main/trg-battalion/gc-database')) {
            this.router.navigate(['/main/trg-battalion/gc-database/add-cadet']);
        }
    };
    GcDatabaseComponent.prototype.viewCadet = function (c) {
        if (this.router.url.includes('/main/admin/trg-battalion/gc-database')) {
            this.router.navigate(['/main/admin/trg-battalion/gc-database/view-cadet'], { queryParams: { id: c.id } });
        }
        else if (this.router.url.includes('/main/trg-battalion/gc-database')) {
            this.router.navigate(['/main/trg-battalion/gc-database/view-cadet'], { queryParams: { id: c.id } });
        }
    };
    GcDatabaseComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    GcDatabaseComponent.prototype.sortData = function (sort) {
        // const datalist = this.gcList.slice();
        // if (!sort.active || sort.direction === '') {
        //   this.gcList = datalist;
        //   return;
        // }
        // this.gcList = datalist.sort((a: any, b: any) => {
        //   const isAsc = this.sort.direction === 'asc';
        //   switch (this.sort.active) {
        //     case 'name': return this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
        //     case 'academyNo': return this.sharedService.compare(a.academyNo.toLowerCase(), b.academyNo.toLowerCase(), isAsc);
        //     case 'battalion': return this.sharedService.compare(a.battalian.toLowerCase(), b.battalian.toLowerCase(), isAsc);
        //     case 'company': return this.sharedService.compare(a.company.toLowerCase(), b.company.toLowerCase(), isAsc);
        //     case 'seasonTerm': return this.sharedService.compare(a.termSession.toLowerCase(), b.termSession.toLowerCase(), isAsc);
        //     case 'term': return this.sharedService.compare(a.term, b.term, isAsc);
        //     default: return 0;
        //   }
        // });
        // this.dataSource = new MatTableDataSource(this.gcList);
        // this.dataSource.paginator = this.paginator;
        // if (this.dataSource.paginator) {
        //   this.dataSource.paginator.firstPage();
        // }
    };
    GcDatabaseComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    GcDatabaseComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }]
    };
    GcDatabaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-gc-database',
            template: _raw_loader_gc_database_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_gc_database_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], GcDatabaseComponent);
    return GcDatabaseComponent;
}());



/***/ }),

/***/ "bSwS":
/*!********************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gc-database/gc-database.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-btns {\n  margin-left: 20px;\n}\n\n.search-fields {\n  margin-right: -70px;\n  padding-right: 5px;\n}\n\n.add-btn {\n  margin-right: 10px;\n}");

/***/ }),

/***/ "j1RO":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gc-database/gc-delete/gc-delete.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: GcDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcDeleteComponent", function() { return GcDeleteComponent; });
/* harmony import */ var _raw_loader_gc_delete_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./gc-delete.component.html */ "jkw3");
/* harmony import */ var _gc_delete_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gc-delete.component.scss */ "1BI/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GcDeleteComponent = /** @class */ (function () {
    function GcDeleteComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.message = "Are you sure?";
        this.confirmButtonText = "Yes";
        this.cancelButtonText = "Cancel";
        if (data) {
            this.message = data.message || this.message;
            if (data.buttonText) {
                this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
                this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
            }
        }
    }
    GcDeleteComponent.prototype.onConfirmClick = function () {
        this.dialogRef.close(true);
    };
    GcDeleteComponent.prototype.ngOnInit = function () {
    };
    GcDeleteComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
    ]; };
    GcDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-gc-delete',
            template: _raw_loader_gc_delete_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_gc_delete_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], GcDeleteComponent);
    return GcDeleteComponent;
}());



/***/ }),

/***/ "jkw3":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/gc-database/gc-delete/gc-delete.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-5 text-center\">\n    <mat-dialog-content class=\"py-0\">\n        <p>\n            {{message}}\n        </p>\n    </mat-dialog-content>\n    <mat-dialog-actions align=\"center\">\n        <button mat-raised-button color=\"primary\" (click)=\"onConfirmClick()\" tabindex=\"1\">{{confirmButtonText}}</button>\n        <button mat-raised-button mat-dialog-close tabindex=\"-1\">{{cancelButtonText}}</button>\n    </mat-dialog-actions>\n</div>\n\n");

/***/ }),

/***/ "zAo3":
/*!***************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gc-database/gc-database.module.ts ***!
  \***************************************************************************************/
/*! exports provided: GCDatabaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GCDatabaseModule", function() { return GCDatabaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _gc_database_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gc-database.component */ "W4nL");
/* harmony import */ var _gc_delete_gc_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gc-delete/gc-delete.component */ "j1RO");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _gc_database_component__WEBPACK_IMPORTED_MODULE_4__["GcDatabaseComponent"] },
    { path: '', component: _gc_delete_gc_delete_component__WEBPACK_IMPORTED_MODULE_5__["GcDeleteComponent"] },
    { path: 'add-cadet', loadChildren: function () { return __webpack_require__.e(/*! import() | add-cadet-add-cadet-module */ "add-cadet-add-cadet-module").then(__webpack_require__.bind(null, /*! ./add-cadet/add-cadet.module */ "987W")).then(function (m) { return m.AddCadetModule; }); } },
    { path: 'view-cadet', loadChildren: function () { return __webpack_require__.e(/*! import() | add-cadet-add-cadet-module */ "add-cadet-add-cadet-module").then(__webpack_require__.bind(null, /*! ./add-cadet/add-cadet.module */ "987W")).then(function (m) { return m.AddCadetModule; }); } },
];
var GCDatabaseModule = /** @class */ (function () {
    function GCDatabaseModule() {
    }
    GCDatabaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _gc_database_component__WEBPACK_IMPORTED_MODULE_4__["GcDatabaseComponent"],
                _gc_delete_gc_delete_component__WEBPACK_IMPORTED_MODULE_5__["GcDeleteComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            ]
        })
    ], GCDatabaseModule);
    return GCDatabaseModule;
}());



/***/ })

}]);