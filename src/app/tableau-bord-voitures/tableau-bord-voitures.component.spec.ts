import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauBordVoituresComponent } from './tableau-bord-voitures.component';

describe('TableauBordVoituresComponent', () => {
  let component: TableauBordVoituresComponent;
  let fixture: ComponentFixture<TableauBordVoituresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauBordVoituresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauBordVoituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
