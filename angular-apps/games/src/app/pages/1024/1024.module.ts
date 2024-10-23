import { NgModule } from '@angular/core';


import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';
import { OttePageComponent } from './components/otte-page/otte-page.component';
import { OTTERoutingModule } from './1024-routing.module';
import { KeyDownDirective } from './directives/key-down.directive';

@NgModule({
  imports: [
    NzDropDownModule,
    NzGridModule,
    CommonModule,
    OTTERoutingModule,
  ],
  declarations: [
    OttePageComponent, 
    KeyDownDirective, 

  ],
  exports: [],
})
export class OTTEModule { }
