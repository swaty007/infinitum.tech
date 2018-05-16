import { ISites, ISiteInfo } from "./sites.data";
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class SiteServise {
  private sites:ISites[];
  private  site:ISites;
  private siteInfo:ISiteInfo;
  constructor(private http:Http){
  }

  getSites() {
    let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('assets/ProjectsMSQL.php','',options)
        .map(response => this.sites = response.json());// .subscribe(res => res.json());
  }

  firstLoad() {
    if (this.sites == undefined) {
      return false;
    } else {
      return true;
    }
  }
  getSiteLoaded(_id:number) {
    this.site = this.sites.find(site => site.id == _id);
    return this.site;
  }
  getSite(_id:number) {
    let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('assets/ProjectsMSQL.php','',options)
      .map(response => this.site = response.json().find(site => site.id == _id));
  }
  getSiteInfo(_id:number) {

    let headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
    let options = new RequestOptions({headers: headers});
    // let params = new URLSearchParams();
    // params.set('id', _id);
    // let body = JSON.stringify(params);
    let body = JSON.stringify(_id);
    return this.http.post('assets/ProjectsMSQL.php', body, options)
        .map(response => this.siteInfo = response.json());
    // .map(response => response.json())
  }
}
