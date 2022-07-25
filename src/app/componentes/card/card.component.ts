import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalListarItensComponent } from '../modal/modal-listar-itens/modal-listar-itens.component';
import { BD_VIRTUAL_STORE, findById, Product } from '../shared/store';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product!: Product;

  public products: Product[] = BD_VIRTUAL_STORE;
  public listCategory!: string[];

  public produtoId!: string;

  constructor(
    private readonly dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.product.price);
  }

  openModal(product: Product): void {
    this.produtoId = this.activatedRoute.snapshot.params['produtoId'];
    this.products = this.similiarProducts(this.produtoId);

    this.dialog.open(ModalListarItensComponent, {
      minWidth: '100px',
      data: { product, products: this.products },
    });
  }

  similiarProducts(id: string): Product[] {
    return BD_VIRTUAL_STORE.filter((p) => p.id !== id).filter(
      (p) => p.category === this.product?.category
    );
  }
}
