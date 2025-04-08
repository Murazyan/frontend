import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryCardItemComponent } from './memory-card-item.component';

describe('MemoryCardItemComponent', () => {
  let component: MemoryCardItemComponent;
  let fixture: ComponentFixture<MemoryCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoryCardItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoryCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
