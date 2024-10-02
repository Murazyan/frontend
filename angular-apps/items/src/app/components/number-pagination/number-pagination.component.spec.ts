import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPaginationComponent } from './number-pagination.component';

describe('NumberPaginationComponent', () => {
  let component: NumberPaginationComponent;
  let fixture: ComponentFixture<NumberPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
