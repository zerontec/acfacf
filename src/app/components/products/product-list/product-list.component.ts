import { Component, OnInit } from '@angular/core';


//services

import {ProductService} from '../../../services/product.service';
import {ToastrService} from 'ngx-toastr';

//class product
import { Product } from '../../../models/product';

import { element } from 'protractor';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(private productservices: ProductService, private toatr:ToastrService) { }

  ngOnInit() {
this.productservices.getProducts()
.snapshotChanges()
.subscribe(item => {
  this.productList = [];
  item.forEach(element => {
    let x = element.payload.toJSON();
    x["$key"] = element.key;
    this.productList.push(x as Product);
  });


});

  }

  onEdit(product:Product){
    this.productservices.selectedProduct = Object.assign({}, product);

  }

  onDelete($key:string){
    if (confirm('Are you sure to delete it?')){
    this.productservices.deleteProduct($key);
 
    this.toatr.success('Sucees full operation', ' Product Deleted');


  }

}
}