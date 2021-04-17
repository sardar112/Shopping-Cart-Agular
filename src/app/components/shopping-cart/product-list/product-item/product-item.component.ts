import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessageService} from './../../../../services/message.service';
import { CartService} from './../../../../services/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private msg : MessageService,private cart : CartService) { }

  @Input() prodItem: Product;

  ngOnInit(): void {
  }
 addToCart() {
this.cart.addProductToCart(this.prodItem).subscribe(()=>{
  this.msg.sendMessage(this.prodItem);
})
  
 }
}
  