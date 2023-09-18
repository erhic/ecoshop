import { Component, OnInit,Input,EventEmitter, Output,ViewEncapsulation,ChangeDetectionStrategy ,OnChanges, SimpleChanges} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnChanges {
@Input() product:Product|undefined
@Output() bought= new EventEmitter<string>();
  constructor() { 
    console.log(`name is ${this.name} in the constructor`)
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log(`name is ${this.name} in the onit lifecycle hook`)
  }
  buy(){
   this.bought.emit(this.name) 
  }
  get productName():string{
    console.log(`get ${this.name}`)
    return this.name

  }
}
