import {Component} from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  newTodo: Todo = new Todo();
  newSub: Todo[] = [];

  constructor(private todoDataService: TodoDataService) {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
    this.newSub.push(new Todo());
  }

  addSub(todo, index) {
    this.todoDataService.addSub(todo, this.newSub[index]);
    this.newSub[index] = new Todo();
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

removeSub(todo, sub) {
    this.todoDataService.deleteSub(todo, sub);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
