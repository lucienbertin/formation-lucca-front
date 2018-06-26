import { NgModule } from '@angular/core';

import { HistoryComponent } from './history.component';
import { CommonModule } from '@angular/common';
import { LuUserDisplayModule, LuPopoverModule, LuUserTileModule } from '@lucca-front/ng';

@NgModule({
	declarations: [
		HistoryComponent
	],
	imports: [
		CommonModule,
		LuUserDisplayModule,
		LuPopoverModule,
		LuUserTileModule,
	],
	providers: [],
	exports: [
		HistoryComponent,
	]
})
export class HistoryModule { }
