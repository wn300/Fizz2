import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { FoothersComponent } from './foothers/foothers.component';
import { RaizComponent } from './raiz/raiz.component';
import { RespuestamodComponent } from './respuestamod/respuestamod.component';
import { ShaerdservicesService } from './Services/shaerdservices.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FoothersComponent,
    RaizComponent,
    RespuestamodComponent
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [  
    ShaerdservicesService],

  bootstrap: [AppComponent]
})
export class AppModule { }
