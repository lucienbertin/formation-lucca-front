import { NgModule } from '@angular/core';

import { DetailComponent } from './detail.component';
import { CommonModule } from '@angular/common';
import { LuUserTileModule } from '@lucca-front/ng';

@NgModule({
	declarations: [
		DetailComponent
	],
	imports: [
		CommonModule,
		LuUserTileModule
	],
	providers: [],
	exports: [
		DetailComponent,
	]
})
export class DetailModule { }
