import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ProductData } from '../../../common/productData';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage implements OnInit {

  productData: ProductData;

  ngOnInit(): void {
    this.productData = this.navParams.data;
  }

  constructor(private navCtrl: NavController,
              private navParams: NavParams) {}

  onConfirmPurchase() {
    this.navCtrl.popToRoot();
  }
}
