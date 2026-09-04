(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-access-user-access-module"],{

/***/ "UKGz":
/*!**************************************************************!*\
  !*** ./src/app/main/admin/user-access/user-access.routes.ts ***!
  \**************************************************************/
/*! exports provided: USER_ACCESS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ACCESS_ROUTES", function() { return USER_ACCESS_ROUTES; });
var USER_ACCESS_ROUTES = [
    { path: 'manage-role', loadChildren: function () { return __webpack_require__.e(/*! import() | manage-role-manage-role-module */ "manage-role-manage-role-module").then(__webpack_require__.bind(null, /*! ./manage-role/manage-role.module */ "T6Xa")).then(function (m) { return m.ManageRoleModule; }); } },
    { path: 'manage-staff', loadChildren: function () { return __webpack_require__.e(/*! import() | manage-staff-manage-staff-module */ "manage-staff-manage-staff-module").then(__webpack_require__.bind(null, /*! ./manage-staff/manage-staff.module */ "Hv0u")).then(function (m) { return m.ManageStaffModule; }); } },
    { path: 'manage-admin', loadChildren: function () { return __webpack_require__.e(/*! import() | manage-admin-manage-admin-module */ "manage-admin-manage-admin-module").then(__webpack_require__.bind(null, /*! ./manage-admin/manage-admin.module */ "1WHX")).then(function (m) { return m.ManageAdminModule; }); } },
];


/***/ }),

/***/ "k6Sl":
/*!**************************************************************!*\
  !*** ./src/app/main/admin/user-access/user-access.module.ts ***!
  \**************************************************************/
/*! exports provided: UserAccessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccessModule", function() { return UserAccessModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_access_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-access.routes */ "UKGz");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserAccessModule = /** @class */ (function () {
    function UserAccessModule() {
    }
    UserAccessModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_user_access_routes__WEBPACK_IMPORTED_MODULE_4__["USER_ACCESS_ROUTES"]),
            ]
        })
    ], UserAccessModule);
    return UserAccessModule;
}());



/***/ })

}]);