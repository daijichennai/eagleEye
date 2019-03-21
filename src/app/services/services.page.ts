import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  goToBookingPage(newsID: number) {
    this.router.navigate(['booking']);
   
  }
}
