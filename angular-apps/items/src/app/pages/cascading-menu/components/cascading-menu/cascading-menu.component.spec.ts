import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadingMenuComponent } from './cascading-menu.component';

describe('CascadingMenuComponent', () => {
  let component: CascadingMenuComponent;
  let fixture: ComponentFixture<CascadingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CascadingMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CascadingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
