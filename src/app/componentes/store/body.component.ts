import { Component, OnInit } from '@angular/core';
import { BD_VIRTUAL_STORE, findById, Product } from '../shared/store';
import { ModalListarItensComponent } from '../modal/modal-listar-itens/modal-listar-itens.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  faarrowright = faArrowRight;

  public products: Product[] = BD_VIRTUAL_STORE;
  public listCategory!: string[];

  public produtoId!: string;
  public product!: Product | undefined;

  constructor(private readonly dialog: MatDialog, private activatedRoute: ActivatedRoute) {
    this.listCategory = [...new Set(this.products.map((p) => p.category))];
    
  }

  ngOnInit(): void {}

  productsByCategory(category: string): Product[] {
    return this.products.filter((p) => p.category === category);
  }

  openModal(product: any): void {

    this.produtoId = this.activatedRoute.snapshot.params['produtoId'];
    this.product = findById(this.produtoId);
    this.products = this.similiarProducts(this.produtoId);
    
    this.dialog.open(ModalListarItensComponent, {
      minWidth: '800px',
      data: product,
  })
  }

  similiarProducts(id: string): Product[] {
    return BD_VIRTUAL_STORE.filter((p) => p.id != id).filter(
      (p) => p.category === this.product?.category
    );
  }
}
