import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todolist-layout',
  templateUrl: './todolist-layout.component.html',
  styleUrls: ['./todolist-layout.component.scss']
})
export class TodolistLayoutComponent implements OnInit {
  TodoItems: TodoItem[] = [];
  @Input() public sendNewItem: any;

  constructor() { }
  ngOnChanges(){
    this.updateTodoItems();
    console.log("Number of todo items "+this.TodoItems.length);
  }
  updateTodoItems(){ 
    if(this.sendNewItem != undefined){
      this.TodoItems.push(this.sendNewItem);
    }
  }
  delete(item:TodoItem){
    this.TodoItems = this.TodoItems.filter(obj => obj !== item);
  }
  ngOnInit(): void {
  }
}
class TodoItem{
  description!: string;
  time!:string;
  TodoItem(description: string, time:string){
    this.description = description;
    this.time = time;
  }
}
