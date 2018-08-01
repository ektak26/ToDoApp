import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todo";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoURL = 'http://localhost:3000/todos';
  constructor(private  http:HttpClient) { }


  addTodo(todo:Todo){
     return this.http.post(this.todoURL,todo);
  }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todoURL);
  }

  getTodo(id:Number):Observable<Todo>{
     return this.http.get<Todo>(this.todoURL+'/'+id);
  }

  updateTodo(id:Number,todo:Todo):Observable<Todo>{
    return this.http.put<Todo>(this.todoURL+'/'+id,todo);
  }

  deleteTodo(id:Number){
    return this.http.delete(this.todoURL+'/'+id);
  }
}
