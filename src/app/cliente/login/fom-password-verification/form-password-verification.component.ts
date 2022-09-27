import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-form-password-verification',
  templateUrl: './form-password-verification.component.html',
  styleUrls: ['./form-password-verification.component.scss']
})
export class FormPasswordVerificationComponent implements OnInit {
  @Output() formData: EventEmitter<string> = new EventEmitter();

  public form!: FormGroup;

  get email() {
    return this.form.get('email')?.value;
  
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.formData.emit(this.form.value);
  }



}
