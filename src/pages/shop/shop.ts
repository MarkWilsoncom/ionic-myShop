import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CheckoutPage } from './checkout/checkout';
import { ProductData } from '../../common/productData';

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
  buyProduct(productData: ProductData) {
    this.navCtrl.push(CheckoutPage, productData);
  }
}
