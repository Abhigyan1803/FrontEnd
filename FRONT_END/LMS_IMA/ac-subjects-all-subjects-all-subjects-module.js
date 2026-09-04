(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ac-subjects-all-subjects-all-subjects-module"],{

/***/ "VzC1":
/*!********************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/ac-subjects/all-subjects/all-subjects.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AllSubjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllSubjectsComponent", function() { return AllSubjectsComponent; });
/* harmony import */ var _raw_loader_all_subjects_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./all-subjects.component.html */ "d787");
/* harmony import */ var _all_subjects_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-subjects.component.scss */ "YvxZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/gc/gc.service */ "yuBT");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AllSubjectsComponent = /** @class */ (function () {
    function AllSubjectsComponent(router, route, service, dialog, cdRef) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.dialog = dialog;
        this.cdRef = cdRef;
        this.topics = [];
        this.cadetInfo = JSON.parse(localStorage.getItem("loginResponse"));
        // console.log("CADET INFO: ",this.cadetInfo);
    }
    AllSubjectsComponent.prototype.ngOnInit = function () {
    };
    AllSubjectsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log("Parameters: ", params);
            _this.paper = params.paper;
            _this.subject = params.subject;
            // this.ngAfterViewInit();
            _this.getSubjectTopic();
        });
    };
    AllSubjectsComponent.prototype.getSubjectTopic = function () {
        var _this = this;
        this.service.getSubjectsTopicsList(this.cadetInfo.object.term, this.paper, this.subject).subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                _this.topics = res.object;
                _this.cdRef.detectChanges();
            }
        });
    };
    AllSubjectsComponent.prototype.openDoc = function (url) {
        var type;
        var ext = url.substring(url.lastIndexOf('.') + 1);
        if (ext == "docx" || ext == "doc" || ext == "pdf" || ext == "pptx" || ext == "ppt") {
            type = 'document';
        }
        else if (ext == "apng" || ext == "png" || ext == "gif" ||
            ext == "jpg" || ext == "jpeg" || ext == "jfif" || ext == "pjpg" || ext == "pjpeg" ||
            ext == "svg" || ext == "tiff" || ext == "tif") {
            type = 'img';
        }
        else {
            type = 'video';
        }
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '1300px', height: '650px', data: {
                type: type, title: 'Notes', url: url
            }
        });
    };
    AllSubjectsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_5__["GcService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    AllSubjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-all-subjects',
            template: _raw_loader_all_subjects_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_all_subjects_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_5__["GcService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], AllSubjectsComponent);
    return AllSubjectsComponent;
}());



/***/ }),

/***/ "X5Rx":
/*!*****************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/ac-subjects/all-subjects/all-subjects.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AllSubjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllSubjectsModule", function() { return AllSubjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _all_subjects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-subjects.component */ "VzC1");
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
        path: ':paper/:subject',
        component: _all_subjects_component__WEBPACK_IMPORTED_MODULE_4__["AllSubjectsComponent"]
    },
    {
        path: '',
        redirectTo: 'Paper 1/Military History',
        pathMatch: 'full'
    }
];
var AllSubjectsModule = /** @class */ (function () {
    function AllSubjectsModule() {
    }
    AllSubjectsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _all_subjects_component__WEBPACK_IMPORTED_MODULE_4__["AllSubjectsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            ]
        })
    ], AllSubjectsModule);
    return AllSubjectsModule;
}());



/***/ }),

/***/ "YvxZ":
/*!**********************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/ac-subjects/all-subjects/all-subjects.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-set {\n  display: flex;\n  float: left;\n  width: 100%;\n  margin-bottom: 10px;\n  justify-content: space-between;\n}\n\n.example-container {\n  float: left;\n  width: 100%;\n}\n\n.btn-set input {\n  margin-right: 15px;\n}\n\n.mt-20 {\n  float: left;\n  width: 100%;\n}\n\n.syllabus-card {\n  background-color: transparent;\n  border: none;\n}\n\n.head {\n  width: 100%;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #bb9450;\n  background: #e1e3de;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.active-paper {\n  background: #bb9450;\n  color: white;\n}\n\na:hover {\n  color: brown;\n}\n\nli {\n  border-radius: 0.2rem;\n}\n\n.paper-name {\n  color: #bb9450;\n}\n\n.subj {\n  color: #721a0c;\n}\n\n.notes {\n  display: flex;\n}\n\n.notes-card {\n  margin: 5px 5px 5px 5px !important;\n}");

/***/ }),

/***/ "d787":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/ac-subjects/all-subjects/all-subjects.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-toolbar class=\"subjects-toolbar\" > -->\n\n\n\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"\">\n    <a class=\"navbar-brand \"> <strong><span class=\"subj\" >Subject : </span><span class=\"paper-name\">{{subject}}</span></strong> </a>\n  </div>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active-paper\">\n        <button style=\"outline: none;\" mat-button [matMenuTriggerFor]=\"paper1\">\n          Paper 1 <mat-icon>expand_more</mat-icon>\n        </button>\n        <mat-menu #paper1=\"matMenu\">\n          <a href=\"javascript:void(0)\" mat-menu-item\n            [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 1/Military History']\">\n            <button style=\"outline: none;\" mat-button>\n              Military History\n            </button>\n          </a>\n          <a href=\"javascript:void(0)\" mat-menu-item\n            [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 1/Military Geography']\">\n            <button style=\"outline: none;\" mat-button>Military Geography</button>\n          </a>\n        </mat-menu>\n\n\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active-paper\">\n        <button style=\"outline: none;\" mat-button [matMenuTriggerFor]=\"paper2\">Paper 2 <mat-icon>expand_more</mat-icon>\n          </button>\n        <mat-menu #paper2=\"matMenu\">\n          <a href=\"javascript:void(0)\" mat-menu-item [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 2/CAIR']\">\n            <button style=\"outline: none;\" mat-button>CAIR</button>\n          </a>\n          <a href=\"javascript:void(0)\" mat-menu-item [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 2/BS']\">\n            <button style=\"outline: none;\" mat-button>BS</button>\n          </a>\n        </mat-menu>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active-paper\">\n        <button style=\"outline: none;\" mat-button [matMenuTriggerFor]=\"paper3\">Paper 3 <mat-icon>expand_more</mat-icon>\n        </button>\n        <mat-menu #paper3=\"matMenu\">\n          <a href=\"javascript:void(0)\" mat-menu-item\n            [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 3/Science and Warfare']\">\n            <button style=\"outline: none;\" mat-button>Science & Warfare</button>\n          </a>\n        </mat-menu>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active-paper\">\n        <button style=\"outline: none;\" mat-button [matMenuTriggerFor]=\"paper4\">Paper 4 <mat-icon>expand_more</mat-icon>\n        </button>\n        <mat-menu #paper4=\"matMenu\">\n          <a href=\"javascript:void(0)\" mat-menu-item [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 4/SWT']\">\n            <button style=\"outline: none;\" mat-button>SWT</button>\n          </a>\n        </mat-menu>\n\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active-paper\">\n\n        <button style=\"outline: none;\" mat-button [matMenuTriggerFor]=\"paper5\">Paper 5 <mat-icon>expand_more</mat-icon>\n        </button>\n        <mat-menu #paper5=\"matMenu\">\n          <a href=\"javascript:void(0)\" mat-menu-item [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 5/ECS']\">\n            <button style=\"outline: none;\" mat-button>ECS</button>\n          </a>\n        </mat-menu>\n\n\n\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active-paper\">\n        <button style=\"outline: none;\" mat-button [matMenuTriggerFor]=\"paper6\">Paper 6 <mat-icon>expand_more</mat-icon>\n        </button>\n        <mat-menu #paper6=\"matMenu\">\n\n          <a href=\"javascript:void(0)\" mat-menu-item [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 6/IT']\">\n            <button style=\"outline: none;\" mat-button>IT</button>\n\n          </a>\n        </mat-menu>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n  <!-- \n      <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n     -->\n\n\n\n</nav>\n\n<!-- <nav class=\"navbar navbar-inverse\">\n    \n    <ul class=\"nav navbar-nav\" >\n      <li class=\"nav-item\" routerLinkActive=\"active-paper\" >\n        <button mat-button [matMenuTriggerFor]=\"paper1\">Paper 1</button>\n      <mat-menu #paper1=\"matMenu\">\n          <a href=\"javascript:void(0)\" mat-menu-item\n              [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 1/Military History']\">\n              <button mat-button>Military History</button>\n          </a>\n          <a href=\"javascript:void(0)\" mat-menu-item\n              [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 1/Military Geography']\">\n              <button mat-button>Military Geography</button>\n          </a>\n      </mat-menu>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active-paper\" >\n        <button mat-button [matMenuTriggerFor]=\"paper2\">Paper 2</button>\n        <mat-menu #paper2=\"matMenu\">\n            <a href=\"javascript:void(0)\" mat-menu-item [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 2/CAIR']\">\n                <button mat-button>CAIR</button>\n            </a>\n            <a href=\"javascript:void(0)\" mat-menu-item [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 2/BS']\">\n                <button mat-button>BS</button>\n            </a>\n        </mat-menu>\n    \n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active-paper\" >\n        <button mat-button [matMenuTriggerFor]=\"paper3\">Paper 3</button>\n      <mat-menu #paper3=\"matMenu\">\n          <a href=\"javascript:void(0)\" mat-menu-item\n              [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 3/Science and Warfare']\">\n              <button mat-button>Science & Warfare</button>\n          </a>\n      </mat-menu>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active-paper\" >\n        <button mat-button [matMenuTriggerFor]=\"paper4\">Paper 4</button>\n        <mat-menu #paper4=\"matMenu\">\n            <a href=\"javascript:void(0)\" mat-menu-item [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 4/SWT']\">\n                <button mat-button>SWT</button>\n            </a>\n        </mat-menu>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active-paper\" >\n        <button mat-button [matMenuTriggerFor]=\"paper5\">Paper 5</button>\n        <mat-menu #paper5=\"matMenu\">\n            <a href=\"javascript:void(0)\" mat-menu-item [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 5/ECS']\">\n                <button mat-button>ECS</button>\n            </a>\n        </mat-menu>\n    \n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active-paper\" >\n        <button mat-button [matMenuTriggerFor]=\"paper6\">Paper 6</button>\n        <mat-menu #paper6=\"matMenu\">\n            <a href=\"javascript:void(0)\" mat-menu-item [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 6/IT']\">\n                <button mat-button>IT</button>\n    \n            </a>\n        </mat-menu>\n      </li>\n  \n    </ul>\n  </nav> -->\n\n\n\n<!-- <button mat-button [matMenuTriggerFor]=\"paper1\">Paper 1</button>\n    <mat-menu #paper1=\"matMenu\">\n        <a href=\"javascript:void(0)\" mat-menu-item\n            [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 1/Military History']\">\n            <button mat-button>Military History</button>\n        </a>\n        <a href=\"javascript:void(0)\" mat-menu-item\n            [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 1/Military Geography']\">\n            <button mat-button>Military Geography</button>\n        </a>\n    </mat-menu>\n\n    <button mat-button [matMenuTriggerFor]=\"paper2\">Paper 2</button>\n    <mat-menu #paper2=\"matMenu\">\n        <a href=\"javascript:void(0)\" mat-menu-item [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 2/CAIR']\">\n            <button mat-button>CAIR</button>\n        </a>\n        <a href=\"javascript:void(0)\" mat-menu-item [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 2/BS']\">\n            <button mat-button>BS</button>\n        </a>\n    </mat-menu>\n\n    <button mat-button [matMenuTriggerFor]=\"paper3\">Paper 3</button>\n    <mat-menu #paper3=\"matMenu\">\n        <a href=\"javascript:void(0)\" mat-menu-item\n            [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 3/Science and Warfare']\">\n            <button mat-button>Science & Warfare</button>\n        </a>\n    </mat-menu>\n\n    <button mat-button [matMenuTriggerFor]=\"paper4\">Paper 4</button>\n    <mat-menu #paper4=\"matMenu\">\n        <a href=\"javascript:void(0)\" mat-menu-item [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 4/SWT']\">\n            <button mat-button>SWT</button>\n        </a>\n    </mat-menu>\n\n    <button mat-button [matMenuTriggerFor]=\"paper5\">Paper 5</button>\n    <mat-menu #paper5=\"matMenu\">\n        <a href=\"javascript:void(0)\" mat-menu-item [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 5/ECS']\">\n            <button mat-button>ECS</button>\n        </a>\n    </mat-menu>\n\n    <button mat-button [matMenuTriggerFor]=\"paper6\">Paper 6</button>\n    <mat-menu #paper6=\"matMenu\">\n        <a href=\"javascript:void(0)\" mat-menu-item [routerLink]=\"['/gc/content/ac-subjects/subjects/Paper 6/IT']\">\n            <button mat-button>IT</button>\n\n        </a>\n    </mat-menu> -->\n\n\n\n\n<!-- </mat-toolbar> -->\n\n<!-- <div class=\"head\" >\n  <span> Subjects </span> >\n  <span>{{paper}}</span> > \n  <span>{{subject}}</span>\n</div> -->\n<mat-card *ngIf=\"!topics.length\">\n  <div class=\"text-center\">\n    <img src=\"assets\\img\\no_data_available.png\" alt=\"\">\n  </div>\n</mat-card>\n<ng-container *ngIf=\"topics.length\">\n  <div *ngFor=\"let topic of topics;let i=index\" class=\"m-2\">\n\n    <mat-accordion *ngFor=\"let t of topic.termTopic;let j=index\">\n\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <!-- Self aware panel -->\n            <h4>\n              {{t.topicName}}\n            </h4>\n          </mat-panel-title>\n          <mat-panel-description>\n            <!-- Currently I am {{panelOpenState ? 'open' : 'closed'}} -->\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n\n        <mat-accordion>\n\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                <!-- Self aware panel -->\n                <h4>Learning Outcome</h4>\n              </mat-panel-title>\n              <mat-panel-description>\n                <!-- Currently I am {{panelOpenState ? 'open' : 'closed'}} -->\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <div>\n              <p [innerHTML]=\"t.learningOutcomes\"></p>\n            </div>\n            <!-- <p>I'm visible because I am open</p> -->\n          </mat-expansion-panel>\n\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                <!-- Self aware panel -->\n                <h4>Required Reading</h4>\n              </mat-panel-title>\n              <mat-panel-description>\n                <!-- Currently I am {{panelOpenState ? 'open' : 'closed'}} -->\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <div>\n              <p [innerHTML]=\"t.requiredReading\"></p>\n            </div>\n            <!-- <p>I'm visible because I am open</p> -->\n          </mat-expansion-panel>\n\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                <!-- Self aware panel -->\n                <h4>Bonus Reading</h4>\n              </mat-panel-title>\n              <mat-panel-description>\n                <!-- Currently I am {{panelOpenState ? 'open' : 'closed'}} -->\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <div>\n              <p [innerHTML]=\"t.bonesReading\"></p>\n            </div>\n            <!-- <p>I'm visible because I am open</p> -->\n          </mat-expansion-panel>\n\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                <!-- Self aware panel -->\n                <h4>Notes</h4>\n              </mat-panel-title>\n              <mat-panel-description>\n                <!-- Currently I am {{panelOpenState ? 'open' : 'closed'}} -->\n              \n              </mat-panel-description>\n            </mat-expansion-panel-header>\n\n            <div class=\"row notes\">\n              <div class=\"card col-md-2 notes-card\" *ngFor=\"let note of t.notesList\">\n                <div class=\"card-header\" > {{note.notesName}} </div>\n                <div class=\"card-body text-center\" >\n                  <a  href=\"javascript:void(0)\" (click)=\"openDoc(note.notesUrl)\" >\n                    <mat-icon >\n                      visibility\n                    </mat-icon>\n                  </a>\n                </div>\n              </div>  \n            </div>\n            <!-- <div>\n              <p> {{t.notesName|| \"-\"}} </p>\n              <a *ngIf=\"t.notesUrl\" href=\"javascript:void(0)\" (click)=\"openDoc(t.notesUrl)\">\n                <mat-icon> description </mat-icon>\n              </a>\n            </div> -->\n          </mat-expansion-panel>\n\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                <!-- Self aware panel -->\n                <h4>Instructor Notes</h4>\n              </mat-panel-title>\n              <mat-panel-description>\n                <!-- Currently I am {{panelOpenState ? 'open' : 'closed'}} -->\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <div>\n              <p [innerHTML]=\"t.instruction\"></p>\n            </div>\n          </mat-expansion-panel>\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                <!-- Self aware panel -->\n                <h4>Question Bank</h4>\n              </mat-panel-title>\n              <mat-panel-description>\n                <!-- Currently I am {{panelOpenState ? 'open' : 'closed'}} -->\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <div class=\"notes\" >\n              <div class=\"card col-md-2 notes-card\" *ngFor=\"let qb of topic.questionBank\" >\n                <div class=\"card-header\" > {{qb.questionBankName}} </div>\n                <div class=\"card-body text-center\" >\n                  <a href=\"javascript:void(0)\" (click)=\"openDoc(qb.queBankurl)\" >\n                    <mat-icon>\n                      visibility\n                    </mat-icon>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </mat-expansion-panel>\n\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                <!-- Self aware panel -->\n                <h4>Previous Term Papers</h4>\n              </mat-panel-title>\n              <mat-panel-description>\n                <!-- Currently I am {{panelOpenState ? 'open' : 'closed'}} -->\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <div class=\"notes\" >\n              <div class=\"card col-md-2 notes-card\" *ngFor=\"let paper of topic.previousTermPaper\" >\n                <div class=\"card-header\" > {{paper.previousTermPaper}} </div>\n                <div class=\"card-body\" >\n                  <a href=\"javascript:void(0)\" (click)=\"openDoc(paper.url)\" >\n                    <mat-icon>\n                      visibility\n                    </mat-icon>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </mat-expansion-panel>\n\n\n        </mat-accordion>\n\n\n\n\n\n\n\n\n\n\n      </mat-expansion-panel>\n    </mat-accordion>\n\n\n\n  </div>\n\n</ng-container>");

/***/ })

}]);