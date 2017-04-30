import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

//Paginas
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PasswordResetPage } from '../pages/password-reset/password-reset';

// Providers
import { Auth } from '../providers/auth';

/* AngularFire2
Docs: https://github.com/angular/angularfire2 */
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';



const configFirebase = {
	apiKey: "AIzaSyAHYChc-VaKnHcbG6s4fjQLLVJrpQ-or_8",
	authDomain: "app-plano.firebaseapp.com",
	databaseURL: "https://app-plano.firebaseio.com",
	storageBucket: "app-plano.appspot.com",
	messagingSenderId: "563025842655"
}
const configFirebaseAuth = {
	provider: AuthProviders.Password,
	method: AuthMethods.Password
}

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		LoginPage,
		SignupPage,
		PasswordResetPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(configFirebase,configFirebaseAuth)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		LoginPage,
		SignupPage,
		PasswordResetPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		Auth
	]
})
export class AppModule {}
