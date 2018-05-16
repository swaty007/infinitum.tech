import { Component, OnInit } from '@angular/core';
import { SiteServise } from '../shared/sites_servise';
import { ISites } from '../shared/sites.data';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.less']
})
export class PortfolioPageComponent implements OnInit {

  sites: ISites[];
  constructor(private siteServise: SiteServise, private titleService: Title ) { }

  ngOnInit() {
    this.siteServise.getSites().subscribe(res => this.sites = res);

    this.titleService.setTitle( 'Portfolio' );

  }

}
