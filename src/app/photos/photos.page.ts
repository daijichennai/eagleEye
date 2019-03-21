import { Component, OnInit } from '@angular/core';

import{ ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
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
              
              private modalController: ModalController
              ){

  }
  openPreview(img) {
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: img
      }
    }).then(modal => {
      modal.present();
    });
  }
  ngOnInit() {
  }
}
