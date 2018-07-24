import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleFlagComponent } from './middle-flag.component';

describe('MiddleFlagComponent', () => {
  let component: MiddleFlagComponent;
  let fixture: ComponentFixture<MiddleFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
