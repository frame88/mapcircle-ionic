import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import * as L from 'leaflet';
import { GraphicService } from 'src/app/services/graphic.service';

export interface Voucher {
  name: string; 
  value: number; 
  zona: string;
  coordinate_posto: Coordinate; 
}

export interface Coordinate {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  map: L.Map | undefined;
  isOpen = false;
  coupons: Voucher[] = [];

  constructor(public graphic: GraphicService, private http: HttpClient) {}

    ngOnInit() {
      //creazione mappa
      this.loadMap();
      this.http.get<{ coupons: Voucher[] }>("../../../assets/data.json").subscribe(data =>{
        console.log(data);
        this.coupons = data.coupons;
      })
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
