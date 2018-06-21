import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionModule } from './action/action.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		ActionModule,
	],
	bootstrap: [
		AppComponent,
	]
})
export class AppModule { }
