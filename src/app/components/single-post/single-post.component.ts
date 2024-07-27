import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../../projects/models/post.interface';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../projects/tools/src/lib/api.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent implements OnInit {
  //@ts-ignore
  post:Observable<Post>;
   constructor(private route:ActivatedRoute,private apiService:ApiService){

   }
   ngOnInit(): void {
  //  this.apiService.getPost().subscribe((res:any)=>{
  //   this.post=res;
  //  })
 console.log(this.post,"post values")
     this.route.paramMap.subscribe(params=>{
        const slug:string|null=params.get('slug')
        this.post=this.apiService.getPostBySlug(slug);
     })
   }
}
