import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { List } from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userList: User[] = [];
  todoList: List[] = [];

  constructor() { 
    var admin = new User()
    admin.firstName = "Admin";
    admin.lastName = "user";
    admin.userName = "Admin";
    admin.password = "123";

    this.userList.push(admin);
  }

  saveUser(user) {
    this.userList.push(user);
  }

  saveList(list) {
    this.todoList.push(list);
  }
}