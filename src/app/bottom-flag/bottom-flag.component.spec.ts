import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomFlagComponent } from './bottom-flag.component';

describe('BottomFlagComponent', () => {
  let component: BottomFlagComponent;
  let fixture: ComponentFixture<BottomFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
