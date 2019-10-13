import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selection: string;

  selectedType(type: string){
    this.selection= type;
    console.log(type);
  }
}
