import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';

import { CreateButtonComponent } from './create-button.component';
import { CreateFormComponent } from './create-form.component';
import { CreateDialogComponent } from './create-dialog.component';

@NgModule({
	declarations: [
		CreateButtonComponent,
		CreateFormComponent,
		CreateDialogComponent,
	],
	imports: [
		MatDialogModule,
	],
	providers: [],
	exports: [
		CreateButtonComponent,
	],
	entryComponents: [
		CreateDialogComponent,
	]
})
export class CreateModule { }
