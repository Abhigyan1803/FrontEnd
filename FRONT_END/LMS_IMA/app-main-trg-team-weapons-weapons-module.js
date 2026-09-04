(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-main-trg-team-weapons-weapons-module"],{

/***/ "Iv+8":
/*!**************************************************************!*\
  !*** ./src/app/main/trg-team/weapons/weapons.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "Kzz9":
/*!************************************************************!*\
  !*** ./src/app/main/trg-team/weapons/weapons.component.ts ***!
  \************************************************************/
/*! exports provided: WeaponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponsComponent", function() { return WeaponsComponent; });
/* harmony import */ var _raw_loader_weapons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./weapons.component.html */ "eTGA");
/* harmony import */ var _weapons_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weapons.component.scss */ "Iv+8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var app_Shared_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/Shared/constant */ "rheE");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var WeaponsComponent = /** @class */ (function () {
    function WeaponsComponent(router, activeRoute, service, spinner, cdref, _trgBattalion, dialog) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.service = service;
        this.spinner = spinner;
        this.cdref = cdref;
        this._trgBattalion = _trgBattalion;
        this.dialog = dialog;
        this.displayedColumns = ['number', 'weapon', 'status', 'action'];
    }
    WeaponsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            if (_this.id == 1) {
                _this.pTitle = "Term I Weapon";
                _this.getWeapons(1);
            }
            else if (_this.id == 2) {
                _this.pTitle = "Term II Weapon";
                _this.getWeapons(2);
            }
            else if (_this.id == 3) {
                _this.pTitle = "Term III Weapon";
                _this.getWeapons(3);
            }
        });
    };
    WeaponsComponent.prototype.getWeapons = function (id) {
        var _this = this;
        console.log("id", id);
        this.weaponList = [];
        this.dataSource = [];
        this.service.getWeaponByTerm(id, 2).subscribe(function (res) {
            if (res.status = "OK") {
                _this.weaponList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.weaponList);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                _this.dataSource = [];
            }
        });
    };
    WeaponsComponent.prototype.addWeapons = function () {
        if (this.id == 1) {
            this.router.navigate(['main/admin/trg-team/' + app_Shared_constant__WEBPACK_IMPORTED_MODULE_11__["Routings"].addWeaponsPath], { queryParams: { term: 1 } });
        }
        else if (this.id == 2) {
            this.router.navigate(['main/admin/trg-team/' + app_Shared_constant__WEBPACK_IMPORTED_MODULE_11__["Routings"].addWeaponsPath], { queryParams: { term: 2 } });
        }
        else if (this.id == 3) {
            this.router.navigate(['main/admin/trg-team/' + app_Shared_constant__WEBPACK_IMPORTED_MODULE_11__["Routings"].addWeaponsPath], { queryParams: { term: 3 } });
        }
    };
    WeaponsComponent.prototype.viewWeapon = function (id) {
        if (this.router.url.includes('main/trg-team/weapon/weapons')) {
            if (this.id == 1) {
                this.router.navigate(['main/trg-team/weapon/weapons/edit/' + id], { queryParams: { term: 1 } });
            }
            else if (this.id == 2) {
                this.router.navigate(['main/trg-team/weapon/weapons/edit/' + id], { queryParams: { term: 2 } });
            }
            else if (this.id == 3) {
                this.router.navigate(['main/trg-team/weapon/weapons/edit/' + id], { queryParams: { term: 3 } });
            }
        }
        if (this.router.url.includes('main/admin/trg-team')) {
            if (this.id == 1) {
                this.router.navigate(['main/admin/trg-team/weapons/edit/' + id], { queryParams: { term: 1 } });
            }
            else if (this.id == 2) {
                this.router.navigate(['main/admin/trg-team/weapons/edit/' + id], { queryParams: { term: 2 } });
            }
            else if (this.id == 3) {
                this.router.navigate(['main/admin/trg-team/weapons/edit/' + id], { queryParams: { term: 3 } });
            }
        }
    };
    WeaponsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    WeaponsComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.weaponList.slice();
        if (!sort.active || sort.direction === '') {
            this.weaponList = datalist;
            return;
        }
        this.weaponList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'weapon': return _this._trgBattalion.compare(a.name, b.name, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.weaponList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    WeaponsComponent.prototype.changeStatus = function (e, d) {
        var _this = this;
        var s;
        if (e.checked) {
            s = 1;
        }
        else {
            s = 0;
        }
        this.spinner.show();
        this.service.changeWeaponStatus(d.id, s).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.service.openSnackbar(res.message);
                _this.cdref.detectChanges();
                // this.ngAfterViewInit();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.service.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.service.openSnackbar('Error Occured.');
        });
        this.spinner.hide();
    };
    WeaponsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_10__["TrgTeamService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_5__["TrgBattalionService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    WeaponsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }]
    };
    WeaponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-weapons',
            template: _raw_loader_weapons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_weapons_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_10__["TrgTeamService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_5__["TrgBattalionService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], WeaponsComponent);
    return WeaponsComponent;
}());



/***/ }),

/***/ "Xt+l":
/*!*********************************************************!*\
  !*** ./src/app/main/trg-team/weapons/weapons.module.ts ***!
  \*********************************************************/
/*! exports provided: WeaponsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponsModule", function() { return WeaponsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _weapons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weapons.component */ "Kzz9");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _weapons_component__WEBPACK_IMPORTED_MODULE_4__["WeaponsComponent"]
    }
];
var WeaponsModule = /** @class */ (function () {
    function WeaponsModule() {
    }
    WeaponsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _weapons_component__WEBPACK_IMPORTED_MODULE_4__["WeaponsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], WeaponsModule);
    return WeaponsModule;
}());



/***/ }),

/***/ "eTGA":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/weapons/weapons.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> TRG Team ><span class=\"sub-menu1\"> {{pTitle}}</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n      \r\n    </div>\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Weapon Column -->\r\n                <ng-container matColumnDef=\"weapon\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weapon </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        {{element.name}}\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- WA Column -->\r\n                <!-- <ng-container matColumnDef=\"battalion\">\r\n                    <th mat-header-cell *matHeaderCellDef> Term </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        {{element.battalion}}\r\n                    </td>\r\n                </ng-container> -->\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewWeapon(element.id)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <!-- Row shown when there is no matching data. -->\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n\r\n        </div>\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n</mat-card>");

/***/ })

}]);