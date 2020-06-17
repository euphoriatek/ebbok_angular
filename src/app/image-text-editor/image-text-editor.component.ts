import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
	selector: 'app-image-text-editor',
	templateUrl: './image-text-editor.component.html',
	styleUrls: ['./image-text-editor.component.scss']
})
export class ImageTextEditorComponent implements OnInit {
	htmlContent:any;
	public Editor = ClassicEditor;
	constructor() {}

	ngOnInit(): void {
	}

}
