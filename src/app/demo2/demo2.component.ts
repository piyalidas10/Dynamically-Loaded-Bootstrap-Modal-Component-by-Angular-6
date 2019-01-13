import {
  Component, Input, OnInit,
  ComponentFactoryResolver, ViewContainerRef, ViewChild, ElementRef, Renderer2, AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

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
