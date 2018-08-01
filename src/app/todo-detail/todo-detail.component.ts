import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {ActivatedRoute} from "@angular/router";
import {TodoService} from "../todo.service";
import  * as _ from 'lodash';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo:Todo;
  id:Number;
  constructor(private activatedRoute:ActivatedRoute,private  todoService:TodoService) { }

  //
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getTodoDetails(this.id);
  }

  // call api for getting todo details
  getTodoDetails(id){
      this.todoService.getTodo(id).subscribe((todo)=>{
        this.todo = todo;
      });
  }

  // on update todo call service for update
  onUpdateTodo($event){
    this.todoService.updateTodo(this.id,$event).subscribe((todo)=>{
        alert('Todo updated successfully');
        this.todo = _.clone($event);
    },function () {
         alert('error in updating todo');
    });
  }

}
