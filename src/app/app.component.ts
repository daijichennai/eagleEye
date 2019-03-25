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
    } ,
    
    {
      title: 'About Us ',
      url: '/aboutus',
      icon: 'fa fa-users'
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
