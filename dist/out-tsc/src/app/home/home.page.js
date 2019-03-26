import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
var HomePage = /** @class */ (function () {
    function HomePage(datePicker, modalController, router) {
        this.datePicker = datePicker;
        this.modalController = modalController;
        this.router = router;
        this.sliderOpts = {
            zoom: false,
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true
        };
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.goToBookingPage = function () {
        this.router.navigate(['booking']);
    };
    HomePage.prototype.goToRoomPage = function () {
        this.router.navigate(['rooms']);
    };
    HomePage.prototype.goToServicePage = function () {
        this.router.navigate(['services']);
    };
    HomePage.prototype.goToBrochurePage = function () {
        this.router.navigate(['brochure']);
    };
    HomePage.prototype.dateClick = function () {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) { return console.log('Got date: ', date); }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DatePicker,
            ModalController,
            Router])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map