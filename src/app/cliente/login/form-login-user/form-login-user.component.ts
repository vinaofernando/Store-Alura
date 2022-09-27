import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-login-user',
  templateUrl: './form-login-user.component.html',
  styleUrls: ['./form-login-user.component.scss'],
})
export class FormLoginUserComponent implements OnInit {
  @Output() formData: EventEmitter<{
    email: string;
    password: string;
  }> = new EventEmitter();

  public form!: FormGroup;

  public hide = true;

  @Input() public registerUser = false;

  get email() {
    return this.form.get('email')?.value;
  }

  get password() {
    return this.form.get('password')?.value;
  }

  get passwordVerification() {
    return this.form.get('passwordVerification')?.value;
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordVerification: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerUser === true) {
      if (this.passwordVerification === this.password)
        this.formData.emit(this.form.value);
      else this._snackBar.open('As duas senhas devem ser iguais', 'close');
    } else this.formData.emit(this.form.value);
  }
}
