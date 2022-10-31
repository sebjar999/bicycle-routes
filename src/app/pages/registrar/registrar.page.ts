import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  usuario: any;
  nombre = '';

  constructor(private alertCtrl: AlertController) {
    this.usuario = {
      name: '',
      additionalName: '',
      familyName: '',
      email: '',
      password: '',
      sex: ''
    };
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenido a bike interaction',
      subHeader: 'Aqui podras crear o iniciar rutas',
      buttons: ['OK']
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  onSubmit() {
    console.log(this.usuario);
  }

}
