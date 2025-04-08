import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {

  protected question = ''
  protected element :any;
  protected modalData: ModalData;

  @ViewChild("content", {static: true}) content: ElementRef;

  @Output() yesClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelClicked: EventEmitter<any> = new EventEmitter<any>();

  private modalRef: NgbModalRef;


  constructor(
    private modal: NgbModal
  ) {
  }

  public open(modalData: ModalData) {
    this.modalData = modalData;
    this.element = modalData.element
    this.question = modalData.question;
    this.modalRef = this.modal.open(this.content, {centered: true})
  }

  closeModal() {
    this.modal.dismissAll('Cross click')
    this.question = ''
  }

  handleYesClick() {
    this.closeModal()
    this.yesClicked.emit(this.element)
  }

  handleCancelClick() {
    this.closeModal();
    this.cancelClicked.emit(this.element)

  }

}

export class ModalData{
  question: string;
  element: any;
  showCancelBtn :boolean;
  showOkBtn: boolean;
  okBtnText : string;
  cancelBtnText: string;

      constructor(  
        question: string,
        element: any,
        okBtnText : string,
        cancelBtnText: string,
        showCancelButton :boolean,
        showOkButton: boolean,
      ){
        this.question = question,
        this.element =element,
        this.okBtnText =okBtnText,
        this.cancelBtnText =cancelBtnText,
        this.showCancelBtn = showCancelButton,
        this.showOkBtn = showOkButton
      }


}
