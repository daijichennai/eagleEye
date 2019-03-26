import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BrochurePage } from './brochure.page';
var routes = [
    {
        path: '',
        component: BrochurePage
    }
];
var BrochurePageModule = /** @class */ (function () {
    function BrochurePageModule() {
    }
    BrochurePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [BrochurePage]
        })
    ], BrochurePageModule);
    return BrochurePageModule;
}());
export { BrochurePageModule };
//# sourceMappingURL=brochure.module.js.map