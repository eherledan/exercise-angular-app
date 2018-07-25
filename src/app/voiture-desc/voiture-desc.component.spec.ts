import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureDescComponent } from './voiture-desc.component';

describe('VoitureDescComponent', () => {
  let component: VoitureDescComponent;
  let fixture: ComponentFixture<VoitureDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
