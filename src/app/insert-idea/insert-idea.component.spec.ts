import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertIdeaComponent } from './insert-idea.component';

describe('InsertIdeaComponent', () => {
  let component: InsertIdeaComponent;
  let fixture: ComponentFixture<InsertIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertIdeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
