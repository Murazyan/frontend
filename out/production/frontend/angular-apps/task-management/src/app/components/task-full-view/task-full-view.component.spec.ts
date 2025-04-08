import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFullViewComponent } from './task-full-view.component';

describe('TaskFullViewComponent', () => {
  let component: TaskFullViewComponent;
  let fixture: ComponentFixture<TaskFullViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskFullViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskFullViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
