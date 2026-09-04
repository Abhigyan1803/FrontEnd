(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ed-dashboard-ed-dashboard-module"],{

/***/ "0jTF":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-dashboard/ed-dashboard.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"filter mb-3\">\r\n  <div class=\"ng-star-inserted\">\r\n    <div class=\"mat-new-inner mt-4\">\r\n      <h4 class=\"card-heading\">E-Dossier</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <form class=\"ng-untouched ng-pristine ng-invalid\" [formGroup]=\"EDForm\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-3\">\r\n          <label class=\"form-label\"> Term </label>\r\n          <select id=\"term\" type=\"text\" class=\"form-control\" (change)=\"termChange($event.target.value)\"\r\n            placeholder=\"Term\">\r\n            <option value=\"\" selected hidden disabled>Select</option>\r\n            <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"battalion\">Battalion</label>\r\n          <select id=\"battalion\" (change)=\"battalionSelected($event.target.value)\" class=\"form-control\">\r\n            <option value=\"\" selected hidden disabled>Select</option>\r\n            <option *ngFor=\"let b of battalionList\" [value]=\"b.id\"> {{b.shortName}} Bn</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"company\">Company</label>\r\n          <select id=\"company\" class=\"form-control\" (change)=\"companySelected($event.target.value)\">\r\n            <option value=\"\" selected hidden disabled>Select</option>\r\n            <option *ngFor=\"let c of companyList\" [value]=\"c.name\"> {{c?.name || ''}}</option>\r\n          </select>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-md-3 mb-3\">\r\n          <label class=\"form-label\"> &nbsp; </label>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"edSearch()\">Search</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    \r\n    <table class=\"tg\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"tg-1pqm\">S. No.</th>\r\n          <th class=\"tg-t7dr\"><span style=\"font-weight:bold\">IMA No.</span></th>\r\n          <th class=\"tg-t7dr\"><span style=\"font-weight:bold\">Rank</span></th>\r\n          <th class=\"tg-t7dr\"><span style=\"font-weight:bold\">Name</span></th>\r\n          <th class=\"tg-t7dr\"><span style=\"font-weight:bold\">Term</span></th>\r\n          <th class=\"tg-t7dr\"><span style=\"font-weight:bold\">Battalion</span></th>\r\n          <th class=\"tg-t7dr\"><span style=\"font-weight:bold\">Company</span></th>\r\n          <th class=\"tg-t7dr\"><span style=\"font-weight:bold\">Course No</span></th>\r\n        </tr>\r\n\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let i of edCadetList;let j = index;\">\r\n          <td class=\"tg-baqh\">{{j+1}}</td>\r\n          <td class=\"tg-baqh\"><a href=\"javascript:void(0)\" [routerLink]=\"['/e-dossior/ed-content/Ed-menu']\"\r\n              (click)=\"sID(i.serviceId,i.name,i.termId,i.company,i.battalian,i.nationality,i.courseSerNo,i.termId,i.termName,i)\"><b>{{i.serviceId}}</b></a>\r\n          </td>\r\n          <td class=\"tg-baqh\">\r\n            <a href=\"javascript:void(0)\" [routerLink]=\"['/e-dossior/ed-content/Ed-menu']\"\r\n              *ngIf=\"i.nationality=='India'\">OC</a>\r\n            <a href=\"javascript:void(0)\" [routerLink]=\"['/e-dossior/ed-content/Ed-menu']\"\r\n              *ngIf=\"i.nationality !='India'\">FGC</a>\r\n          </td>\r\n          <td class=\"tg-baqh\"><a href=\"javascript:void(0)\" [routerLink]=\"['/e-dossior/ed-content/Ed-menu']\"\r\n              (click)=\"sID(i.serviceId,i.name,i.termId,i.company,i.battalian,i.nationality,i.courseSerNo,i.termId,i.termName,i)\">{{i.name}}</a>\r\n          </td>\r\n\r\n          <td class=\"tg-baqh\"><a href=\"javascript:void(0)\" [routerLink]=\"['/e-dossior/ed-content/Ed-menu']\"\r\n              (click)=\"sID(i.serviceId,i.name,i.termId,i.company,i.battalian,i.nationality,i.courseSerNo,i.termId,i.termName,i)\">{{i.termName}}</a>\r\n          </td>\r\n          <td class=\"tg-baqh\"><a href=\"javascript:void(0)\" [routerLink]=\"['/e-dossior/ed-content/Ed-menu']\"\r\n              (click)=\"sID(i.serviceId,i.name,i.termId,i.company,i.battalian,i.nationality,i.courseSerNo,i.termId,i.termName,i)\">{{i.battalian}}\r\n              Bn</a>\r\n          </td>\r\n          <td class=\"tg-baqh\"><a href=\"javascript:void(0)\" [routerLink]=\"['/e-dossior/ed-content/Ed-menu']\"\r\n              (click)=\"sID(i.serviceId,i.name,i.termId,i.company,i.battalian,i.nationality,i.courseSerNo,i.termId,i.termName,i)\">{{i.company}}</a>\r\n          </td>\r\n\r\n          <td class=\"tg-baqh\"><a href=\"javascript:void(0)\"\r\n              [routerLink]=\"['/e-dossior/ed-content/Ed-menu']\">{{i.courseSerNo}}</a></td>\r\n\r\n        </tr>\r\n        <tr *ngIf=\"! edCadetList?.length\">\r\n          <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"8\">\r\n            <div *ngIf=\"! edCadetList?.length\">No Record Found</div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"\">\r\n      <mat-paginator #myPaginator [length]=\"resultsLength\" [pageSizeOptions]=\"[25]\" showFirstLastButtons>\r\n      </mat-paginator>\r\n\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "J+Fh":
/*!*****************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-dashboard/ed-dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EdDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdDashboardComponent", function() { return EdDashboardComponent; });
/* harmony import */ var _raw_loader_ed_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ed-dashboard.component.html */ "0jTF");
/* harmony import */ var _ed_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ed-dashboard.component.scss */ "UmbC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/observable/of */ "G4OQ");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var EdDashboardComponent = /** @class */ (function () {
    function EdDashboardComponent(EDossierService, router, fb, route, service, cdref, spinner) {
        this.EDossierService = EDossierService;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.service = service;
        this.cdref = cdref;
        this.spinner = spinner;
        this.battalionPosts = [];
        this.battalionList = [];
        this.companyList = [];
        this.EDForm = this.fb.group({
            rank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            awards: [''],
            post: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            battalion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company: ['0'],
            image: [],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    EdDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTerms();
        this.service.getBattalionList().subscribe(function (res) {
            _this.spinner.show();
            if (res.status == 'OK') {
                _this.battalionList = res.object;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    EdDashboardComponent.prototype.ngAfterViewInit = function () {
        this.EdAllList();
        // this.edSearch();
    };
    EdDashboardComponent.prototype.termChange = function (e) {
        this.termid = e;
    };
    EdDashboardComponent.prototype.EdAllList = function (event) {
        // this.EDossierService.getEDossierAllList(this.paginator.pageIndex,100).subscribe(
        //   res => {
        //     this.spinner.show();
        //     if (res.status == 'OK') {
        //       this.edCadetList = res.object
        //       this.cdref.detectChanges();
        //       this.spinner.hide()
        //     } else {
        //       this.spinner.hide();
        //     }
        //   }, err => {
        //     this.spinner.hide();
        //   }
        // )
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(/* this.sort.sortChange,  */ this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function () {
            _this.spinner.show();
            return _this.EDossierService.getEDossierAllList(_this.paginator.pageIndex, _this.paginator.pageSize);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (data) {
            // this.getTotalRecords();
            _this.resultsLength = data.object.totalRecords;
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(function () {
            console.log('Error here');
            _this.spinner.hide();
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12__["of"])([]);
            // return null;
        })).subscribe(function (data) {
            if (data.status == 'OK') {
                _this.edCadetList = data.object.cadetFilterPayload;
                if (data.object.cadetFilterPayload.length > 0) {
                    _this.edCadetList = data.object.cadetFilterPayload;
                }
                else {
                    _this.edCadetList = [];
                }
                _this.cdref.detectChanges();
            }
            else {
                _this.edCadetList = [];
            }
            _this.spinner.hide();
            // var scrollElem = document.querySelector('#orders');
            // scrollElem.scrollIntoView();
        });
    };
    EdDashboardComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        this.battleid = e;
        this.spinner.show();
        this.service.getCompanyList(e).subscribe(function (res) {
            _this.spinner.show();
            if (res.status == 'OK') {
                _this.companyList = res.object;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    EdDashboardComponent.prototype.companySelected = function (e) {
        this.companyid = e;
    };
    EdDashboardComponent.prototype.edSearch = function (event) {
        var _this = this;
        // if(this.battleid == 0){
        //   this.shortname = '';
        // }
        if (this.battleid == 1) {
            this.shortname = 'CA';
        }
        if (this.battleid == 2) {
            this.shortname = 'TH';
        }
        if (this.battleid == 3) {
            this.shortname = 'MA';
        }
        if (this.battleid == 4) {
            this.shortname = 'BH';
        }
        this.spinner.show();
        // this.EDossierService.getEDossierList(this.termid,this.shortname,this.paginator.pageIndex,this.paginator.pageSize).subscribe(
        //   res => {
        //     if (res.status == "OK") {
        //       this.edCadetList = res.object;
        //       // this.edCadetList = this.edCadetList.map((res) => ({ id: res.id, date: res.createdAt, rank: res.rank, name: res.name, post: res.position?.name, image: res.image, status: res.status }))
        //       this.spinner.hide()
        //     } else {
        //       this.spinner.hide();
        //       this.service.openSnackbar(res.message)
        //     }
        //   },
        //   err => {
        //     this.spinner.hide();
        //     console.log(JSON.stringify(err));
        //   }
        // )
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(/* this.sort.sortChange,  */ this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function () {
            _this.spinner.show();
            return _this.EDossierService.getEDossierList(_this.termid, _this.shortname, _this.companyid, _this.paginator.pageIndex, _this.paginator.pageSize);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (data) {
            // this.getTotalRecords();
            _this.resultsLength = data.object.totalRecords;
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(function () {
            console.log('Error here');
            _this.spinner.hide();
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12__["of"])([]);
            // return null;
        })).subscribe(function (data) {
            if (data.status == 'OK') {
                _this.edCadetList = data.object.cadetFilterPayload;
                // if (data.object.length > 0){
                //   this.edCadetList = data.object;
                // console.log(this.edCadetList,"call")
                // }
                // else{
                //   this.spinner.hide();
                //         this.service.openSnackbar(data.message) 
                // }
                _this.cdref.detectChanges();
            }
            else {
                _this.spinner.hide();
                _this.service.openSnackbar(data.message);
                _this.edCadetList = [];
            }
            _this.spinner.hide();
            // var scrollElem = document.querySelector('#orders');
            // scrollElem.scrollIntoView();
        });
    };
    EdDashboardComponent.prototype.getTerms = function () {
        var _this = this;
        this.service.getAllTerms().subscribe(function (res) {
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
    };
    EdDashboardComponent.prototype.OnclickSubmenuLink = function (e) {
        // this.router.navigate(['/e-dossior/ed-content/Ed-index/ED-Campmarks/assessment-matrix'],{queryParams:{termid:e.termId}});
    };
    EdDashboardComponent.prototype.sID = function (e, i, j, companyName, battalionName, nationality, courseNo, termId, termName, obj) {
        console.log(courseNo, "==>>>courseNo");
        localStorage.setItem('e', e); // setting
        localStorage.setItem('i', i); // setting
        localStorage.setItem('j', j); // setting
        localStorage.setItem('companyName', companyName);
        localStorage.setItem('battalionName', battalionName);
        localStorage.setItem('rank', (nationality == 'India' ? 'GC' : 'FGC'));
        localStorage.setItem('courseNo', courseNo);
        localStorage.setItem('termId', termId);
        localStorage.setItem('termName', termName);
        this.EDossierService.setCadetObj(JSON.stringify(obj));
        // localStorage.setItem('cadet',JSON.stringify(obj))
    };
    EdDashboardComponent.ctorParameters = function () { return [
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_7__["EDossierService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
    ]; };
    EdDashboardComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true },] }]
    };
    EdDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-ed-dashboard',
            template: _raw_loader_ed_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ed_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_7__["EDossierService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], EdDashboardComponent);
    return EdDashboardComponent;
}());



/***/ }),

/***/ "UmbC":
/*!*******************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-dashboard/ed-dashboard.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div#top-bar {\n  padding: 5px 15px;\n}\n\n.ima-logo {\n  display: flex;\n  align-items: center;\n}\n\n.ima-logo .title {\n  text-transform: capitalize;\n  font-size: 15px;\n  margin: 0 0 0 15px;\n  color: #721a0c;\n  font-weight: bold;\n}\n\n.lms-logo {\n  align-items: center;\n  padding: 20px 0;\n}\n\n.logo-header {\n  color: #721a0c;\n  font-weight: bold;\n  font-size: 40px;\n  text-shadow: none;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  text-decoration: none;\n}\n\n.filter {\n  min-height: 100vh;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0 !important;\n  clear: both;\n}\n\n.mat-new-inner {\n  padding: 0.875rem 0 !important;\n  clear: both;\n}\n\n.mat-new-inner h4.card-heading {\n  color: #FFF;\n  background: #a9823d;\n  text-align: center;\n  font-size: 20px;\n  padding: 10px 0;\n  clear: both;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #fff;\n  background: #721a0c;\n  padding: 10px 15px;\n  border-radius: unset;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n  background-color: #fff;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.filter .btn-danger {\n  color: #fff;\n  background-color: #721a0c;\n  border-color: #721a0c;\n}\n\n.edossierbtn {\n  padding: 30px 15px 0;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-t7dr {\n  background-color: #c6c4c4;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n}\n\n.tg .tg-1pqm {\n  background-color: #c6c4c4;\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n}");

/***/ }),

/***/ "j0k1":
/*!**************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-dashboard/ed-dashboard.module.ts ***!
  \**************************************************************************/
/*! exports provided: EdDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdDashboardModule", function() { return EdDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ed_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ed-dashboard.component */ "J+Fh");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _ed_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["EdDashboardComponent"]
    },
];
var EdDashboardModule = /** @class */ (function () {
    function EdDashboardModule() {
    }
    EdDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _ed_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["EdDashboardComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"]
            ]
        })
    ], EdDashboardModule);
    return EdDashboardModule;
}());



/***/ })

}]);