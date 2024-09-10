import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  map: L.Map | undefined;
  coupons = [{name: 'zara', value: '10'}]
  isOpen = false;

  constructor(private router: Router) {}

    vamos() {
      this.router.navigateByUrl('/account'); 
    }

    ngOnInit() {
      this.loadMap();
    }

    loadMap() {
    this.map = L.map('mapId', {
      zoom: 18,
      zoomControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 12,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Geolocalizzazione automatica
    this.map.locate({ setView: true, maxZoom: 12, enableHighAccuracy: true });

    this.map.on('locationfound', (e: any) => {
      if(this.map) {
        L.marker(e.latlng).addTo(this.map).bindPopup('La tua posizione').openPopup();
      }
    });
    //errori
    this.map.on('locationerror', (e: any) => {
      alert("Geolocation failed: " + e.message);
    });
  }

}
