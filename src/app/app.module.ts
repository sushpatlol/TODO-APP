import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todolist-layout/todo-item/todo-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { TodolistLayoutComponent } from './todolist-layout/todolist-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    AddItemComponent,
    TodolistLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
