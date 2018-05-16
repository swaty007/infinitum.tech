import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SiteServise } from "../shared/sites_servise";
import { ISites, ISiteInfo } from "../shared/sites.data";
import { Title } from '@angular/platform-browser';
import { isUndefined } from "util";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/takeUntil'

@Component({
  selector: 'app-site-page',
  templateUrl: './site-page.component.html',
  styleUrls: ['./site-page.component.less']
})
export class SitePageComponent implements OnInit, OnDestroy {
  site: ISites;
  siteInfo: ISiteInfo;
  private id: number;
  private ngDestroyed: Subject<void> = new Subject<void>();
  // private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute, private siteServise: SiteServise, private titleService: Title) {
    activateRoute.params.takeUntil(this.ngDestroyed).subscribe(params=> this.id = params['id']);
    // this.subscription = activateRoute.params.subscribe(params=> this.id = params['id']);
  }

  ngOnInit() {
    this.siteServise.getSiteInfo(+this.id).takeUntil(this.ngDestroyed).subscribe(res => this.siteInfo = res);

    if (this.siteServise.firstLoad()) {
      this.site = this.siteServise.getSiteLoaded(+this.id);
    } else {
      this.siteServise.getSite(+this.id).takeUntil(this.ngDestroyed).subscribe(res => this.site = res);
    }

    if (this.site !== undefined )  {
      this.titleService.setTitle( this.site.name );
    } else {
      this.siteServise.getSite(+this.id).takeUntil(this.ngDestroyed).subscribe(res => this.titleService.setTitle( res.name ));
    }
  }

  ngOnDestroy(){
    // this.subscription.unsubscribe();
    this.ngDestroyed.next();
    this.ngDestroyed.complete();
  }



}
