(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["syllabus-syllabus-module"],{

/***/ "3i7l":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gentleman-cadet/content/syllabus/syllabus.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"maincontent\">\r\n  <div class=\"container-fluid mt-20\">\r\n\r\n    <div class=\"mat-new\">\r\n      <h4 class=\"card-heading\"> Syllabus <span class=\"sub-menu1\"> > Service Subjects </span></h4>\r\n    </div>\r\n\r\n    \r\n    <div >\r\n      <!-- {{type}} -->\r\n\r\n\r\n      <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\" animationDuration=\"0ms\"\r\n        (focusChange)=\"mainTabChanged($event)\">\r\n        <mat-tab label=\"BMT-1\">\r\n           \r\n           <div class=\"container-fluid\">\r\n\r\n\r\n            <div class=\"d-flex btn-set\">\r\n              <div class=\"search mb-2\">\r\n                <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"example-container \">\r\n              <div class=\"example-table-container\">\r\n                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                  <!-- Position Column -->\r\n                  <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                      {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Date Column -->\r\n                  <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Description Column -->\r\n                  <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                  </ng-container>\r\n\r\n\r\n                  <!-- Document Column -->\r\n                  <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                      <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Syllabus BMT-1')\">\r\n                        <mat-icon>description</mat-icon>\r\n                      </a>\r\n                    </td>\r\n                  </ng-container>\r\n\r\n\r\n\r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  <!-- Row shown when there is no matching data. -->\r\n                  <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;vertical-align: middle !important;\" colspan=\"10\">No Record Found</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </mat-tab>\r\n        <mat-tab label=\"BMT-2\">\r\n          <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\" animationDuration=\"0ms\"\r\n          [(selectedIndex)]=\"selectedIndexForBMT2\"\r\n          \r\n          (focusChange)=\"bmt2TabChanged($event)\">\r\n            <mat-tab label=\"Map Reading\">\r\n               <div class=\"container-fluid\">\r\n\r\n\r\n            <div class=\"d-flex btn-set\">\r\n              <div class=\"search mb-2\">\r\n                <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"example-container \">\r\n              <div class=\"example-table-container\">\r\n                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                  <!-- Position Column -->\r\n                  <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                      {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Date Column -->\r\n                  <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                  </ng-container>\r\n\r\n                  \r\n\r\n                  <!-- Document Column -->\r\n                  <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                      <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Syllabus Map Reading')\">\r\n                        <mat-icon>description</mat-icon>\r\n                      </a>\r\n                    </td>\r\n                  </ng-container>\r\n\r\n\r\n\r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  <!-- Row shown when there is no matching data. -->\r\n                  <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;vertical-align: middle  !important;\" colspan=\"10\">No Record Found</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n            </mat-tab>\r\n            <mat-tab label=\"Radio Telephony\">\r\n               <div class=\"container-fluid\">\r\n\r\n\r\n            <div class=\"d-flex btn-set\">\r\n              <div class=\"search mb-2\">\r\n                <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"example-container \">\r\n              <div class=\"example-table-container\">\r\n                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                  <!-- Position Column -->\r\n                  <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                      {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Date Column -->\r\n                  <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Description Column -->\r\n                  <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                  </ng-container>\r\n\r\n\r\n                  <!-- Document Column -->\r\n                  <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                      <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Syllabus Radio Telephony')\">\r\n                        <mat-icon>description</mat-icon>\r\n                      </a>\r\n                    </td>\r\n                  </ng-container>\r\n\r\n\r\n\r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  <!-- Row shown when there is no matching data. -->\r\n                  <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;vertical-align: middle !important;\" colspan=\"10\">No Record Found</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Field Engineering\">\r\n               <div class=\"container-fluid\">\r\n\r\n\r\n            <div class=\"d-flex btn-set\">\r\n              <div class=\"search mb-2\">\r\n                <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"example-container \">\r\n              <div class=\"example-table-container\">\r\n                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                  <!-- Position Column -->\r\n                  <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                      {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Date Column -->\r\n                  <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Description Column -->\r\n                  <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                  </ng-container>\r\n\r\n\r\n                  <!-- Document Column -->\r\n                  <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                      <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Syllabus Field Engineering')\">\r\n                        <mat-icon>description</mat-icon>\r\n                      </a>\r\n                    </td>\r\n                  </ng-container>\r\n\r\n\r\n\r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  <!-- Row shown when there is no matching data. -->\r\n                  <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;vertical-align: middle !important;\" colspan=\"10\">No Record Found</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"O&A and I&S\">\r\n               <div class=\"container-fluid\">\r\n\r\n\r\n            <div class=\"d-flex btn-set\">\r\n              <div class=\"search mb-2\">\r\n                <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"example-container \">\r\n              <div class=\"example-table-container\">\r\n                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                  <!-- Position Column -->\r\n                  <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                      {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Date Column -->\r\n                  <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Description Column -->\r\n                  <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                  </ng-container>\r\n\r\n\r\n                  <!-- Document Column -->\r\n                  <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                      <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Syllabus OnA and InS')\">\r\n                        <mat-icon>description</mat-icon>\r\n                      </a>\r\n                    </td>\r\n                  </ng-container>\r\n\r\n\r\n\r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  <!-- Row shown when there is no matching data. -->\r\n                  <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;vertical-align: middle !important;\" colspan=\"10\">No Record Found</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Financial Management\">\r\n               <div class=\"container-fluid\">\r\n\r\n\r\n            <div class=\"d-flex btn-set\">\r\n              <div class=\"search mb-2\">\r\n                <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"example-container \">\r\n              <div class=\"example-table-container\">\r\n                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                  <!-- Position Column -->\r\n                  <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                      {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Date Column -->\r\n                  <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Description Column -->\r\n                  <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                  </ng-container>\r\n\r\n\r\n                  <!-- Document Column -->\r\n                  <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                      <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Syllabus Financial Management')\">\r\n                        <mat-icon>description</mat-icon>\r\n                      </a>\r\n                    </td>\r\n                  </ng-container>\r\n\r\n\r\n\r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  <!-- Row shown when there is no matching data. -->\r\n                  <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;vertical-align: middle !important;\" colspan=\"10\">No Record Found</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Leadership Trg\">\r\n               <div class=\"container-fluid\">\r\n\r\n\r\n            <div class=\"d-flex btn-set\">\r\n              <div class=\"search mb-2\">\r\n                <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"example-container \">\r\n              <div class=\"example-table-container\">\r\n                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                  <!-- Position Column -->\r\n                  <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                      {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Date Column -->\r\n                  <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Description Column -->\r\n                  <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                  </ng-container>\r\n\r\n\r\n                  <!-- Document Column -->\r\n                  <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                      <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Syllabus Leadership Trg')\">\r\n                        <mat-icon>description</mat-icon>\r\n                      </a>\r\n                    </td>\r\n                  </ng-container>\r\n\r\n\r\n\r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  <!-- Row shown when there is no matching data. -->\r\n                  <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;vertical-align: middle !important;\" colspan=\"10\">No Record Found</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n            </mat-tab>\r\n\r\n          </mat-tab-group>\r\n        </mat-tab>\r\n\r\n        <mat-tab label=\"Soldierly\">\r\n\r\n\r\n          <div class=\"container-fluid\">\r\n\r\n\r\n            <div class=\"d-flex btn-set\">\r\n              <div class=\"search mb-2\">\r\n                <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"example-container \">\r\n              <div class=\"example-table-container\">\r\n                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                  <!-- Position Column -->\r\n                  <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                      {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Date Column -->\r\n                  <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Description Column -->\r\n                  <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                  </ng-container>\r\n\r\n\r\n                  <!-- Document Column -->\r\n                  <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                      <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Soldierly')\">\r\n                        <mat-icon>description</mat-icon>\r\n                      </a>\r\n                    </td>\r\n                  </ng-container>\r\n\r\n\r\n\r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  <!-- Row shown when there is no matching data. -->\r\n                  <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;vertical-align: middle !important;\" colspan=\"10\">No Record Found</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </mat-tab>\r\n\r\n\r\n        <mat-tab label=\"Scholarly\"> \r\n        \r\n          <div class=\"container-fluid\">\r\n\r\n\r\n            <div class=\"d-flex btn-set\">\r\n              <div class=\"search mb-2\">\r\n                <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"example-container \">\r\n              <div class=\"example-table-container\">\r\n                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                  <!-- Position Column -->\r\n                  <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                      {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Date Column -->\r\n                  <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Description Column -->\r\n                  <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                  </ng-container>\r\n\r\n\r\n                  <!-- Document Column -->\r\n                  <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                      <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Scholarly')\">\r\n                        <mat-icon>description</mat-icon>\r\n                      </a>\r\n                    </td>\r\n                  </ng-container>\r\n\r\n\r\n\r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  <!-- Row shown when there is no matching data. -->\r\n                  <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;vertical-align: middle !important;\" colspan=\"10\">No Record Found</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </mat-tab>\r\n        <mat-tab label=\"Gentlemanly\"> \r\n        \r\n          <div class=\"container-fluid\">\r\n\r\n\r\n            <div class=\"d-flex btn-set\">\r\n              <div class=\"search mb-2\">\r\n                <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"example-container \">\r\n              <div class=\"example-table-container\">\r\n                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                  <!-- Position Column -->\r\n                  <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                      {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Date Column -->\r\n                  <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Description Column -->\r\n                  <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                  </ng-container>\r\n\r\n\r\n                  <!-- Document Column -->\r\n                  <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                      <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Gentlemanly')\">\r\n                        <mat-icon>description</mat-icon>\r\n                      </a>\r\n                    </td>\r\n                  </ng-container>\r\n\r\n\r\n\r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  <!-- Row shown when there is no matching data. -->\r\n                  <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;vertical-align: middle !important;\" colspan=\"10\">No Record Found</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab label=\"Leaderly\">\r\n        \r\n          \r\n          <div class=\"container-fluid\">\r\n\r\n\r\n            <div class=\"d-flex btn-set\">\r\n              <div class=\"search mb-2\">\r\n                <input class=\"search_input\" (input)=\"applyFilter($event)\" placeholder=\"Search ...\" #input>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"example-container \">\r\n              <div class=\"example-table-container\">\r\n                <table mat-table [dataSource]=\"dataSource\" (matSortChange)=\"sortData($event)\" matSort>\r\n\r\n                  <!-- Position Column -->\r\n                  <ng-container matColumnDef=\"number\">\r\n                    <th mat-header-cell *matHeaderCellDef>S.No.</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                      {{i +1 + (syllabusPaginator.pageIndex * syllabusPaginator.pageSize)}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Date Column -->\r\n                  <ng-container matColumnDef=\"date\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt|date:'d MMMM, y'}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Name Column -->\r\n                  <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                  </ng-container>\r\n\r\n                  <!-- Description Column -->\r\n                  <ng-container matColumnDef=\"description\">\r\n                    <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                  </ng-container>\r\n\r\n\r\n                  <!-- Document Column -->\r\n                  <ng-container matColumnDef=\"document\">\r\n                    <th mat-header-cell *matHeaderCellDef> Document </th>\r\n                    <td class=\"act-btn\" mat-cell *matCellDef=\"let element\">\r\n                      <a class=\"act-btn\" href=\"javascript:void(0)\" (click)=\"openDoc(element,'Gentlemanly')\">\r\n                        <mat-icon>description</mat-icon>\r\n                      </a>\r\n                    </td>\r\n                  </ng-container>\r\n\r\n\r\n\r\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  <!-- Row shown when there is no matching data. -->\r\n                  <tr class=\"mat-row\" *matNoDataRow>\r\n                    <td class=\"mat-cell\" style=\"text-align: center;vertical-align: middle !important;\" colspan=\"10\">No Record Found</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        \r\n        </mat-tab>\r\n      </mat-tab-group>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div *ngIf=\"type=='Academic Subjects'\">\r\n      \r\n      \r\n      <div class=\"comming_soon\">\r\n        <img src=\"assets/img/page_under_construction.png\" class=\"under-construction-img\" alt=\"\">\r\n    </div>\r\n      <!-- <mat-tab-group>\r\n        <mat-tab label=\"First\"> Content 1 </mat-tab>\r\n        <mat-tab label=\"Second\"> Content 2 </mat-tab>\r\n        <mat-tab label=\"Third\"> Content 3 </mat-tab>\r\n      </mat-tab-group> -->\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <mat-paginator #syllabusPaginator [pageSizeOptions]=\"[10,20,50,100]\" showFirstLastButtons></mat-paginator>\r\n\r\n\r\n</div>\r\n\r\n</div>\r\n  ");

/***/ }),

/***/ "BcdT":
/*!************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/syllabus.module.ts ***!
  \************************************************************************/
/*! exports provided: SyllabusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusModule", function() { return SyllabusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var ngx_easypiechart__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-easypiechart */ "d71t");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _syllabus_routing__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./syllabus.routing */ "S9xS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var SyllabusModule = /** @class */ (function () {
    function SyllabusModule() {
    }
    SyllabusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"],
                // WidgetComponentModule,
                ngx_easypiechart__WEBPACK_IMPORTED_MODULE_23__["NgxEasypiechartModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_21__["ChartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__["NgxDatatableModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forChild(_syllabus_routing__WEBPACK_IMPORTED_MODULE_25__["SyllabusRoutes"])
                // AgmCoreModule.forRoot({apiKey: 'AIzaSyD4y2luRxfM8Q8yKHSLdOOdNpkiilVhD9k'})
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], SyllabusModule);
    return SyllabusModule;
}());



/***/ }),

/***/ "S9xS":
/*!*************************************************************************!*\
  !*** ./src/app/main/trg-team/gso-two-pgme/syllabus/syllabus.routing.ts ***!
  \*************************************************************************/
/*! exports provided: SyllabusRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusRoutes", function() { return SyllabusRoutes; });
var SyllabusRoutes = [
    { path: 'terms', loadChildren: function () { return Promise.all(/*! import() | terms-terms-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("terms-terms-module")]).then(__webpack_require__.bind(null, /*! ./terms/terms.module */ "z/6g")).then(function (m) { return m.TermsModule; }); } },
    { path: 'soldierly', loadChildren: function () { return Promise.all(/*! import() | soldierly-soldierly-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("soldierly-soldierly-module")]).then(__webpack_require__.bind(null, /*! ./soldierly/soldierly.module */ "BXGI")).then(function (m) { return m.SoldierlyModule; }); } },
    { path: 'scholarly', loadChildren: function () { return Promise.all(/*! import() | scholarly-scholarly-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("scholarly-scholarly-module")]).then(__webpack_require__.bind(null, /*! ./scholarly/scholarly.module */ "2oBj")).then(function (m) { return m.ScholarlyModule; }); } },
    { path: 'leaderly', loadChildren: function () { return Promise.all(/*! import() | leaderly-leaderly-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("leaderly-leaderly-module")]).then(__webpack_require__.bind(null, /*! ./leaderly/leaderly.module */ "1c3E")).then(function (m) { return m.LeaderlyModule; }); } },
    { path: 'gentlemanly', loadChildren: function () { return Promise.all(/*! import() | gentlemanly-gentlemanly-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("gentlemanly-gentlemanly-module")]).then(__webpack_require__.bind(null, /*! ./gentlemanly/gentlemanly.module */ "UCPd")).then(function (m) { return m.GentlemanlyModule; }); } },
    { path: 'BMT-1', loadChildren: function () { return Promise.all(/*! import() | syllabus-bmt1-study-bmt1-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("syllabus-bmt1-study-bmt1-module")]).then(__webpack_require__.bind(null, /*! ./syllabus-bmt1/study-bmt1.module */ "5swu")).then(function (m) { return m.SyllabusBMT1Module; }); } },
    { path: 'BMT-2/:type', loadChildren: function () { return Promise.all(/*! import() | bmt2-Bmt2-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("bmt2-Bmt2-module")]).then(__webpack_require__.bind(null, /*! ./bmt2/Bmt2.module */ "MPls")).then(function (m) { return m.BMT2Module; }); } },
];


/***/ }),

/***/ "eh8Y":
/*!************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/syllabus/syllabus.component.ts ***!
  \************************************************************************/
/*! exports provided: SyllabusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusComponent", function() { return SyllabusComponent; });
/* harmony import */ var _raw_loader_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./syllabus.component.html */ "3i7l");
/* harmony import */ var _syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syllabus.component.scss */ "yNqA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/gc/gc.service */ "yuBT");
/* harmony import */ var app_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/shared.service */ "qS8V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
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












var SyllabusComponent = /** @class */ (function () {
    function SyllabusComponent(route, router, gcService, spinner, cdref, dialog, sharedService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.gcService = gcService;
        this.spinner = spinner;
        this.cdref = cdref;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.type = "";
        this.displayedColumns = ['number', 'date', 'name', 'document'];
        this.syllabusList = [];
        this.cadetDetails = JSON.parse(localStorage.getItem('loginResponse')).object;
        this.route.params.subscribe(function (params) {
            _this.type = params.type;
        });
    }
    SyllabusComponent.prototype.ngOnInit = function () { };
    SyllabusComponent.prototype.ngAfterViewInit = function () {
        this.getBMTSyllabusList('BMT-1');
    };
    SyllabusComponent.prototype.mainTabChanged = function (e) {
        if (e.tab.textLabel != "BMT-2") {
            if (e.tab.textLabel == "BMT-1") {
                this.getBMTSyllabusList("BMT-1");
            }
            else {
                this.getSyllabusList(e.tab.textLabel);
            }
        }
        else {
            this.getBMTSyllabusList('Map Reading');
            this.selectedIndexForBMT2 = 0;
        }
    };
    SyllabusComponent.prototype.bmt2TabChanged = function (e) {
        this.getBMTSyllabusList(e.tab.textLabel);
    };
    SyllabusComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SyllabusComponent.prototype.getSyllabusList = function (type) {
        var _this = this;
        this.syllabusList = [];
        this.dataSource = null;
        this.gcService.getSyllabusList(type, this.cadetDetails.term, 1).subscribe(function (res) {
            if (res.status == "OK") {
                _this.syllabusList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar('Some Error Occurred');
        });
    };
    SyllabusComponent.prototype.getBMTSyllabusList = function (type) {
        var _this = this;
        var sType;
        if (type == "O&A and I&S") {
            sType = "OnA and InS";
        }
        else {
            sType = type;
        }
        this.syllabusList = [];
        this.dataSource = null;
        this.gcService.getSyllabusList(sType, this.cadetDetails.term, 1).subscribe(function (res) {
            if (res.status == "OK") {
                _this.syllabusList = res.object;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](res.object);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.sharedService.openSnackbar('Some Error Occurred');
        });
    };
    SyllabusComponent.prototype.sortData = function (sort) {
        var _this = this;
        var datalist = this.syllabusList.slice();
        if (!sort.active || sort.direction === '') {
            this.syllabusList = datalist;
            return;
        }
        this.syllabusList = datalist.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'date': return _this.sharedService.compare(a.createdAt, b.createdAt, isAsc);
                case 'name': return _this.sharedService.compare(a.name.toLowerCase(), b.name.toLowerCase(), isAsc);
                default: return 0;
            }
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.syllabusList);
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SyllabusComponent.prototype.openDoc = function (e, title) {
        this.dialog.open(app_Shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], {
            width: '1300px', height: '650px',
            data: {
                type: 'document', title: title, url: e.doc
            }
        });
    };
    SyllabusComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_4__["GcService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
        { type: app_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }
    ]; };
    SyllabusComponent.propDecorators = {
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], { static: true },] }]
    };
    SyllabusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-syllabus',
            template: _raw_loader_syllabus_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_syllabus_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_gc_gc_service__WEBPACK_IMPORTED_MODULE_4__["GcService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            app_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], SyllabusComponent);
    return SyllabusComponent;
}());



/***/ }),

/***/ "ldm4":
/*!*********************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/syllabus/syllabus.module.ts ***!
  \*********************************************************************/
/*! exports provided: SyllabusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyllabusModule", function() { return SyllabusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/material/material.module */ "hctd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _syllabus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syllabus.component */ "eh8Y");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _syllabus_component__WEBPACK_IMPORTED_MODULE_6__["SyllabusComponent"]
    },
];
var SyllabusModule = /** @class */ (function () {
    function SyllabusModule() {
    }
    SyllabusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _syllabus_component__WEBPACK_IMPORTED_MODULE_6__["SyllabusComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ]
        })
    ], SyllabusModule);
    return SyllabusModule;
}());



/***/ }),

/***/ "yNqA":
/*!**************************************************************************!*\
  !*** ./src/app/gentleman-cadet/content/syllabus/syllabus.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".maincontent {\n  min-height: 45vw;\n}\n\n.mat-new {\n  clear: both;\n  padding: 10px 0;\n  display: block;\n}\n\n.mat-new h4 {\n  margin-bottom: 0;\n}\n\n.sub-menu1 {\n  color: #721a0c;\n}\n\n.mat-card {\n  margin: 1rem 0;\n}\n\n.example-container {\n  min-height: auto;\n}");

/***/ })

}]);