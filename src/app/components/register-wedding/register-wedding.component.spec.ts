import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWeddingComponent } from './register-wedding.component';

describe('RegisterWeddingComponent', () => {
  let component: RegisterWeddingComponent;
  let fixture: ComponentFixture<RegisterWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
