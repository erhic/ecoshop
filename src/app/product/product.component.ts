import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 product:string[]=['Chevrolet', 'Ford', 'General Motors'];


  constructor() { }

  ngOnInit(): void {
    console.log('testing lifecycle')
  }

}
