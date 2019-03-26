import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, alertCtrl) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.appPages = [
            {
                title: 'Home',
                url: '/home',
                icon: 'fa fa-home'
            },
            {
                title: 'Our Rooms',
                url: '/rooms',
                icon: 'fa fa-sign-in'
            },
            {
                title: 'Our Service',
                url: '/services',
                icon: 'fa fa-coffee'
            },
            {
                title: 'Location',
                url: '/location',
                icon: 'fa fa-map-marker'
            },
            {
                title: 'Photo Gallery',
                url: '/photos',
                icon: 'fa fa-picture-o'
            },
            {
                title: 'Tariff',
                url: '/tariff',
                icon: 'fa fa-file-o'
            },
            {
                title: 'Booking',
                url: '/booking',
                icon: 'fa fa-book'
            },
            {
                title: 'News & Events',
                url: '/newsevents',
                icon: 'fa fa-newspaper-o'
            },
            {
                title: 'Testimonials',
                url: '/testimonials',
                icon: 'fa fa-comment-o'
            },
            {
                title: 'Contact Us',
                url: '/contactus',
                icon: 'fa fa-phone-square'
            },
            {
                title: 'About Us ',
                url: '/aboutus',
                icon: 'fa fa-users'
            }
        ];
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.appPages[0].title === 'Home') {
                _this.platform.backButton.subscribe(function () {
                    _this.exitFunction();
                });
            }
        });
    };
    AppComponent.prototype.exitFunction = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Exit Eagle Eye Resort',
                            message: 'Do you want to exit the app ?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Exit',
                                    handler: function () {
                                        navigator['app'].exitApp();
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            AlertController])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map