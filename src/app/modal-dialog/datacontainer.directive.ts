import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[datacontainer]',
})
export class DatacontainerDirective  {
  constructor(public viewContainerRef: ViewContainerRef) { 

      
  }
}