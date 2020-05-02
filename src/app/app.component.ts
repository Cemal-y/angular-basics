import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'an angular demo program';
  defaultMessage = 'please write a letter';
  hide = 'a test';
  hides = ['a', 'b', 'c'];
  inputText: string;
  inputText2: string;
  price = 25;
  date = '12-20-20';
  pageTitle: any;
  getInput(inputText: any){
    this.inputText2 = inputText.target.value;
    console.log(this.inputText2);
  }


}
