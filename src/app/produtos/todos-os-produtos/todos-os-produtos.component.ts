import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {
  Product,
  findById,
  BD_VIRTUAL_STORE,
} from 'src/app/componentes/shared/store';
import { BodyComponent } from 'src/app/componentes/store/body.component';

@Component({
  selector: 'app-todos-os-produtos',
  templateUrl: './todos-os-produtos.component.html',
  styleUrls: ['./todos-os-produtos.component.scss'],
})
export class TodosOsProdutosComponent implements OnInit {
  public formCategory!: FormGroup;

  public produtoId!: string;
  public product!: Product | undefined;
  public products: Product[] = BD_VIRTUAL_STORE;
  public listProductsByCategory$ = new BehaviorSubject<Product[]>([]);
  public listCategory: string[] = [];

  public activeCategory: string[] = [];
  public activeProduct: any[] = [];

  public set listProductsByCategory(value: Product[]) {
    this.listProductsByCategory$.next(value);
  }

  public get listProductsByCategory(): Product[] {
    return this.listProductsByCategory$.getValue();
  }

  constructor(private readonly formBuilder: FormBuilder) {
    this.formCategory = this.formBuilder.group({
      category: '',
    });

    this.listProductsByCategory = this.products;
  }

  ngOnInit(): void {
    this.listCategory = [...new Set(this.products.map((p) => p.category))];
  }

  productsByCategory(category: string) {
    if (this.activeCategory.some((c) => c === category)) {
      this.activeCategory.splice(this.activeCategory.indexOf(category), 1);
      this.activeProduct
        .filter((p) => p.category === category)
        .forEach(() => this.activeProduct.pop());
    } else {
      this.activeCategory.push(category);
      this.products
        .filter((p) => p.category === category)
        .forEach((p) => {
          this.activeProduct.push(p);
        });
    }

    if (this.listProductsByCategory.length > 0)
      this.listProductsByCategory = this.activeProduct;
    else this.listProductsByCategory = this.products;
  }
}
