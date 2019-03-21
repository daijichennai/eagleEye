import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'fa fa-home'
    },
    {
      title: 'Room',
      url: '/rooms',
      icon: 'fa fa-sign-in'
    },
    {
      title: 'News & Events',
      url: '/newsevents',
      icon: 'fa fa-newspaper-o'
    },
    {
      title: 'Booking',
      url: '/booking',
      icon: 'fa fa-book'
    },
    
    {
      title: 'Photo Gallery',
      url: '/photos',
      icon: 'fa fa-picture-o'
    },
     {
      title: 'Service',
      url: '/services',
      icon: 'fa fa-coffee'
    },
    {
      title: 'About Us ',
      url: '/aboutus',
      icon: 'fa fa-users'
    },
    {
      title: 'Contact Us',
      url: '/contactus',
      icon: 'fa fa-phone-square'
    }  
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (this.appPages[0].title === 'Home') {
        this.platform.backButton.subscribe(() => {          
              this.exitFunction();           
        });
       }
    });
  }
  async  exitFunction() {
    const alert = await this.alertCtrl.create({
      header: 'Exit Eagle Eye Resort',
      message: 'Do you want to exit the app ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Exit',
          handler: () => {
            navigator['app'].exitApp();
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
}
