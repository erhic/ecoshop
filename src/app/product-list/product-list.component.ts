import { Component, OnInit } from '@angular/core';

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

selectorProduct='Microphone';
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
