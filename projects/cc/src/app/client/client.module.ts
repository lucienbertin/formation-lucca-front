import { NgModule } from '@angular/core';

import { ClientComponent } from './client.component';
import { AddressModule } from '../addres/address.module';
import { LuSelectModule, LuEmptyModule, LuApiSelectModule } from '@lucca-front/ng';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		ClientComponent
	],
	imports: [
		AddressModule,
		LuSelectModule,
		LuApiSelectModule,
		FormsModule,
		CommonModule,
		// LuEmptyModule,
	],
	providers: [],
	exports: [
		ClientComponent,
	]
})
export class ClientModule { }
