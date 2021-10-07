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
  time:string = "";
  constructor(description: string, time:string){
    this.description = description;
    this.time = time;
  }
}
