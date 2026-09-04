(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["communication-complaints-communication-complaints-module"],{

/***/ "O6LQ":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/main/gs-branch/it/complaints-n-requirements/communication-complaints/communication-complaints.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: CommunicationComplaintsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationComplaintsModule", function() { return CommunicationComplaintsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _communication_complaints_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./communication-complaints.component */ "STNz");
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
        component: _communication_complaints_component__WEBPACK_IMPORTED_MODULE_4__["CommunicationComplaintsComponent"]
    },
    {
        path: 'view',
        loadChildren: function () { return __webpack_require__.e(/*! import() | view-communication-complaints-view-communication-complaints-module */ "view-communication-complaints-view-communication-complaints-module").then(__webpack_require__.bind(null, /*! ./view-communication-complaints/view-communication-complaints.module */ "0trM"))
            .then(function (m) { return m.ViewCommunicationComplaintsModule; }); }
    }
];
var CommunicationComplaintsModule = /** @class */ (function () {
    function CommunicationComplaintsModule() {
    }
    CommunicationComplaintsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _communication_complaints_component__WEBPACK_IMPORTED_MODULE_4__["CommunicationComplaintsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], CommunicationComplaintsModule);
    return CommunicationComplaintsModule;
}());



/***/ }),

/***/ "STNz":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/main/gs-branch/it/complaints-n-requirements/communication-complaints/communication-complaints.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: CommunicationComplaintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationComplaintsComponent", function() { return CommunicationComplaintsComponent; });
/* harmony import */ var _raw_loader_communication_complaints_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./communication-complaints.component.html */ "d/M9");
/* harmony import */ var _communication_complaints_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./communication-complaints.component.scss */ "zcim");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CommunicationComplaintsComponent = /** @class */ (function () {
    function CommunicationComplaintsComponent(router, adminservice, spinner, cdref, dialog, sharedService) {
        this.router = router;
        this.adminservice = adminservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.displayedColumns = ['number', 'title', 'name', 'department', 'address', 'requestType', 'document', 'requestStatus', 'action'];
        this.Complaints = [];
    }
    CommunicationComplaintsComponent.prototype.ngOnInit = function () {
    };
    CommunicationComplaintsComponent.prototype.ngAfterViewInit = function () {
        this.getComplaints();
    };
    CommunicationComplaintsComponent.prototype.getComplaints = function () {
        var _this = this;
        this.spinner.show();
        this.adminservice.getComplaints(2).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                res.object.forEach(function (e) {
                    if (e.requestNature == 'Communication') {
                        _this.Complaints.push(e);
                    }
                });
                // this.Complaints=res.object ;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.Complaints);
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
    // addComplaints() {
    //   this.router.navigate(['/main/admin/GS-Branch/it/complaints-requirements/it-complaints/add-complaints']);
    // }
    CommunicationComplaintsComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    CommunicationComplaintsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CommunicationComplaintsComponent.prototype.viewComplaints = function (element) {
        this.router.navigate(['main/gs-branch/itcommunication/complaints-requirements/communication/view'], { queryParams: { id: element.id } });
        if (this.router.url.includes('main/gs-Branch'))
            this.router.navigate(['/main/gs-Branch/it/complaints-requirements/communication/view'], { queryParams: { id: element.id } });
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['/main/admin/GS-Branch/it/complaints-requirements/communication/view'], { queryParams: { id: element.id } });
    };
    CommunicationComplaintsComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.Complaints.slice();
        if (!sort.active || sort.direction === '') {
            this.Complaints = datalist;
            return;
        }
        this.Complaints = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'title': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'requestNature': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'requestType': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                case 'remarks': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'department': return _this.sharedService.compare(a.department.toLowerCase(), b.department.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.Complaints);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CommunicationComplaintsComponent.prototype.openDoc = function (e) {
        // console.log(e);
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Complaints Document", url: e.file
            }
        });
    };
    CommunicationComplaintsComponent.prototype.changeComplaintsStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.adminservice.changeComplaintsStatus(d.id, 1).subscribe(function (res) {
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
            this.adminservice.changeComplaintsStatus(d.id, 0).subscribe(function (res) {
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
    CommunicationComplaintsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
    ]; };
    CommunicationComplaintsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }]
    };
    CommunicationComplaintsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-complaints',
            template: _raw_loader_communication_complaints_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_communication_complaints_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], CommunicationComplaintsComponent);
    return CommunicationComplaintsComponent;
}());



/***/ }),

/***/ "d/M9":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/gs-branch/it/complaints-n-requirements/communication-complaints/communication-complaints.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> GS Branch > <span class=\"sub-menu1\"> IT & Communication > Complaints & Requirement > Communication </span></h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <!-- <button mat-raised-button (click)=\"addComplaints()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button> -->\r\n    </div>\r\n   \r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n     \r\n     \r\n                <!-- Name Column -->\r\n      <ng-container matColumnDef=\"title\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\r\n    </ng-container>\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"department\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Department </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.department}} </td>\r\n    </ng-container>\r\n\r\n     <!-- Name Column -->\r\n     <ng-container matColumnDef=\"address\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Address </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <!-- Name Column -->\r\n            <ng-container matColumnDef=\"requestType\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Request Type </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.requestType}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"requestNature\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Nature of Request </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.requestNature}} </td>\r\n                </ng-container>\r\n\r\n          \r\n\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \r\n                        <a *ngIf=\"element.file\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\" >\r\n                            <mat-icon>description</mat-icon>\r\n                        </a>    \r\n                        \r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"requestStatus\">\r\n                    <th mat-header-cell *matHeaderCellDef>Request Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        {{element.requestStatus}} \r\n                        <!-- <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeComplaintsStatus($event,element)\">\r\n                        </mat-slide-toggle> -->\r\n                    </td>\r\n                </ng-container>\r\n\r\n                   <!-- Name Column -->\r\n            <!-- <ng-container matColumnDef=\"remarks\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> remarks </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.remarks}} </td>\r\n            </ng-container> -->\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> View </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewComplaints(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n  \r\n</mat-card>\r\n");

/***/ }),

/***/ "e0G6":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/gs-branch/it-&-communication/complaints-n-requirements/communication-complaints/communication-complaints.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> GS Branch > <span class=\"sub-menu1\"> IT & Communication > Complaints & Requirement >\r\n            Communication </span></h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <!-- <button mat-raised-button (click)=\"addComplaints()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button> -->\r\n    </div>\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"title\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"department\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Department </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.department}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"address\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Address </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"requestType\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Request Type </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.requestType}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"requestNature\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Nature of Request </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.requestNature}} </td>\r\n                </ng-container>\r\n\r\n\r\n\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        <a *ngIf=\"element.file\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n                            <mat-icon>description</mat-icon>\r\n                        </a>\r\n\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"requestStatus\">\r\n                    <th mat-header-cell *matHeaderCellDef>Request Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        {{element.requestStatus}}\r\n                        <!-- <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeComplaintsStatus($event,element)\">\r\n                        </mat-slide-toggle> -->\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <!-- <ng-container matColumnDef=\"remarks\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> remarks </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.remarks}} </td>\r\n            </ng-container> -->\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> View </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \r\n                        <a href=\"javascript:void(0)\" (click)=\"viewComplaints(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "r032":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/it-&-communication/complaints-n-requirements/communication-complaints/communication-complaints.component.scss ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "rNc5":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/it-&-communication/complaints-n-requirements/communication-complaints/communication-complaints.module.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: CommunicationComplaintsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationComplaintsModule", function() { return CommunicationComplaintsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _communication_complaints_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./communication-complaints.component */ "vcdh");
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
        component: _communication_complaints_component__WEBPACK_IMPORTED_MODULE_4__["CommunicationComplaintsComponent"]
    },
    {
        path: 'view',
        loadChildren: function () { return __webpack_require__.e(/*! import() | view-communication-complaints-view-communication-complaints-module */ "view-communication-complaints-view-communication-complaints-module").then(__webpack_require__.bind(null, /*! ./view-communication-complaints/view-communication-complaints.module */ "zoxX"))
            .then(function (m) { return m.ViewCommunicationComplaintsModule; }); }
    }
];
var CommunicationComplaintsModule = /** @class */ (function () {
    function CommunicationComplaintsModule() {
    }
    CommunicationComplaintsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _communication_complaints_component__WEBPACK_IMPORTED_MODULE_4__["CommunicationComplaintsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], CommunicationComplaintsModule);
    return CommunicationComplaintsModule;
}());



/***/ }),

/***/ "vcdh":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/it-&-communication/complaints-n-requirements/communication-complaints/communication-complaints.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: CommunicationComplaintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationComplaintsComponent", function() { return CommunicationComplaintsComponent; });
/* harmony import */ var _raw_loader_communication_complaints_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./communication-complaints.component.html */ "e0G6");
/* harmony import */ var _communication_complaints_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./communication-complaints.component.scss */ "r032");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CommunicationComplaintsComponent = /** @class */ (function () {
    function CommunicationComplaintsComponent(router, adminservice, spinner, cdref, dialog, sharedService) {
        this.router = router;
        this.adminservice = adminservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.displayedColumns = ['number', 'title', 'name', 'department', 'address', 'requestType', 'document', 'requestStatus', 'action'];
        this.Complaints = [];
    }
    CommunicationComplaintsComponent.prototype.ngOnInit = function () {
    };
    CommunicationComplaintsComponent.prototype.ngAfterViewInit = function () {
        this.getComplaints();
    };
    CommunicationComplaintsComponent.prototype.getComplaints = function () {
        var _this = this;
        this.spinner.show();
        this.adminservice.getComplaints(2).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                res.object.forEach(function (e) {
                    if (e.requestNature == 'Communication') {
                        _this.Complaints.push(e);
                    }
                });
                // this.Complaints=res.object ;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.Complaints);
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
    // addComplaints() {
    //   this.router.navigate(['/main/admin/GS-Branch/it/complaints-requirements/it-complaints/add-complaints']);
    // }
    CommunicationComplaintsComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    CommunicationComplaintsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CommunicationComplaintsComponent.prototype.viewComplaints = function (element) {
        this.router.navigate(['main/admin/GS-Branch/itcommunication/complaints-requirements/communication/view'], { queryParams: { id: element.id } });
        if (this.router.url.includes('main/gs-branch'))
            this.router.navigate(['/main/gs-branch/it/complaints-requirements/it/view'], { queryParams: { id: element.id } });
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['main/admin/GS-Branch/itcommunication/complaints-requirements/communication/view'], { queryParams: { id: element.id } });
    };
    CommunicationComplaintsComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.Complaints.slice();
        if (!sort.active || sort.direction === '') {
            this.Complaints = datalist;
            return;
        }
        this.Complaints = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'title': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'requestNature': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'requestType': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                case 'remarks': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'department': return _this.sharedService.compare(a.department.toLowerCase(), b.department.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.Complaints);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CommunicationComplaintsComponent.prototype.openDoc = function (e) {
        // console.log(e);
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Complaints Document", url: e.file
            }
        });
    };
    CommunicationComplaintsComponent.prototype.changeComplaintsStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.adminservice.changeComplaintsStatus(d.id, 1).subscribe(function (res) {
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
            this.adminservice.changeComplaintsStatus(d.id, 0).subscribe(function (res) {
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
    CommunicationComplaintsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
    ]; };
    CommunicationComplaintsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }]
    };
    CommunicationComplaintsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-complaints',
            template: _raw_loader_communication_complaints_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_communication_complaints_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], CommunicationComplaintsComponent);
    return CommunicationComplaintsComponent;
}());



/***/ }),

/***/ "zcim":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/main/gs-branch/it/complaints-n-requirements/communication-complaints/communication-complaints.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);