import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import {Todo} from "../todo";
import * as _ from 'lodash';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos:Todo[];
  constructor(private todoService:TodoService) { }

  //get todos
  ngOnInit() {
    this.getTodos();
  }

  //call service for get todos
  getTodos(){
    this.todoService.getTodos().subscribe((todos)=>{
      this.todos = todos;
    });
  }
  //call service for delete todo
  deleteTodo(id){
    this.todoService.deleteTodo(id).subscribe((data)=>{
         alert('Todo deleted successfully');
         this.removeTodoFromList(id);
    },function (err) {
        alert('error while deleting todo(s)')
    })
  }
  // remove todo from todo list
  removeTodoFromList(id){
    _.remove(this.todos,(todo)=>{
        return todo.id === id;
    });
  }

}
