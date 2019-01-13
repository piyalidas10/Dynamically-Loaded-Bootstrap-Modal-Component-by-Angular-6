import {
  Component, Input, OnInit,
  ComponentFactoryResolver, ViewContainerRef, ViewChild, ElementRef, Renderer2, AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  @Input() data: any;
  constructor(
    private el: ElementRef,
    private ren: Renderer2,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    console.log(this.data);
  }

}
