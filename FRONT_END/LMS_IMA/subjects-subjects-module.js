(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subjects-subjects-module"],{

/***/ "Gqpi":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/subjects/subjects.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"maincontent\">\r\n<div class=\"container-fluid mt-20\">\r\n\r\n  <!-- <mat-card>\r\n  </mat-card> -->\r\n  \r\n\r\n  <div class=\"mat-new\">\r\n    <h4 class=\"card-heading\"> Study Material <span class=\"sub-menu1\">> Service Subjects</span> </h4>\r\n  </div>\r\n\r\n  <!-- <div class=\"d-flex btn-set\">\r\n      <div class=\"search mb-2\">\r\n        <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n      </div>\r\n    </div> -->\r\n\r\n\r\n\r\n  <div >\r\n    <!-- {{type}} -->\r\n    <mat-tab-group class=\"all-subjects\" mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\" animationDuration=\"0ms\"\r\n      (focusChange)=\"mainTabChanged($event)\">\r\n\r\n\r\n      <mat-tab label=\"BMT-1\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"d-flex btn-set\">\r\n            <div class=\"search mb-2\">\r\n              <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n            </div>\r\n          </div>\r\n          <div class=\"example-container \">\r\n            <div class=\"example-table-container\">\r\n              <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                  <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                  <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                    {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"description\">\r\n                  <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Document Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                  <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                  <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                    <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Syllabus BMT-1')\">\r\n                      <mat-icon>description</mat-icon>\r\n                    </a>\r\n                  </td>\r\n                </ng-container>\r\n\r\n\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <!-- Row shown when there is no matching data. -->\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                  <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <mat-tab label=\"BMT-2\">\r\n        <mat-tab-group class=\"bmt-2\" mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\" animationDuration=\"0ms\"\r\n        [(selectedIndex)]=\"selectedIndexForBMT2\" (focusChange)=\"bmt2TabChanged($event)\">\r\n      \r\n          <mat-tab label=\"Map Reading\">\r\n            <div class=\"container-fluid\">\r\n              <div class=\"d-flex btn-set\">\r\n                <div class=\"search mb-2\">\r\n                  <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"example-container \">\r\n                <div class=\"example-table-container\">\r\n                  <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"number\">\r\n                      <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                      <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Date Column -->\r\n                    <ng-container matColumnDef=\"date\">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"name\">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Description Column -->\r\n                    <ng-container matColumnDef=\"description\">\r\n                      <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                    </ng-container>\r\n\r\n\r\n                    <!-- Document Column -->\r\n                    <ng-container matColumnDef=\"document\">\r\n                      <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                      <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        <a class=\"act-btn\" href=\"javascript:void(0)\"\r\n                          (click)=\"openDoc(element,'Syllabus Map Reading')\">\r\n                          <mat-icon>description</mat-icon>\r\n                        </a>\r\n                      </td>\r\n                    </ng-container>\r\n\r\n\r\n\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    <!-- Row shown when there is no matching data. -->\r\n                    <tr class=\"mat-row\" *matNoDataRow>\r\n                      <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </mat-tab>\r\n\r\n          <mat-tab label=\"Radio Telephony\">\r\n            <div class=\"container-fluid\">\r\n\r\n\r\n              <div class=\"d-flex btn-set\">\r\n                <div class=\"search mb-2\">\r\n                  <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"example-container \">\r\n                <div class=\"example-table-container\">\r\n                  <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"number\">\r\n                      <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                      <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Date Column -->\r\n                    <ng-container matColumnDef=\"date\">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"name\">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Description Column -->\r\n                    <ng-container matColumnDef=\"description\">\r\n                      <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                    </ng-container>\r\n\r\n\r\n                    <!-- Document Column -->\r\n                    <ng-container matColumnDef=\"document\">\r\n                      <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                      <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        <a class=\"act-btn\" href=\"javascript:void(0)\"\r\n                          (click)=\"openDoc(element,'Syllabus Radio Telephony')\">\r\n                          <mat-icon>description</mat-icon>\r\n                        </a>\r\n                      </td>\r\n                    </ng-container>\r\n\r\n\r\n\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    <!-- Row shown when there is no matching data. -->\r\n                    <tr class=\"mat-row\" *matNoDataRow>\r\n                      <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </mat-tab>\r\n\r\n          <mat-tab label=\"Field Engineering\">\r\n            <div class=\"container-fluid\">\r\n\r\n\r\n              <div class=\"d-flex btn-set\">\r\n                <div class=\"search mb-2\">\r\n                  <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"example-container \">\r\n                <div class=\"example-table-container\">\r\n                  <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"number\">\r\n                      <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                      <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Date Column -->\r\n                    <ng-container matColumnDef=\"date\">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"name\">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Description Column -->\r\n                    <ng-container matColumnDef=\"description\">\r\n                      <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                    </ng-container>\r\n\r\n\r\n                    <!-- Document Column -->\r\n                    <ng-container matColumnDef=\"document\">\r\n                      <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                      <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        <a class=\"act-btn\" href=\"javascript:void(0)\"\r\n                          (click)=\"openDoc(element,'Syllabus Field Engineering')\">\r\n                          <mat-icon>description</mat-icon>\r\n                        </a>\r\n                      </td>\r\n                    </ng-container>\r\n\r\n\r\n\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    <!-- Row shown when there is no matching data. -->\r\n                    <tr class=\"mat-row\" *matNoDataRow>\r\n                      <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </mat-tab>\r\n\r\n          <mat-tab label=\"O&A and I&S\">\r\n            <div class=\"container-fluid\">\r\n\r\n\r\n              <div class=\"d-flex btn-set\">\r\n                <div class=\"search mb-2\">\r\n                  <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"example-container \">\r\n                <div class=\"example-table-container\">\r\n                  <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"number\">\r\n                      <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                      <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Date Column -->\r\n                    <ng-container matColumnDef=\"date\">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"name\">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Description Column -->\r\n                    <ng-container matColumnDef=\"description\">\r\n                      <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                    </ng-container>\r\n\r\n\r\n                    <!-- Document Column -->\r\n                    <ng-container matColumnDef=\"document\">\r\n                      <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                      <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        <a class=\"act-btn\" href=\"javascript:void(0)\"\r\n                          (click)=\"openDoc(element,'Syllabus OnA and InS')\">\r\n                          <mat-icon>description</mat-icon>\r\n                        </a>\r\n                      </td>\r\n                    </ng-container>\r\n\r\n\r\n\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    <!-- Row shown when there is no matching data. -->\r\n                    <tr class=\"mat-row\" *matNoDataRow>\r\n                      <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </mat-tab>\r\n\r\n          <mat-tab label=\"Financial Management\">\r\n            <div class=\"container-fluid\">\r\n\r\n\r\n              <div class=\"d-flex btn-set\">\r\n                <div class=\"search mb-2\">\r\n                  <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"example-container \">\r\n                <div class=\"example-table-container\">\r\n                  <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"number\">\r\n                      <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                      <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Date Column -->\r\n                    <ng-container matColumnDef=\"date\">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"name\">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Description Column -->\r\n                    <ng-container matColumnDef=\"description\">\r\n                      <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                    </ng-container>\r\n\r\n\r\n                    <!-- Document Column -->\r\n                    <ng-container matColumnDef=\"document\">\r\n                      <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                      <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        <a class=\"act-btn\" href=\"javascript:void(0)\"\r\n                          (click)=\"openDoc(element,'Syllabus Financial Management')\">\r\n                          <mat-icon>description</mat-icon>\r\n                        </a>\r\n                      </td>\r\n                    </ng-container>\r\n\r\n\r\n\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    <!-- Row shown when there is no matching data. -->\r\n                    <tr class=\"mat-row\" *matNoDataRow>\r\n                      <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </mat-tab>\r\n\r\n          <mat-tab label=\"Leadership Trg\">\r\n            <div class=\"container-fluid\">\r\n\r\n\r\n              <div class=\"d-flex btn-set\">\r\n                <div class=\"search mb-2\">\r\n                  <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"example-container \">\r\n                <div class=\"example-table-container\">\r\n                  <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"number\">\r\n                      <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                      <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                        {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Date Column -->\r\n                    <ng-container matColumnDef=\"date\">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"name\">\r\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Description Column -->\r\n                    <ng-container matColumnDef=\"description\">\r\n                      <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                    </ng-container>\r\n\r\n\r\n                    <!-- Document Column -->\r\n                    <ng-container matColumnDef=\"document\">\r\n                      <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                      <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                        <a class=\"act-btn\" href=\"javascript:void(0)\"\r\n                          (click)=\"openDoc(element,'Syllabus Leadership Trg')\">\r\n                          <mat-icon>description</mat-icon>\r\n                        </a>\r\n                      </td>\r\n                    </ng-container>\r\n\r\n\r\n\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    <!-- Row shown when there is no matching data. -->\r\n                    <tr class=\"mat-row\" *matNoDataRow>\r\n                      <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </mat-tab>\r\n\r\n        </mat-tab-group>\r\n      </mat-tab>\r\n\r\n      <mat-tab label=\"Soldierly\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"d-flex btn-set\">\r\n            <div class=\"search mb-2\">\r\n              <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n            </div>\r\n          </div>\r\n          <div class=\"example-container \">\r\n            <div class=\"example-table-container\">\r\n              <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                  <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                  <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                    {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"description\">\r\n                  <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Document Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                  <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                  <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                    <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Syllabus BMT-1')\">\r\n                      <mat-icon>description</mat-icon>\r\n                    </a>\r\n                  </td>\r\n                </ng-container>\r\n\r\n\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <!-- Row shown when there is no matching data. -->\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                  <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab label=\"Scholarly\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"d-flex btn-set\">\r\n            <div class=\"search mb-2\">\r\n              <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n            </div>\r\n          </div>\r\n          <div class=\"example-container \">\r\n            <div class=\"example-table-container\">\r\n              <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                  <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                  <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                    {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"description\">\r\n                  <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Document Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                  <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                  <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                    <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Syllabus BMT-1')\">\r\n                      <mat-icon>description</mat-icon>\r\n                    </a>\r\n                  </td>\r\n                </ng-container>\r\n\r\n\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <!-- Row shown when there is no matching data. -->\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                  <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab label=\"Gentlemanly\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"d-flex btn-set\">\r\n            <div class=\"search mb-2\">\r\n              <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n            </div>\r\n          </div>\r\n          <div class=\"example-container \">\r\n            <div class=\"example-table-container\">\r\n              <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                  <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                  <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                    {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"description\">\r\n                  <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Document Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                  <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                  <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                    <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Syllabus BMT-1')\">\r\n                      <mat-icon>description</mat-icon>\r\n                    </a>\r\n                  </td>\r\n                </ng-container>\r\n\r\n\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <!-- Row shown when there is no matching data. -->\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                  <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab label=\"Leaderly\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"d-flex btn-set\">\r\n            <div class=\"search mb-2\">\r\n              <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n            </div>\r\n          </div>\r\n          <div class=\"example-container \">\r\n            <div class=\"example-table-container\">\r\n              <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"number\">\r\n                  <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                  <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                    {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"description\">\r\n                  <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <!-- Document Column -->\r\n                <ng-container matColumnDef=\"document\">\r\n                  <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                  <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                    <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Syllabus BMT-1')\">\r\n                      <mat-icon>description</mat-icon>\r\n                    </a>\r\n                  </td>\r\n                </ng-container>\r\n\r\n\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                <!-- Row shown when there is no matching data. -->\r\n                <tr class=\"mat-row\" *matNoDataRow>\r\n                  <td class=\"mat-cell\" style=\"text-align: center;\" colspan=\"10\">No Record Found</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n\r\n    </mat-tab-group>\r\n  </div>\r\n  <mat-paginator #syllabusPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n\r\n</div>\r\n</div>");

/***/ }),

/***/ "MEpO":
/*!************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/subjects/subjects.component.ts ***!
  \************************************************************************/
/*! exports provided: SubjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectsComponent", function() { return SubjectsComponent; });
/* harmony import */ var _raw_loader_subjects_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./subjects.component.html */ "Gqpi");
/* harmony import */ var _subjects_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects.component.scss */ "v/by");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/gc/gc.service */ "yuBT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
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












var SubjectsComponent = /** @class */ (function () {
    function SubjectsComponent(route, router, gcService, spinner, cdref, dialog, sharedService) {
        this.route = route;
        this.router = router;
        this.gcService = gcService;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.type = "";
        this.displayedColumns = ['number', 'date', 'name', 'description', 'document'];
        this.subjectsList = [];
        this.bmtDisplayedColumns = ['number', 'date', 'name', 'description', 'document'];
        this.bmtSyllabusList = [];
        this.cadetDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
    }
    SubjectsComponent.prototype.ngOnInit = function () {
    };
    SubjectsComponent.prototype.ngAfterViewInit = function () {
        this.getSubjectsList('BMT-1');
    };
    SubjectsComponent.prototype.mainTabChanged = function (e) {
        // console.log("MAIN TAB CHANGED: ",e)
        // console.log(e.tab.textLabel);
        if (e.tab.textLabel != "BMT-2") {
            if (e.tab.textLabel == "BMT-1") {
                this.getBMTSubjectsList("BMT-1");
            }
            else {
                this.getSubjectsList(e.tab.textLabel);
            }
        }
        else {
            this.getBMTSubjectsList('Map Reading');
            this.selectedIndexForBMT2 = 0;
        }
    };
    SubjectsComponent.prototype.bmt2TabChanged = function (e) {
        // console.log("BMT 2 TAB CHANGED: ",e)
        console.log(e.tab.textLabel);
        var sType = e.tab.textLabel;
        if (e.tab.textLabel == "O&A and I&S") {
            sType = "OnA and InS";
        }
        else {
            sType = e.tab.textLabel;
        }
        this.getBMTSubjectsList(sType);
    };
    SubjectsComponent.prototype.getSubjectsList = function (BMT1) {
        var _this = this;
        console.log(BMT1);
        this.subjectsList = [];
        this.dataSource = null;
        this.gcService.getSubjectsLists(BMT1, this.cadetDetails.term).subscribe(function (res) {
            console.log("subjects", res);
            if (res.status == "OK") {
                _this.subjectsList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar('Some Error Occurred');
        });
    };
    SubjectsComponent.prototype.openDoc = function (e) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: "Document", url: e.doc
            }
        });
    };
    SubjectsComponent.prototype.getBMTSubjectsList = function (type) {
        var _this = this;
        console.log(type);
        this.subjectsList = [];
        this.dataSource = null;
        this.gcService.getSubjectsLists(type, this.cadetDetails.term).subscribe(function (res) {
            console.log(res);
            if (res.status == "OK") {
                _this.subjectsList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar('Some Error Occurred');
        });
    };
    SubjectsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SubjectsComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.subjectsList.slice();
        if (!sort.active || sort.direction === '') {
            this.subjectsList = datalist;
            return;
        }
        this.subjectsList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                case 'description': return _this.sharedService.compare(a.description.toLowerCase(), b.description.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.subjectsList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SubjectsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_8__["GcService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
    ]; };
    SubjectsComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true },] }]
    };
    SubjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-subjects',
            template: _raw_loader_subjects_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_subjects_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_8__["GcService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], SubjectsComponent);
    return SubjectsComponent;
}());



/***/ }),

/***/ "pKDv":
/*!*********************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/subjects/subjects.module.ts ***!
  \*********************************************************************/
/*! exports provided: SubjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectsModule", function() { return SubjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _subjects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subjects.component */ "MEpO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _subjects_component__WEBPACK_IMPORTED_MODULE_6__["SubjectsComponent"]
    },
];
var SubjectsModule = /** @class */ (function () {
    function SubjectsModule() {
    }
    SubjectsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _subjects_component__WEBPACK_IMPORTED_MODULE_6__["SubjectsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ]
        })
    ], SubjectsModule);
    return SubjectsModule;
}());



/***/ }),

/***/ "v/by":
/*!**************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/subjects/subjects.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".maincontent {\n  min-height: 45vw;\n}\n\n.mat-new {\n  clear: both;\n  padding: 10px 0;\n  display: block;\n}\n\n.mat-new h4 {\n  margin-bottom: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card {\n  margin: 1rem 0;\n}\n\n.example-container {\n  min-height: auto;\n}");

/***/ })

}]);