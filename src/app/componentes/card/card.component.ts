import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalDescricaoItemComponent } from '../modal/descricao-item-modal/modal-descricao-item.component';
import { BD_VIRTUAL_STORE, EMPTY_PRODUCT, findById, Product } from '../shared/store';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product: Product = EMPTY_PRODUCT;

  public products: Product[] = BD_VIRTUAL_STORE;
  public listCategory!: string[];

  public produtoId!: string;

  constructor(
    private readonly dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
  }

  openModal(product: Product): void {
    this.produtoId = this.activatedRoute.snapshot.params['produtoId'];
    this.products = this.similiarProducts(this.produtoId);
    this.dialog.open(ModalDescricaoItemComponent, {
      minWidth: '100px',
      data: { product: product, products: this.products },
    });
  }

  similiarProducts(id: string): Product[] {
    return BD_VIRTUAL_STORE.filter((p) => p.id !== id).filter(
      (p) => p.category === this.product?.category
    );
  }
}
