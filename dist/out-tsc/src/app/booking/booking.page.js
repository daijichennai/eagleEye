import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
var BookingPage = /** @class */ (function () {
    function BookingPage(datePicker) {
        this.datePicker = datePicker;
    }
    BookingPage.prototype.ngOnInit = function () {
    };
    BookingPage.prototype.dateClick = function () {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) { return console.log('Got date: ', date); }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    BookingPage = tslib_1.__decorate([
        Component({
            selector: 'app-booking',
            templateUrl: './booking.page.html',
            styleUrls: ['./booking.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DatePicker])
    ], BookingPage);
    return BookingPage;
}());
export { BookingPage };
//# sourceMappingURL=booking.page.js.map