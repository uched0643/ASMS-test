import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusReviewComponent } from './status-review.component';

describe('StatusReviewComponent', () => {
  let component: StatusReviewComponent;
  let fixture: ComponentFixture<StatusReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
