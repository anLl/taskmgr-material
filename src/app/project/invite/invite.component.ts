import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items=[
    {
      id:1,
      name:'安睿'
    },
    {
      id:2,
      name:'张阳'
    },
    {
      id:3,
      name:'张智清'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  displayUser(user:{id:number,name:string}){
    return user ? user.name : '';
  }

}
