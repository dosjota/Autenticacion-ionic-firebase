import { Injectable } from '@angular/core';

// AngularFire2 y Firebase en lugar de @angular/http
import { AngularFire } from 'angularfire2';
import firebase from 'firebase';

/*
Generated class for the Auth provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {
	fireAuth: any;
	constructor(public af: AngularFire) {
		af.auth.subscribe( user => {
			if (user) { this.fireAuth = user.auth; }
		});
	}

	// Crear Nueva Cuenta
	// parametros: Email, Password
	signup(newEmail: string, newPassword: string): firebase.Promise<any> {
		return this.af.auth.createUser({
			email: newEmail,
			password: newPassword
		});
	}

	// Iniciar Sesión
	// parametros: Email, Password
	login(newEmail: string, newPassword: string): firebase.Promise<any> {
		return this.af.auth.login({
			email: newEmail,
			password: newPassword
		});
	}

	// Reestablecer Contraseña
	// parametros: Email
	resetPassword(email: string): firebase.Promise<any> {
		// Con AngularFire2 no se pueden enviar Correos, sin embargo SDK de FireBase si
		// Firebase se encarga de enviar el correo
		return firebase.auth().sendPasswordResetEmail(email);
	}

	// Cerrar Sesión
	logout(): firebase.Promise<any> {
		return this.af.auth.logout();
	}




}
