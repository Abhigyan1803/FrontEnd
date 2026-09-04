(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hike-hike-module"],{

/***/ "9E9g":
/*!********************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Otherdetails/hike/hike.module.ts ***!
  \********************************************************************************/
/*! exports provided: HikeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HikeModule", function() { return HikeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var _hike_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hike.component */ "r9tj");
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
        component: _hike_component__WEBPACK_IMPORTED_MODULE_7__["HikeComponent"]
    },
];
var HikeModule = /** @class */ (function () {
    function HikeModule() {
    }
    HikeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _hike_component__WEBPACK_IMPORTED_MODULE_7__["HikeComponent"]
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
    ], HikeModule);
    return HikeModule;
}());



/***/ }),

/***/ "Eo1o":
/*!*************************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Otherdetails/hike/hike.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-heading {\n  clear: both;\n  padding-top: 10px;\n}\n\ndiv#top-bar {\n  background: #e1e3de;\n  padding: 10px 15px;\n  color: #bb9450;\n  clear: both;\n  border-radius: 5px;\n}\n\ndiv#top-bar h2 {\n  font-size: 16px;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.main-content {\n  min-height: 45vw;\n}\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.mat-new {\n  padding: 0.875rem 0 0 !important;\n}\n\nh4.card-heading {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  color: #721a0c;\n  background: #eee;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font-weight: 600;\n}\n\n.mat-card {\n  margin: 1rem 0;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.4s ease 0s;\n  padding: 0.875rem 0.875rem !important;\n}\n\n.mat-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.backbtn button {\n  width: 30px;\n  height: 30px;\n  line-height: 28px;\n  background: #ccc;\n  margin-right: 5px;\n}\n\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0px auto;\n  width: 100%;\n}\n\n.tg td {\n  border-color: #c6c4c4;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n}\n\n.tg th {\n  border-color: #c6c4c4;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 15px;\n  word-break: normal;\n  font-weight: bold;\n}\n\n.tg .tg-cjmp {\n  background-color: #c6c4c4;\n  border-color: #000000;\n  color: #000000;\n  font-size: 1rem;\n  text-align: center;\n  vertical-align: top;\n}\n\n.tg .tg-ratz {\n  background-color: #c6c4c4;\n  border-color: #000000;\n  text-align: center;\n  vertical-align: top;\n}\n\n.tg .tg-0pky {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: top;\n}\n\nbutton.btn-color {\n  background: #742923;\n  color: #fff;\n}\n\nbutton.btn-color:hover, button.btn-color:focus {\n  color: #fff;\n}\n\n.disableCls {\n  pointer-events: none;\n}\n\n.hide {\n  display: none;\n}");

/***/ }),

/***/ "FroD":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-dossier/ed-content/ed-index/Otherdetails/hike/hike.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"mat-heading\">\r\n        <div id=\"top-bar\" class=\"\">\r\n          <h2 class=\"backbtn\"><button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n          </button>E-Dossier <span class=\"sub-menu1\">\r\n            > HIKE</span></h2>\r\n      </div>\r\n      </div>\r\n          <div class=\"mat-card mat-focus-indicator\">\r\n            <div class=\"service-id mb-2\">\r\n                <!-- <div class=\"input_id col-md-6\">\r\n                    <b> Service Id :</b> <input type=\"text\" disabled id=\"hikeServiceID\" class=\"form-control mt-2\">\r\n                </div>\r\n                <div class=\"input_id col-md-6\">\r\n                    <b> Name :</b> <input type=\"text\" disabled id=\"hikeName\" class=\"form-control mt-2\">\r\n                </div> -->\r\n                <form class=\"ng-untouched ng-pristine ng-invalid\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">IMA No.</label>\r\n                        <input placeholder=\"No\"  type=\"text\" disabled id=\"hikeServiceID\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>  \r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Rank</label>\r\n                        <input placeholder=\"Rank\"  type=\"text\" disabled id=\"hikerk\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Name</label>\r\n                        <input placeholder=\"Name\"  type=\"text\" disabled id=\"hikeName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Term</label>\r\n                        <input placeholder=\"Term\"  type=\"text\" disabled id=\"hiketName\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Bn</label>\r\n                        <input placeholder=\"Bn\"  type=\"text\" disabled id=\"hikeBn\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"rank\">Coy</label>\r\n                        <input placeholder=\"Coy\"  type=\"text\" disabled id=\"hikeComp\" class=\"form-control ng-untouched ng-pristine ng-invalid\">\r\n                      </div>\r\n                    </div>\r\n                    \r\n                  </div>\r\n                </form>\r\n            </div>\r\n        \r\n      \r\n        <div class=\"hike\">\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n                <div class=\"ng-star-inserted\">\r\n                    <div class=\"mat-new mb-3\">\r\n                        <h4 class=\"card-heading\">ADVENTURE TRG/MID TERM HIKE</h4>\r\n                    </div>\r\n                </div>\r\n                <table class=\"tg\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"tg-cjmp\">TERM</th>\r\n                        <th class=\"tg-ratz\">HIKE</th>\r\n                        <th class=\"tg-ratz\">LOC</th>\r\n                        <th class=\"tg-ratz\">REMARKS</th>\r\n                        <th class=\"tg-ratz\">SUBMISSION</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr [formGroup]=\"hikeDetailsFormI\" [ngClass]=\"termId != 1 ? 'hide' : ''\">\r\n                        <td class=\"tg-0pky\">I TERM</td>\r\n                        <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                          formControlName=\"hike\"></textarea></td>\r\n                        <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\" formControlName=\"loc\"></td>\r\n                        <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                          formControlName=\"remarks\"></textarea></td>\r\n                        <td class=\"tg-0pky\"><button class=\"btn btn-color\" (click)=\"addHikesubmit1()\">Submit</button></td>\r\n                      </tr>\r\n                      <tr [formGroup]=\"hikeDetailsFormII\" [ngClass]=\"(termId != 2 && termId != 7) ? 'hide' : ''\">\r\n                        <td class=\"tg-0pky\">II TERM/ II TECH</td>\r\n                        <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                          formControlName=\"hike\"></textarea></td>\r\n                        <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\" formControlName=\"loc\"></td>\r\n                        <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                          formControlName=\"remarks\"></textarea></td>\r\n                        <td class=\"tg-0pky\"><button class=\"btn btn-color\" (click)=\"addHikesubmit2()\">Submit</button></td>\r\n                      </tr>\r\n                      <tr [formGroup]=\"hikeDetailsFormIII\" [ngClass]=\"(termId != 3 && termId != 8) ? 'hide' : ''\">\r\n                        <td class=\"tg-0pky\">III TERM/ III TECH</td>\r\n                        <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                          formControlName=\"hike\"></textarea></td>\r\n                        <td class=\"tg-0pky\"><input type=\"text\" class=\"form-control\" formControlName=\"loc\"></td>\r\n                        <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                    formControlName=\"remarks\"></textarea></td>\r\n                        <td class=\"tg-0pky\"><button class=\"btn btn-color\" (click)=\"addHikesubmit3()\">Submit</button></td>\r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"detention\">\r\n            <div class=\"mat-card mat-focus-indicator\">\r\n                <div class=\"ng-star-inserted\">\r\n                <div class=\"mat-new mb-3\">\r\n                    <h4 class=\"card-heading\">RECORD OF DETENTION DURING MID TERM/ TERM BREAK</h4>\r\n                </div>\r\n            </div>\r\n                <table class=\"tg\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"tg-cjmp\">TERM</th>\r\n                        <th class=\"tg-ratz\">W.E.F</th>\r\n                        <th class=\"tg-ratz\">REASON</th>\r\n                        <th class=\"tg-ratz\">PROGRESS</th>\r\n                        <th class=\"tg-ratz\">SUBMISSION</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr [formGroup]=\"recordDetailsFormI\" [ngClass]=\"termId != 1 ? 'hide' : ''\">\r\n                        <td class=\"tg-0pky\">I TERM</td>\r\n                        <td class=\"tg-0pky\"><input type=\"date\" min=\"{{minDate}}\" class=\"form-control\" formControlName=\"wef\"></td>\r\n                        <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                          formControlName=\"reason\"></textarea></td>\r\n                        <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                          formControlName=\"progress\"></textarea></td>\r\n                        <td class=\"tg-0pky\"><button class=\"btn btn-color\" (click)=\"addRecordsubmit1()\">Submit</button></td>\r\n                      </tr>\r\n                      <tr [formGroup]=\"recordDetailsFormII\" [ngClass]=\"(termId != 2 && termId != 7) ? 'hide' : ''\">\r\n                        <td class=\"tg-0pky\">II TERM/ II TECH</td>\r\n                        <td class=\"tg-0pky\"><input type=\"date\" min=\"{{minDate}}\" class=\"form-control\" formControlName=\"wef\"></td>\r\n                        <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                          formControlName=\"reason\"></textarea></td>\r\n                        <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                          formControlName=\"progress\"></textarea></td>\r\n                        <td class=\"tg-0pky\"><button class=\"btn btn-color\" (click)=\"addRecordsubmit2()\">Submit</button></td>\r\n                      </tr>\r\n                      <tr [formGroup]=\"recordDetailsFormIII\" [ngClass]=\"(termId != 3 && termId != 8) ? 'hide' : ''\">\r\n                        <td class=\"tg-0pky\">III TERM/ III TECH</td>\r\n                        <td class=\"tg-0pky\"><input type=\"date\" min=\"{{minDate}}\" class=\"form-control\" formControlName=\"wef\"></td>\r\n                        <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                          formControlName=\"reason\"></textarea></td>\r\n                        <td class=\"tg-0pky\"><textarea type=\"text\" class=\"form-control\" maxlength=\"1500\"\r\n                          formControlName=\"progress\"></textarea></td>\r\n                        <td class=\"tg-0pky\"><button class=\"btn btn-color\" (click)=\"addRecordsubmit3()\">Submit</button></td>\r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\t\r\n</div>\r\n");

/***/ }),

/***/ "r9tj":
/*!***********************************************************************************!*\
  !*** ./src/app/e-dossier/ed-content/ed-index/Otherdetails/hike/hike.component.ts ***!
  \***********************************************************************************/
/*! exports provided: HikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HikeComponent", function() { return HikeComponent; });
/* harmony import */ var _raw_loader_hike_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./hike.component.html */ "FroD");
/* harmony import */ var _hike_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hike.component.scss */ "Eo1o");
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











var HikeComponent = /** @class */ (function () {
    function HikeComponent(EDossierService, adminservice, fb, router, spinner, cdref, dialog, sharedService, route) {
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
        this.hikeDetailsFormI = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.hikeDetailsFormII = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.hikeDetailsFormIII = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.recordDetailsFormI = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.recordDetailsFormII = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.recordDetailsFormIII = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.Id = this.route.snapshot.queryParamMap.get('Id');
        this.termId = this.route.snapshot.queryParamMap.get('termId');
        this.hikeDetailsFormI = this.fb.group({
            hike: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [1],
            serviceId: this.Id
        });
        this.hikeDetailsFormII = this.fb.group({
            hike: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [2],
            serviceId: this.Id
        });
        this.hikeDetailsFormIII = this.fb.group({
            hike: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [3],
            serviceId: this.Id
        });
        this.hikeDetailsFormII = this.fb.group({
            hike: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [7],
            serviceId: this.Id
        });
        this.hikeDetailsFormIII = this.fb.group({
            hike: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [8],
            serviceId: this.Id
        });
        this.recordDetailsFormI = this.fb.group({
            wef: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            progress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [1],
            serviceId: this.Id
        });
        this.recordDetailsFormII = this.fb.group({
            wef: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            progress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [2],
            serviceId: this.Id
        });
        this.recordDetailsFormIII = this.fb.group({
            wef: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            progress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [3],
            serviceId: this.Id
        });
        this.recordDetailsFormII = this.fb.group({
            wef: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            progress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [7],
            serviceId: this.Id
        });
        this.recordDetailsFormIII = this.fb.group({
            wef: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            progress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [''],
            termId: [8],
            serviceId: this.Id
        });
    }
    HikeComponent.prototype.ngOnInit = function () {
        document.getElementById("hikeServiceID").value = localStorage.getItem("e");
        document.getElementById("hikeName").value = localStorage.getItem("i");
        document.getElementById("hikeComp").value = localStorage.getItem("companyName");
        document.getElementById("hikeBn").value = localStorage.getItem("battalionName");
        // (<HTMLInputElement>document.getElementById("hiketid")).value = localStorage.getItem("termId");
        document.getElementById("hiketName").value = localStorage.getItem("termName");
        document.getElementById("hikerk").value = localStorage.getItem("rank");
    };
    HikeComponent.prototype.ngAfterViewInit = function () {
        // this.getAssignments()
        this.getEdossierHike();
        this.getEdossierRecord();
    };
    HikeComponent.prototype.goBack = function () {
        window.history.back();
    };
    HikeComponent.prototype.getEdossierHike = function () {
        var _this = this;
        this.EDossierService.getHikeDetails(this.Id).subscribe(function (res) {
            var values = res.object;
            if (res.status == 'OK') {
                if (res.object && res.object.termId === 1) {
                    _this.hikeDetailsFormI.patchValue({
                        hike: res.object.hike,
                        loc: res.object.loc,
                        remarks: res.object.remarks,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 2) {
                    _this.hikeDetailsFormII.patchValue({
                        hike: res.object.hike,
                        loc: res.object.loc,
                        remarks: res.object.remarks,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 3) {
                    _this.hikeDetailsFormIII.patchValue({
                        hike: res.object.hike,
                        loc: res.object.loc,
                        remarks: res.object.remarks,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 7) {
                    _this.hikeDetailsFormII.patchValue({
                        hike: res.object.hike,
                        loc: res.object.loc,
                        remarks: res.object.remarks,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 8) {
                    _this.hikeDetailsFormIII.patchValue({
                        hike: res.object.hike,
                        loc: res.object.loc,
                        remarks: res.object.remarks,
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
    HikeComponent.prototype.getEdossierRecord = function () {
        var _this = this;
        this.EDossierService.getRecordsDetails(this.Id).subscribe(function (res) {
            var values = res.object;
            if (res.status == 'OK') {
                if (res.object && res.object.termId === 1) {
                    _this.recordDetailsFormI.patchValue({
                        wef: _this.datePipe.transform(res.object.wef, 'yyyy-MM-dd'),
                        reason: res.object.reason,
                        progress: res.object.progress,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 2) {
                    _this.recordDetailsFormII.patchValue({
                        wef: _this.datePipe.transform(res.object.wef, 'yyyy-MM-dd'),
                        reason: res.object.reason,
                        progress: res.object.progress,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 3) {
                    _this.recordDetailsFormIII.patchValue({
                        wef: _this.datePipe.transform(res.object.wef, 'yyyy-MM-dd'),
                        reason: res.object.reason,
                        progress: res.object.progress,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 7) {
                    _this.recordDetailsFormII.patchValue({
                        wef: _this.datePipe.transform(res.object.wef, 'yyyy-MM-dd'),
                        reason: res.object.reason,
                        progress: res.object.progress,
                        id: res.object.id
                    });
                }
                else if (res.object && res.object.termId === 8) {
                    _this.recordDetailsFormIII.patchValue({
                        wef: _this.datePipe.transform(res.object.wef, 'yyyy-MM-dd'),
                        reason: res.object.reason,
                        progress: res.object.progress,
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
    HikeComponent.prototype.validateFormI = function (hikeForm) {
        var flag = true;
        if (!hikeForm.hike || hikeForm.hike.trim() == '' || !hikeForm.loc || hikeForm.loc.trim() == '' || !hikeForm.remarks || hikeForm.remarks.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        return flag;
    };
    HikeComponent.prototype.validateFormII = function (hikeForm) {
        var flag = true;
        if (!hikeForm.hike || hikeForm.hike.trim() == '' || !hikeForm.loc || hikeForm.loc.trim() == '' || !hikeForm.remarks || hikeForm.remarks.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        return flag;
    };
    HikeComponent.prototype.validateFormIII = function (hikeForm) {
        var flag = true;
        if (!hikeForm.hike || hikeForm.hike.trim() == '' || !hikeForm.loc || hikeForm.loc.trim() == '' || !hikeForm.remarks || hikeForm.remarks.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        return flag;
    };
    HikeComponent.prototype.addHikesubmit1 = function () {
        // if(newDate(this.hikeDetailsFormI.get('startDate').value) > newDate(this.hikeDetailsFormI.get('endDate').value)) {
        //   error show
        //   return false;
        // }
        var hikeForm = this.hikeDetailsFormI.value;
        var validateFormstatus = this.validateFormI(hikeForm);
        var id = hikeForm.id;
        if (validateFormstatus) {
            if (id === '' || id === undefined) {
                this.addHikesubmit(hikeForm);
            }
            else {
                this.updatehike(hikeForm);
            }
        }
    };
    HikeComponent.prototype.addHikesubmit2 = function () {
        var hikeForm = this.hikeDetailsFormII.value;
        var validateFormstatus = this.validateFormI(hikeForm);
        var id = hikeForm.id;
        if (validateFormstatus) {
            if (id === '' || id === undefined) {
                this.addHikesubmit(hikeForm);
            }
            else {
                this.updatehike(hikeForm);
            }
        }
    };
    HikeComponent.prototype.addHikesubmit3 = function () {
        var hikeForm = this.hikeDetailsFormIII.value;
        var validateFormstatus = this.validateFormI(hikeForm);
        var id = hikeForm.id;
        if (validateFormstatus) {
            if (id === '' || id === undefined) {
                this.addHikesubmit(hikeForm);
            }
            else {
                this.updatehike(hikeForm);
            }
        }
    };
    HikeComponent.prototype.addHikesubmit = function (formVal) {
        var _this = this;
        formVal.hike = formVal.hike.trim();
        formVal.loc = formVal.loc.trim();
        formVal.remarks = formVal.remarks.trim();
        this.EDossierService.addHikeDetails(formVal).subscribe(function (res) {
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
    HikeComponent.prototype.updatehike = function (formVal) {
        var _this = this;
        this.EDossierService.updateHikeDetails(this.Id, formVal).subscribe(function (res) {
            console.log(res);
            if (res.status == 'OK') {
                _this.spinner.hide();
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
    HikeComponent.prototype.validateForm1 = function (recordForm) {
        var flag = true;
        if (!recordForm.wef || recordForm.wef.trim() == '' || !recordForm.reason || recordForm.reason.trim() == '' || !recordForm.progress || recordForm.progress.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        return flag;
    };
    HikeComponent.prototype.validateForm2 = function (recordForm) {
        var flag = true;
        if (!recordForm.wef || recordForm.wef.trim() == '' || !recordForm.reason || recordForm.reason.trim() == '' || !recordForm.progress || recordForm.progress.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        return flag;
    };
    HikeComponent.prototype.validateForm3 = function (recordForm) {
        var flag = true;
        if (!recordForm.wef || recordForm.wef.trim() == '' || !recordForm.reason || recordForm.reason.trim() == '' || !recordForm.progress || recordForm.progress.trim() == '') {
            this.adminservice.openSnackbar('Please fill all fields');
            flag = false;
        }
        return flag;
    };
    HikeComponent.prototype.addRecordsubmit1 = function () {
        // if(newDate(this.hikeDetailsFormI.get('startDate').value) > newDate(this.hikeDetailsFormI.get('endDate').value)) {
        //   error show
        //   return false;
        // }
        var recordForm = this.recordDetailsFormI.value;
        var validateFormstatus = this.validateForm1(recordForm);
        var id = recordForm.id;
        if (validateFormstatus) {
            if (id === '' || id === undefined) {
                this.addRecordsubmit(recordForm);
            }
            else {
                this.updateRecord(recordForm);
            }
        }
    };
    HikeComponent.prototype.addRecordsubmit2 = function () {
        var recordForm = this.recordDetailsFormII.value;
        var validateFormstatus = this.validateForm2(recordForm);
        var id = recordForm.id;
        if (validateFormstatus) {
            if (id === '' || id === undefined) {
                this.addRecordsubmit(recordForm);
            }
            else {
                this.updateRecord(recordForm);
            }
        }
    };
    HikeComponent.prototype.addRecordsubmit3 = function () {
        var recordForm = this.recordDetailsFormIII.value;
        var validateFormstatus = this.validateForm3(recordForm);
        var id = recordForm.id;
        if (validateFormstatus) {
            if (id === '' || id === undefined) {
                this.addRecordsubmit(recordForm);
            }
            else {
                this.updateRecord(recordForm);
            }
        }
    };
    HikeComponent.prototype.addRecordsubmit = function (formVal) {
        var _this = this;
        formVal.reason = formVal.reason.trim();
        formVal.progress = formVal.progress.trim();
        this.EDossierService.addRecordsDetails(formVal).subscribe(function (res) {
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
    HikeComponent.prototype.updateRecord = function (formVal) {
        var _this = this;
        this.EDossierService.updateRecordDetails(this.Id, formVal).subscribe(function (res) {
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
    HikeComponent.ctorParameters = function () { return [
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
    HikeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-hike',
            template: _raw_loader_hike_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_hike_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_e_dossier_edossier_service_service__WEBPACK_IMPORTED_MODULE_8__["EDossierService"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], HikeComponent);
    return HikeComponent;
}());



/***/ })

}]);