import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateDialogComponent } from './create-dialog.component';

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
	constructor(private dialog: MatDialog) {}
	openDialog() {
		CreateDialogComponent.openDialog(this.dialog);
	}
}
