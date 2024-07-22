import {booleanAttribute, Component, Input, OnInit} from '@angular/core';
import { FormGroup, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { FieldErrorsComponent } from '../field-errors/field-errors.component';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  templateUrl: './custom-input.component.html',
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgClass,
    FieldErrorsComponent
  ],
  styleUrl: './custom-input.component.scss'
})
export class CustomInputComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() label!: string;
  @Input() inputClass!: string;
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() disabled!: boolean;
  @Input() type: string = 'text';
  @Input() validators: ValidatorFn[] = [];
  @Input() errorMessage!: string;
  @Input({ transform: booleanAttribute }) required!: boolean;
  @Input() minLength!: number;
  @Input() maxLength!: number;

  get field(): FormGroup {
    return this.formGroup.get(this.name) as FormGroup;
  }

  ngOnInit() {
    this.formGroup.get(this.name)?.setValidators(this.validators);
    this.formGroup.get(this.name)?.updateValueAndValidity();
  }
}
