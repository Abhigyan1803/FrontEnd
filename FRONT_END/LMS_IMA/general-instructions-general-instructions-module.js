(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-instructions-general-instructions-module"],{

/***/ "BUsx":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/general-instructions/general-instructions.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: GeneralInstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInstructionsComponent", function() { return GeneralInstructionsComponent; });
/* harmony import */ var _raw_loader_general_instructions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./general-instructions.component.html */ "eAsQ");
/* harmony import */ var _general_instructions_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-instructions.component.scss */ "ZiXy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
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












var GeneralInstructionsComponent = /** @class */ (function () {
    function GeneralInstructionsComponent(router, spinner, cdref, dialog, _trgBattalion, service) {
        this.router = router;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this._trgBattalion = _trgBattalion;
        this.service = service;
        this.displayedColumns = ['number', 'date', 'name', 'acType', 'seasonTerm', 'status', 'document', 'action'];
        this.generalInstructions = [];
    }
    GeneralInstructionsComponent.prototype.ngOnInit = function () {
    };
    GeneralInstructionsComponent.prototype.ngAfterViewInit = function () {
        this.getAllGeneralInstructions();
    };
    GeneralInstructionsComponent.prototype.getAllGeneralInstructions = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllGeneralInstructions().subscribe(function (res) {
            if (res.status == '1') {
                _this.spinner.hide();
                _this.generalInstructions = res.List;
                _this.generalInstructions = _this.generalInstructions.map(function (res) { return ({
                    id: res.id, createdAt: res.createdAt, acType: res.acType.type, year: res.year, seasonTerm: res.seasonTerm.name,
                    description: res.description, document: res.document, docName: res.docName, status: res.status
                }); });
                _this.cdref.detectChanges();
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.generalInstructions);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                _this.spinner.hide();
                _this._trgBattalion.openSnackbar(res.msg);
            }
        }, function (err) {
            _this.spinner.hide();
            _this._trgBattalion.openSnackbar('Some Error Occured');
        });
    };
    GeneralInstructionsComponent.prototype.openDoc = function (e) {
        console.log(e.document, "document");
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Letters Document", url: e.document
            }
        });
    };
    GeneralInstructionsComponent.prototype.changeInstructionStatus = function (e, id) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.service.changeInstructionStatus(id, 1).subscribe(function (res) {
                if (res.status == '1') {
                    _this._trgBattalion.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this.service.changeInstructionStatus(id, 0).subscribe(function (res) {
                if (res.status == '1') {
                    _this._trgBattalion.openSnackbar(res.msg);
                    _this.cdref.detectChanges();
                    _this.ngAfterViewInit();
                }
            }, function (err) {
                _this._trgBattalion.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    GeneralInstructionsComponent.prototype.updateGeneralInstruction = function (i) {
        if (this.router.url.includes('/main/admin/trg-team/')) {
            this.router.navigate(['/main/admin/trg-team/adventure-cell/general-instruction/view-instruction'], { queryParams: { id: i } });
        }
        else {
            this.router.navigate(['/main/trg-team/adventure-cell/general-instruction/view-instruction'], { queryParams: { id: i } });
        }
    };
    GeneralInstructionsComponent.prototype.addInstruction = function () {
        if (this.router.url.includes('/main/admin/trg-team/')) {
            this.router.navigate(['/main/admin/trg-team/adventure-cell/general-instruction/add-instruction']);
        }
        else {
            this.router.navigate(['/main/trg-team/adventure-cell/general-instruction/add-instruction']);
        }
    };
    GeneralInstructionsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    GeneralInstructionsComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.generalInstructions.slice();
        if (!sort.active || sort.direction === '') {
            this.generalInstructions = datalist;
            return;
        }
        this.generalInstructions = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'date': return _this._trgBattalion.compare(a.createdAt, b.createdAt, isAsc);
                case 'name': return _this._trgBattalion.compare(a.docName.toLowerCase(), b.docName.toLowerCase(), isAsc);
                case 'acType': return _this._trgBattalion.compare(a.acType, b.acType, isAsc);
                case 'seasonTerm': return _this._trgBattalion.compare(a.seasonTerm, b.seasonTerm, isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.generalInstructions);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    GeneralInstructionsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__["TrgBattalionService"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"] }
    ]; };
    GeneralInstructionsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true },] }]
    };
    GeneralInstructionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-general-instructions',
            template: _raw_loader_general_instructions_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_general_instructions_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
            app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_7__["TrgBattalionService"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_8__["TrgTeamService"]])
    ], GeneralInstructionsComponent);
    return GeneralInstructionsComponent;
}());



/***/ }),

/***/ "Cba3":
/*!******************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/general-instructions/add-instruction/add-instruction.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "H2Aw":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/general-instructions/general-instructions.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: GeneralInstructionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInstructionsModule", function() { return GeneralInstructionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _general_instructions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-instructions.component */ "BUsx");
/* harmony import */ var _add_instruction_add_instruction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-instruction/add-instruction.component */ "YW7H");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _general_instructions_component__WEBPACK_IMPORTED_MODULE_4__["GeneralInstructionsComponent"]
    },
    {
        path: 'add-instruction', component: _add_instruction_add_instruction_component__WEBPACK_IMPORTED_MODULE_5__["AddInstructionComponent"]
    },
    {
        path: 'view-instruction', component: _add_instruction_add_instruction_component__WEBPACK_IMPORTED_MODULE_5__["AddInstructionComponent"]
    }
];
var GeneralInstructionsModule = /** @class */ (function () {
    function GeneralInstructionsModule() {
    }
    GeneralInstructionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _general_instructions_component__WEBPACK_IMPORTED_MODULE_4__["GeneralInstructionsComponent"],
                _add_instruction_add_instruction_component__WEBPACK_IMPORTED_MODULE_5__["AddInstructionComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ]
        })
    ], GeneralInstructionsModule);
    return GeneralInstructionsModule;
}());



/***/ }),

/***/ "YW7H":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/general-instructions/add-instruction/add-instruction.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AddInstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInstructionComponent", function() { return AddInstructionComponent; });
/* harmony import */ var _raw_loader_add_instruction_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-instruction.component.html */ "fK2k");
/* harmony import */ var _add_instruction_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-instruction.component.scss */ "Cba3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddInstructionComponent = /** @class */ (function () {
    function AddInstructionComponent(fb, spinner, cdref, dialog, snackbar, router, route, service) {
        var _this = this;
        this.fb = fb;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.router = router;
        this.route = route;
        this.service = service;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.adventureCellTypes = [];
        this.seasonTerms = [];
        this.currentYear = new Date().getFullYear();
        this.isDoc = true;
        this.nameLength = 0;
        this.descLength = 0;
        this.addInstructionForm = this.fb.group({
            docName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            acType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            year: [this.currentYear, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            document: [],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        if (this.router.url.includes('view-instruction')) {
            this.pTitle = "View Instruction";
            this.id = this.route.snapshot.queryParamMap.get('id');
            this.service.getInstructionById(this.id).subscribe(function (res) {
                _this.spinner.show();
                // console.log(res);
                if (res.status == '1') {
                    _this.addInstructionForm.patchValue({
                        docName: res.List.docName,
                        acType: res.List.acType.id,
                        term: res.List.seasonTerm.id,
                        year: res.List.year,
                        description: res.List.description,
                        status: res.List.status
                    });
                    _this.docUrl = res.List.document;
                    _this.nameLength = res.List.docName.length;
                    _this.descLength = res.List.description.length;
                    _this.spinner.hide();
                }
            });
        }
        else {
            this.pTitle = "Add Instruction";
        }
    }
    AddInstructionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllAdventureCellType().subscribe(function (res) {
            console.log(res);
            if (res.status = '1') {
                _this.adventureCellTypes = res.List;
            }
        });
        this.service.getAllSeasonTerm().subscribe(function (res) {
            // console.log(res);
            if (res.status == '1') {
                _this.seasonTerms = res.List;
            }
        });
        this.unSelectedFile = this.docFile.nativeElement.files;
    };
    /** ========= CHARACTERS COUNT ========= */
    AddInstructionComponent.prototype.charCount = function (e, t) {
        if (t == 'docName')
            this.nameLength = e.target.value.length;
        if (t == 'description')
            this.descLength = e.target.value.length;
    };
    Object.defineProperty(AddInstructionComponent.prototype, "f", {
        get: function () {
            return this.addInstructionForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddInstructionComponent.prototype.openDoc = function (doc) {
        var dialogRef = this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], {
            width: '1200px', height: '600px',
            data: {
                type: 'document', url: doc
            }
        });
    };
    AddInstructionComponent.prototype.onSelectDoc = function (e) {
        var file = e.target.files[0];
        if (file.size > 52428800) {
            this.docFile.nativeElement.files = this.unSelectedFile;
            this.openSnackbar('Document Should Be Maximum 50 MB in Size');
        }
        else {
            this.addInstructionForm.patchValue({
                document: file
            });
            this.isDoc = true;
        }
    };
    AddInstructionComponent.prototype.addInstruction = function () {
        var _this = this;
        if (this.addInstructionForm.valid) {
            if (this.addInstructionForm.value.document == null) {
                this.isDoc = false;
            }
            else {
                this.isDoc = true;
                this.spinner.show();
                this.service.addGenralInstruction(this.addInstructionForm.value).subscribe(function (res) {
                    // console.log(res);
                    _this.apiRes(res);
                }, function (err) {
                    _this.spinner.hide();
                    _this.openSnackbar('Some Error Occured.');
                });
            }
        }
        else {
            this.isError = true;
        }
    };
    AddInstructionComponent.prototype.updateInstruction = function () {
        var _this = this;
        if (this.addInstructionForm.valid) {
            this.spinner.show();
            this.service.updateGenralInstruction(this.id, this.addInstructionForm.value).subscribe(function (res) {
                // console.log(res);
                _this.apiRes(res);
            }, function (err) {
                _this.spinner.hide();
                _this.openSnackbar('Some Error Occured.');
            });
        }
        else {
            this.isError = true;
        }
    };
    AddInstructionComponent.prototype.apiRes = function (res) {
        if (res.status == '1') {
            this.spinner.hide();
            this.openSnackbar(res.msg);
            this.cdref.detectChanges();
            this.goBack();
        }
        else {
            this.spinner.hide();
            this.openSnackbar(res.msg);
        }
    };
    AddInstructionComponent.prototype.goBack = function () {
        if (this.router.url.includes('main/admin/trg-team')) {
            this.router.navigate(['/main/admin/trg-team/adventure-cell/general-instruction']);
        }
        else {
            this.router.navigate(['/main/trg-team/adventure-cell/general-instruction']);
        }
    };
    AddInstructionComponent.prototype.openSnackbar = function (msg) {
        this.snackbar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    AddInstructionComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"] }
    ]; };
    AddInstructionComponent.propDecorators = {
        docFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputFile', { static: true },] }]
    };
    AddInstructionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-instruction',
            template: _raw_loader_add_instruction_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_instruction_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"]])
    ], AddInstructionComponent);
    return AddInstructionComponent;
}());



/***/ }),

/***/ "ZiXy":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/trg-team/adventure-cell/general-instructions/general-instructions.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "eAsQ":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/adventure-cell/general-instructions/general-instructions.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Adventure Cell <span class=\"sub-menu1\"> > General Instructions </span> </h4>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addInstruction()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n    <!-- <div class=\"gene-card-content pad-t-none\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Sr.No.</th>\r\n                         <th>Date</th>\r\n                        <th>Document Name</th>\r\n                        <th>Adventure Cell Type</th>\r\n                        <th>Term & Year</th>                   \r\n                        <th>Status</th>\r\n                        <th>Document</th>\r\n                        <th>View</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let i of generalInstructions;let in=index\" >\r\n                        <td>{{in+1}}</td>\r\n                        <td>{{i.createdAt|date:'d MMMM, y'}} </td>\r\n                        <td>{{i.docName}}</td>\r\n                        <td>{{i.acType?.type || 'na'}} </td>\r\n                        <td>{{i.seasonTerm?.name ||'na' }} - {{i.year}} </td>       \r\n                        <td>\r\n                            <mat-slide-toggle [checked]=\"i.status == 1\" (change)=\"changeInstructionStatus($event,i.id)\" ></mat-slide-toggle>\r\n                        </td>\r\n                        <td> <mat-icon (click)=\"openDoc(i)\">description</mat-icon> </td>\r\n                        <td class=\"act-btn\">\r\n                            <a href=\"javascript:void(0)\" (click)=\"updateGeneralInstruction(i)\" >\r\n                                <mat-icon>visibility</mat-icon>    \r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"example-container \">  \r\n    <div class=\"example-table-container\">\r\n    <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"number\">\r\n            <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n            <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Date Column -->\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.docName}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Adventure Cell Column -->\r\n        <ng-container matColumnDef=\"acType\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Adventure Cell </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element?.acType || '-'}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Season Term Column -->\r\n        <ng-container matColumnDef=\"seasonTerm\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Season Term </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element?.seasonTerm ||'-'}}-{{element.year}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <!-- Description Column -->\r\n        <ng-container matColumnDef=\"description\">\r\n            <th mat-header-cell *matHeaderCellDef > Description </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Status Column -->\r\n        <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef > Status </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n                <mat-slide-toggle [checked]=\"element.status == 1\" (change)=\"changeInstructionStatus($event,element.id)\">\r\n                </mat-slide-toggle>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Document Column -->\r\n        <ng-container matColumnDef=\"document\">\r\n            <th mat-header-cell *matHeaderCellDef > Document </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                <a  href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n                    <mat-icon>description</mat-icon>\r\n                </a>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!-- Action Column -->\r\n        <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef > Action </th>\r\n            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                    (click)=\"updateGeneralInstruction(element.id)\">\r\n                    <mat-icon>visibility</mat-icon>\r\n                </a> </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        <tr class=\"mat-row\" *matNoDataRow>\r\n            <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n\r\n    <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n\r\n</mat-card>");

/***/ }),

/***/ "fK2k":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/trg-team/adventure-cell/general-instructions/add-instruction/add-instruction.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"><button mat-icon-button (click)=\"goBack()\" ><mat-icon>chevron_left</mat-icon> </button> Adventure Cell <span class=\"sub-menu1\"> > General Instruction > {{pTitle}} </span>\r\n        <span class=\"sub-menu1\"> </span>\r\n    </h4>\r\n</div>\r\n<mat-card>\r\n    <div class=\"top-br\">\r\n        <form [formGroup]=\"addInstructionForm\" >\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Instruction Name <span class=\"char-count\" > ({{nameLength}}/100) </span> <span class=\"required\">*</span></label>\r\n                    <input type=\"text\"  (input)=\"charCount($event,'docName')\" formControlName=\"docName\" maxlength=\"100\" placeholder=\"Instruction Name (Maximum 100 Characters)\" class=\"form-control\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.docName.errors && f.docName.errors.required && isError\" >Instruction Name is required</span>   \r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Adventure Cell Type <span class=\"required\">*</span></label>\r\n                    <select name=\"\" id=\"\" class=\"form-control\" formControlName=\"acType\" >\r\n                        <option value=\"\" selected disabled hidden >Adventure Cell Type</option>\r\n                        <option *ngFor=\"let actype of adventureCellTypes\"  [value]=\"actype.id\">{{actype.type}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.acType.errors && f.acType.errors.required && isError\" >Adventure Cell Type is required</span>   \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Season Term <span class=\"required\">*</span></label>\r\n                    <select name=\"\" id=\"\" formControlName=\"term\" class=\"form-control\" >\r\n                        <option value=\"\" selected disabled hidden >Season Term</option>\r\n                        <option *ngFor=\"let term of seasonTerms\" [value]=\"term.id\">{{term.name}} </option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.term.errors && f.term.errors.required && isError\" >Season Term is required</span>   \r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Year<span class=\"required\">*</span></label>\r\n                    <input type=\"text\" type=\"number\" [min]=\"currentYear\"  class=\"form-control\" maxlength=\"4\" formControlName=\"year\" placeholder=\"Year\">\r\n                    <span class=\"validation_msg\" *ngIf=\"f.year.errors && f.year.errors.required && isError\" >Year is required</span>   \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-12\">\r\n                    <label class=\"form-label\">Description<span class=\"char-count\" > ({{descLength}}/500) </span> <span class=\"required\">*</span></label>\r\n                    <textarea class=\"form-control\"  (input)=\"charCount($event,'description')\" id=\"message\" formControlName=\"description\" maxlength=\"500\" placeholder=\"Description (Maximum 500 Characters)\"></textarea>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.description.errors && f.description.errors.required && isError\" >Description is required</span>   \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"form-label\">Document<span class=\"required\">*</span></label>    \r\n                <input type=\"file\" #inputFile accept=\".pdf,.doc,.docx\" (change)=\"onSelectDoc($event)\" id=\"image\">\r\n                <mat-icon *ngIf=\"docUrl\" (click)=\"openDoc(docUrl)\"  class=\"document_icon\">description</mat-icon>\r\n                <span class=\"note\">Max File Size 50 MB. (Only pdf and doc format.)</span>\r\n                <span class=\"validation_msg\" *ngIf=\"!isDoc\" >Document is required</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-label\">Status <span class=\"required\">*</span></label>\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\" selected hidden disabled>Status</option>\r\n                        <option value=\"1\">Active</option>\r\n                        <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    <span class=\"validation_msg\" *ngIf=\"f.status.errors && f.status.errors.required && isError\" >Status is required</span>   \r\n                </div>\r\n            </div>\r\n\r\n            <button *ngIf=\"pTitle == 'Add Instruction'\" mat-raised-button (click)=\"addInstruction()\"  >Add Instruction</button>\r\n            <button *ngIf=\"pTitle == 'View Instruction'\" mat-raised-button (click)=\"updateInstruction()\"  >Update Instruction</button>\r\n\r\n        </form>\r\n    </div>\r\n</mat-card>");

/***/ })

}]);