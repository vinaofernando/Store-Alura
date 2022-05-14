import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Product,
  findById,
  BD_VIRTUAL_STORE,
} from 'src/app/componentes/shared/store';
import { BodyComponent } from 'src/app/componentes/store/body.component';

@Component({
  selector: 'app-descricao-produto',
  templateUrl: './descricao-produto.component.html',
  styleUrls: ['./descricao-produto.component.scss'],
})
export class DescricaoProdutoComponent implements OnInit {
  public produtoId!: string;
  public product!: Product | undefined;
  public products: Product[] = BD_VIRTUAL_STORE;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.produtoId = this.activatedRoute.snapshot.params['produtoId'];
    this.product = findById(this.produtoId);
    this.products = this.similiarProducts(this.produtoId);
  }
  similiarProducts(id: string): Product[] {
    return BD_VIRTUAL_STORE.filter((p) => p.id != id).filter(
      (p) => p.category === this.product?.category
    );
  }
}
