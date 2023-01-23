import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { DisenoComponent } from './pages/diseno/diseno.component';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { WebComponent } from './pages/web/web.component';


const routes: Routes = [
  { path: '', component: HomeComponent, title: 'ADiseniar - Inicio' },
  { path: 'diseno', component: DisenoComponent, title: 'ADiseniar - Logos' },
  { path: 'web', component: WebComponent, title: 'ADiseniar - Web' },
  { path: 'portfolio', component: PortfolioComponent, title: 'ADiseniar - Portfolio' },
  { path: 'contact', component: ContactComponent, title: 'ADiseniar - Contacto' },
  { path: '**', component: Page404Component, title: 'Error 404' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
