import { Component, OnInit } from '@angular/core';
import { IOffers } from "../shared/offers.data";
import { OffersServise } from "../shared/offers_servise";


@Component({
  selector: 'app--our-offers',
  templateUrl: './-our-offers.component.html',
  styleUrls: ['./-our-offers.component.less']
})
export class OurOffersComponent implements OnInit {
  offers:IOffers[];

  constructor(private offersServise: OffersServise) { }

  ngOnInit() {
    this.offersServise.getOffers().subscribe(res => this.offers = res);
  }

}
