import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private login:LoginService,private snack: MatSnackBar){}
  ngOnInit(): void {}
  public loginData={
    username:'',
    password:'',
  }
  formSubmit(){
    console.log("logins button clicked")
    console.log(this.loginData);
    if(this.loginData.username=='' || this.loginData.username==null || this.loginData.username.trim()=='')
      this.snack.open("Username is required","",{
        duration:2000,
        verticalPosition:"top",
        horizontalPosition:"right"

      });
    else{
      //adduser function
      this.login.generateToken(this.loginData).subscribe(
        (data:any)=>{
          console.log("success");
          console.log(data);
          //login
          this.login.loginUser(data.token);
          this.login.getcurrentuser().subscribe(
            (data:any)=>{
              console.log(data);
              this.login.setUser(data.username);
            },
            (error)=>{
              console.log("error");
              console.log(error);
            }
          );
        },
        (error)=>{
          console.log("error");
          console.log(error);
        }
      )
    } 
  }
}
