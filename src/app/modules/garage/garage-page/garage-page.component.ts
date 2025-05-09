import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { DialogCarComponent } from '../../dialog/dialog-car/dialog-car.component';

@Component({
  selector: 'app-garage-page',
  imports: [],
  templateUrl: './garage-page.component.html',
  styleUrl: './garage-page.component.scss'
})
export class GaragePageComponent {

  private dialog = inject(Dialog);

  protected openModal(){
    this.dialog.open(DialogCarComponent);
  }
}
