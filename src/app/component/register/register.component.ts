import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [ReactiveFormsModule],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: formBuilder.control('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
      ]),
    });
  }
}
