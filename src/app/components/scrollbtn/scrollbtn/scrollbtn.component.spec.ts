import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbtnComponent } from './scrollbtn.component';

describe('ScrollbtnComponent', () => {
  let component: ScrollbtnComponent;
  let fixture: ComponentFixture<ScrollbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
