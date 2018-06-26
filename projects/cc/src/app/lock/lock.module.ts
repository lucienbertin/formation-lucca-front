import { NgModule } from '@angular/core';

import { LockComponent } from './lock.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		LockComponent
	],
	imports: [
		CommonModule,
	],
	providers: [],
	exports: [
		LockComponent,
	]
})
export class LockModule { }
