(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-subject-add-subject-module"],{

/***/ "1xD4":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-subjects/add-subject/add-subject.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubjectComponent", function() { return AddSubjectComponent; });
/* harmony import */ var _raw_loader_add_subject_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./add-subject.component.html */ "E3Y3");
/* harmony import */ var _add_subject_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-subject.component.scss */ "EiTD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/auth-service/auth.service */ "V7IE");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/service/academic-dept/academic-dept.service */ "1ABS");
/* harmony import */ var app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/admin/admin.service */ "S0d5");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var app_Constants_Constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/Constants/Constants */ "zzRl");
/* harmony import */ var app_links_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/links.module */ "Uhg6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AddSubjectComponent = /** @class */ (function () {
    function AddSubjectComponent(fb, authService, router, route, spinner, cdref, dialog, service, adminService, sharedService) {
        var _this = this;
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.service = service;
        this.adminService = adminService;
        this.sharedService = sharedService;
        this.IP = app_links_module__WEBPACK_IMPORTED_MODULE_14__["Links"].IP;
        this.pTitle = "Add";
        this.terms = [];
        this.isError = false;
        this.docExtArr = app_Constants_Constants__WEBPACK_IMPORTED_MODULE_13__["Constants"].DOC_EXTS;
        this.imgExtArr = app_Constants_Constants__WEBPACK_IMPORTED_MODULE_13__["Constants"].IMG_EXTS;
        this.vidExtArr = app_Constants_Constants__WEBPACK_IMPORTED_MODULE_13__["Constants"].VID_EXTS;
        this.papers = ['Paper 1', 'Paper 2', 'Paper 3', 'Paper 4', 'Paper 5', 'Paper 6'];
        this.addSubjectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.route.params.subscribe(function (params) {
            _this.term = params.term;
            _this.paper = params.paper;
            _this.subject = params.subject;
            if (_this.subject == "Science and Warfare") {
                _this.sTitle = "Science & Warfare";
            }
            else {
                _this.sTitle = params.subject;
            }
            if (_this.term == "I Term") {
                _this.termId = 1;
            }
            else if (_this.term == "II Term") {
                _this.termId = 2;
            }
            else if (_this.term == "III Term") {
                _this.termId = 3;
            }
            else if (_this.term == "II Tech") {
                _this.termId = 7;
            }
            else {
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 5);
                _this.router.navigate(['/main/academic-depart/dashboard']);
            }
            if (!_this.papers.includes(_this.paper)) {
                _this.sharedService.openErrorSnackbarWithSeconds('Error!', 5);
                _this.router.navigate(['/main/academic-depart/dashboard']);
            }
            _this.addSubjectForm = _this.fb.group({
                termId: [_this.termId],
                paper: [_this.paper],
                subjectName: [_this.subject],
                termTopic: _this.fb.array([_this.getATopic()]),
                questionBank: _this.fb.array([_this.getAQuestionBank()]),
                previousTermPaper: _this.fb.array([_this.getAPreviousTermPaper()]),
            });
        });
    }
    AddSubjectComponent.prototype.ngOnInit = function () {
        if (this.router.url.includes('view-subject')) {
            this.id = this.route.snapshot.queryParamMap.get('id');
            // // console.log(this.id);
            this.pTitle = "View";
            if (this.id) {
                this.getSubjectTopicsById(this.id);
            }
        }
    };
    AddSubjectComponent.prototype.ngAfterViewInit = function () {
    };
    AddSubjectComponent.prototype.getSubjectTopicsById = function (id) {
        var _this = this;
        this.service.getSubjectById(id).subscribe(function (res) {
            // // console.log("Topic Response",res);
            if (res.status == "OK") {
                var obj = res.object;
                if (obj.termTopic.length) {
                    // this.getAllTopics.clear();
                    var tempArr = [];
                    var _loop_1 = function (i) {
                        // const furl = obj.termTopic[i].notesUrl
                        // // console.log("FILE URL: ", furl);
                        var notesList = [];
                        // // console.log("NOTES: ",obj.termTopic[i].notesList);
                        obj.termTopic[i].notesList.forEach(function (element) {
                            var ext = element.notesUrl.substring(element.notesUrl.lastIndexOf('.') + 1);
                            var typeofnote;
                            if (ext == "docx" || ext == "doc" || ext == "pdf" || ext == "pptx" || ext == "ppt") {
                                typeofnote = 'document';
                            }
                            else if (ext == "apng" || ext == "png" || ext == "gif" || ext == "jpg" || ext == "jpeg" || ext == "jfif" ||
                                ext == "pjpg" || ext == "pjpeg" || ext == "svg" || ext == "tiff" || ext == "tif") {
                                typeofnote = 'img';
                            }
                            else if (ext == "mp4" || ext == "mov" || ext == "wmv" || ext == "avi" || ext == "flv" || ext == "mkv"
                                || ext == "webm") {
                                typeofnote = 'video';
                            }
                            notesList.push({
                                noteId: element.noteId,
                                notesName: element.notesName,
                                notesUrl: element.notesUrl,
                                termTopicIdFk: element.termTopicIdFk,
                                noteType: typeofnote
                            });
                        });
                        tempArr.push({
                            academicTermIdfk: obj.termTopic[i].academicTermIdfk,
                            termTopicId: obj.termTopic[i].termTopicId,
                            bonesReading: obj.termTopic[i].bonesReading,
                            instruction: obj.termTopic[i].instruction,
                            learningOutcomes: obj.termTopic[i].learningOutcomes,
                            // notesName: obj.termTopic[i].notesName,
                            // notesUrl: obj.termTopic[i].notesUrl,
                            notesList: notesList,
                            requiredReading: obj.termTopic[i].requiredReading,
                            topicName: obj.termTopic[i].topicName,
                        });
                    };
                    for (var i = 0; i <= obj.termTopic.length - 1; i++) {
                        _loop_1(i);
                    }
                    for (var i = 1; i < obj.termTopic.length; i++) {
                        _this.addATopic();
                        // // console.log(this.addSubjectForm.get('termTopic').value)
                    }
                    // // console.log("TEMPORARY ARRAY: ", tempArr);
                    _this.addSubjectForm.patchValue({
                        termTopic: tempArr
                    });
                }
                if (obj.questionBank.length) {
                    // this.getAllTopics.clear();
                    var tempArr = [];
                    for (var i = 0; i <= obj.questionBank.length - 1; i++) {
                        var furl = obj.questionBank[i].queBankurl;
                        // // console.log("FILE URL: ",furl);
                        var ext = furl.substring(furl.lastIndexOf('.') + 1);
                        // // console.log("FILE EXTENSION: ",ext);
                        var typeofQB = void 0;
                        if (ext == "docx" || ext == "doc" || ext == "pdf" || ext == "pptx" || ext == "ppt") {
                            typeofQB = 'document';
                        }
                        else if (ext == "apng" || ext == "png" || ext == "gif" || ext == "jpg" || ext == "jpeg" || ext == "jfif" ||
                            ext == "pjpg" || ext == "pjpeg" || ext == "svg" || ext == "tiff" || ext == "tif") {
                            typeofQB = 'img';
                        }
                        tempArr.push({
                            academicTermIdfk: obj.questionBank[i].academicTermIdfk,
                            questionBankId: obj.questionBank[i].questionBankId,
                            queBankurl: obj.questionBank[i].queBankurl,
                            questionBankName: obj.questionBank[i].questionBankName,
                            type: typeofQB
                        });
                    }
                    for (var i = 1; i < obj.questionBank.length; i++) {
                        _this.addAQuestionBank();
                    }
                    // // console.log("TEMPORARY ARRAY QUESTION BANK: ", tempArr);
                    _this.addSubjectForm.patchValue({
                        questionBank: tempArr
                    });
                    // // console.log(this.addSubjectForm.get('questionBank').value);
                }
                if (obj.previousTermPaper.length) {
                    // this.getAllTopics.clear();
                    var tempArr = [];
                    for (var i = 0; i <= obj.previousTermPaper.length - 1; i++) {
                        var furl = obj.previousTermPaper[i].url;
                        // // console.log("FILE URL: ",furl);
                        var ext = furl.substring(furl.lastIndexOf('.') + 1);
                        // // console.log("FILE EXTENSION: ",ext);
                        var typeofPTP = void 0;
                        if (ext == "docx" || ext == "doc" || ext == "pdf" || ext == "pptx" || ext == "ppt") {
                            typeofPTP = 'document';
                        }
                        else if (ext == "apng" || ext == "png" || ext == "gif" || ext == "jpg" || ext == "jpeg" || ext == "jfif" ||
                            ext == "pjpg" || ext == "pjpeg" || ext == "svg" || ext == "tiff" || ext == "tif") {
                            typeofPTP = 'img';
                        }
                        tempArr.push({
                            academicTermIdfk: obj.previousTermPaper[i].academicTermIdfk,
                            previousTermPaperId: obj.previousTermPaper[i].previousTermPaperId,
                            paperName: obj.previousTermPaper[i].paperName,
                            url: obj.previousTermPaper[i].url,
                            type: typeofPTP
                        });
                    }
                    for (var i = 1; i < obj.previousTermPaper.length; i++) {
                        _this.addAPreviousTermPaper();
                    }
                    // // console.log("TEMPORARY ARRAY: ", tempArr);
                    _this.addSubjectForm.patchValue({
                        previousTermPaper: tempArr
                    });
                }
            }
            // // console.log("At Update, Subject form value: ", this.addSubjectForm.value);
        });
    };
    Object.defineProperty(AddSubjectComponent.prototype, "getAllTopics", {
        //================TOPICS=========================
        get: function () {
            return this.addSubjectForm.get('termTopic');
        },
        enumerable: false,
        configurable: true
    });
    AddSubjectComponent.prototype.getATopic = function () {
        return this.fb.group({
            academicTermIdfk: [''],
            termTopicId: [''],
            bonesReading: [''],
            instruction: [''],
            learningOutcomes: [''],
            // notesName: [''],
            // notesUrl: [''],
            notesList: this.fb.array([this.getNotes()]),
            requiredReading: [''],
            topicName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            preview: [''],
        });
    };
    AddSubjectComponent.prototype.addATopic = function () {
        this.getAllTopics.push(this.getATopic());
    };
    AddSubjectComponent.prototype.removeATopic = function (i) {
        this.getAllTopics.removeAt(i);
    };
    //======= NOTES =========
    AddSubjectComponent.prototype.getAllNotes = function (i) {
        return this.getAllTopics.at(i).get('notesList');
    };
    AddSubjectComponent.prototype.getNotes = function () {
        return this.fb.group({
            noteId: [''],
            notesName: [''],
            notesUrl: [''],
            progress: 0,
            termTopicIdFk: [''],
            noteType: ['']
        });
    };
    AddSubjectComponent.prototype.addANotes = function (i) {
        this.getAllNotes(i).push(this.getNotes());
    };
    AddSubjectComponent.prototype.removeNotes = function (i, j) {
        this.getAllNotes(i).removeAt(j);
    };
    Object.defineProperty(AddSubjectComponent.prototype, "getAllQuestionBank", {
        //===============================================
        /**========== QUESTION BANK ========= */
        get: function () {
            return this.addSubjectForm.get('questionBank');
        },
        enumerable: false,
        configurable: true
    });
    AddSubjectComponent.prototype.getAQuestionBank = function () {
        return this.fb.group({
            progress: 0,
            academicTermIdfk: [''],
            questionBankId: [''],
            queBankurl: [''],
            questionBankName: [''],
            preview: [''],
            type: ['']
        });
    };
    AddSubjectComponent.prototype.addAQuestionBank = function () {
        this.getAllQuestionBank.push(this.getAQuestionBank());
    };
    AddSubjectComponent.prototype.removeAQuestionBank = function (i) {
        this.getAllQuestionBank.removeAt(i);
    };
    Object.defineProperty(AddSubjectComponent.prototype, "getAllPreviousTermPapers", {
        /** ================================= */
        /**========== PREVIOUS TERM PAPERS ========== */
        get: function () {
            return this.addSubjectForm.get('previousTermPaper');
        },
        enumerable: false,
        configurable: true
    });
    AddSubjectComponent.prototype.getAPreviousTermPaper = function () {
        return this.fb.group({
            progress: 0,
            academicTermIdfk: [''],
            previousTermPaperId: [''],
            paperName: [''],
            url: [''],
            preview: [''],
            type: ['']
        });
    };
    AddSubjectComponent.prototype.addAPreviousTermPaper = function () {
        this.getAllPreviousTermPapers.push(this.getAPreviousTermPaper());
    };
    AddSubjectComponent.prototype.removeAPreviousTermPaper = function (i) {
        this.getAllPreviousTermPapers.removeAt(i);
    };
    /**============================================*/
    AddSubjectComponent.prototype.checkFileSize = function (mb, size) {
        var bts = 1024 * 1024 * mb;
        if (size > bts) {
            this.sharedService.openSnackbar("File Size is Greater than " + mb + " MB.");
            return false;
        }
        else {
            return true;
        }
    };
    //===== SET NOTES UPLOADING PROGRESS=======
    AddSubjectComponent.prototype.setNotesProgress = function (i, j, progress) {
        this.getAllNotes(i).at(j).patchValue({
            progress: progress
        });
    };
    //===== SET NOTES URL=======
    AddSubjectComponent.prototype.setNoteUrl = function (i, j, url, type) {
        this.getAllNotes(i).at(j).patchValue({
            notesUrl: url,
            noteType: type
        });
    };
    //===== SET QUESTION BANK UPLOADING PROGRESS=======
    AddSubjectComponent.prototype.setQBProgress = function (i, progress) {
        this.getAllQuestionBank.controls[i].patchValue({
            progress: progress
        });
    };
    //===== SET QUESTION BANK URL=======
    AddSubjectComponent.prototype.setQBUrl = function (i, url, type) {
        this.getAllQuestionBank.controls[i].patchValue({
            queBankurl: url,
            type: type
        });
    };
    //===== SET QUESTION BANK UPLOADING PROGRESS=======
    AddSubjectComponent.prototype.setPaperProgress = function (i, progress) {
        this.getAllPreviousTermPapers.controls[i].patchValue({
            progress: progress
        });
    };
    //===== SET QUESTION BANK URL=======
    AddSubjectComponent.prototype.setPaperUrl = function (i, url, type) {
        this.getAllPreviousTermPapers.controls[i].patchValue({
            url: url,
            type: type
        });
    };
    AddSubjectComponent.prototype.addNotes = function (e, i, j) {
        var _this = this;
        if (e.target.files) {
            var file = e.target.files[0];
            var ext_1 = file.name.substring(file.name.lastIndexOf('.') + 1);
            if (this.docExtArr.includes(ext_1) || this.imgExtArr.includes(ext_1) || this.vidExtArr.includes(ext_1)) {
                if (this.checkFileSize(1024, file.size)) {
                    this.service.uploadFile(file).subscribe(function (res) {
                        // // console.log(res);
                        var _progress;
                        switch (res.type) {
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Sent:
                                _this.authService.resetTime();
                                // console.log('Request has been made!');
                                break;
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].ResponseHeader:
                                _this.authService.resetTime();
                                // console.log('Response header has been received!');
                                break;
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].UploadProgress:
                                _progress = Math.round(res.loaded / res.total * 100);
                                _this.authService.resetTime();
                                // // console.log(`Uploaded! ${_progress}%`);
                                _this.setNotesProgress(i, j, _progress);
                                break;
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Response: {
                                // // console.log('User successfully created!', res.body);
                                var obj = res.body;
                                if (obj.status == "OK") {
                                    if (_this.docExtArr.includes(ext_1)) {
                                        _this.setNoteUrl(i, j, obj.object.url, 'document');
                                    }
                                    else if (_this.imgExtArr.includes(ext_1)) {
                                        _this.setNoteUrl(i, j, obj.object.url, 'img');
                                    }
                                    else if (_this.vidExtArr.includes(ext_1)) {
                                        _this.setNoteUrl(i, j, obj.object.url, 'video');
                                    }
                                }
                                // // console.log(this.addSubjectForm.value);
                                _this.authService.resetTime();
                            }
                        }
                    });
                }
                else {
                    this.sharedService.openAlertSnackbarWithSeconds('File Size Exceeded.', 3);
                }
            }
            else {
                this.sharedService.openAlertSnackbarWithSeconds("Please Select a Valid File or Document.", 5);
            }
        }
    };
    AddSubjectComponent.prototype.addQuestionBank = function (e, i) {
        var _this = this;
        if (e.target.files) {
            var file = e.target.files[0];
            var ext_2 = file.name.substring(file.name.lastIndexOf('.') + 1);
            if (this.docExtArr.includes(ext_2) || this.imgExtArr.includes(ext_2)) {
                if (this.checkFileSize(150, file.size)) {
                    this.service.uploadFile(file).subscribe(function (res) {
                        // // console.log(res);
                        var _progress;
                        switch (res.type) {
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Sent:
                                _this.authService.resetTime();
                                // console.log('Request has been made!');
                                break;
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].ResponseHeader:
                                _this.authService.resetTime();
                                // console.log('Response header has been received!');
                                break;
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].UploadProgress:
                                _progress = Math.round(res.loaded / res.total * 100);
                                _this.authService.resetTime();
                                // // console.log(`Uploaded! ${_progress}%`);
                                _this.setQBProgress(i, _progress);
                                break;
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Response: {
                                // // console.log('User successfully created!', res.body);
                                var obj = res.body;
                                if (obj.status == "OK") {
                                    if (_this.docExtArr.includes(ext_2)) {
                                        _this.setQBUrl(i, obj.object.url, 'document');
                                    }
                                    else if (_this.imgExtArr.includes(ext_2)) {
                                        _this.setQBUrl(i, obj.object.url, 'img');
                                    }
                                }
                                // console.log(this.addSubjectForm.value);
                                _this.authService.resetTime();
                            }
                        }
                    });
                }
                else {
                    this.sharedService.openAlertSnackbarWithSeconds('File Size Exceeded.', 3);
                }
            }
            else {
                this.sharedService.openAlertSnackbarWithSeconds("Please Select a Valid File or Document.", 5);
            }
            //  const type = file.name.substring(file.name.lastIndexOf('.') + 1)
            // if (
            //   type == "docx" || type == "doc" || type == "pdf" || type == "pptx" || type == "ppt" ||
            //   type == "apng" || type == "png" || type == "gif" || type == "jpg" || type == "jpeg" || type == "jfif" ||
            //   type == "pjpg" || type == "pjpeg" || type == "svg" || type == "tiff" || type == "tif" || type == "mp4" ||
            //   type == "mov" || type == "wmv" || type == "avi" || type == "flv" || type == "mkv" || type == "webm") {
            //   if (type == "docx" || type == "doc" || type == "pdf") {
            //     if (this.checkFileSize(5, file.size)) {
            //       this.spinner.show();
            //       this.service.uploadFile(e.target.files[0]).subscribe(
            //         res => {
            //           // // console.log(res.object.url);
            //           if (res.status == "OK") {
            //             var reader = new FileReader();
            //             reader.readAsDataURL(e.target.files[0])
            //             reader.onload = (event: any) => {
            //               this.getAllQuestionBank.controls[i].patchValue({
            //                 preview: event.target.result,
            //                 queBankurl: res.object.url,
            //                 type: 'document'
            //               })
            //             }
            //             this.spinner.hide();
            //           }
            //         }
            //       )
            //     }
            //   } else if (type == "pptx" || type == "ppt") {
            //     if (this.checkFileSize(50, file.size)) {
            //       this.spinner.show();
            //       this.service.uploadFile(e.target.files[0]).subscribe(
            //         res => {
            //           // // console.log(res.object.url);
            //           if (res.status == "OK") {
            //             var reader = new FileReader();
            //             reader.readAsDataURL(e.target.files[0])
            //             reader.onload = (event: any) => {
            //               this.getAllQuestionBank.controls[i].patchValue({
            //                 preview: event.target.result,
            //                 queBankurl: res.object.url,
            //                 type: 'document'
            //               })
            //             }
            //             this.spinner.hide();
            //           }
            //         }
            //       )
            //     }
            //   } else if (type == "apng" || type == "png" || type == "gif" ||
            //     type == "jpg" || type == "jpeg" || type == "jfif" || type == "pjpg" || type == "pjpeg" ||
            //     type == "svg" || type == "tiff" || type == "tif"
            //   ) {
            //     if (this.checkFileSize(5, file.size)) {
            //       this.spinner.show();
            //       this.service.uploadFile(e.target.files[0]).subscribe(
            //         res => {
            //           // // console.log(res.object.url);
            //           if (res.status == "OK") {
            //             var reader = new FileReader();
            //             reader.readAsDataURL(e.target.files[0])
            //             reader.onload = (event: any) => {
            //               this.getAllQuestionBank.controls[i].patchValue({
            //                 preview: event.target.result,
            //                 queBankurl: res.object.url,
            //                 type: 'img'
            //               })
            //             }
            //             this.spinner.hide();
            //           }
            //         }
            //       )
            //     }
            //   } else if (type == "mp4" || type == "mov" || type == "wmv" || type == "avi" || type == "flv" || type == "mkv" || type == "webm") {
            //     if (this.checkFileSize(150, file.size)) {
            //       this.spinner.show();
            //       this.service.uploadFile(e.target.files[0]).subscribe(
            //         res => {
            //           // // console.log(res.object.url);
            //           if (res.status == "OK") {
            //             var reader = new FileReader();
            //             reader.readAsDataURL(e.target.files[0])
            //             reader.onload = (event: any) => {
            //               this.getAllQuestionBank.controls[i].patchValue({
            //                 preview: event.target.result,
            //                 queBankurl: res.object.url,
            //                 type: 'video'
            //               })
            //             }
            //             this.spinner.hide();
            //           }
            //         }
            //       )
            //     }
            //   }
            //   // // console.log(this.getAllTopics.controls[i]);
            // } else {
            //   this.sharedService.openSnackbar("Please Select a Valid File or Document.")
            // }
        }
    };
    AddSubjectComponent.prototype.addPreviousTermPaper = function (e, i) {
        var _this = this;
        var file = e.target.files[0];
        var ext = file.name.substring(file.name.lastIndexOf('.') + 1);
        if (this.docExtArr.includes(ext) || this.imgExtArr.includes(ext)) {
            if (this.checkFileSize(150, file.size)) {
                this.service.uploadFile(file).subscribe(function (res) {
                    // // console.log(res);
                    var _progress;
                    switch (res.type) {
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Sent:
                            _this.authService.resetTime();
                            // console.log('Request has been made!');
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].ResponseHeader:
                            _this.authService.resetTime();
                            // console.log('Response header has been received!');
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].UploadProgress:
                            _progress = Math.round(res.loaded / res.total * 100);
                            _this.authService.resetTime();
                            // // console.log(`Uploaded! ${_progress}%`);
                            _this.setPaperProgress(i, _progress);
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Response: {
                            // // console.log('User successfully created!', res.body);
                            var obj = res.body;
                            if (obj.status == "OK") {
                                if (_this.docExtArr.includes(ext)) {
                                    _this.setPaperUrl(i, obj.object.url, 'document');
                                }
                                else if (_this.imgExtArr.includes(ext)) {
                                    _this.setPaperUrl(i, obj.object.url, 'img');
                                }
                            }
                            console.log(_this.addSubjectForm.value);
                            _this.authService.resetTime();
                        }
                    }
                });
            }
            else {
                this.sharedService.openAlertSnackbarWithSeconds('File Size Exceeded.', 3);
            }
        }
        else {
            this.sharedService.openAlertSnackbarWithSeconds("Please Select a Valid File or Document.", 5);
        }
        // const type = file.name.substring(file.name.lastIndexOf('.') + 1)
        // if (
        //   type == "docx" || type == "doc" || type == "pdf" || type == "pptx" || type == "ppt" ||
        //   type == "apng" || type == "png" || type == "gif" || type == "jpg" || type == "jpeg" || type == "jfif" ||
        //   type == "pjpg" || type == "pjpeg" || type == "svg" || type == "tiff" || type == "tif" || type == "mp4" ||
        //   type == "mov" || type == "wmv" || type == "avi" || type == "flv" || type == "mkv" || type == "webm") {
        //   if (type == "docx" || type == "doc" || type == "pdf") {
        //     //DOCUMENT FORMAT
        //     if (this.checkFileSize(5, file.size)) {
        //       this.spinner.show();
        //       this.service.uploadFile(e.target.files[0]).subscribe(
        //         res => {
        //           // // console.log(res.object.url);
        //           if (res.status == "OK") {
        //             var reader = new FileReader();
        //             reader.readAsDataURL(e.target.files[0])
        //             reader.onload = (event: any) => {
        //               this.getAllPreviousTermPapers.controls[i].patchValue({
        //                 preview: event.target.result,
        //                 url: res.object.url,
        //                 type: 'document'
        //               })
        //             }
        //             this.spinner.hide();
        //           }
        //         }
        //       )
        //     }
        //   } else if (type == "pptx" || type == "ppt") {
        //     //PPT FORMAT
        //     if (this.checkFileSize(50, file.size)) {
        //       this.spinner.show();
        //       this.service.uploadFile(e.target.files[0]).subscribe(
        //         res => {
        //           // // console.log(res.object.url);
        //           if (res.status == "OK") {
        //             var reader = new FileReader();
        //             reader.readAsDataURL(e.target.files[0])
        //             reader.onload = (event: any) => {
        //               this.getAllPreviousTermPapers.controls[i].patchValue({
        //                 preview: event.target.result,
        //                 url: res.object.url,
        //                 type: 'document'
        //               })
        //             }
        //             this.spinner.hide();
        //           }
        //         }
        //       )
        //     }
        //   } else if (type == "apng" || type == "png" || type == "gif" ||
        //     type == "jpg" || type == "jpeg" || type == "jfif" || type == "pjpg" || type == "pjpeg" ||
        //     type == "svg" || type == "tiff" || type == "tif"
        //   ) {
        //     //IMAGE FORMAT
        //     if (this.checkFileSize(5, file.size)) {
        //       this.spinner.show();
        //       this.service.uploadFile(e.target.files[0]).subscribe(
        //         res => {
        //           // // console.log(res.object.url);
        //           if (res.status == "OK") {
        //             var reader = new FileReader();
        //             reader.readAsDataURL(e.target.files[0])
        //             reader.onload = (event: any) => {
        //               this.getAllPreviousTermPapers.controls[i].patchValue({
        //                 preview: event.target.result,
        //                 url: res.object.url,
        //                 type: 'img'
        //               })
        //             }
        //             this.spinner.hide();
        //           }
        //         }
        //       )
        //     }
        //   } else if (type == "mp4" || type == "mov" || type == "wmv" || type == "avi" || type == "flv" || type == "mkv" || type == "webm") {
        //     if (this.checkFileSize(150, file.size)) {
        //       this.spinner.show();
        //       this.service.uploadFile(e.target.files[0]).subscribe(
        //         res => {
        //           // // console.log(res.object.url);
        //           if (res.status == "OK") {
        //             var reader = new FileReader();
        //             reader.readAsDataURL(e.target.files[0])
        //             reader.onload = (event: any) => {
        //               this.getAllPreviousTermPapers.controls[i].patchValue({
        //                 preview: event.target.result,
        //                 url: res.object.url,
        //                 type: 'video'
        //               })
        //             }
        //             this.spinner.hide();
        //           }
        //         }
        //       )
        //     }
        //   }
        //   // // console.log(this.getAllTopics.controls[i]);
        // } else {
        //   this.sharedService.openSnackbar("Please Select a Valid File or Document.")
        // }
        // // console.log(this.getAllPreviousTermPapers.controls[i])
    };
    Object.defineProperty(AddSubjectComponent.prototype, "f", {
        get: function () {
            return this.addSubjectForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddSubjectComponent.prototype.addTopics = function () {
        var _this = this;
        if (this.addSubjectForm.valid) {
            this.spinner.show();
            this.service.addSubject(this.addSubjectForm.value).subscribe(function (res) {
                _this.apiRes(res);
            });
        }
        else {
            this.isError = true;
            this.sharedService.openSnackbar("Please Fill All Required Fields.");
        }
    };
    AddSubjectComponent.prototype.updateTopics = function () {
        var _this = this;
        // console.log(this.addSubjectForm.value);
        if (this.addSubjectForm.valid) {
            this.spinner.show();
            this.service.updateSubjectById(this.id, this.addSubjectForm.value).subscribe(function (res) {
                _this.apiRes(res);
            });
        }
        else {
            this.isError = true;
            this.sharedService.openSnackbar("Please Fill All Required Fields.");
        }
    };
    AddSubjectComponent.prototype.apiRes = function (res) {
        if (res.status == "OK") {
            this.spinner.hide();
            this.sharedService.openSnackbar(res.message);
            this.goBack();
        }
    };
    AddSubjectComponent.prototype.goBack = function () {
        this.router.navigate(['/main/academic-depart/subjects/' + this.term + '/' + this.paper + '/' + this.subject]);
    };
    AddSubjectComponent.prototype.onChange = function (event) {
        this.authService.resetTime();
        // // console.log(event.editor.getData());
        // // console.log(event.editor)
    };
    AddSubjectComponent.prototype.mouseEvent = function (e, t) {
        // // console.log(t)
        this.authService.resetTime();
    };
    AddSubjectComponent.prototype.openDialog = function (type, url) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], {
            width: '1300px', height: '650px', data: {
                type: type, title: 'Notes', url: url
            }
        });
    };
    AddSubjectComponent.prototype.openVideo = function (url) {
        window.open(this.IP + url, "_blank", "width=700,height=500");
    };
    AddSubjectComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_10__["AcademicDeptService"] },
        { type: app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_11__["AdminService"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] }
    ]; };
    AddSubjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-add-subject',
            template: _raw_loader_add_subject_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_add_subject_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], app_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], app_service_academic_dept_academic_dept_service__WEBPACK_IMPORTED_MODULE_10__["AcademicDeptService"], app_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_11__["AdminService"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], AddSubjectComponent);
    return AddSubjectComponent;
}());



/***/ }),

/***/ "E3Y3":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/academic-depart/academic-subjects/add-subject/add-subject.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-new\">\r\n\r\n    <h4 class=\"card-heading\">\r\n        <button mat-icon-button (click)=\"goBack()\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button>\r\n        Subjects > <span class=\"sub-menu1\"> {{term}} > {{paper}} > {{sTitle}} > {{pTitle}} Topics</span>\r\n    </h4>\r\n</div>\r\n\r\n<mat-card>\r\n    <!-- <button (click)=\"getForm()\" >GET</button> -->\r\n    <form [formGroup]=\"addSubjectForm\">\r\n\r\n        <mat-accordion class=\"mat-panel11\">\r\n\r\n            <ng-container formArrayName=\"termTopic\">\r\n\r\n                <div *ngFor=\"let topic of getAllTopics.controls;let i=index\">\r\n                    <mat-expansion-panel [formGroupName]=\"i\">\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                <!-- <h4>Topic Name</h4> -->\r\n                                <!-- <input type=\"text\" class=\"form-control\" name=\"\" id=\"\"\r\n                                formControlName=\"topicName\" placeholder=\"Topic Name\">\r\n                                <span  class=\"validation_msg\"  *ngIf=\"!getAllTopics.controls[i].value.topicName && isError\" >\r\n                                    Required\r\n                                </span> -->\r\n                                <h4>\r\n                                    {{getAllTopics.controls[i].value.topicName || \"Topic\"}}\r\n                                </h4>\r\n\r\n                            </mat-panel-title>\r\n                            <mat-panel-description>\r\n                                <!-- <span  class=\"validation_msg\"  *ngIf=\"f.date.touched && f.time.invalid\" >Please Select Date</span> -->\r\n                                <span class=\"validation_msg\"\r\n                                    *ngIf=\"getAllTopics.controls[i].status =='INVALID' && isError\">\r\n                                    Please Fill All Required Fields.\r\n                                </span>\r\n                            </mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                        <div>\r\n                            <mat-accordion class=\"mat-panel11\">\r\n\r\n                                <div class=\"mb-3\">\r\n\r\n                                    <input type=\"text\" class=\"form-control\" name=\"\" id=\"\" formControlName=\"topicName\"\r\n                                        placeholder=\"Topic Name\">\r\n                                    <span class=\"validation_msg\"\r\n                                        *ngIf=\"!getAllTopics.controls[i].value.topicName && isError\">\r\n                                        Required\r\n                                    </span>\r\n                                </div>\r\n                                <mat-expansion-panel>\r\n                                    <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                            <h4>Learning Outcomes</h4>\r\n\r\n                                        </mat-panel-title>\r\n                                        <mat-panel-description>\r\n                                            <!-- This is a summary of the content -->\r\n                                            <!-- <span class=\"validation_msg\"\r\n                                                *ngIf=\"!getAllTopics.controls[i].value.learningOutcomes && isError\">\r\n                                                Required\r\n                                            </span> -->\r\n                                        </mat-panel-description>\r\n                                    </mat-expansion-panel-header>\r\n\r\n                                    <ckeditor formControlName=\"learningOutcomes\" (change)=\"onChange($event)\"\r\n                                        (mouseover)=\"mouseEvent($event,'mouseover')\"\r\n                                        (mouseout)=\"mouseEvent($event,'mouseout')\" (click)=\"mouseEvent($event,'click')\">\r\n                                    </ckeditor>\r\n\r\n\r\n                                </mat-expansion-panel>\r\n\r\n                                <mat-expansion-panel>\r\n                                    <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                            <h4>Required Readings</h4>\r\n                                        </mat-panel-title>\r\n                                        <mat-panel-description>\r\n                                            <!-- This is a summary of the content -->\r\n                                            <!-- <span class=\"validation_msg\"\r\n                                                *ngIf=\"!getAllTopics.controls[i].value.requiredReading && isError\">\r\n                                                Required\r\n                                            </span> -->\r\n                                        </mat-panel-description>\r\n                                    </mat-expansion-panel-header>\r\n\r\n                                    <ckeditor formControlName=\"requiredReading\" (change)=\"onChange($event)\"\r\n                                        (mouseover)=\"mouseEvent($event,'mouseover')\"\r\n                                        (mouseout)=\"mouseEvent($event,'mouseout')\" (click)=\"mouseEvent($event,'click')\">\r\n                                    </ckeditor>\r\n                                </mat-expansion-panel>\r\n\r\n                                <mat-expansion-panel>\r\n                                    <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                            <h4>Bonus Readings</h4>\r\n                                        </mat-panel-title>\r\n                                        <mat-panel-description>\r\n                                            <!-- This is a summary of the content -->\r\n                                            <!-- <span class=\"validation_msg\"\r\n                                                *ngIf=\"!getAllTopics.controls[i].value.bonesReading && isError\">\r\n                                                Required\r\n                                            </span> -->\r\n                                        </mat-panel-description>\r\n                                    </mat-expansion-panel-header>\r\n\r\n                                    <ckeditor formControlName=\"bonesReading\" (change)=\"onChange($event)\"\r\n                                        (mouseover)=\"mouseEvent($event,'mouseover')\"\r\n                                        (mouseout)=\"mouseEvent($event,'mouseout')\" (click)=\"mouseEvent($event,'click')\">\r\n                                    </ckeditor>\r\n                                </mat-expansion-panel>\r\n\r\n\r\n                                <mat-expansion-panel>\r\n                                    <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                            <h4>Notes</h4>\r\n                                        </mat-panel-title>\r\n                                        <mat-panel-description>\r\n                                            <!-- This is a summary of the content -->\r\n                                            <!-- <span class=\"validation_msg\"\r\n                                                *ngIf=\"(!getAllTopics.controls[i].value.notesName || !getAllTopics.controls[i].value.notesUrl) && isError\">\r\n                                                Required\r\n                                            </span> -->\r\n                                        </mat-panel-description>\r\n                                    </mat-expansion-panel-header>\r\n                                    <div>\r\n                                        Only\r\n                                        .docx, .doc, .pdf, .pptx, .ppt,\r\n                                        .apng, .png, .gif, .jpg, .jpeg, .jfif,\r\n                                        .pjpg, .pjpeg, .svg, .tiff, .tif, .mp3, .mp4,\r\n                                        .mov, .wmv, .avi, .flv, .mkv, .webm formats are allowed.\r\n                                    </div>\r\n                                    <div>\r\n                                        Maximum size is 1 GB.\r\n                                    </div>\r\n\r\n                                    <ng-container formArrayName=\"notesList\">\r\n                                        <ng-container *ngFor=\"let note of getAllNotes(i).controls;let j=index\">\r\n                                            <div class=\"row\" [formGroupName]=\"j\">\r\n\r\n                                                <div class=\"form-group col-md-6\">\r\n                                                    <input type=\"text\" id=\"filename\" class=\"form-control\"\r\n                                                        maxlength=\"100\" placeholder=\"File Name\"\r\n                                                        formControlName=\"notesName\">\r\n                                                    <!-- <span class=\"validation_msg\"\r\n                                                        *ngIf=\"!getAllTopics.controls[i].value.notesName && isError\">\r\n                                                        Please Enter Filename.\r\n                                                    </span> -->\r\n                                                </div>\r\n\r\n                                                <div class=\"form-group col-md-3\">\r\n                                                    <label class=\"custom-file-upload\">\r\n                                                        <input type=\"file\" (change)=\"addNotes($event,i,j)\"\r\n                                                            accept=\"audio/*,video/*,image/*,.pdf,.doc,.docx,.ppt,.pptx\" />\r\n                                                        <mat-icon>add</mat-icon> Add File\r\n                                                    </label>\r\n\r\n                                                    <!-- <span class=\"validation_msg\"\r\n                                                        *ngIf=\"!getAllTopics.controls[i].value.notesUrl && isError\">\r\n                                                        No File is Selected\r\n                                                    </span> -->\r\n                                                </div>\r\n\r\n                                                <div class=\"col-md-3\" *ngIf=\"note.value.progress>0 && note.value.progress<100\">\r\n                                                   Uploading File....{{note.value.progress}}% \r\n                                                   <mat-progress-bar mode=\"determinate\" [value]=\"note.value.progress\"></mat-progress-bar>\r\n                                                </div>\r\n\r\n                                                <div class=\"col-md-2\" *ngIf=\"getAllNotes(i).length>1\">\r\n                                                    <button mat-button class=\"remove-btn\" (click)=\"removeNotes(i,j)\">\r\n                                                        <mat-icon>\r\n                                                            remove\r\n                                                        </mat-icon>\r\n                                                    </button>\r\n                                                </div>\r\n\r\n                                                <div style=\"width: 200px; height: 200px;\"\r\n                                                    *ngIf=\"getAllNotes(i).at(j).value.notesUrl\">\r\n                                                    <a href=\"javascript:void(0)\"\r\n                                                        (click)=\"openDialog('img',this.getAllNotes(i).at(j).value.notesUrl)\">\r\n                                                        <img *ngIf=\"getAllNotes(i).at(j).value.noteType == 'img'\"\r\n                                                            [src]=\"IP+getAllNotes(i).at(j).value.notesUrl\" alt=\"\">\r\n                                                    </a>\r\n\r\n                                                    <a href=\"javascript:void(0)\"\r\n                                                        *ngIf=\"getAllNotes(i).at(j).value.noteType == 'document'\"\r\n                                                        (click)=\"openDialog('document',getAllNotes(i).at(j).value.notesUrl)\">\r\n                                                        <mat-icon>description</mat-icon>\r\n                                                    </a>\r\n\r\n                                                    <a *ngIf=\"getAllNotes(i).at(j).value.noteType == 'video'\" href=\"javascript:void(0)\" (click)=\"openVideo(getAllNotes(i).at(j).value.notesUrl)\" >\r\n                                                        <video  poster=\"assets/img/video-play-button.png\" width=\"200\" height=\"150\" >\r\n                                                            <source [src]=\"IP+getAllNotes(i).at(j).value.notesUrl\" type=\"video/*\">\r\n                                                        </video>    \r\n                                                    </a>\r\n                                                </div>\r\n\r\n\r\n                                            </div>\r\n                                        </ng-container>\r\n                                        <div class=\"pull-right\">\r\n                                            <button mat-button class=\"add-btn cus-btn\" (click)=\"addANotes(i)\">\r\n                                                <mat-icon>\r\n                                                    add\r\n                                                </mat-icon>\r\n                                            </button>\r\n                                        </div>\r\n                                    </ng-container>\r\n\r\n                                    <!-- <div class=\"row\">\r\n\r\n                                        <div class=\"form-group col-md-6\">\r\n                                            <input type=\"text\" id=\"filename\" class=\"form-control\" maxlength=\"100\"\r\n                                                placeholder=\"File Name\" formControlName=\"notesName\">\r\n                                           \r\n                                        </div>\r\n\r\n                                        <div class=\"form-group col-md-3\">\r\n                                            <label class=\"custom-file-upload\">\r\n                                                <input type=\"file\" (change)=\"addNotes($event,i)\" />\r\n                                                <mat-icon>add</mat-icon> Add File\r\n                                            </label>\r\n                                          \r\n                                        </div>\r\n\r\n\r\n                                    </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                                </mat-expansion-panel>\r\n\r\n                                <mat-expansion-panel>\r\n                                    <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                            <!-- <h4>Instructor Notes</h4> -->\r\n                                              <h4>Instructor Notes</h4>\r\n                                        </mat-panel-title>\r\n                                        <mat-panel-description>\r\n                                            <!-- This is a summary of the content -->\r\n                                            <!-- <span class=\"validation_msg\"\r\n                                                *ngIf=\"!getAllTopics.controls[i].value.instruction && isError\">\r\n                                                Required\r\n                                            </span> -->\r\n                                        </mat-panel-description>\r\n                                    </mat-expansion-panel-header>\r\n                                    <ckeditor formControlName=\"instruction\" (change)=\"onChange($event)\"\r\n                                        (mouseover)=\"mouseEvent($event,'mouseover')\"\r\n                                        (mouseout)=\"mouseEvent($event,'mouseout')\" (click)=\"mouseEvent($event,'click')\">\r\n                                    </ckeditor>\r\n\r\n                                </mat-expansion-panel>\r\n\r\n                            </mat-accordion>\r\n\r\n                        </div>\r\n\r\n                    </mat-expansion-panel>\r\n                    <div class=\"remove-btn-div\" *ngIf=\"getAllTopics.controls.length>1\">\r\n                        <button matTooltip=\"Remove This Topic\" class=\"remove-btn\" mat-button (click)=\"removeATopic(i)\">\r\n                            <mat-icon>remove</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <div class=\"add-btn-div\">\r\n                <button matTooltip=\"Add New Topic\" class=\"add-btn cus-btn\" mat-button (click)=\"addATopic()\">\r\n                    <mat-icon>add</mat-icon>\r\n                </button>\r\n            </div>\r\n\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Question Bank</h4>\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        <!-- This is a summary of the content -->\r\n                        <!-- <span class=\"validation_msg\" *ngIf=\"f.questionBank.status =='INVALID' && isError\">\r\n                            Please Fill All Required Fields.\r\n                        </span> -->\r\n\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n\r\n                <div formArrayName=\"questionBank\">\r\n                    <div>\r\n                        Only\r\n                        .docx, .doc, .pdf, .pptx, .ppt,\r\n                        .apng, .png, .gif, .jpg, .jpeg, .jfif,\r\n                        .pjpg, .pjpeg, .svg, .tiff, .tif formats are allowed. </div>\r\n                    <div>\r\n                        Maximum size is 150 MB.\r\n                    </div>\r\n                    <div *ngFor=\"let question of getAllQuestionBank.controls; let i=index\">\r\n                        <ng-container [formGroupName]=\"i\">\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <input type=\"text\" id=\"filename\" class=\"form-control\" maxlength=\"100\"\r\n                                        placeholder=\"File Name\" formControlName=\"questionBankName\">\r\n                                    <!-- <span class=\"validation_msg\"\r\n                                        *ngIf=\"!getAllQuestionBank.controls[i].value.questionBankName && isError\">\r\n                                        Please Enter Question Bank Name.\r\n                                    </span> -->\r\n\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-3\">\r\n                                    <label class=\"custom-file-upload\">\r\n                                        <input type=\"file\" accept=\"image/*,.pdf,.doc,.docx,.ppt,.pptx\" (change)=\"addQuestionBank($event,i)\" />\r\n                                        <mat-icon>add</mat-icon> Add File\r\n                                    </label>\r\n                                    <!-- <span class=\"validation_msg\"\r\n                                        *ngIf=\"!getAllQuestionBank.controls[i].value.queBankurl && isError\">\r\n                                        No File is Selected.\r\n                                    </span> -->\r\n                                </div>\r\n                                <div class=\"col-md-3\" *ngIf=\"question.value.progress>0 && question.value.progress<100\">\r\n                                    Uploading File....{{question.value.progress}}% \r\n                                    <mat-progress-bar mode=\"determinate\" [value]=\"question.value.progress\"></mat-progress-bar>\r\n                                 </div>\r\n                                <div class=\"form-group col-md-3\" *ngIf=\"getAllQuestionBank.controls.length>1\">\r\n                                    <div class=\"remove-btn-div\">\r\n                                        <button matTooltip=\"Remove This File\" class=\"remove-btn\" mat-button\r\n                                            (click)=\"removeAQuestionBank(i)\">\r\n                                            <mat-icon>remove</mat-icon>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div style=\"width: 200px; height: 200px;\"\r\n                                *ngIf=\"getAllQuestionBank.controls[i].value.queBankurl\">\r\n\r\n                                <a href=\"javascript:void(0)\" *ngIf=\"getAllQuestionBank.controls[i].value.type == 'img'\"\r\n                                    (click)=\"openDialog('img',getAllQuestionBank.controls[i].value.queBankurl)\">\r\n                                    <img [src]=\"getAllQuestionBank.controls[i].value.queBankurl\"\r\n                                        style=\"width: 180px; height: 180px;\" alt=\"\">\r\n                                </a>\r\n                                <a href=\"javascript:void(0)\"\r\n                                    *ngIf=\"getAllQuestionBank.controls[i].value.type == 'document'\"\r\n                                    (click)=\"openDialog('document',getAllQuestionBank.controls[i].value.queBankurl)\">\r\n                                    <mat-icon style=\"width: 100px !important; height: 120px !important;\"> description\r\n                                    </mat-icon>\r\n                                </a>\r\n\r\n                            </div>\r\n                        </ng-container>\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"add-btn-div\">\r\n                    <button matTooltip=\"Add New Topic\" class=\"add-btn cus-btn\" mat-button (click)=\"addAQuestionBank()\">\r\n                        <mat-icon>add</mat-icon>\r\n                    </button>\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        <h4>Previous Term Papers</h4>\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        <!-- This is a summary of the content -->\r\n                        <span class=\"validation_msg\" *ngIf=\"f.previousTermPaper.status =='INVALID' && isError\">\r\n                            Please Fill All Required Fields.\r\n                        </span>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n\r\n                <div formArrayName=\"previousTermPaper\">\r\n                    <div>\r\n                        Only\r\n                        .docx, .doc, .pdf, .pptx, .ppt,\r\n                        .apng, .png, .gif, .jpg, .jpeg, .jfif,\r\n                        .pjpg, .pjpeg, .svg, .tiff, .tif, .mp4,\r\n                        .mov, .wmv, .avi, .flv, .mkv, .webm formats are allowed. </div>\r\n                    <div>\r\n                        Maximum size is 150 MB.\r\n                    </div>\r\n                    <div *ngFor=\"let paper of getAllPreviousTermPapers.controls; let i=index\">\r\n\r\n                        <ng-container [formGroupName]=\"i\">\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <input type=\"text\" id=\"filename\" class=\"form-control\" maxlength=\"100\"\r\n                                        placeholder=\"File Name\" formControlName=\"paperName\">\r\n\r\n                                    <!-- <span class=\"validation_msg\"\r\n                                        *ngIf=\"!getAllPreviousTermPapers.controls[i].value.url  && isError\">\r\n                                        Please Enter Previous Term Paper Name.\r\n                                    </span> -->\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-3\">\r\n                                    <label class=\"custom-file-upload\">\r\n                                        <input type=\"file\" accept=\"image/*,.pdf,.doc,.docx,.ppt,.pptx\" (change)=\"addPreviousTermPaper($event,i)\" />\r\n                                        <mat-icon>add</mat-icon> Add File\r\n                                    </label>\r\n                                    <!-- <span class=\"validation_msg\"\r\n                                        *ngIf=\"!getAllPreviousTermPapers.controls[i].value.url  && isError\">\r\n                                        No File is Selected.\r\n                                    </span> -->\r\n                                </div>\r\n                                <div class=\"col-md-3\" *ngIf=\"paper.value.progress>0 && paper.value.progress<100\">\r\n                                    Uploading File....{{paper.value.progress}}% \r\n                                    <mat-progress-bar mode=\"determinate\" [value]=\"paper.value.progress\"></mat-progress-bar>\r\n                                 </div>\r\n                                <div class=\"form-group col-md-3\" *ngIf=\"getAllPreviousTermPapers.controls.length>1\">\r\n                                    <div class=\"remove-btn-div\">\r\n                                        <button matTooltip=\"Remove This File\" class=\"remove-btn\" mat-button\r\n                                            (click)=\"removeAPreviousTermPaper(i)\">\r\n                                            <mat-icon>remove</mat-icon>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div style=\"width: 200px; height: 200px;\"\r\n                                *ngIf=\"getAllPreviousTermPapers.controls[i].value.url\">\r\n                                <a href=\"javascript:void(0)\"\r\n                                    *ngIf=\"getAllPreviousTermPapers.controls[i].value.type == 'img'\"\r\n                                    (click)=\"openDialog('img',getAllPreviousTermPapers.controls[i].value.url)\">\r\n                                    <img [src]=\"getAllPreviousTermPapers.controls[i].value.url\"\r\n                                        style=\"width: 180px; height: 180px;\" alt=\"\">\r\n                                </a>\r\n\r\n                                <a href=\"javascript:void(0)\"\r\n                                    *ngIf=\"getAllPreviousTermPapers.controls[i].value.type == 'document'\"\r\n                                    (click)=\"openDialog('document',getAllPreviousTermPapers.controls[i].value.url)\">\r\n                                    <mat-icon style=\"width: 100px !important; height: 120px !important;\"> description\r\n                                    </mat-icon>\r\n                                </a>\r\n\r\n\r\n                            </div>\r\n                        </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n\r\n                <div class=\"add-btn-div\">\r\n                    <button matTooltip=\"Add New Topic\" class=\"add-btn cus-btn\" mat-button\r\n                        (click)=\"addAPreviousTermPaper()\">\r\n                        <mat-icon>add</mat-icon>\r\n                    </button>\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </mat-expansion-panel>\r\n\r\n        </mat-accordion>\r\n\r\n        <div style=\"float: right;\">\r\n            <button *ngIf=\"!id\" mat-raised-button (click)=\"addTopics()\">\r\n                Add Topic\r\n            </button>\r\n\r\n            <button *ngIf=\"id\" mat-raised-button (click)=\"updateTopics()\">\r\n                Update Topic\r\n            </button>\r\n        </div>\r\n\r\n    </form>\r\n\r\n\r\n\r\n</mat-card>");

/***/ }),

/***/ "EiTD":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-subjects/add-subject/add-subject.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-panel11 h4 {\n  font-size: 15px;\n  font-weight: 600;\n  margin-bottom: 0px;\n}\n\n.mat-panel11 mat-expansion-panel {\n  margin-bottom: 11px;\n  background: #eee;\n}\n\n.mat-panel11 .mat-expansion-panel .mat-expansion-panel {\n  background: #fff !important;\n}\n\n.add-btn-div {\n  display: flex;\n  align-items: end;\n  justify-content: end;\n  margin: 0 0 15px 0;\n}\n\n.remove-btn-div {\n  display: flex;\n  align-items: end;\n  justify-content: end;\n}\n\n.add-btn.cus-btn {\n  width: 40px;\n  height: 40px;\n  background: #4c5041;\n}\n\n.cus-btn mat-icon {\n  line-height: 29px !important;\n  font-size: 20px;\n  color: #fff;\n}\n\n.remove-btn {\n  width: 40px;\n  height: 40px;\n  background: #721a0c;\n  margin-bottom: 15px;\n}\n\n.remove-btn mat-icon {\n  line-height: 29px !important;\n  font-size: 20px;\n  color: #fff;\n}\n\ninput[type=file] {\n  display: none;\n}\n\n.custom-file-upload {\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n  background-color: #4c5041;\n  width: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff !important;\n  border-radius: 0.2rem;\n}");

/***/ }),

/***/ "IPp3":
/*!******************************************************************************************!*\
  !*** ./src/app/main/academic-depart/academic-subjects/add-subject/add-subject.module.ts ***!
  \******************************************************************************************/
/*! exports provided: SUBJECTS_ROUTES, AddSubjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBJECTS_ROUTES", function() { return SUBJECTS_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubjectModule", function() { return AddSubjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_subject_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-subject.component */ "1xD4");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { SUBJECTS_ROUTES } from './subjects.routes';



var SUBJECTS_ROUTES = [
    // Guard for Modules
    { path: '', component: _add_subject_component__WEBPACK_IMPORTED_MODULE_4__["AddSubjectComponent"] },
];
var AddSubjectModule = /** @class */ (function () {
    function AddSubjectModule() {
    }
    AddSubjectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_subject_component__WEBPACK_IMPORTED_MODULE_4__["AddSubjectComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(SUBJECTS_ROUTES),
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"]
            ]
        })
    ], AddSubjectModule);
    return AddSubjectModule;
}());



/***/ })

}]);