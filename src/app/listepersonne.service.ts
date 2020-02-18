import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class ListepersonneService {
  listePersonne = [
    new Personne(1, "nidhal", "jelassi", 35, "Enseignant", "nidhal.jpg"),
    new Personne(2, "homer", "simpson", 50, "Développeur", "homer.jpg"),
    new Personne(3, "marge", "simpson", 43, "Clown")
    
  ];

  getPersonneById(i : number) {
    
    return this.listePersonne.find(function (p) { return p.id == i});
  }

  getPersonnes() {
    return this.listePersonne;
  }
  constructor() { }
}
