import { Component, OnInit } from '@angular/core';
import { Todo } from './../mods/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  todos:Todo[] = [];

  inputTodo:string ="";

  ngOnInit(): void {
    this.todos = [
      {
        content: '1st Todo',
        completed: true
      }
    ]
  }

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i != id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })

    this.inputTodo = "";
  }

}
