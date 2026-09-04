(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drill-precis-drill-precis-module"],{

/***/ "4wZ0":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/adjutant-branch/drill-precis/drill-precis.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>drill precis</p>");

/***/ }),

/***/ "UC/r":
/*!*******************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-precis/drill-precis.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "hh7p":
/*!*****************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-precis/drill-precis.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DrillPrecisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrillPrecisComponent", function() { return DrillPrecisComponent; });
/* harmony import */ var _raw_loader_drill_precis_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./drill-precis.component.html */ "4wZ0");
/* harmony import */ var _drill_precis_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drill-precis.component.scss */ "UC/r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrillPrecisComponent = /** @class */ (function () {
    function DrillPrecisComponent() {
    }
    DrillPrecisComponent.prototype.ngOnInit = function () {
        //this.getAdjutant();
    };
    DrillPrecisComponent.ctorParameters = function () { return []; };
    DrillPrecisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'adj-aro',
            template: _raw_loader_drill_precis_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_drill_precis_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DrillPrecisComponent);
    return DrillPrecisComponent;
}());



/***/ }),

/***/ "jB9e":
/*!**************************************************************************!*\
  !*** ./src/app/main/adjutant-branch/drill-precis/drill-precis.module.ts ***!
  \**************************************************************************/
/*! exports provided: DrillPrecisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrillPrecisModule", function() { return DrillPrecisModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _drill_precis_drill_precis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../drill-precis/drill-precis.component */ "hh7p");
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
        component: _drill_precis_drill_precis_component__WEBPACK_IMPORTED_MODULE_8__["DrillPrecisComponent"],
    }
];
var DrillPrecisModule = /** @class */ (function () {
    function DrillPrecisModule() {
    }
    DrillPrecisModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _drill_precis_drill_precis_component__WEBPACK_IMPORTED_MODULE_8__["DrillPrecisComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"]
                // MatProgressBarModule, MatMenuModule, ChartsModule,/* NgxChartsModule */
                // MatIconModule, MatRadioModule, /* NgxChartsModule, */
                // MatButtonModule, MatDividerModule, MatChipsModule, MatListModule, 
                // SharedPipesModule,
                // MatFormFieldModule, FlexLayoutModule,
                // MatInputModule, MatTabsModule,
                // MatRippleModule, MatSelectModule, MatTableModule, MatTooltipModule, MatPaginatorModule, MatDatepickerModule
            ]
        })
    ], DrillPrecisModule);
    return DrillPrecisModule;
}());



/***/ })

}]);