import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SupaService {
  private supabase_client: SupabaseClient;
  constructor() {
    this.supabase_client = createClient(
      environment.supabase.url,
      environment.supabase.key
    );
  }

  //  register
  signUp(email: string, password: string) {
    return this.supabase_client.auth.signUp({ email, password });
  }

  //  login
  signIn(email: string, password: string) {
    return this.supabase_client.auth.signInWithPassword({ email, password });
  }
}
