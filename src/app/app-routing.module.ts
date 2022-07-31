import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './cliente/login/login.component';
import { BodyComponent } from './componentes/store/body.component';
import { AddProductComponent } from './produtos/add-product/add-product.component';
import { TodosOsProdutosComponent } from './produtos/todos-os-produtos/todos-os-produtos.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'todos-os-produtos',
    component: TodosOsProdutosComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
