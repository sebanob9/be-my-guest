import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSortComponent } from './guest-sort.component';

describe('GuestSortComponent', () => {
  let component: GuestSortComponent;
  let fixture: ComponentFixture<GuestSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
