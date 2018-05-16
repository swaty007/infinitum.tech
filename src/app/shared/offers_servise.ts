import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { IOffers } from "./offers.data";


@Injectable()
export class OffersServise {
    // private offers:IOffers[];
    constructor(private http:Http){
    }

    getOffers() {
        let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
        let options = new RequestOptions({headers: headers});

        return this.http.post('assets/OffersMSQL.php','',options)
            .map(response => response.json());
            // .map(response => this.offers = response.json());
    }
}
