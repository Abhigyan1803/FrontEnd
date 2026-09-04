(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["training-team-training-team-module"],{

/***/ "RQXJ":
/*!*******************************************************************************!*\
  !*** ./src/app/main/delay-dashboard/training-team/training-team.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TrainingTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingTeamComponent", function() { return TrainingTeamComponent; });
/* harmony import */ var _raw_loader_training_team_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./training-team.component.html */ "V9qS");
/* harmony import */ var _training_team_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-team.component.scss */ "xs+Q");
/* harmony import */ var _common_style_common_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-style/common-style.scss */ "L2i+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/delay-dashboard/delay-dashboard.service */ "GvGC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TrainingTeamComponent = /** @class */ (function () {
    function TrainingTeamComponent(router, activatedRoute, spinner, delayDashboardService, sharedService, localID) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.delayDashboardService = delayDashboardService;
        this.sharedService = sharedService;
        this.activatedRoute.params.subscribe(function (params) {
            // console.log("Params: ",params);
            _this.term = params.term;
            if (_this.term == 'I Term') {
                _this.termId = 1;
            }
            else if (_this.term == 'II Term') {
                _this.termId = 2;
            }
            else if (_this.term == 'III Term') {
                _this.termId = 3;
            }
            else if (_this.term == 'II Tech') {
                _this.termId = 7;
            }
            else {
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 5);
                _this.router.navigate(['/main/delay-dashboard/not-found']);
            }
            _this.getStaffList();
        });
        this.localID = localID;
    }
    TrainingTeamComponent.prototype.ngOnInit = function () {
    };
    TrainingTeamComponent.prototype.getStaffList = function () {
        var _this = this;
        this.staffList = [];
        this.spinner.show();
        this.showSpinner = true;
        this.statusMsg = '';
        this.delayDashboardService.getStaffList(1, this.termId).subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                if (res.object) {
                    // this.staffList = res.object;
                    res.object.forEach(function (element) {
                        _this.staffList.push(Object.assign(element, { dateGiven: element.finalSubmissionDate ? true : false }));
                    });
                    // console.log(this.staffList);
                    _this.spinner.hide();
                    _this.showSpinner = false;
                }
                else {
                    _this.spinner.hide();
                    _this.showSpinner = false;
                    _this.statusMsg = res.message;
                    _this.sharedService.openSnackbar(res.message);
                }
            }
        }, function (err) {
            _this.spinner.hide();
            _this.showSpinner = false;
            _this.statusMsg = "Error";
        });
    };
    TrainingTeamComponent.prototype.getStatus = function (staff) {
        var status;
        if (!staff.dateOfSubmission) {
            if (staff.finalSubmissionDate) {
                var finalDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(staff.finalSubmissionDate, 'yyyy-MM-dd', this.localID);
                var todayDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date(), 'yyyy-MM-dd', this.localID);
                if (todayDate > finalDate) {
                    status = 'Delayed';
                }
                else if (finalDate > todayDate) {
                    status = 'In Progress';
                }
            }
            else {
                status = '-';
            }
        }
        else {
            status = 'Submitted';
        }
        staff.status = status;
        return status;
    };
    TrainingTeamComponent.prototype.submit = function (obj) {
        var _this = this;
        // console.log(obj);
        this.spinner.show();
        this.delayDashboardService.setFinalSubmitDate(obj).subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
                _this.getStaffList();
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openErrorSnackbarWithSeconds('Error Occured!', 3);
        });
    };
    TrainingTeamComponent.prototype.update = function (obj) {
        var _this = this;
        // console.log(obj);
        this.spinner.show();
        this.delayDashboardService.updateFinalSubmitDate(obj).subscribe(function (res) {
            // console.log(res);
            if (res.status == "OK") {
                _this.spinner.hide();
                _this.getStaffList();
                _this.sharedService.openSnackbar(res.message);
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openErrorSnackbarWithSeconds('Error Occured!', 3);
        });
    };
    TrainingTeamComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_8__["DelayDashboardService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"],] }] }
    ]; };
    TrainingTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ms-training-team',
            template: _raw_loader_training_team_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_training_team_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"], _common_style_common_style_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            app_service_delay_dashboard_delay_dashboard_service__WEBPACK_IMPORTED_MODULE_8__["DelayDashboardService"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], String])
    ], TrainingTeamComponent);
    return TrainingTeamComponent;
}());



/***/ }),

/***/ "V9qS":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/delay-dashboard/training-team/training-team.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\n    <h4 class=\"card-heading\">Delay Dashboard > <span class=\"sub-menu1\">TRG Team > {{term}} </span> </h4>\n</div>\n\n<mat-card class=\"ppt-table\" #tableCard >\n\n\n    <mat-card-content>\n\n        <div class=\"text-center\" *ngIf=\"!staffList.length && showSpinner\">\n            <div class=\"spinner-border \" role=\"status\"    >\n                <span class=\"sr-only\">Loading...</span>\n            </div>\n        </div>\n        <div class=\"text-center\" *ngIf=\"!staffList.length && !showSpinner\" >\n            <h5> {{statusMsg}}</h5> \n        </div>\n\n      <!-- <div  *ngIf=\"staffList.length\" >\n        Set final result submission date for {{term}}\n      </div> -->\n\n        <table class=\"tg\" *ngIf=\"staffList.length\" >\n            <thead class=\"table-head\" id=\"table-header\">\n                <tr>\n                    <th class=\"tg-qnnc\" >S. No.</th>\n                    <th class=\"tg-qnnc\" >Officer's Name</th>\n                    <th class=\"tg-qnnc\" >Officer's Role</th>\n                    <th class=\"tg-qnnc\" >Service I'd</th>\n                    <th class=\"tg-qnnc\" colspan=\"2\" >Date for Final Submission </th>\n                    <th class=\"tg-qnnc\" >Final Submitted At</th>\n                    <th class=\"tg-qnnc\" >Status</th>\n               \n                </tr>\n    \n    \n            </thead>\n    \n            <tbody *ngIf=\"staffList.length\">\n                <tr *ngFor=\"let staff of staffList;let i=index\">\n                    \n                    <td class=\"tg-baqh\"> {{i+1}} </td>\n                    <td class=\"tg-baqh\"> {{staff.name}} </td>\n                    <td class=\"tg-baqh\">\n                        <ul>\n                            <li *ngFor=\"let role of staff.roleNames; let j=index\" >\n                                {{role}}    \n                            </li>\n                        </ul>     \n                    </td>\n                    <td class=\"tg-baqh\"> {{staff.serviceId}} </td>\n                    <td class=\"tg-baqh input-col\"> \n                        <!-- <div style=\"display: flex; width: 200px;\" > -->\n                             \n                        <input type=\"date\" name=\"\" id=\"\" class=\"form-control\" (change)=\"getStatus(staff.finalSubmissionDate)\"\n                        [ngModel]=\"staff.finalSubmissionDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"staff.finalSubmissionDate=$event\" >    \n                        <!-- </div> -->\n                    </td>\n                    <td>\n                        <button mat-raised-button *ngIf=\"!staff.dateGiven\" (click)=\"submit(staff)\" class=\"ml-2\" >Submit</button>\n                        <button mat-raised-button *ngIf=\"staff.dateGiven\" (click)=\"update(staff)\" class=\"ml-2\" >Update</button>\n                    </td>\n                    <td class=\"tg-baqh\"> {{staff.dateOfSubmission || '-'}} </td>\n                    <td class=\"tg-baqh\"> \n                        <span [innerHTML]=\"getStatus(staff)\" >\n                        </span>\n                        <!-- {{staff.status || '-'}}  -->\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "e6D8":
/*!****************************************************************************!*\
  !*** ./src/app/main/delay-dashboard/training-team/training-team.module.ts ***!
  \****************************************************************************/
/*! exports provided: TrainingTeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingTeamModule", function() { return TrainingTeamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _training_team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training-team.component */ "RQXJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _training_team_component__WEBPACK_IMPORTED_MODULE_2__["TrainingTeamComponent"]
    }
];
var TrainingTeamModule = /** @class */ (function () {
    function TrainingTeamModule() {
    }
    TrainingTeamModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _training_team_component__WEBPACK_IMPORTED_MODULE_2__["TrainingTeamComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ]
        })
    ], TrainingTeamModule);
    return TrainingTeamModule;
}());



/***/ }),

/***/ "xs+Q":
/*!*********************************************************************************!*\
  !*** ./src/app/main/delay-dashboard/training-team/training-team.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul {\n  list-style-type: none;\n  margin-left: 0px;\n}\n\nul li {\n  text-align: left;\n}");

/***/ })

}]);