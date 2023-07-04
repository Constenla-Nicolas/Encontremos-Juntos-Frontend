import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss' ],
})
export class AppComponent {
  public appPages = [
    { title: 'Mostrar mapa', url: '/folder/inbox', icon: 'mail' },
    { title: 'Listar', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Desmarcar', url: '/folder/favorites', icon: 'heart' },
    { title: 'Contactar', url: '/folder/archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
  

  ];

   
  constructor() {};
 
}
