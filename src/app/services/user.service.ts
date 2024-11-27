import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  
  baseUrl = "http://localhost:9000";


  getUsers(){
    return this.httpClient.get(`${this.baseUrl}/users`)
  }

  addUser(data:any){
    return this.httpClient.post(`${this.baseUrl}/users`, data)
  }

  editUser(data:any){
    return this.httpClient.put(`${this.baseUrl}/users/${data.id}`, data)
  }

  getUserById(id:number){
    return this.httpClient.get<any>(`${this.baseUrl}/users/${id}`)
  }

  deleteUser(user:any){
    return this.httpClient.delete(`${this.baseUrl}/users/${user.id}`)
  }
}
