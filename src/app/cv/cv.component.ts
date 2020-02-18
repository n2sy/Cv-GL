import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { ListepersonneService } from '../listepersonne.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listePersonne : Personne[] = [];
  selectedPersonne : Personne;
  
  constructor(private persservice : ListepersonneService) { }

  ngOnInit() {
    this.listePersonne = this.persservice.getPersonnes();

  }

  envoyerPers(p) {
    this.selectedPersonne = p;
  }

}
