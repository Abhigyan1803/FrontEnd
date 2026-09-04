(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["biometric-rfid-card-biometric-rfid-card-module"],{

/***/ "3Gb4":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/access-control/biometric-rfid-card/biometric-rfid-card.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: BiometricRfidCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiometricRfidCardComponent", function() { return BiometricRfidCardComponent; });
/* harmony import */ var _raw_loader_biometric_rfid_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./biometric-rfid-card.component.html */ "q+HM");
/* harmony import */ var _biometric_rfid_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./biometric-rfid-card.component.scss */ "7d25");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
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












var BiometricRfidCardComponent = /** @class */ (function () {
    function BiometricRfidCardComponent(router, adminservice, spinner, cdref, dialog, sharedService) {
        this.router = router;
        this.adminservice = adminservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.awardeesList = [];
        this.displayedColumns = ['number', 'name', 'description', 'document', 'status', 'action'];
        this.BiometricRfid = [];
    }
    BiometricRfidCardComponent.prototype.ngOnInit = function () {
    };
    BiometricRfidCardComponent.prototype.ngAfterViewInit = function () {
        this.getBIOMETRIC();
    };
    BiometricRfidCardComponent.prototype.getBIOMETRIC = function () {
        var _this = this;
        this.spinner.show();
        this.adminservice.getBIOMETRIC(2).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.BiometricRfid = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
                console.log(res, "=================");
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
    BiometricRfidCardComponent.prototype.addBiometric = function () {
        this.router.navigate(['/main/admin/GS-Branch/security/access-control/biometric-rfid/add-biometric']);
    };
    BiometricRfidCardComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    BiometricRfidCardComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    BiometricRfidCardComponent.prototype.viewBiometric = function (element) {
        this.router.navigate(['main/admin/GS-Branch/security/access-control/biometric-rfid/view-biometric'], { queryParams: { id: element.id } });
        if (this.router.url.includes('main/GS-Branch'))
            this.router.navigate(['main/GS-Branch/security/access-control/biometric-rfid/view-biometric'], { queryParams: { id: element.id } });
        if (this.router.url.includes('main/admin'))
            this.router.navigate(['main/admin/GS-Branch/security/access-control/biometric-rfid/view-biometric'], { queryParams: { id: element.id } });
    };
    BiometricRfidCardComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.BiometricRfid.slice();
        if (!sort.active || sort.direction === '') {
            this.BiometricRfid = datalist;
            return;
        }
        this.BiometricRfid = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'description': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.BiometricRfid);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    BiometricRfidCardComponent.prototype.openDoc = function (e) {
        console.log(e.file);
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Biometric Document", url: e.file
            }
        });
    };
    BiometricRfidCardComponent.prototype.changeBIOMETRICStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.adminservice.changeBIOMETRICStatus(d.id, 1).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    // this.ngAfterViewInit();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this.adminservice.changeBIOMETRICStatus(d.id, 0).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    // this.ngAfterViewInit();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    BiometricRfidCardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
    ]; };
    BiometricRfidCardComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }]
    };
    BiometricRfidCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-biometric-rfid-card',
            template: _raw_loader_biometric_rfid_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_biometric_rfid_card_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], BiometricRfidCardComponent);
    return BiometricRfidCardComponent;
}());



/***/ }),

/***/ "7d25":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/access-control/biometric-rfid-card/biometric-rfid-card.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "89DD":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/access-control/biometric-rfid-card/biometric-rfid-card.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: BiometricRfidCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiometricRfidCardModule", function() { return BiometricRfidCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _biometric_rfid_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./biometric-rfid-card.component */ "hjxu");
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
        component: _biometric_rfid_card_component__WEBPACK_IMPORTED_MODULE_4__["BiometricRfidCardComponent"]
    },
    {
        path: 'add-biometric',
        loadChildren: function () { return __webpack_require__.e(/*! import() | biometric-rfid-card-add-biometric-rfid-add-biometric-rfid-module */ "biometric-rfid-card-add-biometric-rfid-add-biometric-rfid-module").then(__webpack_require__.bind(null, /*! ../biometric-rfid-card/add-biometric-rfid/add-biometric-rfid.module */ "Sdm4")).then(function (m) { return m.AddBiometricRfidModule; }); }
    },
    {
        path: 'view-biometric',
        loadChildren: function () { return __webpack_require__.e(/*! import() | biometric-rfid-card-add-biometric-rfid-add-biometric-rfid-module */ "biometric-rfid-card-add-biometric-rfid-add-biometric-rfid-module").then(__webpack_require__.bind(null, /*! ../biometric-rfid-card/add-biometric-rfid/add-biometric-rfid.module */ "Sdm4")).then(function (m) { return m.AddBiometricRfidModule; }); }
    }
];
var BiometricRfidCardModule = /** @class */ (function () {
    function BiometricRfidCardModule() {
    }
    BiometricRfidCardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _biometric_rfid_card_component__WEBPACK_IMPORTED_MODULE_4__["BiometricRfidCardComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], BiometricRfidCardModule);
    return BiometricRfidCardModule;
}());



/***/ }),

/***/ "NCkF":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/access-control/biometric-rfid-card/biometric-rfid-card.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: BiometricRfidCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiometricRfidCardModule", function() { return BiometricRfidCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _biometric_rfid_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./biometric-rfid-card.component */ "3Gb4");
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
        component: _biometric_rfid_card_component__WEBPACK_IMPORTED_MODULE_4__["BiometricRfidCardComponent"]
    },
    {
        path: 'add-biometric',
        loadChildren: function () { return __webpack_require__.e(/*! import() | biometric-rfid-card-add-biometric-rfid-add-biometric-rfid-module */ "biometric-rfid-card-add-biometric-rfid-add-biometric-rfid-module").then(__webpack_require__.bind(null, /*! ../biometric-rfid-card/add-biometric-rfid/add-biometric-rfid.module */ "LhO0")).then(function (m) { return m.AddBiometricRfidModule; }); }
    },
    {
        path: 'view-biometric',
        loadChildren: function () { return __webpack_require__.e(/*! import() | biometric-rfid-card-add-biometric-rfid-add-biometric-rfid-module */ "biometric-rfid-card-add-biometric-rfid-add-biometric-rfid-module").then(__webpack_require__.bind(null, /*! ../biometric-rfid-card/add-biometric-rfid/add-biometric-rfid.module */ "LhO0")).then(function (m) { return m.AddBiometricRfidModule; }); }
    }
];
var BiometricRfidCardModule = /** @class */ (function () {
    function BiometricRfidCardModule() {
    }
    BiometricRfidCardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _biometric_rfid_card_component__WEBPACK_IMPORTED_MODULE_4__["BiometricRfidCardComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], BiometricRfidCardModule);
    return BiometricRfidCardModule;
}());



/***/ }),

/***/ "OIFG":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/access-control/biometric-rfid-card/biometric-rfid-card.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "hjxu":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/access-control/biometric-rfid-card/biometric-rfid-card.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: BiometricRfidCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiometricRfidCardComponent", function() { return BiometricRfidCardComponent; });
/* harmony import */ var _raw_loader_biometric_rfid_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./biometric-rfid-card.component.html */ "o0mz");
/* harmony import */ var _biometric_rfid_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./biometric-rfid-card.component.scss */ "OIFG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
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












var BiometricRfidCardComponent = /** @class */ (function () {
    function BiometricRfidCardComponent(router, adminservice, spinner, cdref, dialog, sharedService) {
        this.router = router;
        this.adminservice = adminservice;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.awardeesList = [];
        this.displayedColumns = ['number', 'name', 'description', 'document', 'action'];
        this.BiometricRfid = [];
    }
    BiometricRfidCardComponent.prototype.ngOnInit = function () {
    };
    BiometricRfidCardComponent.prototype.ngAfterViewInit = function () {
        this.getBIOMETRIC();
    };
    BiometricRfidCardComponent.prototype.getBIOMETRIC = function () {
        var _this = this;
        this.spinner.show();
        this.adminservice.getBIOMETRIC(2).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.BiometricRfid = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
                console.log(res, "=================");
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
    BiometricRfidCardComponent.prototype.addBiometric = function () {
        this.router.navigate(['/main/gs-branch/security/access-control/biometric-rfid/add-biometric']);
    };
    BiometricRfidCardComponent.prototype.noImg = function (e) {
        e.target.src = "assets/img/default_user.png";
    };
    BiometricRfidCardComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    BiometricRfidCardComponent.prototype.viewBiometric = function (element) {
        this.router.navigate(['main/gs-branch/security/access-control/biometric-rfid/view-biometric'], { queryParams: { id: element.id } });
        if (this.router.url.includes('main/gs-branch'))
            this.router.navigate(['main/gs-branch/security/access-control/biometric-rfid/view-biometric'], { queryParams: { id: element.id } });
        // if(this.router.url.includes('main/admin'))
        // this.router.navigate(['main/admin/GS-Branch/security/access-control/biometric-rfid/view-biometric'],{queryParams:{id:element.id}})  
    };
    BiometricRfidCardComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.BiometricRfid.slice();
        if (!sort.active || sort.direction === '') {
            this.BiometricRfid = datalist;
            return;
        }
        this.BiometricRfid = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'description': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.BiometricRfid);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    BiometricRfidCardComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Biometric Document", url: e.file
            }
        });
    };
    BiometricRfidCardComponent.prototype.changeBIOMETRICStatus = function (e, d) {
        var _this = this;
        this.spinner.show();
        if (e.checked) {
            this.adminservice.changeBIOMETRICStatus(d.id, 1).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    // this.ngAfterViewInit();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
        else {
            this.adminservice.changeBIOMETRICStatus(d.id, 0).subscribe(function (res) {
                console.log(res);
                if (res.status == 'OK') {
                    _this.adminservice.openSnackbar(res.message);
                    _this.cdref.detectChanges();
                    // this.ngAfterViewInit();
                    _this.spinner.hide();
                }
                else {
                    _this.spinner.hide();
                    _this.adminservice.openSnackbar(res.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.adminservice.openSnackbar('Error Occured.');
            });
            this.spinner.hide();
        }
    };
    BiometricRfidCardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
    ]; };
    BiometricRfidCardComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: true },] }]
    };
    BiometricRfidCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-biometric-rfid-card',
            template: _raw_loader_biometric_rfid_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_biometric_rfid_card_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], BiometricRfidCardComponent);
    return BiometricRfidCardComponent;
}());



/***/ }),

/***/ "o0mz":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/gs-branch/security/access-control/biometric-rfid-card/biometric-rfid-card.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Admin Biometric Rfid Card </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addBiometric()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n   \r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                 <!-- Name Column -->\r\n            <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \r\n                        <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\" >\r\n                            <mat-icon>description</mat-icon>\r\n                        </a>    \r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeBIOMETRICStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewBiometric(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n  \r\n</mat-card>\r\n");

/***/ }),

/***/ "q+HM":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/admin/gs-branch/security/access-control/biometric-rfid-card/biometric-rfid-card.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Admin Biometric Rfid Card </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"d-flex btn-set\">\r\n        <div class=\"search\">\r\n            <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n        </div>\r\n        <button mat-raised-button (click)=\"addBiometric()\" class=\"add-btton\">\r\n            <mat-icon>add</mat-icon> Add\r\n        </button>\r\n    </div>\r\n\r\n   \r\n    <div class=\"example-container \">\r\n        <div class=\"example-table-container\">\r\n            <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                 <!-- Name Column -->\r\n            <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> \r\n                        <a href=\"javascript:void(0)\" (click)=\"openDoc(element)\" >\r\n                            <mat-icon>description</mat-icon>\r\n                        </a>    \r\n                    </td>\r\n                </ng-container>\r\n\r\n                <!-- Status Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                    <td mat-cell *matCellDef=\"let element\">\r\n                        <mat-slide-toggle [checked]=\"element.status == 1\"\r\n                            (change)=\"changeBIOMETRICStatus($event,element)\">\r\n                        </mat-slide-toggle>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\"\r\n                            (click)=\"viewBiometric(element)\">\r\n                            <mat-icon>visibility</mat-icon>\r\n                        </a> </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n  \r\n</mat-card>\r\n");

/***/ })

}]);