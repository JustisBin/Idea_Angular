import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsBoardComponent } from './cs-board.component';

describe('CsBoardComponent', () => {
  let component: CsBoardComponent;
  let fixture: ComponentFixture<CsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
