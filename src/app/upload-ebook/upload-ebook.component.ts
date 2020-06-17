import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
	selector: 'app-upload-ebook',
	templateUrl: './upload-ebook.component.html',
	styleUrls: ['./upload-ebook.component.scss']
})
export class UploadEbookComponent implements OnInit {

	

	ngOnInit(): void {
	}

	form: FormGroup;
	websiteList: any = [
	{ id: 1, name: 'image 1' },
	{ id: 2, name: 'image 1' },
	{ id: 3, name: 'image 1' }
	];

	constructor(private formBuilder: FormBuilder,private router: Router,) {
		this.form = this.formBuilder.group({
			website: this.formBuilder.array([], [Validators.required])
		})
	}

	onCheckboxChange(e) {
		const website: FormArray = this.form.get('website') as FormArray;

		if (e.target.checked) {
			website.push(new FormControl(e.target.value));
		} else {
			const index = website.controls.findIndex(x => x.value === e.target.value);
			website.removeAt(index);
		}
	}

	submit(){
		debugger;
		console.log(this.form.value);
		this.router.navigate(['image-editor']);
	}

}
