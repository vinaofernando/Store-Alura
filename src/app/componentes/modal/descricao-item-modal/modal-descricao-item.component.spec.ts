import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDescricaoItemComponent } from './modal-descricao-item.component';

describe('ModalDescricaoItemComponent', () => {
  let component: ModalDescricaoItemComponent;
  let fixture: ComponentFixture<ModalDescricaoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDescricaoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDescricaoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
