import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionModule } from './action/action.module';
import { ClientModule } from './client/client.module';
import { ConnectModule } from './connect/connect.module';
import { DetailModule } from './detail/detail.module';
import { HistoryModule } from './history/history.module';
import { LockModule } from './lock/lock.module';
import { NavModule } from './nav/nav.module';
import { HeaderModule } from './header/header.module';

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
		HistoryModule,
		LockModule,
		NavModule,
		HeaderModule,
	],
	bootstrap: [
		AppComponent,
	]
})
export class AppModule { }
