import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import AccessToken from '../AccessToken';
import {CategoryPage} from '../Modules/CategoryPage.model';
import {Product} from '../Modules/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProduct(id: number) {
    const headers = new HttpHeaders().set('access-token', AccessToken.token);

    return this.httpClient.get<Product>('/api/products/' + id, {headers});
  }

}



