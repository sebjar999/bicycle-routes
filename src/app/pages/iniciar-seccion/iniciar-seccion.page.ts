import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-iniciar-seccion',
  templateUrl: './iniciar-seccion.page.html',
  styleUrls: ['./iniciar-seccion.page.scss'],
})
export class IniciarSeccionPage implements OnInit {
  usuario: any;
  constructor(private alertCtrl: AlertController) {
    this.usuario = {
      email: '',
      password: '',
    };

  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenido de nuevo',
      subHeader: 'Es bueno volverte a ver',
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
