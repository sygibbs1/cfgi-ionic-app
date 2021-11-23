import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-request-aid',
  templateUrl: './request-aid.page.html',
  styleUrls: ['./request-aid.page.scss'],
})
export class RequestAidPage implements OnInit {

  constructor(private atrCtrl: AlertController) { }

  async showAlert() {
    const alert = await this.atrCtrl.create({
      header: 'Terms and Conditions',
      message: 'Need more info.',
      buttons: ['Dismiss']
    });
    await alert.present();
  }
  ngOnInit() {
  }

}
