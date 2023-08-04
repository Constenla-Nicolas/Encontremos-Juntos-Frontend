import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss' ],
})
export class AppComponent {
  public appPages = [
    { title: 'Mostrar mapa', url: 'folder/inbox', icon: 'map'  },
    { title: 'Listar', url: '/folder/list', icon: 'list' },
    { title: 'Desmarcar', url: '/folder/unmark', icon: 'heart' },
    { title: 'Contactar', url: '/folder/contact', icon: 'mail' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
  

  ];

   
  constructor() {};
 
}
