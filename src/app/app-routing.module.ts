import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './cliente/login/forgot-password/forgot-password.component';
import { LoginComponent } from './cliente/login/login-user/login.component';
import { RegisterUserComponent } from './cliente/login/register-user/register-user.component';
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
  { path: 'register',
   component: RegisterUserComponent 
  },
  { path: 'forgot-password',
   component: ForgotPasswordComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
