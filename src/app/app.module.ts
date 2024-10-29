import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './approuting.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//PRIMENG
import { ButtonModule } from 'primeng/button';
import { ScrollTopModule } from 'primeng/scrolltop';
import { GalleriaModule } from 'primeng/galleria';


import { LobyComponent } from './componentes/loby/loby.component';
import { PhotoService } from './servicios/fotos.service';
import { LandingComponent } from './componentes/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LobyComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollTopModule,
    GalleriaModule,
    FormsModule, ReactiveFormsModule,
    ButtonModule
  ],
  providers: [{provide: LocationStrategy,useClass: HashLocationStrategy}, PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
