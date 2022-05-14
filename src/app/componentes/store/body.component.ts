import { Component, OnInit } from '@angular/core';
import { BD_VIRTUAL_STORE, Product } from '../shared/store';
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

  constructor() {
    this.listCategory = [...new Set(this.products.map((p) => p.category))];
  }

  ngOnInit(): void {}

  productsByCategory(category: string): Product[] {
    return this.products.filter((p) => p.category === category);
  }
}
