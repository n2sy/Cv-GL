import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from '../model/personne';
import { ListepersonneService } from '../listepersonne.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  pers : Personne;
  constructor(private activatedrouter : ActivatedRoute,
    private personneservice : ListepersonneService
    ) { }

  ngOnInit() {
    this.activatedrouter.params.subscribe(
      (p) => { this.pers = this.personneservice.getPersonneById(p['id']);
        console.log(this.pers);

      }
    )
  }

}
