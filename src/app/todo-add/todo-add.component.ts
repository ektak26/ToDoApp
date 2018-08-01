import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "../todo.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  todo = new Todo();
  todoForm: FormGroup;

  constructor(private formBuilder : FormBuilder,private todoService:TodoService,private  router:Router) {
      this.createForm();
  }

  ngOnInit() {
  }

  // create add todo form
  createForm(){
    this.todoForm = this.formBuilder.group({
       title : ['',Validators.required],
       isCompleted:[false]
    });
  }

  // call service for add todo
  addTodo(){
     this.todoService.addTodo(this.todo).subscribe(()=>{
        alert('Todo added successfully');
        this.router.navigate(['dashboard']) // redirect to dashboard page
     },function () {
         alert('error while adding todo');
     });
  }
}
