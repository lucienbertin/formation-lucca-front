import { NgModule } from '@angular/core';

import { LuUserDisplayModule, LuPopoverModule, LuUserTileModule } from '@lucca-front/ng';
import { UserComponent } from './user.component';
import { UserPopoverComponent } from './user-popover.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		UserComponent,
		UserPopoverComponent,
	],
	imports: [
		LuUserDisplayModule,
		LuPopoverModule,
		LuUserTileModule,
		CommonModule,
	],
	providers: [],
	exports: [
		UserComponent,
	]
})
export class UserModule { }
