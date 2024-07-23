import { Component, Input, TemplateRef } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field-errors',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './field-errors.component.html',
  styleUrl: './field-errors.component.scss'
})
export class FieldErrorsComponent {
  @Input() required?: boolean;
  @Input() email?: boolean;
  @Input() minLength?: number;
  @Input() maxLength?: number;
  @Input() field!: FormGroup;
}
