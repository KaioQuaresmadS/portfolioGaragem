import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public photoPerson = signal ([
{
  src: 'assets/img/perfil.jpg',
  alt: 'Foto de perfil',
  title: 'Foto de perfil',
}
  ]);
}
