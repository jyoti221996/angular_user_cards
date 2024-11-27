import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  userForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl('Male'),
    occuption: new FormControl(''),
    mail: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),
    img: new FormControl(''),
  })
  fnames: any;
  lnames: any;

  constructor(private userService : UserService, private router : Router){}


  onSubmit(){
    this.userService.addUser(this.userForm.value).subscribe((data:any)=>{
      debugger
      console.log(data);
      this.router.navigate(["/"])
    })
  }

  cancel(){
    this.router.navigate(["/"])
  }


  generateInitialsImage(firstName: string, lastName: string): string {
    // Generate initials from the name
    const initials = (firstName[0] || '').toUpperCase() + (lastName[0] || '').toUpperCase();
  
    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 100; // Set width of the canvas
    canvas.height = 100; // Set height of the canvas
    const context = canvas.getContext('2d');
  
    if (context) {
      // Draw background color
      context.fillStyle = '#4a90e2'; // Set a background color
      context.fillRect(0, 0, canvas.width, canvas.height);
  
      // Draw initials
      context.font = '40px Arial';
      context.fillStyle = '#ffffff'; // White text color
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(initials, canvas.width / 2, canvas.height / 2);
    }
  
    // Convert canvas to data URL (image)
    return canvas.toDataURL('image/png');
  }
  
}



