import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  @Input() values: any;
  
  constructor() {

  }

  ngOnInit(): void {}
}
