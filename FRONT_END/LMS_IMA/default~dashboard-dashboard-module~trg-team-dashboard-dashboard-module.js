(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~trg-team-dashboard-dashboard-module"],{

/***/ "JH8G":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/dashboard/dashboard.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Dashboard <span class=\"sub-menu1\">> Organisation Chart </span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"conta-box\" style=\"margin: 0px auto 0;width: 1000px;display: table;\">\t\r\n        <ul>\r\n            <span class=\"photu\"><img [src]=\"IP+brigTrg.image\" (error)=\"noImg($event)\" class=\"org_img\"></span>\r\n            <li class=\"director\">\r\n                <a href=\"javascript:void(0)\"> <b>BRIG TRG</b>  <br> <span> {{brigTrg?.rank || '-'}} {{brigTrg?.name || '-'}}</span></a>\r\n            </li>\r\n        \r\n            <div class=\"space\"></div>\r\n            <span class=\"photu\"><img [src]=\"IP+colgsTrg.image\" (error)=\"noImg($event)\" class=\"org_img \"></span>\r\n            <li class=\"director\">\r\n                <a href=\"javascript:void(0)\"><b>COL GS (TRG)</b>  <br> <span>{{colgsTrg?.rank || '-'}} {{colgsTrg?.name || '-'}} </span></a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"space-parent\">\r\n        <div class=\"space2\"></div>\r\n        <div class=\"space3\"></div>\r\n        </div>\r\n        <ul class=\"two-sec\">\r\n            <div class=\"left_new\">\r\n                <span class=\"photu\"><img [src]=\"IP+gso2trg.image\" (error)=\"noImg($event)\"  class=\"org_img \"></span>\r\n            <li class=\"director\">\r\n                <a href=\"javascript:void(0)\"><b> GSO-2 (TRG)</b> <br> <span> {{gso2trg?.rank || '-'}} {{gso2trg?.name || '-'}}</span></a>\r\n            </li>\r\n            <div class=\"verticle\">\r\n                <div class=\"spaceverti\"></div>\r\n            </div>\r\n            <span class=\"photu\"><img [src]=\"IP+_2xdemocoy.image\" (error)=\"noImg($event)\" class=\"org_img \"></span>\r\n            <li class=\"director sing\">\r\n                <a href=\"javascript:void(0)\"><b>O2 x demo Coy</b>  <br> <span> {{_2xdemocoy?.rank || '-'}} {{_2xdemocoy?.name || '-'}}</span> </a>\r\n            </li>\r\n            <div class=\"verticle\">\r\n                <div class=\"spaceverti\"></div>\r\n            </div>\r\n            <span class=\"photu\"><img [src]=\"IP+methodsec.image\" (error)=\"noImg($event)\"  class=\"org_img \"></span>\r\n            <li class=\"director sing\">\r\n                <a href=\"javascript:void(0)\"><b>METHOD SEC </b> <br> <span>{{methodsec?.rank || '-'}} {{methodsec?.name || '-'}}</span></a>\r\n            </li>\r\n            <div class=\"verticle\">\r\n                <div class=\"spaceverti\"></div>\r\n            </div>\r\n            <span class=\"photu\"><img [src]=\"IP+tac.image\" (error)=\"noImg($event)\" class=\"org_img \"></span>\r\n            <li class=\"director sing\">\r\n                <a href=\"javascript:void(0)\"> <b>TAC SEC</b>  <br> <span>{{tac?.rank || '-'}} {{tac?.name || '-'}}</span></a>\r\n            </li>\r\n            <div class=\"verticle\">\r\n                <div class=\"spaceverti\"></div>\r\n            </div>\r\n            </div>\r\n            <div class=\"right_new\">\r\n                \r\n                <span class=\"photu\"><img [src]=\"IP+gso1trg.image\" (error)=\"noImg($event)\"  class=\"org_img \"></span>\r\n            <li class=\"director\">\r\n                <a href=\"javascript:void(0)\"><b>GSO-1 (TRG)</b>  <br> <span> {{gso1trg?.rank || '-'}} {{gso1trg?.name || '-'}}</span></a>\r\n            </li>\r\n            <div class=\"verticle_right\">\r\n                <div class=\"spacevertir\"></div>\r\n            </div>\r\n            <span class=\"photu\"><img [src]=\"IP+gso2assmt.image\" (error)=\"noImg($event)\"  class=\"org_img \"></span>\r\n            <li class=\"director\">\r\n                <a href=\"javascript:void(0)\"><b>GSO-2 </b> (ASSEMENT) <br> <span> {{gso2assmt?.rank || '-'}} {{gso2assmt?.name || '-'}}</span></a>\r\n            </li>\r\n            <div class=\"verticle_right\">\r\n                <div class=\"spacevertir\"></div>\r\n            </div>\r\n            <span class=\"photu\"><img [src]=\"IP+gso2pgme.image\" (error)=\"noImg($event)\"  class=\"org_img \"></span>\r\n            <li class=\"director\">\r\n                <a href=\"javascript:void(0)\"><b>GSO-2 (PGME) </b> <br> <span> {{gso2pgme?.rank || '-'}} {{gso2pgme?.name || '-'}}</span></a>\r\n            </li>\r\n            <div class=\"verticle_right\">\r\n                <div class=\"spacevertir\"></div>\r\n            </div>\r\n           \r\n            <span class=\"photu\"><img [src]=\"IP+_2xloafghan.image\" (error)=\"noImg($event)\"  class=\"org_img \"></span>\r\n            <li class=\"director\">\r\n                <a href=\"javascript:void(0)\"><b>O2 x LO, Afghan</b>  <br> <span> {{_2xloafghan?.rank || '-'}} {{_2xloafghan?.name || '-'}}</span></a>\r\n            </li>\r\n    \r\n            <div class=\"verticle_right\">\r\n                <div class=\"spacevertir\"></div>\r\n            </div>\r\n            </div>\r\n        </ul>\r\n        <div class=\"align\">\r\n            <div class=\"top_border\">\r\n                <div class=\"space4\"></div>\r\n                <div class=\"space5\"></div>\r\n            </div>\r\n            <ul class=\"three\">\r\n                <li>\r\n                        <div class=\"space\"></div>\r\n        \r\n            <span class=\"photu\"><img [src]=\"IP+pto.image\" (error)=\"noImg($event)\"  class=\"org_img \"></span>\r\n            <div class=\"director\">\r\n                <a href=\"javascript:void(0)\"><b>PT SEC</b>  <br><span>PTO</span> <br> <span>{{pto?.rank || '-'}} {{pto?.name || '-'}}</span> </a>\r\n                <a class=\"top-bod\" href=\"javascript:void(0)\">APTO <br> <span>{{apto?.rank || '-'}} {{apto?.name || '-'}}</span> </a>\r\n            </div>\r\n           </li>\r\n            <li>\r\n                    <div class=\"space\"></div>\r\n            <span class=\"photu\"><img [src]=\"IP+wto.image\" (error)=\"noImg($event)\"  class=\"org_img \"></span>\r\n            <div class=\"director\">\r\n                <a href=\"javascript:void(0)\"><b>WT SEC</b>  <br><span>WTO</span> <br> <span> {{wto?.rank || '-'}} {{wto?.name || '-'}}</span> </a>\r\n                <a class=\"top-bod\" href=\"javascript:void(0)\">AWTO <br> <span>{{awto?.rank || '-'}} {{awto?.name || '-'}}</span> </a>\r\n            </div>\r\n           </li>\r\n           <li>\r\n                   <div class=\"space\"></div>\r\n            <span class=\"photu\" style=\" z-index: 999 !important;\"><img [src]=\"IP+_2xdemocoy.image\" (error)=\"noImg($event)\"  class=\"org_img \"></span>\r\n            <div class=\"director last-of\" style=\"z-index: 9;position: relative;\">\r\n                <a href=\"javascript:void(0)\"><b>EQTN SEC</b>   </a>\r\n                <a href=\"javascript:void(0)\"><b>EQTN OFFICER</b>  <br> <span>{{eqtn?.rank || '-'}} {{eqtn?.name || '-'}}</span> </a>\r\n            </div>\r\n           </li>\r\n        </ul>\r\n            <ul class=\"three\">\r\n            <li>\r\n                   <div class=\"space\"></div>\r\n                   <div class=\"paraa\"><div class=\"ert-sa\"></div></div>\r\n            <span class=\"photu\"><img [src]=\"IP+adventureCell.image\" (error)=\"noImg($event)\"  class=\"org_img \"></span>\r\n            <div class=\"director\">\r\n                <a href=\"javascript:void(0)\"><b>Adventure Cell (OIC)</b>  <br> <span> {{adventureCell?.rank || '-'}} {{adventureCell?.name || '-'}}</span></a>\r\n            </div>\r\n          \r\n\r\n           </li>\r\n           <li>\r\n                   <div class=\"space\" style=\"background: #fff !important;\"></div>\r\n                   <div class=\"paraa\"><div class=\"ert-sa2\"></div></div>\r\n            <span class=\"photu\"><img [src]=\"IP+fe.image\" (error)=\"noImg($event)\"  class=\"org_img \"></span>\r\n            <div class=\"director singiii\">\r\n                <a href=\"javascript:void(0)\"><b>FE SEC</b>  <br> <span>{{fe?.rank || '-'}} {{fe?.name || '-'}}</span> </a>\r\n            </div>\r\n           \r\n           </li>\r\n           <li>\r\n                   <div class=\"space\" style=\"background: #fff !important;\"></div>\r\n                   <div class=\"paraa\"><div class=\"ert-sa2\"></div></div>\r\n            <span class=\"photu\"><img [src]=\"IP+fc.image\" (error)=\"noImg($event)\"  class=\"org_img \"></span>\r\n            <div class=\"director singiii\">\r\n                <a href=\"javascript:void(0)\"><b>FC SEC </b> <br> <span>{{fc?.rank || '-'}} {{fc?.name || '-'}} </span> </a>\r\n            </div>\r\n            \r\n           </li>\r\n           <li>\r\n            <div class=\"space\" style=\"background: #fff !important;\"></div>\r\n            <div class=\"paraa\"><div class=\"ert-sa2\"></div></div>\r\n            <div class=\"paraa\"><div class=\"ert-sa3\"></div></div>\r\n            <span class=\"photu\"><img [src]=\"IP+sig.image\" (error)=\"noImg($event)\"  class=\"org_img \"></span>\r\n            <div class=\"director singiii\">\r\n                <a href=\"javascript:void(0)\"><b>SIG SEC </b> <br><span>{{sig?.rank || '-'}} {{sig?.name || '-'}}</span></a>\r\n            </div>\r\n           \r\n            \r\n           </li>\r\n        \r\n        </ul>\r\n        </div>\r\n        </div>\r\n</mat-card>");

/***/ }),

/***/ "LjMm":
/*!******************************************************************!*\
  !*** ./src/app/main/trg-team/dashboard/dashboard.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul {\n  padding: 0;\n  margin: 0;\n}\n\nimg.org_img {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  border: 2px solid #721a0c;\n}\n\nul.three {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 30px;\n  margin-top: -5px;\n}\n\nli {\n  list-style-type: none;\n}\n\n.director {\n  width: 200px;\n  background: #bc9753;\n  padding: 10px;\n  text-align: center;\n  margin: 0 auto;\n  display: table;\n  border: 2px solid #721a0c;\n  box-shadow: 2px 2px 4px #ccc;\n}\n\n.director a {\n  width: 100%;\n  float: left;\n  color: #fff;\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n  margin-top: 20px;\n  text-transform: capitalize;\n}\n\nspan.photu {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  background: #721a0c;\n  top: 0;\n  margin: 0 auto -32px;\n  display: table;\n  text-align: center;\n  position: relative;\n  z-index: 9;\n}\n\n.space {\n  content: \"\";\n  display: block;\n  position: relative;\n  width: 4px;\n  height: 85px;\n  background: #bc9753;\n  margin: 0 auto;\n}\n\n.space2 {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 4px;\n  height: 439px;\n  background: #bc9753;\n  left: -60px;\n}\n\n.space3 {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 4px;\n  height: 439px;\n  background: #bc9753;\n  right: -60px;\n}\n\n.two-sec {\n  display: flex;\n  justify-content: space-between;\n}\n\n.space-parent {\n  margin: 0 auto;\n  position: relative;\n  display: table;\n}\n\n.left_new .photu {\n  width: 65px;\n  height: 65px;\n  background: #721a0c;\n  border-radius: 50%;\n  top: 8%;\n  margin: 0 auto -32px;\n  display: table;\n  text-align: center;\n  position: relative;\n  z-index: 9;\n  left: 55%;\n}\n\n.left_new a, .right_new a {\n  margin: 0px !important;\n}\n\n.right_new .photu {\n  width: 65px;\n  height: 65px;\n  background: #721a0c;\n  border-radius: 50%;\n  top: 8%;\n  margin: 0 auto -32px;\n  display: table;\n  text-align: center;\n  position: relative;\n  z-index: 9;\n  right: 52%;\n}\n\n.spaceverti {\n  position: absolute;\n  width: 208px;\n  height: 4px;\n  background: #bc9753;\n  content: \"\";\n  display: block;\n  right: -244px;\n  top: -29px;\n}\n\n.verticle {\n  position: relative;\n}\n\n.verticle_right .spacevertir {\n  position: absolute;\n  width: 224px;\n  height: 4px;\n  background: #bc9753;\n  content: \"\";\n  display: block;\n  left: -240px;\n  top: -29px;\n}\n\n.verticle_right {\n  position: relative;\n}\n\n.top_border {\n  width: 100%;\n  height: 4px;\n  content: \"\";\n  background: #bc9753;\n  margin: 63px 0px 0;\n  position: relative;\n}\n\n.director-new {\n  width: 200px;\n  background: #bc9753;\n  padding: 10px;\n  text-align: center;\n}\n\n.space4 {\n  content: \"\";\n  background: #bc9753;\n  width: 4px;\n  height: 424px;\n  position: absolute;\n}\n\n.space5 {\n  content: \"\";\n  background: #bc9753;\n  width: 4px;\n  height: 424px;\n  position: absolute;\n  right: 0;\n}\n\n.ert-sa {\n  content: \"\";\n  width: 41px;\n  height: 4px;\n  background: #bc9753;\n  position: absolute;\n  left: -15%;\n  top: 74px;\n}\n\n.paraa {\n  position: relative;\n}\n\n.ert-sa2 {\n  content: \"\";\n  width: 72px;\n  height: 4px;\n  background: #bc9753;\n  position: absolute;\n  left: -23%;\n  top: 74px;\n}\n\n.ert-sa3 {\n  content: \"\";\n  width: 50px;\n  height: 4px;\n  background: #bc9753;\n  position: absolute;\n  right: -15%;\n  top: 74px;\n}\n\nli.director.sing {\n  display: flex;\n  align-items: center;\n}\n\n.director.singiii {\n  align-items: center;\n  display: flex;\n}\n\n.director.last-of {\n  height: 150px;\n}\n\na.top-bod {\n  border-top: 1px solid #fff;\n  margin-top: 0px;\n  padding-top: 4px;\n}\n\na.top-bod {\n  margin-top: 5px !important;\n}");

/***/ }),

/***/ "X9vZ":
/*!*************************************************************!*\
  !*** ./src/app/main/trg-team/dashboard/dashboard.module.ts ***!
  \*************************************************************/
/*! exports provided: DashBoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardModule", function() { return DashBoardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "mjrl");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }
];
var DashBoardModule = /** @class */ (function () {
    function DashBoardModule() {
    }
    DashBoardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]
                // MatCardModule, MatProgressBarModule, MatMenuModule, ChartsModule,/* NgxChartsModule */
                // MatIconModule, MatRadioModule, /* NgxChartsModule, */
                // MatButtonModule, MatDividerModule, MatChipsModule, MatListModule, 
                // SharedPipesModule,
                // MatFormFieldModule, FlexLayoutModule,
                // MatInputModule, MatTabsModule,
                // MatRippleModule, MatSelectModule, MatTableModule, MatTooltipModule, MatPaginatorModule, MatDatepickerModule
            ]
        })
    ], DashBoardModule);
    return DashBoardModule;
}());



/***/ }),

/***/ "mjrl":
/*!****************************************************************!*\
  !*** ./src/app/main/trg-team/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "JH8G");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss */ "LjMm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_links_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/links.module */ "Uhg6");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(service, cdref, spinner) {
        this.service = service;
        this.cdref = cdref;
        this.spinner = spinner;
        this.IP = app_links_module__WEBPACK_IMPORTED_MODULE_3__["Links"].IP;
        this.adventureCell = {};
        this.apto = {};
        this.awto = {};
        this.brigTrg = {};
        this.colgsTrg = {};
        this.eqtn = {};
        this.fc = {};
        this.fe = {};
        this.gso1trg = {};
        this.gso2trg = {};
        this.gso2assmt = {};
        this.gso2pgme = {};
        this.methodsec = {};
        this.pto = {};
        this.sig = {};
        this.tac = {};
        this.wto = {};
        this._2xdemocoy = {};
        this._2xloafghan = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getOrganizationChartData();
    };
    DashboardComponent.prototype.getOrganizationChartData = function () {
        var _this = this;
        this.spinner.show();
        this.service.getOrganizationChartData().subscribe(function (res) {
            console.log(res);
            if (res.status == '1') {
                var obj = res.List;
                obj.find(function (el) {
                    if (el.position.id == 1) {
                        _this.adventureCell = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 2) {
                        _this.apto = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 3) {
                        _this.awto = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 4) {
                        _this.brigTrg = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 5) {
                        _this.colgsTrg = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 6) {
                        _this.eqtn = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 7) {
                        _this.fc = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 8) {
                        _this.fe = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 9) {
                        _this.gso1trg = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 10) {
                        _this.gso2trg = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 11) {
                        _this.gso2assmt = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 12) {
                        _this.gso2pgme = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 13) {
                        _this.methodsec = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 14) {
                        _this.pto = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 15) {
                        _this.sig = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 16) {
                        _this.tac = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 17) {
                        _this.wto = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 18) {
                        _this._2xdemocoy = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                    if (el.position.id == 19) {
                        _this._2xloafghan = el;
                        // console.log(this.brigTrg);
                        _this.cdref.detectChanges();
                    }
                });
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        });
    };
    DashboardComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/id.png";
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_4__["TrgTeamService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_4__["TrgTeamService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ })

}]);