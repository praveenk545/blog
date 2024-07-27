import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from '../../../../projects/models/category.interface';
import { ApiService } from '../../../../projects/tools/src/lib/api.service';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit,OnDestroy {
  constructor(private apiService:ApiService,private router:Router,private route:ActivatedRoute){}
  cats:Category[]=[];
  sub$=new Subject();
  ngOnInit(): void {

    this.apiService.getCategories().pipe(
      takeUntil(this.sub$)
    ).subscribe((res:any)=>{
       
        this.cats=res.data.filter((c:Category)=>c.title!=='Uncategorized');
        // this.cats=res.data.filter((c:Category)=>c.title==='Uncategorized');
    
     })
  }
  ngOnDestroy(): void {
    this.sub$.next(this.cats);
    this.sub$.complete()
  }
}
