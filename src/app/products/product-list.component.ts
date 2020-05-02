import {Component, OnInit} from '@angular/core';
import {IProduct} from './products';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
  // providers: [ProductService]
})
export class ProductListComponent implements OnInit{
  // tslint:disable-next-line:variable-name
  _filteredProducts: IProduct[] = [];
  clickedRating: string;
  products: IProduct[] = [];
  errorMessage: '';
  filterText = '';
  productToAdd: IProduct;
  constructor(private productService: ProductService) {
    this.productService = productService;
  }
  get filteredProducts(): IProduct[] {
    this.filter();
    return this._filteredProducts;
  }

  set filteredProducts(value: IProduct[]) {
    this._filteredProducts = value;
  }

  filter(): void{
    this.filteredProducts = this.products.filter(product => product.productName.toLowerCase()
      .includes(this.filterText.toLowerCase()));
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
    // this.productService.getProducts().subscribe()
  }


  onRatingClicked(message: string) {
    this.clickedRating = message;
  }
}
