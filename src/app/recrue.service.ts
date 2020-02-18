import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class RecrueService {
  listeRecrues :Personne[] = []

  addRecrue(p: Personne) {
    if(this.listeRecrues.indexOf(p)<0) {
      this.listeRecrues.push(p)
    }
    else {
      alert('Cette personne a déjà été recruté');
    }
  }

  getRecrues() {
    return this.listeRecrues;
  }

  constructor() { }
}
