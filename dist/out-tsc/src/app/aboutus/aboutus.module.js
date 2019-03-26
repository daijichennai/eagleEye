import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AboutusPage } from './aboutus.page';
var routes = [
    {
        path: '',
        component: AboutusPage
    }
];
var AboutusPageModule = /** @class */ (function () {
    function AboutusPageModule() {
    }
    AboutusPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AboutusPage]
        })
    ], AboutusPageModule);
    return AboutusPageModule;
}());
export { AboutusPageModule };
//# sourceMappingURL=aboutus.module.js.map