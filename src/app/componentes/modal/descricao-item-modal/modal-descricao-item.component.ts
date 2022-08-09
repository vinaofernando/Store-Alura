import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faDoorClosed, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CarteiraResultadosModal } from './modal-descricao-item.types';

@Component({
  selector: 'app-modal-descricao-item',
  templateUrl: './modal-descricao-item.component.html',
  styleUrls: ['./modal-descricao-item.component.scss']
})
export class ModalDescricaoItemComponent implements OnInit {
  faDoorClosed = faTimes


  constructor(public dialogRef: MatDialogRef<ModalDescricaoItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CarteiraResultadosModal, 
    ) { }

  ngOnInit(): void {
    
  }
  
  close(){
    this.dialogRef.close(this.data)
  }
}
