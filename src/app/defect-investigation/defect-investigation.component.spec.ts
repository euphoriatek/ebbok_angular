import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectInvestigationComponent } from './defect-investigation.component';

describe('DefectInvestigationComponent', () => {
  let component: DefectInvestigationComponent;
  let fixture: ComponentFixture<DefectInvestigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectInvestigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
