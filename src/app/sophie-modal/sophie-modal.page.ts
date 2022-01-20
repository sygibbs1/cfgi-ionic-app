import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sophie-modal',
  templateUrl: './sophie-modal.page.html',
  styleUrls: ['./sophie-modal.page.scss'],
})

export class SophieModalPage implements OnInit {

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
