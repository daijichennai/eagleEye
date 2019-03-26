import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TariffPage } from './tariff.page';
var routes = [
    {
        path: '',
        component: TariffPage
    }
];
var TariffPageModule = /** @class */ (function () {
    function TariffPageModule() {
    }
    TariffPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TariffPage]
        })
    ], TariffPageModule);
    return TariffPageModule;
}());
export { TariffPageModule };
//# sourceMappingURL=tariff.module.js.map