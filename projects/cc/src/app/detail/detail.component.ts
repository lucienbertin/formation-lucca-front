import { Component } from '@angular/core';
import { basile, robin, marie, hugo } from '../user/index';

@Component({
	selector: 'cc-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
	basile = basile;
	hugo = hugo;
	marie = marie;
	robin = robin;

}
