import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextEditorComponent } from './image-text-editor.component';

describe('ImageTextEditorComponent', () => {
  let component: ImageTextEditorComponent;
  let fixture: ComponentFixture<ImageTextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTextEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
