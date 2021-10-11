import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  showItem = false;
  showTitle = false;
  @Input() public item!: TodoItem;
  @Output() public childEvent = new EventEmitter();
  toggleShowItem(){
    this.showItem = !this.showItem;
  }
  delete(item:TodoItem){
    this.childEvent.emit(item);
  }
  ngOnChanges(){
    this.showTitle = true;
  }

  constructor() { 
  }
  ngOnInit(): void {
  }

}
class TodoItem{
  description!: string;
  time!:Date;
  TodoItem(description: string, time:Date){
    this.description = description;
    this.time = time;
  }
}
