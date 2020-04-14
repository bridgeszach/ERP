import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';
  myName = "Zach Bridges";

  constructor() {
    console.log('Hello, Im the constructor');

    var name: string = "Zach Bridges";
    var age = 35;
    var found = false;
    var list = [];

    this.hello(this.title);
    this.hello(9);

  }

  hello(name) {
    console.log(name);
  }

  something() {
    console.log('Button clicked!');
    this.title = "Text has changed!!"
  }

}
