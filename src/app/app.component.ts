import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  newItem!:TodoItem;
  public sendNewItem!:TodoItem;
}
class TodoItem{
  description: string = "";
  time!:Date;
  constructor(description: string, time:Date){
    this.description = description;
    this.time = time;
  }
}
