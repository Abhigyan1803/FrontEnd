(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["letters-letters-module"],{

/***/ "+FlL":
/*!***************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/letters/letters.component.ts ***!
  \***************************************************************************/
/*! exports provided: LettersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettersComponent", function() { return LettersComponent; });
/* harmony import */ var _raw_loader_letters_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./letters.component.html */ "/rFo");
/* harmony import */ var _letters_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./letters.component.scss */ "N2Lk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
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












var LettersComponent = /** @class */ (function () {
    function LettersComponent(spinner, cdref, dialog, _trgBattalion, router, service) {
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this._trgBattalion = _trgBattalion;
        this.router = router;
        this.service = service;
        this.displayedColumns = ['number', 'date', 'name', 'acType', 'description', 'status', 'document', 'action'];
        this.lettersList = [];
    }
    LettersComponent.prototype.ngOnInit = function () {
    };
    LettersComponent.prototype.ngAfterViewInit = function () {
        this.getLetters();
    };
    LettersComponent.prototype.getLetters = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllLetters().subscribe(function (res) {
            console.log(res, "letters");
            if (res.status == '1') {
                _this.lettersList = res.List;
                _this.lettersList = _this.lettersList.map(function (res) { return ({
                    id: res.id, date: res.date, acType: res.acType.type,
                    description: res.description, document: res.document, name: res.name, status: res.status
                }); });
                _this.cdref.detectChanges();
                _this.spinner.hide();
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.lettersList);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                _this._trgBattalion.openSnackbar(res.msg);
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
            _this._trgBattalion.openSnackbar('Error Occured.');
        });
    };
    // openDoc(l) {
    //   this.dialog.open(DialogComponent, {
    //     width: '1200px', height: '600px',
    //     data: {
    //       type: 'document', url: l.document
    //     }
    //   });
    // }
    LettersComponent.prototype.openDoc = function (e) {
        console.log(e.document, "document");
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Letters Document", url: e.document
            }
        });
    };
    LettersComponent.prototype.addLetter = function () {
        if (this.router.url.includes('/main/admin/trg-team/')) {
            this.router.navigate(['/main/admin/trg-team/adventure-cell/letters/add-letter']);
        }
        else {
            this.router.navigate(['/main/trg-team/adventure-cell/letters/add-letter']);
        }
    };
    LettersComponent.prototype.viewLetter = function (l) {
        if (this.router.url.includes('/main/admin/trg-team/')) {
            this.router.navigate(['/main/admin/trg-team/adventure-cell/letters/view-letter'], { queryParams: { id: l.id } });
        }
        else {
            this.router.navigate(['/main/trg-team/adventure-cell/letters/view-letter'], { queryParams: { id: l.id } });
        }
    };
    LettersComponent.prototype.changeLetterStatus = function (e, l) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeLetterStatus(l.id, 1).subscribe(function (res) {
                if (res.status == '1') {
                    _this._trgBattalion.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this.service.changeLetterStatus(l.id, 0).subscribe(function (res) {
                if (res.status == '1') {
                    _this._trgBattalion.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    LettersComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    LettersComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.lettersList.slice();
        if (!sort.active || sort.direction === '') {
            this.lettersList = datalist;
            return;
        }
        this.lettersList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'date': return _this._trgBattalion.compare(a.date, b.date, isAsc);
                case 'name': return _this._trgBattalion.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'acType': return _this._trgBattalion.compare(a.acType, b.acType, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.lettersList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    LettersComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__["TrgBattalionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"] }
    ]; };
    LettersComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true },] }]
    };
    LettersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-letters',
            template: _raw_loader_letters_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_letters_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
            app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__["TrgBattalionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"]])
    ], LettersComponent);
    return LettersComponent;
}());



/***/ }),

/***/ "/rFo":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/adventure-cell/letters/letters.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Adventure Cell <span class=\"sub-menu1\"> > Letters </span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addLetter()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr.No.</th>\r\n                        <th>Date</th>\r\n                        <th>Name</th>\r\n                        <th>Adventure Cell Type</th>                \r\n                        <th>Status</th>\r\n                        <th>Document</th>\r\n                        <th>View</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let l of lettersList;let i=index\" >\r\n                        <td>{{i+1}}</td>\r\n                        <td>{{l.date | date:'d MMMM, y'}} </td>\r\n                        <td>{{l.name}}</td>\r\n                        <td>{{l.acType?.type || 'na'}} </td>\r\n                        \r\n                        <td>\r\n                            <mat-slide-toggle [checked]=\"l.status == 1\" (change)=\"changeLetterStatus($event,l)\" ></mat-slide-toggle>\r\n                        </td>\r\n                        <td> <a href=\"javascript:void(0)\" (click)=\"openDoc(l)\" > <mat-icon>description</mat-icon></a> </td>\r\n                        <td class=\"act-btn\">\r\n                            <a href=\"javascript:void(0)\" (click)=\"viewLetter(l)\" >\r\n                                <mat-icon>visibility</mat-icon>    \r\n                            </a>\r\n                            \r\n                        </td>\r\n\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.date|date:'d MMMM, y'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Adventure Cell Column -->\r\n                <ng-container matColumnDef=\"acType\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Adventure Cell </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element?.acType || '-'}} </td>\r\n                </ng-container>\r\n\r\n\r\n\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeLetterStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Document Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n                            <mat-icon>description</mat-icon>\r\n                        </a>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewLetter(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"    text-align: center;\r\n        \" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n</mat-card>");

/***/ }),

/***/ "A8P+":
/*!************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/letters/letters.module.ts ***!
  \************************************************************************/
/*! exports provided: LettersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettersModule", function() { return LettersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _letters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./letters.component */ "+FlL");
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
        component: _letters_component__WEBPACK_IMPORTED_MODULE_4__["LettersComponent"]
    },
    {
        path: 'add-letter',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-letter-add-letter-module */ "add-letter-add-letter-module").then(__webpack_require__.bind(null, /*! ./add-letter/add-letter.module */ "YINi")).then(function (m) { return m.AddLetterModule; }); }
    },
    {
        path: 'view-letter',
        loadChildren: function () { return __webpack_require__.e(/*! import() | add-letter-add-letter-module */ "add-letter-add-letter-module").then(__webpack_require__.bind(null, /*! ./add-letter/add-letter.module */ "YINi")).then(function (m) { return m.AddLetterModule; }); }
    }
];
var LettersModule = /** @class */ (function () {
    function LettersModule() {
    }
    LettersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _letters_component__WEBPACK_IMPORTED_MODULE_4__["LettersComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], LettersModule);
    return LettersModule;
}());



/***/ }),

/***/ "N2Lk":
/*!*****************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/letters/letters.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);