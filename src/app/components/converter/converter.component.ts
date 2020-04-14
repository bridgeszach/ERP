import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  farenheit = 0.0;
  celcius = 0.0;
  constructor() { }

  ngOnInit(): void {
  }

  convertToC() {
    // (100F -32) x 5/9
    this.celcius = (this.farenheit - 32) * 5 / 9;
  }

  convertToF() {
    // (40C x 9/5) + 32
    this.farenheit = (this.celcius * 9 / 5) + 32;
  }

}
