import { NgModule } from '@angular/core';

import { DetailComponent } from './detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		DetailComponent
	],
	imports: [
		CommonModule,
	],
	providers: [],
	exports: [
		DetailComponent,
	]
})
export class DetailModule { }
