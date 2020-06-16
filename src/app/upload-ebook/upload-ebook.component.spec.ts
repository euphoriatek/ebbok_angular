import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEbookComponent } from './upload-ebook.component';

describe('UploadEbookComponent', () => {
  let component: UploadEbookComponent;
  let fixture: ComponentFixture<UploadEbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadEbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
