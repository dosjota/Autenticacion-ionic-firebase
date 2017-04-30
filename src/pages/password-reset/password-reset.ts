import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { Auth } from '../../providers/auth';

import { LoginPage } from '../login/login';
/*
Generated class for the PasswordReset page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
	selector: 'page-password-reset',
	templateUrl: 'password-reset.html'
})
export class PasswordResetPage {

	private email;

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
			toast.onDidDismiss(() => {
				// se carga el login para ingresar directamente y no volver atras
				this.navCtrl.push(LoginPage);
			});
			toast.present();
		}

		//reestablecer contraseña
		//parametro: email
		passwordReset(){
			if(this.email != null){
				this.auth.resetPassword(this.email)
				.then (auth => {
					this.msgToast('Link para reestablecer su contraseña Enviado!!');
				})
				.catch((error: any) => {
					var errorCode = error.code;
					var mensaje = '';
					console.log(error);
					//mensajes en caso de error en auth firebase
					switch (errorCode) {
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
					// mostrar mensaje segun el error
					this.msgToast(mensaje);
				})
			}else{
				this.msgToast('Verificar Datos Ingresados')
			}
		}
	}
