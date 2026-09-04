(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"],{

/***/ "4Thn":
/*!**************************************************************!*\
  !*** ./src/app/main/admin/home/events/events.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "6UzX":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/events/events.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Home <span class=\"sub-menu1\"> > Upcoming Events</span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n   \r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addEvent()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>P.</th>\r\n                        <th>Image</th>\r\n                        <th>Date & Time</th>\r\n                        <th>Event Name</th>\r\n                        <th>Status</th>\r\n                        <th>View</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let e of eventsList; let i = index\">\r\n                        <td> {{i+1}} </td>\r\n                        <td><img [src]=\"e.image\" (error)=\"noImg($event)\" width=\"50\" height=\"50\"\r\n                                class=\"img-fluid img-circle\" alt=\"User Image\"></td>\r\n                        <td>{{e.eventDate | date:'d MMM, y, HHmm'}}</td>\r\n                        <td>{{e.title}} </td>\r\n                        <td>\r\n                            <mat-slide-toggle [checked]=\"e.status == 1\" (change)=\"changeEventStatus($event, e.id)\">\r\n                            </mat-slide-toggle>\r\n                        </td>\r\n                        <td class=\"act-btn\"> <a href=\"javascript:void(0)\">\r\n                                <mat-icon (click)=\"viewEvent(e)\">visibility</mat-icon>\r\n                            </a> </td>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Image Cell Column -->\r\n                <ng-container matColumnDef=\"image\">\r\n                    <th mat-header-cell *matHeaderCellDef > Image </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> <img [src]=\"element.image\" (error)=\"noImg($event)\" width=\"50\"\r\n                            height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"> </td>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date & Time </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.eventDate|date:'d MMMM, y'}} {{getEveTime(element.eventDate)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\r\n                </ng-container>\r\n\r\n                \r\n                <!-- For Gc or Not -->\r\n                <ng-container matColumnDef=\"gcEvent\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> For GC </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> \r\n                        \r\n                    <span *ngIf=\"element.isGcEvent\" >For GC</span>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeEventStatus($event,element.id)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewEvent(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "l8rv":
/*!*********************************************************!*\
  !*** ./src/app/main/admin/home/events/events.module.ts ***!
  \*********************************************************/
/*! exports provided: EventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsModule", function() { return EventsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events.component */ "ny7r");
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
        component: _events_component__WEBPACK_IMPORTED_MODULE_4__["EventsComponent"]
    },
    { path: 'view-event', loadChildren: function () { return __webpack_require__.e(/*! import() | add-event-add-event-module */ "add-event-add-event-module").then(__webpack_require__.bind(null, /*! ./add-event/add-event.module */ "uLwd")).then(function (m) { return m.AddEventModule; }); } },
    { path: 'add-event', loadChildren: function () { return __webpack_require__.e(/*! import() | add-event-add-event-module */ "add-event-add-event-module").then(__webpack_require__.bind(null, /*! ./add-event/add-event.module */ "uLwd")).then(function (m) { return m.AddEventModule; }); } },
];
var EventsModule = /** @class */ (function () {
    function EventsModule() {
    }
    EventsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _events_component__WEBPACK_IMPORTED_MODULE_4__["EventsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], EventsModule);
    return EventsModule;
}());



/***/ }),

/***/ "ny7r":
/*!************************************************************!*\
  !*** ./src/app/main/admin/home/events/events.component.ts ***!
  \************************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _raw_loader_events_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./events.component.html */ "6UzX");
/* harmony import */ var _events_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.component.scss */ "4Thn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var EventsComponent = /** @class */ (function () {
    function EventsComponent(router, service, cdref, spinner, _trgBattalion, localID) {
        this.router = router;
        this.service = service;
        this.cdref = cdref;
        this.spinner = spinner;
        this._trgBattalion = _trgBattalion;
        this.displayedColumns = ['number', 'image', 'date', 'name', 'gcEvent', 'status', 'action'];
        this.eventsList = [];
        this.localID = localID;
    }
    EventsComponent.prototype.ngOnInit = function () { };
    EventsComponent.prototype.ngAfterViewInit = function () {
        this.getEvents();
    };
    EventsComponent.prototype.getEvents = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllEvents(false).subscribe(function (res) {
            if (res.status == "1") {
                _this.eventsList = res.List;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](res.List);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
            }
            // console.log(res);
            _this.spinner.hide();
        }, function (err) {
            _this.service.openSnackbar('Error Occured.');
            _this.spinner.hide();
        });
    };
    EventsComponent.prototype.changeEventStatus = function (e, id) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.updateEventStatus(id, 1).subscribe(function (res) {
                if (res.status == '1') {
                    _this._trgBattalion.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this.service.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this.service.updateEventStatus(id, 0).subscribe(function (res) {
                if (res.status == '1') {
                    _this.service.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this.service.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    EventsComponent.prototype.getEveTime = function (e) {
        var dt = new Date(e);
        var hrs = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(dt, "HH", this.localID);
        var mnts = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(dt, "mm", this.localID);
        if (hrs == '00' && mnts == '00') {
            return '';
        }
        else {
            return hrs + mnts;
        }
    };
    EventsComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/logo_red.png";
    };
    EventsComponent.prototype.addEvent = function () {
        this.router.navigate(['/main/admin/home/events/add-event']);
    };
    EventsComponent.prototype.viewEvent = function (e) {
        this.router.navigate(['/main/admin/home/events/view-event'], { queryParams: { id: e.id } });
    };
    EventsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    EventsComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.eventsList.slice();
        if (!sort.active || sort.direction === '') {
            this.eventsList = datalist;
            return;
        }
        this.eventsList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'date': return _this._trgBattalion.compare(a.eventDate, b.eventDate, isAsc);
                case 'name': return _this._trgBattalion.compare(a.title.toLowerCase(), b.title.toLowerCase(), isAsc);
                case 'gcEvent': return _this._trgBattalion.compare(a.isGcEvent, b.isGcEvent, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.eventsList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    EventsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_10__["TrgBattalionService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
    ]; };
    EventsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-events',
            template: _raw_loader_events_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_events_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_10__["TrgBattalionService"], String])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ })

}]);