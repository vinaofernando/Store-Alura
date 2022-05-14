import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  faImage = faImage;

  public adicionarProduto: FormGroup;
  public file!: File;
  public preview!: string;

  constructor(private formBuilder: FormBuilder) {
    this.adicionarProduto = this.formBuilder.group({
      file: ['', Validators.required],
      title: ['', Validators.required],
      value: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  gravaArquivo(arquivo: any): void {
    const [file] = arquivo?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (evente: any) => (this.preview = evente.target.result);
    reader.readAsDataURL(file);
  }
}
