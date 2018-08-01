import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TodoAddComponent} from "./todo-add/todo-add.component";
import {TodoEditComponent} from "./todo-edit/todo-edit.component";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";


const appRoutes : Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'add',component:TodoAddComponent},
  {path:'edit/:id',component:TodoEditComponent},
  {path:'detail/:id',component:TodoDetailComponent}
  ];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
