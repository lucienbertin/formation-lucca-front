import { Component } from '@angular/core';
import { basile, hugo } from '../user';

@Component({
	selector: 'cc-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
	basile = basile;
	hugo = hugo;
	format = 'fl';
}
