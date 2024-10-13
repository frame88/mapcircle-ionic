import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [ReactiveFormsModule],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder);
}
