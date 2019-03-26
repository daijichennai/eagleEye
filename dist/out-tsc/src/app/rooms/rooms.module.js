import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RoomsPage } from './rooms.page';
var routes = [
    {
        path: '',
        component: RoomsPage
    }
];
var RoomsPageModule = /** @class */ (function () {
    function RoomsPageModule() {
    }
    RoomsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RoomsPage]
        })
    ], RoomsPageModule);
    return RoomsPageModule;
}());
export { RoomsPageModule };
//# sourceMappingURL=rooms.module.js.map