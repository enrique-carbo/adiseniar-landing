import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisenoComponent } from './pages/diseno/diseno.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { WebComponent } from './pages/web/web.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'ADiseniar - Inicio' },
  { path: 'diseno', component: DisenoComponent, title: 'ADiseniar - Logos' },
  { path: 'web', component: WebComponent, title: 'ADiseniar - Web' },
  { path: 'portfolio', component: PortfolioComponent, title: 'ADiseniar - Portfolio' },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  //{ path: '**', component: Error404Component, title: 'Error 404' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
