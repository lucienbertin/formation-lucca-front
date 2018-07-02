import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IApiSelectFeeder, ALuApiSelectFeederWithPaging } from '@lucca-front/ng';
import { AddressService } from './address.service';

@Component({
	selector: 'cc-address-feeder',
	template: '',
	exportAs: 'ccAddressFeeder',
})
export class AddressFeederComponent implements IApiSelectFeeder<any> {
	constructor(private searchService: AddressService) {
	}
	getItems(clue: string): Observable<any[]> {
		return this.searchService.searchAddresses(clue);
	}
	textValue(item: any) {
		return item.formatted_address;
	}
	isPaged() { return false; }
}
