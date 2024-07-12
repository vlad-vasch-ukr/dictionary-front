import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import { CustomInputComponent } from '../../../shared/components/custom-input/custom-input.component';
import { FieldErrorsComponent } from '../../../shared/components/field-errors/field-errors.component';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    CustomInputComponent,
    FormsModule,
    ReactiveFormsModule,
    FieldErrorsComponent
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  firstNameValidators = [Validators.required, Validators.minLength(3)];
  lastNameValidators = [Validators.required, Validators.minLength(3)];
  emailValidators = [Validators.required, Validators.email];
  passwordValidators = [Validators.required, Validators.minLength(5)];
  repeatPasswordValidators = [Validators.required];

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      repeatPassword: [''],
    });
  }

  get firstName(): FormGroup {
    return this.registerForm.get('firstName') as FormGroup;
  }

  onSubmit() {
    this.registerForm.markAllAsTouched();

    if (this.registerForm.valid) {

    }
  }

  ngOnInit() {}

  protected readonly console = console;
}
