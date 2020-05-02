import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list.component';
import {ConvertToSpacesPipe} from '../convert-to-spaces.pipe';
import {StarComponent} from '../star/star.component';
import {ProductDetailComponent} from './product-detail.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
