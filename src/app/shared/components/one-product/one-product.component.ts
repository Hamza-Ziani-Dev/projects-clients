import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss']
})
export class OneProductComponent {
  
  @Input() product :any = {};
  @Output() item = new EventEmitter()
  showButton :boolean = false;
  amount : number = 0;

  constructor(){}

  ngOnInit(): void {
  }




add(){
   this.item.emit({item:this.product, quantity:this.amount});
}

}
