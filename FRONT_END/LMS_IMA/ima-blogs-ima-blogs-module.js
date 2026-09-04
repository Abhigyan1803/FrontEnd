(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ima-blogs-ima-blogs-module"],{

/***/ "1ZzC":
/*!***************************************************************!*\
  !*** ./src/app/main/admin/home/ima-blogs/ima-blogs.module.ts ***!
  \***************************************************************/
/*! exports provided: IMABlogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMABlogsModule", function() { return IMABlogsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ima_blogs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ima-blogs.component */ "tl9y");
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
        component: _ima_blogs_component__WEBPACK_IMPORTED_MODULE_4__["ImaBlogsComponent"]
    },
    { path: 'add-blog', loadChildren: function () { return __webpack_require__.e(/*! import() | add-blog-add-blog-module */ "add-blog-add-blog-module").then(__webpack_require__.bind(null, /*! ./add-blog/add-blog.module */ "9kX6")).then(function (m) { return m.AddBlogModule; }); } },
    { path: 'view-blog', loadChildren: function () { return __webpack_require__.e(/*! import() | add-blog-add-blog-module */ "add-blog-add-blog-module").then(__webpack_require__.bind(null, /*! ./add-blog/add-blog.module */ "9kX6")).then(function (m) { return m.AddBlogModule; }); } },
];
var IMABlogsModule = /** @class */ (function () {
    function IMABlogsModule() {
    }
    IMABlogsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _ima_blogs_component__WEBPACK_IMPORTED_MODULE_4__["ImaBlogsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], IMABlogsModule);
    return IMABlogsModule;
}());



/***/ }),

/***/ "aVjW":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/ima-blogs/ima-blogs.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> IMA Blogs <span class=\"sub-menu1\"></span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n\r\n    <mat-card-title>\r\n        \r\n    <div class=\"pull-right\">\r\n        <!-- <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div> -->\r\n        <button mat-raised-button (click)=\"addBlog()\" class=\"add-btton pull-right \"  >\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n    </mat-card-title>\r\n<br>\r\n\r\n    <mat-card-content>\r\n\r\n       \r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"imablogsList\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"title\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> \r\n                        <img [src]=\"element.blogImage\" (error)=\"noImg($event)\" width=\"50\" height=\"50\" \r\n                        class=\"img-fluid img-circle\" alt=\"User Image\">\r\n                        {{element.title}}\r\n                     </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"category\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Category </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"author\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Author </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.author}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"minutes\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Minutes of Reading </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.minutesOfReading}} </td>\r\n                </ng-container>\r\n\r\n                \r\n                <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td mat-cell *matCellDef=\"let element\"  class=\"act-btn\" >\r\n                       \r\n                        <a *ngIf=\"element.docs\" (click)=\"openDoc(element)\" href=\"javascript:void(0)\">\r\n                            <mat-icon>\r\n                                description\r\n                            </mat-icon>\r\n                        </a>\r\n                        <p  *ngIf=\"!element.docs\"  >-</p>\r\n                        \r\n                    </td>\r\n                </ng-container>\r\n                \r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\" \r\n                            (change)=\"changeBlogStatus($event,element.id)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> View </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewBlog(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator  [length]=\"resultsLength\"  [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n \r\n    </mat-card-content>\r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "f1nL":
/*!********************************************************************!*\
  !*** ./src/app/main/admin/home/ima-blogs/ima-blogs.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card-title {\n  height: 20px;\n}");

/***/ }),

/***/ "tl9y":
/*!******************************************************************!*\
  !*** ./src/app/main/admin/home/ima-blogs/ima-blogs.component.ts ***!
  \******************************************************************/
/*! exports provided: ImaBlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImaBlogsComponent", function() { return ImaBlogsComponent; });
/* harmony import */ var _raw_loader_ima_blogs_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ima-blogs.component.html */ "aVjW");
/* harmony import */ var _ima_blogs_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ima-blogs.component.scss */ "f1nL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/observable/of */ "G4OQ");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ImaBlogsComponent = /** @class */ (function () {
    function ImaBlogsComponent(router, service, sharedService, cdref, spinner, dialog) {
        this.router = router;
        this.service = service;
        this.sharedService = sharedService;
        this.cdref = cdref;
        this.spinner = spinner;
        this.dialog = dialog;
        this.displayedColumns = ['number', 'title', 'category', 'author', 'minutes', 'document', 'status', 'action'];
        this.imablogsList = [];
        this.bid = 0;
        this.userName = localStorage.getItem('userName');
    }
    ImaBlogsComponent.prototype.ngOnInit = function () {
        this.EDDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        console.log("user details: ", this.EDDetails);
        this.bid = this.EDDetails.battalion.id;
        console.log("user this.bid: ", this.bid);
    };
    ImaBlogsComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/logo_red.png";
    };
    ImaBlogsComponent.prototype.ngAfterViewInit = function () {
        this.getIMABlogList();
    };
    ImaBlogsComponent.prototype.getIMABlogList = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(/* this.sort.sortChange,  */ this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function () {
            _this.spinner.show();
            return _this.service.getIMABlogList(2, _this.paginator.pageIndex, _this.paginator.pageSize, _this.bid);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (data) {
            _this.resultsLength = data.object.totalRecords;
            // console.log("DATA: ",data);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(function () {
            console.log('===========Error here============');
            _this.spinner.hide();
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12__["of"])([]);
            // return null;
        })).subscribe(function (data) {
            console.log("DATA RECIEVED: ", data);
            if (data.status == 'OK') {
                _this.resultsLength = data.object.totalRecords;
                _this.imablogsList = data.object.blogList;
                if (data.object.blogList.length > 0) {
                    _this.imablogsList = data.object.blogList;
                }
                else {
                    _this.imablogsList = [];
                }
                _this.cdref.detectChanges();
            }
            else {
                _this.imablogsList = [];
            }
            _this.spinner.hide();
        });
        // this.spinner.show();
        // this.service.getIMABlogList(2,this.paginator.pageIndex,this.paginator.pageSize).subscribe(
        //   res => {
        //     console.log(res);
        //     if (res.status == "OK") {
        //       this.imablogsList = res.object
        //       this.dataSource = new MatTableDataSource(res.object);
        //       this.dataSource.sort = this.sort;
        //       this.dataSource.paginator = this.paginator;
        //       this.cdref.detectChanges();
        //       this.spinner.hide();
        //     } else {
        //       this.spinner.hide();
        //       this.service.openSnackbar(res.message);
        //     }
        //   },
        //   err => {
        //     this.service.openSnackbar('Error Occured.')
        //     this.spinner.hide();
        //   }
        // )
    };
    ImaBlogsComponent.prototype.openDoc = function (element) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: element.docs
            }
        });
    };
    ImaBlogsComponent.prototype.changeBlogStatus = function (e, id) {
        var _this = this;
        this.spinner.show();
        var status;
        if (e.checked) {
            status = 1;
        }
        else {
            status = 0;
        }
        this.service.changeIMABlogStatus(id, status).subscribe(function (res) {
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
    };
    ImaBlogsComponent.prototype.addBlog = function () {
        var url = this.router.url;
        this.router.navigate([url + "/add-blog"]);
    };
    ImaBlogsComponent.prototype.viewBlog = function (e) {
        var url = this.router.url;
        this.router.navigate([url + "/view-blog"], { queryParams: { id: e.id } });
    };
    ImaBlogsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ImaBlogsComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.imablogsList.slice();
        if (!sort.active || sort.direction === '') {
            this.imablogsList = datalist;
            return;
        }
        this.imablogsList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'title': return _this.sharedService.compare(a.title.toLowerCase(), b.title.toLowerCase(), isAsc);
                case 'category': return _this.sharedService.compare(a.category.toLowerCase(), b.category.toLowerCase(), isAsc);
                // case 'author': return this.sharedService.compare(a.author.toLowerCase(), b.author.toLowerCase(), isAsc);
                // case 'minutes': return this.sharedService.compare(a.minutesOfReading.toLowerCase(), b.minutesOfReading.toLowerCase(), isAsc);
                // case 'phone': return this.sharedService.compare(a.phoneNumber, b.phoneNumber, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.imablogsList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ImaBlogsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] }
    ]; };
    ImaBlogsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true },] }]
    };
    ImaBlogsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-ima-blogs',
            template: _raw_loader_ima_blogs_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ima_blogs_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]])
    ], ImaBlogsComponent);
    return ImaBlogsComponent;
}());



/***/ })

}]);