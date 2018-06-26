import { NgModule } from '@angular/core';

import { HistoryComponent } from './history.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		HistoryComponent
	],
	imports: [
		CommonModule,
	],
	providers: [],
	exports: [
		HistoryComponent,
	]
})
export class HistoryModule { }
