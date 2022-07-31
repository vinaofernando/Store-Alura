import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public produtoId!: string;
  public product!: Product | undefined;
  public products: Product[] = BD_VIRTUAL_STORE;

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
  
  }
  similiarProducts(id: string): Product[] {
    return BD_VIRTUAL_STORE.filter((p) => p.id != id).filter(
      (p) => p.category === this.product?.category
    );
  }
}
