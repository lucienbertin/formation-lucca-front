import { Component } from '@angular/core';
import { basile } from '../user/index';

@Component({
	selector: 'cc-lock',
	templateUrl: './lock.component.html',
	styleUrls: ['./lock.component.scss']
})
export class LockComponent {
	basile = basile;
}
