import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var RoomsPage = /** @class */ (function () {
    function RoomsPage(router) {
        this.router = router;
    }
    RoomsPage.prototype.ngOnInit = function () {
    };
    RoomsPage.prototype.goToBookingPage = function () {
        this.router.navigate(['booking']);
    };
    RoomsPage = tslib_1.__decorate([
        Component({
            selector: 'app-rooms',
            templateUrl: './rooms.page.html',
            styleUrls: ['./rooms.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], RoomsPage);
    return RoomsPage;
}());
export { RoomsPage };
//# sourceMappingURL=rooms.page.js.map