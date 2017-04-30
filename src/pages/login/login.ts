import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { Auth } from '../../providers/auth';

import { HomePage } from '../home/home';
import { PasswordResetPage } from '../password-reset/password-reset';
import { SignupPage } from '../signup/signup';

/*
Generated class for the Login page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {

	//public formLogin;
	email: any;
	password: any;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public toastCtrl: ToastController,
		public auth: Auth) {}

	ionViewDidLoad() {}
	msgToast(msg){
		let toast = this.toastCtrl.create({
			message: msg,
			showCloseButton: true,
			dismissOnPageChange: true,
			closeButtonText: 'Ok'
		});
		toast.present();
	}
	logIn(){

			this.auth.login(this.email, this.password)
			.then (auth => {
				this.navCtrl.setRoot(HomePage);
			})
			.catch((error: any) => {
				console.log("ha ocurrido un error: " + JSON.stringify(error));

				var errorCode = error.code;
				var mensaje = '';

				//mensajes en caso de error en auth firebase
				switch (errorCode) {
					case 'undefined':
					mensaje = 'Por Favor ingrese sus credenciales';
					break;

					case 'auth/invalid-email':
					mensaje = 'El Email Ingresado es Invalido';
					break;

					case 'auth/user-not-found':
					mensaje = 'El Email Ingresado no se encuentra registrado';
					break;

					case 'auth/wrong-password':
					mensaje = 'Contraseña Incorrecta';
					break;

					case 'auth/user-disabled':
					mensaje = 'La cuenta ha sido Inhabilitada';
					break;

					case 'auth/email-already-in-use':
					mensaje = 'Correo Ingresado ya se encuentra Registrado, Prueba restablecer la contraseña';
					break;

					default:
					mensaje = 'Por Favor, Verifica tus Datos e intentalo nuevamente!';
				}

				this.msgToast(mensaje);
			})

	}

	passwordResetPage(){ this.navCtrl.push(PasswordResetPage); }
	signupPage(){ this.navCtrl.push(SignupPage); }


}
