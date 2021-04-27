import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPwComponent } from './check-pw.component';

describe('CheckPwComponent', () => {
  let component: CheckPwComponent;
  let fixture: ComponentFixture<CheckPwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckPwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
