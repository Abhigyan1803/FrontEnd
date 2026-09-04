(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-members-module"],{

/***/ "8x84":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/members/members.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> TRG Battalion <span class=\"sub-menu1\"> > Members</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addMember()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr.No.</th>\r\n                        <th>Image</th>\r\n                        <th>Rank</th>\r\n                        <th>Name</th> \r\n                        <th>Battalion</th>\r\n                        <th>Company</th>\r\n                        <th>View</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let m of trgBattalionMembers; let i = index\">\r\n                        <td>{{i+1}} </td>\r\n                        <td><img [src]=\"m.image\" (error)=\"noImg($event)\"  width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"></td>\r\n                        <td class=\"rank-name\">{{m.rank}}</td>\r\n                        <td class=\"rank-name\">{{m.name}}</td>\r\n                        <td> {{m.battalionType.name}} </td>\r\n                        <td>{{m.battalionCompany.name}} </td>\r\n                        <td class=\"act-btn\">\r\n                            <a href=\"javascript:void(0)\" (click)=\"  viewMember(m)\" >\r\n                                <mat-icon>visibility</mat-icon>\r\n                            </a>\r\n\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Image Cell Column -->\r\n                <ng-container matColumnDef=\"image\">\r\n                    <th mat-header-cell *matHeaderCellDef> Image </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> <img [src]=\"IP+element.image\" (error)=\"noImg($event)\"\r\n                            width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"> </td>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.date|date:'d MMMM, y'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Rank Column -->\r\n                <ng-container matColumnDef=\"rank\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Rank </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.rank}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Post Column -->\r\n                <ng-container matColumnDef=\"battalion\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Battalion </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.battalionType|| '-'}} Bn</td>\r\n                </ng-container>\r\n\r\n                <!-- Post Column -->\r\n                <ng-container matColumnDef=\"post\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Appt </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.battalionPost }}  </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"companyName\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Company </th>\r\n                    <td mat-cell *matCellDef=\"let element\">  {{element?.battalionCompany|| '-' }} </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeMemberStatus($event,element.id)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewMember(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "KG9t":
/*!*********************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/members/members.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "MnEn":
/*!*******************************************************************************!*\
  !*** ./src/app/main/admin/trg-team-management/members/members.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rank-name {\n  text-transform: capitalize;\n}");

/***/ }),

/***/ "O1UK":
/*!*****************************************************************************!*\
  !*** ./src/app/main/admin/trg-team-management/members/members.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _raw_loader_members_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./members.component.html */ "QwcW");
/* harmony import */ var _members_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./members.component.scss */ "MnEn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_links_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/links.module */ "Uhg6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MembersComponent = /** @class */ (function () {
    function MembersComponent(router, service, _trgBattalion, spinner, cdref) {
        this.router = router;
        this.service = service;
        this._trgBattalion = _trgBattalion;
        this.spinner = spinner;
        this.cdref = cdref;
        this.IP = app_links_module__WEBPACK_IMPORTED_MODULE_10__["Links"].IP;
        this.displayedColumns = ['number', 'image', 'rank', 'name', 'post', 'status', 'action'];
    }
    MembersComponent.prototype.ngOnInit = function () { };
    MembersComponent.prototype.ngAfterViewInit = function () {
        this.getMembers();
    };
    MembersComponent.prototype.getMembers = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllTrgTeam().subscribe(function (res) {
            if (res.status == 1) {
                _this.trgTeamMembers = res.List;
                _this.trgTeamMembers = _this.trgTeamMembers.map(function (res) { var _a; return ({ id: res.id, date: res.createdAt, rank: res.rank, name: res.name, post: (_a = res.position) === null || _a === void 0 ? void 0 : _a.name, image: res.image, status: res.status }); });
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.trgTeamMembers);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar(res.msg);
            }
        }, function (err) {
            _this.spinner.hide();
            _this._trgBattalion.openSnackbar('Some Error Occured.');
            console.log(JSON.stringify(err));
        });
    };
    MembersComponent.prototype.changeMemberStatus = function (e, id) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeMemberStatus(id, 1).subscribe(function (res) {
                if (res.status == '1') {
                    _this._trgBattalion.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this.service.changeMemberStatus(id, 0).subscribe(function (res) {
                if (res.status == '1') {
                    _this._trgBattalion.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    MembersComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    MembersComponent.prototype.addMember = function () {
        this.router.navigate(['/main/admin/trg-team/members/add-member']);
    };
    MembersComponent.prototype.viewMember = function (m) {
        this.router.navigate(['/main/admin/trg-team/members/view-member'], { queryParams: { id: m.id } });
    };
    MembersComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    MembersComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.trgTeamMembers.slice();
        if (!sort.active || sort.direction === '') {
            this.trgTeamMembers = datalist;
            return;
        }
        this.trgTeamMembers = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'rank': return _this._trgBattalion.compare(a.rank, b.rank, isAsc);
                case 'name': return _this._trgBattalion.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'post': return _this._trgBattalion.compare(a.post.toLowerCase(), b.post.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.trgTeamMembers);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    MembersComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    MembersComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true },] }]
    };
    MembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-members',
            template: _raw_loader_members_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_members_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], MembersComponent);
    return MembersComponent;
}());



/***/ }),

/***/ "QwcW":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-team-management/members/members.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> TRG Team <span class=\"sub-menu1\"> > Members</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addMember()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr.No.</th>\r\n                        <th>Image</th> \r\n                        <th>Rank</th>\r\n                        <th>Name</th>\r\n                        <th>Post</th>\r\n                        <th>Status</th>\r\n                        <th>View</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let m of trgTeamMembers; let i = index\">\r\n                        <td>{{i+1}} </td>\r\n                        <td><img [src]=\"m.image\" (error)=\"noImg($event)\"  width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"></td>\r\n                        <td class=\"rank-name\"> {{m.rank}}</td>\r\n                        <td class=\"rank-name\"> {{m.name}}</td>\r\n                        <td>{{m.position?.name || '-'}} </td>\r\n                        <td> \r\n                            <mat-slide-toggle [checked]=\"m.status == '1'\" (change)=\"changeMemberStatus($event,m.id)\" ></mat-slide-toggle>\r\n                        </td>\r\n                        <td class=\"act-btn\">\r\n                            <a href=\"javascript:void(0)\" (click)=\"viewMember(m)\" >\r\n                                <mat-icon>visibility</mat-icon>\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n          \r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Image Cell Column -->\r\n                <ng-container matColumnDef=\"image\">\r\n                    <th mat-header-cell *matHeaderCellDef> Image </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                         <img [src]=\"IP+element.image\" (error)=\"noImg($event)\"\r\n                            width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"> </td>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.date|date:'d MMMM, y'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Rank Column -->\r\n                <ng-container matColumnDef=\"rank\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Rank </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.rank}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name }} </td>\r\n                </ng-container>\r\n\r\n                <!-- Post Column -->\r\n                <ng-container matColumnDef=\"post\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Appt </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.post|| '-'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeMemberStatus($event,element.id)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewMember(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "UptD":
/*!****************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/members/members.module.ts ***!
  \****************************************************************/
/*! exports provided: MembersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersModule", function() { return MembersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _members_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./members.component */ "cywD");
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
        component: _members_component__WEBPACK_IMPORTED_MODULE_4__["MembersComponent"]
    },
    { path: 'add-member', loadChildren: function () { return __webpack_require__.e(/*! import() | add-members-add-member-module */ "add-members-add-member-module").then(__webpack_require__.bind(null, /*! ./add-members/add-member.module */ "nUsv")).then(function (m) { return m.AddMemberModule; }); } },
    { path: 'view-member', loadChildren: function () { return __webpack_require__.e(/*! import() | add-members-add-member-module */ "add-members-add-member-module").then(__webpack_require__.bind(null, /*! ./add-members/add-member.module */ "nUsv")).then(function (m) { return m.AddMemberModule; }); } },
];
var MembersModule = /** @class */ (function () {
    function MembersModule() {
    }
    MembersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _members_component__WEBPACK_IMPORTED_MODULE_4__["MembersComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], MembersModule);
    return MembersModule;
}());



/***/ }),

/***/ "Xoxg":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/gs-branch/members/members.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> GS Branch <span class=\"sub-menu1\"> > Members</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addMember()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr.No.</th>\r\n                        <th>Image</th> \r\n                        <th>Rank</th>\r\n                        <th>Name</th>\r\n                        <th>Post</th>\r\n                        <th>Status</th>\r\n                        <th>View</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let m of trgTeamMembers; let i = index\">\r\n                        <td>{{i+1}} </td>\r\n                        <td><img [src]=\"m.image\" (error)=\"noImg($event)\"  width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"></td>\r\n                        <td class=\"rank-name\"> {{m.rank}}</td>\r\n                        <td class=\"rank-name\"> {{m.name}}</td>\r\n                        <td>{{m.position?.name || '-'}} </td>\r\n                        <td> \r\n                            <mat-slide-toggle [checked]=\"m.status == '1'\" (change)=\"changeMemberStatus($event,m.id)\" ></mat-slide-toggle>\r\n                        </td>\r\n                        <td class=\"act-btn\">\r\n                            <a href=\"javascript:void(0)\" (click)=\"viewMember(m)\" >\r\n                                <mat-icon>visibility</mat-icon>\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n          \r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Image Cell Column -->\r\n                <ng-container matColumnDef=\"image\">\r\n                    <th mat-header-cell *matHeaderCellDef> Image </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> <img [src]=\"IP+element.image\" (error)=\"noImg($event)\"\r\n                            width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"> </td>\r\n                </ng-container>\r\n\r\n             \r\n                <!-- Rank Column -->\r\n                <ng-container matColumnDef=\"rank\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Rank </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.gsRank}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name }} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Post Column -->\r\n                <ng-container matColumnDef=\"post\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Appt </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.gsPosition?.name || '-'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeMemberStatus($event,element.id)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> View </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewMember(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n</mat-card>");

/***/ }),

/***/ "ZLJz":
/*!************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/members/members.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rank-name {\n  text-transform: capitalize;\n}");

/***/ }),

/***/ "cywD":
/*!*******************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/members/members.component.ts ***!
  \*******************************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _raw_loader_members_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./members.component.html */ "Xoxg");
/* harmony import */ var _members_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./members.component.scss */ "KG9t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_links_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/links.module */ "Uhg6");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
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












var MembersComponent = /** @class */ (function () {
    function MembersComponent(router, service, _trgBattalion, spinner, cdref, sharedService) {
        this.router = router;
        this.service = service;
        this._trgBattalion = _trgBattalion;
        this.spinner = spinner;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.IP = app_links_module__WEBPACK_IMPORTED_MODULE_7__["Links"].IP;
        this.displayedColumns = ['number', 'image', 'rank', 'name', 'post', 'status', 'action'];
    }
    MembersComponent.prototype.ngOnInit = function () { };
    MembersComponent.prototype.ngAfterViewInit = function () {
        this.getMembers();
    };
    MembersComponent.prototype.getMembers = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllGSBranchMembers(2).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.gsBranchMembers = res.object;
                // this.gsBranchMembers = this.gsBranchMembers.map((res) => ({ id: res.id, date: res.createdAt, rank: res.rank, name: res.name, post: res.position?.name, image: res.image, status: res.status }))
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.gsBranchMembers);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this._trgBattalion.openSnackbar('Some Error Occured.');
            console.log(JSON.stringify(err));
        });
    };
    MembersComponent.prototype.changeMemberStatus = function (e, id) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeGSBranchMemberStatus(id, 1).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    // this.ngAfterViewInit();
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
            });
        }
        else {
            this.service.changeGSBranchMemberStatus(id, 0).subscribe(function (res) {
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    // this.ngAfterViewInit();
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
            });
        }
    };
    MembersComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    MembersComponent.prototype.addMember = function () {
        this.router.navigate(['/main/admin/GS-Branch/members/add-member']);
    };
    MembersComponent.prototype.viewMember = function (m) {
        this.router.navigate(['/main/admin/GS-Branch/members/view-member'], { queryParams: { id: m.id } });
    };
    MembersComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    MembersComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.gsBranchMembers.slice();
        if (!sort.active || sort.direction === '') {
            this.gsBranchMembers = datalist;
            return;
        }
        this.gsBranchMembers = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'rank': return _this.sharedService.compare(a.gsRank, b.gsRank, isAsc);
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'post': return _this.sharedService.compare(a.gsPosition.name.toLowerCase(), b.gsPosition.name.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.gsBranchMembers);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    MembersComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_10__["TrgBattalionService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
    ]; };
    MembersComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true },] }]
    };
    MembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-members',
            template: _raw_loader_members_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_members_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_10__["TrgBattalionService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], MembersComponent);
    return MembersComponent;
}());



/***/ }),

/***/ "lcPn":
/*!*******************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/members/members.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MembersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersModule", function() { return MembersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _members_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./members.component */ "t0/Y");
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
        component: _members_component__WEBPACK_IMPORTED_MODULE_4__["MembersComponent"]
    },
    { path: 'add-member', loadChildren: function () { return __webpack_require__.e(/*! import() | add-member-add-member-module */ "add-member-add-member-module").then(__webpack_require__.bind(null, /*! ./add-member/add-member.module */ "52Jf")).then(function (m) { return m.AddMemberModule; }); } },
    { path: 'view-member', loadChildren: function () { return __webpack_require__.e(/*! import() | add-member-add-member-module */ "add-member-add-member-module").then(__webpack_require__.bind(null, /*! ./add-member/add-member.module */ "52Jf")).then(function (m) { return m.AddMemberModule; }); } },
];
var MembersModule = /** @class */ (function () {
    function MembersModule() {
    }
    MembersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _members_component__WEBPACK_IMPORTED_MODULE_4__["MembersComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], MembersModule);
    return MembersModule;
}());



/***/ }),

/***/ "t0/Y":
/*!**********************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/members/members.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _raw_loader_members_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./members.component.html */ "8x84");
/* harmony import */ var _members_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./members.component.scss */ "ZLJz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_links_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/links.module */ "Uhg6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MembersComponent = /** @class */ (function () {
    function MembersComponent(router, service, _trgBattalion, spinner, cdref) {
        this.router = router;
        this.service = service;
        this._trgBattalion = _trgBattalion;
        this.spinner = spinner;
        this.cdref = cdref;
        this.IP = app_links_module__WEBPACK_IMPORTED_MODULE_10__["Links"].IP;
        this.displayedColumns = ['number', 'image', 'rank', 'name', 'battalion', 'post', 'companyName', 'status', 'action'];
        this.trgBattalionMembers = [];
    }
    MembersComponent.prototype.ngOnInit = function () {
    };
    MembersComponent.prototype.ngAfterViewInit = function () {
        this.getMembers();
    };
    MembersComponent.prototype.getMembers = function () {
        var _this = this;
        this.spinner.show();
        this.service.getTRGBattalionList(0, 2).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.trgBattalionMembers = res.object;
                _this.trgBattalionMembers = _this.trgBattalionMembers.map(function (res) {
                    var _a, _b, _c;
                    return ({
                        id: res.id,
                        date: res.createdAt,
                        rank: res.rank,
                        name: res.name,
                        battalionType: (_a = res.battalionType) === null || _a === void 0 ? void 0 : _a.shortName,
                        battalionPost: (_b = res.battalionPost) === null || _b === void 0 ? void 0 : _b.shortName,
                        battalionCompany: (_c = res.battalionCompany) === null || _c === void 0 ? void 0 : _c.name,
                        image: res.image, status: res.status
                    });
                });
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.trgBattalionMembers);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar(res.msg);
            }
        }, function (err) {
            _this.spinner.hide();
            _this._trgBattalion.openSnackbar('Some Error Occured.');
            console.log(JSON.stringify(err));
        });
    };
    MembersComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    MembersComponent.prototype.changeMemberStatus = function (e, id) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeTRGBattalionMemberStatus(id, 1).subscribe(function (res) {
                // console.log(res);
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    // this.ngAfterViewInit()
                }
                else {
                    _this.service.openSnackbar(res.message);
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Some Error Occured");
            });
        }
        else {
            this.service.changeTRGBattalionMemberStatus(id, 0).subscribe(function (res) {
                // console.log(res); 
                if (res.status == 'OK') {
                    _this.service.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    // this.ngAfterViewInit()
                }
                else {
                    _this.service.openSnackbar(res.message);
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar("Some Error Occured");
            });
        }
    };
    MembersComponent.prototype.addMember = function () {
        this.router.navigate(['/main/admin/trg-battalion/members/add-member']);
    };
    MembersComponent.prototype.viewMember = function (m) {
        this.router.navigate(['/main/admin/trg-battalion/members/view-member'], { queryParams: { id: m.id } });
    };
    MembersComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    MembersComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.trgBattalionMembers.slice();
        if (!sort.active || sort.direction === '') {
            this.trgBattalionMembers = datalist;
            return;
        }
        this.trgBattalionMembers = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'rank': return _this._trgBattalion.compare(a.rank.toLowerCase(), b.rank.toLowerCase(), isAsc);
                case 'name': return _this._trgBattalion.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'company': return _this._trgBattalion.compare(a.battalionCompany.toLowerCase(), b.battalionCompany.toLowerCase(), isAsc);
                case 'battalion': return _this._trgBattalion.compare(a.battalionType.toLowerCase(), b.battalionType.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.trgBattalionMembers);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    MembersComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    MembersComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true },] }]
    };
    MembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-members',
            template: _raw_loader_members_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_members_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], MembersComponent);
    return MembersComponent;
}());



/***/ }),

/***/ "yYdm":
/*!**************************************************************************!*\
  !*** ./src/app/main/admin/trg-team-management/members/members.module.ts ***!
  \**************************************************************************/
/*! exports provided: MembersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersModule", function() { return MembersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _members_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./members.component */ "O1UK");
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
        component: _members_component__WEBPACK_IMPORTED_MODULE_4__["MembersComponent"]
    },
    { path: 'add-member', loadChildren: function () { return __webpack_require__.e(/*! import() | add-member-add-member-module */ "add-member-add-member-module").then(__webpack_require__.bind(null, /*! ./add-member/add-member.module */ "D6IS")).then(function (m) { return m.AddMemberModule; }); } },
    { path: 'view-member', loadChildren: function () { return __webpack_require__.e(/*! import() | add-member-add-member-module */ "add-member-add-member-module").then(__webpack_require__.bind(null, /*! ./add-member/add-member.module */ "D6IS")).then(function (m) { return m.AddMemberModule; }); } },
];
var MembersModule = /** @class */ (function () {
    function MembersModule() {
    }
    MembersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _members_component__WEBPACK_IMPORTED_MODULE_4__["MembersComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], MembersModule);
    return MembersModule;
}());



/***/ })

}]);