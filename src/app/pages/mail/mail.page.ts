import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AccountPage } from '../account/account.page';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss'],
})
export class MailPage implements OnInit {
  emails = [];

  constructor(private http: HttpClient, private popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<any[]>('./assets/data.json').subscribe(res => {
      this.emails = res;
      console.log(res);
    });
  }

  async openAccount(ev) {
    const popover = await this.popoverCtrl.create({
      component: AccountPage,
      event: ev,
      cssClass: 'custom-popover'
    });

    await popover.present();
  }

}
