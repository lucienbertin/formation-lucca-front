import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionModule } from './action/action.module';
import { ClientModule } from './client/client.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		ActionModule,
		ClientModule,
	],
	bootstrap: [
		AppComponent,
	]
})
export class AppModule { }
