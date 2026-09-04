(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exam-shedule-exam-shedule-module"],{

/***/ "4qxP":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/exam-shedule/exam-shedule.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"maincontent\">\r\n    \r\n    <div class=\"container-fluid mt-20\">\r\n\r\n\r\n        <div class=\"mat-new\">\r\n            <h4 class=\"card-heading\">Exam Schedule > <span class=\"sub-menu1\">Service Subjects</span>\r\n            </h4>\r\n        </div>\r\n\r\n    \r\n\r\n        <div class=\"example-container \" >\r\n\r\n            <mat-tab-group (focusChange)=\"mainTabChanged($event)\">\r\n                <mat-tab label=\"Exam Schedule\">\r\n\r\n                    <div class=\"example-table-container\">\r\n                        <div class=\"d-flex btn-set\">\r\n                            <div class=\"search mb-2\">\r\n                                <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                            </div>\r\n                        </div>\r\n                        <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n        \r\n                            <!-- Position Column -->\r\n                            <ng-container matColumnDef=\"number\">\r\n                                <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                                <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                                    {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                            </ng-container>\r\n        \r\n                            <!-- Date Column -->\r\n                            <ng-container matColumnDef=\"date\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                            </ng-container>\r\n        \r\n                            <!-- Name Column -->\r\n                            <ng-container matColumnDef=\"name\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                            </ng-container>\r\n        \r\n                            <!-- Description Column -->\r\n                            <ng-container matColumnDef=\"description\">\r\n                                <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                            </ng-container>\r\n        \r\n                            <ng-container matColumnDef=\"document\">\r\n                                <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                                <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                                    <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n                                        <mat-icon>description</mat-icon>\r\n                                    </a>\r\n                                </td>\r\n                            </ng-container>\r\n        \r\n                            <!-- Action Column -->\r\n                            <!-- <ng-container matColumnDef=\"action\">\r\n                            <th mat-header-cell *matHeaderCellDef > Action </th>\r\n                            <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\" (click)=\"viewDatesheet(element)\">\r\n                                    <mat-icon >visibility</mat-icon>\r\n                                </a> </td>\r\n                        </ng-container> -->\r\n        \r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                            <!-- Row shown when there is no matching data. -->\r\n                            <tr class=\"mat-row\" *matNoDataRow>\r\n                                <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n\r\n\r\n                </mat-tab>\r\n\r\n                <mat-tab label=\"BMT-1\">\r\n                    \r\n                    <mat-tab-group [(selectedIndex)]=\"bmt1SelectedIndex\"\r\n                    (focusChange)=\"bmt1TabChanged($event)\" >\r\n                        <!-- <mat-tab label=\"General Instruction\">\r\n                            <div class=\"example-table-container\">\r\n                                <div class=\"d-flex btn-set\">\r\n                                    <div class=\"search mb-2\">\r\n                                        <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                                    </div>\r\n                                </div>\r\n                                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n                \r\n                                    <ng-container matColumnDef=\"number\">\r\n                                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                                        <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                                            {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"date\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"name\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"description\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"document\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                                            <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n                                                <mat-icon>description</mat-icon>\r\n                                            </a>\r\n                                        </td>\r\n                                    </ng-container>\r\n                \r\n                                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n                                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                \r\n                                    <tr class=\"mat-row\" *matNoDataRow>\r\n                                        <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n        \r\n        \r\n                        </mat-tab>\r\n                        <mat-tab label=\"Resp of Eval\">\r\n                            <div class=\"example-table-container\">\r\n                                <div class=\"d-flex btn-set\">\r\n                                    <div class=\"search mb-2\">\r\n                                        <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                                    </div>\r\n                                </div>\r\n                                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n                \r\n                                    <ng-container matColumnDef=\"number\">\r\n                                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                                        <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                                            {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"date\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"name\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"description\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"document\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                                            <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n                                                <mat-icon>description</mat-icon>\r\n                                            </a>\r\n                                        </td>\r\n                                    </ng-container>\r\n                \r\n                                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n                                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                                    <tr class=\"mat-row\" *matNoDataRow>\r\n                                        <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </mat-tab> -->\r\n\r\n                        <mat-tab label=\"Confirmation of Marks\">\r\n                            <div class=\"example-table-container\">\r\n                                <div class=\"d-flex btn-set\">\r\n                                    <div class=\"search mb-2\">\r\n                                        <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                                    </div>\r\n                                </div>\r\n                                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n                \r\n                                    <!-- Position Column -->\r\n                                    <ng-container matColumnDef=\"number\">\r\n                                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                                        <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                                            {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Date Column -->\r\n                                    <ng-container matColumnDef=\"date\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Name Column -->\r\n                                    <ng-container matColumnDef=\"name\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Description Column -->\r\n                                    <ng-container matColumnDef=\"description\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"document\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                                            <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n                                                <mat-icon>description</mat-icon>\r\n                                            </a>\r\n                                        </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Action Column -->\r\n                                    <!-- <ng-container matColumnDef=\"action\">\r\n                                    <th mat-header-cell *matHeaderCellDef > Action </th>\r\n                                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\" (click)=\"viewDatesheet(element)\">\r\n                                            <mat-icon >visibility</mat-icon>\r\n                                        </a> </td>\r\n                                </ng-container> -->\r\n                \r\n                                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n                                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                                    <!-- Row shown when there is no matching data. -->\r\n                                    <tr class=\"mat-row\" *matNoDataRow>\r\n                                        <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n        \r\n        \r\n                        </mat-tab>\r\n                        <mat-tab label=\"Retest\">\r\n                            <div class=\"example-table-container\">\r\n                                <div class=\"d-flex btn-set\">\r\n                                    <div class=\"search mb-2\">\r\n                                        <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                                    </div>\r\n                                </div>\r\n                                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n                \r\n                                    <!-- Position Column -->\r\n                                    <ng-container matColumnDef=\"number\">\r\n                                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                                        <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                                            {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Date Column -->\r\n                                    <ng-container matColumnDef=\"date\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Name Column -->\r\n                                    <ng-container matColumnDef=\"name\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Description Column -->\r\n                                    <ng-container matColumnDef=\"description\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"document\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                                            <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n                                                <mat-icon>description</mat-icon>\r\n                                            </a>\r\n                                        </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Action Column -->\r\n                                    <!-- <ng-container matColumnDef=\"action\">\r\n                                    <th mat-header-cell *matHeaderCellDef > Action </th>\r\n                                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\" (click)=\"viewDatesheet(element)\">\r\n                                            <mat-icon >visibility</mat-icon>\r\n                                        </a> </td>\r\n                                </ng-container> -->\r\n                \r\n                                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n                                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                                    <!-- Row shown when there is no matching data. -->\r\n                                    <tr class=\"mat-row\" *matNoDataRow>\r\n                                        <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n        \r\n        \r\n                        </mat-tab>\r\n                    </mat-tab-group>\r\n        \r\n                </mat-tab>\r\n                <mat-tab label=\"BMT-2\">\r\n                \r\n                    <mat-tab-group [(selectedIndex)]=\"bmt2SelectedIndex\"\r\n                    (focusChange)=\"bmt2TabChanged($event)\" >\r\n                        <!-- <mat-tab label=\"General Instruction\">\r\n                            <div class=\"example-table-container\">\r\n                                <div class=\"d-flex btn-set\">\r\n                                    <div class=\"search mb-2\">\r\n                                        <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                                    </div>\r\n                                </div>\r\n                                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n                \r\n                                    <ng-container matColumnDef=\"number\">\r\n                                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                                        <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                                            {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"date\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"name\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"description\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"document\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                                            <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n                                                <mat-icon>description</mat-icon>\r\n                                            </a>\r\n                                        </td>\r\n                                    </ng-container>\r\n                \r\n                \r\n                                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n                                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                                    <tr class=\"mat-row\" *matNoDataRow>\r\n                                        <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n        \r\n        \r\n                        </mat-tab> -->\r\n\r\n                        <!-- <mat-tab label=\"Resp of Eval\">\r\n                            <div class=\"example-table-container\">\r\n                                <div class=\"d-flex btn-set\">\r\n                                    <div class=\"search mb-2\">\r\n                                        <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                                    </div>\r\n                                </div>\r\n                                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n                \r\n                                    <ng-container matColumnDef=\"number\">\r\n                                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                                        <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                                            {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"date\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"name\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"description\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"document\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                                            <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n                                                <mat-icon>description</mat-icon>\r\n                                            </a>\r\n                                        </td>\r\n                                    </ng-container>\r\n                \r\n                \r\n                                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n                                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                                    <tr class=\"mat-row\" *matNoDataRow>\r\n                                        <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n        \r\n        \r\n                        </mat-tab> -->\r\n\r\n\r\n                        \r\n                        <mat-tab label=\"Confirmation of Marks\">\r\n                            <div class=\"example-table-container\">\r\n                                <div class=\"d-flex btn-set\">\r\n                                    <div class=\"search mb-2\">\r\n                                        <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                                    </div>\r\n                                </div>\r\n                                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n                \r\n                                    <!-- Position Column -->\r\n                                    <ng-container matColumnDef=\"number\">\r\n                                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                                        <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                                            {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Date Column -->\r\n                                    <ng-container matColumnDef=\"date\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Name Column -->\r\n                                    <ng-container matColumnDef=\"name\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Description Column -->\r\n                                    <ng-container matColumnDef=\"description\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"document\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                                            <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n                                                <mat-icon>description</mat-icon>\r\n                                            </a>\r\n                                        </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Action Column -->\r\n                                    <!-- <ng-container matColumnDef=\"action\">\r\n                                    <th mat-header-cell *matHeaderCellDef > Action </th>\r\n                                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\" (click)=\"viewDatesheet(element)\">\r\n                                            <mat-icon >visibility</mat-icon>\r\n                                        </a> </td>\r\n                                </ng-container> -->\r\n                \r\n                                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n                                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                                    <!-- Row shown when there is no matching data. -->\r\n                                    <tr class=\"mat-row\" *matNoDataRow>\r\n                                        <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n        \r\n        \r\n                        </mat-tab>\r\n                        <mat-tab label=\"Retest\">\r\n                            <div class=\"example-table-container\">\r\n                                <div class=\"d-flex btn-set\">\r\n                                    <div class=\"search mb-2\">\r\n                                        <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                                    </div>\r\n                                </div>\r\n                                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n                \r\n                                    <!-- Position Column -->\r\n                                    <ng-container matColumnDef=\"number\">\r\n                                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                                        <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                                            {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Date Column -->\r\n                                    <ng-container matColumnDef=\"date\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Name Column -->\r\n                                    <ng-container matColumnDef=\"name\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Description Column -->\r\n                                    <ng-container matColumnDef=\"description\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                                    </ng-container>\r\n                \r\n                                    <ng-container matColumnDef=\"document\">\r\n                                        <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                                            <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n                                                <mat-icon>description</mat-icon>\r\n                                            </a>\r\n                                        </td>\r\n                                    </ng-container>\r\n                \r\n                                    <!-- Action Column -->\r\n                                    <!-- <ng-container matColumnDef=\"action\">\r\n                                    <th mat-header-cell *matHeaderCellDef > Action </th>\r\n                                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\"> <a  href=\"javascript:void(0)\" (click)=\"viewDatesheet(element)\">\r\n                                            <mat-icon >visibility</mat-icon>\r\n                                        </a> </td>\r\n                                </ng-container> -->\r\n                \r\n                                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n                                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                                    <!-- Row shown when there is no matching data. -->\r\n                                    <tr class=\"mat-row\" *matNoDataRow>\r\n                                        <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n        \r\n        \r\n                        </mat-tab>\r\n                    </mat-tab-group>    \r\n                </mat-tab>\r\n            </mat-tab-group>\r\n\r\n            \r\n            <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"example-container \" *ngIf=\"type == 'Academic Subjects'\">\r\n            <div class=\"example-table-container\">\r\n                <div class=\"comming_soon\">\r\n                    <img src=\"assets/img/page_under_construction.png\" class=\"under-construction-img\" alt=\"\">\r\n                </div>\r\n\r\n                <!-- <table mat-table [dataSource]=\"dataSourceAcademicSubjects\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                    <ng-container matColumnDef=\"number\">\r\n                        <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                        <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                            {{i +1 + (myPaginator.pageIndex * myPaginator.pageSize)}} </td>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"date\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"name\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"description\">\r\n                        <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"document\">\r\n                        <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                        <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                            <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element)\">\r\n                                <mat-icon>description</mat-icon>\r\n                            </a>\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns sticky:true\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    <tr class=\"mat-row\" *matNoDataRow>\r\n                        <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                    </tr>\r\n                </table> -->\r\n            </div>\r\n            <mat-paginator #myPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n        </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n\r\n        \r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "DS4Q":
/*!********************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/exam-shedule/exam-shedule.component.ts ***!
  \********************************************************************************/
/*! exports provided: ExamSheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamSheduleComponent", function() { return ExamSheduleComponent; });
/* harmony import */ var _raw_loader_exam_shedule_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./exam-shedule.component.html */ "4qxP");
/* harmony import */ var _exam_shedule_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-shedule.component.scss */ "uFez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/Shared/dialog/dialog.component */ "7EKD");
/* harmony import */ var app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/trg-team/trg-team.service */ "hon0");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/trg-battalion/trg-battalion.service */ "I3U/");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ExamSheduleComponent = /** @class */ (function () {
    function ExamSheduleComponent(spinner, dialog, _trgBattalion, router, route, service, cdref, sharedService) {
        var _this = this;
        this.spinner = spinner;
        this.dialog = dialog;
        this._trgBattalion = _trgBattalion;
        this.router = router;
        this.route = route;
        this.service = service;
        this.cdref = cdref;
        this.sharedService = sharedService;
        this.cadetDetails = {};
        this.displayedColumns = ['number', 'date', 'name', 'description', 'document'];
        this.examScheduleList = [];
        this.cadetDetails = JSON.parse(localStorage.getItem("loginResponse")).object;
        this.route.params.subscribe(function (params) {
            _this.type = params.type;
            _this.ngAfterViewInit();
        });
    }
    ExamSheduleComponent.prototype.ngOnInit = function () {
    };
    ExamSheduleComponent.prototype.ngAfterViewInit = function () {
        this.getDateSheets();
    };
    ExamSheduleComponent.prototype.getDateSheets = function () {
        var _this = this;
        this.examScheduleList = [];
        this.dataSource = null;
        // this.spinner.show();
        this.service.getAllDatesheets(this.cadetDetails.term).subscribe(function (res) {
            if (res.status == '1') {
                _this.examScheduleList = res.List;
                _this.spinner.hide();
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](res.List);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                // this.spinner.hide()
            }
        }, function (err) {
            _this.spinner.hide();
            _this._trgBattalion.openSnackbar('Error Occured.');
        });
    };
    ExamSheduleComponent.prototype.mainTabChanged = function (event) {
        var label = event.tab.textLabel;
        if (label == 'Exam Schedule') {
            this.getDateSheets();
        }
        else if (label == 'BMT-1') {
            this.bmt1SelectedIndex = 0;
            this.getBmtExamSchedule('BMT-1', 'General Instruction');
        }
        else if (label == 'BMT-2') {
            this.bmt2SelectedIndex = 0;
            this.getBmtExamSchedule('BMT-2', 'General Instruction');
        }
    };
    ExamSheduleComponent.prototype.bmt1TabChanged = function (event) {
        console.log('BMT-1: ', event);
        var subType = event.tab.textLabel;
        this.getBmtExamSchedule('BMT-1', subType);
    };
    ExamSheduleComponent.prototype.bmt2TabChanged = function (event) {
        console.log('BMT-2: ', event);
        var subType = event.tab.textLabel;
        this.getBmtExamSchedule('BMT-2', subType);
    };
    ExamSheduleComponent.prototype.getBmtExamSchedule = function (type, subType) {
        var _this = this;
        this.examScheduleList = [];
        this.dataSource = null;
        this.service.getExamScheduleList(this.cadetDetails.term, type, subType).subscribe(function (res) {
            // console.log(res);
            if (res.status == "1") {
                _this.examScheduleList = res.List;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](res.List);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.spinner.hide();
                _this.cdref.detectChanges();
            }
            else {
                _this.spinner.hide();
                _this.sharedService.openSnackbar(res.msg);
            }
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar("Some Error Occured.");
        });
    };
    ExamSheduleComponent.prototype.openDoc = function (d) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', url: d.document
            }
        });
    };
    ExamSheduleComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ExamSheduleComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.examScheduleList.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = datalist;
            return;
        }
        this.examScheduleList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'date': return _this._trgBattalion.compare(a.createdAt, b.createdAt, isAsc);
                case 'name': return _this._trgBattalion.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'description': return _this._trgBattalion.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.examScheduleList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ExamSheduleComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__["TrgBattalionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"] }
    ]; };
    ExamSheduleComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], { static: true },] }]
    };
    ExamSheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-exam-shedule',
            template: _raw_loader_exam_shedule_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_exam_shedule_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], app_service_trg_battalion_trg_battalion_service__WEBPACK_IMPORTED_MODULE_11__["TrgBattalionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], app_service_trg_team_trg_team_service__WEBPACK_IMPORTED_MODULE_6__["TrgTeamService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], app_service_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"]])
    ], ExamSheduleComponent);
    return ExamSheduleComponent;
}());



/***/ }),

/***/ "Fuew":
/*!*****************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/exam-shedule/exam-shedule.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ExamsheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsheduleModule", function() { return ExamsheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _exam_shedule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exam-shedule.component */ "DS4Q");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
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
        component: _exam_shedule_component__WEBPACK_IMPORTED_MODULE_4__["ExamSheduleComponent"]
    },
];
var ExamsheduleModule = /** @class */ (function () {
    function ExamsheduleModule() {
    }
    ExamsheduleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _exam_shedule_component__WEBPACK_IMPORTED_MODULE_4__["ExamSheduleComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ]
        })
    ], ExamsheduleModule);
    return ExamsheduleModule;
}());



/***/ }),

/***/ "uFez":
/*!**********************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/exam-shedule/exam-shedule.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".maincontent {\n  min-height: 45vw;\n}\n\n.mat-new {\n  clear: both;\n  padding: 10px 0;\n  display: block;\n}\n\n.mat-new h4 {\n  margin-bottom: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card {\n  margin: 1rem 0;\n}\n\n.example-container {\n  min-height: auto;\n}");

/***/ })

}]);