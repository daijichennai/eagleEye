import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TestimonialsPage } from './testimonials.page';
var routes = [
    {
        path: '',
        component: TestimonialsPage
    }
];
var TestimonialsPageModule = /** @class */ (function () {
    function TestimonialsPageModule() {
    }
    TestimonialsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TestimonialsPage]
        })
    ], TestimonialsPageModule);
    return TestimonialsPageModule;
}());
export { TestimonialsPageModule };
//# sourceMappingURL=testimonials.module.js.map