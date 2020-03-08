import {
  Directive, Input, Output, EventEmitter, ElementRef,
  HostListener, Renderer2, ViewContainerRef, ComponentFactoryResolver, OnInit, OnChanges
} from '@angular/core';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

@Directive({
  selector: '[modal-box]'
})
export class ModalDirective implements OnInit, OnChanges {
  @Input() title: string;
  @Input() componentData: string;
  @Input() componentName: string;
  modalElement: any;

  constructor(
    private el: ElementRef,
    private ren: Renderer2,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  @HostListener('click', ['$event'])

  /* modal create */
  openModal() {
    console.log('Modal directive is called.');
    this.modalElement = this.el.nativeElement;
    console.log('modalElement => ', this.modalElement);
    this.ren.setAttribute(this.modalElement, 'tabindex', '0');
    this.ren.setAttribute(this.modalElement, 'aria-haspopup', 'true');
    this.createModalDialog(ModalDialogComponent);
  }

  createModalDialog(modalDialogComponent) {
    console.log('CreateModalDialog is called');
    this.viewContainer.clear();
    const modalDialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(modalDialogComponent);
    const modalDialogComponentRef = this.viewContainer.createComponent(modalDialogComponentFactory);
    modalDialogComponentRef.instance['title'] = this.title;
    modalDialogComponentRef.instance['componentData'] = this.componentData;
    modalDialogComponentRef.instance['componentName'] = this.componentName;
    modalDialogComponentRef.instance['close'].subscribe(event => {
      if (event === 'close') {
        console.log(this.el.nativeElement);
        this.el.nativeElement.focus();
      }
    });
    return modalDialogComponentRef;
  }

  @HostListener('blur', ['$event.target'])
  onblur(target: any) {
    console.log('Focus called from HostListener');
  }


}
