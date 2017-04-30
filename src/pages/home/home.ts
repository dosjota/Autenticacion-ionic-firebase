import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(
		public navCtrl: NavController,
		public auth: Auth,
		public toastCtrl: ToastController) {

	}

	msgToast(msg){
		let toast = this.toastCtrl.create({
			message: 'Ops! : ' + msg,
			showCloseButton: true,
			closeButtonText: 'Ok'
		});
		toast.present();
	}

	// Cerrar sesión y enviar a Pagina de Login
	logOut(){
		this.auth.logout()
		.then( authData => {this.navCtrl.setRoot(LoginPage);})
		.catch((error: any) => {
			console.log('Ops ' + error);
			this.msgToast('Favor Intentalo Nuevamente');
		})
	}
}
