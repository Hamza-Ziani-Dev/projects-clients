import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  //parent to child
  @Input() title : any;
  @Input() items : any[] =[]
  //child select to parent products
  @Output() selectedValue = new EventEmitter()

  constructor(){}

  ngOnInit(): void {
  }

  onChangeData($event:any){
     this.selectedValue.emit(event)
  }

}
