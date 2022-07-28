import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'images'},
  {path: 'images', loadChildren: ()=> import('./modules/image/image.module').then(m => m.ImageModule)},
  {path: '**', pathMatch: 'full', redirectTo: 'images'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
