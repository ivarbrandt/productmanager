import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductService } from './services/product.service';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { SelectedProductPageComponent } from './selected-product-page/selected-product-page.component';
import { CreateProductPageComponent } from './create-product-page/create-product-page.component';
import { EditProductPageComponent } from './edit-product-page/edit-product-page.component';
import { ListProductPageComponent } from './list-product-page/list-product-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SelectedProductPageComponent,
    CreateProductPageComponent,
    EditProductPageComponent,
    ListProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
