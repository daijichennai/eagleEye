import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var ServicesPage = /** @class */ (function () {
    function ServicesPage(router) {
        this.router = router;
    }
    ServicesPage.prototype.ngOnInit = function () {
    };
    ServicesPage.prototype.goToBookingPage = function (newsID) {
        this.router.navigate(['booking']);
    };
    ServicesPage = tslib_1.__decorate([
        Component({
            selector: 'app-services',
            templateUrl: './services.page.html',
            styleUrls: ['./services.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ServicesPage);
    return ServicesPage;
}());
export { ServicesPage };
//# sourceMappingURL=services.page.js.map