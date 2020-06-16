import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	sortOrders: string[] = ["Year", "Title", "Author"];
	selectedSortOrder: string = "Dashboard";
	selectedSortOrder2: string = "Upload";
	private isOpen = '';

	constructor() { }

	ChangeSortOrder(newSortOrder: string) { 
		// this.selectedSortOrder = newSortOrder;
	}

	ChangeSortOrder2(newSortOrder: string) { 
		// this.selectedSortOrder2 = newSortOrder;
	}

	ngOnInit(): void {
	}


	toggled(event) {
		if (event) {
			console.log('is open');
			this.isOpen = 'is open'
		} else {
			console.log('is closed');
			this.isOpen = 'is closed'
		}
	}

}
