import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PhotosPage } from './photos.page';
var routes = [
    {
        path: '',
        component: PhotosPage
    }
];
var PhotosPageModule = /** @class */ (function () {
    function PhotosPageModule() {
    }
    PhotosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PhotosPage]
        })
    ], PhotosPageModule);
    return PhotosPageModule;
}());
export { PhotosPageModule };
//# sourceMappingURL=photos.module.js.map