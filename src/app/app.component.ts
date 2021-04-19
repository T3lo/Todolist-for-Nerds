import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  constructor() { }
  ngOnInit() {
    console.log("App loaded");
  }
  loginUser() {
    console.log("Checking login");
  }
}
