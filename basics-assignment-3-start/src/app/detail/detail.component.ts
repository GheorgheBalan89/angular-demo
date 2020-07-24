import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor() { }
  current = new Date();

  aClicks = [];
  count = 0;
  isVisible = false;
  ngOnInit(): void {
  }

  onToggleDisplay(any){
   
    this.aClicks.push({"timestamp":this.current.toTimeString(), "clickNo": this.count++});
    this.isVisible = !this.isVisible;
  }
 
}
