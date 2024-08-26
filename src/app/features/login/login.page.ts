import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import * as L from 'leaflet';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  map: L.Map | undefined;

  constructor() {}

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
