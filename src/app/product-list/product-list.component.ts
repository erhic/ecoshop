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
  {name:'Webcam',price:100, image:'https://www.camerasafrica.com/wp-content/uploads/2020/07/Untitled.jpg'},
  {name:'Mic',price:300, image:'https://www.camerasafrica.com/wp-content/uploads/2020/10/BOYA-BY-PM700-280.jpg'},
  {name:'Ear pods',price:200 ,image:'https://www.camerasafrica.com/wp-content/uploads/2022/09/Sony-WF-L900-LinkBuds-True-Wireless-Open-Earbuds-Dark-Gray-2-camerasafrica.jpg'},
  {name:'Guitar',price:400 , image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXcuUIaOspMRT42yzGBUYx8n_wxSN59mcDRl_tYNG1FMtsw7-4ajzUUpLFCrAEtxb-7VQ&usqp=CAU'},
  {name:'Xylophone',price:500,image:'https://m.media-amazon.com/images/I/61VdSDWyrNL._AC_UL320_.jpg'},
  {name:'Piano',price:600, image:'https://m.media-amazon.com/images/I/71Kq41O6MTL._AC_UL320_.jpg'},
]

/**  this method below is called in template view of this component , if it evaluates true, the css class from the styling file of this component in the added else removed if evaluation is false.
 * 
*/
getToPassCssFromHere(){
  return this.selectorProduct?this.selectorProduct.length>=1:undefined
 
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
