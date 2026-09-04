(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ac-subjects-all-subjects-all-subjects-module~ac-subjects-assignments-assignments-module~ac-s~9edc8f88"],{

/***/ "yuBT":
/*!******************************************!*\
  !*** ./src/app/service/gc/gc.service.ts ***!
  \******************************************/
/*! exports provided: GcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcService", function() { return GcService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _links_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../links.module */ "Uhg6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth-service/auth.service */ "V7IE");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GcService = /** @class */ (function () {
    function GcService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.jwtToken = "";
    }
    /**============ ENTITLEMENT =========== */
    GcService.prototype.addEntitlement = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_ENTITLEMENT_FROM_GC, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getEntitlementList = function (cadetId, type) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ENTITLEMENTS_LIST_BY_TYPE + ("?type=" + type + "&cadetId=" + cadetId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getAllCLec = function (status, type) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_FORECASTS + ("?status=" + status + "&isGcLec=" + type)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getAllCounsellor = function (battalionId, companyId, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_COUNSELLOR + ("?battalionId=" + battalionId + "&companyId=" + companyId + "&status=" + status), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getUpcomingEvent = function (type) {
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_UPCOMING_EVENTS + ("?isGcEvent=" + type)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getClubs = function (type, subType, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_Clubs_LIST + ("?type=" + type + "&subType=" + subType + "&status=" + status), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getSyllabusList = function (type, termId, status) {
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_SYLLABUS_LIST + ("?type=" + type + "&termId=" + termId + "&status=" + status)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getSubjectsLists = function (type, termId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_SUBJECTS_LIST + ("?type=" + type + "&termId=" + termId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getSyllabusGCScreenLIST = function (SyllabusBMT1) {
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_SYLLABUS_BMT1_LIST + ("?type=" + SyllabusBMT1 + "&status=" + 1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getSyllabusBMT2ScreenLIST = function (BMT2) {
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_SYLLABUS_BMT1_LIST + ("?type=" + BMT2 + "&status=" + 1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getAllMyTask = function (type, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_MY_TASK + ("?termId=" + type + "&status=" + status), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getAllCounsellors = function (battalionId, companyId, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_COUNSELLOR + ("?battalionId=" + battalionId + "&companyId=" + companyId + "&status=" + status), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    // getAllMyTask(status, type) {
    //   const httpOptions = {
    //     headers: new HttpHeaders()
    //       .set('Authorization', `Bearer ${this.authService.getJWT_Token}`)
    //   };
    //   return this.http.get(Links.GET_ALL_FORECASTS+`?status=${status}&isGcLec=${type}`).pipe(map((response: any) => response));
    // }
    GcService.prototype.getAssignments = function (serviceId, term, paper, assignment) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ACADEMIC_ASSIGNMENT_ANSWERS_LIST + ("?serviceId=" + serviceId + "&termId=" + term + "&paper=" + paper + "&assignmentType=" + assignment + "&status=1"), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getAssignmentsForDashboard = function (term) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ACADEMIC_ANSWERS_LIST + ("?termId=" + term), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.submitAssignmentAnswer = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_ACADEMIC_ASSIGNMENT_ANSWER, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ------------------------------------ */
    GcService.prototype.getSubjectsTopicsList = function (termId, paper, subjectName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ACADEMIC_SUBJECTS_LIST + ("?paper=" + paper + "&termId=" + termId + "&subjectName=" + subjectName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getAcademicSyllabusList = function (termId, paper, subject, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ACADEMIC_SYLLABUS_LIST + ("?termId=" + termId + "&paper=" + paper + "&subject=" + subject + "&status=" + status), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getAcademicExaminationSchedule = function (type, id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_Distribution_LIST + ("?type=" + type + "&termId=" + id + "&status=" + 2), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    //====== DISTRIBUTION OF MARKS =========//
    GcService.prototype.getDistributionOfMarksLIST = function (type, termId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_Distribution_LIST + ("?type=" + type + "&termId=" + termId + "&status=1"), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /**====== EXAM SCHEDULE FOR BMT 1 AND BMT 2 =========== */
    GcService.prototype.getExamScheduleList = function (termId, type, subType) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EXAM_SCHEDULE_LIST + ("?termId=" + termId + "&type=" + type + "&subType=" + subType + "&status=1"), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ========== PUNISHMENTS ========== */
    GcService.prototype.getPunishments = function (serviceId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_GC_PUNISMENTS + ("?serviceId=" + serviceId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getAdjutantOrders = function (id, flag) {
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ADJUTANT_ARO + ("?id=" + id + "&status=1&flag=" + flag)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.prototype.getComplaintList = function (type) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ENTITLEMENTS_LIST_BY_TYPE + ("?type=" + type), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    GcService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    GcService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], GcService);
    return GcService;
}());



/***/ })

}]);