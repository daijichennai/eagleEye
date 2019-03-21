import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import{PhotosPageModule} from './photos/photos.module';
import { ImageModalPageModule } from './image-modal/image-modal.module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ImageModalPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    PhotosPageModule,    
    AngularFontAwesomeModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
