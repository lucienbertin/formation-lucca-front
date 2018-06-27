import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';

import { CreateButtonComponent } from './create-button.component';
import { CreateFormComponent } from './create-form.component';
import { CreateDialogComponent } from './create-dialog.component';

import { LuFormlyModule } from '@lucca-front/ng/formly';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
	declarations: [
		CreateButtonComponent,
		CreateFormComponent,
		CreateDialogComponent,
	],
	imports: [
		MatDialogModule,
		LuFormlyModule,
		FormlyModule,
		FormsModule,
		ReactiveFormsModule,
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
