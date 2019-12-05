import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestConfirmationComponent } from './guest-confirmation.component';

describe('GuestConfirmationComponent', () => {
  let component: GuestConfirmationComponent;
  let fixture: ComponentFixture<GuestConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
