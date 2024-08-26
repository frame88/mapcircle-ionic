import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { gsap } from 'gsap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SplashPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    this.animateLogo();
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 3500);
  }

  animateLogo() {
    gsap.fromTo('.logo', 
      { opacity: 0, y: 300 }, 
      { opacity: 1, y: 0, duration: 1.7, ease: 'elastic.out', scale: 1 } )
  }

}
