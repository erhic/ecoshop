import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
currentStyles={
  color:'greenyellow',
  width:'200px',
  fontWeight:'bold',
  fontSize:'1.5rem',
  backgroundColor:'grey'
}

selectorProduct=[
  {name:'Webcam',price:100},
  {name:'Mic',price:300},
  {name:'Ear pods',price:200},
  {name:'Guitar',price:400},
  {name:'Xolophone',price:500},
  {name:'Piano',price:600},
]

getToPassCssFromHere(){
  return this.selectorProduct?this.selectorProduct.length>=19:undefined
 
}

myProd(prods:string):string{
  return prods
}
constructor() { }

  ngOnInit(): void {
  }
onClick(){
  console.log('I was clicked on')
  return ''+Math.random()*100
}
onBuy(name:string){
  window.alert(`You bought ${name}`)
}


}
