import { Component } from '@angular/core';

@Component({
	selector: 'cc-create',
	template: `
	<button class="button palette-primary" (click)="openDialog()">
		<i class="lucca-icon">plus_thin</i>
	</button>
	`,
	styleUrls: []
})
export class CreateButtonComponent {
	openDialog() {
		window.alert('lol');
	}
}
