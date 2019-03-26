import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var TariffPage = /** @class */ (function () {
    function TariffPage() {
    }
    TariffPage.prototype.ngOnInit = function () {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                }
                else {
                    panel.style.display = "block";
                }
            });
        }
    };
    TariffPage = tslib_1.__decorate([
        Component({
            selector: 'app-tariff',
            templateUrl: './tariff.page.html',
            styleUrls: ['./tariff.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TariffPage);
    return TariffPage;
}());
export { TariffPage };
//# sourceMappingURL=tariff.page.js.map