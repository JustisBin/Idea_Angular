import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterAnnoComponent } from './inter-anno.component';

describe('InterAnnoComponent', () => {
  let component: InterAnnoComponent;
  let fixture: ComponentFixture<InterAnnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterAnnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterAnnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
