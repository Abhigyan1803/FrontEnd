(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lve-lve-module"],{

/***/ "EWfq":
/*!*********************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Otherdetails/lve/lve.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LveComponent", function() { return LveComponent; });
/* harmony import */ var _raw_loader_lve_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./lve.component.html */ "KxoB");
/* harmony import */ var _lve_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lve.component.scss */ "jy1u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/e-dossier/edossier-service.service */ "kudQ");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LveComponent = /** @class */ (function () {
    function LveComponent(EDossierService, adminservice, fb, router, spinner, cdref, dialog, sharedService, route) {
        this.EDossierService = EDossierService;
        this.adminservice = adminservice;
        this.fb = fb;
        this.router = router;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.route = route;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]('en-IN');
        this.lveDetailsFormI = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.lveDetailsFormII = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.lveDetailsFormIII = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.Id = this.route.snapshot.queryParamMap.get('Id');
        this.termId = this.route.snapshot.queryParamMap.get('termId');
        this.lveDetailsFormI = this.fb.group({
            lveFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lveTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [1],
            serviceId: this.Id
        });
        this.lveDetailsFormII = this.fb.group({
            lveFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lveTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [2],
            serviceId: this.Id
        });
        this.lveDetailsFormIII = this.fb.group({
            lveFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lveTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [3],
            serviceId: this.Id
        });
        this.lveDetailsFormII = this.fb.group({
            lveFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lveTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [7],
            serviceId: this.Id
        });
        this.lveDetailsFormIII = this.fb.group({
            lveFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lveTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [8],
            serviceId: this.Id
        });
    }
    LveComponent.prototype.ngOnInit = function () {
        document.getElementById("lveServiceID").value = localStorage.getItem("e");
        document.getElementById("lveName").value = localStorage.getItem("i");
        document.getElementById("lveComp").value = localStorage.getItem("companyName");
        document.getElementById("lveBn").value = localStorage.getItem("battalionName");
        // (<HTMLInputElement>document.getElementById("lvetid")).value = localStorage.getItem("termId");
        document.getElementById("lvetName").value = localStorage.getItem("termName");
        document.getElementById("lverk").value = localStorage.getItem("rank");
    };
    LveComponent.prototype.ngAfterViewInit = function () {
        // this.getAssignments()
        this.getEdossierLve();
    };
    LveComponent.prototype.goBack = function () {
        window.history.back();
    };
    LveComponent.prototype.getEdossierLve = function () {
        var _this = this;
        this.EDossierService.getLveDetails(this.Id).subscribe(function (res) {
            var values = res.object;
            if (res.status == 'OK') {
                if (res.object && res.object.termId === 1) {
                    console.log(res.object);
                    _this.lveDetailsFormI.patchValue({
                        lveFrom: _this.datePipe.transform(res.object.lveFrom, 'yyyy-MM-dd'),
                        lveTo: _this.datePipe.transform(res.object.lveTo, 'yyyy-MM-dd'),
                        reason: res.object.reason,
                        address: res.object.address,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 2) {
                    _this.lveDetailsFormII.patchValue({
                        lveFrom: _this.datePipe.transform(res.object.lveFrom, 'yyyy-MM-dd'),
                        lveTo: _this.datePipe.transform(res.object.lveTo, 'yyyy-MM-dd'),
                        reason: res.object.reason,
                        address: res.object.address,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 3) {
                    _this.lveDetailsFormIII.patchValue({
                        lveFrom: _this.datePipe.transform(res.object.lveFrom, 'yyyy-MM-dd'),
                        lveTo: _this.datePipe.transform(res.object.lveTo, 'yyyy-MM-dd'),
                        reason: res.object.reason,
                        address: res.object.address,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 7) {
                    _this.lveDetailsFormII.patchValue({
                        lveFrom: _this.datePipe.transform(res.object.lveFrom, 'yyyy-MM-dd'),
                        lveTo: _this.datePipe.transform(res.object.lveTo, 'yyyy-MM-dd'),
                        reason: res.object.reason,
                        address: res.object.address,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 8) {
                    _this.lveDetailsFormIII.patchValue({
                        lveFrom: _this.datePipe.transform(res.object.lveFrom, 'yyyy-MM-dd'),
                        lveTo: _this.datePipe.transform(res.object.lveTo, 'yyyy-MM-dd'),
                        reason: res.object.reason,
                        address: res.object.address,
                        id: res.object.id
                    });
                }
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        });
    };
    LveComponent.prototype.validateFormI = function (livForm) {
        var flag = true;
        if (!livForm.lveFrom || livForm.lveFrom.trim() == '' || !livForm.lveTo || livForm.lveTo.trim() == '' || !livForm.reason || livForm.reason.trim() == '' || !livForm.address || livForm.address.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        return flag;
    };
    LveComponent.prototype.validateFormII = function (livForm) {
        var flag = true;
        if (!livForm.lveFrom || livForm.lveFrom.trim() == '' || !livForm.lveTo || livForm.lveTo.trim() == '' || !livForm.reason || livForm.reason.trim() == '' || !livForm.address || livForm.address.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        return flag;
    };
    LveComponent.prototype.validateFormIII = function (livForm) {
        var flag = true;
        if (!livForm.lveFrom || livForm.lveFrom.trim() == '' || !livForm.lveTo || livForm.lveTo.trim() == '' || !livForm.reason || livForm.reason.trim() == '' || !livForm.address || livForm.address.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        return flag;
    };
    LveComponent.prototype.addLvesubmit1 = function () {
        if (new Date(this.lveDetailsFormI.get('lveFrom').value) > new Date(this.lveDetailsFormI.get('lveTo').value)) {
            this.adminservice.openSnackbar('To date should not greator than From date');
            return false;
        }
        var livForm = this.lveDetailsFormI.value;
        var validateFormstatus = this.validateFormI(livForm);
        var id = livForm.id;
        if (validateFormstatus) {
            if (id === '' || id === undefined) {
                this.addLvesubmit(livForm);
            }
            else {
                this.updateLve(livForm);
            }
        }
    };
    LveComponent.prototype.addLvesubmit2 = function () {
        if (new Date(this.lveDetailsFormII.get('lveFrom').value) > new Date(this.lveDetailsFormII.get('lveTo').value)) {
            this.adminservice.openSnackbar('To date should not greator than From date');
            return false;
        }
        var livForm = this.lveDetailsFormII.value;
        var validateFormstatus = this.validateFormII(livForm);
        var id = livForm.id;
        if (validateFormstatus) {
            if (id === '' || id === undefined) {
                this.addLvesubmit(livForm);
            }
            else {
                this.updateLve(livForm);
            }
        }
    };
    LveComponent.prototype.addLvesubmit3 = function () {
        if (new Date(this.lveDetailsFormIII.get('lveFrom').value) > new Date(this.lveDetailsFormIII.get('lveTo').value)) {
            this.adminservice.openSnackbar('To date should not greator than From date');
            return false;
        }
        var livForm = this.lveDetailsFormIII.value;
        var validateFormstatus = this.validateFormIII(livForm);
        var id = livForm.id;
        if (validateFormstatus) {
            if (id === '' || id === undefined) {
                this.addLvesubmit(livForm);
            }
            else {
                this.updateLve(livForm);
            }
        }
    };
    LveComponent.prototype.addLvesubmit = function (formVal) {
        var _this = this;
        console.log(formVal);
        formVal.reason = formVal.reason.trim();
        formVal.address = formVal.address.trim();
        this.EDossierService.addLveDetails(formVal).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.adminservice.openSnackbar(res.message);
                window.location.reload();
                _this.cdref.detectChanges();
                _this.spinner.hide();
                // this.router.navigate(['e-dossior/ed-content/Ed-index/Otherdetails/hike']);
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
    };
    LveComponent.prototype.updateLve = function (formVal) {
        var _this = this;
        this.EDossierService.updateLveDetails(this.Id, formVal).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.spinner.hide();
                //  this.router.navigate(['e-dossior/ed-content/Ed-index/Otherdetails/club']);
                _this.adminservice.openSnackbar(res.message);
                window.location.reload();
            }
            else {
                _this.spinner.hide();
                _this.adminservice.openSnackbar(res.message);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.adminservice.openSnackbar("Error Occured.");
        });
    };
    LveComponent.ctorParameters = function () { return [
        { type: app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_8__["EDossierService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    LveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-lve',
            template: _raw_loader_lve_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_lve_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_8__["EDossierService"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], LveComponent);
    return LveComponent;
}());



/***/ }),

/***/ "KxoB":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/Otherdetails/lve/lve.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"mat-heading\">\r\n        <div id=\"top-bar\" class=\"\">\r\n          <h2 class=\"backbtn\"><button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n          </button>E-Dossier <span class=\"sub-menu1\">\r\n            > LVE</span></h2>\r\n      </div>\r\n      </div>\r\n      <div class=\"mat-card mat-focus-indicator\">\r\n        <div class=\"service-id mb-2\">\r\n            \r\n            <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"rank\">IMA No.</label>\r\n                    <input placeholder=\"No\"  type=\"text\" disabled id=\"lveServiceID\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                  </div>\r\n                </div>  \r\n                <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"rank\">Rank</label>\r\n                    <input placeholder=\"Rank\"  type=\"text\" disabled id=\"lverk\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"rank\">Name</label>\r\n                    <input placeholder=\"Name\"  type=\"text\" disabled id=\"lveName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"rank\">Term</label>\r\n                    <input placeholder=\"Term\"  type=\"text\" disabled id=\"lvetName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"rank\">Bn</label>\r\n                    <input placeholder=\"Bn\"  type=\"text\" disabled id=\"lveBn\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"rank\">Coy</label>\r\n                    <input placeholder=\"Coy\"  type=\"text\" disabled id=\"lveComp\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                  </div>\r\n                </div>\r\n                \r\n              </div>\r\n            </form>\r\n        </div>\r\n  \r\n    <div class=\"club\">\r\n        <div class=\"mat-card mat-focus-indicator\">\r\n            <div class=\"ng-star-inserted\">\r\n                <div class=\"mat-new mb-3\">\r\n                    <h4 class=\"card-heading\">LVE DETAILS</h4>\r\n                </div>\r\n            </div>\r\n                <table class=\"tg\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"tg-0lax\" rowspan=\"2\">TERM</th>\r\n                    <th class=\"tg-baqh\" colspan=\"2\">LVE</th>\r\n                    <th class=\"tg-0lax\" rowspan=\"2\">REASON</th>\r\n                    <th class=\"tg-0lax\" rowspan=\"2\">ADDRESS</th>\r\n                    <th class=\"tg-0lax\" rowspan=\"2\">SUBMISSION</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <th class=\"tg-0lax\">FROM</th>\r\n                    <th class=\"tg-0lax\">TO</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr [formGroup]=\"lveDetailsFormI\" [ngClass]=\"termId != 1 ? 'hide' : ''\">\r\n                    <td class=\"tg-0lax\">I TERM</td>\r\n                    <td class=\"tg-0lax\"><input type=\"date\" min=\"{{minDate}}\" class=\"form-control\" formControlName=\"lveFrom\"></td>\r\n                    <td class=\"tg-0lax\"><input type=\"date\" min=\"{{minDate}}\" class=\"form-control\" formControlName=\"lveTo\"></td>\r\n                    <td class=\"tg-0lax\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                      formControlName=\"reason\"></textarea></td>\r\n                    <td class=\"tg-0lax\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                      formControlName=\"address\"></textarea></td>\r\n                    <td class=\"tg-0lax\"><button class=\"btn btn-color\" (click)=\"addLvesubmit1()\">Submit</button></td>\r\n                  </tr>\r\n                  <tr [formGroup]=\"lveDetailsFormII\" [ngClass]=\"(termId != 2 && termId != 7) ? 'hide' : ''\">\r\n                    <td class=\"tg-0lax\">II TERM/ II TECH</td>\r\n                    <td class=\"tg-0lax\"><input type=\"date\" min=\"{{minDate}}\" class=\"form-control\" formControlName=\"lveFrom\"></td>\r\n                    <td class=\"tg-0lax\"><input type=\"date\" min=\"{{minDate}}\" class=\"form-control\" formControlName=\"lveTo\"></td>\r\n                    <td class=\"tg-0lax\"><textarea type=\"text\" class=\"form-control\"  maxlength=\"1500\"\r\n                      formControlName=\"reason\"></textarea></td>\r\n                    <td class=\"tg-0lax\"><textarea type=\"text\" class=\"form-control\"  maxlength=\"1500\"\r\n                      formControlName=\"address\"></textarea></td>\r\n                    <td class=\"tg-0lax\"><button class=\"btn btn-color\" (click)=\"addLvesubmit2()\">Submit</button></td>\r\n                  </tr>\r\n                  <tr [formGroup]=\"lveDetailsFormIII\" [ngClass]=\"(termId != 3 && termId != 8)? 'hide' : ''\">\r\n                    <td class=\"tg-0lax\">III TERM/ III TECH</td>\r\n                    <td class=\"tg-0lax\"><input type=\"date\" min=\"{{minDate}}\" class=\"form-control\" formControlName=\"lveFrom\"></td>\r\n                    <td class=\"tg-0lax\"><input type=\"date\" min=\"{{minDate}}\" class=\"form-control\" formControlName=\"lveTo\"></td>\r\n                    <td class=\"tg-0lax\"><textarea type=\"text\" class=\"form-control\"  maxlength=\"1500\"\r\n                      formControlName=\"reason\"></textarea></td>\r\n                    <td class=\"tg-0lax\"><textarea type=\"text\" class=\"form-control\"  maxlength=\"1500\"\r\n                      formControlName=\"address\"></textarea></td>\r\n                    <td class=\"tg-0lax\"><button class=\"btn btn-color\" (click)=\"addLvesubmit3()\">Submit</button></td>\r\n                  </tr>\r\n                </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\t\r\n\r\n</div>");

/***/ }),

/***/ "V5cC":
/*!******************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Otherdetails/lve/lve.module.ts ***!
  \******************************************************************************/
/*! exports provided: LveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LveModule", function() { return LveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var _lve_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lve.component */ "EWfq");
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
        component: _lve_component__WEBPACK_IMPORTED_MODULE_7__["LveComponent"]
    },
];
var LveModule = /** @class */ (function () {
    function LveModule() {
    }
    LveModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _lve_component__WEBPACK_IMPORTED_MODULE_7__["LveComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"]
            ]
        })
    ], LveModule);
    return LveModule;
}());



/***/ }),

/***/ "jy1u":
/*!***********************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Otherdetails/lve/lve.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.main-content {\n  min-height: 45vw;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 0 !important;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.backbtn button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: #c6c4c4;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  background-color: #c6c4c4;\n  border-color: #000;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  font-weight: bold;\n}\n\n.tg .tg-baqh {\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tg .tg-0lax {\n  text-align: center;\n  vertical-align: middle;\n}\n\nbutton.btn-color {\n  background: #742923;\n  color: #fff;\n}\n\nbutton.btn-color:hover, button.btn-color:focus {\n  color: #fff;\n}\n\n.disableCls {\n  pointer-events: none;\n}\n\n.hide {\n  display: none;\n}");

/***/ })

}]);