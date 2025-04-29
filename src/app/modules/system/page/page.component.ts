import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-page',
  imports: [
    HeaderComponent,
    HeroComponent
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
