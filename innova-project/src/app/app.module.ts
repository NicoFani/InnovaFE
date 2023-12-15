import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutJuanComponent } from './components/about-juan/about-juan.component';
import { AboutSebastianComponent } from './components/about-sebastian/about-sebastian.component';
import { AboutRoboticSurgeryComponent } from './components/about-robotic-surgery/about-robotic-surgery.component';
import { AboutDaVinciPlataformComponent } from './components/about-da-vinci-plataform/about-da-vinci-plataform.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutJuanComponent,
    AboutSebastianComponent,
    AboutRoboticSurgeryComponent,
    AboutDaVinciPlataformComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
