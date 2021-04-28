import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaMypageComponent } from './idea-mypage.component';

describe('IdeaMypageComponent', () => {
  let component: IdeaMypageComponent;
  let fixture: ComponentFixture<IdeaMypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaMypageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaMypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
