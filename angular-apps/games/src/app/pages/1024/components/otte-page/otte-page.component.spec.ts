import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttePageComponent } from './otte-page.component';

describe('OttePageComponent', () => {
  let component: OttePageComponent;
  let fixture: ComponentFixture<OttePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OttePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OttePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
