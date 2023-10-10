import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService:UserService,private snack: MatSnackBar){}
  ngOnInit(): void {}
  public user={
    username:'',
    password:'',
    firstname:'',
    middlename:'',
    lastname:'',
    email:'',
    phone:''
  }
  formSubmit(){
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null || this.user.username.trim()=='')
      this.snack.open("Username is required","",{
        duration:2000,
        verticalPosition:"top",
        horizontalPosition:"right"

      });
    else{
      //adduser function
      this.userService.addUser(this.user).subscribe(
        (data)=>{
          console.log(data);
          alert("submitted");
        },
        (error)=>{
          console.log(error);
          alert("Something went wrong");
        }
      );
    } 
  }
}
