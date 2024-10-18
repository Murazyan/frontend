import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryCardPageComponent } from './memory-card-page.component';

describe('MemoryCardPageComponent', () => {
  let component: MemoryCardPageComponent;
  let fixture: ComponentFixture<MemoryCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoryCardPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoryCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
