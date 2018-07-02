import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddressService {
	constructor(private http: HttpClient) {
	}
	searchAddresses(clue = ''): Observable<any[]> {
		if (!clue) {
			return Observable.of([]);
		}
		const clueSplit = clue.replace(' ', '+');
		const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${clueSplit}`;
		return this.http.get<any>(url)
		.map(results => {
			return results.results;
		});

	}
}
