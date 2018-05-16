import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePageComponent } from './site-page.component';

describe('SitePageComponent', () => {
  let component: SitePageComponent;
  let fixture: ComponentFixture<SitePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
