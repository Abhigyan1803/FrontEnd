(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gc-term-update-gc-term-update-module"],{

/***/ "RZcL":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/gc-term-update/gc-term-update.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\" style=\"padding-bottom: 20px;overflow: hidden;\">\r\n  <div class=\"container\">\r\n    <div class=\"ng-star-inserted\">\r\n        <div class=\"mat-new\">\r\n          <h4 class=\"card-heading\">Admin > <span class=\"sub-menu1\">GC Term Update</span> </h4>\r\n        </div>\r\n      </div>\r\n    <div class=\"mat-card mat-focus-indicator\">\r\n      <div class=\"filter\">\r\n        <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n          <div class=\"row\">\r\n              <div  class=\"form-group col-md-4\">\r\n                  <label class=\"form-label\"> Term </label>\r\n                  <select id=\"term\" type=\"text\" class=\"form-control\" (change)=\"termChange($event.target.value)\"\r\n                      placeholder=\"Term\" >\r\n                      <!-- <option value=\"\" selected hidden disabled>Select</option> -->\r\n                      <option *ngFor=\"let t of terms\" [value]=\"t.id\">{{t.name}} </option>\r\n                  </select>\r\n                  <!-- <span class=\"validation_msg\" *ngIf=\"item.get('termId').hasError('required') && isError\">Term\r\n                      is required</span>\r\n                  <span class=\"validation_msg\" *ngIf=\"item.get('termId').hasError('pattern') && isError\">\r\n                      Only alphanumeric is allowed</span> -->\r\n              </div>\r\n              <div class=\"form-group col-md-4\">\r\n                  <label for=\"battalion\">Battalion</label>\r\n                  <select id=\"battalion\"  (change)=\"battalionSelected($event.target.value)\" \r\n                    class=\"form-control\">\r\n                    <!-- <option value=\"\" selected hidden disabled *ngIf='setbattalion'>Select</option> -->\r\n                    <option value=\"0\" selected>Select</option>\r\n                    <option *ngFor=\"let b of battalionList\" [value]=\"b.id\"> {{b.shortName}} Bn</option>\r\n                  </select>\r\n                  <!-- <span class=\"val_msg\" *ngIf=\"f.battalion.errors && f.battalion.errors.required && isError\">*Please Select\r\n                    Battalion</span> -->\r\n                </div>\r\n                <div class=\"form-group col-md-4\" >\r\n                  <label for=\"company\">Company</label>\r\n                  <select id=\"company\"  class=\"form-control\"  (change)=\"companySelected($event.target.value)\" >\r\n                    <!-- <option value=\"\" selected hidden disabled>Select</option> -->\r\n                    <option value=\"0\" selected >Select</option>\r\n                    <option *ngFor=\"let c of companyList\" [value]=\"c.name\"> {{c?.name || ''}}</option>\r\n                  </select>\r\n                  <!-- <span class=\"val_msg\" *ngIf=\"f.company.errors && f.company.errors.required && isError\">*Please Select\r\n                    Company</span> -->\r\n                </div>\r\n  \r\n             \r\n            \r\n              <div class=\"col-md-3 mb-3\">\r\n                <button type=\"button\" class=\"btn btn-danger\"  (click)=\"termupdateSearch()\">Search</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <table class=\"tg\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"tg-1pqm\"><input class=\"selectall\"   (change)=\"checkAll($event)\"  [(ngModel)]=\"ischeckedAll\" type=\"checkbox\" id=\"check1\" name=\"option1\" value=\"something\"></th>\r\n              <th class=\"tg-t7dr\"><span style=\"font-weight:bold\">IMA No.</span></th>\r\n              <th class=\"tg-t7dr\"><span style=\"font-weight:bold\">Rank</span></th>\r\n              <th class=\"tg-t7dr\"><span style=\"font-weight:bold\">Name</span></th>\r\n              <th class=\"tg-t7dr\"><span style=\"font-weight:bold\">Bn/Coy</span></th>\r\n              <th class=\"tg-t7dr\"><span style=\"font-weight:bold\">Course</span></th>\r\n              <th class=\"tg-t7dr\"><span style=\"font-weight:bold\">Term</span></th>\r\n            </tr>\r\n          </thead>\r\n         \r\n              <tbody>\r\n                  <tr *ngFor=\"let i of edCadetList;let j = index;\">\r\n                    <td class=\"tg-baqh\"><input class=\"selectall\" (change)=\"checkOne($event)\" [(ngModel)]=\"i.ischecked\" type=\"checkbox\" id=\"check1\" name=\"option1\" value=\"{{i.id}}\" ></td>\r\n                    <td class=\"tg-baqh\">{{i.serviceId}}</td>\r\n                    <td class=\"tg-baqh\">\r\n                      <a  *ngIf=\"i.nationality=='India'\">GC</a>\r\n                      <a  *ngIf=\"i.nationality !='India'\">FGC</a>\r\n                    </td>\r\n                    <td class=\"tg-baqh\"><a>{{i.name}}</a></td>\r\n                    <td class=\"tg-baqh\"><a>{{i.battalian}}-{{i.company}}</a></td>\r\n\r\n                    <td class=\"tg-baqh\"><a>{{i.course}}</a></td>\r\n                    <td class=\"tg-baqh\"><a>{{i.termName}}</a></td>\r\n        \r\n                  </tr>\r\n                 <tr  *ngIf=\"! edCadetList?.length\">\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"7\"><div>No Record Found</div></td>\r\n                 </tr>\r\n                </tbody>\r\n       \r\n          </table>\r\n          <div class=\"text-right mt-2\">\r\n            <button type=\"button\" class=\"btn btn-danger\" data-bs-toggle=\"modal\" data-bs-target=\"#updatetermModal\" (click)=\"openPopup()\">Next</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n   <!-- <div class=\"modal\" id=\"updatetermModal\">\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n           Modal Header \r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>-->\r\n\r\n          <!-- Modal body \r\n          <div class=\"modal-body\">\r\n            <div class=\"terms-data\">\r\n              <p><b>No. of Candidate : 12 </b></p>\r\n              <p><b>Upgrade to term :</b></p>\r\n              <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                <div class=\"form-group\">\r\n                  <select class=\"custom-select\" id=\"\">\r\n                    <option selected>Select...</option>\r\n                    <option value=\"1\">Term I</option>\r\n                    <option value=\"2\">Term II</option>\r\n                    <option value=\"2\">Tech II</option>\r\n                    <option value=\"3\">Term III</option>\r\n                    <option value=\"3\">Tech III</option>\r\n                  </select>\r\n                </div>\r\n                 <div class=\"text-right mt-2\">\r\n                    <button type=\"button\" class=\"btn btn-danger\">Submit</button>\r\n                 </div>\r\n              </form>\r\n            </div>\r\n          </div>-->\r\n\r\n      <!--    <div class=\"modal\" tabindex=\"-1\" id=\"updatetermModal\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    \r\n                    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                      <div class=\"terms-data\">\r\n                          <p><b>No. of Candidate : 12 </b></p>\r\n                          <p><b>Upgrade to term :</b></p>\r\n                          <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                            <div class=\"form-group\">\r\n                              <select class=\"custom-select\" id=\"\">\r\n                                <option selected>Select...</option>\r\n                                <option value=\"1\">Term I</option>\r\n                                <option value=\"2\">Term II</option>\r\n                                <option value=\"2\">Tech II</option>\r\n                                <option value=\"3\">Term III</option>\r\n                                <option value=\"3\">Tech III</option>\r\n                              </select>\r\n                            </div>\r\n                             <div class=\"text-right mt-2\">\r\n                                <button type=\"button\" class=\"btn btn-danger\">Submit</button>\r\n                             </div>\r\n                          </form>\r\n                        </div>\r\n                  </div>\r\n               \r\n                </div>\r\n              </div>\r\n            </div>-->\r\n            <div class=\"modal termupdate-module\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayStyle}\">\r\n              <div class=\"modal-dialog\" role=\"document\">\r\n                <div class=\"modal-content p-3\">\r\n                  <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Register User Admin</h5>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                      <div class=\"terms-data\">\r\n                          <p><b>No. of Candidate : {{count}} </b></p>\r\n                          <p><b>Upgrade to term :</b></p>\r\n                          <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                            <div class=\"form-group\">\r\n                             \r\n                              <select id=\"term2\" type=\"text\" class=\"form-control\" (change)=\"termChange2($event.target.value)\"\r\n                                  placeholder=\"Term\">\r\n                                  <option value=\"\" selected hidden disabled >Select</option>\r\n                                  <option *ngFor=\"let t of terms2\" [value]=\"t.id\">{{t.name}} </option>\r\n                                  \r\n                              </select>\r\n                            </div>\r\n                             <div class=\"text-right mt-2\">\r\n                                <button type=\"button\" class=\"btn btn-danger\" (click)=\"UpdateTerm()\">Submit</button>\r\n                             </div>\r\n                          </form>\r\n                        </div>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button mat-raised-button type=\"button\" class=\"btn-dark\" (click)=\"closePopup()\">Close</button>\r\n                    \r\n            \r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n      <!--  </div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n");

/***/ }),

/***/ "blp1":
/*!********************************************************************!*\
  !*** ./src/app/main/admin/gc-term-update/gc-term-update.module.ts ***!
  \********************************************************************/
/*! exports provided: GcTermUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcTermUpdateModule", function() { return GcTermUpdateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _gc_term_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gc-term-update.component */ "y6Qk");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _gc_term_update_component__WEBPACK_IMPORTED_MODULE_4__["GcTermUpdateComponent"]
    },
];
var GcTermUpdateModule = /** @class */ (function () {
    function GcTermUpdateModule() {
    }
    GcTermUpdateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _gc_term_update_component__WEBPACK_IMPORTED_MODULE_4__["GcTermUpdateComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                app_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"]
            ]
        })
    ], GcTermUpdateModule);
    return GcTermUpdateModule;
}());



/***/ }),

/***/ "w1cG":
/*!*************************************************************************!*\
  !*** ./src/app/main/admin/gc-term-update/gc-term-update.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter {\n  min-height: 78vh;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0 !important;\n}\n\n.mat-new {\n  padding: 0.875rem 0 !important;\n}\n\n.mat-new h4.card-heading {\n  color: #bb9450;\n  background: #e1e3de;\n  text-align: left;\n  font-size: 16px;\n  padding: 10px 15;\n  border-radius: 5px;\n  letter-spacing: 0.5px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n  background-color: #fff;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.filter .btn-danger {\n  color: #fff;\n  background-color: #721a0c;\n  border-color: #721a0c;\n}\n\n.terms-data .btn-danger {\n  color: #fff;\n  background-color: #721a0c;\n  border-color: #721a0c;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-t7dr {\n  background-color: #c6c4c4;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n}\n\n.tg .tg-1pqm {\n  background-color: #c6c4c4;\n  font-weight: bold;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.termupdate-module .modal-dialog {\n  background-color: unset;\n}");

/***/ }),

/***/ "y6Qk":
/*!***********************************************************************!*\
  !*** ./src/app/main/admin/gc-term-update/gc-term-update.component.ts ***!
  \***********************************************************************/
/*! exports provided: GcTermUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcTermUpdateComponent", function() { return GcTermUpdateComponent; });
/* harmony import */ var _raw_loader_gc_term_update_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./gc-term-update.component.html */ "RZcL");
/* harmony import */ var _gc_term_update_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gc-term-update.component.scss */ "w1cG");
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













var GcTermUpdateComponent = /** @class */ (function () {
    //montag:boolean=true;
    //termisbase:boolean=true;
    function GcTermUpdateComponent(EDossierService, router, fb, route, service, cdref, spinner) {
        this.EDossierService = EDossierService;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.service = service;
        this.cdref = cdref;
        this.spinner = spinner;
        this.terms2 = [];
        this.companyList = [];
        this.candidateForUpdateterm = [];
        this.battalionList = [];
        this.termid = 1;
        this.ischeckedAll = false;
        this.edCadetList = [];
        this.displayStyle = "none";
        this.count = 0;
        this.candidateObj = {};
        // this.getALLLIST();
        // this.EdAllList();
        this.getNEWUPDATEBYTERM();
    }
    GcTermUpdateComponent.prototype.getNEWUPDATEBYTERM = function () {
        var _this = this;
        this.service.getGCTermList(this.termid, this.shortname, this.companyid, 0, 1000).subscribe(function (data) {
            if (data.status == 'OK' && data.object == null) {
                _this.spinner.hide();
                _this.edCadetList = [];
            }
            if (data.status == 'OK') {
                _this.edCadetList = data.object.cadetFilterPayload;
                for (var i = 0; i < _this.edCadetList.length; i++) {
                    _this.edCadetList[i].ischecked = false;
                }
                console.log(data, "call");
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
    GcTermUpdateComponent.prototype.ngOnInit = function () {
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
    GcTermUpdateComponent.prototype.ngAfterViewInit = function () {
        // this.EdAllList();    
        this.edSearch();
    };
    // getALLLIST(){
    //   this.service.getAllTermsForUpdate(this.pageIndex=0, this.pageSize=1000).subscribe(
    //     res => {
    //       this.spinner.show();
    //       if (res.status == 'OK') {
    //         this.edCadetList = res.object.cadetFilterPayload
    //         console.log(this.edCadetList);
    //         for(let i=0;i<this.edCadetList.length;i++){
    //           this.edCadetList[i].ischecked=false;
    //         }
    //        console.log(this.edCadetList);
    //         this.cdref.detectChanges();
    //         this.spinner.hide()
    //       } else {
    //         this.spinner.hide();
    //       }
    //     }, err => {
    //       this.spinner.hide();
    //     }
    //   )
    // }
    GcTermUpdateComponent.prototype.EdAllList = function () {
        // alert("hello")
        console.log("EdAllList paginator");
        console.log("EdAllList paginator1");
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
        //   merge(/* this.sort.sortChange,  */this.paginator.page)
        // .pipe(
        //   startWith({}),
        //   switchMap(() => {
        //     this.spinner.show()
        //     return this.service.getAllTermsForUpdate(this.paginator.pageIndex, this.paginator.pageSize)
        //   }), map(data => {
        //     // this.getTotalRecords();
        //     this.resultsLength = data.object.totalRecords;
        //     return data;
        //   }),
        //   catchError(() => {
        //     console.log('Error here')
        //     this.spinner.hide()
        //     return observableOf([]);
        //     // return null;
        //   })
        // ).subscribe(data => {
        //   if (data.status == 'OK') {
        //     this.edCadetList = data.object.cadetFilterPayload;
        //     if (data.object.cadetFilterPayload.length > 0){
        //       this.edCadetList = data.object.cadetFilterPayload;
        //     console.log(this.edCadetList,"juned")
        //     }
        //     else{
        //       this.edCadetList = []}
        //     this.cdref.detectChanges();
        //   }
        //   else {
        //     this.edCadetList = []
        //   }
        //   this.spinner.hide()
        //   // var scrollElem = document.querySelector('#orders');
        //   // scrollElem.scrollIntoView();
        // });
    };
    GcTermUpdateComponent.prototype.checkAll = function (ev) {
        if (ev.target.checked) {
            console.log("True");
            for (var i = 0; i < this.edCadetList.length; i++) {
                this.edCadetList[i].ischecked = true;
            }
        }
        else {
            console.log("False");
            for (var i = 0; i < this.edCadetList.length; i++) {
                this.edCadetList[i].ischecked = false;
            }
        }
    };
    GcTermUpdateComponent.prototype.checkOne = function (ev) {
        var flag = false;
        for (var i = 0; i < this.edCadetList.length; i++) {
            console.log(this.edCadetList[i].ischecked);
            if (this.edCadetList[i].ischecked == false) {
                // console.log('swapnil',this.edCadetList[i].ischecked,this.ischeckedAll);
                flag = true;
                break;
            }
        }
        console.log('swapnil', flag, this.ischeckedAll);
        if (flag == true) {
            this.ischeckedAll = false;
        }
        else {
            this.ischeckedAll = true;
        }
        // console.log('swapnil',this.ischecked,this.ischeckedAll);
    };
    //   checkOne(ev) {
    //     let flag=false;
    //     //this.ischeckedAll=false;
    //     for(let i=0;i<this.edCadetList.length;i++){
    //       console.log(this.edCadetList[i].ischecked);
    //      if(this.edCadetList[i].ischecked==false){
    //      // console.log('swapnil',this.edCadetList[i].ischecked,this.ischeckedAll);
    //        flag=true;
    //        break;
    //      }
    //     }
    //     console.log('swapnil',flag,this.ischeckedAll);
    //     if(flag==true){
    //       this.ischeckedAll=false;
    //     }
    //     else{
    //       this.ischeckedAll=true;
    //     }
    //    // console.log('swapnil',this.ischecked,this.ischeckedAll);
    // }
    GcTermUpdateComponent.prototype.termChange = function (e) {
        var _this = this;
        console.log(e, "t id");
        //alert('hello')
        this.battleid = 0;
        this.battalionList = [];
        this.service.getBattalionList().subscribe(function (res) {
            // alert('hello battalion')
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
        //   alert(this.battleid)
        this.companyList = [];
        //  this.companyid=0;
        //  this.battalionSelected(e);
        //   this.service.getCompanyList(e).subscribe(
        //     res => {
        //       alert('hello company')
        //       this.spinner.show();
        //       console.log(res)
        //       if (res.status == 'OK') {
        //         this.companyList = res.object
        //         this.cdref.detectChanges();
        //         this.spinner.hide();
        //       } else {
        //         this.spinner.hide()
        //       }
        //     },
        //     err => {
        //       this.spinner.hide();
        //     }
        //   )
        //  alert(this.companyid)
        // this.setbattalion=0;
        // this.setcompany=0;
        //  this.battalionList=[];
        // this.companyList=[];
        this.termid = e;
        this.ischeckedAll = false;
        for (var i = 0; i < this.edCadetList.length; i++) {
            this.edCadetList[i].ischecked = false;
        }
    };
    GcTermUpdateComponent.prototype.termChange2 = function (e) {
        console.log(e, "t id");
        // alert(e)
        this.termidNew = e;
    };
    GcTermUpdateComponent.prototype.UpdateTerm = function () {
        var _this = this;
        for (var i = 0; i < this.candidateForUpdateterm.length; i++) {
            this.candidateForUpdateterm[i].term = this.termidNew;
        }
        this.service.updateTerm(this.candidateForUpdateterm).subscribe(function (res) {
            _this.spinner.show();
            if (res.status == 'OK') {
                //   this.edCadetList = res.object.cadetFilterPayload
                //   console.log(this.edCadetList);
                //   for(let i=0;i<this.edCadetList.length;i++){
                //     this.edCadetList[i].ischecked=false;
                //   }
                //  console.log(this.edCadetList);
                //   this.cdref.detectChanges();
                // alert('term updated')
                _this.getNEWUPDATEBYTERM();
                _this.spinner.hide();
                _this.closePopup();
            }
            else {
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    GcTermUpdateComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        //alert(e);
        this.battleid = e;
        this.companyid = null;
        // if(this.battleid==0){
        //   this.companyid=null;
        //   this.spinner.show();
        //   this.service.getCompanyList(e).subscribe(
        //     res => {
        //       this.spinner.show();
        //       console.log(res)
        //       if (res.status == 'OK') {
        //         this.companyList = res.object
        //         this.cdref.detectChanges();
        //         this.spinner.hide();
        //       } else {
        //         this.spinner.hide()
        //       }
        //     },
        //     err => {
        //       this.spinner.hide();
        //     }
        //   )
        // }
        if (this.battleid != 0) {
            //alert(this.companyid);
            this.spinner.show();
            this.service.getCompanyList(e).subscribe(function (res) {
                _this.spinner.show();
                console.log(res);
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
        }
        else {
            this.companyList = [];
            //  alert('this.companyid');
        }
    };
    GcTermUpdateComponent.prototype.companySelected = function (e) {
        this.companyid = e;
        // alert(this.companyid)
        console.log(e, "juned junes");
    };
    GcTermUpdateComponent.prototype.getTermsForUpdate = function () {
        var _this = this;
        this.service.getAllTerms().subscribe(function (res) {
            // console.log(res);
            //this.terms2 = res.List;
            if (res.status == '1') {
                console.log(_this.candidateForUpdateterm);
                console.log(res.List[1]);
                for (var i = 0; i < 1; i++) {
                    console.log(_this.candidateForUpdateterm[0].term, "11111111111");
                    if (_this.candidateForUpdateterm[0].term == 1) {
                        _this.terms2.push(res.List[1]);
                    }
                    else if (_this.candidateForUpdateterm[0].term == 2) {
                        _this.terms2.push(res.List[3]);
                    }
                    else if (_this.candidateForUpdateterm[0].term == 7) {
                        _this.terms2.push(res.List[3]);
                    }
                }
                _this.cdref.detectChanges();
            }
        });
    };
    GcTermUpdateComponent.prototype.getTerms = function () {
        var _this = this;
        this.service.getAllTermsNew().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.terms = res.List;
                _this.cdref.detectChanges();
            }
        });
    };
    GcTermUpdateComponent.prototype.termupdateSearch = function (event) {
        // this.candidateForUpdateterm=[];
        var _this = this;
        if (this.battleid == 0) {
            this.shortname = null;
        }
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
        // if(this.termid != undefined || this.termid != null || this.termid!=''){
        //  alert(this.termid)
        //   this.montag=false;
        // }
        // if(this.termid == undefined || this.termid == null || this.termid==''){
        //   this.montag=true;
        // }
        // else if(this.termid != undefined || this.termid != null || this.termid!=''){
        //   this.montag=false;
        // }
        this.spinner.show();
        this.service.getGCTermList(this.termid, this.shortname, this.companyid, 0, 1000).subscribe(function (data) {
            if (data.status == 'OK' && data.object == null) {
                _this.spinner.hide();
                _this.edCadetList = [];
            }
            if (data.status == 'OK') {
                _this.edCadetList = data.object.cadetFilterPayload;
                for (var i = 0; i < _this.edCadetList.length; i++) {
                    _this.edCadetList[i].ischecked = false;
                }
                console.log(data, "call");
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
    GcTermUpdateComponent.prototype.edSearch = function (event) {
        var _this = this;
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
        // console.log(this.paginator.pageIndex,"paginator");
        // console.log(this.paginator.pageSize,"paginator1");
        // this.EDossierService.getEDossierList(this.termid,this.shortname,this.paginator.pageIndex,this.paginator.pageSize).subscribe(
        //   res => {
        //     console.log(res)
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
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])( /* this.sort.sortChange,  */)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function () {
            _this.spinner.show();
            return _this.EDossierService.getEDossierList(_this.termid, _this.shortname, _this.companyid, 0, 1000);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (data) {
            console.log(data, "my data");
            // this.getTotalRecords();
            _this.resultsLength = data.object.totalRecords;
            console.log(_this.resultsLength, "------------------------------------------------");
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(function () {
            console.log('Error here');
            _this.spinner.hide();
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_12__["of"])([]);
            // return null;
        })).subscribe(function (data) {
            if (data.status == 'OK') {
                _this.edCadetList = data.object.cadetFilterPayload;
                console.log(data, "call");
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
    GcTermUpdateComponent.prototype.openPopup = function () {
        this.getTermsForUpdate();
        this.displayStyle = "block";
        for (var i = 0; i < this.edCadetList.length; i++) {
            console.log('swapnil');
            console.log(this.edCadetList);
            // this.count=0;
            if (this.edCadetList[i].ischecked == true) {
                var cid = this.edCadetList[i].id;
                var cterm = this.edCadetList[i].termId;
                this.candidateObj = { id: cid, term: cterm };
                console.log(this.candidateObj);
                this.candidateForUpdateterm.push(this.candidateObj);
                console.log(this.candidateForUpdateterm);
                this.count++;
            }
        }
    };
    GcTermUpdateComponent.prototype.closePopup = function () {
        this.count = 0;
        this.terms2 = [];
        this.displayStyle = "none";
    };
    GcTermUpdateComponent.ctorParameters = function () { return [
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_7__["EDossierService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
    ]; };
    GcTermUpdateComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true },] }]
    };
    GcTermUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-gc-term-update',
            template: _raw_loader_gc_term_update_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_gc_term_update_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_7__["EDossierService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], GcTermUpdateComponent);
    return GcTermUpdateComponent;
}());



/***/ })

}]);