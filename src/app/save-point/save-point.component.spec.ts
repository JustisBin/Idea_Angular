import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePointComponent } from './save-point.component';

describe('SavePointComponent', () => {
  let component: SavePointComponent;
  let fixture: ComponentFixture<SavePointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavePointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
