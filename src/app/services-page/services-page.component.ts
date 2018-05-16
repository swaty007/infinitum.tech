import {Component, OnDestroy, OnInit, AfterViewInit} from '@angular/core';
import { IOffers } from "../shared/offers.data";
import { Title } from '@angular/platform-browser';
import { OffersServise } from "../shared/offers_servise";
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

declare let $:any;

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.less']
})
export class ServicesPageComponent implements OnInit, OnDestroy, AfterViewInit {
  offers:IOffers[];
  modal:boolean = false;
  id: number = 0;
  private subscription: Subscription;

  constructor(private offersServise: OffersServise, private titleService: Title, private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params=> this.id = params['id']);
  }

  ngOnInit() {
    this.offersServise.getOffers().subscribe(res => this.offers = res);
    this.titleService.setTitle( 'Услуги' );
  }
  ngAfterViewInit() {

  }
  openPopup () {
    this.modal = !this.modal;
  }
  closePopup () {
    this.modal = !this.modal;
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
