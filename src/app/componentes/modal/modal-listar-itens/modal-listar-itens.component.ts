import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faDoorClosed, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CarteiraResultadosModal } from './modal-listar-itens.types';

@Component({
  selector: 'app-modal-listar-itens',
  templateUrl: './modal-listar-itens.component.html',
  styleUrls: ['./modal-listar-itens.component.scss']
})
export class ModalListarItensComponent implements OnInit {
  faDoorClosed = faTimes


  constructor(public dialogRef: MatDialogRef<ModalListarItensComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CarteiraResultadosModal, 
    ) { }

  ngOnInit(): void {
    
  }
  
  close(){
    this.dialogRef.close(this.data)
  }
}
