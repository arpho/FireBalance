import { Component, OnInit,Input } from '@angular/core';
import { ShoppingCart }  from '../../pages/listing/listing.model';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  //styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() shoppingCart:ShoppingCart;
  constructor() { }

  ngOnInit() {
  }

   goToShoppingCart(id: string) {
    console.log("clicked gotoShoppingCart",id);
  }

}
