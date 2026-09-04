(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gc-activities-gc-activites-module"],{

/***/ "/dYu":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/trg-battalion-management/gc-activities/gc-activities.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Home <span class=\"sub-menu1\"> >  GC Activities & Performance</span> </h4>\r\n  \r\n  </div>\r\n  \r\n  <mat-card>\r\n  \r\n    <div class=\"d-flex btn-set\">\r\n      <button mat-raised-button (click)=\"addGc()\" class=\"add-btton\">\r\n        <mat-icon>add</mat-icon> Add\r\n      </button>\r\n    </div>\r\n  \r\n    <div class=\"gene-card-content pad-t-none\">\r\n  \r\n      <mat-grid-list cols=\"2\" rowHeight=\"2:1\" class=\"addon_images\">\r\n        <mat-grid-tile class=\"custome_img\" *ngFor=\"let a of gcActivities\" >\r\n          <div class=\"up_image\">\r\n            <mat-slide-toggle class=\"slide-toggle\" [checked]=\"a.status == 1\" (change)=\"changeActivityStatus($event,a.id)\" ></mat-slide-toggle>\r\n          <img [src]=\"a.image\" alt=\"\" (click)=\"openImage($event,a)\" >\r\n        </div>\r\n        </mat-grid-tile>\r\n  \r\n      </mat-grid-list>\r\n  \r\n    </div>\r\n  \r\n    <!-- <mat-paginator #paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator> -->\r\n  \r\n  </mat-card>");

/***/ }),

/***/ "8bqN":
/*!******************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gc-activities/gc-activites.module.ts ***!
  \******************************************************************************************/
/*! exports provided: GcActivitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcActivitiesModule", function() { return GcActivitiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _gc_activities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gc-activities.component */ "Ew9a");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _gc_activities_component__WEBPACK_IMPORTED_MODULE_5__["GcActivitiesComponent"]
    },
    { path: 'add-activities', loadChildren: function () { return __webpack_require__.e(/*! import() | add-gc-activities-add-gc-activities-module */ "add-gc-activities-add-gc-activities-module").then(__webpack_require__.bind(null, /*! ./add-gc-activities/add-gc-activities.module */ "2ASg")).then(function (m) { return m.AddHistoryModule; }); } },
    { path: 'view-activities', loadChildren: function () { return __webpack_require__.e(/*! import() | add-gc-activities-add-gc-activities-module */ "add-gc-activities-add-gc-activities-module").then(__webpack_require__.bind(null, /*! ./add-gc-activities/add-gc-activities.module */ "2ASg")).then(function (m) { return m.AddHistoryModule; }); } },
];
var GcActivitiesModule = /** @class */ (function () {
    function GcActivitiesModule() {
    }
    GcActivitiesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _gc_activities_component__WEBPACK_IMPORTED_MODULE_5__["GcActivitiesComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"]
            ]
        })
    ], GcActivitiesModule);
    return GcActivitiesModule;
}());



/***/ }),

/***/ "Ew9a":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gc-activities/gc-activities.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: GcActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcActivitiesComponent", function() { return GcActivitiesComponent; });
/* harmony import */ var _raw_loader_gc_activities_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./gc-activities.component.html */ "/dYu");
/* harmony import */ var _gc_activities_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gc-activities.component.scss */ "qYiQ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var GcActivitiesComponent = /** @class */ (function () {
    function GcActivitiesComponent(spinner, cdref, router, service, dialog) {
        this.spinner = spinner;
        this.cdref = cdref;
        this.router = router;
        this.service = service;
        this.dialog = dialog;
        this.gcActivities = [];
    }
    GcActivitiesComponent.prototype.ngOnInit = function () {
        this.getActivities();
    };
    GcActivitiesComponent.prototype.getActivities = function () {
        var _this = this;
        this.service.getGcActivities(0, 2).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.gcActivities = res.object;
                _this.cdref.detectChanges();
            }
            _this.spinner.hide();
        }, function (err) {
            console.log(JSON.stringify(err));
            _this.spinner.hide();
        });
    };
    GcActivitiesComponent.prototype.openImage = function (e, a) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'img', title: 'IMA Activity', url: a.image
            }
        });
    };
    GcActivitiesComponent.prototype.addGc = function () {
        this.router.navigate(['/main/admin/trg-battalion/gc-activities/add-activities']);
    };
    GcActivitiesComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    GcActivitiesComponent.prototype.viewGc = function (m) {
        this.router.navigate(['/main/admin/trg-battalion/gc-activities/view-activities'], { queryParams: { id: m.id } });
    };
    GcActivitiesComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    GcActivitiesComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }]
    };
    GcActivitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'ms-gc-activities',
            template: _raw_loader_gc_activities_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_gc_activities_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], GcActivitiesComponent);
    return GcActivitiesComponent;
}());



/***/ }),

/***/ "qYiQ":
/*!************************************************************************************************!*\
  !*** ./src/app/main/admin/trg-battalion-management/gc-activities/gc-activities.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slide-toggle {\n  position: absolute;\n  right: 22px;\n  bottom: 220px;\n}\n\n.up_image {\n  padding: 15px;\n  background: #eee;\n  border-radius: 7px;\n  margin: 10px;\n  box-shadow: 1px 1px 6px #777;\n}\n\n.up_image img {\n  width: 60%;\n  margin: 0px auto;\n  display: table;\n  float: none;\n  height: 200px;\n}\n\n.realte {\n  background: #eee;\n  padding: 15px;\n  color: #721a0c;\n}");

/***/ })

}]);