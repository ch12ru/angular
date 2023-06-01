import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaDashboardComponent } from './mega-dashboard.component';

describe('MegaDashboardComponent', () => {
  let component: MegaDashboardComponent;
  let fixture: ComponentFixture<MegaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
