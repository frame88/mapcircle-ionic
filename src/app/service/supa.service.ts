import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SupaService {
  private supabase_client: SupabaseClient | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  initialize() {
    // Only initialize if we're in the browser (not SSR)
    if (isPlatformBrowser(this.platformId) && !this.supabase_client) {
      this.supabase_client = createClient(
        environment.supabase.url,
        environment.supabase.key
      );
    }
  }

  // Sign up
  signUp(email: string, password: string) {
    if (this.supabase_client) {
      return this.supabase_client.auth.signUp({ email, password });
    }
    return Promise.reject('Supabase client is not initialized');
  }

  // Sign in
  signIn(email: string, password: string) {
    if (this.supabase_client) {
      return this.supabase_client.auth.signInWithPassword({ email, password });
    }
    return Promise.reject('Supabase client is not initialized');
  }
}
