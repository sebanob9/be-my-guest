import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestPresentsComponent } from './guest-presents.component';

describe('GuestPresentsComponent', () => {
  let component: GuestPresentsComponent;
  let fixture: ComponentFixture<GuestPresentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestPresentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestPresentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
