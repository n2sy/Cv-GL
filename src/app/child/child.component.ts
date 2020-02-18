import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() color: string;
  @Output() sendColor = new EventEmitter();
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToMiniWord() {
    this.router.navigate(['word']);
  }

  toParent() {
    this.sendColor.emit(this.color);
  }

}
