import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfieComponent } from './edit-profie.component';

describe('EditProfieComponent', () => {
  let component: EditProfieComponent;
  let fixture: ComponentFixture<EditProfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProfieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
