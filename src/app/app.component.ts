import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataObj1: any;
  dataObj2: any;


  ngOnInit() {
    this.dataObj1 = {
        heading: 'Modal Heading One',
        content: 'Lorem Ipsum is simply dummy text of the printing and <a href="#">typesetting industry</a>.'
    };
    this.dataObj2 = {
      heading: 'Modal Heading Two',
      content: 'Lorem Ipsum is simply dummy text of the printing and <a href="#">typesetting industry</a>.'
  };
  }

  setFocusBtn(evt) {
    console.log(evt);
  }

}
