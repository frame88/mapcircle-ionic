import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupaService } from '../../service/supa.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements AfterViewInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: SupaService) {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ['', [Validators.required, Validators.minLength(7)]],
    });
  }

  // Initialize Supabase client after component is rendered in the browser
  ngAfterViewInit() {
    this.auth.initialize();
  }

  public onSubmit() {
    this.auth
      .signUp(this.registerForm.value.email, this.registerForm.value.password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
}
