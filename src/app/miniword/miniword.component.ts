import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniword',
  templateUrl: './miniword.component.html',
  styleUrls: ['./miniword.component.css']
})
export class MiniwordComponent implements OnInit {
  bgColor: string = 'white';
  color: string = 'black';
  font : string = 'Arial';
  size : string = '12px';
  listeFonts : string[] = ['Arial', 'Garamond', 'Impact', 'Times New Roman'];
  
  constructor() { }

  ngOnInit() {
  }

  changeSize(s) {
    this.size = s.value+'px';
  }

}
