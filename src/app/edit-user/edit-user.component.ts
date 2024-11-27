import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { subscribe } from 'diagnostics_channel';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {
  userForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    occuption: new FormControl(''),
    mail: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),
    img: new FormControl(''),
  })

  editId:any;
  constructor(private userService : UserService, private router: ActivatedRoute, private route : Router){}

  ngOnInit(){
    this.editId = this.router.snapshot.paramMap.get('id');
    console.log('id', this.editId)
    this.editUser();
  }

  editUser() {
    this.userService.getUserById(this.editId).subscribe((user)=>{
      this.userForm.patchValue(user)
      // this.userForm.patchValue({
      //   fname:user.fname,
      //   lname:user.lname,
      //   age:user.age,
      //   gender:user.gender,
      //   occuption:user.occuption,
      //   mail:user.mail,
      //   phone:user.phone,
      //   city:user.city,
      //   img:user.img,
      // })
    })
  }

  updateUser() {
    const userData = {
      id:this.editId,
      ...this.userForm.value
    }

    this.userService.editUser(userData).subscribe(()=>{
      this.route.navigate(['/']);
    })
  }

  cancel(){
    this.route.navigate(["/"])
  }
}
