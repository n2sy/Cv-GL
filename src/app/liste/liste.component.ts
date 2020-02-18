import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() listePersonne : Personne[] = [];
  @Output() sendPers = new EventEmitter<Personne>();
  constructor() { }

  ngOnInit() {
  }

  sendPersonne(pers) {
    this.sendPers.emit(pers)
  }

}
