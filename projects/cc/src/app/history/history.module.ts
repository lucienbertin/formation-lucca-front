import { NgModule } from '@angular/core';

import { HistoryComponent } from './history.component';
import { CommonModule } from '@angular/common';
import { LuUserDisplayModule, LuPopoverModule, LuUserTileModule } from '@lucca-front/ng';
import { UserModule } from '../user/user.module';

@NgModule({
	declarations: [
		HistoryComponent
	],
	imports: [
		CommonModule,
		LuUserDisplayModule,
		LuPopoverModule,
		LuUserTileModule,
		UserModule,
	],
	providers: [],
	exports: [
		HistoryComponent,
	]
})
export class HistoryModule { }
