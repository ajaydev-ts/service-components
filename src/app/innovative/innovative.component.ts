import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innovative',
  templateUrl: './innovative.component.html',
  styleUrls: ['./innovative.component.css']
})
export class InnovativeComponent implements OnInit {
btnclick() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit(): void {
  }

 title="Gadgeon"
 btnclick1(){
  alert("hello from" + this.title)
 }
  

}
