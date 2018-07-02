import { Component, Input } from '@angular/core';

@Component({
	selector: 'cc-user',
	templateUrl: './user.component.html',
	styleUrls: []
})
export class UserComponent {
	@Input() user;
	format = 'fl';
}
