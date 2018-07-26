import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFilmsComponent } from './get-films.component';

describe('GetFilmsComponent', () => {
  let component: GetFilmsComponent;
  let fixture: ComponentFixture<GetFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
