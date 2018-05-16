import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from "@angular/router";
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OurAdvantagesComponent } from './_ourAdvantages/-our-advantages.component';
import { OurOffersComponent } from './_ourOffers/-our-offers.component';
import { SliderComponent } from './_slider/-slider.component';
import { FormComponent } from './_form/-form.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ServiceForm } from "./shared/-service.form";
import { FormNgComponent } from './_form-ng/-form-ng.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { SiteServise } from "./shared/sites_servise";
import { SitePageComponent } from './site-page/site-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { OffersServise } from "./shared/offers_servise";
import { ScrollToDirective } from './directive.directive';


const routes:Routes  = [
  {path: '', component: MainPageComponent },
  {path: 'Contact', component: ContactPageComponent, pathMatch:'full'},
  {path: 'Portfolio', component: PortfolioPageComponent, pathMatch:'full',children:[]},
  {path: 'Portfolio/site/:id', component: SitePageComponent},
  {path: 'Services/:id', component: ServicesPageComponent, pathMatch:'full'},
  {path: 'Services', component: ServicesPageComponent, pathMatch:'full'},
  {path: '**', component: MainPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    OurAdvantagesComponent,
    OurOffersComponent,
    SliderComponent,
    FormComponent,
    ContactPageComponent,
    FormNgComponent,
    PortfolioPageComponent,
    SitePageComponent,
    ServicesPageComponent,
    ScrollToDirective
  ],//какие компоненты используем
  imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      HttpModule,
      FormsModule
  ],
  providers: [ServiceForm, SiteServise, Title, OffersServise], //сервисы
  bootstrap: [AppComponent]
})
export class AppModule { }
