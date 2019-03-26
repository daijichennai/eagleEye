import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewseventsPage } from './newsevents.page';
var routes = [
    {
        path: '',
        component: NewseventsPage
    }
];
var NewseventsPageModule = /** @class */ (function () {
    function NewseventsPageModule() {
    }
    NewseventsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [NewseventsPage]
        })
    ], NewseventsPageModule);
    return NewseventsPageModule;
}());
export { NewseventsPageModule };
//# sourceMappingURL=newsevents.module.js.map