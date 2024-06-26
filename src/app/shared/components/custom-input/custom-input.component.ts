import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  templateUrl: './custom-input.component.html',
  imports: [
    ReactiveFormsModule,
    NgIf
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

  ngOnInit() {
    this.formGroup.get(this.name)?.setValidators(this.validators);
    this.formGroup.get(this.name)?.updateValueAndValidity();
  }
}
