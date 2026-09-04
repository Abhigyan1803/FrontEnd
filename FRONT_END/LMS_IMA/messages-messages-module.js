(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"],{

/***/ "3DBe":
/*!******************************************************************!*\
  !*** ./src/app/main/admin/home/messages/messages.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".capitals {\n  text-transform: uppercase;\n}\n\n.rank-name {\n  text-transform: capitalize;\n}");

/***/ }),

/***/ "6tWr":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/messages/messages.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\"> Home <span class=\"sub-menu1\"> > Commandant Messages</span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n\r\n\r\n  <div class=\"d-flex btn-set\">\r\n    <div class=\"search\">\r\n      <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n  </div>\r\n    <button mat-raised-button (click)=\"addMessage()\" class=\"add-btton\">\r\n      <mat-icon>add</mat-icon> Add\r\n    </button>\r\n  </div>\r\n\r\n  <!-- <div class=\"gene-card-content pad-t-none\">\r\n    <div class=\"table-responsive\">\r\n       <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n          <thead>\r\n             <tr>\r\n                <th>Sr.No.</th>\r\n                <th>Image</th>\r\n                <th>Rank</th>\r\n                <th>Name</th>\r\n                <th>Awards</th>\r\n                <th>Message Status</th>\r\n                <th>View</th>\r\n\r\n             </tr>\r\n          </thead>\r\n          <tbody>\r\n             <tr *ngFor=\"let m of messageList; let i=index\">\r\n               <td> {{i+1}} </td>\r\n                <td><img [src]=\"m.image\" width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\" (error)=\"noImg($event)\" ></td>\r\n                <td  class=\"rank-name\">{{m.designation}}</td>\r\n                <td class=\"rank-name\" > {{m.name}}</td>\r\n                <td class=\"capitals\" >{{m.award}}</td>\r\n                <td><mat-slide-toggle [checked]=\"m.status == 1\" (change)=\"msgStatusChanged($event,m.id)\" ></mat-slide-toggle>  </td>\r\n                <td class=\"act-btn\"> <a href=\"javascript:void(0)\" ><mat-icon  (click)=\"updateMessage(m)\">visibility</mat-icon></a> </td>\r\n             </tr>\r\n          </tbody>\r\n       </table>\r\n    </div>\r\n  </div> -->\r\n\r\n  <div class=\"example-container \">\r\n    <div class=\"example-table-container\">\r\n        <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n            <!-- Position Column -->\r\n            <ng-container matColumnDef=\"number\">\r\n                <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                    {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Image Cell Column -->\r\n            <ng-container matColumnDef=\"image\">\r\n                <th mat-header-cell *matHeaderCellDef > Image </th>\r\n                <td mat-cell *matCellDef=\"let element\"> <img [src]=\"element.image\" (error)=\"noImg($event)\" width=\"50\"\r\n                        height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"> </td>\r\n            </ng-container>\r\n\r\n            <!-- Date Column -->\r\n            <ng-container matColumnDef=\"rank\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Rank </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.designation}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"name\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Description Column -->\r\n            <ng-container matColumnDef=\"awards\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Awards/Medals </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.award}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Status Column -->\r\n            <ng-container matColumnDef=\"status\">\r\n                <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                    <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                        (change)=\"msgStatusChanged($event,element.id)\">\r\n                    </mat-slide-toggle>\r\n                </td>\r\n            </ng-container>\r\n\r\n   \r\n\r\n            <!-- Action Column -->\r\n            <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                        (click)=\"updateMessage(element)\">\r\n                        <mat-icon>visibility</mat-icon>\r\n                    </a> </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            <tr class=\"mat-row\" *matNoDataRow>\r\n                <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n\r\n    <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n\r\n</mat-card>");

/***/ }),

/***/ "QeqK":
/*!*************************************************************!*\
  !*** ./src/app/main/admin/home/messages/messages.module.ts ***!
  \*************************************************************/
/*! exports provided: MessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesModule", function() { return MessagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages.component */ "iN1W");
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
        component: _messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"]
    },
    { path: 'add-message', loadChildren: function () { return __webpack_require__.e(/*! import() | add-message-add-message-module */ "add-message-add-message-module").then(__webpack_require__.bind(null, /*! ./add-message/add-message.module */ "hMev")).then(function (m) { return m.AddMessagesModule; }); } },
    { path: 'view-message', loadChildren: function () { return __webpack_require__.e(/*! import() | add-message-add-message-module */ "add-message-add-message-module").then(__webpack_require__.bind(null, /*! ./add-message/add-message.module */ "hMev")).then(function (m) { return m.AddMessagesModule; }); } },
];
var MessagesModule = /** @class */ (function () {
    function MessagesModule() {
    }
    MessagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], MessagesModule);
    return MessagesModule;
}());



/***/ }),

/***/ "iN1W":
/*!****************************************************************!*\
  !*** ./src/app/main/admin/home/messages/messages.component.ts ***!
  \****************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./messages.component.html */ "6tWr");
/* harmony import */ var _messages_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.component.scss */ "3DBe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(dialog, router, service, cdref, spinner, sharedService) {
        this.dialog = dialog;
        this.router = router;
        this.service = service;
        this.cdref = cdref;
        this.spinner = spinner;
        this.sharedService = sharedService;
        this.displayedColumns = ["number", "rank", "name", "awards", "status", "action"];
        this.messageList = [];
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.prototype.ngAfterViewInit = function () {
        this.getAllMessages();
    };
    MessagesComponent.prototype.getAllMessages = function () {
        var _this = this;
        this.spinner.show();
        this.service.getCommandantMessages().subscribe(function (res) {
            if (res.status == '1') {
                _this.messageList = res.List;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](res.List);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.messageList = [];
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(JSON.stringify(err));
        });
    };
    MessagesComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    MessagesComponent.prototype.addMessage = function () {
        this.router.navigate(['/main/admin/home/messages/add-message']);
    };
    MessagesComponent.prototype.msgStatusChanged = function (e, id) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeCommandantMessageStatus(id, 1).subscribe(function (res) {
                if (res.status == '1') {
                    _this.service.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.ngAfterViewInit();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
            });
        }
        else {
            this.service.changeCommandantMessageStatus(id, 0).subscribe(function (res) {
                if (res.status == '1') {
                    _this.service.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.spinner.hide();
                    _this.ngAfterViewInit();
                }
                else {
                    _this.spinner.hide();
                    _this.service.openSnackbar(res.msg);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.service.openSnackbar('Error Occured.');
            });
        }
    };
    MessagesComponent.prototype.updateMessage = function (m) {
        this.router.navigate(['/main/admin/home/messages/view-message'], { queryParams: { id: m.id } });
    };
    MessagesComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    MessagesComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.messageList.slice();
        if (!sort.active || sort.direction === '') {
            this.messageList = datalist;
            return;
        }
        this.messageList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'rank': return _this.sharedService.compare(a.designation.toLowerCase(), b.designation.toLowerCase(), isAsc);
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'awards': return _this.sharedService.compare(a.award.toLowerCase(), b.award.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.messageList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    MessagesComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] }
    ]; };
    MessagesComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-messages',
            template: _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_messages_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ })

}]);