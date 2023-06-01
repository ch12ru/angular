import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionDerailsComponent } from './prediction-derails.component';

describe('PredictionDerailsComponent', () => {
  let component: PredictionDerailsComponent;
  let fixture: ComponentFixture<PredictionDerailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionDerailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictionDerailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
