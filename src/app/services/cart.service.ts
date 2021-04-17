import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
const url = 'http://localhost:3000/cart'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }


  getCartItems(): Observable<CartItem[]> {
   return this.http.get<CartItem[]>(url).pipe(
     map((result:any[] )=> {
       let cartItems: CartItem[] = [];
       for(let item of result){
         let prodExists = false;
         for(let i in cartItems){
           if(cartItems[i].prodId === item.product.id){
             cartItems[i].qty++;
             prodExists = true;
             break;
           }
         }
         if(!prodExists){
           cartItems.push(new CartItem(item.id,item.product));
         }

       }
      
      return cartItems;
    })
   );
  }


 addProductToCart(product: Product): Observable<any> {
   return this.http.post<any>(url, {product});
 }

}
