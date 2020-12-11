import { Component, OnInit } from '@angular/core';
import { User } from '../common/user';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users:User[] = [];
  filteredUsers:User[] = [];
  constructor(private restClient:RestClientService) { }

  ngOnInit(): void {
    this.restClient.getUsers().subscribe(response => {
      this.users = response;
      this.filteredUsers = this.users;
    })
  }

  updateTable() {

  }

  filter(selUsers: string[]): void {
    console.log(selUsers)
    this.filteredUsers = new Array<User>();
    for (const user of this.users) {
      if (selUsers.includes(user.name) || selUsers.includes(user.email) || selUsers.includes(user.address)) {//заготовка алгоритма фильтрации
        this.filteredUsers.push(user);
      }
    }
  }
}
