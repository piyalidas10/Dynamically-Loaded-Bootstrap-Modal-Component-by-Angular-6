import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data1 : string;
  data2 : string;


  ngOnInit() {
    this.data1="The content is displayed from Demo1 component";
    this.data2="The content is displayed from Demo2 component";
  }

}
