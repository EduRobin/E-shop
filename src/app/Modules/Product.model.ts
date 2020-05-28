import {Image} from './Image.model';

export class Product {
  // tslint:disable-next-line:max-line-length
  constructor(public title: string, public description: string, public images: Image[], public id: number, public price: number,
              public parameters: string) {
  }
}
