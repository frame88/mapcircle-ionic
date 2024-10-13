import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupaService } from '../../service/supa.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'], // Correct typo to 'styleUrls'
})
export class RegisterComponent {
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

  public onSubmit() {
    this.auth
      .signUp(this.registerForm.value.email, this.registerForm.value.password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
}
