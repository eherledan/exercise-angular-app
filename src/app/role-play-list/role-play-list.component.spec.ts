import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePlayListComponent } from './role-play-list.component';

describe('RolePlayListComponent', () => {
  let component: RolePlayListComponent;
  let fixture: ComponentFixture<RolePlayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolePlayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolePlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
