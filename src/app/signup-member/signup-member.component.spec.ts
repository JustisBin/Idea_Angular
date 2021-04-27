import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupMemberComponent } from './signup-member.component';

describe('SignupMemberComponent', () => {
  let component: SignupMemberComponent;
  let fixture: ComponentFixture<SignupMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
