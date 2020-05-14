import { Component } from '@angular/core';
import {Category} from './Modules/Category.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CategoriesService} from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-shop';

  public category: Category[];

  constructor(private httpClient: HttpClient, private categoryS: CategoriesService, private router: Router) {
    this.categoryS.getCategories()
      .subscribe(
        (data: Category[]) => {
          this.category = data;
          console.log(data);
        }, (error) =>  {
          console.log(error);
        }
      );
  }

  clickCategory(id) {
    this.router.navigate(['/category'], {queryParams: {id}});
  }
}
