import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css']
})
export class DemoPipeComponent implements OnInit {
// today: any;

  constructor() { }

  ngOnInit(): void {
  }

// title="Banglore";
// today=Date();
user={
  id:100,
  name:"steve",
  DOB:'10-10-2020',
  salary:35000
}
}
