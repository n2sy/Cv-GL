import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { RecrueService } from '../recrue.service';

@Component({
  selector: 'app-recrues',
  templateUrl: './recrues.component.html',
  styleUrls: ['./recrues.component.css']
})
export class RecruesComponent implements OnInit {
  Recrues : Personne[] = []
  constructor(private recrueservice : RecrueService) { }

  ngOnInit() {
    this.Recrues = this.recrueservice.getRecrues();
  }

}
