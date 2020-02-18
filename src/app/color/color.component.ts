import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color : string = "yellow";
  hd : boolean = true;

  @Input() bgcolor : string = "green";
  @Input() txtcolor : string = "lightblue";
  @Input() font : string = "Arial";

  c1 : boolean = true;
  c2 : boolean = false;
  c3 : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  SwipeHd() {
    this.hd = !this.hd;
    
  }

  ModifierColor(input) {
    this.color = input.value;
  }

  showAlert(evt) {
    alert('Couleur reçu par le parent '+evt);
  }

  changeClass() {
    if(this.c1) {
      this.c1 = false;
      this.c2 = true;
      console.log(this.c1, this.c2, this.c3);
    }
    else if(this.c2) {
      this.c2 = false;
      this.c3 = true;
      console.log(this.c1, this.c2, this.c3);

    }
    else {
      this.c3 = false;
      this.c1 = true;
      console.log(this.c1, this.c2, this.c3);

    }
  }

}
