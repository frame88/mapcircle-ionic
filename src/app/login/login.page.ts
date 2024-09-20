import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-login',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="ion-padding">
        <h1>Supabase + Ionic Angular</h1>
        <p>Sign in via magic link with your email below</p>
      </div>
      <ion-list inset="true">
        <form (ngSubmit)="handleLogin($event)">
          <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input
              [(ngModel)]="email"
              name="email"
              autocomplete
              type="email"
            ></ion-input>
          </ion-item>
          <div class="ion-text-center">
            <ion-button type="submit" fill="clear">Login</ion-button>
          </div>
        </form>
      </ion-list>
    </ion-content>
  `,
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email = '';

  constructor(private readonly supabase: SupabaseService) {}

  async handleLogin(event: any) {
    event.preventDefault();
    const loader = await this.supabase.createLoader();
    await loader.present();
    try {
      const { error } = await this.supabase.signIn(this.email);
      if (error) {
        throw error;
      }
      await loader.dismiss();
      await this.supabase.createNotice('Check your email for the login link!');
    } catch (error: any) {
      await loader.dismiss();
      await this.supabase.createNotice(
        error.error_description || error.message
      );
    }
  }
}
