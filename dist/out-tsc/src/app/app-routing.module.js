import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule'
    },
    { path: 'image-modal', loadChildren: './image-modal/image-modal.module#ImageModalPageModule' },
    { path: 'newsevents', loadChildren: './newsevents/newsevents.module#NewseventsPageModule' },
    { path: 'photos', loadChildren: './photos/photos.module#PhotosPageModule' },
    { path: 'rooms', loadChildren: './rooms/rooms.module#RoomsPageModule' },
    { path: 'services', loadChildren: './services/services.module#ServicesPageModule' },
    { path: 'booking', loadChildren: './booking/booking.module#BookingPageModule' },
    { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
    { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule' },
    { path: 'contactus', loadChildren: './contactus/contactus.module#ContactusPageModule' },
    { path: 'tariff', loadChildren: './tariff/tariff.module#TariffPageModule' },
    { path: 'testimonials', loadChildren: './testimonials/testimonials.module#TestimonialsPageModule' },
    { path: 'brochure', loadChildren: './brochure/brochure.module#BrochurePageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map