import { NgModule } from '@angular/core';


import { MemoryCardPageComponent } from './components/memory-card-page/memory-card-page.component';
import { MemoryCardItemComponent } from './components/memory-card-item/memory-card-item.component';
import { MemoryCardRoutingModule } from './memory-card-routing.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MemoryCardRoutingModule,
    NzDropDownModule,
    NzGridModule,
    CommonModule,
  ],
  declarations: [
    MemoryCardPageComponent,
    MemoryCardItemComponent,

  ],
  exports: [],
})
export class MemoryCartModule { }
