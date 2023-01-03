import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  booleano = false;

  togglemenu(): void {
    this.booleano = !this.booleano;
  }

}
