import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplifyiot',
  templateUrl: './simplifyiot.component.html',
  styleUrls: ['./simplifyiot.component.css']
})
export class SimplifyiotComponent implements OnInit {
btnclick() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit(): void {
  }
  title="Gadgeon"
  btnclick2(){
   alert("hello from" + this.title)
  }

}
