import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/store';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {
    console.log(this.product);
  }
}
