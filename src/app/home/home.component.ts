import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private userService: UserService, private router : Router) { }
  allUsers:any;

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe((data: any) => {
      console.log(data);

      this.allUsers = data
    })
  }

  editUser(data:any){
    this.router.navigate([`edit/${data.id}`]);
    console.log(data)
  }


  addUser(){
    this.router.navigate(["/add"])
  }

  deleteUser(user:any){
    debugger
    this.userService.deleteUser(user).subscribe(()=>
      (this.allUsers =this.allUsers.filter((t:any)=> t.id !== user.id))
    )
  }

  
}
