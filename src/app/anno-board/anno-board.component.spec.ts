import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoBoardComponent } from './anno-board.component';

describe('AnnoBoardComponent', () => {
  let component: AnnoBoardComponent;
  let fixture: ComponentFixture<AnnoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
