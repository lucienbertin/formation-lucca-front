import { NgModule } from '@angular/core';

import { LockComponent } from './lock.component';
import { CommonModule } from '@angular/common';
import { LuUserDisplayModule } from '@lucca-front/ng';

@NgModule({
	declarations: [
		LockComponent
	],
	imports: [
		CommonModule,
		LuUserDisplayModule,
	],
	providers: [],
	exports: [
		LockComponent,
	]
})
export class LockModule { }
