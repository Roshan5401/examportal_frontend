import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  //get current user
  public getcurrentuser(){
    return this.http.get(`${baseUrl}/api/auth/current-user`);
  }
  //generate token

  public generateToken(loginData:any)
  {
    return this.http.post(`${baseUrl}/api/auth/login`,loginData);
  }
  //login user this will set token in localstorage
  public loginUser(token:any){
    localStorage.setItem('token', token);
    return true;
  }
  //islogin or not
  public isLoggedIn(){
    let tokenStr=localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null)
      return false;
    else
      return true;
  }
  //logout : remove token from local storage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }
  //get token
  public getToken(){
    return localStorage.getItem('token');
  }
  //set userDetail
  public setUser(user:any){
    localStorage.setItem('user', user);
  }
  //get userDetail
  public getUser(){
    let userStr=localStorage.getItem('user');
    if(userStr!=null)
      return JSON.parse(userStr);
    else
    {
      this.logout();
      return null;
    }
    //return localStorage.setItem('user', JSON.stringify(user));
  }
}
