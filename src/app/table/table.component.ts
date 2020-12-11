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
  constructor(private restClient:RestClientService) { }

  ngOnInit(): void {
    this.restClient.getUsers().subscribe(response => {
      this.users = response;
    })
  }

}
