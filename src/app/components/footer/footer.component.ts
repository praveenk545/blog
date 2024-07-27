import { Component, OnInit } from '@angular/core';
import moment from 'moment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
 year!:any;
 constructor(){}
 ngOnInit(): void {
   this.year=moment().year()
 }
}
