(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["academic-assignments-academic-assignments-module"],{

/***/ "8RFy":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-assignments/academic-assignments.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-panel11 h4 {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 0px;\n}\n\n.mat-panel11 mat-expansion-panel {\n  margin-bottom: 11px;\n  background: #eee;\n}\n\n.mat-panel11 .mat-expansion-panel .mat-expansion-panel {\n  background: #fff !important;\n}");

/***/ }),

/***/ "b+TU":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/academic-assignments/academic-assignments.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\">Academic Department<span class=\"sub-menu1\"> > Assignments > {{term}} > {{paper}} > {{assTitle}}</span> </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\" style=\"margin-left: 92%;\" >\r\n  \r\n        <button mat-raised-button (click)=\"addAssign()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n    <mat-accordion class=\"mat-panel11\">\r\n\r\n        <mat-expansion-panel *ngFor=\"let i of Data\">\r\n            <mat-expansion-panel-header (click)=\"addnew(i.id)\">\r\n                <mat-panel-title>\r\n                    <h4 >{{i.assignment}}</h4>\r\n                </mat-panel-title>\r\n                <mat-icon style=\"margin-right: 30px;\" (click)=\"delete(i.id)\">delete</mat-icon>\r\n\r\n                <mat-panel-description>\r\n                    <!-- This is a summary of the content -->\r\n                </mat-panel-description>\r\n                <!-- <mat-icon>delete</mat-icon> -->\r\n\r\n            </mat-expansion-panel-header>\r\n            <div>\r\n\r\n                <mat-accordion class=\"mat-panel11\">\r\n                    <form [formGroup]=\"addassignmentForm\">\r\n                       \r\n                    <!-- <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                <h4>Assignment</h4>\r\n                            </mat-panel-title>\r\n                            <mat-panel-description>\r\n                            </mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                      \r\n                        <input id=\"name\" type=\"text\" class=\"form-control\" formControlName=\"assignment\" maxlength=\"100\" \r\n                        placeholder=\"Assignment\">\r\n\r\n\r\n                    </mat-expansion-panel> -->\r\n                    <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                <h4>Questions</h4>\r\n\r\n                                \r\n                            </mat-panel-title>\r\n                            <mat-panel-description>\r\n                            </mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-12\" >\r\n                         \r\n                                    <div [innerHTML]=\"i.question\"></div> \r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <h4>Last Submission Date:-</h4>\r\n<br>\r\n                                <p >{{i.lastSubmissionDate}}</p>\r\n        \r\n                            </div>\r\n                       </div>\r\n                       <!-- <button mat-raised-button  (click)=\"addAssignment()\">ADD</button> -->\r\n                       \r\n                    </mat-expansion-panel>\r\n                </form>\r\n\r\n                    <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                <h4>Answers</h4>\r\n                            </mat-panel-title>\r\n                            <mat-panel-description>\r\n                                <!-- This is a summary of the content -->\r\n                            </mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                        <div class=\"example-container \">\r\n                            <div class=\"example-table-container\">\r\n                                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n                    \r\n                                    <!-- Position Column -->\r\n                                    <ng-container matColumnDef=\"number\">\r\n                                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                                        <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                                            {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                                    </ng-container>\r\n                    \r\n                    \r\n                                    <!-- name Column -->\r\n                                    <ng-container matColumnDef=\"name\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.cadetName}} </td>\r\n                                    </ng-container>\r\n                    \r\n                                     <!-- Name Column -->\r\n                                   <ng-container matColumnDef=\"description\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> IMA.No </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.serviceId}} </td>\r\n                                    </ng-container>\r\n                                    <ng-container matColumnDef=\"remark\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Remark </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"  >{{element.remark}} </td>\r\n                                    </ng-container>\r\n                                    <ng-container matColumnDef=\"createdAt\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Submitted by </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"  >{{element.createdAt| date:'short'}} </td>\r\n                                    </ng-container>\r\n                                    <ng-container matColumnDef=\"document\">\r\n                                        <th mat-header-cell *matHeaderCellDef>Answer File </th>\r\n                                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                                            <a  *ngIf=\"element.file!==null\" href=\"javascript:void(0)\" (click)=\"openDoc1(element)\">\r\n                                                <mat-icon>description</mat-icon>\r\n                                            </a>\r\n                                        </td>\r\n                                    </ng-container>\r\n                                    <!-- <ng-container matColumnDef=\"createdAt\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Submission date </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"  >{{element.createdAt}} </td>\r\n                                    </ng-container> -->\r\n                                    <ng-container matColumnDef=\"answer\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Answer </th>\r\n                                        <td mat-cell *matCellDef=\"let element\" [innerHTML]=\"(element.answer.length>20)? (element.answer | slice:0:20)+'..':(element.answer) \"> </td>\r\n                                    </ng-container>\r\n                    \r\n                                    <!-- Description Column -->\r\n                                    <ng-container matColumnDef=\"view\">\r\n                                        <th mat-header-cell *matHeaderCellDef> View </th>\r\n                                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \r\n                                            <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\" >\r\n                                                <mat-icon>visibility</mat-icon>\r\n                                            </a>    \r\n                                        </td>\r\n                                    </ng-container>\r\n                                    <!-- <ng-container matColumnDef=\"delete\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Delete </th>\r\n                                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                                                (click)=\"delete(element)\">\r\n                                                <mat-icon>delete</mat-icon>\r\n                                            </a> </td>\r\n                                    </ng-container> -->\r\n                    \r\n                                    <!-- Status Column -->\r\n                                    <!-- <ng-container matColumnDef=\"status\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                                        <td mat-cell *matCellDef=\"let element\">\r\n                                            <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                                                (change)=\"changePOCStatus($event,element)\">\r\n                                            </mat-slide-toggle>\r\n                                        </td>\r\n                                    </ng-container> -->\r\n                    \r\n                    \r\n                                    <!-- Action Column -->\r\n                                    <!-- <ng-container matColumnDef=\"action\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                                                (click)=\"viewPOC(element)\">\r\n                                                <mat-icon>visibility</mat-icon>\r\n                                            </a> </td>\r\n                                    </ng-container> -->\r\n                    \r\n                                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                                    <tr class=\"mat-row\" *matNoDataRow>\r\n                                        <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                    \r\n                            <mat-paginator hidden #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n                        </div>\r\n                    </mat-expansion-panel>\r\n\r\n                 \r\n                </mat-accordion>\r\n\r\n            </div>\r\n\r\n        </mat-expansion-panel>\r\n\r\n     \r\n       \r\n\r\n    </mat-accordion>\r\n\r\n\r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "lgc1":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-assignments/academic-assignments.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AcademicAssignmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicAssignmentsComponent", function() { return AcademicAssignmentsComponent; });
/* harmony import */ var _raw_loader_academic_assignments_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./academic-assignments.component.html */ "b+TU");
/* harmony import */ var _academic_assignments_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./academic-assignments.component.scss */ "8RFy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/academic-dept/academic-dept.service */ "1ABS");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_Shared_delete_assignments_delete_assignments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/Shared/delete-assignments/delete-assignments.component */ "H6qj");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/auth-service/auth.service */ "V7IE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AcademicAssignmentsComponent = /** @class */ (function () {
    function AcademicAssignmentsComponent(adminservice, cdref, spinner, router, route, fb, academicservice, authService, dialog) {
        var _this = this;
        this.adminservice = adminservice;
        this.cdref = cdref;
        this.spinner = spinner;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.academicservice = academicservice;
        this.authService = authService;
        this.dialog = dialog;
        this.awardeesList = [];
        this.addassignmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({});
        this.displayedColumns = ['number', 'name', 'description', 'remark', 'createdAt', 'document', 'answer', 'view'];
        this.POC = [];
        this.Question = [];
        this.Id = [];
        this.Data = [];
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.term = params.term;
            _this.paper = params.paper;
            _this.assignment = params.assignment;
            // console.log(this.term)
            // console.log(this.paper)
            console.log(_this.assignment);
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
            if (_this.assignment == "Science and Warfare") {
                _this.assTitle = "Science & Warfare";
            }
            else {
                _this.assTitle = _this.assignment;
            }
            _this.getAcademicQuestion();
        });
        var tempTermId;
        if (this.term == "I Term") {
            tempTermId = 1;
        }
        else if (this.term == "II Term") {
            tempTermId = 2;
        }
        else if (this.term == "III Term") {
            tempTermId = 3;
        }
        else if (this.term == "IV Term") {
            tempTermId = 4;
        }
        else if (this.term == "V Term") {
            tempTermId = 5;
        }
        else if (this.term == "VI Term") {
            tempTermId = 6;
        }
        else if (this.term == "II Tech") {
            tempTermId = 7;
        }
        this.abc = tempTermId;
        this.addassignmentForm = this.fb.group({
            assignment: [''],
            question: [''],
            assignmentType: [this.assignment],
            paper: [this.paper],
            status: ['1'],
            termId: [this.termId],
        });
    }
    AcademicAssignmentsComponent.prototype.ngOnInit = function () {
    };
    AcademicAssignmentsComponent.prototype.ngAfterViewInit = function () {
        // this.getAssignments()
        this.getAcademicQuestion();
    };
    AcademicAssignmentsComponent.prototype.addnew = function (id) {
        console.log(id);
        this.getAssignments(id);
    };
    AcademicAssignmentsComponent.prototype.getAcademicQuestion = function () {
        var _this = this;
        console.log(this.termId);
        this.spinner.show();
        this.academicservice.getAnswerList(this.paper, this.assignment, this.termId, 1).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.Data = res.object;
                // console.log(this.Id,"jjjjjjj")
                _this.spinner.hide();
                _this.cdref.detectChanges();
                console.log(res, "question Response");
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
    AcademicAssignmentsComponent.prototype.getAssignments = function (id) {
        var _this = this;
        // this.addassignmentForm.value.acdAsnId= id;
        // this.spinner.show();
        this.academicservice.getAssigenment(id, 1).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.POC = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                // this.spinner.hide();
                // this.cdref.detectChanges();
                console.log(res, "=================");
            }
            else {
                _this.adminservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.adminservice.openSnackbar("Some Error Occured.");
        });
    };
    AcademicAssignmentsComponent.prototype.onChange = function (event) {
        this.authService.resetTime();
        // console.log(event.editor.getData());
        console.log(event.editor);
    };
    AcademicAssignmentsComponent.prototype.mouseEvent = function (e, t) {
        // console.log(t)
        this.authService.resetTime();
    };
    AcademicAssignmentsComponent.prototype.addAssign = function () {
        this.router.navigate(['/main/academic-depart/assignments/' + this.term + '/' + this.paper + '/' + this.assignment + '/add-assignment']);
    };
    AcademicAssignmentsComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], {
            width: '900px', height: '350px',
            data: {
                type: 'text', title: "", url: e.answer, id: e.id, remark: e.remark,
            }
        });
    };
    AcademicAssignmentsComponent.prototype.openDoc1 = function (e) {
        console.log(e);
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "ITPPP Document", url: e.file
            }
        });
    };
    AcademicAssignmentsComponent.prototype.addAssignment = function () {
        var _this = this;
        // this.spinner.show();
        console.log(this.addassignmentForm.value);
        this.academicservice.addAssignment(this.addassignmentForm.value).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.adminservice.openSnackbar(res.message);
                // this.cdref.detectChanges();
                // this.spinner.hide();
                // this.router.navigate(['main/admin/GS-Branch/stats/stats/poc']);
            }
            else {
                // this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        }, function (err) {
            // this.spinner.hide();
            _this.adminservice.openSnackbar('Error Occured.');
            console.log(JSON.stringify(err));
        });
    };
    // delete(element) {
    //   this.academicservice.deleteAssignment(element, 3).subscribe(
    //     res => {
    //       console.log(res);
    //       if (res.status == 'OK') {
    //         this.adminservice.openSnackbar("Record Deleted")
    //         this.ngAfterViewInit();
    //         this.cdref.detectChanges();
    //         this.spinner.hide();
    //       } else {
    //         this.spinner.hide();
    //         this.adminservice.openSnackbar(res.message)
    //       }
    //     },
    //     err => {
    //       this.spinner.hide();
    //       this.adminservice.openSnackbar('Error Occured.')
    //       console.log(JSON.stringify(err));
    //     }
    //   )
    // }
    AcademicAssignmentsComponent.prototype.delete = function (element) {
        var _this = this;
        var dialogRef = this.dialog.open(app_Shared_delete_assignments_delete_assignments_component__WEBPACK_IMPORTED_MODULE_9__["DeleteAssignmentsComponent"], {
            data: {
                message: 'Are you sure want to Delete Assignment ?',
                buttonText: {
                    ok: 'Delete',
                    cancel: 'Cancel'
                }
            }
        });
        dialogRef.afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
                _this.academicservice.deleteAssignment(element, 3).subscribe(function (res) {
                    console.log(res);
                    if (res.status == 'OK') {
                        _this.adminservice.openSnackbar("Record Deleted");
                        _this.ngAfterViewInit();
                        _this.cdref.detectChanges();
                        _this.spinner.hide();
                    }
                    else {
                        _this.spinner.hide();
                        _this.adminservice.openSnackbar(res.message);
                    }
                }, function (err) {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar('Error Occured.');
                    console.log(JSON.stringify(err));
                });
            }
        });
    };
    AcademicAssignmentsComponent.ctorParameters = function () { return [
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_10__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
        { type: app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_6__["AcademicDeptService"] },
        { type: app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
    ]; };
    AcademicAssignmentsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true },] }]
    };
    AcademicAssignmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-academic-assignments',
            template: _raw_loader_academic_assignments_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_academic_assignments_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_10__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_6__["AcademicDeptService"], app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], AcademicAssignmentsComponent);
    return AcademicAssignmentsComponent;
}());



/***/ }),

/***/ "ukB5":
/*!******************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-assignments/academic-assignments.module.ts ***!
  \******************************************************************************************/
/*! exports provided: SUBJECTS_ROUTES, AcademicAssignmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBJECTS_ROUTES", function() { return SUBJECTS_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicAssignmentsModule", function() { return AcademicAssignmentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _academic_assignments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./academic-assignments.component */ "lgc1");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { SUBJECTS_ROUTES } from './subjects.routes';



var SUBJECTS_ROUTES = [
    // Guard for Modules
    { path: '', component: _academic_assignments_component__WEBPACK_IMPORTED_MODULE_4__["AcademicAssignmentsComponent"] },
    { path: 'add-assignment', loadChildren: function () { return __webpack_require__.e(/*! import() | add-academic-assignments-add-academic-assignments-module */ "add-academic-assignments-add-academic-assignments-module").then(__webpack_require__.bind(null, /*! ./add-academic-assignments/add-academic-assignments.module */ "h/5o")).then(function (m) { return m.AddAcademicAssignmentsModule; }); } },
];
var AcademicAssignmentsModule = /** @class */ (function () {
    function AcademicAssignmentsModule() {
    }
    AcademicAssignmentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _academic_assignments_component__WEBPACK_IMPORTED_MODULE_4__["AcademicAssignmentsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(SUBJECTS_ROUTES),
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"]
            ]
        })
    ], AcademicAssignmentsModule);
    return AcademicAssignmentsModule;
}());



/***/ })

}]);