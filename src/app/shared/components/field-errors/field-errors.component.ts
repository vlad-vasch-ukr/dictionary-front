import { Component, Input } from '@angular/core';
import { NgIf } from "@angular/common";

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
  @Input() errorName!: string;
  @Input() minLength!: number;
  @Input() maxLength!: number;
}
