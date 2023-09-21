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
@Input() product:Product|string='' 
@Output() bought= new EventEmitter<string>();
  constructor() { 
    console.log(`name is ${this.product} in the constructor`)
  }
   ngOnInit(): void {
    console.log(`name is ${this.product} in the onit lifecycle hook`)
  }


  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  buy(){this.product}
  }
