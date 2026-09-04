(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ac-subjects-assignments-assignments-module"],{

/***/ "Brkj":
/*!******************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/ac-subjects/assignments/assignments.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AssignmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsComponent", function() { return AssignmentsComponent; });
/* harmony import */ var _raw_loader_assignments_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./assignments.component.html */ "ZaRr");
/* harmony import */ var _assignments_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignments.component.scss */ "nwXt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/gc/gc.service */ "yuBT");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _gc_dialog_gc_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../gc-dialog/gc-dialog.component */ "PCf+");
/* harmony import */ var app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/auth-service/auth.service */ "V7IE");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AssignmentsComponent = /** @class */ (function () {
    function AssignmentsComponent(service, fb, router, Trgservice, route, spinner, authService, cdref, sharedService, dialog) {
        var _this = this;
        this.service = service;
        this.fb = fb;
        this.router = router;
        this.Trgservice = Trgservice;
        this.route = route;
        this.spinner = spinner;
        this.authService = authService;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.assignments = [];
        this.cadetAnsArr = [];
        this.addassignmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroup"]({});
        this.cadetDetails = JSON.parse(localStorage.getItem("loginResponse")).object;
        this.cadetName = this.cadetDetails.name;
        this.serviceId = this.cadetDetails.serviceId;
        this.addassignmentForm = this.fb.group({
            file: [],
        });
        this.route.params.subscribe(function (params) {
            // console.log("PARAMETERS: ", params);
            _this.paper = params.paper;
            _this.term = params.term;
            _this.subject = params.subject;
            // this.ngAfterViewInit()
            _this.getAssignments();
        });
    }
    AssignmentsComponent.prototype.ngOnInit = function () {
    };
    AssignmentsComponent.prototype.ngAfterViewInit = function () {
        // this.getAssignments()
    };
    AssignmentsComponent.prototype.upload1 = function (event) {
        var _this = this;
        this.spinner.show();
        var fileName = event.target.files[0].name;
        var file = event.target.files[0];
        this.Trgservice.FileAboutUs(file).subscribe(function (res) {
            console.log(res.object.url);
            if (res.status == 'OK') {
                _this.sharedService.openSnackbar(res.message);
                _this.addassignmentForm.patchValue({
                    file: res.object.url,
                });
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar('Error Occured.');
            console.log(JSON.stringify(err));
        });
    };
    AssignmentsComponent.prototype.getAssignments = function () {
        var _this = this;
        this.spinner.show();
        this.assignments = [];
        this.cadetAnsArr = [];
        this.service.getAssignments(this.cadetDetails.serviceId, this.cadetDetails.term, this.paper, this.subject).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                if (res.object) {
                    _this.assignments = res.object;
                    console.log(_this.addassignmentForm.value.file, "file");
                    _this.assignments.forEach(function (el) {
                        _this.cadetAnsArr.push({
                            acdAsnId: el.id,
                            question: el.question,
                            answer: '',
                            cadetName: _this.cadetName,
                            serviceId: _this.serviceId,
                            file: '',
                            status: 1,
                        });
                    });
                    console.log(_this.assignments, "file");
                }
                _this.spinner.hide();
                _this.cdref.detectChanges();
            }
        });
    };
    AssignmentsComponent.prototype.onChange = function (event) {
        this.authService.resetTime();
        // console.log(event.editor.getData());
        // console.log(event.editor)
    };
    AssignmentsComponent.prototype.movementEvent = function (e, t) {
        // console.log(t)
        this.authService.resetTime();
    };
    AssignmentsComponent.prototype.openDoc = function (a) {
        console.log(a, ":");
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "ITSEC Document", url: a.file
            }
        });
    };
    AssignmentsComponent.prototype.openDoc1 = function (e) {
        console.log(e);
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "ITPPP Document", url: e.file
            }
        });
    };
    AssignmentsComponent.prototype.submitAnswer = function (i) {
        var _this = this;
        // console.log(i);
        console.log(this.cadetAnsArr[i]);
        console.log(this.cadetAnsArr[i].file);
        this.cadetAnsArr[i].file = this.addassignmentForm.value.file;
        console.log(this.cadetAnsArr[i]);
        if (!this.cadetAnsArr[i].answer) {
            this.sharedService.openSnackbar('Please Write Your Answer.');
        }
        else {
            var dialogRef = this.dialog.open(_gc_dialog_gc_dialog_component__WEBPACK_IMPORTED_MODULE_8__["GcDialogComponent"], {
                width: '1000px', height: '600px',
                data: {
                    type: 'confirmation',
                    title: 'Confirm',
                    assignmentData: this.cadetAnsArr[i]
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log("Dialog result: " + result);
                if (result) {
                    _this.spinner.show();
                    _this.service.submitAssignmentAnswer(_this.cadetAnsArr[i]).subscribe(function (res) {
                        if (res.status == "OK") {
                            _this.spinner.hide();
                            _this.sharedService.openSnackbar('Your Answer has been submitted successfully.');
                            _this.getAssignments();
                        }
                    });
                }
            });
        }
    };
    AssignmentsComponent.ctorParameters = function () { return [
        { type: app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_4__["GcService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__["TrgBattalionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
    ]; };
    AssignmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-assignments',
            template: _raw_loader_assignments_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_assignments_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_4__["GcService"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__["TrgBattalionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], AssignmentsComponent);
    return AssignmentsComponent;
}());



/***/ }),

/***/ "WfAI":
/*!***************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/ac-subjects/assignments/assignments.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AssignmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsModule", function() { return AssignmentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _assignments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignments.component */ "Brkj");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
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
        component: _assignments_component__WEBPACK_IMPORTED_MODULE_4__["AssignmentsComponent"]
    },
    {
        path: '',
        redirectTo: 'Paper 1/Military History',
        pathMatch: 'full'
    }
];
var AssignmentsModule = /** @class */ (function () {
    function AssignmentsModule() {
    }
    AssignmentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _assignments_component__WEBPACK_IMPORTED_MODULE_4__["AssignmentsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"]
            ]
        })
    ], AssignmentsModule);
    return AssignmentsModule;
}());



/***/ }),

/***/ "ZaRr":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/ac-subjects/assignments/assignments.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <!-- <mat-toolbar> -->\n\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <div class=\"\">\n            <a class=\"navbar-brand \"> <strong> <span class=\"asgnmt\" >Assignment : </span><span class=\"paper-name\">{{subject}}</span> </strong> </a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\" routerLinkActive=\"active-paper\">\n                    <button style=\"outline: none;\" mat-button [matMenuTriggerFor]=\"paper1\">\n                        Paper 1 <mat-icon>expand_more</mat-icon>\n                    </button>\n                    <mat-menu #paper1=\"matMenu\">\n                        <a href=\"javascript:void(0)\" mat-menu-item\n                            [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 1/Military History']\">\n                            <button style=\"outline: none;\" mat-button>\n                                Military History\n                            </button>\n                        </a>\n                        <a href=\"javascript:void(0)\" mat-menu-item\n                            [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 1/Military Geography']\">\n                            <button style=\"outline: none;\" mat-button>Military Geography</button>\n                        </a>\n                    </mat-menu>\n\n\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active-paper\">\n                    <button style=\"outline: none;\" mat-button [matMenuTriggerFor]=\"paper2\">Paper 2 <mat-icon>expand_more\n                        </mat-icon></button>\n                    <mat-menu #paper2=\"matMenu\">\n                        <a href=\"javascript:void(0)\" mat-menu-item\n                            [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 2/CAIR']\">\n                            <button style=\"outline: none;\" mat-button>CAIR</button>\n                        </a>\n                        <a href=\"javascript:void(0)\" mat-menu-item\n                            [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 2/BS']\">\n                            <button style=\"outline: none;\" mat-button>BS</button>\n                        </a>\n                    </mat-menu>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active-paper\">\n                    <button style=\"outline: none;\" mat-button [matMenuTriggerFor]=\"paper3\">Paper 3 <mat-icon>expand_more\n                        </mat-icon> </button>\n                    <mat-menu #paper3=\"matMenu\">\n                        <a href=\"javascript:void(0)\" mat-menu-item\n                            [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 3/Science and Warfare']\">\n                            <button style=\"outline: none;\" mat-button>Science & Warfare</button>\n                        </a>\n                    </mat-menu>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active-paper\">\n                    <button style=\"outline: none;\" mat-button [matMenuTriggerFor]=\"paper4\">Paper 4 <mat-icon>expand_more\n                        </mat-icon> </button>\n                    <mat-menu #paper4=\"matMenu\">\n                        <a href=\"javascript:void(0)\" mat-menu-item\n                            [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 4/SWT']\">\n                            <button style=\"outline: none;\" mat-button>SWT</button>\n                        </a>\n                    </mat-menu>\n\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active-paper\">\n\n                    <button style=\"outline: none;\" mat-button [matMenuTriggerFor]=\"paper5\">Paper 5 <mat-icon>expand_more\n                        </mat-icon> </button>\n                    <mat-menu #paper5=\"matMenu\">\n                        <a href=\"javascript:void(0)\" mat-menu-item\n                            [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 5/ECS']\">\n                            <button style=\"outline: none;\" mat-button>ECS</button>\n                        </a>\n                    </mat-menu>\n\n\n\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active-paper\">\n                    <button style=\"outline: none;\" mat-button [matMenuTriggerFor]=\"paper6\">Paper 6 <mat-icon>expand_more\n                        </mat-icon> </button>\n                    <mat-menu #paper6=\"matMenu\">\n\n                        <a href=\"javascript:void(0)\" mat-menu-item\n                            [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 6/IT']\">\n                            <button style=\"outline: none;\" mat-button>IT</button>\n\n                        </a>\n                    </mat-menu>\n\n                </li>\n\n            </ul>\n\n        </div>\n\n        <!-- \n              <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n          <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n        \n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n              <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">Link</a>\n              </li>\n              <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Dropdown\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                  <a class=\"dropdown-item\" href=\"#\">Action</a>\n                  <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                </div>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n              </li>\n            </ul>\n            <form class=\"form-inline my-2 my-lg-0\">\n              <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n              <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n            </form>\n          </div>\n        </nav>\n             -->\n\n\n\n    </nav>\n\n\n\n\n\n\n    <!-- <button mat-button [matMenuTriggerFor]=\"paper1\">Paper 1</button>\n        <mat-menu #paper1=\"matMenu\">\n            <a href=\"javascript:void(0)\" mat-menu-item\n                [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 1/Military History']\">\n                <button mat-button>Military History</button>\n            </a>\n            <a href=\"javascript:void(0)\" mat-menu-item\n                [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 1/Military Geography']\">\n                <button mat-button>Military Geography</button>\n            </a>\n        </mat-menu>\n\n        <button mat-button [matMenuTriggerFor]=\"paper2\">Paper 2</button>\n        <mat-menu #paper2=\"matMenu\">\n            <a href=\"javascript:void(0)\" mat-menu-item\n                [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 2/CAIR']\">\n                <button mat-button>CAIR</button>\n            </a>\n            <a href=\"javascript:void(0)\" mat-menu-item\n                [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 2/BS']\">\n                <button mat-button>BS</button>\n            </a>\n        </mat-menu>\n\n        <button mat-button [matMenuTriggerFor]=\"paper3\">Paper 3</button>\n        <mat-menu #paper3=\"matMenu\">\n            <a href=\"javascript:void(0)\" mat-menu-item\n                [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 3/Science and Warfare']\">\n                <button mat-button>Science & Warfare</button>\n            </a>\n        </mat-menu>\n\n        <button mat-button [matMenuTriggerFor]=\"paper4\">Paper 4</button>\n        <mat-menu #paper4=\"matMenu\">\n            <a href=\"javascript:void(0)\" mat-menu-item\n                [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 4/SWT']\">\n                <button mat-button>SWT</button>\n            </a>\n        </mat-menu>\n\n        <button mat-button [matMenuTriggerFor]=\"paper5\">Paper 5</button>\n        <mat-menu #paper5=\"matMenu\">\n            <a href=\"javascript:void(0)\" mat-menu-item\n                [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 5/ECS']\">\n                <button mat-button>ECS</button>\n            </a>\n        </mat-menu>\n\n        <button mat-button [matMenuTriggerFor]=\"paper6\">Paper 6</button>\n        <mat-menu #paper6=\"matMenu\">\n            <a href=\"javascript:void(0)\" mat-menu-item\n                [routerLink]=\"['/gc/content/ac-subjects/assignments/Paper 6/IT']\">\n                <button mat-button>IT</button>\n\n            </a>\n        </mat-menu> -->\n\n\n\n\n    <!-- </mat-toolbar> -->\n    <div class=\"alert-warning note p-2\" *ngIf=\"!assignments.length\" >\n       <strong>Note:</strong> Please Don't Change the page untill you submit your Answer.\n    </div>\n    <!-- <mat-card *ngIf=\"!assignments.length\">\n        <div class=\"text-center\">\n            <img src=\"assets\\img\\no_data_available.png\" alt=\"\">\n        </div>\n    </mat-card> -->\n    <ng-container >\n\n        <div *ngFor=\"let a of assignments;let i=index\" class=\"m-2\">\n            <mat-accordion>\n                <mat-expansion-panel>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <h4>\n                                {{a.assignment}}\n\n                            </h4>\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            <!-- Currently I am {{panelOpenState ? 'open' : 'closed'}} -->\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n\n                    <div class=\"question\">\n                        <div class=\"col-md-1\">\n                            <span>\n                                <h5>Question: </h5>\n                               \n                            </span>\n                            <span>\n                                <h5>Questions In File: </h5>\n                               \n                            </span>\n                           \n                        </div>\n\n                        <div class=\"col-md-11\">\n                            <p [innerHTML]=\"a.question\"></p>\n                            <a  *ngIf=\"a.file!==null\" href=\"javascript:void(0)\" (click)=\"openDoc(a)\" >\n                                <mat-icon>description</mat-icon>\n                            </a> \n                        </div>\n                    </div>\n\n                    <!-- <div class=\"question\">\n                        <div class=\"col-md-1\">\n                            <span>\n                                <h5>Questions File: </h5>\n                                \n                            </span>\n                           \n                        </div>\n\n                        <div class=\"col-md-11\">\n                            <a  href=\"javascript:void(0)\" (click)=\"openDoc(a)\" >\n                                <mat-icon>description</mat-icon>\n                            </a>  \n                        </div>\n                    </div> -->\n\n                    <div class=\"col\">\n                        <span>\n                            <h5>Last Submission Date:- {{a.lastSubmissionDate}} </h5>\n                            <p ></p>\n\n                            \n                        </span>\n                       \n                    </div>\n\n                    <div class=\"col\">\n\n                    </div>\n                \n                   \n\n                   \n                    <!-- {{a | json}} -->\n                    <div>\n                        <ckeditor *ngIf=\"!a.isAnswered\" [(ngModel)]=\"cadetAnsArr[i].answer\" (change)=\"onChange($event)\"\n                            (mouseover)=\"movementEvent($event,'mouseover')\"\n                            (mouseout)=\"movementEvent($event,'mouseout')\" (click)=\"movementEvent($event,'click')\">\n                        </ckeditor>\n                        <br>\n                    \n                        <div *ngIf=\"a.isAnswered\" class=\"question\">\n                            <div class=\"col-md-2\">\n\n                                <h5>Answer You Submitted : </h5>\n                                <h5>Answer You Submitted By File: </h5>\n\n                            </div>\n                            <div class=\"col-md-10\">\n                                <p [innerHTML]=\"a.answer\"></p>\n                                <a  *ngIf=\"a.file!==null\" href=\"javascript:void(0)\" (click)=\"openDoc1(a)\">\n                                    <mat-icon>description</mat-icon>\n                                </a>\n                            </div>\n                            \n                        </div>\n                        <div class=\"col-md-2\">\n\n                        </div>\n                        <div class=\"form-group col\" *ngIf=\"!a.isAnswered\"  >\n                            <label class=\"form-label\">Answer File Upload</label>\n                              <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\"   (change)=\"upload1($event)\" id=\"image\">\n                              <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\n                              \n                          </div>\n                        <div style=\"float: right;\" class=\"mt-2\">\n                            <button mat-raised-button *ngIf=\"!a.isAnswered\" (click)=\"submitAnswer(i)\">\n                                Submit\n                            </button>\n                        </div>\n\n                    </div>\n                \n                </mat-expansion-panel>\n            </mat-accordion>\n\n\n        </div>\n\n    </ng-container>\n</div>");

/***/ }),

/***/ "nwXt":
/*!********************************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/ac-subjects/assignments/assignments.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-set {\n  display: flex;\n  float: left;\n  width: 100%;\n  margin-bottom: 10px;\n  justify-content: space-between;\n}\n\n.example-container {\n  float: left;\n  width: 100%;\n}\n\n.btn-set input {\n  margin-right: 15px;\n}\n\n.mt-20 {\n  float: left;\n  width: 100%;\n}\n\n.syllabus-card {\n  background-color: transparent;\n  border: none;\n}\n\n.head {\n  width: 100%;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #bb9450;\n  background: #e1e3de;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.question {\n  display: flex;\n}\n\n.aero-icon.mat-icon {\n  margin: 10px 10px 10px 10px;\n  padding: 10px 10px 10px 10px;\n}\n\n.note {\n  font-size: 15px;\n  color: black;\n}\n\n.active-paper {\n  background: #bb9450;\n  color: white;\n}\n\na:hover {\n  color: brown;\n}\n\nli {\n  border-radius: 0.2rem;\n}\n\n.paper-name {\n  color: #bb9450;\n}\n\n.asgnmt {\n  color: #721a0c;\n}");

/***/ })

}]);