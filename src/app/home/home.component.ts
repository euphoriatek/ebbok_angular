import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

export interface PeriodicElement {
	name: string;
	phone_number: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
{name: 'Hydrogen', phone_number: 1.0079 },
{name: 'Helium', phone_number: 4.0026 },
{name: 'Lithium', phone_number: 6.941 },
{name: 'Beryllium', phone_number: 9.0122 },
{name: 'Boron', phone_number: 10.811 },
];
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	name: string;
	position: number;
	weight: number;
	symbol: string;

	typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
	

	displayedColumns: string[] = [ 'name', 'phone_number'];
	dataSource = ELEMENT_DATA;

	constructor() { }

	ngOnInit(): void {
	}

	

	public chartColors: Array<any> = [
	{ // first color
		backgroundColor: '#098F6E',
		borderColor: '#098F6E',
		pointBackgroundColor: 'rgba(225,10,24,0.2)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgba(225,10,24,0.2)'
	},
	];

	barChartOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false
	};
	barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
	barChartType: ChartType = 'bar';
	barChartLegend = true;
	barChartPlugins = [];

	barChartData: ChartDataSets[] = [
	{ data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
	];

}



