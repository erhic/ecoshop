import { Component, OnInit,Input,EventEmitter, Output,ViewEncapsulation,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
@Input() name=""
@Output() bought= new EventEmitter<string>();
  constructor() { 
    console.log(`name is ${this.name} in the constructor`)
  }

  ngOnInit(): void {
    console.log(`name is ${this.name} in the constructor`)
  }
  buy(){
   this.bought.emit(this.name) 
  }
  get productName():string{
    console.log(`get ${this.name}`)
    return this.name

  }
}
