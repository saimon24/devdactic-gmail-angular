import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }
 
  ngOnInit() {}
 
  close() {
    this.popoverCtrl.dismiss();
  }
}
