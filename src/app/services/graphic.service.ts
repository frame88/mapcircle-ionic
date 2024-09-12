import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GraphicService {

  constructor(private router: Router) { }

  vamos(route: string) {
    this.router.navigateByUrl(`/${route}`); 
  }

}
