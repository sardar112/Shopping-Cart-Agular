import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  constructor(private msg : MessageService,private cart : CartService) { }
  total = 0;
  

  handleSubscription(){
    this.msg.getMessage().subscribe((msg: Product) => {
    
       this.loadCartItems();
      });

  }
  ngOnInit(): void {
    this.handleSubscription();
   this.loadCartItems();
  }
  

  loadCartItems() {
    this.cart.getCartItems().subscribe((items:CartItem[]) => {
      this.cartItems=items;
      this.calculateCartTotal();
  //  console.log(items);
    })
  }

  calculateCartTotal() {
    this.total = 0;
    this.cartItems.forEach((cartItem) => {
    this.total += (cartItem.qty * cartItem.price);
    });
  }

}
   