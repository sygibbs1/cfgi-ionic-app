import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-david-modal',
  templateUrl: './david-modal.page.html',
  styleUrls: ['./david-modal.page.scss'],
})
export class DavidModalPage implements OnInit {

  @Input() name: string;

  constructor(
    private modalCtr: ModalController,
  ) { }

  ngOnInit() { }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }

}
