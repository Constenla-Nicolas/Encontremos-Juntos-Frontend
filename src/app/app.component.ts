import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss' ],
})
export class AppComponent {
  public appPages = [
    { title: 'Mostrar mapa', url: 'folder/inbox', icon: 'map'  },
    { title: 'Listar', url: '/list', icon: 'list' },
    { title: 'Desmarcar', url: '/unmark', icon: 'heart' },
    { title: 'Contactar', url: '/contact', icon: 'mail' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
  

  ];

   
  constructor() {};
  
}
