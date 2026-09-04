(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camp-marks-camp-marks-module"],{

/***/ "1Iw2":
/*!***********************************************************************!*\
  !*** ./src/app/main/trg-battalion/camp-marks/camp-marks.component.ts ***!
  \***********************************************************************/
/*! exports provided: CampMarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampMarksComponent", function() { return CampMarksComponent; });
/* harmony import */ var _raw_loader_camp_marks_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./camp-marks.component.html */ "EuTI");
/* harmony import */ var _camp_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camp-marks.component.scss */ "xas0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/observable/of */ "G4OQ");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CampMarksComponent = /** @class */ (function () {
    function CampMarksComponent(dialog, modalService, spinner, route, fb, router, _trgBattalion, cdref, activeRoute) {
        var _this = this;
        this.dialog = dialog;
        this.modalService = modalService;
        this.spinner = spinner;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this._trgBattalion = _trgBattalion;
        this.cdref = cdref;
        this.activeRoute = activeRoute;
        this.LDMatrixForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.pageTitle = "Add Leadership Development Matrix";
        this.id = '';
        this.battalionList = [];
        this.companyList = [];
        this.leaderShipSubject = [];
        this.attrInput = [];
        this.isError = false;
        this.totalmarks = 0;
        this.displayStyle = "none";
        this.pageSize = 50;
        this.currentPage = 0;
        this.battalionName = '0';
        this.route.params.subscribe(function (params) {
            _this.term = params.term;
            if (_this.term == "I Term") {
                _this.termId = 1;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
            }
            else if (_this.term == "II Term") {
                _this.termId = 2;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
            }
            else if (_this.term == "III Term") {
                _this.termId = 3;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
            }
            else if (_this.term == "II Tech") {
                _this.termId = 7;
                _this.battalionId = null;
                _this.companyList = [];
                _this.companyName = null;
                _this.serviceid = null;
            }
            _this.getCampMarksSubject();
            if (_this.resultsLength == 0) {
                _this.leaderShipList = null;
            }
            if (_this.companyName == undefined || _this.companyName == null || _this.companyName == '' || _this.companyName == 0) {
                _this.getCampMarksAlllist();
            }
            else {
                _this.OQName();
            }
            _this._trgBattalion.getBattalionList().subscribe(function (res) {
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
        });
        this.LDMatrixForm = this.fb.group({
            serviceId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termId: [this.termId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            obtainedMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            totalMarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            campSubjectResult: this.fb.array([]),
        });
    }
    CampMarksComponent.prototype.blockPaste = function (e) {
        e.preventDefault();
    };
    Object.defineProperty(CampMarksComponent.prototype, "campSubjectResult", {
        get: function () {
            return this.LDMatrixForm.get("campSubjectResult");
        },
        enumerable: false,
        configurable: true
    });
    CampMarksComponent.prototype.ngOnInit = function () {
    };
    CampMarksComponent.prototype.ngAfterViewInit = function () {
    };
    CampMarksComponent.prototype.OQName = function () { };
    CampMarksComponent.prototype.onChange = function (e, value, totalMarks, sub_id, mainIndex, subIndex) {
        if (value > totalMarks || value == NaN) {
            this._trgBattalion.openSnackbar("Obtained marks is greater than total marks");
            value = '';
            e.target.value = null;
        }
        else if (value == "") {
            this.leaderShipList[mainIndex].campMarksResult.campSubjectResult[subIndex].obtainedMarks = '';
            return false;
        }
        else {
            var total = document.getElementById(mainIndex).value;
            if (total) {
                document.getElementById(mainIndex).value = parseInt(total) + (value == '' ? 0 : parseInt(value)) + "";
                this.leaderShipList[mainIndex].campMarksResult.obtainedMarks = parseInt(total) + (value == '' ? 0 : parseInt(value));
            }
            else {
                document.getElementById(mainIndex).value = value;
                this.leaderShipList[mainIndex].campMarksResult.obtainedMarks = (value == '' ? 0 : parseInt(value));
            }
            this.leaderShipList[mainIndex].campMarksResult.campSubjectResult[subIndex].obtainedMarks = value;
        }
        console.log('%%%%%%%%%%%%%%%%%%%%%%', this.leaderShipList);
        // this.leaderShipList
    };
    CampMarksComponent.prototype.onFocusEvent = function (value, mainIndex) {
        if (value == NaN || value == '' || value == undefined) {
            return false;
        }
        var total = document.getElementById(mainIndex).value;
        if (total) {
            var temp = parseInt(total) - parseInt(value);
            document.getElementById(mainIndex).value = parseInt(total) + parseInt(value) + "";
            this.leaderShipList[mainIndex].campMarksResult.obtainedMarks = temp == 0 ? null : temp;
        }
        else {
            document.getElementById(mainIndex).value = value;
            this.leaderShipList[mainIndex].campMarksResult.obtainedMarks = value;
        }
        // this.obtainedTotalMarks -= parseInt(val);
        if (this.obtainedTotalMarks == NaN) {
            this.obtainedTotalMarks = 0;
            if (this.obtainedTotalMarks == 0) {
                this.obtainedTotalMarks = '';
            }
        }
    };
    CampMarksComponent.prototype.confirm = function () {
        var _this = this;
        this.spinner.show();
        this.LDMatrixForm.value == this.totalMarks1;
        this.totalMarks1 = Object.assign({}, this.LDMatrixForm.value, { obtainedMarks: this.obtainedTotalMarks });
        var formdata = this.leaderShipList;
        console.log(formdata);
        this._trgBattalion.updateCamp_Marks_list(formdata).subscribe(function (res) {
            if (res.message == "Record updated successfully") {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Updated Successfully");
                window.location.reload();
            }
            else {
                (function (err) {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar("Some Error Occured.");
                });
            }
        });
    };
    CampMarksComponent.prototype.battalionSelected = function (e) {
        var _this = this;
        this.battalionName = e;
        this.companyName = null;
        if (this.battalionName == '0') {
            this.battalionId = null;
            this.companyName = null;
        }
        if (this.battalionName == 'CA') {
            this.battalionId = 1;
        }
        else if (this.battalionName == "TH") {
            this.battalionId = 2;
        }
        else if (this.battalionName == "MA") {
            this.battalionId = 3;
        }
        else if (this.battalionName == "BH") {
            this.battalionId = 4;
        }
        this.spinner.show();
        if (this.battalionId != null || this.battalionName != '0') {
            this._trgBattalion.getCompanyList(this.battalionId).subscribe(function (res) {
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
            this.companyName = null;
        }
        this.companyList = [];
        this.getCampMarksAlllist();
    };
    CampMarksComponent.prototype.companySelected = function (e) {
        this.companyName = e;
        if (this.companyName == 0) {
            this.getSpecialAllList();
            this.companyName = null;
        }
        else {
            if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
                this.getCampMarksAlllist();
            }
        }
        this.getCampMarksAlllist();
    };
    CampMarksComponent.prototype.getSpecialAllList = function () {
        var _this = this;
        this._trgBattalion.getCamp_All_ListByBCNameComp(this.termId, this.currentPage, this.pageSize, this.battalionName).subscribe(function (res) {
            console.log(res);
            if (res.message == 'OK') {
                _this.resultsLength = res.object.totalRecords;
                _this.leaderShipList = res.object.oqMatrixFilterPayload;
            }
            else {
                _this.leaderShipList = [];
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this._trgBattalion.openSnackbar("Some Error Occured.");
        });
    };
    CampMarksComponent.prototype.getTotal = function (marks) {
        return marks.reduce(function (acc, _a) {
            var obtainedMarks = _a.obtainedMarks;
            return acc += +(obtainedMarks || 0);
        }, 0);
    };
    CampMarksComponent.prototype.getCampMarksSubject = function () {
        var _this = this;
        this.spinner.show();
        this._trgBattalion.getCamp_Marks_Subject(1).subscribe(function (res) {
            console.log(res, "========leaderShipSubject=========");
            if (res.status == "OK") {
                _this.leaderShipSubject = res.object;
                _this.subjectSize = res.object.length;
                console.log(_this.subjectSize, "this.subjectSizethis.subjectSize");
                _this.spinner.hide();
                _this.cdref.detectChanges();
                console.log(res, "========leaderShipSubject=========");
            }
            else {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this._trgBattalion.openSnackbar("Some Error Occured.");
        });
    };
    CampMarksComponent.prototype.serviceSearch = function (e) {
        this.serviceid = e;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this.getCampMarksAlllist();
        }
    };
    CampMarksComponent.prototype.edSearch = function (event) {
        var _this = this;
        if (this.serviceid == null || this.serviceid == undefined || this.serviceid == '') {
            this._trgBattalion.openSnackbar("Search Bar is Empty. Please fill the details");
        }
        else {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(/* this.sort.sortChange,  */ this.paginator.page)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () {
                _this.spinner.show();
                return _this._trgBattalion.getCamp_Marks_list_search(_this.termId, _this.serviceid, _this.paginator.pageIndex, _this.paginator.pageSize);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (data) {
                // this.getTotalRecords();
                _this.resultsLength = data.object.totalRecords;
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(function () {
                console.log('Error here');
                _this.spinner.hide();
                return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_10__["of"])([]);
                // return null;
            })).subscribe(function (data) {
                if (data.status == 'OK') {
                    _this.leaderShipList = data.object.campMarksFilterPayload;
                    if (data.object.campMarksFilterPayload.length > 0) {
                        _this.leaderShipList = data.object.campMarksFilterPayload;
                    }
                    else {
                        _this.leaderShipList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.leaderShipList = [];
                }
                _this.spinner.hide();
                // var scrollElem = document.querySelector('#orders');
                // scrollElem.scrollIntoView();
            });
        }
    };
    CampMarksComponent.prototype.pageChanged = function (event) {
        this.pageSize = event.pageSize;
        console.log(this.pageSize, "page size");
        this.currentPage = event.pageIndex;
        console.log(this.currentPage, "currentPage");
        this.getCampMarksAlllist();
    };
    CampMarksComponent.prototype.getCampMarksAlllist = function () {
        var _this = this;
        if (this.battalionId == 1 || this.battalionId == 2 || this.battalionId == 3 || this.battalionId == 4) {
            this._trgBattalion.getCamp_All_ListByBCName(this.termId, this.currentPage, this.pageSize, this.battalionName, this.companyName).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.leaderShipList = res.object.campMarksFilterPayload;
                    if (res.object.campMarksFilterPayload.length > 0) {
                        _this.resultsLength = res.object.totalRecords;
                        _this.leaderShipList = res.object.campMarksFilterPayload;
                    }
                    else {
                        _this.leaderShipList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.leaderShipList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Some Error Occured.");
            });
        }
        else {
            this._trgBattalion.getCamp_Marks_list(this.termId, this.currentPage, 1, this.pageSize).subscribe(function (res) {
                console.log(res);
                if (res.message == 'Record not found') {
                    _this.spinner.hide();
                    _this._trgBattalion.openSnackbar(res.message);
                }
                if (res.message == 'OK') {
                    _this.leaderShipList = res.object.campMarksFilterPayload;
                    if (res.object.campMarksFilterPayload.length > 0) {
                        _this.resultsLength = res.object.totalRecords;
                        _this.leaderShipList = res.object.campMarksFilterPayload;
                    }
                    else {
                        _this.leaderShipList = [];
                    }
                    _this.cdref.detectChanges();
                }
                else {
                    _this.leaderShipList = [];
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar("Some Error Occured.");
            });
        }
    };
    CampMarksComponent.prototype.openPopup = function () {
        this.displayStyle = "block";
    };
    CampMarksComponent.prototype.closePopup = function () {
        this.displayStyle = "none";
    };
    CampMarksComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode == 32) {
            event.preventDefault();
        }
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    CampMarksComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_13__["TrgBattalionService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    CampMarksComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSort"],] }],
        blockPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['paste', ['$event'],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true },] }]
    };
    CampMarksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-camp-marks',
            template: _raw_loader_camp_marks_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_camp_marks_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_13__["TrgBattalionService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], CampMarksComponent);
    return CampMarksComponent;
}());



/***/ }),

/***/ "EuTI":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-battalion/camp-marks/camp-marks.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"mat-heading\">\r\n      <div id=\"top-bar\" class=\"\">\r\n          <h2>TRG BATTALION <span class=\"sub-menu1\">\r\n            > Camp Marks > {{term}}</span></h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"academics\">\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n       \r\n        <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"battalion\">Battalion</label>\r\n              <select id=\"battalion\" name=\"battalion\" (change)=\"battalionSelected($event.target.value)\" class=\"form-control\">\r\n                <option value=\"0\" selected>Select</option>\r\n                <option *ngFor=\"let b of battalionList\" [value]=\"b.shortName\"> {{b.shortName}}</option>\r\n              </select>\r\n              \r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <label for=\"company\">Company</label>\r\n              <select id=\"company\" class=\"form-control\" name=\"company\"  (change)=\"companySelected($event.target.value)\">\r\n                <option value=\"0\" selected>Select</option>\r\n                <option *ngFor=\"let c of companyList\" [value]=\"c.name\"> {{c.name}}</option>\r\n              </select>\r\n             \r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"rank\">Search</label>\r\n                <input placeholder=\"IMA No.\" formcontrolname=\"\" type=\"text\" name=\"serviceid\" [(ngModel)]=\"serviceid\" (keyup)=\"serviceSearch($event.target.value)\"\r\n                  class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <label>&nbsp;</label>\r\n              <button type=\"button\" mat-raised-button (click)=\"edSearch()\">Search</button>\r\n              <!-- <button mat-raised-button (click)=\"clearSearch()\" >Clear</button> -->\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n        <form [formGroup]=\"LDMatrixForm\" class=\"oq-matrix-form\">\r\n          <table class=\"tg\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Bn/Coy</th>\r\n                <th class=\"tg-qnnc\" colspan=\"13\">Subjects</th>\r\n\r\n              </tr>\r\n\r\n              <tr>\r\n                <th colspan=\"1\" style=\"width: 11%;\" *ngFor=\"let subject of leaderShipSubject\" class=\"tg-qnnc\">{{subject.subjectName}}<br>Marks\r\n                  ({{subject.totalMarks}})</th>\r\n\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Total<br>Marks(140)</th>\r\n\r\n              </tr>\r\n\r\n\r\n            </thead>\r\n            <tbody>\r\n\r\n              <tr *ngFor=\"let leadership of leaderShipList; let leadershipIndex = index\">\r\n                <td class=\"tg-c3ow\">{{ leadershipIndex + 1}}</td>\r\n                <td class=\"tg-c3ow\">{{ leadership.serviceId }}</td>\r\n                <td class=\"tg-0pky\">{{ leadership.course }}</td>\r\n                <td class=\"tg-c3ow\">{{ leadership.name }}</td>\r\n                <!-- <td class=\"tg-0pky\">{{ leadership.nationality }}</td> -->\r\n                <td class=\"tg-c3ow\">\r\n                  <p  *ngIf=\"leadership.nationality=='India'\">OC</p>\r\n                  <p  *ngIf=\"leadership.nationality !='India'\">FGC</p>\r\n                </td>\r\n                <td class=\"tg-c3ow\">{{leadership.battalian}}/{{ leadership.company}}</td>\r\n                <td class=\"tg-c3ow\"  *ngFor=\"let leadershipSubject of leadership.campMarksResult.campSubjectResult; let leadershipSubjectIndex = index\">\r\n                  <div class=\"d-flex\">\r\n                    <ng-container\r\n                     >\r\n                      <input type=\"text\" class=\"form-control d-inline\" value=\"{{leadershipSubject.obtainedMarks}}\"\r\n                        (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\"\r\n                        min=\"0\" (keypress)=\"keyPress($event)\"\r\n                        on-focusout=\"onChange($event,$event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                    </ng-container>\r\n                  </div>\r\n                </td>\r\n\r\n                <td class=\"tg-0pky\">\r\n                  <input type=\"text\" class=\"form-control\" disabled id=\"{{leadershipIndex}}\"\r\n                    value=\"{{ leadership.campMarksResult.obtainedMarks }}\">\r\n                </td>\r\n\r\n\r\n\r\n                <div *ngIf=\"!leadership.campMarksResult\">\r\n                  <div *ngFor=\"let size of leaderShipSubject;let ser=index;\">\r\n                    <td class=\"tg-c3ow\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"obtainedMarks\">\r\n                    </td>\r\n                    <td *ngIf=\"ser+1 == leaderShipSubject.length\" class=\"tg-c3ow\">{{obtainedTotalMarks}}</td>\r\n                  </div>\r\n                </div>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"16\" *ngIf=\"!leaderShipList?.length\"><div >No Record Found</div></td>\r\n             </tr>\r\n          \r\n\r\n            </tbody>\r\n          </table>\r\n        </form>\r\n        <div class=\"\">\r\n          <mat-paginator #myPaginator [length]=\"resultsLength\" [pageIndex]=\"currentPage\" [pageSize]=\"pageSize\"\r\n          [pageSizeOptions]=\"[50]\" (page)=\"pageChanged($event)\" aria-label=\"Select page\" showFirstLastButtons>\r\n        </mat-paginator>\r\n\r\n        </div>\r\n        <div class=\"btn-sec mt-3 text-right\">\r\n          <button type=\"button\" disabled mat-raised-button (click)=\"openPopup()\" *ngIf=\"! leaderShipList?.length\">Preview</button>\r\n          <button type=\"button\" mat-raised-button (click)=\"openPopup()\" *ngIf=\"leaderShipList?.length > 0\">Preview</button>\r\n\r\n\r\n          <!-- ////dshsj -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayStyle}\">\r\n  <div class=\"modal-dialog modal-lg modal-dialog-scrollable custom-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Review</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <table class=\"tg\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">S. No.</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">IMA No.</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Course</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Name</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Rank</th>\r\n              <th class=\"tg-qnnc\" rowspan=\"3\">Bn/Coy</th>\r\n              <th class=\"tg-qnnc\" colspan=\"11\">Subjects</th>\r\n\r\n            </tr>\r\n\r\n            <tr>\r\n              <th colspan=\"1\" style=\"width: 11%;\" *ngFor=\"let subject of leaderShipSubject\" class=\"tg-qnnc\">{{subject.subjectName}}<br>Marks\r\n                ({{subject.totalMarks}})</th>\r\n\r\n                <th class=\"tg-qnnc\" rowspan=\"3\">Total<br>Marks(125)</th>\r\n\r\n            </tr>\r\n\r\n\r\n          </thead>\r\n          <tbody>\r\n\r\n            <tr *ngFor=\"let leadership of leaderShipList; let leadershipIndex = index\">\r\n              <td class=\"tg-c3ow\">{{ leadershipIndex + 1}}</td>\r\n              <td class=\"tg-c3ow\">{{ leadership.serviceId }}</td>\r\n              <td class=\"tg-0pky\">{{ leadership.course }}</td>\r\n              <td class=\"tg-c3ow\">{{ leadership.name }}</td>\r\n              <!-- <td class=\"tg-0pky\">{{ leadership.nationality }}</td> -->\r\n              <td class=\"tg-c3ow\">\r\n                <p  *ngIf=\"leadership.nationality=='India'\">OC</p>\r\n                <p  *ngIf=\"leadership.nationality !='India'\">FGC</p>\r\n              </td>\r\n              <td class=\"tg-c3ow\">{{leadership.battalian}}/{{ leadership.company}}</td>\r\n              <td class=\"tg-c3ow\"  *ngFor=\"let leadershipSubject of leadership.campMarksResult.campSubjectResult; let leadershipSubjectIndex = index\">\r\n                <div class=\"d-flex\">\r\n                  <ng-container\r\n                   >\r\n                    <input type=\"text\" disabled class=\"form-control d-inline\" value=\"{{leadershipSubject.obtainedMarks}}\"\r\n                      (focus)=\"onFocusEvent($event.target.value,leadershipIndex)\"\r\n                      min=\"0\" (keypress)=\"keyPress($event)\"\r\n                      on-focusout=\"onChange($event, $event.target.value, leadershipSubject.totalMarks, leadershipSubject.subjectId, leadershipIndex, leadershipSubjectIndex)\">\r\n                  </ng-container>\r\n                </div>\r\n              </td>\r\n\r\n              <td class=\"tg-0pky\">\r\n                <input type=\"text\" class=\"form-control\" disabled id=\"{{leadershipIndex}}\"\r\n                  value=\"{{ leadership.campMarksResult.obtainedMarks }}\">\r\n              </td>\r\n\r\n\r\n\r\n              <div *ngIf=\"!leadership.campMarksResult\">\r\n                <div *ngFor=\"let size of leaderShipSubject;let ser=index;\">\r\n                  <td class=\"tg-c3ow\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"obtainedMarks\">\r\n                  </td>\r\n                  <td *ngIf=\"ser+1 == leaderShipSubject.length\" class=\"tg-c3ow\">{{obtainedTotalMarks}}</td>\r\n                </div>\r\n              </div>\r\n            </tr>\r\n\r\n            <!-- <div formArrayName=\"campSubjectResult\">\r\n            <div *ngFor=\"let l of campSubjectResult.controls; let i=index\">\r\n              <div [formGroupName]=\"i\">\r\n                {{i}}\r\n                <td class=\"tg-c3ow\"><input type=\"text\" formControlName=\"obtainedMarks\"  class=\"form-control\" value=\"{{l.obtainedMarks}}\" \r\n                  (focus)=\"onFocusEvent($event.target.value)\"\r\n                  (change)=\"onChange($event.target.value, l.totalMarks, i)\"></td>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button mat-raised-button type=\"button\" class=\"btn-dark\" (click)=\"closePopup()\">Back</button>\r\n        <button type=\"button\" mat-raised-button (click)=\"confirm()\">Submit</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "UwbW":
/*!********************************************************************!*\
  !*** ./src/app/main/trg-battalion/camp-marks/camp-marks.module.ts ***!
  \********************************************************************/
/*! exports provided: CampMarksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampMarksModule", function() { return CampMarksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _camp_marks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./camp-marks.component */ "1Iw2");
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
        component: _camp_marks_component__WEBPACK_IMPORTED_MODULE_4__["CampMarksComponent"]
    },
    {
        path: 'add-campmark',
        loadChildren: function () { return __webpack_require__.e(/*! import() | camp-marks-add-camp-marks-add-camp-marks-module */ "camp-marks-add-camp-marks-add-camp-marks-module").then(__webpack_require__.bind(null, /*! ../camp-marks/add-camp-marks/add-camp-marks.module */ "GcS5")).then(function (m) { return m.AddCampMarksModule; }); }
    },
    {
        path: 'view-campmark',
        loadChildren: function () { return __webpack_require__.e(/*! import() | camp-marks-add-camp-marks-add-camp-marks-module */ "camp-marks-add-camp-marks-add-camp-marks-module").then(__webpack_require__.bind(null, /*! ../camp-marks/add-camp-marks/add-camp-marks.module */ "GcS5")).then(function (m) { return m.AddCampMarksModule; }); }
    }
];
var CampMarksModule = /** @class */ (function () {
    function CampMarksModule() {
    }
    CampMarksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _camp_marks_component__WEBPACK_IMPORTED_MODULE_4__["CampMarksComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], CampMarksModule);
    return CampMarksModule;
}());



/***/ }),

/***/ "xas0":
/*!*************************************************************************!*\
  !*** ./src/app/main/trg-battalion/camp-marks/camp-marks.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 !important;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #bb9450;\n  background: #e1e3de;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.form-control {\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  vertical-align: middle;\n}\n\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg .tg-qnnc {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle !important;\n  font-weight: bold !important;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: normal;\n}\n\n.tg .tg-as14 {\n  background-color: #c6c4c4;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: top;\n  font-weight: normal;\n}\n\n.modal-content {\n  max-width: 100% !important;\n}\n\n.open-button {\n  background-color: #555;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 280px;\n}\n\n/* The popup form - hidden by default */\n\n.form-popup {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}\n\n/* Add styles to the form container */\n\n.form-container {\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n}\n\n/* Full-width input fields */\n\n.form-container input[type=text], .form-container input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* When the inputs get focus, do something */\n\n.form-container input[type=text]:focus, .form-container input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for the submit/login button */\n\n.form-container .btn {\n  background-color: #04AA6D;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom: 10px;\n  opacity: 0.8;\n}\n\n/* Add a red background color to the cancel button */\n\n.form-container .cancel {\n  background-color: red;\n}\n\n/* Add some hover effects to buttons */\n\n.form-container .btn:hover, .open-button:hover {\n  opacity: 1;\n}\n\n.custom-lg {\n  max-width: unset;\n  margin: 0px;\n  border-radius: 1px;\n}\n\n.custom-lg .modal-content {\n  border-radius: 0px;\n}\n\n.oq-matrix-form {\n  overflow-x: scroll;\n}\n\n.modal-dialog-scrollable {\n  max-height: 100%;\n}\n\n.modal-dialog-scrollable .modal-content {\n  max-height: 100%;\n}");

/***/ })

}]);