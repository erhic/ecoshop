import { Component, OnInit,Input,EventEmitter, Output,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {
@Input() name=""
@Output() bought= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  buy(){
   this.bought.emit(this.name) 
  }
}
