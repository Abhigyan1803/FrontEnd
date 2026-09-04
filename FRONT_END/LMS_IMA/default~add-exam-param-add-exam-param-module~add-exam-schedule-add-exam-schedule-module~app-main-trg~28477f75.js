(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"],{

/***/ "hon0":
/*!******************************************************!*\
  !*** ./src/app/service/trg-team/trg-team.service.ts ***!
  \******************************************************/
/*! exports provided: TrgTeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrgTeamService", function() { return TrgTeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _links_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../links.module */ "Uhg6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth-service/auth.service */ "V7IE");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrgTeamService = /** @class */ (function () {
    function TrgTeamService(http, snackbar, authService) {
        this.http = http;
        this.snackbar = snackbar;
        this.authService = authService;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        console.log('trg team service initialized');
        this.jwtToken = localStorage.getItem('jwtToken');
    }
    //============ GET CAMP MARKS ============
    TrgTeamService.prototype.getCampMarks = function (servceId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_CAMP_MARKS + ("?serviceId=" + servceId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    //============ ORGANIZATIN CHART DATA ============
    TrgTeamService.prototype.getOrganizationChartData = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ORGANIZATION_CHART).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ===============GSO 1 TRAINING ===================== */
    TrgTeamService.prototype.addSopDocument = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('title', form.title);
        formData.append('description', form.description);
        formData.append('status', form.status);
        formData.append('document', form.doc);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_SOP_DOCUMENT, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getAllGsoOneTrg = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_TRG_DOCS, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeGSOOneTrgDocStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('status', status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].CHANGE_GSO_ONE_TRG_STATUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getSopDetails = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_SOP_DETAILS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateSOPDoc = function (id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('title', form.title);
        formData.append('description', form.description);
        formData.append('status', form.status);
        formData.append('document', form.doc);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_SOP_DOC, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ============ SCHEDULE OF CENTRALLECTURE ==============*/
    TrgTeamService.prototype.addSCentralLecture = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('title', form.title);
        formData.append('description', form.description);
        formData.append('status', form.status);
        formData.append('document', form.doc);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_CENTRALLECTURE, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getAllCentralLecture = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALLCENTRALLECTURE, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeGSOOneTrglCentralLectureStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('status', status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].CHANGE_CENTRALLECTURE_STATUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getlCentralLectureDetails = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_CENTRALLECTURE_DETAILS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updatelCentralLectureDoc = function (id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('title', form.title);
        formData.append('description', form.description);
        formData.append('status', form.status);
        formData.append('document', form.doc);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_CENTRALLECTURE_DOC, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ============ SCHEDULE OF EXERCISES ==============*/
    TrgTeamService.prototype.getRESP = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_RESP, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.addScheduleOfExercise = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        // const data = {
        //   seasonTermId:form.seasonTerm,
        //   year:form.year,
        //   exercise: form.exercise,
        //   termId: form.termId,
        //   dsBriefing: form.dsBriefing,
        //   recceTewt: form.recceTewt,
        //   bbe: form.bbe,
        //   verbalOrders: form.verbalOrders,
        //   smd: form.smd,
        //   duration: form.duration,
        //   respId: form.resp,
        //   status: form.status
        // }
        console.log(form, "service");
        // const formData = new FormData();
        // formData.append('seasonTerm', form.seasonTerm);
        // formData.append('year', form.year);
        // formData.append('exercise', form.exercise)
        // formData.append('termId', form.termId)
        // formData.append('dsBriefing', form.dsBriefing)
        // formData.append('recceTewt', form.recceTewt)
        // formData.append('bbe', form.bbe)
        // formData.append('verbalOrders', form.verbalOrders)
        // formData.append('smd', form.smd)
        // formData.append('duration', form.duration)
        // formData.append('respId', form.resp)
        // formData.append('status', form.status)
        // formData.append('url', form.url)
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_SCHEDULE_OF_EXERCISE, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getScheduleOfExercisesList = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_SCHEDULEs_OF_EXERCISEs_LIST, '', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getScheduleOfExerciseById = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_SCHEDULE_OF_EXERCISE_BY_ID, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateScheduleOfExercise = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        // const data = {
        //   id: id,
        //   seasonTermId:form.seasonTerm,
        //   year:form.year,
        //   bbe: form.bbe,
        //   dsBriefing: form.dsBriefing,
        //   duration: form.duration,
        //   exercise: form.exercise,
        //   recceTewt: form.recceTewt,
        //   respId: form.resp,
        //   smd: form.smd,
        //   termId: parseInt(form.termId),
        //   verbalOrders: form.verbalOrders,
        //   status: form.status
        // }
        // const formData = new FormData();
        // formData.append('id', id);
        // formData.append('seasonTermId', form.seasonTerm);
        // formData.append('year', form.year);
        // formData.append('bbe', form.bbe)
        // formData.append('dsBriefing', form.dsBriefing)
        // formData.append('duration', form.duration);
        // formData.append('exercise', form.exercise);
        // formData.append('recceTewt', form.recceTewt);
        // formData.append('respId', form.resp)
        // formData.append('smd', form.smd)
        // formData.append('termId', form.termId);
        // formData.append('verbalOrders', form.verbalOrders);
        // formData.append('status', form.status)
        // formData.append('url', form.url)
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_SCHEDULE_OF_EXERCISE, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeSchduleOfExerciseStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('status', status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].CHANGE_SCHEDULE_OF_EXERCISE_STATUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** -------------------------- */
    /** ================= GSO 2 PGME SYLLABUS ================= */
    TrgTeamService.prototype.getBattalions = function () {
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BATTALIONS_FOR_SYLLABUS).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /**===========SEASON TERM============= */
    TrgTeamService.prototype.getAllSeasonTerms = function (status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('status', status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_ADDED_SEASON_TERMS_LIST, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.addFullSeasonTerm = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = {
            startDate: form.startDate,
            endDate: form.endDate,
            sessionYear: form.year,
            status: form.status,
            termSeason: { id: form.seasonTerm }
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_A_FULL_SEASON_TERM, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /**==================================== */
    TrgTeamService.prototype.addTermSyllabus = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('date', form.date);
        formData.append('name', form.name);
        formData.append('term', form.term);
        formData.append('description', form.description);
        formData.append('status', form.status);
        formData.append('Syllabusdoc', form.document);
        formData.append('syllabusType', 'Term');
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_TERM_SYLLABUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getTermSyllabus = function () {
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_TERM_SYLLABUSES).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getTermSyllabusById = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_TERM_SYLLABUS_BY_ID + ("?id=" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateTermSyllabus = function (id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('date', form.date);
        formData.append('name', form.name);
        formData.append('term', form.term);
        formData.append('description', form.description);
        formData.append('status', form.status);
        formData.append('Syllabusdoc', form.document);
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_TERM_SYLLABUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateTermSyllabusStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('status', status);
        formData.append('id', id);
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_TERM_SYLLABUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ========= Syllabus CELL============*/
    TrgTeamService.prototype.addSyllabus = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('name', form.name);
        formData.append('date', form.date);
        formData.append('description', form.description);
        formData.append('status', form.status);
        formData.append('Syllabusdoc', form.document);
        formData.append('syllabusType', form.type);
        formData.append('termId', form.termId);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_SYLLABUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateSyllabus = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('name', form.name);
        formData.append('date', form.date);
        formData.append('description', form.description);
        formData.append('status', form.status);
        if (form.document) {
            formData.append('Syllabusdoc', form.document);
        }
        formData.append('termId', form.termId);
        formData.append('syllabusType', form.type);
        formData.append('id', form.id);
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_SYLLABUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getSyllabusList = function (type, termId, status) {
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_SYLLABUS_LIST + ("?type=" + type + "&status=" + status + "&termId=" + termId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getSyllabusById = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_SYLLABUS_BY_ID + ("?id=" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateSyllabusStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('status', status);
        formData.append('id', id);
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_SYLLABUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** =========== STUDY MATERIAL ============= */
    TrgTeamService.prototype.getStudyMaterialList = function (type, termId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BMT1_LIST + ("?type=" + type + "&termId=" + termId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeStudyMaterialStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('status', status);
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_BMT1_STATUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.addStudyMaterial = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('name', form.name);
        formData.append('status', form.status);
        formData.append('description', form.description);
        formData.append('date', new Date().toISOString().slice(0, 10));
        formData.append('studyMaterialType', form.studyMaterialType);
        formData.append('Syllabusdoc', form.doc);
        formData.append('termId', form.termId);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_BMT1, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getStudyMaterialById = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BMT1_BY_ID + ("?id=" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateStudyMaterial = function (id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('name', form.name);
        formData.append('status', form.status);
        formData.append('studyMaterialType', form.studyMaterialType);
        formData.append('description', form.description);
        formData.append('date', new Date().toISOString().slice(0, 10));
        formData.append('Syllabusdoc', form.doc);
        console.log(formData, '>>');
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_BMT1, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateStudyMaterialDelete = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('status', status);
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_BMT1, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /**  GENERAL INSTRUCTIONS =========== */
    TrgTeamService.prototype.getAllAdventureCellType = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_ADVENTURE_CELL_TYPE, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getAllSeasonTerm = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_TERMS).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getAllTerms = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_TERMS).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.addGenralInstruction = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('docName', form.docName);
        formData.append('acType', form.acType);
        formData.append('term', form.term);
        formData.append('year', form.year);
        formData.append('description', form.description);
        formData.append('document', form.document);
        formData.append('status', form.status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_GENERAL_INSTRUCTION, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateGenralInstruction = function (id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('docName', form.docName);
        formData.append('acType', form.acType);
        formData.append('term', form.term);
        formData.append('year', form.year);
        formData.append('description', form.description);
        formData.append('document', form.document);
        formData.append('status', form.status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_GENERAL_INSTRUCTION, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getAllGeneralInstructions = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_GENERAL_INSTRUCTIONS, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeInstructionStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('status', status);
        // const data ={
        //   "id":id,
        //   "status":status
        // }
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].CHANGE_INSTRUCTION_STATUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getInstructionById = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_INSTRUCTION_DETAILS_BY_ID, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ============= ADVENTURE CELL ----  LETTERS =================*/
    TrgTeamService.prototype.addLetter = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('acType', form.acType);
        formData.append('status', form.status);
        formData.append('doc', form.doc);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_ADVENTURE_CELL_LETTER, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getAllLetters = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_LETTERS, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getLetterById = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].VIEW_LETTER_BY_ID, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateLetter = function (id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('acType', form.acType);
        formData.append('status', form.status);
        formData.append('doc', form.doc);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_LETTER, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeLetterStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('status', status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].CHANGE_LETTER_STATUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ================ DATESHEET ============== */
    TrgTeamService.prototype.addDatesheet = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('doc', form.doc);
        formData.append('status', form.status);
        formData.append('termId', form.termId);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_DATESHEET, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getAllDatesheets = function (termId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_DATESHEET + ("?termId=" + termId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.viewDatesheetById = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].VIEW_DATESHEET_BY_ID, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateDatesheet = function (id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('doc', form.doc);
        formData.append('status', form.status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_DATESHEET, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeDatesheetStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('status', status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].CHANGE_DATESHEET_STATUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /**==========BMT 1 & 2 EXAM SCHEDULE============== */
    TrgTeamService.prototype.addExamSchedue = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('doc', form.doc);
        formData.append('status', form.status);
        formData.append('termId', form.termId);
        formData.append('type', form.type);
        formData.append('subType', form.subType);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_EXAM_SCHEDULE, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getExamScheduleList = function (termId, type, subType) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EXAM_SCHEDULE_LIST + ("?termId=" + termId + "&type=" + type + "&subType=" + subType), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.viewExamScheduleById = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].VIEW_EXAM_SCHEDULE_BY_ID, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateExamSchedule = function (id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('doc', form.doc);
        formData.append('status', form.status);
        formData.append('termId', form.termId);
        formData.append('type', form.type);
        formData.append('subType', form.subType);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_EXAM_SCHEDULE, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeExamScheduleStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('status', status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].CHANGE_EXAM_SCHEDULE_STATUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ------------------------------ */
    /** ============== GSO 2 PGME =============== */
    /** ========= TRG CALENDAR =========== */
    TrgTeamService.prototype.getAllWeeks = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_WEEK).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ------DAILY PROGRAMS -------- */
    TrgTeamService.prototype.addTRGDailyProgram = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = {
            "battalian": form.battalion,
            "week": form.week,
            "term": form.term,
            "sessionTerm": form.seasonTerm,
            "year": form.year,
            "date": form.date,
            "startTime": form.startTime,
            "endTime": form.endTime,
            "period": form.period,
            "subject": form.subject,
            "type": form.type,
            "lession": form.lession,
            "instruction": form.instruction,
            "place": form.place,
            "status": form.status
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_TRG_CALENDAR_PROGRAM, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getAllTRGDailyPrograms = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_TRG_CALENDAR_PROGRAMS, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getTRGProgramById = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_TRG_CALENDAR_PROGRAM_BY_ID + ("?id=" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateTRGProgramStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = {
            "id": id,
            "status": status
        };
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_TRG_CALENDAR_PROGRAM, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateTRGProgram = function (id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = {
            "id": id,
            "battalian": form.battalion,
            "week": form.week,
            "term": form.term,
            "date": form.date,
            "sessionTerm": form.seasonTerm,
            "year": form.year,
            "startTime": form.startTime,
            "endTime": form.endTime,
            "period": form.period,
            "subject": form.subject,
            "type": form.type,
            "lession": form.lession,
            "instruction": form.instruction,
            "place": form.place,
            "status": form.status
        };
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_TRG_CALENDAR_PROGRAM, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ------WEEKLY PROGRAMS---------- */
    TrgTeamService.prototype.getAllDatesOfWeek = function (seasonTerm, year, week) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('seasonYear', seasonTerm);
        formData.append('year', year);
        formData.append('week', week);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_DATES_OF_WEEK, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.addWeeklyProgram = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        // weekEndDate: "2022-11-27T18:00:00.000Z",
        // weekStartDate: "2022-11-21T18:00:00.000Z",
        var data = {
            battalian: { id: form.battalion },
            weeklyScheduleDate: form.weeklyScheduleDate,
            sessionTerm: { id: form.seasonTerm },
            status: form.status,
            term: { id: form.term },
            week: { id: form.week },
            weekEndDate: form.weekEndDate,
            weekStartDate: form.weekStartDate,
            year: form.year
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_WEEKLY_PROGRAM, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getWeeklyPrograms = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_WEEKLY_PROGRAMS, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeWeeklyProgramStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = {
            "id": id,
            "status": status
        };
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_WEEKLY_PROGRAM, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getWeeklyProgramById = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_WEEKLY_PROGRAM_BY_ID + ("?id=" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateWeeklyProgram = function (id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = {
            id: id,
            battalian: { id: form.battalion },
            weeklyScheduleDate: form.weeklyScheduleDate,
            sessionTerm: { id: form.seasonTerm },
            status: form.status,
            term: { id: form.term },
            week: { id: form.week },
            weekEndDate: form.weekEndDate,
            weekStartDate: form.weekStartDate,
            year: form.year
        };
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_WEEKLY_PROGRAM, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ============ FORECAST OF TRG EVENTS ============ */
    TrgTeamService.prototype.addForecast = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('sessionTerm', form.sessionTerm);
        formData.append('year', form.year);
        formData.append('week', form.week);
        formData.append('date', form.date);
        formData.append('description', form.description);
        formData.append('status', form.status);
        formData.append('isGcLec', form.isGcLec);
        formData.append('mapImage', form.mapImage);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_FORECAST, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getAllForecast = function (status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_FORECASTS + ("?status=" + status + "&isGcLec=" + true)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeForecastStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = {
            "id": id,
            "status": status
        };
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_FORECAST, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getForecastById = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_FORECAST_BY_ID + ("?id=" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateForecast = function (id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('sessionTerm', form.sessionTerm);
        formData.append('year', form.year);
        formData.append('week', form.week);
        formData.append('date', form.date);
        formData.append('description', form.description);
        formData.append('status', form.status);
        formData.append('mapImage', form.mapImage);
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_FORECAST, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ---------------------------------- */
    /** ---------------Transport ------------------- */
    TrgTeamService.prototype.addTransport = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('file', form.file);
        formData.append('status', form.status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_TRANSPORT, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getTransport = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_TRANSPORT, '', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getByIdTransport = function (id) {
        var formData = new FormData();
        formData.append('id', id);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_TRANSPORT_BY_ID, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateTransport = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('file', form.file);
        formData.append('status', form.status);
        formData.append('id', form.id);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_TRANSPORT, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeTransportStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('status', status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].CHANGE_TRANSPORT_STATUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ---------------Nominal ------------------- */
    TrgTeamService.prototype.addNominal = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('file', form.file);
        formData.append('status', form.status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_NOMINAL, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getNominal = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_NOMINAL, '', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getByIdNominal = function (id) {
        var formData = new FormData();
        formData.append('id', id);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_NOMINAL_BY_ID, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateNominal = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('file', form.file);
        formData.append('status', form.status);
        formData.append('id', form.id);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_NOMINAL, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeNominalStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('status', status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].CHANGE_NOMINAL_STATUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ---------------Sops ------------------- */
    TrgTeamService.prototype.addSops = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('docName', form.docName);
        formData.append('description', form.description);
        formData.append('document', form.document);
        formData.append('status', form.status);
        formData.append('acType', form.acType);
        formData.append('term', form.term);
        formData.append('year', form.year);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_SOPS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getSops = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_SOPS, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getByIdSops = function (id) {
        var formData = new FormData();
        formData.append('id', id);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_SOPS_BY_ID, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateSops = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('docName', form.docName);
        formData.append('description', form.description);
        formData.append('file', form.file);
        formData.append('status', form.status);
        formData.append('id', form.id);
        formData.append('acType', form.acType);
        formData.append('term', form.term);
        formData.append('year', form.year);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_SOPS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeSopsStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('status', status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].CHANGE_SOPS_STATUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ---------------Chart ------------------- */
    TrgTeamService.prototype.addChart = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('doc', form.doc);
        formData.append('status', form.status);
        formData.append('acType', form.acType);
        formData.append('seasonTerm', form.seasonTerm);
        formData.append('year', form.year);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_CHART, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getChart = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_CHART, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getByIdChart = function (id) {
        var formData = new FormData();
        formData.append('id', id);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_CHART_BY_ID, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateChart = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', form.id);
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('doc', form.doc);
        formData.append('status', form.status);
        formData.append('acType', form.acType);
        formData.append('seasonTerm', form.seasonTerm);
        formData.append('year', form.year);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_CHART, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeChartStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('status', status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].CHANGE_CHART_STATUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ---------------Report ------------------- */
    TrgTeamService.prototype.addReport = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('doc', form.doc);
        formData.append('status', form.status);
        formData.append('acType', form.acType);
        formData.append('seasonTerm', form.seasonTerm);
        formData.append('year', form.year);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_REPORT, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getReport = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_REPORT, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getByIdReport = function (id) {
        var formData = new FormData();
        formData.append('id', id);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_REPORT_BY_ID, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateReport = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', form.id);
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('doc', form.doc);
        formData.append('status', form.status);
        formData.append('acType', form.acType);
        formData.append('seasonTerm', form.seasonTerm);
        formData.append('year', form.year);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_REPORT, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeReportStatus = function (id, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        formData.append('status', status);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].CHANGE_REPORT_STATUS, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** -------------------Weapons--------------------- */
    TrgTeamService.prototype.addWeapon = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_WEAPON, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getWeaponByTerm = function (termId, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_WEAPON_BY_TERM1 + ("?termId=" + termId) + ("&status=" + status), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getWeaponByTermResult = function (serviceId, termId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_WEAPON_BY_TERM + ("?serviceId=" + serviceId) + ("&termId=" + termId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getByIdWeapon = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_WEAPON_BY_ID + ("?id=" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateWeapon = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_WEAPON, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.changeWeaponStatus = function (id, s) {
        var data = {
            id: id,
            status: s
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_WEAPON, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /** ------------------------------ */
    TrgTeamService.prototype.openSnackbar = function (msg) {
        this.snackbar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    TrgTeamService.prototype.addResult = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        //  const data = form.cadetWTMainResultlist
        // const data = {
        //   "attrName":form.name,
        //   "total": form.total,
        //   "std": form.std,
        //   "gpt":form.gpt,
        //   "remark":form.remark,
        //   "marks": form.marks,
        // }
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_WP_RESULT, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateResult = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_RESULT_WP, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getWTT = function (termId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_WTT + ("?termId=" + termId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getExamParam = function (status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EXAM_WTT + ("?status=" + status), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.addWtt = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = {
            termId: form.termId,
            spotTestMark: form.spotTestMark,
            wttMark: form.wttMark,
            status: form.status
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_WTT_MARKS, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getSUBJECTByID = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].VIEW_SUBJECT_BY_ID + ("?id=" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateSUBJECT = function (id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = {
            id: id,
            subjectName: form.subjectName,
            plTotalMarks: form.plTotalMarks,
            bnTotalMarks: form.bnTotalMarks,
            coyTotalMarks: form.coyTotalMarks,
            status: form.status
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_SUBJECT, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /*------------------------EQTN NEW----------------------*/
    TrgTeamService.prototype.getEqtn = function (serviceId, termId) {
        console.log(serviceId);
        console.log(termId);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EQTN + ("?serviceId=" + serviceId + "&termId=" + termId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.addEqtn = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].Add_EQTN, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateEqtn = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_EQTN, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /*------------------------OQ EQTN NEW----------------------*/
    TrgTeamService.prototype.getOqEqtn_All_ListByBCName = function (termType, termId, pageIndex, pageSize, battalionName, companyName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        // if(battalionName==null|| battalionName==undefined || battalionName==''){
        //   return this.http.get(Links.GET_OQEQTN_ALL_LIST+`?termType=${termType}&termId=${termId}&pageNo=${pageIndex}&pageSize=${pageSize}`, httpOptions).pipe(map((response: any) => response));
        // }
        if (companyName == null || companyName == '' || companyName == undefined) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_OQEQTN_ALL_LIST + ("?termType=" + termType + "&termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
        else if (companyName != null || companyName != '' || companyName != undefined) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_OQEQTN_ALL_LIST + ("?termType=" + termType + "&termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName + "&company=" + companyName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
        else {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_OQEQTN_ALL_LIST + ("?termType=" + termType + "&termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
    };
    TrgTeamService.prototype.getOqEqtn_All_List = function (termType, termId, pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_OQEQTN_ALL_LIST + ("?termType=" + termType + "&termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateOqEqtn = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_OQEQTN, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getOqEqtn_search = function (termId, serviceId, termType, pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_SEARCH_OQEQTN + ("?termId=" + termId + "&serviceId=" + serviceId + "&termType=" + termType + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /* ---------------------BMT1-------------------------- */
    // getBmt1list(termId,pageIndex,pageSize) {
    //   const httpOptions = {
    //     headers: new HttpHeaders()
    //       .set('Authorization', `Bearer ${this.authService.getJWT_Token}`)
    //   };
    //   return this.http.get(Links.GET_BMT1_list + `?termId=${termId}&pageNo=${pageIndex}&pageSize=${pageSize}`, httpOptions).pipe(map((response: any) => response));
    // }
    TrgTeamService.prototype.getBmt1MidDetails = function (resultType, termId, pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BMT1_DETAILS + ("?resultType=" + resultType + "&termId=" + termId + "&serviceSubjectType=" + 'BMT1' + "&assesmentTermType=" + 'mid-term' + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getBmt1FinalDetails = function (resultType, termId, pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BMT1_DETAILS + ("?resultType=" + resultType + "&termId=" + termId + "&serviceSubjectType=" + 'BMT1' + "&assesmentTermType=" + 'final-term' + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateBmt1Details = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_BMT1_DETAILS, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getBmt1search = function (termId, serviceId, pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BMT1_SEARCH + ("?termId=" + termId + "&serviceId=" + serviceId + "&serviceSubjectType=" + 'BMT1' + "&assesmentTermType=" + 'final-term' + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /* ---------------------BMT2-------------------------- */
    TrgTeamService.prototype.getBmt2Subject = function (status, termId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BMT2_SUBJECT + ("?status=" + status + "&termId=" + termId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getBmt2_list = function (resultType, termId, pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BMT2_list + ("?resultType=" + resultType + "&termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getBmt2search = function (termId, serviceId, pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BMT2_SEARCH + ("?termId=" + termId + "&serviceId=" + serviceId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateBmt2Details = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_BMT2_DETAILS, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getEqtn_All_List = function (termId, pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EQTN_ALL_List + ("?termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getEqtn_All_ListByBCName = function (termId, pageIndex, pageSize, battalionName, companyName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        if (companyName == null || companyName == '' || companyName == undefined) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EQTN_ALL_List + ("?termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
        else if (companyName != null || companyName != '' || companyName != undefined) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EQTN_ALL_List + ("?termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName + "&company=" + companyName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
    };
    TrgTeamService.prototype.getEqtn_All_ListByBCNameComp = function (termId, pageIndex, pageSize, battalionName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EQTN_ALL_List + ("?termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getEqtn_Search = function (termId, serviceId, pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EQTN_SEARCH + ("?termId=" + termId + "&serviceId=" + serviceId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.update_Eqtn = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EQTN_UPDATE, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getBattalionList = function () {
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BATTALION_LIST).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getCompanyList = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var formData = new FormData();
        formData.append('id', id);
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_COMPANY_BY_BATTALION, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getEqtnById = function (termId, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_CADET_EQTN + ("?termId=" + termId + "&status=" + status), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /* ---------------------New WT CONTROLLER-------------------------- */
    TrgTeamService.prototype.getWTAllCadetlist = function (termId, pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_NEW_WT_CADET_list + ("?termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getWt_All_ListByBCName = function (termId, pageIndex, pageSize, battalionName, companyName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        if (companyName == null || companyName == '' || companyName == undefined) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_NEW_WT_CADET_list + ("?termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
        else if (companyName != null || companyName != '' || companyName != undefined) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_NEW_WT_CADET_list + ("?termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName + "&company=" + companyName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
    };
    TrgTeamService.prototype.getWT_All_ListByBCNameComp = function (termId, pageIndex, pageSize, battalionName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_NEW_WT_CADET_list + ("?termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateWTCadet = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_NEW_WT_SAVE_list, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.searchWT = function (termId, serviceId, pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_NEW_WT_SEARCH + ("?termId=" + termId + "&serviceId=" + serviceId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getCadetsListForPTMarks = function (termId, subjectType, battalion, company, serviceId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var response;
        if (serviceId) {
            response = this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_PT_CADETS_LIST + ("?termId=" + termId + "&subjectType=" + subjectType + "&serviceId=" + serviceId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
        else {
            if (!battalion && !company) {
                response = this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_PT_CADETS_LIST + ("?termId=" + termId + "&subjectType=" + subjectType), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
            }
            else if (battalion && !company) {
                response = this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_PT_CADETS_LIST + ("?termId=" + termId + "&subjectType=" + subjectType + "&battalion=" + battalion), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
            }
            else {
                response = this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_PT_CADETS_LIST + ("?termId=" + termId + "&subjectType=" + subjectType + "&battalion=" + battalion + "&company=" + company), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
            }
        }
        return response;
    };
    TrgTeamService.prototype.savePTResults = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].SAVE_PT_RESULTS, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /* ---------------------NEW Runback-------------------------- */
    TrgTeamService.prototype.addRunback = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_RUNBACK, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getCadetRunback = function (resultType, termId, pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_CADET_RUNBACK + ("?resultType=" + resultType + "&termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getRun_All_ListByBCName = function (resultType, termId, pageIndex, pageSize, battalionName, companyName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        if (companyName == null || companyName == '' || companyName == undefined) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_CADET_RUNBACK + ("?resultType=" + resultType + "&termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
        else if (companyName != null || companyName != '' || companyName != undefined) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_CADET_RUNBACK + ("?resultType=" + resultType + "&termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName + "&company=" + companyName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
    };
    TrgTeamService.prototype.getRun_All_ListByBCNameComp = function (resultType, termId, pageIndex, pageSize, battalionName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_CADET_RUNBACK + ("?resultType=" + resultType + "&termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getRunback_All_List = function (resultType, termId, pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_CADET_RUNBACK + ("?resultType=" + resultType + "&termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.updateRunback = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_RUNBACK, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getRunback_search = function (termId, serviceId, resultType, pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_SEARCH_RUNBACK + ("?termId=" + termId + "&serviceId=" + serviceId + "&resultType=" + resultType + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getRunbackById = function (termId, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ALL_CADET_EQTN + ("?termId=" + termId + "&status=" + status), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getBmt2_listByBCName = function (resultType, termId, pageIndex, pageSize, battalionName, companyName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        if (companyName == null || companyName == '' || companyName == undefined) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BMT2_list + ("?resultType=" + resultType + "&termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
        else if (companyName != null || companyName != '' || companyName != undefined) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BMT2_list + ("?resultType=" + resultType + "&termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName + "&company=" + companyName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
    };
    TrgTeamService.prototype.getBmt1FinalDetailsByBCName = function (resultType, termId, pageIndex, pageSize, battalionName, companyName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        if (companyName == null || companyName == '' || companyName == undefined) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BMT1_DETAILS + ("?resultType=" + resultType + "&termId=" + termId + "&serviceSubjectType=" + 'BMT1' + "&assesmentTermType=" + 'final-term' + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
        else if (companyName != null || companyName != '' || companyName != undefined) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BMT1_DETAILS + ("?resultType=" + resultType + "&termId=" + termId + "&serviceSubjectType=" + 'BMT1' + "&assesmentTermType=" + 'final-term' + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName + "&company=" + companyName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
    };
    TrgTeamService.prototype.getBmt1MidDetailsByBCName = function (resultType, termId, pageIndex, pageSize, battalionName, companyName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        if (companyName == null || companyName == '' || companyName == undefined) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BMT1_DETAILS + ("?resultType=" + resultType + "&termId=" + termId + "&serviceSubjectType=" + 'BMT1' + "&assesmentTermType=" + 'final-term' + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
        else if (companyName != null || companyName != '' || companyName != undefined) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BMT1_DETAILS + ("?resultType=" + resultType + "&termId=" + termId + "&serviceSubjectType=" + 'BMT1' + "&assesmentTermType=" + 'final-term' + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName + "&company=" + companyName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
    };
    TrgTeamService.prototype.getBmt2_All_ListByBCNameComp = function (termId, pageIndex, pageSize, battalionName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_BMT2_list + ("?termId=" + termId + "&pageNo=" + pageIndex + "&pageSize=" + pageSize + "&battalion=" + battalionName), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.prototype.getGCReports = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_REPORTS, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    TrgTeamService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    TrgTeamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], TrgTeamService);
    return TrgTeamService;
}());



/***/ })

}]);