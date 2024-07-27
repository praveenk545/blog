import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../models/user.interface';
import { Router } from '@angular/router';
import { Post } from '../../../models/post.interface';
import { Category } from '../../../models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private URL:string='http://localhost:3000';
private authSate$=new BehaviorSubject<boolean>(false);
private user:User={
  id:-1,
  email:'',
  firstName:'',
  lastName:'',
  profilePic:'',
  roles:'',
}
private user$=new BehaviorSubject<User>(this.user)
  constructor(private http:HttpClient, private router:Router) 
  { }

  getPost():Observable<Post[]>{
 return this.http.get<Post[]>(`${this.URL}/newpost`)
  }

  getPostBySlug(slug:string|null):Observable<Post>{
   return this.http.get<Post>(`${this.URL}/newpost/slug/${slug}`);
  }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.URL}/newcategory`)
  }
}
