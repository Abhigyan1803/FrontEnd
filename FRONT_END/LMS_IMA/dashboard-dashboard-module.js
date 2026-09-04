(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "+KCD":
/*!**************************************************************!*\
  !*** ./src/app/main/gs-branch/dashboard/dashboard.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "easW");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "2YB+":
/*!*************************************************************!*\
  !*** ./src/app/main/admin/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "AoLw");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss */ "pLeQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
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
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.ctorParameters = function () { return []; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "6psE":
/*!********************************************************************!*\
  !*** ./src/app/main/academic-depart/dashboard/dashboard.module.ts ***!
  \********************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "IiID");
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
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "7fRp":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/dashboard/dashboard.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cccv container-fluid main-card\">\r\n    <div id=\"md-btm\" class=\"row\">\r\n        <div class=\"col-md-9\">\r\n            <div class=\"dev\">\r\n                <h4 class=\"diii\" style=\"margin-bottom: 0px;\">Daily Schedule</h4>\r\n                <p class=\"dats\">Date: {{myDate | date:'dd MMM yyyy'}}</p>\r\n            </div>\r\n            <div id=\"center_section\" class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"data_row aln_ls\">\r\n                            <div class=\"col-md-12\">\r\n                            </div>\r\n\r\n                        </div>\r\n                        <table *ngIf=\"Weeklyschedule.length\" class=\"table\">\r\n                            <thead class=\"thead-dark\">\r\n                                <tr>\r\n                                    <th>S.No.</th>\r\n                                    <th>Time</th>\r\n                                    <th>Period</th>\r\n                                    <th>Subject</th>\r\n                                    <th>Type</th>\r\n                                    <th>Lesson</th>\r\n                                    <th>Instr</th>\r\n                                    <th>Place</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <!-- <tr>\r\n                                    <td>1</td>\r\n                                    <td>0600-0700h</td>\r\n                                    <td>01</td>\r\n                                    <td>-</td>\r\n                                    <td>-</td>\r\n                                    <td>OTD Excuse</td>\r\n                                    <td>COL GS</td>\r\n                                    <td>Khetarpal Audi</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>2</td>\r\n                                    <td>0800-0900h</td>\r\n                                    <td>02</td>\r\n                                    <td>-</td>\r\n                                    <td>-</td>\r\n                                    <td>DCCI Opening Address</td>\r\n                                    <td>BRIG ADM</td>\r\n                                    <td>Khetarpal Audi</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>3</td>\r\n                                    <td>0900-0700h </td>\r\n                                    <td>03</td>\r\n                                    <td>MISC</td>\r\n                                    <td>-</td>\r\n                                    <td>PSOs Opening Address</td>\r\n                                    <td>HAD</td>\r\n                                    <td>Khetarpal Audi</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>4</td>\r\n                                    <td>0100-0200h</td>\r\n                                    <td>04</td>\r\n                                    <td>Games</td>\r\n                                    <td>-</td>\r\n                                    <td>GS Branch (0935-0955)</td>\r\n                                    <td>BRIG TRG</td>\r\n                                    <td>Khetarpal Audi</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>5</td>\r\n                                    <td>0300-0500h</td>\r\n                                    <td>05</td>\r\n                                    <td>MISC</td>\r\n                                    <td>-</td>\r\n                                    <td>ADM Branch (0955-1015)</td>\r\n                                    <td>BN AQ</td>\r\n                                    <td>Khetarpal Audi</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>6</td>\r\n                                    <td>0900-0400h</td>\r\n                                    <td>06</td>\r\n                                    <td>MISC</td>\r\n                                    <td>-</td>\r\n                                    <td>ACAD Branch (1035-1055)</td>\r\n                                    <td>PTO</td>\r\n                                    <td>Khetarpal Audi</td>\r\n                                </tr> -->\r\n\r\n                                <tr *ngFor=\"let l of Weeklyschedule; let i=index;\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{l.startTime}}-{{l.endTime}}</td>\r\n                                    <td>{{l.period}}</td>\r\n                                    <td>{{l.subject}}</td>\r\n                                    <td>{{l.type}}</td>\r\n                                    <td>{{l.lession}}</td>\r\n                                    <td>{{l.instructor}}</td>\r\n                                    <td>{{l.place}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n\r\n                        </table>\r\n\r\n                        <div *ngIf=\"!Weeklyschedule.length\" class=\"no-schedule\">\r\n                            <h3>No Schedules</h3>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div id=\"accordion\" class=\"acc-od\">\r\n                <div class=\"card\" id=\"one\">\r\n                    <div class=\"card-header\" (click)=\"collapse.toggle()\" [attr.aria-expanded]=\"!isCollapsed\"\r\n                        aria-controls=\"collapseExample\">\r\n                        <a class=\"card-link\">\r\n                            Upcoming Events\r\n                        </a>\r\n                        <i class=\"fa fa-chevron-right jkl\" id=\"ones\"></i>\r\n                    </div>\r\n                    <div id=\"collapseOne\" #collapse=\"ngbCollapse\" [(ngbCollapse)]=\"isCollapsed\">\r\n                        <div class=\"card-body\">\r\n                            <ul class=\"task_list ul-new\">\r\n\r\n                                <div *ngIf=\"!UpcomingEvent.length\" class=\"not-available\" >\r\n                                    No Upcoming Events.\r\n                                </div>\r\n                                <li *ngFor=\"let e of UpcomingEvent\">\r\n                                    <div class=\"time edata\">\r\n                                        <span class=\"event_date\">{{e.eventDate | date:'EE, d MMM y' }}</span>\r\n                                        <!-- <span class=\"event_time\">{{e.eventDate | date:'HHmm' || '-' }}</span> -->\r\n                                        <span class=\"event_time\"> {{getEveTime(e.eventDate)}} </span>\r\n\r\n                                    </div>\r\n                                    <div class=\"right\" (click)=\"openEventDetails(e)\">\r\n\r\n                                        <div class=\"info\">\r\n                                            <h2 class=\"title\">{{e.title}}</h2>\r\n                                            <ng-container *ngIf=\"e.isNew\">\r\n                                                <img src=\"assets/img/new1.gif\" style=\"    width: 40px;\r\n                                           height: 36px;\r\n                                           margin-top: -8px;\">\r\n                                            </ng-container>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </li>\r\n\r\n\r\n\r\n                                <!--                                         \r\n                                <li><a href=\"#\">Provide Space Control</a></li>\r\n                                <li><a href=\"#\">Conduct Public Affairs Operations</a></li>\r\n                                <li><a href=\"#\">Integrate Military Information </a></li>\r\n                                <li><a href=\"#\">3 Conduct Soldier and Leader Engagement</a></li> -->\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" (click)=\"collapse2.toggle()\" [attr.aria-expanded]=\"!isCollapsed2\"\r\n                        aria-controls=\"collapseExample\">\r\n                        <a class=\"collapsed card-link\">\r\n                            My Task\r\n                        </a>\r\n                        <i class=\"fa fa-chevron-right jkl\" id=\"\"></i>\r\n                    </div>\r\n                    <div #collapse2=\"ngbCollapse\" [(ngbCollapse)]=\"isCollapsed2\">\r\n                        <div class=\"card-body\">\r\n                            <ul class=\"task_list\">\r\n                                <ng-container *ngFor=\"let t of assignments\">\r\n\r\n                                    <li *ngIf=\"!t.isAnswered\" >\r\n                                    \r\n                                        <p class=\"Date_cls\"> {{t.createdAt | date}}  \r\n                                            <!-- <span *ngIf=\"t.isAnswered\" >Answered</span> -->\r\n                                             <span *ngIf=\"!t.isAnswered\" >Pending</span> </p>\r\n                                    <a href=\"javascript:void(0)\"> {{t.assignment}} </a>\r\n                                    \r\n                                </li>\r\n                                </ng-container>\r\n\r\n                                <!-- <li>\r\n                                    <p class=\"Date_cls\">15/10/2021</p><a href=\"#\">Provide Space Control</a>\r\n                                </li>\r\n                                <li>\r\n                                    <p class=\"Date_cls\">15/10/2021</p><a href=\"#\">Conduct Public Affairs Operations</a>\r\n                                </li>\r\n                                <li>\r\n                                    <p class=\"Date_cls\">15/10/2021</p><a href=\"#\">Integrate Military Information </a>\r\n                                </li>\r\n                                <li>\r\n                                    <p class=\"Date_cls\">15/10/2021</p><a href=\"#\">3 Conduct Soldier and Leader\r\n                                        Engagement</a>\r\n                                </li>\r\n                                <li>\r\n                                    <p class=\"Date_cls\">15/10/2021</p><a href=\"#\"> Prepare for Tactical Operations</a>\r\n                                </li> -->\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" (click)=\"collapse3.toggle()\" [attr.aria-expanded]=\"!isCollapsed3\"\r\n                        aria-controls=\"collapseExample\">\r\n                        <a class=\"collapsed card-link\">\r\n                            C / LEC\r\n                        </a>\r\n                        <i class=\"fa fa-chevron-right jkl\" id=\"\"></i>\r\n                    </div>\r\n                    <div #collapse3=\"ngbCollapse\" [(ngbCollapse)]=\"isCollapsed3\">\r\n                        <div class=\"card-body\">\r\n                            <ul class=\"task_list\">\r\n\r\n                                <li *ngFor=\"let l of CLec\">\r\n                                    <div class=\"row Date_cls\">\r\n                                        <div class=\"col-9\">\r\n\r\n                                            <p > {{l.date | date:'dd/MM/yyyy'}}</p>\r\n                                        </div>\r\n                                        <div class=\"col-3\">\r\n\r\n                                            <a href=\"javascript:void(0)\" (click)=\"openDoc(l)\" >\r\n                                                <mat-icon>description</mat-icon>\r\n                                            </a> \r\n                                        </div>\r\n                                    </div>\r\n                                    <a href=\"javascript:void(0)\">{{l.description}}</a>\r\n                                    \r\n                                    \r\n                                </li>\r\n\r\n\r\n\r\n\r\n                                <!-- \r\n                                <li><p class=\"Date_cls\">15/10/2021</p><a href=\"#\">Conduct Public Affairs Operations</a></li>\r\n                                <li><p class=\"Date_cls\">15/10/2021</p><a href=\"#\">Integrate Military Information </a></li>\r\n                                <li><p class=\"Date_cls\">15/10/2021</p><a href=\"#\">3 Conduct Soldier and Leader Engagement</a></li> -->\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" class=\"card-header\" (click)=\"collapse4.toggle()\"\r\n                        [attr.aria-expanded]=\"!isCollapsed4\" aria-controls=\"collapseExample\">\r\n                        <a class=\"collapsed card-link\">\r\n                            Counsellor\r\n                        </a>\r\n                        <i class=\"fa fa-chevron-right jkl\" id=\"\"></i>\r\n                    </div>\r\n                    <div id=\"collapsefour\" #collapse4=\"ngbCollapse\" [(ngbCollapse)]=\"isCollapsed4\">\r\n                        <div class=\"card-body\">\r\n                            <div *ngIf=\"!counsellor\" class=\"not-available\" >\r\n                                 No Counsellor Added. \r\n                            </div>\r\n                            <ul class=\"task_list\" *ngIf=\"counsellor\">\r\n                                <li >\r\n                                    <p class=\"Date_cls\">Rank : <span> {{counsellor.rankName}} </span></p>\r\n                                    <p class=\"Date_cls\">Name : <span>{{counsellor.name}}</span></p>\r\n                                    <p class=\"Date_cls\">Contact No : <span>{{counsellor.mobileNumber}}</span> </p>\r\n                                </li>\r\n                                \r\n                                <!-- <li *ngFor=\"let c of Counsellor; let i=index\">\r\n                                    <p class=\"Date_cls\">Rank : <span> {{c.rankName}} </span></p>\r\n                                    <p class=\"Date_cls\">Name : <span>{{c.name}}</span></p>\r\n                                    <p class=\"Date_cls\">Contact No : <span>{{c.mobileNumber}}</span> </p>\r\n                                </li> -->\r\n\r\n                                <!-- <li><p class=\"Date_cls\">Rank : <span>Leftinent</span></p>\r\n                                    <p class=\"Date_cls\">Name : <span>Vijay Yadav</span></p>\r\n                                    <p class=\"Date_cls\">Contact No : <span>123456789</span> </p>\r\n                                    </li> -->\r\n\r\n\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "9pst":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/dashboard/dashboard.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Dashboard <span class=\"sub-menu1\"></span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"\" style=\"width: 100%; height: 100%;\">\r\n        <img src=\"assets/img/80288819.webp\"  style=\"width: 100%; height: 100%;\" class=\"\" alt=\"\">\r\n    </div>\r\n    \r\n    \r\n</mat-card>");

/***/ }),

/***/ "AoLw":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Dashboard <span class=\"sub-menu1\"></span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"\" style=\"width: 100%; height: 100%;\">\r\n        <img src=\"assets/img/80288819.webp\"  style=\"width: 100%; height: 100%;\" class=\"\" alt=\"\">\r\n    </div>\r\n    \r\n    \r\n</mat-card>");

/***/ }),

/***/ "IiID":
/*!***********************************************************************!*\
  !*** ./src/app/main/academic-depart/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "nu6S");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss */ "ZPuV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
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
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.ctorParameters = function () { return []; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "MPh9":
/*!*******************************************************************!*\
  !*** ./src/app/main/gs-branch/dashboard/dashboard.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.img_class {\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 2px solid #CCC;\n}\n\nul {\n  margin: 0px;\n  padding: 0px;\n}\n\n.hding h4 {\n  background: #eee;\n  padding: 7px 10px;\n  font-size: 17px;\n  color: #721a0c;\n  font-weight: 600;\n  margin: 0px 0px 10px 0px;\n  border-radius: 3px;\n  line-height: 24px;\n}\n\n.cap-img img {\n  width: 100%;\n}\n\n.col-md-9.hding p {\n  text-align: justify;\n  margin-bottom: 4px;\n}\n\n/*cgart css*/\n\nul.three {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 0px;\n}\n\nli {\n  list-style-type: none;\n}\n\n.director {\n  width: 200px;\n  background: #bc9753;\n  padding: 10px;\n  text-align: center;\n  margin: 0 auto;\n  display: table;\n  border: 2px solid #721a0c;\n  box-shadow: 2px 2px 4px #ccc;\n}\n\n.director a {\n  width: 100%;\n  float: left;\n  color: #fff;\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n  margin-top: 20px;\n  text-transform: capitalize;\n}\n\nspan.photu {\n  width: 65px;\n  height: 65px;\n  background: #721a0c;\n  border-radius: 50%;\n  top: 0;\n  margin: 0 auto -32px;\n  border: 2px solid #bc9753;\n  display: table;\n  text-align: center;\n  position: relative;\n  z-index: 9;\n}\n\n.space {\n  content: \"\";\n  display: block;\n  position: relative;\n  width: 4px;\n  height: 85px;\n  background: #bc9753;\n  margin: -4px auto 0;\n}\n\n.space2 {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 4px;\n  height: 435px;\n  background: #bc9753;\n  left: -60px;\n}\n\n.space3 {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 4px;\n  height: 435px;\n  background: #bc9753;\n  right: -60px;\n}\n\n.two-sec {\n  display: flex;\n  justify-content: space-between;\n}\n\n.space-parent {\n  margin: 0 auto;\n  position: relative;\n  display: table;\n}\n\n.left .photu {\n  width: 65px;\n  height: 65px;\n  background: #721a0c;\n  border-radius: 50%;\n  top: 8%;\n  margin: 0 auto -32px;\n  border: 2px solid #bc9753;\n  display: table;\n  text-align: center;\n  position: relative;\n  z-index: 9;\n  left: 55%;\n}\n\n.left a, .right a {\n  margin: 0px !important;\n}\n\n.right .photu {\n  width: 65px;\n  height: 65px;\n  background: #721a0c;\n  border-radius: 50%;\n  top: 8%;\n  margin: 0 auto -32px;\n  border: 2px solid #bc9753;\n  display: table;\n  text-align: center;\n  position: relative;\n  z-index: 9;\n  right: 52%;\n}\n\n.spaceverti {\n  position: absolute;\n  width: 208px;\n  height: 4px;\n  background: #bc9753;\n  content: \"\";\n  display: block;\n  right: -244px;\n  top: -29px;\n  z-index: -1;\n}\n\n.verticle {\n  position: relative;\n}\n\n.verticle_right .spacevertir {\n  position: absolute;\n  width: 224px;\n  height: 4px;\n  background: #bc9753;\n  content: \"\";\n  display: block;\n  z-index: -1;\n  left: -240px;\n  top: -29px;\n}\n\n.verticle_right {\n  position: relative;\n}\n\n.top_border {\n  width: 81%;\n  height: 4px;\n  content: \"\";\n  background: #bc9753;\n  margin: 0px auto auto;\n  position: relative;\n}\n\n.director-new {\n  width: 200px;\n  background: #bc9753;\n  padding: 10px;\n  text-align: center;\n}\n\n.space4 {\n  content: \"\";\n  background: #bc9753;\n  width: 4px;\n  height: 434px;\n  z-index: -1;\n  position: absolute;\n}\n\n.space5 {\n  content: \"\";\n  background: #bc9753;\n  width: 4px;\n  height: 433px;\n  z-index: -1;\n  position: absolute;\n  right: 0;\n}\n\n.ert-sa {\n  content: \"\";\n  width: 41px;\n  height: 4px;\n  background: #bc9753;\n  position: absolute;\n  left: -15%;\n  top: -36px;\n  z-index: -1;\n}\n\n.paraa {\n  position: relative;\n}\n\n.ert-sa2 {\n  content: \"\";\n  width: 72px;\n  height: 4px;\n  background: #bc9753;\n  position: absolute;\n  left: -23%;\n  top: -36px;\n  z-index: -1;\n}\n\n.ert-sa3 {\n  content: \"\";\n  width: 50px;\n  height: 4px;\n  background: #bc9753;\n  position: absolute;\n  right: -15%;\n  top: -36px;\n  z-index: -1;\n}\n\nli.director.sing {\n  height: 53px;\n  display: flex;\n  align-items: center;\n}\n\n.director.singiii {\n  height: 119px;\n  align-items: center;\n  display: flex;\n}\n\n.director.last-of {\n  height: 150px;\n}\n\na.top-bod {\n  border-top: 1px solid #fff;\n  margin-top: 0px;\n  padding-top: 4px;\n}\n\n.dev {\n  position: relative;\n}\n\n.inerr {\n  position: absolute;\n  right: 0;\n  top: -197px;\n  right: 15%;\n}\n\n.inerr:before {\n  content: \"\";\n  display: block;\n  width: 252px;\n  height: 4px;\n  background: #bc9753;\n  top: 60%;\n  right: 67%;\n  position: absolute;\n  z-index: -1;\n}\n\n.new-boder {\n  border: 1px solid #ccc;\n  padding: 15px 15px 0 15px;\n}\n\n.new_row.container {\n  margin-top: 25px;\n}\n\n.parent_row {\n  display: flex;\n  margin-bottom: 10px;\n}\n\n.name_cls h5 {\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 0px;\n  width: 100%;\n}\n\n.name_cls p {\n  margin: 0;\n  font-size: 14px;\n}\n\n.name_cls {\n  padding-left: 10px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.scrollar {\n  height: 282px;\n  overflow-y: scroll;\n}\n\n.main_new {\n  transform: rotate(90deg);\n}\n\ni.fa.fa-chevron-right.menu-cls {\n  transition: 1s;\n}\n\nimg.org_img {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  border: 2px solid #721a0c;\n}");

/***/ }),

/***/ "Mxsg":
/*!****************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/dashboard/dashboard.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_new {\n  transform: rotate(90deg);\n}\n\ni.fa.fa-chevron-right.menu-cls {\n  transition: 1s;\n}\n\ndiv#center_section p {\n  text-align: justify;\n  /*        font-weight: 500;\n  */\n}\n\ndiv#center_section h4 {\n  color: #721a0c;\n  font-weight: 800;\n}\n\n.de_img {\n  box-shadow: 0px 1px 1pc #ccc;\n  border: 2px solid #721a0c;\n  border-radius: 20px;\n  margin: 20px auto;\n  display: table;\n}\n\n.diii {\n  color: #fff;\n  font-weight: bold;\n  line-height: 28px;\n  font-size: 16px;\n  background: #721a0c;\n  border-radius: 4px;\n}\n\n.thead-dark {\n  background-color: #bc9753 !important;\n}\n\n.table {\n  border-bottom: 1px solid #dee2e6;\n}\n\nthead.thead-dark th {\n  background: transparent !important;\n  border: 0px;\n}\n\n.table .thead-dark th {\n  color: #fff !important;\n  background-color: #343a40;\n  border-color: #454d55;\n}\n\n#center_section {\n  background: url('white.png');\n  padding: 10px 12px;\n  border: 1px solid #eee;\n  border-radius: 3px;\n  float: left;\n  width: 100%;\n  margin-top: 12px;\n}\n\n.data_row input {\n  border: 1px solid #ccc;\n  padding-bottom: 4px;\n  width: 200px;\n  margin-bottom: 10px;\n  height: 36px;\n  padding: 10px;\n  background: #fff;\n  border-radius: 3px;\n  border-bottom: 2px solid #ccc;\n}\n\n.pagination {\n  display: inline-block;\n}\n\n.pagination a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n}\n\n.pagination a {\n  background: #fcf9f9;\n  border: 1px solid #bc9753;\n  margin: 0px 2px;\n  padding: 4px 10px;\n}\n\n.row.aln_ls {\n  justify-content: space-between;\n}\n\nul {\n  padding: 0px;\n  margin: 0px;\n}\n\ndiv#md-btm {\n  margin-bottom: 30px;\n}\n\n.acc-od .card-body {\n  border: 1px solid #eee;\n  padding: 12px 12px 12px 12px;\n  box-shadow: 1px 1px 3px #ccc;\n  float: left;\n  width: 100%;\n  overflow-y: scroll;\n  height: 170px;\n}\n\nul.task_list li {\n  margin-top: 5px;\n  margin-bottom: 5px !important;\n  float: left;\n  border-bottom: 1px solid #bc9753;\n  width: 100%;\n  background: #fff;\n  padding: 10px;\n  border-radius: 3px;\n  display: inline-block;\n  border-top: 1px solid #bc9753;\n  border: 1px solid #bc9753;\n}\n\nul.task_list li a {\n  color: #333;\n  text-decoration: none;\n}\n\n.dev {\n  display: flex;\n  justify-content: space-between;\n  background: #721a0c;\n  padding: 5px 15px;\n  color: #fff;\n  font-family: sans-serif !important;\n  align-items: center;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n}\n\n.dats {\n  font-size: 14px;\n  font-weight: bold;\n  margin: 0;\n  line-height: 36px;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  margin: 6px;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown a:hover {\n  background-color: #ddd;\n}\n\n.show {\n  display: block;\n}\n\nbutton.dropbtn {\n  border: 0;\n  background: transparent;\n}\n\nspan.txt-ii img {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n}\n\n.dropdown button:focus {\n  outline: 0 !important;\n}\n\n.acc-od .card {\n  margin-bottom: 17px;\n}\n\na.card-link {\n  color: #fff;\n  font-size: 15px;\n  font-weight: 500;\n}\n\ndiv#md-btm {\n  margin: 30px auto;\n  background: rgba(45, 50, 31, 0.9);\n  padding: 20px 0px;\n  border-radius: 4px;\n  min-height: 435px;\n}\n\n.acc-od .card-header {\n  background: #721a0c;\n}\n\n.cccv {\n  background-image: url('bcck.jpg');\n  background-size: cover;\n  background-position: center;\n  float: left;\n  width: 100%;\n  background-attachment: fixed;\n}\n\n.cccv td {\n  color: #fff !important;\n}\n\n.main_new {\n  transform: rotate(90deg);\n}\n\n.jkl {\n  float: right;\n  color: #fff;\n  position: relative;\n  top: 5px;\n}\n\n.nav-tabs[_ngcontent-jus-c390] > li.active[_ngcontent-jus-c390] > a[_ngcontent-jus-c390], .nav-tabs[_ngcontent-jus-c390] > li.active[_ngcontent-jus-c390] > a[_ngcontent-jus-c390]:focus {\n  cursor: default;\n  color: #fff;\n  background-color: #721a0c;\n  border-style: none;\n}\n\n/**=====================*/\n\nnav.navbar.navbar-expand-sm {\n  width: 100%;\n  justify-content: space-between;\n}\n\na.nav-link {\n  font-family: \"Roboto\", sans-serif;\n  margin: 0px 10px;\n  font-size: 18px;\n}\n\nnav.navbar.navbar-expand-lg.navbar-light {\n  width: 100%;\n  justify-content: space-between !important;\n  background: transparent;\n}\n\ndiv#navbarSupportedContent {\n  flex-grow: unset;\n}\n\nli.nav-item.active a {\n  color: #f8b4a0 !important;\n}\n\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n  color: #f8b4a0 !important;\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: #333;\n}\n\nspan.count {\n  position: absolute;\n  top: 0;\n  right: 2%;\n  background: #f8b4a0;\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  border-radius: 50px;\n  text-align: center;\n}\n\ndiv#baner {\n  background: url('11.png');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\ndiv#baner2 {\n  background: url('1.jpg');\n  background-repeat: no-repeat;\n  background-position: top;\n}\n\n.iner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 70px 0px 0;\n  flex-wrap: wrap;\n}\n\n.iner h4 {\n  text-transform: capitalize;\n  font-size: 43px;\n  font-weight: 400;\n  margin-bottom: 0px;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.iner h1 {\n  font-size: 75px;\n  text-transform: capitalize;\n  text-shadow: 2px 2px 2px #ccc;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n\n#bg-flower p {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 100 !important;\n}\n\np {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.iner h1 span {\n  color: #c78b78;\n}\n\nbutton.shop {\n  border: 1px solid #333;\n  padding: 10px 25px;\n  border-radius: 40px;\n  background: #333;\n  color: #fff;\n  text-transform: capitalize;\n  width: 165px;\n  margin-top: 25px;\n}\n\n.iner .n-logo {\n  margin-bottom: 25px;\n}\n\n.iner2 {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n\ndiv#bg-flower {\n  background: url('3.jpg');\n  background-repeat: no-repeat;\n  margin-top: 100px;\n  padding: 25px;\n  background-size: cover;\n  background-position: top;\n}\n\n#bg-flower h4 {\n  font-weight: bold !important;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 30px;\n}\n\n#for-color {\n  background: #eaeaea;\n  padding: 100px 0px 200px;\n  text-align: center;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.featured.container-fluid {\n  padding: 0;\n}\n\n.featured.container-fluid .row {\n  width: 100%;\n}\n\n.featured h1 {\n  width: 100%;\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 50px;\n}\n\n.featured p {\n  width: 100%;\n  text-align: center;\n}\n\n.p-price h4 {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px;\n}\n\n.p-price img {\n  width: calc(100% - 50%);\n  float: right;\n  padding-top: 8px;\n}\n\n.p-price span {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 17px;\n}\n\n.f-price {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 17px;\n}\n\nspan.f-price {\n  font-size: 29px;\n  color: #eebc67;\n  font-weight: bold;\n  line-height: 20px;\n}\n\nimg.yn {\n  position: absolute;\n  margin: 15px;\n}\n\n.card.p-3.bg-white {\n  background: #fff;\n  padding: 0 !important;\n  border: 18px solid #fff;\n  box-shadow: 1px 1px 4px 2px #eee;\n  border-radius: 0px;\n}\n\ndiv#top-row {\n  margin-top: -115px;\n}\n\n.featured.container-fluid.trans {\n  margin: 100px 0px;\n}\n\nh1.im-heading {\n  position: absolute;\n  z-index: 99;\n  bottom: 0;\n  color: #fff;\n  text-shadow: 2px 2px 2px #585656;\n  font-size: 45px;\n}\n\n.col-md-12.haf-class {\n  margin-bottom: 25px;\n}\n\nh1.im-headings {\n  position: absolute;\n  z-index: 99;\n  bottom: 13%;\n  color: #fff;\n  text-shadow: 2px 2px 2px #585656;\n  font-size: 45px;\n}\n\n.featured.container-fluid.trans .container {\n  margin: 70px auto 0;\n}\n\n.container.bg-blo {\n  background: #eee;\n  float: left;\n  padding: 0;\n}\n\n.col-md-6.hight {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 40;\n  padding: 10% 0 0% 10%;\n  /* flex-grow: 1; */\n  flex-flow: column;\n}\n\n.featured p {\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n}\n\n.col-md-6.hight h1 {\n  text-align: left !important;\n}\n\nbutton.btn {\n  background: #f1d3cd;\n}\n\ninput.form-control {\n  border: 0;\n}\n\n.content {\n  width: 100%;\n}\n\n.featured.container-fluid.full {\n  background: #282832;\n  display: flex;\n  padding: 50px 0px;\n}\n\nul.footer {\n  padding: 0;\n  margin-top: 40px;\n}\n\nul.footer li {\n  display: inline;\n  margin: 0 13px 0 6px !important;\n  color: #fff;\n}\n\np.copyright {\n  color: #fff;\n  font-size: 11px;\n  text-align: left;\n}\n\np.social {\n  color: #fff;\n  text-align: right;\n}\n\nul.social {\n  padding: 0;\n}\n\nul.social li {\n  color: #fff;\n  display: inline;\n  margin: 10px 15px;\n}\n\nul.social li:nth-child(1) {\n  margin-left: 0px;\n}\n\n.time span {\n  width: 100%;\n  text-overflow: ellipsis;\n  margin-left: 2px;\n}\n\n.info {\n  margin-left: 2px;\n}\n\n@media (min-width: 993px) and (max-width: 1199px) {\n  .header-nav .nav > li > a {\n    font-size: 14px !important;\n    padding: 20px 10px !important;\n  }\n\n  .col-md-4.img img {\n    height: auto !important;\n  }\n\n  .logo-header a {\n    font-size: 25px !important;\n  }\n}\n\n@media (max-width: 992px) {\n  .logo-header a {\n    font-size: 20px !important;\n    text-align: center;\n    width: 100%;\n  }\n\n  ul.nav {\n    display: none;\n  }\n\n  .logo-header.hidden-xs-clas {\n    display: none;\n  }\n\n  .logo-header.d-md-block.d-lg-none {\n    float: left;\n    width: 90%;\n  }\n\n  .toggle.hidden-lg-clas {\n    float: right;\n  }\n}\n\n@media (max-width: 992px) {\n  .need {\n    width: 100%;\n  }\n\n  div#bg-flower {\n    margin-top: 0px;\n  }\n\n  .toggle.hidden-lg-clas {\n    display: block !important;\n  }\n\n  ul.nav {\n    position: absolute;\n    background: rgba(0, 0, 0, 0.8);\n    width: 100%;\n    top: 23%;\n    left: 0%;\n    z-index: 99;\n  }\n\n  ul.nav li {\n    display: block !important;\n    width: 100%;\n  }\n\n  div#navbarNavDropdown {\n    padding: 10px 0px;\n  }\n\n  h4.tab-title.para {\n    font-size: 14px !important;\n  }\n\n  .container, .container-md, .container-sm {\n    max-width: 100% !important;\n  }\n\n  .dlab-bnr-inr.overlay-black-middle.bg-pt.course-banner {\n    background: transparent !important;\n  }\n}\n\n@media (max-width: 767px) {\n  img.mySlides {\n    height: 175px !important;\n  }\n\n  .header-nav .nav > li > a {\n    padding: 4px !important;\n    font-size: 12px;\n  }\n\n  h4.title {\n    font-size: 11px !important;\n    margin-left: 5px !important;\n  }\n\n  .col-md-4.img img {\n    height: auto !important;\n    margin-bottom: 15px;\n  }\n\n  h4.tab-title {\n    margin-top: 20px;\n  }\n\n  .main-row {\n    margin-top: 30px !important;\n  }\n\n  .row1.new1 {\n    margin-top: 15px;\n  }\n\n  .logo-header a {\n    font-size: 12px !important;\n  }\n}\n\n.service-list ul li {\n  display: inline-block;\n  position: relative;\n  margin-left: 0px;\n  padding: 0px;\n}\n\n.service-list ul {\n  padding-left: 0px;\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo-header a {\n  text-align: center;\n  color: #721a0c;\n  font-weight: bold;\n  font-size: 40px;\n  text-shadow: none;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  text-decoration: none;\n}\n\n.site-button, .site-button-secondry {\n  color: #721a0c;\n  padding: 12px 15px;\n  display: inline-block;\n  font-size: 13px;\n  outline: 0;\n  cursor: pointer;\n  outline: 0;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #721a0c;\n  line-height: 1.42857;\n  border-radius: 3px;\n  font-weight: bold;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background: transparent;\n  float: right;\n}\n\n.site-button span {\n  color: #721a0c !important;\n}\n\n.header-nav .nav > li > a {\n  border-radius: 0;\n  color: #fff;\n  font-size: 15px;\n  padding: 12px;\n  cursor: pointer;\n  font-weight: 400;\n  display: inline-block;\n  position: relative;\n  border-width: 0 0 0 1px;\n  text-transform: capitalize;\n  text-decoration: none;\n}\n\n.header-nav .nav > li .sub-menu {\n  background-color: rgba(46, 51, 19, 0.7);\n  display: block;\n  list-style: none;\n  opacity: 0;\n  padding: 5px 0;\n  visibility: hidden;\n  position: absolute;\n  width: 220px;\n  z-index: 10;\n}\n\n.header-nav .nav > li:hover > .mega-menu, .header-nav .nav > li:hover > .sub-menu {\n  opacity: 1;\n  visibility: visible;\n  margin-top: 0;\n  transition: all 0.8s ease;\n}\n\n.header-nav .nav > li .sub-menu li {\n  border-bottom: 0 solid #f4f4f4;\n  position: relative;\n}\n\na.site-button:hover {\n  color: #fff;\n}\n\n.header-nav .nav > li .mega-menu > li ul a:hover, .header-nav .nav > li .sub-menu li:hover > a {\n  background-color: #bc9753;\n  text-decoration: none;\n}\n\n.header-nav .nav > li .sub-menu li a {\n  color: #fff;\n  display: block;\n  font-size: 15px;\n  padding: 10px 25px;\n  text-transform: capitalize;\n  transition: all 0.15s linear;\n  -webkit-transition: all 0.15s linear;\n  -moz-transition: all 0.15s linear;\n  -o-transition: all 0.15s linear;\n  font-weight: 400;\n}\n\n/*ul.nav li:nth-child(1) a {\n    padding-left: 0px !important;\n}*/\n\nul.nav li:nth-child(8) a {\n  padding-right: 0px !important;\n}\n\n.service-list ul {\n  padding-left: 0px;\n}\n\nul.submenu li:nth-child(1) a {\n  padding-left: 25px !important;\n}\n\ndiv#navbarNavDropdown {\n  border-top: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n  background: #bc9753;\n  float: left;\n  width: 100%;\n}\n\n.dlab-bnr-inr.bg-pt {\n  background-position: top;\n  background-size: cover;\n  float: left;\n  width: 100%;\n}\n\n.course-banner {\n  height: 550px;\n  text-align: center;\n}\n\nul.lefty-ro2 {\n  background: #fff;\n  margin: 0px 0px;\n  text-align: left;\n  padding: 10px 10px;\n  overflow-y: scroll;\n  height: 471px;\n  background: rgba(46, 51, 19, 0.7);\n}\n\nul.lefty-ro2 li {\n  margin: 8px 0px;\n  list-style-type: none;\n  font-size: 13px;\n  font-weight: 600;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 10px;\n  color: #fff;\n}\n\n.lefty-ro2::-webkit-scrollbar {\n  width: 3px;\n}\n\n.lefty-ro2::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.lefty-ro2::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n\n.event-list {\n  list-style: none;\n  font-family: \"Lato\", sans-serif;\n  margin: 0px;\n  padding: 0px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.event-list > li {\n  background-color: rgba(188, 151, 82, 0.7);\n  box-shadow: 0px 0px 5px #333333;\n  box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.7);\n  padding: 0px;\n  margin: 0px 0px 12px;\n}\n\n.event-list > li > time {\n  display: inline-block;\n  width: 100%;\n  color: white;\n  background-color: #721a0c;\n  padding: 5px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.event-list > li:nth-child(even) > time {\n  background-color: #555d4b;\n}\n\n.event-list > li > time > span {\n  display: none;\n}\n\n.event-list > li > time > .day {\n  display: block;\n  font-size: 13pt;\n  font-weight: 100;\n  line-height: 1;\n}\n\n.event-list > li time > .month {\n  display: block;\n  font-size: 7pt;\n  font-weight: 900;\n  line-height: 1;\n  margin-top: 3px;\n}\n\n.event-list > li > img {\n  width: 100%;\n}\n\n.event-list > li > .info {\n  padding-top: 5px;\n  text-align: center;\n}\n\n.event-list > li > .info > .title {\n  font-size: 11pt;\n  font-weight: 500;\n  margin: 5px 0;\n}\n\n.event-list > li > .info > .desc {\n  font-size: 13pt;\n  font-weight: 300;\n  margin: 0px;\n}\n\n.event-list > li > .info > ul,\n.event-list > li > .social > ul {\n  display: table;\n  list-style: none;\n  margin: 10px 0px 0px;\n  padding: 0px;\n  width: 100%;\n  text-align: center;\n}\n\n.event-list > li > .social > ul {\n  margin: 0px;\n}\n\n.event-list > li > .info > ul > li,\n.event-list > li > .social > ul > li {\n  display: table-cell;\n  cursor: pointer;\n  color: #1e1e1e;\n  font-size: 11pt;\n  font-weight: 300;\n  padding: 3px 0px;\n}\n\n.event-list > li > .info > ul > li > a {\n  display: block;\n  width: 100%;\n  color: #1e1e1e;\n  text-decoration: none;\n}\n\n.event-list > li > .social > ul > li {\n  padding: 0px;\n}\n\n.event-list > li > .social > ul > li > a {\n  padding: 3px 0px;\n}\n\n.event-list > li > .info > ul > li:hover,\n.event-list > li > .social > ul > li:hover {\n  color: #1e1e1e;\n  background-color: #c8c8c8;\n}\n\n@media (min-width: 768px) {\n  .event-list > li {\n    position: relative;\n    display: block;\n    width: 100%;\n    padding: 0px;\n  }\n\n  .event-list > li > time,\n.event-list > li > img {\n    display: inline-block;\n  }\n\n  .event-list > li > time,\n.event-list > li > img {\n    width: 45px;\n    float: left;\n    min-height: 100%;\n    height: 44px;\n    padding: 4px !important;\n  }\n\n  .event-list > li > .info {\n    overflow: hidden;\n  }\n\n  .event-list > li > time,\n.event-list > li > img {\n    padding: 0px;\n    margin: 0px;\n  }\n\n  .event-list > li > .info {\n    position: relative;\n    text-align: left;\n  }\n\n  .event-list > li > .info > .title,\n.event-list > li > .info > .desc {\n    padding: 0px 10px;\n  }\n\n  .event-list > li > .info > ul {\n    position: absolute;\n    left: 0px;\n    bottom: 0px;\n  }\n\n  .event-list > li > .social {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    display: block;\n    width: 40px;\n  }\n\n  .event-list > li > .social > ul {\n    border-left: 1px solid #e6e6e6;\n  }\n\n  .event-list > li > .social > ul > li {\n    display: block;\n    padding: 0px;\n  }\n\n  .event-list > li > .social > ul > li > a {\n    display: block;\n    width: 40px;\n    padding: 10px 0px 9px;\n  }\n}\n\n.dlab-bnr-inr .container {\n  padding: 20px 15px 20px;\n}\n\nh2.title {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 13px;\n  text-align: left;\n  margin: 0 0 0 0;\n  color: #fff;\n}\n\np.desc {\n  font-family: sans-serif;\n  font-size: 13px !important;\n  width: 160px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.time {\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 0px;\n  font-size: 11px;\n}\n\n.time {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  color: #ccc;\n}\n\n.event-list > li {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0px;\n  float: left;\n  border-top: 3px solid #4b5320;\n  border-top: 3px solid #4b5320;\n  box-shadow: 1px 1px 2px #777;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\nh4.tab-title.para {\n  background: #721a0c;\n  color: #fff;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n\n.left {\n  float: left;\n  width: 16%;\n}\n\n.right {\n  float: left;\n  width: 84%;\n  padding: 5px 10px;\n}\n\n.left img {\n  width: 40px;\n  height: 43px;\n}\n\n.new1::-webkit-scrollbar {\n  width: 1px;\n}\n\n.new1::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.new1::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n\n.new1 {\n  overflow-y: scroll;\n  height: 234px;\n}\n\nh4.title {\n  text-transform: capitalize;\n  font-size: 15px;\n  margin: 0 0 0 15px;\n  color: #721a0c;\n  font-weight: bold;\n}\n\n.service-list span {\n  color: #777;\n  font-size: 13px;\n  text-transform: capitalize;\n}\n\ni.fa.fa-chevron-down {\n  padding-left: 6px;\n}\n\n.w3-content.w3-section {\n  margin: 0 !important;\n  border: 3px solid #CCC;\n  box-shadow: 1px 1px 2px 2px #ccc;\n}\n\n.toggle.hidden-lg-clas {\n  cursor: pointer;\n  color: #fff;\n  font-size: 20px;\n  display: none;\n  z-index: 999999;\n  position: relative;\n}\n\n.blink {\n  -webkit-animation: blink 3s linear infinite;\n          animation: blink 3s linear infinite;\n}\n\n@-webkit-keyframes blink {\n  50% {\n    opacity: 0.2;\n  }\n}\n\n@keyframes blink {\n  50% {\n    opacity: 0.2;\n  }\n}\n\n.main-row {\n  float: left;\n  width: 100%;\n  margin: 95px 0px 45px;\n}\n\nh4.tab-title {\n  font-size: 16px;\n  text-align: left;\n  color: #721a0c;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 25px;\n}\n\n.col-md-4.img img {\n  border: 3px solid #721a0c;\n  border-radius: 4px;\n  width: 100%;\n  height: 225px;\n}\n\n.col-md-8.contents p {\n  text-align: justify;\n  font-family: sans-serif;\n  font-size: 14px;\n  letter-spacing: 0.4px;\n  text-transform: capitalize;\n}\n\np.nor-text-b {\n  margin-bottom: 0px;\n  line-height: 25px;\n}\n\n.demo-11 {\n  display: flex;\n  align-items: center;\n}\n\n.service-list ul li:nth-child(2) {\n  width: 60%;\n}\n\n.logo-header a:hover {\n  text-decoration: none;\n  color: #721a0c;\n}\n\n.events-list ul {\n  padding: 0px;\n}\n\n.events-list li {\n  list-style-type: none;\n  margin-bottom: 12px;\n  background: rgba(188, 151, 82, 0.7);\n  padding: 3px;\n  width: 100%;\n  cursor: pointer;\n}\n\n.space {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 4px;\n  height: 40px;\n  background: #721a0c;\n}\n\np.dates {\n  float: left;\n  width: 20%;\n  font-size: 16px;\n  line-height: 18px;\n  font-family: sans-serif;\n  text-align: center;\n  color: #4b5320;\n  font-weight: bold;\n}\n\np.tole {\n  float: left;\n  font-size: 15px;\n  font-family: sans-serif;\n  font-weight: 500;\n  margin: 0px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n  width: 65%;\n  overflow: hidden;\n  text-align: left;\n  color: #fff;\n}\n\n.events-list i.fa.fa-chevron-right {\n  font-size: 20px;\n  line-height: 40px;\n  color: #fff;\n  cursor: pointer;\n}\n\nb.time {\n  color: #721a0c;\n  font-weight: 300;\n}\n\n.events-list {\n  overflow-y: scroll;\n  height: 225px;\n  position: relative;\n  border: 2px solid #eee;\n  padding: 15px 5px 15px 15px;\n  box-shadow: 1px 1px 2px 2px #ccc;\n}\n\n.events-list::-webkit-scrollbar {\n  width: 3px;\n}\n\n.events-list::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.events-list::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n\n.holder {\n  background-color: rgba(90, 94, 76, 0.4);\n  width: 100%;\n  height: 225px;\n  overflow: hidden;\n  padding: 10px;\n  font-family: Helvetica;\n}\n\n.holder .mask {\n  position: relative;\n  left: 0px;\n  top: 10px;\n  width: 100%;\n  height: 240px;\n  overflow: hidden;\n}\n\n.holder ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\nfooter {\n  float: left;\n  width: 100%;\n  background: #2d321f;\n  text-align: center;\n  color: #fff;\n}\n\nfooter p {\n  margin-bottom: 0px;\n  padding: 8px 0;\n  font-size: 12px;\n  font-family: sans-serif;\n  letter-spacing: 0.4px;\n}\n\n.nav {\n  justify-content: space-between;\n}\n\n.service-list {\n  float: left;\n  width: 100%;\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n\n.ima1 {\n  float: left;\n  width: 15%;\n}\n\n.ima3 {\n  float: right;\n  width: 15%;\n}\n\n.ima2-logo {\n  width: 70%;\n  margin: 0 auto;\n  display: table;\n  float: left;\n  text-align: center;\n}\n\nfooter {\n  float: left;\n  width: 100%;\n}\n\n.acc-info {\n  text-align: center;\n  border-bottom: 1px solid #721a0c;\n  padding: 8px 0 0 0;\n}\n\n.acc-info p {\n  margin-bottom: 8px;\n  text-align: left;\n  padding-left: 20px;\n}\n\np.Date_cls {\n  margin: 0;\n  font-weight: bold;\n  color: #721a0c;\n  float: right;\n  width: 100%;\n  background: #eee;\n  padding: 4px 4px;\n}\n\np.Date_cls span {\n  color: #333;\n  padding-left: 15px;\n  font-weight: 500;\n}\n\nfooter {\n  position: relative !important;\n  bottom: 0 !important;\n}\n\n.ul-new li {\n  background: #bc9753 !important;\n}\n\n.edata {\n  padding: 5px 10px !important;\n  margin: 0px !important;\n}\n\n.right {\n  padding-left: 10px !important;\n}\n\nspan.event_time {\n  width: 20% !important;\n}\n\n.main-card {\n  min-height: 480px;\n}\n\n.no-schedule {\n  text-align: center !important;\n}\n\n.no-schedule h3 {\n  color: #fff;\n  text-align: center;\n  margin-top: 0.5rem;\n}\n\n.not-available {\n  font-size: 15px;\n  color: brown;\n  text-align: center;\n}");

/***/ }),

/***/ "O8jy":
/*!***********************************************************************!*\
  !*** ./src/app/main/trg-battalion/dashboard/dashboard.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.img_class {\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 2px solid #CCC;\n}\n\nul {\n  margin: 0px;\n  padding: 0px;\n}\n\n.hding h4 {\n  background: #eee;\n  padding: 7px 10px;\n  font-size: 16px;\n  color: #721a0c;\n  font-weight: 600;\n  margin: 0px 0px 10px 0px;\n  border-radius: 3px;\n  line-height: 24px;\n}\n\n.cap-img img {\n  width: 100%;\n}\n\n.col-md-9.hding p {\n  text-align: justify;\n  margin-bottom: 4px;\n}\n\n/*cgart css*/\n\nul.three {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 0px;\n}\n\nli {\n  list-style-type: none;\n}\n\n.director {\n  width: 200px;\n  background: #bc9753;\n  padding: 10px;\n  text-align: center;\n  margin: 0 auto;\n  display: table;\n  border: 2px solid #721a0c;\n  box-shadow: 2px 2px 4px #ccc;\n}\n\n.director a {\n  width: 100%;\n  float: left;\n  color: #fff;\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n  margin-top: 20px;\n  text-transform: capitalize;\n}\n\nspan.photu {\n  width: 65px;\n  height: 65px;\n  background: #721a0c;\n  border-radius: 50%;\n  top: 0;\n  margin: 0 auto -32px;\n  border: 2px solid #bc9753;\n  display: table;\n  text-align: center;\n  position: relative;\n  z-index: 9;\n}\n\n.space {\n  content: \"\";\n  display: block;\n  position: relative;\n  width: 4px;\n  height: 85px;\n  background: #bc9753;\n  margin: -4px auto 0;\n}\n\n.space2 {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 4px;\n  height: 435px;\n  background: #bc9753;\n  left: -60px;\n}\n\n.space3 {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 4px;\n  height: 435px;\n  background: #bc9753;\n  right: -60px;\n}\n\n.two-sec {\n  display: flex;\n  justify-content: space-between;\n}\n\n.space-parent {\n  margin: 0 auto;\n  position: relative;\n  display: table;\n}\n\n.left .photu {\n  width: 65px;\n  height: 65px;\n  background: #721a0c;\n  border-radius: 50%;\n  top: 8%;\n  margin: 0 auto -32px;\n  border: 2px solid #bc9753;\n  display: table;\n  text-align: center;\n  position: relative;\n  z-index: 9;\n  left: 55%;\n}\n\n.left a, .right a {\n  margin: 0px !important;\n}\n\n.right .photu {\n  width: 65px;\n  height: 65px;\n  background: #721a0c;\n  border-radius: 50%;\n  top: 8%;\n  margin: 0 auto -32px;\n  border: 2px solid #bc9753;\n  display: table;\n  text-align: center;\n  position: relative;\n  z-index: 9;\n  right: 52%;\n}\n\n.spaceverti {\n  position: absolute;\n  width: 208px;\n  height: 4px;\n  background: #bc9753;\n  content: \"\";\n  display: block;\n  right: -244px;\n  top: -29px;\n  z-index: -1;\n}\n\n.verticle {\n  position: relative;\n}\n\n.verticle_right .spacevertir {\n  position: absolute;\n  width: 224px;\n  height: 4px;\n  background: #bc9753;\n  content: \"\";\n  display: block;\n  z-index: -1;\n  left: -240px;\n  top: -29px;\n}\n\n.verticle_right {\n  position: relative;\n}\n\n.top_border {\n  width: 80%;\n  height: 4px;\n  content: \"\";\n  background: #bc9753;\n  margin: 0px auto auto;\n  position: relative;\n}\n\n.director-new {\n  width: 200px;\n  background: #bc9753;\n  padding: 10px;\n  text-align: center;\n}\n\n.space4 {\n  content: \"\";\n  background: #bc9753;\n  width: 4px;\n  height: 434px;\n  z-index: -1;\n  position: absolute;\n}\n\n.space5 {\n  content: \"\";\n  background: #bc9753;\n  width: 4px;\n  height: 433px;\n  z-index: -1;\n  position: absolute;\n  right: 0;\n}\n\n.ert-sa {\n  content: \"\";\n  width: 41px;\n  height: 4px;\n  background: #bc9753;\n  position: absolute;\n  left: -15%;\n  top: -36px;\n  z-index: -1;\n}\n\n.paraa {\n  position: relative;\n}\n\n.ert-sa2 {\n  content: \"\";\n  width: 72px;\n  height: 4px;\n  background: #bc9753;\n  position: absolute;\n  left: -23%;\n  top: -36px;\n  z-index: -1;\n}\n\n.ert-sa3 {\n  content: \"\";\n  width: 50px;\n  height: 4px;\n  background: #bc9753;\n  position: absolute;\n  right: -15%;\n  top: -36px;\n  z-index: -1;\n}\n\nli.director.sing {\n  height: 53px;\n  display: flex;\n  align-items: center;\n}\n\n.director.singiii {\n  height: 76px;\n  align-items: center;\n  display: flex;\n}\n\n.director.last-of {\n  height: 150px;\n}\n\na.top-bod {\n  border-top: 1px solid #fff;\n  margin-top: 0px;\n  padding-top: 4px;\n}\n\n.dev {\n  position: relative;\n}\n\n.inerr {\n  position: absolute;\n  right: 0;\n  top: -197px;\n  right: 15%;\n}\n\n.inerr:before {\n  content: \"\";\n  display: block;\n  width: 252px;\n  height: 4px;\n  background: #bc9753;\n  top: 60%;\n  right: 67%;\n  position: absolute;\n  z-index: -1;\n}\n\n.new-boder {\n  border: 1px solid #ccc;\n  padding: 15px 15px 0 15px;\n}\n\n.new_row.container {\n  margin-top: 25px;\n}\n\n.parent_row {\n  display: flex;\n  margin-bottom: 10px;\n}\n\n.name_cls h5 {\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 0px;\n  width: 100%;\n}\n\n.name_cls p {\n  margin: 0;\n  font-size: 14px;\n}\n\n.name_cls {\n  padding-left: 10px;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.scrollar {\n  height: 282px;\n  overflow-y: scroll;\n}\n\nimg.org_img {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  border: 2px solid #721a0c;\n}\n\n.slide.slick-slide img {\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  height: 345px !important;\n}\n\n.sp1 {\n  content: \"\";\n  display: block;\n  width: 152px;\n  height: 4px;\n  background: #bc9753;\n  white-space: normal;\n  position: absolute;\n  top: 65px;\n  left: -152px;\n}");

/***/ }),

/***/ "OG5R":
/*!******************************************************************!*\
  !*** ./src/app/main/trg-battalion/dashboard/dashboard.module.ts ***!
  \******************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "chhm");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
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
    },
    {
        path: 'add-card',
        loadChildren: function () { return __webpack_require__.e(/*! import() | dashboard-dashboard-edit-dashboard-edit-module */ "dashboard-dashboard-edit-dashboard-edit-module").then(__webpack_require__.bind(null, /*! ../dashboard/dashboard-edit/dashboard-edit.module */ "5dC/")).then(function (m) { return m.DashboardEditModule; }); }
    },
    {
        path: 'view-card',
        loadChildren: function () { return __webpack_require__.e(/*! import() | dashboard-dashboard-edit-dashboard-edit-module */ "dashboard-dashboard-edit-dashboard-edit-module").then(__webpack_require__.bind(null, /*! ../dashboard/dashboard-edit/dashboard-edit.module */ "5dC/")).then(function (m) { return m.DashboardEditModule; }); }
    }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "RWr+":
/*!**********************************************************!*\
  !*** ./src/app/main/admin/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "2YB+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
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
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"]
                // MatProgressBarModule, MatMenuModule, ChartsModule,/* NgxChartsModule */
                // MatIconModule, MatRadioModule, /* NgxChartsModule, */
                // MatButtonModule, MatDividerModule, MatChipsModule, MatListModule, 
                // SharedPipesModule,
                // MatFormFieldModule, FlexLayoutModule,
                // MatInputModule, MatTabsModule,
                // MatRippleModule, MatSelectModule, MatTableModule, MatTooltipModule, MatPaginatorModule, MatDatepickerModule
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "ZPuV":
/*!*************************************************************************!*\
  !*** ./src/app/main/academic-depart/dashboard/dashboard.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "bVEx":
/*!*************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/dashboard/dashboard.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul {\n  padding: 0;\n  margin: 0;\n}\n\nimg.org_img {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  border: 2px solid #721a0c;\n}\n\nul.three {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 30px;\n  margin-top: -5px;\n}\n\nli {\n  list-style-type: none;\n}\n\n.director {\n  width: 200px;\n  background: #bc9753;\n  padding: 10px;\n  text-align: center;\n  margin: 0 auto;\n  display: table;\n  border: 2px solid #721a0c;\n  box-shadow: 2px 2px 4px #ccc;\n}\n\n.director a {\n  width: 100%;\n  float: left;\n  color: #fff;\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n  margin-top: 20px;\n  text-transform: capitalize;\n}\n\nspan.photu {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  background: #721a0c;\n  top: 0;\n  margin: 0 auto -32px;\n  display: table;\n  text-align: center;\n  position: relative;\n  z-index: 9;\n}\n\n.space {\n  content: \"\";\n  display: block;\n  position: relative;\n  width: 4px;\n  height: 85px;\n  background: #bc9753;\n  margin: 0 auto;\n}\n\n.space2 {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 4px;\n  height: 439px;\n  background: #bc9753;\n  left: -60px;\n}\n\n.space3 {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 4px;\n  height: 439px;\n  background: #bc9753;\n  right: -60px;\n}\n\n.two-sec {\n  display: flex;\n  justify-content: space-between;\n}\n\n.space-parent {\n  margin: 0 auto;\n  position: relative;\n  display: table;\n}\n\n.left_new .photu {\n  width: 65px;\n  height: 65px;\n  background: #721a0c;\n  border-radius: 50%;\n  top: 8%;\n  margin: 0 auto -32px;\n  display: table;\n  text-align: center;\n  position: relative;\n  z-index: 9;\n  left: 55%;\n}\n\n.left_new a, .right_new a {\n  margin: 0px !important;\n}\n\n.right_new .photu {\n  width: 65px;\n  height: 65px;\n  background: #721a0c;\n  border-radius: 50%;\n  top: 8%;\n  margin: 0 auto -32px;\n  display: table;\n  text-align: center;\n  position: relative;\n  z-index: 9;\n  right: 52%;\n}\n\n.spaceverti {\n  position: absolute;\n  width: 208px;\n  height: 4px;\n  background: #bc9753;\n  content: \"\";\n  display: block;\n  right: -244px;\n  top: -29px;\n}\n\n.verticle {\n  position: relative;\n}\n\n.verticle_right .spacevertir {\n  position: absolute;\n  width: 224px;\n  height: 4px;\n  background: #bc9753;\n  content: \"\";\n  display: block;\n  left: -240px;\n  top: -29px;\n}\n\n.verticle_right {\n  position: relative;\n}\n\n.top_border {\n  width: 100%;\n  height: 4px;\n  content: \"\";\n  background: #bc9753;\n  margin: 63px 0px 0;\n  position: relative;\n}\n\n.director-new {\n  width: 200px;\n  background: #bc9753;\n  padding: 10px;\n  text-align: center;\n}\n\n.space4 {\n  content: \"\";\n  background: #bc9753;\n  width: 4px;\n  height: 424px;\n  position: absolute;\n}\n\n.space5 {\n  content: \"\";\n  background: #bc9753;\n  width: 4px;\n  height: 424px;\n  position: absolute;\n  right: 0;\n}\n\n.ert-sa {\n  content: \"\";\n  width: 41px;\n  height: 4px;\n  background: #bc9753;\n  position: absolute;\n  left: -15%;\n  top: 74px;\n}\n\n.paraa {\n  position: relative;\n}\n\n.ert-sa2 {\n  content: \"\";\n  width: 72px;\n  height: 4px;\n  background: #bc9753;\n  position: absolute;\n  left: -23%;\n  top: 74px;\n}\n\n.ert-sa3 {\n  content: \"\";\n  width: 50px;\n  height: 4px;\n  background: #bc9753;\n  position: absolute;\n  right: -15%;\n  top: 74px;\n}\n\nli.director.sing {\n  display: flex;\n  align-items: center;\n}\n\n.director.singiii {\n  align-items: center;\n  display: flex;\n}\n\n.director.last-of {\n  height: 150px;\n}\n\na.top-bod {\n  border-top: 1px solid #fff;\n  margin-top: 0px;\n  padding-top: 4px;\n}\n\na.top-bod {\n  margin-top: 5px !important;\n}");

/***/ }),

/***/ "chhm":
/*!*********************************************************************!*\
  !*** ./src/app/main/trg-battalion/dashboard/dashboard.component.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "lc+E");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss */ "O8jy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_links_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/links.module */ "Uhg6");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
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
    function DashboardComponent(spinner, dialog, _trg, admin, service, cdref, router) {
        this.spinner = spinner;
        this.dialog = dialog;
        this._trg = _trg;
        this.admin = admin;
        this.service = service;
        this.cdref = cdref;
        this.router = router;
        this.IP = app_links_module__WEBPACK_IMPORTED_MODULE_6__["Links"].IP;
        this.slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 3000, "arrows": true, };
        this.imaActivities = [];
        this.activities = [];
        this.Myhistory = [];
        this.Myimage = [];
        this.bnCdr = {};
        this.aq = {};
        this.coyCmdrs = [];
        this.battalionName = '';
        this.userDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        console.log("user details: ", this.userDetails.name);
        this.bnId = this.userDetails.battalionId;
        this.battalionsDetails = this.userDetails.battalion;
        // this.battalionName = this.userDetails.
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.cdref.detectChanges();
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        // this.battalionName = JSON.parse(localStorage.getItem('battalionDetails')).name;
        this.getHistoryList();
        this.getOrganizationMembers();
        this.getGallantryList();
        this.getPerformanceList();
        this.getActivities();
        this.getCompanyByBattalion();
        this.cdref.detectChanges();
    };
    DashboardComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/id.png";
    };
    DashboardComponent.prototype.getHistoryList = function () {
        var _this = this;
        // this.spinner.show();
        this._trg.getHistoryActive(this.battalionsDetails.id).subscribe(function (res) {
            console.log("Battalion History", res);
            if (res.status == "OK") {
                _this.historyList = res.object;
                _this.Myhistory = _this.historyList.description;
                _this.Myimage = _this.historyList.image;
                _this.battalionName = res.object.battalionType.name;
                // console.log(this.Myhistory+"juned done");
                _this.cdref.detectChanges();
            }
            _this.spinner.hide();
        }, function (err) {
            _this.service.openSnackbar('Error Occured.');
            _this.spinner.hide();
        });
    };
    DashboardComponent.prototype.getOrganizationMembers = function () {
        var _this = this;
        this.admin.getTRGBattalionList(this.battalionsDetails.id, 1).subscribe(function (res) {
            console.log('Organization chart');
            console.log(res);
            var data = res.object;
            data.find(function (el) {
                if (el.battalionPost.id == 1) {
                    _this.aq = el;
                }
                else if (el.battalionPost.id == 2) {
                    _this.bnCdr = el;
                }
                else if (el.battalionPost.id == 3) {
                    _this.coyCmdrs.push(el);
                }
            });
        });
    };
    // tittle ="dj"
    DashboardComponent.prototype.getCompanyByBattalion = function () {
        var _this = this;
        this._trg.getCompanies(this.battalionsDetails.id).subscribe(function (res) {
            console.log("Get Companies: ", res);
            if (res.status == 'OK') {
                _this.companyList = res.object;
                _this.MyName = _this.companyList[0].name;
                _this.MyName1 = _this.companyList[1].name;
                _this.MyName2 = _this.companyList[2].name;
                // this.MyName3 = this.companyList[3].name;
                _this.abc = _this.MyName;
                _this.abc1 = _this.MyName1;
                _this.abc2 = _this.MyName2;
                //  this.abc3 = this.MyName3;
                console.log(_this.abc, "companyList.>>>>>>>>");
                console.log(_this.abc1, "companyList.>>>>>>>>");
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
    DashboardComponent.prototype.getGallantryList = function () {
        var _this = this;
        // this.spinner.show();
        this._trg.getGallantryList(this.battalionsDetails.id, 1).subscribe(function (res) {
            console.log('GALLANTRY AWARDIES: ', res);
            if (res.status == "1") {
                _this.awardeesList = res.List;
                _this.cdref.detectChanges();
            }
            _this.spinner.hide();
        }, function (err) {
            _this.service.openSnackbar('Error Occured.');
            _this.spinner.hide();
        });
    };
    DashboardComponent.prototype.getPerformanceList = function () {
        var _this = this;
        // this.spinner.show();
        this._trg.getPerformanceList(this.battalionsDetails.id, 1).subscribe(function (res) {
            console.log("PERFORMANCE OF HIGHLIGHT: ", res);
            if (res.status == "OK") {
                _this.performanceList = res.object;
                _this.cdref.detectChanges();
            }
            _this.spinner.hide();
        }, function (err) {
            _this.service.openSnackbar('Error Occured.');
            _this.spinner.hide();
        });
    };
    DashboardComponent.prototype.getActivities = function () {
        var _this = this;
        this._trg.getGcActivities(this.battalionsDetails.id, 2).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.activities = res.object;
                _this.cdref.detectChanges();
            }
            _this.spinner.hide();
        }, function (err) {
            console.log(JSON.stringify(err));
            _this.spinner.hide();
        });
    };
    DashboardComponent.prototype.edit = function (ele) {
        console.log(ele, "dj");
        this.router.navigate(['main/trg-battalion/dashboard/view-card'], { queryParams: { id: ele } });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    DashboardComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true },] }]
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_8__["TrgBattalionService"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "dXj/":
/*!***********************************************************************!*\
  !*** ./src/app/main/adjutant-branch/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "9pst");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss */ "bVEx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
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
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.ctorParameters = function () { return []; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "easW":
/*!*****************************************************************!*\
  !*** ./src/app/main/gs-branch/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "fc72");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss */ "MPh9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_links_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/links.module */ "Uhg6");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
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
    function DashboardComponent(service, spinner, sharedService) {
        this.service = service;
        this.spinner = spinner;
        this.sharedService = sharedService;
        this.IP = app_links_module__WEBPACK_IMPORTED_MODULE_3__["Links"].IP;
        this.bgs = {};
        this.colgs = {};
        this.oicit = {};
        this.securityOfficer = {};
        this.pro = {};
        this.gso1coord = {};
        this.gso1sd = {};
        this.gso1int = {};
        this.gso2stats = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.getAllMembers();
    };
    DashboardComponent.prototype.getAllMembers = function () {
        var _this = this;
        this.service.getAllGSBranchMembers(1).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                var ob = res.object;
                ob.find(function (el) {
                    if (el.gsPosition.id == 1) {
                        _this.bgs = el;
                    }
                    if (el.gsPosition.id == 2) {
                        _this.colgs = el;
                    }
                    if (el.gsPosition.id == 3) {
                        _this.gso1coord = el;
                    }
                    if (el.gsPosition.id == 4) {
                        _this.gso1int = el;
                    }
                    if (el.gsPosition.id == 5) {
                        _this.gso1sd = el;
                    }
                    if (el.gsPosition.id == 6) {
                        _this.gso2stats = el;
                    }
                    if (el.gsPosition.id == 7) {
                        _this.oicit = el;
                    }
                    if (el.gsPosition.id == 8) {
                        _this.pro = el;
                    }
                    if (el.gsPosition.id == 9) {
                        _this.securityOfficer = el;
                    }
                });
            }
        });
    };
    DashboardComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/id.png";
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "eqhG":
/*!********************************************************************!*\
  !*** ./src/app/main/adjutant-branch/dashboard/dashboard.module.ts ***!
  \********************************************************************/
/*! exports provided: DashBoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardModule", function() { return DashBoardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "dXj/");
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], DashBoardModule);
    return DashBoardModule;
}());



/***/ }),

/***/ "fc72":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/gs-branch/dashboard/dashboard.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\" style=\"margin-bottom: 50px;\">\r\n            <div class=\"conta-box\" style=\"margin: 0px auto 0;width: 100%;display: table;\">\r\n                <ul>\r\n                    <span class=\"photu\"><img [src]=\"IP+bgs.image\" (error)=\"noImg($event)\" class=\"org_img\"></span>\r\n                    <li class=\"director\">\r\n                        <a href=\"javascript:void(0)\">BGS<br> <span>({{bgs?.gsRank || '-'}} {{bgs?.name || '-'}}\r\n                                {{bgs?.award ||\r\n                                ''}})</span> <br> <span>\r\n                                <!-- Since Jan 2020 -->\r\n                            </span></a>\r\n                    </li>\r\n\r\n                    <div class=\"space\" style=\"height: 100px !important;\"></div>\r\n                    <div class=\"dev\">\r\n                    </div>\r\n                </ul>\r\n\r\n                <div class=\"align\">\r\n                    <div class=\"top_border\">\r\n\r\n                    </div>\r\n\r\n                    <ul class=\"three\">\r\n                        <li>\r\n                            <div class=\"space\"></div>\r\n                            <span class=\"photu\"><img [src]=\"IP+colgs.image\" (error)=\"noImg($event)\" class=\"org_img\"></span>\r\n                            <div class=\"director\" style=\"height: 125px;\">\r\n                                <a href=\"javascript:void(0)\">COL GS <br> <span> ({{colgs?.gsRank || '-'}} {{colgs?.name\r\n                                        || '-'}}\r\n                                        {{colgs?.award || '-'}})</span> <br> \r\n                                        <!-- <span> Since Feb 2019 </span> <br> <span>Reliver Posted </span> -->\r\n                                </a>\r\n                            </div>\r\n\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"space\"></div>\r\n                            <span class=\"photu\"><img [src]=\"IP+oicit.image\" (error)=\"noImg($event)\" class=\"org_img\"></span>\r\n                            <div class=\"director singiii\">\r\n                                <a href=\"javascript:void(0)\">OIC IT <span> ({{oicit?.gsRank || '-'}} {{oicit?.name ||\r\n                                        '-'}}\r\n                                        {{oicit?.award || ''}})</span> <br>\r\n                                         <!-- <span> Since Aug 2020</span> -->\r\n                                </a>\r\n                            </div>\r\n\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"space\"></div>\r\n                            <span class=\"photu\"><img [src]=\"IP+securityOfficer.image\" (error)=\"noImg($event)\"\r\n                                    class=\"org_img\"></span>\r\n                            <div class=\"director singiii\">\r\n                                <a href=\"javascript:void(0)\">SECURITY OFFR <br> <span> ({{securityOfficer?.gsRank ||\r\n                                        '-'}}\r\n                                        {{securityOfficer?.name || '-'}} {{securityOfficer?.award || ''}})</span> <br>\r\n                                    <!-- <span>COL 152 Inf BN\r\n                                        (TA) (SIKH) </span> <br> <span>\r\n                                        Unit arr Since Sep 2018\r\n                                    </span>  -->\r\n                                </a>\r\n                            </div>\r\n\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"space\"></div>\r\n                            <span class=\"photu\"><img [src]=\"IP+pro.image\" (error)=\"noImg($event)\" class=\"org_img\"></span>\r\n                            <div class=\"director singiii\">\r\n                                <a href=\"javascript:void(0)\">PRO <br> <span> ({{pro?.gsRank || '-'}} {{pro?.name ||\r\n                                        '-'}} {{pro?.award ||\r\n                                        ''}})</span> <br> \r\n                                        <!-- <span> Since Oct 2020 </span> -->\r\n                                </a>\r\n                            </div>\r\n\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class=\"space\" style=\"position: relative; left: -418px; z-index: -1;\"> </div>\r\n                <div class=\"align\">\r\n                    <div class=\"top_border\">\r\n\r\n                    </div>\r\n                    <ul class=\"three\">\r\n                        <li>\r\n                            <div class=\"space\"></div>\r\n                            <span class=\"photu\"><img [src]=\"IP+gso1coord.image\" (error)=\"noImg($event)\"\r\n                                    class=\"org_img\"></span>\r\n                            <div class=\"director singiii\">\r\n                                <a href=\"javascript:void(0)\">GSO-1 (COORD) <br> <span> ({{gso1coord?.gsRank || '-'}}\r\n                                        {{gso1coord?.name ||\r\n                                        '-'}} {{gso1coord?.award || ''}})</span> <br>\r\n                                    <!-- <span>\r\n                                        Since Oct 2020\r\n                                    </span> -->\r\n                                </a>\r\n                            </div>\r\n\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"space\"></div>\r\n                            <span class=\"photu\"><img [src]=\"IP+gso1sd.image\" (error)=\"noImg($event)\"\r\n                                    class=\"org_img\"></span>\r\n                            <div class=\"director singiii\">\r\n                                <a href=\"javascript:void(0)\">GSO-1 (SD & Security) & OIC POP <br> <span>\r\n                                        ({{gso1sd?.gsRank || '-'}}\r\n                                        {{gso1sd?.name || '-'}} {{gso1sd?.award || ''}})</span> <br>\r\n                                    <!-- <span>\r\n                                        Since Oct 2020\r\n                                    </span> -->\r\n                                </a>\r\n                            </div>\r\n\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"space\"></div>\r\n                            <span class=\"photu\"><img [src]=\"IP+gso1int.image\" (error)=\"noImg($event)\"\r\n                                    class=\"org_img\"></span>\r\n                            <div class=\"director singiii\">\r\n                                <a href=\"javascript:void(0)\">GSO-1 (INT) OIC Printing Press & OIC COVID Cell <br> <span>\r\n                                        ({{gso1int?.gsRank || '-'}} {{gso1int?.name || '-'}}\r\n                                        {{gso1int?.award || ''}})</span> <br>\r\n                                    <!-- <span>\r\n                                        Since Oct 2020\r\n                                    </span> -->\r\n                                </a>\r\n                            </div>\r\n\r\n                        </li>\r\n                        <li>\r\n                            <div class=\"space\"></div>\r\n                            <span class=\"photu\"><img [src]=\"IP+gso2stats.image\" (error)=\"noImg($event)\"\r\n                                    class=\"org_img\"></span>\r\n                            <div class=\"director singiii\">\r\n                                <a href=\"javascript:void(0)\">GSO-2 (STATS)<br> <span> ({{gso2stats?.gsRank || '-'}}\r\n                                        {{gso2stats?.name\r\n                                        || '-'}}\r\n                                        {{gso2stats?.award || ''}})</span> <br>\r\n                                    <!-- <span>\r\n                                        Since Oct 2020\r\n                                    </span> -->\r\n                                </a>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      \r\n    </div>\r\n    </div>");

/***/ }),

/***/ "lc+E":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-battalion/dashboard/dashboard.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Dashboard <span class=\"sub-menu1\"> </span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 cap-img\">\r\n                <img [src]=\"IP+Myimage\">\r\n            </div>\r\n            <div class=\"col-md-9 hding\">\r\n                <h4>History of the battalion</h4>\r\n                <p>{{Myhistory}}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-12 hding text-center\">\r\n                <h4 style=\"margin-top: 20px;\">{{userDetails.name}} Battalion</h4>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n                <div class=\"conta-box\" style=\"margin: 0px auto 0;width: 100%;display: table;\">\r\n                    <ul>\r\n                        <span class=\"photu\"><img (error)=\"noImg($event)\" [src]=\"IP+bnCdr.image\" class=\"org_img\"></span>\r\n                        <li class=\"director\">\r\n                            <a href=\"javascript:void(0)\">BN Cdr <br> <span>{{bnCdr.name}}</span></a>\r\n                        </li>\r\n\r\n                        <div class=\"space\" style=\"height: 200px !important;\"></div>\r\n                        <div class=\"dev\">\r\n                            \r\n                            <div class=\"inerr\">\r\n                                <div class=\"sp1\"></div>\r\n                                <span class=\"photu\"><img (error)=\"noImg($event)\" [src]=\"IP+aq.image\"\r\n                                        class=\"org_img\"></span>\r\n                                <li class=\"director\">\r\n                                    <a href=\"javascript:void(0)\">AQ <br> <span>{{aq.name}}</span></a>\r\n                                </li>\r\n                            </div>\r\n                        </div>\r\n                    </ul>\r\n\r\n                    <div class=\"align\">\r\n                        <div class=\"top_border\"></div>\r\n\r\n                        <ul class=\"three\">\r\n                            <li>\r\n                                <div class=\"space\"></div>\r\n                                <span class=\"photu\"><img (error)=\"noImg($event)\" [src]=\"IP+coyCmdrs[0]?.image\"\r\n                                        class=\"org_img\"></span>\r\n                                <div class=\"director\">\r\n                                    <a href=\"#\">{{abc}} Cdr<br> <span>\r\n                                            {{coyCmdrs[0]?.name || \"-\"}}</span></a>\r\n                                </div>\r\n                            </li>\r\n                            <li>\r\n                                <div class=\"space\"></div>\r\n                                <span class=\"photu\"><img (error)=\"noImg($event)\" [src]=\"IP+coyCmdrs[1]?.image\"\r\n                                        class=\"org_img\"></span>\r\n                                <div class=\"director\">\r\n                                    <a href=\"#\">{{abc1}} Cdr<br> <span>\r\n                                            {{coyCmdrs[1]?.name || \"-\"}}</span></a>\r\n                                </div>\r\n                            </li>\r\n                            <li>\r\n                                <div class=\"space\"></div>\r\n                                <span class=\"photu\"><img (error)=\"noImg($event)\" [src]=\"IP+coyCmdrs[2]?.image\"\r\n                                        class=\"org_img\"></span>\r\n                                <div class=\"director\">\r\n                                    <a href=\"#\">{{abc2}} Cdr<br> <span>\r\n                                            {{coyCmdrs[2]?.name || \"-\"}}</span></a>\r\n                                </div>\r\n                            </li>\r\n                            <!-- <li>\r\n                                <div class=\"space\"></div>\r\n                                <span class=\"photu\"><img (error)=\"noImg($event)\" [src]=\"IP+coyCmdrs[3]?.image\"\r\n                                        class=\"org_img\"></span>\r\n                                <div class=\"director\">\r\n                                    <a href=\"#\">{{abc3}} Cdr<br> <span>\r\n                                            {{coyCmdrs[3]?.name || \"-\"}}</span></a>\r\n                                </div>\r\n                            </li> -->\r\n                        </ul>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"new_row container\">\r\n                    <div class=\"row\">\r\n                        <!-- <div class=\"col-md-3 hding new-boder\">\r\n                            <h4>Gallantry Awardees</h4>\r\n                            <div class=\"scrollar\">\r\n                                <div *ngFor=\"let n of awardeesList\" class=\"parent_row\">\r\n                                    <img  (error)=\"noImg($event)\" [src]=\"IP+n.image\" class=\"img_class\">\r\n                                    <div class=\"name_cls\">\r\n                                        <div>\r\n                                            <h5>{{n.rank}} {{n.name}}</h5> \r\n                                            <h6>{{n.company.name}}</h6>\r\n                                        </div>\r\n                                        <div>\r\n                                            <p>{{n.award}}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div> -->\r\n\r\n                        <!-- <div class=\"col-md-6 \">\r\n                            <div class=\"hding new-boder\">\r\n                                <h4>OC Activities and Programmes</h4>\r\n                                <div id=\"demo\" *ngIf=\"activities.length\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                                    <div class=\"w3-content w3-section img-slider\" style=\"max-width: 100%;height: auto;\">\r\n                                        <div class=\"carousel-inner\">\r\n                                            <ng-container *ngIf=\"activities.length\">\r\n                                                <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\"\r\n                                                    [config]=\"slideConfig\">\r\n                                                    <div  ngxSlickItem *ngFor=\"let b of activities\" class=\"slide\">\r\n                                                        <img [src]=\"IP+b.image\" alt=\"\" width=\"100%\" height=\"100%\" >\r\n                                                    </div>\r\n                                                </ngx-slick-carousel>\r\n                                            </ng-container>\r\n                                        </div>\r\n                                        <ng-container *ngIf=\"!activities.length\">\r\n                                            <h4 class=\"no_data\">No activities are added!</h4>\r\n                                        </ng-container>\r\n\r\n                                    </div>\r\n\r\n                                  \r\n\r\n                                </div>\r\n\r\n\r\n\r\n                            </div>\r\n                        </div> -->\r\n\r\n\r\n                        <div class=\"col-md-3 hding new-boder\" *ngFor=\"let a of performanceList\">\r\n                            <h4>Performance Highlights  <mat-icon (click)=\"edit(a.id)\">\r\n                                edit\r\n                            </mat-icon></h4>\r\n                          \r\n                            <div class=\"scrollar\">\r\n                                <div   class=\"parent_row\">\r\n                                    <!-- <img (error)=\"noImg($event)\"  [src]=\"a.image\" class=\"img_class\"> -->\r\n                                    <div class=\"name_cls border\">\r\n                                        <h5>{{a.company}}</h5>\r\n                                        <p>{{a.description}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "nN+O":
/*!**************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/dashboard/dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "7fRp");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss */ "Mxsg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/auth-service/auth.service */ "V7IE");
/* harmony import */ var app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/gc/gc.service */ "yuBT");
/* harmony import */ var app_main_shared_component_event_details_dialog_event_details_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/shared-component/event-details-dialog/event-details-dialog.component */ "Xr3O");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_service_home_home_page_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/home/home-page.service */ "LZSk");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
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












var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, authService, dialog, service, homePageService, sharedService, localID, cdref) {
        this.router = router;
        this.authService = authService;
        this.dialog = dialog;
        this.service = service;
        this.homePageService = homePageService;
        this.sharedService = sharedService;
        this.cdref = cdref;
        this.isCollapsed = true;
        this.isCollapsed2 = true;
        this.isCollapsed3 = true;
        this.isCollapsed4 = true;
        this.myDate = new Date();
        this.CLec = [];
        this.counsellor = {};
        this.UpcomingEvent = [];
        this.Weeklyschedule = [];
        this.assignments = [];
        this.localID = localID;
        this.userDetails = JSON.parse(localStorage.getItem("loginResponse")).object;
        // console.log("USER DETAILS: S",this.userDetails);
        this.battalionId = this.userDetails.battalian.id;
        this.companyId = this.userDetails.company.id;
        this.termId = this.userDetails.term;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (!localStorage.length) {
            this.router.navigate(['/pages']);
        }
        this.cadetDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.getAllCLec();
        this.getUpcomingEvent();
        this.getDailySchedule();
        this.getAssignmentTasks();
        this.getAllCounsellor();
    };
    DashboardComponent.prototype.getAllCLec = function () {
        var _this = this;
        this.service.getAllCLec(2, true).subscribe(function (res) {
            // console.log("===============C LEC===================");
            // console.log(res)
            // console.log("=======================================");
            if (res.status == "OK") {
                _this.CLec = res.object;
                _this.cdref.detectChanges();
            }
            else { }
        });
    };
    DashboardComponent.prototype.getAllCounsellor = function () {
        var _this = this;
        this.service.getAllCounsellor(this.battalionId, this.companyId, 1).subscribe(function (res) {
            if (res.status == "OK") {
                if (res.object) {
                    _this.counsellor = res.object[0];
                    _this.cdref.detectChanges();
                }
            }
            else { }
        }, function (err) {
        });
    };
    DashboardComponent.prototype.getUpcomingEvent = function () {
        var _this = this;
        this.service.getUpcomingEvent(true).subscribe(function (res) {
            // console.log("Upcoming Events for GC: ", res)
            // console.log("===============UPCOMING EVENTS===================");
            // console.log(res)
            // console.log("=======================================");
            if (res.status == "1") {
                _this.UpcomingEvent = res.List;
                _this.cdref.detectChanges();
            }
            else {
                // this.sharedService.openSnackbar(res.msg)
            }
        }, function (err) {
            _this.sharedService.openSnackbar("Some Error Occured.");
        });
    };
    DashboardComponent.prototype.getEveTime = function (e) {
        var dt = new Date(e);
        var hrs = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(dt, "HH", this.localID);
        var mnts = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(dt, "mm", this.localID);
        if (hrs == '00' && mnts == '00') {
            return '';
        }
        else {
            return hrs + mnts;
        }
    };
    DashboardComponent.prototype.openEventDetails = function (details) {
        this.dialog.open(app_main_shared_component_event_details_dialog_event_details_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EventDetailsDialogComponent"], {
            width: '600px', height: '400px',
            data: { type: 'event', title: "Event Details", details: details },
            disableClose: true
        });
    };
    DashboardComponent.prototype.getDailySchedule = function () {
        var _this = this;
        var data = {
            'battalianId': this.battalionId,
            'dt': new Date().toISOString(),
            'termId': this.termId
        };
        this.homePageService.getDailyPgme(data).subscribe(function (res) {
            // console.log("today program: ", res)
            if (res.status = "OK") {
                if (res.object) {
                    _this.Weeklyschedule = res.object.dailySchedule;
                    _this.cdref.detectChanges();
                }
                else {
                    _this.sharedService.openSnackbar('No Schedules for Today.');
                }
            }
            else {
                // this.sharedService.openSnackbar(res.message)
            }
        }, function (error) {
            _this.sharedService.openErrorSnackbarWithSeconds("Some Error Occured", 5);
        });
    };
    // getMyTask(){
    //   this.service.getAllCLec(2,true).subscribe(
    //     (res)=>{
    //       console.log(res)
    //       if(res.status="OK"){
    //         this.CLec=res.object;
    //       }else{}
    //     }
    //   )
    // }
    DashboardComponent.prototype.getAssignmentTasks = function () {
        var _this = this;
        this.service.getAssignments(this.cadetDetails.serviceId, this.cadetDetails.term, 'Paper 1', 'Military History').subscribe(function (res) {
            var _a;
            if (res.status == "OK") {
                if (res.object) {
                    // console.log(res);
                    (_a = _this.assignments).push.apply(_a, res.object);
                    _this.cdref.detectChanges();
                }
            }
        });
        this.service.getAssignments(this.cadetDetails.serviceId, this.cadetDetails.term, 'Paper 1', 'Military Geography').subscribe(function (res) {
            var _a;
            if (res.status == "OK") {
                if (res.object) {
                    (_a = _this.assignments).push.apply(_a, res.object);
                    _this.cdref.detectChanges();
                }
            }
        });
        this.service.getAssignments(this.cadetDetails.serviceId, this.cadetDetails.term, 'Paper 2', 'CAIR').subscribe(function (res) {
            var _a;
            if (res.status == "OK") {
                if (res.object) {
                    (_a = _this.assignments).push.apply(_a, res.object);
                    _this.cdref.detectChanges();
                }
            }
        });
        this.service.getAssignments(this.cadetDetails.serviceId, this.cadetDetails.term, 'Paper 2', 'BS').subscribe(function (res) {
            var _a;
            if (res.status == "OK") {
                if (res.object) {
                    (_a = _this.assignments).push.apply(_a, res.object);
                    _this.cdref.detectChanges();
                }
            }
        });
        this.service.getAssignments(this.cadetDetails.serviceId, this.cadetDetails.term, 'Paper 3', 'Science and Warfare').subscribe(function (res) {
            var _a;
            if (res.status == "OK") {
                if (res.object) {
                    (_a = _this.assignments).push.apply(_a, res.object);
                    _this.cdref.detectChanges();
                }
            }
        });
        this.service.getAssignments(this.cadetDetails.serviceId, this.cadetDetails.term, 'Paper 4', 'SWT').subscribe(function (res) {
            var _a;
            if (res.status == "OK") {
                if (res.object) {
                    (_a = _this.assignments).push.apply(_a, res.object);
                    _this.cdref.detectChanges();
                }
            }
        });
        this.service.getAssignments(this.cadetDetails.serviceId, this.cadetDetails.term, 'Paper 5', 'ECS').subscribe(function (res) {
            var _a;
            if (res.status == "OK") {
                if (res.object) {
                    (_a = _this.assignments).push.apply(_a, res.object);
                    _this.cdref.detectChanges();
                }
            }
        });
        this.service.getAssignments(this.cadetDetails.serviceId, this.cadetDetails.term, 'Paper 6', 'IT').subscribe(function (res) {
            var _a;
            if (res.status == "OK") {
                if (res.object) {
                    (_a = _this.assignments).push.apply(_a, res.object);
                    _this.cdref.detectChanges();
                }
            }
        });
    };
    DashboardComponent.prototype.openDoc = function (l) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "forcast Document", url: l.locationImage
            }
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_5__["GcService"] },
        { type: app_service_home_home_page_service__WEBPACK_IMPORTED_MODULE_9__["HomePageService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_5__["GcService"], app_service_home_home_page_service__WEBPACK_IMPORTED_MODULE_9__["HomePageService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"], String, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "nu6S":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/dashboard/dashboard.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"comming_soon\">\r\n    <img src=\"assets/img/page_under_construction.png\" class=\"under-construction-img\" alt=\"\">\r\n</div> -->\r\n<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">Academic Department<span class=\"sub-menu1\"> > Organization Chart</span> </h4>\r\n</div>\r\n<mat-card>\r\n    <div>\r\n        <img src=\"assets/img/academic-team-org-chart.png\" class=\"\" alt=\"\">\r\n    </div>\r\n\r\n</mat-card>\r\n");

/***/ }),

/***/ "pLeQ":
/*!***************************************************************!*\
  !*** ./src/app/main/admin/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "vIr0":
/*!***********************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/dashboard/dashboard.module.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "nN+O");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
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
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);