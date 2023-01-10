import { Component } from '@angular/core';


interface ContactForm {
  "name": string;
  "dni": number;
  "estadocivil": string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'actividad14';

  model = {
    name: "",
    dni: "",
    estadocivil: "",
  }

  valores = '';

  onSubmit(values: any): void {
    console.log('Form values:', values );
    this.valores = values;
  }
}

