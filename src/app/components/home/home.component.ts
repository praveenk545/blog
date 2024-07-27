import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../../../projects/tools/src/lib/api.service';
import { Post } from '../../../../projects/models/post.interface';
import { Subject, Subscription, map, takeUntil } from 'rxjs';
import { Category } from '../../../../projects/models/category.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{
  // private http:HttpClient,
  post:Post[]=[]
  sub$=new Subject();
  constructor(private apiService:ApiService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.sub$)).subscribe(params=>{
      const catsTitle=params.get('title');
      if(this.router.url===`/post/category/${catsTitle}`){
        this.apiService.getPost().pipe(map((posts)=>posts.filter((p)=>p.category.title===catsTitle)),takeUntil(this.sub$)).subscribe(posts=>this.post=posts)
      }else{
        this.apiService.getPost().pipe(
          takeUntil(this.sub$)
        ).subscribe(res=>this.post=res);
      }
    })

   

    // this.apiService.getCategories().pipe(
    //   takeUntil(this.sub$)
    // ).subscribe((res:any)=>{
       
    //     this.cats=res.data.filter((c:Category)=>c.title!=='Uncategorized');
    //     // this.cats=res.data.filter((c:Category)=>c.title==='Uncategorized');
    
    //  })

  }
  ngOnDestroy() {
    this.sub$.next(this.post);
    this.sub$.complete()
  }

}
