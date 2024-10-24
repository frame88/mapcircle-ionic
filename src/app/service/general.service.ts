import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private router: Router) { }

  // Funzione per navigare a una rotta basata su una stringa
  vamos(route: string) {
    this.router.navigate([route]);
  }
}
