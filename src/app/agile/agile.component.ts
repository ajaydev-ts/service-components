import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Myservices } from '../service/info-services';
@Component({
  selector: 'app-agile',
  templateUrl: './agile.component.html',
  styleUrls: ['./agile.component.css']
})
export class AgileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  title="GadgEon";
  
  btnclick()
  {
    // const service =new Myservices();
    const service=new Myservices;
    service.onclickbtn(this.title)
  }

}
