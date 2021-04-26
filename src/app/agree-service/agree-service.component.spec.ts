import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreeServiceComponent } from './agree-service.component';

describe('AgreeServiceComponent', () => {
  let component: AgreeServiceComponent;
  let fixture: ComponentFixture<AgreeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreeServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
