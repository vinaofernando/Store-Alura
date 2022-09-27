import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { BD_VIRTUAL_STORE } from 'src/app/componentes/shared/store';
import { AddProductComponent } from '../add-product/add-product.component';

import { TodosOsProdutosComponent } from './todos-os-produtos.component';

describe(TodosOsProdutosComponent.name, () => {
  let component: TodosOsProdutosComponent;
  let fixture: ComponentFixture<TodosOsProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosOsProdutosComponent],
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosOsProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${TodosOsProdutosComponent.prototype.productsByCategory.name}, should filter by category`, () => {
    component.productsByCategory('Diversos');
    component.listProductsByCategory$.subscribe((p) => {
      fixture.detectChanges();
      expect(p.every((p) => p.category === 'Diversos')).toBeTruthy();
    });
  });
});
