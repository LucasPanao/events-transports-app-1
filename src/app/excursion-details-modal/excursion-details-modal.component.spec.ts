import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionDetailsModalComponent } from './excursion-details-modal.component';

describe('ExcursionDetailsModalComponent', () => {
  let component: ExcursionDetailsModalComponent;
  let fixture: ComponentFixture<ExcursionDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcursionDetailsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcursionDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
