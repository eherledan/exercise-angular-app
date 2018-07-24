import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFlagComponent } from './top-flag.component';

describe('TopFlagComponent', () => {
  let component: TopFlagComponent;
  let fixture: ComponentFixture<TopFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
