import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../Modules/Product.model';


@Component({
  selector: 'app-kosik',
  templateUrl: './kosik.component.html',
  styleUrls: ['./kosik.component.scss']
})
export class KosikComponent implements OnInit {

  public poleKosiku = [];
  public pay: number;

  constructor(private httpClient: HttpClient, private productS: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  this.route.queryParams.subscribe( i => {
    this.productS.getProduct(i.id).subscribe( (data: Product) => {
      this.poleKosiku.push(data);
      localStorage.setItem('storage1', JSON.stringify(this.poleKosiku));
      const storage = localStorage.getItem('storage1');
      this.poleKosiku = JSON.parse(storage);
    });
  });
  const storage2 = localStorage.getItem('storage1');
  this.poleKosiku = JSON.parse(storage2);
  const cena = this.poleKosiku.map(temp => temp.price).reduce((a, b) => a + b, 0);
  this.pay = cena;
  }

  getProduktID(id: number) {
    this.router.navigate(['/product'], {queryParams: {id}});
  }

}
