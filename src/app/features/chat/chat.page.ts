import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonItem, IonAvatar, IonLabel, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { pin, share, trash } from 'ionicons/icons';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonItem, IonAvatar, IonLabel, IonItemSliding, IonItemOptions, IonItemOption]
})
export class ChatPage {

  users: { firstName: string, lastName: string }[] = [
    { firstName: 'Mario', lastName: 'Rossi' },
    { firstName: 'Luca', lastName: 'Bianchi' },
    { firstName: 'Giulia', lastName: 'Verdi' },
    { firstName: 'Francesca', lastName: 'Gialli' },
    { firstName: 'Marco', lastName: 'Neri' }
  ];


  constructor() {
    addIcons({ pin, share, trash });
  }

}
