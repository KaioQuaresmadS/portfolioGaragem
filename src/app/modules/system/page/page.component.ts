import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from '../hero/hero.component';
import { GaragePageComponent } from '../../garage/garage-page/garage-page.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
