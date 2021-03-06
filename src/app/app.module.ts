import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';

@NgModule({
	declarations	: [AppComponent],
	entryComponents	: [],
	imports			: [
		BrowserModule, 
		IonicModule.forRoot(), 
		AppRoutingModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		AppMinimize,
		HTTP,
		{
			provide		: RouteReuseStrategy, 
			useClass	: IonicRouteStrategy 
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
