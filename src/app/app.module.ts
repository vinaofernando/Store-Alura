import { DEFAULT_CURRENCY_CODE,  LOCALE_ID,  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BodyComponent } from './componentes/store/body.component';
import { CardComponent } from './componentes/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './componentes/footer/footer.component';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './cliente/login/login.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { MatIconModule } from '@angular/material/icon';
import { DescricaoProdutoComponent } from './produtos/descricao-produto/descricao-produto.component';
import { RouterModule } from '@angular/router';
import { ListProductsComponent } from './produtos/list-products/list-products.component';
import { AddProductComponent } from './produtos/add-product/add-product.component';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';


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
    DescricaoProdutoComponent,
    ListProductsComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    MatDialogModule
   
  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}, { provide: LOCALE_ID, useValue: 'pt' },],
  bootstrap: [AppComponent],
})
export class AppModule {}
