import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupaService } from '../../service/supa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: SupaService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
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
      .signIn(this.loginForm.value.email, this.loginForm.value.password)
      .then((res) => {
        console.log(res);
        if (res.data.user?.role === 'authenticated') {
          this.router.navigate(['/dashboard']);
        }
      })
      .catch((err) => console.log(err));
  }
}
