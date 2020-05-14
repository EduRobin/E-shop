import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CategoriesService} from '../services/categories.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryPage} from '../Modules/CategoryPage.model';
import {Category} from '../Modules/Category.model';
import {Product} from '../Modules/Product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public categories: CategoryPage;
  public productArray: Product[];
  public description: string;


  // tslint:disable-next-line:max-line-length
  constructor(private httpClient: HttpClient, private categoryS: CategoriesService, private route: ActivatedRoute, private router: Router) { }

  getProductLink(id) {
    this.router.navigate(['/product'], {queryParams: {id}});
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.categoryS.getCategory(params.id)
          .subscribe((category: CategoryPage) => {
            this.categories = category;
            this.productArray = category.products;
            this.description = category.category.description;
          });
      });
  }



}
