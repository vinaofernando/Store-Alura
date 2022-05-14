import { Component, Input, OnInit } from '@angular/core';
import { BD_VIRTUAL_STORE, Product } from 'src/app/componentes/shared/store';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  @Input() product!: any;
  constructor() {}

  ngOnInit(): void {}
}
