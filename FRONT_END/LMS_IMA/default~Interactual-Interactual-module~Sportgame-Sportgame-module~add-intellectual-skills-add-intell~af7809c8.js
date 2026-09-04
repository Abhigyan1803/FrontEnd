(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Interactual-Interactual-module~Sportgame-Sportgame-module~add-intellectual-skills-add-intell~af7809c8"],{

/***/ "kudQ":
/*!***************************************************************!*\
  !*** ./src/app/service/e-dossier/edossier-service.service.ts ***!
  \***************************************************************/
/*! exports provided: EDossierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDossierService", function() { return EDossierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _links_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../links.module */ "Uhg6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth-service/auth.service */ "V7IE");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EDossierService = /** @class */ (function () {
    function EDossierService(http, snackbar, authService) {
        this.http = http;
        this.snackbar = snackbar;
        this.authService = authService;
        this.objOfCadet = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        this.cadetObj = this.objOfCadet.asObservable();
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
    }
    EDossierService.prototype.setCadetObj = function (obj) {
        this.objOfCadet.next(obj);
    };
    EDossierService.prototype.getEDossierMenu = function (status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EDOSSIER_MENU + ("?status=" + 1), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getEDossierAssessmentMatrix = function (serviceId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EDOSSIER_ASSESSMENTMATRIX + ("?serviceId=" + serviceId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getEqtnEdossiermarks = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EQTN_EDOSSIER_MARKS + ("?serviceId=" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateEdossiermarks = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_EQTN, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getEDossierLeadershipMatrix = function (serviceId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EDOSSIER_LEADERSHIPMATRIX + ("?serviceId=" + serviceId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getEDossierList = function (termid, shortname, companyid, pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        console.log(companyid, '--->>companyid');
        if (shortname == undefined || shortname == null) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EDOSSIER_List + ("?termId=" + termid + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
        else if (companyid != undefined && companyid != null) {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EDOSSIER_List + ("?termId=" + termid + "&battalion=" + shortname + "&company=" + companyid + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
        else {
            return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EDOSSIER_List + ("?termId=" + termid + "&battalion=" + shortname + "&pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
        }
    };
    EDossierService.prototype.getEDossierAllList = function (pageIndex, pageSize) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_EDOSSIER_List + ("?pageNo=" + pageIndex + "&pageSize=" + pageSize), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getAssessmentOQMatrixEdossiermarksByServiceId = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_Assessment_OQ_MATRIX_EDOSSIER_MARKS + ("?serviceId=" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getAssessmentOQEdossierMarksOQMatrixDrillEqtn = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_OQ_MATRIX_DRILL_EQTN_ADC_MARKS_BY_SERVICE_ID + ("?serviceId=" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.get_ed_final_marks = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_ED_ASSESSMENT_OQ_FINAL_BY_SERVICE_ID + ("?serviceId=" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.add_ed_final_marks = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        // return this.http.get(Links.ADD_ED_ASSESSMENT_OQ_FINAL_BY_SERVICE_ID ,data, httpOptions).pipe(map((response: any) => response));
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_ED_ASSESSMENT_OQ_FINAL_BY_SERVICE_ID, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.update_ed_final_marks = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_ED_ASSESSMENT_OQ_FINAL_BY_SERVICE_ID, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateLDMatrix = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_LD_MATRIX, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /* SPORTS & GAMES */
    EDossierService.prototype.getSportsEdossiermarksByServiceId = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_SPORTS_EDOSSIER_MARKS + ("?serviceId=" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateSportsEdossiermarks = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_SPORTS_EDOSSIER_MARKS, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /* DRILL */
    EDossierService.prototype.getDrillEdossiermarksByServiceId = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_Nx_DRILL_EDOSSIER_MARKS + ("?serviceId=" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /* ASSESSMENTOQ */
    EDossierService.prototype.getAssessmentOQEdossiermarksByServiceId = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_Assessment_OQ_EDOSSIER_MARKS + ("?serviceId=" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getDillDatById = function (serviceId, status) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_DRILLDAT + ("?serviceId=" + serviceId + "&status=" + status), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.addDrillDat = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_DRILLDAT, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateDrillDat = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_DRILLDAT, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    // getautobiography(Id) {
    //   const httpOptions = {
    //     headers: new HttpHeaders()
    //       .set('Authorization', `Bearer ${this.authService.getJWT_Token}`)
    //   };
    //   return this.http.get(Links.GET_AUTOBIOGRAPHY + `?id=${Id}` , httpOptions).pipe(map((response: any) => response));
    // }
    EDossierService.prototype.addAutography = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_AUTOBIOGRAPHY, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getautobiographybyserviceid = function (serviceId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_AUTOBIOGRAPHYBYSERVICEID + ("?serviceId=" + serviceId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateautobiography = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_AUTOBIOGRAPHY, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getssbreport = function (Id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_SSBREPORT + ("?id=" + Id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getssbreportservicebyid = function (serviceId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_SSBREPORTBYSERVICEID + ("?serviceId=" + serviceId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.addssbreport = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_SSBREPORT, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updatessbreport = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_SSBREPORT, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getpersnolinfobyserviceid = function (serviceId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_PERSNOLINFO + ("?serviceId=" + serviceId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updatecadetdetails = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_CADETDETAILS, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getWtbyservicebyid = function (serviceId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_WT + ("?serviceId=" + serviceId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getWTAllCadetlist = function (serviceId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_NEW_WT_ED_SEARCH + ("?serviceId=" + serviceId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateWt = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_WT, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getmotivationbyserviceId = function (serviceId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_MOTIVATION + ("?serviceId=" + serviceId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    // getWtbyservicebyid(serviceId) {
    //   const httpOptions = {
    //     headers: new HttpHeaders()
    //       .set('Authorization', `Bearer ${this.authService.getJWT_Token}`)
    //   };
    //   return this.http.get(Links.GET_WT + `?serviceId=${serviceId}` , httpOptions).pipe(map((response: any) => response));
    // }
    EDossierService.prototype.getEDossierInteractualMarks = function (Id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_INTERACTUAL + ("?serviceId=" + Id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateEdinteractual = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        // const data = Object.assign({},{id:Id},form)  
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_UPDATE_INTERACTUAL, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getClubDetails = function (Id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_CLUB_DETAILS + ("?serviceId=" + Id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.addClubDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = {
            details: form.details,
            loc: form.loc,
            performance: form.performance,
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_ADD_CLUB_DETAILS, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateClubDetails = function (Id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = Object.assign({}, { id: Id }, form);
        // {
        //   id:Id,
        //   details: form.details,
        //   loc: form.loc,
        //   performance: form.performance,
        // }
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_UPDATE_CLUB_DETAILS, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getHikeDetails = function (Id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_HIKE_DETAILS + ("?serviceId=" + Id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.addHikeDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = {
            hike: form.hike,
            loc: form.loc,
            remarks: form.remarks,
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_ADD_HIKE_DETAILS, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateHikeDetails = function (Id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = Object.assign({}, { id: Id }, form);
        // {
        //   id:Id,
        //   details: form.details,
        //   loc: form.loc,
        //   performance: form.performance,
        // }
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_UPDATE_HIKE_DETAILS, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getLveDetails = function (Id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_LVE_DETAILS + ("?serviceId=" + Id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.addLveDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_ADD_LVE_DETAILS, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateLveDetails = function (Id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = Object.assign({}, { id: Id }, form);
        // {
        //   id:Id,
        //   details: form.details,
        //   loc: form.loc,
        //   performance: form.performance,
        // }
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_UPDATE_LVE_DETAILS, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getRecordsDetails = function (Id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_RECORD_DETAILS + ("?serviceId=" + Id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.addRecordsDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_ADD_RECORD_DETAILS, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateRecordDetails = function (Id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = Object.assign({}, { id: Id }, form);
        // {
        //   id:Id,
        //   details: form.details,
        //   loc: form.loc,
        //   performance: form.performance,
        // }
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_UPDATE_RECORD_DETAILS, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getObsnDetails = function (Id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_OBSN_DETAILS + ("?serviceId=" + Id + "&status=" + 1), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.addObsnDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_ADD_OBSN_DETAILS, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getCounsDetails = function (Id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_COUNS_DETAILS + ("?serviceId=" + Id + "&status=" + 1), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.addCounsDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_ADD_COUNS_DETAILS, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getInterviewDetails = function (Id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_INTERVIEW_DETAILS + ("?serviceId=" + Id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.addInterviewDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_ADD_INTERVIEW_DETAILS, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateinterviewDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        // const data = Object.assign({},{id:Id},form)  
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_INTERVIEW, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getInitialInterviewDetails = function (Id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_INITIAL_INTERVIEW + ("?serviceId=" + Id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.addInitialInterviewDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_ADD_INITIAL_INTERVIEW, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateInitialInterviewDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        //const data = Object.assign({},{id:Id},form)
        console.log('form' + form);
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_INITIAL_INTERVIEW, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getBegInterviewDetails = function (Id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_BEGINING_INTERVIEW + ("?serviceId=" + Id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.addBegInterviewDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_ADD_BEGINING_INTERVIEW, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateBegInterviewDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        // const data = Object.assign({},{id:Id},form)
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_BEGINING_INTERVIEW, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getMidInterviewDetails = function (Id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_MID_INTERVIEW + ("?serviceId=" + Id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.addMidInterviewDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_ADD_MID_INTERVIEW, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateMidInterviewDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        // const data = Object.assign({},{id:Id},form)
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_MID_INTERVIEW, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getSpecialInterviewDetails = function (Id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_SPECIAL_INTERVIEW + ("?serviceId=" + Id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.addSpecialInterviewDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_ADD_SPECIAL_INTERVIEW, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateSpecialInterviewDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        // const data = Object.assign({},{id:Id},form)
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_SPECIAL_INTERVIEW, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getEdServiceSubMarks = function (Id, resultType, serviceSubjectType) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].E_DOSSIER_SERVICE_SUBJECT + ("?serviceId=" + Id + "&resultType=" + resultType + "&serviceSubjectType=" + serviceSubjectType), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getPT_RecordsOfCadet = function (serviceId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_PT_RECORD_OF_CADET + ("?serviceId=" + serviceId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updatePTResult = function (subject) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_GC_PT_RESULT, subject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.addPT_MotivationalAwards = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_PT_MOTIVATIONAL_AWARDS, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getPT_MotivationalAwards = function (serviceId, termId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_PT_MOTIVATIONAL_AWARDS + ("?serviceId=" + serviceId + "&termId=" + termId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.addMotivationBadgeDetails = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.post(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].ADD_MOTIVATION_BADGE, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateMotivationBadgeDetails = function (Id, form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        var data = Object.assign({}, { id: Id }, form);
        return this.http.patch(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_MOTIVATION_BADGE, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getMotivationBadgeDetails = function (Id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_MOTIVATION_BADGE + ("?serviceId=" + Id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    /*===============GC INTERVIEW=================*/
    EDossierService.prototype.updateinterviewDetailsGc = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        // const data = Object.assign({},{id:Id},form)  
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_INTERVIEW_GC, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateInitialInterviewDetailsGc = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        //const data = Object.assign({},{id:Id},form)
        console.log('form' + form);
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_INITIAL_INTERVIEW_GC, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateBegInterviewDetailsGc = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        // const data = Object.assign({},{id:Id},form)
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_BEGINING_INTERVIEW_GC, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateMidInterviewDetailsGc = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        // const data = Object.assign({},{id:Id},form)
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_MID_INTERVIEW_GC, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.updateSpecialInterviewDetailsGc = function (form) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        // const data = Object.assign({},{id:Id},form)
        return this.http.put(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].UPDATE_SPECIAL_INTERVIEW_GC, form, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.prototype.getGCAssessment = function (serviceId) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', "Bearer " + this.authService.getJWT_Token)
        };
        return this.http.get(_links_module__WEBPACK_IMPORTED_MODULE_1__["Links"].GET_GC_ASSESSMENT + ("?serviceId=" + serviceId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    EDossierService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    EDossierService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], EDossierService);
    return EDossierService;
}());



/***/ })

}]);