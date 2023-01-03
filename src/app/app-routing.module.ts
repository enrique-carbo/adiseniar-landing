import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisenoComponent } from './pages/diseno/diseno.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'ADiseniar - Inicio' },
  { path: 'diseno', component: DisenoComponent, title: 'ADiseniar - Logos' },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  //{ path: '**', component: Error404Component, title: 'Error 404' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
