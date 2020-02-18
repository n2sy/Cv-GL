import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../model/personne';
import { RecrueService } from '../recrue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() selectedPers : Personne;
  constructor(private recrueservice : RecrueService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  RecruterPersonne() {
    this.recrueservice.addRecrue(this.selectedPers);
  }

  plusInfos() {
    this.router.navigate(['cv', this.selectedPers.id])
  }

}
