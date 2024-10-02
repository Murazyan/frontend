import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringPaginationComponent } from './string-pagination.component';

describe('StringPaginationComponent', () => {
  let component: StringPaginationComponent;
  let fixture: ComponentFixture<StringPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StringPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StringPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
