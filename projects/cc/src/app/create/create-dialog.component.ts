import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
@Component({
	selector: 'cc-create-dialog',
	template: '<cc-form></cc-form>',
})
export class CreateDialogComponent {
	static openDialog(dialog: MatDialog): MatDialogRef<CreateDialogComponent> {
		return dialog.open(CreateDialogComponent);
	}
}