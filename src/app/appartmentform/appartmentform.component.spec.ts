import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartmentformComponent } from './appartmentform.component';

describe('AppartmentformComponent', () => {
  let component: AppartmentformComponent;
  let fixture: ComponentFixture<AppartmentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppartmentformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppartmentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
