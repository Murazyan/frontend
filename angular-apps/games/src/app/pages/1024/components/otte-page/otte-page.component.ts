import { Component, inject } from '@angular/core';
import { OtteService } from '../../services/otte.service';

@Component({
  selector: 'app-otte-page',
  templateUrl: './otte-page.component.html',
  styleUrl: './otte-page.component.scss'
})
export class OttePageComponent  {

  protected otteService: OtteService =  inject(OtteService)
  hGutter = 16;
  vGutter = 16;
  count = 4;
  array = new Array(this.count);

  constructor(){
    this.otteService.initObjectModel();
  }


}
