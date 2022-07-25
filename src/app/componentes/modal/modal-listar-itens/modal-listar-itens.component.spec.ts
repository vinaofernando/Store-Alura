import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListarItensComponent } from './modal-listar-itens.component';

describe('ModalListarItensComponent', () => {
  let component: ModalListarItensComponent;
  let fixture: ComponentFixture<ModalListarItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalListarItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListarItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
