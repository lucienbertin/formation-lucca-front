import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { CreateModule } from '../create/create.module';

@NgModule({
	declarations: [
		HeaderComponent
	],
	imports: [
		CreateModule,
	],
	providers: [],
	exports: [
		HeaderComponent,
	]
})
export class HeaderModule { }
