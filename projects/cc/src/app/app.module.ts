import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionModule } from './action/action.module';
import { ClientModule } from './client/client.module';
import { ConnectModule } from './connect/connect.module';
import { DetailModule } from './detail/detail.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		ActionModule,
		ClientModule,
		ConnectModule,
		DetailModule,
	],
	bootstrap: [
		AppComponent,
	]
})
export class AppModule { }
