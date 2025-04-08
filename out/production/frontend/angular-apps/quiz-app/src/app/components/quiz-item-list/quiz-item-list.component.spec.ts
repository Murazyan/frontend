import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizItemListComponent } from './quiz-item-list.component';

describe('QuizItemListComponent', () => {
  let component: QuizItemListComponent;
  let fixture: ComponentFixture<QuizItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizItemListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
