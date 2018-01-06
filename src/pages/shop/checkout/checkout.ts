import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage implements OnInit {

  productData: {name: string, quantity: number};

  ngOnInit(): void {
    this.productData = this.navParams.data;
  }

  constructor(private navCtrl: NavController,
              private navParams: NavParams) {}

  onConfirmPurchase() {
    this.navCtrl.popToRoot();
  }
}
