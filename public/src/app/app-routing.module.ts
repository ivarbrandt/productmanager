import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SelectedProductPageComponent } from './selected-product-page/selected-product-page.component';
import { EditProductPageComponent } from './edit-product-page/edit-product-page.component';
import { CreateProductPageComponent } from './create-product-page/create-product-page.component';
import { ListProductPageComponent } from './list-product-page/list-product-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: SelectedProductPageComponent, children: [
    { path: 'edit/:id', component: EditProductPageComponent},
    { path: 'new', component: CreateProductPageComponent },
    { path: '', component: ListProductPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
