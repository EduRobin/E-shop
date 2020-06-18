import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from '../Modules/Category.model';
import AccessToken from '../AccessToken';
import {CategoryPage} from '../Modules/CategoryPage.model';
import {Product} from '../Modules/Product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  getCategories() {
    const headers = new HttpHeaders().set('access-token', AccessToken.token);

    return this.httpClient.get<Category[]>('/api/categories/', {headers});
  }

  getCategory(id: number) {
    const headers = new HttpHeaders().set('access-token', AccessToken.token);

    return this.httpClient.get<CategoryPage>('/api/categories/' + id, {headers});
  }
  getProductPage(id: number, page: number) {
    const headers = new HttpHeaders()
      .set('access-token', AccessToken.token);

    return this.httpClient.get<CategoryPage>('/api/categories/' + id + '/?page=' + page, {headers});
  }
}
