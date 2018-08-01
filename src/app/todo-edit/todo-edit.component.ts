import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as _ from 'lodash';
import {Todo} from "../todo";
import {FormBuilder, FormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  @Input() todo;
  @Output() onUpdateTodo = new EventEmitter<Todo>();
  todoObj:Todo;
  todoForm:FormsModule;
  constructor(private formBuilder : FormBuilder) {
      this.createForm();
  }
  //create form for update todo
  createForm(){
    this.todoForm = this.formBuilder.group({
      title : [Validators.required],
      isCompleted:[false]
    });
  }

  //initialize todo
  ngOnInit() {
    this.todoObj = _.clone(this.todo); // create copy of todo
  }
  //emit update event when todo updated
  updateTodo(){
    this.onUpdateTodo.emit(this.todoObj);
  }

}
