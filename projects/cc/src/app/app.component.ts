import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'cc-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	ready$ = timer(100)
	.pipe(map(i => !(i % 2)));

}
