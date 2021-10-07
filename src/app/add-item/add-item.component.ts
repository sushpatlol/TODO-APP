import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  temp!:TodoItem;
  @Output() public childEvent = new EventEmitter();
  
  constructor() { }
  ngOnInit(): void {
  }

  submitToDoItem(f: NgForm){
    this.temp = new TodoItem(f.value.todoDescription, f.value.localTime);
    this.childEvent.emit(this.temp);
    console.log("FORM DATA");
    console.log(f.value);
    f.resetForm();
  }
}

class TodoItem{
  description!: string;
  time!:string;
  constructor(description: string, time:string){
    this.description = description;
    this.time = time;
  }
}
