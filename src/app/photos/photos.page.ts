import { Component, OnInit } from '@angular/core';

import{ ModalController,Platform } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

  sliderOpts={
    zoom: false,
    sliderPerview:1.5,
    centeredSlides:true,
    spaceBetween: 20,
  };
  
  constructor(              
              private modalController: ModalController,
              private so: ScreenOrientation,
              private platform: Platform,
              ){

  }
  ngOnInit() {
    this.platform.backButton.subscribe(() => {          
      this.so.lock(this.so.ORIENTATIONS.PORTRAIT);        
  });
  }
  

  openPreview(img) {
    this.so.lock(this.so.ORIENTATIONS.LANDSCAPE);
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: img
      }
    }).then(modal => {
      modal.present();
    });
  }
 
}
