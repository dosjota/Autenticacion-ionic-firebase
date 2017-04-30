import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFire } from 'angularfire2';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage:any; // para que al iniciar no envie a HomePage

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, af: AngularFire) {

		// Observer para comprobar cambios en la autentificaion
		const authObserver = af.auth.subscribe( user => {
			// Si no ha relizado autentificacion
			if(!user){
				this.rootPage = LoginPage;
			}else{
				this.rootPage = HomePage;
			}
			authObserver.unsubscribe();
		});

		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}
}
