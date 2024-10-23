import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private nzModalService: NzModalService) {}

  openModal(component: any, data: any): void {
    const modal =this.nzModalService.create({
      nzContent: component,
      nzOnOk: () => this.closeModal(),
      nzOnCancel: () => this.closeModal(),
    });
    (<ModalComponent>modal.componentInstance).title = data.title;
    (<ModalComponent>modal.componentInstance).content = data.content;
  }

  closeModal(): void {
    this.nzModalService.closeAll(); // Closes all open modals
  }
}
