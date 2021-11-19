import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title: string = 'Counter App';
  now = new Date();
  currYear = this.now.getFullYear();
  count:number = 0;

  HandleIncrease = () => {
    this.count = this.count+1;
  };
  HandleDecrease = () => {
    this.count = this.count-1;
  };
  HandleReset = () => {
    this.count = 0;
  }
  HandleSqure = () => {
    this.count = this.count*2;
  }
}
