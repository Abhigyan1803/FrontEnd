(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["club-club-module"],{

/***/ "+maJ":
/*!****************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/club/club.component.ts ***!
  \****************************************************************/
/*! exports provided: ClubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubComponent", function() { return ClubComponent; });
/* harmony import */ var _raw_loader_club_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./club.component.html */ "/PMC");
/* harmony import */ var _club_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club.component.scss */ "8fIg");
/* harmony import */ var _service_gc_gc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../service/gc/gc.service */ "yuBT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
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













var ClubComponent = /** @class */ (function () {
    function ClubComponent(router, route, adminservice, spinner, cdref, dialog, sharedService, GcService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.adminservice = adminservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.GcService = GcService;
        this.displayedColumns = ['number', 'name', 'createdAt', 'document'];
        this.PCHT = [];
        this.route.params.subscribe(function (params) {
            _this.type = params.type;
            console.log("this.type", _this.type);
            _this.ngAfterViewInit();
        });
    }
    ClubComponent.prototype.ngOnInit = function () {
    };
    ClubComponent.prototype.ngAfterViewInit = function () {
        this.getClubss();
    };
    ClubComponent.prototype.getClubss = function () {
        var _this = this;
        this.spinner.show();
        this.GcService.getClubs('ACDCLUBS', this.type, 1).subscribe(function (res) {
            console.log("CLUBS: ", res);
            if (res.status == "OK") {
                _this.PCHT = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
                // console.log(res, "=================");
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
    ClubComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    ClubComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.PCHT.slice();
        if (!sort.active || sort.direction === '') {
            this.PCHT = datalist;
            return;
        }
        this.PCHT = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'createdAt': return _this.sharedService.compare(a.createdAt, b.createdAt, isAsc);
                case 'type': return _this.sharedService.compare(a.type.toLowerCase(), b.type.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.PCHT);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ClubComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ClubComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "View Document", url: e.document
            }
        });
    };
    ClubComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] },
        { type: _service_gc_gc_service__WEBPACK_IMPORTED_MODULE_2__["GcService"] }
    ]; };
    ClubComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true },] }]
    };
    ClubComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ms-club',
            template: _raw_loader_club_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_club_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"],
            _service_gc_gc_service__WEBPACK_IMPORTED_MODULE_2__["GcService"]])
    ], ClubComponent);
    return ClubComponent;
}());



/***/ }),

/***/ "/PMC":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/club/club.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mt-20\">\r\n\r\n    <mat-card>\r\n\r\n        <div class=\"mat-new\">\r\n            <h4 class=\"card-heading\"> Clubs > {{type}} </h4>\r\n        </div>\r\n    \r\n        <div class=\"d-flex btn-set\">\r\n            <div class=\"search\">\r\n                <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n            </div>\r\n        </div>\r\n    \r\n    \r\n        <div class=\"example-container \">\r\n            <div class=\"example-table-container\">\r\n                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"number\">\r\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                        <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                            {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                    </ng-container>\r\n    \r\n    \r\n                    <!-- name Column -->\r\n                    <ng-container matColumnDef=\"name\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                    </ng-container>\r\n    \r\n                    <ng-container matColumnDef=\"createdAt\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                 <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                    </ng-container>\r\n    \r\n                   <ng-container matColumnDef=\"type\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> type </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\r\n                    </ng-container>\r\n    \r\n                    <!-- Description Column -->\r\n                    <ng-container matColumnDef=\"document\">\r\n                        <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \r\n                            <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\" >\r\n                                <mat-icon>description</mat-icon>\r\n                            </a>    \r\n                        </td>\r\n                    </ng-container>\r\n    \r\n                    <!-- Status Column\r\n                    <ng-container matColumnDef=\"status\">\r\n                        <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                            <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                                (change)=\"changeGCStatus($event,element)\">\r\n                            </mat-slide-toggle>\r\n                        </td>\r\n                    </ng-container>\r\n    \r\n    \r\n                     Action Column \r\n                    <ng-container matColumnDef=\"action\">\r\n                        <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                                (click)=\"viewGC(element)\">\r\n                                <mat-icon>visibility</mat-icon>\r\n                            </a> </td>\r\n                    </ng-container> -->\r\n                    \r\n    \r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    <tr class=\"mat-row\" *matNoDataRow>\r\n                        <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n    \r\n            <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n        </div>\r\n    \r\n      \r\n    </mat-card>\r\n    \r\n    \r\n</div>\r\n");

/***/ }),

/***/ "8fIg":
/*!******************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/club/club.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-set {\n  display: flex;\n  float: left;\n  width: 100%;\n  margin-bottom: 10px;\n  justify-content: space-between;\n}\n\n.example-container {\n  float: left;\n  width: 100%;\n}\n\n.btn-set input {\n  margin-right: 15px;\n}\n\nmat-card {\n  margin-top: 20px;\n  min-height: 460px;\n}\n\n.mt-20 {\n  float: left;\n  width: 100%;\n}");

/***/ }),

/***/ "Lq27":
/*!***********************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Otherdetails/club/club.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ClubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubComponent", function() { return ClubComponent; });
/* harmony import */ var _raw_loader_club_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./club.component.html */ "VNtU");
/* harmony import */ var _club_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club.component.scss */ "pvKJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ClubComponent = /** @class */ (function () {
    function ClubComponent(EDossierService, adminservice, fb, router, spinner, cdref, dialog, sharedService, route) {
        this.EDossierService = EDossierService;
        this.adminservice = adminservice;
        this.fb = fb;
        this.router = router;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.route = route;
        this.clubDetailsFormI = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.clubDetailsFormII = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.clubDetailsFormIII = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.Id = this.route.snapshot.queryParamMap.get('Id');
        this.termId = this.route.snapshot.queryParamMap.get('termId');
        this.clubDetailsFormI = this.fb.group({
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            performance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [1],
            serviceId: this.Id
        });
        this.clubDetailsFormII = this.fb.group({
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            performance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [2],
            serviceId: this.Id
        });
        this.clubDetailsFormIII = this.fb.group({
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            performance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [3],
            serviceId: this.Id
        });
        this.clubDetailsFormII = this.fb.group({
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            performance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [7],
            serviceId: this.Id
        });
        this.clubDetailsFormIII = this.fb.group({
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            performance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [8],
            serviceId: this.Id
        });
    }
    ClubComponent.prototype.ngOnInit = function () {
        document.getElementById("clubServiceID").value = localStorage.getItem("e");
        document.getElementById("clubName").value = localStorage.getItem("i");
        document.getElementById("clubComp").value = localStorage.getItem("companyName");
        document.getElementById("clubBn").value = localStorage.getItem("battalionName");
        // (<HTMLInputElement>document.getElementById("clubtid")).value = localStorage.getItem("termId");
        document.getElementById("clubtname").value = localStorage.getItem("termName");
        document.getElementById("clubrk").value = localStorage.getItem("rank");
    };
    ClubComponent.prototype.ngAfterViewInit = function () {
        this.getEdossierClub();
    };
    ClubComponent.prototype.goBack = function () {
        window.history.back();
    };
    ClubComponent.prototype.getEdossierClub = function () {
        var _this = this;
        this.EDossierService.getClubDetails(this.Id).subscribe(function (res) {
            _this.spinner.show();
            var values = res.object;
            if (res.status == 'OK') {
                _this.spinner.hide();
                if (res.object && res.object.termId === 1) {
                    _this.clubDetailsFormI.patchValue({
                        details: res.object.details,
                        loc: res.object.loc,
                        performance: res.object.performance,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 2) {
                    _this.clubDetailsFormII.patchValue({
                        details: res.object.details,
                        loc: res.object.loc,
                        performance: res.object.performance,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 3) {
                    _this.clubDetailsFormIII.patchValue({
                        details: res.object.details,
                        loc: res.object.loc,
                        performance: res.object.performance,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 7) {
                    _this.clubDetailsFormII.patchValue({
                        details: res.object.details,
                        loc: res.object.loc,
                        performance: res.object.performance,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 8) {
                    _this.clubDetailsFormIII.patchValue({
                        details: res.object.details,
                        loc: res.object.loc,
                        performance: res.object.performance,
                        id: res.object.id
                    });
                }
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        });
    };
    ClubComponent.prototype.validateFormI = function (clubForm) {
        var flag = true;
        if (!clubForm.details || clubForm.details.trim() == '' || !clubForm.loc || clubForm.loc.trim() == '' || !clubForm.performance || clubForm.performance.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        return flag;
    };
    ClubComponent.prototype.validateFormII = function (clubForm) {
        var flag = true;
        if (!clubForm.details || clubForm.details.trim() == '' || !clubForm.loc || clubForm.loc.trim() == '' || !clubForm.performance || clubForm.performance.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        return flag;
    };
    ClubComponent.prototype.validateFormIII = function (clubForm) {
        var flag = true;
        if (!clubForm.details || clubForm.details.trim() == '' || !clubForm.loc || clubForm.loc.trim() == '' || !clubForm.performance || clubForm.performance.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        return flag;
    };
    ClubComponent.prototype.addClubsubmit1 = function () {
        // if(newDate(this.clubDetailsFormI.get('startDate').value) > newDate(this.clubDetailsFormI.get('endDate').value)) {
        //   error show
        //   return false;
        // }
        var clubForm = this.clubDetailsFormI.value;
        var validateFormstatus = this.validateFormI(clubForm);
        var id = clubForm.id;
        if (validateFormstatus) {
            if (id === '' || id === undefined) {
                this.addClubsubmit(clubForm);
            }
            else {
                this.updateClub(clubForm);
            }
        }
    };
    ClubComponent.prototype.addClubsubmit2 = function () {
        var clubForm = this.clubDetailsFormII.value;
        var validateFormstatus = this.validateFormII(clubForm);
        var id = clubForm.id;
        if (validateFormstatus) {
            if (id === '' || id === undefined) {
                this.addClubsubmit(clubForm);
            }
            else {
                this.updateClub(clubForm);
            }
        }
    };
    ClubComponent.prototype.addClubsubmit3 = function () {
        var clubForm = this.clubDetailsFormIII.value;
        var validateFormstatus = this.validateFormIII(clubForm);
        var id = clubForm.id;
        if (validateFormstatus) {
            if (id === '' || id === undefined) {
                this.addClubsubmit(clubForm);
            }
            else {
                this.updateClub(clubForm);
            }
        }
    };
    ClubComponent.prototype.addClubsubmit = function (formVal) {
        var _this = this;
        formVal.details = formVal.details.trim();
        formVal.loc = formVal.loc.trim();
        formVal.performance = formVal.performance.trim();
        this.EDossierService.addClubDetails(formVal).subscribe(function (res) {
            console.log(res);
            _this.spinner.hide();
            if (res.status == 'OK') {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
                window.location.reload();
                // this.router.navigate(['e-dossior/ed-content/Ed-index/Otherdetails/club']);
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
        this.getEdossierClub();
    };
    ClubComponent.prototype.updateClub = function (formVal) {
        var _this = this;
        this.EDossierService.updateClubDetails(this.Id, formVal).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.spinner.hide();
                //  this.router.navigate(['e-dossior/ed-content/Ed-index/Otherdetails/club']);
                _this.adminservice.openSnackbar(res.message);
                window.location.reload();
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.adminservice.openSnackbar("Error Occured.");
        });
    };
    ClubComponent.ctorParameters = function () { return [
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_8__["EDossierService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    ClubComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-club',
            template: _raw_loader_club_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_club_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_8__["EDossierService"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ClubComponent);
    return ClubComponent;
}());



/***/ }),

/***/ "VNtU":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/Otherdetails/club/club.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n  <div class=\"mat-heading\">\r\n    <div id=\"top-bar\" class=\"\">\r\n      <h2 class=\"backbtn\"><button mat-icon-button (click)=\"goBack()\">\r\n        <mat-icon>chevron_left</mat-icon>\r\n      </button>E-Dossier <span class=\"sub-menu1\">\r\n        > CLUB</span></h2>\r\n  </div>\r\n  </div>\r\n  \r\n    <div class=\"mat-card mat-focus-indicator\">\r\n      <div class=\"service-id mb-2 \">\r\n          <!-- <div class=\"input_id col-md-6\">\r\n              <b> Service Id :</b> <input type=\"text\" disabled id=\"clubServiceID\" class=\"form-control mt-2\">\r\n          </div>\r\n          <div class=\"input_id col-md-6\">\r\n              <b> Name :</b> <input type=\"text\" disabled id=\"clubName\" class=\"form-control mt-2\">\r\n          </div> -->\r\n          <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">IMA No.</label>\r\n                  <input placeholder=\"No\"  type=\"text\" disabled id=\"clubServiceID\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>  \r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Rank</label>\r\n                  <input placeholder=\"Rank\"  type=\"text\" disabled id=\"clubrk\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Name</label>\r\n                  <input placeholder=\"Name\"  type=\"text\" disabled id=\"clubName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Term</label>\r\n                  <input placeholder=\"Term\"  type=\"text\" disabled id=\"clubtname\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Bn</label>\r\n                  <input placeholder=\"Bn\"  type=\"text\" disabled id=\"clubBn\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"rank\">Coy</label>\r\n                  <input placeholder=\"Coy\"  type=\"text\" disabled id=\"clubComp\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n          </form>\r\n      </div>\r\n  </div>\r\n\r\n    <div class=\"club\">\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n        <div class=\"ng-star-inserted\">\r\n          <div class=\"mat-new mb-3\">\r\n            <h4 class=\"card-heading\">CLUB</h4>\r\n          </div>\r\n        </div>\r\n\r\n        <table class=\"tg\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"tg-cjmp\">TERM</th>\r\n              <th class=\"tg-ratz\">DETAILS</th>\r\n              <th class=\"tg-ratz\">LOC</th>\r\n              <th class=\"tg-ratz\">PERFORMANCE</th>\r\n              <th class=\"tg-ratz\">Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n          \r\n            <tr [formGroup]=\"clubDetailsFormI\" [ngClass]=\"termId != 1 ? 'hide' : ''\" >\r\n              \r\n                <td class=\"tg-0pky\">I TERM</td>\r\n                <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                    formControlName=\"details\"></textarea></td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\" formControlName=\"loc\"></td>\r\n                <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                    formControlName=\"performance\"></textarea></td>\r\n                <td class=\"tg-0pky\"><button class=\"btn btn-color\" (click)=\"addClubsubmit1()\">Submit</button></td>\r\n              \r\n            </tr>\r\n            <tr [formGroup]=\"clubDetailsFormII\" [ngClass]=\"(termId != 2 && termId != 7) ? 'hide' : ''\">\r\n                <td class=\"tg-0pky\">II TERM/ II TECH</td>\r\n                <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                    formControlName=\"details\"></textarea></td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\" formControlName=\"loc\"></td>\r\n                <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                    formControlName=\"performance\"></textarea></td>\r\n                <td class=\"tg-0pky\"><button class=\"btn btn-color\" (click)=\"addClubsubmit2()\">Submit</button></td>\r\n            </tr>\r\n            \r\n            <tr [formGroup]=\"clubDetailsFormIII\" [ngClass]=\"(termId != 3 && termId != 8) ? 'hide' : ''\">\r\n                <td class=\"tg-0pky\">III TERM/ III TECH</td>\r\n                <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                    formControlName=\"details\"></textarea></td>\r\n                <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\" formControlName=\"loc\"></td>\r\n                <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                    formControlName=\"performance\"></textarea></td>\r\n                <td class=\"tg-0pky\"><button class=\"btn btn-color\" (click)=\"addClubsubmit3()\">Submit</button></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "oseV":
/*!*************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/club/club.module.ts ***!
  \*************************************************************/
/*! exports provided: ClubModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubModule", function() { return ClubModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _club_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./club.component */ "+maJ");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { MatCardModule, MatIconModule, MatMenuModule, MatTabsModule, MatProgressBarModule,
//      MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatTableModule,
//       MatTooltipModule, MatPaginatorModule, MatDatepickerModule, MatDividerModule, MatChipsModule, MatListModule } from '@angular/material';


var routes = [
    {
        path: '',
        component: _club_component__WEBPACK_IMPORTED_MODULE_4__["ClubComponent"]
    },
];
var ClubModule = /** @class */ (function () {
    function ClubModule() {
    }
    ClubModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _club_component__WEBPACK_IMPORTED_MODULE_4__["ClubComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ]
        })
    ], ClubModule);
    return ClubModule;
}());



/***/ }),

/***/ "pvKJ":
/*!*************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Otherdetails/club/club.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.main-content {\n  min-height: 45vw;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0rem 0 !important;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: #c6c4c4;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: #c6c4c4;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-cjmp {\n  background-color: #c6c4c4;\n  border-color: #000000;\n  color: #000000;\n  font-size: 1rem;\n  text-align: center;\n  vertical-align: top;\n  font-weight: bold;\n}\n\n.tg .tg-ratz {\n  background-color: #c6c4c4;\n  border-color: #000000;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\nbutton.btn-color {\n  background: #742923;\n  color: #fff;\n}\n\nbutton.btn-color:hover, button.btn-color:focus {\n  color: #fff;\n}\n\n.disableCls {\n  pointer-events: none;\n}\n\n.hide {\n  display: none;\n}\n\n.backbtn button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}");

/***/ }),

/***/ "rEil":
/*!********************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Otherdetails/club/club.module.ts ***!
  \********************************************************************************/
/*! exports provided: ClubModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubModule", function() { return ClubModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var _club_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./club.component */ "Lq27");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { MatCardModule, MatIconModule, MatMenuModule, MatTabsModule, MatProgressBarModule,
//      MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatTableModule,
//       MatTooltipModule, MatPaginatorModule, MatDatepickerModule, MatDividerModule, MatChipsModule, MatListModule } from '@angular/material';




var routes = [
    {
        path: '',
        component: _club_component__WEBPACK_IMPORTED_MODULE_7__["ClubComponent"]
    },
];
var ClubModule = /** @class */ (function () {
    function ClubModule() {
    }
    ClubModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _club_component__WEBPACK_IMPORTED_MODULE_7__["ClubComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"]
            ]
        })
    ], ClubModule);
    return ClubModule;
}());



/***/ })

}]);