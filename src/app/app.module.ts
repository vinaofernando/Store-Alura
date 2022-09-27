import { DEFAULT_CURRENCY_CODE,  LOCALE_ID,  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BodyComponent } from './componentes/store/body.component';
import { CardComponent } from './componentes/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './componentes/footer/footer.component';
import { MatListModule } from '@angular/material/list';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { MatIconModule } from '@angular/material/icon';
import { TodosOsProdutosComponent } from './produtos/todos-os-produtos/todos-os-produtos.component';
import { RouterModule } from '@angular/router';
import { ListProductsComponent } from './produtos/list-products/list-products.component';
import { AddProductComponent } from './produtos/add-product/add-product.component';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ModalDescricaoItemComponent } from './componentes/modal/descricao-item-modal/modal-descricao-item.component';
import {MatButtonModule} from '@angular/material/button'
import { AuthService } from './shared/services/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { FormLoginUserComponent } from './cliente/login/form-login-user/form-login-user.component';
import { LoginComponent } from './cliente/login/login-user/login.component';
import { RegisterUserComponent } from './cliente/login/register-user/register-user.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormPasswordVerificationComponent } from './cliente/login/fom-password-verification/form-password-verification.component';
import { ForgotPasswordComponent } from './cliente/login/forgot-password/forgot-password.component';


registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CardComponent,
    FooterComponent,
    LoginComponent,
    CadastroClienteComponent,
    TodosOsProdutosComponent,
    ListProductsComponent,
    AddProductComponent,
    ModalDescricaoItemComponent,
    FormLoginUserComponent,
    RegisterUserComponent,
    FormPasswordVerificationComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatSnackBarModule
     ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}, { provide: LOCALE_ID, useValue: 'pt' }, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
