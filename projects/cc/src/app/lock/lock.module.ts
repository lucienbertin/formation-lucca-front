import { NgModule } from '@angular/core';

import { LockComponent } from './lock.component';
import { CommonModule } from '@angular/common';
import { LuUserDisplayModule, LuPopoverModule, LuUserTileModule } from '@lucca-front/ng';
import { UserModule } from '../user/user.module';

@NgModule({
	declarations: [
		LockComponent
	],
	imports: [
		CommonModule,
		UserModule,
	],
	providers: [],
	exports: [
		LockComponent,
	]
})
export class LockModule { }
