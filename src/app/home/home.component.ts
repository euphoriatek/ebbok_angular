import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
