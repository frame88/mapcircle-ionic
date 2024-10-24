import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GeneralService } from '../../service/general.service';

@Component({
  selector: 'app-fork',
  templateUrl: './fork.component.html',
  styleUrl: './fork.component.css'
})
export class ForkComponent implements OnInit, AfterViewInit {
private L: any; // Variabile per memorizzare l'oggetto Leaflet

  constructor(public general:GeneralService) { }

  ngOnInit(): void {
    // Puoi eseguire altre inizializzazioni qui
  }

  async ngAfterViewInit(): Promise<void> {
    // Controlla se `window` è definito
    if (typeof window !== 'undefined') {
      // Importa Leaflet dinamicamente
      const { default: L } = await import('leaflet');
      this.L = L;
      this.initMap();
    }
  }

  private initMap(): void {
    // Usa `this.L` invece di `L`
    const map = this.L.map('map', {
      center: [41.9028, 12.4964],
      zoom: 13
    });

    this.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  }
}
