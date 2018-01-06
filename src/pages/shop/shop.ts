import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CheckoutPage } from './checkout/checkout';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  constructor(public navCtrl: NavController) {}

  goToCheckout() {
    this.navCtrl.push(CheckoutPage);
  }

  // ProductData - object with two fields.
  buyProduct(productData: {name: string, quatity: number}) {
    this.navCtrl.push(CheckoutPage, productData);
  }
}
