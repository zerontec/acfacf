import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

// services

import {ProductService } from '../../../services/product.service';
import { ToastrService} from 'ngx-toastr';

// Product class

import {Product} from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, private toatr:ToastrService) { }

  ngOnInit() {

    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm: NgForm) {
    if (productForm.value.$key == null)
    this.productService.insertProduct(productForm.value)

    else
this.productService.updateProduct(productForm.value);


this.resetForm(productForm);
this.toatr.success('succesful operation', 'Product edit ');
}


  resetForm(productForm?: NgForm) {

    if(productForm != null)
    productForm.reset();
    this.productService.selectedProduct = new Product();
  }
}
