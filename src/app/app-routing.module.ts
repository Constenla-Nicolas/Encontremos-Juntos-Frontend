import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { UnmarkComponent } from './unmark/unmark.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    // component: PreloadAllModules,
 
    pathMatch: 'full',
 
  },
  {
    path:'unmark',
    component:UnmarkComponent
  },
  {
    path:"list",
    component: ListComponent
  },
  {
    path:"add",
    component:ListComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
