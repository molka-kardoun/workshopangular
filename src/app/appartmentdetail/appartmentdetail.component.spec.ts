import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartmentdetailComponent } from './appartmentdetail.component';

describe('AppartmentdetailComponent', () => {
  let component: AppartmentdetailComponent;
  let fixture: ComponentFixture<AppartmentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppartmentdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppartmentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
