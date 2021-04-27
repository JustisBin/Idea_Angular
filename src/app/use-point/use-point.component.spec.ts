import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsePointComponent } from './use-point.component';

describe('UsePointComponent', () => {
  let component: UsePointComponent;
  let fixture: ComponentFixture<UsePointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsePointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
