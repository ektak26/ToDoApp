import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoAddComponent} from './todo-add/todo-add.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoEditComponent,
    TodoDetailComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
