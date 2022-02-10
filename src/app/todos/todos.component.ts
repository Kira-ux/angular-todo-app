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

  ngOnInit(): void {
    this.todos = [
      {
        content: '1st Todo',
        completed: false
      }
    ]
  }

}
