import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoriesService} from '../services/categories.service';
import {ActivatedRoute, Router} from '@angular/router';

import {ProductService} from '../services/product.service';
import {Product} from '../Modules/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product: Product;
  public title: string;


  constructor(private httpClient: HttpClient, private productS: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(tmp => {
        this.productS.getProduct(tmp.id)
          .subscribe((data: Product) => {
            this.product = data;
            console.log(this.product);
          });
      });
  }



}
