(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-activity-module"],{

/***/ "CQm9":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/home/activity/activity.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"mat-new\">\r\n  <h4 class=\"card-heading\">\r\n    <!-- <button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button> -->\r\n     <span class=\"sub-menu1\">  Home <span class=\"sub-menu1\"> > IMA Activities</span></span>\r\n  </h4>\r\n</div>\r\n\r\n<mat-card>\r\n\r\n  <div class=\"d-flex btn-set\">\r\n    <button mat-raised-button (click)=\"addActivity()\" class=\"add-btton\">\r\n      <mat-icon>add</mat-icon> Add\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"gene-card-content pad-t-none\">\r\n\r\n    <mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n      <mat-grid-tile class=\"\" *ngFor=\"let a of imaActivities\" >\r\n        <mat-slide-toggle class=\"slide-toggle\" [checked]=\"a.status == 1\" (change)=\"changeActivityStatus($event,a.id)\" ></mat-slide-toggle>\r\n        <img [src]=\"IP+a.image\" alt=\"\" (click)=\"openImage($event,a)\">\r\n      </mat-grid-tile>\r\n\r\n    </mat-grid-list>\r\n\r\n  </div>\r\n\r\n  <!-- <mat-paginator #paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator> -->\r\n\r\n</mat-card>");

/***/ }),

/***/ "Ds5x":
/*!*************************************************************!*\
  !*** ./src/app/main/admin/home/activity/activity.module.ts ***!
  \*************************************************************/
/*! exports provided: ActivityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityModule", function() { return ActivityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _activity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activity.component */ "lbqz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
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
        component: _activity_component__WEBPACK_IMPORTED_MODULE_4__["ActivityComponent"]
    },
    { path: 'add-activity', loadChildren: function () { return __webpack_require__.e(/*! import() | add-activity-add-activity-module */ "add-activity-add-activity-module").then(__webpack_require__.bind(null, /*! ./add-activity/add-activity.module */ "RWPi")).then(function (m) { return m.AddActivityModule; }); } },
];
var ActivityModule = /** @class */ (function () {
    function ActivityModule() {
    }
    ActivityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _activity_component__WEBPACK_IMPORTED_MODULE_4__["ActivityComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"]
            ]
        })
    ], ActivityModule);
    return ActivityModule;
}());



/***/ }),

/***/ "hNJV":
/*!******************************************************************!*\
  !*** ./src/app/main/admin/home/activity/activity.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slide-toggle {\n  position: absolute;\n  right: 22px;\n  bottom: 220px;\n}");

/***/ }),

/***/ "lbqz":
/*!****************************************************************!*\
  !*** ./src/app/main/admin/home/activity/activity.component.ts ***!
  \****************************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var _raw_loader_activity_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./activity.component.html */ "CQm9");
/* harmony import */ var _activity_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity.component.scss */ "hNJV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_links_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/links.module */ "Uhg6");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(router, service, spinner, dialog, cdref, snackbar) {
        this.router = router;
        this.service = service;
        this.spinner = spinner;
        this.dialog = dialog;
        this.cdref = cdref;
        this.snackbar = snackbar;
        this.IP = app_links_module__WEBPACK_IMPORTED_MODULE_7__["Links"].IP;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.imaActivities = [];
    }
    ActivityComponent.prototype.ngOnInit = function () { };
    ActivityComponent.prototype.ngAfterViewInit = function () {
        this.spinner.show();
        this.getActivities();
    };
    ActivityComponent.prototype.getActivities = function () {
        var _this = this;
        this.service.getImaActivities().subscribe(function (res) {
            console.log(res);
            if (res.status == '1') {
                _this.imaActivities = res.List;
                _this.cdref.detectChanges();
            }
            _this.spinner.hide();
        }, function (err) {
            console.log(JSON.stringify(err));
            _this.spinner.hide();
        });
    };
    ActivityComponent.prototype.changeActivityStatus = function (e, id) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeImaActivityStatus(id, 1).subscribe(function (res) {
                if (res.status == '1') {
                    _this.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
            });
        }
        else {
            this.service.changeImaActivityStatus(id, 0).subscribe(function (res) {
                if (res.status == '1') {
                    _this.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
            });
        }
    };
    ActivityComponent.prototype.addActivity = function () {
        this.router.navigate(['/main/admin/home/activity/add-activity']);
    };
    ActivityComponent.prototype.openImage = function ($event, a) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'img', title: 'IMA Activity', url: a.image
            }
        });
    };
    ActivityComponent.prototype.openSnackbar = function (msg) {
        this.snackbar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    ActivityComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    ActivityComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
    };
    ActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-activity',
            template: _raw_loader_activity_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_activity_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ })

}]);