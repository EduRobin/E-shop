import {Category} from './Category.model';
import {Product} from './Product.model';

export class CategoryPage {
  constructor(public pagesCount: number, public products: Product[], public category: Category) { }
}
