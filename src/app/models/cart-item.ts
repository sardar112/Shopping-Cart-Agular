import { Product } from "./product";

export class CartItem {
     id:number;
     prodId:number;
     prodTitle:string;
     qty:number;
     price:number;

constructor(id: number, product:Product, qty=1){
    this.id=id;
    this.prodId=product.id;
    this.prodTitle=product.title;
    this.price=product.price;
    this.qty=qty;

}
}

