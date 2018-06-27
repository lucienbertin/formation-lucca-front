import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
@Component({
	selector: 'cc-create-dialog',
	template: '<cc-form (clientSubmitted)="submit($event)"></cc-form>',
})
export class CreateDialogComponent {
	static openDialog(dialog: MatDialog): MatDialogRef<CreateDialogComponent> {
		return dialog.open(CreateDialogComponent, { panelClass: 'sm' });
	}
	constructor(
		private dialogRef: MatDialogRef<CreateDialogComponent>,
	) {}
	submit($event) {
		console.log($event);
		this.dialogRef.close();
	}
}
