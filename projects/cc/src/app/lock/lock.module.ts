import { NgModule } from '@angular/core';

import { LockComponent } from './lock.component';
import { CommonModule } from '@angular/common';
import { LuUserDisplayModule, LuPopoverModule, LuUserTileModule } from '@lucca-front/ng';

@NgModule({
	declarations: [
		LockComponent
	],
	imports: [
		CommonModule,
		LuUserDisplayModule,
		LuPopoverModule,
		LuUserTileModule,
	],
	providers: [],
	exports: [
		LockComponent,
	]
})
export class LockModule { }
