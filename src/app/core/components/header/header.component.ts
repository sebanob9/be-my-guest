import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //private isLogged: boolean = false;

  constructor(private userservice: UserService) { }

  ngOnInit() {
    // this.isLogged = localStorage.getItem("token") !== null;
  }
}


