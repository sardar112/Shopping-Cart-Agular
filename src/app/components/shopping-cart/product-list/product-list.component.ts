import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService} from '../../../services/product.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[]=[];
  constructor(private prodService: ProductService) { }

  ngOnInit(): void {
    this.prodService.getProducts().subscribe((prod) =>{
      this.products = prod;
    });
  }

}
