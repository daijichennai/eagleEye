import { Component } from '@angular/core';

import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true
  };
 
  
  constructor(
              private datePicker: DatePicker,
              private modalController: ModalController,
              public router: Router
              ){

  }
  ngOnInit() {
    
   }
   goToBookingPage() {
     this.router.navigate(['booking']);
    
   }
   goToRoomPage() {
    this.router.navigate(['rooms']);
   
  }
  goToServicePage() {
    this.router.navigate(['services']);
   
  }
  
  
 
  


  dateClick() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }
}
