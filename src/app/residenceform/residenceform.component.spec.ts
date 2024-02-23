import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceformComponent } from './residenceform.component';

describe('ResidenceformComponent', () => {
  let component: ResidenceformComponent;
  let fixture: ComponentFixture<ResidenceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidenceformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidenceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
