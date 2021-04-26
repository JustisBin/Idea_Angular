import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCsComponent } from './insert-cs.component';

describe('InsertCsComponent', () => {
  let component: InsertCsComponent;
  let fixture: ComponentFixture<InsertCsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertCsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
