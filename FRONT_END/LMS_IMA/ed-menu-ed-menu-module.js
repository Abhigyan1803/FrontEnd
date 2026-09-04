(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ed-menu-ed-menu-module"],{

/***/ "+mTk":
/*!*********************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-menu/ed-menu.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div#top-bar {\n  padding: 5px 15px;\n}\n\n.ima-logo {\n  display: flex;\n  align-items: center;\n}\n\n.ima-logo .title {\n  text-transform: capitalize;\n  font-size: 15px;\n  margin: 0 0 0 15px;\n  color: #721a0c;\n  font-weight: bold;\n}\n\n.lms-logo {\n  align-items: center;\n  padding: 20px 0;\n}\n\n.logo-header {\n  color: #721a0c;\n  font-weight: bold;\n  font-size: 40px;\n  text-shadow: none;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  text-decoration: none;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0 !important;\n  clear: both;\n}\n\n.mat-new-inner {\n  padding: 0.875rem 0 !important;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #fff;\n  background: #721a0c;\n  padding: 5px 15px;\n  border-radius: unset;\n  font-weight: 600;\n}\n\n.mat-new-inner h4.card-heading {\n  color: #fff;\n  background: #a9823d;\n  text-align: center;\n  font-size: 20px;\n  padding: 10px 0;\n}\n\n.mat-card {\n  margin: 1rem;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  background-color: #fff;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.index-data {\n  display: flex;\n}\n\n.details h3 {\n  color: #721a0c;\n}\n\n.icon-img {\n  text-align: center;\n  width: 36%;\n}\n\n.icon-img img {\n  width: 100%;\n  height: auto;\n  max-width: 35%;\n}\n\n.service-id input#result {\n  border-left: none;\n  border-right: none;\n  border-top: none;\n}\n\n.list-group-item {\n  border: none;\n}\n\n.details .list-group-item {\n  border: none;\n  padding: 0.3rem 1.25rem;\n  color: #0000CD;\n  font-weight: 600;\n}\n\n.details .list-group-item a:hover {\n  color: #0000CD;\n  text-decoration: underline;\n}");

/***/ }),

/***/ "aPSD":
/*!****************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-menu/ed-menu.module.ts ***!
  \****************************************************************/
/*! exports provided: EdMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdMenuModule", function() { return EdMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ed_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ed-menu.component */ "jsde");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _ed_menu_component__WEBPACK_IMPORTED_MODULE_6__["EdMenuComponent"]
    },
];
var EdMenuModule = /** @class */ (function () {
    function EdMenuModule() {
    }
    EdMenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _ed_menu_component__WEBPACK_IMPORTED_MODULE_6__["EdMenuComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ]
        })
    ], EdMenuModule);
    return EdMenuModule;
}());



/***/ }),

/***/ "jsde":
/*!*******************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-menu/ed-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: EdMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdMenuComponent", function() { return EdMenuComponent; });
/* harmony import */ var _raw_loader_ed_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./ed-menu.component.html */ "mXFQ");
/* harmony import */ var _ed_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ed-menu.component.scss */ "+mTk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_links_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/links.module */ "Uhg6");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EdMenuComponent = /** @class */ (function () {
    function EdMenuComponent(EDossierService, adminservice, cdref, spinner, router) {
        this.EDossierService = EDossierService;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.spinner = spinner;
        this.router = router;
        this.Menu = [];
        this.Subtopic = [];
        this.IP = app_links_module__WEBPACK_IMPORTED_MODULE_4__["Links"].IP;
        this.LeadershipMatrix = "Leadership Matrix";
        this.AssessmentMatrix = "Assessment Matrix";
        this.Autobio = "AUTOBIOGRAPHY";
        this.Ssbreport = "SSB Report & NDA/ ACC Report";
        this.Personal = "Personal Details";
        this.drill = "drill";
    }
    EdMenuComponent.prototype.ngOnInit = function () {
        // document.getElementById("result").nodeValue = localStorage.getItem("e");
        document.getElementById("result").value = localStorage.getItem("e");
        document.getElementById("name").value = localStorage.getItem("i");
        document.getElementById("cp").value = localStorage.getItem("companyName");
        document.getElementById("bn").value = localStorage.getItem("battalionName");
        // (<HTMLInputElement>document.getElementById("tid")).value = localStorage.getItem("termId");
        document.getElementById("tname").value = localStorage.getItem("termName");
        document.getElementById("rk").value = localStorage.getItem("rank");
    };
    EdMenuComponent.prototype.ngAfterViewInit = function () {
        // this.getAssignments()
        this.getDossierMenu();
    };
    EdMenuComponent.prototype.getDossierMenu = function () {
        var _this = this;
        this.spinner.show();
        this.EDossierService.getEDossierMenu(1).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.Menu = res.object;
                // this.Heading = res.object[0].menuName;
                // this.Subtopic = res.object[0].subMenuList;
                // this.IconUrl = res.object[0].iconUrl;
                console.log(_this.Menu, "Menu");
                console.log(_this.Heading, "Heading");
                console.log(_this.Subtopic, "Subtopic");
                console.log(_this.IconUrl, "IconUrl");
                _this.spinner.hide();
                _this.cdref.detectChanges();
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.adminservice.openSnackbar("Some Error Occured.");
        });
    };
    EdMenuComponent.prototype.OnclickSubmenuLink = function (e, e1) {
        console.log(e);
        console.log(e.time, "menu");
        this.mainHead = e.time;
        // this.listHead= this.listHead.replace(' ','');
        // this.mainHead= this.mainHead.replace(' ','');
        console.log(this.mainHead, "mainHead");
        if (this.LeadershipMatrix == this.mainHead) {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/OverallAssessment/LeadershipMatrix']);
        }
        if (this.mainHead == 'PT') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/OverallAssessment/PT']);
        }
        if (this.mainHead == 'Assessment GC') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/OverallAssessment/assessment-gc']);
        }
        if (this.AssessmentMatrix == this.mainHead) {
            console.log(this.AssessmentMatrix);
            this.router.navigate(['/e-dossior/ed-content/Ed-index/ED-Campmarks/assessment-matrix']);
        }
        if (this.LeadershipMatrix == this.mainHead) {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/OverallAssessment/LeadershipMatrix']);
        }
        if (this.Autobio == this.mainHead) {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/ED-Cadetdetails/autobiography'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.Ssbreport == this.mainHead) {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/ED-Cadetdetails/ssbreport'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.Personal == this.mainHead) {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/ED-Cadetdetails/persnol'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        // if (this.mainHead == "Drill") {
        //   this.router.navigate(['/e-dossior/ed-content/Ed-index/OverallAssessment/drill']);
        // }
        if (this.mainHead == 'WT') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/OverallAssessment/WT'], { queryParams: { serviceId: localStorage.getItem("e") } });
        }
        if (this.mainHead == 'EQTN') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/OverallAssessment/eqtn'], { queryParams: { serviceId: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'Drill') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/OverallAssessment/drill'], { queryParams: { serviceId: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'Academic') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/OverallAssessment/intellectual'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'Club') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/Otherdetails/club'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'Hike') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/Otherdetails/hike'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'LVE') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/Otherdetails/lve'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'OBSN Sheet') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/Obsnsheet/obsn'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'Counselling All Terms') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/ed-Counselling'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'Interview Sheet') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/Interviews/interview-sheet'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'Initial Interview') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/Interviews/initial-interview'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'Begining Term Interview') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/Interviews/begining-interview'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'Mid Term Interview') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/Interviews/mid-interview'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'Special Interview') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/Interviews/special-interview'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'Service Subjects') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/OverallAssessment/service-subjects'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'Instructions for Interviews and Counselling') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/Interviews/instructions-interviews'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'Sports') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/OverallAssessment/sports'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
        if (this.mainHead == 'Assessment OQ Matrix') {
            this.router.navigate(['/e-dossior/ed-content/Ed-index/OverallAssessment/assessment-oq'], { queryParams: { Id: localStorage.getItem("e"), termId: localStorage.getItem("j") } });
        }
    };
    EdMenuComponent.ctorParameters = function () { return [
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_6__["EDossierService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    EdMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-ed-menu',
            template: _raw_loader_ed_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_ed_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_6__["EDossierService"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EdMenuComponent);
    return EdMenuComponent;
}());



/***/ }),

/***/ "mXFQ":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-menu/ed-menu.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <table *ngFor=\"let menu of Menu\">\r\n\t<tr>\r\n\t\t<td>{{menu.menuName}}</td>\r\n\t\t<td>-</td>\r\n\t</tr>\r\n\t<tr *ngFor=\"let subMenu of menu.subMenuList\">\r\n\t\t<td></td>\r\n\t\t<td> {{ subMenu.subMenuName }} </td>\r\n  \r\n\t</tr>\r\n</table> -->\r\n\r\n\r\n\r\n    <div class=\"links\" style=\"clear: both;\">\r\n        <div class=\"ng-star-inserted\">\r\n            <div class=\"mat-new-inner\">\r\n                <h4 class=\"card-heading\">E-Dossier</h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"container\">\r\n        <div class=\"mat-card mat-focus-indicator\">\r\n            <div class=\"service-id mb-2\">\r\n                <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"rank\">Ima No.</label>\r\n                          <input placeholder=\"No\"  type=\"text\" disabled id=\"result\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                      </div>  \r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"rank\">Rank</label>\r\n                          <input placeholder=\"Rank\"  type=\"text\" disabled id=\"rk\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"rank\">Name</label>\r\n                          <input placeholder=\"Name\"  type=\"text\" disabled id=\"name\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"rank\">Term</label>\r\n                          <input placeholder=\"Term\"  type=\"text\" disabled id=\"tname\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"rank\">Bn</label>\r\n                          <input placeholder=\"Bn\"  type=\"text\" disabled id=\"bn\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"rank\">Coy</label>\r\n                          <input placeholder=\"Coy\"  type=\"text\" disabled id=\"cp\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                        </div>\r\n                      </div>\r\n                      \r\n                    </div>\r\n                  </form>\r\n                \r\n                <!-- <div class=\"input_id col-md-6\">\r\n                    <b> IMA No. :</b> <input type=\"text\" disabled id=\"result\" class=\"form-control mt-2\">\r\n                </div>\r\n                <div class=\"input_id col-md-6\">\r\n                    <b> Name :</b> <input type=\"text\" disabled id=\"name\" class=\"form-control mt-2\">\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"mat-card mat-focus-indicator\">\r\n            <div class=\"index-list mt-3\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 index-data mb-5\" *ngFor=\"let menu of Menu\">\r\n                        <div class=\"icon-img\">\r\n                            <img src=\"{{IP+menu.iconUrl}}\" alt=\"Cadet Icon\">\r\n                        </div>\r\n                        <div class=\"details\">\r\n                            <h3><b>{{menu.menuName}}</b></h3>\r\n                            <ul *ngFor=\"let subMenu of menu.subMenuList; let index=index\" class=\"list-group\" >\r\n                                <li class=\"list-group-item\" >\r\n                                {{index+1}}.  <a (click)=\"OnclickSubmenuLink({name: menu.menuName, time: subMenu.subMenuName});\"\r\n                                        style=\"cursor: pointer;\" target=\"_blank\">\r\n                                        {{subMenu.subMenuName}}\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-6 index-data mb-5\">\r\n                <div class=\"icon-img\">\r\n                    <img src=\"http://65.2.78.179:8080/E-dossier-html/images/google-docs.png\" alt=\"Details Icon\">\r\n                </div>\r\n                <div class=\"details\">\r\n                    <h3><b>Other Details</b></h3>\r\n                    <ol>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/club.html\" target=\"_blank\">Club</a></li>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/Hike.html\" target=\"_blank\">Hike</a></li>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/Lve.html\" target=\"_blank\">LVE</a></li>\r\n                  </ol>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 index-data mb-5\">\r\n                <div class=\"icon-img\">\r\n                    <img src=\"http://65.2.78.179:8080/E-dossier-html/images/google-docs.png\" alt=\"Assessment Icon\">\r\n                </div>\r\n                <div class=\"details\">\r\n                    <h3><b>Overall Assessment</b></h3>\r\n                    <ol>\r\n                        <li><a href=\"http://65.2.78.179:8080/E-dossier-html/assetment-gc.html\" target=\"_blank\">Assessment GC</a></li>\r\n                         <li><a href=\"http://65.2.78.179:8080/E-dossier-html/assetment-oq-matrix.html\" target=\"_blank\">Assessment OQ Matrix</a></li>\r\n                         <li><a href=\"http://65.2.78.179:8080/E-dossier-html/pt-1.html\" target=\"_blank\">PT</a></li>\r\n                    <li><a href=\"http://65.2.78.179:8080/E-dossier-html/sports&games.html\" target=\"_blank\">Sports</a></li>\r\n                    <li><a href=\"http://65.2.78.179:8080/E-dossier-html/drill.html\" target=\"_blank\">Drill</a></li>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/weapon-training.html\" target=\"_blank\">WT</a></li>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/academics.html\" target=\"_blank\">Academic</a></li>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/service-subjects.html\" target=\"_blank\">Service Subjects</a></li>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/leadership-matrix.html\" target=\"_blank\">Leadership Matrix</a></li>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/eqtn.html\" target=\"_blank\">EQTN</a></li>\r\n                  </ol>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 index-data mb-5\">\r\n                <div class=\"icon-img\">\r\n                    <img src=\"http://65.2.78.179:8080/E-dossier-html/images/camp.png\" alt=\"Camp Icon\">\r\n                </div>\r\n                <div class=\"details\">\r\n                    <h3><b>Camp Marks</b></h3>\r\n                    <ol>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/camps.html\" target=\"_blank\">Camp Marks</a></li>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/assessment-matrix-camp.html\" target=\"_blank\">Assessment Matrix</a></li>\r\n                  </ol>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-6 index-data mb-5\">\r\n              <div class=\"icon-img\">\r\n                    <img src=\"http://65.2.78.179:8080/E-dossier-html/images/interview.png\" alt=\"Interview Icon\">\r\n                </div>\r\n                <div class=\"details\">\r\n                    <h3><b>Interviews</b></h3>\r\n                    <ol>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/interview-sheet.html\" target=\"_blank\">Interview Sheet</a></li>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/instructions-for-interviews-counselling.html\" target=\"_blank\">Instructions for Interviews and Counselling</a></li>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/initial-interview.html\" target=\"_blank\">Initial Interview</a></li>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/begining-term-interview.html\" target=\"_blank\">Begining Term Interview</a></li>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/mid-term-interview.html\" target=\"_blank\">Mid Term Interview</a></li>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/special-interview.html\" target=\"_blank\">Special Interview</a></li>\r\n                  </ol>\r\n                </div>\r\n          </div>\r\n           <div class=\"col-md-6 index-data mb-5\">\r\n               <div class=\"icon-img\">\r\n                    <img src=\"http://65.2.78.179:8080/E-dossier-html/images/google-docs.png\" alt=\"Sheet Icon\">\r\n                </div>\r\n                <div class=\"details\">\r\n                    <h3><b>OBSN Sheet</b></h3>\r\n                    <ol>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/obsn-sheet-all-term.html\" target=\"_blank\">OBSN Sheet</a></li>\r\n                  </ol>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-6 index-data mb-5\">\r\n              <div class=\"icon-img\">\r\n                    <img src=\"http://65.2.78.179:8080/E-dossier-html/images/interview.png\" alt=\"Counselling Icon\">\r\n                </div>\r\n                <div class=\"details\">\r\n                    <h3><b>Counselling</b></h3>\r\n                    <ol>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/counselling-all-term.html\" target=\"_blank\">Counselling All Terms</a></li>\r\n                  </ol>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-6 index-data mb-5\">\r\n              <div class=\"icon-img\">\r\n                    <img src=\"http://65.2.78.179:8080/E-dossier-html/images/warning.png\" alt=\"Warning Icon\">\r\n                </div>\r\n                <div class=\"details\">\r\n                    <h3><b>Warning</b></h3>\r\n                    <ol>\r\n                         <li><a href=\"http://65.2.78.179:8080/E-dossier-html/instructions-for-warning.html\" target=\"_blank\">Instructions for warning</a></li>\r\n                        <li><a href=\"http://65.2.78.179:8080/E-dossier-html/warning-pl-cdr.html\" target=\"_blank\">Warning PI Cdr</a></li>\r\n                        <li><a href=\"http://65.2.78.179:8080/E-dossier-html/warning-coy-cdr.html\" target=\"_blank\">Warning Coy Cdr</a></li>\r\n                        <li><a href=\"http://65.2.78.179:8080/E-dossier-html/warning-bn-cdr.html\" target=\"_blank\">Warning Bn Cdr</a></li>\r\n                        <li><a href=\"http://65.2.78.179:8080/E-dossier-html/warning-dcci.html\" target=\"_blank\">Warning Dcci</a></li>\r\n                  </ol>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-6 index-data mb-5\">\r\n              <div class=\"icon-img\">\r\n                    <img src=\"http://65.2.78.179:8080/E-dossier-html/images/edit.png\" alt=\"Record Icon\">\r\n                </div>\r\n                <div class=\"details\">\r\n                    <h3><b>Records</b></h3>\r\n                    <ol>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/MED-Records.html\" target=\"_blank\">Med Records</a></li>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/discp-Records.html\" target=\"_blank\">Discp Records</a></li>\r\n                      <li><a href=\"http://65.2.78.179:8080/E-dossier-html/weight-in-records.html\" target=\"_blank\">Weigh in Records</a></li>\r\n                  </ol>\r\n              </div>\r\n          </div> -->\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ })

}]);