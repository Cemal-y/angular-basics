import {Injectable} from '@angular/core';
import {IProduct} from './products';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'assets/products.json';
  product: IProduct;
  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
      .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProductById(id: number): Observable<IProduct>{
    return this.getProducts().pipe(
    map(products => products.find(product => product.productId === id))
    );
  }
  // addProduct(){
  //   this.http.post<IProduct>(this.productUrl, { title: 'Angular POST Request Example' })
  //     .subscribe(data => {
  //         this.product.productId = data.productId;
  //         this.product.productName = data.productName;
  //         this.product.description = data.description;
  //         this.product.price = data.price;
  //         this.product.starRating = data.starRating;
  //         this.product.releaseDate = data.releaseDate;
  //         this.product.productCode = data.productCode;
  //       }
  //     );
  // }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
