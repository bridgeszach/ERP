import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/models/list';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  model = new List();
  alertVisible = false;
  allList: List[] = [];
  checkBox = false;

  constructor(private data: DataService) {
    this.allList = data.todoList;
   }

  ngOnInit() {
  }

  save() {
    console.log('saving', this.model);

    this.data.saveList(this.model);
    this.model = new List();
    this.alertVisible = true;
    setTimeout(() => this.alertVisible = false, 2500)
  }

  done() {
    this.checkBox = true;
    setTimeout(() => this.checkBox = false, 3500)
  }
}