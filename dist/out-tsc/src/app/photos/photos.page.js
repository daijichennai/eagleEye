import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
var PhotosPage = /** @class */ (function () {
    function PhotosPage(modalController) {
        this.modalController = modalController;
        this.sliderOpts = {
            zoom: false,
            sliderPerview: 1.5,
            centeredSlides: true,
            spaceBetween: 20,
        };
    }
    PhotosPage.prototype.openPreview = function (img) {
        this.modalController.create({
            component: ImageModalPage,
            componentProps: {
                img: img
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    PhotosPage.prototype.ngOnInit = function () {
    };
    PhotosPage = tslib_1.__decorate([
        Component({
            selector: 'app-photos',
            templateUrl: './photos.page.html',
            styleUrls: ['./photos.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], PhotosPage);
    return PhotosPage;
}());
export { PhotosPage };
//# sourceMappingURL=photos.page.js.map