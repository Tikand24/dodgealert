import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DataApiService } from '../services/data-api.service';
import { Summoner } from '../models/Summoner';

@Component({
  selector: 'app-multiinvocador',
  templateUrl: './multiinvocador.component.html',
  styleUrls: ['./multiinvocador.component.css']
})
export class MultiinvocadorComponent implements OnInit {
  public invocadores : Array<Summoner>;
 
  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private dataApi: DataApiService) {
  }
  
  ngOnInit() {
    this.getInvocador();
  }
  getInvocador(): void {
    this.dataApi.getMultiSummonerName(this.route.snapshot.paramMap.get('invocador')).subscribe((summoner: Array<Summoner>)  => {      
      console.log(summoner);
      this.invocadores=summoner['invocadores'];
      console.log(this.invocadores);
    });
  }

}
