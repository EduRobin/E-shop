import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CategoriesService} from '../services/categories.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryPage} from '../Modules/CategoryPage.model';
import {Product} from '../Modules/Product.model';
import {ProductService} from '../services/product.service';
import * as md from 'markdown-it';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public categories: CategoryPage;
  public productArray: Product[];
  public description: string;
  public pagesCount: number;
  public categoryId: number;
  public name: string;




  // tslint:disable-next-line:max-line-length
  constructor(private httpClient: HttpClient, private categoryS: CategoriesService, private route: ActivatedRoute, private router: Router, private products: ProductService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.categoryS.getCategory(params.id)
          .subscribe((data: CategoryPage) => {
            this.categories = data;
            console.log(data);
            this.name = data.category.name;
            this.productArray = data.products;
            this.description = data.category.description;
            this.productArray = data.products;
            this.pagesCount = data.pagesCount + 1;
            this.categoryId = data.category.id;
            const result = md().renderInline(this.description);
            this.description = result;
          });
      });
  }

  getProduct(id: number) {
    this.router.navigate(['/product'], {queryParams: {id}});
  }

  clickPage(id: number, page: number) {
    this.categoryS.getProductPage(id, page).subscribe(
      (data: CategoryPage) => {
        console.log(data);
        this.productArray = data.products;
      }, (error) => {

      }
    );
  }
  get pageCount(): Array<number> {
    console.log(Array.from(new Array(this.pagesCount).keys()));
    return Array.from(new Array(this.pagesCount).keys());
  }



}
