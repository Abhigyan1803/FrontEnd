(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["academic-subjects-academic-subjects-module"],{

/***/ "5QTo":
/*!***************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-subjects/academic-subjects.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AcademicSubjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicSubjectsComponent", function() { return AcademicSubjectsComponent; });
/* harmony import */ var _raw_loader_academic_subjects_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./academic-subjects.component.html */ "QuhS");
/* harmony import */ var _academic_subjects_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./academic-subjects.component.scss */ "pllp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/academic-dept/academic-dept.service */ "1ABS");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
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








var AcademicSubjectsComponent = /** @class */ (function () {
    function AcademicSubjectsComponent(router, route, spinner, cdref, dialog, sharedService, service) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.service = service;
        this.subjectList = [];
        this.displayedColumns = ['number', 'date', /*'status',*/ 'topics', 'view'];
        this.papers = ['Paper 1', 'Paper 2', 'Paper 3', 'Paper 4', 'Paper 5', 'Paper 6'];
        this.route.params.subscribe(function (params) {
            _this.term = params.term;
            _this.paper = params.paper;
            _this.subject = params.subject;
            if (_this.subject == "Science and Warfare") {
                _this.sTitle = "Science & Warfare";
            }
            else {
                _this.sTitle = params.subject;
            }
            if (_this.term == "I Term") {
                _this.termId = 1;
            }
            else if (_this.term == "II Term") {
                _this.termId = 2;
            }
            else if (_this.term == "III Term") {
                _this.termId = 3;
            }
            else if (_this.term == "II Tech") {
                _this.termId = 7;
            }
            else {
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 5);
                _this.router.navigate(['/main/academic-depart/dashboard']);
            }
            if (!_this.papers.includes(_this.paper)) {
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 5);
                _this.router.navigate(['/main/academic-depart/dashboard']);
            }
            _this.getSubjectsList();
        });
    }
    AcademicSubjectsComponent.prototype.ngOnInit = function () {
    };
    AcademicSubjectsComponent.prototype.getSubjectsList = function () {
        var _this = this;
        this.spinner.show();
        this.service.getSubjectsList(this.termId, this.paper, this.subject).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.subjectList = res.object;
                // this.dataSource = new MatTableDataSource(res.object);
                // this.dataSource.sort = this.sort;
                // this.dataSource.paginator = this.paginator;
                _this.cdref.detectChanges();
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar("Some Error Occured.");
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar("Some Error Occured.");
        });
    };
    // sortData(sort: Sort){
    //   const datalist = this.subjectList.slice();
    //   if (!sort.active || sort.direction === '') {
    //     this.subjectList = datalist;
    //     return;
    //   }
    //   this.subjectList = datalist.sort((a: any, b: any) => {
    //     const isAsc = this.sort.direction === 'asc';
    //     switch (this.sort.active) {
    //       case 'name': return this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
    //       case 'description': return this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
    //       default: return 0;
    //     }
    //   });
    //   this.dataSource = new MatTableDataSource(this.subjectList);
    //   this.dataSource.paginator = this.paginator;
    //   if (this.dataSource.paginator) {
    //     this.dataSource.paginator.firstPage();
    //   }
    // }
    // applyFilter(event: Event) {
    //   const filterValue = (event.target as HTMLInputElement).value;
    //   this.dataSource.filter = filterValue.trim().toLowerCase();
    //   if (this.dataSource.paginator) {
    //     this.dataSource.paginator.firstPage();
    //   }
    // }
    AcademicSubjectsComponent.prototype.addSubject = function () {
        this.router.navigate(['/main/academic-depart/subjects/' + this.term + '/' + this.paper + '/' + this.subject + '/add-subject']);
    };
    AcademicSubjectsComponent.prototype.viewSubject = function (element) {
        console.log(element);
        this.router.navigate(['/main/academic-depart/subjects/' + this.term + '/' + this.paper + '/' + this.subject + '/view-subject'], { queryParams: { id: element.academicTermId } });
    };
    AcademicSubjectsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
        { type: app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_5__["AcademicDeptService"] }
    ]; };
    AcademicSubjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-academic-subjects',
            template: _raw_loader_academic_subjects_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_academic_subjects_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_5__["AcademicDeptService"]])
    ], AcademicSubjectsComponent);
    return AcademicSubjectsComponent;
}());



/***/ }),

/***/ "QuhS":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/academic-subjects/academic-subjects.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Subjects <span class=\"sub-menu1\">> {{term}} > {{paper}} > {{sTitle}} </span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n    <!-- <mat-card-title>\r\n        <div class=\"text-right\" >\r\n            <button mat-raised-button (click)=\"addSubject()\" class=\"add-btton\">\r\n                <mat-icon>add</mat-icon> Add\r\n            </button>\r\n        </div>\r\n    </mat-card-title> -->\r\n    <mat-card-actions>\r\n        <div class=\"text-right mr-3 \" >\r\n            <button mat-raised-button (click)=\"addSubject()\" class=\"add-btton\">\r\n                <mat-icon>add</mat-icon> Add\r\n            </button>\r\n        </div>\r\n    </mat-card-actions>\r\n    <mat-card-content>\r\n        <div class=\"card m-4\" *ngFor=\"let topics of subjectList; let i=index\">\r\n                <div class=\"card-body row\">\r\n\r\n                    <div class=\"p-2 col-md-4\" >\r\n\r\n                        <mat-list role=\"list\">\r\n                            <mat-list-item role=\"listitem\" >\r\n                                <h4>Date</h4>\r\n                            </mat-list-item>\r\n\r\n                            <mat-list-item role=\"listitem\" >\r\n                                {{topics.createdAt | date:'dd MMM yyyy'}}\r\n                            </mat-list-item>\r\n                        </mat-list>\r\n                    </div>\r\n                    <div class=\"p-2 col-md-4 topics-data\" >\r\n                        <mat-list role=\"list\">\r\n                            <mat-list-item role=\"listitem\">\r\n                               <h4>Topics</h4> \r\n                            </mat-list-item>\r\n                            <mat-list-item role=\"listitem\" *ngFor=\"let t of topics.termTopic\">{{t.topicName}}</mat-list-item>\r\n                        </mat-list>\r\n                    </div>\r\n        \r\n                    <div class=\"p-2 col-md-4\" >\r\n                            <mat-list role=\"list\">\r\n                                <mat-list-item role=\"listitem\">\r\n                                   <h4>View</h4> \r\n                                </mat-list-item>\r\n                                <mat-list-item role=\"listitem\" >\r\n                                        <a href=\"javascript:void(0)\" class=\"act-btn\" (click)=\"viewSubject(topics)\">\r\n                                            <mat-icon>\r\n                                                visibility\r\n                                            </mat-icon>\r\n                                        </a>\r\n                                </mat-list-item>\r\n                            </mat-list>\r\n                    </div>\r\n                \r\n                    \r\n                </div>\r\n        </div>\r\n        \r\n        \r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n<!-- <mat-card>\r\n\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addSubject()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y' || \"-\" }} </td>\r\n                </ng-container>\r\n\r\n\r\n                <ng-container matColumnDef=\"topics\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Topics </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> \r\n                        <span *ngFor=\"let e of element.termTopic\" > {{e.topicName}}, </span>\r\n                    </td>\r\n                </ng-container>\r\n                \r\n                <ng-container matColumnDef=\"view\">\r\n                    <th mat-header-cell *matHeaderCellDef> View </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewSubject(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> \r\n                    </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Records Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n</mat-card> -->");

/***/ }),

/***/ "pllp":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-subjects/academic-subjects.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card-title {\n  height: 40px;\n}\n\n.mat-card-actions {\n  height: 40px;\n}\n\n.topics-data {\n  display: flex !important;\n}\n\n.card-body {\n  padding: 0 1.25rem;\n}\n\n.act-btn:hover mat-icon {\n  color: #c19953;\n}");

/***/ }),

/***/ "pm8Q":
/*!************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-subjects/academic-subjects.module.ts ***!
  \************************************************************************************/
/*! exports provided: SUBJECTS_ROUTES, AcademicSubjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBJECTS_ROUTES", function() { return SUBJECTS_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicSubjectsModule", function() { return AcademicSubjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _academic_subjects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./academic-subjects.component */ "5QTo");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { SUBJECTS_ROUTES } from './subjects.routes';


var SUBJECTS_ROUTES = [
    // Guard for Modules
    { path: '', component: _academic_subjects_component__WEBPACK_IMPORTED_MODULE_4__["AcademicSubjectsComponent"] },
    { path: 'add-subject', loadChildren: function () { return Promise.all(/*! import() | add-subject-add-subject-module */[__webpack_require__.e("common"), __webpack_require__.e("add-subject-add-subject-module")]).then(__webpack_require__.bind(null, /*! ./add-subject/add-subject.module */ "IPp3")).then(function (m) { return m.AddSubjectModule; }); } },
    { path: 'view-subject', loadChildren: function () { return Promise.all(/*! import() | add-subject-add-subject-module */[__webpack_require__.e("common"), __webpack_require__.e("add-subject-add-subject-module")]).then(__webpack_require__.bind(null, /*! ./add-subject/add-subject.module */ "IPp3")).then(function (m) { return m.AddSubjectModule; }); } },
];
var AcademicSubjectsModule = /** @class */ (function () {
    function AcademicSubjectsModule() {
    }
    AcademicSubjectsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _academic_subjects_component__WEBPACK_IMPORTED_MODULE_4__["AcademicSubjectsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(SUBJECTS_ROUTES),
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], AcademicSubjectsModule);
    return AcademicSubjectsModule;
}());



/***/ })

}]);