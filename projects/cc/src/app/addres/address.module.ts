import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AddressService } from './address.service';
import { AddressFeederComponent } from './address-feeder.component';


@NgModule({
	declarations: [
		AddressFeederComponent,
	],
	imports: [
		HttpClientModule,
	],
	providers: [
		AddressService,
	],
	exports: [
		AddressFeederComponent,
	]
})
export class AddressModule { }
