import { Component } from '@angular/core';
import { IUser } from '@lucca-front/ng';

@Component({
	selector: 'cc-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
	basile = {
		id: 432,
		firstName: 'Basile',
		lastName: 'Minvielle',
		picture: {},
	} as IUser;
	marie = {
		id: 509,
		firstName: 'Marie',
		lastName: 'Lambert',
		picture: {},
	} as IUser;
	hugo = {
		id: 493,
		firstName: 'Hugo',
		lastName: 'Barbagelata',
		picture: {},
	} as IUser;
	robin = {
		id: 474,
		firstName: 'Robin',
		lastName: 'Le Gales',
		picture: {},
	} as IUser;
}
