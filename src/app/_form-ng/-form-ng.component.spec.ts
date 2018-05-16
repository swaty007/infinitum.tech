import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNgComponent } from './-form-ng.component';

describe('FormNgComponent', () => {
  let component: FormNgComponent;
  let fixture: ComponentFixture<FormNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
